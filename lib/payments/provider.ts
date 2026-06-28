export type PaymentProvider = 'stripe' | 'mollie'

function normalizeProvider(raw: string | undefined): PaymentProvider | null {
  const value = raw?.trim().toLowerCase()
  if (value === 'stripe' || value === 'mollie') return value
  return null
}

/** Server-side active checkout provider. Defaults to Stripe for backward compatibility. */
export function getPaymentProvider(): PaymentProvider {
  return (
    normalizeProvider(process.env.PAYMENT_PROVIDER) ??
    normalizeProvider(process.env.NEXT_PUBLIC_PAYMENT_PROVIDER) ??
    'stripe'
  )
}

/** Client-visible provider (must match server when checkout starts). */
export function getPublicPaymentProvider(): PaymentProvider {
  return normalizeProvider(process.env.NEXT_PUBLIC_PAYMENT_PROVIDER) ?? getPaymentProvider()
}

export function isStripeConfigured(): boolean {
  const publishable = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY?.trim() ?? ''
  const secret = process.env.STRIPE_SECRET_KEY?.trim() ?? ''
  return publishable.startsWith('pk_') && secret.startsWith('sk_')
}

export function isMollieConfigured(): boolean {
  const apiKey = process.env.MOLLIE_API_KEY?.trim() ?? ''
  return apiKey.startsWith('test_') || apiKey.startsWith('live_')
}

export function isCheckoutProviderConfigured(provider: PaymentProvider = getPaymentProvider()): boolean {
  return provider === 'mollie' ? isMollieConfigured() : isStripeConfigured()
}

export function inferMollieKeyMode(apiKey: string): 'live' | 'test' | 'unknown' {
  if (apiKey.startsWith('live_')) return 'live'
  if (apiKey.startsWith('test_')) return 'test'
  return 'unknown'
}

export function getCheckoutConfigHint(provider: PaymentProvider = getPublicPaymentProvider()): string {
  if (provider === 'mollie') {
    return 'Set MOLLIE_API_KEY to enable checkout.'
  }
  return 'Set NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY and STRIPE_SECRET_KEY to enable checkout.'
}

export function getCheckoutNotConfiguredMessage(provider: PaymentProvider = getPublicPaymentProvider()): string {
  if (provider === 'mollie') {
    return 'Mollie checkout is not configured for this environment yet.'
  }
  return 'Stripe checkout is not configured for this environment yet.'
}
