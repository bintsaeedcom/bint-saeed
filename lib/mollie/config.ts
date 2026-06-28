import { inferMollieKeyMode } from '@/lib/payments/provider'

export function getMollieApiKey(): string | null {
  const key = process.env.MOLLIE_API_KEY?.trim() ?? ''
  if (!key.startsWith('test_') && !key.startsWith('live_')) return null
  return key
}

export function getMollieKeyMode(): 'live' | 'test' | 'unknown' {
  const key = getMollieApiKey()
  if (!key) return 'unknown'
  return inferMollieKeyMode(key)
}
