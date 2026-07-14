import type { AppliedGiftCardCredit } from '@/lib/giftCards/applyAtCheckout'
import { normalizeCurrencyCode } from '@/lib/pricing'
import type { SupportedCurrency } from '@/lib/pricing/types'

/** Rebuild applied gift card credit from Stripe Checkout session metadata. */
export function appliedGiftCardFromStripeMetadata(
  metadata: Record<string, string | undefined | null> | null | undefined,
): AppliedGiftCardCredit | null {
  const code = metadata?.giftCardCode?.trim()
  const appliedInCurrency = Number(metadata?.giftCardApplied)
  const appliedAed = Number(metadata?.giftCardAppliedAed)
  if (!code || !(appliedInCurrency > 0)) return null
  return {
    code,
    currency: normalizeCurrencyCode(metadata?.checkoutCurrency || 'AED') as SupportedCurrency,
    appliedInCurrency,
    appliedAed: appliedAed > 0 ? appliedAed : appliedInCurrency,
    remainingAedAfterPreview: 0,
  }
}
