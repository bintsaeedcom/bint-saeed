'use client'

import { useState, useEffect, useCallback, useMemo } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiChevronDown } from 'react-icons/fi'
import { useCurrency, currencies } from '@/lib/currency/CurrencyContext'
import { useLanguage, VALID_LANGUAGES, type Language } from '@/lib/i18n/LanguageContext'
import {
  fetchGeoData,
  hasRegionalExperienceChoice,
  persistRegionalExperienceChoice,
  shouldShowRegionalExperiencePopup,
  languageLabels,
  type GeoData,
} from '@/lib/geo/geoDetection'
import { getRegionalExperienceCopy } from '@/lib/geo/regionalExperienceCopy'
import { dispatchRequestPreciseLocation } from '@/lib/geo/locationEvents'
import { isLikelySearchBotUserAgent } from '@/lib/bots/isLikelySearchBot'
import { localizedPath, stripLocaleFromPathname, type AppLocale } from '@/lib/i18n/routing'

const POPUP_DELAY_MS = 2600

const LANGUAGE_OPTIONS: { code: Language; native: string }[] = [
  { code: 'en', native: 'English' },
  { code: 'ar', native: 'العربية' },
  { code: 'zh', native: '中文' },
  { code: 'de', native: 'Deutsch' },
  { code: 'fr', native: 'Français' },
  { code: 'it', native: 'Italiano' },
  { code: 'es', native: 'Español' },
  { code: 'ru', native: 'Русский' },
  { code: 'id', native: 'Bahasa Indonesia' },
]

function waitForCookieConsent(): Promise<void> {
  return new Promise((resolve) => {
    if (typeof window === 'undefined') {
      resolve()
      return
    }
    if (localStorage.getItem('cookieConsent')) {
      resolve()
      return
    }
    const onClosed = () => {
      window.removeEventListener('cookie-consent-closed', onClosed)
      resolve()
    }
    window.addEventListener('cookie-consent-closed', onClosed)
  })
}

export default function RegionalExperiencePopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [geo, setGeo] = useState<GeoData | null>(null)
  const [showPreferences, setShowPreferences] = useState(false)
  const [pendingLang, setPendingLang] = useState<Language>('en')
  const [pendingCurrency, setPendingCurrency] = useState('AED')

  const { currency, setCurrency } = useCurrency()
  const { language, setLanguage, isRTL } = useLanguage()
  const router = useRouter()
  const pathname = usePathname() || '/'

  const { locale: urlLocale, pathname: innerPath } = stripLocaleFromPathname(pathname)
  const copyLocale = (geo?.suggestedLanguage === 'en' ? 'en' : geo?.suggestedLanguage || language) as AppLocale
  const t = useMemo(() => getRegionalExperienceCopy(copyLocale), [copyLocale])

  const applyLocale = useCallback(
    (lang: Language) => {
      if (!VALID_LANGUAGES.includes(lang)) return
      const target = localizedPath(lang === 'en' ? 'en' : (lang as AppLocale), innerPath)
      if (target !== pathname) {
        router.push(target, { scroll: false })
      }
      setLanguage(lang)
    },
    [innerPath, pathname, router, setLanguage],
  )

  const applyCurrency = useCallback(
    (code: string) => {
      setCurrency(code)
    },
    [setCurrency],
  )

  const applyGeoDefaults = useCallback(
    (data: GeoData) => {
      applyCurrency(data.suggestedCurrency)
      const savedLang = localStorage.getItem('language')
      const onEnglishPath = urlLocale === 'en'
      if (onEnglishPath && !savedLang && data.suggestedLanguage !== 'en') {
        applyLocale(data.suggestedLanguage as Language)
      }
    },
    [applyCurrency, applyLocale, urlLocale],
  )

  useEffect(() => {
    if (typeof navigator !== 'undefined' && isLikelySearchBotUserAgent(navigator.userAgent)) return
    if (hasRegionalExperienceChoice()) return

    let cancelled = false
    let popupTimer: number | undefined

    const run = async () => {
      const data = await fetchGeoData()
      if (cancelled || !data) return

      setGeo(data)
      setPendingLang(
        VALID_LANGUAGES.includes(data.suggestedLanguage as Language)
          ? (data.suggestedLanguage as Language)
          : 'en',
      )
      setPendingCurrency(data.suggestedCurrency)
      applyGeoDefaults(data)

      if (!shouldShowRegionalExperiencePopup(data, urlLocale)) {
        persistRegionalExperienceChoice('confirmed')
        return
      }

      await waitForCookieConsent()
      if (cancelled) return

      popupTimer = window.setTimeout(() => {
        if (!cancelled) setIsVisible(true)
      }, POPUP_DELAY_MS)
    }

    void run()

    return () => {
      cancelled = true
      if (popupTimer) window.clearTimeout(popupTimer)
    }
  }, [applyGeoDefaults, urlLocale])

  const dismiss = (choice: 'confirmed' | 'changed' | 'dismissed') => {
    persistRegionalExperienceChoice(choice)
    setIsVisible(false)
  }

  const handleContinue = () => {
    if (geo) {
      applyCurrency(geo.suggestedCurrency)
      applyLocale((geo.suggestedLanguage as Language) || 'en')
    }
    dispatchRequestPreciseLocation()
    dismiss('confirmed')
  }

  const handleApplyPreferences = () => {
    applyCurrency(pendingCurrency)
    applyLocale(pendingLang)
    dispatchRequestPreciseLocation()
    dismiss('changed')
  }

  const suggestedLangLabel = geo
    ? languageLabels[geo.suggestedLanguage] || geo.suggestedLanguage
    : languageLabels.en
  const suggestedCurrencyLabel = geo
    ? currencies.find((c) => c.code === geo.suggestedCurrency)?.code || geo.suggestedCurrency
    : currency.code

  return (
    <AnimatePresence>
      {isVisible && geo && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-none fixed inset-0 z-[88] bg-[#1a0a0f]/[0.14] backdrop-blur-[3px]"
            aria-hidden
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="regional-experience-title"
            initial={{ opacity: 0, y: 32, scale: 0.98, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: 24, scale: 0.99, filter: 'blur(4px)' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-4 bottom-6 z-[92] mx-auto max-h-[min(90vh,calc(100dvh-2rem))] w-full max-w-[26rem] overflow-y-auto sm:inset-x-auto sm:bottom-auto sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className={`relative overflow-hidden rounded-sm border border-brand-stone/30 bg-[#faf8f6] shadow-[0_32px_70px_-18px_rgba(59,0,20,0.28)] ${
                isRTL ? 'text-right' : 'text-left'
              }`}
            >
              <div
                className={`absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-brand-rose/55 to-transparent ${
                  isRTL ? 'right-0' : 'left-0'
                }`}
                aria-hidden
              />

              <div className={`px-7 pt-8 pb-7 ${isRTL ? 'pr-8 pl-6' : 'pl-8 pr-6'}`}>
                <div className={`flex items-start justify-between gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className="min-w-0 space-y-2.5">
                    <p className="font-montserrat text-[10px] uppercase tracking-[0.38em] text-brand-clayRed/65">
                      {t.eyebrow}
                    </p>
                    <h2
                      id="regional-experience-title"
                      className="font-rozha text-[1.75rem] leading-tight text-brand-darkRed"
                    >
                      {t.title}
                    </h2>
                  </div>
                  <button
                    type="button"
                    onClick={() => dismiss('dismissed')}
                    className="shrink-0 rounded-full p-1.5 text-brand-darkRed/35 transition-colors hover:bg-brand-stone/20 hover:text-brand-darkRed"
                    aria-label={t.close}
                    data-cursor-hover
                  >
                    <FiX className="h-5 w-5" strokeWidth={1.25} />
                  </button>
                </div>

                <p className="mt-5 font-montserrat text-[13px] font-light leading-[1.7] tracking-wide text-neutral-600">
                  {t.body}
                </p>

                <div className="mt-6 space-y-3 border-t border-brand-stone/20 pt-5">
                  {(geo.city || geo.countryName) && (
                    <p className="font-montserrat text-[11px] uppercase tracking-[0.22em] text-neutral-400">
                      {t.detectedLine(geo.city || '', geo.countryName)}
                    </p>
                  )}
                  <p className="font-montserrat text-[12px] text-brand-clayRed/90">
                    {t.settingsLine(suggestedLangLabel, suggestedCurrencyLabel)}
                  </p>
                </div>

                <AnimatePresence initial={false}>
                  {showPreferences && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-5 space-y-4 border-t border-brand-stone/20 pt-5">
                        <p className="font-montserrat text-[10px] uppercase tracking-[0.28em] text-brand-darkRed/70">
                          {t.changeTitle}
                        </p>

                        <label className="block space-y-1.5">
                          <span className="font-montserrat text-[11px] uppercase tracking-[0.18em] text-neutral-500">
                            {t.languageLabel}
                          </span>
                          <div className="relative">
                            <select
                              value={pendingLang}
                              onChange={(e) => setPendingLang(e.target.value as Language)}
                              className={`w-full appearance-none border border-brand-stone/35 bg-white/80 py-3 font-montserrat text-[13px] text-brand-darkRed outline-none focus:border-brand-darkRed/40 ${
                                isRTL ? 'pl-10 pr-4 text-right' : 'pl-4 pr-10'
                              }`}
                            >
                              {LANGUAGE_OPTIONS.map((opt) => (
                                <option key={opt.code} value={opt.code}>
                                  {opt.native}
                                </option>
                              ))}
                            </select>
                            <FiChevronDown
                              className={`pointer-events-none absolute top-1/2 h-4 w-4 -translate-y-1/2 text-brand-darkRed/45 ${
                                isRTL ? 'left-3' : 'right-3'
                              }`}
                            />
                          </div>
                        </label>

                        <label className="block space-y-1.5">
                          <span className="font-montserrat text-[11px] uppercase tracking-[0.18em] text-neutral-500">
                            {t.currencyLabel}
                          </span>
                          <div className="relative">
                            <select
                              value={pendingCurrency}
                              onChange={(e) => setPendingCurrency(e.target.value)}
                              className={`w-full appearance-none border border-brand-stone/35 bg-white/80 py-3 font-montserrat text-[13px] text-brand-darkRed outline-none focus:border-brand-darkRed/40 ${
                                isRTL ? 'pl-10 pr-4 text-right' : 'pl-4 pr-10'
                              }`}
                            >
                              {currencies.map((c) => (
                                <option key={c.code} value={c.code}>
                                  {c.name} ({c.code})
                                </option>
                              ))}
                            </select>
                            <FiChevronDown
                              className={`pointer-events-none absolute top-1/2 h-4 w-4 -translate-y-1/2 text-brand-darkRed/45 ${
                                isRTL ? 'left-3' : 'right-3'
                              }`}
                            />
                          </div>
                        </label>

                        <button
                          type="button"
                          onClick={handleApplyPreferences}
                          className="w-full border border-brand-darkRed/20 bg-white py-3.5 font-montserrat text-[10px] uppercase tracking-[0.22em] text-brand-darkRed transition-colors hover:border-brand-darkRed/35 hover:bg-brand-stone/10"
                          data-cursor-hover
                        >
                          {t.apply}
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className={`mt-8 flex flex-col gap-3 ${isRTL ? 'sm:flex-row-reverse' : 'sm:flex-row'}`}>
                  <button
                    type="button"
                    onClick={() => setShowPreferences((v) => !v)}
                    className="sm:flex-1 border border-brand-darkRed/15 py-3.5 px-5 font-montserrat text-[10px] uppercase tracking-[0.22em] text-brand-darkRed transition-colors hover:border-brand-darkRed/30 hover:bg-white/60"
                    data-cursor-hover
                  >
                    {t.secondary}
                  </button>
                  <button
                    type="button"
                    onClick={handleContinue}
                    className="sm:flex-1 bg-brand-darkRed py-3.5 px-5 font-montserrat text-[10px] uppercase tracking-[0.22em] text-white shadow-sm transition-colors hover:bg-brand-darkMagenta"
                    data-cursor-hover
                  >
                    {t.primary(suggestedLangLabel)}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
