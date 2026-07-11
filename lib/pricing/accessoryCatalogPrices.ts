import type { Accessory } from '@/data/accessories'
import type { CurrencyPriceMap, SupportedCurrency } from '@/lib/pricing/types'

/**
 * Jewellery AED list prices — categories stay pending until confirmed.
 * SKUs listed in `ACCESSORY_CATALOG_PRICES` are treated as confirmed.
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
  if (ACCESSORY_CATALOG_PRICES[accessory.id]) return true
  return !isAccessoryCategoryPendingAed(accessory.category)
}

/** Confirmed accessory retail maps (AED master + approved international list prices). */
export const ACCESSORY_CATALOG_PRICES: Record<string, CurrencyPriceMap> = {
  'al-quaa-phone-charm-fuchsia-jade': {
    AED: 399, SAR: 410, QAR: 399, OMR: 42, BHD: 41, KWD: 35, GBP: 85, EUR: 95,
    USD: 110, CHF: 89, RUB: 8399, CNY: 745, CAD: 155, SGD: 145, BND: 145, MYR: 445,
    MAD: 1020, NGN: 149999, IDR: 1995000, KZT: 52500, AZN: 189, UZS: 1350000, HKD: 855,
  },
  'al-quaa-phone-charm-orange-jade': {
    AED: 399, SAR: 410, QAR: 399, OMR: 42, BHD: 41, KWD: 35, GBP: 85, EUR: 95,
    USD: 110, CHF: 89, RUB: 8399, CNY: 745, CAD: 155, SGD: 145, BND: 145, MYR: 445,
    MAD: 1020, NGN: 149999, IDR: 1995000, KZT: 52500, AZN: 189, UZS: 1350000, HKD: 855,
  },
  'al-quaa-phone-charm-onyx': {
    AED: 475, SAR: 490, QAR: 475, OMR: 50, BHD: 49, KWD: 41, GBP: 99, EUR: 115,
    USD: 130, CHF: 105, RUB: 9999, CNY: 885, CAD: 185, SGD: 170, BND: 170, MYR: 535,
    MAD: 1210, NGN: 179999, IDR: 2395000, KZT: 62500, AZN: 229, UZS: 1595000, HKD: 1025,
  },
  'al-quaa-phone-charm-tiger-eye': {
    AED: 475, SAR: 490, QAR: 475, OMR: 50, BHD: 49, KWD: 41, GBP: 99, EUR: 115,
    USD: 130, CHF: 105, RUB: 9999, CNY: 885, CAD: 185, SGD: 170, BND: 170, MYR: 535,
    MAD: 1210, NGN: 179999, IDR: 2395000, KZT: 62500, AZN: 229, UZS: 1595000, HKD: 1025,
  },
  'al-quaa-phone-charm-rose-quartz': {
    AED: 475, SAR: 490, QAR: 475, OMR: 50, BHD: 49, KWD: 41, GBP: 99, EUR: 115,
    USD: 130, CHF: 105, RUB: 9999, CNY: 885, CAD: 185, SGD: 170, BND: 170, MYR: 535,
    MAD: 1210, NGN: 179999, IDR: 2395000, KZT: 62500, AZN: 229, UZS: 1595000, HKD: 1025,
  },
  'al-quaa-phone-charm-malachite': {
    AED: 525, SAR: 540, QAR: 525, OMR: 55, BHD: 55, KWD: 45, GBP: 110, EUR: 125,
    USD: 145, CHF: 119, RUB: 11199, CNY: 975, CAD: 205, SGD: 185, BND: 185, MYR: 585,
    MAD: 1340, NGN: 199999, IDR: 2595000, KZT: 69000, AZN: 249, UZS: 1750000, HKD: 1125,
  },
  'al-quaa-phone-charm-lapis-lazuli': {
    AED: 525, SAR: 540, QAR: 525, OMR: 55, BHD: 55, KWD: 45, GBP: 110, EUR: 125,
    USD: 145, CHF: 119, RUB: 11199, CNY: 975, CAD: 205, SGD: 185, BND: 185, MYR: 585,
    MAD: 1340, NGN: 199999, IDR: 2595000, KZT: 69000, AZN: 249, UZS: 1750000, HKD: 1125,
  },
  'al-ain-oasis-i-bag-charm-fuchsia-jade': {
    AED: 595, SAR: 625, QAR: 599, OMR: 65, BHD: 65, KWD: 55, GBP: 125, EUR: 145,
    USD: 169, CHF: 145, RUB: 12900, CNY: 1198, CAD: 239, SGD: 219, BND: 219, MYR: 695,
    MAD: 1550, NGN: 229000, IDR: 2995000, KZT: 79000, AZN: 279, UZS: 1995000, HKD: 1298,
  },
  'al-ain-oasis-ii-bag-charm-fuchsia-jade': {
    AED: 685, SAR: 725, QAR: 699, OMR: 75, BHD: 75, KWD: 59, GBP: 145, EUR: 165,
    USD: 195, CHF: 165, RUB: 14900, CNY: 1398, CAD: 275, SGD: 249, BND: 249, MYR: 795,
    MAD: 1790, NGN: 265000, IDR: 3395000, KZT: 92500, AZN: 329, UZS: 2295000, HKD: 1498,
  },
}

export function getAccessoryCatalogPriceMap(accessoryId: string): CurrencyPriceMap | undefined {
  return ACCESSORY_CATALOG_PRICES[accessoryId]
}

export function getListedPriceForAccessory(
  accessoryId: string,
  currency: SupportedCurrency,
): number | null {
  return ACCESSORY_CATALOG_PRICES[accessoryId]?.[currency] ?? null
}
