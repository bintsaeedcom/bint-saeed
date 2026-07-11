import {
  INTERNATIONAL_RETURN_SHIPPING_FEE_PRICES,
  INTERNATIONAL_SHIPPING_FEE_PRICES,
  UAE_RETURN_SHIPPING_FEE_PRICES,
  UAE_SHIPPING_FEE_PRICES,
} from './catalogPrices'
import type { CurrencyPriceMap, SupportedCurrency } from './types'

/** Canonical UAE complimentary-shipping threshold (merchandise subtotal). */
export const UAE_FREE_SHIPPING_AED = 1000

/** Canonical worldwide complimentary-shipping threshold (merchandise subtotal). */
export const WORLDWIDE_FREE_SHIPPING_EUR = 500

/**
 * Clean display / eligibility thresholds ≈ AED 1,000.
 * Fixed retail amounts — not live FX.
 */
export const UAE_FREE_SHIPPING_THRESHOLDS: CurrencyPriceMap = {
  AED: 1000,
  EUR: 250,
  USD: 270,
  GBP: 200,
  SAR: 1000,
  QAR: 1000,
  OMR: 105,
  BHD: 105,
  KWD: 85,
  CHF: 215,
  RUB: 25000,
  CNY: 2000,
  CAD: 380,
  SGD: 370,
  BND: 370,
  MYR: 1250,
  MAD: 2800,
  NGN: 440000,
  IDR: 5100000,
  KZT: 140000,
  AZN: 460,
  UZS: 3600000,
  HKD: 2150,
}

/**
 * Clean display / eligibility thresholds ≈ €500.
 * Fixed retail amounts — not live FX.
 */
export const WORLDWIDE_FREE_SHIPPING_THRESHOLDS: CurrencyPriceMap = {
  AED: 2000,
  EUR: 500,
  USD: 550,
  GBP: 450,
  SAR: 2000,
  QAR: 2000,
  OMR: 220,
  BHD: 210,
  KWD: 180,
  CHF: 450,
  RUB: 50000,
  CNY: 4000,
  CAD: 800,
  SGD: 800,
  BND: 800,
  MYR: 2500,
  MAD: 6000,
  NGN: 900000,
  IDR: 10000000,
  KZT: 300000,
  AZN: 1000,
  UZS: 7500000,
  HKD: 4500,
}

export const UAE_SHIPPING_FEES: CurrencyPriceMap = UAE_SHIPPING_FEE_PRICES
export const INTERNATIONAL_SHIPPING_FEES: CurrencyPriceMap = INTERNATIONAL_SHIPPING_FEE_PRICES

/** @deprecated Use getInternationalShippingFee — alias kept for older call sites. */
export const SHIPPING_FEE_PRICES: CurrencyPriceMap = INTERNATIONAL_SHIPPING_FEE_PRICES

export function getUaeFreeShippingThreshold(currency: SupportedCurrency): number {
  return UAE_FREE_SHIPPING_THRESHOLDS[currency]
}

export function getWorldwideFreeShippingThreshold(currency: SupportedCurrency): number {
  return WORLDWIDE_FREE_SHIPPING_THRESHOLDS[currency]
}

export function getUaeShippingFee(currency: SupportedCurrency): number {
  return UAE_SHIPPING_FEE_PRICES[currency]
}

export function getInternationalShippingFee(currency: SupportedCurrency): number {
  return INTERNATIONAL_SHIPPING_FEE_PRICES[currency]
}

export function getUaeReturnShippingFee(currency: SupportedCurrency): number {
  return UAE_RETURN_SHIPPING_FEE_PRICES[currency]
}

export function getInternationalReturnShippingFee(currency: SupportedCurrency): number {
  return INTERNATIONAL_RETURN_SHIPPING_FEE_PRICES[currency]
}

/**
 * Estimate a shipping fee when destination is unknown.
 * AED shoppers see the UAE fee; everyone else sees the international fee.
 */
export function getEstimatedShippingFee(currency: SupportedCurrency): number {
  return currency === 'AED' ? getUaeShippingFee(currency) : getInternationalShippingFee(currency)
}

/** @deprecated Prefer getEstimatedShippingFee / destination-aware resolveShippingFee. */
export function getShippingFee(currency: SupportedCurrency): number {
  return getEstimatedShippingFee(currency)
}

export function normalizeShippingCountryCode(country?: string | null): string | undefined {
  if (!country) return undefined
  const trimmed = country.trim()
  if (!trimmed) return undefined
  if (trimmed.length === 2) return trimmed.toUpperCase()
  const lower = trimmed.toLowerCase()
  if (
    lower === 'united arab emirates' ||
    lower === 'uae' ||
    lower.includes('emirates')
  ) {
    return 'AE'
  }
  return undefined
}

export function isUaeShippingDestination(country?: string | null): boolean {
  return normalizeShippingCountryCode(country) === 'AE'
}

export type ShippingEligibility = {
  fee: number
  complimentary: boolean
  scope: 'worldwide' | 'uae' | 'none'
}

/**
 * Resolve shipping charge for checkout rails.
 * Worldwide complimentary takes priority; UAE complimentary only when destination is UAE.
 */
export function resolveShippingEligibility(params: {
  subtotal: number
  currency: SupportedCurrency
  country?: string | null
}): ShippingEligibility {
  const { subtotal, currency, country } = params
  const worldwideThreshold = getWorldwideFreeShippingThreshold(currency)
  if (subtotal >= worldwideThreshold) {
    return { fee: 0, complimentary: true, scope: 'worldwide' }
  }

  const uaeDestination =
    isUaeShippingDestination(country) || (!country && currency === 'AED')
  const uaeThreshold = getUaeFreeShippingThreshold(currency)
  if (uaeDestination && subtotal >= uaeThreshold) {
    return { fee: 0, complimentary: true, scope: 'uae' }
  }

  const fee = uaeDestination
    ? getUaeShippingFee(currency)
    : getInternationalShippingFee(currency)

  return { fee, complimentary: false, scope: 'none' }
}

export function resolveShippingFee(params: {
  subtotal: number
  currency: SupportedCurrency
  country?: string | null
}): number {
  return resolveShippingEligibility(params).fee
}

/** Cart / mini-cart status without destination — never nudges “add X more”. */
export type CartShippingStatus =
  | { kind: 'worldwide_unlocked' }
  | { kind: 'uae_eligible' }
  | { kind: 'below' }

export function getCartShippingStatus(
  subtotal: number,
  currency: SupportedCurrency,
): CartShippingStatus {
  if (subtotal >= getWorldwideFreeShippingThreshold(currency)) {
    return { kind: 'worldwide_unlocked' }
  }
  if (subtotal >= getUaeFreeShippingThreshold(currency)) {
    return { kind: 'uae_eligible' }
  }
  return { kind: 'below' }
}
