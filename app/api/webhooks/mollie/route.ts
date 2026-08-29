import { NextRequest, NextResponse } from 'next/server'
import { saveOrder, findOrderIdBySession } from '@/lib/orders/orderStore'
import { markPaymentEventProcessed, wasPaymentEventProcessed } from '@/lib/payments/webhookEventStore'
import {
  buildOrderFromMolliePayment,
} from '@/lib/mollie/buildOrderFromPayment'
import {
  deletePendingMollieCheckout,
  getPendingMollieCheckout,
} from '@/lib/mollie/pendingCheckoutStore'
import { getMollieApiKey } from '@/lib/mollie/config'
import { getMollieClient } from '@/lib/mollie/client'
import { notifyHealthAlert } from '@/lib/ops/notifications'
import { orderAttributionFromMetadata } from '@/lib/checkout/attributionMetadata'
import { buildOrderAttributionSlackFields } from '@/lib/ops/orderSlackAttribution'
import { formatMolliePaymentMethodLabel } from '@/lib/ops/orderPaymentMethodLabel'
import { dispatchOrderEmails } from '@/lib/orders/dispatchOrderEmails'
import { fulfillPaidGiftCards } from '@/lib/giftCards/fulfillPaidGiftCards'
import { commitRedeemForPaidOrder } from '@/lib/giftCards/applyAtCheckout'
import type { PendingMollieCheckout } from '@/lib/mollie/pendingCheckoutStore'
import { sendMetaCapiPurchaseFromOrder } from '@/lib/analytics/metaCapi'
import { metaCatalogContentsFromOrderMeta } from '@/lib/analytics/metaCatalogIds'
import { sendSnapCapiPurchaseFromOrder } from '@/lib/analytics/snapCapi'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

async function notifyMollieOrderChannel(
  paymentId: string,
  pending: PendingMollieCheckout,
  amountPaid: string,
  paymentMethod?: string,
) {
  const webhookUrl = process.env.SLACK_ORDERS_WEBHOOK_URL?.trim()
  if (!webhookUrl) return

  const uaeTime = new Date().toLocaleString('en-AE', { timeZone: 'Asia/Dubai' })
  const localTime = pending.clientContext?.localTime || 'Unknown'
  const ip = pending.clientIp || 'Unknown'
  const timezone = pending.clientContext?.timezone || 'Unknown'
  const customerEmail = pending.customerEmail || 'Unknown'
  const attr = orderAttributionFromMetadata(null, {
    deviceLabel: pending.clientContext?.deviceLabel,
    deviceType: pending.clientContext?.deviceType,
    visitorCity: pending.clientContext?.city,
    visitorCountry: pending.clientContext?.country,
    trafficSource: pending.clientContext?.trafficSource,
    sessionSeconds: pending.clientContext?.sessionSeconds,
  })
  const attributionFields = buildOrderAttributionSlackFields({ attr, ip })

  const lines = pending.items.map((item) => {
    const personalisation = item.customisationMessage?.trim()
    const lengthValue = item.lengthCm ? `${item.lengthCm} cm` : item.customLength || ''
    const details = [
      item.size ? `size: ${item.size}` : '',
      item.color ? `variant/colour: ${item.color}` : '',
      lengthValue ? `length: ${lengthValue}` : '',
      personalisation ? `personalisation: "${personalisation}"` : '',
    ]
      .filter(Boolean)
      .join(' | ')
    return `• ${item.name} x${item.quantity}${details ? ` (${details})` : ''}`
  })

  const payload = {
    blocks: [
      {
        type: 'header',
        text: { type: 'plain_text', text: '🧵 New Paid Client Order (Mollie)', emoji: true },
      },
      {
        type: 'section',
        fields: [
          { type: 'mrkdwn', text: `*Amount paid:*\n${amountPaid}` },
          { type: 'mrkdwn', text: `*Payment method:*\n${formatMolliePaymentMethodLabel(paymentMethod)}` },
          { type: 'mrkdwn', text: `*Payment ID:*\n\`${paymentId}\`` },
          { type: 'mrkdwn', text: `*Email:*\n${customerEmail}` },
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
        text: {
          type: 'mrkdwn',
          text: `*Items / size / personalisation:*\n${lines.join('\n')}`,
        },
      },
      ...(pending.checkoutNotes?.trim()
        ? [
            {
              type: 'section',
              text: {
                type: 'mrkdwn',
                text: `*Client note:*\n>${pending.checkoutNotes.trim().replace(/\n/g, '\n>')}`,
              },
            },
          ]
        : []),
    ],
  }

  try {
    await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
  } catch (error) {
    console.error('Mollie order Slack notification failed:', error)
  }
}

function parsePendingFromMetadata(metadata: Record<string, string | undefined | null> | null | undefined) {
  if (!metadata?.orderItems) return null
  try {
    const items = JSON.parse(metadata.orderItems) as PendingMollieCheckout['items']
    if (!Array.isArray(items) || items.length === 0) return null
    return {
      items,
      currency: metadata.checkoutCurrency || 'AED',
      cartSubtotal: Number(metadata.cartSubtotal) || 0,
      discountCode: metadata.discountCodeUsed || undefined,
      customerEmail: metadata.customerEmail || undefined,
      checkoutNotes: metadata.checkoutNotes || undefined,
      clientContext: {
        localTime: metadata.clientLocalTime || undefined,
        timezone: metadata.clientTimezone || undefined,
        deviceType: metadata.clientDeviceType || undefined,
        deviceLabel: metadata.clientDeviceLabel || undefined,
        city: metadata.clientCity || undefined,
        country: metadata.clientCountry || undefined,
        trafficSource: metadata.clientTrafficSource || undefined,
        sessionSeconds: metadata.clientSessionSeconds
          ? Number(metadata.clientSessionSeconds)
          : undefined,
      },
      clientIp: metadata.clientIp || undefined,
      createdAt: new Date().toISOString(),
    } satisfies PendingMollieCheckout
  } catch {
    return null
  }
}

export async function POST(request: NextRequest) {
  if (!getMollieApiKey()) {
    return NextResponse.json({ error: 'Mollie is not configured.' }, { status: 503 })
  }

  let paymentId = ''
  const contentType = request.headers.get('content-type') || ''

  try {
    if (contentType.includes('application/json')) {
      const json = (await request.json()) as { id?: string }
      paymentId = json.id?.trim() ?? ''
    } else {
      const form = await request.formData()
      paymentId = String(form.get('id') ?? '').trim()
    }
  } catch {
    return NextResponse.json({ error: 'Invalid webhook payload.' }, { status: 400 })
  }

  if (!paymentId) {
    return NextResponse.json({ error: 'Missing payment id.' }, { status: 400 })
  }

  try {
    const payment = await getMollieClient().payments.get(paymentId)
    const eventId = `${payment.id}:${payment.status}`
    if (await wasPaymentEventProcessed('mollie', eventId)) {
      return NextResponse.json({ received: true, duplicate: true })
    }

    if (payment.status !== 'paid' && payment.status !== 'authorized') {
      await markPaymentEventProcessed('mollie', eventId)
      return NextResponse.json({ received: true, ignored: payment.status })
    }

    const dup = await findOrderIdBySession(payment.id)
    if (dup) {
      await markPaymentEventProcessed('mollie', eventId)
      return NextResponse.json({ received: true, duplicate: true })
    }

    let pending = await getPendingMollieCheckout(payment.id)
    if (!pending) {
      pending = parsePendingFromMetadata(
        (payment.metadata as Record<string, string | null | undefined> | undefined) ?? undefined,
      ) ?? null
    }
    if (!pending) {
      await notifyHealthAlert({
        source: 'api/webhooks/mollie',
        message: `Paid Mollie payment ${payment.id} has no pending checkout payload.`,
      })
      await markPaymentEventProcessed('mollie', eventId)
      return NextResponse.json({ received: true, missingPending: true })
    }

    const order = buildOrderFromMolliePayment(payment, pending)
    await saveOrder(order)
    const metaContents = metaCatalogContentsFromOrderMeta(
      pending.items.map((item, index) => ({
        ...item,
        // Meta item_price must use the same currency as Purchase.
        price: order.lines[index]?.unitPrice,
      })),
    )
    void sendMetaCapiPurchaseFromOrder({
      eventIdSuffix: payment.id,
      value: order.amountTotal,
      currency: order.currency,
      contentIds: metaContents.map((row) => row.id),
      contents: metaContents,
      orderId: order.id,
      email: order.customerEmail,
      phone: order.customerPhone,
      clientIpAddress: pending.clientIp,
    })
    void sendSnapCapiPurchaseFromOrder({
      eventIdSuffix: payment.id,
      value: order.amountTotal,
      currency: order.currency,
      contentIds: order.lines
        .map((line) => line.productId)
        .filter((id): id is string => Boolean(id)),
      orderId: order.id,
      email: order.customerEmail,
      phone: order.customerPhone,
      clientIpAddress: pending.clientIp,
    })
    await deletePendingMollieCheckout(payment.id)

    const amountPaid = `${order.currency} ${order.amountTotal.toFixed(2)}`
    const mollieMethod =
      typeof payment.method === 'string' ? payment.method : undefined
    await notifyMollieOrderChannel(payment.id, pending, amountPaid, mollieMethod)
    await dispatchOrderEmails(order)

    await fulfillPaidGiftCards({
      order,
      items: pending.items,
    })
    await commitRedeemForPaidOrder({
      orderId: order.id,
      applied: pending.appliedGiftCard,
    })

    await markPaymentEventProcessed('mollie', eventId)
    return NextResponse.json({ received: true, orderId: order.id })
  } catch (error: unknown) {
    console.error('Mollie webhook error:', error)
    await notifyHealthAlert({
      source: 'api/webhooks/mollie',
      message: error instanceof Error ? error.message : 'Unknown Mollie webhook error',
      context: { paymentId },
    })
    return NextResponse.json({ error: 'Webhook processing failed.' }, { status: 500 })
  }
}
