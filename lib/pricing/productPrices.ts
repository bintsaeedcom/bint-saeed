import { luxuryRoundFromAed } from './luxuryRound'
import { SUPPORTED_CURRENCIES, type CurrencyPriceMap, type SupportedCurrency } from './types'

/** Hand-set AED / GBP / EUR from the Chapter I catalogue. */
export interface ProductCatalogTriple {
  AED: number
  GBP: number
  EUR: number
}

/** Catalogue triples — AED / GBP / EUR from printed price lists. */
export const PRODUCT_CATALOG_TRIPLES: Record<string, ProductCatalogTriple> = {
  'knightsbridge-abaya-jacket': { AED: 3299, GBP: 665, EUR: 770 },
  'kensington-abaya': { AED: 2899, GBP: 585, EUR: 675 },
  'belgravia-abaya': { AED: 3199, GBP: 645, EUR: 745 },
  'covent-garden-abaya': { AED: 2799, GBP: 565, EUR: 650 },
  'marylebone-abaya': { AED: 2499, GBP: 505, EUR: 585 },
  'park-lane-abaya': { AED: 2199, GBP: 445, EUR: 515 },
  'hyde-park-set': { AED: 1399, GBP: 280, EUR: 325 },
  'mayfair-kaftan': { AED: 975, GBP: 199, EUR: 229 },
  'nothing-hill-kaftan': { AED: 975, GBP: 199, EUR: 229 },
  'soho-set': { AED: 1499, GBP: 299, EUR: 350 },
  'covent-garden-signature-set': { AED: 3199, GBP: 645, EUR: 745 },
  'covent-garden-long-dress': { AED: 1699, GBP: 340, EUR: 395 },
  'hampstead-dress': { AED: 1799, GBP: 360, EUR: 420 },
  'knightsbridge-dress': { AED: 2199, GBP: 440, EUR: 510 },
}

/** Hand-set list prices for kaftans (all checkout currencies). */
export const KAFTAN_CATALOG_PRICES: CurrencyPriceMap = {
  AED: 975,
  SAR: 995,
  QAR: 975,
  KWD: 79,
  BHD: 99,
  OMR: 99,
  USD: 259,
  GBP: 199,
  EUR: 229,
  CHF: 229,
  CNY: 1899,
  RUB: 19999,
  CAD: 369,
  SGD: 359,
  BND: 359,
  MYR: 1199,
  MAD: 2690,
  NGN: 429000,
  IDR: 4990000,
  KZT: 135000,
  AZN: 449,
  UZS: 3490000,
  HKD: 2099,
}

/** Hand-set list prices for Belgravia Abaya (all checkout currencies). */
export const BELGRAVIA_CATALOG_PRICES: CurrencyPriceMap = {
  AED: 3199,
  SAR: 3299,
  QAR: 3199,
  OMR: 329,
  BHD: 329,
  KWD: 269,
  GBP: 645,
  EUR: 745,
  USD: 829,
  CHF: 690,
  RUB: 79999,
  CNY: 6199,
  CAD: 1199,
  SGD: 1179,
  BND: 1179,
  MYR: 3899,
  MAD: 8790,
  NGN: 1399000,
  IDR: 15990000,
  KZT: 445000,
  AZN: 1479,
  UZS: 11490000,
  HKD: 6899,
}

const EXPLICIT_CATALOG_PRICE_BY_SLUG: Record<string, CurrencyPriceMap> = {
  'belgravia-abaya': BELGRAVIA_CATALOG_PRICES,
  'mayfair-kaftan': KAFTAN_CATALOG_PRICES,
  'nothing-hill-kaftan': KAFTAN_CATALOG_PRICES,
}

function roundToNearest(value: number, step: number): number {
  return Math.round(value / step) * step
}

/**
 * Build full checkout currency map from catalogue AED / GBP / EUR.
 * Western USD/CHF anchor to hand-set GBP/EUR; GCC + others luxury-round from AED.
 */
export function buildFullPriceMap(triple: ProductCatalogTriple): CurrencyPriceMap {
  const { AED, GBP, EUR } = triple
  const usd = roundToNearest(GBP * 1.27, 5)
  const chf = EUR < 500 ? roundToNearest(EUR * 0.92, 5) : roundToNearest(EUR * 0.92, 10)

  const map = {
    AED,
    GBP,
    EUR,
    USD: usd,
    CHF: chf,
  } as CurrencyPriceMap

  for (const code of SUPPORTED_CURRENCIES) {
    if (code in map) continue
    map[code] = luxuryRoundFromAed(AED, code)
  }

  return map
}

/** Full fixed list price per slug (all checkout currencies). */
export const PRODUCT_CATALOG_PRICES: Record<string, CurrencyPriceMap> = {
  ...Object.fromEntries(
    Object.entries(PRODUCT_CATALOG_TRIPLES)
      .filter(([slug]) => !(slug in EXPLICIT_CATALOG_PRICE_BY_SLUG))
      .map(([slug, triple]) => [slug, buildFullPriceMap(triple)]),
  ),
  ...EXPLICIT_CATALOG_PRICE_BY_SLUG,
}

export function hasCatalogPrice(slug: string): boolean {
  return slug in PRODUCT_CATALOG_PRICES
}

export function getCatalogAedPrice(slug: string): number | undefined {
  return PRODUCT_CATALOG_TRIPLES[slug]?.AED
}

export function getListedPriceForSlug(slug: string, currency: SupportedCurrency): number | null {
  return PRODUCT_CATALOG_PRICES[slug]?.[currency] ?? null
}
