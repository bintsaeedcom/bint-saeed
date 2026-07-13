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
import { isPlausibleTamaraPhone, normalizeTamaraPhone } from '@/lib/tamara/normalizePhone'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

function parseConsumer(raw: unknown):
  | { ok: true; consumer: TamaraConsumer }
  | { ok: false; error: string } {
  if (!raw || typeof raw !== 'object') {
    return {
      ok: false,
      error: 'Tamara requires first name, last name, email, and mobile number before checkout.',
    }
  }
  const o = raw as Record<string, unknown>
  const first = String(o.firstName ?? o.first_name ?? '').trim()
  const last = String(o.lastName ?? o.last_name ?? '').trim()
  const phone = String(o.phone ?? o.phone_number ?? '').replace(/\s/g, '')
  const email = String(o.email ?? '').trim()
  if (!first) return { ok: false, error: 'Please enter your first name for Tamara checkout.' }
  if (!last) return { ok: false, error: 'Please enter your last name for Tamara checkout.' }
  if (!email) return { ok: false, error: 'Please enter your email for Tamara checkout.' }
  if (!email.includes('@') || !email.includes('.')) {
    return { ok: false, error: 'Please enter a valid email address for Tamara checkout.' }
  }
  if (!phone) return { ok: false, error: 'Please enter your mobile number for Tamara checkout.' }
  return {
    ok: true,
    consumer: { first_name: first, last_name: last, phone_number: phone, email },
  }
}

function parseAddress(
  raw: unknown,
  consumer: TamaraConsumer,
  countryCode: 'AE' | 'SA',
): { ok: true; address: TamaraAddress } | { ok: false; error: string } {
  if (!raw || typeof raw !== 'object') {
    return { ok: false, error: 'Tamara requires a shipping address (street and city).' }
  }
  const o = raw as Record<string, unknown>
  const line1 = String(o.line1 ?? o.address ?? '').trim()
  const city = String(o.city ?? '').trim()
  if (!line1) {
    return { ok: false, error: 'Please enter your shipping street address for Tamara.' }
  }
  if (!city) {
    return { ok: false, error: 'Please enter your city for Tamara shipping.' }
  }
  return {
    ok: true,
    address: {
      first_name: consumer.first_name,
      last_name: consumer.last_name,
      line1,
      city,
      country_code: countryCode,
      phone_number: consumer.phone_number,
      region: String(o.region ?? o.state ?? '').trim() || undefined,
    },
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

    const consumerParsed = parseConsumer(body.consumer ?? body.customer)
    if (!consumerParsed.ok) {
      return NextResponse.json({ error: consumerParsed.error }, { status: 400 })
    }
    const consumer = consumerParsed.consumer

    // Local 05… numbers → E.164-style GCC digits Tamara expects
    consumer.phone_number = normalizeTamaraPhone(consumer.phone_number, countryCode)
    if (!isPlausibleTamaraPhone(consumer.phone_number, countryCode)) {
      return NextResponse.json(
        {
          error:
            countryCode === 'SA'
              ? 'Enter a valid Saudi mobile (e.g. 05XXXXXXXX or 9665XXXXXXXX).'
              : 'Enter a valid UAE mobile (e.g. 05XXXXXXXX or 9715XXXXXXXX).',
        },
        { status: 400 },
      )
    }

    const shippingParsed = parseAddress(body.shippingAddress ?? body.address, consumer, countryCode)
    if (!shippingParsed.ok) {
      return NextResponse.json({ error: shippingParsed.error }, { status: 400 })
    }
    const shippingAddress = shippingParsed.address
    shippingAddress.phone_number = consumer.phone_number

    const eligibility = await checkTamaraEligibility({
      amount: orderTotal,
      currency,
      phone: consumer.phone_number,
    })
    if (!eligibility.eligible) {
      return NextResponse.json(
        {
          error:
            'Tamara cannot approve this order (amount or mobile may not qualify). Try another payment method, or check your mobile number.',
          eligible: false,
        },
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
      const raw = session.data as {
        message?: string
        error?: string
        errors?: Array<{ error_code?: string; message?: string }>
      }
      const fromErrors = Array.isArray(raw.errors)
        ? raw.errors.map((e) => e.message).filter(Boolean).join(' ')
        : ''
      const message =
        raw.message ||
        raw.error ||
        fromErrors ||
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
