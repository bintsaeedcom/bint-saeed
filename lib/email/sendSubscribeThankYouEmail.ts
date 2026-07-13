import { Resend } from 'resend'
import { OFFICIAL_EMAILS } from '@/lib/brand/officialEmails'
import {
  EMAIL_BRAND,
  emailCtaButtonHtml,
  emailDocumentHtml,
  escapeEmailHtml,
} from '@/lib/email/brandEmailChrome'

const FONT_SERIF = "Georgia,'Times New Roman',serif"
const FONT_SANS = "'Montserrat',Helvetica,Arial,sans-serif"

function siteOrigin(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim()
  if (explicit) return explicit.replace(/\/$/, '')
  const vercel = process.env.VERCEL_URL?.trim()
  if (vercel) return `https://${vercel.replace(/\/$/, '')}`
  return 'https://www.bintsaeed.com'
}

function firstNameFrom(name?: string): string | undefined {
  const part = name?.trim().split(/\s+/)[0]
  return part || undefined
}

function subscribeThankYouHtml(opts: { name?: string }): string {
  const origin = siteOrigin()
  const { body, muted, accent, stone, border, ink, signature } = EMAIL_BRAND
  const first = firstNameFrom(opts.name)
  const greeting = first ? `Dear ${escapeEmailHtml(first)},` : 'Dear guest,'

  const bodyHtml = `
              <p style="margin:0 0 14px;color:${body};font-family:${FONT_SANS};">${greeting}</p>
              <p style="margin:0 0 18px;color:${body};font-family:${FONT_SANS};">
                Thank you for joining Bint Saeed. You are now among the first to hear when a new chapter opens —
                collections, private moments, and notes from the house in Abu Dhabi.
              </p>
              <p style="margin:0 0 28px;color:${body};font-family:${FONT_SANS};">
                We write rarely, and only when there is something worth sharing.
              </p>

              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin:0 0 28px;">
                <tr>
                  <td style="padding:22px 20px;background:${stone};border:1px solid ${border};text-align:center;">
                    <p style="margin:0 0 8px;font-size:10px;letter-spacing:0.28em;text-transform:uppercase;color:${accent};font-family:${FONT_SANS};">
                      Private access
                    </p>
                    <p style="margin:0;font-size:16px;line-height:1.55;color:${ink};font-family:${FONT_SERIF};">
                      Early looks · Atelier notes · Invitation-only moments
                    </p>
                  </td>
                </tr>
              </table>

              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td align="center">
                    ${emailCtaButtonHtml(`${origin}/shop`, 'Explore the house')}
                  </td>
                </tr>
              </table>

              <p style="margin:28px 0 0;font-size:12px;line-height:1.7;color:${muted};text-align:center;font-family:${FONT_SANS};">
                With warm regards,<br/>
                <span style="color:${signature};">The Bint Saeed Atelier</span>
              </p>
              <p style="margin:18px 0 0;font-size:11px;line-height:1.7;color:${muted};text-align:center;font-family:${FONT_SANS};">
                Questions? Write to
                <a href="mailto:${OFFICIAL_EMAILS.hello}" style="color:${signature};text-decoration:none;">${OFFICIAL_EMAILS.hello}</a>
              </p>`

  return emailDocumentHtml({
    origin,
    title: 'Welcome to Bint Saeed',
    preheader: 'Thank you for subscribing — you are first to hear from the house.',
    eyebrow: 'Abu Dhabi',
    heading: 'Welcome to the house',
    subheading: 'Subscription confirmed',
    bodyHtml,
    noteHtml: 'You may unsubscribe at any time from links in future messages.',
    footerHtml: undefined,
  })
}

export type SendSubscribeThankYouResult =
  | { ok: true }
  | { ok: false; skipped?: boolean; error: string }

/**
 * Branded welcome email after newsletter signup. Soft-fail — subscribe API
 * must still succeed when MailerLite works even if Resend is down.
 */
export async function sendSubscribeThankYouEmail(params: {
  email: string
  name?: string
}): Promise<SendSubscribeThankYouResult> {
  const email = params.email.trim().toLowerCase()
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, skipped: true, error: 'No valid subscriber email.' }
  }

  const apiKey = process.env.RESEND_API_KEY?.trim()
  const from =
    process.env.RESEND_FROM_EMAIL?.trim() || 'Bint Saeed <onboarding@resend.dev>'

  if (!apiKey) {
    if (process.env.NODE_ENV === 'development') {
      console.log('[bint-saeed subscribe] RESEND_API_KEY missing — skipping thank-you email for', email)
    }
    return { ok: false, skipped: true, error: 'Transactional email is not configured.' }
  }

  try {
    const resend = new Resend(apiKey)
    const { error } = await resend.emails.send({
      from,
      to: email,
      replyTo: OFFICIAL_EMAILS.hello,
      subject: 'Welcome to Bint Saeed — thank you for joining us',
      html: subscribeThankYouHtml({ name: params.name }),
    })
    if (error) {
      console.error('Subscribe thank-you email error:', error)
      return { ok: false, error: 'Resend rejected the message.' }
    }
    return { ok: true }
  } catch (e) {
    console.error('Subscribe thank-you email exception:', e)
    return { ok: false, error: 'Failed to send thank-you email.' }
  }
}
