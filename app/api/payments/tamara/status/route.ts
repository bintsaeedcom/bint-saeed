import { NextRequest, NextResponse } from 'next/server'
import { fulfillTamaraPaidOrder, getTamaraOrderIfPaid } from '@/lib/tamara/fulfillPaidOrder'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

/** Poll / finalize after return from Tamara hosted checkout. */
export async function GET(request: NextRequest) {
  const orderId =
    request.nextUrl.searchParams.get('order_id') ||
    request.nextUrl.searchParams.get('tamara_order_id') ||
    ''

  if (!orderId) {
    return NextResponse.json({ paid: false, error: 'Missing order_id' }, { status: 400 })
  }

  const existing = await getTamaraOrderIfPaid(orderId)
  if (existing) {
    return NextResponse.json({ paid: true, orderId: existing.id })
  }

  const result = await fulfillTamaraPaidOrder({
    tamaraOrderId: orderId,
    statusHint: 'authorised',
  })

  return NextResponse.json({
    paid: result.fulfilled,
    orderId: result.orderId,
    reason: result.reason,
  })
}
