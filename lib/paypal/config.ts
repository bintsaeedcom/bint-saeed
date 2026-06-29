export type PayPalMode = 'sandbox' | 'live'

function readMode(): PayPalMode {
  const raw = process.env.PAYPAL_MODE?.trim().toLowerCase()
  if (raw === 'live') return 'live'
  return 'sandbox'
}

export function getPayPalClientId(): string | null {
  const id = process.env.PAYPAL_CLIENT_ID?.trim()
  return id || null
}

export function getPayPalClientSecret(): string | null {
  const secret = process.env.PAYPAL_CLIENT_SECRET?.trim()
  return secret || null
}

export function getPayPalWebhookId(): string | null {
  const id = process.env.PAYPAL_WEBHOOK_ID?.trim()
  return id || null
}

export function getPayPalMode(): PayPalMode {
  return readMode()
}

export function getPayPalApiBase(): string {
  return getPayPalMode() === 'live'
    ? 'https://api-m.paypal.com'
    : 'https://api-m.sandbox.paypal.com'
}

export function isPayPalConfigured(): boolean {
  return Boolean(getPayPalClientId() && getPayPalClientSecret())
}
