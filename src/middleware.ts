import createIntlMiddleware from 'next-intl/middleware'

export default createIntlMiddleware({
  locales: ['zh', 'en', 'fr', 'es', 'it', 'de', 'tr', 'ja', 'th'],
  defaultLocale: 'zh'
})

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