import { getRequestConfig } from 'next-intl/server'

// 支持的语言列表
export const locales = [
  'zh', 'en', 'fr', 'es', 'it', 'de', 'tr', 'ja', 'th'
] as const

export type Locale = (typeof locales)[number]

export default getRequestConfig(async ({ requestLocale }) => {
  // 获取locale，如果没有则使用默认值
  let locale = await requestLocale;
  
  // 如果locale无效，使用默认语言
  if (!locale || !locales.includes(locale as any)) {
    locale = 'zh';
  }
  
  return {
    locale,
    messages: (await import(`../locales/${locale}.json`)).default
  }
})