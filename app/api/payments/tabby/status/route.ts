import { NextRequest, NextResponse } from 'next/server'
import { getTabbyPayment } from '@/lib/tabby/api'
import { fulfillTabbyPaidOrder } from '@/lib/tabby/fulfillPaidOrder'
import { isTabbyConfigured } from '@/lib/tabby/config'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const PAID = new Set(['AUTHORIZED', 'CLOSED', 'CAPTURED'])

export async function GET(request: NextRequest) {
  if (!isTabbyConfigured()) {
    return NextResponse.json({ error: 'Tabby is not configured.' }, { status: 503 })
  }

  const paymentId = request.nextUrl.searchParams.get('payment_id')?.trim()
  if (!paymentId) {
    return NextResponse.json({ error: 'payment_id is required.' }, { status: 400 })
  }

  const remote = await getTabbyPayment(paymentId)
  const status = String(remote.data.status || '').toUpperCase()
  const paid = PAID.has(status)

  if (paid) {
    await fulfillTabbyPaidOrder({ paymentId, statusHint: status })
  }

  return NextResponse.json({
    paymentId,
    status: remote.data.status ?? null,
    paid,
    ok: remote.ok,
  })
}
