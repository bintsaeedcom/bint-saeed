'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FiUsers, FiUserPlus, FiUserCheck, FiShoppingCart,
  FiEye, FiMapPin, FiClock, FiMail,
  FiRefreshCw, FiBell, FiX, FiSmartphone,
  FiMonitor, FiTablet, FiAlertTriangle, FiCheckCircle, FiActivity, FiExternalLink,
  FiPackage, FiTrendingUp, FiTruck, FiShoppingBag, FiChevronRight,
} from 'react-icons/fi'
import type { StoredOrder } from '@/lib/orders/types'
import type { CustomerRecord } from '@/lib/customers/types'

interface Visitor {
  visitorId: string
  sessionId: string
  isNewVisitor: boolean
  visitCount: number
  currentVisit: string
  lastSeen: string
  location: { country: string; city: string; countryCode: string } | null
  device: { type: 'mobile' | 'tablet' | 'desktop'; browser: string; os: string }
  pageViews: { path: string; title: string; timestamp: string; timeOnPage: number }[]
  totalTimeOnSite: number
  referrer: string
  contactInfo?: { email?: string; phone?: string; name?: string }
  cartEvents: { action: string; productName: string; timestamp: string }[]
}

interface Notification {
  id: string
  type: string
  data: any
  timestamp: string
  read: boolean
}

interface AbandonedCart {
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

interface AbandonedStats {
  openCount: number
  openValueAed: number
  recoveredToday: number
  carts: AbandonedCart[]
}

interface CheckoutHealth {
  ok: boolean
  checkedAt: string
  mode: 'live' | 'test' | 'mixed' | 'unknown'
  env: string
  checkout: {
    publishableConfigured: boolean
    secretConfigured: boolean
    webhookConfigured: boolean
    siteUrlConfigured: boolean
    allowedOrigins: string[]
  }
  stripe: { apiReachable: boolean; accountId: string | null; error: string | null }
  warnings: string[]
}

interface OpsHealth {
  ok: boolean
  checkedAt: string
  auth: {
    googleOAuthConfigured: boolean
    sessionSecretConfigured: boolean
    redisConfigured: boolean
    resendConfigured: boolean
    resendFromConfigured: boolean
    siteUrlConfigured: boolean
    googleRedirectUri: string | null
    googleReady: boolean
    emailRegisterReady: boolean
  }
  newsletter: {
    mailerliteConfigured: boolean
    groupIdConfigured: boolean
    slackConfigured: boolean
    apiReachable: boolean
    error: string | null
    ready: boolean
  }
  orders?: {
    redisConfigured: boolean
    ownerAlertEmailConfigured: boolean
    ownerAlertRecipient: string
    slackOrdersConfigured: boolean
    trelloConfigured: boolean
    customerConfirmationConfigured: boolean
    ready: boolean
  }
  warnings: string[]
}

interface ProductAdminRow {
  id: string
  name: string
  price: number
  category: string
  image: string
  override: { price?: number; name?: string; published?: boolean }
}

function beep() {
  if (typeof window === 'undefined') return
  const Ctx = window.AudioContext || (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext
  if (!Ctx) return
  const ctx = new Ctx()
  const osc = ctx.createOscillator()
  const gain = ctx.createGain()
  osc.type = 'sine'
  osc.frequency.value = 880
  gain.gain.value = 0.06
  osc.connect(gain)
  gain.connect(ctx.destination)
  osc.start()
  osc.stop(ctx.currentTime + 0.18)
  osc.onended = () => ctx.close()
}

function formatTime(seconds: number) {
  if (!seconds) return '0s'
  if (seconds < 60) return `${seconds}s`
  const mins = Math.floor(seconds / 60)
  if (mins < 60) return `${mins}m`
  const hours = Math.floor(mins / 60)
  return `${hours}h ${mins % 60}m`
}

function timeAgo(iso: string) {
  const diff = Date.now() - new Date(iso).getTime()
  const mins = Math.floor(diff / 60000)
  if (mins < 1) return 'just now'
  if (mins < 60) return `${mins}m ago`
  const hours = Math.floor(mins / 60)
  if (hours < 24) return `${hours}h ago`
  return `${Math.floor(hours / 24)}d ago`
}

export default function AdminDashboard() {
  const gaMeasurementId = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID?.trim() ?? ''
  const gaConfigured = gaMeasurementId.startsWith('G-')
  const [activeVisitors, setActiveVisitors] = useState<Visitor[]>([])
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [stats, setStats] = useState({ liveVisitors: 0, totalVisitors: 0, todayVisitors: 0, newVisitors: 0, returningVisitors: 0 })
  const [selectedVisitor, setSelectedVisitor] = useState<Visitor | null>(null)
  const [showNotifications, setShowNotifications] = useState(false)
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [checkoutHealth, setCheckoutHealth] = useState<CheckoutHealth | null>(null)
  const [opsHealth, setOpsHealth] = useState<OpsHealth | null>(null)
  const [orders, setOrders] = useState<StoredOrder[]>([])
  const [customers, setCustomers] = useState<CustomerRecord[]>([])
  const [products, setProducts] = useState<ProductAdminRow[]>([])
  const [abandoned, setAbandoned] = useState<AbandonedStats | null>(null)
  const [commerceReady, setCommerceReady] = useState(false)
  const [newOrderAlert, setNewOrderAlert] = useState<StoredOrder | null>(null)
  const knownOrderIds = useRef<Set<string> | null>(null)

  const fetchData = async () => {
    setIsRefreshing(true)
    try {
      const [activeRes, notifRes, statsRes, abandonedRes] = await Promise.all([
        fetch('/api/analytics/slack?type=active'),
        fetch('/api/analytics/slack?type=notifications'),
        fetch('/api/analytics/slack'),
        fetch('/api/analytics/slack?type=abandoned'),
      ])
      const [activeData, notifData, statsData, abandonedData] = await Promise.all([
        activeRes.json(), notifRes.json(), statsRes.json(), abandonedRes.json(),
      ])
      setActiveVisitors(activeData.activeVisitors || [])
      setNotifications(notifData.notifications || [])
      if (statsRes.ok) setStats(statsData)
      if (abandonedRes.ok) setAbandoned(abandonedData as AbandonedStats)

      const checkoutRes = await fetch('/api/admin/checkout-health')
      const checkoutData = await checkoutRes.json()
      setCheckoutHealth(checkoutRes.ok ? (checkoutData as CheckoutHealth) : null)

      const opsRes = await fetch('/api/admin/ops-health')
      const opsData = await opsRes.json()
      setOpsHealth(opsRes.ok ? (opsData as OpsHealth) : null)

      const [ordersRes, customersRes, productsRes] = await Promise.all([
        fetch('/api/admin/orders'),
        fetch('/api/admin/customers?limit=500'),
        fetch('/api/admin/products/overrides'),
      ])
      const [ordersData, customersData, productsData] = await Promise.all([
        ordersRes.json(), customersRes.json(), productsRes.json(),
      ])

      if (ordersRes.ok) {
        const nextOrders: StoredOrder[] = ordersData.orders || []
        if (knownOrderIds.current === null) {
          knownOrderIds.current = new Set(nextOrders.map((o) => o.id))
        } else {
          const fresh = nextOrders.filter((o) => !knownOrderIds.current!.has(o.id))
          if (fresh.length > 0) {
            setNewOrderAlert(fresh[0])
            try { beep() } catch { /* needs prior gesture */ }
          }
          for (const o of nextOrders) knownOrderIds.current.add(o.id)
        }
        setOrders(nextOrders)
      }
      if (customersRes.ok) setCustomers(customersData.customers || [])
      if (productsRes.ok) setProducts(productsData.products || [])
      setCommerceReady(ordersRes.ok && customersRes.ok && productsRes.ok)
    } catch {
      setCommerceReady(false)
    }
    setIsRefreshing(false)
  }

  useEffect(() => {
    fetchData()
    const interval = setInterval(fetchData, 10000)
    return () => clearInterval(interval)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const base = 'Dashboard · Bint Saeed'
    document.title = newOrderAlert ? `🔔 New order — ${base}` : base
    return () => { document.title = base }
  }, [newOrderAlert])

  const orderStatusCounts = orders.reduce<Record<string, number>>((acc, order) => {
    acc[order.fulfillmentStatus] = (acc[order.fulfillmentStatus] || 0) + 1
    return acc
  }, {})
  const totalRevenue = orders.reduce((sum, o) => sum + (o.amountTotal || 0), 0)
  const recentRevenue = orders
    .filter((o) => Date.now() - new Date(o.createdAt).getTime() <= 7 * 24 * 3600 * 1000)
    .reduce((sum, o) => sum + (o.amountTotal || 0), 0)
  const publishedProducts = products.filter((p) => p.override.published !== false).length
  const draftProducts = Math.max(0, products.length - publishedProducts)
  const avgOrderValue = orders.length > 0 ? totalRevenue / orders.length : 0
  const needsAttention =
    (orderStatusCounts.paid || 0) + (orderStatusCounts.processing || 0) + (orderStatusCounts.ready_to_ship || 0)
  const latestOrders = [...orders]
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, 8)
  const unreadCount = notifications.filter((n) => !n.read).length
  const storageMode = opsHealth?.orders?.redisConfigured ? 'Redis (persistent)' : 'Memory (temporary)'

  const money = (n: number) => `AED ${n.toLocaleString('en-AE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      {/* Top bar */}
      <header className="sticky top-0 z-30 border-b border-neutral-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3.5">
          <div className="flex items-center gap-3">
            <div>
              <p className="font-montserrat text-[10px] uppercase tracking-[0.28em] text-neutral-400">Bint Saeed</p>
              <h1 data-document-h1="true" className="font-montserrat text-lg font-semibold tracking-tight text-neutral-900">
                Dashboard
              </h1>
            </div>
            <span className="hidden items-center gap-1.5 rounded-full border border-neutral-200 bg-neutral-50 px-2.5 py-1 text-[11px] font-medium text-neutral-500 sm:inline-flex">
              <span className={`h-1.5 w-1.5 rounded-full ${opsHealth?.orders?.redisConfigured ? 'bg-emerald-500' : 'bg-amber-500'}`} />
              {storageMode}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative rounded-lg border border-neutral-200 bg-white p-2 text-neutral-600 transition-colors hover:bg-neutral-50"
              aria-label="Notifications"
            >
              <FiBell className="h-4 w-4" />
              {unreadCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-rose-500 px-1 text-[10px] font-semibold text-white">
                  {unreadCount}
                </span>
              )}
            </button>
            <button
              onClick={fetchData}
              className="inline-flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-3 py-2 text-xs font-medium text-neutral-600 transition-colors hover:bg-neutral-50"
            >
              <FiRefreshCw className={`h-3.5 w-3.5 ${isRefreshing ? 'animate-spin' : ''}`} />
              Refresh
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl space-y-5 px-5 py-6">
        {/* New order alert */}
        <AnimatePresence>
          {newOrderAlert && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex flex-col gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex items-center gap-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-emerald-900">
                    New order — {newOrderAlert.currency} {newOrderAlert.amountTotal.toFixed(2)}
                  </p>
                  <p className="text-xs text-emerald-700">{newOrderAlert.id} · {newOrderAlert.customerEmail || 'Unknown'}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Link href="/admin/orders" className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-emerald-700">
                  <FiTruck className="h-3.5 w-3.5" /> View order
                </Link>
                <button onClick={() => setNewOrderAlert(null)} className="rounded-lg border border-emerald-200 p-1.5 text-emerald-700 hover:bg-emerald-100" aria-label="Dismiss">
                  <FiX className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* KPI row */}
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
          <Kpi label="Revenue (all time)" value={money(totalRevenue)} icon={<FiTrendingUp />} />
          <Kpi label="Revenue (7 days)" value={money(recentRevenue)} icon={<FiActivity />} />
          <Kpi label="Avg order value" value={money(avgOrderValue)} icon={<FiShoppingCart />} />
          <Kpi label="Orders to fulfil" value={String(needsAttention)} icon={<FiPackage />} tone={needsAttention > 0 ? 'alert' : 'default'} />
          <Kpi label="Live visitors" value={String(stats.liveVisitors)} icon={<FiEye />} live />
          <Kpi label="Today's visitors" value={String(stats.todayVisitors)} icon={<FiUsers />} />
        </div>

        {/* Main grid */}
        <div className="grid gap-5 lg:grid-cols-3">
          {/* Latest orders */}
          <section className="lg:col-span-2">
            <Card>
              <CardHeader
                title="Latest orders"
                subtitle={`${orders.length} total · ${needsAttention} awaiting fulfilment`}
                action={<CardLink href="/admin/orders" label="Orders Hub" />}
              />
              {latestOrders.length === 0 ? (
                <EmptyState icon={<FiPackage />} text="No orders yet. New paid orders appear here instantly and you're alerted." />
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[560px] text-left text-sm">
                    <thead>
                      <tr className="border-b border-neutral-100 text-[10px] uppercase tracking-wider text-neutral-400">
                        <th className="px-4 py-2.5 font-medium">Order</th>
                        <th className="px-4 py-2.5 font-medium">Customer</th>
                        <th className="px-4 py-2.5 font-medium">Total</th>
                        <th className="px-4 py-2.5 font-medium">Status</th>
                        <th className="px-4 py-2.5 font-medium">Placed</th>
                      </tr>
                    </thead>
                    <tbody>
                      {latestOrders.map((o) => (
                        <tr key={o.id} className="border-b border-neutral-50 last:border-0 hover:bg-neutral-50">
                          <td className="px-4 py-2.5 font-mono text-xs text-neutral-500">{o.id}</td>
                          <td className="max-w-[180px] truncate px-4 py-2.5 text-neutral-700">{o.customerEmail || '—'}</td>
                          <td className="whitespace-nowrap px-4 py-2.5 font-medium tabular-nums text-neutral-900">{o.currency} {o.amountTotal.toFixed(2)}</td>
                          <td className="px-4 py-2.5"><StatusBadge status={o.fulfillmentStatus} /></td>
                          <td className="whitespace-nowrap px-4 py-2.5 text-xs text-neutral-400">{timeAgo(o.createdAt)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </Card>
          </section>

          {/* Recent activity */}
          <section>
            <Card className="flex h-full flex-col">
              <CardHeader title="Recent activity" subtitle="Live visitor & cart events" />
              <div className="max-h-[360px] flex-1 divide-y divide-neutral-50 overflow-y-auto">
                {notifications.length === 0 ? (
                  <EmptyState icon={<FiActivity />} text="No activity captured yet." />
                ) : (
                  notifications.slice(0, 25).map((n) => (
                    <div key={n.id} className="flex items-start gap-2.5 px-4 py-2.5">
                      <span className="mt-0.5 text-sm">{notifIcon(n.type)}</span>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-xs font-medium text-neutral-800">{prettyType(n.type)}</p>
                        <p className="text-[11px] text-neutral-400">
                          {n.data?.location?.city || n.data?.cartEvent?.productName || 'Unknown'} · {timeAgo(n.timestamp)}
                        </p>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </Card>
          </section>
        </div>

        {/* Abandoned carts */}
        <section>
          <Card>
            <CardHeader
              title="Abandoned carts"
              subtitle="Bags with items that haven't converted to a paid order yet"
            />
            <div className="grid gap-3 px-4 pb-2 sm:grid-cols-3">
              <MiniStat label="Open carts" value={String(abandoned?.openCount ?? 0)} tone={abandoned && abandoned.openCount > 0 ? 'alert' : 'default'} />
              <MiniStat label="Value at risk" value={money(abandoned?.openValueAed ?? 0)} />
              <MiniStat label="Recovered today" value={String(abandoned?.recoveredToday ?? 0)} tone="good" />
            </div>
            {abandoned && abandoned.carts.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full min-w-[560px] text-left text-sm">
                  <thead>
                    <tr className="border-b border-neutral-100 text-[10px] uppercase tracking-wider text-neutral-400">
                      <th className="px-4 py-2.5 font-medium">Visitor</th>
                      <th className="px-4 py-2.5 font-medium">Items</th>
                      <th className="px-4 py-2.5 font-medium">Value</th>
                      <th className="px-4 py-2.5 font-medium">Stage</th>
                      <th className="px-4 py-2.5 font-medium">Updated</th>
                    </tr>
                  </thead>
                  <tbody>
                    {abandoned.carts.slice(0, 10).map((c) => (
                      <tr key={c.visitorId} className="border-b border-neutral-50 last:border-0 hover:bg-neutral-50">
                        <td className="px-4 py-2.5">
                          <p className="font-mono text-xs text-neutral-500">{c.visitorId.slice(0, 10)}</p>
                          {c.contactEmail && <p className="text-[11px] text-neutral-400">{c.contactEmail}</p>}
                        </td>
                        <td className="max-w-[200px] truncate px-4 py-2.5 text-xs text-neutral-600">
                          {c.items?.map((i) => `${i.quantity ?? 1}× ${i.name || 'Item'}`).join(', ') || `${c.cartItems ?? 0} item(s)`}
                        </td>
                        <td className="whitespace-nowrap px-4 py-2.5 font-medium tabular-nums text-neutral-900">{c.cartValueAed ? money(c.cartValueAed) : '—'}</td>
                        <td className="px-4 py-2.5"><CartStageBadge status={c.status} /></td>
                        <td className="whitespace-nowrap px-4 py-2.5 text-xs text-neutral-400">{timeAgo(c.updatedAt)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <EmptyState icon={<FiShoppingBag />} text="No abandoned carts tracked yet. Cart and checkout events populate this in real time." />
            )}
            <p className="border-t border-neutral-100 px-4 py-3 text-[11px] leading-relaxed text-neutral-400">
              <strong className="text-neutral-500">How to read this:</strong> a cart becomes “abandoned” when a shopper adds items or starts
              checkout but doesn’t pay. “Value at risk” is the total AED sitting in open bags — recover it with a follow-up. “Recovered today”
              counts carts that later became paid orders.
            </p>
          </Card>
        </section>

        {/* Live visitors */}
        <section>
          <Card>
            <CardHeader
              title={`Live visitors (${activeVisitors.length})`}
              subtitle="Active in the last 5 minutes"
            />
            {activeVisitors.length === 0 ? (
              <EmptyState icon={<FiUsers />} text="No active visitors right now." />
            ) : (
              <div className="max-h-[420px] divide-y divide-neutral-50 overflow-y-auto">
                {activeVisitors.map((v) => (
                  <button
                    key={v.visitorId}
                    onClick={() => setSelectedVisitor(v)}
                    className="flex w-full items-center justify-between gap-4 px-4 py-3 text-left transition-colors hover:bg-neutral-50"
                  >
                    <div className="flex items-center gap-3">
                      <span className={`flex h-8 w-8 items-center justify-center rounded-full ${v.isNewVisitor ? 'bg-violet-100 text-violet-600' : 'bg-sky-100 text-sky-600'}`}>
                        {v.isNewVisitor ? <FiUserPlus className="h-4 w-4" /> : <FiUserCheck className="h-4 w-4" />}
                      </span>
                      <div>
                        <p className="text-sm font-medium text-neutral-800">
                          {v.location ? `${v.location.city}, ${v.location.country}` : 'Unknown location'}
                        </p>
                        <div className="flex items-center gap-2.5 text-[11px] text-neutral-400">
                          <span className="inline-flex items-center gap-1">{deviceIcon(v.device?.type)}{v.device?.browser}</span>
                          <span className="inline-flex items-center gap-1"><FiClock className="h-3 w-3" />{formatTime(v.totalTimeOnSite)}</span>
                          <span className="inline-flex items-center gap-1"><FiEye className="h-3 w-3" />{v.pageViews?.length || 0}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {v.cartEvents?.filter((e) => e.action === 'add').length > 0 && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2 py-0.5 text-[11px] text-amber-600">
                          <FiShoppingCart className="h-3 w-3" />{v.cartEvents.filter((e) => e.action === 'add').length}
                        </span>
                      )}
                      <FiChevronRight className="h-4 w-4 text-neutral-300" />
                    </div>
                  </button>
                ))}
              </div>
            )}
          </Card>
        </section>

        {/* System status */}
        <section className="space-y-3">
          <h2 className="px-1 text-[11px] font-semibold uppercase tracking-wider text-neutral-400">System status</h2>
          <div className="grid gap-4 lg:grid-cols-2">
            {/* Commerce + order alerts */}
            <Card>
              <CardHeader
                title="Commerce & order alerts"
                action={<StatusChip ok={commerceReady} okLabel="Connected" badLabel="Partial" />}
              />
              <div className="grid grid-cols-2 gap-2 px-4 pb-3 sm:grid-cols-3">
                <Pill label="Orders API" ok={commerceReady} />
                <Pill label="Customers API" ok={commerceReady} />
                <Pill label="Catalog API" ok={commerceReady} />
                <Pill label="Owner email alert" ok={Boolean(opsHealth?.orders?.ownerAlertEmailConfigured)} />
                <Pill label="Slack orders" ok={Boolean(opsHealth?.orders?.slackOrdersConfigured)} />
                <Pill label="Persistent storage" ok={Boolean(opsHealth?.orders?.redisConfigured)} />
              </div>
              <div className="flex items-center justify-between border-t border-neutral-100 px-4 py-2.5 text-[11px] text-neutral-400">
                <span>
                  {opsHealth?.orders?.ready ? 'You will be notified of every order.' : 'No order alert channel is live.'}
                </span>
                {opsHealth?.orders?.ownerAlertEmailConfigured && (
                  <span className="truncate text-neutral-500">{opsHealth.orders.ownerAlertRecipient}</span>
                )}
              </div>
            </Card>

            {/* Fulfilment pipeline + catalog */}
            <Card>
              <CardHeader title="Fulfilment & catalog" action={<CardLink href="/admin/products" label="Catalog" />} />
              <div className="grid grid-cols-3 gap-2 px-4 pb-3">
                <MiniStat label="Paid" value={String(orderStatusCounts.paid || 0)} />
                <MiniStat label="Processing" value={String(orderStatusCounts.processing || 0)} />
                <MiniStat label="Ready" value={String(orderStatusCounts.ready_to_ship || 0)} />
                <MiniStat label="Shipped" value={String(orderStatusCounts.shipped || 0)} />
                <MiniStat label="Delivered" value={String(orderStatusCounts.delivered || 0)} />
                <MiniStat label="Refunded" value={String(orderStatusCounts.refunded || 0)} />
              </div>
              <div className="flex items-center gap-4 border-t border-neutral-100 px-4 py-2.5 text-[11px] text-neutral-500">
                <span>{publishedProducts} published</span>
                <span>{draftProducts} draft/hidden</span>
                <span>{customers.length} customers</span>
              </div>
            </Card>

            {/* Stripe */}
            <Card>
              <CardHeader
                title="Stripe checkout"
                subtitle={checkoutHealth ? `${checkoutHealth.env} · ${checkoutHealth.mode} mode` : 'Diagnostics'}
                action={checkoutHealth ? <StatusChip ok={checkoutHealth.ok} okLabel="Ready" badLabel="Setup" /> : null}
              />
              {checkoutHealth ? (
                <div className="grid grid-cols-2 gap-2 px-4 pb-4 sm:grid-cols-3">
                  <Pill label="Publishable key" ok={checkoutHealth.checkout.publishableConfigured} />
                  <Pill label="Secret key" ok={checkoutHealth.checkout.secretConfigured} />
                  <Pill label="Webhook" ok={checkoutHealth.checkout.webhookConfigured} />
                  <Pill label="Site URL" ok={checkoutHealth.checkout.siteUrlConfigured || checkoutHealth.env !== 'production'} />
                  <Pill label="Stripe API" ok={checkoutHealth.stripe.apiReachable || checkoutHealth.env !== 'production'} />
                  <Pill label="Mode match" ok={checkoutHealth.mode !== 'mixed' && checkoutHealth.mode !== 'unknown'} />
                </div>
              ) : (
                <EmptyState icon={<FiAlertTriangle />} text="Could not load checkout diagnostics." />
              )}
            </Card>

            {/* Auth, email & GA */}
            <Card>
              <CardHeader
                title="Auth, email & analytics"
                action={opsHealth ? <StatusChip ok={opsHealth.ok} okLabel="Ready" badLabel="Setup" /> : null}
              />
              {opsHealth ? (
                <div className="grid grid-cols-2 gap-2 px-4 pb-4 sm:grid-cols-3">
                  <Pill label="Google OAuth" ok={opsHealth.auth.googleOAuthConfigured} />
                  <Pill label="Session secret" ok={opsHealth.auth.sessionSecretConfigured} />
                  <Pill label="Upstash Redis" ok={opsHealth.auth.redisConfigured} />
                  <Pill label="Resend email" ok={opsHealth.auth.resendConfigured} />
                  <Pill label="MailerLite" ok={opsHealth.newsletter.apiReachable} />
                  <Pill label="GA4 tracking" ok={gaConfigured} />
                </div>
              ) : (
                <EmptyState icon={<FiAlertTriangle />} text="Could not load ops diagnostics." />
              )}
            </Card>
          </div>
        </section>
      </main>

      {/* Visitor detail modal */}
      <AnimatePresence>
        {selectedVisitor && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-900/40 p-4"
            onClick={() => setSelectedVisitor(null)}
          >
            <motion.div
              initial={{ scale: 0.97, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.97, opacity: 0 }}
              className="max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-xl bg-white shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b border-neutral-100 px-5 py-4">
                <div>
                  <h2 className="text-base font-semibold text-neutral-900">Visitor detail</h2>
                  <p className="font-mono text-[11px] text-neutral-400">{selectedVisitor.visitorId}</p>
                </div>
                <button onClick={() => setSelectedVisitor(null)} className="rounded-lg p-2 text-neutral-400 hover:bg-neutral-100">
                  <FiX className="h-4 w-4" />
                </button>
              </div>
              <div className="space-y-5 p-5">
                <div className="grid gap-3 sm:grid-cols-2">
                  <InfoTile icon={<FiMapPin />} label="Location" value={selectedVisitor.location ? `${selectedVisitor.location.city}, ${selectedVisitor.location.country}` : 'Unknown'} />
                  <InfoTile icon={deviceIcon(selectedVisitor.device?.type)} label="Device" value={`${selectedVisitor.device?.type || '—'} · ${selectedVisitor.device?.browser || ''}`} />
                </div>
                {selectedVisitor.contactInfo && (
                  <div className="rounded-lg border border-emerald-100 bg-emerald-50 p-3">
                    <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-emerald-700">Contact captured</p>
                    <div className="grid gap-2 text-sm sm:grid-cols-3">
                      {selectedVisitor.contactInfo.name && <div><span className="text-[11px] text-emerald-600">Name</span><p className="text-neutral-800">{selectedVisitor.contactInfo.name}</p></div>}
                      {selectedVisitor.contactInfo.email && <div><span className="text-[11px] text-emerald-600">Email</span><p className="text-neutral-800">{selectedVisitor.contactInfo.email}</p></div>}
                      {selectedVisitor.contactInfo.phone && <div><span className="text-[11px] text-emerald-600">Phone</span><p className="text-neutral-800">{selectedVisitor.contactInfo.phone}</p></div>}
                    </div>
                  </div>
                )}
                <div className="grid grid-cols-4 gap-3">
                  <InfoStat value={String(selectedVisitor.visitCount)} label="Visits" />
                  <InfoStat value={formatTime(selectedVisitor.totalTimeOnSite)} label="On site" />
                  <InfoStat value={String(selectedVisitor.pageViews?.length || 0)} label="Pages" />
                  <InfoStat value={String(selectedVisitor.cartEvents?.filter((e) => e.action === 'add').length || 0)} label="Cart adds" />
                </div>
                {selectedVisitor.pageViews?.length > 0 && (
                  <div>
                    <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-neutral-400">Page journey</p>
                    <div className="space-y-1.5">
                      {selectedVisitor.pageViews.map((pv, i) => (
                        <div key={i} className="flex items-center gap-3 rounded-lg bg-neutral-50 px-3 py-2">
                          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-neutral-900 text-[10px] text-white">{i + 1}</span>
                          <div className="min-w-0 flex-1">
                            <p className="truncate text-sm text-neutral-800">{pv.title || pv.path}</p>
                            <p className="text-[11px] text-neutral-400">{pv.timeOnPage}s on page</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Notifications drawer */}
      <AnimatePresence>
        {showNotifications && (
          <motion.div
            initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.25 }}
            className="fixed right-0 top-0 z-50 flex h-full w-full max-w-sm flex-col border-l border-neutral-200 bg-white shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-neutral-100 px-5 py-4">
              <h2 className="text-base font-semibold text-neutral-900">Notifications</h2>
              <button onClick={() => setShowNotifications(false)} className="rounded-lg p-2 text-neutral-400 hover:bg-neutral-100">
                <FiX className="h-4 w-4" />
              </button>
            </div>
            <div className="flex-1 divide-y divide-neutral-50 overflow-y-auto">
              {notifications.length === 0 ? (
                <EmptyState icon={<FiBell />} text="No notifications yet." />
              ) : (
                notifications.map((n) => (
                  <div key={n.id} className="flex items-start gap-3 px-5 py-3">
                    <span className="text-base">{notifIcon(n.type)}</span>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium text-neutral-800">{prettyType(n.type)}</p>
                      <p className="text-[11px] text-neutral-400">
                        {[n.data?.location?.city, n.data?.location?.country].filter(Boolean).join(', ') || 'Unknown'}
                      </p>
                      <p className="mt-0.5 text-[11px] text-neutral-300">{new Date(n.timestamp).toLocaleString()}</p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

/* ---------- UI primitives ---------- */

function Card({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`overflow-hidden rounded-xl border border-neutral-200 bg-white ${className}`}>{children}</div>
}

function CardHeader({ title, subtitle, action }: { title: string; subtitle?: string; action?: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-3 border-b border-neutral-100 px-4 py-3">
      <div>
        <h3 className="text-sm font-semibold text-neutral-900">{title}</h3>
        {subtitle && <p className="text-[11px] text-neutral-400">{subtitle}</p>}
      </div>
      {action}
    </div>
  )
}

function CardLink({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href} className="inline-flex items-center gap-1 text-xs font-medium text-neutral-500 hover:text-neutral-900">
      {label} <FiExternalLink className="h-3 w-3" />
    </Link>
  )
}

function Kpi({ label, value, icon, tone = 'default', live = false }: { label: string; value: string; icon: React.ReactNode; tone?: 'default' | 'alert'; live?: boolean }) {
  return (
    <div className="rounded-xl border border-neutral-200 bg-white p-3.5">
      <div className="flex items-center justify-between">
        <span className="text-neutral-300">{icon}</span>
        {live && <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />}
      </div>
      <p className={`mt-2 text-xl font-semibold tabular-nums ${tone === 'alert' ? 'text-rose-600' : 'text-neutral-900'}`}>{value}</p>
      <p className="mt-0.5 text-[11px] uppercase tracking-wide text-neutral-400">{label}</p>
    </div>
  )
}

function MiniStat({ label, value, tone = 'default' }: { label: string; value: string; tone?: 'default' | 'alert' | 'good' }) {
  const color = tone === 'alert' ? 'text-rose-600' : tone === 'good' ? 'text-emerald-600' : 'text-neutral-900'
  return (
    <div className="rounded-lg border border-neutral-100 bg-neutral-50 px-3 py-2">
      <p className="text-[10px] uppercase tracking-wide text-neutral-400">{label}</p>
      <p className={`mt-0.5 text-base font-semibold tabular-nums ${color}`}>{value}</p>
    </div>
  )
}

function Pill({ label, ok }: { label: string; ok: boolean }) {
  return (
    <div className={`flex items-center gap-1.5 rounded-lg border px-2.5 py-1.5 ${ok ? 'border-emerald-100 bg-emerald-50' : 'border-amber-100 bg-amber-50'}`}>
      <span className={`h-1.5 w-1.5 rounded-full ${ok ? 'bg-emerald-500' : 'bg-amber-500'}`} />
      <span className="truncate text-[11px] font-medium text-neutral-600">{label}</span>
    </div>
  )
}

function StatusChip({ ok, okLabel, badLabel }: { ok: boolean; okLabel: string; badLabel: string }) {
  return (
    <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-medium ${ok ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'}`}>
      {ok ? <FiCheckCircle className="h-3 w-3" /> : <FiAlertTriangle className="h-3 w-3" />}
      {ok ? okLabel : badLabel}
    </span>
  )
}

function StatusBadge({ status }: { status: string }) {
  const tone: Record<string, string> = {
    paid: 'bg-emerald-50 text-emerald-700',
    processing: 'bg-amber-50 text-amber-700',
    ready_to_ship: 'bg-sky-50 text-sky-700',
    shipped: 'bg-indigo-50 text-indigo-700',
    delivered: 'bg-neutral-100 text-neutral-600',
    cancelled: 'bg-neutral-100 text-neutral-500',
    refunded: 'bg-rose-50 text-rose-700',
  }
  const label = status.replace(/_/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())
  return <span className={`inline-block rounded-full px-2 py-0.5 text-[11px] font-medium ${tone[status] || 'bg-neutral-100 text-neutral-600'}`}>{label}</span>
}

function CartStageBadge({ status }: { status: string }) {
  const map: Record<string, { label: string; cls: string }> = {
    active: { label: 'In cart', cls: 'bg-sky-50 text-sky-700' },
    abandoned: { label: 'Abandoned', cls: 'bg-rose-50 text-rose-700' },
    checkout_started: { label: 'Checkout started', cls: 'bg-amber-50 text-amber-700' },
    recovered: { label: 'Recovered', cls: 'bg-emerald-50 text-emerald-700' },
  }
  const item = map[status] || { label: status, cls: 'bg-neutral-100 text-neutral-600' }
  return <span className={`inline-block rounded-full px-2 py-0.5 text-[11px] font-medium ${item.cls}`}>{item.label}</span>
}

function EmptyState({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-10 text-center">
      <span className="mb-2 text-neutral-300 [&>svg]:h-6 [&>svg]:w-6">{icon}</span>
      <p className="max-w-xs text-xs text-neutral-400">{text}</p>
    </div>
  )
}

function InfoTile({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-lg border border-neutral-100 bg-neutral-50 p-3">
      <div className="mb-1 flex items-center gap-1.5 text-neutral-400">
        <span className="[&>svg]:h-3.5 [&>svg]:w-3.5">{icon}</span>
        <span className="text-[10px] uppercase tracking-wider">{label}</span>
      </div>
      <p className="text-sm text-neutral-800">{value}</p>
    </div>
  )
}

function InfoStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-lg bg-neutral-50 p-2.5 text-center">
      <p className="text-lg font-semibold text-neutral-900">{value}</p>
      <p className="text-[10px] uppercase tracking-wide text-neutral-400">{label}</p>
    </div>
  )
}

function deviceIcon(type?: string) {
  if (type === 'mobile') return <FiSmartphone className="h-3.5 w-3.5" />
  if (type === 'tablet') return <FiTablet className="h-3.5 w-3.5" />
  return <FiMonitor className="h-3.5 w-3.5" />
}

function notifIcon(type: string) {
  switch (type) {
    case 'new_visitor': return '🆕'
    case 'returning_visitor': return '🔄'
    case 'cart_add':
    case 'cart_event': return '🛒'
    case 'abandoned_cart':
    case 'checkout_abandoned': return '🛍️'
    case 'contact_captured': return '📧'
    case 'checkout_started': return '💳'
    case 'order_completed': return '🎉'
    case 'page_view': return '👁️'
    default: return '📌'
  }
}

function prettyType(type: string) {
  return type.replace(/_/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())
}
