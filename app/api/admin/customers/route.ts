import { NextRequest, NextResponse } from 'next/server'
import { requireAdmin } from '@/lib/admin/apiAuth'
import { getCustomerByEmail, listCustomers, usingRedisForCustomers } from '@/lib/customers/customerStore'
import { getOrderById } from '@/lib/orders/orderStore'
import type { StoredOrder } from '@/lib/orders/types'

export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  if (!(await requireAdmin(request))) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { searchParams } = new URL(request.url)
  const email = searchParams.get('email')?.trim()

  if (email) {
    const customer = await getCustomerByEmail(email)
    if (!customer) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 })
    }
    const orders: StoredOrder[] = []
    for (const id of customer.orderIds) {
      const o = await getOrderById(id)
      if (o) orders.push(o)
    }
    orders.sort((a, b) => b.createdAt.localeCompare(a.createdAt))
    return NextResponse.json({
      customer,
      orders,
      storage: usingRedisForCustomers() ? 'redis' : 'memory',
    })
  }

  const q = searchParams.get('q') ?? ''
  const limitRaw = parseInt(searchParams.get('limit') || '200', 10)
  const limit = Number.isFinite(limitRaw) ? Math.min(Math.max(limitRaw, 1), 500) : 200
  const customers = await listCustomers({ q, limit })

  return NextResponse.json({
    customers,
    storage: usingRedisForCustomers() ? 'redis' : 'memory',
  })
}
