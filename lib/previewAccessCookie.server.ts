import { createHmac } from 'crypto'

/** Node-only: sign preview access cookie (48h). */
export function createPreviewAccessCookieValue(): string {
  const secret = process.env.PREVIEW_GATE_SECRET
  if (!secret || secret.length < 16) {
    throw new Error('PREVIEW_GATE_SECRET must be set (min 16 characters)')
  }
  const expSec = Math.floor(Date.now() / 1000) + 48 * 3600
  const payload = String(expSec)
  const sig = createHmac('sha256', secret).update(payload).digest('hex')
  return `${payload}.${sig}`
}
