import { createHmac, timingSafeEqual } from 'crypto'
import { getTamaraNotificationToken } from '@/lib/tamara/config'

function base64UrlDecode(input: string): Buffer {
  const normalized = input.replace(/-/g, '+').replace(/_/g, '/')
  const pad = normalized.length % 4 === 0 ? '' : '='.repeat(4 - (normalized.length % 4))
  return Buffer.from(normalized + pad, 'base64')
}

/**
 * Tamara webhooks pass `tamaraToken` (HS256 JWT) in the query string.
 * Validate signature with TAMARA_NOTIFICATION_TOKEN.
 */
export function verifyTamaraWebhookToken(tamaraToken: string | null | undefined): boolean {
  const secret = getTamaraNotificationToken()
  if (!secret || !tamaraToken) return false

  const parts = tamaraToken.split('.')
  if (parts.length !== 3) return false
  const [header, payload, signature] = parts
  if (!header || !payload || !signature) return false

  const expected = createHmac('sha256', secret)
    .update(`${header}.${payload}`)
    .digest('base64')
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')

  try {
    const a = Buffer.from(signature)
    const b = Buffer.from(expected)
    if (a.length !== b.length) return false
    return timingSafeEqual(a, b)
  } catch {
    return false
  }
}

export function decodeTamaraWebhookPayload(
  tamaraToken: string,
): Record<string, unknown> | null {
  const parts = tamaraToken.split('.')
  if (parts.length !== 3 || !parts[1]) return null
  try {
    const json = base64UrlDecode(parts[1]).toString('utf8')
    return JSON.parse(json) as Record<string, unknown>
  } catch {
    return null
  }
}
