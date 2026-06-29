import { NextRequest, NextResponse } from 'next/server'
import { isAllowedCheckoutOrigin, resolvePublicSiteBaseUrl } from '@/lib/security/allowedCheckoutOrigin'
import { rateLimitResponse } from '@/lib/security/rateLimit'
import { notifyHealthAlert } from '@/lib/ops/notifications'
import { cartSubtotalInCurrency } from '@/lib/pricing'
import type { SupportedCurrency } from '@/lib/pricing/types'
import { parseCheckoutRequestBody } from '@/lib/checkout/parseCheckoutRequest'
import { createPayPalOrder } from '@/lib/paypal/client'
import { isPayPalConfigured } from '@/lib/paypal/config'
import { toPayPalAmountValue } from '@/lib/paypal/amount'
import { savePendingPayPalCheckout } from '@/lib/paypal/pendingCheckoutStore'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest) {
  if (!isPayPalConfigured()) {
    return NextResponse.json({ error: 'PayPal is not configured on this environment.' }, { status: 503 })
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

    const currency = parsed.currency as SupportedCurrency
    const cartSubtotal = cartSubtotalInCurrency(parsed.items, currency)
    if (cartSubtotal <= 0) {
      return NextResponse.json({ error: 'Invalid cart total.' }, { status: 400 })
    }

    const orderRef = `BS-${Date.now().toString(36).toUpperCase()}`
    const { orderId, approvalUrl } = await createPayPalOrder({
      amountValue: toPayPalAmountValue(cartSubtotal),
      currency,
      description: `Bint Saeed order ${orderRef}`,
      returnUrl: `${baseUrl}/checkout/success`,
      cancelUrl: `${baseUrl}/checkout`,
      customId: orderRef,
    })

    await savePendingPayPalCheckout(orderId, {
      items: parsed.items,
      currency,
      cartSubtotal,
      discountCode: parsed.discountCode || undefined,
      customerEmail: parsed.customerEmail || undefined,
      checkoutNotes: parsed.checkoutNotes || undefined,
      clientContext: parsed.clientContext,
      clientIp: parsed.clientIp,
      orderRef,
      createdAt: new Date().toISOString(),
    })

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
