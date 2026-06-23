import { REFERENCE_RATE_FROM_AED } from './referenceRates'
import type { SupportedCurrency } from './types'

function roundToNearest(value: number, step: number): number {
  return Math.round(value / step) * step
}

function roundUpToNearest(value: number, step: number): number {
  return Math.ceil(value / step) * step
}

/** GCC apparel-style endings (…99) — signals premium positioning vs round hundreds. */
function roundGccApparelStyle(value: number): number {
  if (value < 500) return roundToNearest(value, 5)
  const hundreds = Math.round(value / 100) * 100
  const with99 = hundreds - 1
  if (with99 >= value * 0.97) return with99
  return hundreds + 99
}

/**
 * Convert a master AED retail price into a fixed international list price.
 * Rounding rules follow luxury retail conventions (clean endings, no FX decimals).
 */
export function luxuryRoundFromAed(aed: number, currency: SupportedCurrency): number {
  if (currency === 'AED') return aed

  const raw = aed * REFERENCE_RATE_FROM_AED[currency]

  switch (currency) {
    case 'GBP':
      // Pounds: nearest £5 — reads intentional (565, 80, 15).
      return raw < 50 ? roundUpToNearest(raw, 5) : roundToNearest(raw, 5)

    case 'EUR':
      // Euros: £5 steps under €500, then €10 for hero pieces (650, 95).
      if (raw < 100) return roundUpToNearest(raw, 5)
      if (raw < 500) return roundToNearest(raw, 5)
      return roundToNearest(raw, 10)

    case 'USD':
      // Dollars: nearest $5 — mirrors GBP discipline.
      return raw < 50 ? roundUpToNearest(raw, 5) : roundToNearest(raw, 5)

    case 'CHF':
      // Swiss: CHF 5 under 100, CHF 10 above — aligns with EU hero pricing.
      if (raw < 100) return roundUpToNearest(raw, 5)
      return roundToNearest(raw, 10)

    case 'SAR':
    case 'QAR':
      // GCC: small pieces in 5 SAR/QAR steps; apparel uses …99 endings (2899).
      if (aed < 500) return roundToNearest(raw, 5)
      return roundGccApparelStyle(raw)

    case 'KWD':
    case 'BHD':
    case 'OMR':
      // High-value GCC: 0.500 dinar/rial steps for small lines; whole units above 10.
      if (raw < 10) return Math.round(raw * 2) / 2
      return Math.round(raw)

    case 'RUB':
      // Ruble: round to hundreds below 10k, thousands above — avoids odd tens.
      if (raw < 10_000) return roundToNearest(raw, 100)
      return roundToNearest(raw, 1000)

    case 'CNY':
      // Yuan: ¥10 for accessories, …99 for four-digit hero prices.
      if (raw < 500) return roundToNearest(raw, 10)
      return roundGccApparelStyle(raw)

    case 'CAD':
    case 'SGD':
    case 'BND':
    case 'MYR':
    case 'HKD':
      return raw < 50 ? roundUpToNearest(raw, 1) : roundToNearest(raw, 1)

    case 'MAD':
      if (raw < 100) return roundUpToNearest(raw, 10)
      return roundToNearest(raw, 10)

    case 'NGN':
      if (raw < 10_000) return roundToNearest(raw, 1000)
      return roundToNearest(raw, 10_000)

    case 'IDR':
      if (raw < 100_000) return roundToNearest(raw, 10_000)
      return roundToNearest(raw, 100_000)

    case 'KZT':
      if (raw < 10_000) return roundToNearest(raw, 1000)
      return roundToNearest(raw, 5000)

    case 'AZN':
      return raw < 50 ? roundUpToNearest(raw, 1) : roundToNearest(raw, 1)

    case 'UZS':
      if (raw < 100_000) return roundToNearest(raw, 10_000)
      return roundToNearest(raw, 100_000)

    default:
      return Math.round(raw)
  }
}
