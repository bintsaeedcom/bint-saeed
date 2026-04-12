import { NextRequest, NextResponse } from 'next/server'
import { requireAdmin } from '@/lib/admin/apiAuth'
import {
  listOrders,
  saveOrder,
  updateOrderFulfillment,
  getOrderById,
} from '@/lib/orders/orderStore'
import type { StoredOrder, OrderFulfillmentStatus } from '@/lib/orders/types'

export const dynamic = 'force-dynamic'

/** Legacy order API — admin session required (customer PII). Prefer Stripe webhook + /api/admin/orders. */

export async function GET(request: NextRequest) {
  if (!(await requireAdmin(request))) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { searchParams } = new URL(request.url)
  const status = searchParams.get('status') as OrderFulfillmentStatus | null
  const id = searchParams.get('id')

  if (id) {
    const order = await getOrderById(id)
    if (!order) {
      return NextResponse.json({ error: 'Order not found' }, { status: 404 })
    }
    return NextResponse.json(order)
  }

  const orders = await listOrders({
    ...(status ? { status } : {}),
    limit: 500,
  })

  return NextResponse.json({
    orders,
    total: orders.length,
  })
}

export async function POST(request: NextRequest) {
  if (!(await requireAdmin(request))) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const orderData = await request.json()
    const now = new Date().toISOString()
    const newOrder: StoredOrder = {
      id: `ORD-${Date.now()}`,
      stripeSessionId: orderData.sessionId || `manual-${Date.now()}`,
      customerEmail: orderData.customer?.email || '',
      customerName: orderData.customer?.name,
      lines: Array.isArray(orderData.items)
        ? orderData.items.map((it: { name?: string; quantity?: number; price?: number }) => ({
            name: it.name || 'Item',
            quantity: it.quantity ?? 1,
            unitPrice: Number(it.price) || 0,
            currency: 'AED',
          }))
        : [],
      amountSubtotal: Number(orderData.total) || 0,
      amountShipping: 0,
      amountTotal: Number(orderData.total) || 0,
      currency: 'AED',
      fulfillmentStatus: 'paid',
      createdAt: now,
      updatedAt: now,
    }

    await saveOrder(newOrder)

    const slackWebhookUrl = process.env.SLACK_WEBHOOK_URL
    if (slackWebhookUrl) {
      await fetch(slackWebhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text: `🛍️ New Order (manual/API)\nOrder ID: ${newOrder.id}\nTotal: ${newOrder.amountTotal} AED\nLines: ${newOrder.lines.length}`,
        }),
      })
    }

    return NextResponse.json(newOrder)
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : 'Error'
    return NextResponse.json({ error: msg }, { status: 500 })
  }
}

export async function PATCH(request: NextRequest) {
  if (!(await requireAdmin(request))) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const { id, status, internalNotes } = await request.json()
    if (!id) {
      return NextResponse.json({ error: 'id required' }, { status: 400 })
    }
    const updated = await updateOrderFulfillment(id, {
      ...(status ? { fulfillmentStatus: status as OrderFulfillmentStatus } : {}),
      ...(internalNotes !== undefined ? { internalNotes } : {}),
    })
    if (!updated) {
      return NextResponse.json({ error: 'Order not found' }, { status: 404 })
    }
    return NextResponse.json(updated)
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : 'Error'
    return NextResponse.json({ error: msg }, { status: 500 })
  }
}
