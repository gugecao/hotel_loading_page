'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useTranslations, useLocale } from 'next-intl'
import { useRouter, usePathname } from 'next/navigation'

export default function Navbar() {
  const t = useTranslations('navbar')
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentLang, setCurrentLang] = useState({ name: '中文', flag: '🇨🇳' })
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false)
  const langMenuRef = useRef<HTMLDivElement>(null)

  // 支持的语言列表 - 20个国家
  const languages = [
    { code: 'zh', name: '中文', flag: '🇨🇳', country: 'China' },
    { code: 'en', name: 'English', flag: '🇺🇸', country: 'United States' },
    { code: 'fr', name: 'Français', flag: '🇫🇷', country: 'France' },
    { code: 'es', name: 'Español', flag: '🇪🇸', country: 'Spain' },
    { code: 'it', name: 'Italiano', flag: '🇮🇹', country: 'Italy' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪', country: 'Germany' },
    { code: 'tr', name: 'Türkçe', flag: '🇹🇷', country: 'Turkey' },
    { code: 'ja', name: '日本語', flag: '🇯🇵', country: 'Japan' },
    { code: 'th', name: 'ไทย', flag: '🇹🇭', country: 'Thailand' },
  ]

  // 设置当前语言显示
  useEffect(() => {
    const currentLanguage = languages.find(lang => lang.code === locale) || languages[0]
    setCurrentLang(currentLanguage)
  }, [locale])

  const handleLanguageChange = (langCode: string) => {
    const newPath = pathname.replace(`/${locale}`, `/${langCode}`)
    router.push(newPath)
    setIsLangMenuOpen(false)
  }

  // 点击外部关闭语言菜单
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setIsLangMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo_180x78.png"
                alt="LocusStay - 全球酒店分销平台"
                width={180}
                height={78}
                className="h-10 w-auto"
                priority
              />
            </Link>
          </div>

          {/* 桌面端导航链接 */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection('benefits')}
                className="text-gray-700 hover:text-primary transition-colors duration-200 px-3 py-2"
              >
                {t('productAdvantages')}
              </button>
              <button
                onClick={() => scrollToSection('solutions')}
                className="text-gray-700 hover:text-primary transition-colors duration-200 px-3 py-2"
              >
                {t('solutions')}
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="text-gray-700 hover:text-primary transition-colors duration-200 px-3 py-2"
              >
                {t('customerCases')}
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-primary transition-colors duration-200 px-3 py-2"
              >
                {t('aboutUs')}
              </button>
            </div>
          </div>

          {/* 桌面端按钮区域 */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://app.yourplatform.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-primary px-6 py-2 rounded-lg font-semibold hover:bg-accent-light transition-all duration-200 hover:shadow-accent"
            >
              {t('partnerLogin')}
            </a>
            
            {/* 多语言选择器 */}
            <div className="relative" ref={langMenuRef}>
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center space-x-2 bg-white border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="text-lg">{currentLang.flag}</span>
                <span className="text-gray-700">{currentLang.name}</span>
                <svg 
                  className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${isLangMenuOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* 语言下拉菜单 */}
              {isLangMenuOpen && (
                <div className="absolute right-0 mt-2 w-auto min-w-max bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-80 overflow-y-auto">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className={`w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors duration-200 flex items-center space-x-3 ${
                        currentLang.name === lang.name ? 'bg-primary text-white' : 'text-gray-700'
                      }`}
                    >
                      <span className="text-lg">{lang.flag}</span>
                      <span className="truncate">{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* 移动端菜单按钮 */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary focus:outline-none focus:text-primary"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* 移动端菜单 */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              <button
                onClick={() => scrollToSection('benefits')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-primary transition-colors duration-200"
              >
                {t('productAdvantages')}
              </button>
              <button
                onClick={() => scrollToSection('solutions')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-primary transition-colors duration-200"
              >
                {t('solutions')}
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-primary transition-colors duration-200"
              >
                {t('customerCases')}
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-primary transition-colors duration-200"
              >
                {t('aboutUs')}
              </button>
              
              {/* 移动端按钮和语言选择器 */}
              <div className="pt-4 border-t border-gray-200 space-y-3">
                <a
                  href="https://app.yourplatform.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-accent text-primary px-6 py-3 rounded-lg font-semibold hover:bg-accent-light transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('partnerLogin')}
                </a>
                
                {/* 移动端语言选择器 */}
                <div className="space-y-2">
                  <div className="text-sm font-medium text-gray-700 px-3">{locale === 'zh' ? '选择语言' : 'Select Language'}</div>
                  <div className="max-h-48 overflow-y-auto bg-gray-50 rounded-lg p-2">
                    <div className="grid grid-cols-1 gap-1">
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => {
                            handleLanguageChange(lang.code)
                            setIsMenuOpen(false)
                          }}
                          className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors duration-200 ${
                            currentLang.name === lang.name 
                              ? 'bg-primary text-white' 
                              : 'bg-white text-gray-700 hover:bg-gray-100'
                          }`}
                        >
                          <span className="text-lg">{lang.flag}</span>
                          <span className="text-sm truncate">{lang.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}