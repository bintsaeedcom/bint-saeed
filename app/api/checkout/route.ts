import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

function getStripe() {
  return new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_placeholder', {
    apiVersion: '2025-02-24.acacia',
  })
}

export async function POST(request: NextRequest) {
  try {
    const { items, discountCode } = await request.json()

    const lineItems = items.map((item: any) => ({
      price_data: {
        currency: 'aed',
        product_data: {
          name: item.name,
          description: `Size: ${item.size}, Color: ${item.color}${
            item.customLength ? `, Custom Length: ${item.customLength}` : ''
          }${item.notes ? `, Notes: ${item.notes}` : ''}`,
          images: [item.image],
        },
        unit_amount: item.price * 100,
      },
      quantity: item.quantity,
    }))

    // Build checkout session options
    const sessionOptions: Stripe.Checkout.SessionCreateParams = {
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: `${request.headers.get('origin')}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${request.headers.get('origin')}/cart`,
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
        orderItems: JSON.stringify(
          items.map((item: any) => ({
            id: item.id,
            name: item.name,
            size: item.size,
            color: item.color,
            quantity: item.quantity,
            customLength: item.customLength,
            notes: item.notes,
          }))
        ),
        discountCodeUsed: discountCode || '',
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
    
    // If a specific discount code is provided, try to apply it
    if (discountCode) {
      try {
        // Find the promotion code
        const promotionCodes = await stripe.promotionCodes.list({
          code: discountCode,
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
  } catch (error: any) {
    console.error('Stripe checkout error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
