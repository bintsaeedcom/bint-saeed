import type { SupportedCurrency } from '@/lib/pricing/types'

/** Mollie amount.value — 2 decimals for most currencies; 3 for BHD/KWD/OMR. */
export function toMollieAmountValue(amount: number, currency: SupportedCurrency): string {
  const threeDecimal = currency === 'BHD' || currency === 'KWD' || currency === 'OMR'
  const digits = threeDecimal ? 3 : 2
  return Math.max(0, amount).toFixed(digits)
}
