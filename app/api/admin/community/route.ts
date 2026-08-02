import { NextRequest, NextResponse } from 'next/server'
import { requireAdmin } from '@/lib/admin/apiAuth'
import {
  listHouseMembers,
  usingRedisForHouseMembers,
  type HouseMemberRecord,
  type HousePromoUsage,
} from '@/lib/membership/memberStore'
import { listOrders } from '@/lib/orders/orderStore'
import { HOUSE_FIRST_PURCHASE_CODE } from '@/lib/membership/constants'
import { normalizeCustomerEmail } from '@/lib/customers/customerStore'

export const dynamic = 'force-dynamic'

function isHousePromoCode(code: string): boolean {
  const c = code.trim().toUpperCase()
  return c === HOUSE_FIRST_PURCHASE_CODE || c.startsWith('HOUSE10-')
}

/** Merge order history into member promo usages for admin display. */
function mergeUsagesFromOrders(
  members: HouseMemberRecord[],
  orderUsages: Map<string, HousePromoUsage[]>,
): HouseMemberRecord[] {
  return members.map((member) => {
    const email = normalizeCustomerEmail(member.email)
    const fromOrders = orderUsages.get(email) || []
    const existing = member.promoUsages || []
    const byKey = new Map<string, HousePromoUsage>()
    for (const u of [...existing, ...fromOrders]) {
      byKey.set(`${u.orderId}:${u.code}`, u)
    }
    const promoUsages = Array.from(byKey.values()).sort((a, b) => b.at.localeCompare(a.at))
    return { ...member, promoUsages }
  })
}

export async function GET(request: NextRequest) {
  if (!(await requireAdmin(request))) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const members = await listHouseMembers({ limit: 500 })
  const orders = await listOrders({ limit: 500 })

  const orderUsages = new Map<string, HousePromoUsage[]>()
  for (const order of orders) {
    const code = order.discountCode?.trim().toUpperCase()
    if (!code || !isHousePromoCode(code)) continue
    if (order.fulfillmentStatus === 'cancelled' || order.fulfillmentStatus === 'refunded') continue
    const email = normalizeCustomerEmail(order.customerEmail || '')
    if (!email.includes('@')) continue
    const list = orderUsages.get(email) || []
    list.push({
      code,
      orderId: order.id,
      at: order.updatedAt || order.createdAt,
      amountTotal: order.amountTotal,
      currency: order.currency,
    })
    orderUsages.set(email, list)
  }

  const enriched = mergeUsagesFromOrders(members, orderUsages)

  // Include emails that used a house code but are missing from the member index.
  const memberEmails = new Set(enriched.map((m) => normalizeCustomerEmail(m.email)))
  for (const [email, usages] of orderUsages) {
    if (memberEmails.has(email)) continue
    enriched.push({
      email,
      subscribedAt: usages[usages.length - 1]?.at || new Date().toISOString(),
      firstPurchaseCode: HOUSE_FIRST_PURCHASE_CODE,
      privilegeStatus: usages.some((u) => u.code.startsWith('HOUSE10-'))
        ? 'activated'
        : 'pending_first_order',
      privilegeCode: usages.find((u) => u.code.startsWith('HOUSE10-'))?.code,
      privilegeExpiresAt: '',
      promoUsages: usages,
      updatedAt: usages[0]?.at || new Date().toISOString(),
      source: 'order_backfill',
    })
  }

  enriched.sort((a, b) => (b.subscribedAt || '').localeCompare(a.subscribedAt || ''))

  return NextResponse.json({
    members: enriched.map((m) => ({
      email: m.email,
      name: m.name,
      subscribedAt: m.subscribedAt,
      source: m.source,
      firstPurchaseCode: m.firstPurchaseCode,
      privilegeStatus: m.privilegeStatus,
      privilegeCode: m.privilegeCode,
      privilegeActivatedAt: m.privilegeActivatedAt,
      privilegeExpiresAt: m.privilegeExpiresAt,
      firstPaidOrderId: m.firstPaidOrderId,
      promoUsages: m.promoUsages || [],
      useCount: (m.promoUsages || []).length,
      updatedAt: m.updatedAt,
    })),
    total: enriched.length,
    storage: usingRedisForHouseMembers() ? 'redis' : 'memory',
  })
}
