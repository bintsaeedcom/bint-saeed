import type { SupportedCurrency } from '@/lib/pricing/types'

/**
 * Currencies PayPal can present a checkout in — the subset of our catalog currencies that
 * PayPal actually supports. PayPal does NOT support AED (our home currency) or most GCC /
 * emerging-market currencies, so those are converted to a supported settlement currency at
 * checkout time. Payout to the merchant's AED bank account is handled by PayPal on withdrawal
 * and is independent of the presentment currency.
 */
export const PAYPAL_PRESENTMENT_CURRENCIES = new Set<SupportedCurrency>([
  'USD',
  'GBP',
  'EUR',
  'CHF',
  'RUB',
  'CNY',
  'CAD',
  'SGD',
  'MYR',
  'HKD',
])

/** Fallback currency used when the shopper's currency is not supported by PayPal. */
export const PAYPAL_FALLBACK_CURRENCY: SupportedCurrency = 'USD'

export function isPayPalPresentmentCurrency(currency: SupportedCurrency): boolean {
  return PAYPAL_PRESENTMENT_CURRENCIES.has(currency)
}

/**
 * Resolve the currency PayPal should charge in. Supported currencies pass through unchanged;
 * everything else settles in {@link PAYPAL_FALLBACK_CURRENCY}. The charged amount is always read
 * from our fixed price sheet in the resolved currency (no live FX), so totals stay deterministic.
 */
export function resolvePayPalSettlementCurrency(currency: SupportedCurrency): SupportedCurrency {
  return isPayPalPresentmentCurrency(currency) ? currency : PAYPAL_FALLBACK_CURRENCY
}
