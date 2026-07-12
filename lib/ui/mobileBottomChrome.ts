/**
 * Coordinates fixed bottom chrome (sticky ATC, cart bar, cookie bar)
 * so WhatsApp and page padding can clear them without overlap.
 */
const heights = new Map<string, number>()

function syncCssVar() {
  if (typeof document === 'undefined') return
  let max = 0
  for (const h of heights.values()) {
    if (h > max) max = h
  }
  document.documentElement.style.setProperty('--mobile-bottom-chrome', `${max}px`)
  document.documentElement.dataset.mobileBottomChrome = max > 0 ? '1' : '0'
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
