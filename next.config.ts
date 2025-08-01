import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts')

const nextConfig: NextConfig = {
  // 启用严格模式
  reactStrictMode: true,
  
  // 压缩配置
  compress: true,
  
  // 禁用图片优化，解决生产环境图片访问问题
  images: {
    unoptimized: true
  },
  
  // 输出独立模式，提升生产性能
  output: 'standalone',
  
  // 生成站点地图
  generateBuildId: async () => {
    return 'hotel-distribution-platform-v1'
  },
  
  // 自定义头部
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ]
  },
};

export default withNextIntl(nextConfig);
