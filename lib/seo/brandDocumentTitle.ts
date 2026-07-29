/** Browser / document title brand — keep first so truncated tabs still show Bint Saeed. */
export const DOCUMENT_TITLE_BRAND = 'Bint Saeed'

/**
 * Formats any page title as `Bint Saeed | …`.
 * Strips a trailing brand suffix (`| Bint Saeed`, `| Bint Saeed Abu Dhabi`, Arabic/local geo variants)
 * so we never double the brand.
 */
export function brandDocumentTitle(pageTitle: string): string {
  const brand = DOCUMENT_TITLE_BRAND
  let t = pageTitle.replace(/\s+/g, ' ').trim()
  if (!t) return brand
  if (t === brand) return brand
  if (t.startsWith(`${brand} | `) || t.startsWith(`${brand} — `) || t.startsWith(`${brand} – `)) {
    return t
  }

  // Trailing brand / brand + geo (pipe, em/en dash, or hyphen — Google often shows "- Brand").
  t = t
    .replace(
      /\s*[|—–-]\s*Bint Saeed(?:\s+(?:Abu Dhabi|أبوظبي|阿布扎比|Абу-Даби|Abou Dabi|Abu Dabi))?\s*$/i,
      '',
    )
    .trim()
  if (!t || t === brand) return brand
  return `${brand} | ${t}`
}
