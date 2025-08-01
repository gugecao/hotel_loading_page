'use client'

import Link from 'next/link'
import { useTranslations } from 'next-intl'

export default function Footer() {
  const t = useTranslations('footer')
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { href: '#', label: t('navigation.home') },
    { href: '#benefits', label: t('navigation.products') },
    { href: '#solutions', label: t('navigation.solutions') },
    { href: '#about', label: t('navigation.about') }
  ]

  const socialLinks = [
    { name: 'LinkedIn', href: '#', icon: 'linkedin' },
    { name: 'Twitter', href: '#', icon: 'twitter' },
    { name: 'Facebook', href: '#', icon: 'facebook' }
  ]

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      <div className="container">
        {/* 主要内容区域 */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 公司信息 */}
            <div>
              <div className="flex items-center mb-4">
                <div className="bg-primary text-white px-3 py-2 rounded-lg font-bold text-xl mr-3">
                  {t('companyName')}
                </div>
              </div>
              
              <p className="text-gray-400 leading-relaxed mb-6">
                {t('companyDescription')}
              </p>
              
              {/* 联系信息 */}
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:partnerships@locusstay.com" className="hover:text-accent transition-colors">
                    partnerships@locusstay.com
                  </a>
                </div>
              </div>
            </div>

            {/* 快捷链接 */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">{t('quickNav')}</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    {link.href.startsWith('#') ? (
                      <button
                        onClick={() => {
                          const element = document.getElementById(link.href.substring(1))
                          if (element) {
                            element.scrollIntoView({ behavior: 'smooth' })
                          }
                        }}
                        className="text-gray-400 hover:text-accent transition-colors duration-300 text-left"
                      >
                        {link.label}
                      </button>
                    ) : (
                      <Link href={link.href} className="text-gray-400 hover:text-accent transition-colors duration-300">
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* 社交媒体 */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">{t('socialMedia')}</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-accent hover:bg-gray-700 transition-all duration-300"
                    aria-label={social.name}
                  >
                    <span className="text-sm font-bold">{social.name[0]}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 分割线 */}
        <div className="border-t border-gray-800"></div>

        {/* 底部版权信息 */}
        <div className="py-6">
          <div className="text-center text-sm text-gray-400">
            <p>© {currentYear} {t('companyName')}. {t('copyright')}</p>
          </div>
        </div>
      </div>
      
      {/* 返回顶部按钮 */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-primary text-white rounded-full shadow-lg hover:bg-primary-light transition-all duration-300 transform hover:scale-110 z-50 flex items-center justify-center"
        aria-label="返回顶部"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </footer>
  )
}