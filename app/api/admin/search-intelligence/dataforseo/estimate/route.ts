import { NextRequest, NextResponse } from 'next/server'
import { requireAdmin } from '@/lib/admin/apiAuth'
import { estimateDiscoveryWithCache } from '@/lib/search-intelligence/dataforseo/provider'
import { buildDiscoveryPatternsByDepth } from '@/lib/search-intelligence/discovery/expansionPatterns'
import type { DiscoveryDepth } from '@/lib/search-intelligence/discovery/types'
import { ensureDefaultSeedCollections } from '@/lib/search-intelligence/seeds/collections'
import type { SiCountry, SiLanguage } from '@/lib/search-intelligence/types'
import { SI_COUNTRIES, SI_LANGUAGES } from '@/lib/search-intelligence/types'

export const dynamic = 'force-dynamic'

const DEPTHS: Array<Exclude<DiscoveryDepth, 'micro_test'>> = ['quick', 'standard', 'deep']

export async function POST(request: NextRequest) {
  if (!(await requireAdmin(request))) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  let body: {
    country?: SiCountry
    language?: SiLanguage
    depth?: DiscoveryDepth
    refreshLive?: boolean
    seeds?: string[]
    collectionIds?: string[]
    cityId?: string | null
  } = {}

  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const country = SI_COUNTRIES.includes(body.country as SiCountry) ? (body.country as SiCountry) : 'UAE'
  const language = SI_LANGUAGES.includes(body.language as SiLanguage) ? (body.language as SiLanguage) : 'en'
  const depthInput = body.depth as DiscoveryDepth | undefined
  const depth: Exclude<DiscoveryDepth, 'micro_test'> =
    depthInput && DEPTHS.includes(depthInput as Exclude<DiscoveryDepth, 'micro_test'>)
      ? (depthInput as Exclude<DiscoveryDepth, 'micro_test'>)
      : 'quick'

  const collections = await ensureDefaultSeedCollections()
  const seedSet = new Set<string>()
  if (body.seeds?.length) {
    for (const s of body.seeds) seedSet.add(s.trim())
  } else {
    for (const c of collections.filter((x) => x.active)) {
      if (body.collectionIds?.length && !body.collectionIds.includes(c.id)) continue
      for (const s of c.seeds) seedSet.add(s.trim())
    }
  }

  const seeds = [...seedSet].filter(Boolean)
  const estimate = await estimateDiscoveryWithCache({
    seeds,
    country,
    language,
    depth,
    refreshLive: body.refreshLive,
    cityId: body.cityId,
  })

  const perSeed = seeds.map((seed) => ({
    seed,
    patterns: buildDiscoveryPatternsByDepth(seed, country, depth).length,
  }))

  return NextResponse.json({
    ...estimate,
    activeSeedCount: seeds.length,
    perSeed,
  })
}
