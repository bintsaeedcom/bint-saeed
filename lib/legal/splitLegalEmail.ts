import { OFFICIAL_EMAILS } from '@/lib/brand/officialEmails'

/** Split a legal paragraph so `legal@…` can be rendered as a mailto link. */
export function splitLegalEmail(text: string): { before: string; after: string } | null {
  const email = OFFICIAL_EMAILS.legal
  const idx = text.indexOf(email)
  if (idx < 0) return null
  return {
    before: text.slice(0, idx),
    after: text.slice(idx + email.length),
  }
}
