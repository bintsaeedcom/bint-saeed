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
  type GeoData,
} from '@/lib/geo/geoDetection'
import { getRegionalExperienceCopy, getContinueInLanguageCta } from '@/lib/geo/regionalExperienceCopy'
import { ctaButtonRow, ctaInButtonRow } from '@/lib/ui/ctaClasses'
import { isLikelySearchBotUserAgent } from '@/lib/bots/isLikelySearchBot'
import { localizedPath, stripLocaleFromPathname, type AppLocale } from '@/lib/i18n/routing'
import { formFieldClass } from '@/lib/ui/formFieldClasses'
import {
  glassPanel,
  glassPanelWash,
  glassPrimaryBtn,
  glassSecondaryBtn,
  glassTextBody,
  glassTextMuted,
  glassTextTitle,
} from '@/lib/ui/glassClasses'

/** Defer after cookie so first product browse is uninterrupted. */
const POPUP_DELAY_MS = 9000

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

  const dismiss = (choice: 'confirmed' | 'changed' | 'dismissed') => {
    persistRegionalExperienceChoice(choice)
    setIsVisible(false)
  }

  const handleContinueEnglish = () => {
    if (geo) applyCurrency(geo.suggestedCurrency)
    applyLocale('en')
    dismiss('confirmed')
  }

  const handleContinueLocal = () => {
    if (!geo) return
    const localLang = resolveRegionalLocalLanguage(geo, urlLocale)
    if (!localLang) return
    applyCurrency(geo.suggestedCurrency)
    applyLocale(localLang as Language)
    dismiss('confirmed')
  }

  const handleApplyPreferences = () => {
    applyCurrency(pendingCurrency)
    applyLocale(pendingLang)
    dismiss('changed')
  }

  const localLangCode = geo ? resolveRegionalLocalLanguage(geo, urlLocale) : null
  const localLangCta = localLangCode ? getContinueInLanguageCta(localLangCode) : null
  const suggestedCurrencyLabel = geo
    ? currencies.find((c) => c.code === geo.suggestedCurrency)?.code || geo.suggestedCurrency
    : currency.code
  const bodyCopy = geo
    ? geo.city
      ? t.bodyWithCity(geo.city, geo.countryName, suggestedCurrencyLabel)
      : t.bodyCountryOnly(geo.countryName, suggestedCurrencyLabel)
    : ''

  return (
    <AnimatePresence>
      {isVisible && geo && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-none fixed inset-0 z-[88] bg-[#1a0a0f]/12"
            aria-hidden
          />
          <motion.div
            role="dialog"
            aria-modal="false"
            aria-labelledby="regional-experience-title"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.99 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-none fixed inset-0 z-[92] flex items-end justify-center p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:items-center sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              dir="ltr"
              className={`pointer-events-auto relative max-h-[min(88vh,36rem)] w-full max-w-[26rem] overflow-y-auto overscroll-contain rounded-sm text-left ${glassPanel}`}
            >
              <div className={glassPanelWash} aria-hidden />

              <div className="relative z-[1] px-5 pb-6 pt-7 sm:px-7 sm:pb-7 sm:pt-8">
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0 space-y-2">
                    <p className={`font-montserrat text-[10px] uppercase tracking-[0.32em] ${glassTextMuted}`}>
                      {t.eyebrow}
                    </p>
                    <h2
                      id="regional-experience-title"
                      className={`font-rozha text-[clamp(1.25rem,5vw,1.65rem)] leading-[1.15] ${glassTextTitle}`}
                    >
                      {t.title}
                    </h2>
                  </div>
                  <button
                    type="button"
                    onClick={() => dismiss('dismissed')}
                    className={`relative shrink-0 rounded-full p-1.5 transition-colors hover:bg-brand-darkRed/8 ${glassTextMuted} hover:text-brand-darkRed`}
                    aria-label={t.close}
                    data-cursor-hover
                  >
                    <FiX className="h-5 w-5" strokeWidth={1.25} />
                  </button>
                </div>

                <p className={`mt-5 font-montserrat text-[13px] leading-[1.65] ${glassTextBody}`}>
                  {bodyCopy}
                </p>

                <AnimatePresence initial={false}>
                  {showPreferences && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-5 space-y-4 border-t border-brand-darkRed/12 pt-5">
                        <p className={`font-montserrat text-[10px] uppercase tracking-[0.28em] ${glassTextTitle}`}>
                          {t.changeTitle}
                        </p>

                        <label className="block space-y-1.5">
                          <span className={`font-montserrat text-[11px] uppercase tracking-[0.18em] ${glassTextMuted}`}>
                            {t.languageLabel}
                          </span>
                          <div className="relative">
                            <select
                              value={pendingLang}
                              onChange={(e) => setPendingLang(e.target.value as Language)}
                              className={`${formFieldClass} appearance-none pr-10`}
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
                          <span className={`font-montserrat text-[11px] uppercase tracking-[0.18em] ${glassTextMuted}`}>
                            {t.currencyLabel}
                          </span>
                          <div className="relative">
                            <select
                              value={pendingCurrency}
                              onChange={(e) => setPendingCurrency(e.target.value)}
                              className={`${formFieldClass} appearance-none pr-10`}
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
                          className={glassSecondaryBtn}
                          data-bs-cta
                          data-cursor-hover
                        >
                          {t.apply}
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className={`mt-8 ${ctaButtonRow}`} data-bs-cta-row data-bs-cta-row-layout="wrap">
                  <button
                    type="button"
                    onClick={handleContinueEnglish}
                    className={`${glassPrimaryBtn} ${ctaInButtonRow}`}
                    data-bs-cta
                    data-cursor-hover
                  >
                    {t.continueEnglish}
                  </button>
                  {localLangCode && localLangCode !== 'en' && localLangCta ? (
                    <button
                      type="button"
                      onClick={handleContinueLocal}
                      className={`${glassSecondaryBtn} ${ctaInButtonRow}`}
                      data-bs-cta
                      data-cursor-hover
                    >
                      {localLangCta}
                    </button>
                  ) : null}
                </div>

                <button
                  type="button"
                  onClick={() => setShowPreferences((v) => !v)}
                  className={`mt-4 w-full py-2 font-montserrat text-[11px] tracking-[0.04em] transition-colors hover:text-brand-darkRed ${glassTextMuted}`}
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
