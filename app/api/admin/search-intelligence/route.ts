import { NextRequest, NextResponse } from 'next/server'
import { requireAdmin } from '@/lib/admin/apiAuth'
import { checkRateLimit } from '@/lib/search-intelligence/rateLimit'
import { runSearchIntelligence } from '@/lib/search-intelligence/runSearch'
import { listOpportunities, updateOpportunityStatus } from '@/lib/search-intelligence/store'
import { getAllProviderStatuses } from '@/lib/search-intelligence/providers/registry'
import type { SearchIntelligenceRequest, SiCountry, SiLanguage, SiSourceId, SiStatus } from '@/lib/search-intelligence/types'
import { SI_COUNTRIES, SI_LANGUAGES, SI_SOURCE_IDS } from '@/lib/search-intelligence/types'

export const dynamic = 'force-dynamic'

function clientKey(request: NextRequest): string {
  return request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'local'
}

export async function GET(request: NextRequest) {
  if (!(await requireAdmin(request))) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const [opportunities, providers] = await Promise.all([listOpportunities(300), Promise.resolve(getAllProviderStatuses())])

  return NextResponse.json({ providers, opportunities })
}

export async function POST(request: NextRequest) {
  if (!(await requireAdmin(request))) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const rl = checkRateLimit(`si-search:${clientKey(request)}`)
  if (!rl.ok) {
    return NextResponse.json(
      { error: 'Rate limit exceeded', retryAfterSec: rl.retryAfterSec },
      { status: 429 },
    )
  }

  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const b = body as Partial<SearchIntelligenceRequest> & { sessionId?: string; refreshLiveData?: boolean }
  const seedTopic = String(b.seedTopic ?? '').trim()
  if (!seedTopic) {
    return NextResponse.json({ error: 'seedTopic is required' }, { status: 400 })
  }

  const country = SI_COUNTRIES.includes(b.country as SiCountry) ? (b.country as SiCountry) : 'Global'
  const language = SI_LANGUAGES.includes(b.language as SiLanguage) ? (b.language as SiLanguage) : 'en'
  const sources: SiSourceId[] = Array.isArray(b.sources)
    ? b.sources.filter((s): s is SiSourceId => SI_SOURCE_IDS.includes(s as SiSourceId))
    : ['google_search_console', 'generated']
  if (!sources.includes('generated')) sources.push('generated')

  try {
    const result = await runSearchIntelligence({
      seedTopic,
      country,
      language,
      sources,
      discoveryDepth: b.discoveryDepth,
      refreshLiveData: b.refreshLiveData,
      sessionId: b.sessionId,
    })
    return NextResponse.json(result)
  } catch (e) {
    console.error('[search-intelligence]', e)
    return NextResponse.json({ error: 'Search intelligence run failed' }, { status: 500 })
  }
}

export async function PATCH(request: NextRequest) {
  if (!(await requireAdmin(request))) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  let body: { id?: string; status?: SiStatus }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  if (!body.id || !body.status) {
    return NextResponse.json({ error: 'id and status required' }, { status: 400 })
  }

  const updated = await updateOpportunityStatus(body.id, body.status)
  if (!updated) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  return NextResponse.json({ opportunity: updated })
}
