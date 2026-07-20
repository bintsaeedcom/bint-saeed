import { NextRequest, NextResponse } from 'next/server'
import { isAllowedCheckoutOrigin, resolvePublicSiteBaseUrl } from '@/lib/security/allowedCheckoutOrigin'
import { rateLimitResponse } from '@/lib/security/rateLimit'
import { notifyHealthAlert } from '@/lib/ops/notifications'
import { cartSubtotalInCurrency, resolveShippingFee } from '@/lib/pricing'
import type { SupportedCurrency } from '@/lib/pricing/types'
import { parseCheckoutRequestBody } from '@/lib/checkout/parseCheckoutRequest'
import {
  cartRequiresPhysicalShipping,
  digitalGiftCardShippingPlaceholder,
} from '@/lib/giftCards/cartDetection'
import { resolveOptionalCheckoutGiftCredit } from '@/lib/giftCards/resolveCheckoutGiftCredit'
import {
  isTabbyConfigured,
  isTabbyCurrency,
  isTabbyProductionSafe,
  resolveTabbyCountryCode,
  type TabbyBuyer,
  type TabbyShippingAddress,
} from '@/lib/tabby/config'
import { createTabbyCheckoutSession, extractTabbyWebUrl } from '@/lib/tabby/api'
import { ensureTabbyPaymentWebhookRegistered } from '@/lib/tabby/ensureWebhook'
import { savePendingTabbyCheckout } from '@/lib/tabby/pendingCheckoutStore'
import { isPlausibleTabbyPhone, normalizeTabbyPhone } from '@/lib/tabby/normalizePhone'
import { tabbyMessage, tabbyRejectionMessage } from '@/lib/tabby/messages'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

function parseBuyer(
  raw: unknown,
  fallbackEmail?: string,
): { ok: true; buyer: TabbyBuyer } | { ok: false; error: string } {
  if (!raw || typeof raw !== 'object') {
    return {
      ok: false,
      error: 'Tabby requires full name, email, and mobile number before checkout.',
    }
  }
  const o = raw as Record<string, unknown>
  const email = String(o.email ?? fallbackEmail ?? '').trim()
  const phone = String(o.phone ?? o.phone_number ?? '').replace(/\s/g, '')
  const first = String(o.firstName ?? o.first_name ?? '').trim()
  const last = String(o.lastName ?? o.last_name ?? '').trim()
  const name =
    String(o.name ?? '').trim() ||
    [first, last].filter(Boolean).join(' ').trim()
  if (!first && !last && !name) {
    return { ok: false, error: 'Please enter your full name for Tabby checkout.' }
  }
  if (!email) return { ok: false, error: 'Please enter your email for Tabby checkout.' }
  if (!email.includes('@') || !email.includes('.')) {
    return { ok: false, error: 'Please enter a valid email address for Tabby checkout.' }
  }
  if (!phone) return { ok: false, error: 'Please enter your mobile number for Tabby checkout.' }
  return { ok: true, buyer: { email, phone, name: name || `${first} ${last}`.trim() } }
}

function parseShipping(
  raw: unknown,
): { ok: true; address: TabbyShippingAddress } | { ok: false; error: string } {
  if (!raw || typeof raw !== 'object') {
    return { ok: false, error: 'Tabby requires a shipping address (street and city).' }
  }
  const o = raw as Record<string, unknown>
  const address = String(o.line1 ?? o.address ?? '').trim()
  const city = String(o.city ?? '').trim()
  if (!address) {
    return { ok: false, error: 'Please enter your shipping street address for Tabby.' }
  }
  if (!city) {
    return { ok: false, error: 'Please enter your city for Tabby shipping.' }
  }
  return {
    ok: true,
    address: {
      address,
      city,
      zip: String(o.zip ?? o.postal_code ?? '').trim() || undefined,
    },
  }
}

export async function POST(request: NextRequest) {
  if (!isTabbyConfigured()) {
    return NextResponse.json(
      {
        error:
          'Tabby is not configured. Set TABBY_SECRET_KEY and TABBY_MERCHANT_CODE when Tabby sends your API details.',
      },
      { status: 503 },
    )
  }

  if (process.env.NEXT_PUBLIC_TABBY_CHECKOUT_ENABLED !== 'true') {
    return NextResponse.json(
      { error: 'Tabby checkout is prepared but not enabled yet. Set NEXT_PUBLIC_TABBY_CHECKOUT_ENABLED=true after keys are live.' },
      { status: 503 },
    )
  }

  if (!isTabbyProductionSafe()) {
    return NextResponse.json(
      {
        error:
          'Tabby sandbox keys cannot be used in production. Replace sk_test_/pk_test_ with live Tabby credentials.',
      },
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

  // Fire-and-forget: payment capture must not depend on frontend redirect.
  void ensureTabbyPaymentWebhookRegistered(baseUrl)

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

    if (!isTabbyCurrency(checkoutCurrency)) {
      return NextResponse.json(
        { error: 'Tabby is available for AED, SAR, and KWD checkouts.' },
        { status: 400 },
      )
    }

    const currency = checkoutCurrency as SupportedCurrency
    const cartSubtotal = cartSubtotalInCurrency(items, currency)
    if (cartSubtotal <= 0) {
      return NextResponse.json({ error: 'Invalid cart total.' }, { status: 400 })
    }

    const countryCode = resolveTabbyCountryCode({
      currency,
      visitorCountry: clientContext.country,
    })

    const shippingFee = cartRequiresPhysicalShipping(items)
      ? resolveShippingFee({
          subtotal: cartSubtotal,
          currency,
          country: countryCode,
        })
      : 0
    const orderTotalBeforeGiftCard = cartSubtotal + shippingFee

    const gift = await resolveOptionalCheckoutGiftCredit({
      parsed,
      orderTotalBeforeGiftCard,
      currency,
      language: String(body.language ?? ''),
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
    const orderTotal = gift.amountDue
    const giftDiscountAmount = gift.credit?.appliedInCurrency ?? 0

    const buyerParsed = parseBuyer(body.consumer ?? body.customer ?? body.buyer, customerEmail)
    if (!buyerParsed.ok) {
      return NextResponse.json({ error: buyerParsed.error }, { status: 400 })
    }
    const buyer = buyerParsed.buyer
    buyer.phone = normalizeTabbyPhone(buyer.phone, countryCode)
    if (!isPlausibleTabbyPhone(buyer.phone, countryCode)) {
      return NextResponse.json(
        {
          error:
            countryCode === 'SA'
              ? 'Enter a valid Saudi mobile (e.g. 05XXXXXXXX or +9665XXXXXXXX).'
              : countryCode === 'KW'
                ? 'Enter a valid Kuwait mobile (e.g. +9659XXXXXXX).'
                : 'Enter a valid UAE mobile (e.g. 05XXXXXXXX or +9715XXXXXXXX).',
        },
        { status: 400 },
      )
    }

    let shippingAddress: TabbyShippingAddress
    if (cartRequiresPhysicalShipping(items)) {
      const shippingParsed = parseShipping(body.shippingAddress ?? body.address)
      if (!shippingParsed.ok) {
        return NextResponse.json({ error: shippingParsed.error }, { status: 400 })
      }
      shippingAddress = shippingParsed.address
    } else {
      const digital = digitalGiftCardShippingPlaceholder(countryCode)
      shippingAddress = {
        address: digital.line1,
        city: digital.city,
      }
    }

    const orderRef = `BS-TB-${Date.now().toString(36).toUpperCase()}`
    const lang = String(body.language ?? '').toLowerCase() === 'ar' ? 'ar' : 'en'

    const session = await createTabbyCheckoutSession({
      orderRef,
      orderTotal,
      shippingFee,
      discountAmount: giftDiscountAmount > 0 ? giftDiscountAmount : undefined,
      currency,
      countryCode,
      lang,
      items,
      buyer,
      shippingAddress,
      description: `Bint Saeed order ${orderRef}`,
      merchantUrls: {
        success: `${baseUrl}/checkout/success?provider=tabby&order_ref=${encodeURIComponent(orderRef)}`,
        cancel: `${baseUrl}/checkout?tabby=cancelled`,
        failure: `${baseUrl}/checkout?tabby=failed`,
      },
    })

    const webUrl = extractTabbyWebUrl(session.data)
    const paymentId = session.data.payment?.id
    const sessionStatus = (session.data.status || '').toLowerCase()

    if (!session.ok || sessionStatus === 'rejected' || !webUrl || !paymentId) {
      const rejectReason =
        session.data.configuration?.products?.installments?.rejection_reason ||
        session.data.rejection_reason_code
      const message =
        sessionStatus === 'rejected'
          ? tabbyRejectionMessage(rejectReason, lang)
          : session.data.message ||
            session.data.error ||
            tabbyMessage('generalReject', lang)
      return NextResponse.json(
        { error: message, status: session.data.status, details: session.data },
        { status: session.status || 502 },
      )
    }

    await savePendingTabbyCheckout(paymentId, {
      items,
      currency,
      cartSubtotal,
      shippingFee,
      orderTotal,
      orderRef,
      countryCode,
      discountCode: discountCode || undefined,
      customerEmail: customerEmail || buyer.email,
      checkoutNotes: checkoutNotes || undefined,
      buyer,
      shippingAddress,
      clientContext,
      clientIp,
      appliedGiftCard: gift.credit ?? undefined,
      createdAt: new Date().toISOString(),
    })

    return NextResponse.json({
      paymentId,
      checkoutId: session.data.id ?? null,
      url: webUrl,
      status: session.data.status,
    })
  } catch (error: unknown) {
    console.error('Tabby checkout error:', error)
    await notifyHealthAlert({
      source: 'api/payments/tabby/checkout',
      message: error instanceof Error ? error.message : 'Tabby checkout failed',
    })
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Tabby checkout failed.' },
      { status: 500 },
    )
  }
}
