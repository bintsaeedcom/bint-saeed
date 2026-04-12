'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { fetchGeoData, shouldShowLocaleConfirmPopup, languageLabels } from '@/lib/geo/geoDetection'

export default function LocaleConfirmPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [detectedLang, setDetectedLang] = useState<string | null>(null)
  const { setLanguage } = useLanguage()

  useEffect(() => {
    const localeConfirmDismissed = localStorage.getItem('bint-saeed-locale-confirm-dismissed')
    if (localeConfirmDismissed) return

    const run = async () => {
      const geo = await fetchGeoData()
      if (!geo || !shouldShowLocaleConfirmPopup(geo.suggestedLanguage)) return
      sessionStorage.setItem('bint-saeed-detected-lang', geo.suggestedLanguage)
      setDetectedLang(geo.suggestedLanguage)
      setIsVisible(true)
    }

    const onCookieClosed = () => {
      setTimeout(run, 600)
    }

    if (localStorage.getItem('cookieConsent')) {
      setTimeout(run, 400)
    } else {
      window.addEventListener('cookie-consent-closed', onCookieClosed)
      return () => window.removeEventListener('cookie-consent-closed', onCookieClosed)
    }
  }, [])

  const handleStay = () => {
    localStorage.setItem('bint-saeed-locale-confirm-dismissed', 'true')
    setIsVisible(false)
  }

  const handleSwitchToEnglish = () => {
    setLanguage('en')
    localStorage.setItem('bint-saeed-locale-confirm-dismissed', 'true')
    setIsVisible(false)
  }

  const show = isVisible && detectedLang && detectedLang !== 'en'
  const label = show ? languageLabels[detectedLang] || detectedLang : ''

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="locale-confirm-dialog"
          role="dialog"
          aria-modal="true"
          aria-labelledby="locale-confirm-title"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="fixed bottom-4 left-4 right-4 z-[95] mx-auto max-h-[min(90vh,calc(100dvh-2rem))] w-full max-w-md overflow-y-auto rounded-2xl border border-brand-stone/30 bg-white p-6 shadow-2xl sm:bottom-auto sm:left-1/2 sm:top-1/2 sm:right-auto sm:max-h-none sm:-translate-x-1/2 sm:-translate-y-1/2 sm:p-8"
        >
          <p
            id="locale-confirm-title"
            className="mb-6 text-center font-roboto text-sm tracking-wide text-brand-darkRed/80"
          >
            Continue in {label} or switch to English?
          </p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <button
              type="button"
              onClick={handleStay}
              className="flex-1 rounded-lg bg-brand-darkRed px-6 py-3.5 font-roboto text-xs uppercase tracking-[0.12em] text-white transition-colors hover:bg-brand-dustyBlue"
              data-cursor-hover
            >
              Stay in {label}
            </button>
            <button
              type="button"
              onClick={handleSwitchToEnglish}
              className="flex-1 rounded-lg border border-brand-stone/40 px-6 py-3.5 font-roboto text-xs uppercase tracking-[0.12em] text-brand-darkRed transition-colors hover:border-brand-dustyBlue hover:text-brand-dustyBlue"
              data-cursor-hover
            >
              Continue in English
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
