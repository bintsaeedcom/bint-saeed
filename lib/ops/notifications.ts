import type { OrderAttributionContext } from '@/lib/checkout/attributionMetadata'
import { orderAttributionFromMetadata } from '@/lib/checkout/attributionMetadata'
import type { OrderFulfillmentStatus, StoredOrder } from '@/lib/orders/types'
import { buildOrderAttributionSlackFields } from '@/lib/ops/orderSlackAttribution'
import { formatOrderPaymentMethodLabel } from '@/lib/ops/orderPaymentMethodLabel'

function toUaeTime(iso: string) {
  return new Date(iso).toLocaleString('en-AE', { timeZone: 'Asia/Dubai' })
}

function toLocalTime(iso: string) {
  return new Date(iso).toLocaleString()
}

type LooseAddress = Record<string, unknown> | undefined

function takeFirstString(obj: LooseAddress, keys: readonly string[]): string | null {
  if (!obj) return null
  for (const key of keys) {
    const value = obj[key]
    if (typeof value === 'string' && value.trim()) return value.trim()
  }
  return null
}

function compactAddressLine(parts: Array<string | null | undefined>): string | null {
  const clean = parts
    .map((p) => (typeof p === 'string' ? p.trim() : ''))
    .filter(Boolean)
  return clean.length ? clean.join(', ') : null
}

function extractShippingAddress(address: LooseAddress) {
  const street = compactAddressLine([
    takeFirstString(address, ['line1', 'street', 'address', 'address1']),
    takeFirstString(address, ['line2', 'address2', 'unit', 'building', 'apartment', 'flat']),
  ])
  const district = takeFirstString(address, ['district', 'area', 'neighborhood', 'neighbourhood'])
  const city = takeFirstString(address, ['city', 'town'])
  const state = takeFirstString(address, ['state', 'province', 'region'])
  const postalCode = takeFirstString(address, ['postal_code', 'postalCode', 'zip', 'zipCode'])
  const country = takeFirstString(address, ['country', 'countryCode'])

  const summary = compactAddressLine([city, state, country]) || 'Unknown'
  const full = compactAddressLine([street, district, city, state, postalCode, country]) || summary

  return {
    street,
    district,
    city,
    state,
    postalCode,
    country,
    summary,
    full,
  }
}

async function postToWebhook(url: string | undefined, payload: Record<string, unknown>) {
  if (!url) return
  try {
    await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
  } catch (error) {
    console.error('Slack webhook delivery failed:', error)
  }
}

export async function notifyFulfillmentStatusChange(args: {
  order: StoredOrder
  previousStatus: OrderFulfillmentStatus
  nextStatus: OrderFulfillmentStatus
}) {
  const webhook = process.env.SLACK_FULFILLMENT_WEBHOOK_URL?.trim()
  if (!webhook) return
  const nowIso = new Date().toISOString()
  const amount = `${args.order.currency} ${args.order.amountTotal.toFixed(2)}`
  const customer = args.order.customerName || args.order.customerEmail || 'Unknown'

  await postToWebhook(webhook, {
    blocks: [
      {
        type: 'header',
        text: { type: 'plain_text', text: '📦 Order Fulfillment Update', emoji: true },
      },
      {
        type: 'section',
        fields: [
          { type: 'mrkdwn', text: `*Order ID:*\n\`${args.order.id}\`` },
          { type: 'mrkdwn', text: `*Customer:*\n${customer}` },
          { type: 'mrkdwn', text: `*Amount:*\n${amount}` },
          { type: 'mrkdwn', text: `*Status change:*\n${args.previousStatus} → *${args.nextStatus}*` },
          { type: 'mrkdwn', text: `*UAE time:*\n${toUaeTime(nowIso)}` },
          { type: 'mrkdwn', text: `*Local time:*\n${toLocalTime(nowIso)}` },
        ],
      },
    ],
  })
}

export async function notifyHealthAlert(args: {
  source: string
  message: string
  context?: Record<string, unknown>
}) {
  const webhook = process.env.SLACK_HEALTH_WEBHOOK_URL?.trim()
  if (!webhook) return
  const nowIso = new Date().toISOString()
  const contextText = args.context ? `\n\`\`\`${JSON.stringify(args.context, null, 2)}\`\`\`` : ''

  await postToWebhook(webhook, {
    text: `🚨 Website/API health alert\nSource: ${args.source}\nMessage: ${args.message}\nUAE: ${toUaeTime(nowIso)}\nLocal: ${toLocalTime(nowIso)}${contextText}`,
  })
}

const PROVIDER_LABEL: Record<string, string> = {
  stripe: 'Stripe',
  mollie: 'Mollie',
  paypal: 'PayPal',
  tamara: 'Tamara',
  tabby: 'Tabby',
}

/** Posts a rich "new paid order" message to SLACK_ORDERS_WEBHOOK_URL. Best-effort; never throws. */
export async function notifySlackNewPaidOrder(
  order: StoredOrder,
  context?: {
    clientIp?: string
    clientDeviceType?: string
    clientLocalTime?: string
    clientTimezone?: string
    paymentRef?: string
    paymentMethod?: string
    attribution?: Partial<OrderAttributionContext>
    attributionMetadata?: Record<string, string | null | undefined>
  },
): Promise<void> {
  const webhookUrl = process.env.SLACK_ORDERS_WEBHOOK_URL?.trim()
  if (!webhookUrl) return

  const provider = order.paymentProvider || 'stripe'
  const providerLabel = PROVIDER_LABEL[provider] || provider
  const uaeTime = toUaeTime(order.createdAt)
  const localTime = context?.clientLocalTime || toLocalTime(order.createdAt)
  const timezone = context?.clientTimezone || 'Unknown'
  const ip = context?.clientIp || 'Unknown'
  const customerName = order.customerName || 'Unknown'
  const customerEmail = order.customerEmail || 'Unknown'
  const customerPhone = order.customerPhone || 'Unknown'
  const amountPaid = `${order.currency} ${order.amountTotal.toFixed(2)}`
  const paymentRef = context?.paymentRef || order.paypalOrderId || order.molliePaymentId || order.stripeSessionId
  const paymentMethod = formatOrderPaymentMethodLabel({
    provider: order.paymentProvider,
    paymentMethod: context?.paymentMethod,
  })

  const shipping = extractShippingAddress(order.shippingAddress as LooseAddress)
  const shipTo = shipping.summary

  const attr = orderAttributionFromMetadata(context?.attributionMetadata ?? null, {
    deviceType: context?.clientDeviceType,
    ...context?.attribution,
  })
  const attributionFields = buildOrderAttributionSlackFields({ attr, ip, shipTo })

  const lines = order.lines.length
    ? order.lines.map((line) => {
        const details = line.description?.trim()
        return `• ${line.name} x${line.quantity}${details ? ` (${details})` : ''}`
      })
    : ['• No line items found']

  const clientNote = order.deliveryNotes?.trim()

  const payload = {
    blocks: [
      {
        type: 'header',
        text: {
          type: 'plain_text',
          text: `🧵 New Paid Client Order (${providerLabel})`,
          emoji: true,
        },
      },
      {
        type: 'section',
        fields: [
          { type: 'mrkdwn', text: `*Amount paid:*\n${amountPaid}` },
          { type: 'mrkdwn', text: `*Payment method:*\n${paymentMethod}` },
          { type: 'mrkdwn', text: `*Order ID:*\n\`${order.id}\`` },
          { type: 'mrkdwn', text: `*Payment ref:*\n\`${paymentRef}\`` },
          { type: 'mrkdwn', text: `*Customer name:*\n${customerName}` },
          { type: 'mrkdwn', text: `*Email / Phone:*\n${customerEmail}\n${customerPhone}` },
          { type: 'mrkdwn', text: `*UAE time:*\n${uaeTime}` },
          { type: 'mrkdwn', text: `*Local time (${timezone}):*\n${localTime}` },
        ],
      },
      {
        type: 'section',
        fields: attributionFields,
      },
      {
        type: 'section',
        fields: [
          { type: 'mrkdwn', text: `*Ship to:*\n${shipping.full}` },
          {
            type: 'mrkdwn',
            text: `*Street / Area:*\n${compactAddressLine([shipping.street, shipping.district]) || 'Unknown'}`,
          },
          {
            type: 'mrkdwn',
            text: `*City / Region:*\n${compactAddressLine([shipping.city, shipping.state]) || 'Unknown'}`,
          },
          { type: 'mrkdwn', text: `*Postal / Country:*\n${compactAddressLine([shipping.postalCode, shipping.country]) || 'Unknown'}` },
        ],
      },
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `*Items / size / personalisation:*\n${lines.join('\n')}`,
        },
      },
      ...(clientNote
        ? [
            {
              type: 'section',
              text: {
                type: 'mrkdwn',
                text: `*Client note:*\n>${clientNote.replace(/\n/g, '\n>')}`,
              },
            },
          ]
        : []),
    ],
  }

  await postToWebhook(webhookUrl, payload)
}
