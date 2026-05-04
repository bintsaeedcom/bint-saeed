import { NextRequest, NextResponse } from 'next/server'
import { requireAdmin } from '@/lib/admin/apiAuth'
import { rateLimitResponse } from '@/lib/security/rateLimit'

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
  visitorIds: ['yyuaarsvulmmlwoi940'], // Your visitor ID from Slack
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

// Generate Google Maps link
function getMapLink(lat: number | null, lng: number | null, city?: string, country?: string): string {
  if (lat && lng) {
    return `https://www.google.com/maps?q=${lat},${lng}`
  }
  if (city && country) {
    return `https://www.google.com/maps/search/${encodeURIComponent(city + ', ' + country)}`
  }
  return ''
}

function formatLocationText(location: any): string {
  if (!location) return 'Unknown'
  return [location.city, location.region, location.country].filter(Boolean).join(', ') || 'Unknown'
}

function formatAddress(location: any): string {
  if (!location) return 'Not available'
  if (location.address) return location.address
  const fallback = [location.city, location.region, location.postalCode, location.country].filter(Boolean).join(', ')
  return fallback || 'Not available'
}

function formatAccuracy(location: any): string {
  if (!location) return 'Unknown'
  if (location.accuracyLevel === 'gps') {
    const meters = typeof location.accuracyMeters === 'number' ? ` ±${Math.round(location.accuracyMeters)}m` : ''
    return `Browser GPS${meters}`
  }
  if (location.accuracyLevel === 'ip') return 'IP-derived approximate location'
  return 'Unknown'
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
    browser.referrer ? `*Referrer:* ${browser.referrer}` : '',
    browser.hostname ? `*Hostname:* ${browser.hostname}` : '',
    browser.screen ? `*Screen:* ${browser.screen}` : '',
    browser.language ? `*Language:* ${browser.language}` : '',
  ].filter(Boolean).join('\n') || 'Not available'
}

function formatPreviousWebsite(data: any): string {
  const referrer = data.referrer || data.browser?.referrer || 'Direct'
  if (!referrer || referrer === 'Direct') return 'Direct'
  try {
    const url = new URL(referrer)
    return `<${referrer}|${url.hostname}>`
  } catch {
    return referrer
  }
}

function formatUtm(data: any): string {
  const utm = data.utmParams || {}
  const parts = [
    utm.source ? `source=${utm.source}` : '',
    utm.medium ? `medium=${utm.medium}` : '',
    utm.campaign ? `campaign=${utm.campaign}` : '',
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

    // Store visitor data
    if (data?.visitorId) {
      activeVisitors.set(data.visitorId, {
        ...data,
        lastSeen: new Date().toISOString(),
      })
    }

    // Format Slack message based on notification type
    let message = formatSlackMessage(type, data)

    const webhookUrl = resolveSlackWebhookForType(type)

    if (!webhookUrl) {
      console.error('Slack analytics webhook is not configured for type:', type)
      return NextResponse.json({ error: 'Slack webhook not configured' }, { status: 503 })
    }

    const slackResponse = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(message),
    })
    if (!slackResponse.ok) {
      const details = await slackResponse.text()
      console.error('Slack webhook delivery failed:', slackResponse.status, details)
      return NextResponse.json({ error: 'Slack delivery failed' }, { status: 502 })
    }

    // Also store notification for the admin dashboard
    await storeNotification(type, data)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Slack notification error:', error)
    return NextResponse.json({ error: 'Failed to send notification' }, { status: 500 })
  }
}

function resolveSlackWebhookForType(type: string): string | undefined {
  // Route abandoned-cart / recovery alerts to a dedicated channel when configured.
  const recoveryTypes = new Set([
    'cart_event',
    'checkout_started',
  ])
  const abandonedTypes = new Set([
    'abandoned_cart',
    'checkout_abandoned',
    'cart_recovery_started',
    'cart_recovered',
  ])
  if (abandonedTypes.has(type) && SLACK_ABANDONED_CART_WEBHOOK_URL) {
    return SLACK_ABANDONED_CART_WEBHOOK_URL
  }
  if (recoveryTypes.has(type) && SLACK_RECOVERY_WEBHOOK_URL) {
    return SLACK_RECOVERY_WEBHOOK_URL
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
  
  // Generate map link
  const mapLink = getMapLink(
    data.location?.latitude, 
    data.location?.longitude,
    data.location?.city,
    data.location?.country
  )
  const locationWithMap = mapLink ? `<${mapLink}|📍 ${locationText}>` : `🌍 ${locationText}`
  const accuracyBadge = data.location?.accuracyLevel === 'gps' ? ' 🎯' : data.location?.accuracyLevel === 'ip' ? ' 📡' : ''
  const addressText = formatAddress(data.location)
  const accuracyText = formatAccuracy(data.location)
  const coordinatesText = formatCoordinates(data.location)
  const previousWebsite = formatPreviousWebsite(data)
  const utmText = formatUtm(data)

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
                { type: 'mrkdwn', text: `*🔗 Referrer:*\n${data.referrer || 'Direct'}` },
                { type: 'mrkdwn', text: `*✨ Status:*\nFirst-time visitor` },
                { type: 'mrkdwn', text: `*🌐 Previous Website:*\n${previousWebsite}` },
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
        blocks: [
          {
            type: 'header',
            text: { type: 'plain_text', text: '🆕 New Visitor on bintsaeed.com', emoji: true }
          },
          {
            type: 'section',
            fields: [
              { type: 'mrkdwn', text: `*Date & Time:*\n🕐 ${timestamp}` },
              { type: 'mrkdwn', text: `*Location:*\n${locationWithMap}${accuracyBadge}` },
              { type: 'mrkdwn', text: `*IP Address:*\n🔒 \`${ip}\`` },
              { type: 'mrkdwn', text: `*Device:*\n📱 ${device}` },
              { type: 'mrkdwn', text: `*Address:*\n📬 ${addressText}` },
              { type: 'mrkdwn', text: `*Accuracy:*\n🎯 ${accuracyText}` },
            ]
          },
          {
            type: 'section',
            fields: [
              { type: 'mrkdwn', text: `*Referrer:*\n🔗 ${data.referrer || 'Direct'}` },
              { type: 'mrkdwn', text: `*Status:*\n✨ First-time visitor` },
              { type: 'mrkdwn', text: `*Previous Website:*\n🌐 ${previousWebsite}` },
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
              { type: 'mrkdwn', text: `Visitor ID: \`${data.visitorId}\`` }
            ]
          }
        ]
      }

    case 'returning_visitor':
      // VIP gets a completely different, prominent message
      if (vipCheck.isVIP) {
        return {
          blocks: [
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
              { type: 'mrkdwn', text: `*🌐 Previous Website:*\n${previousWebsite}` },
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
          ]
        }
      }
      // Regular visitor
      return {
        blocks: [
          {
            type: 'header',
            text: { type: 'plain_text', text: '🔄 Returning Visitor on bintsaeed.com', emoji: true }
          },
          {
            type: 'section',
            fields: [
              { type: 'mrkdwn', text: `*Date & Time:*\n🕐 ${timestamp}` },
              { type: 'mrkdwn', text: `*Location:*\n${locationWithMap}${accuracyBadge}` },
              { type: 'mrkdwn', text: `*IP Address:*\n🔒 \`${ip}\`` },
              { type: 'mrkdwn', text: `*Device:*\n📱 ${device}` },
              { type: 'mrkdwn', text: `*Address:*\n📬 ${addressText}` },
              { type: 'mrkdwn', text: `*Accuracy:*\n🎯 ${accuracyText}` },
            ]
          },
          {
            type: 'section',
            fields: [
              { type: 'mrkdwn', text: `*Visit Count:*\n🔢 Visit #${data.visitCount}` },
              { type: 'mrkdwn', text: `*First Visit:*\n📅 ${new Date(data.firstVisit).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}` },
              { type: 'mrkdwn', text: `*Previous Website:*\n🌐 ${previousWebsite}` },
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
              { type: 'mrkdwn', text: `Visitor ID: \`${data.visitorId}\`` }
            ]
          }
        ]
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
              { type: 'mrkdwn', text: `*Previous Website:*\n${previousWebsite}` },
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
              { type: 'mrkdwn', text: `Visitor ID: \`${data.visitorId}\`${data.location?.locationCapturedAt ? ` | Captured: ${data.location.locationCapturedAt}` : ''}${vipCheck.isVIP ? ` | 🚨 VIP: ${vipCheck.name}` : ''}` }
            ]
          }
        ]
      }

    case 'session_summary':
      return {
        blocks: [
          {
            type: 'header',
            text: { type: 'plain_text', text: '⏱️ Visitor Session Summary', emoji: true }
          },
          {
            type: 'section',
            fields: [
              { type: 'mrkdwn', text: `*Time on Site:*\n${timeOnSite}` },
              { type: 'mrkdwn', text: `*Previous Website:*\n${previousWebsite}` },
              { type: 'mrkdwn', text: `*Pages Viewed:*\n${data.pageViews?.length || 0}` },
              { type: 'mrkdwn', text: `*Last Page:*\n${data.currentPage?.title || data.currentPage?.path || data.browser?.path || 'Unknown'}` },
              { type: 'mrkdwn', text: `*Location:*\n${locationWithMap}${accuracyBadge}` },
              { type: 'mrkdwn', text: `*Device:*\n${device}` },
            ]
          },
          {
            type: 'context',
            elements: [
              { type: 'mrkdwn', text: `Visitor ID: \`${data.visitorId}\` | Session ID: \`${data.sessionId || 'Unknown'}\` | UTM: ${utmText}` }
            ]
          }
        ]
      }

    case 'page_view':
      return {
        blocks: [
          {
            type: 'section',
            text: { 
              type: 'mrkdwn', 
              text: `👁️ *Page View*: ${data.currentPage?.title || data.currentPage?.path}\n_${locationText} • ${timeOnSite} on site_` 
            }
          }
        ]
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
              { type: 'mrkdwn', text: `*Cart Items:*\n${data.cartEvents?.filter((e: any) => e.action === 'add').length || 0}` },
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

// Store notification for admin dashboard
async function storeNotification(type: string, data: any) {
  // In production, store in database
  // For now, we'll use the in-memory store
  const notification = {
    id: Date.now().toString(),
    type,
    data,
    timestamp: new Date().toISOString(),
    read: false,
  }

  // Get existing notifications from memory or initialize
  const notifications = (global as any).notifications || []
  notifications.unshift(notification)
  
  // Keep only last 100 notifications
  if (notifications.length > 100) {
    notifications.pop()
  }
  
  (global as any).notifications = notifications
}

// GET endpoint for admin dashboard
export async function GET(request: NextRequest) {
  if (!(await requireAdmin(request))) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { searchParams } = new URL(request.url)
  const type = searchParams.get('type')

  if (type === 'active') {
    // Return active visitors (seen in last 5 minutes)
    const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000).toISOString()
    const active = Array.from(activeVisitors.values())
      .filter(v => v.lastSeen > fiveMinutesAgo)
    
    return NextResponse.json({ 
      activeVisitors: active,
      count: active.length 
    })
  }

  if (type === 'notifications') {
    const notifications = (global as any).notifications || []
    return NextResponse.json({ notifications })
  }

  // Return stats
  const allVisitors = Array.from(activeVisitors.values())
  const today = new Date().toDateString()
  const todayVisitors = allVisitors.filter(v => new Date(v.currentVisit).toDateString() === today)
  
  return NextResponse.json({
    totalVisitors: allVisitors.length,
    todayVisitors: todayVisitors.length,
    newVisitors: todayVisitors.filter(v => v.isNewVisitor).length,
    returningVisitors: todayVisitors.filter(v => !v.isNewVisitor).length,
  })
}
