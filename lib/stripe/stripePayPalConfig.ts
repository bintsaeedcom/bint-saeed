/**
 * Stripe × PayPal (custom payment method).
 *
 * Dashboard: Settings → Payments → Custom payment methods → PayPal → cpmt_...
 *
 * Go live:
 * 1. Set STRIPE_PAYPAL_CUSTOM_PAYMENT_METHOD_TYPE + NEXT_PUBLIC_STRIPE_PAYPAL_CUSTOM_PAYMENT_METHOD_TYPE (same cpmt_ id)
 * 2. Redeploy — checkout switches to on-site payment form with PayPal when both cpmt vars are set
 * 3. Set STRIPE_PAYPAL_ENABLED=false only if you want to disable PayPal and keep hosted Stripe redirect
 * 4. Request Stripe's PayPal adapter + connect your PayPal business account so PayPal payments settle
 *
 * @see https://docs.stripe.com/payments/payment-methods/custom-payment-methods/paypal
 */

const CPMT_PREFIX = 'cpmt_'

function readCpmtId(raw: string | undefined): string | null {
  const id = raw?.trim()
  if (!id?.startsWith(CPMT_PREFIX)) return null
  return id
}

/** Server-side custom payment method type ID from Stripe Dashboard. */
export function getStripePayPalCustomPaymentMethodType(): string | null {
  return readCpmtId(process.env.STRIPE_PAYPAL_CUSTOM_PAYMENT_METHOD_TYPE)
}

/** Client-safe copy — used by Payment Element `customPaymentMethods` when PayPal checkout ships. */
export function getPublicStripePayPalCustomPaymentMethodType(): string | null {
  return readCpmtId(process.env.NEXT_PUBLIC_STRIPE_PAYPAL_CUSTOM_PAYMENT_METHOD_TYPE)
}

/** Adapter base URL once Stripe shares the PayPal adapter package (self-hosted). */
export function getStripePayPalAdapterUrl(): string | null {
  const url = process.env.STRIPE_PAYPAL_ADAPTER_URL?.trim()
  if (!url) return null
  try {
    const parsed = new URL(url)
    if (parsed.protocol !== 'https:') return null
    return parsed.toString().replace(/\/$/, '')
  } catch {
    return null
  }
}

export function isStripePayPalDashboardConfigured(): boolean {
  return Boolean(getStripePayPalCustomPaymentMethodType())
}

/** True when env has cpmt + adapter URL (recommended for PayPal routing). */
export function isStripePayPalAdapterConfigured(): boolean {
  return isStripePayPalDashboardConfigured() && Boolean(getStripePayPalAdapterUrl())
}

/** On when both cpmt env vars are set. Set STRIPE_PAYPAL_ENABLED=false for hosted Stripe only. */
export function isStripePayPalCheckoutEnabled(): boolean {
  if (process.env.STRIPE_PAYPAL_ENABLED === 'false') return false
  return (
    isStripePayPalDashboardConfigured() &&
    Boolean(getPublicStripePayPalCustomPaymentMethodType())
  )
}

export type StripePayPalReadiness = {
  dashboardCpmtConfigured: boolean
  customPaymentMethodTypeId: string | null
  adapterUrlConfigured: boolean
  adapterUrl: string | null
  checkoutEnabled: boolean
  blockingReasons: string[]
}

export function getStripePayPalReadiness(): StripePayPalReadiness {
  const customPaymentMethodTypeId = getStripePayPalCustomPaymentMethodType()
  const adapterUrl = getStripePayPalAdapterUrl()
  const dashboardCpmtConfigured = Boolean(customPaymentMethodTypeId)
  const adapterUrlConfigured = Boolean(adapterUrl)
  const checkoutEnabled = isStripePayPalCheckoutEnabled()

  const blockingReasons: string[] = []
  if (!dashboardCpmtConfigured) {
    blockingReasons.push('Set STRIPE_PAYPAL_CUSTOM_PAYMENT_METHOD_TYPE=cpmt_... from Stripe Dashboard.')
  } else if (!checkoutEnabled) {
    if (process.env.STRIPE_PAYPAL_ENABLED === 'false') {
      blockingReasons.push(
        'STRIPE_PAYPAL_ENABLED=false is blocking PayPal checkout — remove it or set to true, then redeploy.',
      )
    } else if (!getPublicStripePayPalCustomPaymentMethodType()) {
      blockingReasons.push(
        'Set NEXT_PUBLIC_STRIPE_PAYPAL_CUSTOM_PAYMENT_METHOD_TYPE to the same cpmt_ id as the server var, then redeploy.',
      )
    }
  } else if (!adapterUrlConfigured) {
    blockingReasons.push(
      'PayPal can display at checkout, but payments need Stripe’s PayPal adapter — request it from Stripe support and set STRIPE_PAYPAL_ADAPTER_URL.',
    )
  }

  return {
    dashboardCpmtConfigured,
    customPaymentMethodTypeId,
    adapterUrlConfigured,
    adapterUrl,
    checkoutEnabled,
    blockingReasons,
  }
}

export { buildStripePayPalCustomPaymentMethodOption } from '@/lib/stripe/stripePayPalPublic'
