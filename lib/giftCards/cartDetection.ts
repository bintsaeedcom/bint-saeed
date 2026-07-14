import type { CheckoutCartItem } from '@/lib/checkout/types'
import { isGiftCardDenomination } from './catalogPrices'
import type { GiftCardDenominationAed } from './denominations'

export type CheckoutGiftCardMeta = {
  denominationAed: GiftCardDenominationAed
  sendToRecipient: boolean
  recipientName?: string
  recipientEmail?: string
  personalMessage?: string
}

export function isGiftCardLineId(id: string | undefined | null): boolean {
  return Boolean(id && id.startsWith('gift-card-'))
}

export function parseGiftCardDenominationFromId(id: string): GiftCardDenominationAed | null {
  const match = /^gift-card-(\d+)$/.exec(id.trim())
  if (!match) return null
  const n = Number(match[1])
  return isGiftCardDenomination(n) ? n : null
}

/** True when any line is a digital gift card purchase. */
export function cartContainsGiftCardPurchase(
  items: Array<{ id?: string | null }>,
): boolean {
  return items.some((item) => isGiftCardLineId(item.id))
}

/** True when every line is a digital gift card (no physical fulfilment). */
export function isGiftCardOnlyCart(
  items: Array<{ id?: string | null }>,
): boolean {
  if (!items.length) return false
  return items.every((item) => isGiftCardLineId(item.id))
}

export function cartRequiresPhysicalShipping(
  items: Array<{ id?: string | null }>,
): boolean {
  return !isGiftCardOnlyCart(items)
}

/** BNPL / marketplace APIs often still require an address object — use a clear digital placeholder. */
export function digitalGiftCardShippingPlaceholder(countryCode: string): {
  line1: string
  city: string
  country: string
} {
  const country = countryCode.toUpperCase() || 'AE'
  return {
    line1: 'Digital gift card — email delivery',
    city: country === 'SA' ? 'Riyadh' : country === 'KW' ? 'Kuwait City' : 'Dubai',
    country,
  }
}

export function compactGiftCardMetaForStripe(items: CheckoutCartItem[]): string | undefined {
  const giftLines = items.filter((item) => isGiftCardLineId(item.id))
  if (!giftLines.length) return undefined

  const payload = giftLines.map((item) => {
    const gc = item.giftCard
    const denomination =
      gc?.denominationAed ?? parseGiftCardDenominationFromId(item.id) ?? undefined
    return {
      id: item.id,
      q: item.quantity,
      d: denomination,
      s: gc?.sendToRecipient ? 1 : 0,
      rn: gc?.recipientName?.slice(0, 80),
      re: gc?.recipientEmail?.slice(0, 120),
      pm: gc?.personalMessage?.slice(0, 160),
    }
  })

  let json = JSON.stringify(payload)
  // Stripe metadata values max out at 500 characters.
  if (json.length > 500) {
    const trimmed = payload.map((row) => ({
      ...row,
      rn: row.rn?.slice(0, 40),
      re: row.re?.slice(0, 60),
      pm: row.pm?.slice(0, 40),
    }))
    json = JSON.stringify(trimmed).slice(0, 500)
  }
  return json
}

export function parseCompactGiftCardMeta(raw: string | null | undefined): CheckoutCartItem[] {
  if (!raw) return []
  try {
    const rows = JSON.parse(raw) as Array<{
      id?: string
      q?: number
      d?: number
      s?: number
      rn?: string
      re?: string
      pm?: string
    }>
    if (!Array.isArray(rows)) return []
    return rows
      .filter((row) => row.id && isGiftCardLineId(row.id))
      .map((row) => {
        const denomination =
          (typeof row.d === 'number' && isGiftCardDenomination(row.d)
            ? row.d
            : parseGiftCardDenominationFromId(row.id!)) ?? (500 as GiftCardDenominationAed)
        const sendToRecipient = row.s === 1
        return {
          id: row.id!,
          name: `Gift Card · AED ${denomination}`,
          price: denomination,
          quantity: Math.min(99, Math.max(1, Math.floor(Number(row.q)) || 1)),
          giftCard: {
            denominationAed: denomination,
            sendToRecipient,
            recipientName: row.rn,
            recipientEmail: sendToRecipient ? row.re : undefined,
            personalMessage: row.pm,
          },
        } satisfies CheckoutCartItem
      })
  } catch {
    return []
  }
}
