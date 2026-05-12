import { NextRequest, NextResponse } from 'next/server'
import { timingSafeEqual } from 'crypto'
import {
  submitSitemapToSearchEngines,
  submitToMultipleSearchEngines,
  validateIndexNowKey,
} from '@/lib/indexnow'

export const runtime = 'nodejs'

function verifyWebhookSecret(provided: string | null, expected: string): boolean {
  if (!provided || !expected) return false
  const a = Buffer.from(provided, 'utf8')
  const b = Buffer.from(expected, 'utf8')
  if (a.length !== b.length) return false
  return timingSafeEqual(a, b)
}

function getBearerToken(request: NextRequest): string | null {
  const auth = request.headers.get('authorization')
  if (!auth?.startsWith('Bearer ')) return null
  return auth.slice(7).trim() || null
}

/**
 * POST /api/indexnow/publish
 * Secured by INDEXNOW_WEBHOOK_SECRET (Bearer token).
 * Body (optional JSON): `{ "urls": string[] }` — if omitted, submits every URL from the current sitemap.
 */
export async function POST(request: NextRequest): Promise<NextResponse> {
  const secret = process.env.INDEXNOW_WEBHOOK_SECRET ?? ''
  if (!secret) {
    return NextResponse.json(
      { ok: false, error: 'INDEXNOW_WEBHOOK_SECRET is not set on the server' },
      { status: 503 },
    )
  }

  const token = getBearerToken(request)
  if (!verifyWebhookSecret(token, secret)) {
    return NextResponse.json({ ok: false, error: 'Unauthorized' }, { status: 401 })
  }

  const key = process.env.INDEXNOW_KEY ?? ''
  if (!validateIndexNowKey(key)) {
    return NextResponse.json(
      {
        ok: false,
        error:
          'INDEXNOW_KEY is missing or invalid. Use 8–128 chars [a-zA-Z0-9-] and expose https://your-site/{KEY}.txt',
      },
      { status: 400 },
    )
  }

  try {
    let body: { urls?: unknown } = {}
    const ct = request.headers.get('content-type') ?? ''
    if (ct.includes('application/json')) {
      body = (await request.json()) as { urls?: unknown }
    }

    const urls =
      Array.isArray(body.urls) && body.urls.every((u) => typeof u === 'string')
        ? (body.urls as string[])
        : null

    const batch = urls?.length
      ? await submitToMultipleSearchEngines(urls)
      : await submitSitemapToSearchEngines()

    return NextResponse.json({
      ok: batch.failed === 0,
      totalSubmitted: batch.totalSubmitted,
      successful: batch.successful,
      failed: batch.failed,
      results: batch.results,
    })
  } catch (e) {
    const message = e instanceof Error ? e.message : 'Unknown error'
    return NextResponse.json({ ok: false, error: message }, { status: 500 })
  }
}
