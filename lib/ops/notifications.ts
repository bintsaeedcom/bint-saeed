import { Redis } from '@upstash/redis'
import type { OrderFulfillmentStatus, StoredOrder } from '@/lib/orders/types'

function toUaeTime(iso: string) {
  return new Date(iso).toLocaleString('en-AE', { timeZone: 'Asia/Dubai' })
}

function toLocalTime(iso: string) {
  return new Date(iso).toLocaleString()
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

let redis: Redis | null = null
const memoryTrelloCardByOrder = new Map<string, string>()
const KEY_TRELLO_ORDER = (orderId: string) => `bs:trello:order:${orderId}`

function getRedis(): Redis | null {
  const url = process.env.UPSTASH_REDIS_REST_URL
  const token = process.env.UPSTASH_REDIS_REST_TOKEN
  if (!url || !token) return null
  if (!redis) redis = new Redis({ url, token })
  return redis
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
  const deviceType = context?.clientDeviceType || 'Unknown'
  const customerName = order.customerName || 'Unknown'
  const customerEmail = order.customerEmail || 'Unknown'
  const customerPhone = order.customerPhone || 'Unknown'
  const amountPaid = `${order.currency} ${order.amountTotal.toFixed(2)}`
  const paymentRef = context?.paymentRef || order.paypalOrderId || order.molliePaymentId || order.stripeSessionId

  const shipping = order.shippingAddress as
    | { city?: string; state?: string; country?: string }
    | undefined
  const location =
    [shipping?.city, shipping?.state, shipping?.country].filter(Boolean).join(', ') || 'Unknown'

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
          { type: 'mrkdwn', text: `*Order ID:*\n\`${order.id}\`` },
          { type: 'mrkdwn', text: `*Payment ref:*\n\`${paymentRef}\`` },
          { type: 'mrkdwn', text: `*Customer name:*\n${customerName}` },
          { type: 'mrkdwn', text: `*Email / Phone:*\n${customerEmail}\n${customerPhone}` },
          { type: 'mrkdwn', text: `*IP / Device:*\n\`${ip}\`\n${deviceType}` },
          { type: 'mrkdwn', text: `*Location:*\n${location}` },
          { type: 'mrkdwn', text: `*UAE time:*\n${uaeTime}` },
          { type: 'mrkdwn', text: `*Local time (${timezone}):*\n${localTime}` },
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

export async function createTrelloCardForOrder(
  order: StoredOrder,
  context?: {
    sessionId?: string
    clientIp?: string
    clientDeviceType?: string
    clientLocalTime?: string
    clientTimezone?: string
    uaeTimestamp?: string
  }
) {
  const key = process.env.TRELLO_API_KEY?.trim()
  const token = process.env.TRELLO_API_TOKEN?.trim()
  const listId = process.env.TRELLO_CLIENT_ORDERS_LIST_ID?.trim()
  if (!key || !token || !listId) return

  const r = getRedis()
  if (r) {
    const existing = await r.get<string>(KEY_TRELLO_ORDER(order.id))
    if (existing) return
  } else if (memoryTrelloCardByOrder.has(order.id)) {
    return
  }

  const customerName = order.customerName || 'Unknown'
  const shippingAddress = order.shippingAddress
    ? JSON.stringify(order.shippingAddress, null, 2)
    : 'No shipping address captured'
  const lines = order.lines
    .map((line) => `- ${line.quantity}x ${line.name}${line.description ? ` (${line.description})` : ''}`)
    .join('\n')

  const cardName = `Bint Saeed Order – ${customerName} – ${order.currency} ${order.amountTotal.toFixed(2)}`
  const cardDesc = [
    '## Customer',
    `- Name: ${customerName}`,
    `- Email: ${order.customerEmail || 'Unknown'}`,
    `- Phone: ${order.customerPhone || 'Unknown'}`,
    '',
    '## Order',
    `- Order ID: ${order.id}`,
    `- Session ID: ${context?.sessionId || order.stripeSessionId}`,
    `- Status: ${order.fulfillmentStatus}`,
    `- Amount Paid: ${order.currency} ${order.amountTotal.toFixed(2)}`,
    `- Currency: ${order.currency}`,
    `- UAE Time: ${context?.uaeTimestamp || toUaeTime(order.createdAt)}`,
    `- Local Time: ${context?.clientLocalTime || toLocalTime(order.createdAt)}`,
    `- Client Timezone: ${context?.clientTimezone || 'Unknown'}`,
    `- IP Address: ${context?.clientIp || 'Unknown'}`,
    `- Device Type: ${context?.clientDeviceType || 'Unknown'}`,
    '',
    '## Product',
    lines || '- No lines',
    '',
    '## Shipping',
    `- Delivery Notes: ${order.deliveryNotes || 'None'}`,
    '- Shipping Address:',
    shippingAddress,
  ].join('\n')

  const url = new URL('https://api.trello.com/1/cards')
  url.searchParams.set('idList', listId)
  url.searchParams.set('name', cardName)
  url.searchParams.set('desc', cardDesc)
  url.searchParams.set('key', key)
  url.searchParams.set('token', token)

  try {
    const createRes = await fetch(url.toString(), { method: 'POST' })
    if (!createRes.ok) {
      const body = await createRes.text()
      await notifyHealthAlert({
        source: 'trello/create-card',
        message: 'Failed to create Trello card for paid order',
        context: { orderId: order.id, status: createRes.status, body: body.slice(0, 500) },
      })
      return
    }

    const card = (await createRes.json()) as { id?: string }
    if (!card?.id) {
      await notifyHealthAlert({
        source: 'trello/create-card',
        message: 'Trello card response missing id',
        context: { orderId: order.id },
      })
      return
    }

    await createTrelloChecklists({ cardId: card.id, key, token, orderId: order.id })

    if (r) {
      await r.set(KEY_TRELLO_ORDER(order.id), card.id)
    } else {
      memoryTrelloCardByOrder.set(order.id, card.id)
    }
  } catch (error) {
    console.error('Failed to create Trello card for order:', error)
    await notifyHealthAlert({
      source: 'trello/create-card',
      message: error instanceof Error ? error.message : 'Unknown Trello card error',
      context: { orderId: order.id },
    })
  }
}

async function createTrelloChecklists(args: { cardId: string; key: string; token: string; orderId: string }) {
  const checklistData = [
    {
      name: 'Client Order Details',
      items: [
        'Confirm size from website',
        'Confirm personalisation message',
        'Confirm shipping address',
        'Confirm phone number',
        'Confirm payment received',
      ],
    },
    {
      name: 'Processing',
      items: [
        'Order fabric',
        'Fabric delivered to Jalood',
        'Client size delivered to Jalood',
        'Print personalized garment label',
        'Personalized garment label delivered to Jalood',
        'Garment production by Jalood',
        'Quality check',
        'Dry Cleaning',
      ],
    },
    {
      name: 'Packaging',
      items: ['Hangtag', 'Thank you card', 'Sticker', 'Invoice', 'Shipment courier label'],
    },
    {
      name: 'Shipping',
      items: [
        'Address of client',
        'Pick up by delivery guy',
        'Track and trace code added',
        'Dispatched',
        'Delivery confirmation',
      ],
    },
  ]

  for (const checklist of checklistData) {
    const checklistUrl = new URL('https://api.trello.com/1/checklists')
    checklistUrl.searchParams.set('idCard', args.cardId)
    checklistUrl.searchParams.set('name', checklist.name)
    checklistUrl.searchParams.set('key', args.key)
    checklistUrl.searchParams.set('token', args.token)
    const checklistRes = await fetch(checklistUrl.toString(), { method: 'POST' })
    if (!checklistRes.ok) {
      const body = await checklistRes.text()
      await notifyHealthAlert({
        source: 'trello/create-checklist',
        message: `Failed to create checklist "${checklist.name}"`,
        context: { orderId: args.orderId, status: checklistRes.status, body: body.slice(0, 500) },
      })
      continue
    }
    const checklistObj = (await checklistRes.json()) as { id?: string }
    if (!checklistObj?.id) continue
    for (const item of checklist.items) {
      const itemUrl = new URL(`https://api.trello.com/1/checklists/${checklistObj.id}/checkItems`)
      itemUrl.searchParams.set('name', item)
      itemUrl.searchParams.set('key', args.key)
      itemUrl.searchParams.set('token', args.token)
      const itemRes = await fetch(itemUrl.toString(), { method: 'POST' })
      if (!itemRes.ok) {
        const body = await itemRes.text()
        await notifyHealthAlert({
          source: 'trello/create-checkitem',
          message: `Failed to create check item "${item}"`,
          context: { orderId: args.orderId, checklist: checklist.name, status: itemRes.status, body: body.slice(0, 300) },
        })
      }
    }
  }
}
