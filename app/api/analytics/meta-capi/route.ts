import { NextRequest, NextResponse } from 'next/server'
import { rateLimitResponse } from '@/lib/security/rateLimit'
import { getClientIp } from '@/lib/security/clientIp'
import {
  isMetaCapiConfigured,
  sendMetaCapiEvents,
  type MetaCapiContent,
  type MetaCapiEventName,
} from '@/lib/analytics/metaCapi'

export const runtime = 'nodejs'

const ALLOWED: Set<string> = new Set([
  'PageView',
  'ViewContent',
  'AddToCart',
  'InitiateCheckout',
  'Purchase',
])

type Body = {
  eventName?: unknown
  eventId?: unknown
  eventSourceUrl?: unknown
  value?: unknown
  currency?: unknown
  contentIds?: unknown
  contents?: unknown
  contentName?: unknown
  orderId?: unknown
  numItems?: unknown
  email?: unknown
  phone?: unknown
  fbp?: unknown
  fbc?: unknown
  marketingConsent?: unknown
}

function asString(value: unknown, max = 500): string | undefined {
  if (typeof value !== 'string') return undefined
  const trimmed = value.trim()
  return trimmed ? trimmed.slice(0, max) : undefined
}

function asNumber(value: unknown): number | undefined {
  if (typeof value === 'number' && Number.isFinite(value)) return value
  if (typeof value === 'string' && value.trim()) {
    const n = Number(value)
    return Number.isFinite(n) ? n : undefined
  }
  return undefined
}

function parseContents(value: unknown): MetaCapiContent[] | undefined {
  if (!Array.isArray(value)) return undefined
  const rows: MetaCapiContent[] = []
  for (const row of value.slice(0, 20)) {
    if (!row || typeof row !== 'object') continue
    const record = row as Record<string, unknown>
    const id = asString(record.id, 50)
    if (!id) continue
    const quantity = Math.max(1, Math.floor(asNumber(record.quantity) ?? 1))
    const itemPrice = asNumber(record.item_price)
    rows.push(
      itemPrice != null ? { id, quantity, item_price: itemPrice } : { id, quantity },
    )
  }
  return rows.length ? rows : undefined
}

/**
 * Browser → server bridge for Meta Conversions API (deduped with Pixel via event_id).
 * Requires marketingConsent=true from the client (cookie banner).
 */
export async function POST(request: NextRequest) {
  if (!isMetaCapiConfigured()) {
    return NextResponse.json({ ok: false, skipped: true, reason: 'not_configured' }, { status: 200 })
  }

  const tooMany = await rateLimitResponse(request, 'meta-capi', 120, 60)
  if (tooMany) return tooMany

  let body: Body
  try {
    body = (await request.json()) as Body
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  if (body.marketingConsent !== true) {
    return NextResponse.json({ ok: false, skipped: true, reason: 'no_consent' }, { status: 200 })
  }

  const eventName = asString(body.eventName, 40)
  const eventId = asString(body.eventId, 128)
  if (!eventName || !ALLOWED.has(eventName) || !eventId) {
    return NextResponse.json({ error: 'Invalid event' }, { status: 400 })
  }

  const contentIds = Array.isArray(body.contentIds)
    ? body.contentIds.filter((id): id is string => typeof id === 'string' && id.trim().length > 0).slice(0, 20)
    : undefined
  const contents = parseContents(body.contents)

  const result = await sendMetaCapiEvents([
    {
      eventName: eventName as MetaCapiEventName,
      eventId,
      eventSourceUrl: asString(body.eventSourceUrl, 2000) || request.headers.get('referer') || undefined,
      userData: {
        email: asString(body.email, 320),
        phone: asString(body.phone, 40),
        clientIpAddress: getClientIp(request) || undefined,
        clientUserAgent: request.headers.get('user-agent') || undefined,
        fbp: asString(body.fbp, 200),
        fbc: asString(body.fbc, 500),
      },
      customData: {
        value: asNumber(body.value),
        currency: asString(body.currency, 8)?.toUpperCase(),
        content_ids: contentIds?.length ? contentIds : contents?.map((row) => row.id),
        contents,
        content_name: asString(body.contentName, 200),
        content_type: 'product',
        order_id: asString(body.orderId, 128),
        num_items: asNumber(body.numItems),
      },
    },
  ])

  return NextResponse.json({ ok: result.ok, error: result.error })
}
