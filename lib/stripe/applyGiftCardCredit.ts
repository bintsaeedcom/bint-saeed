import type Stripe from 'stripe'
import { toStripeMinorUnits } from '@/lib/pricing'
import type { SupportedCurrency } from '@/lib/pricing/types'
import type { AppliedGiftCardCredit } from '@/lib/giftCards/applyAtCheckout'

/**
 * Attach a one-time Stripe coupon equal to the gift-card credit.
 * Stripe Checkout cannot combine `allow_promotion_codes` with `discounts`,
 * so promotion codes are disabled when a gift card is applied (optional promo
 * code from parsed.discountCode can still be merged as a second discount).
 */
export async function applyGiftCardCreditToStripeSession(
  stripe: Stripe,
  sessionOptions: Stripe.Checkout.SessionCreateParams,
  credit: AppliedGiftCardCredit,
): Promise<void> {
  if (!(credit.appliedInCurrency > 0)) return

  const currency = credit.currency as SupportedCurrency
  const amountOff = toStripeMinorUnits(credit.appliedInCurrency, currency)
  if (amountOff <= 0) return

  const coupon = await stripe.coupons.create({
    amount_off: amountOff,
    currency: currency.toLowerCase(),
    duration: 'once',
    name: `Gift card ${credit.code}`.slice(0, 40),
    metadata: {
      giftCardCode: credit.code,
      appliedAed: String(credit.appliedAed),
    },
  })

  const existing = Array.isArray(sessionOptions.discounts) ? [...sessionOptions.discounts] : []
  sessionOptions.discounts = [...existing, { coupon: coupon.id }]
  delete sessionOptions.allow_promotion_codes

  sessionOptions.metadata = {
    ...(sessionOptions.metadata ?? {}),
    giftCardCode: credit.code.slice(0, 40),
    giftCardApplied: String(credit.appliedInCurrency),
    giftCardAppliedAed: String(credit.appliedAed),
  }
}
