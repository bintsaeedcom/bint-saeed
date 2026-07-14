'use client'

import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiCopy, FiRefreshCw, FiSearch, FiX } from 'react-icons/fi'
import type { GiftCardStatus } from '@/lib/giftCards/types'

type RedeemRow = {
  at: string
  amountAed: number
  amountInCurrency?: number
  currency?: string
  orderId?: string
}

type AdminGiftCard = {
  id: string
  code: string
  status: GiftCardStatus
  denominationAed: number
  balanceAed: number
  issuedAed: number
  currencyPaid?: string
  amountPaid?: number
  purchaserEmail?: string
  recipientEmail?: string
  recipientName?: string
  personalMessage?: string
  purchaseOrderId?: string
  expiresAt?: string | null
  createdAt: string
  updatedAt: string
  ledgerCount: number
  redeemCount: number
  redeems: RedeemRow[]
}

const STATUS_LABELS: Record<GiftCardStatus, string> = {
  active: 'Active',
  depleted: 'Depleted',
  void: 'Void',
  expired: 'Expired',
}

function formatAed(n: number) {
  return `AED ${n.toLocaleString('en-AE')}`
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

export default function AdminGiftCardsPage() {
  const [cards, setCards] = useState<AdminGiftCard[]>([])
  const [storage, setStorage] = useState('')
  const [loading, setLoading] = useState(true)
  const [q, setQ] = useState('')
  const [statusFilter, setStatusFilter] = useState<GiftCardStatus | ''>('')
  const [selected, setSelected] = useState<AdminGiftCard | null>(null)
  const [copied, setCopied] = useState(false)

  const load = useCallback(async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/admin/gift-cards')
      const data = await res.json()
      if (res.ok) {
        setCards(data.cards || [])
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

  const filtered = cards.filter((card) => {
    if (statusFilter && card.status !== statusFilter) return false
    if (!q.trim()) return true
    const s = q.toLowerCase()
    return (
      card.code.toLowerCase().includes(s) ||
      (card.purchaserEmail || '').toLowerCase().includes(s) ||
      (card.recipientEmail || '').toLowerCase().includes(s) ||
      (card.recipientName || '').toLowerCase().includes(s) ||
      (card.purchaseOrderId || '').toLowerCase().includes(s) ||
      card.id.toLowerCase().includes(s)
    )
  })

  const copyCode = async (code: string) => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1600)
    } catch {
      /* ignore */
    }
  }

  return (
    <div className="p-4 text-white sm:p-6 lg:p-10">
      <div className="mb-6 flex flex-col gap-4 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 data-document-h1="true" className="font-rozha text-2xl text-white sm:text-3xl">
            Gift cards
          </h1>
          <p className="mt-1 font-montserrat text-sm text-white/50">
            Purchases · redeem codes · remaining balance
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

      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <FiSearch className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/35" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search code, purchaser, recipient, order…"
            className="w-full rounded-xl border border-white/10 bg-white/5 py-2.5 pl-10 pr-4 font-montserrat text-sm text-white placeholder-white/35 focus:border-brand-dustyBlue/40 focus:outline-none"
          />
        </div>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter((e.target.value || '') as GiftCardStatus | '')}
          className="rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 font-montserrat text-sm text-white focus:border-brand-dustyBlue/40 focus:outline-none"
        >
          <option value="">All statuses</option>
          {(Object.keys(STATUS_LABELS) as GiftCardStatus[]).map((status) => (
            <option key={status} value={status}>
              {STATUS_LABELS[status]}
            </option>
          ))}
        </select>
      </div>

      <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left font-montserrat text-sm">
            <thead className="border-b border-white/10 bg-white/[0.04] text-[10px] uppercase tracking-[0.16em] text-white/45">
              <tr>
                <th className="px-4 py-3 font-medium">Purchaser</th>
                <th className="px-4 py-3 font-medium">Redeem code</th>
                <th className="px-4 py-3 font-medium">Value</th>
                <th className="px-4 py-3 font-medium">Balance</th>
                <th className="px-4 py-3 font-medium">Recipient</th>
                <th className="px-4 py-3 font-medium">Status</th>
                <th className="px-4 py-3 font-medium">Issued</th>
              </tr>
            </thead>
            <tbody>
              {loading && cards.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-4 py-10 text-center text-white/45">
                    Loading gift cards…
                  </td>
                </tr>
              ) : filtered.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-4 py-10 text-center text-white/45">
                    No gift cards yet. Codes appear here after paid purchases.
                  </td>
                </tr>
              ) : (
                filtered.map((card) => (
                  <tr
                    key={card.id}
                    onClick={() => setSelected(card)}
                    className="cursor-pointer border-b border-white/5 transition-colors hover:bg-white/[0.05]"
                  >
                    <td className="px-4 py-3">
                      <p className="text-white">{card.purchaserEmail || '—'}</p>
                      {card.purchaseOrderId ? (
                        <p className="mt-0.5 text-[11px] text-white/40">{card.purchaseOrderId}</p>
                      ) : null}
                    </td>
                    <td className="px-4 py-3">
                      <span className="font-semibold tracking-[0.12em] text-brand-dustyBlue">
                        {card.code}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-white/85">{formatAed(card.denominationAed)}</td>
                    <td className="px-4 py-3 text-white/85">{formatAed(card.balanceAed)}</td>
                    <td className="px-4 py-3">
                      <p className="text-white/80">{card.recipientName || '—'}</p>
                      {card.recipientEmail ? (
                        <p className="mt-0.5 text-[11px] text-white/40">{card.recipientEmail}</p>
                      ) : (
                        <p className="mt-0.5 text-[11px] text-white/35">Self / buyer</p>
                      )}
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={`inline-flex rounded-full px-2.5 py-1 text-[10px] uppercase tracking-[0.12em] ${
                          card.status === 'active'
                            ? 'bg-emerald-500/15 text-emerald-200'
                            : card.status === 'depleted'
                              ? 'bg-white/10 text-white/60'
                              : 'bg-amber-500/15 text-amber-100'
                        }`}
                      >
                        {STATUS_LABELS[card.status]}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-white/55">{formatWhen(card.createdAt)}</td>
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex justify-end bg-black/55"
            onClick={() => setSelected(null)}
          >
            <motion.aside
              initial={{ x: 40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 40, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 320, damping: 32 }}
              className="flex h-full w-full max-w-md flex-col border-l border-white/10 bg-[#16090e] shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between border-b border-white/10 px-5 py-4">
                <div>
                  <p className="font-montserrat text-[10px] uppercase tracking-[0.2em] text-white/40">
                    Gift card
                  </p>
                  <h2 className="mt-1 font-rozha text-2xl text-white">{selected.code}</h2>
                </div>
                <button
                  type="button"
                  onClick={() => setSelected(null)}
                  className="rounded-lg p-2 text-white/50 hover:bg-white/10 hover:text-white"
                >
                  <FiX className="h-5 w-5" />
                </button>
              </div>

              <div className="flex-1 space-y-5 overflow-y-auto px-5 py-5 font-montserrat text-sm">
                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => void copyCode(selected.code)}
                    className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-xs uppercase tracking-[0.14em] text-white hover:bg-white/10"
                  >
                    <FiCopy className="h-3.5 w-3.5" />
                    {copied ? 'Copied' : 'Copy code'}
                  </button>
                  <span
                    className={`inline-flex items-center rounded-full px-2.5 py-1 text-[10px] uppercase tracking-[0.12em] ${
                      selected.status === 'active'
                        ? 'bg-emerald-500/15 text-emerald-200'
                        : 'bg-white/10 text-white/60'
                    }`}
                  >
                    {STATUS_LABELS[selected.status]}
                  </span>
                </div>

                <section>
                  <h3 className="text-[10px] uppercase tracking-[0.16em] text-white/40">Purchased by</h3>
                  <p className="mt-1.5 text-white">{selected.purchaserEmail || '—'}</p>
                  {selected.purchaseOrderId ? (
                    <p className="mt-1 text-xs text-white/45">Order {selected.purchaseOrderId}</p>
                  ) : null}
                  {selected.currencyPaid && selected.amountPaid != null ? (
                    <p className="mt-1 text-xs text-white/45">
                      Paid {selected.amountPaid} {selected.currencyPaid}
                    </p>
                  ) : null}
                </section>

                <section>
                  <h3 className="text-[10px] uppercase tracking-[0.16em] text-white/40">Redeem code</h3>
                  <p className="mt-1.5 font-semibold tracking-[0.14em] text-brand-dustyBlue">
                    {selected.code}
                  </p>
                </section>

                <section className="grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
                    <p className="text-[10px] uppercase tracking-[0.14em] text-white/40">Issued</p>
                    <p className="mt-1 text-white">{formatAed(selected.issuedAed)}</p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
                    <p className="text-[10px] uppercase tracking-[0.14em] text-white/40">Balance</p>
                    <p className="mt-1 text-white">{formatAed(selected.balanceAed)}</p>
                  </div>
                </section>

                <section>
                  <h3 className="text-[10px] uppercase tracking-[0.16em] text-white/40">Recipient</h3>
                  <p className="mt-1.5 text-white">{selected.recipientName || '—'}</p>
                  <p className="mt-1 text-xs text-white/50">
                    {selected.recipientEmail || 'Delivered to purchaser / self'}
                  </p>
                  {selected.personalMessage ? (
                    <p className="mt-2 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-xs leading-relaxed text-white/70">
                      “{selected.personalMessage}”
                    </p>
                  ) : null}
                </section>

                <section>
                  <h3 className="text-[10px] uppercase tracking-[0.16em] text-white/40">Timeline</h3>
                  <p className="mt-1.5 text-xs text-white/55">Issued {formatWhen(selected.createdAt)}</p>
                  {selected.expiresAt ? (
                    <p className="mt-1 text-xs text-white/55">Expires {formatWhen(selected.expiresAt)}</p>
                  ) : null}
                </section>

                <section>
                  <h3 className="text-[10px] uppercase tracking-[0.16em] text-white/40">
                    Redeems ({selected.redeemCount})
                  </h3>
                  {selected.redeems.length === 0 ? (
                    <p className="mt-2 text-xs text-white/45">Not redeemed yet.</p>
                  ) : (
                    <ul className="mt-2 space-y-2">
                      {selected.redeems.map((row, index) => (
                        <li
                          key={`${row.at}-${index}`}
                          className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-white/75"
                        >
                          <p>
                            −{formatAed(row.amountAed)}
                            {row.orderId ? ` · ${row.orderId}` : ''}
                          </p>
                          <p className="mt-0.5 text-white/40">{formatWhen(row.at)}</p>
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              </div>
            </motion.aside>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  )
}
