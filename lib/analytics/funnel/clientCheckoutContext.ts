'use client'

import { isInternalTestModeActive } from '@/lib/analytics/internalTestMode'
import type { CartFingerprintLine } from '@/lib/analytics/funnel/cartIdentity'
import { computeCartFingerprint, getOrCreateCartId } from '@/lib/analytics/funnel/cartIdentity'

/** Funnel identity fields sent with every checkout API call. */
export function buildClientFunnelContext(items: CartFingerprintLine[]) {
  if (typeof window === 'undefined') {
    return {
      cartId: undefined,
      visitorId: undefined,
      cartFingerprint: undefined,
      internalTest: false,
    }
  }
  return {
    cartId: getOrCreateCartId(),
    visitorId: localStorage.getItem('bs_visitor_id') || undefined,
    cartFingerprint: computeCartFingerprint(items),
    internalTest: isInternalTestModeActive(),
  }
}
