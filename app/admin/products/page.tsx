'use client'

import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import { FiRefreshCw, FiSave, FiRotateCcw } from 'react-icons/fi'

type Row = {
  id: string
  name: string
  price: number
  category: string
  image: string
  override: { price?: number; name?: string; published?: boolean }
}

export default function AdminProductsPage() {
  const [rows, setRows] = useState<Row[]>([])
  const [loading, setLoading] = useState(true)
  const [editing, setEditing] = useState<Record<string, { name: string; price: string; published: boolean }>>({})
  const [savingId, setSavingId] = useState<string | null>(null)

  const load = useCallback(async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/admin/products/overrides')
      const data = await res.json()
      if (res.ok && data.products) {
        setRows(data.products)
        const next: Record<string, { name: string; price: string; published: boolean }> = {}
        for (const r of data.products as Row[]) {
          const effName = r.override.name ?? r.name
          const effPrice = r.override.price ?? r.price
          const pub = r.override.published !== false
          next[r.id] = {
            name: effName,
            price: String(effPrice),
            published: pub,
          }
        }
        setEditing(next)
      }
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    load()
  }, [load])

  const save = async (productId: string, clear?: boolean) => {
    setSavingId(productId)
    try {
      const ed = editing[productId]
      const res = await fetch('/api/admin/products/overrides', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          productId,
          clear: !!clear,
          override: clear
            ? {}
            : {
                name: ed?.name,
                price: ed?.price ? Number(ed.price) : undefined,
                published: ed?.published,
              },
        }),
      })
      if (res.ok) await load()
    } finally {
      setSavingId(null)
    }
  }

  return (
    <div className="p-6 lg:p-10">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 data-document-h1="true" className="font-rozha text-3xl text-white">Catalog</h1>
          <p className="mt-1 max-w-xl font-roboto text-sm text-white/50">
            Base data lives in <code className="text-brand-dustyBlue/80">data/products.ts</code>. Overrides here adjust
            display name, price, and visibility without redeploying.
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

      <div className="space-y-4">
        {loading && rows.length === 0 ? (
          <p className="text-white/45">Loading catalog…</p>
        ) : (
          rows.map((r) => {
            const ed = editing[r.id]
            if (!ed) return null
            const effName = r.override.name ?? r.name
            const effPrice = r.override.price ?? r.price
            const effVisible = r.override.published !== false
            const dirty =
              ed.name !== effName || Number(ed.price) !== effPrice || ed.published !== effVisible
            return (
              <div
                key={r.id}
                className="flex flex-col gap-4 rounded-xl border border-white/10 bg-white/[0.04] p-4 sm:flex-row sm:items-start"
              >
                <div className="relative h-28 w-20 shrink-0 overflow-hidden rounded-lg bg-stone-800 sm:h-32 sm:w-24">
                  {r.image ? (
                    <Image src={r.image} alt="" fill className="object-cover" sizes="96px" />
                  ) : null}
                </div>
                <div className="min-w-0 flex-1 space-y-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono text-[10px] text-white/35">{r.id}</span>
                    <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] uppercase tracking-wider text-white/50">
                      {r.category}
                    </span>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div>
                      <label className="text-[10px] uppercase tracking-wider text-white/40">Display name</label>
                      <input
                        value={ed.name}
                        onChange={(e) => setEditing((prev) => ({ ...prev, [r.id]: { ...prev[r.id], name: e.target.value } }))}
                        className="mt-1 w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-sm text-white focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] uppercase tracking-wider text-white/40">Price (AED)</label>
                      <input
                        type="number"
                        min={0}
                        step={1}
                        value={ed.price}
                        onChange={(e) => setEditing((prev) => ({ ...prev, [r.id]: { ...prev[r.id], price: e.target.value } }))}
                        className="mt-1 w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-sm text-white focus:outline-none"
                      />
                    </div>
                  </div>
                  <label className="flex cursor-pointer items-center gap-2 font-roboto text-sm text-white/80">
                    <input
                      type="checkbox"
                      checked={ed.published}
                      onChange={(e) =>
                        setEditing((prev) => ({ ...prev, [r.id]: { ...prev[r.id], published: e.target.checked } }))
                      }
                      className="rounded border-white/30"
                    />
                    Published (visible in shop)
                  </label>
                  <div className="flex flex-wrap gap-2">
                    <button
                      type="button"
                      disabled={savingId === r.id || !dirty}
                      onClick={() => save(r.id)}
                      className="inline-flex items-center gap-2 rounded-lg bg-brand-dustyBlue px-4 py-2 text-xs uppercase tracking-wider text-[#1a0008] disabled:opacity-40"
                    >
                      <FiSave className="h-3.5 w-3.5" />
                      Save
                    </button>
                    <button
                      type="button"
                      disabled={savingId === r.id || Object.keys(r.override).length === 0}
                      onClick={() => save(r.id, true)}
                      className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-4 py-2 text-xs uppercase tracking-wider text-white/70 hover:bg-white/5 disabled:opacity-40"
                    >
                      <FiRotateCcw className="h-3.5 w-3.5" />
                      Reset overrides
                    </button>
                  </div>
                </div>
              </div>
            )
          })
        )}
      </div>
    </div>
  )
}
