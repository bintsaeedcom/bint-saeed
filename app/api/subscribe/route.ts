import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, source } = body
    
    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 })
    }

    const forwardedFor = request.headers.get('x-forwarded-for')
    const ip = forwardedFor ? forwardedFor.split(',')[0].trim() : 'Unknown'
    
    const timestamp = new Date().toLocaleString('en-AE', { timeZone: 'Asia/Dubai' })

    // Send to Slack (fire and forget - don't wait)
    const slackWebhookUrl = process.env.SLACK_WEBHOOK_URL
    if (slackWebhookUrl) {
      fetch(slackWebhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text: `🎁 New Subscriber (Coming Soon)\n*Email:* ${email}\n*IP:* ${ip}\n*Time:* ${timestamp}`,
        }),
      }).catch(() => {})
    }

    // Send to Mailerlite (fire and forget - don't wait)
    const mailerliteApiKey = process.env.MAILERLITE_API_KEY
    const mailerliteGroupId = process.env.MAILERLITE_GROUP_ID

    if (mailerliteApiKey && mailerliteGroupId) {
      fetch('https://connect.mailerlite.com/api/subscribers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${mailerliteApiKey}`,
        },
        body: JSON.stringify({
          email,
          fields: { source: source || 'coming-soon' },
          groups: [mailerliteGroupId],
        }),
      }).catch(() => {})
    }

    // Return immediately - don't wait for external services
    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error('Subscribe error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
