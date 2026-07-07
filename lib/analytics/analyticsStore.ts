import { Redis } from '@upstash/redis'
import { stripLocaleFromPathname } from '@/lib/i18n/routing'
import { geoFieldKey, geoMetaFromLocation } from '@/lib/geo/geoAnalyticsKey'

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
const KEY_PAGE_HITS = 'bs:av:page_hits' // hash: path -> all-time views
const KEY_PRODUCT_HITS = 'bs:av:product_hits' // hash: v:{id}|c:{id}|a:{id} -> all-time counts
const KEY_PROD_NAMES = 'bs:av:pn' // hash: productId -> display name
const KEY_GEO_DAY = (day: string) => `bs:av:geo:${day}` // hash: location field -> daily signals
const KEY_GEO_META = 'bs:av:geo:meta' // hash: location field -> JSON label/meta (written once)
const KEY_PAGE_DAY = (day: string) => `bs:av:pg:${day}` // hash: path -> daily views
const KEY_PROD_DAY = (day: string) => `bs:av:pd:${day}` // hash: v:{id}|c:{id}|a:{id} -> daily counts

const VISITOR_TTL = 60 * 60 // 1h
const CART_TTL = 60 * 60 * 24 * 3 // 3 days
const DAY_TTL = 60 * 60 * 24 * 40 // ~40 days
const METRICS_DAY_TTL = 60 * 60 * 24 * 14 // auto-expire daily marketing buckets after 14d
const NOTIF_MAX = 100
const ACTIVE_WINDOW_MS = 5 * 60 * 1000
const METRIC_ONLY_TYPES = new Set(['product_view', 'product_click'])

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
  location?: { country?: string; city?: string; region?: string; countryCode?: string } | null
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
const memPageHits = new Map<string, number>()
const memProductHits = new Map<string, ProductEngagementRow>()
const memGeoDay = new Map<string, Map<string, number>>()
const memGeoMeta = new Map<string, GeoMetaStored>()

function todayKey(): string {
  return new Date().toISOString().slice(0, 10)
}

function lastNDays(n: number): string[] {
  const out: string[] = []
  const cursor = new Date()
  for (let i = 0; i < n; i += 1) {
    out.push(cursor.toISOString().slice(0, 10))
    cursor.setUTCDate(cursor.getUTCDate() - 1)
  }
  return out
}

type GeoMetaStored = {
  label: string
  city?: string
  region?: string
  country?: string
  countryCode?: string
}

function productMetricField(field: 'views' | 'clicks' | 'cartAdds', productId: string): string {
  const prefix = field === 'views' ? 'v' : field === 'clicks' ? 'c' : 'a'
  return `${prefix}:${productId}`
}

function parseProductHitFields(raw: Record<string, string>): ProductEngagementRow[] {
  const byId = new Map<string, ProductEngagementRow>()
  for (const [field, value] of Object.entries(raw)) {
    const match = field.match(/^([vca]):(.+)$/)
    if (!match) continue
    const [, kind, productId] = match
    const count = Number(value) || 0
    if (!count) continue
    const row = byId.get(productId) || { productId, name: productId, views: 0, clicks: 0, cartAdds: 0 }
    if (kind === 'v') row.views = count
    if (kind === 'c') row.clicks = count
    if (kind === 'a') row.cartAdds = count
    byId.set(productId, row)
  }
  return Array.from(byId.values())
}

function mergeProductNames(rows: ProductEngagementRow[], names: Record<string, string>): ProductEngagementRow[] {
  return rows.map((row) => ({ ...row, name: names[row.productId] || row.name }))
}

function num(value: unknown): number | undefined {
  if (typeof value === 'number' && Number.isFinite(value)) return value
  if (typeof value === 'string' && value.trim() && Number.isFinite(Number(value))) return Number(value)
  return undefined
}

/** Sanitize visitor blobs read from Redis — malformed legacy payloads must not crash the dashboard. */
function normalizeStoredVisitor(raw: unknown): AnalyticsVisitor | null {
  if (!raw || typeof raw !== 'object') return null
  const data = raw as Record<string, unknown>
  const visitorId = typeof data.visitorId === 'string' ? data.visitorId : ''
  if (!visitorId) return null
  const lastSeen =
    typeof data.lastSeen === 'string' && data.lastSeen.trim()
      ? data.lastSeen
      : new Date().toISOString()
  return {
    visitorId,
    sessionId: typeof data.sessionId === 'string' ? data.sessionId : undefined,
    isNewVisitor: typeof data.isNewVisitor === 'boolean' ? data.isNewVisitor : undefined,
    visitCount: num(data.visitCount),
    currentVisit: typeof data.currentVisit === 'string' ? data.currentVisit : undefined,
    lastSeen,
    location: (data.location as AnalyticsVisitor['location']) ?? null,
    device: (data.device as AnalyticsVisitor['device']) ?? undefined,
    pageViews: Array.isArray(data.pageViews) ? (data.pageViews as AnalyticsVisitor['pageViews']) : [],
    totalTimeOnSite: num(data.totalTimeOnSite) ?? 0,
    referrer: typeof data.referrer === 'string' ? data.referrer : undefined,
    contactInfo: (data.contactInfo as AnalyticsVisitor['contactInfo']) ?? undefined,
    cartEvents: Array.isArray(data.cartEvents) ? (data.cartEvents as AnalyticsVisitor['cartEvents']) : [],
  }
}

const CART_STATUSES = new Set<AbandonedCartSnapshot['status']>([
  'active',
  'abandoned',
  'checkout_started',
  'recovered',
])

function normalizeStoredNotification(raw: unknown): AnalyticsNotification | null {
  if (!raw || typeof raw !== 'object') return null
  const data = raw as Record<string, unknown>
  const id =
    typeof data.id === 'string' && data.id.trim()
      ? data.id
      : `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`
  const type = typeof data.type === 'string' && data.type.trim() ? data.type : 'unknown'
  const timestamp =
    typeof data.timestamp === 'string' && !Number.isNaN(Date.parse(data.timestamp))
      ? data.timestamp
      : new Date().toISOString()
  return {
    id,
    type,
    data: data.data && typeof data.data === 'object' ? (data.data as Record<string, unknown>) : {},
    timestamp,
    read: typeof data.read === 'boolean' ? data.read : false,
  }
}

function normalizeStoredCart(raw: unknown): AbandonedCartSnapshot | null {
  if (!raw || typeof raw !== 'object') return null
  const data = raw as Record<string, unknown>
  const visitorId = typeof data.visitorId === 'string' ? data.visitorId.trim() : ''
  if (!visitorId) return null
  const statusRaw = typeof data.status === 'string' ? data.status : 'active'
  const status = CART_STATUSES.has(statusRaw as AbandonedCartSnapshot['status'])
    ? (statusRaw as AbandonedCartSnapshot['status'])
    : 'active'
  const updatedAt =
    typeof data.updatedAt === 'string' && !Number.isNaN(Date.parse(data.updatedAt))
      ? data.updatedAt
      : new Date().toISOString()
  return {
    visitorId,
    cartValueAed: num(data.cartValueAed),
    cartItems: num(data.cartItems),
    items: Array.isArray(data.items) ? (data.items as AbandonedCartSnapshot['items']) : undefined,
    location: (data.location as AbandonedCartSnapshot['location']) ?? null,
    device: (data.device as AbandonedCartSnapshot['device']) ?? undefined,
    contactEmail: typeof data.contactEmail === 'string' ? data.contactEmail : undefined,
    page: typeof data.page === 'string' ? data.page : undefined,
    updatedAt,
    status,
  }
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

export interface PagePopularityRow {
  path: string
  views: number
}

export interface ProductEngagementRow {
  productId: string
  name: string
  views: number
  clicks: number
  cartAdds: number
}

export interface ContentPopularity {
  pages: PagePopularityRow[]
  products: ProductEngagementRow[]
}

function normalizeAnalyticsPath(rawPath: string): string {
  const pathOnly = rawPath.split(/[?#]/)[0] || '/'
  const { pathname } = stripLocaleFromPathname(pathOnly)
  return pathname || '/'
}

function extractPagePath(data: Record<string, unknown>): string | null {
  const current = data.currentPage as { path?: string } | undefined
  if (current?.path) return normalizeAnalyticsPath(current.path)
  const browser = data.browser as { path?: string } | undefined
  if (browser?.path) return normalizeAnalyticsPath(browser.path)
  if (typeof data.path === 'string') return normalizeAnalyticsPath(data.path)
  return null
}

async function loadGeoMetaMap(r: Redis | null): Promise<Map<string, GeoMetaStored>> {
  const map = new Map<string, GeoMetaStored>()
  if (r) {
    const raw = await r.hgetall<Record<string, string>>(KEY_GEO_META)
    for (const [field, value] of Object.entries(raw || {})) {
      try {
        map.set(field, JSON.parse(value) as GeoMetaStored)
      } catch {
        /* skip */
      }
    }
    return map
  }
  memGeoMeta.forEach((meta, field) => map.set(field, meta))
  return map
}

function rowsFromGeoDay(raw: Record<string, string>, metaMap: Map<string, GeoMetaStored>): VisitorLocationRow[] {
  return Object.entries(raw || {})
    .map(([field, count]) => {
      const meta = metaMap.get(field)
      return {
        location: meta?.label || field,
        count: Number(count) || 0,
        city: meta?.city,
        region: meta?.region,
        country: meta?.country,
        countryCode: meta?.countryCode,
      }
    })
    .filter((row) => row.count > 0)
    .sort((a, b) => b.count - a.count)
}

function bumpGeoMemory(day: string, location: AnalyticsVisitor['location']): void {
  const field = geoFieldKey(location)
  const meta = geoMetaFromLocation(location)
  if (!field || !meta) return
  let dayMap = memGeoDay.get(day)
  if (!dayMap) {
    dayMap = new Map()
    memGeoDay.set(day, dayMap)
  }
  dayMap.set(field, (dayMap.get(field) || 0) + 1)
  if (!memGeoMeta.has(field)) memGeoMeta.set(field, meta)
}

function bumpPageMemory(path: string, day: string): void {
  memPageHits.set(path, (memPageHits.get(path) || 0) + 1)
}

function bumpProductMemory(
  productId: string,
  name: string,
  field: 'views' | 'clicks' | 'cartAdds',
): void {
  const existing = memProductHits.get(productId) || {
    productId,
    name,
    views: 0,
    clicks: 0,
    cartAdds: 0,
  }
  if (name) existing.name = name
  existing[field] += 1
  memProductHits.set(productId, existing)
}

type RedisPipeline = ReturnType<Redis['pipeline']>

function appendProductMetricPipe(
  pipe: RedisPipeline,
  day: string,
  productId: string,
  name: string,
  field: 'views' | 'clicks' | 'cartAdds',
): void {
  const f = productMetricField(field, productId)
  pipe.hincrby(KEY_PRODUCT_HITS, f, 1)
  pipe.hincrby(KEY_PROD_DAY(day), f, 1)
  pipe.expire(KEY_PROD_DAY(day), METRICS_DAY_TTL)
  if (name) pipe.hset(KEY_PROD_NAMES, { [productId]: name })
}

function appendPageViewPipe(pipe: RedisPipeline, path: string, day: string): void {
  pipe.hincrby(KEY_PAGE_HITS, path, 1)
  pipe.hincrby(KEY_PAGE_DAY(day), path, 1)
  pipe.expire(KEY_PAGE_DAY(day), METRICS_DAY_TTL)
}

function appendGeoPipe(pipe: RedisPipeline, location: AnalyticsVisitor['location'], day: string): void {
  const field = geoFieldKey(location)
  const meta = geoMetaFromLocation(location)
  if (!field || !meta) return
  pipe.hincrby(KEY_GEO_DAY(day), field, 1)
  pipe.expire(KEY_GEO_DAY(day), METRICS_DAY_TTL)
  pipe.hsetnx(KEY_GEO_META, field, JSON.stringify(meta))
}

function appendEngagementToPipeline(
  pipe: RedisPipeline,
  type: string,
  data: Record<string, unknown>,
  day: string,
): void {
  if (type === 'page_view') {
    const path = extractPagePath(data)
    if (path) appendPageViewPipe(pipe, path, day)
    return
  }
  if (type === 'product_view') {
    const productId = typeof data.productId === 'string' ? data.productId : ''
    if (!productId) return
    const name = typeof data.productName === 'string' ? data.productName : productId
    appendProductMetricPipe(pipe, day, productId, name, 'views')
    const path = typeof data.path === 'string' ? normalizeAnalyticsPath(data.path) : null
    if (path) appendPageViewPipe(pipe, path, day)
    return
  }
  if (type === 'product_click') {
    const productId = typeof data.productId === 'string' ? data.productId : ''
    if (!productId) return
    const name = typeof data.productName === 'string' ? data.productName : productId
    appendProductMetricPipe(pipe, day, productId, name, 'clicks')
    return
  }
  if (type === 'cart_add') {
    const cartEvent = data.cartEvent as { productId?: string; productName?: string } | undefined
    const productId = cartEvent?.productId
    if (!productId) return
    const name = cartEvent?.productName || productId
    appendProductMetricPipe(pipe, day, productId, name, 'cartAdds')
  }
}

function appendEngagementMemory(type: string, data: Record<string, unknown>, day: string): void {
  if (type === 'page_view') {
    const path = extractPagePath(data)
    if (path) bumpPageMemory(path, day)
    return
  }
  if (type === 'product_view') {
    const productId = typeof data.productId === 'string' ? data.productId : ''
    if (!productId) return
    const name = typeof data.productName === 'string' ? data.productName : productId
    bumpProductMemory(productId, name, 'views')
    const path = typeof data.path === 'string' ? normalizeAnalyticsPath(data.path) : null
    if (path) bumpPageMemory(path, day)
    return
  }
  if (type === 'product_click') {
    const productId = typeof data.productId === 'string' ? data.productId : ''
    if (!productId) return
    const name = typeof data.productName === 'string' ? data.productName : productId
    bumpProductMemory(productId, name, 'clicks')
    return
  }
  if (type === 'cart_add') {
    const cartEvent = data.cartEvent as { productId?: string; productName?: string } | undefined
    const productId = cartEvent?.productId
    if (!productId) return
    const name = cartEvent?.productName || productId
    bumpProductMemory(productId, name, 'cartAdds')
  }
}

export async function getContentPopularity(limit = 10): Promise<ContentPopularity> {
  const r = getRedis()
  if (r) {
    const [pageRaw, productRaw, namesRaw] = await Promise.all([
      r.hgetall<Record<string, string>>(KEY_PAGE_HITS),
      r.hgetall<Record<string, string>>(KEY_PRODUCT_HITS),
      r.hgetall<Record<string, string>>(KEY_PROD_NAMES),
    ])
    const pages = Object.entries(pageRaw || {})
      .map(([path, views]) => ({ path, views: Number(views) || 0 }))
      .sort((a, b) => b.views - a.views)
      .slice(0, limit)
    const products = mergeProductNames(parseProductHitFields(productRaw || {}), namesRaw || {})
      .sort((a, b) => b.views + b.clicks + b.cartAdds - (a.views + a.clicks + a.cartAdds))
      .slice(0, limit)
    return { pages: pages.filter((p) => p.views > 0), products }
  }

  const pages = Array.from(memPageHits.entries())
    .map(([path, views]) => ({ path, views }))
    .sort((a, b) => b.views - a.views)
    .slice(0, limit)
  const products = Array.from(memProductHits.values())
    .sort((a, b) => b.views + b.clicks + b.cartAdds - (a.views + a.clicks + a.cartAdds))
    .slice(0, limit)
  return { pages, products }
}

export async function recordAnalyticsEvent(type: string, rawData: unknown): Promise<void> {
  const data = (rawData && typeof rawData === 'object' ? rawData : {}) as Record<string, unknown>
  const nowMs = Date.now()
  const day = todayKey()
  const skipNotif = METRIC_ONLY_TYPES.has(type)
  const visitor = toVisitor(type, data)
  const cart = toCartSnapshot(type, data)
  const location = data.location as AnalyticsVisitor['location']
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
    appendEngagementToPipeline(pipe, type, data, day)
    if (location) appendGeoPipe(pipe, location, day)
    if (visitor) {
      pipe.set(KEY_VISITOR(visitor.visitorId), JSON.stringify(visitor), { ex: VISITOR_TTL })
      pipe.zadd(KEY_ACTIVE, { score: nowMs, member: visitor.visitorId })
      pipe.zremrangebyscore(KEY_ACTIVE, 0, nowMs - VISITOR_TTL * 1000)
    }
    if (!skipNotif) {
      pipe.lpush(KEY_NOTIF, JSON.stringify(notif))
      pipe.ltrim(KEY_NOTIF, 0, NOTIF_MAX - 1)
    }
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
  appendEngagementMemory(type, data, day)
  if (location) bumpGeoMemory(day, location)
  if (visitor) memVisitors.set(visitor.visitorId, visitor)
  if (!skipNotif) {
    memNotifs.unshift(notif)
    if (memNotifs.length > NOTIF_MAX) memNotifs.length = NOTIF_MAX
  }
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
        const parsed = typeof item === 'string' ? JSON.parse(item) : item
        const visitor = normalizeStoredVisitor(parsed)
        if (visitor) out.push(visitor)
      } catch {
        /* skip */
      }
    }
    return out.sort((a, b) => (b.lastSeen || '').localeCompare(a.lastSeen || ''))
  }
  return Array.from(memVisitors.values())
    .filter((v) => new Date(v.lastSeen).getTime() >= cutoff)
    .sort((a, b) => (b.lastSeen || '').localeCompare(a.lastSeen || ''))
}

export async function getNotifications(limit = NOTIF_MAX): Promise<AnalyticsNotification[]> {
  const r = getRedis()
  if (r) {
    const raw = (await r.lrange(KEY_NOTIF, 0, limit - 1)) as (string | AnalyticsNotification)[]
    const out: AnalyticsNotification[] = []
    for (const item of raw) {
      try {
        const parsed = typeof item === 'string' ? JSON.parse(item) : item
        const notification = normalizeStoredNotification(parsed)
        if (notification) out.push(notification)
      } catch {
        /* skip */
      }
    }
    return out
  }
  return memNotifs.slice(0, limit).map((n) => normalizeStoredNotification(n)).filter((n): n is AnalyticsNotification => Boolean(n))
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
          const parsed = typeof item === 'string' ? JSON.parse(item) : item
          const cart = normalizeStoredCart(parsed)
          if (cart) carts.push(cart)
        } catch {
          /* skip */
        }
      }
    }
    const day = (await r.hgetall<Record<string, string>>(KEY_DAY(todayKey()))) || {}
    recoveredToday = Number(day.recovered || 0)
  } else {
    carts = Array.from(memCarts.values())
      .map((cart) => normalizeStoredCart(cart))
      .filter((cart): cart is AbandonedCartSnapshot => Boolean(cart))
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

export interface VisitorLocationRow {
  location: string
  count: number
  city?: string
  region?: string
  country?: string
  countryCode?: string
}

export interface GeoDayBucket {
  date: string
  locations: VisitorLocationRow[]
}

export interface GeoTrendSeries {
  location: string
  total: number
  daily: Record<string, number>
}

export interface GeoTrendResult {
  days: GeoDayBucket[]
  series: GeoTrendSeries[]
  totals: VisitorLocationRow[]
}

async function readGeoDay(day: string, metaMap: Map<string, GeoMetaStored>, r: Redis | null): Promise<VisitorLocationRow[]> {
  if (r) {
    const raw = await r.hgetall<Record<string, string>>(KEY_GEO_DAY(day))
    return rowsFromGeoDay(raw || {}, metaMap)
  }
  const dayMap = memGeoDay.get(day)
  if (!dayMap) return []
  const raw: Record<string, string> = {}
  dayMap.forEach((count, field) => {
    raw[field] = String(count)
  })
  return rowsFromGeoDay(raw, metaMap)
}

/** Last N days of IP-derived geography — one Redis read per day (+ meta once). */
export async function getGeoTrend(days = 7): Promise<GeoTrendResult> {
  const r = getRedis()
  const dayKeys = lastNDays(days).reverse()
  const metaMap = await loadGeoMetaMap(r)
  const buckets: GeoDayBucket[] = []
  const totalsMap = new Map<string, VisitorLocationRow>()
  const seriesDaily = new Map<string, Record<string, number>>()

  for (const date of dayKeys) {
    const locations = await readGeoDay(date, metaMap, r)
    buckets.push({ date, locations })
    for (const row of locations) {
      const key = row.location.toLowerCase()
      const existing = totalsMap.get(key)
      if (existing) existing.count += row.count
      else totalsMap.set(key, { ...row })
      const daily = seriesDaily.get(key) || {}
      daily[date] = (daily[date] || 0) + row.count
      seriesDaily.set(key, daily)
    }
  }

  const totals = Array.from(totalsMap.values()).sort((a, b) => b.count - a.count)
  const series: GeoTrendSeries[] = totals.slice(0, 6).map((row) => ({
    location: row.location,
    total: row.count,
    daily: seriesDaily.get(row.location.toLowerCase()) || {},
  }))

  return { days: buckets, series, totals }
}

/** Today’s geo roll-up — cheap single-day read for the dashboard table. */
export async function getVisitorLocationOverview(limit = 12): Promise<VisitorLocationRow[]> {
  const r = getRedis()
  const metaMap = await loadGeoMetaMap(r)
  const rows = await readGeoDay(todayKey(), metaMap, r)
  return rows.slice(0, limit)
}
