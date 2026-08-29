import { NextRequest, NextResponse } from 'next/server'
import { decodeTamaraWebhookPayload, verifyTamaraWebhookToken } from '@/lib/tamara/webhookToken'
import { fulfillTamaraPaidOrder } from '@/lib/tamara/fulfillPaidOrder'
import { markPaymentEventProcessed, wasPaymentEventProcessed } from '@/lib/payments/webhookEventStore'
import { notifyHealthAlert } from '@/lib/ops/notifications'
import { isTamaraConfigured } from '@/lib/tamara/config'
import { getPendingTamaraCheckout } from '@/lib/tamara/pendingCheckoutStore'
import { recordFunnelPaymentTerminalOutcome } from '@/lib/analytics/funnel/recordPurchase'
import type { FunnelPaymentOutcome } from '@/lib/analytics/funnel/serverFunnel'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const SUCCESS_STATUSES = new Set([
  'approved',
  'authorised',
  'authorized',
  'captured',
  'fully_captured',
  'fully captured',
])

async function handleNotification(body: Record<string, unknown>, statusHint?: string) {
  const orderId = String(
    body.order_id ?? body.orderId ?? (body.order as { order_id?: string } | undefined)?.order_id ?? '',
  ).trim()
  if (!orderId) return { ok: false, reason: 'missing_order_id' }

  const status = String(
    statusHint || body.order_status || body.status || body.event_type || '',
  )
    .trim()
    .toLowerCase()

  const eventKey = `${orderId}:${status || 'unknown'}`
  if (await wasPaymentEventProcessed('tamara', eventKey)) {
    return { ok: true, reason: 'duplicate' }
  }

  if (SUCCESS_STATUSES.has(status) || !status) {
    const result = await fulfillTamaraPaidOrder({
      tamaraOrderId: orderId,
      statusHint: status || 'approved',
    })
    await markPaymentEventProcessed('tamara', eventKey)
    return { ok: result.fulfilled, ...result }
  }

  const failureStatuses = new Set([
    'declined',
    'canceled',
    'cancelled',
    'expired',
    'rejected',
    'order_declined',
    'order_canceled',
    'order_cancelled',
    'order_expired',
  ])
  if (failureStatuses.has(status)) {
    const pending = await getPendingTamaraCheckout(orderId)
    const outcome: FunnelPaymentOutcome = status.includes('expir')
      ? 'payment_expired'
      : status.includes('cancel')
        ? 'payment_cancelled'
        : 'payment_failed'
    if (pending) {
      void recordFunnelPaymentTerminalOutcome({
        provider: 'tamara',
        sessionRef: orderId,
        outcome,
        items: pending.items,
        clientContext: pending.clientContext,
      }).catch(() => {})
    }
  }

  await markPaymentEventProcessed('tamara', eventKey)
  return { ok: true, reason: `ignored_status:${status}` }
}

export async function POST(request: NextRequest) {
  if (!isTamaraConfigured()) {
    return NextResponse.json({ error: 'Tamara is not configured.' }, { status: 503 })
  }

  const tamaraToken =
    request.nextUrl.searchParams.get('tamaraToken') ||
    request.nextUrl.searchParams.get('tamara_token')

  if (!verifyTamaraWebhookToken(tamaraToken)) {
    // Some sandbox setups POST JSON without query token — allow body-only when notification token unset locally.
    if (process.env.TAMARA_NOTIFICATION_TOKEN?.trim()) {
      return NextResponse.json({ error: 'Invalid Tamara webhook token.' }, { status: 401 })
    }
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

    if (tamaraToken && Object.keys(body).length === 0) {
      const decoded = decodeTamaraWebhookPayload(tamaraToken)
      if (decoded) body = decoded
    }

    const result = await handleNotification(body)
    return NextResponse.json({ received: true, ...result })
  } catch (error) {
    console.error('Tamara webhook error:', error)
    await notifyHealthAlert({
      source: 'api/webhooks/tamara',
      message: error instanceof Error ? error.message : 'Tamara webhook failed',
    })
    return NextResponse.json({ error: 'Webhook processing failed' }, { status: 500 })
  }
}

/** Tamara may also GET the notification URL during setup. */
export async function GET(request: NextRequest) {
  const tamaraToken =
    request.nextUrl.searchParams.get('tamaraToken') ||
    request.nextUrl.searchParams.get('tamara_token')
  if (tamaraToken && !verifyTamaraWebhookToken(tamaraToken)) {
    return NextResponse.json({ ok: false }, { status: 401 })
  }
  return NextResponse.json({ ok: true, service: 'tamara-webhook' })
}
