import type { SupportedCurrency } from './types'

/**
 * Approximate AED cross-rates used ONLY to seed luxury rounding for SKUs without
 * hand-set international prices. These are not live FX and are not shown to clients.
 */
export const REFERENCE_RATE_FROM_AED: Record<SupportedCurrency, number> = {
  AED: 1,
  SAR: 1.02,
  QAR: 0.99,
  OMR: 0.105,
  BHD: 0.103,
  KWD: 0.084,
  GBP: 0.202,
  EUR: 0.232,
  USD: 0.272,
  CHF: 0.214,
  RUB: 24.9,
  CNY: 1.95,
  CAD: 0.378,
  SGD: 0.368,
  BND: 0.368,
  MYR: 1.23,
  MAD: 2.76,
  NGN: 440,
  IDR: 5113,
  KZT: 138.5,
  AZN: 0.46,
  UZS: 3580,
  HKD: 2.15,
}
