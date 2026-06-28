import { NextRequest, NextResponse } from 'next/server'
import { isAllowedCheckoutOrigin, resolvePublicSiteBaseUrl } from '@/lib/security/allowedCheckoutOrigin'
import { rateLimitResponse } from '@/lib/security/rateLimit'
import { notifyHealthAlert } from '@/lib/ops/notifications'
import { cartSubtotalInCurrency } from '@/lib/pricing'
import type { SupportedCurrency } from '@/lib/pricing/types'
import { parseCheckoutRequestBody } from '@/lib/checkout/parseCheckoutRequest'
import { getMollieClient } from '@/lib/mollie/client'
import { getMollieApiKey } from '@/lib/mollie/config'
import { toMollieAmountValue } from '@/lib/mollie/amount'
import { serializeMollieOrderItems } from '@/lib/mollie/buildOrderFromPayment'
import { savePendingMollieCheckout } from '@/lib/mollie/pendingCheckoutStore'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest) {
  if (!getMollieApiKey()) {
    return NextResponse.json(
      { error: 'Mollie is not configured on this environment.' },
      { status: 503 },
    )
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

    const {
      items,
      currency: checkoutCurrency,
      discountCode,
      customerEmail,
      checkoutNotes,
      clientContext,
      clientIp,
    } = parsed
    const currency = checkoutCurrency as SupportedCurrency
    const cartSubtotal = cartSubtotalInCurrency(items, currency)
    if (cartSubtotal <= 0) {
      return NextResponse.json({ error: 'Invalid cart total.' }, { status: 400 })
    }

    const mollie = getMollieClient()
    const orderRef = `BS-${Date.now().toString(36).toUpperCase()}`
    const metadata: Record<string, string> = {
      orderRef,
      checkoutCurrency,
      orderItems: serializeMollieOrderItems(items),
      discountCodeUsed: discountCode,
      customerEmail,
      clientIp,
      clientTimezone: clientContext.timezone ?? '',
      clientLocalTime: clientContext.localTime ?? '',
      clientDeviceType: clientContext.deviceType ?? '',
      checkoutNotes,
      cartSubtotal: String(cartSubtotal),
    }

    const payment = await mollie.payments.create({
      amount: {
        currency,
        value: toMollieAmountValue(cartSubtotal, currency),
      },
      description: `Bint Saeed order ${orderRef}`,
      redirectUrl: `${baseUrl}/checkout/success?payment_id={id}`,
      webhookUrl: `${baseUrl}/api/webhooks/mollie`,
      metadata,
    })

    await savePendingMollieCheckout(payment.id, {
      items,
      currency,
      cartSubtotal,
      discountCode: discountCode || undefined,
      customerEmail: customerEmail || undefined,
      checkoutNotes: checkoutNotes || undefined,
      clientContext,
      clientIp,
      createdAt: new Date().toISOString(),
    })

    const checkoutUrl = payment.getCheckoutUrl?.() ?? payment._links?.checkout?.href ?? null
    if (!checkoutUrl) {
      throw new Error('Mollie did not return a checkout URL')
    }

    return NextResponse.json({
      paymentId: payment.id,
      url: checkoutUrl,
    })
  } catch (error: unknown) {
    console.error('Mollie checkout error:', error)
    await notifyHealthAlert({
      source: 'api/payments/mollie/checkout',
      message: error instanceof Error ? error.message : 'Unknown Mollie checkout error',
    })
    return NextResponse.json(
      { error: 'Checkout is temporarily unavailable. Please try again.' },
      { status: 500 },
    )
  }
}
