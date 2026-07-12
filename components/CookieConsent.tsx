'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import LocaleLink from '@/components/LocaleLink'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { setConsentState } from '@/lib/analytics/consent'
import {
  clearMobileBottomChrome,
  publishMobileBottomChrome,
} from '@/lib/ui/mobileBottomChrome'

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const barRef = useRef<HTMLDivElement | null>(null)
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
    if (!showConsent) {
      clearMobileBottomChrome('cookie')
      return
    }
    const el = barRef.current
    if (!el) return
    const publish = () => publishMobileBottomChrome('cookie', el.getBoundingClientRect().height)
    publish()
    const ro = new ResizeObserver(publish)
    ro.observe(el)
    return () => {
      ro.disconnect()
      clearMobileBottomChrome('cookie')
    }
  }, [showConsent, showDetails])

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
    'pointer-events-auto min-h-[42px] w-full rounded border border-brand-darkRed bg-brand-darkRed px-3 py-2.5 font-montserrat text-[10px] uppercase tracking-[0.12em] text-white transition-colors hover:bg-brand-darkMagenta sm:min-w-[8rem] sm:flex-1'
  const secondaryButtonClass =
    'pointer-events-auto min-h-[42px] w-full rounded border border-brand-darkRed/20 bg-transparent px-3 py-2.5 font-montserrat text-[10px] uppercase tracking-[0.1em] text-brand-darkRed/60 transition-colors hover:border-brand-darkRed/35 hover:bg-brand-stone/10 hover:text-brand-darkRed/80 sm:min-w-[7.5rem] sm:flex-1'

  return (
    <AnimatePresence>
      {showConsent && (
        <motion.div
          key="cookie-consent-bar"
          ref={barRef}
          role="dialog"
          aria-modal="false"
          aria-labelledby="cookie-consent-title"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20, transition: { duration: 0.2 } }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-none fixed inset-x-0 bottom-0 z-[100] p-2.5 pb-[max(0.65rem,env(safe-area-inset-bottom))] sm:p-4 sm:pb-[max(1rem,env(safe-area-inset-bottom))]"
        >
          <div
            className={`pointer-events-auto mx-auto flex max-h-[min(70vh,32rem)] w-full max-w-3xl flex-col overflow-hidden rounded-sm border border-brand-darkRed/25 bg-[#faf8f5]/98 shadow-[0_18px_40px_-16px_rgba(26,2,16,0.28)] backdrop-blur-md ${
              isRTL ? 'text-right' : 'text-left'
            }`}
          >
            <div className="min-h-0 overflow-y-auto overscroll-contain px-3.5 pb-2.5 pt-3.5 sm:px-5 sm:pt-5">
              <h2
                id="cookie-consent-title"
                className="font-rozha text-[1.05rem] leading-snug text-brand-darkRed sm:text-[1.25rem]"
              >
                {t.cookie.title}
              </h2>
              <p className="mt-1.5 font-montserrat text-[12px] leading-[1.55] text-[#4a4a4a] sm:text-[13px] sm:leading-[1.65]">
                {t.cookie.message}
              </p>
              <LocaleLink
                href="/cookie-policy"
                className="mt-1.5 inline-block font-montserrat text-[11px] text-brand-darkRed/90 underline transition-colors hover:text-brand-darkRed sm:text-xs"
              >
                {t.cookie.learnMore}
              </LocaleLink>

              <AnimatePresence>
                {showDetails && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className={`mt-3 space-y-2.5 border-t border-[#e8e2db] pt-3 ${isRTL ? 'text-right' : 'text-left'}`}>
                      <div>
                        <span className="font-montserrat text-xs font-medium text-brand-darkRed">
                          {t.cookie.essential}
                        </span>
                        <span className="ms-2 text-[10px] text-[#6b6b6b]">({t.cookie.alwaysOn})</span>
                        <p className="mt-1 font-montserrat text-[11px] leading-relaxed text-[#6b6b6b] sm:text-xs">
                          {t.cookie.essentialDesc}
                        </p>
                      </div>
                      <div>
                        <span className="font-montserrat text-xs font-medium text-brand-darkRed">
                          {t.cookie.analytics}
                        </span>
                        <span className="ms-2 text-[10px] text-[#6b6b6b]">({t.cookie.optional})</span>
                        <p className="mt-1 font-montserrat text-[11px] leading-relaxed text-[#6b6b6b] sm:text-xs">
                          {t.cookie.analyticsDesc}
                        </p>
                      </div>
                      <div>
                        <span className="font-montserrat text-xs font-medium text-brand-darkRed">
                          {t.cookie.marketing}
                        </span>
                        <span className="ms-2 text-[10px] text-[#6b6b6b]">({t.cookie.optional})</span>
                        <p className="mt-1 font-montserrat text-[11px] leading-relaxed text-[#6b6b6b] sm:text-xs">
                          {t.cookie.marketingDesc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div
              className={`shrink-0 grid grid-cols-1 gap-1.5 border-t border-[#e8e2db]/80 px-3.5 py-2.5 sm:flex sm:gap-2.5 sm:px-5 sm:py-4 ${
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
      )}
    </AnimatePresence>
  )
}
