import { NextRequest, NextResponse } from 'next/server'

// In production, store these in a database (e.g., Supabase, MongoDB, or even a simple JSON file)
// For now, we'll use Stripe's coupon system which is the most reliable

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, name, discountCode, source } = body
    
    const subscriberName = name || `${firstName || ''} ${lastName || ''}`.trim()

    // Send to Slack with discount code info
    const slackWebhookUrl = process.env.SLACK_WEBHOOK_URL
    if (slackWebhookUrl) {
      const slackMessage = {
        text: 'New Newsletter Subscriber',
        blocks: [
          {
            type: 'header',
            text: {
              type: 'plain_text',
              text: source === 'popup' ? '🎁 New Subscriber (10% Discount)' : '✨ New Newsletter Subscriber',
              emoji: true,
            },
          },
          {
            type: 'section',
            fields: [
              {
                type: 'mrkdwn',
                text: `*Name:*\n${subscriberName || 'Not provided'}`,
              },
              {
                type: 'mrkdwn',
                text: `*Email:*\n${email}`,
              },
            ],
          },
          ...(discountCode ? [{
            type: 'section',
            fields: [
              {
                type: 'mrkdwn',
                text: `*Discount Code:*\n\`${discountCode}\``,
              },
              {
                type: 'mrkdwn',
                text: `*Source:*\n${source || 'footer'}`,
              },
            ],
          }] : []),
          {
            type: 'context',
            elements: [
              {
                type: 'mrkdwn',
                text: `Subscribed at ${new Date().toISOString()}`,
              },
            ],
          },
        ],
      }

      await fetch(slackWebhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(slackMessage),
      })
    }

    // Send to Mailerlite with discount code as custom field
    const mailerliteApiKey = process.env.MAILERLITE_API_KEY
    const mailerliteGroupId = process.env.MAILERLITE_GROUP_ID

    if (mailerliteApiKey && mailerliteGroupId) {
      await fetch('https://connect.mailerlite.com/api/subscribers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${mailerliteApiKey}`,
        },
        body: JSON.stringify({
          email,
          fields: {
            name: subscriberName,
            discount_code: discountCode || '',
            source: source || 'footer',
          },
          groups: [mailerliteGroupId],
        }),
      })
    }

    // If using Stripe coupons, you can create a promotion code here
    // This requires Stripe API key to be configured
    const stripeSecretKey = process.env.STRIPE_SECRET_KEY
    if (stripeSecretKey && discountCode) {
      try {
        // Create a promotion code in Stripe (requires a coupon to exist)
        // First, ensure you have a 10% coupon created in Stripe Dashboard with ID 'WELCOME10'
        const stripe = require('stripe')(stripeSecretKey)
        
        await stripe.promotionCodes.create({
          coupon: 'WELCOME10', // This coupon must exist in your Stripe Dashboard
          code: discountCode,
          max_redemptions: 1,
          metadata: {
            email: email,
            name: subscriberName,
          },
        })
      } catch (stripeError) {
        // If Stripe fails (e.g., coupon doesn't exist yet), log but don't fail the request
        console.log('Stripe promotion code creation skipped:', stripeError)
      }
    }

    return NextResponse.json({ 
      success: true,
      discountCode: discountCode || null,
    })
  } catch (error: any) {
    console.error('Subscribe error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
