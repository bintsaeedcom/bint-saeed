import { NextRequest, NextResponse } from 'next/server'
import { isAllowedCheckoutOrigin } from '@/lib/security/allowedCheckoutOrigin'
import { rateLimitResponse } from '@/lib/security/rateLimit'
import { readJsonObject } from '@/lib/http/readJsonBody'
import { notifyHealthAlert, notifySlackNewPaidOrder } from '@/lib/ops/notifications'
import { cartSubtotalInCurrency, resolveShippingFee } from '@/lib/pricing'
import type { SupportedCurrency } from '@/lib/pricing/types'
import { parseCheckoutRequestBody } from '@/lib/checkout/parseCheckoutRequest'
import {
  cartRequiresPhysicalShipping,
  digitalGiftCardShippingPlaceholder,
  isGiftCardLineId,
} from '@/lib/giftCards/cartDetection'
import {
  cartContainsGiftCardPurchase,
  commitRedeemForPaidOrder,
  giftCardPurchaseBlockedMessage,
  resolveAppliedGiftCardCredit,
} from '@/lib/giftCards/applyAtCheckout'
import { lineUnitForCurrency } from '@/lib/shopProductOptions'
import { saveOrder } from '@/lib/orders/orderStore'
import type { StoredOrder } from '@/lib/orders/types'
import { dispatchOrderEmails } from '@/lib/orders/dispatchOrderEmails'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

/**
 * Full gift-card payment — order total covered entirely by an applied gift card.
 * No PSP session; balance is committed immediately after the paid order is saved.
 */
export async function POST(request: NextRequest) {
  const tooMany = await rateLimitResponse(request, 'checkout', 45, 3600)
  if (tooMany) return tooMany

  if (!isAllowedCheckoutOrigin(request)) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }

  const bodyResult = await readJsonObject(request)
  if (!bodyResult.ok) {
    return NextResponse.json({ error: bodyResult.error }, { status: bodyResult.status })
  }

  try {
    const body = bodyResult.body
    const parsed = parseCheckoutRequestBody(body, request)
    if ('error' in parsed) {
      return NextResponse.json({ error: parsed.error }, { status: parsed.status })
    }

    if (cartContainsGiftCardPurchase(parsed.items) || parsed.items.some((i) => isGiftCardLineId(i.id))) {
      return NextResponse.json({ error: giftCardPurchaseBlockedMessage() }, { status: 400 })
    }

    const currency = parsed.currency as SupportedCurrency
    const cartSubtotal = cartSubtotalInCurrency(parsed.items, currency)
    if (cartSubtotal <= 0) {
      return NextResponse.json({ error: 'Invalid cart total.' }, { status: 400 })
    }

    const requiresShipping = cartRequiresPhysicalShipping(parsed.items)
    const shippingFee = requiresShipping
      ? resolveShippingFee({
          subtotal: cartSubtotal,
          currency,
          country: parsed.clientContext.country,
        })
      : 0
    const orderTotal = cartSubtotal + shippingFee

    const code = parsed.appliedGiftCardCode?.trim()
    if (!code) {
      return NextResponse.json({ error: 'Enter a gift card code.' }, { status: 400 })
    }

    const resolved = await resolveAppliedGiftCardCredit({
      code,
      orderTotalInCurrency: orderTotal,
      currency,
      items: parsed.items,
    })
    if (!resolved.ok) {
      return NextResponse.json({ error: resolved.error }, { status: 400 })
    }
    if (resolved.credit.appliedInCurrency + 0.001 < orderTotal) {
      return NextResponse.json(
        { error: 'This gift card does not fully cover the order. Choose a payment method for the remainder.' },
        { status: 400 },
      )
    }

    const email =
      parsed.customerEmail ||
      (typeof body.customerEmail === 'string' ? body.customerEmail.trim() : '') ||
      (typeof (body.consumer as { email?: string } | undefined)?.email === 'string'
        ? String((body.consumer as { email: string }).email).trim()
        : '')
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email so we can send your order confirmation.' },
        { status: 400 },
      )
    }

    let shippingAddress: Record<string, unknown> | undefined
    if (requiresShipping) {
      const raw = (body.shippingAddress ?? body.address) as Record<string, unknown> | undefined
      const line1 = String(raw?.line1 ?? raw?.address ?? '').trim()
      const city = String(raw?.city ?? '').trim()
      if (!line1 || !city) {
        return NextResponse.json(
          { error: 'Please enter a shipping address for this order.' },
          { status: 400 },
        )
      }
      shippingAddress = {
        line1,
        city,
        country: parsed.clientContext.country || 'AE',
      }
    } else {
      const digital = digitalGiftCardShippingPlaceholder(parsed.clientContext.country || 'AE')
      shippingAddress = {
        line1: digital.line1,
        city: digital.city,
        country: digital.country,
      }
    }

    const now = new Date().toISOString()
    const orderId = `BS-GC-${Date.now().toString(36).toUpperCase()}`
    const order: StoredOrder = {
      id: orderId,
      stripeSessionId: orderId,
      paymentProvider: 'gift_card',
      customerEmail: email,
      customerName:
        typeof (body.consumer as { firstName?: string } | undefined)?.firstName === 'string'
          ? [
              String((body.consumer as { firstName?: string }).firstName || ''),
              String((body.consumer as { lastName?: string }).lastName || ''),
            ]
              .join(' ')
              .trim() || undefined
          : undefined,
      shippingAddress,
      lines: parsed.items.map((item) => ({
        productId: item.id,
        name: item.name,
        description: [item.size, item.color, item.customisationMessage].filter(Boolean).join(' · '),
        quantity: item.quantity,
        unitPrice: lineUnitForCurrency(item, currency),
        currency,
      })),
      amountSubtotal: cartSubtotal,
      amountShipping: shippingFee,
      amountTotal: 0,
      currency,
      fulfillmentStatus: 'paid',
      deliveryNotes: parsed.checkoutNotes || undefined,
      discountCode: parsed.discountCode || undefined,
      giftCardCode: resolved.credit.code,
      giftCardAppliedInCurrency: resolved.credit.appliedInCurrency,
      giftCardAppliedAed: resolved.credit.appliedAed,
      createdAt: now,
      updatedAt: now,
    }

    await saveOrder(order)
    const redeem = await commitRedeemForPaidOrder({
      orderId: order.id,
      applied: resolved.credit,
    })
    if (!redeem.ok) {
      await notifyHealthAlert({
        source: 'api/checkout/gift-card-pay',
        message: `Order ${order.id} saved but gift card redeem failed: ${redeem.message || 'unknown'}`,
      })
      return NextResponse.json(
        {
          error:
            'Your order was recorded but the gift card could not be redeemed automatically. Our team has been notified — please contact orders@bintsaeed.com with your email.',
          orderId: order.id,
        },
        { status: 500 },
      )
    }

    try {
      await notifySlackNewPaidOrder(order, {
        paymentRef: resolved.credit.code,
        paymentMethod: 'Gift card',
      })
    } catch {
      /* optional */
    }
    await dispatchOrderEmails(order)

    return NextResponse.json({
      paid: true,
      orderId: order.id,
      amountDue: 0,
    })
  } catch (error: unknown) {
    console.error('Gift card pay error:', error)
    await notifyHealthAlert({
      source: 'api/checkout/gift-card-pay',
      message: error instanceof Error ? error.message : 'Unknown gift-card pay error',
    })
    return NextResponse.json(
      { error: 'Unable to complete gift card checkout. Please try again.' },
      { status: 500 },
    )
  }
}
