'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'
import { FiCopy, FiExternalLink, FiFolder, FiRefreshCw } from 'react-icons/fi'

type ContentPack = {
  date: string
  slug: string
  relativePath: string
  files: { name: string; bytes: number }[]
  hasSummary: boolean
  hasRenameMap: boolean
  hasAltTexts: boolean
  platforms: string[]
  summaryPreview: string
}

type ContentInboxItem = {
  folder: string
  relativePath: string
  files: { name: string; bytes: number }[]
}

type ContentDashboardPayload = {
  inboxRoot: string
  batchesRoot: string
  inbox: ContentInboxItem[]
  packs: ContentPack[]
  pendingMarkdown: string
  approvedMarkdown: string
  rejectedMarkdown: string
  postedMarkdown: string
  gsc: {
    sourceFiles: string[]
    topQueryCount: number
    topPageCount: number
    previewMarkdown: string
  }
  instructions: {
    uploadWhere: string
    afterUpload: string
    agentPrompt: string
  }
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

function formatBytes(n: number) {
  if (n < 1024) return `${n} B`
  if (n < 1024 * 1024) return `${(n / 1024).toFixed(0)} KB`
  return `${(n / (1024 * 1024)).toFixed(1)} MB`
}

export default function AdminContentPage() {
  const [data, setData] = useState<ContentDashboardPayload | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [tab, setTab] = useState<'how' | 'inbox' | 'gsc' | 'packs' | 'pending' | 'approved' | 'posted'>('how')
  const [selectedPack, setSelectedPack] = useState<ContentPack | null>(null)
  const [filePreview, setFilePreview] = useState<{ name: string; text: string } | null>(null)
  const [previewLoading, setPreviewLoading] = useState(false)
  const [copied, setCopied] = useState(false)

  const load = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('/api/admin/content')
      const json = (await res.json()) as ContentDashboardPayload & { error?: string }
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

  const inboxFileCount = useMemo(
    () => data?.inbox.reduce((sum, folder) => sum + folder.files.length, 0) ?? 0,
    [data?.inbox],
  )

  const openFile = async (pack: ContentPack, fileName: string) => {
    if (!fileName.endsWith('.md') && !fileName.endsWith('.txt')) return
    setPreviewLoading(true)
    setFilePreview(null)
    try {
      const rel = `batches/${pack.date}/${pack.slug}/${fileName}`
      const res = await fetch(`/api/admin/content?file=${encodeURIComponent(rel)}`)
      const json = (await res.json()) as { name?: string; text?: string; error?: string }
      if (!res.ok) {
        setFilePreview({ name: fileName, text: json.error || 'Could not load file' })
        return
      }
      setFilePreview({ name: json.name || fileName, text: json.text || '' })
    } catch {
      setFilePreview({ name: fileName, text: 'Could not load file' })
    } finally {
      setPreviewLoading(false)
    }
  }

  const copyPrompt = async () => {
    const text = data?.instructions.agentPrompt || 'Content pack for park-lane-abaya — images are in ops/content/inbox/park-lane-abaya'
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1600)
    } catch {
      /* ignore */
    }
  }

  const tabs: { id: typeof tab; label: string }[] = [
    { id: 'how', label: 'How to use' },
    { id: 'inbox', label: 'Inbox' },
    { id: 'gsc', label: 'Google Search' },
    { id: 'packs', label: 'Packs' },
    { id: 'pending', label: 'Pending' },
    { id: 'approved', label: 'Approved' },
    { id: 'posted', label: 'Posted' },
  ]

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-10">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="font-montserrat text-[10px] uppercase tracking-[0.22em] text-brand-dustyBlue">Owner</p>
          <h1 className="mt-2 font-rozha text-3xl text-brand-stone sm:text-4xl">Content desk</h1>
          <p className="mt-2 max-w-2xl font-montserrat text-sm leading-relaxed text-white/55">
            Drop images in the project inbox folder, run a Content Pack in Cursor, then review platform drafts here.
            Nothing posts until you approve and schedule yourself.
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
        <StatCard label="Inbox files" value={loading ? '—' : inboxFileCount} hint={data?.inboxRoot} />
        <StatCard
          label="GSC queries"
          value={loading ? '—' : (data?.gsc.topQueryCount ?? 0)}
          hint={data?.gsc.sourceFiles?.length ? data.gsc.sourceFiles.join(', ') : 'Drop CSVs in inbox/_gsc'}
        />
        <StatCard label="Packs" value={loading ? '—' : (data?.packs.length ?? 0)} hint={data?.batchesRoot} />
        <StatCard label="Cost" value="$0" hint="Folder + Cursor + this overview" />
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        {tabs.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setTab(t.id)}
            className={`rounded-[4px] px-3 py-1.5 font-montserrat text-[11px] uppercase tracking-[0.14em] transition-colors ${
              tab === t.id ? 'bg-white/15 text-white' : 'text-white/55 hover:bg-white/10 hover:text-white'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="mt-6">
        {tab === 'how' && data ? (
          <div className="space-y-4 rounded-[4px] border border-white/10 bg-white/[0.03] p-5">
            <div>
              <p className="font-montserrat text-[10px] uppercase tracking-[0.18em] text-brand-dustyBlue">1 · Upload</p>
              <p className="mt-2 font-montserrat text-sm text-white/80">{data.instructions.uploadWhere}</p>
              <code className="mt-3 block rounded-[4px] bg-black/30 px-3 py-2 font-mono text-[12px] text-brand-stone">
                ops/content/inbox/&lt;product-slug&gt;/your-photos.jpg
              </code>
            </div>
            <div>
              <p className="font-montserrat text-[10px] uppercase tracking-[0.18em] text-brand-dustyBlue">2 · Ask Cursor</p>
              <p className="mt-2 font-montserrat text-sm text-white/80">{data.instructions.afterUpload}</p>
              <div className="mt-3 flex flex-wrap items-center gap-2">
                <code className="rounded-[4px] bg-black/30 px-3 py-2 font-mono text-[12px] text-brand-stone">
                  {data.instructions.agentPrompt}
                </code>
                <button
                  type="button"
                  onClick={() => void copyPrompt()}
                  className="inline-flex items-center gap-1.5 rounded-[4px] border border-white/15 px-2.5 py-1.5 font-montserrat text-[10px] uppercase tracking-[0.14em] text-white/70 hover:text-white"
                >
                  <FiCopy className="h-3 w-3" />
                  {copied ? 'Copied' : 'Copy'}
                </button>
              </div>
            </div>
            <div>
              <p className="font-montserrat text-[10px] uppercase tracking-[0.18em] text-brand-dustyBlue">3 · Review here</p>
              <p className="mt-2 font-montserrat text-sm text-white/80">
                Open the Packs tab, click a file (IG, TikTok, Pinterest…). Approve in queue, then schedule with free
                tools in SCHEDULING_PLAYBOOK.
              </p>
            </div>
          </div>
        ) : null}

        {tab === 'inbox' ? (
          <div className="space-y-3">
            {!data?.inbox.length ? (
              <p className="font-montserrat text-sm text-white/50">
                Inbox empty. Create a folder under <span className="text-white/80">ops/content/inbox/your-slug/</span> and
                drop images there, then Refresh.
              </p>
            ) : (
              data.inbox.map((folder) => (
                <div key={folder.relativePath} className="rounded-[4px] border border-white/10 bg-white/[0.03] px-4 py-3">
                  <div className="flex items-center gap-2">
                    <FiFolder className="h-4 w-4 text-brand-dustyBlue" />
                    <p className="font-montserrat text-sm text-white">{folder.folder}</p>
                    <p className="font-montserrat text-[11px] text-white/40">{folder.files.length} files</p>
                  </div>
                  <p className="mt-1 font-mono text-[11px] text-white/40">{folder.relativePath}</p>
                  <ul className="mt-3 space-y-1">
                    {folder.files.map((f) => (
                      <li key={f.name} className="flex justify-between gap-3 font-montserrat text-[12px] text-white/70">
                        <span className="truncate">{f.name}</span>
                        <span className="shrink-0 text-white/40">{formatBytes(f.bytes)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))
            )}
          </div>
        ) : null}

        {tab === 'gsc' ? (
          <div className="space-y-3">
            <p className="font-montserrat text-sm text-white/55">
              Drop Queries + Pages CSVs into <span className="text-white/80">ops/content/inbox/_gsc/</span>, then
              optionally run{' '}
              <code className="text-brand-stone">node ops/content/scripts/refresh-gsc-owned.mjs</code> and Refresh.
            </p>
            <pre className="max-h-[640px] overflow-auto whitespace-pre-wrap rounded-[4px] border border-white/10 bg-white/[0.03] p-4 font-montserrat text-[12px] leading-relaxed text-white/75">
              {data?.gsc.previewMarkdown || 'No GSC CSVs found yet.'}
            </pre>
          </div>
        ) : null}

        {tab === 'packs' ? (
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="space-y-3">
              {!data?.packs.length ? (
                <p className="font-montserrat text-sm text-white/50">No packs yet. Run a Content Pack in Cursor after dropping images.</p>
              ) : (
                data.packs.map((pack) => {
                  const active = selectedPack?.relativePath === pack.relativePath
                  return (
                    <button
                      key={pack.relativePath}
                      type="button"
                      onClick={() => {
                        setSelectedPack(pack)
                        setFilePreview(null)
                      }}
                      className={`w-full rounded-[4px] border px-4 py-3 text-left transition-colors ${
                        active ? 'border-white/30 bg-white/[0.08]' : 'border-white/10 bg-white/[0.03] hover:border-white/20'
                      }`}
                    >
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <p className="font-montserrat text-sm text-white">{pack.slug}</p>
                        <p className="font-montserrat text-[10px] uppercase tracking-[0.14em] text-white/45">{pack.date}</p>
                      </div>
                      <p className="mt-1 font-montserrat text-[11px] text-white/45">
                        {pack.platforms.join(' · ') || 'Files pending'}
                        {pack.hasRenameMap ? ' · rename map' : ''}
                        {pack.hasAltTexts ? ' · alts' : ''}
                      </p>
                    </button>
                  )
                })
              )}
            </div>

            <div className="rounded-[4px] border border-white/10 bg-white/[0.03] p-4">
              {!selectedPack ? (
                <p className="font-montserrat text-sm text-white/45">Select a pack to browse draft files.</p>
              ) : (
                <>
                  <p className="font-montserrat text-[10px] uppercase tracking-[0.18em] text-brand-dustyBlue">Pack</p>
                  <h2 className="mt-1 font-rozha text-2xl text-brand-stone">{selectedPack.slug}</h2>
                  <p className="mt-1 font-mono text-[11px] text-white/40">{selectedPack.relativePath}</p>
                  {selectedPack.summaryPreview ? (
                    <pre className="mt-3 max-h-32 overflow-auto whitespace-pre-wrap font-montserrat text-[11px] leading-relaxed text-white/55">
                      {selectedPack.summaryPreview}
                    </pre>
                  ) : null}
                  <ul className="mt-4 space-y-1">
                    {selectedPack.files.map((f) => {
                      const canPreview = f.name.endsWith('.md') || f.name.endsWith('.txt')
                      return (
                        <li key={f.name}>
                          {canPreview ? (
                            <button
                              type="button"
                              onClick={() => void openFile(selectedPack, f.name)}
                              className="flex w-full items-center justify-between gap-2 rounded px-2 py-1.5 text-left font-montserrat text-[12px] text-brand-dustyBlue hover:bg-white/5"
                            >
                              <span className="inline-flex items-center gap-1 truncate">
                                {f.name} <FiExternalLink className="h-3 w-3 shrink-0 opacity-60" />
                              </span>
                              <span className="shrink-0 text-white/35">{formatBytes(f.bytes)}</span>
                            </button>
                          ) : (
                            <div className="flex justify-between gap-2 px-2 py-1.5 font-montserrat text-[12px] text-white/55">
                              <span className="truncate">{f.name}</span>
                              <span className="shrink-0 text-white/35">{formatBytes(f.bytes)}</span>
                            </div>
                          )}
                        </li>
                      )
                    })}
                  </ul>
                  <div className="mt-4 border-t border-white/10 pt-4">
                    <p className="font-montserrat text-[10px] uppercase tracking-[0.18em] text-brand-dustyBlue">Preview</p>
                    {previewLoading ? (
                      <p className="mt-2 font-montserrat text-sm text-white/45">Loading…</p>
                    ) : filePreview ? (
                      <>
                        <p className="mt-2 font-montserrat text-xs text-white/70">{filePreview.name}</p>
                        <pre className="mt-2 max-h-[420px] overflow-auto whitespace-pre-wrap rounded-[4px] bg-black/30 p-3 font-montserrat text-[12px] leading-relaxed text-white/80">
                          {filePreview.text}
                        </pre>
                      </>
                    ) : (
                      <p className="mt-2 font-montserrat text-sm text-white/45">Click an .md file to preview.</p>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        ) : null}

        {tab === 'pending' || tab === 'approved' || tab === 'posted' ? (
          <pre className="max-h-[640px] overflow-auto whitespace-pre-wrap rounded-[4px] border border-white/10 bg-white/[0.03] p-4 font-montserrat text-[12px] leading-relaxed text-white/75">
            {tab === 'pending'
              ? data?.pendingMarkdown || '—'
              : tab === 'approved'
                ? data?.approvedMarkdown || '—'
                : data?.postedMarkdown || '—'}
          </pre>
        ) : null}
      </div>
    </div>
  )
}
