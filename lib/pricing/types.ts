/** Checkout / display currencies — must match Stripe-supported codes on the account. */
export const SUPPORTED_CURRENCIES = [
  'AED',
  'SAR',
  'QAR',
  'OMR',
  'BHD',
  'KWD',
  'GBP',
  'EUR',
  'USD',
  'CHF',
  'RUB',
  'CNY',
  'CAD',
  'SGD',
  'BND',
  'MYR',
  'MAD',
  'NGN',
  'IDR',
  'KZT',
  'AZN',
  'UZS',
  'HKD',
] as const

export type SupportedCurrency = (typeof SUPPORTED_CURRENCIES)[number]

/** Fixed retail tiers — not derived from daily FX. */
export type PriceTier = 'collection_apparel'

export type CurrencyPriceMap = Record<SupportedCurrency, number>
