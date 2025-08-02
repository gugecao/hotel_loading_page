import createIntlMiddleware from 'next-intl/middleware'
import { NextRequest } from 'next/server'
import { isFromGoogleSearch } from '@/utils/referrerCheck'

const intlMiddleware = createIntlMiddleware({
  locales: ['zh', 'en', 'fr', 'es', 'it', 'de', 'tr', 'ja', 'th'],
  defaultLocale: 'zh'
})

export default function middleware(request: NextRequest) {
  // 检查是否来自Google搜索
  const referer = request.headers.get('referer')
  const isFromGoogle = isFromGoogleSearch(referer)
  
  console.log('Middleware - Referer:', referer) // 调试日志
  console.log('Middleware - Is from Google:', isFromGoogle) // 调试日志
  
  // 运行国际化中间件
  const response = intlMiddleware(request)
  
  // 如果来自Google，设置一个cookie标记
  if (isFromGoogle && response) {
    response.cookies.set('google_source', 'true', {
      maxAge: 5 * 60, // 5分钟过期
      httpOnly: false, // 允许客户端JavaScript访问
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax'
    })
    console.log('Set google_source cookie') // 调试日志
  }
  
  return response
}

export const config = {
  matcher: [
    // 匹配所有路径，但排除:
    // - api 路由
    // - _next/static (静态文件)
    // - _next/image (图片优化)
    // - favicon.ico
    // - 图片文件 (.png, .jpg, .jpeg, .gif, .webp, .svg)
    // - 其他静态资源 (.ico, .css, .js)
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|jpeg|gif|webp|svg|ico|css|js)$).*)'
  ]
}