import createIntlMiddleware from 'next-intl/middleware'

export default createIntlMiddleware({
  locales: ['zh', 'en', 'fr', 'es', 'it', 'de', 'tr', 'ja', 'th'],
  defaultLocale: 'zh'
})

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
}