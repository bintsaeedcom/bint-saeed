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
  if (!part) return undefined
  // Title-case Latin names; leave scripts with their own casing (Arabic, etc.) intact.
  if (/^[A-Za-zÀ-ÖØ-öø-ÿ'-]+$/.test(part)) {
    return part.charAt(0).toUpperCase() + part.slice(1).toLowerCase()
  }
  return part
}

function subscribeThankYouHtml(opts: {
  name?: string
  firstPurchaseCode: string
}): string {
  const origin = siteOrigin()
  const { body, muted, accent, stone, border, ink, signature } = EMAIL_BRAND
  const first = firstNameFrom(opts.name)
  const safeFirst = first ? escapeEmailHtml(first) : ''
  const greeting = first ? `Dear ${safeFirst},` : 'Dear Guest,'
  const code = escapeEmailHtml(opts.firstPurchaseCode)

  const accessItems = [
    '15% discount on your first order',
    'Early looks',
    'Styling tips',
    'Background stories',
    'Invitations to member-only events',
  ]

  const accessListHtml = accessItems
    .map(
      (item) =>
        `<li style="margin:0 0 8px;padding:0;color:${ink};font-family:${FONT_SERIF};font-size:15px;line-height:1.45;">${escapeEmailHtml(item)}</li>`,
    )
    .join('')

  const bodyHtml = `
              <p style="margin:0 0 14px;color:${body};font-family:${FONT_SANS};">${greeting}</p>
              <p style="margin:0 0 14px;color:${body};font-family:${FONT_SANS};">
                Thank you for joining the Bint Saeed Community.
              </p>
              <p style="margin:0 0 18px;color:${body};font-family:${FONT_SANS};">
                You now hold a quieter place within the house, kept close to what we create in Abu Dhabi.
              </p>
              <p style="margin:0 0 24px;color:${body};font-family:${FONT_SANS};">
                We write rarely, and only when there is something worth sharing.
              </p>

              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin:0 0 28px;">
                <tr>
                  <td style="padding:22px 20px;background:${stone};border:1px solid ${border};text-align:center;">
                    <p style="margin:0 0 14px;font-size:10px;letter-spacing:0.28em;text-transform:uppercase;color:${accent};font-family:${FONT_SANS};">
                      Private access
                    </p>
                    <ul style="margin:0;padding:0 0 0 18px;text-align:left;list-style:disc;">
                      ${accessListHtml}
                    </ul>
                    <p style="margin:16px 0 0;font-size:12px;line-height:1.65;color:${muted};font-family:${FONT_SANS};">
                      Your first-purchase code is <strong style="font-weight:600;color:${ink};letter-spacing:0.08em;">${code}</strong>.
                      Use it at checkout on eligible full-price pieces.
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
                <span style="color:${signature};font-family:${FONT_SERIF};font-size:15px;">Bint Saeed</span>
              </p>
              <p style="margin:18px 0 0;font-size:11px;line-height:1.7;color:${muted};text-align:center;font-family:${FONT_SANS};">
                Questions? Write to
                <a href="mailto:${OFFICIAL_EMAILS.hello}" style="color:${signature};text-decoration:none;">${OFFICIAL_EMAILS.hello}</a>
              </p>`

  return emailDocumentHtml({
    origin,
    title: 'Welcome to the house',
    preheader: 'Thank you for joining the Bint Saeed Community.',
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
  firstPurchaseCode?: string
  privilegeExpiresLabel?: string
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

  const firstPurchaseCode = (params.firstPurchaseCode || 'HOUSE15').trim().toUpperCase()
  const first = firstNameFrom(params.name)
  const subject = first ? `Welcome to Bint Saeed, ${first}` : 'Welcome to Bint Saeed'

  try {
    const resend = new Resend(apiKey)
    const { error } = await resend.emails.send({
      from,
      to: email,
      replyTo: OFFICIAL_EMAILS.hello,
      subject,
      html: subscribeThankYouHtml({
        name: params.name,
        firstPurchaseCode,
      }),
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
