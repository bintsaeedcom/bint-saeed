'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX } from 'react-icons/fi'
import { useCurrency, currencies } from '@/lib/currency/CurrencyContext'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { commerceUi } from '@/lib/i18n/commerceUi'
import { isLikelySearchBotUserAgent } from '@/lib/bots/isLikelySearchBot'
import { ctaButtonRow, ctaInButtonRow, ctaPopupPrimary, ctaPopupSecondary } from '@/lib/ui/ctaClasses'

const TAILOR_KEY = 'bint-saeed-tailor-experience'

interface DetectedLocation {
  country: string
  countryCode: string
  currency: string
  city?: string
}

function hasTailorChoice(): boolean {
  if (typeof window === 'undefined') return true
  if (localStorage.getItem(TAILOR_KEY)) return true
  // Legacy keys from the previous currency-only banner
  if (localStorage.getItem('bint-saeed-location-consent')) return true
  if (localStorage.getItem('bint-saeed-location-dismissed')) return true
  return false
}

function persistTailorChoice(choice: 'accepted' | 'declined') {
  localStorage.setItem(TAILOR_KEY, choice)
  if (choice === 'accepted') {
    localStorage.setItem('bint-saeed-location-consent', 'true')
    localStorage.removeItem('bint-saeed-location-dismissed')
  } else {
    localStorage.setItem('bint-saeed-location-dismissed', 'true')
    localStorage.removeItem('bint-saeed-location-consent')
  }
}

const copy = {
  en: {
    eyebrow: 'Bint Saeed',
    title: 'A personal touch',
    body:
      'For a seamless visit, we can show prices in your local currency and the language that suits your region. You may skip this at any time.',
    currencyHint: (name: string, code: string) =>
      `We also suggest viewing prices in ${name} (${code}) for this region.`,
    primary: 'Tailor my visit',
    secondary: 'Continue without sharing',
  },
  ar: {
    eyebrow: 'بنت سعيد',
    title: 'لمسة شخصية',
    body:
      'لتجربة أنسَم، يمكننا عرض الأسعار بعملتك المحلية واللغة المناسبة لمنطقتك. يمكنك التخطي في أي وقت.',
    currencyHint: (name: string, code: string) =>
      `نقترح أيضًا عرض الأسعار بـ ${name} (${code}) لهذه المنطقة.`,
    primary: 'ضبط زيارتي',
    secondary: 'المتابعة دون مشاركة',
  },
} as const

export default function LocationConsent() {
  const [isVisible, setIsVisible] = useState(false)
  const [detectedLocation, setDetectedLocation] = useState<DetectedLocation | null>(null)
  const { currency, setCurrency } = useCurrency()
  const { isRTL, language } = useLanguage()
  const t = language === 'ar' ? copy.ar : copy.en

  const openIfNeeded = useCallback(() => {
    if (hasTailorChoice()) return
    const tId = window.setTimeout(() => setIsVisible(true), 2800)
    return () => window.clearTimeout(tId)
  }, [])

  useEffect(() => {
    if (typeof navigator !== 'undefined' && isLikelySearchBotUserAgent(navigator.userAgent)) return
    if (hasTailorChoice()) return

    let cancelled = false
    const detectLocation = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/')
        const data = await response.json()

        const countryToCurrency: Record<string, string> = {
          AE: 'AED',
          SA: 'SAR',
          KW: 'KWD',
          QA: 'QAR',
          BH: 'BHD',
          OM: 'OMR',
          US: 'USD',
          GB: 'GBP',
          DE: 'EUR',
          FR: 'EUR',
          IT: 'EUR',
          ES: 'EUR',
          NL: 'EUR',
          CA: 'CAD',
          SG: 'SGD',
          BN: 'BND',
          MY: 'MYR',
          MA: 'MAD',
          NG: 'NGN',
          ID: 'IDR',
          KZ: 'KZT',
          AZ: 'AZN',
          UZ: 'UZS',
          HK: 'HKD',
        }

        const suggestedCurrency = countryToCurrency[data.country_code] || 'USD'
        if (cancelled) return

        setDetectedLocation({
          country: data.country_name,
          countryCode: data.country_code,
          currency: suggestedCurrency,
          city: data.city,
        })
      } catch {
        if (!cancelled) setDetectedLocation(null)
      }
    }

    void detectLocation()
    const clearOpen = openIfNeeded()
    return () => {
      cancelled = true
      clearOpen?.()
    }
  }, [openIfNeeded])

  const handleAccept = () => {
    if (detectedLocation && detectedLocation.currency !== currency.code) {
      setCurrency(detectedLocation.currency)
    }
    persistTailorChoice('accepted')
    setIsVisible(false)
  }

  const handleDecline = () => {
    persistTailorChoice('declined')
    setIsVisible(false)
  }

  const suggestedCurrencyData = detectedLocation
    ? currencies.find((c) => c.code === detectedLocation.currency)
    : undefined
  const showCurrencyLine =
    !!detectedLocation && detectedLocation.currency !== currency.code && !!suggestedCurrencyData

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-none fixed inset-0 z-[85] bg-[#1a0a0f]/[0.12] backdrop-blur-[2px]"
            aria-hidden
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="tailor-title"
            aria-describedby="tailor-desc"
            initial={{ opacity: 0, y: 28, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className={`fixed bottom-6 md:bottom-10 z-[90] max-w-[min(24rem,calc(100vw-2rem))] end-4 md:end-10`}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="relative overflow-hidden rounded-sm border border-brand-stone/25 bg-[#faf8f6] shadow-[0_28px_60px_-15px_rgba(59,0,20,0.22)] text-start"
            >
              <div
                className="absolute top-0 bottom-0 start-0 w-px bg-gradient-to-b from-brand-stone via-brand-rose/50 to-brand-stone"
                aria-hidden
              />
              <div className="px-7 pt-8 pb-7 ps-8 pe-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-3 min-w-0">
                    <p className="font-montserrat text-[10px] uppercase tracking-[0.38em] text-brand-clayRed/65">
                      {t.eyebrow}
                    </p>
                    <h2 id="tailor-title" className="font-rozha text-[1.65rem] leading-tight text-brand-darkRed">
                      {t.title}
                    </h2>
                  </div>
                  <button
                    type="button"
                    onClick={handleDecline}
                    className="shrink-0 p-1.5 text-brand-darkRed/35 hover:text-brand-darkRed transition-colors rounded-full hover:bg-brand-stone/20"
                    aria-label={commerceUi(language).common.close}
                    data-cursor-hover
                  >
                    <FiX className="w-5 h-5" strokeWidth={1.25} />
                  </button>
                </div>

                <p
                  id="tailor-desc"
                  className="mt-5 font-montserrat font-light text-[13px] leading-[1.65] text-neutral-600 tracking-wide"
                >
                  {t.body}
                </p>

                {showCurrencyLine && suggestedCurrencyData && (
                  <p className="mt-4 font-montserrat text-[12px] text-brand-clayRed/85 leading-relaxed border-t border-brand-stone/20 pt-4">
                    {t.currencyHint(suggestedCurrencyData.name, suggestedCurrencyData.code)}
                  </p>
                )}

                {detectedLocation?.city && (
                  <p className="mt-3 font-montserrat text-[11px] uppercase tracking-[0.2em] text-neutral-400">
                    {detectedLocation.city}
                    {detectedLocation.country ? ` · ${detectedLocation.country}` : ''}
                  </p>
                )}

                <div
                  className={`mt-8 ${ctaButtonRow} `}
                  data-bs-cta-row
                  data-bs-cta-row-layout="wrap"
                >
                  <button
                    type="button"
                    onClick={handleDecline}
                    className={`${ctaPopupSecondary} ${ctaInButtonRow} border-brand-darkRed/15 text-[10px] uppercase tracking-[0.22em] hover:border-brand-darkRed/30 hover:bg-white/60 ${
                      isRTL ? 'order-2 sm:order-1' : ''
                    }`}
                    data-bs-cta
                    data-cursor-hover
                  >
                    {t.secondary}
                  </button>
                  <button
                    type="button"
                    onClick={handleAccept}
                    className={`${ctaPopupPrimary} ${ctaInButtonRow} text-[10px] tracking-[0.22em] shadow-sm ${
                      isRTL ? 'order-1 sm:order-2' : ''
                    }`}
                    data-bs-cta
                    data-cursor-hover
                  >
                    {t.primary}
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
