#!/usr/bin/env npx tsx
/**
 * Export the garment price sheet to CSV.
 *  - docs/garment-price-sheet.csv     wide, human-readable retail prices (matches the sheet)
 *  - docs/stripe-price-import.csv      long format with Stripe unit_amount (per product × currency)
 * Run: npx tsx scripts/export-price-csv.ts
 */
import { writeFileSync } from 'node:fs'
import { products } from '../data/products'
import { PRODUCT_CATALOG_PRICES } from '../lib/pricing/productPrices'
import { toStripeMinorUnits } from '../lib/pricing/index'
import { SUPPORTED_CURRENCIES, type SupportedCurrency } from '../lib/pricing/types'

const currencies = [...SUPPORTED_CURRENCIES] as SupportedCurrency[]

const wideRows: string[] = []
wideRows.push(['Product', 'Slug', ...currencies].join(','))
for (const p of products) {
  const map = PRODUCT_CATALOG_PRICES[p.slug]
  if (!map) continue
  wideRows.push([`"${p.name}"`, p.slug, ...currencies.map((c) => map[c])].join(','))
}
writeFileSync(new URL('../docs/garment-price-sheet.csv', import.meta.url), wideRows.join('\n') + '\n')

const longRows: string[] = []
longRows.push(['product_name', 'slug', 'currency', 'retail_amount', 'stripe_unit_amount'].join(','))
for (const p of products) {
  const map = PRODUCT_CATALOG_PRICES[p.slug]
  if (!map) continue
  for (const c of currencies) {
    longRows.push(
      [`"${p.name}"`, p.slug, c, map[c], toStripeMinorUnits(map[c], c)].join(','),
    )
  }
}
writeFileSync(new URL('../docs/stripe-price-import.csv', import.meta.url), longRows.join('\n') + '\n')

console.log('Wrote docs/garment-price-sheet.csv and docs/stripe-price-import.csv')
