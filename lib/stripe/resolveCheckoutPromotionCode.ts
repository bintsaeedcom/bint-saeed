import type Stripe from 'stripe'

/**
 * Resolve the human-readable promotion code applied on a Checkout Session.
 * Prefers our metadata (from the review-page promo field), then Stripe discounts.
 */
export function resolveDiscountCodeFromCheckoutSession(
  session: Stripe.Checkout.Session,
): string | undefined {
  const fromMeta = session.metadata?.discountCodeUsed?.trim()
  if (fromMeta) return fromMeta.toUpperCase()

  const discounts = session.discounts
  if (!Array.isArray(discounts)) return undefined

  for (const entry of discounts) {
    if (!entry || typeof entry !== 'object') continue
    const promo = 'promotion_code' in entry ? entry.promotion_code : null
    if (promo && typeof promo === 'object' && 'code' in promo && typeof promo.code === 'string') {
      const code = promo.code.trim()
      if (code) return code.toUpperCase()
    }
  }

  return undefined
}
