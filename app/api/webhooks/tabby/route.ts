import { NextRequest, NextResponse } from 'next/server'
import { fulfillTabbyPaidOrder } from '@/lib/tabby/fulfillPaidOrder'
import { markPaymentEventProcessed, wasPaymentEventProcessed } from '@/lib/payments/webhookEventStore'
import { notifyHealthAlert } from '@/lib/ops/notifications'
import { getTabbyWebhookSecret, isTabbyConfigured } from '@/lib/tabby/config'
import { getTabbyPaymentIdByOrderRef, getPendingTabbyCheckout } from '@/lib/tabby/pendingCheckoutStore'
import { recordFunnelPaymentTerminalOutcome } from '@/lib/analytics/funnel/recordPurchase'
import type { FunnelPaymentOutcome } from '@/lib/analytics/funnel/serverFunnel'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

/**
 * Tabby webhook statuses that must trigger verify + capture + OMS.
 * Docs: on `authorized` you capture; later `authorized`+captures and `closed` may also arrive.
 */
const SUCCESS = new Set([
  'authorized',
  'closed',
  'captured',
  'AUTHORISED',
  'AUTHORIZED',
  'CLOSED',
  'CAPTURED',
])

function verifyTabbyWebhook(request: NextRequest): boolean {
  const secret = getTabbyWebhookSecret()
  // If secret is not configured, still accept so capture is never blocked in production misconfig —
  // but require presence once secret is set.
  if (!secret) return true
  const header =
    request.headers.get('x-tabby-signature') ||
    request.headers.get('authorization')?.replace(/^Bearer\s+/i, '') ||
    request.nextUrl.searchParams.get('token')
  return Boolean(header && header === secret)
}

async function handleNotification(body: Record<string, unknown>) {
  let paymentId = String(
    body.id ||
      body.payment_id ||
      (body.payment as { id?: string } | undefined)?.id ||
      '',
  ).trim()

  const orderRef = String(
    (body.order as { reference_id?: string } | undefined)?.reference_id ||
      body.reference_id ||
      '',
  ).trim()

  if (!paymentId && orderRef) {
    paymentId = (await getTabbyPaymentIdByOrderRef(orderRef)) || ''
  }

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
      orderRefHint: orderRef || undefined,
    })

    // Only acknowledge permanently when capture+OMS succeeded. Non-success below
    // returns HTTP 5xx so Tabby retries (docs: up to 4 retries on non-200).
    if (result.fulfilled) {
      await markPaymentEventProcessed('tabby', eventKey)
      return { ok: true, ...result }
    }

    return { ok: false, ...result }
  }

  const statusLower = status.toLowerCase()
  const failureStatuses = new Set([
    'rejected',
    'declined',
    'expired',
    'cancelled',
    'canceled',
    'closed',
  ])
  if (status && failureStatuses.has(statusLower) && !SUCCESS.has(status) && !SUCCESS.has(status.toUpperCase())) {
    const pending = await getPendingTabbyCheckout(paymentId)
    const outcome: FunnelPaymentOutcome = statusLower.includes('expir')
      ? 'payment_expired'
      : statusLower.includes('cancel')
        ? 'payment_cancelled'
        : 'payment_failed'
    if (pending) {
      void recordFunnelPaymentTerminalOutcome({
        provider: 'tabby',
        sessionRef: paymentId,
        outcome,
        items: pending.items,
        clientContext: pending.clientContext,
      }).catch(() => {})
    }
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
    if (!result.ok && result.reason !== 'duplicate') {
      // Signal Tabby to retry — e.g. capture not yet confirmed / pending missing briefly.
      await notifyHealthAlert({
        source: 'api/webhooks/tabby',
        message: `Tabby webhook fulfill pending retry: ${result.reason || 'unknown'}`,
        context: { paymentId: body.id, status: body.status },
      })
      return NextResponse.json({ received: false, ...result }, { status: 500 })
    }

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
  return NextResponse.json({
    ok: true,
    service: 'tabby-webhook',
    note: 'Payment webhooks must call this URL so AUTHORIZED payments are captured without relying on frontend redirect.',
  })
}
