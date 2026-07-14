import { Resend } from 'resend'
import { OFFICIAL_EMAILS } from '@/lib/brand/officialEmails'
import {
  EMAIL_BRAND,
  emailCtaButtonHtml,
  emailDocumentHtml,
  escapeEmailHtml,
} from '@/lib/email/brandEmailChrome'
import { formatGiftCardAmountAed } from '@/lib/giftCards/denominations'
import type { GiftCardDenominationAed } from '@/lib/giftCards/denominations'
import { formatAmountForCurrency, normalizeCurrencyCode } from '@/lib/pricing'
import type { SupportedCurrency } from '@/lib/pricing/types'
import { giftCardValidityYears } from '@/lib/giftCards/validity'
import { orderAlertRecipients } from '@/lib/orders/sendOwnerOrderAlertEmail'

const FONT_SERIF = "Georgia,'Times New Roman',serif"
const FONT_SANS = "'Montserrat',Helvetica,Arial,sans-serif"

function siteOrigin(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim()
  if (explicit) return explicit.replace(/\/$/, '')
  const vercel = process.env.VERCEL_URL?.trim()
  if (vercel) return `https://${vercel.replace(/\/$/, '')}`
  return 'https://www.bintsaeed.com'
}

export type GiftCardEmailPayload = {
  code: string
  denominationAed: GiftCardDenominationAed
  /** What the buyer paid (presentment). */
  amountPaid?: number
  currencyPaid?: SupportedCurrency
  purchaserName?: string
  purchaserEmail: string
  recipientName?: string
  recipientEmail?: string
  personalMessage?: string
  /** ISO date string */
  expiresAt: string
  orderId?: string
  /** Absolute URL to gift-card face art */
  cardImageUrl?: string
}

function formatExpiry(iso: string): string {
  try {
    return new Date(iso).toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })
  } catch {
    return iso
  }
}

function giftMessageBlock(message: string | undefined, fromLabel: string, footnote?: string): string {
  const { accent, stone, border, ink, muted } = EMAIL_BRAND
  if (!message?.trim()) return ''
  return `
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin:24px 0 0;">
                <tr>
                  <td style="padding:20px 20px 18px;background:${stone};border:1px solid ${border};">
                    <p style="margin:0 0 10px;font-size:10px;letter-spacing:0.22em;text-transform:uppercase;color:${accent};font-family:${FONT_SANS};">
                      ${escapeEmailHtml(fromLabel)}
                    </p>
                    <p style="margin:0;font-size:16px;line-height:1.7;color:${ink};font-family:${FONT_SERIF};font-style:italic;">
                      “${escapeEmailHtml(message.trim())}”
                    </p>
                    ${
                      footnote
                        ? `<p style="margin:12px 0 0;font-size:11px;color:${muted};font-family:${FONT_SANS};">${escapeEmailHtml(footnote)}</p>`
                        : ''
                    }
                  </td>
                </tr>
              </table>`
}

function codePanel(code: string): string {
  const { ink, stone, border, accent, muted } = EMAIL_BRAND
  return `
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin:22px 0 0;">
                <tr>
                  <td style="padding:22px 18px;background:${stone};border:1px solid ${border};text-align:center;">
                    <p style="margin:0 0 10px;font-size:10px;letter-spacing:0.22em;text-transform:uppercase;color:${accent};font-family:${FONT_SANS};">
                      Gift card code
                    </p>
                    <p style="margin:0;font-size:26px;letter-spacing:0.14em;color:${ink};font-family:${FONT_SANS};font-weight:500;">
                      ${escapeEmailHtml(code)}
                    </p>
                    <p style="margin:12px 0 0;font-size:12px;line-height:1.6;color:${muted};font-family:${FONT_SANS};">
                      Enter this code at checkout on bintsaeed.com. Partial balances remain until expiry.
                    </p>
                  </td>
                </tr>
              </table>`
}

function cardImageBlock(url: string | undefined, alt: string): string {
  if (!url) return ''
  return `
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin:8px 0 4px;">
                <tr>
                  <td align="center">
                    <img src="${escapeEmailHtml(url)}" width="420" alt="${escapeEmailHtml(alt)}"
                      style="display:block;width:100%;max-width:420px;height:auto;border:0;border-radius:8px;" />
                  </td>
                </tr>
              </table>`
}

function validityNote(expiresAt: string): string {
  const years = giftCardValidityYears()
  return `Valid for ${years} Gregorian year from purchase until ${escapeEmailHtml(formatExpiry(expiresAt))}. Any unused balance after expiry is donated to charity through the House’s Giving Forward commitments.`
}

/** Buyer confirmation / invoice-style receipt. */
export function buildGiftCardBuyerEmailHtml(payload: GiftCardEmailPayload): string {
  const origin = siteOrigin()
  const { body, muted, accent, ink, signature } = EMAIL_BRAND
  const greeting = payload.purchaserName
    ? `Dear ${escapeEmailHtml(payload.purchaserName.split(' ')[0])},`
    : 'Dear guest,'

  const paidLine =
    payload.amountPaid != null && payload.currencyPaid
      ? formatAmountForCurrency(payload.amountPaid, normalizeCurrencyCode(payload.currencyPaid))
      : formatGiftCardAmountAed(payload.denominationAed)

  const sentTo =
    payload.recipientEmail &&
    `
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin:20px 0 0;">
                <tr>
                  <td>
                    <p style="margin:0 0 6px;font-size:10px;letter-spacing:0.22em;text-transform:uppercase;color:${accent};font-family:${FONT_SANS};">Sent to</p>
                    <p style="margin:0;font-size:14px;line-height:1.6;color:${ink};font-family:${FONT_SANS};">
                      ${escapeEmailHtml(payload.recipientName || 'Recipient')}
                      <span style="color:${muted};"> · ${escapeEmailHtml(payload.recipientEmail)}</span>
                    </p>
                  </td>
                </tr>
              </table>`

  const bodyHtml = `
              <p style="margin:0 0 14px;color:${body};">${greeting}</p>
              <p style="margin:0 0 22px;color:${body};">
                Thank you. Your Bint Saeed Gift Card purchase is confirmed. Below is your receipt, the gift card code, and a copy of the gift message ${
                  payload.recipientEmail ? 'sent to the recipient' : 'for your records'
                }.
              </p>

              ${cardImageBlock(payload.cardImageUrl, `Bint Saeed gift card ${formatGiftCardAmountAed(payload.denominationAed)}`)}

              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin:20px 0 0;">
                <tr>
                  <td style="padding:6px 0;font-size:13px;color:${body};font-family:${FONT_SANS};">Gift card value</td>
                  <td style="padding:6px 0;text-align:right;font-size:13px;color:${ink};font-family:${FONT_SANS};">${escapeEmailHtml(formatGiftCardAmountAed(payload.denominationAed))}</td>
                </tr>
                <tr>
                  <td style="padding:6px 0;font-size:13px;color:${body};font-family:${FONT_SANS};">Amount paid</td>
                  <td style="padding:6px 0;text-align:right;font-size:13px;color:${ink};font-family:${FONT_SANS};">${escapeEmailHtml(paidLine)}</td>
                </tr>
                ${
                  payload.orderId
                    ? `<tr>
                  <td style="padding:6px 0;font-size:13px;color:${body};font-family:${FONT_SANS};">Order</td>
                  <td style="padding:6px 0;text-align:right;font-size:13px;color:${ink};font-family:${FONT_SANS};">${escapeEmailHtml(payload.orderId)}</td>
                </tr>`
                    : ''
                }
                <tr>
                  <td style="padding:6px 0;font-size:13px;color:${body};font-family:${FONT_SANS};">Valid until</td>
                  <td style="padding:6px 0;text-align:right;font-size:13px;color:${ink};font-family:${FONT_SANS};">${escapeEmailHtml(formatExpiry(payload.expiresAt))}</td>
                </tr>
              </table>

              ${sentTo || ''}
              ${giftMessageBlock(
                payload.personalMessage,
                'Your gift message',
                'A copy of this gift message is included in this confirmation.'
              )}
              ${codePanel(payload.code)}

              <p style="margin:22px 0 0;font-size:13px;line-height:1.7;color:${body};font-family:${FONT_SANS};">
                ${
                  payload.recipientEmail
                    ? 'The recipient has also received an email with this code, your message, and how to redeem.'
                    : 'Keep this code safe. You may forward it when you are ready to gift it.'
                }
              </p>

              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin:28px 0 0;">
                <tr>
                  <td align="center">
                    ${emailCtaButtonHtml(`${origin}/gift-cards`, 'View gift cards')}
                  </td>
                </tr>
              </table>

              <p style="margin:28px 0 0;font-size:12px;line-height:1.7;color:${muted};text-align:center;font-family:${FONT_SANS};">
                Questions?
                <a href="mailto:${OFFICIAL_EMAILS.orders}" style="color:${signature};text-decoration:none;">${OFFICIAL_EMAILS.orders}</a>
              </p>`

  return emailDocumentHtml({
    origin,
    title: `Gift Card confirmed · ${formatGiftCardAmountAed(payload.denominationAed)}`,
    preheader: `Your Bint Saeed Gift Card (${formatGiftCardAmountAed(payload.denominationAed)}) is confirmed.`,
    eyebrow: 'Gifting',
    heading: 'Gift Card purchase confirmed',
    subheading: payload.orderId ? `Order ${escapeEmailHtml(payload.orderId)}` : undefined,
    bodyHtml,
    noteHtml: validityNote(payload.expiresAt),
    bodyAlign: 'center',
  })
}

/** Recipient gift delivery: letter, value notice, code, how to redeem. */
export function buildGiftCardRecipientEmailHtml(payload: GiftCardEmailPayload): string {
  const origin = siteOrigin()
  const { body, muted, accent, signature, ink, stone, border } = EMAIL_BRAND
  const fromName = payload.purchaserName?.trim() || 'A friend'
  const toName = payload.recipientName?.trim()
  const greeting = toName
    ? `Dear ${escapeEmailHtml(toName)},`
    : 'Dear guest,'
  const amountLabel = formatGiftCardAmountAed(payload.denominationAed)
  const message = payload.personalMessage?.trim()

  const letterBlock = message
    ? `
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin:0 0 28px;">
                <tr>
                  <td style="padding:22px 22px 20px;background:${stone};border:1px solid ${border};">
                    <p style="margin:0 0 18px;font-size:16px;line-height:1.75;color:${ink};font-family:${FONT_SERIF};font-style:italic;text-align:center;">
                      ${escapeEmailHtml(message)}
                    </p>
                    <p style="margin:0;font-size:14px;line-height:1.5;color:${ink};font-family:${FONT_SERIF};text-align:center;">
                      ${escapeEmailHtml(fromName)}.
                    </p>
                  </td>
                </tr>
              </table>`
    : `
              <p style="margin:0 0 22px;font-size:14px;line-height:1.7;color:${body};font-family:${FONT_SANS};text-align:center;">
                ${escapeEmailHtml(fromName)}.
              </p>`

  const bodyHtml = `
              <p style="margin:0 0 22px;color:${body};font-family:${FONT_SANS};">${greeting}</p>

              ${letterBlock}

              <p style="margin:0 0 24px;color:${body};font-family:${FONT_SANS};">
                You have received a Bint Saeed Gift Card with a value of
                <strong style="color:${ink};">${escapeEmailHtml(amountLabel)}</strong>
                from ${escapeEmailHtml(fromName)}.
              </p>

              ${cardImageBlock(payload.cardImageUrl, `Bint Saeed gift card ${amountLabel}`)}
              ${codePanel(payload.code)}

              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin:26px 0 0;">
                <tr>
                  <td align="center">
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:380px;text-align:left;">
                      <tr>
                        <td>
                          <p style="margin:0 0 10px;font-size:10px;letter-spacing:0.22em;text-transform:uppercase;color:${accent};font-family:${FONT_SANS};text-align:center;">
                            How to use your gift
                          </p>
                          <ol style="margin:0;padding:0 0 0 18px;color:${body};font-family:${FONT_SANS};font-size:14px;line-height:1.75;">
                            <li style="margin:0 0 8px;">Visit <a href="${origin}/shop" style="color:${signature};text-decoration:none;">bintsaeed.com</a> and choose your piece.</li>
                            <li style="margin:0 0 8px;">At checkout, enter your gift card code. Any unused balance remains available for later purchases until the card expires.</li>
                            <li style="margin:0;">You may check your remaining balance at any time in your Account.</li>
                          </ol>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin:28px 0 0;">
                <tr>
                  <td align="center">
                    ${emailCtaButtonHtml(`${origin}/shop`, 'Begin shopping')}
                  </td>
                </tr>
              </table>

              <p style="margin:28px 0 0;font-size:12px;line-height:1.7;color:${muted};text-align:center;font-family:${FONT_SANS};">
                Need help?
                <a href="mailto:${OFFICIAL_EMAILS.hello}" style="color:${signature};text-decoration:none;">${OFFICIAL_EMAILS.hello}</a>
              </p>`

  return emailDocumentHtml({
    origin,
    title: `A gift for you from Bint Saeed`,
    preheader: `You have received a Bint Saeed Gift Card from ${fromName}.`,
    eyebrow: 'A gift for you',
    heading: 'A gift has arrived',
    subheading: undefined,
    bodyHtml,
    noteHtml: validityNote(payload.expiresAt),
    bodyAlign: 'center',
  })
}

export type SendGiftCardEmailsResult = {
  buyer: { ok: boolean; skipped?: boolean; error?: string }
  recipient?: { ok: boolean; skipped?: boolean; error?: string }
  internalCopy?: { ok: boolean; skipped?: boolean; error?: string }
}

/**
 * Sends buyer confirmation via Resend, and recipient gift email when a recipient address is set.
 * Exact copies are BCC'd to the same internal order-alert inboxes used for order copies
 * (ORDER_ALERT_EMAIL, or orderconfirmation@ / sunaina@ by default).
 * Never throws; payment webhooks must still succeed if email fails.
 */
export async function sendGiftCardEmails(payload: GiftCardEmailPayload): Promise<SendGiftCardEmailsResult> {
  const apiKey = process.env.RESEND_API_KEY?.trim()
  const from =
    process.env.RESEND_ORDER_FROM_EMAIL?.trim() ||
    process.env.RESEND_FROM_EMAIL?.trim() ||
    'Bint Saeed <onboarding@resend.dev>'

  const result: SendGiftCardEmailsResult = {
    buyer: { ok: false, skipped: true, error: 'Not sent' },
  }

  if (!apiKey) {
    if (process.env.NODE_ENV === 'development') {
      console.log('[bint-saeed gift-cards] RESEND_API_KEY missing; skipping gift card emails')
    }
    result.buyer = { ok: false, skipped: true, error: 'Transactional email is not configured.' }
    return result
  }

  const resend = new Resend(apiKey)
  const origin = siteOrigin()
  const withImage: GiftCardEmailPayload = {
    ...payload,
    cardImageUrl:
      payload.cardImageUrl ||
      `${origin}/gift-cards/bint-saeed-gift-card-${payload.denominationAed}-aed-r7.webp`,
  }

  const internalBcc = orderAlertRecipients()
  const bccFor = (to: string) =>
    internalBcc.filter((email) => email.toLowerCase() !== to.trim().toLowerCase())

  try {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.purchaserEmail)) {
      result.buyer = { ok: false, skipped: true, error: 'No valid purchaser email.' }
    } else {
      const buyerBcc = bccFor(payload.purchaserEmail)
      const { error } = await resend.emails.send({
        from,
        to: payload.purchaserEmail,
        ...(buyerBcc.length > 0 ? { bcc: buyerBcc } : {}),
        replyTo: OFFICIAL_EMAILS.orders,
        subject: `Your Bint Saeed Gift Card is confirmed · ${formatGiftCardAmountAed(payload.denominationAed)}`,
        html: buildGiftCardBuyerEmailHtml(withImage),
      })
      result.buyer = error
        ? { ok: false, error: 'Resend rejected the buyer email.' }
        : { ok: true }
      if (error) console.error('Gift card buyer email error:', error)
    }
  } catch (e) {
    console.error('Gift card buyer email exception:', e)
    result.buyer = { ok: false, error: 'Buyer email failed.' }
  }

  const recipient = payload.recipientEmail?.trim()
  if (recipient && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(recipient)) {
    try {
      const recipientBcc = bccFor(recipient)
      const { error } = await resend.emails.send({
        from,
        to: recipient,
        ...(recipientBcc.length > 0 ? { bcc: recipientBcc } : {}),
        replyTo: OFFICIAL_EMAILS.hello,
        subject: `A gift for you from Bint Saeed`,
        html: buildGiftCardRecipientEmailHtml(withImage),
      })
      result.recipient = error
        ? { ok: false, error: 'Resend rejected the recipient email.' }
        : { ok: true }
      if (error) console.error('Gift card recipient email error:', error)
    } catch (e) {
      console.error('Gift card recipient email exception:', e)
      result.recipient = { ok: false, error: 'Recipient email failed.' }
    }
  }

  result.internalCopy = {
    ok: Boolean(result.buyer.ok || result.recipient?.ok) && internalBcc.length > 0,
    skipped: internalBcc.length === 0,
    ...(internalBcc.length === 0 ? { error: 'No internal alert recipients configured.' } : {}),
  }

  return result
}
