'use client'

import { useState, useEffect } from 'react'
import { isGoogleSourceValid, setGoogleSourceValid } from '@/utils/referrerStorage'

export function useGoogleReferrer() {
  const [isFromGoogle, setIsFromGoogle] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // 检查localStorage中是否有有效的Google来源标记
    const hasValidGoogleSource = isGoogleSourceValid()
    
    if (hasValidGoogleSource) {
      setIsFromGoogle(true)
      setIsLoaded(true)
      return
    }

    // 检查cookie是否包含google_source
    const checkGoogleSource = () => {
      if (typeof window !== 'undefined') {
        // 检查cookie
        const hasGoogleCookie = document.cookie
          .split('; ')
          .find(row => row.startsWith('google_source='))
          ?.split('=')[1] === 'true'
        
        console.log('Cookie has google_source:', hasGoogleCookie) // 调试日志
        
        if (hasGoogleCookie) {
          setGoogleSourceValid()
          setIsFromGoogle(true)
          setIsLoaded(true)
          return
        }

        // 备选：检查当前页面是否来自Google（通过referrer）
        const referrer = document.referrer
        console.log('Current referrer:', referrer) // 调试日志
        
        const isGoogleRef = referrer === 'google' || 
                           referrer === 'google.com' ||
                           referrer.includes('google.com/search') || 
                           referrer.includes('google.co') || 
                           referrer.includes('.google.') ||
                           referrer.startsWith('google.')
        
        console.log('Is from Google:', isGoogleRef) // 调试日志
        
        if (isGoogleRef) {
          setGoogleSourceValid()
          setIsFromGoogle(true)
        }
      }
      setIsLoaded(true)
    }

    // 延迟执行以确保window.location可用
    setTimeout(checkGoogleSource, 100)
  }, [])

  return { isFromGoogle, isLoaded }
}