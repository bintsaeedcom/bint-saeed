import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { saveOrder, findOrderIdBySession, listOrders, updateOrderFulfillment, getOrderById } from '@/lib/orders/orderStore'
import { markStripeEventProcessed, wasStripeEventProcessed } from '@/lib/payments/webhookEventStore'
import type { OrderLine, StoredOrder } from '@/lib/orders/types'

export const runtime = 'nodejs'

function getStripe() {
  return new Stripe(process.env.STRIPE_SECRET_KEY || '', {
    apiVersion: '2025-02-24.acacia',
  })
}

function buildOrderFromSession(session: Stripe.Checkout.Session): StoredOrder {
  const now = new Date().toISOString()
  const id = `ORD-${session.id.replace(/^cs_/, '').slice(0, 18)}`

  const lines: OrderLine[] = []
  const expanded = session.line_items
  if (expanded && typeof expanded === 'object' && 'data' in expanded && Array.isArray(expanded.data)) {
    for (const li of expanded.data) {
      const qty = li.quantity ?? 1
      const desc = li.description || 'Item'
      lines.push({
        name: desc,
        description: li.description ?? undefined,
        quantity: qty,
        unitPrice: li.amount_total != null ? li.amount_total / 100 / qty : 0,
        currency: (li.currency || 'aed').toUpperCase(),
      })
    }
  }

  let metaItems: { id?: string; name?: string; size?: string; color?: string; quantity?: number; price?: number }[] = []
  try {
    const raw = session.metadata?.orderItems
    if (raw) metaItems = JSON.parse(raw) as typeof metaItems
  } catch {
    /* ignore */
  }

  if (metaItems.length > 0 && lines.length === metaItems.length) {
    for (let i = 0; i < lines.length; i++) {
      const m = metaItems[i]
      if (m?.id) lines[i].productId = m.id
      if (m?.name) lines[i].name = m.name
      const bits: string[] = []
      if (m?.size) bits.push(`Size: ${m.size}`)
      if (m?.color) bits.push(`Color: ${m.color}`)
      if (bits.length) lines[i].description = [lines[i].description, bits.join(', ')].filter(Boolean).join(' · ')
    }
  } else if (metaItems.length > 0 && lines.length === 0) {
    for (const m of metaItems) {
      lines.push({
        productId: m.id,
        name: m.name || 'Item',
        description: [m.size ? `Size: ${m.size}` : '', m.color ? `Color: ${m.color}` : ''].filter(Boolean).join(', '),
        quantity: m.quantity ?? 1,
        unitPrice: Number(m.price) || 0,
        currency: 'AED',
      })
    }
  }

  const customFields = session.custom_fields
  let deliveryNotes: string | undefined
  if (Array.isArray(customFields)) {
    const d = customFields.find((f) => f.key === 'delivery_notes')
    if (d && typeof d.text?.value === 'string') deliveryNotes = d.text.value
  }

  const ship = session.shipping_details
  const shipAddr = ship?.address
    ? {
        name: ship.name,
        line1: ship.address?.line1,
        line2: ship.address?.line2,
        city: ship.address?.city,
        state: ship.address?.state,
        postal_code: ship.address?.postal_code,
        country: ship.address?.country,
      }
    : undefined

  const customerEmail =
    session.customer_details?.email || session.customer_email || session.metadata?.customerEmail || ''

  const customerName = session.customer_details?.name || undefined
  const customerPhone = session.customer_details?.phone || undefined

  return {
    id,
    stripeSessionId: session.id,
    paymentIntentId: typeof session.payment_intent === 'string' ? session.payment_intent : session.payment_intent?.id,
    customerEmail,
    customerName,
    customerPhone,
    shippingAddress: shipAddr as Record<string, unknown> | undefined,
    billingAddress: session.customer_details?.address as Record<string, unknown> | undefined,
    lines,
    amountSubtotal: (session.amount_subtotal ?? 0) / 100,
    amountShipping: (session.shipping_cost?.amount_total ?? 0) / 100,
    amountTotal: (session.amount_total ?? 0) / 100,
    currency: (session.currency || 'aed').toUpperCase(),
    fulfillmentStatus: 'paid',
    deliveryNotes,
    discountCode: session.metadata?.discountCodeUsed || undefined,
    createdAt: now,
    updatedAt: now,
  }
}

async function findOrderIdByPaymentIntent(paymentIntentId?: string | null): Promise<string | null> {
  if (!paymentIntentId) return null
  const orders = await listOrders({ limit: 400 })
  const match = orders.find((order) => order.paymentIntentId === paymentIntentId)
  return match?.id ?? null
}

async function markOrderWithStripeNote(orderId: string, note: string, status?: StoredOrder['fulfillmentStatus']) {
  const current = await getOrderById(orderId)
  if (!current) return
  const timestamp = new Date().toISOString()
  const nextLine = `[${timestamp}] ${note}`
  const internalNotes = current.internalNotes ? `${current.internalNotes}\n${nextLine}` : nextLine
  await updateOrderFulfillment(orderId, {
    fulfillmentStatus: status,
    internalNotes,
  })
}

export async function POST(request: NextRequest) {
  const secret = process.env.STRIPE_WEBHOOK_SECRET
  const key = process.env.STRIPE_SECRET_KEY
  if (!secret || !key) {
    return NextResponse.json({ error: 'Webhook not configured' }, { status: 503 })
  }

  const rawBody = await request.text()
  const sig = request.headers.get('stripe-signature')
  if (!sig) {
    return NextResponse.json({ error: 'Missing signature' }, { status: 400 })
  }

  let event: Stripe.Event
  try {
    event = getStripe().webhooks.constructEvent(rawBody, sig, secret)
  } catch {
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }

  const alreadyProcessed = await wasStripeEventProcessed(event.id)
  if (alreadyProcessed) {
    return NextResponse.json({ received: true, duplicateEvent: true })
  }

  try {
    switch (event.type) {
      // Checkout lifecycle
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session
        const dup = await findOrderIdBySession(session.id)
        if (dup) {
          return NextResponse.json({ received: true, duplicate: true })
        }

        const stripe = getStripe()
        const full = await stripe.checkout.sessions.retrieve(session.id, {
          expand: ['line_items'],
        })

        const order = buildOrderFromSession(full)
        await saveOrder(order)
        break
      }
      case 'checkout.session.async_payment_succeeded': {
        const session = event.data.object as Stripe.Checkout.Session
        const orderId = await findOrderIdBySession(session.id)
        if (orderId) {
          await markOrderWithStripeNote(orderId, `Checkout async payment succeeded (${session.id}).`, 'paid')
        }
        break
      }
      case 'checkout.session.async_payment_failed':
      case 'checkout.session.expired': {
        const session = event.data.object as Stripe.Checkout.Session
        const orderId = await findOrderIdBySession(session.id)
        if (orderId) {
          await markOrderWithStripeNote(orderId, `Checkout session event: ${event.type} (${session.id}).`)
        }
        break
      }

      // Payment lifecycle
      case 'payment_intent.succeeded': {
        const intent = event.data.object as Stripe.PaymentIntent
        const orderId = await findOrderIdByPaymentIntent(intent.id)
        if (orderId) {
          await markOrderWithStripeNote(orderId, `Payment succeeded (${intent.id}).`, 'paid')
        }
        break
      }
      case 'payment_intent.payment_failed':
      case 'payment_intent.canceled':
      case 'payment_intent.partially_funded': {
        const intent = event.data.object as Stripe.PaymentIntent
        const orderId = await findOrderIdByPaymentIntent(intent.id)
        if (orderId) {
          await markOrderWithStripeNote(orderId, `Payment intent event: ${event.type} (${intent.id}).`)
        }
        break
      }

      // Refund lifecycle
      case 'charge.refunded': {
        const charge = event.data.object as Stripe.Charge
        const paymentIntentId = typeof charge.payment_intent === 'string' ? charge.payment_intent : null
        const orderId = await findOrderIdByPaymentIntent(paymentIntentId)
        if (orderId) {
          await markOrderWithStripeNote(orderId, `Charge refunded (${charge.id}).`, 'refunded')
        }
        break
      }
      case 'refund.created':
      case 'refund.updated':
      case 'refund.failed': {
        const refund = event.data.object as Stripe.Refund
        const paymentIntentId =
          typeof refund.payment_intent === 'string'
            ? refund.payment_intent
            : refund.payment_intent?.id ?? null
        const orderId = await findOrderIdByPaymentIntent(paymentIntentId)
        if (orderId) {
          const statusNote = refund.status ? ` status=${refund.status}` : ''
          await markOrderWithStripeNote(orderId, `Refund event: ${event.type} (${refund.id}).${statusNote}`)
        }
        break
      }

      // Dispute lifecycle
      case 'charge.dispute.created':
      case 'charge.dispute.updated':
      case 'charge.dispute.closed': {
        const dispute = event.data.object as Stripe.Dispute
        const paymentIntentId = typeof dispute.payment_intent === 'string' ? dispute.payment_intent : null
        const orderId = await findOrderIdByPaymentIntent(paymentIntentId)
        if (orderId) {
          const disputeStatus = dispute.status ? ` status=${dispute.status}` : ''
          await markOrderWithStripeNote(orderId, `Dispute event: ${event.type} (${dispute.id}).${disputeStatus}`)
        }
        break
      }

      default:
        // Explicitly acknowledge and ignore unhandled Stripe events.
        break
    }
  } catch (error) {
    console.error('Stripe webhook handler error:', error)
    return NextResponse.json({ error: 'Webhook handler failed' }, { status: 500 })
  }

  await markStripeEventProcessed(event.id)

  return NextResponse.json({ received: true })
}
