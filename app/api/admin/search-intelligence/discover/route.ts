import { NextRequest, NextResponse } from 'next/server'
import { requireAdmin } from '@/lib/admin/apiAuth'
import { discoverOpportunities } from '@/lib/search-intelligence/discover'
import { checkRateLimit } from '@/lib/search-intelligence/rateLimit'
import type { DiscoveryDepth } from '@/lib/search-intelligence/discovery/types'
import type { SiCountry, SiLanguage } from '@/lib/search-intelligence/types'
import { SI_COUNTRIES, SI_LANGUAGES } from '@/lib/search-intelligence/types'

export const dynamic = 'force-dynamic'

const DEPTHS: Array<Exclude<DiscoveryDepth, 'micro_test'>> = ['quick', 'standard', 'deep']

export async function POST(request: NextRequest) {
  if (!(await requireAdmin(request))) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const rl = checkRateLimit('si-discover')
  if (!rl.ok) {
    return NextResponse.json({ error: 'Rate limit exceeded', retryAfterSec: rl.retryAfterSec }, { status: 429 })
  }

  let body: {
    country?: SiCountry
    language?: SiLanguage
    depth?: DiscoveryDepth
    refreshLive?: boolean
    confirmed?: boolean
    sessionId?: string
    collectionIds?: string[]
    seeds?: string[]
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
  const sessionId = body.sessionId?.trim() || request.headers.get('x-si-session') || 'si-discover-default'

  try {
    const result = await discoverOpportunities({
      country,
      language,
      depth,
      refreshLive: body.refreshLive,
      confirmed: body.confirmed,
      sessionId,
      collectionIds: body.collectionIds,
      seeds: body.seeds,
      cityId: body.cityId,
    })

    if (result.estimate?.requiresConfirmation && !body.confirmed && !result.discovered.length) {
      return NextResponse.json({
        needsConfirmation: true,
        estimate: result.estimate,
        message: 'Standard/Deep discovery requires confirmation due to estimated API request count.',
      })
    }

    return NextResponse.json(result)
  } catch (e) {
    console.error('[search-intelligence/discover]', e)
    return NextResponse.json({ error: 'Discovery run failed' }, { status: 500 })
  }
}
