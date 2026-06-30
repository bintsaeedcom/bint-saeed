'use client'

import { useState, useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage, VALID_LANGUAGES, type Language } from '@/lib/i18n/LanguageContext'
import {
  fetchGeoData,
  resolveRegionalLocalLanguage,
  shouldShowRegionalExperiencePopup,
  languageLabelsEnglish,
} from '@/lib/geo/geoDetection'
import { localizedPath, stripLocaleFromPathname, type AppLocale } from '@/lib/i18n/routing'

/** Legacy fallback — prefer RegionalExperiencePopup in LayoutWrapper. */
export default function LocaleConfirmPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [localLangCode, setLocalLangCode] = useState<string | null>(null)
  const { setLanguage } = useLanguage()
  const pathname = usePathname() || '/'
  const router = useRouter()
  const { locale: urlLocale } = stripLocaleFromPathname(pathname)

  useEffect(() => {
    const localeConfirmDismissed = localStorage.getItem('bint-saeed-locale-confirm-dismissed')
    if (localeConfirmDismissed) return

    const run = async () => {
      const geo = await fetchGeoData()
      if (!geo || !shouldShowRegionalExperiencePopup(geo, urlLocale)) return
      const local = resolveRegionalLocalLanguage(geo, urlLocale)
      if (!local) return
      sessionStorage.setItem('bint-saeed-detected-lang', local)
      setLocalLangCode(local)
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
  }, [urlLocale])

  const applyLocale = (lang: string) => {
    if (!VALID_LANGUAGES.includes(lang as Language)) return
    const { pathname: inner } = stripLocaleFromPathname(pathname)
    const target = localizedPath(lang === 'en' ? 'en' : (lang as AppLocale), inner)
    router.push(target, { scroll: false })
    setLanguage(lang as Language)
  }

  const handleContinueEnglish = () => {
    applyLocale('en')
    localStorage.setItem('bint-saeed-locale-confirm-dismissed', 'true')
    setIsVisible(false)
  }

  const handleContinueLocal = () => {
    if (!localLangCode) return
    applyLocale(localLangCode)
    localStorage.setItem('bint-saeed-locale-confirm-dismissed', 'true')
    setIsVisible(false)
  }

  const show = isVisible && localLangCode && localLangCode !== 'en'
  const label = show ? languageLabelsEnglish[localLangCode] || localLangCode : ''

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
            className="mb-6 text-center font-montserrat text-sm tracking-wide text-brand-darkRed/80"
          >
            Continue in English or switch to {label}?
          </p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <button
              type="button"
              onClick={handleContinueEnglish}
              className="flex-1 rounded-lg bg-brand-darkRed px-6 py-3.5 font-montserrat text-xs uppercase tracking-[0.12em] text-white transition-colors hover:bg-brand-dustyBlue"
              data-cursor-hover
            >
              Continue in English
            </button>
            <button
              type="button"
              onClick={handleContinueLocal}
              className="flex-1 rounded-lg border border-brand-stone/40 px-6 py-3.5 font-montserrat text-xs uppercase tracking-[0.12em] text-brand-darkRed transition-colors hover:border-brand-dustyBlue hover:text-brand-dustyBlue"
              data-cursor-hover
            >
              Continue in {label}
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
