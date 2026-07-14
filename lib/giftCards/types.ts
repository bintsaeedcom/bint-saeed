import type { SupportedCurrency } from '@/lib/pricing/types'
import type { GiftCardDenominationAed } from './denominations'

export type GiftCardStatus = 'active' | 'depleted' | 'void' | 'expired'

export type GiftCardLedgerKind =
  | 'issue'
  | 'redeem'
  | 'refund_credit'
  | 'adjustment'
  | 'void'

export interface GiftCardLedgerEntry {
  id: string
  at: string
  kind: GiftCardLedgerKind
  /** Signed AED delta (issue +, redeem −). */
  amountAed: number
  balanceAfterAed: number
  /** Checkout currency used when the entry was created (if any). */
  currency?: SupportedCurrency
  amountInCurrency?: number
  orderId?: string
  note?: string
}

export interface StoredGiftCard {
  id: string
  /** Public redemption code shown to the client (e.g. BS-GC-ABCD-1234). */
  code: string
  status: GiftCardStatus
  denominationAed: GiftCardDenominationAed
  /** Remaining spendable balance — always AED. */
  balanceAed: number
  /** Original issued balance — always AED. */
  issuedAed: number
  currencyPaid?: SupportedCurrency
  amountPaid?: number
  purchaserEmail?: string
  recipientEmail?: string
  recipientName?: string
  personalMessage?: string
  purchaseOrderId?: string
  expiresAt?: string | null
  ledger: GiftCardLedgerEntry[]
  createdAt: string
  updatedAt: string
}
