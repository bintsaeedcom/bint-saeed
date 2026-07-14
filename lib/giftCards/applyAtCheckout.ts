import type { CheckoutCartItem } from '@/lib/checkout/types'
import type { SupportedCurrency } from '@/lib/pricing/types'
import { cartContainsGiftCardPurchase, isGiftCardLineId } from './cartDetection'
import {
  checkoutAmountToGiftCardAed,
  giftCardBalanceInCurrency,
} from './catalogPrices'
import { lookupGiftCardBalance, redeemGiftCard } from './issueRedeem'
import { normalizeGiftCardCode } from './giftCardStore'

export type AppliedGiftCardCredit = {
  code: string
  currency: SupportedCurrency
  appliedInCurrency: number
  appliedAed: number
  remainingAedAfterPreview: number
}

export { cartContainsGiftCardPurchase, isGiftCardLineId }

/**
 * Gift cards cannot purchase gift cards (issue + redeem on same order is blocked).
 */
export function giftCardPurchaseBlockedMessage(language?: string): string {
  return language === 'ar'
    ? 'لا يمكن دفع بطاقة هدايا ببطاقة هدايا أخرى. اختاري وسيلة دفع أخرى.'
    : 'Gift cards cannot be used to purchase gift cards. Please choose another payment method.'
}

/**
 * Server-side credit resolve — never trust a client-supplied amount.
 * Call with the full amount due (subtotal + shipping) before gift-card credit.
 */
export async function resolveAppliedGiftCardCredit(args: {
  code: string
  orderTotalInCurrency: number
  currency: SupportedCurrency
  items: CheckoutCartItem[]
  language?: string
}): Promise<{ ok: true; credit: AppliedGiftCardCredit } | { ok: false; error: string }> {
  const code = normalizeGiftCardCode(args.code)
  if (!code) {
    return {
      ok: false,
      error:
        args.language === 'ar' ? 'أدخلي رمز بطاقة الهدايا.' : 'Enter a gift card code.',
    }
  }

  if (cartContainsGiftCardPurchase(args.items)) {
    return { ok: false, error: giftCardPurchaseBlockedMessage(args.language) }
  }

  if (!(args.orderTotalInCurrency > 0)) {
    return {
      ok: false,
      error:
        args.language === 'ar' ? 'لا يوجد مبلغ لتطبيق البطاقة عليه.' : 'There is no amount to apply the gift card to.',
    }
  }

  const found = await lookupGiftCardBalance(code, args.currency)
  if (!found) {
    return {
      ok: false,
      error:
        args.language === 'ar'
          ? 'لم نعثر على رمز بطاقة الهدايا هذا.'
          : 'This gift card code was not found.',
    }
  }
  if (found.status !== 'active' || found.balanceAed <= 0) {
    return {
      ok: false,
      error:
        args.language === 'ar'
          ? 'هذه البطاقة لا تحتوي على رصيد متبقٍ.'
          : 'This gift card has no remaining balance.',
    }
  }

  const requestedAed = checkoutAmountToGiftCardAed(args.orderTotalInCurrency, args.currency)
  const appliedAed = Math.min(found.balanceAed, requestedAed)
  if (!(appliedAed > 0)) {
    return {
      ok: false,
      error:
        args.language === 'ar' ? 'تعذر تطبيق أي رصيد.' : 'Nothing could be applied from this gift card.',
    }
  }

  const appliedInCurrency = giftCardBalanceInCurrency(appliedAed, args.currency)
  const clampedApplied = Math.min(appliedInCurrency, args.orderTotalInCurrency)
  const remainingAedAfterPreview = Math.round((found.balanceAed - appliedAed) * 100) / 100

  return {
    ok: true,
    credit: {
      code,
      currency: args.currency,
      appliedInCurrency: clampedApplied,
      appliedAed,
      remainingAedAfterPreview,
    },
  }
}

export function amountDueAfterGiftCard(
  orderTotalInCurrency: number,
  credit: AppliedGiftCardCredit | null | undefined,
): number {
  if (!credit) return orderTotalInCurrency
  return Math.max(0, Math.round((orderTotalInCurrency - credit.appliedInCurrency) * 1000) / 1000)
}

/** Commit redeem after payment is confirmed. Idempotent by orderId. Never throws. */
export async function commitRedeemForPaidOrder(args: {
  applied: Pick<AppliedGiftCardCredit, 'code' | 'currency' | 'appliedInCurrency'> | null | undefined
  orderId: string
}): Promise<{ ok: boolean; skipped?: boolean; message?: string }> {
  try {
    if (!args.applied?.code || !(args.applied.appliedInCurrency > 0)) {
      return { ok: true, skipped: true }
    }
    const result = await redeemGiftCard({
      code: args.applied.code,
      requestedInCurrency: args.applied.appliedInCurrency,
      currency: args.applied.currency,
      orderId: args.orderId,
    })
    if (!result.ok) {
      console.error('commitRedeemForPaidOrder failed', {
        orderId: args.orderId,
        message: result.message,
      })
      return { ok: false, message: result.message }
    }
    return { ok: true }
  } catch (error) {
    console.error('commitRedeemForPaidOrder exception', error)
    return { ok: false, message: 'Redeem failed' }
  }
}
