'use client'

import { useEffect, useId } from 'react'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { getTabbyPublicKey, getTabbyPublicMerchantCode } from '@/lib/tabby/publicKey'

type Props = {
  /** Order / product amount in display currency */
  price: number
  currency: string
  /** product | cart | checkout */
  source?: 'product' | 'cart' | 'checkout'
  className?: string
}

declare global {
  interface Window {
    TabbyPromo?: new (opts: Record<string, unknown>) => unknown
    TabbyCard?: new (opts: Record<string, unknown>) => unknown
  }
}

function loadScript(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[src="${src}"]`)
    if (existing) {
      resolve()
      return
    }
    const script = document.createElement('script')
    script.src = src
    script.async = true
    script.onload = () => resolve()
    script.onerror = () => reject(new Error(`Failed to load ${src}`))
    document.body.appendChild(script)
  })
}

/**
 * Official Tabby on-site messaging (required for Custom API QA).
 * Uses public key + merchant code only — never the secret key.
 */
export default function TabbyPromoSnippet({
  price,
  currency,
  source = 'product',
  className = '',
}: Props) {
  const { language, isRTL } = useLanguage()
  const reactId = useId()
  const hostId = `tabby-${source}-${reactId.replace(/:/g, '')}`

  const publicKey = getTabbyPublicKey()
  const merchantCode = getTabbyPublicMerchantCode() || ''
  const enabled =
    process.env.NEXT_PUBLIC_TABBY_CHECKOUT_ENABLED === 'true' &&
    Boolean(publicKey) &&
    Boolean(merchantCode) &&
    price > 0 &&
    ['AED', 'SAR', 'KWD'].includes(currency.toUpperCase())

  useEffect(() => {
    if (!enabled || typeof window === 'undefined') return

    let cancelled = false
    const code = currency.toUpperCase()
    const priceStr =
      code === 'KWD'
        ? price.toFixed(3)
        : price.toFixed(2)
    const lang = language === 'ar' ? 'ar' : 'en'

    const run = async () => {
      try {
        if (source === 'checkout') {
          await loadScript('https://checkout.tabby.ai/tabby-card.js')
          if (cancelled || !window.TabbyCard) return
          // eslint-disable-next-line no-new
          new window.TabbyCard({
            selector: `#${hostId}`,
            currency: code,
            price: priceStr,
            lang,
            shouldInheritBg: true,
            publicKey,
            merchantCode,
          })
        } else {
          await loadScript('https://checkout.tabby.ai/tabby-promo.js')
          if (cancelled || !window.TabbyPromo) return
          // eslint-disable-next-line no-new
          new window.TabbyPromo({
            selector: `#${hostId}`,
            currency: code,
            price: priceStr,
            lang,
            source,
            shouldInheritBg: true,
            publicKey,
            merchantCode,
          })
        }
      } catch (e) {
        console.warn('Tabby promo snippet failed to load', e)
      }
    }

    void run()
    return () => {
      cancelled = true
      const el = document.getElementById(hostId)
      if (el) el.innerHTML = ''
    }
  }, [enabled, currency, price, language, source, hostId, publicKey, merchantCode])

  if (!enabled) return null

  return (
    <div
      id={hostId}
      className={[
        'tabby-snippet min-h-[28px] w-full max-w-full',
        isRTL ? 'text-right' : 'text-left',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      data-tabby-snippet={source}
    />
  )
}
