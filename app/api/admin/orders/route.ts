import { NextRequest, NextResponse } from 'next/server'
import { requireAdmin } from '@/lib/admin/apiAuth'
import { listOrders, usingRedisForOrders } from '@/lib/orders/orderStore'
import type { OrderFulfillmentStatus } from '@/lib/orders/types'

export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  if (!(await requireAdmin(request))) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { searchParams } = new URL(request.url)
  const status = searchParams.get('status') as OrderFulfillmentStatus | null
  const orders = await listOrders({
    ...(status ? { status } : {}),
    limit: 300,
  })

  return NextResponse.json({
    orders,
    storage: usingRedisForOrders() ? 'redis' : 'memory',
  })
}
