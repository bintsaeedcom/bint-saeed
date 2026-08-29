import type { SiClusterGroup } from '@/lib/search-intelligence/types'

export const QUESTION_PREFIXES = ['how', 'what', 'why', 'where', 'when', 'which', 'can', 'is'] as const

export const COMMERCIAL_MODIFIERS = [
  'best',
  'buy',
  'luxury',
  'price',
  'shop',
  'online',
  'made to order',
  'bespoke',
  'personalised',
  'personalized',
  'near me',
] as const

export const COMPARISON_PATTERNS = ['vs', 'or', 'difference between', 'alternatives'] as const

export const PREPOSITION_MODIFIERS = ['for', 'with', 'without', 'near', 'in', 'from'] as const

export const GEO_MODIFIERS = [
  'UAE',
  'Abu Dhabi',
  'Dubai',
  'Al Ain',
  'Saudi Arabia',
  'Riyadh',
  'Jeddah',
  'GCC',
] as const

export const SEASONAL_MODIFIERS = [
  'Eid',
  'Ramadan',
  'National Day',
  'weddings',
  'gifting',
  'winter',
  'summer',
] as const

export const HERITAGE_MODIFIERS = [
  'Emirati heritage',
  'Al Talli',
  'Khous',
  'UAE crafts',
  'traditional Emirati clothing',
  'contemporary Emirati fashion',
] as const

export const JEWELLERY_MODIFIERS = [
  'natural stone jewellery',
  'natural stone jewelry',
  'modular jewellery',
  'interchangeable jewellery',
  'gemstone necklaces',
  'carnelian',
  'lapis lazuli',
  'malachite',
  'sunstone',
] as const

export const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'.split('')

export const BINT_SAEED_STRATEGIC_TERMS = [
  'luxury abaya',
  'luxury abayas',
  'premium modest fashion',
  'Abu Dhabi fashion',
  'UAE fashion',
  'Emirati heritage',
  'Al Talli',
  'Khous',
  'personalisation',
  'personalization',
  'made to order',
  'gifting',
  'natural stone jewellery',
  'modular jewellery',
  'heritage craftsmanship',
  'Gulf dressing',
  'modest fashion',
  'abaya',
] as const

export function clusterGroupForKeyword(keyword: string): SiClusterGroup {
  const k = keyword.toLowerCase()
  if (QUESTION_PREFIXES.some((q) => k.startsWith(`${q} `) || k.includes(` ${q} `))) return 'questions'
  if (COMPARISON_PATTERNS.some((c) => k.includes(c))) return 'comparisons'
  if (COMMERCIAL_MODIFIERS.some((c) => k.includes(c))) return 'commercial'
  if (PREPOSITION_MODIFIERS.some((p) => k.includes(` ${p} `) || k.endsWith(` ${p}`))) return 'prepositions'
  if (GEO_MODIFIERS.some((g) => k.includes(g.toLowerCase()))) return 'geographic'
  if (SEASONAL_MODIFIERS.some((s) => k.includes(s.toLowerCase()))) return 'seasonal'
  if (HERITAGE_MODIFIERS.some((h) => k.includes(h.toLowerCase()))) return 'heritage'
  if (JEWELLERY_MODIFIERS.some((j) => k.includes(j.toLowerCase()))) return 'jewellery'
  if (/^[a-z]\s/.test(k) || k.includes(' starting with ')) return 'alphabetical'
  return 'other'
}

export function expandSeedTopic(seed: string): { keyword: string; clusterGroup: SiClusterGroup }[] {
  const base = seed.trim()
  if (!base) return []
  const out: { keyword: string; clusterGroup: SiClusterGroup }[] = []
  const add = (keyword: string) => {
    const trimmed = keyword.replace(/\s+/g, ' ').trim()
    if (!trimmed) return
    out.push({ keyword: trimmed, clusterGroup: clusterGroupForKeyword(trimmed) })
  }

  add(base)

  for (const q of QUESTION_PREFIXES) add(`${q} ${base}`)
  for (const c of COMMERCIAL_MODIFIERS) add(`${c} ${base}`)
  for (const c of COMPARISON_PATTERNS) {
    if (c === 'vs' || c === 'or') add(`${base} ${c}`)
    else add(`${c} ${base}`)
  }
  for (const p of PREPOSITION_MODIFIERS) add(`${base} ${p}`)
  for (const g of GEO_MODIFIERS) add(`${base} ${g}`)
  for (const s of SEASONAL_MODIFIERS) add(`${base} ${s}`)
  for (const h of HERITAGE_MODIFIERS) add(`${h} ${base}`)
  for (const j of JEWELLERY_MODIFIERS) add(`${j} ${base}`)

  for (const letter of ALPHABET) {
    add(`${base} ${letter}`)
  }

  for (const term of BINT_SAEED_STRATEGIC_TERMS) {
    if (term.toLowerCase() !== base.toLowerCase()) {
      add(`${term} ${base}`)
      add(`${base} ${term}`)
    }
  }

  const seen = new Set<string>()
  return out.filter(({ keyword }) => {
    const key = keyword.toLowerCase()
    if (seen.has(key)) return false
    seen.add(key)
    return true
  })
}
