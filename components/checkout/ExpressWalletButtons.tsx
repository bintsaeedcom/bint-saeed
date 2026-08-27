'use client'

import { useCallback, useEffect, useMemo, useState, type ComponentProps } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import {
  CheckoutElementsProvider,
  ExpressCheckoutElement,
  useCheckoutElements,
} from '@stripe/react-stripe-js/checkout'
import type {
  StripeExpressCheckoutElementConfirmEvent,
  StripeExpressCheckoutElementReadyEvent,
} from '@stripe/stripe-js'
import toast from 'react-hot-toast'
import { getCheckoutAttributionContext } from '@/lib/analytics/checkoutAttribution'
import type { CheckoutCartItem } from '@/lib/checkout/types'

type ExpressWalletButtonsProps = {
  /** Size + colour (and any other required options) are ready. */
  ready: boolean
  items: CheckoutCartItem[]
  currency: string
  /** Shown above the wallet buttons when wallets are available. */
  orLabel?: string
  className?: string
  onBeforePay?: () => boolean | void
}

function detectDeviceType(): 'mobile' | 'tablet' | 'desktop' {
  if (typeof window === 'undefined') return 'desktop'
  const w = window.innerWidth
  if (w < 768) return 'mobile'
  if (w < 1024) return 'tablet'
  return 'desktop'
}

function ExpressCheckoutInner({
  orLabel,
  className,
  onBeforePay,
}: {
  orLabel?: string
  className?: string
  onBeforePay?: () => boolean | void
}) {
  const checkoutState = useCheckoutElements()
  const [visible, setVisible] = useState(false)
  const [confirming, setConfirming] = useState(false)

  const onReady = useCallback((event: StripeExpressCheckoutElementReadyEvent) => {
    const methods = event.availablePaymentMethods
    const hasWallet = Boolean(
      methods && (methods.applePay || methods.googlePay || methods.link),
    )
    setVisible(hasWallet)
  }, [])

  const onConfirm = useCallback(
    async (event: StripeExpressCheckoutElementConfirmEvent) => {
      if (onBeforePay && onBeforePay() === false) return
      if (checkoutState.type !== 'success') {
        toast.error('Checkout is still loading. Please try again.')
        return
      }
      setConfirming(true)
      try {
        const result = await checkoutState.checkout.confirm({
          expressCheckoutConfirmEvent: event,
        })
        if (result.type === 'error') {
          toast.error(result.error.message || 'Payment could not be completed.')
          setConfirming(false)
        }
      } catch (error: unknown) {
        console.error(error)
        toast.error('Payment could not be completed. Please try again.')
        setConfirming(false)
      }
    },
    [checkoutState, onBeforePay],
  )

  if (checkoutState.type !== 'success') {
    return null
  }

  return (
    <div
      className={
        visible
          ? className
          : 'pointer-events-none h-0 overflow-hidden opacity-0'
      }
      aria-hidden={!visible}
      style={confirming ? { pointerEvents: 'none', opacity: 0.6 } : undefined}
    >
      {visible && orLabel ? (
        <p className="mb-2 text-center font-montserrat text-[10px] uppercase tracking-[0.18em] text-[#5c4a46]">
          {orLabel}
        </p>
      ) : null}
      <ExpressCheckoutElement
        options={
          {
            buttonHeight: 48,
            buttonType: {
              applePay: 'buy',
              googlePay: 'buy',
            },
            layout: {
              maxColumns: 1,
              maxRows: 2,
              overflow: 'auto',
            },
            paymentMethods: {
              applePay: 'always',
              googlePay: 'always',
              link: 'auto',
              paypal: 'never',
              amazonPay: 'never',
              klarna: 'never',
            },
          } as NonNullable<ComponentProps<typeof ExpressCheckoutElement>['options']>
        }
        onReady={onReady}
        onConfirm={onConfirm}
      />
    </div>
  )
}

/**
 * In-page Apple Pay / Google Pay (Stripe Express Checkout) for a resolved cart line.
 * Hidden when wallets are unavailable on the device/browser.
 */
export default function ExpressWalletButtons({
  ready,
  items,
  currency,
  orLabel,
  className,
  onBeforePay,
}: ExpressWalletButtonsProps) {
  const [clientSecret, setClientSecret] = useState<string | null>(null)
  const [publishableKey, setPublishableKey] = useState('')
  const [loadError, setLoadError] = useState(false)

  const lineKey = useMemo(
    () =>
      items
        .map(
          (i) =>
            `${i.id}|${i.size ?? ''}|${i.color ?? ''}|${i.quantity}|${i.price}|${i.customisationMessage ?? ''}`,
        )
        .join(';'),
    [items],
  )

  const stripePromise = useMemo(
    () => (publishableKey ? loadStripe(publishableKey) : null),
    [publishableKey],
  )

  useEffect(() => {
    if (!ready || items.length === 0) {
      setClientSecret(null)
      setLoadError(false)
      return
    }

    let cancelled = false
    const timer = window.setTimeout(() => {
      void (async () => {
        try {
          const attribution = getCheckoutAttributionContext()
          const response = await fetch('/api/checkout', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              items,
              currency,
              expressCheckout: true,
              clientContext: {
                localTime: new Date().toString(),
                timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || 'Unknown',
                deviceType: detectDeviceType(),
                ...attribution,
              },
            }),
            signal: AbortSignal.timeout(45_000),
          })
          if (!response.ok) {
            if (!cancelled) setLoadError(true)
            return
          }
          const data = (await response.json()) as {
            mode?: string
            clientSecret?: string
            publishableKey?: string
            error?: string
          }
          if (cancelled) return
          if (data.mode !== 'elements' || !data.clientSecret) {
            setLoadError(true)
            return
          }
          setPublishableKey(
            data.publishableKey ||
              process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY?.trim() ||
              '',
          )
          setClientSecret(data.clientSecret)
          setLoadError(false)
        } catch {
          if (!cancelled) setLoadError(true)
        }
      })()
    }, 280)

    return () => {
      cancelled = true
      window.clearTimeout(timer)
    }
  }, [ready, items, currency, lineKey])

  if (!ready || loadError || !clientSecret || !stripePromise || !publishableKey) {
    return null
  }

  return (
    <CheckoutElementsProvider
      stripe={stripePromise}
      options={{
        clientSecret,
        elementsOptions: {
          appearance: {
            theme: 'stripe',
            variables: {
              colorPrimary: '#3B0A12',
              colorText: '#3B0A12',
              borderRadius: '4px',
            },
          },
        },
      }}
    >
      <ExpressCheckoutInner orLabel={orLabel} className={className} onBeforePay={onBeforePay} />
    </CheckoutElementsProvider>
  )
}
