import { NextRequest, NextResponse } from 'next/server'
import { rateLimitResponse } from '@/lib/security/rateLimit'
import { getClientIp } from '@/lib/security/clientIp'
import {
  isSnapCapiConfigured,
  sendSnapCapiEvents,
  type SnapCapiEventName,
} from '@/lib/analytics/snapCapi'

export const runtime = 'nodejs'

const ALLOWED: Set<string> = new Set([
  'PAGE_VIEW',
  'VIEW_CONTENT',
  'ADD_CART',
  'START_CHECKOUT',
  'PURCHASE',
  'SIGN_UP',
  'SUBSCRIBE',
])

type Body = {
  eventName?: unknown
  eventId?: unknown
  eventSourceUrl?: unknown
  value?: unknown
  currency?: unknown
  contentIds?: unknown
  contentCategory?: unknown
  contentName?: unknown
  orderId?: unknown
  numItems?: unknown
  email?: unknown
  phone?: unknown
  scClickId?: unknown
  scCookie1?: unknown
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

/**
 * Browser → server bridge for Snap Conversions API (deduped with Pixel via event_id /
 * client_dedup_id). Requires marketingConsent=true from the client (cookie banner).
 */
export async function POST(request: NextRequest) {
  if (!isSnapCapiConfigured()) {
    return NextResponse.json({ ok: false, skipped: true, reason: 'not_configured' }, { status: 200 })
  }

  const tooMany = await rateLimitResponse(request, 'snap-capi', 120, 60)
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
  const eventSourceUrl =
    asString(body.eventSourceUrl, 2000) || request.headers.get('referer') || undefined
  if (!eventName || !ALLOWED.has(eventName) || !eventId || !eventSourceUrl) {
    return NextResponse.json({ error: 'Invalid event' }, { status: 400 })
  }

  const contentIds = Array.isArray(body.contentIds)
    ? body.contentIds
        .filter((id): id is string => typeof id === 'string' && id.trim().length > 0)
        .slice(0, 20)
    : undefined

  const result = await sendSnapCapiEvents([
    {
      eventName: eventName as SnapCapiEventName,
      eventId,
      eventSourceUrl,
      userData: {
        email: asString(body.email, 320),
        phone: asString(body.phone, 40),
        clientIpAddress: getClientIp(request) || undefined,
        clientUserAgent: request.headers.get('user-agent') || undefined,
        scClickId: asString(body.scClickId, 200),
        scCookie1: asString(body.scCookie1, 200),
      },
      customData: {
        value: asNumber(body.value),
        currency: asString(body.currency, 8)?.toUpperCase(),
        content_ids: contentIds,
        content_category: asString(body.contentCategory, 200),
        content_name: asString(body.contentName, 200),
        content_type: 'product',
        order_id: asString(body.orderId, 128),
        num_items: asNumber(body.numItems),
      },
    },
  ])

  return NextResponse.json({ ok: result.ok, error: result.error })
}
