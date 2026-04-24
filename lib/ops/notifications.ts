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

export async function createTrelloCardForOrder(order: StoredOrder) {
  const key = process.env.TRELLO_API_KEY?.trim()
  const token = process.env.TRELLO_API_TOKEN?.trim()
  const listId = process.env.TRELLO_CLIENT_ORDERS_LIST_ID?.trim()
  if (!key || !token || !listId) return

  const customerName = order.customerName || 'Unknown'
  const shippingAddress = order.shippingAddress
    ? JSON.stringify(order.shippingAddress, null, 2)
    : 'No shipping address captured'
  const lines = order.lines
    .map((line) => `- ${line.quantity}x ${line.name}${line.description ? ` (${line.description})` : ''}`)
    .join('\n')

  const cardName = `${order.id} • ${customerName} • ${order.currency} ${order.amountTotal.toFixed(2)}`
  const cardDesc = [
    `Customer: ${customerName}`,
    `Email: ${order.customerEmail || 'Unknown'}`,
    `Phone: ${order.customerPhone || 'Unknown'}`,
    `Status: ${order.fulfillmentStatus}`,
    `Total: ${order.currency} ${order.amountTotal.toFixed(2)}`,
    `Created: ${order.createdAt}`,
    '',
    'Items:',
    lines || '- No lines',
    '',
    `Delivery notes: ${order.deliveryNotes || 'None'}`,
    '',
    'Shipping address:',
    shippingAddress,
    '',
    'TODO checklist:',
    '- [ ] Confirm measurements / personalization details',
    '- [ ] Start production',
    '- [ ] Quality check',
    '- [ ] Pack and prepare shipment',
    '- [ ] Send tracking to client',
    '- [ ] Mark delivered and close',
  ].join('\n')

  const url = new URL('https://api.trello.com/1/cards')
  url.searchParams.set('idList', listId)
  url.searchParams.set('name', cardName)
  url.searchParams.set('desc', cardDesc)
  url.searchParams.set('key', key)
  url.searchParams.set('token', token)

  try {
    await fetch(url.toString(), { method: 'POST' })
  } catch (error) {
    console.error('Failed to create Trello card for order:', error)
  }
}
