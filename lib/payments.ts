/**
 * Optional BNPL deep links (configure after Tabby / Tamara merchant onboarding).
 * Typical production flow uses their server APIs to create a session; these URLs
 * are for landing pages or placeholder redirects until that is wired.
 */
export function getTabbyCheckoutUrl(): string | null {
  const u = process.env.NEXT_PUBLIC_TABBY_CHECKOUT_URL?.trim()
  return u || null
}

export function getTamaraCheckoutUrl(): string | null {
  const u = process.env.NEXT_PUBLIC_TAMARA_CHECKOUT_URL?.trim()
  return u || null
}

export function bnplConfigured(): { tabby: boolean; tamara: boolean } {
  return {
    tabby: Boolean(getTabbyCheckoutUrl()),
    tamara: Boolean(getTamaraCheckoutUrl()),
  }
}
