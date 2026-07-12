'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import LocaleLink from '@/components/LocaleLink'
import Image from 'next/image'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { setConsentState } from '@/lib/analytics/consent'

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

  useEffect(() => {
    const openSettings = () => {
      setShowDetails(true)
      setShowConsent(true)
    }
    window.addEventListener('open-cookie-settings', openSettings)
    return () => window.removeEventListener('open-cookie-settings', openSettings)
  }, [])

  useEffect(() => {
    if (!showConsent) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [showConsent])

  const closeConsent = () => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('cookie-consent-closed'))
    }
  }

  const acceptAll = () => {
    setConsentState({ analytics: true, marketing: true })
    setShowConsent(false)
    closeConsent()
  }

  const rejectAll = () => {
    setConsentState({ analytics: false, marketing: false })
    setShowConsent(false)
    closeConsent()
  }

  const primaryButtonClass =
    'pointer-events-auto min-h-[46px] flex-1 rounded border border-brand-darkRed bg-brand-darkRed px-4 py-3 font-montserrat text-[10px] uppercase tracking-[0.14em] text-white transition-colors hover:bg-brand-darkMagenta sm:min-w-[9.5rem] sm:flex-[1.15]'
  const secondaryButtonClass =
    'pointer-events-auto min-h-[46px] flex-1 rounded border border-brand-darkRed/20 bg-transparent px-4 py-3 font-montserrat text-[10px] uppercase tracking-[0.12em] text-brand-darkRed/55 transition-colors hover:border-brand-darkRed/35 hover:bg-brand-stone/10 hover:text-brand-darkRed/75 sm:min-w-[9rem]'

  return (
    <AnimatePresence>
      {showConsent && (
        <>
          <motion.div
            key="cookie-consent-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="fixed inset-0 z-[99] bg-[#1a0a0f]/20 backdrop-blur-[6px]"
            aria-hidden
          />
          <motion.div
            key="cookie-consent-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="cookie-consent-title"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.99, transition: { duration: 0.2 } }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          >
            <div
              className={`w-full max-w-[34rem] overflow-hidden rounded-sm border border-brand-darkRed/55 bg-[#faf8f5] shadow-[0_32px_70px_-18px_rgba(26,2,16,0.28)] ${
                isRTL ? 'text-right' : 'text-center'
              }`}
            >
              <div className="flex justify-center px-6 pb-5 pt-9 sm:pt-10">
                <Image
                  src="/logo-bintsaeed.svg"
                  alt="Bint Saeed"
                  width={220}
                  height={64}
                  className="h-11 w-auto object-contain sm:h-14"
                  priority
                />
              </div>

              <h2
                id="cookie-consent-title"
                className="font-rozha px-6 pb-3 text-[1.35rem] leading-snug text-brand-darkRed sm:text-[1.55rem]"
              >
                {t.cookie.title}
              </h2>

              <div className="px-6 pb-4">
                <p className="font-montserrat text-sm leading-[1.75] text-[#4a4a4a]">{t.cookie.message}</p>
              </div>

              <div className="pb-5">
                <LocaleLink
                  href="/cookie-policy"
                  className="font-montserrat text-sm text-brand-darkRed/90 underline transition-colors hover:text-brand-darkRed"
                >
                  {t.cookie.learnMore}
                </LocaleLink>
              </div>

              <AnimatePresence>
                {showDetails && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden border-t border-[#e8e2db]"
                  >
                    <div className={`space-y-3 px-6 py-4 ${isRTL ? 'text-right' : 'text-left'}`}>
                      <div>
                        <span className="font-montserrat text-xs font-medium text-brand-darkRed">{t.cookie.essential}</span>
                        <span className="ms-2 text-[10px] text-[#6b6b6b]">({t.cookie.alwaysOn})</span>
                        <p className="mt-1 font-montserrat text-xs text-[#6b6b6b]">{t.cookie.essentialDesc}</p>
                      </div>
                      <div>
                        <span className="font-montserrat text-xs font-medium text-brand-darkRed">{t.cookie.analytics}</span>
                        <span className="ms-2 text-[10px] text-[#6b6b6b]">({t.cookie.optional})</span>
                        <p className="mt-1 font-montserrat text-xs text-[#6b6b6b]">{t.cookie.analyticsDesc}</p>
                      </div>
                      <div>
                        <span className="font-montserrat text-xs font-medium text-brand-darkRed">{t.cookie.marketing}</span>
                        <span className="ms-2 text-[10px] text-[#6b6b6b]">({t.cookie.optional})</span>
                        <p className="mt-1 font-montserrat text-xs text-[#6b6b6b]">{t.cookie.marketingDesc}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div
                className={`flex flex-col gap-2.5 px-5 pb-6 pt-2 sm:flex-row sm:gap-3 sm:px-6 sm:pb-7 ${
                  isRTL ? 'sm:flex-row-reverse' : ''
                }`}
              >
                <button type="button" onClick={acceptAll} className={primaryButtonClass} data-cursor-hover>
                  {t.cookie.acceptAll}
                </button>
                <button type="button" onClick={rejectAll} className={secondaryButtonClass} data-cursor-hover>
                  {t.cookie.essentialOnly}
                </button>
                <button
                  type="button"
                  onClick={() => setShowDetails(!showDetails)}
                  className={secondaryButtonClass}
                  data-cursor-hover
                >
                  {t.cookie.cookiesSettings || t.cookie.showDetails}
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
