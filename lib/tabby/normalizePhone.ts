/**
 * Tabby expects E.164 with leading +, e.g. +971500000001 (UAE test),
 * +966500000001 (KSA), +96590000001 (KW).
 */
export function normalizeTabbyPhone(
  raw: string,
  countryCode: 'AE' | 'SA' | 'KW' = 'AE',
): string {
  let digits = raw.replace(/[^\d]/g, '')
  if (!digits) return ''

  if (digits.startsWith('00')) digits = digits.slice(2)

  if (countryCode === 'SA') {
    if (digits.startsWith('966')) return `+${digits}`
    if (digits.startsWith('05') && digits.length === 10) return `+966${digits.slice(1)}`
    if (digits.startsWith('5') && digits.length === 9) return `+966${digits}`
    return digits.startsWith('+') ? digits : `+${digits}`
  }

  if (countryCode === 'KW') {
    if (digits.startsWith('965')) return `+${digits}`
    if (digits.startsWith('9') && digits.length === 8) return `+965${digits}`
    return digits.startsWith('+') ? digits : `+${digits}`
  }

  // UAE default
  if (digits.startsWith('971')) return `+${digits}`
  if (digits.startsWith('05') && digits.length === 10) return `+971${digits.slice(1)}`
  if (digits.startsWith('5') && digits.length === 9) return `+971${digits}`
  return digits.startsWith('+') ? digits : `+${digits}`
}

export function isPlausibleTabbyPhone(e164: string, countryCode: 'AE' | 'SA' | 'KW'): boolean {
  if (countryCode === 'SA') return /^\+9665\d{8}$/.test(e164)
  if (countryCode === 'KW') return /^\+9659\d{7}$/.test(e164)
  return /^\+9715\d{8}$/.test(e164)
}
