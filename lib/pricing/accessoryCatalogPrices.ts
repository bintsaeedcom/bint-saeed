import type { Accessory } from '@/data/accessories'
import type { CurrencyPriceMap, SupportedCurrency } from '@/lib/pricing/types'

/**
 * Jewellery AED list prices are not confirmed yet — no fixed multi-currency maps
 * until approved. Checkout falls back to AED + luxuryRoundFromAed for display only.
 */
export const ACCESSORY_CATEGORIES_PENDING_AED = [
  'signature-strands',
  'necklaces',
  'earrings',
  'bracelets',
  'bag-strands',
  'phone-strands',
] as const

export function isAccessoryCategoryPendingAed(category: Accessory['category']): boolean {
  return (ACCESSORY_CATEGORIES_PENDING_AED as readonly string[]).includes(category)
}

export function isAccessoryPricingConfirmed(accessory: Pick<Accessory, 'id' | 'category'>): boolean {
  return !isAccessoryCategoryPendingAed(accessory.category)
}

/** Populated when accessory AED prices are confirmed — empty until then. */
export const ACCESSORY_CATALOG_PRICES: Record<string, CurrencyPriceMap> = {}

export function getAccessoryCatalogPriceMap(accessoryId: string): CurrencyPriceMap | undefined {
  return ACCESSORY_CATALOG_PRICES[accessoryId]
}

export function getListedPriceForAccessory(
  accessoryId: string,
  currency: SupportedCurrency,
): number | null {
  return ACCESSORY_CATALOG_PRICES[accessoryId]?.[currency] ?? null
}
