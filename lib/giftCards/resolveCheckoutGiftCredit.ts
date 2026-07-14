import type { ParsedCheckoutRequest } from '@/lib/checkout/types'
import type { SupportedCurrency } from '@/lib/pricing/types'
import {
  amountDueAfterGiftCard,
  resolveAppliedGiftCardCredit,
  type AppliedGiftCardCredit,
} from '@/lib/giftCards/applyAtCheckout'

export async function resolveOptionalCheckoutGiftCredit(args: {
  parsed: ParsedCheckoutRequest
  orderTotalBeforeGiftCard: number
  currency: SupportedCurrency
  language?: string
}): Promise<
  | { ok: true; credit: AppliedGiftCardCredit | null; amountDue: number }
  | { ok: false; error: string }
> {
  const code = args.parsed.appliedGiftCardCode?.trim()
  if (!code) {
    return {
      ok: true,
      credit: null,
      amountDue: args.orderTotalBeforeGiftCard,
    }
  }

  const resolved = await resolveAppliedGiftCardCredit({
    code,
    orderTotalInCurrency: args.orderTotalBeforeGiftCard,
    currency: args.currency,
    items: args.parsed.items,
    language: args.language,
  })
  if (!resolved.ok) return { ok: false, error: resolved.error }

  return {
    ok: true,
    credit: resolved.credit,
    amountDue: amountDueAfterGiftCard(args.orderTotalBeforeGiftCard, resolved.credit),
  }
}
