'use client'

import { useTranslations } from 'next-intl'
import { useGoogleReferrer } from '@/hooks/useGoogleReferrer'

export default function ContactGuide() {
  const t = useTranslations('contact')
  const { isFromGoogle, isLoaded } = useGoogleReferrer()

  const supportFeatures = [
    {
      icon: "🚀",
      title: t('features.quickResponse.title'),
      description: t('features.quickResponse.description')
    },
    {
      icon: "🎯",
      title: t('features.customSolution.title'),
      description: t('features.customSolution.description')
    },
    {
      icon: "🔒",
      title: t('features.security.title'),
      description: t('features.security.description')
    },
    {
      icon: "📈",
      title: t('features.continuousSupport.title'),
      description: t('features.continuousSupport.description')
    }
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-primary-dark to-primary">
      <div className="container">
        {/* 标题区域 */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('title')}
          </h2>
          <p className="text-xl text-white text-opacity-90 max-w-4xl mx-auto leading-relaxed">
            {t('subtitle')}
          </p>
        </div>

        {/* 支持特色 */}
        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-3xl p-8 md:p-12 mb-12">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            {t('servicesTitle')}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportFeatures.map((feature, index) => (
              <div key={index} className="text-center text-white">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h4 className="text-xl font-bold mb-3">{feature.title}</h4>
                <p className="text-white text-opacity-80 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 底部行动引导 - 只对Google来路用户显示 */}
        {isLoaded && isFromGoogle && (
          <div className="text-center">
            <div className="bg-accent rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                {t('ctaTitle')}
              </h3>
              <p className="text-xl text-primary text-opacity-80 mb-8 leading-relaxed">
                {t('ctaSubtitle')}
              </p>
              
              <div className="flex justify-center">
                <button
                  onClick={() => window.location.href = '/api/urls'}
                  className="bg-primary text-white px-12 py-4 rounded-lg font-bold text-xl hover:bg-primary-light transition-all duration-300 transform hover:scale-105 hover:shadow-primary min-w-[250px] text-center"
                >
                  {t('ctaButton')}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}