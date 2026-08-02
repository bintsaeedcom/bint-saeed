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

function housePrivilegeHtml(opts: {
  name?: string
  privilegeCode: string
  expiresLabel: string
}): string {
  const origin = siteOrigin()
  const { body, muted, accent, stone, border, ink, signature } = EMAIL_BRAND
  const first = firstNameFrom(opts.name)
  const greeting = first ? `Dear ${escapeEmailHtml(first)},` : 'Dear Guest,'
  const code = escapeEmailHtml(opts.privilegeCode)
  const expires = escapeEmailHtml(opts.expiresLabel)

  const bodyHtml = `
              <p style="margin:0 0 14px;color:${body};font-family:${FONT_SANS};">${greeting}</p>
              <p style="margin:0 0 18px;color:${body};font-family:${FONT_SANS};">
                Your first completed order has unlocked the House Privilege. A personal code is now active
                for your Bint Saeed account, granting 10% off eligible full-price purchases until ${expires}.
              </p>
              <p style="margin:0 0 18px;color:${body};font-family:${FONT_SANS};">
                This privilege is personal and non-transferable. Use it at checkout with the same email address
                you registered with the house.
              </p>

              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin:0 0 28px;">
                <tr>
                  <td style="padding:22px 20px;background:${stone};border:1px solid ${border};text-align:center;">
                    <p style="margin:0 0 8px;font-size:10px;letter-spacing:0.28em;text-transform:uppercase;color:${accent};font-family:${FONT_SANS};">
                      Your House Privilege
                    </p>
                    <p style="margin:0;font-size:22px;letter-spacing:0.12em;color:${ink};font-family:${FONT_SERIF};">
                      ${code}
                    </p>
                    <p style="margin:12px 0 0;font-size:12px;line-height:1.6;color:${muted};font-family:${FONT_SANS};">
                      10% off · valid until ${expires}
                    </p>
                  </td>
                </tr>
              </table>

              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td align="center">
                    ${emailCtaButtonHtml(`${origin}/shop`, 'Shop Now!')}
                  </td>
                </tr>
              </table>

              <p style="margin:28px 0 0;font-size:12px;line-height:1.7;color:${muted};text-align:center;font-family:${FONT_SANS};">
                With warm regards,<br/>
                <span style="color:${signature};">Bint Saeed</span>
              </p>
              <p style="margin:18px 0 0;font-size:11px;line-height:1.7;color:${muted};text-align:center;font-family:${FONT_SANS};">
                Questions? Write to
                <a href="mailto:${OFFICIAL_EMAILS.hello}" style="color:${signature};text-decoration:none;">${OFFICIAL_EMAILS.hello}</a>
              </p>`

  return emailDocumentHtml({
    origin,
    title: 'Your House Privilege',
    preheader: `Your personal 10% code ${opts.privilegeCode} is ready — valid until ${opts.expiresLabel}.`,
    eyebrow: 'The House Privilege',
    heading: 'Your place within the house',
    subheading: 'Personal code activated',
    bodyHtml,
    noteHtml:
      'Privileges cannot be combined with other offers. Exclusions may apply. See Terms & Conditions on the site.',
    footerHtml: undefined,
  })
}

export type SendHousePrivilegeResult =
  | { ok: true }
  | { ok: false; skipped?: boolean; error: string }

export async function sendHousePrivilegeEmail(params: {
  email: string
  name?: string
  privilegeCode: string
  expiresLabel: string
}): Promise<SendHousePrivilegeResult> {
  const email = params.email.trim().toLowerCase()
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, skipped: true, error: 'No valid member email.' }
  }
  if (!params.privilegeCode.trim()) {
    return { ok: false, error: 'Missing privilege code.' }
  }

  const apiKey = process.env.RESEND_API_KEY?.trim()
  const from =
    process.env.RESEND_FROM_EMAIL?.trim() || 'Bint Saeed <onboarding@resend.dev>'

  if (!apiKey) {
    if (process.env.NODE_ENV === 'development') {
      console.log('[bint-saeed house] RESEND_API_KEY missing — skipping privilege email for', email)
    }
    return { ok: false, skipped: true, error: 'Transactional email is not configured.' }
  }

  try {
    const resend = new Resend(apiKey)
    const { error } = await resend.emails.send({
      from,
      to: email,
      replyTo: OFFICIAL_EMAILS.hello,
      subject: 'Your House Privilege — personal 10% code',
      html: housePrivilegeHtml({
        name: params.name,
        privilegeCode: params.privilegeCode,
        expiresLabel: params.expiresLabel,
      }),
    })
    if (error) {
      console.error('House privilege email error:', error)
      return { ok: false, error: 'Resend rejected the message.' }
    }
    return { ok: true }
  } catch (e) {
    console.error('House privilege email exception:', e)
    return { ok: false, error: 'Failed to send privilege email.' }
  }
}
