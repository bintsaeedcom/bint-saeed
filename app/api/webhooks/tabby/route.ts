import { NextRequest, NextResponse } from 'next/server'
import { fulfillTabbyPaidOrder } from '@/lib/tabby/fulfillPaidOrder'
import { markPaymentEventProcessed, wasPaymentEventProcessed } from '@/lib/payments/webhookEventStore'
import { notifyHealthAlert } from '@/lib/ops/notifications'
import { getTabbyWebhookSecret, isTabbyConfigured } from '@/lib/tabby/config'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const SUCCESS = new Set(['authorized', 'closed', 'captured', 'AUTHORISED', 'AUTHORIZED', 'CLOSED', 'CAPTURED'])

function verifyTabbyWebhook(request: NextRequest): boolean {
  const secret = getTabbyWebhookSecret()
  if (!secret) return true // allow until Tabby provides webhook signing details
  const header =
    request.headers.get('x-tabby-signature') ||
    request.headers.get('authorization')?.replace(/^Bearer\s+/i, '') ||
    request.nextUrl.searchParams.get('token')
  return Boolean(header && header === secret)
}

async function handleNotification(body: Record<string, unknown>) {
  const paymentId = String(
    body.id ||
      body.payment_id ||
      (body.payment as { id?: string } | undefined)?.id ||
      '',
  ).trim()
  if (!paymentId) return { ok: false, reason: 'missing_payment_id' }

  const status = String(body.status || body.event_type || '').trim()
  const eventKey = `${paymentId}:${status || 'unknown'}`
  if (await wasPaymentEventProcessed('tabby', eventKey)) {
    return { ok: true, reason: 'duplicate' }
  }

  if (SUCCESS.has(status) || SUCCESS.has(status.toUpperCase()) || !status) {
    const result = await fulfillTabbyPaidOrder({
      paymentId,
      statusHint: status || 'AUTHORIZED',
    })
    await markPaymentEventProcessed('tabby', eventKey)
    return { ok: result.fulfilled, ...result }
  }

  await markPaymentEventProcessed('tabby', eventKey)
  return { ok: true, reason: `ignored_status:${status}` }
}

export async function POST(request: NextRequest) {
  if (!isTabbyConfigured()) {
    return NextResponse.json({ error: 'Tabby is not configured.' }, { status: 503 })
  }

  if (!verifyTabbyWebhook(request)) {
    return NextResponse.json({ error: 'Invalid Tabby webhook credentials.' }, { status: 401 })
  }

  try {
    let body: Record<string, unknown> = {}
    const contentType = request.headers.get('content-type') || ''
    if (contentType.includes('application/json')) {
      body = (await request.json()) as Record<string, unknown>
    } else {
      const text = await request.text()
      try {
        body = text ? (JSON.parse(text) as Record<string, unknown>) : {}
      } catch {
        body = {}
      }
    }

    const result = await handleNotification(body)
    return NextResponse.json({ received: true, ...result })
  } catch (error) {
    console.error('Tabby webhook error:', error)
    await notifyHealthAlert({
      source: 'api/webhooks/tabby',
      message: error instanceof Error ? error.message : 'Tabby webhook failed',
    })
    return NextResponse.json({ error: 'Webhook processing failed' }, { status: 500 })
  }
}

export async function GET() {
  return NextResponse.json({ ok: true, service: 'tabby-webhook' })
}
