import { google } from 'googleapis'

export type GscConfig = {
  clientEmail: string
  privateKey: string
  siteUrl: string
}

export type GscDimension = 'query' | 'page' | 'country' | 'device' | 'date'

export type GscAnalyticsRow = {
  query?: string
  page?: string
  country?: string
  device?: string
  date?: string
  clicks: number
  impressions: number
  ctr: number
  position: number
}

export function getGscConfig(): GscConfig | null {
  const clientEmail = process.env.GOOGLE_SEARCH_CONSOLE_CLIENT_EMAIL?.trim()
  const rawKey = process.env.GOOGLE_SEARCH_CONSOLE_PRIVATE_KEY?.trim()
  const siteUrl =
    process.env.GOOGLE_SEARCH_CONSOLE_SITE_URL?.trim() || 'sc-domain:bintsaeed.com'

  if (!clientEmail || !rawKey) return null

  const privateKey = rawKey.replace(/\\n/g, '\n')
  return { clientEmail, privateKey, siteUrl }
}

export function isGscApiConfigured(): boolean {
  return getGscConfig() !== null
}

async function getSearchConsoleClient() {
  const config = getGscConfig()
  if (!config) throw new Error('Google Search Console API is not configured')

  const auth = new google.auth.JWT({
    email: config.clientEmail,
    key: config.privateKey,
    scopes: ['https://www.googleapis.com/auth/webmasters.readonly'],
  })

  await auth.authorize()
  return {
    config,
    client: google.searchconsole({ version: 'v1', auth }),
  }
}

function parseRow(
  keys: string[] | undefined,
  dimensions: GscDimension[],
  row: { clicks?: number | null; impressions?: number | null; ctr?: number | null; position?: number | null },
): GscAnalyticsRow {
  const out: GscAnalyticsRow = {
    clicks: row.clicks ?? 0,
    impressions: row.impressions ?? 0,
    ctr: row.ctr ?? 0,
    position: row.position ?? 0,
  }
  dimensions.forEach((dim, i) => {
    const val = keys?.[i]
    if (!val) return
    if (dim === 'query') out.query = val
    if (dim === 'page') out.page = val
    if (dim === 'country') out.country = val
    if (dim === 'device') out.device = val
    if (dim === 'date') out.date = val
  })
  return out
}

export async function fetchGscSearchAnalytics(params: {
  startDate: string
  endDate: string
  dimensions: GscDimension[]
  rowLimit?: number
  startRow?: number
}): Promise<GscAnalyticsRow[]> {
  const { config, client } = await getSearchConsoleClient()
  const dimensions = params.dimensions
  const rowLimit = Math.min(params.rowLimit ?? 25000, 25000)

  const res = await client.searchanalytics.query({
    siteUrl: config.siteUrl,
    requestBody: {
      startDate: params.startDate,
      endDate: params.endDate,
      dimensions,
      rowLimit,
      startRow: params.startRow ?? 0,
      dataState: 'final',
    },
  })

  const rows = res.data.rows ?? []
  return rows.map((r) => parseRow(r.keys ?? undefined, dimensions, r))
}

/** Pull query-level, query+page, and page-level aggregates for a period. */
export async function fetchGscFullSnapshot(startDate: string, endDate: string): Promise<GscAnalyticsRow[]> {
  const batches = await Promise.all([
    fetchGscSearchAnalytics({ startDate, endDate, dimensions: ['query'], rowLimit: 5000 }),
    fetchGscSearchAnalytics({ startDate, endDate, dimensions: ['query', 'page'], rowLimit: 10000 }),
    fetchGscSearchAnalytics({ startDate, endDate, dimensions: ['page'], rowLimit: 3000 }),
    fetchGscSearchAnalytics({
      startDate,
      endDate,
      dimensions: ['query', 'country', 'device'],
      rowLimit: 8000,
    }),
  ])

  const merged: GscAnalyticsRow[] = []
  for (const batch of batches) merged.push(...batch)
  return merged
}
