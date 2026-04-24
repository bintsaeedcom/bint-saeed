import { createHmac } from 'crypto'

/** Node-only — used from admin login API route. */
export function createAdminSessionCookieValue(): string | null {
  // Keep secret-first signing while allowing password fallback for misconfigured envs.
  const secret = process.env.ADMIN_DASHBOARD_SECRET || process.env.ADMIN_DASHBOARD_PASSWORD
  if (!secret) return null
  const expSec = Math.floor(Date.now() / 1000) + 7 * 24 * 3600
  const sig = createHmac('sha256', secret).update(String(expSec)).digest('hex')
  return `${expSec}.${sig}`
}
