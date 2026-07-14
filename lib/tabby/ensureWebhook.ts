import {
  getTabbyWebhookSecret,
  isTabbyConfigured,
} from '@/lib/tabby/config'
import { listTabbyWebhooks, registerTabbyWebhook } from '@/lib/tabby/api'

let ensurePromise: Promise<{ ok: boolean; registered: boolean; reason?: string }> | null = null

function webhookListUrls(data: unknown): string[] {
  if (Array.isArray(data)) {
    return data
      .map((row) =>
        row && typeof row === 'object' && 'url' in row
          ? String((row as { url?: string }).url || '')
          : '',
      )
      .filter(Boolean)
  }
  if (data && typeof data === 'object' && Array.isArray((data as { webhooks?: unknown }).webhooks)) {
    return webhookListUrls((data as { webhooks: unknown[] }).webhooks)
  }
  return []
}

/**
 * Ensure Tabby has a payment webhook for this merchant_code + secret-key environment.
 * Safe to call on every checkout — registers at most once per process after a successful check.
 * Capture must not depend on the shopper returning to /checkout/success.
 */
export async function ensureTabbyPaymentWebhookRegistered(baseUrl: string): Promise<{
  ok: boolean
  registered: boolean
  reason?: string
}> {
  if (!isTabbyConfigured()) {
    return { ok: false, registered: false, reason: 'not_configured' }
  }
  const origin = baseUrl.replace(/\/$/, '')
  if (!origin.startsWith('http')) {
    return { ok: false, registered: false, reason: 'bad_base_url' }
  }

  if (!ensurePromise) {
    ensurePromise = (async () => {
      const webhookUrl = `${origin}/api/webhooks/tabby`
      const listed = await listTabbyWebhooks()
      if (listed.ok) {
        const urls = webhookListUrls(listed.data).map((u) => u.replace(/\/$/, ''))
        if (urls.some((u) => u === webhookUrl || u.endsWith('/api/webhooks/tabby'))) {
          return { ok: true, registered: false, reason: 'already_registered' }
        }
      }

      const secret = getTabbyWebhookSecret() || process.env.TABBY_WEBHOOK_SECRET?.trim()
      const result = await registerTabbyWebhook({
        url: webhookUrl,
        ...(secret
          ? { headerTitle: 'X-Tabby-Signature', headerValue: secret }
          : {}),
      })

      if (!result.ok) {
        // Allow another attempt on the next checkout.
        ensurePromise = null
        console.error('Tabby webhook registration failed', {
          status: result.status,
          data: result.data,
          webhookUrl,
        })
        return { ok: false, registered: false, reason: `register_failed:${result.status}` }
      }

      if (!secret) {
        console.warn(
          '[tabby] Registered payment webhook without TABBY_WEBHOOK_SECRET. Set that env var in Vercel and re-register via /api/admin/tabby-webhook so signed verification is enabled.',
          { webhookUrl },
        )
      }

      return { ok: true, registered: true, reason: 'registered' }
    })().catch((error) => {
      ensurePromise = null
      console.error('Tabby webhook ensure exception', error)
      return { ok: false, registered: false, reason: 'exception' }
    })
  }

  return ensurePromise
}
