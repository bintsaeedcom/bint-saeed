'use client'

import { useMemo, useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import {
  BillingAddressElement,
  CheckoutElementsProvider,
  ContactDetailsElement,
  PaymentElement,
  ShippingAddressElement,
  useCheckoutElements,
} from '@stripe/react-stripe-js/checkout'
import type { StripeCheckoutElementsOptions } from '@stripe/stripe-js'
import toast from 'react-hot-toast'
import { FiArrowLeft, FiLock } from 'react-icons/fi'
import { buildStripePayPalCustomPaymentMethodOption } from '@/lib/stripe/stripePayPalPublic'

type PayButtonProps = {
  label: string
  processingLabel: string
  rtl?: boolean
}

function ElementsPayButton({ label, processingLabel, rtl }: PayButtonProps) {
  const checkoutState = useCheckoutElements()
  const [paying, setPaying] = useState(false)

  const disabled = paying || checkoutState.type !== 'success'

  const handlePay = async () => {
    if (checkoutState.type !== 'success') return
    setPaying(true)
    try {
      const result = await checkoutState.checkout.confirm()
      if (result.type === 'error') {
        toast.error(result.error.message || 'Payment could not be completed.')
        setPaying(false)
      }
    } catch (error: unknown) {
      console.error(error)
      toast.error('Payment could not be completed. Please try again.')
      setPaying(false)
    }
  }

  return (
    <button
      type="button"
      onClick={() => void handlePay()}
      disabled={disabled}
      className={`mt-6 flex min-h-[52px] w-full items-center justify-center gap-2 rounded-[4px] bg-brand-dustyBlue px-3 py-4 font-montserrat text-[11px] uppercase tracking-[0.14em] text-[#1a0008] transition-colors hover:bg-white disabled:opacity-50 sm:gap-3 sm:text-sm sm:tracking-[0.18em] `}
      data-cursor-hover
    >
      {paying ? (
        processingLabel
      ) : (
        <>
          <FiLock className="h-4 w-4 opacity-90" />
          {label}
        </>
      )}
    </button>
  )
}

type StripeElementsCheckoutFormProps = {
  clientSecret: string
  publishableKey: string
  payLabel: string
  processingLabel: string
  backLabel: string
  onBack: () => void
  rtl?: boolean
}

export default function StripeElementsCheckoutForm({
  clientSecret,
  publishableKey,
  payLabel,
  processingLabel,
  backLabel,
  onBack,
  rtl,
}: StripeElementsCheckoutFormProps) {
  const stripePromise = useMemo(() => loadStripe(publishableKey), [publishableKey])
  const paypalOption = buildStripePayPalCustomPaymentMethodOption()

  const elementsOptions = useMemo(() => {
    const options: StripeCheckoutElementsOptions & {
      customPaymentMethods?: ReturnType<typeof buildStripePayPalCustomPaymentMethodOption>[]
    } = {
      appearance: {
        theme: 'stripe',
        variables: {
          colorPrimary: '#8B9AAB',
          colorText: '#3B0A12',
          borderRadius: '4px',
        },
      },
    }

    if (paypalOption) {
      options.customPaymentMethods = [paypalOption]
    }

    return options
  }, [paypalOption])

  return (
    <div className={`space-y-5 text-start`}>
      <button
        type="button"
        onClick={onBack}
        className={`inline-flex items-center gap-2 font-montserrat text-xs uppercase tracking-[0.14em] text-brand-clayRed/70 transition-colors hover:text-brand-darkRed `}
        data-cursor-hover
      >
        <FiArrowLeft className={`h-3.5 w-3.5 ${rtl ? 'rotate-180' : ''}`} />
        {backLabel}
      </button>

      <CheckoutElementsProvider
        stripe={stripePromise}
        options={{
          clientSecret,
          elementsOptions,
        }}
      >
        <div className="space-y-4">
          <ContactDetailsElement />
          <ShippingAddressElement />
          <BillingAddressElement />
          <PaymentElement
            options={{
              layout: 'tabs',
              ...(paypalOption
                ? { paymentMethodOrder: ['paypal', 'card', 'apple_pay', 'google_pay', 'link'] }
                : {}),
            }}
          />
        </div>
        <ElementsPayButton label={payLabel} processingLabel={processingLabel} rtl={rtl} />
      </CheckoutElementsProvider>
    </div>
  )
}
