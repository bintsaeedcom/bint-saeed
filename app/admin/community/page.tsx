'use client'

import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiCopy, FiRefreshCw, FiSearch, FiX } from 'react-icons/fi'

type PromoUsage = {
  code: string
  orderId: string
  at: string
  amountTotal?: number
  currency?: string
}

type CommunityMember = {
  email: string
  name?: string
  subscribedAt: string
  source?: string
  firstPurchaseCode: string
  privilegeStatus: 'pending_first_order' | 'activated' | 'skipped'
  privilegeCode?: string
  privilegeActivatedAt?: string
  privilegeExpiresAt?: string
  firstPaidOrderId?: string
  promoUsages: PromoUsage[]
  useCount: number
  updatedAt: string
}

function formatWhen(iso: string) {
  try {
    return new Date(iso).toLocaleString('en-AE', {
      timeZone: 'Asia/Dubai',
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
  } catch {
    return iso
  }
}

function statusLabel(status: CommunityMember['privilegeStatus']) {
  if (status === 'activated') return 'Privilege active'
  if (status === 'skipped') return 'Skipped'
  return 'Awaiting first order'
}

export default function AdminCommunityPage() {
  const [members, setMembers] = useState<CommunityMember[]>([])
  const [storage, setStorage] = useState('')
  const [loading, setLoading] = useState(true)
  const [q, setQ] = useState('')
  const [statusFilter, setStatusFilter] = useState<CommunityMember['privilegeStatus'] | ''>('')
  const [selected, setSelected] = useState<CommunityMember | null>(null)
  const [copied, setCopied] = useState<string | null>(null)

  const load = useCallback(async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/admin/community')
      const data = await res.json()
      if (res.ok) {
        setMembers(data.members || [])
        setStorage(data.storage || '')
      }
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    load()
    const interval = setInterval(load, 30000)
    return () => clearInterval(interval)
  }, [load])

  const filtered = members.filter((m) => {
    if (statusFilter && m.privilegeStatus !== statusFilter) return false
    if (!q.trim()) return true
    const s = q.toLowerCase()
    return (
      m.email.toLowerCase().includes(s) ||
      (m.name || '').toLowerCase().includes(s) ||
      (m.privilegeCode || '').toLowerCase().includes(s) ||
      m.firstPurchaseCode.toLowerCase().includes(s) ||
      m.promoUsages.some((u) => u.code.toLowerCase().includes(s) || u.orderId.toLowerCase().includes(s))
    )
  })

  const copyText = async (value: string) => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(value)
      window.setTimeout(() => setCopied(null), 1600)
    } catch {
      /* ignore */
    }
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 md:px-8">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="font-rozha text-3xl text-brand-stone">Community</h1>
          <p className="mt-1 font-montserrat text-xs tracking-wide text-white/45">
            House members, HOUSE15, personal privilege codes, and usage
            {storage ? ` · ${storage}` : ''}
          </p>
        </div>
        <button
          type="button"
          onClick={load}
          className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-3 py-2 font-montserrat text-xs uppercase tracking-[0.14em] text-white/70 transition-colors hover:border-white/30 hover:text-white"
        >
          <FiRefreshCw className={`h-3.5 w-3.5 ${loading ? 'animate-spin' : ''}`} />
          Refresh
        </button>
      </div>

      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative min-w-0 flex-1">
          <FiSearch className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/35" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search email, name, code, order…"
            className="w-full rounded-lg border border-white/12 bg-white/[0.03] py-2.5 pl-10 pr-3 font-montserrat text-sm text-white placeholder:text-white/30 outline-none focus:border-white/25"
          />
        </div>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value as CommunityMember['privilegeStatus'] | '')}
          className="rounded-lg border border-white/12 bg-[#1a0a10] px-3 py-2.5 font-montserrat text-sm text-white outline-none focus:border-white/25"
        >
          <option value="">All statuses</option>
          <option value="pending_first_order">Awaiting first order</option>
          <option value="activated">Privilege active</option>
          <option value="skipped">Skipped</option>
        </select>
      </div>

      <div className="overflow-hidden rounded-xl border border-white/10">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left font-montserrat text-sm">
            <thead className="bg-white/[0.04] text-[10px] uppercase tracking-[0.14em] text-white/40">
              <tr>
                <th className="px-4 py-3 font-medium">Member</th>
                <th className="px-4 py-3 font-medium">HOUSE15</th>
                <th className="px-4 py-3 font-medium">Personal code</th>
                <th className="px-4 py-3 font-medium">Status</th>
                <th className="px-4 py-3 font-medium">Uses</th>
                <th className="px-4 py-3 font-medium">Joined</th>
              </tr>
            </thead>
            <tbody>
              {loading && members.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-4 py-10 text-center text-white/45">
                    Loading…
                  </td>
                </tr>
              ) : filtered.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-4 py-10 text-center text-white/45">
                    No community members found.
                  </td>
                </tr>
              ) : (
                filtered.map((m) => (
                  <tr
                    key={m.email}
                    className="cursor-pointer border-t border-white/8 transition-colors hover:bg-white/[0.03]"
                    onClick={() => setSelected(m)}
                  >
                    <td className="px-4 py-3">
                      <p className="text-white/90">{m.name || '—'}</p>
                      <p className="mt-0.5 text-xs text-white/45">{m.email}</p>
                    </td>
                    <td className="px-4 py-3 tracking-[0.08em] text-white/70">{m.firstPurchaseCode}</td>
                    <td className="px-4 py-3 tracking-[0.06em] text-brand-dustyBlue">
                      {m.privilegeCode || '—'}
                    </td>
                    <td className="px-4 py-3 text-white/65">{statusLabel(m.privilegeStatus)}</td>
                    <td className="px-4 py-3 text-white/80">{m.useCount}</td>
                    <td className="px-4 py-3 text-xs text-white/45">{formatWhen(m.subscribedAt)}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      <AnimatePresence>
        {selected ? (
          <motion.div
            className="fixed inset-0 z-50 flex items-end justify-center bg-black/55 p-4 sm:items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-xl border border-white/12 bg-[#16090d] p-5 shadow-2xl"
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 16, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mb-4 flex items-start justify-between gap-3">
                <div>
                  <p className="font-rozha text-2xl text-brand-stone">{selected.name || 'Member'}</p>
                  <p className="mt-1 font-montserrat text-sm text-white/50">{selected.email}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setSelected(null)}
                  className="rounded-lg p-2 text-white/50 hover:bg-white/10 hover:text-white"
                  aria-label="Close"
                >
                  <FiX className="h-5 w-5" />
                </button>
              </div>

              <div className="space-y-3 font-montserrat text-sm">
                <div className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
                  <p className="text-[10px] uppercase tracking-[0.16em] text-white/40">First purchase</p>
                  <div className="mt-1 flex items-center justify-between gap-2">
                    <p className="tracking-[0.1em] text-white/85">{selected.firstPurchaseCode}</p>
                    <button
                      type="button"
                      onClick={() => copyText(selected.firstPurchaseCode)}
                      className="inline-flex items-center gap-1 text-xs text-white/50 hover:text-white"
                    >
                      <FiCopy className="h-3.5 w-3.5" />
                      {copied === selected.firstPurchaseCode ? 'Copied' : 'Copy'}
                    </button>
                  </div>
                </div>

                <div className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
                  <p className="text-[10px] uppercase tracking-[0.16em] text-white/40">Personal privilege</p>
                  <div className="mt-1 flex items-center justify-between gap-2">
                    <p className="tracking-[0.08em] text-brand-dustyBlue">
                      {selected.privilegeCode || 'Not activated yet'}
                    </p>
                    {selected.privilegeCode ? (
                      <button
                        type="button"
                        onClick={() => copyText(selected.privilegeCode!)}
                        className="inline-flex items-center gap-1 text-xs text-white/50 hover:text-white"
                      >
                        <FiCopy className="h-3.5 w-3.5" />
                        {copied === selected.privilegeCode ? 'Copied' : 'Copy'}
                      </button>
                    ) : null}
                  </div>
                  <p className="mt-2 text-xs text-white/45">{statusLabel(selected.privilegeStatus)}</p>
                  {selected.privilegeActivatedAt ? (
                    <p className="mt-1 text-xs text-white/40">
                      Activated {formatWhen(selected.privilegeActivatedAt)}
                    </p>
                  ) : null}
                  {selected.privilegeExpiresAt ? (
                    <p className="mt-1 text-xs text-white/40">
                      Expires {formatWhen(selected.privilegeExpiresAt)}
                    </p>
                  ) : null}
                  {selected.firstPaidOrderId ? (
                    <p className="mt-1 text-xs text-white/40">First paid order {selected.firstPaidOrderId}</p>
                  ) : null}
                </div>

                <div>
                  <p className="mb-2 text-[10px] uppercase tracking-[0.16em] text-white/40">
                    Code usage ({selected.promoUsages.length})
                  </p>
                  {selected.promoUsages.length === 0 ? (
                    <p className="text-xs text-white/40">No recorded uses yet.</p>
                  ) : (
                    <ul className="space-y-2">
                      {selected.promoUsages.map((u) => (
                        <li
                          key={`${u.orderId}-${u.code}`}
                          className="rounded-lg border border-white/10 bg-white/[0.02] px-3 py-2"
                        >
                          <div className="flex items-baseline justify-between gap-2">
                            <span className="tracking-[0.08em] text-white/85">{u.code}</span>
                            <span className="text-xs text-white/40">{formatWhen(u.at)}</span>
                          </div>
                          <p className="mt-1 text-xs text-white/45">
                            Order {u.orderId}
                            {u.amountTotal != null && u.currency
                              ? ` · ${u.currency} ${u.amountTotal.toFixed(2)}`
                              : ''}
                          </p>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  )
}
