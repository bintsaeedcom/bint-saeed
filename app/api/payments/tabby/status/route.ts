import { NextRequest, NextResponse } from 'next/server'
import { getTabbyPayment } from '@/lib/tabby/api'
import { fulfillTabbyPaidOrder } from '@/lib/tabby/fulfillPaidOrder'
import { isTabbyConfigured } from '@/lib/tabby/config'
import { getPendingTabbyCheckout } from '@/lib/tabby/pendingCheckoutStore'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const PAID = new Set(['AUTHORIZED', 'CLOSED', 'CAPTURED'])

/**
 * Success-page poll — UX / cart clear only as a safety net.
 * Capture must already run from `/api/webhooks/tabby`; this path can repair if webhook lagged.
 */
export async function GET(request: NextRequest) {
  if (!isTabbyConfigured()) {
    return NextResponse.json({ error: 'Tabby is not configured.' }, { status: 503 })
  }

  const paymentId = request.nextUrl.searchParams.get('payment_id')?.trim()
  if (!paymentId) {
    return NextResponse.json({ error: 'payment_id is required.' }, { status: 400 })
  }

  const pending = await getPendingTabbyCheckout(paymentId)
  const remote = await getTabbyPayment(paymentId, pending?.countryCode)
  const status = String(remote.data.status || '').toUpperCase()
  const paid = PAID.has(status)

  let fulfill: Awaited<ReturnType<typeof fulfillTabbyPaidOrder>> | null = null
  if (paid) {
    fulfill = await fulfillTabbyPaidOrder({ paymentId, statusHint: status })
  }

  return NextResponse.json({
    paymentId,
    status: remote.data.status ?? null,
    paid,
    ok: remote.ok,
    fulfilled: fulfill?.fulfilled ?? false,
    captured: fulfill?.captured ?? false,
    orderId: fulfill?.orderId,
    reason: fulfill?.reason,
  })
}
