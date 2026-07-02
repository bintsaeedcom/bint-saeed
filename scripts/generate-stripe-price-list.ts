#!/usr/bin/env npx tsx
/** Regenerate docs/stripe-price-list.md from lib/pricing — run after catalogue price changes. */
import { writeFileSync } from 'node:fs'
import { products } from '../data/products'
import { accessories } from '../data/accessories'
import {
  PRODUCT_CATALOG_TRIPLES,
  PRODUCT_CATALOG_PRICES,
  buildLuxuryCatalogPriceMap,
} from '../lib/pricing/productPrices'
import { isAccessoryCategoryPendingAed } from '../lib/pricing/accessoryCatalogPrices'
import {
  EXPRESS_SHIPPING_PRICES,
  SIGNATURE_PACKAGING_PRICES,
} from '../lib/pricing/catalogPrices'
import { getListedPrice, toStripeMinorUnits } from '../lib/pricing/index'
import { SUPPORTED_CURRENCIES, type SupportedCurrency } from '../lib/pricing/types'

const currencies = [...SUPPORTED_CURRENCIES] as SupportedCurrency[]
const lines: string[] = []

lines.push('# Bint Saeed — Stripe price reference')
lines.push('')
lines.push('Fixed international retail prices (not live FX). Personalisation on abayas is **complimentary**.')
lines.push('')
lines.push(`Last synced from codebase: ${new Date().toISOString().slice(0, 10)}`)
lines.push('')
lines.push('**Stripe `unit_amount`** = minor units (fils / pence / cents). KWD, BHD, OMR use 3 decimal places (×1000).')
lines.push('')
lines.push(
  '**Ready-to-wear:** AED / GBP / EUR are catalogue anchors; all other currencies use the Belgravia + Kaftan luxury calibration (psychological rounding, close to reference FX).',
)
lines.push('')
lines.push(
  '**Accessories:** AED not confirmed for strands, charms, or necklaces — **do not create Stripe prices yet**. Placeholder AED in the shop is for layout only.',
)
lines.push('')

lines.push('## Ready-to-wear (shop) — enter in Stripe')
lines.push('')
lines.push('| Name | Slug | ' + currencies.join(' | ') + ' |')
lines.push('| --- | --- | ' + currencies.map(() => '---:').join(' | ') + ' |')

for (const p of products) {
  const prices = currencies.map((c) => getListedPrice(p.price, c, undefined, p.id))
  lines.push(`| ${p.name} | \`${p.slug}\` | ${prices.join(' | ')} |`)
}

lines.push('')
lines.push('## Stripe minor units — ready-to-wear')
lines.push('')
lines.push('| Name | Slug | ' + currencies.map((c) => `${c} unit_amount`).join(' | ') + ' |')
lines.push('| --- | --- | ' + currencies.map(() => '---:').join(' | ') + ' |')

for (const p of products) {
  const units = currencies.map((c) => toStripeMinorUnits(getListedPrice(p.price, c, undefined, p.id), c))
  lines.push(`| ${p.name} | \`${p.slug}\` | ${units.join(' | ')} |`)
}

lines.push('')
lines.push('## Accessories — AED pending (not for Stripe yet)')
lines.push('')
lines.push('| Name | ID | Category | Placeholder AED | Status |')
lines.push('| --- | --- | --- | ---: | --- |')

for (const a of accessories) {
  if (a.id === 'all' || !isAccessoryCategoryPendingAed(a.category)) continue
  lines.push(`| ${a.name} | \`${a.id}\` | ${a.category} | ${a.price} | pending AED confirmation |`)
}

lines.push('')
lines.push('## Checkout add-ons')
lines.push('')
lines.push('| Item | ' + currencies.join(' | ') + ' |')
lines.push('| --- | ' + currencies.map(() => '---:').join(' | ') + ' |')
lines.push(
  `| Signature packaging | ${currencies.map((c) => SIGNATURE_PACKAGING_PRICES[c]).join(' | ')} |`,
)
lines.push(`| Express shipping | ${currencies.map((c) => EXPRESS_SHIPPING_PRICES[c]).join(' | ')} |`)

lines.push('')
lines.push('## Catalogue source (AED / GBP / EUR anchors — AED unchanged)')
lines.push('')
lines.push('| Slug | AED | GBP | EUR |')
lines.push('| --- | ---: | ---: | ---: |')
for (const [slug, row] of Object.entries(PRODUCT_CATALOG_TRIPLES)) {
  lines.push(`| \`${slug}\` | ${row.AED} | ${row.GBP} | ${row.EUR} |`)
}

lines.push('')
lines.push('## Full currency map (all ready-to-wear slugs)')
lines.push('')
lines.push('| Slug | ' + currencies.join(' | ') + ' |')
lines.push('| --- | ' + currencies.map(() => '---:').join(' | ') + ' |')
for (const [slug, triple] of Object.entries(PRODUCT_CATALOG_TRIPLES)) {
  const map = PRODUCT_CATALOG_PRICES[slug] ?? buildLuxuryCatalogPriceMap(triple)
  lines.push(`| \`${slug}\` | ${currencies.map((c) => map[c]).join(' | ')} |`)
}

const out = lines.join('\n') + '\n'
writeFileSync(new URL('../docs/stripe-price-list.md', import.meta.url), out)
console.log('Wrote docs/stripe-price-list.md')
