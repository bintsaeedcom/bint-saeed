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
import {
  glassOverlayPanel,
  glassOverlayWash,
  glassPrimaryBtn,
  glassSecondaryBtnOnDark,
  glassTextBodyOnDark,
  glassTextLinkOnDark,
  glassTextMutedOnDark,
  glassTextTitleOnDark,
} from '@/lib/ui/glassClasses'
import { hasRegionalExperienceChoice } from '@/lib/geo/geoDetection'

/** After first browse + regional — avoid stacking two overlays. */
const COOKIE_DELAY_MS = 60_000
/** If regional never settles (geo miss / bot skip), still ask for cookies. */
const COOKIE_FALLBACK_MS = 75_000

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const barRef = useRef<HTMLDivElement | null>(null)
  const { t, isRTL } = useLanguage()

  useEffect(() => {
    if (localStorage.getItem('cookieConsent')) return

    let cancelled = false
    let minDelayDone = false
    let regionalSettled = hasRegionalExperienceChoice()

    const maybeShow = () => {
      if (cancelled || !minDelayDone || !regionalSettled) return
      setShowConsent(true)
    }

    const onRegionalClosed = () => {
      regionalSettled = true
      maybeShow()
    }

    window.addEventListener('regional-experience-closed', onRegionalClosed)

    const delayTimer = window.setTimeout(() => {
      minDelayDone = true
      maybeShow()
    }, COOKIE_DELAY_MS)

    const fallbackTimer = window.setTimeout(() => {
      regionalSettled = true
      minDelayDone = true
      maybeShow()
    }, COOKIE_FALLBACK_MS)

    return () => {
      cancelled = true
      window.removeEventListener('regional-experience-closed', onRegionalClosed)
      window.clearTimeout(delayTimer)
      window.clearTimeout(fallbackTimer)
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
            className={`pointer-events-auto relative mx-auto flex max-h-[min(70vh,32rem)] w-full max-w-3xl flex-col ${glassOverlayPanel} ${
              isRTL ? 'text-right' : 'text-left'
            }`}
          >
            <div className={glassOverlayWash} aria-hidden />

            <div className="relative z-[1] min-h-0 overflow-y-auto overscroll-contain px-3.5 pb-2.5 pt-3.5 sm:px-5 sm:pt-5">
              <h2
                id="cookie-consent-title"
                className={`font-rozha text-[1.05rem] leading-snug sm:text-[1.25rem] ${glassTextTitleOnDark}`}
              >
                {t.cookie.title}
              </h2>
              <p
                className={`mt-1.5 font-montserrat text-[12px] leading-[1.55] sm:text-[13px] sm:leading-[1.65] ${glassTextBodyOnDark}`}
              >
                {t.cookie.message}
              </p>
              <LocaleLink
                href="/cookie-policy"
                className={`mt-1.5 inline-block font-montserrat text-[11px] transition-opacity hover:opacity-80 sm:text-xs ${glassTextLinkOnDark}`}
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
                    <div
                      className={`mt-3 space-y-2.5 border-t border-white/15 pt-3 ${
                        isRTL ? 'text-right' : 'text-left'
                      }`}
                    >
                      <div>
                        <span className={`font-montserrat text-xs font-medium ${glassTextTitleOnDark}`}>
                          {t.cookie.essential}
                        </span>
                        <span className={`ms-2 text-[10px] ${glassTextMutedOnDark}`}>({t.cookie.alwaysOn})</span>
                        <p className={`mt-1 font-montserrat text-[11px] leading-relaxed sm:text-xs ${glassTextMutedOnDark}`}>
                          {t.cookie.essentialDesc}
                        </p>
                      </div>
                      <div>
                        <span className={`font-montserrat text-xs font-medium ${glassTextTitleOnDark}`}>
                          {t.cookie.analytics}
                        </span>
                        <span className={`ms-2 text-[10px] ${glassTextMutedOnDark}`}>({t.cookie.optional})</span>
                        <p className={`mt-1 font-montserrat text-[11px] leading-relaxed sm:text-xs ${glassTextMutedOnDark}`}>
                          {t.cookie.analyticsDesc}
                        </p>
                      </div>
                      <div>
                        <span className={`font-montserrat text-xs font-medium ${glassTextTitleOnDark}`}>
                          {t.cookie.marketing}
                        </span>
                        <span className={`ms-2 text-[10px] ${glassTextMutedOnDark}`}>({t.cookie.optional})</span>
                        <p className={`mt-1 font-montserrat text-[11px] leading-relaxed sm:text-xs ${glassTextMutedOnDark}`}>
                          {t.cookie.marketingDesc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div
              className={`relative z-[1] shrink-0 grid grid-cols-1 gap-1.5 border-t border-white/12 px-3.5 py-2.5 sm:flex sm:gap-2.5 sm:px-5 sm:py-4 ${
                isRTL ? 'sm:flex-row-reverse' : ''
              }`}
            >
              <button type="button" onClick={acceptAll} className={glassPrimaryBtn} data-cursor-hover>
                {t.cookie.acceptAll}
              </button>
              <button type="button" onClick={rejectAll} className={glassSecondaryBtnOnDark} data-cursor-hover>
                {t.cookie.essentialOnly}
              </button>
              <button
                type="button"
                onClick={() => setShowDetails(!showDetails)}
                className={glassSecondaryBtnOnDark}
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
