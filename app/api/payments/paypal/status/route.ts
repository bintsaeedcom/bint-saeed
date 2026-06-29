import { NextRequest, NextResponse } from 'next/server'
import { getPayPalOrder } from '@/lib/paypal/client'
import { isPayPalConfigured } from '@/lib/paypal/config'
import { findOrderIdBySession } from '@/lib/orders/orderStore'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  if (!isPayPalConfigured()) {
    return NextResponse.json({ error: 'PayPal is not configured.' }, { status: 503 })
  }

  const orderId =
    request.nextUrl.searchParams.get('order_id')?.trim() ||
    request.nextUrl.searchParams.get('paypal_token')?.trim() ||
    request.nextUrl.searchParams.get('token')?.trim()

  if (!orderId) {
    return NextResponse.json({ error: 'order_id is required.' }, { status: 400 })
  }

  try {
    const storedOrderId = await findOrderIdBySession(orderId)
    if (storedOrderId) {
      return NextResponse.json({ orderId, status: 'COMPLETED', paid: true })
    }

    const order = await getPayPalOrder(orderId)
    const paid = order.status === 'COMPLETED'
    return NextResponse.json({
      orderId,
      status: order.status ?? 'UNKNOWN',
      paid,
    })
  } catch (error: unknown) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Could not fetch PayPal order status.' },
      { status: 502 },
    )
  }
}
