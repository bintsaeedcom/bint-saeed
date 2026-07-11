'use client'

import { useCallback, useMemo } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { EmbeddedCheckout, EmbeddedCheckoutProvider } from '@stripe/react-stripe-js'
import type {
  ResultAction,
  StripeEmbeddedCheckoutShippingDetailsChangeEvent,
} from '@stripe/stripe-js'
import { FiArrowLeft } from 'react-icons/fi'

type StripeEmbeddedCheckoutFormProps = {
  clientSecret: string
  publishableKey: string
  backLabel: string
  onBack: () => void
  rtl?: boolean
}

export default function StripeEmbeddedCheckoutForm({
  clientSecret,
  publishableKey,
  backLabel,
  onBack,
  rtl,
}: StripeEmbeddedCheckoutFormProps) {
  const stripePromise = useMemo(() => loadStripe(publishableKey), [publishableKey])

  const onShippingDetailsChange = useCallback(
    async (event: StripeEmbeddedCheckoutShippingDetailsChangeEvent): Promise<ResultAction> => {
      try {
        const response = await fetch('/api/checkout/shipping-options', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            checkout_session_id: event.checkoutSessionId,
            shipping_details: event.shippingDetails,
          }),
        })
        const data = (await response.json()) as {
          type?: string
          message?: string
          error?: string
        }

        if (!response.ok || data.type === 'error') {
          return {
            type: 'reject',
            errorMessage:
              data.message ||
              data.error ||
              'We cannot ship to this address. Please choose a different destination.',
          }
        }

        return { type: 'accept' }
      } catch {
        return {
          type: 'reject',
          errorMessage: 'We could not update shipping. Please try again.',
        }
      }
    },
    [],
  )

  const options = useMemo(
    () => ({
      clientSecret,
      onShippingDetailsChange,
    }),
    [clientSecret, onShippingDetailsChange],
  )

  return (
    <div className={`space-y-5 ${rtl ? 'text-right' : ''}`}>
      <button
        type="button"
        onClick={onBack}
        className={`inline-flex items-center gap-2 font-montserrat text-xs uppercase tracking-[0.14em] text-brand-clayRed/70 transition-colors hover:text-brand-darkRed ${rtl ? 'flex-row-reverse' : ''}`}
        data-cursor-hover
      >
        <FiArrowLeft className={`h-3.5 w-3.5 ${rtl ? 'rotate-180' : ''}`} />
        {backLabel}
      </button>

      <div className="overflow-hidden rounded-2xl border border-brand-stone/20 bg-white p-2 sm:p-4">
        <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
          <EmbeddedCheckout className="min-h-[480px]" />
        </EmbeddedCheckoutProvider>
      </div>
    </div>
  )
}
