/** Official Bint Saeed inboxes — single source of truth for site-wide contact links. */
export const OFFICIAL_EMAILS = {
  hello: 'hello@bintsaeed.com',
  orders: 'orders@bintsaeed.com',
  legal: 'legal@bintsaeed.com',
  partnerships: 'partnerships@bintsaeed.com',
  wholesale: 'wholesale@bintsaeed.com',
  returns: 'returns@bintsaeed.com',
  support: 'support@bintsaeed.com',
  press: 'press@bintsaeed.com',
} as const

export type OfficialEmailKey = keyof typeof OFFICIAL_EMAILS

export function officialMailto(key: OfficialEmailKey): string {
  return `mailto:${OFFICIAL_EMAILS[key]}`
}
