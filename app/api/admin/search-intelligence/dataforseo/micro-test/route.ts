import { NextRequest, NextResponse } from 'next/server'
import { requireAdmin } from '@/lib/admin/apiAuth'
import { runDataForSeoMicroTest } from '@/lib/search-intelligence/dataforseo/microTest'
import { buildMicroTestPatterns, MICRO_TEST_MAX_LIVE_CALLS } from '@/lib/search-intelligence/discovery/microTestPatterns'
import { checkRateLimit } from '@/lib/search-intelligence/rateLimit'
import type { SiCountry, SiLanguage } from '@/lib/search-intelligence/types'
import { SI_COUNTRIES, SI_LANGUAGES } from '@/lib/search-intelligence/types'

export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  if (!(await requireAdmin(request))) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const seed = request.nextUrl.searchParams.get('seed')?.trim() || 'Al Talli'
  const country = SI_COUNTRIES.includes(request.nextUrl.searchParams.get('country') as SiCountry)
    ? (request.nextUrl.searchParams.get('country') as SiCountry)
    : 'UAE'

  return NextResponse.json({
    depth: 'micro_test',
    maxLiveCalls: MICRO_TEST_MAX_LIVE_CALLS,
    patterns: buildMicroTestPatterns(seed, country),
    message: `Micro Test uses at most ${MICRO_TEST_MAX_LIVE_CALLS} live autocomplete requests for integration validation.`,
  })
}

export async function POST(request: NextRequest) {
  if (!(await requireAdmin(request))) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const rl = checkRateLimit('si-micro-test')
  if (!rl.ok) {
    return NextResponse.json({ error: 'Rate limit exceeded', retryAfterSec: rl.retryAfterSec }, { status: 429 })
  }

  let body: {
    seed?: string
    country?: SiCountry
    language?: SiLanguage
    refreshLive?: boolean
    sessionId?: string
    cityId?: string | null
  } = {}

  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const seed = String(body.seed ?? 'Al Talli').trim()
  if (!seed) {
    return NextResponse.json({ error: 'seed is required' }, { status: 400 })
  }

  const country = SI_COUNTRIES.includes(body.country as SiCountry) ? (body.country as SiCountry) : 'UAE'
  const language = SI_LANGUAGES.includes(body.language as SiLanguage) ? (body.language as SiLanguage) : 'en'
  const sessionId = body.sessionId?.trim() || request.headers.get('x-si-session') || 'si-micro-default'

  try {
    const result = await runDataForSeoMicroTest({
      seed,
      country,
      language,
      sessionId,
      refreshLive: body.refreshLive,
      cityId: body.cityId,
    })
    return NextResponse.json(result)
  } catch (e) {
    console.error('[search-intelligence/micro-test]', e instanceof Error ? e.message : e)
    return NextResponse.json({ error: 'Micro test failed' }, { status: 500 })
  }
}
