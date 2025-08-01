'use client'

import { useTranslations } from 'next-intl'

export default function HeroSection() {
  const t = useTranslations('hero')
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #003580 0%, #0041a3 100%)'
      }}
    >
      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen py-20">
          {/* 左侧内容 */}
          <div className="lg:w-3/5 lg:pr-12">
            <div className="max-w-4xl text-left text-white">
              {/* 主标题 */}
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in">
                {t('title')}
              </h1>

              {/* 副标题 */}
              <p className="text-xl md:text-2xl mb-8 leading-relaxed text-white text-opacity-90 animate-fade-in-delay">
                {t('subtitle')}
              </p>

              {/* CTA按钮 */}
              <div className="mb-12 animate-fade-in-delay-2">
                <button
                  onClick={() => scrollToSection('benefits')}
                  className="bg-accent text-primary px-12 py-4 rounded-lg font-bold text-xl hover:bg-accent-light transition-all duration-300 transform hover:scale-105 hover:shadow-accent"
                >
                  {t('ctaButton')}
                </button>
              </div>

              {/* 统计数据 */}
              <div className="flex flex-wrap gap-8 animate-fade-in-delay-3">
                <div className="flex flex-col items-center">
                  <div className="text-5xl font-bold text-accent mb-2">180+</div>
                  <div className="text-gray-600 font-medium">{t('statsCountries')}</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-5xl font-bold text-accent mb-2">5,000+</div>
                  <div className="text-gray-600 font-medium">{t('statsHotels')}</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-5xl font-bold text-accent mb-2">150+</div>
                  <div className="text-gray-600 font-medium">{t('statsChannels')}</div>
                </div>
              </div>
            </div>
          </div>

          {/* 右侧3D模型区域 */}
          <div className="lg:w-2/5 lg:pl-12 mt-12 lg:mt-0">
            <div className="relative w-full h-96 lg:h-[600px] flex items-center justify-center">
              {/* 3D酒店模型占位符 */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                <div 
                  className="absolute inset-0 rounded-3xl animate-float"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,183,0,0.1) 0%, rgba(0,53,128,0.1) 100%)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,183,0,0.2)'
                  }}
                >
                  {/* 模拟3D酒店建筑 */}
                  <div className="absolute inset-4 flex items-end justify-center space-x-2">
                    <div className="w-12 h-32 bg-gradient-to-t from-accent to-accent-light rounded-t-lg opacity-80"></div>
                    <div className="w-16 h-40 bg-gradient-to-t from-primary to-primary-light rounded-t-lg"></div>
                    <div className="w-14 h-36 bg-gradient-to-t from-accent to-accent-light rounded-t-lg opacity-80"></div>
                    <div className="w-10 h-28 bg-gradient-to-t from-primary to-primary-light rounded-t-lg opacity-60"></div>
                  </div>
                  
                  {/* 装饰性元素 */}
                  <div className="absolute top-8 left-8 w-4 h-4 bg-accent rounded-full animate-pulse"></div>
                  <div className="absolute top-16 right-12 w-3 h-3 bg-white rounded-full animate-pulse delay-300"></div>
                  <div className="absolute bottom-20 left-12 w-2 h-2 bg-accent-light rounded-full animate-pulse delay-500"></div>
                </div>
              </div>
              
              {/* 浮动装饰元素 */}
              <div className="absolute -top-8 -left-8 w-16 h-16 border-2 border-accent rounded-full animate-spin-slow opacity-30"></div>
              <div className="absolute -bottom-12 -right-12 w-20 h-20 border-2 border-white rounded-full animate-pulse opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}