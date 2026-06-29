const CPMT_PREFIX = 'cpmt_'

function readCpmtId(raw: string | undefined): string | null {
  const id = raw?.trim()
  if (!id?.startsWith(CPMT_PREFIX)) return null
  return id
}

/** Client-safe copy — used by Payment Element when PayPal checkout is enabled. */
export function getPublicStripePayPalCustomPaymentMethodType(): string | null {
  return readCpmtId(process.env.NEXT_PUBLIC_STRIPE_PAYPAL_CUSTOM_PAYMENT_METHOD_TYPE)
}

/** Active when NEXT_PUBLIC cpmt is set. Set NEXT_PUBLIC_STRIPE_PAYPAL_ENABLED=false to hide PayPal UI. */
export function isPublicStripePayPalCheckoutEnabled(): boolean {
  if (process.env.NEXT_PUBLIC_STRIPE_PAYPAL_ENABLED === 'false') return false
  return Boolean(getPublicStripePayPalCustomPaymentMethodType())
}

/** Shape for Stripe.js Payment Element `customPaymentMethods`. */
export function buildStripePayPalCustomPaymentMethodOption():
  | { id: string; options: { type: 'paypal' } }
  | null {
  const id = getPublicStripePayPalCustomPaymentMethodType()
  if (!id) return null
  return { id, options: { type: 'paypal' } }
}
