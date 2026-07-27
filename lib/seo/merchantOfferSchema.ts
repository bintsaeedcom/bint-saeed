/**
 * Shared Offer enrichments for Google Merchant listings / Product rich results.
 * Values mirror published Shipping & Return policy (no invented claims).
 */

import {
  getInternationalShippingFee,
  getUaeReturnShippingFee,
  getUaeShippingFee,
  getWorldwideFreeShippingThreshold,
  UAE_FREE_SHIPPING_AED,
} from '@/lib/pricing/shippingPolicy'
import type { SupportedCurrency } from '@/lib/pricing/types'

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.bintsaeed.com').replace(/\/$/, '')

const RETURN_POLICY_URL = `${SITE_URL}/shipment-return-policy`

/**
 * ISO countries covered by international flat shipping (excludes AE — separate rate).
 * Keep aligned with PDP areaServed + markets Google already surfaces (FR/DE/NL/PT/ES/IT).
 */
export const MERCHANT_INTL_SHIP_TO_COUNTRIES = [
  'SA',
  'QA',
  'KW',
  'BH',
  'OM',
  'GB',
  'FR',
  'DE',
  'IT',
  'ES',
  'NL',
  'PT',
  'BE',
  'CH',
  'US',
  'CA',
  'AU',
  'SG',
  'MY',
  'ID',
  'BN',
] as const

/** Absolute asset URL for schema `image` fields. */
export function absoluteSchemaAssetUrl(src: string, siteUrl: string = SITE_URL): string {
  if (!src) return siteUrl
  if (src.startsWith('http://') || src.startsWith('https://')) return src
  return `${siteUrl}${src.startsWith('/') ? src : `/${src}`}`
}

function shippingDestination(countryCode: string | readonly string[]) {
  return {
    '@type': 'DefinedRegion' as const,
    addressCountry: countryCode,
  }
}

function deliveryTime(
  handlingMin: number,
  handlingMax: number,
  transitMin: number,
  transitMax: number,
) {
  return {
    '@type': 'ShippingDeliveryTime' as const,
    handlingTime: {
      '@type': 'QuantitativeValue' as const,
      minValue: handlingMin,
      maxValue: handlingMax,
      unitCode: 'd',
    },
    transitTime: {
      '@type': 'QuantitativeValue' as const,
      minValue: transitMin,
      maxValue: transitMax,
      unitCode: 'd',
    },
  }
}

/**
 * UAE + international OfferShippingDetails for the listed offer currency.
 * International destinations always include `addressCountry` (GSC requirement).
 */
export function buildOfferShippingDetails(input: {
  price: number
  currency?: SupportedCurrency
}): Record<string, unknown>[] {
  const currency = input.currency ?? 'AED'
  const uaeFee =
    currency === 'AED' && input.price >= UAE_FREE_SHIPPING_AED
      ? 0
      : getUaeShippingFee(currency)
  const worldwideThreshold = getWorldwideFreeShippingThreshold(currency)
  const intlFee = input.price >= worldwideThreshold ? 0 : getInternationalShippingFee(currency)

  return [
    {
      '@type': 'OfferShippingDetails',
      shippingRate: {
        '@type': 'MonetaryAmount',
        value: String(uaeFee),
        currency,
      },
      shippingDestination: shippingDestination('AE'),
      deliveryTime: deliveryTime(0, 12, 1, 3),
    },
    {
      '@type': 'OfferShippingDetails',
      shippingRate: {
        '@type': 'MonetaryAmount',
        value: String(intlFee),
        currency,
      },
      shippingDestination: shippingDestination(MERCHANT_INTL_SHIP_TO_COUNTRIES),
      deliveryTime: deliveryTime(0, 12, 3, 10),
    },
  ]
}

/** Merchant return / exchange policy aligned to /shipment-return-policy. */
export function buildMerchantReturnPolicy(options?: {
  /** Earrings (and similar hygiene final-sale) — exchange not permitted except defect. */
  finalSale?: boolean
}): Record<string, unknown> {
  if (options?.finalSale) {
    return {
      '@type': 'MerchantReturnPolicy',
      applicableCountry: 'AE',
      returnPolicyCategory: 'https://schema.org/MerchantReturnNotPermitted',
      merchantReturnLink: RETURN_POLICY_URL,
      returnPolicyCountry: 'AE',
    }
  }

  return {
    '@type': 'MerchantReturnPolicy',
    applicableCountry: 'AE',
    returnPolicyCategory: 'https://schema.org/MerchantReturnFiniteReturnWindow',
    merchantReturnDays: 14,
    returnMethod: 'https://schema.org/ReturnByMail',
    returnFees: 'https://schema.org/ReturnShippingFees',
    returnShippingFeesAmount: {
      '@type': 'MonetaryAmount',
      value: String(getUaeReturnShippingFee('AED')),
      currency: 'AED',
    },
    refundType: 'https://schema.org/ExchangeRefund',
    merchantReturnLink: RETURN_POLICY_URL,
    returnPolicyCountry: 'AE',
  }
}

/** Merge shipping + return policy onto an Offer node. */
export function withMerchantListingOfferFields<T extends Record<string, unknown>>(
  offer: T,
  input: {
    price: number
    currency?: SupportedCurrency
    finalSale?: boolean
  },
): T & {
  shippingDetails: Record<string, unknown>[]
  hasMerchantReturnPolicy: Record<string, unknown>
} {
  return {
    ...offer,
    shippingDetails: buildOfferShippingDetails({
      price: input.price,
      currency: input.currency,
    }),
    hasMerchantReturnPolicy: buildMerchantReturnPolicy({ finalSale: input.finalSale }),
  }
}
