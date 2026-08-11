/**
 * Ref-counted body scroll lock — prevents sticky scroll freeze when
 * Quick Buy / MiniCart / mobile nav / lightbox open and close out of order.
 *
 * Uses the iOS-safe `position: fixed` + restore-scrollY pattern. Plain
 * `overflow: hidden` alone often leaves Safari unable to scroll after unlock.
 */

let lockCount = 0
let scrollY = 0
let previousHtmlOverflow = ''
let previousBodyOverflow = ''
let previousBodyPosition = ''
let previousBodyTop = ''
let previousBodyLeft = ''
let previousBodyRight = ''
let previousBodyWidth = ''
let previousBodyTouchAction = ''
let previousBodyPaddingRight = ''

function scrollbarGap(): number {
  if (typeof window === 'undefined') return 0
  return Math.max(0, window.innerWidth - document.documentElement.clientWidth)
}

function isOurLockActive(): boolean {
  if (typeof document === 'undefined') return false
  return (
    lockCount > 0 ||
    document.documentElement.classList.contains('bs-scroll-locked') ||
    document.body.style.position === 'fixed'
  )
}

export function lockBodyScroll(): () => void {
  if (typeof document === 'undefined') return () => {}

  if (lockCount === 0) {
    const body = document.body
    const html = document.documentElement
    scrollY = window.scrollY || window.pageYOffset || 0

    previousHtmlOverflow = html.style.overflow
    previousBodyOverflow = body.style.overflow
    previousBodyPosition = body.style.position
    previousBodyTop = body.style.top
    previousBodyLeft = body.style.left
    previousBodyRight = body.style.right
    previousBodyWidth = body.style.width
    previousBodyTouchAction = body.style.touchAction
    previousBodyPaddingRight = body.style.paddingRight

    const gap = scrollbarGap()
    if (gap > 0) {
      body.style.paddingRight = `${gap}px`
    }

    html.style.overflow = 'hidden'
    body.style.overflow = 'hidden'
    body.style.position = 'fixed'
    body.style.top = `-${scrollY}px`
    body.style.left = '0'
    body.style.right = '0'
    body.style.width = '100%'
    // Keep vertical pan available inside overlay sheets; lock is via position:fixed.
    body.style.touchAction = 'pan-y pinch-zoom'
    html.classList.add('bs-scroll-locked')
  }

  lockCount += 1

  let released = false
  return () => {
    if (released) return
    released = true
    if (lockCount <= 0) return
    lockCount -= 1
    if (lockCount === 0 && document.documentElement.classList.contains('bs-scroll-locked')) {
      restoreBodyScroll()
    }
  }
}

function restoreBodyScroll(): void {
  if (typeof document === 'undefined') return
  const body = document.body
  const html = document.documentElement
  const y = scrollY

  html.style.overflow = previousHtmlOverflow
  body.style.overflow = previousBodyOverflow
  body.style.position = previousBodyPosition
  body.style.top = previousBodyTop
  body.style.left = previousBodyLeft
  body.style.right = previousBodyRight
  body.style.width = previousBodyWidth
  body.style.touchAction = previousBodyTouchAction
  body.style.paddingRight = previousBodyPaddingRight
  html.classList.remove('bs-scroll-locked')

  previousHtmlOverflow = ''
  previousBodyOverflow = ''
  previousBodyPosition = ''
  previousBodyTop = ''
  previousBodyLeft = ''
  previousBodyRight = ''
  previousBodyWidth = ''
  previousBodyTouchAction = ''
  previousBodyPaddingRight = ''
  scrollY = 0

  // Restore scroll after layout reflow — critical on iOS Safari.
  window.requestAnimationFrame(() => {
    window.scrollTo(0, y)
    // Notify Lenis (desktop smooth scroll) to resync — otherwise wheel can feel stuck
    // after lightbox / sheet unlock when animatedScroll desyncs from window.scrollY.
    window.dispatchEvent(
      new CustomEvent('bs:body-scroll-unlocked', { detail: { scrollY: y } }),
    )
  })
}

/** Hard reset — route changes, bfcache restore, or leaked overlay locks. */
export function forceUnlockBodyScroll(): void {
  if (typeof document === 'undefined') return
  const ourLock = isOurLockActive()
  const tabbyOpen = document.documentElement.classList.contains('tabby-dialog-open')
  lockCount = 0
  if (ourLock) {
    restoreBodyScroll()
  } else {
    document.documentElement.classList.remove('bs-scroll-locked')
  }
  if (tabbyOpen) {
    document.documentElement.classList.remove('tabby-dialog-open')
  }
}

/** True when a known overlay owns the scroll lock. */
export function hasActiveScrollLockOwner(): boolean {
  if (typeof document === 'undefined') return false
  if (document.documentElement.dataset.mobileNavOpen === '1') return true
  if (document.documentElement.classList.contains('tabby-dialog-open')) return true
  if (document.querySelector('[data-scroll-lock-owner="true"]')) return true
  return false
}

/**
 * If the document is locked but no owner remains (leaked lock), unlock.
 * Safe to call often from recovery hooks.
 */
export function recoverStuckBodyScroll(): void {
  if (typeof document === 'undefined') return
  const locked =
    isOurLockActive() || document.documentElement.classList.contains('tabby-dialog-open')
  if (!locked) return
  if (hasActiveScrollLockOwner()) return
  forceUnlockBodyScroll()
}
