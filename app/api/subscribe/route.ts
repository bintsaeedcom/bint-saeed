import { NextRequest, NextResponse } from 'next/server'
import { validateSubscriberEmail } from '@/lib/validateSubscriberEmail'
import { validateOptionalPhone } from '@/lib/validateOptionalPhone'
import { rateLimitResponse } from '@/lib/security/rateLimit'

const MAILERLITE_API = 'https://connect.mailerlite.com/api/subscribers'

async function addToMailerLite(
  apiKey: string,
  email: string,
  options: { name?: string; lastName?: string; phone?: string; groupId?: string }
): Promise<{ success: boolean; status: number; error: string }> {
  const { name, lastName, phone, groupId } = options

  // Build fields - MailerLite expects 'name' and 'last_name'; 'phone' if configured in your audience
  const fields: Record<string, string> = {}
  if (name?.trim()) fields.name = name.trim()
  if (lastName?.trim()) fields.last_name = lastName.trim()
  // Requires a matching subscriber field in MailerLite (often named "phone"); omit from dashboard if unused.
  if (phone?.trim()) fields.phone = phone.trim()

  // Build body - groups optional (subscriber goes to main audience if omitted)
  const body: Record<string, unknown> = {
    email: email.trim().toLowerCase(),
    status: 'active',
    resubscribe: true, // Allow re-subscribing if previously unsubscribed
  }
  if (Object.keys(fields).length > 0) body.fields = fields
  if (groupId?.trim()) body.groups = [groupId.trim()]

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${apiKey.trim()}`,
    'Accept': 'application/json',
  }

  const res = await fetch(MAILERLITE_API, {
    method: 'POST',
    headers,
    body: JSON.stringify(body),
  })
  const text = await res.text()

  if (res.ok) {
    return { success: true, status: res.status, error: '' }
  }
  return { success: false, status: res.status, error: text }
}

export async function POST(request: NextRequest) {
  const rl = await rateLimitResponse(request, 'subscribe', 25, 3600)
  if (rl) return rl

  try {
    const body = await request.json()
    const { email, firstName, lastName, name, source, phone: phoneRaw, notifyChannel } = body

    if (typeof email !== 'string') {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 })
    }

    const emailCheck = validateSubscriberEmail(email)
    if (!emailCheck.valid) {
      return NextResponse.json({ error: emailCheck.message }, { status: 400 })
    }
    const normalizedEmail = emailCheck.email

    const phoneCheck = validateOptionalPhone(phoneRaw)
    if (!phoneCheck.ok) {
      return NextResponse.json({ error: phoneCheck.message }, { status: 400 })
    }
    const normalizedPhone = phoneCheck.phone

    const forwardedFor = request.headers.get('x-forwarded-for')
    const ip = forwardedFor ? forwardedFor.split(',')[0].trim() : 'Unknown'
    const timestamp = new Date().toLocaleString('en-AE', { timeZone: 'Asia/Dubai' })

    let mailerliteResult = { success: false, error: '', status: 0 }
    let slackResult = { success: false }

    const mailerliteApiKey = process.env.MAILERLITE_API_KEY?.trim()
    const mailerliteGroupId = process.env.MAILERLITE_GROUP_ID?.trim() || undefined

    // Map name: SubscribeForm sends firstName/lastName, EmailPopup sends name
    const subscriberName = firstName ?? name
    const subscriberLastName = lastName

    if (mailerliteApiKey) {
      try {
        // Try with group first if configured
        mailerliteResult = await addToMailerLite(mailerliteApiKey, normalizedEmail, {
          name: subscriberName,
          lastName: subscriberLastName,
          phone: normalizedPhone,
          groupId: mailerliteGroupId,
        })

        // If failed and we used a group, retry without group (adds to main audience)
        if (!mailerliteResult.success && mailerliteGroupId && mailerliteResult.error.toLowerCase().includes('group')) {
          const retry = await addToMailerLite(mailerliteApiKey, normalizedEmail, {
            name: subscriberName,
            lastName: subscriberLastName,
            phone: normalizedPhone,
          })
          if (retry.success) {
            mailerliteResult = retry
          }
        }

        if (mailerliteResult.success) {
          console.log('✅ MAILERLITE: Subscriber added')
        } else {
          console.error('❌ MAILERLITE:', mailerliteResult.status, mailerliteResult.error)
        }
      } catch (e: unknown) {
        const err = e instanceof Error ? e.message : String(e)
        mailerliteResult = { success: false, error: err, status: 0 }
        console.error('Mailerlite exception:', err)
      }
    } else {
      console.log('❌ MAILERLITE: API key not configured')
    }

    // Send to Slack with Mailerlite status. Prefer a dedicated subscribers channel so email
    // signups don't get buried under visitor-traffic pings; fall back to the main webhook.
    const slackWebhookUrl =
      process.env.SLACK_SUBSCRIBERS_WEBHOOK_URL?.trim() || process.env.SLACK_WEBHOOK_URL
    if (slackWebhookUrl) {
      try {
        const errMsg = (mailerliteResult.error || 'Not configured').slice(0, 150)
        const mailerliteStatus = mailerliteResult.success 
          ? '✅ Added to MailerLite' 
          : `❌ MailerLite: ${errMsg}`

        const slackFields: { type: 'mrkdwn'; text: string }[] = [
          { type: 'mrkdwn', text: `*Email:*\n${normalizedEmail}` },
        ]
        if (normalizedPhone) {
          slackFields.push({ type: 'mrkdwn', text: `*Phone:*\n${normalizedPhone}` })
        }
        if (notifyChannel === 'email' || notifyChannel === 'whatsapp') {
          slackFields.push({
            type: 'mrkdwn',
            text: `*Notify via:*\n${notifyChannel === 'whatsapp' ? 'WhatsApp' : 'Email'}`,
          })
        }
        if (source) {
          slackFields.push({ type: 'mrkdwn', text: `*Source:*\n${String(source)}` })
        }
        slackFields.push(
          { type: 'mrkdwn', text: `*Time:*\n${timestamp}` },
          { type: 'mrkdwn', text: `*IP:*\n${ip}` },
          { type: 'mrkdwn', text: `*Mailerlite:*\n${mailerliteStatus}` },
        )

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
                fields: slackFields
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
        mailerliteConfigured: !!mailerliteApiKey,
        mailerliteStatus: mailerliteResult.status,
      }
    })
  } catch (error: any) {
    console.error('Subscribe error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
