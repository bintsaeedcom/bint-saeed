import { NextRequest, NextResponse } from 'next/server'
import { requireAdmin } from '@/lib/admin/apiAuth'
import { getOrderById, updateOrderFulfillment } from '@/lib/orders/orderStore'
import type { OrderFulfillmentStatus } from '@/lib/orders/types'
import { notifyFulfillmentStatusChange, notifyHealthAlert } from '@/lib/ops/notifications'

export const dynamic = 'force-dynamic'

const STATUSES: OrderFulfillmentStatus[] = [
  'paid',
  'processing',
  'ready_to_ship',
  'shipped',
  'delivered',
  'cancelled',
  'refunded',
]

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  if (!(await requireAdmin(request))) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const order = await getOrderById(params.id)
  if (!order) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  }
  return NextResponse.json({ order })
}

export async function PATCH(request: NextRequest, { params }: { params: { id: string } }) {
  if (!(await requireAdmin(request))) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  let body: { fulfillmentStatus?: string; internalNotes?: string }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  if (
    body.fulfillmentStatus &&
    !STATUSES.includes(body.fulfillmentStatus as OrderFulfillmentStatus)
  ) {
    return NextResponse.json({ error: 'Invalid status' }, { status: 400 })
  }

  try {
    const before = await getOrderById(params.id)
    const updated = await updateOrderFulfillment(params.id, {
      ...(body.fulfillmentStatus
        ? { fulfillmentStatus: body.fulfillmentStatus as OrderFulfillmentStatus }
        : {}),
      ...(body.internalNotes !== undefined ? { internalNotes: body.internalNotes } : {}),
    })

    if (!updated) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 })
    }

    if (before && body.fulfillmentStatus && before.fulfillmentStatus !== updated.fulfillmentStatus) {
      await notifyFulfillmentStatusChange({
        order: updated,
        previousStatus: before.fulfillmentStatus,
        nextStatus: updated.fulfillmentStatus,
      })
    }

    return NextResponse.json({ order: updated })
  } catch (error) {
    await notifyHealthAlert({
      source: 'api/admin/orders/[id] PATCH',
      message: error instanceof Error ? error.message : 'Unknown order status update error',
      context: { orderId: params.id },
    })
    return NextResponse.json({ error: 'Failed to update order' }, { status: 500 })
  }
}
