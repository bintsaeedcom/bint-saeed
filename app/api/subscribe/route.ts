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

    const promises: Promise<any>[] = []

    // Send to Slack
    const slackWebhookUrl = process.env.SLACK_WEBHOOK_URL
    if (slackWebhookUrl) {
      promises.push(
        fetch(slackWebhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            text: `🎁 New Subscriber (Coming Soon)\n*Email:* ${email}\n*IP:* ${ip}\n*Time:* ${timestamp}`,
          }),
        }).catch(e => console.error('Slack error:', e))
      )
    }

    // Send to Mailerlite
    const mailerliteApiKey = process.env.MAILERLITE_API_KEY
    const mailerliteGroupId = process.env.MAILERLITE_GROUP_ID

    if (mailerliteApiKey && mailerliteGroupId) {
      promises.push(
        fetch('https://connect.mailerlite.com/api/subscribers', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${mailerliteApiKey}`,
          },
          body: JSON.stringify({
            email: email,
            groups: [mailerliteGroupId],
          }),
        }).then(async res => {
          if (!res.ok) {
            const text = await res.text()
            console.error('Mailerlite error:', res.status, text)
          }
        }).catch(e => console.error('Mailerlite fetch error:', e))
      )
    } else {
      console.log('Mailerlite not configured - API key or Group ID missing')
    }

    // Wait for all to complete (but don't fail if they fail)
    await Promise.allSettled(promises)

    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error('Subscribe error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
