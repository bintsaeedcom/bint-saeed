/**
 * Coordinates fixed bottom chrome (sticky ATC, cart bar, cookie bar)
 * so WhatsApp and page padding can clear them without overlap.
 */
const heights = new Map<string, number>()

/** Commerce CTAs that must never sit under WhatsApp. */
const COMMERCE_CHROME_IDS = new Set(['cart-bar', 'sticky-atc', 'checkout-bar'])

function syncCssVar() {
  if (typeof document === 'undefined') return
  let max = 0
  let commerceActive = false
  for (const [id, h] of heights.entries()) {
    if (h > max) max = h
    if (COMMERCE_CHROME_IDS.has(id) && h > 0) commerceActive = true
  }
  // Cap so a bad measurement can never push fixed docks into mid-viewport.
  const capped = Math.min(max, Math.round(typeof window !== 'undefined' ? window.innerHeight * 0.4 : 320))
  document.documentElement.style.setProperty('--mobile-bottom-chrome', `${capped}px`)
  document.documentElement.dataset.mobileBottomChrome = capped > 0 ? '1' : '0'
  document.documentElement.dataset.commerceBottomChrome = commerceActive ? '1' : '0'
}

export function publishMobileBottomChrome(id: string, heightPx: number) {
  if (typeof document === 'undefined') return
  if (heightPx <= 0) heights.delete(id)
  else heights.set(id, Math.ceil(heightPx))
  syncCssVar()
}

export function clearMobileBottomChrome(id: string) {
  if (typeof document === 'undefined') return
  heights.delete(id)
  syncCssVar()
}

export function hasCommerceBottomChrome(): boolean {
  if (typeof document === 'undefined') return false
  return document.documentElement.dataset.commerceBottomChrome === '1'
}
