import { Resend } from 'resend'
import type { StoredOrder } from '@/lib/orders/types'
import { formatAmountForCurrency, normalizeCurrencyCode } from '@/lib/pricing'
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

function money(amount: number, currency: string): string {
  return formatAmountForCurrency(amount, normalizeCurrencyCode(currency))
}

function formatAddress(address?: Record<string, unknown>): string {
  if (!address) return ''
  const parts = [
    address.name,
    address.line1,
    address.line2,
    [address.postal_code, address.city].filter(Boolean).join(' '),
    address.state,
    address.country,
  ]
    .map((p) => (typeof p === 'string' ? p.trim() : ''))
    .filter(Boolean)
  return parts.map(escapeEmailHtml).join('<br/>')
}

function orderConfirmationHtml(order: StoredOrder): string {
  const origin = siteOrigin()
  const { ink, body, muted, accent, border, stone, signature } = EMAIL_BRAND
  const greeting = order.customerName
    ? `Dear ${escapeEmailHtml(order.customerName.split(' ')[0])},`
    : 'Dear guest,'

  const itemRows = order.lines
    .map((line) => {
      const lineTotal = money(line.unitPrice * line.quantity, line.currency || order.currency)
      const detail = line.description ? escapeEmailHtml(line.description) : ''
      return `
        <tr>
          <td style="padding:16px 0;border-bottom:1px solid ${border};vertical-align:top;">
            <p style="margin:0;font-size:15px;line-height:1.35;color:${ink};font-family:${FONT_SERIF};">${escapeEmailHtml(line.name)}</p>
            ${detail ? `<p style="margin:6px 0 0;font-size:12px;line-height:1.55;color:${muted};font-family:${FONT_SANS};">${detail}</p>` : ''}
            <p style="margin:6px 0 0;font-size:11px;letter-spacing:0.12em;text-transform:uppercase;color:${muted};font-family:${FONT_SANS};">Qty ${line.quantity}</p>
          </td>
          <td style="padding:16px 0;border-bottom:1px solid ${border};text-align:right;vertical-align:top;white-space:nowrap;padding-left:16px;">
            <p style="margin:0;font-size:14px;color:${ink};font-family:${FONT_SANS};">${lineTotal}</p>
          </td>
        </tr>`
    })
    .join('')

  const shippingBlock = formatAddress(order.shippingAddress)
  const totalsRow = (label: string, value: string, bold = false) => `
    <tr>
      <td style="padding:6px 0;font-size:${bold ? '15px' : '13px'};color:${bold ? ink : body};font-family:${FONT_SANS};${bold ? 'font-weight:600;' : ''}">${label}</td>
      <td style="padding:6px 0;text-align:right;font-size:${bold ? '15px' : '13px'};color:${bold ? ink : body};font-family:${FONT_SANS};${bold ? 'font-weight:600;' : ''}">${value}</td>
    </tr>`

  const bodyHtml = `
              <p style="margin:0 0 14px;color:${body};">${greeting}</p>
              <p style="margin:0 0 28px;color:${body};">Thank you for your order. Each piece is prepared with great care by our atelier in Abu Dhabi. You will receive a further note when your order is on its way.</p>

              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin:0 0 8px;">
                <tr>
                  <td style="padding:0 0 10px;font-size:10px;letter-spacing:0.22em;text-transform:uppercase;color:${accent};font-family:${FONT_SANS};">
                    Your pieces
                  </td>
                </tr>
              </table>
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">${itemRows}</table>

              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin:22px 0 0;">
                <tr>
                  <td style="padding:18px 18px 14px;background:${stone};">
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                      ${totalsRow('Subtotal', money(order.amountSubtotal, order.currency))}
                      ${totalsRow('Shipping', order.amountShipping > 0 ? money(order.amountShipping, order.currency) : 'Complimentary')}
                      <tr><td colspan="2" style="padding:10px 0 0;border-top:1px solid ${border};font-size:0;line-height:0;">&nbsp;</td></tr>
                      ${totalsRow('Total', money(order.amountTotal, order.currency), true)}
                    </table>
                  </td>
                </tr>
              </table>

              ${
                shippingBlock
                  ? `<table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin:24px 0 0;">
                <tr>
                  <td>
                    <p style="margin:0 0 8px;font-size:10px;letter-spacing:0.22em;text-transform:uppercase;color:${accent};font-family:${FONT_SANS};">Shipping to</p>
                    <p style="margin:0;font-size:13px;line-height:1.7;color:${body};font-family:${FONT_SANS};">${shippingBlock}</p>
                  </td>
                </tr>
              </table>`
                  : ''
              }

              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin:32px 0 0;">
                <tr>
                  <td align="center">
                    ${emailCtaButtonHtml(`${origin}/shop`, 'Continue shopping')}
                  </td>
                </tr>
              </table>

              <p style="margin:28px 0 0;font-size:12px;line-height:1.7;color:${muted};text-align:center;font-family:${FONT_SANS};">
                Questions about your order? Write to
                <a href="mailto:${OFFICIAL_EMAILS.orders}" style="color:${signature};text-decoration:none;">${OFFICIAL_EMAILS.orders}</a>
              </p>`

  return emailDocumentHtml({
    origin,
    title: `Order confirmed — ${order.id}`,
    preheader: `Your Bint Saeed order ${order.id} is confirmed.`,
    eyebrow: 'Abu Dhabi',
    heading: 'Your order is confirmed',
    subheading: `Order ${escapeEmailHtml(order.id)}`,
    bodyHtml,
    noteHtml: 'Personalised or made-to-measure pieces are non-returnable.',
    footerHtml: undefined,
  })
}

export type SendOrderConfirmationResult =
  | { ok: true }
  | { ok: false; skipped?: boolean; error: string }

/**
 * Send a branded order-confirmation email. Never throws — the Stripe webhook must
 * still return 200 even if email delivery fails. Missing config is a soft skip.
 */
export async function sendOrderConfirmationEmail(
  order: StoredOrder,
): Promise<SendOrderConfirmationResult> {
  const apiKey = process.env.RESEND_API_KEY?.trim()
  const from =
    process.env.RESEND_ORDER_FROM_EMAIL?.trim() ||
    process.env.RESEND_FROM_EMAIL?.trim() ||
    'Bint Saeed <onboarding@resend.dev>'

  if (!order.customerEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(order.customerEmail)) {
    return { ok: false, skipped: true, error: 'No valid customer email on order.' }
  }

  if (!apiKey) {
    if (process.env.NODE_ENV === 'development') {
      console.log(`[bint-saeed orders] RESEND_API_KEY missing — skipping confirmation email for ${order.id}`)
    }
    return { ok: false, skipped: true, error: 'Transactional email is not configured.' }
  }

  try {
    const resend = new Resend(apiKey)
    const { error } = await resend.emails.send({
      from,
      to: order.customerEmail,
      replyTo: OFFICIAL_EMAILS.orders,
      subject: `Your Bint Saeed order is confirmed — ${order.id}`,
      html: orderConfirmationHtml(order),
    })
    if (error) {
      console.error('Order confirmation email error:', error)
      return { ok: false, error: 'Resend rejected the message.' }
    }
    return { ok: true }
  } catch (e) {
    console.error('Order confirmation email exception:', e)
    return { ok: false, error: 'Unexpected email failure.' }
  }
}
