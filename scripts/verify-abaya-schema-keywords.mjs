import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)

// Compiled via tsx at runtime
const { buildProductSchemaKeywords } = require('../lib/products/productSchemaMeta.ts')
const { products } = require('../data/products.ts')
const { getLocalizedAbayaSchemaKeywordTerms } = require('../lib/products/abayaSchemaKeywordsI18n.ts')

const ABAYA_SLUGS = [
  'belgravia-abaya',
  'knightsbridge-abaya-jacket',
  'covent-garden-abaya',
  'kensington-abaya',
  'marylebone-abaya',
  'park-lane-abaya',
]

function countKeywords(product, colorName, locale) {
  const raw = buildProductSchemaKeywords(product, colorName, locale)
  return raw.split(', ').filter(Boolean)
}

const belgravia = products.find((p) => p.slug === 'belgravia-abaya')
const knightsbridge = products.find((p) => p.slug === 'knightsbridge-abaya-jacket')

const belgraviaEn = countKeywords(belgravia, 'Deep Black', 'en')
const belgraviaAr = countKeywords(belgravia, 'Deep Black', 'ar')
const knightsbridgeEn = countKeywords(knightsbridge, undefined, 'en')

console.log('=== Verification ===')
console.log('belgravia-abaya Deep Black en:', belgraviaEn.length)
console.log('belgravia-abaya Deep Black ar:', belgraviaAr.length)
console.log('knightsbridge-abaya-jacket en:', knightsbridgeEn.length)
console.log('\nFirst 25 belgravia en:')
belgraviaEn.slice(0, 25).forEach((k, i) => console.log(`  ${i + 1}. ${k}`))
console.log('\nLast 15 belgravia en:')
belgraviaEn.slice(-15).forEach((k, i) => console.log(`  ${belgraviaEn.length - 14 + i}. ${k}`))

const poolSize = getLocalizedAbayaSchemaKeywordTerms('en').length
console.log('\nAbaya pool size (en):', poolSize)
console.log('\nAll 6 abaya slugs receive abaya keyword pool:')
for (const slug of ABAYA_SLUGS) {
  const product = products.find((p) => p.slug === slug)
  const terms = countKeywords(product, undefined, 'en')
  const hasPool = getLocalizedAbayaSchemaKeywordTerms('en').every((t) => terms.includes(t))
  console.log(`  ${slug}: ${hasPool ? 'YES' : 'NO'} (${terms.length} total keywords)`)
}
