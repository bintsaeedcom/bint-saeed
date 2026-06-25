import { createHmac } from 'crypto'

function normEmail(email: string): string {
  return email.trim().toLowerCase()
}

function sessionSecret(): string | null {
  return (
    process.env.USER_SESSION_SECRET ||
    process.env.AUTH_SECRET ||
    process.env.ADMIN_DASHBOARD_SECRET ||
    null
  )
}

/** Node-only — signs a customer session cookie (30 days). */
export function createUserSessionCookieValue(email: string): string | null {
  const secret = sessionSecret()
  if (!secret) return null

  const expSec = Math.floor(Date.now() / 1000) + 30 * 24 * 3600
  const emailSeg = Buffer.from(normEmail(email), 'utf8').toString('base64url')
  const payload = `${expSec}.${emailSeg}`
  const sig = createHmac('sha256', secret).update(payload).digest('hex')
  return `${payload}.${sig}`
}
