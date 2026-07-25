import type { CartItem } from '@/store/cartStore'
import { findShopAccessoryById } from '@/lib/accessories/accessoryRouteAliases'

export type OrderLeadTimeCopy = {
  leadTimeFashion: string
  leadTimeJewellery: string
  leadTimeMixed: string
}

function isJewelleryCartItem(item: CartItem): boolean {
  if (item.giftCard) return false
  const url = item.productUrl ?? ''
  if (url.includes('/accessories/')) return true
  return Boolean(findShopAccessoryById(item.id))
}

function isPhysicalApparelCartItem(item: CartItem): boolean {
  if (item.giftCard) return false
  return !isJewelleryCartItem(item)
}

/** Lead-time note for Review Your Order — null for gift-card-only bags. */
export function resolveOrderLeadTimeNote(
  items: CartItem[],
  copy: OrderLeadTimeCopy,
): string | null {
  const hasJewellery = items.some(isJewelleryCartItem)
  const hasApparel = items.some(isPhysicalApparelCartItem)
  if (!hasJewellery && !hasApparel) return null
  if (hasJewellery && hasApparel) return copy.leadTimeMixed
  if (hasJewellery) return copy.leadTimeJewellery
  return copy.leadTimeFashion
}
