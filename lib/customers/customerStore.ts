import { Redis } from '@upstash/redis'
import type { StoredOrder } from '@/lib/orders/types'
import type { CustomerRecord } from './types'

const KEY_CUST = (emailPart: string) => `bs:cust:e:${emailPart}`
const KEY_INDEX = 'bs:cust:index'

let redis: Redis | null = null
const memoryCustomers = new Map<string, CustomerRecord>()

function getRedis(): Redis | null {
  const url = process.env.UPSTASH_REDIS_REST_URL
  const token = process.env.UPSTASH_REDIS_REST_TOKEN
  if (!url || !token) return null
  if (!redis) redis = new Redis({ url, token })
  return redis
}

export function normalizeCustomerEmail(raw: string): string {
  return raw.trim().toLowerCase()
}

/** Stable Redis key fragment (no @ in key). */
export function emailKeyPart(email: string): string {
  const n = normalizeCustomerEmail(email)
  return Buffer.from(n, 'utf8').toString('base64url')
}

async function persistCustomer(part: string, c: CustomerRecord, indexScoreMs: number): Promise<void> {
  const r = getRedis()
  if (r) {
    await r.set(KEY_CUST(part), JSON.stringify(c))
    await r.zadd(KEY_INDEX, { score: indexScoreMs, member: part })
    return
  }
  memoryCustomers.set(part, c)
}

export async function upsertCustomerFromOrder(order: StoredOrder): Promise<void> {
  const email = normalizeCustomerEmail(order.customerEmail || '')
  if (!email || !email.includes('@')) return

  const part = emailKeyPart(email)
  const now = new Date().toISOString()
  const existing = await getCustomerByEmailRaw(email)
  const wasAlready = Boolean(existing?.orderIds.includes(order.id))

  if (wasAlready && existing) {
    const next: CustomerRecord = {
      ...existing,
      displayName: order.customerName || existing.displayName,
      phone: order.customerPhone || existing.phone,
      updatedAt: now,
      lastShippingAddress:
        order.shippingAddress && Object.keys(order.shippingAddress).length > 0
          ? order.shippingAddress
          : existing.lastShippingAddress,
    }
    const score = new Date(next.lastOrderAt ?? order.createdAt).getTime()
    await persistCustomer(part, next, score)
    return
  }

  const orderIds = existing?.orderIds ? [...existing.orderIds] : []
  orderIds.push(order.id)

  const next: CustomerRecord = {
    email,
    displayName: order.customerName || existing?.displayName,
    phone: order.customerPhone || existing?.phone,
    orderIds,
    orderCount: orderIds.length,
    lifetimeValue: (existing?.lifetimeValue ?? 0) + (Number.isFinite(order.amountTotal) ? order.amountTotal : 0),
    currency: order.currency || existing?.currency || 'AED',
    lastOrderId: order.id,
    lastOrderAt: order.createdAt,
    firstSeenAt: existing?.firstSeenAt ?? order.createdAt,
    updatedAt: now,
    lastShippingAddress:
      order.shippingAddress && Object.keys(order.shippingAddress).length > 0
        ? order.shippingAddress
        : existing?.lastShippingAddress,
  }

  await persistCustomer(part, next, new Date(order.createdAt).getTime())
}

async function getCustomerByEmailRaw(email: string): Promise<CustomerRecord | null> {
  const part = emailKeyPart(email)
  const r = getRedis()
  if (r) {
    const raw = await r.get<string>(KEY_CUST(part))
    if (!raw) return null
    try {
      return typeof raw === 'string' ? (JSON.parse(raw) as CustomerRecord) : (raw as unknown as CustomerRecord)
    } catch {
      return null
    }
  }
  return memoryCustomers.get(part) ?? null
}

export async function getCustomerByEmail(email: string): Promise<CustomerRecord | null> {
  return getCustomerByEmailRaw(normalizeCustomerEmail(email))
}

export async function listCustomers(options?: { limit?: number; q?: string }): Promise<CustomerRecord[]> {
  const limit = options?.limit ?? 500
  const q = options?.q?.trim().toLowerCase() ?? ''
  const r = getRedis()
  const out: CustomerRecord[] = []

  if (r) {
    const parts = await r.zrange(KEY_INDEX, 0, Math.max(limit * 3, limit) - 1, { rev: true })
    for (const part of parts) {
      const raw = await r.get<string>(KEY_CUST(part as string))
      if (!raw) continue
      let c: CustomerRecord
      try {
        c = typeof raw === 'string' ? JSON.parse(raw) : (raw as unknown as CustomerRecord)
      } catch {
        continue
      }
      if (q && !c.email.includes(q) && !(c.displayName?.toLowerCase().includes(q) ?? false)) continue
      out.push(c)
      if (out.length >= limit) break
    }
    return out
  }

  const all = Array.from(memoryCustomers.values())
  all.sort((a, b) => (b.lastOrderAt ?? '').localeCompare(a.lastOrderAt ?? ''))
  for (const c of all) {
    if (q && !c.email.includes(q) && !(c.displayName?.toLowerCase().includes(q) ?? false)) continue
    out.push(c)
    if (out.length >= limit) break
  }
  return out
}

export function usingRedisForCustomers(): boolean {
  return Boolean(process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN)
}
