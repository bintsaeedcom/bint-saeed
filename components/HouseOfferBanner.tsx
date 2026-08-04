'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { FiX } from 'react-icons/fi'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { getHouseOfferBannerCopy } from '@/lib/i18n/houseOfferBannerI18n'
import { useCurrency } from '@/lib/currency/CurrencyContext'
import { useVisitorComplimentaryShipping } from '@/lib/shipping/useVisitorComplimentaryShipping'
import { withShippingAmount } from '@/lib/shipping/withShippingAmount'

const STORAGE_KEY = 'bint-saeed-house-banner-dismissed'
const BANNER_HEIGHT_FALLBACK = '2.125rem'
const ROTATE_MS = 4200

/**
 * Waed-style top offer strip — quiet commerce cue (15% + privilege + free shipping).
 * Rotates one message at a time so the strip stays calm on mobile.
 */
export default function HouseOfferBanner() {
  const { language, isRTL } = useLanguage()
  const copy = getHouseOfferBannerCopy(language)
  const { currency } = useCurrency()
  const { isUaeVisitor, amountLabel } = useVisitorComplimentaryShipping(currency.code)
  const [visible, setVisible] = useState(true)
  const [lineIndex, setLineIndex] = useState(0)
  const rootRef = useRef<HTMLDivElement>(null)

  const lines = useMemo(() => {
    const shipping = withShippingAmount(
      isUaeVisitor ? copy.shippingUae : copy.shippingWorldwide,
      amountLabel,
    )
    return [copy.firstPurchase, copy.housePrivilege, shipping]
  }, [
    amountLabel,
    copy.firstPurchase,
    copy.housePrivilege,
    copy.shippingUae,
    copy.shippingWorldwide,
    isUaeVisitor,
  ])

  const line = lines[lineIndex % lines.length] ?? lines[0]

  useEffect(() => {
    try {
      if (localStorage.getItem(STORAGE_KEY) === '1') setVisible(false)
    } catch {
      /* ignore */
    }
  }, [])

  useEffect(() => {
    if (!visible || lines.length < 2) return
    const reduceMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) return

    const id = window.setInterval(() => {
      setLineIndex((i) => (i + 1) % lines.length)
    }, ROTATE_MS)
    return () => window.clearInterval(id)
  }, [visible, lines.length])

  useEffect(() => {
    setLineIndex(0)
  }, [language, isUaeVisitor])

  useEffect(() => {
    const root = document.documentElement
    if (!visible) {
      root.style.setProperty('--house-offer-banner', '0px')
      return () => {
        root.style.setProperty('--house-offer-banner', BANNER_HEIGHT_FALLBACK)
      }
    }

    const el = rootRef.current
    if (!el) {
      root.style.setProperty('--house-offer-banner', BANNER_HEIGHT_FALLBACK)
      return
    }

    const sync = () => {
      const h = Math.ceil(el.getBoundingClientRect().height)
      root.style.setProperty('--house-offer-banner', `${h || 34}px`)
    }
    sync()

    const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(sync) : null
    ro?.observe(el)
    window.addEventListener('resize', sync)
    return () => {
      ro?.disconnect()
      window.removeEventListener('resize', sync)
      root.style.setProperty('--house-offer-banner', BANNER_HEIGHT_FALLBACK)
    }
  }, [visible, language, line])

  if (!visible) return null

  const dismiss = () => {
    setVisible(false)
    try {
      localStorage.setItem(STORAGE_KEY, '1')
    } catch {
      /* ignore */
    }
  }

  return (
    <div
      ref={rootRef}
      className="relative z-[61] w-full min-w-0 border-b border-white/10 bg-[#12080b] text-[#e8d8c8]"
      data-house-offer-banner="true"
      role="region"
      aria-label={lines.join(' · ')}
      aria-live="polite"
    >
      <div
        className={`flex items-center justify-center gap-x-3 gap-y-1 px-9 py-1.5 sm:px-10 sm:py-2 ${
          isRTL ? 'flex-row-reverse' : ''
        }`}
      >
        <p
          key={line}
          className="min-w-0 max-w-[min(100%,52rem)] animate-[houseOfferFade_0.45s_ease] text-center font-montserrat text-[9px] font-medium uppercase leading-snug tracking-[0.12em] text-[#e8d8c8]/90 sm:text-[10px] sm:tracking-[0.16em]"
        >
          {line}
        </p>
        <button
          type="button"
          onClick={dismiss}
          className="absolute end-1.5 top-1/2 -translate-y-1/2 p-1.5 text-[#e8d8c8]/55 transition-colors hover:text-[#e8d8c8] sm:end-2"
          aria-label={copy.dismissAria}
          data-cursor-hover
        >
          <FiX className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  )
}
