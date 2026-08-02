/** House community membership — newsletter welcome + privilege codes. */

/** Shared first-purchase code (create once in Stripe; ensured at runtime when possible). */
export const HOUSE_FIRST_PURCHASE_CODE = 'HOUSE15'
export const HOUSE_FIRST_PURCHASE_PERCENT = 15

/** Personal ongoing privilege after first paid order. */
export const HOUSE_PRIVILEGE_PERCENT = 10

/** End of day Gulf time, 29 August 2027. */
export const HOUSE_PRIVILEGE_EXPIRES_AT_ISO = '2027-08-29T23:59:59+04:00'

export function housePrivilegeExpiresAtUnix(): number {
  return Math.floor(new Date(HOUSE_PRIVILEGE_EXPIRES_AT_ISO).getTime() / 1000)
}

export function housePrivilegeExpiresLabel(): string {
  return '29 August 2027'
}
