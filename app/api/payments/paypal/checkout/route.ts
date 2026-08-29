import { NextRequest, NextResponse } from 'next/server'
import { isAllowedCheckoutOrigin, resolvePublicSiteBaseUrl } from '@/lib/security/allowedCheckoutOrigin'
import { rateLimitResponse } from '@/lib/security/rateLimit'
import { notifyHealthAlert } from '@/lib/ops/notifications'
import { cartSubtotalInCurrency, resolveShippingFee } from '@/lib/pricing'
import type { SupportedCurrency } from '@/lib/pricing/types'
import { parseCheckoutRequestBody } from '@/lib/checkout/parseCheckoutRequest'
import { createPayPalOrder } from '@/lib/paypal/client'
import { isPayPalConfigured } from '@/lib/paypal/config'
import { toPayPalAmountValue } from '@/lib/paypal/amount'
import { resolvePayPalSettlementCurrency } from '@/lib/paypal/settlementCurrency'
import { savePendingPayPalCheckout } from '@/lib/paypal/pendingCheckoutStore'
import { cartRequiresPhysicalShipping } from '@/lib/giftCards/cartDetection'
import { resolveOptionalCheckoutGiftCredit } from '@/lib/giftCards/resolveCheckoutGiftCredit'
import { funnelTelemetryFromParsedCheckout } from '@/lib/analytics/funnel/checkoutTelemetry'
import { recordFunnelPaymentSessionCreated } from '@/lib/analytics/funnel/serverFunnel'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest) {
  if (!isPayPalConfigured()) {
    return NextResponse.json({ error: 'PayPal is not configured.' }, { status: 503 })
  }

  const tooMany = await rateLimitResponse(request, 'checkout', 45, 3600)
  if (tooMany) return tooMany

  if (!isAllowedCheckoutOrigin(request)) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }

  const baseUrl = resolvePublicSiteBaseUrl(request)
  if (!baseUrl) {
    return NextResponse.json({ error: 'Site URL is not configured.' }, { status: 503 })
  }

  try {
    const body = (await request.json()) as Record<string, unknown>
    const parsed = parseCheckoutRequestBody(body, request)
    if ('error' in parsed) {
      return NextResponse.json({ error: parsed.error }, { status: parsed.status })
    }

    const displayCurrency = parsed.currency as SupportedCurrency
    // PayPal cannot present AED / most GCC currencies. Settle in a PayPal-supported currency,
    // reading the amount straight from our fixed price sheet (no live FX).
    const currency = resolvePayPalSettlementCurrency(displayCurrency)
    const cartSubtotal = cartSubtotalInCurrency(parsed.items, currency)
    if (cartSubtotal <= 0) {
      return NextResponse.json({ error: 'Invalid cart total.' }, { status: 400 })
    }

    const shippingFee = cartRequiresPhysicalShipping(parsed.items)
      ? resolveShippingFee({
          subtotal: cartSubtotal,
          currency,
          country: parsed.clientContext.country,
        })
      : 0
    const orderTotalBeforeGiftCard = cartSubtotal + shippingFee

    const gift = await resolveOptionalCheckoutGiftCredit({
      parsed,
      orderTotalBeforeGiftCard,
      currency,
    })
    if (!gift.ok) {
      return NextResponse.json({ error: gift.error }, { status: 400 })
    }
    if (gift.amountDue <= 0) {
      return NextResponse.json(
        {
          error: 'This order is fully covered by your gift card.',
          giftCardCoversFull: true,
        },
        { status: 400 },
      )
    }

    const orderRef = `BS-${Date.now().toString(36).toUpperCase()}`
    const { orderId, approvalUrl } = await createPayPalOrder({
      amountValue: toPayPalAmountValue(gift.amountDue),
      currency,
      description: `Bint Saeed order ${orderRef}`,
      returnUrl: `${baseUrl}/checkout/success`,
      cancelUrl: `${baseUrl}/checkout?paypal=cancelled`,
      customId: orderRef,
    })

    await savePendingPayPalCheckout(orderId, {
      items: parsed.items,
      currency,
      cartSubtotal,
      shippingFee,
      discountCode: parsed.discountCode || undefined,
      customerEmail: parsed.customerEmail || undefined,
      checkoutNotes: parsed.checkoutNotes || undefined,
      clientContext: parsed.clientContext,
      clientIp: parsed.clientIp,
      orderRef,
      appliedGiftCard: gift.credit ?? undefined,
      createdAt: new Date().toISOString(),
    })

    void recordFunnelPaymentSessionCreated({
      provider: 'paypal',
      sessionRef: orderId,
      telemetry: funnelTelemetryFromParsedCheckout(parsed),
    }).catch(() => {})

    return NextResponse.json({
      orderId,
      url: approvalUrl,
    })
  } catch (error: unknown) {
    console.error('PayPal checkout error:', error)
    await notifyHealthAlert({
      source: 'api/payments/paypal/checkout',
      message: error instanceof Error ? error.message : 'Unknown PayPal checkout error',
    })
    return NextResponse.json(
      { error: 'Checkout is temporarily unavailable. Please try again.' },
      { status: 500 },
    )
  }
}
