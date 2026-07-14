import { randomBytes } from 'crypto'
import type { SupportedCurrency } from '@/lib/pricing/types'
import type { GiftCardDenominationAed } from './denominations'
import { checkoutAmountToGiftCardAed, giftCardBalanceInCurrency } from './catalogPrices'
import { getGiftCardByCode, normalizeGiftCardCode, saveGiftCard } from './giftCardStore'
import type { GiftCardLedgerEntry, StoredGiftCard } from './types'
import { giftCardExpiryFrom } from './validity'

function newId(prefix: string): string {
  return `${prefix}_${Date.now().toString(36)}_${randomBytes(4).toString('hex')}`
}

/** Human-readable House code: BS-GC-XXXX-XXXX */
export function generateGiftCardCode(): string {
  const alphabet = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'
  const pick = (n: number) =>
    Array.from({ length: n }, () => alphabet[randomBytes(1)[0]! % alphabet.length]).join('')
  return `BS-GC-${pick(4)}-${pick(4)}`
}

export type IssueGiftCardInput = {
  denominationAed: GiftCardDenominationAed
  purchaserEmail?: string
  recipientEmail?: string
  recipientName?: string
  personalMessage?: string
  purchaseOrderId?: string
  currencyPaid?: SupportedCurrency
  amountPaid?: number
  /** Optional override — defaults to one Gregorian year from issue. Pass null for no expiry. */
  expiresAt?: string | null
}

export async function issueGiftCard(input: IssueGiftCardInput): Promise<StoredGiftCard> {
  const now = new Date().toISOString()
  let code = generateGiftCardCode()
  // Extremely unlikely collision — retry a few times.
  for (let i = 0; i < 5; i++) {
    const existing = await getGiftCardByCode(code)
    if (!existing) break
    code = generateGiftCardCode()
  }

  const expiresAt =
    input.expiresAt === null ? null : input.expiresAt ?? giftCardExpiryFrom(new Date(now))

  const entry: GiftCardLedgerEntry = {
    id: newId('le'),
    at: now,
    kind: 'issue',
    amountAed: input.denominationAed,
    balanceAfterAed: input.denominationAed,
    currency: input.currencyPaid,
    amountInCurrency: input.amountPaid,
    orderId: input.purchaseOrderId,
    note: 'Issued after successful payment',
  }

  const card: StoredGiftCard = {
    id: newId('gc'),
    code,
    status: 'active',
    denominationAed: input.denominationAed,
    balanceAed: input.denominationAed,
    issuedAed: input.denominationAed,
    currencyPaid: input.currencyPaid,
    amountPaid: input.amountPaid,
    purchaserEmail: input.purchaserEmail,
    recipientEmail: input.recipientEmail,
    recipientName: input.recipientName,
    personalMessage: input.personalMessage,
    purchaseOrderId: input.purchaseOrderId,
    expiresAt,
    ledger: [entry],
    createdAt: now,
    updatedAt: now,
  }

  await saveGiftCard(card)
  return card
}

export type RedeemGiftCardResult =
  | {
      ok: true
      card: StoredGiftCard
      appliedAed: number
      appliedInCurrency: number
      remainingAed: number
      remainingInCurrency: number
    }
  | { ok: false; message: string }

/**
 * Apply up to `requestedInCurrency` of the card against a checkout total.
 * Deduction is recorded in AED; partial spends leave an active remaining balance.
 */
export async function redeemGiftCard(args: {
  code: string
  requestedInCurrency: number
  currency: SupportedCurrency
  orderId?: string
}): Promise<RedeemGiftCardResult> {
  const card = await getGiftCardByCode(args.code)
  if (!card) return { ok: false, message: 'This gift card code was not found.' }
  if (card.status === 'void') return { ok: false, message: 'This gift card has been voided.' }
  if (card.status === 'expired' || (card.expiresAt && new Date(card.expiresAt) < new Date())) {
    return { ok: false, message: 'This gift card has expired.' }
  }
  if (card.balanceAed <= 0 || card.status === 'depleted') {
    return { ok: false, message: 'This gift card has no remaining balance.' }
  }
  if (!(args.requestedInCurrency > 0)) {
    return { ok: false, message: 'Enter an amount to apply.' }
  }

  // Idempotent: webhook retries for the same paid order must not debit twice.
  if (args.orderId) {
    const prior = card.ledger.find(
      (entry) => entry.kind === 'redeem' && entry.orderId === args.orderId,
    )
    if (prior) {
      const appliedAed = Math.abs(prior.amountAed)
      const appliedInCurrency =
        prior.amountInCurrency != null && prior.amountInCurrency > 0
          ? prior.amountInCurrency
          : giftCardBalanceInCurrency(appliedAed, args.currency)
      return {
        ok: true,
        card,
        appliedAed,
        appliedInCurrency,
        remainingAed: card.balanceAed,
        remainingInCurrency: giftCardBalanceInCurrency(card.balanceAed, args.currency),
      }
    }
  }

  const requestedAed = checkoutAmountToGiftCardAed(args.requestedInCurrency, args.currency)
  const appliedAed = Math.min(card.balanceAed, requestedAed)
  if (appliedAed <= 0) return { ok: false, message: 'Nothing could be applied from this gift card.' }

  const appliedInCurrency = giftCardBalanceInCurrency(appliedAed, args.currency)
  const remainingAed = Math.round((card.balanceAed - appliedAed) * 100) / 100
  const now = new Date().toISOString()

  const entry: GiftCardLedgerEntry = {
    id: newId('le'),
    at: now,
    kind: 'redeem',
    amountAed: -appliedAed,
    balanceAfterAed: remainingAed,
    currency: args.currency,
    amountInCurrency: appliedInCurrency,
    orderId: args.orderId,
  }

  const next: StoredGiftCard = {
    ...card,
    balanceAed: remainingAed,
    status: remainingAed <= 0 ? 'depleted' : 'active',
    ledger: [...card.ledger, entry],
    updatedAt: now,
  }
  await saveGiftCard(next)

  return {
    ok: true,
    card: next,
    appliedAed,
    appliedInCurrency,
    remainingAed,
    remainingInCurrency: giftCardBalanceInCurrency(remainingAed, args.currency),
  }
}

export async function lookupGiftCardBalance(code: string, currency: SupportedCurrency = 'AED') {
  const card = await getGiftCardByCode(normalizeGiftCardCode(code))
  if (!card) return null
  return {
    code: card.code,
    status: card.status,
    denominationAed: card.denominationAed,
    balanceAed: card.balanceAed,
    balanceInCurrency: giftCardBalanceInCurrency(card.balanceAed, currency),
    currency,
    issuedAed: card.issuedAed,
    expiresAt: card.expiresAt,
  }
}
