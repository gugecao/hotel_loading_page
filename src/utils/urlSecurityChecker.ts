import { checkGoogleRedList } from './googleRedListChecker';
import { checkUrlAvailability } from './urlAvailabilityChecker';
import type { SecurityCheckResult } from '@/types/api';
import { LOG_CONFIG } from '@/config/urlChecker';

/**
 * URL 安全检查器
 * 整合所有安全检查功能
 */

/**
 * 执行完整的 URL 安全检查
 * @param url 要检查的 URL
 * @returns Promise<SecurityCheckResult> 检查结果
 */
export async function performSecurityCheck(url: string): Promise<SecurityCheckResult> {
  const result: SecurityCheckResult = {
    isSecure: false,
    isSafeBrowsingSecure: false,
    isGoogleSecure: false,
    isAvailable: false,
    url
  };

  try {
    // 1. 谷歌红名单检查
    result.isGoogleSecure = await checkGoogleRedList(url);
    
    if (LOG_CONFIG.enableDetailedLogs) {
      console.log(`URL: ${url} Google red list status: ${result.isGoogleSecure}`);
    }

    // 2. URL 可用性检查
    result.isAvailable = await checkUrlAvailability(url);

    if (LOG_CONFIG.enableDetailedLogs) {
      console.log(`URL: ${url} availability status: ${result.isAvailable}`);
    }

    // 综合判断是否安全 (移除SafeBrowsing检查)
    result.isSecure = result.isGoogleSecure && result.isAvailable;
    result.isSafeBrowsingSecure = true; // 不再使用SafeBrowsing检查

    if (LOG_CONFIG.enableDetailedLogs) {
      console.log(`URL: ${url} final security status: ${result.isSecure}`);
    }

    return result;
  } catch (error) {
    if (LOG_CONFIG.enableErrorLogs) {
      console.error(`Security check failed for ${url}:`, error);
    }
    return result;
  }
} 