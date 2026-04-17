import { stripLocaleFromPathname } from '@/lib/i18n/routing'

export const COOKIE_NAME = 'bs_preview_access'

function innerHomePath(pathname: string): string {
  return stripLocaleFromPathname(pathname).pathname
}

function isAllowedHomeReturnInner(inner: string): boolean {
  if (inner !== '/home' && !inner.startsWith('/home/')) return false
  if (
    inner === '/home/gate' ||
    inner.startsWith('/home/gate/') ||
    inner === '/home/blocked' ||
    inner.startsWith('/home/blocked/')
  ) {
    return false
  }
  return true
}

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

/** Only allow internal return paths under /home (open-redirect safe). */
export function sanitizePreviewReturnPath(pathname: string, search: string): string {
  const inner = innerHomePath(pathname)
  if (!isAllowedHomeReturnInner(inner)) return '/home'
  return `${pathname}${search || ''}`
}

/** Parse `returnTo` query param from the gate URL. */
export function parsePreviewReturnToParam(raw: string | null): string {
  if (!raw) return '/home'
  let decoded: string
  try {
    decoded = decodeURIComponent(raw)
  } catch {
    return '/home'
  }
  const pathOnly = decoded.split('?')[0] || '/home'
  const inner = innerHomePath(pathOnly)
  if (!isAllowedHomeReturnInner(inner)) return '/home'
  const qs = decoded.includes('?') ? '?' + decoded.split('?').slice(1).join('?') : ''
  return sanitizePreviewReturnPath(pathOnly, qs)
}
