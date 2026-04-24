import { createHmac } from 'crypto'
const MIN_ADMIN_SECRET_LENGTH = 8

/** Node-only — used from admin login API route. */
export function createAdminSessionCookieValue(): string | null {
  const secret = process.env.ADMIN_DASHBOARD_SECRET
  if (!secret || secret.length < MIN_ADMIN_SECRET_LENGTH) return null
  const expSec = Math.floor(Date.now() / 1000) + 7 * 24 * 3600
  const sig = createHmac('sha256', secret).update(String(expSec)).digest('hex')
  return `${expSec}.${sig}`
}
