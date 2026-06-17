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
  'mayfair-kaftan': { AED: 975, GBP: 195, EUR: 229 },
  'nothing-hill-kaftan': { AED: 975, GBP: 195, EUR: 229 },
  'soho-set': { AED: 1499, GBP: 299, EUR: 350 },
  'covent-garden-signature-set': { AED: 3199, GBP: 645, EUR: 745 },
  'covent-garden-long-dress': { AED: 1699, GBP: 340, EUR: 395 },
  'hampstead-dress': { AED: 1799, GBP: 360, EUR: 420 },
  'knightsbridge-dress': { AED: 2199, GBP: 440, EUR: 510 },
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
export const PRODUCT_CATALOG_PRICES: Record<string, CurrencyPriceMap> = Object.fromEntries(
  Object.entries(PRODUCT_CATALOG_TRIPLES).map(([slug, triple]) => [slug, buildFullPriceMap(triple)]),
)

export function hasCatalogPrice(slug: string): boolean {
  return slug in PRODUCT_CATALOG_PRICES
}

export function getCatalogAedPrice(slug: string): number | undefined {
  return PRODUCT_CATALOG_TRIPLES[slug]?.AED
}

export function getListedPriceForSlug(slug: string, currency: SupportedCurrency): number | null {
  return PRODUCT_CATALOG_PRICES[slug]?.[currency] ?? null
}
