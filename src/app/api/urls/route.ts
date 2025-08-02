import { NextRequest, NextResponse } from 'next/server';
import { sanitizePath } from '@/utils/urlValidator';
import { readUrlsFromFile, updateUrlFiles } from '@/utils/urlFileManager';
import { performSecurityCheck } from '@/utils/urlSecurityChecker';
import { shuffleArray } from '@/utils/arrayUtils';
import { FILE_PATHS, LOG_CONFIG, validateConfig } from '@/config/urlChecker';
import { getCurrentSiteUrl } from '@/utils/urlHelper';

export async function GET(request: NextRequest) {
  // 验证配置
  const configValidation = validateConfig();
  if (!configValidation.isValid) {
    console.error('Missing required environment variables:', configValidation.missingVars);
    if (LOG_CONFIG.enableErrorLogs) {
      console.error('Please check your .env.local or .env.production file');
    }
  }

  // 获取客户端请求的目标路径
  const { searchParams } = new URL(request.url);
  const targetPath = searchParams.get('path') ? sanitizePath(searchParams.get('path') as string) : '/';
  
  // 创建模拟的NextApiRequest对象用于getCurrentSiteUrl
  const mockReq = {
    headers: Object.fromEntries(request.headers.entries()),
  } as { headers: Record<string, string> };
  
  // 动态获取当前网站的根网址作为回退URL
  const fallbackUrl = getCurrentSiteUrl(mockReq);
  
  try {
    // 直接使用配置中的文件路径
    const filePath = FILE_PATHS.urlList;
    const redFilePath = FILE_PATHS.redList;

    if (LOG_CONFIG.enableDetailedLogs) {
      console.log(`Reading from: ${filePath}`);
    } else {
      console.log(`Reading URL file`);
    }
    
    // 读取 URL 列表
    const urls = readUrlsFromFile(filePath);
    
    // 调试日志：显示读取到的URL
    console.log('Read URLs from file:', urls);

    if (urls.length === 0) {
      // 如果没有有效URL，重定向到当前网站
      return NextResponse.redirect(`${fallbackUrl}${targetPath}`, 301);
    }

    // 收集不安全的 URLs
    const unsafeUrls: string[] = [];

    // 随机打乱 URL 列表
    const shuffled = shuffleArray(urls);

    // 尝试查找安全可用的 URL
    for (const url of shuffled) {
      if (LOG_CONFIG.enableDetailedLogs) {
        console.log(`Checking URL: ${url}`);
      }
      
      // 执行完整的安全检查
      const securityResult = await performSecurityCheck(url);

      if (!securityResult.isSecure) {
        unsafeUrls.push(url);
        continue;
      }

      // 异步处理不安全 URLs，不阻塞响应
      if (unsafeUrls.length > 0) {
        Promise.allSettled([
          updateUrlFiles(filePath, redFilePath, unsafeUrls, urls)
        ]).catch(err => {
          if (LOG_CONFIG.enableErrorLogs) {
            console.error('Error in background processing:', err);
          }
        });
      }

      // 如果 URL 安全且可用，301重定向
      return NextResponse.redirect(`${url}${targetPath}`, 301);
    }

    // 如果没有找到可用的 URL，重定向到当前网站
    return NextResponse.redirect(`${fallbackUrl}${targetPath}`, 301);
    
  } catch (error) {
    // 使用更安全的错误日志
    if (LOG_CONFIG.enableDetailedLogs) {
      console.error('Error processing URLs:', error);
    } else if (LOG_CONFIG.enableErrorLogs) {
      console.error('Error in URL processing');
    }
    
    // 出错时重定向到当前网站
    return NextResponse.redirect(`${fallbackUrl}${targetPath}`, 301);
  }
}

// 只允许GET请求
export async function POST() {
  return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
}

export async function PUT() {
  return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
}

export async function DELETE() {
  return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
}