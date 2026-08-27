import type Stripe from 'stripe'
import {
  getInternationalShippingFee,
  getUaeFreeShippingThreshold,
  getUaeShippingFee,
  getWorldwideFreeShippingThreshold,
  isUaeShippingDestination,
  resolveShippingEligibility,
  toStripeMinorUnits,
} from '@/lib/pricing'
import type { SupportedCurrency } from '@/lib/pricing/types'

export type StripeShippingOptionParam =
  Stripe.Checkout.SessionCreateParams.ShippingOption

function fixedShippingOption(
  amountMajor: number,
  currency: SupportedCurrency,
  displayName: string,
): StripeShippingOptionParam {
  return {
    shipping_rate_data: {
      type: 'fixed_amount',
      fixed_amount: {
        amount: toStripeMinorUnits(amountMajor, currency),
        currency: currency.toLowerCase(),
      },
      display_name: displayName,
    },
  }
}

/** Provisional rate shown until the client enters a shipping address. */
export function buildProvisionalStripeShippingOption(
  currency: SupportedCurrency,
): StripeShippingOptionParam {
  return fixedShippingOption(0, currency, 'Shipping')
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

  return fixedShippingOption(eligibility.fee, currency, displayName)
}

/**
 * Express Checkout (Apple Pay / Google Pay) cannot live-recalculate by address
 * on Checkout Sessions — offer the house flat rates as selectable wallet options.
 * Max 2 rates; first option is the wallet default.
 */
export function buildExpressCheckoutShippingOptions(params: {
  subtotal: number
  currency: SupportedCurrency
}): StripeShippingOptionParam[] {
  const { subtotal, currency } = params
  const worldwideThreshold = getWorldwideFreeShippingThreshold(currency)
  const uaeThreshold = getUaeFreeShippingThreshold(currency)

  if (subtotal >= worldwideThreshold) {
    return [fixedShippingOption(0, currency, 'Complimentary worldwide shipping')]
  }

  const uaeFree = subtotal >= uaeThreshold
  const uaeOption = fixedShippingOption(
    uaeFree ? 0 : getUaeShippingFee(currency),
    currency,
    uaeFree
      ? 'UAE only — complimentary (Jeebly)'
      : 'UAE shipping (Jeebly)',
  )
  const internationalOption = fixedShippingOption(
    getInternationalShippingFee(currency),
    currency,
    'International shipping (DHL Express)',
  )

  // Default first: AED → UAE; other currencies → international.
  if (currency === 'AED') {
    return [uaeOption, internationalOption]
  }
  return [internationalOption, uaeOption]
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
