import { NextRequest, NextResponse } from 'next/server'
import { rateLimitResponse } from '@/lib/security/rateLimit'
import { getClientIp } from '@/lib/security/clientIp'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const SESSION_SEEN = new Map<string, number>()
const SESSION_TTL_MS = 6 * 60 * 60 * 1000

function pruneSessions() {
  const now = Date.now()
  for (const [id, at] of SESSION_SEEN) {
    if (now - at > SESSION_TTL_MS) SESSION_SEEN.delete(id)
  }
}

function isHooksUrl(url: string): boolean {
  try {
    const u = new URL(url)
    return u.protocol === 'https:' && u.hostname === 'hooks.slack.com'
  } catch {
    return false
  }
}

/**
 * Post a one-shot Clarity session link to #clarity-live.
 * Client must only call after analytics consent + Clarity metadata is ready.
 */
export async function POST(request: NextRequest) {
  const limited = await rateLimitResponse(request, 'clarity-live-slack', 20, 60)
  if (limited) {
    // Soft-skip so the client keeps its session dedupe key and does not retry-spam.
    return NextResponse.json({ ok: true, skipped: 'rate_limited' })
  }

  const webhook = process.env.SLACK_CLARITY_WEBHOOK_URL?.trim()
  if (!webhook || !isHooksUrl(webhook)) {
    return NextResponse.json({ ok: false, reason: 'not_configured' }, { status: 503 })
  }

  let body: {
    projectId?: string
    userId?: string
    sessionId?: string
    path?: string
    referrer?: string
  }
  try {
    body = (await request.json()) as typeof body
  } catch {
    return NextResponse.json({ ok: false, error: 'invalid_json' }, { status: 400 })
  }

  const projectId = String(body.projectId || '').trim()
  const userId = String(body.userId || '').trim()
  const sessionId = String(body.sessionId || '').trim()
  const path = String(body.path || '/').trim().slice(0, 300)
  const referrer = String(body.referrer || '').trim().slice(0, 300)

  if (!/^[a-z0-9]+$/i.test(projectId) || !/^[\w.-]+$/.test(userId) || !/^[\w.-]+$/.test(sessionId)) {
    return NextResponse.json({ ok: false, error: 'invalid_ids' }, { status: 400 })
  }

  pruneSessions()
  const dedupeKey = `${projectId}:${userId}:${sessionId}`
  if (SESSION_SEEN.has(dedupeKey)) {
    return NextResponse.json({ ok: true, duplicate: true })
  }
  SESSION_SEEN.set(dedupeKey, Date.now())

  const watchUrl = `https://clarity.microsoft.com/player/${encodeURIComponent(projectId)}/${encodeURIComponent(userId)}/${encodeURIComponent(sessionId)}`
  const liveUrl = `https://clarity.microsoft.com/projects/view/${encodeURIComponent(projectId)}/impressions?date=Last%203%20days`
  const ip = getClientIp(request)

  const text = [
    '*Clarity session*',
    `• Path: \`${path || '/'}\``,
    referrer ? `• Referrer: ${referrer}` : null,
    ip ? `• IP hint: \`${ip}\`` : null,
    `• <${watchUrl}|Watch recording>`,
    `• <${liveUrl}|Open Clarity Live>`,
  ]
    .filter(Boolean)
    .join('\n')

  try {
    const res = await fetch(webhook, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        text,
        unfurl_links: false,
        unfurl_media: false,
      }),
    })
    if (!res.ok) {
      SESSION_SEEN.delete(dedupeKey)
      return NextResponse.json({ ok: false, error: 'slack_failed' }, { status: 502 })
    }
  } catch {
    SESSION_SEEN.delete(dedupeKey)
    return NextResponse.json({ ok: false, error: 'slack_error' }, { status: 502 })
  }

  return NextResponse.json({ ok: true })
}
