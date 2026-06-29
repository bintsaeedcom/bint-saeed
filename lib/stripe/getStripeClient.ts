import Stripe from 'stripe'

function getStripeSecretKey(): string | null {
  const key = process.env.STRIPE_SECRET_KEY?.trim()
  if (!key || !key.startsWith('sk_')) return null
  return key
}

export function isStripeSecretKeyConfigured(): boolean {
  return Boolean(getStripeSecretKey())
}

export function getStripeClient(): Stripe {
  const key = getStripeSecretKey()
  if (!key) {
    throw new Error('Stripe secret key is not configured')
  }
  return new Stripe(key, {
    apiVersion: '2026-06-24.dahlia',
  })
}
