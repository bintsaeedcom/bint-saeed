export const COOKIE_NAME = 'bs_preview_access'

export function getPreviewSecretBytes(): Uint8Array | null {
  const s = process.env.PREVIEW_GATE_SECRET
  if (!s || s.length < 16) return null
  return new TextEncoder().encode(s)
}

async function hmacSha256Hex(key: Uint8Array, message: string): Promise<string> {
  const cryptoKey = await crypto.subtle.importKey(
    'raw',
    key as BufferSource,
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  )
  const buf = await crypto.subtle.sign('HMAC', cryptoKey, new TextEncoder().encode(message))
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('')
}

function timingSafeEqualHex(a: string, b: string): boolean {
  if (a.length !== b.length) return false
  let out = 0
  for (let i = 0; i < a.length; i++) {
    out |= a.charCodeAt(i) ^ b.charCodeAt(i)
  }
  return out === 0
}

export async function verifyPreviewAccessCookie(token: string, secret: Uint8Array): Promise<boolean> {
  const parts = token.split('.')
  if (parts.length !== 2) return false
  const [expStr, sigHex] = parts
  if (!/^\d+$/.test(expStr) || !/^[0-9a-f]{64}$/i.test(sigHex)) return false
  const expMs = parseInt(expStr, 10) * 1000
  if (Number.isNaN(expMs) || Date.now() > expMs) return false
  const expectedHex = await hmacSha256Hex(secret, expStr)
  return timingSafeEqualHex(sigHex.toLowerCase(), expectedHex.toLowerCase())
}

/** Only allow internal return paths under /preview (open-redirect safe). */
export function sanitizePreviewReturnPath(pathname: string, search: string): string {
  if (!pathname.startsWith('/preview')) return '/preview'
  if (pathname.startsWith('/preview/gate') || pathname.startsWith('/preview/blocked')) {
    return '/preview'
  }
  return `${pathname}${search || ''}`
}

/** Parse `returnTo` query param from the gate URL. */
export function parsePreviewReturnToParam(raw: string | null): string {
  if (!raw) return '/preview'
  let decoded: string
  try {
    decoded = decodeURIComponent(raw)
  } catch {
    return '/preview'
  }
  if (!decoded.startsWith('/preview')) return '/preview'
  const pathOnly = decoded.split('?')[0] || '/preview'
  const qs = decoded.includes('?') ? '?' + decoded.split('?').slice(1).join('?') : ''
  return sanitizePreviewReturnPath(pathOnly, qs)
}
