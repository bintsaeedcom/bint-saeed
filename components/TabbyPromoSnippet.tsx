'use client'

import { useEffect, useId, useState } from 'react'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { getTabbyPublicKey, getTabbyPublicMerchantCode } from '@/lib/tabby/publicKey'

type Props = {
  /** Order / product amount in display currency */
  price: number
  currency: string
  /** product | cart | checkout */
  source?: 'product' | 'cart' | 'checkout'
  className?: string
  /** Fired when shopper clicks the Tabby promo region (installment info). */
  onPromoClick?: () => void
}

type WidgetConfig = {
  enabled: boolean
  publicKey: string
  merchantCode: string
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

function readEnvWidgetConfig(currency: string, price: number): WidgetConfig | null {
  const publicKey = getTabbyPublicKey()
  const merchantCode = getTabbyPublicMerchantCode()
  const enabled =
    process.env.NEXT_PUBLIC_TABBY_CHECKOUT_ENABLED === 'true' &&
    Boolean(publicKey) &&
    Boolean(merchantCode) &&
    price > 0 &&
    ['AED', 'SAR', 'KWD'].includes(currency.toUpperCase())

  if (!enabled || !publicKey || !merchantCode) return null
  return { enabled: true, publicKey, merchantCode }
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
  onPromoClick,
}: Props) {
  const { language } = useLanguage()
  const reactId = useId()
  const hostId = `tabby-${source}-${reactId.replace(/:/g, '')}`
  const currencySupported =
    price > 0 && ['AED', 'SAR', 'KWD'].includes(currency.toUpperCase())

  const [widgetConfig, setWidgetConfig] = useState<WidgetConfig | null>(() =>
    currencySupported ? readEnvWidgetConfig(currency, price) : null,
  )

  useEffect(() => {
    if (!currencySupported) {
      setWidgetConfig(null)
      return
    }

    const fromEnv = readEnvWidgetConfig(currency, price)
    if (fromEnv) {
      setWidgetConfig(fromEnv)
      return
    }

    let cancelled = false
    const code = currency.toUpperCase()
    void fetch(`/api/payments/tabby/widget-config?currency=${encodeURIComponent(code)}`)
      .then((res) => (res.ok ? res.json() : null))
      .then((data: WidgetConfig | null) => {
        if (cancelled || !data?.enabled || !data.publicKey || !data.merchantCode) return
        setWidgetConfig(data)
      })
      .catch(() => {
        /* keep hidden */
      })

    return () => {
      cancelled = true
    }
  }, [currency, price, currencySupported])

  useEffect(() => {
    if (!widgetConfig?.enabled || typeof window === 'undefined') return

    let cancelled = false
    const code = currency.toUpperCase()
    const priceStr = code === 'KWD' ? price.toFixed(3) : price.toFixed(2)
    const lang = language === 'ar' ? 'ar' : 'en'
    const { publicKey, merchantCode } = widgetConfig

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
  }, [widgetConfig, currency, price, language, source, hostId])

  useEffect(() => {
    if (!widgetConfig?.enabled || typeof window === 'undefined') return

    const syncTabbyDialog = () => {
      const dialogs = document.querySelectorAll('[class*="styles__dialog--"]')
      const open = dialogs.length > 0
      document.documentElement.classList.toggle('tabby-dialog-open', open)
      dialogs.forEach((dialog) => {
        dialog.setAttribute('data-lenis-prevent', '')
        dialog.setAttribute('data-lenis-prevent-wheel', '')
        dialog.setAttribute('data-lenis-prevent-touch', '')
      })
    }

    const observer = new MutationObserver(syncTabbyDialog)
    observer.observe(document.body, { childList: true, subtree: true })
    syncTabbyDialog()

    return () => {
      observer.disconnect()
      document.documentElement.classList.remove('tabby-dialog-open')
    }
  }, [widgetConfig?.enabled])

  if (!currencySupported || !widgetConfig?.enabled) return null

  return (
    <div
      id={hostId}
      className={[
        'tabby-snippet min-h-[28px] w-full max-w-full',
        'text-start',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      data-tabby-snippet={source}
      onClick={() => onPromoClick?.()}
    />
  )
}
