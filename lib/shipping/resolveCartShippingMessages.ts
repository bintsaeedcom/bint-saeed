import {
  formatAmountForCurrency,
  getCartShippingStatus,
  getEstimatedShippingFee,
  getUaeFreeShippingThreshold,
  getWorldwideFreeShippingThreshold,
} from '@/lib/pricing'
import type { SupportedCurrency } from '@/lib/pricing/types'

type CartShippingCopy = {
  freeUaeShipping: string
  freeWorldwideShipping: string
  shippingComplimentary: string
  shippingComplimentaryUae: string
  shippingLabel: string
  shippingComplimentaryShort: string
}

function withAmount(template: string, amount: string): string {
  return template.replaceAll('{amount}', amount)
}

export function resolveCartShippingMessages(params: {
  subtotal: number
  currency: SupportedCurrency
  copy: CartShippingCopy
}): {
  primary: string
  secondary?: string
  feeLabel: string
  feeValue: string
  unlocked: boolean
} {
  const { subtotal, currency, copy } = params
  const status = getCartShippingStatus(subtotal, currency)
  const uaeAmount = formatAmountForCurrency(getUaeFreeShippingThreshold(currency), currency)
  const worldwideAmount = formatAmountForCurrency(
    getWorldwideFreeShippingThreshold(currency),
    currency,
  )
  const feeAmount = formatAmountForCurrency(getEstimatedShippingFee(currency), currency)

  if (status.kind === 'worldwide_unlocked') {
    return {
      primary: copy.shippingComplimentary,
      feeLabel: copy.shippingLabel,
      feeValue: copy.shippingComplimentaryShort,
      unlocked: true,
    }
  }

  if (status.kind === 'uae_eligible') {
    const assumeUaeDelivery = currency === 'AED'
    return {
      primary: copy.shippingComplimentaryUae,
      secondary: withAmount(copy.freeWorldwideShipping, worldwideAmount),
      feeLabel: copy.shippingLabel,
      feeValue: assumeUaeDelivery ? copy.shippingComplimentaryShort : feeAmount,
      unlocked: assumeUaeDelivery,
    }
  }

  return {
    primary: withAmount(copy.freeUaeShipping, uaeAmount),
    secondary: withAmount(copy.freeWorldwideShipping, worldwideAmount),
    feeLabel: copy.shippingLabel,
    feeValue: feeAmount,
    unlocked: false,
  }
}
