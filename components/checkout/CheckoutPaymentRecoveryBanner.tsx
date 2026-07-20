'use client'

import { useEffect, useRef, useState } from 'react'
import { FiX } from 'react-icons/fi'
import LocaleLink from '@/components/LocaleLink'
import { trackEvent } from '@/lib/analytics/tracking'
import {
  getCheckoutPaymentRecoveryCopy,
  withProviderName,
} from '@/lib/i18n/checkoutPaymentRecoveryI18n'
import type { AppLocale } from '@/lib/i18n/routing'

export type PaymentRecoveryProvider = 'tabby' | 'tamara' | 'stripe' | 'paypal' | 'mollie'

export type PaymentRecoveryStatus = {
  kind: 'cancelled' | 'failed'
  provider: PaymentRecoveryProvider
}

const SESSION_DISMISS_PREFIX = 'bs_checkout_payment_recovery_dismissed:'

function dismissKeyFor(status: PaymentRecoveryStatus): string {
  return `${SESSION_DISMISS_PREFIX}${status.provider}:${status.kind}`
}

const PROVIDER_DISPLAY: Record<PaymentRecoveryProvider, string> = {
  tabby: 'Tabby',
  tamara: 'Tamara',
  stripe: 'Card',
  paypal: 'PayPal',
  mollie: 'Mollie',
}

type CheckoutPaymentRecoveryBannerProps = {
  status: PaymentRecoveryStatus
  language: AppLocale | string
  continueLabel: string
  editBagLabel: string
  paymentSectionId?: string
  onContinueToPayment?: () => void
}

/**
 * Soft recovery notice after a cancelled / failed return from a payment supplier.
 * Visual language matches the existing checkout stone notice (cream panel, dusty-blue eyebrow).
 */
export default function CheckoutPaymentRecoveryBanner({
  status,
  language,
  continueLabel,
  editBagLabel,
  paymentSectionId = 'checkout-payment',
  onContinueToPayment,
}: CheckoutPaymentRecoveryBannerProps) {
  const copy = getCheckoutPaymentRecoveryCopy(language)
  const [mounted, setMounted] = useState(false)
  const [dismissed, setDismissed] = useState(false)
  const trackedRef = useRef(false)
  const scrolledRef = useRef(false)

  useEffect(() => {
    setMounted(true)
    try {
      if (sessionStorage.getItem(dismissKeyFor(status)) === '1') {
        setDismissed(true)
      } else {
        setDismissed(false)
      }
    } catch {
      /* private mode */
    }
    trackedRef.current = false
    scrolledRef.current = false
  }, [status.kind, status.provider])

  useEffect(() => {
    if (!mounted || dismissed || trackedRef.current) return
    trackedRef.current = true
    trackEvent('checkout_payment_return', {
      provider: status.provider,
      status: status.kind,
    })
    if (status.provider === 'tabby' && status.kind === 'cancelled') {
      trackEvent('tabby_checkout_cancelled_return', {
        provider: 'tabby',
        status: 'cancelled',
      })
    }
  }, [mounted, dismissed, status.kind, status.provider])

  useEffect(() => {
    if (!mounted || dismissed || scrolledRef.current) return
    scrolledRef.current = true
    const el = document.getElementById(paymentSectionId)
    if (!el) return
    const reduceMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.requestAnimationFrame(() => {
      window.setTimeout(() => {
        el.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' })
      }, 450)
    })
  }, [mounted, dismissed, paymentSectionId])

  if (!mounted || dismissed) return null

  const providerName = PROVIDER_DISPLAY[status.provider]
  const eyebrow = status.kind === 'failed' ? copy.eyebrowFailed : copy.eyebrowCancelled
  const body =
    status.kind === 'failed'
      ? withProviderName(copy.bodyFailed, providerName)
      : withProviderName(copy.bodyCancelled, providerName)

  const dismiss = () => {
    setDismissed(true)
    try {
      sessionStorage.setItem(dismissKeyFor(status), '1')
    } catch {
      /* private mode */
    }
  }

  return (
    <div
      className="relative mt-5 rounded-[4px] border border-brand-stone/30 bg-white/80 px-4 py-4 text-start sm:px-5"
      role="status"
      aria-live="polite"
    >
      <button
        type="button"
        onClick={dismiss}
        className="absolute end-3 top-3 rounded-[4px] p-1.5 text-brand-clayRed/55 transition-colors hover:bg-brand-dustyBlue/10 hover:text-brand-darkRed"
        aria-label={copy.dismissAria}
        data-cursor-hover
      >
        <FiX className="h-4 w-4" aria-hidden />
      </button>

      <p className="pe-8 font-montserrat text-[10px] uppercase tracking-[0.18em] text-brand-dustyBlue">
        {eyebrow}
      </p>
      <p className="mt-2 pe-8 font-rozha text-xl leading-snug text-brand-darkRed sm:text-[1.35rem]">
        {copy.title}
      </p>
      <p className="mt-2 max-w-2xl pe-2 font-montserrat text-sm leading-relaxed tracking-wide text-brand-clayRed/75">
        {body}
      </p>

      <div className="mt-3 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => {
            onContinueToPayment?.()
            const el = document.getElementById(paymentSectionId)
            el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }}
          className="font-montserrat text-[11px] uppercase tracking-[0.14em] text-brand-darkRed underline-offset-4 hover:underline"
          data-cursor-hover
        >
          {continueLabel}
        </button>
        <LocaleLink
          href="/cart"
          className="font-montserrat text-[11px] uppercase tracking-[0.14em] text-brand-dustyBlue underline-offset-4 hover:underline"
          data-cursor-hover
        >
          {editBagLabel}
        </LocaleLink>
      </div>
    </div>
  )
}

export function parsePaymentRecoveryFromSearchParams(
  searchParams: URLSearchParams | null | undefined,
): PaymentRecoveryStatus | null {
  if (!searchParams) return null
  const providers: PaymentRecoveryProvider[] = [
    'tabby',
    'tamara',
    'stripe',
    'paypal',
    'mollie',
  ]
  for (const provider of providers) {
    const raw = searchParams.get(provider)
    if (raw === 'cancelled' || raw === 'canceled' || raw === 'failed') {
      return {
        kind: raw === 'failed' ? 'failed' : 'cancelled',
        provider,
      }
    }
  }
  return null
}
