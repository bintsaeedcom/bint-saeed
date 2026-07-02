import { luxuryRoundFromAed } from './luxuryRound'
import { SUPPORTED_CURRENCIES, type CurrencyPriceMap, type SupportedCurrency } from './types'

/** Hand-set AED / GBP / EUR anchors from the Chapter I catalogue. */
export interface ProductCatalogTriple {
  AED: number
  GBP: number
  EUR: number
}

/** Belgravia Abaya — luxury calibration anchor (~3,200 AED hero tier). */
export const BELGRAVIA_CATALOG_PRICES: CurrencyPriceMap = {
  AED: 3199,
  SAR: 3295,
  QAR: 3199,
  OMR: 339,
  BHD: 329,
  KWD: 279,
  GBP: 649,
  EUR: 779,
  USD: 919,
  CHF: 719,
  RUB: 67900,
  CNY: 6198,
  CAD: 1295,
  SGD: 1145,
  BND: 1145,
  MYR: 3695,
  MAD: 8290,
  NGN: 1219000,
  IDR: 15790000,
  KZT: 419000,
  AZN: 1499,
  UZS: 8195000,
  HKD: 6898,
}

/** Mayfair / Nothing Hill Kaftan — entry-tier calibration anchor (~975 AED). */
export const KAFTAN_CATALOG_PRICES: CurrencyPriceMap = {
  AED: 975,
  SAR: 1045,
  QAR: 975,
  KWD: 89,
  BHD: 99,
  OMR: 109,
  USD: 299,
  GBP: 199,
  EUR: 249,
  CHF: 239,
  CNY: 1998,
  RUB: 20900,
  CAD: 399,
  SGD: 349,
  BND: 349,
  MYR: 1145,
  MAD: 2595,
  NGN: 379000,
  IDR: 4950000,
  KZT: 129000,
  AZN: 469,
  UZS: 3295000,
  HKD: 2198,
}

const HERO_AED = BELGRAVIA_CATALOG_PRICES.AED
const ENTRY_AED = KAFTAN_CATALOG_PRICES.AED

function roundToNearest(value: number, step: number): number {
  return Math.round(value / step) * step
}

function roundUpToNearest(value: number, step: number): number {
  return Math.ceil(value / step) * step
}

/** GCC apparel SAR — hero abayas +100; kaftan +20; small accessories +5; else parity. */
function luxurySarFromAed(aed: number): number {
  if (aed >= 2799) return aed + 100
  if (aed === ENTRY_AED) return aed + 20
  return aed
}

/** QAR tracks AED at list level (GCC parity signal). */
function luxuryQarFromAed(aed: number): number {
  return aed
}

/**
 * USD — anchored to hand-set GBP, Chanel/Loro Piana-style clean endings.
 * Hero pieces (≥£600) use a slightly richer USD multiple; others use ×1.27 in $5 steps.
 */
function luxuryUsdFromGbp(gbp: number, aed: number): number {
  if (aed === HERO_AED && gbp === BELGRAVIA_CATALOG_PRICES.GBP) {
    return BELGRAVIA_CATALOG_PRICES.USD
  }
  if (aed === ENTRY_AED && gbp === KAFTAN_CATALOG_PRICES.GBP) {
    return KAFTAN_CATALOG_PRICES.USD
  }
  const factor = gbp >= 600 ? 1.27 : 1.3
  const stepped = roundToNearest(gbp * factor, 5)
  if (gbp >= 600) return stepped
  return Math.max(stepped, roundUpToNearest(gbp * 1.27, 5))
}

/** CHF — derived from EUR with restrained Swiss rounding (5 / 10 steps). */
function luxuryChfFromEur(eur: number, aed: number): number {
  if (aed === HERO_AED && eur === BELGRAVIA_CATALOG_PRICES.EUR) {
    return BELGRAVIA_CATALOG_PRICES.CHF
  }
  if (aed === ENTRY_AED && eur === KAFTAN_CATALOG_PRICES.EUR) {
    return KAFTAN_CATALOG_PRICES.CHF
  }
  return eur < 500 ? roundToNearest(eur * 0.92, 5) : roundToNearest(eur * 0.926, 10)
}

/** Blend Belgravia + Kaftan calibration so FX stays close but endings stay luxury-clean. */
function calibrationFactor(currency: SupportedCurrency, aed: number): number {
  const heroBase = luxuryRoundFromAed(HERO_AED, currency)
  const entryBase = luxuryRoundFromAed(ENTRY_AED, currency)
  const hero = heroBase > 0 ? BELGRAVIA_CATALOG_PRICES[currency] / heroBase : 1
  const entry = entryBase > 0 ? KAFTAN_CATALOG_PRICES[currency] / entryBase : 1
  if (aed <= ENTRY_AED) return entry
  if (aed >= HERO_AED) return hero
  const t = (aed - ENTRY_AED) / (HERO_AED - ENTRY_AED)
  return entry + (hero - entry) * t
}

function luxuryPriceFromAed(aed: number, currency: SupportedCurrency): number {
  const calibrated = luxuryRoundFromAed(aed, currency) * calibrationFactor(currency, aed)
  return Math.max(1, Math.round(calibrated))
}

/** Hero GCC — OMR and BHD share one clean list price (Belgravia method). */
function luxuryGccOmrBhdFromAed(aed: number): { OMR: number; BHD: number } {
  const omr = luxuryPriceFromAed(aed, 'OMR')
  const bhd = luxuryPriceFromAed(aed, 'BHD')
  if (aed >= HERO_AED) {
    const paired = Math.min(omr, bhd)
    return { OMR: paired, BHD: paired }
  }
  return { OMR: omr, BHD: bhd }
}

function tripleKey(triple: ProductCatalogTriple): string {
  return `${triple.AED}:${triple.GBP}:${triple.EUR}`
}

const EXACT_TRIPLE_MAP: Record<string, CurrencyPriceMap> = {
  [`${HERO_AED}:${BELGRAVIA_CATALOG_PRICES.GBP}:${BELGRAVIA_CATALOG_PRICES.EUR}`]:
    BELGRAVIA_CATALOG_PRICES,
  [`${ENTRY_AED}:${KAFTAN_CATALOG_PRICES.GBP}:${KAFTAN_CATALOG_PRICES.EUR}`]:
    KAFTAN_CATALOG_PRICES,
}

/**
 * Build a full fixed retail map (all checkout currencies) from catalogue AED / GBP / EUR.
 * Uses Belgravia + Kaftan as calibrated anchors; GCC and long-tail currencies stay near
 * reference FX with luxury psychological rounding (…99, clean fives, paired OMR/BHD).
 */
export function buildLuxuryCatalogPriceMap(triple: ProductCatalogTriple): CurrencyPriceMap {
  const exact = EXACT_TRIPLE_MAP[tripleKey(triple)]
  if (exact) return { ...exact }

  const { AED, GBP, EUR } = triple
  const map = {} as CurrencyPriceMap

  for (const code of SUPPORTED_CURRENCIES) {
    switch (code) {
      case 'AED':
        map[code] = AED
        break
      case 'GBP':
        map[code] = GBP
        break
      case 'EUR':
        map[code] = EUR
        break
      case 'USD':
        map[code] = luxuryUsdFromGbp(GBP, AED)
        break
      case 'CHF':
        map[code] = luxuryChfFromEur(EUR, AED)
        break
      case 'SAR':
        map[code] = luxurySarFromAed(AED)
        break
      case 'QAR':
        map[code] = luxuryQarFromAed(AED)
        break
      case 'OMR':
      case 'BHD': {
        const gcc = luxuryGccOmrBhdFromAed(AED)
        map.OMR = gcc.OMR
        map.BHD = gcc.BHD
        break
      }
      default:
        map[code] = luxuryPriceFromAed(AED, code)
    }
  }

  return map
}
