import { formatSlackLocationMrkdwn } from '@/lib/geo/slackLocationDisplay'
import { classifyFunnelVisitor } from '@/lib/analytics/funnel/classification'
import { FUNNEL_SLACK_LABELS, type FunnelSlackEvent } from '@/lib/analytics/funnel/types'
import { formatClientDeviceLabel, parseClientDevice } from '@/lib/analytics/parseClientDevice'
import { assessVisitorBotRisk } from '@/lib/bots/assessVisitorBotRisk'

function formatDeviceLine(data: Record<string, unknown>): string {
  const device = data.device as { type?: string; browser?: string; os?: string; label?: string } | undefined
  if (device?.label && device.label !== 'desktop · Unknown · Unknown') return device.label
  if (device?.browser && device.browser !== 'Unknown' && device?.os && device.os !== 'Unknown') {
    const shortOs =
      device.os === 'iOS' || device.os === 'iPadOS'
        ? 'iPhone'
        : device.os === 'macOS'
          ? 'Mac'
          : device.os
    return `${shortOs} · ${device.browser}`
  }
  const ua =
    (typeof data.userAgent === 'string' && data.userAgent) ||
    (typeof (data.browser as { userAgent?: string } | undefined)?.userAgent === 'string'
      ? (data.browser as { userAgent: string }).userAgent
      : '')
  if (ua) return formatClientDeviceLabel(parseClientDevice(ua))
  return 'Unknown'
}

function formatReferrer(data: Record<string, unknown>): string {
  const ref = typeof data.referrer === 'string' ? data.referrer.trim() : ''
  if (!ref || /^direct$/i.test(ref)) return 'Direct'
  return ref.length > 120 ? `${ref.slice(0, 117)}…` : ref
}

function formatTimestamp(iso: unknown): string {
  if (typeof iso !== 'string' || !iso.trim()) return '—'
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return '—'
  return d.toLocaleString('en-AE', { timeZone: 'Asia/Dubai' })
}

function paymentSessionLine(data: Record<string, unknown>): string {
  const created = Boolean(data.paymentSessionCreated)
  if (!created) return 'No'
  const provider = typeof data.paymentProvider === 'string' ? data.paymentProvider : 'Unknown'
  const label = provider.charAt(0).toUpperCase() + provider.slice(1)
  return `Yes — ${label}`
}

export function formatFunnelAbandonSlack(type: FunnelSlackEvent, data: Record<string, unknown>) {
  const title = FUNNEL_SLACK_LABELS[type]
  const botRisk = assessVisitorBotRisk(data)
  const classification = classifyFunnelVisitor({
    internalTest: Boolean(data.internalTest),
    visitorId: typeof data.visitorId === 'string' ? data.visitorId : undefined,
    userAgent:
      typeof (data.browser as { userAgent?: string } | undefined)?.userAgent === 'string'
        ? (data.browser as { userAgent: string }).userAgent
        : undefined,
    device: data.device as { type?: string; browser?: string; os?: string },
    location: data.location as Record<string, unknown> | null,
    botRisk,
  })

  const itemLines =
    Array.isArray(data.items) && data.items.length > 0
      ? (data.items as Array<{ name?: string; quantity?: number; color?: string; size?: string }>)
          .map(
            (item) =>
              `• ${item.name || 'Item'}${item.quantity ? ` ×${item.quantity}` : ''}${item.color ? ` — ${item.color}` : ''}${item.size ? ` / ${item.size}` : ''}`,
          )
          .join('\n')
      : 'Items in bag'

  const nowGst = new Date().toLocaleString('en-AE', { timeZone: 'Asia/Dubai' })
  const internalBanner =
    classification === 'Internal/Test'
      ? {
          type: 'section' as const,
          text: {
            type: 'mrkdwn' as const,
            text: '*Internal/Test session* — excluded from customer funnel metrics',
          },
        }
      : null

  const botBanner =
    botRisk.level !== 'none' && classification !== 'Internal/Test'
      ? {
          type: 'section' as const,
          text: {
            type: 'mrkdwn' as const,
            text: `_${botRisk.label || 'Possible automated traffic'}${botRisk.reasons?.length ? ` · ${botRisk.reasons.slice(0, 2).join(' · ')}` : ''}_`,
          },
        }
      : null

  const blocks = [
    internalBanner,
    botBanner,
    {
      type: 'header',
      text: { type: 'plain_text', text: title, emoji: true },
    },
    {
      type: 'section',
      fields: [
        { type: 'mrkdwn', text: `*Bag value:*\nAED ${data.cartValueAed ?? '—'}` },
        { type: 'mrkdwn', text: `*Items:*\n${data.cartItems ?? '—'}` },
        { type: 'mrkdwn', text: `*Stage reached:*\n${typeof data.funnelStage === 'string' ? data.funnelStage : '—'}` },
        { type: 'mrkdwn', text: `*Payment session:*\n${paymentSessionLine(data)}` },
        { type: 'mrkdwn', text: `*Referrer:*\n${formatReferrer(data)}` },
        { type: 'mrkdwn', text: formatSlackLocationMrkdwn(data.location as Record<string, unknown>, { withMapLink: true }) },
        { type: 'mrkdwn', text: `*Device:*\n${formatDeviceLine(data)}` },
        { type: 'mrkdwn', text: `*Classification:*\n${classification}` },
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
          text: [
            `Cart \`${data.cartId || '—'}\``,
            `Visitor \`${data.visitorId || '—'}\``,
            `First seen ${formatTimestamp(data.cartFirstSeen)} GST`,
            `Last activity ${formatTimestamp(data.cartLastActivity)} GST`,
            `Alert ${nowGst} GST`,
          ].join(' · '),
        },
      ],
    },
  ].filter(Boolean)

  return { blocks }
}
