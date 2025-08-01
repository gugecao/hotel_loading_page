'use client'

import { useTranslations } from 'next-intl'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function AboutPage() {
  const t = useTranslations('about')

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-blue-800 py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {t('hero.title')}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              {t('hero.subtitle')}
            </p>
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <span className="text-sm font-medium">🇬🇧 {t('hero.ukBased')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                {t('story.title')}
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                {t('story.subtitle')}
              </p>
            </div>
            
            <div className="bg-white rounded-3xl shadow-card p-8 md:p-12">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  {t('story.paragraph1')}
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {t('story.paragraph2')}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {t('story.paragraph3')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Philosophy Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                {t('mission.title')}
              </h2>
            </div>
            
            {/* Mission Statement */}
            <div className="bg-gradient-to-r from-primary to-blue-600 rounded-3xl p-8 md:p-12 mb-16">
              <blockquote className="text-white text-xl md:text-2xl font-light leading-relaxed text-center italic">
                &ldquo;{t('mission.statement')}&rdquo;
              </blockquote>
            </div>

            {/* Philosophy Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">{t('philosophy.success.title')}</h3>
                <p className="text-gray-600 leading-relaxed">{t('philosophy.success.description')}</p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <span className="text-2xl">💡</span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">{t('philosophy.innovation.title')}</h3>
                <p className="text-gray-600 leading-relaxed">{t('philosophy.innovation.description')}</p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                  <span className="text-2xl">🔍</span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">{t('philosophy.transparency.title')}</h3>
                <p className="text-gray-600 leading-relaxed">{t('philosophy.transparency.description')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Core Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                {t('technology.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('technology.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-card">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-white text-2xl">🧠</span>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">{t('technology.engine.title')}</h3>
                <p className="text-gray-600 leading-relaxed">{t('technology.engine.description')}</p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-card">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-white text-2xl">🎯</span>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">{t('technology.platform.title')}</h3>
                <p className="text-gray-600 leading-relaxed">{t('technology.platform.description')}</p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-card">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-white text-2xl">🔗</span>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">{t('technology.api.title')}</h3>
                <p className="text-gray-600 leading-relaxed">{t('technology.api.description')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Impact Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                {t('impact.title')}
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                {t('impact.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-yellow-400 mb-2">5,000+</div>
                <div className="text-blue-200 font-medium text-lg mb-2">{t('impact.hotels.label')}</div>
                <div className="text-blue-300 text-sm">{t('impact.hotels.description')}</div>
              </div>

              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-yellow-400 mb-2">120+</div>
                <div className="text-blue-200 font-medium text-lg mb-2">{t('impact.countries.label')}</div>
                <div className="text-blue-300 text-sm">{t('impact.countries.description')}</div>
              </div>

              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-yellow-400 mb-2">25%</div>
                <div className="text-blue-200 font-medium text-lg mb-2">{t('impact.revenue.label')}</div>
                <div className="text-blue-300 text-sm">{t('impact.revenue.description')}</div>
              </div>

              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-yellow-400 mb-2">99.9%</div>
                <div className="text-blue-200 font-medium text-lg mb-2">{t('impact.uptime.label')}</div>
                <div className="text-blue-300 text-sm">{t('impact.uptime.description')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Vision Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                {t('future.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
                {t('future.subtitle')}
              </p>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-3xl p-8 md:p-12 mb-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                {t('future.description')}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">🎨</span>
                  </div>
                  <h4 className="font-bold text-primary mb-2">{t('future.personalization.title')}</h4>
                  <p className="text-gray-600 text-sm">{t('future.personalization.description')}</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">🌱</span>
                  </div>
                  <h4 className="font-bold text-primary mb-2">{t('future.sustainability.title')}</h4>
                  <p className="text-gray-600 text-sm">{t('future.sustainability.description')}</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">🔧</span>
                  </div>
                  <h4 className="font-bold text-primary mb-2">{t('future.ecosystem.title')}</h4>
                  <p className="text-gray-600 text-sm">{t('future.ecosystem.description')}</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-lg text-gray-700 leading-relaxed">
                {t('future.conclusion')}
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}