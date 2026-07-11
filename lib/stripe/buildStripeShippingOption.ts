import type Stripe from 'stripe'
import {
  isUaeShippingDestination,
  resolveShippingEligibility,
  toStripeMinorUnits,
} from '@/lib/pricing'
import type { SupportedCurrency } from '@/lib/pricing/types'

export type StripeShippingOptionParam =
  Stripe.Checkout.SessionCreateParams.ShippingOption

/** Provisional rate shown until the client enters a shipping address. */
export function buildProvisionalStripeShippingOption(
  currency: SupportedCurrency,
): StripeShippingOptionParam {
  return {
    shipping_rate_data: {
      type: 'fixed_amount',
      fixed_amount: {
        amount: 0,
        currency: currency.toLowerCase(),
      },
      display_name: 'Shipping',
    },
  }
}

/**
 * Destination-accurate flat shipping option for Checkout Sessions.
 * Worldwide complimentary unlock takes priority; UAE complimentary only for AE destinations.
 */
export function buildStripeShippingOption(params: {
  subtotal: number
  currency: SupportedCurrency
  country?: string | null
}): StripeShippingOptionParam {
  const { subtotal, currency, country } = params
  const eligibility = resolveShippingEligibility({ subtotal, currency, country })
  const uaeDestination = isUaeShippingDestination(country)

  let displayName: string
  if (eligibility.scope === 'worldwide') {
    displayName = 'Complimentary worldwide shipping'
  } else if (eligibility.scope === 'uae') {
    displayName = 'Complimentary UAE shipping (Jeebly)'
  } else if (uaeDestination) {
    displayName = 'UAE shipping (Jeebly)'
  } else {
    displayName = 'International shipping (DHL Express)'
  }

  return {
    shipping_rate_data: {
      type: 'fixed_amount',
      fixed_amount: {
        amount: toStripeMinorUnits(eligibility.fee, currency),
        currency: currency.toLowerCase(),
      },
      display_name: displayName,
    },
  }
}

export function resolveShippingLabels(params: {
  subtotal: number
  currency: SupportedCurrency
  country?: string | null
}): { fee: number; scope: string; displayName: string } {
  const eligibility = resolveShippingEligibility(params)
  const option = buildStripeShippingOption(params)
  return {
    fee: eligibility.fee,
    scope: eligibility.scope,
    displayName: option.shipping_rate_data?.display_name ?? 'Shipping',
  }
}
