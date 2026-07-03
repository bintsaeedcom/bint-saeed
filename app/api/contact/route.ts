import { NextRequest, NextResponse } from 'next/server'
import { isSafePublicIpForLookup } from '@/lib/security/isSafePublicIp'
import { rateLimitResponse } from '@/lib/security/rateLimit'
import { sanitizeUserText } from '@/lib/security/sanitizeUserText'
import { validateSubscriberEmail } from '@/lib/validateSubscriberEmail'

const MAX_NAME = 120
const MAX_EMAIL = 254
const MAX_PHONE = 40
const MAX_SUBJECT = 200
const MAX_MESSAGE = 8000

export async function POST(request: NextRequest) {
  const rl = await rateLimitResponse(request, 'contact', 12, 3600)
  if (rl) return rl

  try {
    const body = await request.json()
    const name = sanitizeUserText(body.name, MAX_NAME)
    const rawEmail = sanitizeUserText(body.email, MAX_EMAIL)
    const phone = sanitizeUserText(body.phone, MAX_PHONE)
    const subject = sanitizeUserText(body.subject, MAX_SUBJECT)
    const message = sanitizeUserText(body.message, MAX_MESSAGE)

    const emailCheck = validateSubscriberEmail(rawEmail)
    if (!emailCheck.valid) {
      return NextResponse.json({ error: emailCheck.message }, { status: 400 })
    }
    const email = emailCheck.email
    if (!message) {
      return NextResponse.json({ error: 'Message is required.' }, { status: 400 })
    }

    const forwardedFor = request.headers.get('x-forwarded-for')
    const rawIp = forwardedFor ? forwardedFor.split(',')[0].trim() : 'Unknown'
    const ip = sanitizeUserText(rawIp, 64)

    let location = { city: 'Unknown', country: 'Unknown' }
    if (isSafePublicIpForLookup(ip)) {
      try {
        const geoRes = await fetch(`https://ipapi.co/${encodeURIComponent(ip)}/json/`, {
          next: { revalidate: 0 },
        })
        const geoData = (await geoRes.json()) as { city?: string; country_name?: string; error?: boolean }
        if (!geoData.error) {
          location = {
            city: sanitizeUserText(geoData.city, 80) || 'Unknown',
            country: sanitizeUserText(geoData.country_name, 80) || 'Unknown',
          }
        }
      } catch {
        /* ignore geo failures */
      }
    }

    const timestamp = new Date().toLocaleString('en-AE', { timeZone: 'Asia/Dubai' })

    const slackWebhookUrl =
      process.env.SLACK_CONTACT_WEBHOOK_URL?.trim() || process.env.SLACK_WEBHOOK_URL
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
              { type: 'mrkdwn', text: `*Name:*\n${name || '—'}` },
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
  } catch {
    return NextResponse.json({ error: 'Could not send message. Please try again.' }, { status: 500 })
  }
}
