'use client'

import { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'

export default function Testimonials() {
  const t = useTranslations('testimonials')
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Marcus Weber",
      position: "General Manager",
      company: "Alpine Grand Hotel, Switzerland",
      location: "🇨🇭 Switzerland",
      rating: 5,
      comment: "LocusStay's platform has revolutionized our revenue management. We've seen a 45% increase in bookings within just 6 months of implementation."
    },
    {
      name: "Sophie Laurent",
      position: "Revenue Director", 
      company: "Château de Luxe, France",
      location: "🇫🇷 France",
      rating: 5,
      comment: "The automated pricing and inventory management has saved us countless hours while maximizing our revenue potential across all channels."
    },
    {
      name: "James Mitchell",
      position: "Operations Manager",
      company: "Thames View Hotel, United Kingdom", 
      location: "🇬🇧 United Kingdom",
      rating: 5,
      comment: "Outstanding support and seamless integration. LocusStay's technology has transformed how we connect with global travelers."
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
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

        {/* 见证轮播区域 */}
        <div className="relative max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-3xl shadow-card p-8 md:p-12">
            <div className="text-center">
              {/* 星级评分 */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-accent mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-2 text-gray-600">{testimonials[currentTestimonial].rating} {t('rating')}</span>
              </div>

              {/* 评价内容 */}
              <blockquote className="text-2xl md:text-3xl font-light text-gray-800 leading-relaxed mb-8 italic">
                "{testimonials[currentTestimonial].comment}"
              </blockquote>

              {/* 客户信息 */}
              <div className="text-center">
                <div className="text-xl font-bold text-primary mb-1">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-gray-600 mb-2">
                  {testimonials[currentTestimonial].position}
                </div>
                <div className="text-gray-500">
                  {testimonials[currentTestimonial].company}
                </div>
                <div className="text-sm text-gray-400 mt-2">
                  {testimonials[currentTestimonial].location}
                </div>
              </div>
            </div>
          </div>

          {/* 轮播指示器 */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial ? 'bg-primary' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* 信任指标 */}
        <div className="bg-white rounded-3xl shadow-card p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-primary mb-4">
              {t('trustTitle')}
            </h3>
            <p className="text-xl text-gray-600">
              {t('trustSubtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                97%
              </div>
              <div className="text-lg font-semibold text-gray-800 mb-1">{t('trustStats.satisfaction')}</div>
              <div className="text-sm text-gray-600">5,000+ hotels surveyed</div>
            </div>
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                4.9
              </div>
              <div className="text-lg font-semibold text-gray-800 mb-1">{t('trustStats.rating')}</div>
              <div className="text-sm text-gray-600">Average platform rating</div>
            </div>
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                24/7
              </div>
              <div className="text-lg font-semibold text-gray-800 mb-1">{t('trustStats.support')}</div>
              <div className="text-sm text-gray-600">Global support availability</div>
            </div>
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                99.9%
              </div>
              <div className="text-lg font-semibold text-gray-800 mb-1">{t('trustStats.uptime')}</div>
              <div className="text-sm text-gray-600">System reliability</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}