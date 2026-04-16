'use client'

export const OPEN_MINI_CART_EVENT = 'bintsaeed:open-mini-cart'

export function showAddedToBagToast(_isRTL: boolean) {
  if (typeof window === 'undefined') return
  window.dispatchEvent(new CustomEvent(OPEN_MINI_CART_EVENT))
}
