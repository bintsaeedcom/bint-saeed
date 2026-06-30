'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  FiUsers, FiUserPlus, FiUserCheck, FiShoppingCart, 
  FiEye, FiMapPin, FiClock, FiMail, FiPhone,
  FiRefreshCw, FiBell, FiX, FiGlobe, FiSmartphone,
  FiMonitor, FiTablet, FiDollarSign, FiAlertTriangle, FiCheckCircle, FiActivity, FiExternalLink, FiPackage, FiTrendingUp, FiTruck, FiRotateCcw
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
  location: {
    country: string
    city: string
    countryCode: string
  } | null
  device: {
    type: 'mobile' | 'tablet' | 'desktop'
    browser: string
    os: string
  }
  pageViews: {
    path: string
    title: string
    timestamp: string
    timeOnPage: number
  }[]
  totalTimeOnSite: number
  referrer: string
  contactInfo?: {
    email?: string
    phone?: string
    name?: string
  }
  cartEvents: {
    action: string
    productName: string
    timestamp: string
  }[]
}

interface Notification {
  id: string
  type: string
  data: any
  timestamp: string
  read: boolean
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
  stripe: {
    apiReachable: boolean
    accountId: string | null
    error: string | null
  }
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
  warnings: string[]
}

interface ProductAdminRow {
  id: string
  name: string
  price: number
  category: string
  image: string
  override: {
    price?: number
    name?: string
    published?: boolean
  }
}

export default function AdminDashboard() {
  const gaMeasurementId = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID?.trim() ?? ''
  const gaConfigured = gaMeasurementId.startsWith('G-')
  const [activeVisitors, setActiveVisitors] = useState<Visitor[]>([])
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [stats, setStats] = useState({
    totalVisitors: 0,
    todayVisitors: 0,
    newVisitors: 0,
    returningVisitors: 0,
  })
  const [selectedVisitor, setSelectedVisitor] = useState<Visitor | null>(null)
  const [showNotifications, setShowNotifications] = useState(false)
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [checkoutHealth, setCheckoutHealth] = useState<CheckoutHealth | null>(null)
  const [opsHealth, setOpsHealth] = useState<OpsHealth | null>(null)
  const [orders, setOrders] = useState<StoredOrder[]>([])
  const [customers, setCustomers] = useState<CustomerRecord[]>([])
  const [products, setProducts] = useState<ProductAdminRow[]>([])
  const [commerceReady, setCommerceReady] = useState(false)

  // Fetch data
  const fetchData = async () => {
    setIsRefreshing(true)
    try {
      // Fetch active visitors
      const activeRes = await fetch('/api/analytics/slack?type=active')
      const activeData = await activeRes.json()
      setActiveVisitors(activeData.activeVisitors || [])

      // Fetch notifications
      const notifRes = await fetch('/api/analytics/slack?type=notifications')
      const notifData = await notifRes.json()
      setNotifications(notifData.notifications || [])

      // Fetch stats
      const statsRes = await fetch('/api/analytics/slack')
      const statsData = await statsRes.json()
      setStats(statsData)

      // Fetch Stripe checkout readiness health
      const checkoutRes = await fetch('/api/admin/checkout-health')
      const checkoutData = await checkoutRes.json()
      if (checkoutRes.ok) {
        setCheckoutHealth(checkoutData as CheckoutHealth)
      } else {
        setCheckoutHealth(null)
      }

      const opsRes = await fetch('/api/admin/ops-health')
      const opsData = await opsRes.json()
      if (opsRes.ok) {
        setOpsHealth(opsData as OpsHealth)
      } else {
        setOpsHealth(null)
      }

      // Fetch commerce data for command-center widgets
      const [ordersRes, customersRes, productsRes] = await Promise.all([
        fetch('/api/admin/orders'),
        fetch('/api/admin/customers?limit=500'),
        fetch('/api/admin/products/overrides'),
      ])
      const [ordersData, customersData, productsData] = await Promise.all([
        ordersRes.json(),
        customersRes.json(),
        productsRes.json(),
      ])

      if (ordersRes.ok) setOrders(ordersData.orders || [])
      if (customersRes.ok) setCustomers(customersData.customers || [])
      if (productsRes.ok) setProducts(productsData.products || [])
      setCommerceReady(ordersRes.ok && customersRes.ok && productsRes.ok)
    } catch (e) {
      console.error('Failed to fetch data')
      setCommerceReady(false)
    }
    setIsRefreshing(false)
  }

  // Initial fetch and polling
  useEffect(() => {
    fetchData()
    const interval = setInterval(fetchData, 10000) // Poll every 10 seconds
    return () => clearInterval(interval)
  }, [])

  const getDeviceIcon = (type: string) => {
    switch (type) {
      case 'mobile': return <FiSmartphone className="w-4 h-4" />
      case 'tablet': return <FiTablet className="w-4 h-4" />
      default: return <FiMonitor className="w-4 h-4" />
    }
  }

  const formatTime = (seconds: number) => {
    if (seconds < 60) return `${seconds}s`
    const mins = Math.floor(seconds / 60)
    if (mins < 60) return `${mins}m`
    const hours = Math.floor(mins / 60)
    return `${hours}h ${mins % 60}m`
  }

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'new_visitor': return '🆕'
      case 'returning_visitor': return '🔄'
      case 'cart_event': return '🛒'
      case 'contact_captured': return '📧'
      case 'checkout_started': return '💳'
      case 'order_completed': return '🎉'
      default: return '📌'
    }
  }

  const unreadCount = notifications.filter(n => !n.read).length
  const orderStatusCounts = orders.reduce<Record<string, number>>((acc, order) => {
    acc[order.fulfillmentStatus] = (acc[order.fulfillmentStatus] || 0) + 1
    return acc
  }, {})
  const totalRevenue = orders.reduce((sum, order) => sum + (order.amountTotal || 0), 0)
  const recentRevenue = orders
    .filter((order) => Date.now() - new Date(order.createdAt).getTime() <= 7 * 24 * 3600 * 1000)
    .reduce((sum, order) => sum + (order.amountTotal || 0), 0)
  const publishedProducts = products.filter((p) => p.override.published !== false).length
  const draftProducts = Math.max(0, products.length - publishedProducts)
  const avgOrderValue = orders.length > 0 ? totalRevenue / orders.length : 0

  return (
    <div className="min-h-screen bg-stone-100 text-neutral-900">
      {/* Header */}
      <div className="bg-brand-darkRed text-white py-6">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 data-document-h1="true" className="font-rozha text-3xl">Analytics Dashboard</h1>
              <p className="font-montserrat text-sm text-white/70 tracking-wide">
                Real-time visitor tracking & notifications
              </p>
            </div>
            <div className="flex items-center gap-4">
              {/* Notifications Bell */}
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="relative p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              >
                <FiBell className="w-5 h-5" />
                {unreadCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-xs flex items-center justify-center">
                    {unreadCount}
                  </span>
                )}
              </button>
              
              {/* Refresh Button */}
              <button
                onClick={fetchData}
                className={`p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors ${isRefreshing ? 'animate-spin' : ''}`}
              >
                <FiRefreshCw className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <StatCard 
            icon={<FiEye className="w-6 h-6" />}
            label="Live Visitors"
            value={activeVisitors.length}
            color="bg-green-500"
            pulse
          />
          <StatCard 
            icon={<FiUsers className="w-6 h-6" />}
            label="Today's Visitors"
            value={stats.todayVisitors}
            color="bg-blue-500"
          />
          <StatCard 
            icon={<FiUserPlus className="w-6 h-6" />}
            label="New Visitors"
            value={stats.newVisitors}
            color="bg-purple-500"
          />
          <StatCard 
            icon={<FiUserCheck className="w-6 h-6" />}
            label="Returning"
            value={stats.returningVisitors}
            color="bg-amber-500"
          />
        </div>

        {/* Commerce command center */}
        <div className="mb-8 rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-start justify-between gap-4">
            <div>
              <h2 className="font-rozha text-2xl text-brand-darkRed">Commerce Command Center</h2>
              <p className="font-montserrat text-xs uppercase tracking-[0.16em] text-gray-500">
                Orders, revenue, customers, and catalog controls
              </p>
            </div>
            <span
              className={`inline-flex items-center gap-2 rounded-full px-3 py-1 font-montserrat text-xs uppercase tracking-[0.12em] ${
                commerceReady ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
              }`}
            >
              {commerceReady ? <FiCheckCircle className="h-4 w-4" /> : <FiAlertTriangle className="h-4 w-4" />}
              {commerceReady ? 'Connected' : 'Partial data'}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
            <HealthPill label="Orders API" ok={orders.length > 0 || commerceReady} />
            <HealthPill label="Customers API" ok={customers.length > 0 || commerceReady} />
            <HealthPill label="Catalog API" ok={products.length > 0 || commerceReady} />
            <HealthPill label="Webhook orders" ok={(orderStatusCounts.paid || 0) + (orderStatusCounts.processing || 0) > 0} />
            <HealthPill label="Fulfillment flow" ok={Object.keys(orderStatusCounts).length > 0} />
            <HealthPill label="Admin links" ok />
          </div>

          <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <KpiTile
              icon={<FiDollarSign className="h-4 w-4" />}
              label="Revenue (all time)"
              value={`AED ${totalRevenue.toFixed(2)}`}
              tone="text-emerald-700"
            />
            <KpiTile
              icon={<FiTrendingUp className="h-4 w-4" />}
              label="Revenue (7 days)"
              value={`AED ${recentRevenue.toFixed(2)}`}
              tone="text-blue-700"
            />
            <KpiTile
              icon={<FiShoppingCart className="h-4 w-4" />}
              label="Average order value"
              value={`AED ${avgOrderValue.toFixed(2)}`}
              tone="text-violet-700"
            />
            <KpiTile
              icon={<FiUsers className="h-4 w-4" />}
              label="Customer records"
              value={String(customers.length)}
              tone="text-amber-700"
            />
          </div>

          <div className="mt-4 grid gap-3 lg:grid-cols-2">
            <div className="rounded-lg border border-gray-100 bg-stone-50 p-4">
              <p className="font-montserrat text-[11px] uppercase tracking-[0.15em] text-gray-500">Fulfillment pipeline</p>
              <div className="mt-3 grid grid-cols-2 gap-2 text-xs font-montserrat text-gray-700 sm:grid-cols-3">
                <PipelineCount label="Paid" value={orderStatusCounts.paid || 0} />
                <PipelineCount label="Processing" value={orderStatusCounts.processing || 0} />
                <PipelineCount label="Ready to ship" value={orderStatusCounts.ready_to_ship || 0} />
                <PipelineCount label="Shipped" value={orderStatusCounts.shipped || 0} />
                <PipelineCount label="Delivered" value={orderStatusCounts.delivered || 0} />
                <PipelineCount label="Refunded" value={orderStatusCounts.refunded || 0} />
              </div>
            </div>
            <div className="rounded-lg border border-gray-100 bg-stone-50 p-4">
              <p className="font-montserrat text-[11px] uppercase tracking-[0.15em] text-gray-500">Catalog status</p>
              <div className="mt-3 grid grid-cols-2 gap-2 text-xs font-montserrat text-gray-700">
                <PipelineCount label="Published" value={publishedProducts} />
                <PipelineCount label="Draft / hidden" value={draftProducts} />
              </div>
              <p className="mt-3 font-montserrat text-[11px] text-gray-500">
                Use Catalog to update product names, pricing, and visibility without redeploy.
              </p>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            <QuickLink href="/admin/orders" icon={<FiTruck className="h-3.5 w-3.5" />} label="Open Orders Hub" />
            <QuickLink href="/admin/customers" icon={<FiUsers className="h-3.5 w-3.5" />} label="Open Customer CRM" />
            <QuickLink href="/admin/products" icon={<FiPackage className="h-3.5 w-3.5" />} label="Open Catalog Manager" />
            <QuickLink href="/admin/dashboard" icon={<FiRotateCcw className="h-3.5 w-3.5" />} label="Refresh command center" />
          </div>
        </div>

        {/* Checkout diagnostics */}
        <div className="mb-8 rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-start justify-between gap-4">
            <div>
              <h2 className="font-rozha text-2xl text-brand-darkRed">Stripe Checkout Diagnostics</h2>
              <p className="font-montserrat text-xs uppercase tracking-[0.16em] text-gray-500">
                Launch readiness panel
              </p>
            </div>
            {checkoutHealth ? (
              <span
                className={`inline-flex items-center gap-2 rounded-full px-3 py-1 font-montserrat text-xs uppercase tracking-[0.12em] ${
                  checkoutHealth.ok
                    ? 'bg-emerald-100 text-emerald-700'
                    : 'bg-amber-100 text-amber-700'
                }`}
              >
                {checkoutHealth.ok ? <FiCheckCircle className="h-4 w-4" /> : <FiAlertTriangle className="h-4 w-4" />}
                {checkoutHealth.ok ? 'Ready' : 'Needs Setup'}
              </span>
            ) : (
              <span className="font-montserrat text-xs uppercase tracking-[0.12em] text-gray-500">Unavailable</span>
            )}
          </div>

          {checkoutHealth ? (
            <>
              <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
                <HealthPill label="Publishable key" ok={checkoutHealth.checkout.publishableConfigured} />
                <HealthPill label="Secret key" ok={checkoutHealth.checkout.secretConfigured} />
                <HealthPill label="Webhook secret" ok={checkoutHealth.checkout.webhookConfigured} />
                <HealthPill label="Site URL" ok={checkoutHealth.checkout.siteUrlConfigured || checkoutHealth.env !== 'production'} />
                <HealthPill label="Stripe API" ok={checkoutHealth.stripe.apiReachable || checkoutHealth.env !== 'production'} />
                <HealthPill label="Mode match" ok={checkoutHealth.mode !== 'mixed' && checkoutHealth.mode !== 'unknown'} />
              </div>

              <div className="mt-4 grid gap-3 lg:grid-cols-2">
                <div className="rounded-lg border border-gray-100 bg-stone-50 p-4">
                  <p className="font-montserrat text-[11px] uppercase tracking-[0.15em] text-gray-500">Environment</p>
                  <p className="mt-1 font-montserrat text-sm text-gray-900">
                    {checkoutHealth.env} · Stripe mode: {checkoutHealth.mode}
                  </p>
                  <p className="mt-1 font-montserrat text-xs text-gray-500">
                    Account: {checkoutHealth.stripe.accountId ?? 'Not available'}
                  </p>
                  <p className="mt-1 font-montserrat text-xs text-gray-500">
                    Checked: {new Date(checkoutHealth.checkedAt).toLocaleString()}
                  </p>
                </div>
                <div className="rounded-lg border border-gray-100 bg-stone-50 p-4">
                  <p className="font-montserrat text-[11px] uppercase tracking-[0.15em] text-gray-500">Allowed origins</p>
                  <p className="mt-1 font-montserrat text-xs text-gray-700 break-all">
                    {checkoutHealth.checkout.allowedOrigins.join(', ')}
                  </p>
                </div>
              </div>

              {checkoutHealth.warnings.length > 0 && (
                <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-4">
                  <p className="font-montserrat text-[11px] uppercase tracking-[0.15em] text-amber-700">Warnings</p>
                  <ul className="mt-2 space-y-1">
                    {checkoutHealth.warnings.map((warning) => (
                      <li key={warning} className="font-montserrat text-xs text-amber-800">
                        • {warning}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </>
          ) : (
            <p className="font-montserrat text-sm text-gray-500">
              Could not load checkout diagnostics. Make sure you are authenticated as admin.
            </p>
          )}
        </div>

        {/* Auth + newsletter diagnostics */}
        <div className="mb-8 rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-start justify-between gap-4">
            <div>
              <h2 className="font-rozha text-2xl text-brand-darkRed">Auth & Newsletter</h2>
              <p className="font-montserrat text-xs uppercase tracking-[0.16em] text-gray-500">
                Google login + MailerLite readiness
              </p>
            </div>
            {opsHealth ? (
              <span
                className={`inline-flex items-center gap-2 rounded-full px-3 py-1 font-montserrat text-xs uppercase tracking-[0.12em] ${
                  opsHealth.ok ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
                }`}
              >
                {opsHealth.ok ? <FiCheckCircle className="h-4 w-4" /> : <FiAlertTriangle className="h-4 w-4" />}
                {opsHealth.ok ? 'Ready' : 'Needs Setup'}
              </span>
            ) : (
              <span className="font-montserrat text-xs uppercase tracking-[0.12em] text-gray-500">Unavailable</span>
            )}
          </div>

          {opsHealth ? (
            <>
              <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
                <HealthPill label="Google OAuth" ok={opsHealth.auth.googleOAuthConfigured} />
                <HealthPill label="Session secret" ok={opsHealth.auth.sessionSecretConfigured} />
                <HealthPill label="Upstash Redis" ok={opsHealth.auth.redisConfigured} />
                <HealthPill label="Site URL" ok={opsHealth.auth.siteUrlConfigured} />
                <HealthPill label="MailerLite API" ok={opsHealth.newsletter.apiReachable} />
                <HealthPill label="Resend email" ok={opsHealth.auth.resendConfigured} />
              </div>

              <div className="mt-4 grid gap-3 lg:grid-cols-2">
                <div className="rounded-lg border border-gray-100 bg-stone-50 p-4">
                  <p className="font-montserrat text-[11px] uppercase tracking-[0.15em] text-gray-500">Google redirect URI</p>
                  <p className="mt-1 break-all font-montserrat text-xs text-gray-700">
                    {opsHealth.auth.googleRedirectUri ?? 'Set NEXT_PUBLIC_SITE_URL first'}
                  </p>
                  <p className="mt-2 font-montserrat text-xs text-gray-500">
                    Google sign-in ready: {opsHealth.auth.googleReady ? 'Yes' : 'No'}
                  </p>
                </div>
                <div className="rounded-lg border border-gray-100 bg-stone-50 p-4">
                  <p className="font-montserrat text-[11px] uppercase tracking-[0.15em] text-gray-500">Newsletter</p>
                  <p className="mt-1 font-montserrat text-xs text-gray-700">
                    Group ID: {opsHealth.newsletter.groupIdConfigured ? 'Configured' : 'Optional / not set'}
                  </p>
                  <p className="mt-1 font-montserrat text-xs text-gray-500">
                    Slack alerts: {opsHealth.newsletter.slackConfigured ? 'On' : 'Off'}
                  </p>
                  <p className="mt-1 font-montserrat text-xs text-gray-500">
                    Checked: {new Date(opsHealth.checkedAt).toLocaleString()}
                  </p>
                </div>
              </div>

              {opsHealth.warnings.length > 0 && (
                <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-4">
                  <p className="font-montserrat text-[11px] uppercase tracking-[0.15em] text-amber-700">Warnings</p>
                  <ul className="mt-2 space-y-1">
                    {opsHealth.warnings.map((warning) => (
                      <li key={warning} className="font-montserrat text-xs text-amber-800">
                        • {warning}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </>
          ) : (
            <p className="font-montserrat text-sm text-gray-500">
              Could not load auth/newsletter diagnostics. Make sure you are authenticated as admin.
            </p>
          )}
        </div>

        {/* Google Analytics diagnostics */}
        <div className="mb-8 rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-start justify-between gap-4">
            <div>
              <h2 className="font-rozha text-2xl text-brand-darkRed">Google Analytics</h2>
              <p className="font-montserrat text-xs uppercase tracking-[0.16em] text-gray-500">
                GA4 tracking status
              </p>
            </div>
            <span
              className={`inline-flex items-center gap-2 rounded-full px-3 py-1 font-montserrat text-xs uppercase tracking-[0.12em] ${
                gaConfigured ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
              }`}
            >
              {gaConfigured ? <FiCheckCircle className="h-4 w-4" /> : <FiAlertTriangle className="h-4 w-4" />}
              {gaConfigured ? 'Configured' : 'Missing'}
            </span>
          </div>

          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            <HealthPill label="GA4 ID" ok={gaConfigured} />
            <HealthPill label="Tracker bootstrap" ok={gaConfigured} />
            <HealthPill label="Pageview events" ok={gaConfigured} />
            <HealthPill label="Event tracking" ok={gaConfigured} />
          </div>

          <div className="mt-4 grid gap-3 lg:grid-cols-2">
            <div className="rounded-lg border border-gray-100 bg-stone-50 p-4">
              <p className="font-montserrat text-[11px] uppercase tracking-[0.15em] text-gray-500">Measurement ID</p>
              <p className="mt-1 font-montserrat text-sm text-gray-900 break-all">
                {gaConfigured ? gaMeasurementId : 'Set NEXT_PUBLIC_GA4_MEASUREMENT_ID in your environment'}
              </p>
            </div>
            <div className="rounded-lg border border-gray-100 bg-stone-50 p-4">
              <p className="font-montserrat text-[11px] uppercase tracking-[0.15em] text-gray-500">Quick actions</p>
              <div className="mt-2 flex flex-wrap gap-2">
                <a
                  href="https://analytics.google.com/analytics/web/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-gray-200 bg-white px-3 py-1.5 font-montserrat text-xs text-gray-700 hover:border-brand-dustyBlue hover:text-brand-dustyBlue"
                >
                  <FiActivity className="h-3.5 w-3.5" />
                  Open GA4
                  <FiExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Active Visitors List */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <h2 className="font-rozha text-xl text-brand-darkRed">Live Visitors ({activeVisitors.length})</h2>
                </div>
              </div>
              
              {activeVisitors.length === 0 ? (
                <div className="p-12 text-center">
                  <FiUsers className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500 font-montserrat">No active visitors right now</p>
                </div>
              ) : (
                <div className="divide-y divide-gray-100 max-h-[600px] overflow-y-auto">
                  {activeVisitors.map((visitor) => (
                    <motion.div
                      key={visitor.visitorId}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="p-4 hover:bg-gray-50 cursor-pointer transition-colors"
                      onClick={() => setSelectedVisitor(visitor)}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-4">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            visitor.isNewVisitor ? 'bg-purple-100 text-purple-600' : 'bg-blue-100 text-blue-600'
                          }`}>
                            {visitor.isNewVisitor ? <FiUserPlus className="w-5 h-5" /> : <FiUserCheck className="w-5 h-5" />}
                          </div>
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <span className="font-montserrat text-sm font-medium text-gray-900">
                                {visitor.location ? `${visitor.location.city}, ${visitor.location.country}` : 'Unknown Location'}
                              </span>
                              <span className={`px-2 py-0.5 rounded text-xs font-montserrat ${
                                visitor.isNewVisitor ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700'
                              }`}>
                                {visitor.isNewVisitor ? 'New' : `Visit #${visitor.visitCount}`}
                              </span>
                            </div>
                            <div className="flex items-center gap-3 text-xs text-gray-500 font-montserrat">
                              <span className="flex items-center gap-1">
                                {getDeviceIcon(visitor.device.type)}
                                {visitor.device.browser}
                              </span>
                              <span className="flex items-center gap-1">
                                <FiClock className="w-3 h-3" />
                                {formatTime(visitor.totalTimeOnSite)}
                              </span>
                              <span className="flex items-center gap-1">
                                <FiEye className="w-3 h-3" />
                                {visitor.pageViews.length} pages
                              </span>
                            </div>
                            {visitor.contactInfo?.email && (
                              <div className="flex items-center gap-1 mt-1 text-xs text-green-600">
                                <FiMail className="w-3 h-3" />
                                {visitor.contactInfo.email}
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mb-2 ml-auto" />
                          {visitor.cartEvents.filter(e => e.action === 'add').length > 0 && (
                            <span className="flex items-center gap-1 text-xs text-amber-600">
                              <FiShoppingCart className="w-3 h-3" />
                              {visitor.cartEvents.filter(e => e.action === 'add').length}
                            </span>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Recent Activity Feed */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <h2 className="font-rozha text-xl text-brand-darkRed">Recent Activity</h2>
              </div>
              
              <div className="divide-y divide-gray-100 max-h-[600px] overflow-y-auto">
                {notifications.slice(0, 20).map((notif) => (
                  <div key={notif.id} className="p-4 hover:bg-gray-50 transition-colors">
                    <div className="flex items-start gap-3">
                      <span className="text-xl">{getNotificationIcon(notif.type)}</span>
                      <div className="flex-1 min-w-0">
                        <p className="font-montserrat text-sm text-gray-900 truncate">
                          {notif.type.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                        </p>
                        <p className="font-montserrat text-xs text-gray-500">
                          {notif.data?.location?.city || 'Unknown'} • {new Date(notif.timestamp).toLocaleTimeString()}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Visitor Detail Modal */}
      <AnimatePresence>
        {selectedVisitor && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedVisitor(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                <div>
                  <h2 className="font-rozha text-2xl text-brand-darkRed">Visitor Details</h2>
                  <p className="font-montserrat text-xs text-gray-500">ID: {selectedVisitor.visitorId}</p>
                </div>
                <button onClick={() => setSelectedVisitor(null)} className="p-2 hover:bg-gray-100 rounded-full">
                  <FiX className="w-5 h-5" />
                </button>
              </div>
              
              <div className="p-6 space-y-6">
                {/* Location & Device */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <FiMapPin className="w-4 h-4 text-brand-darkRed" />
                      <span className="font-montserrat text-xs uppercase tracking-wider text-gray-500">Location</span>
                    </div>
                    <p className="font-montserrat text-lg text-gray-900">
                      {selectedVisitor.location?.city}, {selectedVisitor.location?.country}
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      {getDeviceIcon(selectedVisitor.device.type)}
                      <span className="font-montserrat text-xs uppercase tracking-wider text-gray-500">Device</span>
                    </div>
                    <p className="font-montserrat text-lg text-gray-900">
                      {selectedVisitor.device.type} • {selectedVisitor.device.browser} • {selectedVisitor.device.os}
                    </p>
                  </div>
                </div>

                {/* Contact Info */}
                {selectedVisitor.contactInfo && (
                  <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                    <h3 className="font-montserrat text-xs uppercase tracking-wider text-green-700 mb-3">Contact Info Captured</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      {selectedVisitor.contactInfo.name && (
                        <div>
                          <span className="text-xs text-green-600">Name</span>
                          <p className="font-montserrat text-gray-900">{selectedVisitor.contactInfo.name}</p>
                        </div>
                      )}
                      {selectedVisitor.contactInfo.email && (
                        <div>
                          <span className="text-xs text-green-600">Email</span>
                          <p className="font-montserrat text-gray-900">{selectedVisitor.contactInfo.email}</p>
                        </div>
                      )}
                      {selectedVisitor.contactInfo.phone && (
                        <div>
                          <span className="text-xs text-green-600">Phone</span>
                          <p className="font-montserrat text-gray-900">{selectedVisitor.contactInfo.phone}</p>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Session Stats */}
                <div className="grid grid-cols-4 gap-4">
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <p className="font-rozha text-2xl text-brand-darkRed">{selectedVisitor.visitCount}</p>
                    <p className="font-montserrat text-xs text-gray-500">Total Visits</p>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <p className="font-rozha text-2xl text-brand-darkRed">{formatTime(selectedVisitor.totalTimeOnSite)}</p>
                    <p className="font-montserrat text-xs text-gray-500">Time on Site</p>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <p className="font-rozha text-2xl text-brand-darkRed">{selectedVisitor.pageViews.length}</p>
                    <p className="font-montserrat text-xs text-gray-500">Pages Viewed</p>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <p className="font-rozha text-2xl text-brand-darkRed">{selectedVisitor.cartEvents.filter(e => e.action === 'add').length}</p>
                    <p className="font-montserrat text-xs text-gray-500">Cart Adds</p>
                  </div>
                </div>

                {/* Page Views */}
                <div>
                  <h3 className="font-montserrat text-xs uppercase tracking-wider text-gray-500 mb-3">Page Journey</h3>
                  <div className="space-y-2">
                    {selectedVisitor.pageViews.map((pv, i) => (
                      <div key={i} className="flex items-center gap-3 p-2 bg-gray-50 rounded">
                        <span className="w-6 h-6 bg-brand-darkRed text-white rounded-full text-xs flex items-center justify-center">
                          {i + 1}
                        </span>
                        <div className="flex-1">
                          <p className="font-montserrat text-sm text-gray-900">{pv.title || pv.path}</p>
                          <p className="font-montserrat text-xs text-gray-500">{pv.timeOnPage}s on page</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Cart Events */}
                {selectedVisitor.cartEvents.length > 0 && (
                  <div>
                    <h3 className="font-montserrat text-xs uppercase tracking-wider text-gray-500 mb-3">Cart Activity</h3>
                    <div className="space-y-2">
                      {selectedVisitor.cartEvents.map((event, i) => (
                        <div key={i} className="flex items-center gap-3 p-2 bg-amber-50 rounded">
                          <span className="text-lg">{event.action === 'add' ? '🛒' : '❌'}</span>
                          <div>
                            <p className="font-montserrat text-sm text-gray-900">{event.productName}</p>
                            <p className="font-montserrat text-xs text-gray-500">
                              {event.action === 'add' ? 'Added to cart' : 'Removed'} • {new Date(event.timestamp).toLocaleTimeString()}
                            </p>
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

      {/* Notifications Panel */}
      <AnimatePresence>
        {showNotifications && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            className="fixed right-0 top-0 h-full w-96 bg-white shadow-2xl z-50"
          >
            <div className="p-6 border-b border-gray-100 flex items-center justify-between">
              <h2 className="font-rozha text-xl text-brand-darkRed">Notifications</h2>
              <button onClick={() => setShowNotifications(false)} className="p-2 hover:bg-gray-100 rounded-full">
                <FiX className="w-5 h-5" />
              </button>
            </div>
            <div className="overflow-y-auto h-[calc(100%-80px)]">
              {notifications.map((notif) => (
                <div key={notif.id} className="p-4 border-b border-gray-100 hover:bg-gray-50">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">{getNotificationIcon(notif.type)}</span>
                    <div>
                      <p className="font-montserrat text-sm font-medium text-gray-900">
                        {notif.type.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                      </p>
                      <p className="font-montserrat text-xs text-gray-500 mt-1">
                        {notif.data?.location?.city || 'Unknown'}, {notif.data?.location?.country || ''}
                      </p>
                      <p className="font-montserrat text-xs text-gray-400 mt-1">
                        {new Date(notif.timestamp).toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function StatCard({ 
  icon, 
  label, 
  value, 
  color, 
  pulse 
}: { 
  icon: React.ReactNode
  label: string
  value: number
  color: string
  pulse?: boolean 
}) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <div className={`w-12 h-12 ${color} rounded-lg flex items-center justify-center text-white mb-4 ${pulse ? 'animate-pulse' : ''}`}>
        {icon}
      </div>
      <p className="font-rozha text-3xl text-gray-900">{value}</p>
      <p className="font-montserrat text-xs uppercase tracking-wider text-gray-500">{label}</p>
    </div>
  )
}

function HealthPill({ label, ok }: { label: string; ok: boolean }) {
  return (
    <div
      className={`rounded-lg border px-3 py-2 ${
        ok ? 'border-emerald-200 bg-emerald-50 text-emerald-700' : 'border-amber-200 bg-amber-50 text-amber-700'
      }`}
    >
      <p className="font-montserrat text-[10px] uppercase tracking-[0.12em]">{label}</p>
      <p className="mt-1 font-montserrat text-xs">{ok ? 'Configured' : 'Missing'}</p>
    </div>
  )
}

function KpiTile({
  icon,
  label,
  value,
  tone,
}: {
  icon: React.ReactNode
  label: string
  value: string
  tone: string
}) {
  return (
    <div className="rounded-lg border border-gray-100 bg-stone-50 p-4">
      <div className={`inline-flex items-center gap-2 font-montserrat text-xs uppercase tracking-[0.12em] ${tone}`}>
        {icon}
        {label}
      </div>
      <p className="mt-2 font-rozha text-2xl text-brand-darkRed">{value}</p>
    </div>
  )
}

function PipelineCount({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-md border border-gray-200 bg-white px-3 py-2">
      <p className="uppercase tracking-[0.12em] text-[10px] text-gray-500">{label}</p>
      <p className="mt-1 text-sm text-gray-900">{value}</p>
    </div>
  )
}

function QuickLink({
  href,
  icon,
  label,
}: {
  href: string
  icon: React.ReactNode
  label: string
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 rounded-md border border-gray-200 bg-white px-3 py-2 font-montserrat text-xs uppercase tracking-[0.12em] text-gray-700 transition-colors hover:border-brand-dustyBlue hover:text-brand-dustyBlue"
    >
      {icon}
      {label}
    </Link>
  )
}
