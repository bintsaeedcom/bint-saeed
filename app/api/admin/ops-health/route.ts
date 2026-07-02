import { NextRequest, NextResponse } from 'next/server'
import { requireAdmin } from '@/lib/admin/apiAuth'
import { isGoogleOAuthConfigured } from '@/lib/auth/googleOAuth'
import { isRedisConfigured } from '@/lib/auth/redisStore'
import { orderAlertRecipients } from '@/lib/orders/sendOwnerOrderAlertEmail'

export const dynamic = 'force-dynamic'

function sessionSecretConfigured(): boolean {
  const secret =
    process.env.USER_SESSION_SECRET ||
    process.env.AUTH_SECRET ||
    process.env.ADMIN_DASHBOARD_SECRET
  return Boolean(secret && secret.trim().length >= 16)
}

async function checkMailerLite(apiKey: string): Promise<{ ok: boolean; error: string | null }> {
  try {
    const res = await fetch('https://connect.mailerlite.com/api/groups', {
      headers: {
        Authorization: `Bearer ${apiKey.trim()}`,
        Accept: 'application/json',
      },
      cache: 'no-store',
    })
    if (res.ok) return { ok: true, error: null }
    const text = await res.text()
    return { ok: false, error: `HTTP ${res.status}: ${text.slice(0, 120)}` }
  } catch (error: unknown) {
    return {
      ok: false,
      error: error instanceof Error ? error.message : 'MailerLite request failed',
    }
  }
}

export async function GET(request: NextRequest) {
  if (!(await requireAdmin(request))) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const warnings: string[] = []
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim() ?? ''
  const mailerliteKey = process.env.MAILERLITE_API_KEY?.trim() ?? ''
  const resendKey = process.env.RESEND_API_KEY?.trim() ?? ''

  const googleOAuthConfigured = isGoogleOAuthConfigured()
  const redisConfigured = isRedisConfigured()
  const sessionConfigured = sessionSecretConfigured()

  if (!googleOAuthConfigured) {
    warnings.push('Set GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET for Google sign-in.')
  }
  if (!sessionConfigured) {
    warnings.push('Set USER_SESSION_SECRET (min 16 chars) so login cookies can be signed.')
  }
  if (!redisConfigured) {
    warnings.push('Set UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN so accounts persist in production.')
  }
  if (!siteUrl) {
    warnings.push('Set NEXT_PUBLIC_SITE_URL=https://www.bintsaeed.com for OAuth redirect URIs.')
  }
  if (!resendKey) {
    warnings.push('Set RESEND_API_KEY + RESEND_FROM_EMAIL for email/password registration verification.')
  }
  if (!mailerliteKey) {
    warnings.push('Set MAILERLITE_API_KEY so newsletter signups are saved to MailerLite.')
  }

  let mailerliteReachable = false
  let mailerliteError: string | null = null
  if (mailerliteKey) {
    const check = await checkMailerLite(mailerliteKey)
    mailerliteReachable = check.ok
    mailerliteError = check.error
    if (!check.ok && check.error) {
      warnings.push(`MailerLite API check failed: ${check.error}`)
    }
  }

  const googleReady = googleOAuthConfigured && sessionConfigured && redisConfigured && Boolean(siteUrl)
  const newsletterReady = Boolean(mailerliteKey && mailerliteReachable)
  const emailRegisterReady = Boolean(resendKey && redisConfigured)

  // Order-tracking notification channels — at least one owner channel should be live so a
  // paid order can never go unnoticed.
  const ownerAlertEmailConfigured = Boolean(resendKey)
  const ownerAlertRecipient = orderAlertRecipients().join(', ')
  const slackOrdersConfigured = Boolean(process.env.SLACK_ORDERS_WEBHOOK_URL?.trim())
  const trelloConfigured = Boolean(
    process.env.TRELLO_API_KEY?.trim() &&
      process.env.TRELLO_API_TOKEN?.trim() &&
      process.env.TRELLO_CLIENT_ORDERS_LIST_ID?.trim(),
  )
  const orderAlertsReady = ownerAlertEmailConfigured || slackOrdersConfigured
  if (!orderAlertsReady) {
    warnings.push(
      'No order alert channel is live. Set RESEND_API_KEY (+ optional ORDER_ALERT_EMAIL) or SLACK_ORDERS_WEBHOOK_URL so you are notified of every order.',
    )
  }
  if (!redisConfigured) {
    warnings.push('Orders are only kept in memory without Upstash Redis — they are lost on redeploy/restart.')
  }

  const origin = siteUrl.replace(/\/$/, '')

  return NextResponse.json({
    ok: googleReady && newsletterReady && orderAlertsReady,
    checkedAt: new Date().toISOString(),
    orders: {
      redisConfigured,
      ownerAlertEmailConfigured,
      ownerAlertRecipient,
      slackOrdersConfigured,
      trelloConfigured,
      customerConfirmationConfigured: Boolean(resendKey),
      ready: orderAlertsReady,
    },
    auth: {
      googleOAuthConfigured,
      sessionSecretConfigured: sessionConfigured,
      redisConfigured,
      resendConfigured: Boolean(resendKey),
      resendFromConfigured: Boolean(process.env.RESEND_FROM_EMAIL?.trim()),
      siteUrlConfigured: Boolean(siteUrl),
      googleRedirectUri: origin ? `${origin}/api/auth/google/callback` : null,
      googleReady,
      emailRegisterReady,
    },
    newsletter: {
      mailerliteConfigured: Boolean(mailerliteKey),
      groupIdConfigured: Boolean(process.env.MAILERLITE_GROUP_ID?.trim()),
      slackConfigured: Boolean(process.env.SLACK_WEBHOOK_URL?.trim()),
      apiReachable: mailerliteReachable,
      error: mailerliteError,
      ready: newsletterReady,
    },
    warnings,
  })
}
