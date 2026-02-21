import { NextRequest, NextResponse } from 'next/server'

async function fetchWithTimeout(url: string, options: RequestInit, timeout = 5000) {
  const controller = new AbortController()
  const id = setTimeout(() => controller.abort(), timeout)
  try {
    const response = await fetch(url, { ...options, signal: controller.signal })
    clearTimeout(id)
    return response
  } catch (error) {
    clearTimeout(id)
    throw error
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, name, discountCode, source } = body
    
    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 })
    }
    
    const subscriberName = name || `${firstName || ''} ${lastName || ''}`.trim()

    const forwardedFor = request.headers.get('x-forwarded-for')
    const ip = forwardedFor ? forwardedFor.split(',')[0].trim() : 'Unknown'
    
    let location = { city: 'Unknown', country: 'Unknown' }
    try {
      const geoRes = await fetchWithTimeout(`https://ipapi.co/${ip}/json/`, {}, 3000)
      if (geoRes.ok) {
        const geoData = await geoRes.json()
        location = {
          city: geoData.city || 'Unknown',
          country: geoData.country_name || 'Unknown',
        }
      }
    } catch {
      // Continue without location data
    }

    const timestamp = new Date().toLocaleString('en-AE', { timeZone: 'Asia/Dubai' })

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
              text: source === 'popup' || source === 'coming-soon' ? '🎁 New Subscriber (Coming Soon Page)' : '✨ New Newsletter Subscriber',
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
              {
                type: 'mrkdwn',
                text: `*Location:*\n🌍 ${location.city}, ${location.country}`,
              },
              {
                type: 'mrkdwn',
                text: `*IP Address:*\n🔒 ${ip}`,
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
                text: `Subscribed at ${timestamp} (Dubai time)`,
              },
            ],
          },
        ],
      }

      await fetchWithTimeout(slackWebhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(slackMessage),
      }, 5000).catch(() => {})
    }

    const mailerliteApiKey = process.env.MAILERLITE_API_KEY
    const mailerliteGroupId = process.env.MAILERLITE_GROUP_ID

    if (mailerliteApiKey && mailerliteGroupId) {
      try {
        await fetchWithTimeout('https://connect.mailerlite.com/api/subscribers', {
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
        }, 5000)
      } catch {
        // Continue even if Mailerlite fails
      }
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
