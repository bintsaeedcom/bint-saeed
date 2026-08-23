import { NextRequest, NextResponse } from 'next/server'
import { requireAdmin } from '@/lib/admin/apiAuth'
import { rateLimitResponse } from '@/lib/security/rateLimit'
import {
  recordAnalyticsEvent,
  getActiveVisitors,
  getNotifications,
  getAnalyticsStats,
  getAbandonedCartStats,
  getVisitorLocationOverview,
  getContentPopularity,
  getGeoTrend,
} from '@/lib/analytics/analyticsStore'
import { getClientIpFromRequest, resolveRequestGeo } from '@/lib/geo/ipGeoServer'
import {
  assessLocationSignals,
  formatShopPreferenceLine,
} from '@/lib/geo/locationSignals'
import { namedHouseVisitor, shouldSuppressVisitorNoise, STAFF_VISITOR_IDS } from '@/lib/analytics/staffOptics'
import { assessVisitorBotRisk, shouldSuppressBotSlack } from '@/lib/bots/assessVisitorBotRisk'

function normalizedWebhook(...values: Array<string | undefined>): string | undefined {
  for (const value of values) {
    const trimmed = value?.trim()
    if (trimmed) return trimmed
  }
  return undefined
}

// Slack Webhook URL - Use main webhook or analytics-specific one (with legacy fallbacks)
const SLACK_WEBHOOK_URL = normalizedWebhook(
  process.env.SLACK_WEBHOOK_URL,
  process.env.SLACK_ANALYTICS_WEBHOOK_URL,
  process.env.SLACK_WEBHOOK,
  process.env.SLACK_ANALYTICS_WEBHOOK,
  process.env.SLACK_ORDERS_WEBHOOK_URL,
)
const SLACK_RECOVERY_WEBHOOK_URL = normalizedWebhook(process.env.SLACK_RECOVERY_WEBHOOK_URL)
const SLACK_ABANDONED_CART_WEBHOOK_URL = normalizedWebhook(process.env.SLACK_ABANDONED_CART_WEBHOOK_URL)

// VIP Visitors to flag with special notifications
const VIP_VISITORS: { name: string; visitorIds: string[]; ipPatterns: string[] }[] = [
  {
    name: 'Saeed',
    visitorIds: ['mlxjxzly'], // Saeed's visitor ID only
    ipPatterns: [],
  },
]

// Exclude these from VIP - site owner, team, test devices (never trigger "Saeed is back")
const EXCLUDE_FROM_VIP: { visitorIds: string[]; ipPatterns: string[] } = {
  visitorIds: [...STAFF_VISITOR_IDS],
  ipPatterns: [], // Add your IP prefix here if needed, e.g. '2001:8f8:1621:695d'
}

// Store active visitors in memory (in production, use Redis or similar)
const activeVisitors = new Map<string, any>()

// Check if visitor is VIP (excluding site owner/team)
function checkVIP(visitorId: string, ip: string): { isVIP: boolean; name: string } {
  const vid = (visitorId || '').trim()
  if (!vid) return { isVIP: false, name: '' }

  // Never flag excluded visitors (exact or ends-with)
  if (EXCLUDE_FROM_VIP.visitorIds.some(id => vid === id || vid.endsWith(id))) {
    return { isVIP: false, name: '' }
  }
  if (EXCLUDE_FROM_VIP.ipPatterns.some(pattern => ip?.includes(pattern))) {
    return { isVIP: false, name: '' }
  }

  for (const vip of VIP_VISITORS) {
    // Strict match: visitor ID must exactly equal mlxjxzly (no partial/includes)
    if (vip.visitorIds.some(id => vid === id)) {
      return { isVIP: true, name: vip.name }
    }
    if (vip.ipPatterns.length > 0 && vip.ipPatterns.some(pattern => ip?.includes(pattern))) {
      return { isVIP: true, name: vip.name }
    }
  }
  return { isVIP: false, name: '' }
}

/**
 * Map link for Slack.
 * IP geo lat/lng is often an ISP/CDN hub (e.g. Amsterdam) while the named city is elsewhere
 * (e.g. Nijkerk) — so for IP accuracy we open the place name we display, not the crude pin.
 * GPS accuracy may use exact coordinates.
 */
function getMapLink(location: {
  latitude?: number | null
  longitude?: number | null
  city?: string
  region?: string
  country?: string
  countryCode?: string
  accuracyLevel?: string
} | null | undefined): string {
  if (!location) return ''
  const city = String(location.city || '').trim()
  const region = expandRegionName(location.region, location.countryCode || location.country)
  const country = expandCountryName(location.country || location.countryCode || '')
  const placeQuery = [city, region, country]
    .filter((part) => part && !/^unknown(\s+city)?$/i.test(part))
    .join(', ')

  const isGps = location.accuracyLevel === 'gps'
  const lat = Number(location.latitude)
  const lng = Number(location.longitude)
  if (isGps && Number.isFinite(lat) && Number.isFinite(lng)) {
    return `https://www.google.com/maps?q=${lat},${lng}`
  }
  if (placeQuery) {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(placeQuery)}`
  }
  if (Number.isFinite(lat) && Number.isFinite(lng)) {
    return `https://www.google.com/maps?q=${lat},${lng}`
  }
  return ''
}

const US_STATE_NAMES: Record<string, string> = {
  AL: 'Alabama', AK: 'Alaska', AZ: 'Arizona', AR: 'Arkansas', CA: 'California', CO: 'Colorado',
  CT: 'Connecticut', DE: 'Delaware', FL: 'Florida', GA: 'Georgia', HI: 'Hawaii', ID: 'Idaho',
  IL: 'Illinois', IN: 'Indiana', IA: 'Iowa', KS: 'Kansas', KY: 'Kentucky', LA: 'Louisiana',
  ME: 'Maine', MD: 'Maryland', MA: 'Massachusetts', MI: 'Michigan', MN: 'Minnesota',
  MS: 'Mississippi', MO: 'Missouri', MT: 'Montana', NE: 'Nebraska', NV: 'Nevada',
  NH: 'New Hampshire', NJ: 'New Jersey', NM: 'New Mexico', NY: 'New York',
  NC: 'North Carolina', ND: 'North Dakota', OH: 'Ohio', OK: 'Oklahoma', OR: 'Oregon',
  PA: 'Pennsylvania', RI: 'Rhode Island', SC: 'South Carolina', SD: 'South Dakota',
  TN: 'Tennessee', TX: 'Texas', UT: 'Utah', VT: 'Vermont', VA: 'Virginia', WA: 'Washington',
  WV: 'West Virginia', WI: 'Wisconsin', WY: 'Wyoming',
}

const INDIA_STATE_NAMES: Record<string, string> = {
  AP: 'Andhra Pradesh', AR: 'Arunachal Pradesh', AS: 'Assam', BR: 'Bihar', CG: 'Chhattisgarh',
  GA: 'Goa', GJ: 'Gujarat', HR: 'Haryana', HP: 'Himachal Pradesh', JH: 'Jharkhand',
  KA: 'Karnataka', KL: 'Kerala', MP: 'Madhya Pradesh', MH: 'Maharashtra', MN: 'Manipur',
  ML: 'Meghalaya', MZ: 'Mizoram', NL: 'Nagaland', OD: 'Odisha', PB: 'Punjab',
  RJ: 'Rajasthan', SK: 'Sikkim', TN: 'Tamil Nadu', TG: 'Telangana', TR: 'Tripura',
  UP: 'Uttar Pradesh', UK: 'Uttarakhand', WB: 'West Bengal', AN: 'Andaman and Nicobar Islands',
  CH: 'Chandigarh', DN: 'Dadra and Nagar Haveli and Daman and Diu', DL: 'Delhi',
  JK: 'Jammu and Kashmir', LA: 'Ladakh', LD: 'Lakshadweep', PY: 'Puducherry',
}

function expandCountryName(value: string): string {
  const raw = String(value || '').trim()
  if (!raw) return ''
  if (!/^[A-Z]{2}$/.test(raw)) return raw
  if (raw === 'US') return 'United States'
  if (raw === 'IN') return 'India'
  if (raw === 'AE') return 'United Arab Emirates'
  return raw
}

function expandRegionName(region: unknown, country: unknown): string {
  const rawRegion = String(region || '').trim()
  if (!rawRegion) return ''
  const code = rawRegion.toUpperCase()
  const countryCode = String(country || '').trim().toUpperCase()
  if (countryCode === 'US' && US_STATE_NAMES[code]) return US_STATE_NAMES[code]
  if (countryCode === 'IN' && INDIA_STATE_NAMES[code]) return INDIA_STATE_NAMES[code]
  return rawRegion
}

function formatLocationText(location: any): string {
  if (!location) return 'Unknown'
  const country = expandCountryName(location.country || location.countryCode || '')
  const region = expandRegionName(location.region, location.countryCode || location.country)
  const city = String(location.city || '').trim() || 'Unknown city'
  return [city, region, country].filter(Boolean).join(', ') || 'Unknown'
}

function formatAddress(location: any): string {
  if (!location) return 'Not available'
  if (location.address) return location.address
  const fallback = [location.neighborhood, location.city, location.region, location.postalCode, location.country]
    .filter(Boolean)
    .join(', ')
  return fallback || 'Not available'
}

function formatNeighborhood(location: any): string {
  if (!location) return 'Unknown'
  const value =
    location.neighborhood ||
    location.suburb ||
    location.cityDistrict ||
    location.district ||
    location.borough ||
    ''
  if (!value) return 'Unknown'
  return String(value).trim()
}

function formatDistrict(location: any): string {
  if (!location) return 'Unknown'
  const value = location.cityDistrict || location.district || location.borough || location.county || ''
  return typeof value === 'string' && value.trim() ? value.trim() : 'Unknown'
}

function formatGeoSource(location: any): string {
  const source = String(location?.geoSource || '').trim()
  if (!source) return 'Unknown'
  if (source === 'merged') return 'Vercel + ip-api'
  if (source === 'ip-api') return 'ip-api'
  if (source === 'vercel') return 'Vercel edge'
  return source
}

function formatAccuracy(location: any): string {
  if (!location) return 'Unknown'
  if (location.accuracyLevel === 'gps') {
    const meters = typeof location.accuracyMeters === 'number' ? ` ±${Math.round(location.accuracyMeters)}m` : ''
    return `Browser GPS${meters}`
  }
  if (location.accuracyLevel === 'ip') {
    const src = location.geoSource ? ` (${location.geoSource})` : ''
    return `IP / edge estimate only${src} — not a street address`
  }
  return 'Unknown'
}

function formatVpnLine(data: any): string {
  const signals = data.locationSignals
  if (!signals) return 'Not assessed'
  const flag = signals.vpnLikely ? '⚠️ Likely VPN/proxy' : 'No strong VPN signal'
  const why = Array.isArray(signals.reasons) && signals.reasons.length
    ? `\n_${signals.reasons.slice(0, 3).join('; ')}_`
    : ''
  return `${flag} · confidence ${signals.confidence}${why}`
}

function formatIspLine(location: any): string {
  const parts = [location?.isp, location?.org].filter(Boolean)
  return parts.length ? parts.join(' · ') : 'Unknown'
}

function formatCoordinates(location: any): string {
  if (typeof location?.latitude === 'number' && typeof location?.longitude === 'number') {
    return `${location.latitude.toFixed(6)}, ${location.longitude.toFixed(6)}`
  }
  return 'Not available'
}

function formatBrowserContext(browser: any): string {
  if (!browser) return 'Not available'
  return [
    browser.url ? `*URL:* ${browser.url}` : '',
    browser.referrer ? `*Referrer:* ${browser.referrer}` : `*Referrer:* Direct`,
    browser.hostname ? `*Hostname:* ${browser.hostname}` : '',
    browser.screen ? `*Screen:* ${browser.screen}` : '',
    browser.language ? `*Language:* ${browser.language}` : '',
  ].filter(Boolean).join('\n') || 'Not available'
}

function formatReferrerLink(raw: unknown): string {
  const value = typeof raw === 'string' ? raw.trim() : ''
  if (!value || /^direct$/i.test(value)) return 'Direct'
  try {
    const url = new URL(value)
    const path = url.pathname && url.pathname !== '/' ? url.pathname : ''
    const label = `${url.hostname}${path}`.slice(0, 80)
    return `<${value}|${label}>`
  } catch {
    return value.slice(0, 120)
  }
}

/** Always a visible referrer line — landing first-touch, then this-page document.referrer. */
function formatPreviousWebsite(data: any): string {
  const landing = formatReferrerLink(data.referrer || data.firstTouch?.referrer)
  const current = formatReferrerLink(data.browser?.referrer)
  const utm = formatUtm(data)
  let line = landing
  if (landing === 'Direct' && current !== 'Direct') line = current
  else if (current !== 'Direct' && current !== landing) line = `${landing}\n_This page:_ ${current}`
  if (line === 'Direct' && utm !== 'None') line = `Direct · ${utm}`
  return line || 'Direct'
}

function formatUtm(data: any): string {
  const utm = data.utmParams || {}
  const first = data.firstTouch || {}
  const parts = [
    (utm.source || first.utmSource) ? `source=${utm.source || first.utmSource}` : '',
    (utm.medium || first.utmMedium) ? `medium=${utm.medium || first.utmMedium}` : '',
    (utm.campaign || first.utmCampaign) ? `campaign=${utm.campaign || first.utmCampaign}` : '',
  ].filter(Boolean)
  return parts.length > 0 ? parts.join(' • ') : 'None'
}

const SLACK_VISIT_HISTORY_TZ = 'Asia/Dubai'

/** Numbered list of each site open (Dubai time), for Slack Block Kit (keep under ~3000 chars) */
function formatVisitHistoryMarkdown(data: {
  visitTimestamps?: string[]
  visitCount?: number
  visitorId?: string
}): string {
  const timestamps = Array.isArray(data.visitTimestamps) ? data.visitTimestamps : []
  const visitCount = typeof data.visitCount === 'number' ? data.visitCount : 0
  const vid = data.visitorId ? `\`${data.visitorId}\`` : 'this visitor'

  const formatLine = (iso: string, index: number) => {
    const d = new Date(iso)
    if (Number.isNaN(d.getTime())) return `${index + 1}. (invalid date)`
    const s = d.toLocaleString('en-GB', {
      timeZone: SLACK_VISIT_HISTORY_TZ,
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    })
    return `${index + 1}. ${s} (Dubai)`
  }

  if (timestamps.length === 0) {
    return (
      `*📜 Session opens (this browser, Dubai time)*\n` +
      `_No timestamps stored yet — each new deploy logs opens from then on. Visit counter: ${visitCount || '—'}. For older times for ${vid}, search this Slack channel for past visitor alerts with that ID._`
    )
  }

  const numbered = timestamps.map(formatLine)
  let body = numbered.join('\n')
  if (body.length > 2600) {
    const kept: string[] = []
    let len = 0
    for (let i = numbered.length - 1; i >= 0; i--) {
      const line = numbered[i]
      if (len + line.length + 1 > 2400) break
      kept.unshift(line)
      len += line.length + 1
    }
    body = `_${timestamps.length} opens logged — showing last ${kept.length}:_\n` + kept.join('\n')
  }

  let text = `*📜 Session opens (this browser, Dubai time)*\n${body}`
  if (visitCount > timestamps.length) {
    text += `\n\n_${visitCount} lifetime visits on the counter; this list has ${timestamps.length} timestamp(s) (opens before logging started, or old rows trimmed). For missing dates, search Slack for Visitor ID ${vid}._`
  }
  return text
}

export async function POST(request: NextRequest) {
  const rl = await rateLimitResponse(request, 'analytics_slack', 120, 60)
  if (rl) return rl

  try {
    const { type, data } = await request.json()

    let payload = data
    const neighborhoodTypes = new Set(['new_visitor', 'returning_visitor', 'location_update', 'page_view'])
    if (data?.visitorId) {
      const loc = (data.location || {}) as Record<string, unknown>
      const serverGeo = await resolveRequestGeo(request)
      const ip = serverGeo?.ip || getClientIpFromRequest(request) || (typeof loc.ip === 'string' ? loc.ip : null)

      if (serverGeo || ip) {
        payload = {
          ...data,
          location: {
            ...loc,
            city: serverGeo?.city || loc.city || 'Unknown',
            region: serverGeo?.region || loc.region || '',
            country: serverGeo?.country || loc.country || 'Unknown',
            countryCode: serverGeo?.countryCode || loc.countryCode || 'XX',
            ip: ip || loc.ip || 'Unknown',
            latitude: serverGeo?.latitude ?? loc.latitude ?? null,
            longitude: serverGeo?.longitude ?? loc.longitude ?? null,
            timezone: serverGeo?.timezone || loc.timezone || '',
            isp: serverGeo?.isp || loc.isp,
            org: serverGeo?.org || loc.org,
            as: serverGeo?.as || loc.as,
            geoSource: serverGeo?.source || loc.geoSource,
            accuracyLevel: loc.accuracyLevel === 'gps' ? 'gps' : 'ip',
            neighborhood:
              (typeof loc.neighborhood === 'string' && loc.neighborhood.trim()) ||
              (typeof loc.suburb === 'string' && loc.suburb.trim()) ||
              '',
            cityDistrict:
              (typeof loc.cityDistrict === 'string' && loc.cityDistrict.trim()) ||
              (typeof loc.district === 'string' && loc.district.trim()) ||
              '',
          },
        }
      }

      const lat = Number(payload?.location?.latitude)
      const lng = Number(payload?.location?.longitude)
      const hasNeighborhood = Boolean(
        payload?.location?.neighborhood ||
          payload?.location?.suburb ||
          payload?.location?.cityDistrict ||
          payload?.location?.district,
      )
      if (
        neighborhoodTypes.has(type) &&
        !hasNeighborhood &&
        Number.isFinite(lat) &&
        Number.isFinite(lng)
      ) {
        const geocoded = await reverseGeocodeApproxNeighborhood(lat, lng)
        if (geocoded.neighborhood || geocoded.cityDistrict || geocoded.address) {
          payload = {
            ...payload,
            location: {
              ...payload.location,
              neighborhood: geocoded.neighborhood || payload.location?.neighborhood || '',
              cityDistrict: geocoded.cityDistrict || payload.location?.cityDistrict || '',
              postalCode: geocoded.postalCode || payload.location?.postalCode || '',
              address:
                geocoded.address ||
                payload.location?.address ||
                payload.location?.display_name ||
                '',
            },
          }
        }
      }

      const locationSignals = assessLocationSignals({
        ipCountryCode: payload.location?.countryCode,
        ipTimezone: payload.location?.timezone,
        ipIsp: payload.location?.isp,
        ipOrg: payload.location?.org,
        ipAs: payload.location?.as,
        browserTimezone: data.browser?.timezone || data.timezone,
        browserLanguage: data.browser?.language,
        shopCurrency: data.currency || data.shopCurrency,
        shopLanguage: data.language || data.shopLanguage,
      })
      payload = { ...payload, locationSignals }

      activeVisitors.set(payload.visitorId, {
        ...payload,
        lastSeen: new Date().toISOString(),
      })
    }
    // Persist to Redis-backed store so the dashboard shows real numbers on serverless.
    await recordAnalyticsEvent(type, payload)

    // Slack delivery is best-effort: analytics is already persisted above, so a missing or
    // failing webhook must not drop the event or return an error to the client tracker.
    const botRisk = assessVisitorBotRisk(payload || {})
    const suppressSlack =
      shouldSuppressVisitorNoise({
        visitorId: payload?.visitorId,
        browserPath: payload?.browser?.path,
        currentPagePath: payload?.currentPage?.path,
        staffOptics: payload?.staffOptics,
      }) || shouldSuppressBotSlack(botRisk)
    const webhookUrl = suppressSlack ? undefined : resolveSlackWebhookForType(type)
    if (webhookUrl) {
      try {
        const message = formatSlackMessage(type, { ...payload, botRisk })
        const slackResponse = await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(message),
        })
        if (!slackResponse.ok) {
          const details = await slackResponse.text()
          console.error('Slack webhook delivery failed:', slackResponse.status, details)
        }
      } catch (slackError) {
        console.error('Slack webhook delivery error:', slackError)
      }
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Analytics event error:', error)
    return NextResponse.json({ error: 'Failed to record event' }, { status: 500 })
  }
}

function resolveSlackWebhookForType(type: string): string | undefined {
  if (type === 'product_view' || type === 'product_click') return undefined
  const recoveryTypes = new Set(['checkout_started'])
  const abandonedTypes = new Set([
    'abandoned_cart',
    'checkout_abandoned',
    'cart_recovery_started',
    'cart_recovered',
  ])
  const cartTypes = new Set(['cart_add', 'cart_event', 'wishlist_add'])
  if (abandonedTypes.has(type) && SLACK_ABANDONED_CART_WEBHOOK_URL) {
    return SLACK_ABANDONED_CART_WEBHOOK_URL
  }
  if (recoveryTypes.has(type) && SLACK_RECOVERY_WEBHOOK_URL) {
    return SLACK_RECOVERY_WEBHOOK_URL
  }
  if (cartTypes.has(type)) {
    return (
      normalizedWebhook(process.env.SLACK_CART_WEBHOOK_URL) ||
      SLACK_WEBHOOK_URL ||
      undefined
    )
  }
  return SLACK_WEBHOOK_URL || undefined
}

function formatSlackMessage(type: string, data: any) {
  const timestamp = new Date().toLocaleString('en-AE', { timeZone: 'Asia/Dubai' })
  const locationText = formatLocationText(data.location)
  const ip = data.location?.ip || 'Unknown'
  const device = data.device ? `${data.device.type} • ${data.device.browser} • ${data.device.os}` : 'Unknown'
  const timeOnSite = data.totalTimeOnSite ? formatTime(data.totalTimeOnSite) : '0s'
  
  // Check for VIP visitor
  const vipCheck = checkVIP(data.visitorId || '', ip)
  const vipFlag = vipCheck.isVIP ? `🚨 *VIP: ${vipCheck.name}* 🚨\n` : ''
  const vipEmoji = vipCheck.isVIP ? '⭐' : ''
  const houseName = vipCheck.isVIP ? null : namedHouseVisitor(data.visitorId)
  const botRisk = data.botRisk || assessVisitorBotRisk(data)
  const botBanner =
    botRisk?.label && botRisk.level !== 'none'
      ? {
          type: 'section' as const,
          text: {
            type: 'mrkdwn' as const,
            text:
              `*${botRisk.label}*\n` +
              (Array.isArray(botRisk.reasons) && botRisk.reasons.length
                ? `_${botRisk.reasons.join(' · ')}_`
                : '_Automated / datacenter traffic pattern_'),
          },
        }
      : null
  const withBot = (blocks: any[]) => (botBanner ? [botBanner, ...blocks] : blocks)
  
  // Generate map link — matches the location text we show (not a mismatched IP pin)
  const mapLink = getMapLink(data.location)
  const locationWithMap = mapLink ? `<${mapLink}|📍 ${locationText}>` : `🌍 ${locationText}`
  const accuracyBadge = data.location?.accuracyLevel === 'gps' ? ' 🎯' : data.location?.accuracyLevel === 'ip' ? ' 📡' : ''
  const addressText = formatAddress(data.location)
  const accuracyText = formatAccuracy(data.location)
  const coordinatesText = formatCoordinates(data.location)
  const previousWebsite = formatPreviousWebsite(data)
  const utmText = formatUtm(data)
  const vpnText = formatVpnLine(data)
  const ispText = formatIspLine(data.location)
  const shopPref = formatShopPreferenceLine(data.currency || data.shopCurrency, data.language || data.shopLanguage)
  const browserTz = data.browser?.timezone || data.location?.browserTimezone || '—'
  const neighborhood = formatNeighborhood(data.location)
  const district = formatDistrict(data.location)
  const postcode = data.location?.postalCode || 'Unknown'
  const geoSource = formatGeoSource(data.location)
  const locationConfidence = data.locationSignals?.confidence || 'unknown'

  const geoExtraFields = [
    { type: 'mrkdwn' as const, text: `*Approx neighborhood:*\n🏘️ ${neighborhood}` },
    { type: 'mrkdwn' as const, text: `*Approx district:*\n🧭 ${district}` },
    { type: 'mrkdwn' as const, text: `*Approx postcode:*\n🔢 ${postcode}` },
    { type: 'mrkdwn' as const, text: `*Geo source:*\n🛰️ ${geoSource}` },
    { type: 'mrkdwn' as const, text: `*Confidence:*\n${locationConfidence}` },
    { type: 'mrkdwn' as const, text: `*Approx area:*\n📬 ${addressText}` },
    { type: 'mrkdwn' as const, text: `*Location trust:*\n🎯 ${accuracyText}` },
    { type: 'mrkdwn' as const, text: `*VPN / proxy:*\n${vpnText}` },
    { type: 'mrkdwn' as const, text: `*Network:*\n🛰️ ${ispText}` },
    { type: 'mrkdwn' as const, text: `*Shop preference:*\n🛍️ ${shopPref}` },
    { type: 'mrkdwn' as const, text: `*Browser clock:*\n🕒 ${browserTz}` },
  ]

  switch (type) {
    case 'new_visitor':
      // VIP gets a completely different, prominent message
      if (vipCheck.isVIP) {
        return {
          blocks: [
            {
              type: 'header',
              text: { type: 'plain_text', text: `🔴🔴🔴 ${vipCheck.name.toUpperCase()} IS ON THE SITE! 🔴🔴🔴`, emoji: true }
            },
            {
              type: 'section',
              text: { type: 'mrkdwn', text: `*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*\n⭐ *VIP VISITOR: ${vipCheck.name.toUpperCase()}* ⭐\n*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*` }
            },
            {
              type: 'section',
              fields: [
                { type: 'mrkdwn', text: `*📅 Date & Time:*\n${timestamp}` },
                { type: 'mrkdwn', text: `*📍 Location:*\n${locationWithMap}${accuracyBadge}` },
              ]
            },
            {
              type: 'section',
              fields: [
                { type: 'mrkdwn', text: `*🔒 IP Address:*\n\`${ip}\`` },
                { type: 'mrkdwn', text: `*📱 Device:*\n${device}` },
                { type: 'mrkdwn', text: `*📬 Address:*\n${addressText}` },
                { type: 'mrkdwn', text: `*🎯 Accuracy:*\n${accuracyText}` },
              ]
            },
            {
              type: 'section',
              fields: [
                { type: 'mrkdwn', text: `*🔗 Referrer:*\n${previousWebsite}` },
                { type: 'mrkdwn', text: `*✨ Status:*\nFirst-time visitor` },
                { type: 'mrkdwn', text: `*🏷️ UTM:*\n${utmText}` },
              ]
            },
            {
              type: 'section',
              text: { type: 'mrkdwn', text: formatVisitHistoryMarkdown(data) },
            },
            {
              type: 'divider'
            },
            {
              type: 'context',
              elements: [
                { type: 'mrkdwn', text: `🏷️ Visitor ID: \`${data.visitorId}\` | 👤 VIP: *${vipCheck.name}*` }
              ]
            }
          ]
        }
      }
      // Regular visitor
      return {
        blocks: withBot([
          {
            type: 'header',
            text: { type: 'plain_text', text: houseName ? `🆕 New Visitor — ${houseName}` : '🆕 New Visitor on bintsaeed.com', emoji: true }
          },
          {
            type: 'section',
            fields: [
              { type: 'mrkdwn', text: `*Date & Time:*\n🕐 ${timestamp}` },
              { type: 'mrkdwn', text: `*IP location:*\n${locationWithMap}${accuracyBadge}` },
              { type: 'mrkdwn', text: `*IP Address:*\n🔒 \`${ip}\`` },
              { type: 'mrkdwn', text: `*Device:*\n📱 ${device}` },
              ...geoExtraFields,
            ]
          },
          {
            type: 'section',
            fields: [
              { type: 'mrkdwn', text: `*Referrer:*\n🔗 ${previousWebsite}` },
              { type: 'mrkdwn', text: `*Status:*\n✨ First-time visitor` },
              { type: 'mrkdwn', text: `*UTM:*\n🏷️ ${utmText}` },
            ]
          },
          {
            type: 'section',
            text: { type: 'mrkdwn', text: formatVisitHistoryMarkdown(data) },
          },
          {
            type: 'context',
            elements: [
              { type: 'mrkdwn', text: houseName ? `Visitor ID: \`${data.visitorId}\` | 👤 *${houseName}*` : `Visitor ID: \`${data.visitorId}\` · IP city ≠ home if VPN` }
            ]
          }
        ])
      }

    case 'returning_visitor':
      // VIP gets a completely different, prominent message
      if (vipCheck.isVIP) {
        return {
          blocks: withBot([
            {
              type: 'header',
              text: { type: 'plain_text', text: `🔴🔴🔴 ${vipCheck.name.toUpperCase()} IS BACK! 🔴🔴🔴`, emoji: true }
            },
            {
              type: 'section',
              text: { type: 'mrkdwn', text: `*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*\n⭐ *VIP RETURNING: ${vipCheck.name.toUpperCase()}* ⭐\n*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*` }
            },
            {
              type: 'section',
              fields: [
                { type: 'mrkdwn', text: `*📅 Date & Time:*\n${timestamp}` },
                { type: 'mrkdwn', text: `*📍 Location:*\n${locationWithMap}${accuracyBadge}` },
              ]
            },
            {
              type: 'section',
              fields: [
                { type: 'mrkdwn', text: `*🔒 IP Address:*\n\`${ip}\`` },
                { type: 'mrkdwn', text: `*📱 Device:*\n${device}` },
                { type: 'mrkdwn', text: `*📬 Address:*\n${addressText}` },
                { type: 'mrkdwn', text: `*🎯 Accuracy:*\n${accuracyText}` },
              ]
            },
            {
              type: 'section',
              fields: [
                { type: 'mrkdwn', text: `*🔢 Visit Count:*\nVisit #${data.visitCount}` },
                { type: 'mrkdwn', text: `*📅 First Visit:*\n${new Date(data.firstVisit).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}` },
              { type: 'mrkdwn', text: `*🌐 Referrer:*\n${previousWebsite}` },
              { type: 'mrkdwn', text: `*⏱️ Time on Site:*\n${timeOnSite}` },
              ]
            },
            {
              type: 'section',
              text: { type: 'mrkdwn', text: formatVisitHistoryMarkdown(data) },
            },
            {
              type: 'divider'
            },
            {
              type: 'context',
              elements: [
                { type: 'mrkdwn', text: `🏷️ Visitor ID: \`${data.visitorId}\` | 👤 VIP: *${vipCheck.name}*` }
              ]
            }
          ])
        }
      }
      // Regular visitor
      return {
        blocks: withBot([
          {
            type: 'header',
            text: { type: 'plain_text', text: houseName ? `🔄 Returning Visitor — ${houseName}` : '🔄 Returning Visitor on bintsaeed.com', emoji: true }
          },
          {
            type: 'section',
            fields: [
              { type: 'mrkdwn', text: `*Date & Time:*\n🕐 ${timestamp}` },
              { type: 'mrkdwn', text: `*IP location:*\n${locationWithMap}${accuracyBadge}` },
              { type: 'mrkdwn', text: `*IP Address:*\n🔒 \`${ip}\`` },
              { type: 'mrkdwn', text: `*Device:*\n📱 ${device}` },
              ...geoExtraFields,
            ]
          },
          {
            type: 'section',
            fields: [
              { type: 'mrkdwn', text: `*Visit Count:*\n🔢 Visit #${data.visitCount}` },
              { type: 'mrkdwn', text: `*First Visit:*\n📅 ${new Date(data.firstVisit).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}` },
              { type: 'mrkdwn', text: `*Referrer:*\n🌐 ${previousWebsite}` },
              { type: 'mrkdwn', text: `*Time on Site:*\n⏱️ ${timeOnSite}` },
            ]
          },
          {
            type: 'section',
            text: { type: 'mrkdwn', text: formatVisitHistoryMarkdown(data) },
          },
          {
            type: 'context',
            elements: [
              { type: 'mrkdwn', text: houseName ? `Visitor ID: \`${data.visitorId}\` | 👤 *${houseName}*` : `Visitor ID: \`${data.visitorId}\` · IP city ≠ home if VPN` }
            ]
          }
        ])
      }
    
    case 'location_update':
      return {
        blocks: [
          {
            type: 'header',
            text: { type: 'plain_text', text: '📍 Visitor shared browser location', emoji: true }
          },
          {
            type: 'section',
            fields: [
              { type: 'mrkdwn', text: `*Page Information:*\n${data.browser?.title ? `*Title:* ${data.browser.title}\n` : ''}${formatBrowserContext(data.browser)}` },
              { type: 'mrkdwn', text: `*Device & Browser:*\n${device}${data.browser?.userAgent ? `\n*User agent:* ${data.browser.userAgent}` : ''}` },
              { type: 'mrkdwn', text: `*Referrer:*\n${previousWebsite}` },
              { type: 'mrkdwn', text: `*Time on Site:*\n${timeOnSite}` },
            ]
          },
          {
            type: 'section',
            fields: [
              { type: 'mrkdwn', text: `*Location:*\n${locationWithMap}` },
              { type: 'mrkdwn', text: `*Address:*\n${addressText}` },
              { type: 'mrkdwn', text: `*Accuracy:*\n${accuracyText}` },
              { type: 'mrkdwn', text: `*Coordinates:*\n${coordinatesText}` },
              { type: 'mrkdwn', text: `*IP Address:*\n\`${ip}\`` },
              { type: 'mrkdwn', text: `*Timezone:*\n${data.location?.timezone || 'Unknown'}` },
            ]
          },
          {
            type: 'context',
            elements: [
              { type: 'mrkdwn', text: `Visitor ID: \`${data.visitorId}\`${data.location?.locationCapturedAt ? ` | Captured: ${data.location.locationCapturedAt}` : ''}${vipCheck.isVIP ? ` | 🚨 VIP: ${vipCheck.name}` : houseName ? ` | 👤 *${houseName}*` : ''}` }
            ]
          }
        ]
      }

    case 'session_summary':
      return {
        blocks: withBot([
          {
            type: 'header',
            text: { type: 'plain_text', text: '⏱️ Visitor Session Summary', emoji: true }
          },
          {
            type: 'section',
            fields: [
              { type: 'mrkdwn', text: `*Time on Site:*\n${timeOnSite}` },
              { type: 'mrkdwn', text: `*Referrer:*\n${previousWebsite}` },
              { type: 'mrkdwn', text: `*Pages Viewed:*\n${data.pageViews?.length || 0}` },
              { type: 'mrkdwn', text: `*Last Page:*\n${data.currentPage?.title || data.currentPage?.path || data.browser?.path || 'Unknown'}` },
              { type: 'mrkdwn', text: `*Location:*\n${locationWithMap}${accuracyBadge}` },
              { type: 'mrkdwn', text: `*IP Address:*\n🔒 \`${ip}\`` },
              { type: 'mrkdwn', text: `*Device:*\n${device}` },
            ]
          },
          {
            type: 'context',
            elements: [
              { type: 'mrkdwn', text: `${houseName ? `👤 *${houseName}* | ` : ''}Visitor ID: \`${data.visitorId}\` | IP: \`${ip}\` | Session ID: \`${data.sessionId || 'Unknown'}\` | UTM: ${utmText}` }
            ]
          }
        ])
      }

    case 'page_view': {
      const lang = data.languageLabel || data.language || 'Unknown'
      const curr = data.currency || 'AED'
      const pagePath = data.currentPage?.path || data.browser?.path || 'Unknown'
      const pageTitle = data.currentPage?.title || data.browser?.title || pagePath
      return {
        blocks: withBot([
          {
            type: 'section',
            text: {
              type: 'mrkdwn',
              text: `👁️ *Page view*${houseName ? ` — ${houseName}` : ''}\n*${pageTitle}*\n\`${pagePath}\``,
            },
          },
          {
            type: 'section',
            fields: [
              { type: 'mrkdwn', text: `*Language:*\n🌐 ${lang} (\`${data.language || 'en'}\`)` },
              { type: 'mrkdwn', text: `*Currency:*\n💱 ${curr}` },
              { type: 'mrkdwn', text: `*Referrer:*\n🔗 ${previousWebsite}` },
              { type: 'mrkdwn', text: `*Location:*\n${locationWithMap}${accuracyBadge}` },
              { type: 'mrkdwn', text: `*IP Address:*\n🔒 \`${ip}\`` },
              { type: 'mrkdwn', text: `*Device:*\n${device}` },
            ],
          },
          {
            type: 'context',
            elements: [
              {
                type: 'mrkdwn',
                text: `${houseName ? `👤 *${houseName}* · ` : ''}Visitor \`${data.visitorId || 'Unknown'}\` · IP \`${ip}\` · ${timeOnSite} on site · ${timestamp} GST`,
              },
            ],
          },
        ]),
      }
    }

    case 'cart_add': {
      const cart = data.cartEvent || {}
      const lines = [
        cart.productName ? `*${cart.productName}*` : null,
        cart.color ? `Colour: ${cart.color}` : null,
        cart.size ? `Size: ${cart.size}` : null,
        cart.quantity ? `Qty: ${cart.quantity}` : null,
        cart.linePriceAed ? `Price: AED ${cart.linePriceAed}` : null,
        cart.sku ? `SKU: ${cart.sku}` : null,
        cart.productUrl && typeof data.browser?.url === 'string'
          ? `Product: ${cart.productUrl}`
          : cart.productUrl
            ? `Product: ${cart.productUrl}`
            : null,
      ].filter(Boolean)
      return {
        blocks: withBot([
          {
            type: 'header',
            text: { type: 'plain_text', text: '🛒 Added to bag', emoji: true },
          },
          {
            type: 'section',
            text: { type: 'mrkdwn', text: lines.join('\n') || 'Item added to cart' },
          },
          {
            type: 'section',
            fields: [
              { type: 'mrkdwn', text: `*Bag total:*\nAED ${data.cartValueAed ?? '—'}` },
              { type: 'mrkdwn', text: `*Items in bag:*\n${data.cartItems ?? '—'}` },
              { type: 'mrkdwn', text: `*Referrer:*\n🔗 ${previousWebsite}` },
              { type: 'mrkdwn', text: `*Location:*\n${locationText}` },
              { type: 'mrkdwn', text: `*Device:*\n${device}` },
            ],
          },
          {
            type: 'context',
            elements: [
              {
                type: 'mrkdwn',
                text: `Visitor \`${data.visitorId || 'Unknown'}\` · ${timestamp} GST`,
              },
            ],
          },
        ]),
      }
    }

    case 'wishlist_add': {
      const wish = data.wishlistEvent || {}
      const lines = [
        wish.productName ? `*${wish.productName}*` : null,
        wish.category ? `Category: ${wish.category}` : null,
        wish.linePriceAed ? `Price: AED ${wish.linePriceAed}` : null,
        wish.productUrl ? `Product: ${wish.productUrl}` : null,
      ].filter(Boolean)
      return {
        blocks: withBot([
          {
            type: 'header',
            text: { type: 'plain_text', text: '♡ Added to wishlist', emoji: true },
          },
          {
            type: 'section',
            text: { type: 'mrkdwn', text: lines.join('\n') || 'Item saved to wishlist' },
          },
          {
            type: 'section',
            fields: [
              { type: 'mrkdwn', text: `*Referrer:*\n🔗 ${previousWebsite}` },
              { type: 'mrkdwn', text: `*Location:*\n${locationText}` },
              { type: 'mrkdwn', text: `*Device:*\n${device}` },
            ],
          },
          {
            type: 'context',
            elements: [
              {
                type: 'mrkdwn',
                text: `Visitor \`${data.visitorId || 'Unknown'}\` · ${timestamp} GST`,
              },
            ],
          },
        ]),
      }
    }

    case 'abandoned_cart':
    case 'checkout_abandoned': {
      const leftCheckout = type === 'checkout_abandoned'
      const itemLines =
        Array.isArray(data.items) && data.items.length > 0
          ? data.items
              .map(
                (item: { name?: string; quantity?: number; color?: string; size?: string }) =>
                  `• ${item.name || 'Item'}${item.quantity ? ` ×${item.quantity}` : ''}${item.color ? ` — ${item.color}` : ''}${item.size ? ` / ${item.size}` : ''}`,
              )
              .join('\n')
          : 'Items in bag'
      return {
        blocks: withBot([
          {
            type: 'header',
            text: {
              type: 'plain_text',
              text: leftCheckout ? '💳 Left checkout unpaid' : '🛍️ Abandoned bag',
              emoji: true,
            },
          },
          {
            type: 'section',
            fields: [
              { type: 'mrkdwn', text: `*Bag value:*\nAED ${data.cartValueAed ?? '—'}` },
              { type: 'mrkdwn', text: `*Items:*\n${data.cartItems ?? '—'}` },
              { type: 'mrkdwn', text: `*Referrer:*\n🔗 ${previousWebsite}` },
              { type: 'mrkdwn', text: `*Location:*\n${locationWithMap}${accuracyBadge}` },
              { type: 'mrkdwn', text: `*IP Address:*\n🔒 \`${ip}\`` },
              { type: 'mrkdwn', text: `*Device:*\n${device}` },
            ],
          },
          {
            type: 'section',
            text: { type: 'mrkdwn', text: `*Bag contents:*\n${itemLines}` },
          },
          {
            type: 'context',
            elements: [
              {
                type: 'mrkdwn',
                text: `Visitor \`${data.visitorId || 'Unknown'}\` · IP \`${ip}\` · ${timestamp} GST · ${data.browser?.path || 'Unknown page'}`,
              },
            ],
          },
        ]),
      }
    }

    case 'cart_event':
      const cartEmoji = data.cartEvent?.action === 'add' ? '🛒' : data.cartEvent?.action === 'checkout' ? '💳' : '❌'
      const actionText = data.cartEvent?.action === 'add' ? 'Added to Cart' : 
                        data.cartEvent?.action === 'checkout' ? 'Started Checkout' : 'Removed from Cart'
      return {
        blocks: [
          {
            type: 'header',
            text: { type: 'plain_text', text: `${cartEmoji} ${actionText}`, emoji: true }
          },
          {
            type: 'section',
            fields: [
              { type: 'mrkdwn', text: `*Product:*\n${data.cartEvent?.productName}` },
              { type: 'mrkdwn', text: `*Referrer:*\n🔗 ${previousWebsite}` },
              { type: 'mrkdwn', text: `*Location:*\n${locationText}` },
              { type: 'mrkdwn', text: `*Time on Site:*\n${timeOnSite}` },
              { type: 'mrkdwn', text: `*Device:*\n${device}` },
            ]
          }
        ]
      }

    case 'contact_captured':
      return {
        blocks: [
          {
            type: 'header',
            text: { type: 'plain_text', text: '📧 Contact Info Captured!', emoji: true }
          },
          {
            type: 'section',
            fields: [
              { type: 'mrkdwn', text: `*Name:*\n${data.contactInfo?.name || 'Not provided'}` },
              { type: 'mrkdwn', text: `*Email:*\n${data.contactInfo?.email || 'Not provided'}` },
              { type: 'mrkdwn', text: `*Phone:*\n${data.contactInfo?.phone || 'Not provided'}` },
              { type: 'mrkdwn', text: `*Location:*\n${locationText}` },
            ]
          },
          {
            type: 'section',
            fields: [
              { type: 'mrkdwn', text: `*Visit #:*\n${data.visitCount}` },
              { type: 'mrkdwn', text: `*Time on Site:*\n${timeOnSite}` },
              { type: 'mrkdwn', text: `*Pages Viewed:*\n${data.pageViews?.length || 0}` },
              { type: 'mrkdwn', text: `*Referrer:*\n🔗 ${previousWebsite}` },
            ]
          }
        ]
      }

    case 'checkout_started':
      return {
        blocks: [
          {
            type: 'header',
            text: { type: 'plain_text', text: '💰 Checkout Started!', emoji: true }
          },
          {
            type: 'section',
            fields: [
              { type: 'mrkdwn', text: `*Email:*\n${data.contactInfo?.email || 'Unknown'}` },
              { type: 'mrkdwn', text: `*Referrer:*\n🔗 ${previousWebsite}` },
              { type: 'mrkdwn', text: `*Location:*\n${locationText}` },
              { type: 'mrkdwn', text: `*Cart Value:*\n${data.cartValue || 'Unknown'}` },
              { type: 'mrkdwn', text: `*Items:*\n${data.cartItems || 0}` },
            ]
          }
        ]
      }

    case 'order_completed':
      return {
        blocks: [
          {
            type: 'header',
            text: { type: 'plain_text', text: '🎉 NEW ORDER!', emoji: true }
          },
          {
            type: 'section',
            fields: [
              { type: 'mrkdwn', text: `*Order Total:*\n💵 ${data.orderTotal}` },
              { type: 'mrkdwn', text: `*Customer:*\n👤 ${data.customerName}` },
              { type: 'mrkdwn', text: `*Email:*\n📧 ${data.customerEmail}` },
              { type: 'mrkdwn', text: `*Phone:*\n📞 ${data.customerPhone || 'Not provided'}` },
            ]
          },
          {
            type: 'section',
            text: { type: 'mrkdwn', text: `*Items:*\n${data.items?.map((i: any) => `• ${i.name} (${i.quantity}x)`).join('\n') || 'N/A'}` }
          },
          {
            type: 'section',
            fields: [
              { type: 'mrkdwn', text: `*Shipping:*\n🚚 ${data.shippingAddress || 'N/A'}` },
              { type: 'mrkdwn', text: `*Referrer:*\n🔗 ${previousWebsite}` },
              { type: 'mrkdwn', text: `*Location:*\n🌍 ${locationText}` },
            ]
          }
        ]
      }

    default:
      return {
        text: `[${type}] ${JSON.stringify(data)}`
      }
  }
}

function formatTime(seconds: number): string {
  if (seconds < 60) return `${seconds}s`
  const mins = Math.floor(seconds / 60)
  const secs = seconds % 60
  if (mins < 60) return `${mins}m ${secs}s`
  const hours = Math.floor(mins / 60)
  return `${hours}h ${mins % 60}m`
}

function readNeighborhoodFromAddress(address: Record<string, unknown> | undefined): string {
  if (!address) return ''
  const candidates = [
    address.neighbourhood,
    address.neighborhood,
    address.suburb,
    address.city_district,
    address.district,
    address.quarter,
    address.borough,
  ]
  for (const value of candidates) {
    if (typeof value === 'string' && value.trim()) return value.trim()
  }
  return ''
}

async function reverseGeocodeApproxNeighborhood(
  latitude: number,
  longitude: number,
): Promise<Partial<Record<string, string>>> {
  try {
    const res = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${encodeURIComponent(latitude)}&lon=${encodeURIComponent(longitude)}&zoom=14&addressdetails=1`,
      { signal: AbortSignal.timeout(2500), next: { revalidate: 0 } },
    )
    if (!res.ok) return {}
    const data = (await res.json()) as {
      address?: Record<string, unknown>
      display_name?: string
    }
    const address = data.address || {}
    const neighborhood = readNeighborhoodFromAddress(address)
    const cityDistrict =
      (typeof address.city_district === 'string' && address.city_district.trim()) ||
      (typeof address.district === 'string' && address.district.trim()) ||
      ''
    const postalCode =
      (typeof address.postcode === 'string' && address.postcode.trim()) || ''
    return {
      neighborhood: neighborhood || undefined,
      cityDistrict: cityDistrict || undefined,
      postalCode: postalCode || undefined,
      address:
        typeof data.display_name === 'string' && data.display_name.trim()
          ? data.display_name.trim()
          : undefined,
    }
  } catch {
    return {}
  }
}

// GET endpoint for admin dashboard
export async function GET(request: NextRequest) {
  if (!(await requireAdmin(request))) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { searchParams } = new URL(request.url)
  const type = searchParams.get('type')

  try {
    if (type === 'active') {
      const active = await getActiveVisitors()
      return NextResponse.json({ activeVisitors: active, count: active.length })
    }

    if (type === 'notifications') {
      const notifications = await getNotifications()
      return NextResponse.json({ notifications })
    }

    if (type === 'abandoned') {
      const abandoned = await getAbandonedCartStats()
      return NextResponse.json(abandoned)
    }

    if (type === 'geo') {
      const locations = await getVisitorLocationOverview()
      return NextResponse.json({ locations })
    }

    if (type === 'geo-trend') {
      const daysRaw = Number(searchParams.get('days') || 7)
      const days = Number.isFinite(daysRaw) ? Math.min(30, Math.max(1, Math.floor(daysRaw))) : 7
      const trend = await getGeoTrend(days)
      return NextResponse.json(trend)
    }

    if (type === 'popular') {
      const popular = await getContentPopularity()
      return NextResponse.json(popular)
    }

    const stats = await getAnalyticsStats()
    return NextResponse.json(stats)
  } catch (error) {
    console.error('Analytics dashboard GET error:', type ?? 'stats', error)
    if (type === 'active') {
      return NextResponse.json({ activeVisitors: [], count: 0 })
    }
    if (type === 'notifications') {
      return NextResponse.json({ notifications: [] })
    }
    if (type === 'abandoned') {
      return NextResponse.json({ openCount: 0, openValueAed: 0, recoveredToday: 0, carts: [] })
    }
    if (type === 'geo') {
      return NextResponse.json({ locations: [] })
    }
    if (type === 'geo-trend') {
      return NextResponse.json({ days: [], series: [], totals: [] })
    }
    if (type === 'popular') {
      return NextResponse.json({ pages: [], products: [] })
    }
    return NextResponse.json({
      liveVisitors: 0,
      totalVisitors: 0,
      todayVisitors: 0,
      newVisitors: 0,
      returningVisitors: 0,
    })
  }
}
