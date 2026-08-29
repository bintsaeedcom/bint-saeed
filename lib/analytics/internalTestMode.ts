/**
 * Owner-controlled internal/test mode — first-party browser flag only.
 * Never inferred from IP or geography.
 */
export const INTERNAL_TEST_MODE_KEY = 'bs_internal_test_mode'

export function markInternalTestMode(): void {
  if (typeof window === 'undefined') return
  try {
    localStorage.setItem(INTERNAL_TEST_MODE_KEY, '1')
  } catch {
    /* private mode */
  }
}

export function clearInternalTestMode(): void {
  if (typeof window === 'undefined') return
  try {
    localStorage.removeItem(INTERNAL_TEST_MODE_KEY)
  } catch {
    /* ignore */
  }
}

export function isInternalTestModeActive(): boolean {
  if (typeof window === 'undefined') return false
  try {
    return localStorage.getItem(INTERNAL_TEST_MODE_KEY) === '1'
  } catch {
    return false
  }
}
