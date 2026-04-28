import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { isAllowedCheckoutOrigin, resolvePublicSiteBaseUrl } from '@/lib/security/allowedCheckoutOrigin'
import { rateLimitResponse } from '@/lib/security/rateLimit'
import { notifyHealthAlert } from '@/lib/ops/notifications'

function getStripeSecretKey(): string | null {
  const key = process.env.STRIPE_SECRET_KEY?.trim()
  if (!key || !key.startsWith('sk_')) return null
  return key
}

function getStripe() {
  const key = getStripeSecretKey()
  if (!key) {
    throw new Error('Stripe secret key is not configured')
  }
  return new Stripe(key, {
    apiVersion: '2025-02-24.acacia',
  })
}

const MAX_LINE_ITEMS = 80
const MAX_DESC_LEN = 450

function extractClientIp(request: NextRequest): string {
  const forwardedFor = request.headers.get('x-forwarded-for') || ''
  const realIp = request.headers.get('x-real-ip') || ''
  const candidate = forwardedFor.split(',')[0]?.trim() || realIp.trim() || ''
  return candidate.slice(0, 64)
}

export async function POST(request: NextRequest) {
  if (!getStripeSecretKey()) {
    return NextResponse.json(
      { error: 'Stripe is not configured on this environment.' },
      { status: 503 }
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
    const body = await request.json()
    const { items, discountCode, customerEmail, packagingType, checkoutNotes, clientContext } = body
    const discountCodeStr = typeof discountCode === 'string' ? discountCode.trim().slice(0, 64) : ''
    const clientTimezone =
      typeof clientContext?.timezone === 'string' ? clientContext.timezone.trim().slice(0, 64) : ''
    const clientLocalTime =
      typeof clientContext?.localTime === 'string' ? clientContext.localTime.trim().slice(0, 120) : ''
    const clientDeviceType =
      typeof clientContext?.deviceType === 'string' ? clientContext.deviceType.trim().slice(0, 24) : ''
    const checkoutNotesText =
      typeof checkoutNotes === 'string' ? checkoutNotes.trim().slice(0, 300) : ''
    const clientIp = extractClientIp(request)

    if (!Array.isArray(items) || items.length === 0 || items.length > MAX_LINE_ITEMS) {
      return NextResponse.json({ error: 'Invalid cart.' }, { status: 400 })
    }

    const lineItems = items.map((item: Record<string, unknown>) => {
      const surcharge = Number(item.customisationSurcharge) || 0
      const unitAed = Number(item.price) + surcharge
      const msg =
        typeof item.customisationMessage === 'string' ? item.customisationMessage.trim().slice(0, 200) : ''
      const hasCustom = msg.length > 0
      const lengthPart =
        item.lengthCm != null && String(item.lengthCm).length > 0
          ? `, Length: ${String(item.lengthCm).slice(0, 24)} cm`
          : item.customLength
            ? `, Length: ${String(item.customLength).slice(0, 48)}`
            : ''
      const customPart = hasCustom
        ? `, Personalisation: ${msg} (customised items are non-returnable)`
        : ''
      const descRaw = `Size: ${String(item.size ?? '').slice(0, 48)}, Color: ${String(item.color ?? '').slice(0, 48)}${lengthPart}${
        item.notes ? `, Notes: ${String(item.notes).slice(0, 120)}` : ''
      }${customPart}`
      const description = descRaw.length > MAX_DESC_LEN ? `${descRaw.slice(0, MAX_DESC_LEN - 1)}…` : descRaw
      const qty = Math.min(99, Math.max(1, Math.floor(Number(item.quantity)) || 1))
      return {
        price_data: {
          currency: 'aed',
          product_data: {
            name: String(item.name ?? 'Item').slice(0, 120),
            description,
            images: [String(item.image ?? '').slice(0, 500)],
          },
          unit_amount: Math.max(0, Math.min(50_000_000, Math.round(unitAed * 100))),
        },
        quantity: qty,
      }
    })

    const packaging = packagingType === 'signature' ? 'signature' : 'sustainable'
    if (packaging === 'signature') {
      lineItems.push({
        price_data: {
          currency: 'aed',
          product_data: {
            name: 'Signature Packaging',
            description: 'Premium signature shipment box',
            images: [],
          },
          unit_amount: 3000,
        },
        quantity: 1,
      })
    }

    // Build checkout session options
    const sessionOptions: Stripe.Checkout.SessionCreateParams = {
      // Card enables credit/debit + Apple Pay / Google Pay on supported devices (verify domain in Stripe Dashboard).
      // Link adds Stripe Link where available for the currency.
      payment_method_types: ['card', 'link'],
      payment_method_options: {
        card: {
          request_three_d_secure: 'automatic',
        },
      },
      line_items: lineItems,
      mode: 'payment',
      success_url: `${baseUrl}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/checkout`,
      shipping_address_collection: {
        allowed_countries: ['AE', 'SA', 'KW', 'BH', 'OM', 'QA', 'GB', 'US', 'FR', 'DE', 'IT'],
      },
      billing_address_collection: 'required',
      // Allow customer to enter discount code at checkout
      allow_promotion_codes: true,
      // Custom fields for delivery notes
      custom_fields: [
        {
          key: 'delivery_notes',
          label: {
            type: 'custom',
            custom: 'Delivery Instructions (Optional)',
          },
          type: 'text',
          optional: true,
        },
      ],
      // Add phone number collection
      phone_number_collection: {
        enabled: true,
      },
      // Shipping options
      shipping_options: [
        {
          shipping_rate_data: {
            type: 'fixed_amount',
            fixed_amount: {
              amount: 0,
              currency: 'aed',
            },
            display_name: 'Standard Shipping (2 weeks)',
            delivery_estimate: {
              minimum: {
                unit: 'business_day',
                value: 10,
              },
              maximum: {
                unit: 'business_day',
                value: 14,
              },
            },
          },
        },
        {
          shipping_rate_data: {
            type: 'fixed_amount',
            fixed_amount: {
              amount: 5000, // 50 AED
              currency: 'aed',
            },
            display_name: 'Express Shipping (1 week)',
            delivery_estimate: {
              minimum: {
                unit: 'business_day',
                value: 5,
              },
              maximum: {
                unit: 'business_day',
                value: 7,
              },
            },
          },
        },
      ],
      metadata: {
        customerEmail: typeof customerEmail === 'string' ? customerEmail.trim().slice(0, 320) : '',
        orderItems: JSON.stringify(
          items.map((item: any) => ({
            id: item.id,
            productUrl: item.productUrl,
            name: item.name,
            size: item.size,
            color: item.color,
            quantity: item.quantity,
            price: item.price,
            customLength: item.customLength,
            lengthCm: item.lengthCm,
            notes: item.notes,
            customisationMessage: item.customisationMessage,
            customisationSurcharge: item.customisationSurcharge,
          }))
        ),
        discountCodeUsed: discountCodeStr,
        packagingType: packaging,
        clientIp,
        clientTimezone,
        clientLocalTime,
        clientDeviceType,
        checkoutNotes: checkoutNotesText,
      },
      // Customer creation for order tracking
      customer_creation: 'always',
      // Invoice for UAE tax compliance
      invoice_creation: {
        enabled: true,
        invoice_data: {
          description: 'Bint Saeed Order - Delivery within 2 weeks',
          footer: 'Thank you for shopping with Bint Saeed. Orders are handcrafted and delivered within 2 weeks.',
        },
      },
    }

    const stripe = getStripe()

    if (typeof customerEmail === 'string') {
      const em = customerEmail.trim()
      if (em && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em)) {
        sessionOptions.customer_email = em
      }
    }

    // If a specific discount code is provided, try to apply it
    if (discountCodeStr) {
      try {
        // Find the promotion code
        const promotionCodes = await stripe.promotionCodes.list({
          code: discountCodeStr,
          active: true,
          limit: 1,
        })

        if (promotionCodes.data.length > 0) {
          sessionOptions.discounts = [{
            promotion_code: promotionCodes.data[0].id,
          }]
          // Remove allow_promotion_codes if we're applying a specific code
          delete sessionOptions.allow_promotion_codes
        }
      } catch (e) {
        // If promotion code lookup fails, still allow manual entry
        console.log('Discount code lookup failed, allowing manual entry')
      }
    }

    const session = await stripe.checkout.sessions.create(sessionOptions)

    return NextResponse.json({ sessionId: session.id })
  } catch (error: unknown) {
    console.error('Stripe checkout error:', error)
    await notifyHealthAlert({
      source: 'api/checkout',
      message: error instanceof Error ? error.message : 'Unknown checkout error',
    })
    return NextResponse.json(
      { error: 'Checkout is temporarily unavailable. Please try again.' },
      { status: 500 }
    )
  }
}
