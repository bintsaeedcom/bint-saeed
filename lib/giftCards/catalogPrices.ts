/**
 * Gift-card retail maps — AED master denominations, fixed amounts in every
 * checkout currency (same luxury rounding as catalog SKUs — not live FX).
 *
 * The card face always prints the AED denomination. UI labels convert.
 * Issued codes store balance in AED; redemption converts with these maps.
 */
import { luxuryRoundFromAed } from '@/lib/pricing/luxuryRound'
import { SUPPORTED_CURRENCIES, type CurrencyPriceMap, type SupportedCurrency } from '@/lib/pricing/types'
import { GIFT_CARD_DENOMINATIONS_AED, type GiftCardDenominationAed } from './denominations'

function mapFromAed(aed: number): CurrencyPriceMap {
  const map = {} as CurrencyPriceMap
  for (const code of SUPPORTED_CURRENCIES) {
    map[code] = luxuryRoundFromAed(aed, code)
  }
  return map
}

export const GIFT_CARD_CATALOG_PRICES: Record<GiftCardDenominationAed, CurrencyPriceMap> = {
  500: mapFromAed(500),
  1000: mapFromAed(1000),
  2500: mapFromAed(2500),
  5000: mapFromAed(5000),
}

export function getGiftCardPrice(aed: GiftCardDenominationAed, currency: SupportedCurrency): number {
  return GIFT_CARD_CATALOG_PRICES[aed][currency]
}

/** Convert an AED gift-card balance into display/checkout currency via the 500 AED map rate. */
export function giftCardBalanceInCurrency(balanceAed: number, currency: SupportedCurrency): number {
  if (currency === 'AED') return Math.round(balanceAed * 100) / 100
  if (balanceAed <= 0) return 0
  const unit = GIFT_CARD_CATALOG_PRICES[500][currency] / 500
  const raw = balanceAed * unit
  const threeDecimal = currency === 'BHD' || currency === 'KWD' || currency === 'OMR'
  if (threeDecimal) return Math.round(raw * 1000) / 1000
  return Math.round(raw)
}

/** Inverse: how much AED is covered by an amount already expressed in checkout currency. */
export function checkoutAmountToGiftCardAed(amountInCurrency: number, currency: SupportedCurrency): number {
  if (currency === 'AED') return Math.round(amountInCurrency * 100) / 100
  const unit = GIFT_CARD_CATALOG_PRICES[500][currency] / 500
  if (unit <= 0) return 0
  return Math.round((amountInCurrency / unit) * 100) / 100
}

export function isGiftCardDenomination(value: number): value is GiftCardDenominationAed {
  return (GIFT_CARD_DENOMINATIONS_AED as readonly number[]).includes(value)
}
