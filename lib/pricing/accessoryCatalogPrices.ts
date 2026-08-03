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
  /** Al Quaa Earrings — Lapis Lazuli & Rose Quartz share the AED 545 retail map. */
  'al-quaa-earrings-rose-quartz': {
    AED: 545, SAR: 575, QAR: 549, OMR: 59, BHD: 59, KWD: 49, GBP: 115, EUR: 135,
    USD: 155, CHF: 135, RUB: 11900, CNY: 1098, CAD: 219, SGD: 199, BND: 199, MYR: 639,
    MAD: 1450, NGN: 209000, IDR: 2745000, KZT: 72500, AZN: 259, UZS: 1850000, HKD: 1198,
  },
  'al-quaa-earrings-lapis-lazuli': {
    AED: 545, SAR: 575, QAR: 549, OMR: 59, BHD: 59, KWD: 49, GBP: 115, EUR: 135,
    USD: 155, CHF: 135, RUB: 11900, CNY: 1098, CAD: 219, SGD: 199, BND: 199, MYR: 639,
    MAD: 1450, NGN: 209000, IDR: 2745000, KZT: 72500, AZN: 259, UZS: 1850000, HKD: 1198,
  },
  /** Al Ain Oasis Earrings — Orange Jade (AED 570). */
  'al-ain-oasis-earrings-orange-jade': {
    AED: 570, SAR: 599, QAR: 569, OMR: 62, BHD: 62, KWD: 51, GBP: 119, EUR: 139,
    USD: 159, CHF: 139, RUB: 12500, CNY: 1148, CAD: 229, SGD: 209, BND: 209, MYR: 669,
    MAD: 1520, NGN: 219000, IDR: 2865000, KZT: 75500, AZN: 269, UZS: 1935000, HKD: 1258,
  },
  /** Al Ain Oasis Earrings — Malachite (AED 645). */
  'al-ain-oasis-earrings-malachite': {
    AED: 645, SAR: 685, QAR: 649, OMR: 71, BHD: 71, KWD: 59, GBP: 139, EUR: 159,
    USD: 185, CHF: 159, RUB: 14500, CNY: 1298, CAD: 259, SGD: 239, BND: 239, MYR: 759,
    MAD: 1720, NGN: 249000, IDR: 3245000, KZT: 86500, AZN: 309, UZS: 2185000, HKD: 1448,
  },
  /** Al Ain Oasis Necklace — Onyx & Tiger Eye share the AED 1,599 retail map. */
  'al-ain-oasis-necklace-onyx': {
    AED: 1599, SAR: 1695, QAR: 1599, OMR: 169, BHD: 169, KWD: 139, GBP: 339, EUR: 399,
    USD: 459, CHF: 359, RUB: 33900, CNY: 3098, CAD: 649, SGD: 579, BND: 579, MYR: 1795,
    MAD: 4190, NGN: 599000, IDR: 7895000, KZT: 209000, AZN: 749, UZS: 5250000, HKD: 3498,
  },
  'al-ain-oasis-necklace-tiger-eye': {
    AED: 1599, SAR: 1695, QAR: 1599, OMR: 169, BHD: 169, KWD: 139, GBP: 339, EUR: 399,
    USD: 459, CHF: 359, RUB: 33900, CNY: 3098, CAD: 649, SGD: 579, BND: 579, MYR: 1795,
    MAD: 4190, NGN: 599000, IDR: 7895000, KZT: 209000, AZN: 749, UZS: 5250000, HKD: 3498,
  },
  /** Al Ain Oasis Necklace — Rose Quartz & Sunstone share the AED 1,899 retail map. */
  'al-ain-oasis-necklace-rose-quartz': {
    AED: 1899, SAR: 1995, QAR: 1899, OMR: 199, BHD: 199, KWD: 159, GBP: 399, EUR: 469,
    USD: 549, CHF: 429, RUB: 40900, CNY: 3698, CAD: 769, SGD: 689, BND: 689, MYR: 2145,
    MAD: 4990, NGN: 719000, IDR: 9395000, KZT: 249000, AZN: 899, UZS: 6250000, HKD: 4198,
  },
  'al-ain-oasis-necklace-sunstone': {
    AED: 1899, SAR: 1995, QAR: 1899, OMR: 199, BHD: 199, KWD: 159, GBP: 399, EUR: 469,
    USD: 549, CHF: 429, RUB: 40900, CNY: 3698, CAD: 769, SGD: 689, BND: 689, MYR: 2145,
    MAD: 4990, NGN: 719000, IDR: 9395000, KZT: 249000, AZN: 899, UZS: 6250000, HKD: 4198,
  },
  /** Al Ain Oasis Necklace — Malachite (AED 2,599). */
  'al-ain-oasis-necklace-malachite': {
    AED: 2599, SAR: 2695, QAR: 2599, OMR: 279, BHD: 269, KWD: 229, GBP: 549, EUR: 645,
    USD: 749, CHF: 589, RUB: 54900, CNY: 5098, CAD: 1049, SGD: 949, BND: 949, MYR: 2995,
    MAD: 6790, NGN: 979000, IDR: 12895000, KZT: 339000, AZN: 1219, UZS: 8550000, HKD: 5698,
  },
  /** Al Ain Oasis Necklace — Lapis Lazuli (AED 2,199). */
  'al-ain-oasis-necklace-lapis-lazuli': {
    AED: 2199, SAR: 2295, QAR: 2199, OMR: 239, BHD: 229, KWD: 189, GBP: 475, EUR: 549,
    USD: 649, CHF: 499, RUB: 46900, CNY: 4298, CAD: 899, SGD: 799, BND: 799, MYR: 2495,
    MAD: 5690, NGN: 829000, IDR: 10895000, KZT: 289000, AZN: 1029, UZS: 7195000, HKD: 4798,
  },
  /** Signature Strand — Fuchsia Jade & Orange Jade share the AED 399 retail map (−100 AED). */
  'signature-strand-fuchsia-jade': {
    AED: 399, SAR: 425, QAR: 399, OMR: 44, BHD: 45, KWD: 37, GBP: 80, EUR: 100,
    USD: 115, CHF: 100, RUB: 8400, CNY: 798, CAD: 161, SGD: 142, BND: 142, MYR: 472,
    MAD: 1070, NGN: 155000, IDR: 1995000, KZT: 50000, AZN: 193, UZS: 1295000, HKD: 883,
  },
  'signature-strand-orange-jade': {
    AED: 399, SAR: 425, QAR: 399, OMR: 44, BHD: 45, KWD: 37, GBP: 80, EUR: 100,
    USD: 115, CHF: 100, RUB: 8400, CNY: 798, CAD: 161, SGD: 142, BND: 142, MYR: 472,
    MAD: 1070, NGN: 155000, IDR: 1995000, KZT: 50000, AZN: 193, UZS: 1295000, HKD: 883,
  },
  /** Signature Strand — Tiger Eye, Onyx & Blue Aventurine share the AED 529 retail map (−100 AED). */
  'signature-strand-tiger-eye': {
    AED: 529, SAR: 565, QAR: 529, OMR: 58, BHD: 59, KWD: 47, GBP: 110, EUR: 130,
    USD: 149, CHF: 130, RUB: 11400, CNY: 1068, CAD: 211, SGD: 192, BND: 192, MYR: 616,
    MAD: 1410, NGN: 199000, IDR: 2645000, KZT: 68500, AZN: 253, UZS: 1725000, HKD: 1183,
  },
  'signature-strand-onyx': {
    AED: 529, SAR: 565, QAR: 529, OMR: 58, BHD: 59, KWD: 47, GBP: 110, EUR: 130,
    USD: 149, CHF: 130, RUB: 11400, CNY: 1068, CAD: 211, SGD: 192, BND: 192, MYR: 616,
    MAD: 1410, NGN: 199000, IDR: 2645000, KZT: 68500, AZN: 253, UZS: 1725000, HKD: 1183,
  },
  'signature-strand-blue-aventurine': {
    AED: 529, SAR: 565, QAR: 529, OMR: 58, BHD: 59, KWD: 47, GBP: 110, EUR: 130,
    USD: 149, CHF: 130, RUB: 11400, CNY: 1068, CAD: 211, SGD: 192, BND: 192, MYR: 616,
    MAD: 1410, NGN: 199000, IDR: 2645000, KZT: 68500, AZN: 253, UZS: 1725000, HKD: 1183,
  },
  /** Signature Strand — Jade Hearts & Natural Jade share the AED 699 retail map (−100 AED). */
  'signature-strand-jade-hearts': {
    AED: 699, SAR: 745, QAR: 699, OMR: 78, BHD: 75, KWD: 61, GBP: 144, EUR: 170,
    USD: 199, CHF: 170, RUB: 15000, CNY: 1398, CAD: 281, SGD: 252, BND: 252, MYR: 822,
    MAD: 1870, NGN: 269000, IDR: 3495000, KZT: 90000, AZN: 333, UZS: 2295000, HKD: 1583,
  },
  'signature-strand-jade': {
    AED: 699, SAR: 745, QAR: 699, OMR: 78, BHD: 75, KWD: 61, GBP: 144, EUR: 170,
    USD: 199, CHF: 170, RUB: 15000, CNY: 1398, CAD: 281, SGD: 252, BND: 252, MYR: 822,
    MAD: 1870, NGN: 269000, IDR: 3495000, KZT: 90000, AZN: 333, UZS: 2295000, HKD: 1583,
  },
  /** Signature Strand — Amethyst Hearts, Al Ain Oasis Rose Quartz, Sunstone & Lapis Lazuli share the AED 799 retail map (−100 AED). */
  'signature-strand-amethyst-hearts': {
    AED: 799, SAR: 849, QAR: 799, OMR: 88, BHD: 85, KWD: 71, GBP: 164, EUR: 200,
    USD: 229, CHF: 194, RUB: 17400, CNY: 1598, CAD: 321, SGD: 292, BND: 292, MYR: 946,
    MAD: 2110, NGN: 309000, IDR: 3995000, KZT: 104000, AZN: 383, UZS: 2650000, HKD: 1783,
  },
  'signature-strand-rose-quartz': {
    AED: 799, SAR: 849, QAR: 799, OMR: 88, BHD: 85, KWD: 71, GBP: 164, EUR: 200,
    USD: 229, CHF: 194, RUB: 17400, CNY: 1598, CAD: 321, SGD: 292, BND: 292, MYR: 946,
    MAD: 2110, NGN: 309000, IDR: 3995000, KZT: 104000, AZN: 383, UZS: 2650000, HKD: 1783,
  },
  'signature-strand-sunstone': {
    AED: 799, SAR: 849, QAR: 799, OMR: 88, BHD: 85, KWD: 71, GBP: 164, EUR: 200,
    USD: 229, CHF: 194, RUB: 17400, CNY: 1598, CAD: 321, SGD: 292, BND: 292, MYR: 946,
    MAD: 2110, NGN: 309000, IDR: 3995000, KZT: 104000, AZN: 383, UZS: 2650000, HKD: 1783,
  },
  'signature-strand-lapis-lazuli': {
    AED: 799, SAR: 849, QAR: 799, OMR: 88, BHD: 85, KWD: 71, GBP: 164, EUR: 200,
    USD: 229, CHF: 194, RUB: 17400, CNY: 1598, CAD: 321, SGD: 292, BND: 292, MYR: 946,
    MAD: 2110, NGN: 309000, IDR: 3995000, KZT: 104000, AZN: 383, UZS: 2650000, HKD: 1783,
  },
  /** Signature Strand — Al Ain Oasis Malachite (AED 999, −100 AED). */
  'signature-strand-malachite': {
    AED: 999, SAR: 1065, QAR: 999, OMR: 108, BHD: 109, KWD: 87, GBP: 210, EUR: 244,
    USD: 289, CHF: 244, RUB: 21400, CNY: 1998, CAD: 401, SGD: 362, BND: 362, MYR: 1172,
    MAD: 2670, NGN: 389000, IDR: 4995000, KZT: 130000, AZN: 483, UZS: 3350000, HKD: 2283,
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
