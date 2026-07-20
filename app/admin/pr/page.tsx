'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'
import { FiExternalLink, FiRefreshCw } from 'react-icons/fi'

type PrProspect = {
  id: string
  researchedAt?: string
  region?: string
  vertical?: string
  orgName?: string
  personName?: string | null
  titleRole?: string | null
  talentName?: string | null
  cityCountry?: string
  website?: string | null
  contactEmail?: string | null
  contactFormUrl?: string | null
  contactHint?: string
  suggestedAngleId?: string
  priority?: number
  language?: string
  status?: string
  goal?: string
  tier?: string
  notes?: string
}

type PrDashboardPayload = {
  seeds: PrProspect[]
  ledgerCount: number
  ledgerRecent: PrProspect[]
  pendingMarkdown: string
  approvedMarkdown: string
  rejectedMarkdown: string
  repliesMarkdown: string
  latestBatch: {
    date: string
    summaryMarkdown: string | null
    prospectCount: number
    prospects: PrProspect[]
    draftCount: number
    draftIds: string[]
  } | null
  batches: string[]
}

function StatCard({ label, value, hint }: { label: string; value: string | number; hint?: string }) {
  return (
    <div className="rounded-[4px] border border-white/10 bg-white/[0.04] px-4 py-3">
      <p className="font-montserrat text-[10px] uppercase tracking-[0.18em] text-brand-dustyBlue">{label}</p>
      <p className="mt-2 font-rozha text-2xl text-brand-stone">{value}</p>
      {hint ? <p className="mt-1 font-montserrat text-[11px] text-white/45">{hint}</p> : null}
    </div>
  )
}

function ProspectRow({ item }: { item: PrProspect }) {
  return (
    <li className="rounded-[4px] border border-white/10 bg-white/[0.03] px-4 py-3">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <p className="font-montserrat text-sm text-white">{item.orgName || item.id}</p>
        <p className="font-montserrat text-[10px] uppercase tracking-[0.14em] text-white/45">
          {[item.vertical, item.goal, item.tier ? `Tier ${item.tier}` : null].filter(Boolean).join(' · ')}
        </p>
      </div>
      <p className="mt-1 font-montserrat text-[12px] text-white/60">
        {[item.personName || item.talentName, item.titleRole, item.cityCountry].filter(Boolean).join(' · ') ||
          item.contactHint ||
          '—'}
      </p>
      <div className="mt-2 flex flex-wrap gap-3 font-montserrat text-[11px]">
        {item.website ? (
          <a
            href={item.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-brand-dustyBlue hover:underline"
          >
            Site <FiExternalLink className="h-3 w-3" />
          </a>
        ) : null}
        {item.suggestedAngleId ? <span className="text-white/45">{item.suggestedAngleId}</span> : null}
        {item.priority != null ? <span className="text-white/45">P{item.priority}</span> : null}
        {item.status ? <span className="text-white/45">{item.status}</span> : null}
      </div>
    </li>
  )
}

export default function AdminPrPage() {
  const [data, setData] = useState<PrDashboardPayload | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [tab, setTab] = useState<'seeds' | 'pending' | 'approved' | 'replies' | 'ledger'>('seeds')

  const load = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('/api/admin/pr')
      const json = (await res.json()) as PrDashboardPayload & { error?: string }
      if (!res.ok) {
        setError(json.error || 'Failed to load')
        setData(null)
        return
      }
      setData(json)
    } catch {
      setError('Failed to load')
      setData(null)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    void load()
  }, [load])

  const byGoal = useMemo(() => {
    const seeds = data?.seeds || []
    const counts: Record<string, number> = {}
    for (const seed of seeds) {
      const key = seed.goal || seed.vertical || 'other'
      counts[key] = (counts[key] || 0) + 1
    }
    return counts
  }, [data?.seeds])

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-10">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="font-montserrat text-[10px] uppercase tracking-[0.22em] text-brand-dustyBlue">Owner</p>
          <h1 className="mt-2 font-rozha text-3xl text-brand-stone sm:text-4xl">PR dashboard</h1>
          <p className="mt-2 max-w-2xl font-montserrat text-sm leading-relaxed text-white/55">
            Corporate outreach queue — research, drafts, approvals. Nothing sends until you approve. Pitches go from
            the house mailbox, not Resend.
          </p>
        </div>
        <button
          type="button"
          onClick={() => void load()}
          className="inline-flex items-center gap-2 rounded-[4px] border border-white/15 px-3 py-2 font-montserrat text-[11px] uppercase tracking-[0.14em] text-white/70 hover:border-white/30 hover:text-white"
        >
          <FiRefreshCw className={`h-3.5 w-3.5 ${loading ? 'animate-spin' : ''}`} />
          Refresh
        </button>
      </div>

      {error ? (
        <p className="mt-6 rounded-[4px] border border-brand-clayRed/40 bg-brand-clayRed/15 px-4 py-3 font-montserrat text-sm text-[#f5e6dc]">
          {error}
        </p>
      ) : null}

      <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Seeds" value={data?.seeds.length ?? '—'} hint="Public desks & targets" />
        <StatCard label="Ledger" value={data?.ledgerCount ?? '—'} hint="All researched prospects" />
        <StatCard
          label="Latest batch"
          value={data?.latestBatch?.date ?? '—'}
          hint={
            data?.latestBatch
              ? `${data.latestBatch.prospectCount} prospects · ${data.latestBatch.draftCount} drafts`
              : 'Run PR daily in Agent chat'
          }
        />
        <StatCard
          label="Batches"
          value={data?.batches.length ?? '—'}
          hint={data?.batches.slice(0, 3).join(' · ') || 'None yet'}
        />
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {(
          [
            ['seeds', 'Seeds'],
            ['pending', 'Pending'],
            ['approved', 'Approved'],
            ['replies', 'Replies'],
            ['ledger', 'Ledger'],
          ] as const
        ).map(([id, label]) => (
          <button
            key={id}
            type="button"
            onClick={() => setTab(id)}
            className={`rounded-[4px] px-3 py-2 font-montserrat text-[11px] uppercase tracking-[0.14em] ${
              tab === id ? 'bg-white/15 text-white' : 'text-white/55 hover:bg-white/10 hover:text-white'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {tab === 'seeds' ? (
        <section className="mt-6">
          <div className="mb-4 flex flex-wrap gap-3">
            {Object.entries(byGoal).map(([goal, count]) => (
              <span
                key={goal}
                className="rounded-[4px] border border-white/10 px-3 py-1.5 font-montserrat text-[11px] uppercase tracking-[0.12em] text-white/60"
              >
                {goal}: {count}
              </span>
            ))}
          </div>
          <ul className="space-y-3">
            {(data?.seeds || []).map((item) => (
              <ProspectRow key={item.id} item={item} />
            ))}
          </ul>
        </section>
      ) : null}

      {tab === 'pending' ? (
        <section className="mt-6">
          <pre className="overflow-x-auto whitespace-pre-wrap rounded-[4px] border border-white/10 bg-white/[0.03] p-4 font-montserrat text-[12px] leading-relaxed text-white/75">
            {data?.pendingMarkdown || 'No pending queue yet.'}
          </pre>
        </section>
      ) : null}

      {tab === 'approved' ? (
        <section className="mt-6">
          <pre className="overflow-x-auto whitespace-pre-wrap rounded-[4px] border border-white/10 bg-white/[0.03] p-4 font-montserrat text-[12px] leading-relaxed text-white/75">
            {data?.approvedMarkdown || 'No approved drafts yet.'}
          </pre>
        </section>
      ) : null}

      {tab === 'replies' ? (
        <section className="mt-6">
          <pre className="overflow-x-auto whitespace-pre-wrap rounded-[4px] border border-white/10 bg-white/[0.03] p-4 font-montserrat text-[12px] leading-relaxed text-white/75">
            {data?.repliesMarkdown || 'No inbound replies logged yet.'}
          </pre>
        </section>
      ) : null}

      {tab === 'ledger' ? (
        <section className="mt-6">
          {data?.latestBatch?.summaryMarkdown ? (
            <pre className="mb-6 overflow-x-auto whitespace-pre-wrap rounded-[4px] border border-white/10 bg-white/[0.03] p-4 font-montserrat text-[12px] leading-relaxed text-white/75">
              {data.latestBatch.summaryMarkdown}
            </pre>
          ) : null}
          <ul className="space-y-3">
            {(data?.ledgerRecent?.length ? data.ledgerRecent : data?.latestBatch?.prospects || []).map((item) => (
              <ProspectRow key={item.id} item={item} />
            ))}
          </ul>
          {!data?.ledgerCount && !data?.latestBatch?.prospectCount ? (
            <p className="mt-4 font-montserrat text-sm text-white/50">
              Ledger empty — run “Bint Saeed PR daily” in Agent chat to fill the first batch.
            </p>
          ) : null}
        </section>
      ) : null}
    </div>
  )
}
