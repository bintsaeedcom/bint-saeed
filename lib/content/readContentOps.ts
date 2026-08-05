import { promises as fs } from 'fs'
import path from 'path'

export type ContentPackFile = {
  name: string
  bytes: number
}

export type ContentPack = {
  date: string
  slug: string
  relativePath: string
  files: ContentPackFile[]
  hasSummary: boolean
  hasRenameMap: boolean
  hasAltTexts: boolean
  platforms: string[]
  summaryPreview: string
}

export type ContentInboxItem = {
  folder: string
  relativePath: string
  files: { name: string; bytes: number }[]
}

export type ContentDashboardPayload = {
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

const PLATFORM_FILES: Record<string, string> = {
  'X.md': 'X',
  'IG.md': 'Instagram',
  'PINTEREST.md': 'Pinterest',
  'TIKTOK_REELS.md': 'TikTok',
  'YOUTUBE_SHORTS.md': 'YouTube',
  'LINKEDIN.md': 'LinkedIn',
  'EMAIL.md': 'Email',
}

function contentRoot() {
  return path.join(process.cwd(), 'ops', 'content')
}

async function readText(filePath: string): Promise<string> {
  try {
    return await fs.readFile(filePath, 'utf8')
  } catch {
    return ''
  }
}

async function listDirs(dir: string): Promise<string[]> {
  try {
    const entries = await fs.readdir(dir, { withFileTypes: true })
    return entries
      .filter((e) => e.isDirectory() && !e.name.startsWith('.') && e.name !== '_template' && !e.name.startsWith('_'))
      .map((e) => e.name)
  } catch {
    return []
  }
}

async function listMediaAndNotes(dir: string): Promise<{ name: string; bytes: number }[]> {
  try {
    const entries = await fs.readdir(dir, { withFileTypes: true })
    const out: { name: string; bytes: number }[] = []
    for (const e of entries) {
      if (!e.isFile() || e.name.startsWith('.')) continue
      if (e.name.toUpperCase() === 'README.MD') continue
      if (e.name === '.gitignore') continue
      const st = await fs.stat(path.join(dir, e.name))
      out.push({ name: e.name, bytes: st.size })
    }
    return out.sort((a, b) => a.name.localeCompare(b.name))
  } catch {
    return []
  }
}

async function readPack(date: string, slug: string): Promise<ContentPack> {
  const dir = path.join(contentRoot(), 'batches', date, slug)
  const files = await listMediaAndNotes(dir)
  const names = new Set(files.map((f) => f.name))
  const platforms = Object.entries(PLATFORM_FILES)
    .filter(([file]) => names.has(file))
    .map(([, label]) => label)

  const summaryRaw = await readText(path.join(dir, 'SUMMARY.md'))
  const summaryPreview = summaryRaw
    .split('\n')
    .map((l) => l.trim())
    .filter(Boolean)
    .slice(0, 8)
    .join('\n')

  return {
    date,
    slug,
    relativePath: `ops/content/batches/${date}/${slug}`,
    files,
    hasSummary: names.has('SUMMARY.md'),
    hasRenameMap: names.has('ASSETS_RENAME.md'),
    hasAltTexts: names.has('ALT_TEXTS.md'),
    platforms,
    summaryPreview,
  }
}

export async function readContentFile(relativeFromContent: string): Promise<{ ok: true; text: string; name: string } | { ok: false; error: string }> {
  const root = contentRoot()
  const cleaned = relativeFromContent.replace(/^\/+/, '').replace(/\\/g, '/')
  if (cleaned.includes('..') || path.isAbsolute(cleaned)) {
    return { ok: false, error: 'Invalid path' }
  }
  const abs = path.join(root, cleaned)
  if (!abs.startsWith(root)) {
    return { ok: false, error: 'Invalid path' }
  }
  if (!abs.endsWith('.md') && !abs.endsWith('.txt')) {
    return { ok: false, error: 'Only markdown/text previews allowed' }
  }
  try {
    const text = await fs.readFile(abs, 'utf8')
    return { ok: true, text, name: path.basename(abs) }
  } catch {
    return { ok: false, error: 'Not found' }
  }
}

export async function readContentDashboard(): Promise<ContentDashboardPayload> {
  const root = contentRoot()
  const inboxRoot = path.join(root, 'inbox')
  const batchesRoot = path.join(root, 'batches')

  // Inbox: ops/content/inbox/<folder>/
  const inboxFolders = await listDirs(inboxRoot)
  const inbox: ContentInboxItem[] = []
  for (const folder of inboxFolders.sort().reverse()) {
    const files = await listMediaAndNotes(path.join(inboxRoot, folder))
    inbox.push({
      folder,
      relativePath: `ops/content/inbox/${folder}`,
      files,
    })
  }

  // Special: GSC CSV drop folder (underscore-prefixed, normally skipped)
  const gscFiles = await listMediaAndNotes(path.join(inboxRoot, '_gsc'))
  const gscCsvOnly = gscFiles.filter((f) => f.name.toLowerCase().endsWith('.csv'))
  if (gscCsvOnly.length) {
    inbox.unshift({
      folder: '_gsc (Search Console exports)',
      relativePath: 'ops/content/inbox/_gsc',
      files: gscCsvOnly,
    })
  }

  // Also files dropped directly in inbox/
  const loose = await listMediaAndNotes(inboxRoot)
  if (loose.length) {
    inbox.unshift({
      folder: '(inbox root)',
      relativePath: 'ops/content/inbox',
      files: loose,
    })
  }

  const { loadGscAuditSnapshot } = await import('@/lib/content/gscCsv')
  const gsc = await loadGscAuditSnapshot()

  const dates = (await listDirs(batchesRoot)).sort().reverse()
  const packs: ContentPack[] = []
  for (const date of dates.slice(0, 30)) {
    const slugs = await listDirs(path.join(batchesRoot, date))
    for (const slug of slugs.sort()) {
      if (slug === '_week') continue
      packs.push(await readPack(date, slug))
    }
  }

  return {
    inboxRoot: 'ops/content/inbox',
    batchesRoot: 'ops/content/batches',
    inbox,
    packs,
    pendingMarkdown: await readText(path.join(root, 'queue', 'PENDING_APPROVAL.md')),
    approvedMarkdown: await readText(path.join(root, 'queue', 'APPROVED.md')),
    rejectedMarkdown: await readText(path.join(root, 'queue', 'REJECTED.md')),
    postedMarkdown: await readText(path.join(root, 'queue', 'POSTED.md')),
    gsc: {
      sourceFiles: gsc.sourceFiles,
      topQueryCount: gsc.topQueries.length,
      topPageCount: gsc.topPages.length,
      previewMarkdown: gsc.markdown.slice(0, 4000),
    },
    instructions: {
      uploadWhere:
        'Easiest: drop photos on your Desktop in bint-saeed-content-inbox/<product-slug>/ (private, not on the site). Or use ops/content/inbox/<slug>/. GSC CSVs go in ops/content/inbox/_gsc/.',
      afterUpload:
        'In Cursor: “Content pack for <slug> — images are in /Users/sunain/Desktop/bint-saeed-content-inbox/<slug> — use latest GSC”. Then refresh this dashboard.',
      agentPrompt:
        'Content pack for park-lane-abaya — images are in /Users/sunain/Desktop/bint-saeed-content-inbox/park-lane-abaya — use latest GSC in ops/content/inbox/_gsc',
    },
  }
}
