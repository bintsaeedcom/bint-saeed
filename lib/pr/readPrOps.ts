import { promises as fs } from 'fs'
import path from 'path'

export type PrProspect = {
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
  linkedinUrl?: string | null
  instagramHandle?: string | null
  whyFit?: string
  proofLinks?: string[]
  suggestedAngleId?: string
  priority?: number
  language?: string
  status?: string
  goal?: string
  tier?: string
  draftPitchId?: string | null
  notes?: string
  sources?: string[]
}

export type PrDashboardPayload = {
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

function prRoot() {
  return path.join(process.cwd(), 'ops', 'pr')
}

async function readText(filePath: string): Promise<string> {
  try {
    return await fs.readFile(filePath, 'utf8')
  } catch {
    return ''
  }
}

async function readJsonArray<T>(filePath: string): Promise<T[]> {
  try {
    const raw = await fs.readFile(filePath, 'utf8')
    const parsed = JSON.parse(raw) as T[]
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

function parseJsonl(raw: string): PrProspect[] {
  return raw
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      try {
        return JSON.parse(line) as PrProspect
      } catch {
        return null
      }
    })
    .filter((row): row is PrProspect => Boolean(row))
}

export async function readPrDashboard(): Promise<PrDashboardPayload> {
  const root = prRoot()
  const seeds = await readJsonArray<PrProspect>(path.join(root, 'seeds', 'public_desks.json'))
  const ledgerRaw = await readText(path.join(root, 'ledger', 'prospects.jsonl'))
  const ledger = parseJsonl(ledgerRaw)

  let batches: string[] = []
  try {
    const entries = await fs.readdir(path.join(root, 'batches'), { withFileTypes: true })
    batches = entries
      .filter((e) => e.isDirectory() && /^\d{4}-\d{2}-\d{2}$/.test(e.name))
      .map((e) => e.name)
      .sort()
      .reverse()
  } catch {
    batches = []
  }

  let latestBatch: PrDashboardPayload['latestBatch'] = null
  const latestDate = batches[0]
  if (latestDate) {
    const batchDir = path.join(root, 'batches', latestDate)
    const prospects = await readJsonArray<PrProspect>(path.join(batchDir, 'prospects.json'))
    const summaryMarkdown = (await readText(path.join(batchDir, 'SUMMARY.md'))) || null
    let draftIds: string[] = []
    try {
      const draftEntries = await fs.readdir(path.join(batchDir, 'drafts'))
      draftIds = draftEntries.filter((name) => name.endsWith('.md')).sort()
    } catch {
      draftIds = []
    }
    latestBatch = {
      date: latestDate,
      summaryMarkdown,
      prospectCount: prospects.length,
      prospects,
      draftCount: draftIds.length,
      draftIds,
    }
  }

  return {
    seeds,
    ledgerCount: ledger.length,
    ledgerRecent: ledger.slice(-40).reverse(),
    pendingMarkdown: await readText(path.join(root, 'queue', 'PENDING_APPROVAL.md')),
    approvedMarkdown: await readText(path.join(root, 'queue', 'APPROVED.md')),
    rejectedMarkdown: await readText(path.join(root, 'queue', 'REJECTED.md')),
    repliesMarkdown: await readText(path.join(root, 'queue', 'REPLIES.md')),
    latestBatch,
    batches,
  }
}
