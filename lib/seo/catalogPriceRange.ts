import { products } from '@/data/products'
import { accessories } from '@/data/accessories'

function range(prices: number[]): { low: number; high: number } {
  const valid = prices.filter((p) => Number.isFinite(p) && p > 0)
  return { low: Math.min(...valid), high: Math.max(...valid) }
}

/** Ready-to-wear (abayas, kaftans, sets, dresses) — AED, from the live catalogue. */
export const GARMENT_PRICE_RANGE = range(products.map((p) => p.price))

/** Whole house incl. jewellery and accessories — AED, from the live catalogue. */
export const STORE_PRICE_RANGE = range([
  ...products.map((p) => p.price),
  ...accessories.map((a) => a.price),
])

export const GARMENT_OFFER_COUNT = products.length
