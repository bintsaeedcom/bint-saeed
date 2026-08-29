import { NextRequest, NextResponse } from 'next/server'
import { capturePayPalOrder } from '@/lib/paypal/client'
import { isPayPalConfigured } from '@/lib/paypal/config'
import { buildOrderFromPayPalCapture } from '@/lib/paypal/buildOrderFromCapture'
import {
  deletePendingPayPalCheckout,
  getPendingPayPalCheckout,
} from '@/lib/paypal/pendingCheckoutStore'
import { saveOrder, findOrderIdBySession, getOrderById } from '@/lib/orders/orderStore'
import { markPaymentEventProcessed, wasPaymentEventProcessed } from '@/lib/payments/webhookEventStore'
import { notifyHealthAlert, notifySlackNewPaidOrder } from '@/lib/ops/notifications'
import { dispatchOrderEmails } from '@/lib/orders/dispatchOrderEmails'
import { fulfillPaidGiftCards } from '@/lib/giftCards/fulfillPaidGiftCards'
import { commitRedeemForPaidOrder } from '@/lib/giftCards/applyAtCheckout'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

async function persistPayPalOrder(orderId: string) {
  if (await wasPaymentEventProcessed('paypal', orderId)) {
    const existingId = await findOrderIdBySession(orderId)
    if (existingId) {
      const existing = await getOrderById(existingId)
      if (existing) {
        const pending = await getPendingPayPalCheckout(orderId)
        await fulfillPaidGiftCards({ order: existing, items: pending?.items })
        await commitRedeemForPaidOrder({
          orderId: existing.id,
          applied: pending?.appliedGiftCard,
        })
      }
    }
    return { ok: true as const, orderId: existingId, duplicate: true }
  }

  const pending = await getPendingPayPalCheckout(orderId)
  if (!pending) {
    return { ok: false as const, error: 'Checkout session expired. Please contact support with your PayPal receipt.' }
  }

  const capture = await capturePayPalOrder(orderId)
  if (capture.status !== 'COMPLETED' && capture.status !== 'PENDING') {
    return { ok: false as const, error: 'PayPal payment was not completed.' }
  }

  const order = buildOrderFromPayPalCapture(capture, pending)
  await saveOrder(order)
  await markPaymentEventProcessed('paypal', orderId)
  await deletePendingPayPalCheckout(orderId)

  try {
    await notifySlackNewPaidOrder(order, {
      clientIp: pending.clientIp,
      clientDeviceType: pending.clientContext?.deviceType,
      clientLocalTime: pending.clientContext?.localTime,
      clientTimezone: pending.clientContext?.timezone,
      paymentRef: order.paypalOrderId,
      paymentMethod: 'PayPal',
      attribution: {
        deviceLabel: pending.clientContext?.deviceLabel,
        deviceType: pending.clientContext?.deviceType,
        visitorCity: pending.clientContext?.city,
        visitorCountry: pending.clientContext?.country,
        trafficSource: pending.clientContext?.trafficSource,
        sessionSeconds: pending.clientContext?.sessionSeconds,
      },
    })
  } catch {
    /* optional */
  }
  await dispatchOrderEmails(order)
  await fulfillPaidGiftCards({ order, items: pending.items })
  await commitRedeemForPaidOrder({
    orderId: order.id,
    applied: pending.appliedGiftCard,
  })

  return { ok: true as const, orderId: order.id, duplicate: false }
}

export async function POST(request: NextRequest) {
  if (!isPayPalConfigured()) {
    return NextResponse.json({ error: 'PayPal is not configured.' }, { status: 503 })
  }

  try {
    const body = (await request.json()) as { orderId?: string }
    const orderId = typeof body.orderId === 'string' ? body.orderId.trim() : ''
    if (!orderId) {
      return NextResponse.json({ error: 'orderId is required.' }, { status: 400 })
    }

    const result = await persistPayPalOrder(orderId)
    if (!result.ok) {
      return NextResponse.json({ error: result.error }, { status: 400 })
    }

    return NextResponse.json({
      paid: true,
      orderId: result.orderId,
      duplicate: result.duplicate,
    })
  } catch (error: unknown) {
    console.error('PayPal capture error:', error)
    await notifyHealthAlert({
      source: 'api/payments/paypal/capture',
      message: error instanceof Error ? error.message : 'Unknown PayPal capture error',
    })
    return NextResponse.json(
      { error: 'Could not complete PayPal payment. Please contact support if you were charged.' },
      { status: 500 },
    )
  }
}
