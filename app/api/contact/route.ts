import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, subject, message } = body
    
    // Get IP address from headers
    const forwardedFor = request.headers.get('x-forwarded-for')
    const ip = forwardedFor ? forwardedFor.split(',')[0].trim() : 'Unknown'
    
    // Get location from IP
    let location = { city: 'Unknown', country: 'Unknown' }
    try {
      const geoRes = await fetch(`https://ipapi.co/${ip}/json/`)
      const geoData = await geoRes.json()
      location = {
        city: geoData.city || 'Unknown',
        country: geoData.country_name || 'Unknown',
      }
    } catch (e) {
      console.log('Could not get location from IP')
    }

    const timestamp = new Date().toLocaleString('en-AE', { timeZone: 'Asia/Dubai' })

    // Send to Slack
    const slackWebhookUrl = process.env.SLACK_WEBHOOK_URL
    if (slackWebhookUrl) {
      const slackMessage = {
        blocks: [
          {
            type: 'header',
            text: {
              type: 'plain_text',
              text: '📬 New Contact Form Submission',
              emoji: true,
            },
          },
          {
            type: 'section',
            fields: [
              { type: 'mrkdwn', text: `*Name:*\n${name}` },
              { type: 'mrkdwn', text: `*Email:*\n${email}` },
              { type: 'mrkdwn', text: `*Phone:*\n${phone || 'Not provided'}` },
              { type: 'mrkdwn', text: `*Subject:*\n${subject || 'General Inquiry'}` },
            ],
          },
          {
            type: 'section',
            text: { type: 'mrkdwn', text: `*Message:*\n${message}` },
          },
          {
            type: 'divider',
          },
          {
            type: 'section',
            fields: [
              { type: 'mrkdwn', text: `*Location:*\n🌍 ${location.city}, ${location.country}` },
              { type: 'mrkdwn', text: `*IP Address:*\n🔒 ${ip}` },
              { type: 'mrkdwn', text: `*Time:*\n🕐 ${timestamp}` },
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

    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error('Contact form error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
