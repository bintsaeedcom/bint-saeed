/**
 * Tamara expects GCC mobiles as country code + national number (no + / spaces),
 * e.g. UAE 9715XXXXXXXX, KSA 9665XXXXXXXX.
 * Shoppers often type local 05… — normalize before create-session.
 */
export function normalizeTamaraPhone(
  raw: string,
  countryCode: 'AE' | 'SA' = 'AE',
): string {
  let digits = raw.replace(/[^\d]/g, '')
  if (!digits) return ''

  // 00-prefix international
  if (digits.startsWith('00')) digits = digits.slice(2)

  if (countryCode === 'SA') {
    if (digits.startsWith('966')) return digits
    if (digits.startsWith('05') && digits.length === 10) return `966${digits.slice(1)}`
    if (digits.startsWith('5') && digits.length === 9) return `966${digits}`
    return digits
  }

  // UAE (default)
  if (digits.startsWith('971')) return digits
  if (digits.startsWith('05') && digits.length === 10) return `971${digits.slice(1)}`
  if (digits.startsWith('5') && digits.length === 9) return `971${digits}`
  return digits
}

export function isPlausibleTamaraPhone(digits: string, countryCode: 'AE' | 'SA'): boolean {
  if (countryCode === 'SA') {
    return /^9665\d{8}$/.test(digits)
  }
  return /^9715\d{8}$/.test(digits)
}
