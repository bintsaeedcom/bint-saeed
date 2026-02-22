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

    let mailerliteResult = { success: false, error: '', status: 0 }
    let slackResult = { success: false }

    // Send to Mailerlite FIRST (priority)
    const mailerliteApiKey = process.env.MAILERLITE_API_KEY
    const mailerliteGroupId = process.env.MAILERLITE_GROUP_ID

    console.log('=== MAILERLITE DEBUG ===')
    console.log('API Key exists:', !!mailerliteApiKey)
    console.log('API Key length:', mailerliteApiKey?.length || 0)
    console.log('API Key starts with:', mailerliteApiKey?.substring(0, 10) || 'N/A')
    console.log('Group ID:', mailerliteGroupId)

    if (mailerliteApiKey && mailerliteGroupId) {
      try {
        // Try without groups first (simpler request)
        const mailerliteBody = {
          email: email,
          groups: [mailerliteGroupId],
          status: 'active',
        }
        
        console.log('Mailerlite request body:', JSON.stringify(mailerliteBody))
        
        const mailerliteRes = await fetch('https://connect.mailerlite.com/api/subscribers', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${mailerliteApiKey}`,
            'Accept': 'application/json',
          },
          body: JSON.stringify(mailerliteBody),
        })
        
        const responseText = await mailerliteRes.text()
        console.log('Mailerlite response status:', mailerliteRes.status)
        console.log('Mailerlite response body:', responseText)
        
        if (mailerliteRes.ok) {
          mailerliteResult = { success: true, error: '', status: mailerliteRes.status }
          console.log('✅ MAILERLITE SUCCESS!')
        } else {
          mailerliteResult = { success: false, error: responseText, status: mailerliteRes.status }
          console.error('❌ MAILERLITE FAILED:', mailerliteRes.status, responseText)
          
          // If groups failed, try without groups
          if (responseText.includes('groups')) {
            console.log('Retrying without groups...')
            const retryBody = { email: email, status: 'active' }
            const retryRes = await fetch('https://connect.mailerlite.com/api/subscribers', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${mailerliteApiKey}`,
                'Accept': 'application/json',
              },
              body: JSON.stringify(retryBody),
            })
            const retryText = await retryRes.text()
            console.log('Retry response:', retryRes.status, retryText)
            if (retryRes.ok) {
              mailerliteResult = { success: true, error: '', status: retryRes.status }
            }
          }
        }
      } catch (e: any) {
        console.error('Mailerlite fetch exception:', e.message)
        mailerliteResult = { success: false, error: e.message, status: 0 }
      }
    } else {
      console.log('❌ MAILERLITE NOT CONFIGURED')
      console.log('Missing:', !mailerliteApiKey ? 'API_KEY' : '', !mailerliteGroupId ? 'GROUP_ID' : '')
    }

    // Send to Slack with Mailerlite status
    const slackWebhookUrl = process.env.SLACK_WEBHOOK_URL
    if (slackWebhookUrl) {
      try {
        const mailerliteStatus = mailerliteResult.success 
          ? '✅ Added to Mailerlite' 
          : `❌ Mailerlite failed: ${mailerliteResult.error || 'Not configured'}`
        
        await fetch(slackWebhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            blocks: [
              {
                type: 'header',
                text: { type: 'plain_text', text: '🎁 New Subscriber!', emoji: true }
              },
              {
                type: 'section',
                fields: [
                  { type: 'mrkdwn', text: `*Email:*\n${email}` },
                  { type: 'mrkdwn', text: `*Time:*\n${timestamp}` },
                  { type: 'mrkdwn', text: `*IP:*\n${ip}` },
                  { type: 'mrkdwn', text: `*Mailerlite:*\n${mailerliteStatus}` },
                ]
              }
            ]
          }),
        })
        slackResult = { success: true }
      } catch (e) {
        console.error('Slack error:', e)
      }
    }

    console.log('=== SUBSCRIBE RESULT ===')
    console.log('Mailerlite:', mailerliteResult)
    console.log('Slack:', slackResult)

    return NextResponse.json({ 
      success: true,
      mailerlite: mailerliteResult.success,
      debug: {
        mailerliteConfigured: !!(mailerliteApiKey && mailerliteGroupId),
        mailerliteStatus: mailerliteResult.status,
      }
    })
  } catch (error: any) {
    console.error('Subscribe error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
