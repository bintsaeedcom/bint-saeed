import { formatSessionDuration } from '@/lib/analytics/checkoutAttribution'
import type { OrderAttributionContext } from '@/lib/checkout/attributionMetadata'
import { formatVisitorLocation } from '@/lib/geo/formatVisitorLocation'

type SlackField = { type: 'mrkdwn'; text: string }

export function buildVisitorCityLabel(attr: OrderAttributionContext): string {
  return formatVisitorLocation({
    city: attr.visitorCity,
    country: attr.visitorCountry,
    countryCode: attr.visitorCountry,
  })
}

export function buildOrderAttributionSlackFields(args: {
  attr: OrderAttributionContext
  ip?: string
  shipTo?: string
}): SlackField[] {
  const { attr, ip, shipTo } = args
  const device =
    attr.deviceLabel ||
    (attr.deviceType && attr.deviceType !== 'Unknown' ? attr.deviceType : 'Unknown')

  const fields: SlackField[] = [
    { type: 'mrkdwn', text: `*Device:*\n${device}` },
    { type: 'mrkdwn', text: `*Approximate location:*\n${buildVisitorCityLabel(attr)}` },
    { type: 'mrkdwn', text: `*Traffic source:*\n${attr.trafficSource || 'Unknown'}` },
    {
      type: 'mrkdwn',
      text: `*Time on site:*\n${formatSessionDuration(attr.sessionSeconds)}`,
    },
  ]

  if (shipTo && shipTo !== 'Unknown') {
    fields.push({ type: 'mrkdwn', text: `*Ship to:*\n${shipTo}` })
  }

  if (ip && ip !== 'Unknown') {
    fields.push({ type: 'mrkdwn', text: `*IP:*\n\`${ip}\`` })
  }

  return fields
}
