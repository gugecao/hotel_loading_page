import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://locusstay.com'
  const currentDate = new Date().toISOString()
  
  // 支持的语言
  const languages = ['zh', 'en', 'fr', 'es', 'it', 'de', 'tr', 'ja', 'th']
  
  const sitemapEntries: MetadataRoute.Sitemap = []

  // 为每种语言生成sitemap条目
  languages.forEach(lang => {
    // 首页
    sitemapEntries.push({
      url: `${baseUrl}/${lang}`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1,
    })

    // About页面
    sitemapEntries.push({
      url: `${baseUrl}/${lang}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    })

    // Safe Redirect页面
    sitemapEntries.push({
      url: `${baseUrl}/${lang}/safe-redirect`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    })
  })

  // 根目录重定向到默认语言
  sitemapEntries.push({
    url: baseUrl,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 1,
  })

  return sitemapEntries
}