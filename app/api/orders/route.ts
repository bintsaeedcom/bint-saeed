import { NextRequest, NextResponse } from 'next/server'

// This is a placeholder for order management
// In production, connect to a database like MongoDB, PostgreSQL, or Supabase

interface Order {
  id: string
  sessionId: string
  items: any[]
  customer: {
    email: string
    name: string
    address: any
  }
  status: 'pending' | 'confirmed' | 'processing' | 'shipped' | 'delivered' | 'cancelled'
  total: number
  createdAt: string
  updatedAt: string
}

// In-memory storage (replace with database in production)
const orders: Order[] = []

export async function GET(request: NextRequest) {
  // Admin authentication would go here
  const { searchParams } = new URL(request.url)
  const status = searchParams.get('status')
  const id = searchParams.get('id')

  if (id) {
    const order = orders.find((o) => o.id === id)
    if (!order) {
      return NextResponse.json({ error: 'Order not found' }, { status: 404 })
    }
    return NextResponse.json(order)
  }

  let filteredOrders = orders
  if (status) {
    filteredOrders = orders.filter((o) => o.status === status)
  }

  return NextResponse.json({
    orders: filteredOrders,
    total: filteredOrders.length,
  })
}

export async function POST(request: NextRequest) {
  try {
    const orderData = await request.json()
    
    const newOrder: Order = {
      id: `ORD-${Date.now()}`,
      sessionId: orderData.sessionId,
      items: orderData.items,
      customer: orderData.customer,
      status: 'pending',
      total: orderData.total,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }

    orders.push(newOrder)

    // Notify via Slack
    const slackWebhookUrl = process.env.SLACK_WEBHOOK_URL
    if (slackWebhookUrl) {
      await fetch(slackWebhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text: `🛍️ New Order Received!\nOrder ID: ${newOrder.id}\nTotal: ${newOrder.total} AED\nItems: ${newOrder.items.length}`,
        }),
      })
    }

    return NextResponse.json(newOrder)
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const { id, status } = await request.json()
    
    const orderIndex = orders.findIndex((o) => o.id === id)
    if (orderIndex === -1) {
      return NextResponse.json({ error: 'Order not found' }, { status: 404 })
    }

    orders[orderIndex].status = status
    orders[orderIndex].updatedAt = new Date().toISOString()

    return NextResponse.json(orders[orderIndex])
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
