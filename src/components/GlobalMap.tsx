'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'

export default function GlobalMap() {
  const t = useTranslations('map')
  const [activeRegion, setActiveRegion] = useState<string | null>(null)

  const regions = [
    {
      id: 'europe',
      name: t('regionNames.europe'),
      description: t('regionDescriptions.europe'),
      details: t('regions.europe'),
      hotels: '2,150',
      position: { top: '25%', left: '48%' }
    },
    {
      id: 'americas',
      name: t('regionNames.americas'),
      description: t('regionDescriptions.americas'), 
      details: t('regions.northAmerica'),
      hotels: '1,850',
      position: { top: '35%', left: '25%' }
    },
    {
      id: 'asiaPacific',
      name: t('regionNames.asiaPacific'),
      description: t('regionDescriptions.asiaPacific'),
      details: t('regions.asiaPacific'),
      hotels: '1,200',
      position: { top: '40%', left: '75%' }
    },
    {
      id: 'middleEast',
      name: t('regionNames.middleEast'),
      description: t('regionDescriptions.middleEast'),
      details: t('regions.middleEast'),
      hotels: '800',
      position: { top: '38%', left: '58%' }
    }
  ]

  return (
    <section id="solutions" className="py-20 bg-gradient-to-br from-gray-50 to-white">
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

        {/* 统计数据 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">180+</div>
            <div className="text-gray-600 font-medium">{t('stats.countries')}</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">5,000+</div>
            <div className="text-gray-600 font-medium">{t('stats.hotels')}</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">150+</div>
            <div className="text-gray-600 font-medium">{t('stats.channels')}</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">1M+</div>
            <div className="text-gray-600 font-medium">{t('stats.bookings')}</div>
          </div>
        </div>

        {/* 地图区域 */}
        <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 rounded-3xl shadow-2xl p-8 md:p-12 mb-16 overflow-hidden">
          {/* 背景装饰 */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent)]"></div>
          
          {/* 现代化世界地图 */}
          <div className="relative w-full h-96 rounded-2xl overflow-hidden">
            {/* 网格背景 */}
            <div className="absolute inset-0 opacity-10">
              <div className="w-full h-full" style={{
                backgroundImage: `
                  linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
                `,
                backgroundSize: '50px 50px'
              }}></div>
            </div>

            {/* SVG世界地图轮廓 */}
            <div className="absolute inset-0">
              <svg viewBox="0 0 1000 500" className="w-full h-full">
                <defs>
                  <linearGradient id="continentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor: '#3B82F6', stopOpacity: 0.3}} />
                    <stop offset="100%" style={{stopColor: '#1E40AF', stopOpacity: 0.5}} />
                  </linearGradient>
                </defs>
                
                {/* 更精细的大陆轮廓 */}
                {/* 北美洲 */}
                <path d="M50 120 Q100 90 180 110 Q220 100 280 120 L320 140 Q350 160 320 200 L300 240 Q280 280 240 300 L180 320 Q120 300 80 260 L60 220 Q40 180 50 120 Z" 
                      fill="url(#continentGradient)" stroke="rgba(59, 130, 246, 0.4)" strokeWidth="1" />
                
                {/* 南美洲 */}
                <path d="M200 300 Q240 290 280 310 L300 350 Q290 400 260 440 L220 460 Q180 450 160 420 L150 380 Q160 340 200 300 Z" 
                      fill="url(#continentGradient)" stroke="rgba(59, 130, 246, 0.4)" strokeWidth="1" />
                
                {/* 欧洲 */}
                <path d="M420 80 Q480 70 540 90 Q580 85 620 100 L640 120 Q650 140 630 160 L600 180 Q550 170 500 180 L450 170 Q420 150 420 80 Z" 
                      fill="url(#continentGradient)" stroke="rgba(59, 130, 246, 0.4)" strokeWidth="1" />
                
                {/* 非洲 */}
                <path d="M450 180 Q500 170 550 190 L580 220 Q590 280 570 340 L550 390 Q520 420 480 410 L440 400 Q420 370 430 330 L440 280 Q445 230 450 180 Z" 
                      fill="url(#continentGradient)" stroke="rgba(59, 130, 246, 0.4)" strokeWidth="1" />
                
                {/* 亚洲 */}
                <path d="M620 100 Q720 80 820 110 Q880 120 920 150 L940 190 Q930 240 900 280 L850 320 Q780 330 720 310 L660 280 Q640 240 650 200 L670 160 Q680 130 620 100 Z" 
                      fill="url(#continentGradient)" stroke="rgba(59, 130, 246, 0.4)" strokeWidth="1" />
                
                {/* 澳洲 */}
                <path d="M750 350 Q820 340 880 360 Q920 370 940 390 L930 420 Q900 440 860 430 L800 420 Q760 400 750 350 Z" 
                      fill="url(#continentGradient)" stroke="rgba(59, 130, 246, 0.4)" strokeWidth="1" />
              </svg>
            </div>

            {/* 连接线动画 */}
            <div className="absolute inset-0">
              {regions.map((region, index) => (
                <div key={`line-${region.id}`} className="absolute">
                  <div 
                    className="absolute w-0.5 bg-gradient-to-b from-blue-400 to-transparent opacity-40 animate-pulse"
                    style={{
                      height: '60px',
                      top: region.position.top,
                      left: region.position.left,
                      animationDelay: `${index * 0.5}s`
                    }}
                  ></div>
                </div>
              ))}
            </div>

            {/* 区域标记点 - 现代化设计 */}
            {regions.map((region) => (
              <div
                key={region.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                style={{ top: region.position.top, left: region.position.left }}
                onMouseEnter={() => setActiveRegion(region.id)}
                onMouseLeave={() => setActiveRegion(null)}
              >
                {/* 主要标记点 */}
                <div className="relative">
                  <div className={`w-6 h-6 rounded-full border-2 border-white transition-all duration-500 ${
                    activeRegion === region.id 
                      ? 'bg-yellow-400 scale-125 shadow-lg shadow-yellow-400/50' 
                      : 'bg-blue-500 hover:bg-blue-400'
                  }`}>
                    {/* 内部光点 */}
                    <div className="absolute inset-1 rounded-full bg-white opacity-80"></div>
                  </div>
                  
                  {/* 脉冲效果 */}
                  <div className={`absolute inset-0 rounded-full border-2 border-blue-400 transition-all duration-1000 ${
                    activeRegion === region.id ? 'scale-200 opacity-0' : 'scale-100 opacity-50'
                  }`}></div>
                  
                  {/* 外圈动画 */}
                  <div className="absolute inset-0 rounded-full border border-blue-300 animate-ping opacity-30"></div>
                </div>

                {/* 信息卡片 */}
                <div className={`absolute top-8 left-1/2 transform -translate-x-1/2 transition-all duration-300 z-10 ${
                  activeRegion === region.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                }`}>
                  <div className="bg-white/95 backdrop-blur-sm px-5 py-3 rounded-xl shadow-xl border border-blue-100 min-w-max">
                    <div className="font-bold text-slate-800">{region.name}</div>
                    <div className="text-sm text-blue-600 font-medium">{region.hotels} {t('partnersLabel')}</div>
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white/95 rotate-45 border-l border-t border-blue-100"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 区域详情卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {regions.map((region) => (
            <div
              key={region.id}
              className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-2"
            >
              <h3 className="text-2xl font-bold text-primary mb-3">{region.name}</h3>
              <p className="text-accent font-semibold mb-3">{region.description}</p>
              <div className="text-gray-600 leading-relaxed text-sm mb-4">
                {region.details}
              </div>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-primary">{region.hotels}</span>
                <span className="text-gray-500 text-sm">{t('partnersLabel')}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}