'use client'

import { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { FiSearch, FiRefreshCw, FiX } from 'react-icons/fi'
import type { CustomerRecord } from '@/lib/customers/types'
import type { StoredOrder } from '@/lib/orders/types'

export default function AdminCustomersPage() {
  const [customers, setCustomers] = useState<CustomerRecord[]>([])
  const [storage, setStorage] = useState<string>('')
  const [loading, setLoading] = useState(true)
  const [q, setQ] = useState('')
  const [debouncedQ, setDebouncedQ] = useState('')
  const [detail, setDetail] = useState<{ customer: CustomerRecord; orders: StoredOrder[] } | null>(null)
  const [detailLoading, setDetailLoading] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setDebouncedQ(q.trim()), 300)
    return () => clearTimeout(t)
  }, [q])

  const load = useCallback(async () => {
    setLoading(true)
    try {
      const url =
        debouncedQ.length > 0
          ? `/api/admin/customers?q=${encodeURIComponent(debouncedQ)}`
          : '/api/admin/customers'
      const res = await fetch(url)
      const data = await res.json()
      if (res.ok) {
        setCustomers(data.customers || [])
        setStorage(data.storage || '')
      }
    } finally {
      setLoading(false)
    }
  }, [debouncedQ])

  useEffect(() => {
    load()
  }, [load])

  const openDetail = async (email: string) => {
    setDetailLoading(true)
    setDetail(null)
    try {
      const res = await fetch(`/api/admin/customers?email=${encodeURIComponent(email)}`)
      const data = await res.json()
      if (res.ok && data.customer) {
        setDetail({ customer: data.customer, orders: data.orders || [] })
      }
    } finally {
      setDetailLoading(false)
    }
  }

  return (
    <div className="p-6 text-neutral-900 lg:p-10">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 data-document-h1="true" className="font-rozha text-3xl text-white">Customers</h1>
          <p className="mt-1 font-roboto text-sm text-white/50">
            One record per email, linked to order numbers · Updated when orders are saved
            {storage ? ` · Storage: ${storage}` : ''}
          </p>
        </div>
        <button
          type="button"
          onClick={load}
          className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm text-white hover:bg-white/10"
        >
          <FiRefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
          Refresh
        </button>
      </div>

      <div className="mb-6">
        <div className="relative flex-1">
          <FiSearch className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/35" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search email or name…"
            className="w-full max-w-md rounded-xl border border-white/10 bg-white/5 py-2.5 pl-10 pr-4 font-roboto text-sm text-white placeholder-white/35 focus:border-brand-dustyBlue/40 focus:outline-none"
          />
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border border-white/10 bg-white/[0.04]">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[720px] text-left font-roboto text-sm">
            <thead>
              <tr className="border-b border-white/10 text-[10px] uppercase tracking-[0.2em] text-white/45">
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Orders</th>
                <th className="px-4 py-3">Lifetime</th>
                <th className="px-4 py-3">Last order</th>
              </tr>
            </thead>
            <tbody>
              {loading && customers.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-4 py-16 text-center text-white/45">
                    Loading…
                  </td>
                </tr>
              ) : customers.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-4 py-16 text-center text-white/45">
                    No customer records yet. They appear after the first order with a customer email is stored.
                  </td>
                </tr>
              ) : (
                customers.map((c) => (
                  <tr
                    key={c.email}
                    className="cursor-pointer border-b border-white/5 transition-colors hover:bg-white/[0.06]"
                    onClick={() => openDetail(c.email)}
                  >
                    <td className="max-w-[220px] truncate px-4 py-3 text-white/90">{c.email}</td>
                    <td className="max-w-[160px] truncate px-4 py-3 text-white/70">{c.displayName || '—'}</td>
                    <td className="px-4 py-3 tabular-nums text-white/85">{c.orderCount}</td>
                    <td className="px-4 py-3 tabular-nums text-white/85">
                      {c.currency} {c.lifetimeValue.toFixed(2)}
                    </td>
                    <td className="px-4 py-3 text-xs text-white/50">
                      {c.lastOrderAt ? new Date(c.lastOrderAt).toLocaleString() : '—'}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      <AnimatePresence>
        {(detailLoading || detail) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 p-4 sm:items-center"
            onClick={() => {
              setDetail(null)
              setDetailLoading(false)
            }}
          >
            <motion.div
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 24, opacity: 0 }}
              className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-white/10 bg-[#12080b] p-6 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mb-2 flex justify-end">
                <button
                  type="button"
                  onClick={() => {
                    setDetail(null)
                    setDetailLoading(false)
                  }}
                  className="rounded-full p-2 text-white/50 hover:bg-white/10"
                  aria-label="Close"
                >
                  <FiX className="h-5 w-5" />
                </button>
              </div>
              {detailLoading ? (
                <p className="py-12 text-center font-roboto text-sm text-white/50">Loading…</p>
              ) : detail ? (
                <>
                  <div className="mb-4 flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <h2 className="break-all font-rozha text-xl text-brand-stone">{detail.customer.email}</h2>
                      {detail.customer.displayName ? (
                        <p className="mt-1 font-roboto text-sm text-white/70">{detail.customer.displayName}</p>
                      ) : null}
                      {detail.customer.phone ? (
                        <p className="mt-0.5 font-roboto text-sm text-white/60">{detail.customer.phone}</p>
                      ) : null}
                    </div>
                  </div>

                  <div className="mb-6 grid grid-cols-2 gap-3 font-roboto text-sm">
                    <div className="rounded-lg border border-white/10 bg-white/[0.04] p-3">
                      <p className="text-[10px] uppercase tracking-wider text-white/40">Orders</p>
                      <p className="mt-1 tabular-nums text-lg text-white">{detail.customer.orderCount}</p>
                    </div>
                    <div className="rounded-lg border border-white/10 bg-white/[0.04] p-3">
                      <p className="text-[10px] uppercase tracking-wider text-white/40">Lifetime value</p>
                      <p className="mt-1 tabular-nums text-lg text-white">
                        {detail.customer.currency} {detail.customer.lifetimeValue.toFixed(2)}
                      </p>
                    </div>
                  </div>

                  {detail.customer.lastShippingAddress &&
                  Object.keys(detail.customer.lastShippingAddress).length > 0 ? (
                    <div className="mb-6">
                      <p className="text-[10px] uppercase tracking-wider text-white/40">Last shipping snapshot</p>
                      <pre className="mt-2 max-h-32 overflow-auto rounded-lg border border-white/10 bg-black/30 p-3 font-mono text-[11px] text-white/70">
                        {JSON.stringify(detail.customer.lastShippingAddress, null, 2)}
                      </pre>
                    </div>
                  ) : null}

                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-white/40">Orders</p>
                    <ul className="mt-2 space-y-2 border-t border-white/10 pt-3">
                      {detail.orders.length === 0 ? (
                        <li className="text-sm text-white/45">No order payloads found (IDs may be stale).</li>
                      ) : (
                        detail.orders.map((o) => (
                          <li
                            key={o.id}
                            className="flex flex-wrap items-baseline justify-between gap-2 border-b border-white/5 pb-2 font-roboto text-sm"
                          >
                            <div className="min-w-0">
                              <Link
                                href="/admin/orders"
                                className="font-mono text-xs text-brand-dustyBlue hover:underline"
                                onClick={() => setDetail(null)}
                              >
                                {o.id}
                              </Link>
                              <p className="text-[11px] text-white/45">{new Date(o.createdAt).toLocaleString()}</p>
                            </div>
                            <span className="tabular-nums text-white/80">
                              {o.currency} {o.amountTotal.toFixed(2)}
                            </span>
                          </li>
                        ))
                      )}
                    </ul>
                  </div>
                </>
              ) : null}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
