import type { DiscoveryDepth } from '@/lib/search-intelligence/discovery/types'
import type { SiCountry } from '@/lib/search-intelligence/types'
import { ALPHABET } from '@/lib/search-intelligence/expansion'
import { buildMicroTestPatterns } from '@/lib/search-intelligence/discovery/microTestPatterns'

export const QUESTION_PREFIXES_FULL = [
  'how',
  'what',
  'why',
  'where',
  'when',
  'which',
  'can',
  'is',
] as const

export const COMMERCIAL_MODIFIERS_FULL = [
  'buy',
  'best',
  'luxury',
  'price',
  'shop',
  'online',
  'bespoke',
  'personalised',
  'personalized',
  'made to order',
] as const

export const PREPOSITION_MODIFIERS_FULL = [
  'for',
  'with',
  'without',
  'near',
  'in',
  'from',
  'vs',
  'or',
] as const

const QUICK_COMMERCIAL = ['buy', 'best', 'luxury', 'shop', 'online', 'bespoke', 'personalised'] as const
const QUICK_PREPOSITIONS = ['for', 'in'] as const
const STANDARD_AZ = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm'] as const

const COUNTRY_GEO: Partial<Record<SiCountry, string[]>> = {
  UAE: ['UAE', 'Abu Dhabi', 'Dubai', 'Al Ain'],
  'Saudi Arabia': ['Saudi Arabia', 'Riyadh', 'Jeddah'],
  Qatar: ['Qatar', 'Doha'],
  Kuwait: ['Kuwait'],
  Bahrain: ['Bahrain'],
  Oman: ['Oman', 'Muscat'],
  UK: ['UK', 'London'],
  US: ['US', 'United States'],
  France: ['France', 'Paris'],
  Italy: ['Italy', 'Milan'],
  Netherlands: ['Netherlands', 'Amsterdam'],
  Global: ['UAE', 'Abu Dhabi', 'Dubai'],
}

function addPattern(out: Set<string>, s: string) {
  const t = s.replace(/\s+/g, ' ').trim()
  if (t) out.add(t)
}

export function buildDiscoveryPatternsByDepth(
  seed: string,
  country: SiCountry,
  depth: DiscoveryDepth,
): string[] {
  const base = seed.trim()
  if (!base) return []
  const out = new Set<string>()
  const geo = COUNTRY_GEO[country] ?? COUNTRY_GEO.Global ?? []

  addPattern(out, base)

  if (depth === 'micro_test') {
    return buildMicroTestPatterns(base, country)
  }

  if (depth === 'quick') {
    for (const c of QUICK_COMMERCIAL) addPattern(out, `${c} ${base}`)
    for (const p of QUICK_PREPOSITIONS) addPattern(out, `${base} ${p}`)
    for (const g of geo.slice(0, 2)) addPattern(out, `${base} ${g}`)
    return [...out]
  }

  if (depth === 'standard') {
    for (const c of QUICK_COMMERCIAL) addPattern(out, `${c} ${base}`)
    for (const p of QUICK_PREPOSITIONS) addPattern(out, `${base} ${p}`)
    for (const q of QUESTION_PREFIXES_FULL) addPattern(out, `${q} ${base}`)
    for (const c of COMMERCIAL_MODIFIERS_FULL) addPattern(out, `${c} ${base}`)
    for (const p of PREPOSITION_MODIFIERS_FULL) {
      if (p === 'vs' || p === 'or') addPattern(out, `${base} ${p}`)
      else addPattern(out, `${base} ${p}`)
    }
    for (const g of geo) addPattern(out, `${base} ${g}`)
    for (const letter of STANDARD_AZ) addPattern(out, `${base} ${letter}`)
    return [...out]
  }

  // deep — full expansion set
  for (const q of QUESTION_PREFIXES_FULL) addPattern(out, `${q} ${base}`)
  for (const c of COMMERCIAL_MODIFIERS_FULL) addPattern(out, `${c} ${base}`)
  for (const p of PREPOSITION_MODIFIERS_FULL) {
    if (p === 'vs' || p === 'or') addPattern(out, `${base} ${p}`)
    else addPattern(out, `${base} ${p}`)
  }
  for (const letter of ALPHABET) addPattern(out, `${base} ${letter}`)
  for (const g of geo) addPattern(out, `${base} ${g}`)

  return [...out]
}

/** @deprecated Use buildDiscoveryPatternsByDepth */
export function buildDiscoveryPatterns(seed: string, country: SiCountry): string[] {
  return buildDiscoveryPatternsByDepth(seed, country, 'deep')
}

export function countPatternsForDepth(depth: DiscoveryDepth): number {
  return buildDiscoveryPatternsByDepth('seed', 'UAE', depth).length
}

export function estimateRequestCount(seeds: string[], country: SiCountry, depth: DiscoveryDepth): number {
  let total = 0
  for (const seed of seeds) {
    total += buildDiscoveryPatternsByDepth(seed.trim(), country, depth).length
  }
  return total
}
