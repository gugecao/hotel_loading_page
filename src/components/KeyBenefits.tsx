'use client'

import { useTranslations } from 'next-intl'

export default function KeyBenefits() {
  const t = useTranslations('benefits')
  const benefits = [
    {
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: t('benefit1.title'),
      description: t('benefit1.description'),
      highlight: t('benefit1.highlight')
    },
    {
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: t('benefit2.title'),
      description: t('benefit2.description'),
      highlight: t('benefit2.highlight')
    },
    {
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: t('benefit3.title'),
      description: t('benefit3.description'),
      highlight: t('benefit3.highlight')
    },
    {
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25v19.5M2.25 12h19.5" />
        </svg>
      ),
      title: t('benefit4.title'),
      description: t('benefit4.description'),
      highlight: t('benefit4.highlight')
    }
  ]

  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="container">
        {/* 标题区域 */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('subtitle')}
          </p>
        </div>

        {/* 优势卡片网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              {/* 图标 */}
              <div className="mb-6 flex justify-center">
                <div className="p-4 bg-primary/5 rounded-2xl group-hover:bg-primary/10 transition-colors duration-300">
                  {benefit.icon}
                </div>
              </div>

              {/* 标题 */}
              <h3 className="text-2xl font-bold text-primary mb-4 text-center">
                {benefit.title}
              </h3>

              {/* 高亮数据 */}
              <div className="text-center mb-4">
                <span className="inline-block bg-accent text-primary px-4 py-2 rounded-full text-sm font-bold">
                  {benefit.highlight}
                </span>
              </div>

              {/* 描述 */}
              <p className="text-gray-600 leading-relaxed text-center">
                {benefit.description}
              </p>

              {/* 悬停效果装饰 */}
              <div className="mt-6 h-1 bg-gradient-to-r from-primary to-accent rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </div>
          ))}
        </div>

        {/* 底部统计数据 */}
        <div className="mt-20 bg-gradient-to-r from-primary to-primary-light rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
            <div className="group">
              <div className="text-5xl md:text-6xl font-bold mb-2 text-accent group-hover:scale-110 transition-transform duration-300">
                97%
              </div>
              <div className="text-xl font-semibold mb-2">{t('stats.satisfaction')}</div>
              <div className="text-sm opacity-90">{t('statsDescription.satisfaction')}</div>
            </div>
            <div className="group">
              <div className="text-5xl md:text-6xl font-bold mb-2 text-accent group-hover:scale-110 transition-transform duration-300">
                +42%
              </div>
              <div className="text-xl font-semibold mb-2">{t('stats.revenue')}</div>
              <div className="text-sm opacity-90">{t('statsDescription.revenue')}</div>
            </div>
            <div className="group">
              <div className="text-5xl md:text-6xl font-bold mb-2 text-accent group-hover:scale-110 transition-transform duration-300">
                72h
              </div>
              <div className="text-xl font-semibold mb-2">{t('stats.deployment')}</div>
              <div className="text-sm opacity-90">{t('statsDescription.deployment')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}