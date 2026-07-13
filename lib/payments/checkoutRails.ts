import { isMollieConfigured, isStripeConfigured } from '@/lib/payments/provider'
import { isPayPalConfigured } from '@/lib/paypal/config'
import {
  isPublicTamaraCheckoutAvailable,
  isTamaraConfigured,
  isTamaraCurrency,
} from '@/lib/tamara/config'
import {
  isPublicTabbyCheckoutAvailable,
  isTabbyConfigured,
  isTabbyCurrency,
} from '@/lib/tabby/config'

export type CheckoutRail = 'stripe' | 'paypal' | 'mollie' | 'tamara' | 'tabby'

/** EU + UK + CH — markets where Mollie local methods (iDEAL, Klarna, etc.) are offered. */
const MOLLIE_COUNTRY_CODES = new Set([
  'AT', 'BE', 'BG', 'CH', 'CY', 'CZ', 'DE', 'DK', 'EE', 'ES', 'FI', 'FR', 'GB', 'GR', 'HR',
  'HU', 'IE', 'IS', 'IT', 'LI', 'LT', 'LU', 'LV', 'MT', 'NL', 'NO', 'PL', 'PT', 'RO', 'SE',
  'SI', 'SK',
])

function isPublicStripeCheckoutAvailable(): boolean {
  const key = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY?.trim() ?? ''
  return key.startsWith('pk_')
}

function isPublicPayPalCheckoutAvailable(): boolean {
  return Boolean(process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID?.trim())
}

function isPublicMollieCheckoutAvailable(): boolean {
  return process.env.NEXT_PUBLIC_MOLLIE_CHECKOUT_ENABLED === 'true'
}

export function isMollieCountry(countryCode: string | null | undefined): boolean {
  if (!countryCode) return false
  if (process.env.MOLLIE_CHECKOUT_EU_ONLY === 'false') return true
  return MOLLIE_COUNTRY_CODES.has(countryCode.toUpperCase())
}

export function getAvailableCheckoutRails(
  countryCode?: string | null,
  currency?: string | null,
): CheckoutRail[] {
  const rails: CheckoutRail[] = []
  const onServer = typeof window === 'undefined'

  const stripeReady = onServer ? isStripeConfigured() : isPublicStripeCheckoutAvailable()
  const paypalReady = onServer ? isPayPalConfigured() : isPublicPayPalCheckoutAvailable()
  const mollieReady = onServer ? isMollieConfigured() : isPublicMollieCheckoutAvailable()
  const tamaraReady = onServer
    ? isTamaraConfigured() && process.env.NEXT_PUBLIC_TAMARA_CHECKOUT_ENABLED === 'true'
    : isPublicTamaraCheckoutAvailable()
  const tabbyReady = onServer
    ? isTabbyConfigured() && process.env.NEXT_PUBLIC_TABBY_CHECKOUT_ENABLED === 'true'
    : isPublicTabbyCheckoutAvailable()

  if (stripeReady) rails.push('stripe')
  if (paypalReady) rails.push('paypal')
  if (mollieReady && isMollieCountry(countryCode)) rails.push('mollie')
  if (tamaraReady && isTamaraCurrency(currency ?? 'AED')) rails.push('tamara')
  if (tabbyReady && isTabbyCurrency(currency ?? 'AED')) rails.push('tabby')
  return rails
}

export function isCheckoutRailConfigured(rail: CheckoutRail): boolean {
  const onServer = typeof window === 'undefined'
  if (rail === 'stripe') {
    return onServer ? isStripeConfigured() : isPublicStripeCheckoutAvailable()
  }
  if (rail === 'paypal') {
    return onServer ? isPayPalConfigured() : isPublicPayPalCheckoutAvailable()
  }
  if (rail === 'tamara') {
    return onServer
      ? isTamaraConfigured() && process.env.NEXT_PUBLIC_TAMARA_CHECKOUT_ENABLED === 'true'
      : isPublicTamaraCheckoutAvailable()
  }
  if (rail === 'tabby') {
    return onServer
      ? isTabbyConfigured() && process.env.NEXT_PUBLIC_TABBY_CHECKOUT_ENABLED === 'true'
      : isPublicTabbyCheckoutAvailable()
  }
  return onServer ? isMollieConfigured() : isPublicMollieCheckoutAvailable()
}

export function getDefaultCheckoutRail(
  countryCode?: string | null,
  currency?: string | null,
): CheckoutRail {
  const rails = getAvailableCheckoutRails(countryCode, currency)
  return rails[0] ?? 'stripe'
}
