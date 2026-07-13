/**
 * Tamara expects GCC mobiles as country code + national number (no + / spaces),
 * e.g. UAE 9715XXXXXXXX, KSA 9665XXXXXXXX.
 * Shoppers often type local 05…, +971…, or Arabic-Indic digits — normalize before API calls.
 */

const ARABIC_INDIC_DIGITS: Record<string, string> = {
  '٠': '0',
  '١': '1',
  '٢': '2',
  '٣': '3',
  '٤': '4',
  '٥': '5',
  '٦': '6',
  '٧': '7',
  '٨': '8',
  '٩': '9',
  '۰': '0',
  '۱': '1',
  '۲': '2',
  '۳': '3',
  '۴': '4',
  '۵': '5',
  '۶': '6',
  '۷': '7',
  '۸': '8',
  '۹': '9',
}

function toAsciiDigits(raw: string): string {
  return raw.replace(/[٠-٩۰-۹]/g, (ch) => ARABIC_INDIC_DIGITS[ch] ?? ch)
}

function nationalAfterCountry(rest: string): string | null {
  // 05XXXXXXXX (local with trunk 0)
  if (rest.startsWith('05') && rest.length === 10) return rest.slice(1)
  // 0 + 5XXXXXXXX
  if (rest.startsWith('0') && rest.length === 10 && rest[1] === '5') return rest.slice(1)
  // 5XXXXXXXX
  if (rest.startsWith('5') && rest.length === 9) return rest
  return null
}

export function normalizeTamaraPhone(
  raw: string,
  countryCode: 'AE' | 'SA' = 'AE',
): string {
  let digits = toAsciiDigits(raw).replace(/[^\d]/g, '')
  if (!digits) return ''

  // 00-prefix international
  if (digits.startsWith('00')) digits = digits.slice(2)

  const cc = countryCode === 'SA' ? '966' : '971'

  if (digits.startsWith(cc)) {
    const national = nationalAfterCountry(digits.slice(cc.length))
    if (national) return `${cc}${national}`
    // Already looks like cc + 5XXXXXXXX
    if (digits.length === cc.length + 9 && digits[cc.length] === '5') return digits
    return digits
  }

  if (countryCode === 'SA') {
    if (digits.startsWith('05') && digits.length === 10) return `966${digits.slice(1)}`
    if (digits.startsWith('5') && digits.length === 9) return `966${digits}`
    return digits
  }

  // UAE (default)
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

/**
 * Checkout `/checkout` expects national mobile (9 digits starting with 5).
 * Country is sent separately as `country_code` (AE / SA).
 * Pre-checkout eligibility expects full digits with country (9715… / 9665…).
 */
export function toTamaraCheckoutPhone(
  e164Digits: string,
  countryCode: 'AE' | 'SA',
): string {
  const cc = countryCode === 'SA' ? '966' : '971'
  if (e164Digits.startsWith(cc) && e164Digits.length === cc.length + 9) {
    return e164Digits.slice(cc.length)
  }
  if (/^5\d{8}$/.test(e164Digits)) return e164Digits
  return e164Digits
}

