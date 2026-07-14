import { NextRequest, NextResponse } from 'next/server'
import { requireAdmin } from '@/lib/admin/apiAuth'
import { isTabbyConfigured, getTabbyWebhookSecret } from '@/lib/tabby/config'
import { listTabbyWebhooks, registerTabbyWebhook } from '@/lib/tabby/api'
import { resolvePublicSiteBaseUrl } from '@/lib/security/allowedCheckoutOrigin'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

/**
 * Register / list Tabby payment webhooks for the current secret-key environment.
 * POST once after sandbox keys land (and again with live keys after QA).
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
  const webhookUrl = `${baseUrl}/api/webhooks/tabby`

  const headerValue =
    getTabbyWebhookSecret() ||
    process.env.TABBY_WEBHOOK_SECRET?.trim() ||
    `bs-tabby-${Date.now().toString(36)}`

  const result = await registerTabbyWebhook({
    url: webhookUrl,
    headerTitle: 'X-Tabby-Signature',
    headerValue,
  })

  return NextResponse.json(
    {
      ok: result.ok,
      status: result.status,
      webhookUrl,
      // Persist this value as TABBY_WEBHOOK_SECRET in Vercel if not already set.
      suggestedWebhookSecret: headerValue,
      data: result.data,
    },
    { status: result.ok ? 200 : result.status || 502 },
  )
}
