import { buildLuxuryCatalogPriceMap, type ProductCatalogTriple } from './luxuryCatalogPriceMap'
import type { CurrencyPriceMap } from './types'

export type { ProductCatalogTriple }

/**
 * Authoritative hand-set retail price sheet — full fixed list price per ready-to-wear
 * slug across every checkout currency. These are set by the brand (not derived from live
 * FX) using luxury psychological rounding. AED is the master; other currencies are the
 * approved international list prices. Update this sheet when the price list changes.
 */
export const PRODUCT_CATALOG_PRICES: Record<string, CurrencyPriceMap> = {
  'knightsbridge-abaya-jacket': {
    AED: 3299, SAR: 3395, QAR: 3299, OMR: 349, BHD: 339, KWD: 279, GBP: 675, EUR: 795,
    USD: 949, CHF: 749, RUB: 69900, CNY: 6398, CAD: 1295, SGD: 1195, BND: 1195, MYR: 3795,
    MAD: 8290, NGN: 1249000, IDR: 16195000, KZT: 439000, AZN: 1549, UZS: 10750000, HKD: 7198,
  },
  'covent-garden-abaya': {
    AED: 2799, SAR: 2895, QAR: 2799, OMR: 299, BHD: 289, KWD: 239, GBP: 575, EUR: 695,
    USD: 799, CHF: 639, RUB: 59900, CNY: 5398, CAD: 1095, SGD: 999, BND: 999, MYR: 3195,
    MAD: 7290, NGN: 1059000, IDR: 13795000, KZT: 369000, AZN: 1319, UZS: 9145000, HKD: 6098,
  },
  'kensington-abaya': {
    AED: 2899, SAR: 2995, QAR: 2899, OMR: 309, BHD: 299, KWD: 249, GBP: 599, EUR: 719,
    USD: 829, CHF: 659, RUB: 61900, CNY: 5598, CAD: 1145, SGD: 1045, BND: 1045, MYR: 3295,
    MAD: 7490, NGN: 1099000, IDR: 14300000, KZT: 379000, AZN: 1369, UZS: 9495000, HKD: 6298,
  },
  'marylebone-abaya': {
    AED: 2499, SAR: 2595, QAR: 2499, OMR: 269, BHD: 259, KWD: 219, GBP: 525, EUR: 619,
    USD: 729, CHF: 559, RUB: 52900, CNY: 4898, CAD: 995, SGD: 899, BND: 899, MYR: 2845,
    MAD: 6490, NGN: 949000, IDR: 12350000, KZT: 329000, AZN: 1179, UZS: 8950000, HKD: 5398,
  },
  'belgravia-abaya': {
    AED: 3199, SAR: 3295, QAR: 3199, OMR: 339, BHD: 329, KWD: 279, GBP: 649, EUR: 779,
    USD: 919, CHF: 719, RUB: 67900, CNY: 6198, CAD: 1295, SGD: 1145, BND: 1145, MYR: 3695,
    MAD: 8290, NGN: 1219000, IDR: 15790000, KZT: 419000, AZN: 1499, UZS: 8195000, HKD: 6898,
  },
  'park-lane-abaya': {
    AED: 2199, SAR: 2295, QAR: 2199, OMR: 239, BHD: 229, KWD: 189, GBP: 449, EUR: 549,
    USD: 649, CHF: 499, RUB: 46900, CNY: 4298, CAD: 899, SGD: 799, BND: 799, MYR: 2495,
    MAD: 5690, NGN: 829000, IDR: 10895000, KZT: 289000, AZN: 1029, UZS: 7195000, HKD: 4798,
  },
  'hyde-park-set': {
    AED: 1399, SAR: 1495, QAR: 1399, OMR: 149, BHD: 149, KWD: 119, GBP: 285, EUR: 349,
    USD: 419, CHF: 339, RUB: 29900, CNY: 2698, CAD: 549, SGD: 499, BND: 499, MYR: 1595,
    MAD: 3690, NGN: 529000, IDR: 6895000, KZT: 185000, AZN: 659, UZS: 4595000, HKD: 3098,
  },
  'mayfair-kaftan': {
    AED: 975, SAR: 1045, QAR: 975, OMR: 109, BHD: 99, KWD: 89, GBP: 199, EUR: 249,
    USD: 299, CHF: 239, RUB: 20900, CNY: 1998, CAD: 399, SGD: 349, BND: 349, MYR: 1145,
    MAD: 2595, NGN: 379000, IDR: 4950000, KZT: 129000, AZN: 469, UZS: 3295000, HKD: 2198,
  },
  'nothing-hill-kaftan': {
    AED: 975, SAR: 1045, QAR: 975, OMR: 109, BHD: 99, KWD: 89, GBP: 199, EUR: 249,
    USD: 299, CHF: 239, RUB: 20900, CNY: 1998, CAD: 399, SGD: 349, BND: 349, MYR: 1145,
    MAD: 2595, NGN: 379000, IDR: 4950000, KZT: 129000, AZN: 469, UZS: 3295000, HKD: 2198,
  },
  'knightsbridge-dress': {
    AED: 2199, SAR: 2295, QAR: 2199, OMR: 239, BHD: 229, KWD: 189, GBP: 449, EUR: 549,
    USD: 649, CHF: 499, RUB: 46900, CNY: 4298, CAD: 899, SGD: 799, BND: 799, MYR: 2495,
    MAD: 5690, NGN: 829000, IDR: 10895000, KZT: 289000, AZN: 1029, UZS: 7195000, HKD: 4798,
  },
  'covent-garden-long-dress': {
    AED: 1699, SAR: 1745, QAR: 1699, OMR: 179, BHD: 179, KWD: 149, GBP: 349, EUR: 429,
    USD: 519, CHF: 389, RUB: 35900, CNY: 3398, CAD: 699, SGD: 599, BND: 599, MYR: 1945,
    MAD: 4390, NGN: 649000, IDR: 8395000, KZT: 225000, AZN: 799, UZS: 5595000, HKD: 3698,
  },
  'hampstead-dress': {
    AED: 1799, SAR: 1845, QAR: 1799, OMR: 189, BHD: 189, KWD: 149, GBP: 369, EUR: 449,
    USD: 549, CHF: 409, RUB: 37900, CNY: 3598, CAD: 719, SGD: 649, BND: 649, MYR: 2095,
    MAD: 4690, NGN: 689000, IDR: 8895000, KZT: 239000, AZN: 849, UZS: 5895000, HKD: 3898,
  },
  'covent-garden-signature-set': {
    AED: 3199, SAR: 3295, QAR: 3199, OMR: 339, BHD: 329, KWD: 279, GBP: 649, EUR: 779,
    USD: 919, CHF: 719, RUB: 67900, CNY: 6198, CAD: 1295, SGD: 1145, BND: 1145, MYR: 3695,
    MAD: 8290, NGN: 1219000, IDR: 15790000, KZT: 419000, AZN: 1499, UZS: 10450000, HKD: 6898,
  },
  'soho-set': {
    AED: 1499, SAR: 1545, QAR: 1499, OMR: 159, BHD: 159, KWD: 129, GBP: 299, EUR: 379,
    USD: 449, CHF: 349, RUB: 31900, CNY: 2998, CAD: 599, SGD: 529, BND: 529, MYR: 1695,
    MAD: 3890, NGN: 569000, IDR: 7395000, KZT: 199000, AZN: 709, UZS: 4895000, HKD: 3298,
  },
  'grosvenor-set': {
    AED: 1299, SAR: 1299, QAR: 1299, OMR: 144, BHD: 133, KWD: 118, GBP: 269, EUR: 325,
    USD: 350, CHF: 300, RUB: 27764, CNY: 2610, CAD: 530, SGD: 465, BND: 465, MYR: 1522,
    MAD: 3450, NGN: 500996, IDR: 6507852, KZT: 171633, AZN: 622, UZS: 4268039, HKD: 2910,
  },
}

/** AED / GBP / EUR anchors — derived from the authoritative price sheet. */
export const PRODUCT_CATALOG_TRIPLES: Record<string, ProductCatalogTriple> = Object.fromEntries(
  Object.entries(PRODUCT_CATALOG_PRICES).map(([slug, map]) => [
    slug,
    { AED: map.AED, GBP: map.GBP, EUR: map.EUR },
  ]),
)

export const BELGRAVIA_CATALOG_PRICES = PRODUCT_CATALOG_PRICES['belgravia-abaya']
export const KAFTAN_CATALOG_PRICES = PRODUCT_CATALOG_PRICES['mayfair-kaftan']

export { buildLuxuryCatalogPriceMap }

/** @deprecated Use buildLuxuryCatalogPriceMap — kept for scripts/tests. */
export const buildFullPriceMap = buildLuxuryCatalogPriceMap

export function hasCatalogPrice(slug: string): boolean {
  return slug in PRODUCT_CATALOG_PRICES
}

export function getCatalogAedPrice(slug: string): number | undefined {
  return PRODUCT_CATALOG_TRIPLES[slug]?.AED
}

export function getListedPriceForSlug(slug: string, currency: import('./types').SupportedCurrency): number | null {
  return PRODUCT_CATALOG_PRICES[slug]?.[currency] ?? null
}
