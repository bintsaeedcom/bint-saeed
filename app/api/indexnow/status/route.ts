import { NextResponse } from 'next/server'
import { getIndexNowSiteOrigin, validateIndexNowKey } from '@/lib/indexnow'

export const runtime = 'nodejs'

/**
 * GET /api/indexnow/status — lightweight readiness check (no secrets returned).
 * Use after deploy to confirm key file URL would match Bing Webmaster IndexNow setup.
 */
export async function GET(): Promise<NextResponse> {
  const key = process.env.INDEXNOW_KEY ?? ''
  const keyOk = validateIndexNowKey(key)
  const origin = getIndexNowSiteOrigin()
  const keyFileUrl = keyOk ? `${origin}/${key}.txt` : null
  const publishConfigured = Boolean(process.env.INDEXNOW_WEBHOOK_SECRET)

  return NextResponse.json({
    indexNowKeyConfigured: keyOk,
    keyFileUrl,
    siteOrigin: origin,
    publishEndpointReady: publishConfigured,
    hint: keyOk
      ? `Open ${keyFileUrl} — body must equal the key exactly. Then POST /api/indexnow/publish with Bearer INDEXNOW_WEBHOOK_SECRET.`
      : 'Set INDEXNOW_KEY (8–128 alphanumeric/dashes) and redeploy.',
  })
}
