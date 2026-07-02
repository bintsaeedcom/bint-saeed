import { Redis } from '@upstash/redis'

/**
 * Redis-backed store for live visitor analytics, the recent-activity feed, and abandoned-cart
 * tracking. Falls back to in-memory maps when Redis is not configured (local dev). Using Redis
 * is what makes these numbers real in production — Vercel serverless instances do not share
 * in-memory state, so the previous global Map/`global.notifications` approach always read empty.
 */

const KEY_VISITOR = (id: string) => `bs:av:v:${id}`
const KEY_ACTIVE = 'bs:av:active' // sorted set: member=visitorId, score=lastSeen(ms)
const KEY_NOTIF = 'bs:av:notif' // list of JSON notifications (newest first)
const KEY_CART = (id: string) => `bs:av:cart:${id}` // latest cart snapshot per visitor
const KEY_CARTS = 'bs:av:carts' // sorted set: member=visitorId, score=updatedAt(ms)
const KEY_DAY = (day: string) => `bs:av:day:${day}` // hash: total/new/returning counts

const VISITOR_TTL = 60 * 60 // 1h
const CART_TTL = 60 * 60 * 24 * 3 // 3 days
const DAY_TTL = 60 * 60 * 24 * 40 // ~40 days
const NOTIF_MAX = 100
const ACTIVE_WINDOW_MS = 5 * 60 * 1000

export interface AnalyticsVisitor {
  visitorId: string
  sessionId?: string
  isNewVisitor?: boolean
  visitCount?: number
  currentVisit?: string
  lastSeen: string
  location?: { country?: string; city?: string; countryCode?: string; region?: string } | null
  device?: { type?: 'mobile' | 'tablet' | 'desktop'; browser?: string; os?: string }
  pageViews?: { path?: string; title?: string; timestamp?: string; timeOnPage?: number }[]
  totalTimeOnSite?: number
  referrer?: string
  contactInfo?: { email?: string; phone?: string; name?: string }
  cartEvents?: { action?: string; productName?: string; timestamp?: string }[]
}

export interface AnalyticsNotification {
  id: string
  type: string
  data: Record<string, unknown>
  timestamp: string
  read: boolean
}

export interface AbandonedCartSnapshot {
  visitorId: string
  cartValueAed?: number
  cartItems?: number
  items?: { name?: string; quantity?: number; color?: string; size?: string }[]
  location?: { country?: string; city?: string } | null
  device?: { type?: string; browser?: string; os?: string }
  contactEmail?: string
  page?: string
  updatedAt: string
  status: 'active' | 'abandoned' | 'checkout_started' | 'recovered'
}

export interface AnalyticsStats {
  liveVisitors: number
  totalVisitors: number
  todayVisitors: number
  newVisitors: number
  returningVisitors: number
}

export interface AbandonedCartStats {
  openCount: number
  openValueAed: number
  recoveredToday: number
  carts: AbandonedCartSnapshot[]
}

let redis: Redis | null = null
function getRedis(): Redis | null {
  const url = process.env.UPSTASH_REDIS_REST_URL
  const token = process.env.UPSTASH_REDIS_REST_TOKEN
  if (!url || !token) return null
  if (!redis) redis = new Redis({ url, token })
  return redis
}

// ---- In-memory fallback (dev only) ----
const memVisitors = new Map<string, AnalyticsVisitor>()
const memNotifs: AnalyticsNotification[] = []
const memCarts = new Map<string, AbandonedCartSnapshot>()

function todayKey(): string {
  return new Date().toISOString().slice(0, 10)
}

function num(value: unknown): number | undefined {
  if (typeof value === 'number' && Number.isFinite(value)) return value
  if (typeof value === 'string' && value.trim() && Number.isFinite(Number(value))) return Number(value)
  return undefined
}

const CART_TYPES: Record<string, AbandonedCartSnapshot['status']> = {
  cart_add: 'active',
  cart_event: 'active',
  abandoned_cart: 'abandoned',
  checkout_abandoned: 'abandoned',
  checkout_started: 'checkout_started',
  cart_recovery_started: 'checkout_started',
  cart_recovered: 'recovered',
  order_completed: 'recovered',
}

function toVisitor(type: string, data: Record<string, unknown>): AnalyticsVisitor | null {
  const visitorId = typeof data.visitorId === 'string' ? data.visitorId : ''
  if (!visitorId) return null
  return {
    visitorId,
    sessionId: typeof data.sessionId === 'string' ? data.sessionId : undefined,
    isNewVisitor: typeof data.isNewVisitor === 'boolean' ? data.isNewVisitor : type === 'new_visitor',
    visitCount: num(data.visitCount),
    currentVisit: typeof data.currentVisit === 'string' ? data.currentVisit : new Date().toISOString(),
    lastSeen: new Date().toISOString(),
    location: (data.location as AnalyticsVisitor['location']) ?? null,
    device: (data.device as AnalyticsVisitor['device']) ?? undefined,
    pageViews: Array.isArray(data.pageViews) ? (data.pageViews as AnalyticsVisitor['pageViews']) : undefined,
    totalTimeOnSite: num(data.totalTimeOnSite),
    referrer: typeof data.referrer === 'string' ? data.referrer : undefined,
    contactInfo: (data.contactInfo as AnalyticsVisitor['contactInfo']) ?? undefined,
    cartEvents: Array.isArray(data.cartEvents) ? (data.cartEvents as AnalyticsVisitor['cartEvents']) : undefined,
  }
}

function toCartSnapshot(type: string, data: Record<string, unknown>): AbandonedCartSnapshot | null {
  const status = CART_TYPES[type]
  if (!status) return null
  const visitorId = typeof data.visitorId === 'string' ? data.visitorId : ''
  if (!visitorId) return null
  const browser = data.browser as { path?: string } | undefined
  const contact = data.contactInfo as { email?: string } | undefined
  return {
    visitorId,
    cartValueAed: num(data.cartValueAed) ?? num(data.cartValue),
    cartItems: num(data.cartItems),
    items: Array.isArray(data.items) ? (data.items as AbandonedCartSnapshot['items']) : undefined,
    location: (data.location as AbandonedCartSnapshot['location']) ?? null,
    device: (data.device as AbandonedCartSnapshot['device']) ?? undefined,
    contactEmail: contact?.email,
    page: typeof browser?.path === 'string' ? browser.path : undefined,
    updatedAt: new Date().toISOString(),
    status,
  }
}

export async function recordAnalyticsEvent(type: string, rawData: unknown): Promise<void> {
  const data = (rawData && typeof rawData === 'object' ? rawData : {}) as Record<string, unknown>
  const nowMs = Date.now()
  const visitor = toVisitor(type, data)
  const cart = toCartSnapshot(type, data)
  const notif: AnalyticsNotification = {
    id: `${nowMs}-${Math.random().toString(36).slice(2, 8)}`,
    type,
    data,
    timestamp: new Date().toISOString(),
    read: false,
  }
  const isVisitEvent = type === 'new_visitor' || type === 'returning_visitor'

  const r = getRedis()
  if (r) {
    const pipe = r.pipeline()
    if (visitor) {
      pipe.set(KEY_VISITOR(visitor.visitorId), JSON.stringify(visitor), { ex: VISITOR_TTL })
      pipe.zadd(KEY_ACTIVE, { score: nowMs, member: visitor.visitorId })
      pipe.zremrangebyscore(KEY_ACTIVE, 0, nowMs - VISITOR_TTL * 1000)
    }
    pipe.lpush(KEY_NOTIF, JSON.stringify(notif))
    pipe.ltrim(KEY_NOTIF, 0, NOTIF_MAX - 1)
    if (isVisitEvent) {
      const day = KEY_DAY(todayKey())
      pipe.hincrby(day, 'total', 1)
      pipe.hincrby(day, type === 'new_visitor' ? 'new' : 'returning', 1)
      pipe.expire(day, DAY_TTL)
    }
    if (cart) {
      pipe.set(KEY_CART(cart.visitorId), JSON.stringify(cart), { ex: CART_TTL })
      if (cart.status === 'recovered') {
        pipe.zrem(KEY_CARTS, cart.visitorId)
        pipe.hincrby(KEY_DAY(todayKey()), 'recovered', 1)
        pipe.expire(KEY_DAY(todayKey()), DAY_TTL)
      } else {
        pipe.zadd(KEY_CARTS, { score: nowMs, member: cart.visitorId })
      }
    }
    await pipe.exec()
    return
  }

  // Memory fallback
  if (visitor) memVisitors.set(visitor.visitorId, visitor)
  memNotifs.unshift(notif)
  if (memNotifs.length > NOTIF_MAX) memNotifs.length = NOTIF_MAX
  if (cart) {
    if (cart.status === 'recovered') memCarts.delete(cart.visitorId)
    else memCarts.set(cart.visitorId, cart)
  }
}

export async function getActiveVisitors(): Promise<AnalyticsVisitor[]> {
  const cutoff = Date.now() - ACTIVE_WINDOW_MS
  const r = getRedis()
  if (r) {
    const ids = (await r.zrange(KEY_ACTIVE, cutoff, '+inf', { byScore: true })) as string[]
    if (!ids.length) return []
    const raw = await r.mget<(string | null)[]>(...ids.map((id) => KEY_VISITOR(id)))
    const out: AnalyticsVisitor[] = []
    for (const item of raw) {
      if (!item) continue
      try {
        out.push(typeof item === 'string' ? JSON.parse(item) : (item as AnalyticsVisitor))
      } catch {
        /* skip */
      }
    }
    return out.sort((a, b) => b.lastSeen.localeCompare(a.lastSeen))
  }
  return Array.from(memVisitors.values())
    .filter((v) => new Date(v.lastSeen).getTime() >= cutoff)
    .sort((a, b) => b.lastSeen.localeCompare(a.lastSeen))
}

export async function getNotifications(limit = NOTIF_MAX): Promise<AnalyticsNotification[]> {
  const r = getRedis()
  if (r) {
    const raw = (await r.lrange(KEY_NOTIF, 0, limit - 1)) as (string | AnalyticsNotification)[]
    const out: AnalyticsNotification[] = []
    for (const item of raw) {
      try {
        out.push(typeof item === 'string' ? JSON.parse(item) : item)
      } catch {
        /* skip */
      }
    }
    return out
  }
  return memNotifs.slice(0, limit)
}

export async function getAnalyticsStats(): Promise<AnalyticsStats> {
  const active = await getActiveVisitors()
  const r = getRedis()
  if (r) {
    const day = (await r.hgetall<Record<string, string>>(KEY_DAY(todayKey()))) || {}
    const total = Number(day.total || 0)
    return {
      liveVisitors: active.length,
      totalVisitors: total,
      todayVisitors: total,
      newVisitors: Number(day.new || 0),
      returningVisitors: Number(day.returning || 0),
    }
  }
  const today = new Date().toDateString()
  const todays = Array.from(memVisitors.values()).filter(
    (v) => v.currentVisit && new Date(v.currentVisit).toDateString() === today,
  )
  return {
    liveVisitors: active.length,
    totalVisitors: memVisitors.size,
    todayVisitors: todays.length,
    newVisitors: todays.filter((v) => v.isNewVisitor).length,
    returningVisitors: todays.filter((v) => !v.isNewVisitor).length,
  }
}

export async function getAbandonedCartStats(limit = 20): Promise<AbandonedCartStats> {
  const r = getRedis()
  let carts: AbandonedCartSnapshot[] = []
  let recoveredToday = 0
  if (r) {
    const ids = (await r.zrange(KEY_CARTS, 0, limit - 1, { rev: true })) as string[]
    if (ids.length) {
      const raw = await r.mget<(string | null)[]>(...ids.map((id) => KEY_CART(id)))
      for (const item of raw) {
        if (!item) continue
        try {
          carts.push(typeof item === 'string' ? JSON.parse(item) : (item as AbandonedCartSnapshot))
        } catch {
          /* skip */
        }
      }
    }
    const day = (await r.hgetall<Record<string, string>>(KEY_DAY(todayKey()))) || {}
    recoveredToday = Number(day.recovered || 0)
  } else {
    carts = Array.from(memCarts.values())
      .sort((a, b) => b.updatedAt.localeCompare(a.updatedAt))
      .slice(0, limit)
  }

  const open = carts.filter((c) => c.status === 'abandoned' || c.status === 'active' || c.status === 'checkout_started')
  const openValueAed = open.reduce((sum, c) => sum + (c.cartValueAed || 0), 0)
  return {
    openCount: open.length,
    openValueAed,
    recoveredToday,
    carts,
  }
}
