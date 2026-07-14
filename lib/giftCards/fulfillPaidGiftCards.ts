import type { CheckoutCartItem } from '@/lib/checkout/types'
import type { StoredOrder } from '@/lib/orders/types'
import type { SupportedCurrency } from '@/lib/pricing/types'
import {
  isGiftCardLineId,
  parseCompactGiftCardMeta,
  parseGiftCardDenominationFromId,
} from './cartDetection'
import { getGiftCardPrice, isGiftCardDenomination } from './catalogPrices'
import type { GiftCardDenominationAed } from './denominations'
import { sendGiftCardEmails } from './giftCardEmails'
import { listGiftCardsByPurchaseOrderId } from './giftCardStore'
import { issueGiftCard } from './issueRedeem'
import type { StoredGiftCard } from './types'

export type FulfillPaidGiftCardsResult = {
  issued: StoredGiftCard[]
  skipped: boolean
  reason?: 'not_paid' | 'no_gift_lines' | 'already_issued' | 'partial_failure'
}

type ResolvedGiftUnit = {
  denominationAed: GiftCardDenominationAed
  sendToRecipient: boolean
  recipientName?: string
  recipientEmail?: string
  personalMessage?: string
  amountPaid?: number
}

function resolveGiftUnits(args: {
  order: StoredOrder
  items?: CheckoutCartItem[]
}): ResolvedGiftUnit[] {
  const units: ResolvedGiftUnit[] = []
  const currency = (args.order.currency || 'AED').toUpperCase() as SupportedCurrency

  if (args.items?.length) {
    for (const item of args.items) {
      if (!isGiftCardLineId(item.id)) continue
      const denomination =
        item.giftCard?.denominationAed ??
        parseGiftCardDenominationFromId(item.id)
      if (!denomination || !isGiftCardDenomination(denomination)) continue
      const qty = Math.min(99, Math.max(1, Math.floor(item.quantity) || 1))
      const unitPaid = getGiftCardPrice(denomination, currency)
      for (let i = 0; i < qty; i++) {
        units.push({
          denominationAed: denomination,
          sendToRecipient: Boolean(item.giftCard?.sendToRecipient),
          recipientName: item.giftCard?.recipientName,
          recipientEmail: item.giftCard?.sendToRecipient
            ? item.giftCard.recipientEmail
            : undefined,
          personalMessage: item.giftCard?.personalMessage || item.customisationMessage || item.notes,
          amountPaid: unitPaid,
        })
      }
    }
    if (units.length) return units
  }

  for (const line of args.order.lines) {
    const id = line.productId
    if (!id || !isGiftCardLineId(id)) continue
    const denomination = parseGiftCardDenominationFromId(id)
    if (!denomination) continue
    const qty = Math.min(99, Math.max(1, Math.floor(line.quantity) || 1))
    const unitPaid =
      line.unitPrice > 0 ? line.unitPrice : getGiftCardPrice(denomination, currency)
    for (let i = 0; i < qty; i++) {
      units.push({
        denominationAed: denomination,
        sendToRecipient: false,
        personalMessage: line.description,
        amountPaid: unitPaid,
      })
    }
  }

  return units
}

/**
 * Issue gift codes + send Resend emails after a paid order is persisted.
 * Idempotent on purchaseOrderId: retries will not mint extra codes once the
 * expected count for the order is already stored. Never throws.
 */
export async function fulfillPaidGiftCards(args: {
  order: StoredOrder
  items?: CheckoutCartItem[]
  /** Stripe-only compact metadata fallback when pending items are unavailable. */
  giftCardMetaJson?: string | null
}): Promise<FulfillPaidGiftCardsResult> {
  try {
    if (args.order.fulfillmentStatus !== 'paid') {
      return { issued: [], skipped: true, reason: 'not_paid' }
    }

    const fromMeta = parseCompactGiftCardMeta(args.giftCardMetaJson)
    const items = args.items?.length ? args.items : fromMeta.length ? fromMeta : undefined
    const units = resolveGiftUnits({ order: args.order, items })
    if (!units.length) {
      return { issued: [], skipped: true, reason: 'no_gift_lines' }
    }

    const existing = await listGiftCardsByPurchaseOrderId(args.order.id)
    if (existing.length >= units.length) {
      return { issued: existing, skipped: true, reason: 'already_issued' }
    }

    const purchaserEmail = args.order.customerEmail?.trim() || ''
    const currency = (args.order.currency || 'AED').toUpperCase() as SupportedCurrency
    const newlyIssued: StoredGiftCard[] = []
    let failed = false

    for (let i = existing.length; i < units.length; i++) {
      const unit = units[i]!
      try {
        const card = await issueGiftCard({
          denominationAed: unit.denominationAed,
          purchaserEmail: purchaserEmail || undefined,
          recipientEmail: unit.sendToRecipient ? unit.recipientEmail : undefined,
          recipientName: unit.sendToRecipient ? unit.recipientName : undefined,
          personalMessage: unit.personalMessage,
          purchaseOrderId: args.order.id,
          currencyPaid: currency,
          amountPaid: unit.amountPaid,
        })
        newlyIssued.push(card)

        await sendGiftCardEmails({
          code: card.code,
          denominationAed: card.denominationAed,
          purchaserEmail: purchaserEmail || card.purchaserEmail || '',
          recipientEmail: card.recipientEmail,
          recipientName: card.recipientName,
          personalMessage: card.personalMessage,
          expiresAt: card.expiresAt || new Date().toISOString(),
          orderId: args.order.id,
          currencyPaid: currency,
          amountPaid: unit.amountPaid,
        })
      } catch (error) {
        failed = true
        console.error('fulfillPaidGiftCards issue/email failed', {
          orderId: args.order.id,
          unitIndex: i,
          error,
        })
      }
    }

    const allForOrder = await listGiftCardsByPurchaseOrderId(args.order.id)
    return {
      issued: allForOrder,
      skipped: false,
      reason: failed || newlyIssued.length + existing.length < units.length
        ? 'partial_failure'
        : undefined,
    }
  } catch (error) {
    console.error('fulfillPaidGiftCards fatal', error)
    return { issued: [], skipped: false, reason: 'partial_failure' }
  }
}
