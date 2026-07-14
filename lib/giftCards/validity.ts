/** Gift cards are valid for one Gregorian calendar year from issue. */

export function giftCardValidityYears(): number {
  return 1
}

/** Expiry at end of the Gregorian day, one year after issue. */
export function giftCardExpiryFrom(issuedAt: Date = new Date()): string {
  const d = new Date(issuedAt)
  d.setFullYear(d.getFullYear() + giftCardValidityYears())
  return d.toISOString()
}
