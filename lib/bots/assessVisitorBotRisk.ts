import { isLikelySearchBotUserAgent } from '@/lib/bots/isLikelySearchBot'

export type VisitorBotRisk = {
  /** High = hide from Slack. Medium = still post, labelled. */
  level: 'none' | 'medium' | 'high'
  score: number
  reasons: string[]
  label: string | null
}

const DATACENTER_CITY_HINTS = [
  'mountain view',
  'ashburn',
  'the dalles',
  'council bluffs',
  'mayes county',
  'quincy',
  'loudoun',
  'reston',
  'sterling',
  'dallas',
  'frankfurt am main', // often CDN; only counts with other signals
]

const DATACENTER_ISP_HINTS =
  /google|amazon|aws|microsoft|azure|digitalocean|linode|ovh|hetzner|cloudflare|fastly|akamai|oracle cloud|alibaba|tencent|vultr|contabo|choopa|leaseweb|datacenter|hosting|colocation|colo /i

/**
 * Score how likely an analytics payload is automated traffic.
 * Used to quiet Slack so real shoppers are not mistaken for bots (and vice versa).
 */
export function assessVisitorBotRisk(data: {
  userAgent?: string | null
  browser?: { userAgent?: string | null } | null
  device?: { type?: string | null; browser?: string | null; os?: string | null } | null
  location?: {
    city?: string | null
    region?: string | null
    country?: string | null
    countryCode?: string | null
    isp?: string | null
    org?: string | null
    as?: string | null
  } | null
  locationSignals?: { vpnLikely?: boolean | null } | null
}): VisitorBotRisk {
  const reasons: string[] = []
  let score = 0

  const ua =
    (typeof data.userAgent === 'string' && data.userAgent) ||
    (typeof data.browser?.userAgent === 'string' && data.browser.userAgent) ||
    ''

  if (isLikelySearchBotUserAgent(ua)) {
    score += 100
    reasons.push('Known crawler user-agent')
  }

  if (
    /headlesschrome|phantomjs|selenium|puppeteer|playwright|scrapy|httpclient|python-requests|curl\/|wget|libwww|go-http-client|java\/|okhttp|axios\//i.test(
      ua,
    )
  ) {
    score += 80
    reasons.push('Automation / scraper user-agent')
  }

  const os = String(data.device?.os || '').trim()
  const browser = String(data.device?.browser || '').trim()
  const type = String(data.device?.type || '').trim().toLowerCase()
  const deviceUnknown =
    (!os || /^unknown$/i.test(os)) &&
    (!browser || /^unknown$/i.test(browser) || !data.device)

  if (deviceUnknown) {
    score += 25
    reasons.push('Device unknown')
  }

  // Headless / datacenter fingerprint: Chrome on Linux desktop is rare for luxury shoppers
  if (/^linux$/i.test(os) && /chrome/i.test(browser) && (type === 'desktop' || !type)) {
    score += 45
    reasons.push('Chrome on Linux (common bot fingerprint)')
  }

  const city = String(data.location?.city || '').trim().toLowerCase()
  const region = String(data.location?.region || '').trim().toLowerCase()
  const place = `${city} ${region}`
  if (DATACENTER_CITY_HINTS.some((hint) => place.includes(hint))) {
    score += 30
    reasons.push(`Datacenter-area location (${data.location?.city || 'unknown'})`)
  }

  const network = [data.location?.isp, data.location?.org, data.location?.as]
    .filter(Boolean)
    .join(' ')
  if (network && DATACENTER_ISP_HINTS.test(network)) {
    score += 40
    reasons.push(`Hosting / cloud network (${network.slice(0, 60)})`)
  }

  // Mountain View + Linux Chrome is almost always Googlebot / headless infra
  if (
    place.includes('mountain view') &&
    (/^linux$/i.test(os) || deviceUnknown)
  ) {
    score += 25
    reasons.push('Mountain View + non-consumer device')
  }

  if (data.locationSignals?.vpnLikely && score >= 20) {
    score += 10
    reasons.push('VPN / proxy signals')
  }

  let level: VisitorBotRisk['level'] = 'none'
  if (score >= 70) level = 'high'
  else if (score >= 40) level = 'medium'

  const label =
    level === 'high'
      ? '🤖 Likely bot — not a shopper'
      : level === 'medium'
        ? '🤖 Possible bot'
        : null

  return { level, score, reasons: reasons.slice(0, 5), label }
}

export function shouldSuppressBotSlack(risk: VisitorBotRisk): boolean {
  return risk.level === 'high'
}
