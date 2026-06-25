export const USER_COOKIE = 'bs_user'

export type UserSessionPayload = {
  email: string
  exp: number
}

function sessionSecretBytes(): Uint8Array | null {
  const s =
    process.env.USER_SESSION_SECRET ||
    process.env.AUTH_SECRET ||
    process.env.ADMIN_DASHBOARD_SECRET
  if (!s) return null
  return new TextEncoder().encode(s)
}

async function hmacSha256Hex(key: Uint8Array, message: string): Promise<string> {
  const cryptoKey = await crypto.subtle.importKey(
    'raw',
    key as BufferSource,
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign'],
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

function decodeEmailSegment(segment: string): string | null {
  try {
    const padded = segment.replace(/-/g, '+').replace(/_/g, '/')
    const padLen = (4 - (padded.length % 4)) % 4
    const normalized = padded + '='.repeat(padLen)
    if (typeof atob === 'function') {
      return decodeURIComponent(
        Array.from(atob(normalized), (c) => `%${c.charCodeAt(0).toString(16).padStart(2, '0')}`).join(''),
      )
    }
    return Buffer.from(normalized, 'base64').toString('utf8')
  } catch {
    return null
  }
}

/** Edge-safe verification for middleware and route handlers. */
export async function verifyUserSessionCookie(
  token: string | undefined,
): Promise<UserSessionPayload | null> {
  if (!token) return null
  const secret = sessionSecretBytes()
  if (!secret) return null

  const parts = token.split('.')
  if (parts.length !== 3) return null
  const [expStr, emailSeg, sigHex] = parts
  if (!/^\d+$/.test(expStr) || !/^[0-9a-f]{64}$/i.test(sigHex)) return null

  const exp = parseInt(expStr, 10)
  if (Number.isNaN(exp) || Date.now() / 1000 > exp) return null

  const email = decodeEmailSegment(emailSeg)
  if (!email) return null

  const payload = `${expStr}.${emailSeg}`
  const expectedHex = await hmacSha256Hex(secret, payload)
  if (!timingSafeEqualHex(sigHex.toLowerCase(), expectedHex.toLowerCase())) return null

  return { email: email.trim().toLowerCase(), exp }
}

export function isUserSessionSecretConfigured(): boolean {
  return Boolean(
    process.env.USER_SESSION_SECRET ||
      process.env.AUTH_SECRET ||
      process.env.ADMIN_DASHBOARD_SECRET,
  )
}
