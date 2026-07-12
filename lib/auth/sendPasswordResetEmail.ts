import { Resend } from 'resend'
import type { NextRequest } from 'next/server'
import { getSiteOrigin } from './siteOrigin'
import {
  EMAIL_BRAND,
  emailCtaButtonHtml,
  emailDocumentHtml,
  emailFallbackLinkHtml,
  escapeEmailHtml,
} from '@/lib/email/brandEmailChrome'

function resetEmailHtml(origin: string, resetUrl: string, name?: string): string {
  const { body } = EMAIL_BRAND
  const greeting = name ? `Hi ${escapeEmailHtml(name)},` : 'Hello,'

  const bodyHtml = `
              <p style="margin:0 0 16px;color:${body};">${greeting}</p>
              <p style="margin:0 0 28px;color:${body};">We received a request to reset the password for your Bint Saeed account. Choose a new password using the button below.</p>
              ${emailCtaButtonHtml(resetUrl, 'Reset password')}
              ${emailFallbackLinkHtml(resetUrl)}`

  return emailDocumentHtml({
    origin,
    title: 'Reset your password — Bint Saeed',
    preheader: 'Reset your Bint Saeed password. This link expires in one hour.',
    eyebrow: 'Abu Dhabi',
    heading: 'Reset your password',
    bodyHtml,
    noteHtml:
      'This link expires in 1 hour. If you didn’t request a password reset, you can ignore this email — your password will stay the same.',
  })
}

export type SendPasswordResetResult =
  | { ok: true; devLink?: string }
  | { ok: false; error: string }

export async function sendPasswordResetEmail(
  request: NextRequest,
  params: { to: string; token: string; name?: string },
): Promise<SendPasswordResetResult> {
  const origin = getSiteOrigin(request)
  const resetUrl = `${origin}/reset-password?token=${encodeURIComponent(params.token)}`

  const apiKey = process.env.RESEND_API_KEY?.trim()
  const from =
    process.env.RESEND_FROM_EMAIL?.trim() || 'Bint Saeed <onboarding@resend.dev>'

  if (!apiKey) {
    if (process.env.NODE_ENV === 'development') {
      console.log('\n[bint-saeed auth] RESEND_API_KEY missing — password reset link (dev only):\n', resetUrl, '\n')
      return { ok: true, devLink: resetUrl }
    }
    return { ok: false, error: 'Transactional email is not configured.' }
  }

  try {
    const resend = new Resend(apiKey)
    const { error } = await resend.emails.send({
      from,
      to: params.to,
      subject: 'Reset your password — Bint Saeed',
      html: resetEmailHtml(origin, resetUrl, params.name),
    })
    if (error) {
      console.error('Resend error:', error)
      return { ok: false, error: 'Could not send email. Try again later.' }
    }
    return { ok: true }
  } catch (e) {
    console.error('Resend exception:', e)
    return { ok: false, error: 'Could not send email. Try again later.' }
  }
}
