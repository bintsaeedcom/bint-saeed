import type { ContentPopularity, GeoTrendResult, VisitorLocationRow } from '@/lib/analytics/analyticsStore'

function csvEscape(value: string | number | undefined): string {
  const s = String(value ?? '')
  if (/[",\n\r]/.test(s)) return `"${s.replace(/"/g, '""')}"`
  return s
}

function csvRow(cells: Array<string | number | undefined>): string {
  return cells.map(csvEscape).join(',')
}

export function buildMarketingExportCsv(input: {
  days: number
  geoTrend: GeoTrendResult
  totals7d: VisitorLocationRow[]
  popularity: ContentPopularity
  generatedAt: string
}): string {
  const lines: string[] = []
  lines.push('# Bint Saeed — marketing signals export (IP-derived, no GPS consent)')
  lines.push(`# Generated,${input.generatedAt}`)
  lines.push(`# Window,last ${input.days} days`)
  lines.push(`# Use for,geo ad targeting · boutique planning · creative regional tests`)
  lines.push('')

  lines.push('## GEOGRAPHY_BY_DAY')
  lines.push(csvRow(['date', 'area', 'city', 'region', 'country', 'country_code', 'signals']))
  for (const day of input.geoTrend.days) {
    for (const row of day.locations) {
      lines.push(
        csvRow([
          day.date,
          row.location,
          row.city,
          row.region,
          row.country,
          row.countryCode,
          row.count,
        ]),
      )
    }
  }
  lines.push('')

  lines.push('## GEOGRAPHY_7DAY_TOTALS')
  lines.push(csvRow(['area', 'city', 'region', 'country', 'signals_7d']))
  for (const row of input.totals7d) {
    lines.push(csvRow([row.location, row.city, row.region, row.country, row.count]))
  }
  lines.push('')

  lines.push('## TOP_PAGES_ALL_TIME')
  lines.push(csvRow(['path', 'views']))
  for (const row of input.popularity.pages) {
    lines.push(csvRow([row.path, row.views]))
  }
  lines.push('')

  lines.push('## TOP_PRODUCTS_ALL_TIME')
  lines.push(csvRow(['product_id', 'name', 'views', 'clicks', 'cart_adds']))
  for (const row of input.popularity.products) {
    lines.push(csvRow([row.productId, row.name, row.views, row.clicks, row.cartAdds]))
  }

  return lines.join('\n')
}
