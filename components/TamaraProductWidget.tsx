'use client'

import { useEffect } from 'react'
import { getTamaraPublicKey } from '@/lib/tamara/publicKey'
import { useLanguage } from '@/lib/i18n/LanguageContext'

declare global {
  interface Window {
    tamaraWidgetConfig?: {
      lang?: string
      country?: string
      publicKey?: string
    }
  }
}

type Props = {
  amount: number
  currency?: string
  className?: string
}

/**
 * Official Tamara product widget (sandbox/production public key).
 * Renders nothing when public key is missing.
 */
export default function TamaraProductWidget({ amount, currency = 'AED', className = '' }: Props) {
  const { language } = useLanguage()
  const publicKey = getTamaraPublicKey()
  const country = currency.toUpperCase() === 'SAR' ? 'SA' : 'AE'
  const lang = language === 'ar' ? 'ar' : 'en'
  const enabled = Boolean(publicKey && amount > 0)

  useEffect(() => {
    if (!enabled || !publicKey) return

    window.tamaraWidgetConfig = {
      lang,
      country,
      publicKey,
    }

    const existing = document.querySelector('script[data-tamara-widget="1"]')
    if (existing) {
      window.dispatchEvent(new Event('tamara:widget:refresh'))
      return
    }

    const script = document.createElement('script')
    script.src =
      process.env.NEXT_PUBLIC_TAMARA_WIDGET_URL?.trim() ||
      'https://cdn.tamara.co/widget-v2/tamara-widget.js'
    script.async = true
    script.dataset.tamaraWidget = '1'
    document.body.appendChild(script)
  }, [country, enabled, lang, publicKey])

  if (!enabled) return null

  return (
    <div className={className} data-tamara-widget-host>
      {/* @ts-expect-error Tamara custom element */}
      <tamara-widget type="tamara-summary" amount={String(amount)} inline-type="2" />
    </div>
  )
}
