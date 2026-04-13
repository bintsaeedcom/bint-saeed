'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import LocaleLink from '@/components/LocaleLink'
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
        <motion.div
          key="cookie-consent-root"
          role="dialog"
          aria-modal="true"
          aria-labelledby="cookie-consent-title"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20, transition: { duration: 0.2 } }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          style={{ pointerEvents: 'none' }}
          className="fixed bottom-0 left-0 right-0 z-[100] flex justify-center px-4 pb-6 pt-2 md:px-6 md:pb-8"
        >
          <div
            style={{ pointerEvents: 'auto' }}
            className={`w-full max-w-lg overflow-hidden rounded-lg border border-brand-darkRed/60 bg-[#faf8f5] shadow-xl shadow-black/20 backdrop-blur-sm ${isRTL ? 'text-right' : 'text-center'}`}
          >
            {/* Logo */}
            <div className="flex justify-center pb-4 pt-8">
              <Image
                src="/logo.png"
                alt="Bint Saeed"
                width={120}
                height={36}
                className="h-8 w-auto object-contain"
              />
            </div>

            {/* Title */}
            <h2 id="cookie-consent-title" className="font-rozha px-6 pb-2 text-xl text-brand-darkRed">
              {t.cookie.title}
            </h2>

            {/* Body text */}
            <div className="px-6 pb-4">
              <p className="font-roboto text-sm leading-[1.7] text-[#4a4a4a]">{t.cookie.message}</p>
            </div>

            {/* More Information link */}
            <div className="pb-5">
              <LocaleLink
                href="/cookie-policy"
                className="font-roboto text-sm text-brand-darkRed/90 underline transition-colors hover:text-brand-darkRed"
              >
                {t.cookie.learnMore}
              </LocaleLink>
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
                  <div className="space-y-3 px-6 py-4 text-left">
                    <div>
                      <span className="font-roboto text-xs font-medium text-[#3b0014]">{t.cookie.essential}</span>
                      <span className="ml-2 text-[10px] text-[#6b6b6b]">({t.cookie.alwaysOn})</span>
                      <p className="mt-1 font-roboto text-xs text-[#6b6b6b]">{t.cookie.essentialDesc}</p>
                    </div>
                    <div>
                      <span className="font-roboto text-xs font-medium text-[#3b0014]">{t.cookie.analytics}</span>
                      <span className="ml-2 text-[10px] text-[#6b6b6b]">({t.cookie.optional})</span>
                      <p className="mt-1 font-roboto text-xs text-[#6b6b6b]">{t.cookie.analyticsDesc}</p>
                    </div>
                    <div>
                      <span className="font-roboto text-xs font-medium text-[#3b0014]">{t.cookie.marketing}</span>
                      <span className="ml-2 text-[10px] text-[#6b6b6b]">({t.cookie.optional})</span>
                      <p className="mt-1 font-roboto text-xs text-[#6b6b6b]">{t.cookie.marketingDesc}</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Three buttons - Loro Piana style */}
            <div className={`flex flex-col gap-2 p-6 pt-4 sm:flex-row ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="flex-1 rounded border border-brand-darkRed/80 bg-brand-darkRed px-5 py-3 font-roboto text-[11px] uppercase tracking-[0.12em] text-white transition-opacity hover:opacity-90"
                data-cursor-hover
              >
                {t.cookie.cookiesSettings || t.cookie.showDetails}
              </button>
              <button
                onClick={rejectAll}
                className="flex-1 rounded border border-brand-darkRed/80 bg-brand-darkRed px-5 py-3 font-roboto text-[11px] uppercase tracking-[0.12em] text-white transition-opacity hover:opacity-90"
                data-cursor-hover
              >
                {t.cookie.essentialOnly}
              </button>
              <button
                onClick={acceptAll}
                className="flex-1 rounded border border-brand-darkRed/80 bg-brand-darkRed px-5 py-3 font-roboto text-[11px] uppercase tracking-[0.12em] text-white transition-opacity hover:opacity-90"
                data-cursor-hover
              >
                {t.cookie.acceptAll}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
