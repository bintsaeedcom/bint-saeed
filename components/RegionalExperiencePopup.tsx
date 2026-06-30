'use client'

import { useState, useEffect, useCallback } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiChevronDown } from 'react-icons/fi'
import { useCurrency, currencies } from '@/lib/currency/CurrencyContext'
import { useLanguage, VALID_LANGUAGES, type Language } from '@/lib/i18n/LanguageContext'
import {
  fetchGeoData,
  hasRegionalExperienceChoice,
  persistRegionalExperienceChoice,
  resolveRegionalLocalLanguage,
  shouldShowRegionalExperiencePopup,
  languageLabelsEnglish,
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
  { code: 'ms', native: 'Bahasa Melayu' },
  { code: 'nl', native: 'Nederlands' },
  { code: 'pt', native: 'Português' },
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
  const { setLanguage } = useLanguage()
  const router = useRouter()
  const pathname = usePathname() || '/'
  const t = getRegionalExperienceCopy()

  const { locale: urlLocale, pathname: innerPath } = stripLocaleFromPathname(pathname)

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

  const applySuggestedCurrencySilently = useCallback(
    (data: GeoData) => {
      const currencySaved =
        typeof window !== 'undefined' && !!localStorage.getItem('bint-saeed-currency')
      if (!currencySaved) {
        applyCurrency(data.suggestedCurrency)
      }
    },
    [applyCurrency],
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
      applySuggestedCurrencySilently(data)

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
  }, [applySuggestedCurrencySilently, urlLocale])

  useEffect(() => {
    if (!isVisible) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [isVisible])

  const dismiss = (choice: 'confirmed' | 'changed' | 'dismissed') => {
    persistRegionalExperienceChoice(choice)
    setIsVisible(false)
  }

  const handleContinueEnglish = () => {
    if (geo) applyCurrency(geo.suggestedCurrency)
    applyLocale('en')
    dispatchRequestPreciseLocation()
    dismiss('confirmed')
  }

  const handleContinueLocal = () => {
    if (!geo) return
    const localLang = resolveRegionalLocalLanguage(geo, urlLocale)
    if (!localLang) return
    applyCurrency(geo.suggestedCurrency)
    applyLocale(localLang as Language)
    dispatchRequestPreciseLocation()
    dismiss('confirmed')
  }

  const handleApplyPreferences = () => {
    applyCurrency(pendingCurrency)
    applyLocale(pendingLang)
    dispatchRequestPreciseLocation()
    dismiss('changed')
  }

  const localLangCode = geo ? resolveRegionalLocalLanguage(geo, urlLocale) : null
  const localLangLabel = localLangCode
    ? languageLabelsEnglish[localLangCode] || localLangCode
    : null
  const suggestedCurrencyLabel = geo
    ? currencies.find((c) => c.code === geo.suggestedCurrency)?.code || geo.suggestedCurrency
    : currency.code

  const primaryButtonClass =
    'w-full border border-brand-darkRed bg-brand-darkRed py-3.5 px-5 font-montserrat text-[10px] uppercase tracking-[0.2em] text-white transition-colors hover:bg-brand-darkMagenta sm:flex-1'
  const secondaryButtonClass =
    'w-full border border-brand-darkRed/20 bg-transparent py-3.5 px-5 font-montserrat text-[10px] uppercase tracking-[0.18em] text-brand-darkRed/60 transition-colors hover:border-brand-darkRed/35 hover:bg-brand-stone/10 hover:text-brand-darkRed/80 sm:flex-1'

  return (
    <AnimatePresence>
      {isVisible && geo && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[88] bg-[#1a0a0f]/20 backdrop-blur-[6px]"
            aria-hidden
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="regional-experience-title"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.99 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[92] flex items-center justify-center p-4 sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              dir="ltr"
              className="relative w-full max-w-[26rem] overflow-hidden rounded-sm border border-brand-stone/30 bg-[#faf8f6] text-left shadow-[0_32px_70px_-18px_rgba(59,0,20,0.28)]"
            >
              <div className="absolute top-0 bottom-0 left-0 w-px bg-gradient-to-b from-transparent via-brand-rose/55 to-transparent" aria-hidden />

              <div className="px-7 pb-7 pt-8">
                <div className="flex items-start justify-between gap-4">
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
                  {geo.suggestedLanguage !== 'en' && localLangLabel ? (
                    <p className="font-montserrat text-[12px] text-brand-clayRed/90">
                      {t.settingsLine(localLangLabel, suggestedCurrencyLabel)}
                    </p>
                  ) : localLangLabel ? (
                    <p className="font-montserrat text-[12px] text-brand-clayRed/90">
                      {t.currentLanguageLine(localLangLabel)}
                    </p>
                  ) : null}
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
                              className="w-full appearance-none border border-brand-stone/35 bg-white/80 py-3 pl-4 pr-10 font-montserrat text-[13px] text-brand-darkRed outline-none focus:border-brand-darkRed/40"
                            >
                              {LANGUAGE_OPTIONS.map((opt) => (
                                <option key={opt.code} value={opt.code}>
                                  {opt.native}
                                </option>
                              ))}
                            </select>
                            <FiChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-darkRed/45" />
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
                              className="w-full appearance-none border border-brand-stone/35 bg-white/80 py-3 pl-4 pr-10 font-montserrat text-[13px] text-brand-darkRed outline-none focus:border-brand-darkRed/40"
                            >
                              {currencies.map((c) => (
                                <option key={c.code} value={c.code}>
                                  {c.name} ({c.code})
                                </option>
                              ))}
                            </select>
                            <FiChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-darkRed/45" />
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

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <button
                    type="button"
                    onClick={handleContinueEnglish}
                    className={primaryButtonClass}
                    data-cursor-hover
                  >
                    {t.continueEnglish}
                  </button>
                  {localLangCode && localLangCode !== 'en' && localLangLabel ? (
                    <button
                      type="button"
                      onClick={handleContinueLocal}
                      className={secondaryButtonClass}
                      data-cursor-hover
                    >
                      {t.continueLocal(localLangLabel)}
                    </button>
                  ) : null}
                </div>

                <button
                  type="button"
                  onClick={() => setShowPreferences((v) => !v)}
                  className="mt-4 w-full py-2 font-montserrat text-[10px] uppercase tracking-[0.18em] text-brand-darkRed/45 transition-colors hover:text-brand-darkRed/70"
                  data-cursor-hover
                >
                  {t.secondary}
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
