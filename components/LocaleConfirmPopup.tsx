'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { fetchGeoData, shouldShowLocaleConfirmPopup, languageLabels } from '@/lib/geo/geoDetection'

export default function LocaleConfirmPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [detectedLang, setDetectedLang] = useState<string | null>(null)
  const { language, setLanguage } = useLanguage()

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

  if (!isVisible || !detectedLang || detectedLang === 'en') return null

  const label = languageLabels[detectedLang] || detectedLang

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[95] flex items-end sm:items-center justify-center p-4 sm:p-6 bg-black/5 sm:bg-black/10"
      >
        <motion.div
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 24, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="pointer-events-auto w-full max-w-md bg-white border border-brand-stone/30 shadow-2xl rounded-2xl p-6 sm:p-8"
        >
          <p className="font-roboto text-sm text-brand-darkRed/80 tracking-wide text-center mb-6">
            Continue in {label} or switch to English?
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={handleStay}
              className="flex-1 px-6 py-3.5 bg-brand-darkRed text-white font-roboto text-xs uppercase tracking-[0.12em] hover:bg-brand-dustyBlue transition-colors rounded-lg"
              data-cursor-hover
            >
              Stay in {label}
            </button>
            <button
              onClick={handleSwitchToEnglish}
              className="flex-1 px-6 py-3.5 border border-brand-stone/40 text-brand-darkRed font-roboto text-xs uppercase tracking-[0.12em] hover:border-brand-dustyBlue hover:text-brand-dustyBlue transition-colors rounded-lg"
              data-cursor-hover
            >
              Continue in English
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
