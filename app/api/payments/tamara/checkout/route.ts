import { NextRequest, NextResponse } from 'next/server'
import { isAllowedCheckoutOrigin, resolvePublicSiteBaseUrl } from '@/lib/security/allowedCheckoutOrigin'
import { rateLimitResponse } from '@/lib/security/rateLimit'
import { notifyHealthAlert } from '@/lib/ops/notifications'
import { cartSubtotalInCurrency, resolveShippingFee } from '@/lib/pricing'
import type { SupportedCurrency } from '@/lib/pricing/types'
import { parseCheckoutRequestBody } from '@/lib/checkout/parseCheckoutRequest'
import {
  isTamaraConfigured,
  isTamaraCurrency,
  resolveTamaraCountryCode,
  type TamaraAddress,
  type TamaraConsumer,
} from '@/lib/tamara/config'
import { checkTamaraEligibility } from '@/lib/tamara/eligibility'
import { createTamaraCheckoutSession } from '@/lib/tamara/api'
import { savePendingTamaraCheckout } from '@/lib/tamara/pendingCheckoutStore'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

function parseConsumer(raw: unknown): TamaraConsumer | null {
  if (!raw || typeof raw !== 'object') return null
  const o = raw as Record<string, unknown>
  const first = String(o.firstName ?? o.first_name ?? '').trim()
  const last = String(o.lastName ?? o.last_name ?? '').trim()
  const phone = String(o.phone ?? o.phone_number ?? '').replace(/\s/g, '')
  const email = String(o.email ?? '').trim()
  if (!first || !last || !phone || !email || !email.includes('@')) return null
  return { first_name: first, last_name: last, phone_number: phone, email }
}

function parseAddress(
  raw: unknown,
  consumer: TamaraConsumer,
  countryCode: 'AE' | 'SA',
): TamaraAddress | null {
  if (!raw || typeof raw !== 'object') return null
  const o = raw as Record<string, unknown>
  const line1 = String(o.line1 ?? o.address ?? '').trim()
  const city = String(o.city ?? '').trim()
  if (!line1 || !city) return null
  return {
    first_name: consumer.first_name,
    last_name: consumer.last_name,
    line1,
    city,
    country_code: countryCode,
    phone_number: consumer.phone_number,
    region: String(o.region ?? o.state ?? '').trim() || undefined,
  }
}

export async function POST(request: NextRequest) {
  if (!isTamaraConfigured()) {
    return NextResponse.json(
      { error: 'Tamara is not configured. Set TAMARA_API_TOKEN.' },
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

    if (!isTamaraCurrency(checkoutCurrency)) {
      return NextResponse.json(
        { error: 'Tamara is available for AED and SAR checkouts (UAE / KSA).' },
        { status: 400 },
      )
    }

    const currency = checkoutCurrency as SupportedCurrency
    const cartSubtotal = cartSubtotalInCurrency(items, currency)
    if (cartSubtotal <= 0) {
      return NextResponse.json({ error: 'Invalid cart total.' }, { status: 400 })
    }

    const countryCode = resolveTamaraCountryCode({
      currency,
      visitorCountry: clientContext.country,
    })

    const shippingFee = resolveShippingFee({
      subtotal: cartSubtotal,
      currency,
      country: countryCode,
    })
    const orderTotal = cartSubtotal + shippingFee

    const consumer = parseConsumer(body.consumer ?? body.customer)
    if (!consumer) {
      return NextResponse.json(
        {
          error:
            'Tamara requires first name, last name, email, and mobile number before checkout.',
        },
        { status: 400 },
      )
    }

    const shippingAddress = parseAddress(body.shippingAddress ?? body.address, consumer, countryCode)
    if (!shippingAddress) {
      return NextResponse.json(
        { error: 'Tamara requires a shipping address (street and city).' },
        { status: 400 },
      )
    }

    const eligibility = await checkTamaraEligibility({
      amount: orderTotal,
      currency,
      phone: consumer.phone_number,
    })
    if (!eligibility.eligible) {
      return NextResponse.json(
        { error: 'Tamara is not available for this customer or order amount.', eligible: false },
        { status: 400 },
      )
    }

    const orderRef = `BS-T-${Date.now().toString(36).toUpperCase()}`
    const locale = clientContext.country === 'SA' || currency === 'SAR' ? 'ar_SA' : 'en_US'
    // Prefer site language if passed
    const lang = String(body.language ?? '').toLowerCase()
    const tamaraLocale = lang === 'ar' ? 'ar_SA' : locale === 'ar_SA' && lang !== 'en' ? 'ar_SA' : 'en_US'

    const session = await createTamaraCheckoutSession({
      orderRef,
      orderTotal,
      shippingFee,
      currency,
      countryCode,
      locale: tamaraLocale,
      items,
      consumer,
      shippingAddress,
      discountCode: discountCode || undefined,
      description: `Bint Saeed order ${orderRef}`,
      merchantUrl: {
        success: `${baseUrl}/checkout/success`,
        failure: `${baseUrl}/checkout?tamara=failed`,
        cancel: `${baseUrl}/checkout?tamara=cancelled`,
        notification: `${baseUrl}/api/webhooks/tamara`,
      },
    })

    if (!session.ok || !session.data.checkout_url || !session.data.order_id) {
      const message =
        session.data.message ||
        (session.data as { error?: string }).error ||
        'Failed to create Tamara checkout session.'
      return NextResponse.json({ error: message, details: session.data }, { status: session.status || 502 })
    }

    await savePendingTamaraCheckout(session.data.order_id, {
      items,
      currency,
      cartSubtotal,
      shippingFee,
      orderTotal,
      orderRef,
      countryCode,
      discountCode: discountCode || undefined,
      customerEmail: customerEmail || consumer.email,
      checkoutNotes: checkoutNotes || undefined,
      consumer,
      shippingAddress,
      clientContext,
      clientIp,
      createdAt: new Date().toISOString(),
    })

    return NextResponse.json({
      orderId: session.data.order_id,
      checkoutId: session.data.checkout_id,
      url: session.data.checkout_url,
    })
  } catch (error: unknown) {
    console.error('Tamara checkout error:', error)
    await notifyHealthAlert({
      source: 'api/payments/tamara/checkout',
      message: error instanceof Error ? error.message : 'Tamara checkout failed',
    })
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Tamara checkout failed.' },
      { status: 500 },
    )
  }
}
