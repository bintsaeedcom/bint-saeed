import { NextRequest, NextResponse } from 'next/server'
import { requireAdmin } from '@/lib/admin/apiAuth'
import { getOrderById } from '@/lib/orders/orderStore'
import { sendOrderConfirmationEmail } from '@/lib/orders/sendOrderConfirmationEmail'

export const dynamic = 'force-dynamic'

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  if (!(await requireAdmin(request))) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const order = await getOrderById(params.id)
  if (!order) {
    return NextResponse.json({ error: 'Order not found.' }, { status: 404 })
  }

  const result = await sendOrderConfirmationEmail(order)
  if (result.ok) {
    return NextResponse.json({ ok: true, message: `Confirmation sent to ${order.customerEmail}.` })
  }

  return NextResponse.json(
    {
      ok: false,
      skipped: result.skipped,
      error: result.error,
    },
    { status: result.skipped ? 400 : 502 },
  )
}
