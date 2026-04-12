export const ADMIN_COOKIE = 'bs_admin'

function getSecretBytes(): Uint8Array | null {
  const s = process.env.ADMIN_DASHBOARD_SECRET
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

/** Edge-safe verification for middleware. */
export async function verifyAdminSessionCookie(token: string | undefined): Promise<boolean> {
  if (!token) return false
  const secret = getSecretBytes()
  if (!secret) return false
  const parts = token.split('.')
  if (parts.length !== 2) return false
  const [expStr, sigHex] = parts
  if (!/^\d+$/.test(expStr) || !/^[0-9a-f]{64}$/i.test(sigHex)) return false
  const expSec = parseInt(expStr, 10)
  if (Number.isNaN(expSec) || Date.now() / 1000 > expSec) return false
  const expectedHex = await hmacSha256Hex(secret, expStr)
  return timingSafeEqualHex(sigHex.toLowerCase(), expectedHex.toLowerCase())
}

export function isAdminSecretConfigured(): boolean {
  return Boolean(process.env.ADMIN_DASHBOARD_SECRET && process.env.ADMIN_DASHBOARD_SECRET.length >= 16)
}
