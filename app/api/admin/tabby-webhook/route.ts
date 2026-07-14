import { NextRequest, NextResponse } from 'next/server'
import { requireAdmin } from '@/lib/admin/apiAuth'
import { isTabbyConfigured, getTabbyWebhookSecret } from '@/lib/tabby/config'
import { listTabbyWebhooks } from '@/lib/tabby/api'
import { ensureTabbyPaymentWebhookRegistered } from '@/lib/tabby/ensureWebhook'
import { resolvePublicSiteBaseUrl } from '@/lib/security/allowedCheckoutOrigin'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

/**
 * Register / list Tabby payment webhooks for the current secret-key environment.
 * Preferred: called automatically on Tabby checkout; this admin endpoint is for ops verify / repair.
 */
export async function GET(request: NextRequest) {
  if (!(await requireAdmin(request))) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  if (!isTabbyConfigured()) {
    return NextResponse.json({ error: 'Tabby is not configured.' }, { status: 503 })
  }
  const listed = await listTabbyWebhooks()
  return NextResponse.json({ ok: listed.ok, status: listed.status, data: listed.data })
}

export async function POST(request: NextRequest) {
  if (!(await requireAdmin(request))) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  if (!isTabbyConfigured()) {
    return NextResponse.json({ error: 'Tabby is not configured.' }, { status: 503 })
  }

  const baseUrl =
    resolvePublicSiteBaseUrl(request) ||
    process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, '') ||
    'https://www.bintsaeed.com'

  const ensured = await ensureTabbyPaymentWebhookRegistered(baseUrl)
  const listed = await listTabbyWebhooks()
  const webhookUrl = `${baseUrl.replace(/\/$/, '')}/api/webhooks/tabby`
  const headerValue = getTabbyWebhookSecret() || process.env.TABBY_WEBHOOK_SECRET?.trim() || null

  return NextResponse.json(
    {
      ok: ensured.ok,
      registered: ensured.registered,
      reason: ensured.reason,
      webhookUrl,
      // Persist this value as TABBY_WEBHOOK_SECRET in Vercel if not already set.
      suggestedWebhookSecret: headerValue,
      webhooks: listed.ok ? listed.data : null,
    },
    { status: ensured.ok ? 200 : 502 },
  )
}
