'use client'

import { useCallback, useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiSearch, FiRefreshCw, FiX, FiExternalLink } from 'react-icons/fi'
import type { StoredOrder, OrderFulfillmentStatus } from '@/lib/orders/types'

const STATUS_OPTIONS: OrderFulfillmentStatus[] = [
  'paid',
  'processing',
  'ready_to_ship',
  'shipped',
  'delivered',
  'cancelled',
  'refunded',
]

const labels: Record<OrderFulfillmentStatus, string> = {
  paid: 'Paid',
  processing: 'Processing',
  ready_to_ship: 'Ready to ship',
  shipped: 'Shipped',
  delivered: 'Delivered',
  cancelled: 'Cancelled',
  refunded: 'Refunded',
}

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState<StoredOrder[]>([])
  const [storage, setStorage] = useState<string>('')
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState<OrderFulfillmentStatus | ''>('')
  const [q, setQ] = useState('')
  const [selected, setSelected] = useState<StoredOrder | null>(null)
  const [notesDraft, setNotesDraft] = useState('')
  const [saving, setSaving] = useState(false)

  const load = useCallback(async () => {
    setLoading(true)
    try {
      const url = filter ? `/api/admin/orders?status=${encodeURIComponent(filter)}` : '/api/admin/orders'
      const res = await fetch(url)
      const data = await res.json()
      if (res.ok) {
        setOrders(data.orders || [])
        setStorage(data.storage || '')
      }
    } finally {
      setLoading(false)
    }
  }, [filter])

  useEffect(() => {
    load()
  }, [load])

  useEffect(() => {
    if (selected) setNotesDraft(selected.internalNotes || '')
  }, [selected])

  const filtered = orders.filter((o) => {
    if (!q.trim()) return true
    const s = q.toLowerCase()
    return (
      o.id.toLowerCase().includes(s) ||
      o.customerEmail.toLowerCase().includes(s) ||
      o.stripeSessionId.toLowerCase().includes(s)
    )
  })

  const patchOrder = async (id: string, body: { fulfillmentStatus?: OrderFulfillmentStatus; internalNotes?: string }) => {
    setSaving(true)
    try {
      const res = await fetch(`/api/admin/orders/${encodeURIComponent(id)}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      const data = await res.json()
      if (res.ok && data.order) {
        setOrders((prev) => prev.map((x) => (x.id === id ? data.order : x)))
        if (selected?.id === id) setSelected(data.order)
      }
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="p-6 text-neutral-900 lg:p-10">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 data-document-h1="true" className="font-rozha text-3xl text-white">Orders</h1>
          <p className="mt-1 font-montserrat text-sm text-white/50">
            Fulfilment pipeline · Stripe Checkout completes create orders via webhook
            {storage ? ` · Storage: ${storage}` : ''}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={load}
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm text-white hover:bg-white/10"
          >
            <FiRefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
            Refresh
          </button>
        </div>
      </div>

      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <FiSearch className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/35" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search email, order id, session…"
            className="w-full rounded-xl border border-white/10 bg-white/5 py-2.5 pl-10 pr-4 font-montserrat text-sm text-white placeholder-white/35 focus:border-brand-dustyBlue/40 focus:outline-none"
          />
        </div>
        <select
          value={filter}
          onChange={(e) => setFilter((e.target.value || '') as OrderFulfillmentStatus | '')}
          className="rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 font-montserrat text-sm text-white focus:outline-none"
        >
          <option value="">All statuses</option>
          {STATUS_OPTIONS.map((s) => (
            <option key={s} value={s}>
              {labels[s]}
            </option>
          ))}
        </select>
      </div>

      <div className="overflow-hidden rounded-xl border border-white/10 bg-white/[0.04]">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[720px] text-left font-montserrat text-sm">
            <thead>
              <tr className="border-b border-white/10 text-[10px] uppercase tracking-[0.2em] text-white/45">
                <th className="px-4 py-3">Order</th>
                <th className="px-4 py-3">Customer</th>
                <th className="px-4 py-3">Total</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Date</th>
              </tr>
            </thead>
            <tbody>
              {loading && filtered.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-4 py-16 text-center text-white/45">
                    Loading…
                  </td>
                </tr>
              ) : filtered.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-4 py-16 text-center text-white/45">
                    No orders yet. Complete a Stripe payment and ensure the webhook is configured (see env notes below).
                  </td>
                </tr>
              ) : (
                filtered.map((o) => (
                  <tr
                    key={o.id}
                    className="cursor-pointer border-b border-white/5 transition-colors hover:bg-white/[0.06]"
                    onClick={() => setSelected(o)}
                  >
                    <td className="px-4 py-3 font-mono text-xs text-brand-stone">{o.id}</td>
                    <td className="max-w-[200px] truncate px-4 py-3 text-white/85">{o.customerEmail || '—'}</td>
                    <td className="px-4 py-3 tabular-nums text-white/85">
                      {o.currency} {o.amountTotal.toFixed(2)}
                    </td>
                    <td className="px-4 py-3">
                      <span className="rounded-full bg-brand-dustyBlue/20 px-2 py-0.5 text-xs text-brand-stone">
                        {labels[o.fulfillmentStatus]}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-xs text-white/50">
                      {new Date(o.createdAt).toLocaleString()}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      <p className="mt-6 font-montserrat text-xs leading-relaxed text-white/40">
        Stripe: add <code className="text-brand-dustyBlue/80">STRIPE_WEBHOOK_SECRET</code> and point to{' '}
        <code className="text-brand-dustyBlue/80">/api/webhooks/stripe</code> (event: checkout.session.completed).
        Mollie: set <code className="text-brand-dustyBlue/80">MOLLIE_API_KEY</code> and{' '}
        <code className="text-brand-dustyBlue/80">PAYMENT_PROVIDER=mollie</code>; webhooks use{' '}
        <code className="text-brand-dustyBlue/80">/api/webhooks/mollie</code>. Use Upstash Redis for persistent orders
        across deploys.
      </p>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 p-4 sm:items-center"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 24, opacity: 0 }}
              className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-white/10 bg-[#12080b] p-6 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mb-4 flex items-start justify-between gap-4">
                <div>
                  <h2 className="font-rozha text-xl text-brand-stone">{selected.id}</h2>
                  <p className="mt-1 font-mono text-[10px] text-white/40">{selected.stripeSessionId}</p>
                </div>
                <button type="button" onClick={() => setSelected(null)} className="rounded-full p-2 text-white/50 hover:bg-white/10">
                  <FiX className="h-5 w-5" />
                </button>
              </div>

              <a
                href={
                  selected.paymentProvider === 'mollie' || selected.stripeSessionId.startsWith('tr_')
                    ? `https://my.mollie.com/dashboard/payments/${encodeURIComponent(selected.molliePaymentId || selected.stripeSessionId)}`
                    : `https://dashboard.stripe.com/search?query=${encodeURIComponent(selected.stripeSessionId)}`
                }
                target="_blank"
                rel="noopener noreferrer"
                className="mb-6 inline-flex items-center gap-2 text-xs text-brand-dustyBlue hover:underline"
              >
                {selected.paymentProvider === 'mollie' || selected.stripeSessionId.startsWith('tr_')
                  ? 'Open in Mollie'
                  : 'Open in Stripe'}{' '}
                <FiExternalLink className="h-3 w-3" />
              </a>

              <div className="space-y-4 font-montserrat text-sm">
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-white/40">Customer</p>
                  <p className="text-white/90">{selected.customerEmail}</p>
                  {selected.customerName ? <p className="text-white/70">{selected.customerName}</p> : null}
                  {selected.customerPhone ? <p className="text-white/70">{selected.customerPhone}</p> : null}
                </div>
                {selected.deliveryNotes ? (
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-white/40">Delivery notes</p>
                    <p className="text-white/80">{selected.deliveryNotes}</p>
                  </div>
                ) : null}
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-white/40">Lines</p>
                  <ul className="mt-2 space-y-2 border-t border-white/10 pt-2">
                    {selected.lines.map((l, i) => (
                      <li key={i} className="flex justify-between gap-2 text-white/85">
                        <span>
                          {l.quantity}× {l.name}
                          {l.productId ? <span className="ml-2 font-mono text-[10px] text-white/35">{l.productId}</span> : null}
                        </span>
                        <span className="tabular-nums text-white/60">
                          {l.currency} {(l.unitPrice * l.quantity).toFixed(2)}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-3 flex justify-between border-t border-white/10 pt-3 text-white/90">
                    <span>Total</span>
                    <span className="tabular-nums font-medium">
                      {selected.currency} {selected.amountTotal.toFixed(2)}
                    </span>
                  </div>
                </div>

                <div>
                  <label className="text-[10px] uppercase tracking-wider text-white/40">Fulfillment status</label>
                  <select
                    value={selected.fulfillmentStatus}
                    disabled={saving}
                    onChange={(e) => patchOrder(selected.id, { fulfillmentStatus: e.target.value as OrderFulfillmentStatus })}
                    className="mt-1 w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-white focus:outline-none"
                  >
                    {STATUS_OPTIONS.map((s) => (
                      <option key={s} value={s}>
                        {labels[s]}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-[10px] uppercase tracking-wider text-white/40">Internal notes</label>
                  <textarea
                    value={notesDraft}
                    onChange={(e) => setNotesDraft(e.target.value)}
                    rows={3}
                    className="mt-1 w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-white placeholder-white/30 focus:outline-none"
                    placeholder="Packing notes, VIP, follow-up…"
                  />
                  <button
                    type="button"
                    disabled={saving}
                    onClick={() => patchOrder(selected.id, { internalNotes: notesDraft })}
                    className="mt-2 rounded-lg bg-brand-dustyBlue/90 px-4 py-2 text-xs uppercase tracking-wider text-[#1a0008] hover:bg-brand-stone disabled:opacity-50"
                  >
                    Save notes
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
