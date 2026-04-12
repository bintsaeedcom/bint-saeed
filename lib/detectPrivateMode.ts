/**
 * Heuristic private / incognito detection (not 100% reliable across browsers).
 * Used only for /preview gate UX per product request.
 */
export async function detectPrivateBrowsingMode(): Promise<boolean> {
  if (typeof window === 'undefined') return false

  try {
    localStorage.setItem('__bs_pv', '1')
    localStorage.removeItem('__bs_pv')
  } catch {
    return true
  }

  try {
    if ('storage' in navigator && 'estimate' in navigator.storage) {
      const est = await navigator.storage.estimate()
      if (typeof est.quota === 'number' && est.quota > 0 && est.quota < 140 * 1024 * 1024) {
        return true
      }
    }
  } catch {
    return true
  }

  return false
}
