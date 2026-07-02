import { Resend } from 'resend'
import type { StoredOrder } from '@/lib/orders/types'
import { formatAmountForCurrency, normalizeCurrencyCode } from '@/lib/pricing'

const INK = '#1a0210'
const CANVAS = '#faf9f7'
const CARD = '#faf8f5'
const BORDER = '#e8e4df'
const MUTED = '#8a7a7a'
const BODY = '#5c4a4a'
const ACCENT = '#6a8090'

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

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

/** Inboxes that must receive an alert for every order, unless overridden by ORDER_ALERT_EMAIL. */
export const DEFAULT_ORDER_ALERT_RECIPIENTS = [
  'orderconfirmation@bintsaeed.com',
  'sunaina@bintsaeed.com',
] as const

/** Owner alert recipients: ORDER_ALERT_EMAIL (comma-separated) or the default order inboxes. */
export function orderAlertRecipients(): string[] {
  const raw = process.env.ORDER_ALERT_EMAIL?.trim()
  const list = (raw ? raw.split(',') : [...DEFAULT_ORDER_ALERT_RECIPIENTS])
    .map((e) => e.trim())
    .filter((e) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e))
  return list.length > 0 ? list : [...DEFAULT_ORDER_ALERT_RECIPIENTS]
}

function ownerAlertHtml(order: StoredOrder): string {
  const origin = siteOrigin()
  const provider = (order.paymentProvider || 'stripe').toUpperCase()
  const placed = new Date(order.createdAt).toLocaleString('en-AE', { timeZone: 'Asia/Dubai' })

  const itemRows = order.lines
    .map((line) => {
      const total = money(line.unitPrice * line.quantity, line.currency || order.currency)
      const detail = line.description ? escapeHtml(line.description) : ''
      return `
        <tr>
          <td style="padding:12px 0;border-bottom:1px solid ${BORDER};vertical-align:top;">
            <p style="margin:0;font-size:14px;color:${INK};font-family:'Montserrat',Helvetica,Arial,sans-serif;">${line.quantity}× ${escapeHtml(line.name)}</p>
            ${detail ? `<p style="margin:4px 0 0;font-size:12px;line-height:1.5;color:${MUTED};font-family:'Montserrat',Helvetica,Arial,sans-serif;">${detail}</p>` : ''}
          </td>
          <td style="padding:12px 0;border-bottom:1px solid ${BORDER};text-align:right;vertical-align:top;white-space:nowrap;">
            <p style="margin:0;font-size:14px;color:${INK};font-family:'Montserrat',Helvetica,Arial,sans-serif;">${total}</p>
          </td>
        </tr>`
    })
    .join('')

  const shipping = order.shippingAddress
    ? [
        order.shippingAddress.name,
        order.shippingAddress.line1,
        order.shippingAddress.line2,
        order.shippingAddress.city,
        order.shippingAddress.state,
        order.shippingAddress.postal_code,
        order.shippingAddress.country,
      ]
        .map((p) => (typeof p === 'string' ? p.trim() : ''))
        .filter(Boolean)
        .map(escapeHtml)
        .join(', ')
    : 'Not captured'

  const statusBadge = order.fulfillmentStatus === 'paid' ? 'PAID' : order.fulfillmentStatus.toUpperCase()

  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width"></head>
<body style="margin:0;background:${CANVAS};font-family:'Montserrat',Helvetica,Arial,sans-serif;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:${CANVAS};padding:28px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" style="max-width:560px;background:${CARD};border:1px solid ${BORDER};">
          <tr>
            <td style="padding:28px 32px 12px;">
              <p style="margin:0;font-size:11px;letter-spacing:0.28em;text-transform:uppercase;color:${ACCENT};">Bint Saeed · Internal</p>
              <h1 style="margin:10px 0 0;font-size:22px;font-weight:600;color:${INK};font-family:Georgia,'Times New Roman',serif;">New ${statusBadge === 'PAID' ? 'paid ' : ''}order received</h1>
              <p style="margin:8px 0 0;font-size:13px;color:${BODY};">
                <strong>${escapeHtml(order.id)}</strong> · ${statusBadge} · ${provider} · ${money(order.amountTotal, order.currency)}
              </p>
              <p style="margin:4px 0 0;font-size:12px;color:${MUTED};">Placed ${escapeHtml(placed)} (UAE)</p>
            </td>
          </tr>
          <tr>
            <td style="padding:8px 32px 0;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">${itemRows}</table>
            </td>
          </tr>
          <tr>
            <td style="padding:16px 32px 0;font-size:13px;line-height:1.7;color:${BODY};">
              <p style="margin:0 0 4px;"><strong style="color:${INK};">Customer:</strong> ${escapeHtml(order.customerName || '—')}</p>
              <p style="margin:0 0 4px;"><strong style="color:${INK};">Email:</strong> ${escapeHtml(order.customerEmail || '—')}</p>
              <p style="margin:0 0 4px;"><strong style="color:${INK};">Phone:</strong> ${escapeHtml(order.customerPhone || '—')}</p>
              <p style="margin:0 0 4px;"><strong style="color:${INK};">Ship to:</strong> ${shipping}</p>
              ${order.deliveryNotes ? `<p style="margin:0 0 4px;"><strong style="color:${INK};">Delivery notes:</strong> ${escapeHtml(order.deliveryNotes)}</p>` : ''}
              ${order.discountCode ? `<p style="margin:0 0 4px;"><strong style="color:${INK};">Discount:</strong> ${escapeHtml(order.discountCode)}</p>` : ''}
            </td>
          </tr>
          <tr>
            <td style="padding:22px 32px 28px;text-align:center;">
              <table role="presentation" cellspacing="0" cellpadding="0" style="margin:0 auto;">
                <tr>
                  <td style="border-radius:2px;background:${INK};">
                    <a href="${origin}/admin/orders" target="_blank" rel="noopener"
                      style="display:inline-block;padding:14px 32px;font-size:12px;font-weight:500;letter-spacing:0.18em;text-transform:uppercase;color:${CARD};text-decoration:none;">
                      Open Orders Hub
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
}

export type OwnerOrderAlertResult =
  | { ok: true }
  | { ok: false; skipped?: boolean; error: string }

/**
 * Email the house on every new order so an order is never missed, even if Slack/Trello
 * are not configured. Never throws — payment webhooks must still return 200.
 */
export async function sendOwnerOrderAlertEmail(order: StoredOrder): Promise<OwnerOrderAlertResult> {
  const apiKey = process.env.RESEND_API_KEY?.trim()
  const from =
    process.env.RESEND_ORDER_FROM_EMAIL?.trim() ||
    process.env.RESEND_FROM_EMAIL?.trim() ||
    'Bint Saeed <onboarding@resend.dev>'

  if (!apiKey) {
    if (process.env.NODE_ENV === 'development') {
      console.log(`[bint-saeed orders] RESEND_API_KEY missing — owner alert skipped for ${order.id}`)
    }
    return { ok: false, skipped: true, error: 'Transactional email is not configured.' }
  }

  try {
    const resend = new Resend(apiKey)
    const { error } = await resend.emails.send({
      from,
      to: orderAlertRecipients(),
      subject: `🧵 New order ${order.id} — ${money(order.amountTotal, order.currency)}`,
      html: ownerAlertHtml(order),
    })
    if (error) {
      console.error('Owner order alert email error:', error)
      return { ok: false, error: 'Resend rejected the owner alert.' }
    }
    return { ok: true }
  } catch (e) {
    console.error('Owner order alert email exception:', e)
    return { ok: false, error: 'Unexpected owner alert failure.' }
  }
}
