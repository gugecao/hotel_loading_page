import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://locusstay.com'

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/',           // 不索引API路由
        '/_next/',         // 不索引Next.js内部文件
        '/admin/',         // 不索引管理页面（如果有的话）
        '/private/',       // 不索引私有页面（如果有的话）
      ],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}