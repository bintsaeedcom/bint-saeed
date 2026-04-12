import { Resend } from 'resend'
import type { NextRequest } from 'next/server'
import { getSiteOrigin } from './siteOrigin'

function confirmationEmailHtml(confirmUrl: string, name?: string): string {
  const greeting = name ? `Hi ${escapeHtml(name)},` : 'Hello,'
  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width"></head>
<body style="margin:0;background:#faf9f7;font-family:Georgia,'Times New Roman',serif;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#faf9f7;padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" style="max-width:520px;background:#ffffff;border:1px solid #e8e4df;">
          <tr>
            <td style="padding:40px 36px 24px;text-align:center;">
              <p style="margin:0;font-size:11px;letter-spacing:0.35em;text-transform:uppercase;color:#92aac1;">Bint Saeed</p>
              <h1 style="margin:16px 0 0;font-size:26px;font-weight:400;color:#3b0014;">Confirm your email</h1>
            </td>
          </tr>
          <tr>
            <td style="padding:8px 36px 32px;font-size:15px;line-height:1.65;color:#5c4a4a;font-family:Roboto,Helvetica,Arial,sans-serif;">
              <p style="margin:0 0 16px;">${greeting}</p>
              <p style="margin:0 0 24px;">Thanks for creating an account. Please confirm your email address to finish setting up your account.</p>
              <table role="presentation" cellspacing="0" cellpadding="0" style="margin:0 auto;">
                <tr>
                  <td style="border-radius:2px;background:#3b0014;">
                    <a href="${confirmUrl}" target="_blank" rel="noopener"
                      style="display:inline-block;padding:16px 36px;font-size:12px;font-weight:500;letter-spacing:0.2em;text-transform:uppercase;color:#ffffff;text-decoration:none;font-family:Roboto,Helvetica,Arial,sans-serif;">
                      Confirm email
                    </a>
                  </td>
                </tr>
              </table>
              <p style="margin:28px 0 0;font-size:12px;line-height:1.6;color:#8a7a7a;">
                If the button doesn’t work, copy and paste this link into your browser:<br/>
                <span style="word-break:break-all;color:#92aac1;">${escapeHtml(confirmUrl)}</span>
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding:20px 36px;border-top:1px solid #f0ebe6;font-size:11px;color:#b0a5a0;text-align:center;font-family:Roboto,Helvetica,Arial,sans-serif;">
              This link expires in 48 hours. If you didn’t sign up, you can ignore this email.
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

export type SendVerificationResult =
  | { ok: true; devLink?: string }
  | { ok: false; error: string }

export async function sendVerificationEmail(
  request: NextRequest,
  params: { to: string; token: string; name?: string }
): Promise<SendVerificationResult> {
  const origin = getSiteOrigin(request)
  const confirmUrl = `${origin}/api/auth/verify-email?token=${encodeURIComponent(params.token)}`

  const apiKey = process.env.RESEND_API_KEY?.trim()
  const from =
    process.env.RESEND_FROM_EMAIL?.trim() || 'Bint Saeed <onboarding@resend.dev>'

  if (!apiKey) {
    if (process.env.NODE_ENV === 'development') {
      console.log('\n[bint-saeed auth] RESEND_API_KEY missing — verification link (dev only):\n', confirmUrl, '\n')
      return { ok: true, devLink: confirmUrl }
    }
    return { ok: false, error: 'Transactional email is not configured.' }
  }

  try {
    const resend = new Resend(apiKey)
    const { error } = await resend.emails.send({
      from,
      to: params.to,
      subject: 'Please confirm your email — Bint Saeed',
      html: confirmationEmailHtml(confirmUrl, params.name),
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
