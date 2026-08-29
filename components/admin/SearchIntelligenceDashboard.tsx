'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'
import {
  FiDownload,
  FiFilter,
  FiRefreshCw,
  FiSearch,
  FiSettings,
  FiFileText,
  FiEdit3,
} from 'react-icons/fi'
import { actionLabel, filterByClusterGroup, filterBySection, wheelClusters } from '@/lib/search-intelligence/clusters'
import type {
  ContentBrief,
  GscSyncInfo,
  KeywordRecord,
  ProviderConnectionStatus,
  SearchIntelligenceResponse,
  SearchPulse,
  SeedCollection,
  SiCountry,
  SiLanguage,
  SiProvenance,
  SiSourceId,
  SiStatus,
} from '@/lib/search-intelligence/types'
import type { DiscoveryDepth, MicroTestDiagnostic } from '@/lib/search-intelligence/discovery/types'
import { MICRO_TEST_MAX_LIVE_CALLS } from '@/lib/search-intelligence/discovery/microTestPatterns'
import type { DataForSeoUsageSnapshot } from '@/lib/search-intelligence/dataforseo/usage'
import { SI_COUNTRIES, SI_LANGUAGES, SI_SOURCE_IDS } from '@/lib/search-intelligence/types'

type TabId =
  | 'results'
  | 'topic_map'
  | 'content_gap'
  | 'gsc'
  | 'planner'
  | 'settings'

const SOURCE_LABELS: Record<SiSourceId, string> = {
  google: 'Google',
  bing: 'Bing',
  youtube: 'YouTube',
  tiktok: 'TikTok',
  pinterest: 'Pinterest',
  instagram: 'Instagram',
  google_search_console: 'GSC',
  dataforseo: 'DataForSEO',
  google_trends: 'Trends',
  generated: 'Generated',
}

function matchesSourceFilter(r: KeywordRecord, filter: SourceFilter): boolean {
  if (filter === 'all') return true
  if (filter === 'gsc') return r.sources.some((s) => s.sourceId === 'google_search_console')
  if (filter === 'dataforseo') return r.sources.some((s) => s.sourceId === 'dataforseo')
  if (filter === 'generated') return recordProvenance(r) === 'generated'
  if (filter === 'inferred') return recordProvenance(r) === 'inferred'
  return true
}

type SourceFilter = 'all' | 'gsc' | 'dataforseo' | 'generated' | 'inferred'

const SOURCE_FILTERS: { id: SourceFilter; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'gsc', label: 'GSC' },
  { id: 'dataforseo', label: 'DataForSEO' },
  { id: 'generated', label: 'Generated' },
  { id: 'inferred', label: 'Inferred' },
]

const SECTIONS = [
  { id: 'all' as const, label: 'All' },
  { id: 'quick_wins' as const, label: 'Quick Wins' },
  { id: 'new_content' as const, label: 'New Content' },
  { id: 'commercial' as const, label: 'Commercial' },
  { id: 'heritage' as const, label: 'Heritage Authority' },
  { id: 'seasonal' as const, label: 'Seasonal' },
  { id: 'accessories' as const, label: 'Accessories' },
]

function StatCard({ label, value, hint }: { label: string; value: string | number; hint?: string }) {
  return (
    <div className="rounded-[4px] border border-white/10 bg-white/[0.04] px-4 py-3">
      <p className="font-montserrat text-[10px] uppercase tracking-[0.18em] text-brand-dustyBlue">{label}</p>
      <p className="mt-2 font-rozha text-2xl text-brand-stone">{value}</p>
      {hint ? <p className="mt-1 font-montserrat text-[11px] text-white/45">{hint}</p> : null}
    </div>
  )
}

function Badge({
  children,
  tone = 'neutral',
}: {
  children: React.ReactNode
  tone?: 'observed' | 'inferred' | 'generated' | 'gsc' | 'neutral'
}) {
  const tones = {
    observed: 'border-emerald-400/30 bg-emerald-500/10 text-emerald-200',
    inferred: 'border-violet-400/30 bg-violet-500/10 text-violet-100',
    generated: 'border-amber-400/30 bg-amber-500/10 text-amber-100',
    gsc: 'border-sky-400/30 bg-sky-500/10 text-sky-100',
    neutral: 'border-white/15 bg-white/5 text-white/70',
  }
  return (
    <span className={`inline-flex rounded px-2 py-0.5 font-montserrat text-[10px] uppercase tracking-wider ${tones[tone]}`}>
      {children}
    </span>
  )
}

function provenanceLabel(p: SiProvenance): string {
  if (p === 'observed') return 'Observed'
  if (p === 'inferred') return 'Inferred'
  return 'Generated'
}

function provenanceTone(p: SiProvenance): 'observed' | 'inferred' | 'generated' {
  return p
}

function recordProvenance(r: KeywordRecord): SiProvenance {
  return r.provenance ?? r.dataCategory ?? 'generated'
}

function metricCell(v: number | string | null, suffix = '') {
  if (v == null || v === 'unavailable') {
    return <span className="text-white/35">—</span>
  }
  return (
    <span>
      {v}
      {suffix}
    </span>
  )
}

function TopicWheel({
  seed,
  clusters,
  active,
  onSelect,
}: {
  seed: string
  clusters: { id: string; label: string; count: number }[]
  active: string | null
  onSelect: (id: string | null) => void
}) {
  const radius = 120
  const cx = 150
  const cy = 150

  return (
    <div className="relative mx-auto h-[300px] w-full max-w-[320px]">
      <svg viewBox="0 0 300 300" className="h-full w-full" role="img" aria-label="Topic cluster wheel">
        <circle cx={cx} cy={cy} r={42} className="fill-[#2d141e] stroke-white/20" strokeWidth={1} />
        <text
          x={cx}
          y={cy}
          textAnchor="middle"
          dominantBaseline="middle"
          className="fill-brand-stone font-montserrat text-[11px]"
        >
          {seed.length > 14 ? `${seed.slice(0, 12)}…` : seed}
        </text>
        {clusters.map((c, i) => {
          const angle = (i / clusters.length) * Math.PI * 2 - Math.PI / 2
          const x = cx + Math.cos(angle) * radius
          const y = cy + Math.sin(angle) * radius
          const selected = active === c.id
          return (
            <g key={c.id} className="cursor-pointer" onClick={() => onSelect(selected ? null : c.id)}>
              <circle
                cx={x}
                cy={y}
                r={selected ? 28 : 24}
                className={selected ? 'fill-brand-dustyBlue/30 stroke-brand-stone' : 'fill-white/10 stroke-white/25'}
                strokeWidth={1}
              />
              <text
                x={x}
                y={y - 4}
                textAnchor="middle"
                className="fill-white font-montserrat text-[8px] uppercase tracking-wide"
              >
                {c.label.length > 10 ? c.label.slice(0, 9) : c.label}
              </text>
              <text x={x} y={y + 8} textAnchor="middle" className="fill-white/60 font-montserrat text-[9px]">
                {c.count}
              </text>
            </g>
          )
        })}
      </svg>
    </div>
  )
}

function ResultsTable({
  rows,
  onBrief,
  onStatus,
  compact,
}: {
  rows: KeywordRecord[]
  onBrief: (r: KeywordRecord) => void
  onStatus: (id: string, status: SiStatus) => void
  compact?: boolean
}) {
  if (!rows.length) {
    return (
      <p className="py-12 text-center font-montserrat text-sm text-white/50">
        No results yet. Run a search with a seed topic.
      </p>
    )
  }

  if (compact) {
    return (
      <div className="space-y-3">
        {rows.map((r) => (
          <div key={r.id} className="rounded border border-white/10 bg-white/[0.03] p-4">
            <div className="flex flex-wrap items-start justify-between gap-2">
              <p className="font-montserrat text-sm text-brand-stone">{r.keyword}</p>
              <Badge tone={provenanceTone(recordProvenance(r))}>
                {provenanceLabel(recordProvenance(r))}
                {r.isNewDiscovery ? ' · NEW' : ''}
              </Badge>
            </div>
            <p className="mt-2 font-montserrat text-[11px] text-white/50">
              Score {r.opportunityScore} · {actionLabel(r.recommendedAction)}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => onBrief(r)}
                className="rounded border border-white/20 px-2 py-1 font-montserrat text-[10px] uppercase tracking-wider text-white/80"
              >
                Brief
              </button>
            </div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="overflow-x-auto rounded border border-white/10">
      <table className="min-w-[1200px] w-full text-left font-montserrat text-[11px] text-white/80">
        <thead className="border-b border-white/10 bg-white/[0.03] text-[10px] uppercase tracking-wider text-brand-dustyBlue">
          <tr>
            <th className="px-3 py-2">Keyword</th>
            <th className="px-3 py-2">Cluster</th>
            <th className="px-3 py-2">Source</th>
            <th className="px-3 py-2">Intent</th>
            <th className="px-3 py-2">Vol</th>
            <th className="px-3 py-2">CPC</th>
            <th className="px-3 py-2">Diff</th>
            <th className="px-3 py-2">Rank</th>
            <th className="px-3 py-2">Impr</th>
            <th className="px-3 py-2">Score</th>
            <th className="px-3 py-2">Action</th>
            <th className="px-3 py-2">Status</th>
            <th className="px-3 py-2" />
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.id} className="border-b border-white/5 hover:bg-white/[0.02]">
              <td className="max-w-[200px] px-3 py-2 text-brand-stone">{r.keyword}</td>
              <td className="px-3 py-2">{r.clusterGroup}</td>
              <td className="px-3 py-2">
                <div className="flex flex-wrap gap-1">
                  {r.sources.map((s) => (
                    <Badge key={s.sourceId} tone={s.sourceId === 'google_search_console' ? 'gsc' : provenanceTone(recordProvenance(r))}>
                      {SOURCE_LABELS[s.sourceId] ?? s.sourceLabel}
                    </Badge>
                  ))}
                </div>
              </td>
              <td className="px-3 py-2">{r.searchIntent.replace('_', ' ')}</td>
              <td className="px-3 py-2">{metricCell(r.searchVolume)}</td>
              <td className="px-3 py-2">{metricCell(r.cpc)}</td>
              <td className="px-3 py-2">{metricCell(r.difficulty)}</td>
              <td className="px-3 py-2">{metricCell(r.ranking)}</td>
              <td className="px-3 py-2">{metricCell(r.impressions)}</td>
              <td className="px-3 py-2 font-medium text-brand-stone">{r.opportunityScore}</td>
              <td className="max-w-[140px] px-3 py-2">{actionLabel(r.recommendedAction)}</td>
              <td className="px-3 py-2">
                <select
                  value={r.status}
                  onChange={(e) => onStatus(r.id, e.target.value as SiStatus)}
                  className="rounded border border-white/15 bg-transparent px-1 py-0.5 text-[10px] text-white/70"
                >
                  {(['new', 'reviewing', 'approved', 'planned', 'writing', 'published', 'rejected'] as SiStatus[]).map(
                    (s) => (
                      <option key={s} value={s} className="bg-[#1a0a10]">
                        {s}
                      </option>
                    ),
                  )}
                </select>
              </td>
              <td className="px-3 py-2">
                <button
                  type="button"
                  onClick={() => onBrief(r)}
                  className="text-brand-dustyBlue hover:text-brand-stone"
                  title="Create content brief"
                >
                  <FiFileText />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function SearchIntelligenceDashboard() {
  const [seed, setSeed] = useState('abaya')
  const [country, setCountry] = useState<SiCountry>('UAE')
  const [language, setLanguage] = useState<SiLanguage>('en')
  const [sources, setSources] = useState<SiSourceId[]>(['google_search_console', 'generated'])
  const [tab, setTab] = useState<TabId>('results')
  const [section, setSection] = useState<(typeof SECTIONS)[number]['id']>('all')
  const [wheelFilter, setWheelFilter] = useState<string | null>(null)
  const [tableQuery, setTableQuery] = useState('')
  const [sortBy, setSortBy] = useState<'score' | 'volume' | 'ranking' | 'impressions'>('score')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [data, setData] = useState<SearchIntelligenceResponse | null>(null)
  const [providers, setProviders] = useState<ProviderConnectionStatus[]>([])
  const [brief, setBrief] = useState<ContentBrief | null>(null)
  const [draftNote, setDraftNote] = useState<string | null>(null)

  const [gscSync, setGscSync] = useState<GscSyncInfo | null>(null)
  const [gscPeriod, setGscPeriod] = useState('28d')
  const [gscSyncing, setGscSyncing] = useState(false)
  const [discovering, setDiscovering] = useState(false)
  const [seedCollections, setSeedCollections] = useState<SeedCollection[]>([])
  const [seedsSaving, setSeedsSaving] = useState(false)
  const [discoveryDepth, setDiscoveryDepth] = useState<DiscoveryDepth>('quick')
  const [discoverDepth, setDiscoverDepth] = useState<DiscoveryDepth>('quick')
  const [refreshLive, setRefreshLive] = useState(false)
  const [sourceFilter, setSourceFilter] = useState<SourceFilter>('all')
  const [dfsUsage, setDfsUsage] = useState<DataForSeoUsageSnapshot | null>(null)
  const [discoverEstimate, setDiscoverEstimate] = useState<string | null>(null)
  const [enriching, setEnriching] = useState(false)
  const [microTestSeed, setMicroTestSeed] = useState('Al Talli')
  const [microTesting, setMicroTesting] = useState(false)
  const [microDiagnostic, setMicroDiagnostic] = useState<MicroTestDiagnostic | null>(null)
  const [microPatterns, setMicroPatterns] = useState<string[]>([])
  const [microResults, setMicroResults] = useState<{ keyword: string; expansionPatterns: string[] }[]>([])
  const [connectionTesting, setConnectionTesting] = useState(false)
  const [connectionResult, setConnectionResult] = useState<string | null>(null)

  const sessionId = useMemo(() => {
    if (typeof crypto !== 'undefined' && crypto.randomUUID) return crypto.randomUUID()
    return `si-${Date.now()}`
  }, [])

  const loadGscStatus = useCallback(async () => {
    const res = await fetch('/api/admin/search-intelligence/gsc/sync')
    if (res.ok) {
      const json = await res.json()
      setGscSync(json.sync ?? null)
    }
  }, [])

  const loadSeeds = useCallback(async () => {
    const res = await fetch('/api/admin/search-intelligence/seeds')
    if (res.ok) {
      const json = await res.json()
      setSeedCollections(json.collections ?? [])
    }
  }, [])

  const loadDfsUsage = useCallback(async () => {
    const res = await fetch(`/api/admin/search-intelligence/dataforseo/usage?sessionId=${sessionId}`)
    if (res.ok) {
      const json = await res.json()
      setDfsUsage(json.usage ?? null)
    }
  }, [sessionId])

  const loadProviders = useCallback(async () => {
    const res = await fetch('/api/admin/search-intelligence')
    if (res.ok) {
      const json = await res.json()
      setProviders(json.providers ?? [])
    }
    await Promise.all([loadGscStatus(), loadSeeds(), loadDfsUsage()])
  }, [loadGscStatus, loadSeeds, loadDfsUsage])

  const runSearch = useCallback(async () => {
    setLoading(true)
    setError(null)
    setBrief(null)
    try {
      const res = await fetch('/api/admin/search-intelligence', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          seedTopic: seed,
          country,
          language,
          sources,
          discoveryDepth,
          refreshLiveData: refreshLive,
          sessionId,
        }),
      })
      const json = await res.json()
      if (!res.ok) {
        setError(json.error || 'Search failed')
        return
      }
      setData(json as SearchIntelligenceResponse)
      setProviders(json.providers ?? [])
      if (json.gscSync) setGscSync(json.gscSync)
      await loadDfsUsage()
    } catch {
      setError('Search failed')
    } finally {
      setLoading(false)
    }
  }, [seed, country, language, sources, discoveryDepth, refreshLive, sessionId, loadDfsUsage])

  const filteredRows = useMemo(() => {
    if (!data) return []
    let rows = filterBySection(data.all, section)
    rows = filterByClusterGroup(rows, wheelFilter)
    rows = rows.filter((r) => matchesSourceFilter(r, sourceFilter))
    if (tableQuery.trim()) {
      const q = tableQuery.toLowerCase()
      rows = rows.filter((r) => r.keyword.toLowerCase().includes(q))
    }
    rows = [...rows].sort((a, b) => {
      if (sortBy === 'score') return b.opportunityScore - a.opportunityScore
      if (sortBy === 'volume') return (b.searchVolume ?? -1) - (a.searchVolume ?? -1)
      if (sortBy === 'ranking') return (a.ranking ?? 999) - (b.ranking ?? 999)
      return (b.impressions ?? -1) - (a.impressions ?? -1)
    })
    return rows
  }, [data, section, wheelFilter, tableQuery, sortBy, sourceFilter])

  const wheel = useMemo(() => (data ? wheelClusters(data.all) : []), [data])

  const syncGsc = async () => {
    setGscSyncing(true)
    setError(null)
    try {
      const res = await fetch('/api/admin/search-intelligence/gsc/sync', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ periodId: gscPeriod, comparison: 'previous_period' }),
      })
      const json = await res.json()
      if (!res.ok) {
        setError(json.error || 'GSC sync failed')
      }
      if (json.sync) setGscSync(json.sync)
    } catch {
      setError('GSC sync failed')
    } finally {
      setGscSyncing(false)
    }
  }

  const runDiscover = async (confirmed = false) => {
    setDiscovering(true)
    setError(null)
    setDiscoverEstimate(null)
    try {
      const res = await fetch('/api/admin/search-intelligence/discover', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          country,
          language,
          depth: discoverDepth,
          refreshLive,
          confirmed,
          sessionId,
        }),
      })
      const json = await res.json()
      if (json.needsConfirmation) {
        const est = json.estimate
        const msg = `Estimated ${est.estimatedLiveRequests} live API requests (${est.cachedPatterns} cached). Confirm Standard/Deep discovery?`
        setDiscoverEstimate(msg)
        if (window.confirm(msg)) {
          await runDiscover(true)
        }
        return
      }
      if (!res.ok) {
        setError(json.error || 'Discovery failed')
        return
      }
      if (json.errors?.length) {
        setError(json.errors.slice(0, 3).map((e: { message: string }) => e.message).join(' · '))
      }
      if (json.discovered?.length) {
        setData((prev) =>
          prev
            ? {
                ...prev,
                all: json.discovered,
                observed: json.discovered.filter((r: KeywordRecord) => recordProvenance(r) === 'observed'),
                inferred: json.discovered.filter((r: KeywordRecord) => recordProvenance(r) === 'inferred'),
                generated: json.discovered.filter((r: KeywordRecord) => recordProvenance(r) === 'generated'),
                searchPulse: {
                  ...prev.searchPulse,
                  newSearchesDiscovered: json.newCount ?? 0,
                },
              }
            : prev,
        )
      }
      await loadDfsUsage()
    } catch {
      setError('Discovery failed')
    } finally {
      setDiscovering(false)
    }
  }

  const loadMicroPreview = useCallback(async () => {
    const res = await fetch(
      `/api/admin/search-intelligence/dataforseo/micro-test?seed=${encodeURIComponent(microTestSeed)}&country=${encodeURIComponent(country)}`,
    )
    if (res.ok) {
      const json = await res.json()
      setMicroPatterns(json.patterns ?? [])
    }
  }, [microTestSeed, country])

  useEffect(() => {
    if (tab === 'settings') void loadMicroPreview()
  }, [tab, loadMicroPreview])

  const testConnection = async () => {
    setConnectionTesting(true)
    setConnectionResult(null)
    try {
      const res = await fetch('/api/admin/search-intelligence/dataforseo/test-connection', { method: 'POST' })
      const json = await res.json()
      if (json.ok) {
        const balance =
          json.balanceUsd != null ? ` · Balance $${Number(json.balanceUsd).toFixed(2)}` : ''
        const cost = json.costUsd != null ? ` · Call cost $${Number(json.costUsd).toFixed(6)}` : ''
        setConnectionResult(
          `${json.message}${json.apiLogin ? ` (${json.apiLogin})` : ''}${balance}${cost}`,
        )
      } else {
        setConnectionResult(json.message || 'Connection failed')
      }
      await loadDfsUsage()
    } catch {
      setConnectionResult('Connection test failed')
    } finally {
      setConnectionTesting(false)
    }
  }

  const runMicroTest = async () => {
    setMicroTesting(true)
    setError(null)
    setMicroDiagnostic(null)
    setMicroResults([])
    try {
      const res = await fetch('/api/admin/search-intelligence/dataforseo/micro-test', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          seed: microTestSeed,
          country,
          language,
          refreshLive,
          sessionId,
        }),
      })
      const json = await res.json()
      if (!res.ok) {
        setError(json.error || 'Micro test failed')
        return
      }
      setMicroPatterns(json.patternsUsed ?? [])
      setMicroDiagnostic(json.diagnostic ?? null)
      setMicroResults(json.results ?? [])
      if (json.errors?.length) {
        setError(json.errors.map((e: { message: string }) => e.message).join(' · '))
      }
      await loadDfsUsage()
    } catch {
      setError('Micro test failed')
    } finally {
      setMicroTesting(false)
    }
  }

  const enrichTop20 = async () => {
    if (!data?.all.length) return
    setEnriching(true)
    try {
      const res = await fetch('/api/admin/search-intelligence/dataforseo/enrich', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          records: data.all,
          mode: 'top20',
          country,
          language,
          sessionId,
        }),
      })
      const json = await res.json()
      if (res.ok && json.records) {
        setData((prev) => (prev ? { ...prev, all: json.records } : prev))
        await loadDfsUsage()
      }
    } finally {
      setEnriching(false)
    }
  }

  const saveSeeds = async () => {
    setSeedsSaving(true)
    try {
      const res = await fetch('/api/admin/search-intelligence/seeds', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ collections: seedCollections }),
      })
      if (res.ok) {
        const json = await res.json()
        setSeedCollections(json.collections ?? [])
      }
    } finally {
      setSeedsSaving(false)
    }
  }

  const pulse: SearchPulse | null = data?.searchPulse ?? null

  useEffect(() => {
    void loadProviders()
  }, [loadProviders])

  const toggleSource = (id: SiSourceId) => {
    setSources((prev) => (prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]))
  }

  const createBrief = async (opp: KeywordRecord) => {
    const res = await fetch('/api/admin/search-intelligence/briefs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ opportunity: opp }),
    })
    const json = await res.json()
    if (res.ok) {
      setBrief(json.brief)
      setTab('planner')
    }
  }

  const updateStatus = async (id: string, status: SiStatus) => {
    await fetch('/api/admin/search-intelligence', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, status }),
    })
    setData((prev) =>
      prev
        ? {
            ...prev,
            all: prev.all.map((r) => (r.id === id ? { ...r, status } : r)),
          }
        : prev,
    )
  }

  const draftArticle = () => {
    if (!brief) return
    setDraftNote(
      `AI draft placeholder for "${brief.recommendedTitle}". Connect SEARCH_INTEL_AI_PROVIDER when ready. Outline: ${brief.outline.map((o) => o.h2).join(' → ')}`,
    )
  }

  return (
    <div className="p-4 md:p-8">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-montserrat text-[10px] uppercase tracking-[0.28em] text-brand-dustyBlue">Owner · SEO</p>
          <h1 className="mt-2 font-rozha text-3xl text-brand-stone md:text-4xl">Search Intelligence</h1>
          <p className="mt-2 max-w-2xl font-montserrat text-sm text-white/55">
            Answer-engine for Bint Saeed — observed signals from connected sources plus clearly labelled generated opportunities.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <a
            href="/api/admin/search-intelligence/export"
            className="inline-flex items-center gap-2 rounded border border-white/20 px-3 py-2 font-montserrat text-[11px] uppercase tracking-wider text-white/80 hover:bg-white/10"
          >
            <FiDownload /> Export CSV
          </a>
          <button
            type="button"
            disabled={discovering}
            onClick={() => void runDiscover(false)}
            className="inline-flex items-center gap-2 rounded border border-white/20 px-3 py-2 font-montserrat text-[11px] uppercase tracking-wider text-white/80 hover:bg-white/10 disabled:opacity-40"
          >
            <FiSearch /> {discovering ? 'Discovering…' : 'Discover opportunities'}
          </button>
          <select
            value={discoverDepth}
            onChange={(e) => setDiscoverDepth(e.target.value as DiscoveryDepth)}
            className="rounded border border-white/15 bg-black/20 px-2 py-2 font-montserrat text-[10px] uppercase text-white"
            title="Discover depth"
          >
            <option value="quick" className="bg-[#1a0a10]">Quick</option>
            <option value="standard" className="bg-[#1a0a10]">Standard</option>
            <option value="deep" className="bg-[#1a0a10]">Deep</option>
          </select>
          <button
            type="button"
            onClick={() => void loadProviders()}
            className="inline-flex items-center gap-2 rounded border border-white/20 px-3 py-2 font-montserrat text-[11px] uppercase tracking-wider text-white/80 hover:bg-white/10"
          >
            <FiRefreshCw /> Refresh
          </button>
        </div>
      </div>

      {pulse ? (
        <div className="mb-8 rounded border border-white/10 bg-white/[0.03] p-5">
          <h2 className="font-rozha text-xl text-brand-stone">Search Pulse</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
            <StatCard label="New discovered" value={pulse.newSearchesDiscovered} />
            <StatCard label="Rising queries" value={pulse.risingQueries} />
            <StatCard label="Quick wins" value={pulse.quickWins} />
            <StatCard label="Commercial" value={pulse.commercialOpportunities} />
            <StatCard label="Content gaps" value={pulse.contentGaps} />
            <StatCard label="Rankings gained" value={pulse.rankingsGained} />
            <StatCard label="Rankings lost" value={pulse.rankingsLost} />
          </div>
        </div>
      ) : null}

      {data ? (
        <div className="mb-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          <StatCard label="Total opportunities" value={data.summary.totalOpportunities} />
          <StatCard label="Quick wins" value={data.summary.quickWins} />
          <StatCard label="Commercial" value={data.summary.commercialKeywords} />
          <StatCard label="Content gaps" value={data.summary.contentGaps} />
          <StatCard label="Existing rankings" value={data.summary.existingRankings} />
          <StatCard label="High priority" value={data.summary.highPriorityTopics} />
        </div>
      ) : null}

      {data?.publishNext?.length ? (
        <div className="mb-8 rounded border border-white/10 bg-white/[0.03] p-5">
          <h2 className="font-rozha text-xl text-brand-stone">What should we do next?</h2>
          <ul className="mt-4 space-y-3">
            {data.publishNext.map((item) => (
              <li key={item.keyword} className="flex flex-col gap-1 border-b border-white/5 pb-3 last:border-0 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="font-montserrat text-sm text-brand-stone">{item.title}</p>
                  <p className="font-montserrat text-[11px] text-white/50">{item.reason}</p>
                </div>
                <Badge tone="neutral">Score {item.opportunityScore}</Badge>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <div className="mb-6 rounded border border-white/10 bg-white/[0.03] p-4 md:p-6">
        <div className="grid gap-4 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <label className="font-montserrat text-[10px] uppercase tracking-wider text-brand-dustyBlue">Seed topic</label>
            <div className="mt-2 flex gap-2">
              <input
                value={seed}
                onChange={(e) => setSeed(e.target.value)}
                placeholder="e.g. abaya, Al Talli"
                className="w-full rounded border border-white/15 bg-black/20 px-3 py-2 font-montserrat text-sm text-white placeholder:text-white/30"
              />
            </div>
          </div>
          <div className="lg:col-span-2">
            <label className="font-montserrat text-[10px] uppercase tracking-wider text-brand-dustyBlue">Country</label>
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value as SiCountry)}
              className="mt-2 w-full rounded border border-white/15 bg-black/20 px-3 py-2 font-montserrat text-sm text-white"
            >
              {SI_COUNTRIES.map((c) => (
                <option key={c} value={c} className="bg-[#1a0a10]">
                  {c}
                </option>
              ))}
            </select>
          </div>
          <div className="lg:col-span-2">
            <label className="font-montserrat text-[10px] uppercase tracking-wider text-brand-dustyBlue">Language</label>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value as SiLanguage)}
              className="mt-2 w-full rounded border border-white/15 bg-black/20 px-3 py-2 font-montserrat text-sm text-white"
            >
              {SI_LANGUAGES.map((l) => (
                <option key={l} value={l} className="bg-[#1a0a10]">
                  {l}
                </option>
              ))}
            </select>
          </div>
          <div className="lg:col-span-4 flex items-end">
            <button
              type="button"
              disabled={loading || !seed.trim()}
              onClick={() => void runSearch()}
              className="inline-flex w-full items-center justify-center gap-2 rounded bg-brand-dustyBlue/20 px-4 py-2.5 font-montserrat text-[11px] uppercase tracking-[0.18em] text-brand-stone transition hover:bg-brand-dustyBlue/30 disabled:opacity-40"
            >
              <FiSearch />
              {loading ? 'Analysing…' : 'Run intelligence'}
            </button>
          </div>
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <label className="font-montserrat text-[10px] uppercase tracking-wider text-brand-dustyBlue">Discovery depth</label>
            <select
              value={discoveryDepth}
              onChange={(e) => setDiscoveryDepth(e.target.value as DiscoveryDepth)}
              className="mt-2 w-full rounded border border-white/15 bg-black/20 px-3 py-2 font-montserrat text-sm text-white"
            >
              <option value="quick" className="bg-[#1a0a10]">Quick</option>
              <option value="standard" className="bg-[#1a0a10]">Standard</option>
              <option value="deep" className="bg-[#1a0a10]">Deep</option>
            </select>
          </div>
          <div className="flex items-end">
            <label className="flex items-center gap-2 font-montserrat text-[11px] text-white/60">
              <input type="checkbox" checked={refreshLive} onChange={(e) => setRefreshLive(e.target.checked)} />
              Refresh live data (bypass cache)
            </label>
          </div>
        </div>

        <div className="mt-4">
          <p className="font-montserrat text-[10px] uppercase tracking-wider text-brand-dustyBlue">Sources</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {SI_SOURCE_IDS.filter((s) => s !== 'generated').map((id) => {
              const p = providers.find((x) => x.id === id)
              const on = sources.includes(id)
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => toggleSource(id)}
                  className={`rounded border px-2 py-1 font-montserrat text-[10px] uppercase tracking-wider ${
                    on ? 'border-brand-stone/40 bg-white/10 text-brand-stone' : 'border-white/10 text-white/45'
                  }`}
                  title={p?.message}
                >
                  {SOURCE_LABELS[id]}
                  {p && !p.connected && id !== 'google_search_console' ? ' · off' : ''}
                </button>
              )
            })}
            <Badge tone="generated">Generated (always)</Badge>
          </div>
        </div>
        {error ? <p className="mt-3 font-montserrat text-sm text-red-300">{error}</p> : null}
        {discoverEstimate ? <p className="mt-2 font-montserrat text-[11px] text-amber-200/80">{discoverEstimate}</p> : null}
      </div>

      <div className="mb-4 flex flex-wrap gap-2 border-b border-white/10 pb-2">
        {(
          [
            ['results', 'Results'],
            ['topic_map', 'Topic Map'],
            ['content_gap', 'Content Gap'],
            ['gsc', 'Search Console'],
            ['planner', 'Content Planner'],
            ['settings', 'Settings'],
          ] as [TabId, string][]
        ).map(([id, label]) => (
          <button
            key={id}
            type="button"
            onClick={() => setTab(id)}
            className={`rounded px-3 py-1.5 font-montserrat text-xs uppercase tracking-wider ${
              tab === id ? 'bg-white/15 text-brand-stone' : 'text-white/50 hover:text-white/80'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {tab === 'results' && (
        <>
          <div className="mb-6 grid gap-6 lg:grid-cols-[320px_1fr]">
            <div className="rounded border border-white/10 bg-white/[0.02] p-4">
              <h3 className="font-montserrat text-[10px] uppercase tracking-wider text-brand-dustyBlue">Topic wheel</h3>
              {loading ? (
                <div className="mt-8 h-[200px] animate-pulse rounded bg-white/5" />
              ) : data ? (
                <TopicWheel seed={data.seedTopic} clusters={wheel} active={wheelFilter} onSelect={setWheelFilter} />
              ) : (
                <p className="mt-8 text-center font-montserrat text-xs text-white/40">Run a search</p>
              )}
            </div>
            <div>
              <div className="mb-3 flex flex-wrap gap-2">
                {SOURCE_FILTERS.map((f) => (
                  <button
                    key={f.id}
                    type="button"
                    onClick={() => setSourceFilter(f.id)}
                    className={`rounded px-2 py-1 font-montserrat text-[10px] uppercase tracking-wider ${
                      sourceFilter === f.id ? 'bg-brand-dustyBlue/25 text-brand-stone' : 'text-white/45'
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
                <button
                  type="button"
                  disabled={enriching || !data}
                  onClick={() => void enrichTop20()}
                  className="rounded border border-white/15 px-2 py-1 font-montserrat text-[10px] uppercase tracking-wider text-white/70 disabled:opacity-40"
                >
                  {enriching ? 'Enriching…' : 'Enrich top 20'}
                </button>
              </div>
              <div className="mb-3 flex flex-wrap gap-2">
                {SECTIONS.map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setSection(s.id)}
                    className={`rounded px-2 py-1 font-montserrat text-[10px] uppercase tracking-wider ${
                      section === s.id ? 'bg-white/15 text-brand-stone' : 'text-white/45'
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
              <div className="mb-3 flex flex-wrap gap-2">
                <div className="flex flex-1 items-center gap-2 rounded border border-white/10 px-2">
                  <FiFilter className="text-white/40" />
                  <input
                    value={tableQuery}
                    onChange={(e) => setTableQuery(e.target.value)}
                    placeholder="Filter keywords…"
                    className="w-full bg-transparent py-2 font-montserrat text-sm text-white placeholder:text-white/30"
                  />
                </div>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                  className="rounded border border-white/10 bg-transparent px-2 py-2 font-montserrat text-[11px] text-white/70"
                >
                  <option value="score" className="bg-[#1a0a10]">Sort: Score</option>
                  <option value="impressions" className="bg-[#1a0a10]">Sort: Impressions</option>
                  <option value="ranking" className="bg-[#1a0a10]">Sort: Ranking</option>
                  <option value="volume" className="bg-[#1a0a10]">Sort: Volume</option>
                </select>
              </div>
              {loading ? (
                <div className="space-y-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-12 animate-pulse rounded bg-white/5" />
                  ))}
                </div>
              ) : (
                <>
                  <div className="hidden lg:block">
                    <ResultsTable rows={filteredRows.slice(0, 100)} onBrief={createBrief} onStatus={updateStatus} />
                  </div>
                  <div className="lg:hidden">
                    <ResultsTable rows={filteredRows.slice(0, 50)} onBrief={createBrief} onStatus={updateStatus} compact />
                  </div>
                </>
              )}
            </div>
          </div>
        </>
      )}

      {tab === 'topic_map' && data && (
        <div className="space-y-6">
          {data.topicClusters.slice(0, 12).map((cluster) => (
            <div key={cluster.clusterName} className="rounded border border-white/10 bg-white/[0.02] p-5">
              <h3 className="font-rozha text-lg uppercase tracking-wide text-brand-stone">{cluster.clusterName}</h3>
              {cluster.pillarPage ? (
                <p className="mt-2 font-montserrat text-xs text-brand-dustyBlue">
                  Pillar: {cluster.pillarPage.label} ({cluster.pillarPage.href})
                </p>
              ) : (
                <p className="mt-2 font-montserrat text-xs text-amber-200/80">No pillar page identified — create one</p>
              )}
              <ul className="mt-4 space-y-2 border-l border-white/10 pl-4">
                {cluster.supportingArticles.map((a) => (
                  <li key={a.keyword} className="font-montserrat text-sm text-white/75">
                    → {a.keyword}
                    <span className="ml-2 text-[10px] uppercase text-white/40">{actionLabel(a.recommendedAction)}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {tab === 'content_gap' && data && (
        <div className="space-y-3">
          {data.contentGaps.slice(0, 80).map((g) => (
            <div key={g.keyword} className="flex flex-col gap-2 rounded border border-white/10 bg-white/[0.02] p-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="font-montserrat text-sm text-brand-stone">{g.keyword}</p>
                <p className="font-montserrat text-[11px] text-white/45">
                  {g.status.replace(/_/g, ' ')}
                  {g.matchedPages.length ? ` · ${g.matchedPages.join(', ')}` : ''}
                </p>
              </div>
              <Badge tone="neutral">{actionLabel(g.recommendedAction)}</Badge>
            </div>
          ))}
        </div>
      )}

      {tab === 'gsc' && (
        <div className="space-y-4">
          <div className="rounded border border-white/10 bg-white/[0.02] p-4">
            <div className="flex flex-wrap items-end gap-3">
              <div>
                <label className="font-montserrat text-[10px] uppercase tracking-wider text-brand-dustyBlue">Period</label>
                <select
                  value={gscPeriod}
                  onChange={(e) => setGscPeriod(e.target.value)}
                  className="mt-1 block rounded border border-white/15 bg-black/20 px-3 py-2 font-montserrat text-sm text-white"
                >
                  {['7d', '28d', '3m', '6m', '12m', '16m'].map((p) => (
                    <option key={p} value={p} className="bg-[#1a0a10]">
                      {p}
                    </option>
                  ))}
                </select>
              </div>
              <button
                type="button"
                disabled={gscSyncing}
                onClick={() => void syncGsc()}
                className="rounded border border-brand-dustyBlue/40 bg-brand-dustyBlue/20 px-4 py-2 font-montserrat text-[11px] uppercase tracking-wider text-brand-stone disabled:opacity-40"
              >
                {gscSyncing ? 'Syncing…' : 'Sync Search Console'}
              </button>
            </div>
            {gscSync ? (
              <dl className="mt-4 grid gap-2 font-montserrat text-[11px] text-white/55 sm:grid-cols-2 lg:grid-cols-4">
                <div><dt className="text-white/35">Last synced</dt><dd>{gscSync.lastSynced ?? 'Never'}</dd></div>
                <div><dt className="text-white/35">Rows imported</dt><dd>{gscSync.rowsImported}</dd></div>
                <div><dt className="text-white/35">Date range</dt><dd>{gscSync.dateRange ?? '—'}</dd></div>
                <div><dt className="text-white/35">Status</dt><dd>{gscSync.status} ({gscSync.source})</dd></div>
              </dl>
            ) : (
              <p className="mt-3 font-montserrat text-sm text-white/50">GSC not synced yet. Configure credentials or import CSV fallback.</p>
            )}
            <p className="mt-3 font-montserrat text-[11px] text-white/40">
              CSV fallback remains active at ops/content/inbox/_gsc/ when API is unavailable.
            </p>
          </div>
          {data?.gscOpportunities?.length ? (
            data.gscOpportunities.slice(0, 50).map((g) => (
              <div key={g.id} className="rounded border border-white/10 bg-white/[0.02] p-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="font-montserrat text-sm text-brand-stone">{g.query}</p>
                  <Badge tone="gsc">{g.category.replace(/_/g, ' ')}</Badge>
                </div>
                <p className="mt-2 font-montserrat text-[11px] text-white/50">
                  Pos {g.position.toFixed(1)} · {g.impressions} impr · {g.clicks} clicks · CTR {g.ctr}% · Score {g.opportunityScore}
                </p>
              </div>
            ))
          ) : (
            <p className="font-montserrat text-sm text-white/50">Run intelligence with GSC enabled to see opportunities.</p>
          )}
        </div>
      )}

      {tab === 'planner' && (
        <div className="grid gap-6 lg:grid-cols-2">
          {brief ? (
            <div className="rounded border border-white/10 bg-white/[0.02] p-5 font-montserrat text-sm text-white/80">
              <h3 className="font-rozha text-xl text-brand-stone">{brief.recommendedTitle}</h3>
              <p className="mt-2 text-[11px] uppercase tracking-wider text-brand-dustyBlue">Content brief · Generated</p>
              <dl className="mt-4 space-y-3 text-[12px]">
                <div><dt className="text-white/40">Slug</dt><dd>{brief.recommendedSlug}</dd></div>
                <div><dt className="text-white/40">Meta title</dt><dd>{brief.metaTitle}</dd></div>
                <div><dt className="text-white/40">Meta description</dt><dd>{brief.metaDescription}</dd></div>
                <div><dt className="text-white/40">H1</dt><dd>{brief.h1}</dd></div>
                <div>
                  <dt className="text-white/40">Outline</dt>
                  <dd>
                    <ul className="list-disc pl-4">
                      {brief.outline.map((o) => (
                        <li key={o.h2}>{o.h2}</li>
                      ))}
                    </ul>
                  </dd>
                </div>
                <div><dt className="text-white/40">Why</dt><dd>{brief.whyItMatters}</dd></div>
              </dl>
              <div className="mt-4 flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={draftArticle}
                  className="inline-flex items-center gap-2 rounded border border-white/20 px-3 py-2 text-[10px] uppercase tracking-wider"
                >
                  <FiEdit3 /> Draft article
                </button>
              </div>
              {draftNote ? (
                <p className="mt-4 rounded border border-amber-400/20 bg-amber-500/10 p-3 text-[11px] text-amber-100">{draftNote}</p>
              ) : null}
            </div>
          ) : (
            <p className="font-montserrat text-sm text-white/50">Select a keyword and click Create Content Brief from the Results table.</p>
          )}
        </div>
      )}

      {tab === 'settings' && (
        <div className="space-y-6">
          <div>
            <p className="font-montserrat text-sm text-white/55">
              Provider status — credentials are server-side only. Never expose API keys in the browser.
            </p>
            {(providers.length ? providers : []).map((p) => (
              <div key={p.id} className="mt-3 rounded border border-white/10 bg-white/[0.02] p-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="font-montserrat text-sm text-brand-stone">{p.label}</p>
                  <Badge tone={p.connected ? 'observed' : 'neutral'}>{p.mode}</Badge>
                </div>
                <p className="mt-2 font-montserrat text-[11px] text-white/50">{p.message}</p>
              </div>
            ))}
          </div>

          <div className="rounded border border-white/10 bg-white/[0.02] p-4">
            <h3 className="font-rozha text-lg text-brand-stone">Seed collections</h3>
            <p className="mt-1 font-montserrat text-[11px] text-white/45">
              Monitoring clusters for auto-discovery. Edit seeds per collection; inactive collections are skipped.
            </p>
            <div className="mt-4 space-y-4">
              {seedCollections.map((c, idx) => (
                <div key={c.id} className="rounded border border-white/10 p-3">
                  <div className="flex flex-wrap items-center gap-3">
                    <input
                      value={c.name}
                      onChange={(e) => {
                        const next = [...seedCollections]
                        next[idx] = { ...c, name: e.target.value }
                        setSeedCollections(next)
                      }}
                      className="flex-1 rounded border border-white/15 bg-black/20 px-2 py-1 font-montserrat text-sm text-white"
                    />
                    <label className="flex items-center gap-2 font-montserrat text-[11px] text-white/60">
                      <input
                        type="checkbox"
                        checked={c.active}
                        onChange={(e) => {
                          const next = [...seedCollections]
                          next[idx] = { ...c, active: e.target.checked }
                          setSeedCollections(next)
                        }}
                      />
                      Active
                    </label>
                  </div>
                  <textarea
                    value={c.seeds.join('\n')}
                    onChange={(e) => {
                      const next = [...seedCollections]
                      next[idx] = {
                        ...c,
                        seeds: e.target.value.split('\n').map((s) => s.trim()).filter(Boolean),
                      }
                      setSeedCollections(next)
                    }}
                    rows={3}
                    className="mt-2 w-full rounded border border-white/15 bg-black/20 px-2 py-1 font-montserrat text-[12px] text-white"
                    placeholder="One seed per line"
                  />
                </div>
              ))}
            </div>
            <button
              type="button"
              disabled={seedsSaving}
              onClick={() => void saveSeeds()}
              className="mt-4 rounded border border-white/20 px-3 py-2 font-montserrat text-[10px] uppercase tracking-wider text-white/80 disabled:opacity-40"
            >
              {seedsSaving ? 'Saving…' : 'Save seed collections'}
            </button>
          </div>

          <div className="rounded border border-amber-400/20 bg-amber-500/5 p-4">
            <h3 className="font-rozha text-lg text-brand-stone">Micro Test — DataForSEO integration</h3>
            <p className="mt-1 font-montserrat text-[11px] text-white/50">
              Validates credentials and autocomplete before funding. Quick / Standard / Deep are unchanged.
            </p>
            <p className="mt-2 font-montserrat text-[11px] text-amber-100/90">
              Maximum live calls: <strong>{MICRO_TEST_MAX_LIVE_CALLS}</strong>
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <input
                value={microTestSeed}
                onChange={(e) => setMicroTestSeed(e.target.value)}
                placeholder="Seed e.g. Al Talli"
                className="min-w-[200px] flex-1 rounded border border-white/15 bg-black/20 px-3 py-2 font-montserrat text-sm text-white"
              />
              <button
                type="button"
                disabled={microTesting || !microTestSeed.trim()}
                onClick={() => void runMicroTest()}
                className="rounded border border-amber-400/40 bg-amber-500/15 px-4 py-2 font-montserrat text-[10px] uppercase tracking-wider text-amber-100 disabled:opacity-40"
              >
                {microTesting ? 'Running…' : 'Run micro test'}
              </button>
              <button
                type="button"
                disabled={connectionTesting}
                onClick={() => void testConnection()}
                className="rounded border border-white/20 px-4 py-2 font-montserrat text-[10px] uppercase tracking-wider text-white/80 disabled:opacity-40"
              >
                {connectionTesting ? 'Testing…' : 'Test connection'}
              </button>
            </div>
            {microPatterns.length ? (
              <p className="mt-2 font-montserrat text-[10px] text-white/40">
                Patterns: {microPatterns.join(' · ')}
              </p>
            ) : null}
            {connectionResult ? (
              <p className="mt-2 font-montserrat text-[11px] text-white/60">{connectionResult}</p>
            ) : null}
            {microDiagnostic ? (
              <div className="mt-4 rounded border border-white/10 bg-black/20 p-3">
                <p className="font-montserrat text-[10px] uppercase tracking-wider text-brand-dustyBlue">Diagnostic summary</p>
                <dl className="mt-2 grid gap-2 font-montserrat text-[11px] text-white/55 sm:grid-cols-2">
                  <div><dt className="text-white/35">Live API calls</dt><dd>{microDiagnostic.liveApiCalls}</dd></div>
                  <div><dt className="text-white/35">Cache hits</dt><dd>{microDiagnostic.cacheHits}</dd></div>
                  <div><dt className="text-white/35">Successful calls</dt><dd>{microDiagnostic.successfulCalls}</dd></div>
                  <div><dt className="text-white/35">Failed calls</dt><dd>{microDiagnostic.failedCalls}</dd></div>
                  <div><dt className="text-white/35">Suggestions received</dt><dd>{microDiagnostic.suggestionsReceived}</dd></div>
                  <div><dt className="text-white/35">Unique after dedupe</dt><dd>{microDiagnostic.uniqueSuggestions}</dd></div>
                  <div><dt className="text-white/35">Provider cost (USD)</dt><dd>{microDiagnostic.providerCostUsd ?? '—'}</dd></div>
                  <div><dt className="text-white/35">Location</dt><dd>{microDiagnostic.locationLabel}{microDiagnostic.locationCode ? ` (${microDiagnostic.locationCode})` : ''}</dd></div>
                  <div><dt className="text-white/35">Language</dt><dd>{microDiagnostic.language}</dd></div>
                </dl>
                {microResults.length ? (
                  <ul className="mt-3 max-h-48 space-y-1 overflow-y-auto font-montserrat text-[11px] text-brand-stone">
                    {microResults.map((r) => (
                      <li key={r.keyword}>· {r.keyword}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-3 font-montserrat text-[11px] text-white/45">No suggestions returned.</p>
                )}
              </div>
            ) : null}
          </div>

          <div className="rounded border border-white/10 bg-white/[0.02] p-4">
            <h3 className="font-rozha text-lg text-brand-stone">Data usage — DataForSEO</h3>
            {dfsUsage ? (
              <dl className="mt-3 grid gap-2 font-montserrat text-[11px] text-white/55 sm:grid-cols-2 lg:grid-cols-3">
                <div><dt className="text-white/35">Status</dt><dd>{dfsUsage.connected ? 'Connected' : 'Not connected'}</dd></div>
                <div><dt className="text-white/35">Requests (session)</dt><dd>{dfsUsage.requestsSession}</dd></div>
                <div><dt className="text-white/35">Requests (today)</dt><dd>{dfsUsage.requestsToday} / {dfsUsage.dailyLimit}</dd></div>
                <div><dt className="text-white/35">Cache hits</dt><dd>{dfsUsage.cacheHits}</dd></div>
                <div><dt className="text-white/35">Live API calls</dt><dd>{dfsUsage.liveApiCalls}</dd></div>
                <div><dt className="text-white/35">Last API call</dt><dd>{dfsUsage.lastApiCallAt ?? '—'}</dd></div>
                <div><dt className="text-white/35">Cost today (USD)</dt><dd>{dfsUsage.costTodayUsd != null ? dfsUsage.costTodayUsd : '—'}</dd></div>
                <div><dt className="text-white/35">Cost month (USD)</dt><dd>{dfsUsage.costMonthUsd != null ? dfsUsage.costMonthUsd : '—'}</dd></div>
                {dfsUsage.lastError ? <div className="sm:col-span-2"><dt className="text-white/35">Last error</dt><dd className="text-amber-200/80">{dfsUsage.lastError}</dd></div> : null}
              </dl>
            ) : (
              <p className="mt-2 font-montserrat text-[11px] text-white/45">Loading usage…</p>
            )}
            <p className="mt-3 font-montserrat text-[10px] text-white/35">
              Costs shown only when returned by DataForSEO API responses. Max {dfsUsage?.maxPerRun ?? 25} requests per run.
            </p>
          </div>

          <div className="rounded border border-white/10 bg-white/[0.02] p-4 font-montserrat text-[11px] text-white/50">
            <p className="flex items-center gap-2 text-brand-dustyBlue"><FiSettings /> Credentials (server-side)</p>
            <p className="mt-2">DATAFORSEO_LOGIN · DATAFORSEO_PASSWORD</p>
            <p className="mt-2">GOOGLE_SEARCH_CONSOLE_CLIENT_EMAIL · GOOGLE_SEARCH_CONSOLE_PRIVATE_KEY · GOOGLE_SEARCH_CONSOLE_SITE_URL</p>
            <p className="mt-2">SEARCH_INTEL_MAX_REQUESTS_PER_RUN · SEARCH_INTEL_DAILY_REQUEST_LIMIT · SEARCH_INTEL_CACHE_TTL_HOURS</p>
          </div>
        </div>
      )}
    </div>
  )
}
