import type { CurrencyPriceMap } from './types'

/** Signature packaging add-on (master 30 AED). */
export const SIGNATURE_PACKAGING_PRICES: CurrencyPriceMap = {
  AED: 30,
  GBP: 6,
  EUR: 7,
  USD: 8,
  SAR: 35,
  QAR: 35,
  KWD: 2.5,
  BHD: 3,
  OMR: 3.2,
  CHF: 7,
  RUB: 2450,
  CNY: 59,
  CAD: 11,
  SGD: 11,
  BND: 11,
  MYR: 37,
  MAD: 83,
  NGN: 13200,
  IDR: 154000,
  KZT: 4200,
  AZN: 14,
  UZS: 110000,
  HKD: 65,
}

/**
 * UAE under-threshold shipping (master 35 AED).
 * Clean fixed amounts — not live FX.
 */
export const UAE_SHIPPING_FEE_PRICES: CurrencyPriceMap = {
  AED: 35,
  EUR: 8,
  USD: 10,
  GBP: 7,
  SAR: 35,
  QAR: 35,
  KWD: 3,
  BHD: 3.5,
  OMR: 3.5,
  CHF: 8,
  RUB: 900,
  CNY: 70,
  CAD: 13,
  SGD: 13,
  BND: 13,
  MYR: 45,
  MAD: 100,
  NGN: 15500,
  IDR: 180000,
  KZT: 5000,
  AZN: 16,
  UZS: 125000,
  HKD: 75,
}

/**
 * International under-threshold shipping (master ≈ EUR 30 / AED 130).
 * Clean fixed amounts for small parcels — replace when carrier contracts land.
 * Sole paid tier abroad for now — no standard vs express split.
 */
export const INTERNATIONAL_SHIPPING_FEE_PRICES: CurrencyPriceMap = {
  AED: 130,
  EUR: 30,
  USD: 35,
  GBP: 25,
  SAR: 130,
  QAR: 130,
  KWD: 11,
  BHD: 13,
  OMR: 14,
  CHF: 28,
  RUB: 3200,
  CNY: 250,
  CAD: 50,
  SGD: 50,
  BND: 50,
  MYR: 160,
  MAD: 360,
  NGN: 57000,
  IDR: 650000,
  KZT: 18000,
  AZN: 60,
  UZS: 450000,
  HKD: 280,
}

/**
 * @deprecated Prefer UAE_SHIPPING_FEE_PRICES / INTERNATIONAL_SHIPPING_FEE_PRICES.
 * Kept as an alias of the international map for older imports.
 */
export const EXPRESS_SHIPPING_PRICES: CurrencyPriceMap = INTERNATIONAL_SHIPPING_FEE_PRICES

/**
 * Client-paid return shipping within the UAE (master 35 AED).
 * Waived when the return arises from a verified fault of the House.
 */
export const UAE_RETURN_SHIPPING_FEE_PRICES: CurrencyPriceMap = {
  AED: 35,
  EUR: 8,
  USD: 10,
  GBP: 7,
  SAR: 35,
  QAR: 35,
  KWD: 3,
  BHD: 3.5,
  OMR: 3.5,
  CHF: 8,
  RUB: 900,
  CNY: 70,
  CAD: 13,
  SGD: 13,
  BND: 13,
  MYR: 45,
  MAD: 100,
  NGN: 15500,
  IDR: 180000,
  KZT: 5000,
  AZN: 16,
  UZS: 125000,
  HKD: 75,
}

/**
 * Client-paid international return shipping (master EUR 35 / ≈ USD 40).
 * Waived when the return arises from a verified fault of the House.
 */
export const INTERNATIONAL_RETURN_SHIPPING_FEE_PRICES: CurrencyPriceMap = {
  AED: 150,
  EUR: 35,
  USD: 40,
  GBP: 30,
  SAR: 150,
  QAR: 150,
  KWD: 13,
  BHD: 15,
  OMR: 16,
  CHF: 33,
  RUB: 3700,
  CNY: 290,
  CAD: 55,
  SGD: 55,
  BND: 55,
  MYR: 180,
  MAD: 400,
  NGN: 65000,
  IDR: 750000,
  KZT: 21000,
  AZN: 70,
  UZS: 520000,
  HKD: 310,
}
