'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '@/lib/i18n/LanguageContext'

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const { t, isRTL } = useLanguage()

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent')
    if (!consent) {
      const timer = setTimeout(() => setShowConsent(true), 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  const updateGoogleConsent = (granted: boolean) => {
    if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
      (window as any).gtag('consent', 'update', {
        analytics_storage: granted ? 'granted' : 'denied',
        ad_storage: granted ? 'granted' : 'denied',
        ad_user_data: granted ? 'granted' : 'denied',
        ad_personalization: granted ? 'granted' : 'denied',
      })
    }
  }

  const closeConsent = () => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('cookie-consent-closed'))
    }
  }

  const acceptAll = () => {
    localStorage.setItem('cookieConsent', 'all')
    localStorage.setItem('analyticsConsent', 'true')
    localStorage.setItem('marketingConsent', 'true')
    updateGoogleConsent(true)
    setShowConsent(false)
    closeConsent()
  }

  const rejectAll = () => {
    localStorage.setItem('cookieConsent', 'essential')
    localStorage.setItem('analyticsConsent', 'false')
    localStorage.setItem('marketingConsent', 'false')
    updateGoogleConsent(false)
    setShowConsent(false)
    closeConsent()
  }

  return (
    <AnimatePresence>
      {showConsent && (
        <>
          {/* Subtle overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-[2px] z-[100]"
            onClick={() => setShowDetails(false)}
          />
          
          {/* Centered modal - Loro Piana style */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-4 md:p-6"
          >
            <div
              className={`w-full max-w-lg bg-[#faf8f5] border border-brand-darkRed/60 rounded-lg shadow-sm overflow-hidden ${isRTL ? 'text-right' : 'text-center'}`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Logo */}
              <div className="pt-8 pb-4 flex justify-center">
                <Image
                  src="/logo.png"
                  alt="Bint Saeed"
                  width={120}
                  height={36}
                  className="h-8 w-auto object-contain"
                />
              </div>

              {/* Title */}
              <h2 className="font-rozha text-xl text-brand-darkRed px-6 pb-2">
                {t.cookie.title}
              </h2>

              {/* Body text */}
              <div className="px-6 pb-4">
                <p className="font-roboto text-sm text-[#4a4a4a] leading-[1.7]">
                  {t.cookie.message}
                </p>
              </div>

              {/* More Information link */}
              <div className="pb-5">
                <Link
                  href="/cookie-policy"
                  className="font-roboto text-sm text-brand-darkRed/90 underline hover:text-brand-darkRed transition-colors"
                >
                  {t.cookie.learnMore}
                </Link>
              </div>

              {/* Cookie details (optional, when "Cookies settings" clicked) */}
              <AnimatePresence>
                {showDetails && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden border-t border-[#e8e2db]"
                  >
                    <div className="px-6 py-4 space-y-3 text-left">
                      <div>
                        <span className="font-roboto text-xs font-medium text-[#3b0014]">{t.cookie.essential}</span>
                        <span className="text-[10px] text-[#6b6b6b] ml-2">({t.cookie.alwaysOn})</span>
                        <p className="font-roboto text-xs text-[#6b6b6b] mt-1">{t.cookie.essentialDesc}</p>
                      </div>
                      <div>
                        <span className="font-roboto text-xs font-medium text-[#3b0014]">{t.cookie.analytics}</span>
                        <span className="text-[10px] text-[#6b6b6b] ml-2">({t.cookie.optional})</span>
                        <p className="font-roboto text-xs text-[#6b6b6b] mt-1">{t.cookie.analyticsDesc}</p>
                      </div>
                      <div>
                        <span className="font-roboto text-xs font-medium text-[#3b0014]">{t.cookie.marketing}</span>
                        <span className="text-[10px] text-[#6b6b6b] ml-2">({t.cookie.optional})</span>
                        <p className="font-roboto text-xs text-[#6b6b6b] mt-1">{t.cookie.marketingDesc}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Three buttons - Loro Piana style */}
              <div className={`flex flex-col sm:flex-row gap-2 p-6 pt-4 ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
                <button
                  onClick={() => setShowDetails(!showDetails)}
                  className="flex-1 px-5 py-3 bg-brand-darkRed text-white font-roboto text-[11px] uppercase tracking-[0.12em] border border-brand-darkRed/80 rounded hover:opacity-90 transition-opacity"
                  data-cursor-hover
                >
                  {t.cookie.cookiesSettings || t.cookie.showDetails}
                </button>
                <button
                  onClick={rejectAll}
                  className="flex-1 px-5 py-3 bg-brand-darkRed text-white font-roboto text-[11px] uppercase tracking-[0.12em] border border-brand-darkRed/80 rounded hover:opacity-90 transition-opacity"
                  data-cursor-hover
                >
                  {t.cookie.essentialOnly}
                </button>
                <button
                  onClick={acceptAll}
                  className="flex-1 px-5 py-3 bg-brand-darkRed text-white font-roboto text-[11px] uppercase tracking-[0.12em] border border-brand-darkRed/80 rounded hover:opacity-90 transition-opacity"
                  data-cursor-hover
                >
                  {t.cookie.acceptAll}
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
