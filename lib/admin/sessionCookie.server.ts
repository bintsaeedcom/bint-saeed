import { createHmac } from 'crypto'

/** Node-only — used from admin login API route. */
export function createAdminSessionCookieValue(): string | null {
  const secret = process.env.ADMIN_DASHBOARD_SECRET
  if (!secret || secret.length < 16) return null
  const expSec = Math.floor(Date.now() / 1000) + 7 * 24 * 3600
  const sig = createHmac('sha256', secret).update(String(expSec)).digest('hex')
  return `${expSec}.${sig}`
}
