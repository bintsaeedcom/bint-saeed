/**
 * Bint Saeed gift-card denominations (master currency: AED).
 * Confirmed: 500 / 1,000 / 2,500 / 5,000 AED.
 *
 * Faces always print AED. Shopper UI converts via gift-card catalog maps.
 */

export const GIFT_CARD_DENOMINATIONS_AED = [500, 1000, 2500, 5000] as const

export type GiftCardDenominationAed = (typeof GIFT_CARD_DENOMINATIONS_AED)[number]

/** Bump filename suffix when regenerating faces (forces CDN / Next image cache miss). */
export const GIFT_CARD_FACE_REVISION = 'r7'

export function giftCardFaceSrc(amountAed: GiftCardDenominationAed): string {
  return `/gift-cards/bint-saeed-gift-card-${amountAed}-aed-${GIFT_CARD_FACE_REVISION}.webp`
}

export function formatGiftCardAmountAed(amountAed: number): string {
  return `AED ${amountAed.toLocaleString('en-AE')}`
}

export const GIFT_CARD_BASE_FACE = `/gift-cards/bint-saeed-gift-card-base.webp` as const
export const GIFT_CARD_MONOGRAM = '/gift-cards/bint-saeed-gift-card-monogram-gold.png' as const
