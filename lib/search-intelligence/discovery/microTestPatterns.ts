import type { SiCountry } from '@/lib/search-intelligence/types'

export const MICRO_TEST_MAX_LIVE_CALLS = 5

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
  Global: ['UAE', 'Abu Dhabi'],
}

const FASHION_RE =
  /\b(abaya|abayas|modest fashion|kaftan|eveningwear|evening wear|dress|fashion|modest wear)\b/i
const HERITAGE_RE =
  /\b(al talli|talli|khous|khous weaving|sadu|heritage|emirati|battoulah|craft|unesco|weaving|embroidery)\b/i
const JEWELLERY_RE =
  /\b(jewellery|jewelry|gemstone|necklace|earring|strand|bracelet|stone|lapis|carnelian|malachite)\b/i
const SEASONAL_RE = /\b(ramadan|eid|national day|wedding|gifting|gift)\b/i
const PERSONALISATION_RE = /\b(personalised|personalized|personalisation|personalization|bespoke|made to order)\b/i

function primaryGeo(country: SiCountry): string {
  return COUNTRY_GEO[country]?.[0] ?? 'UAE'
}

function contextualContextPattern(seed: string, country: SiCountry): string {
  const lower = seed.toLowerCase()
  if (FASHION_RE.test(lower)) return `${seed} fashion`
  if (HERITAGE_RE.test(lower)) return `${seed} heritage`
  if (JEWELLERY_RE.test(lower)) return `${seed} jewellery`
  if (SEASONAL_RE.test(lower)) return `${seed} gifting`
  if (PERSONALISATION_RE.test(lower)) return `${seed} bespoke`
  return `${seed} ${primaryGeo(country)}`
}

function contextualCommercialPattern(seed: string): string {
  const lower = seed.toLowerCase()
  if (JEWELLERY_RE.test(lower)) return `luxury ${seed}`
  if (HERITAGE_RE.test(lower)) return `traditional ${seed}`
  if (FASHION_RE.test(lower)) return `luxury ${seed}`
  if (SEASONAL_RE.test(lower)) return `buy ${seed}`
  if (PERSONALISATION_RE.test(lower)) return `bespoke ${seed}`
  return `best ${seed}`
}

/**
 * Exactly five integration-validation patterns for one seed.
 * Quick / Standard / Deep are unchanged — micro test only.
 */
export function buildMicroTestPatterns(seed: string, country: SiCountry): string[] {
  const base = seed.trim()
  if (!base) return []

  const geo = primaryGeo(country)
  const candidates = [
    base,
    `what ${base}`,
    `${base} ${geo}`,
    contextualContextPattern(base, country),
    contextualCommercialPattern(base),
  ]

  const out: string[] = []
  const seen = new Set<string>()
  for (const c of candidates) {
    const normalized = c.replace(/\s+/g, ' ').trim()
    const key = normalized.toLowerCase()
    if (!normalized || seen.has(key)) continue
    seen.add(key)
    out.push(normalized)
  }

  const alternates = [
    `how ${base}`,
    `${base} online`,
    `buy ${base}`,
    `${base} price`,
    `${base} ${geo}`,
  ]
  for (const alt of alternates) {
    if (out.length >= MICRO_TEST_MAX_LIVE_CALLS) break
    const key = alt.toLowerCase()
    if (!seen.has(key)) {
      seen.add(key)
      out.push(alt)
    }
  }

  return out.slice(0, MICRO_TEST_MAX_LIVE_CALLS)
}

export function describeMicroTestPatterns(seed: string, country: SiCountry): string[] {
  return buildMicroTestPatterns(seed, country)
}
