/**
 * Ref-counted body scroll lock — prevents sticky `overflow: hidden` when
 * Quick Buy / MiniCart / mobile nav open and close in overlapping order.
 */

let lockCount = 0
let previousOverflow = ''
let previousTouchAction = ''

export function lockBodyScroll(): () => void {
  if (typeof document === 'undefined') return () => {}

  if (lockCount === 0) {
    previousOverflow = document.body.style.overflow
    previousTouchAction = document.body.style.touchAction
    document.body.style.overflow = 'hidden'
    document.body.style.touchAction = 'none'
    document.documentElement.classList.add('bs-scroll-locked')
  }
  lockCount += 1

  let released = false
  return () => {
    if (released) return
    released = true
    lockCount = Math.max(0, lockCount - 1)
    if (lockCount === 0) {
      document.body.style.overflow = previousOverflow
      document.body.style.touchAction = previousTouchAction
      document.documentElement.classList.remove('bs-scroll-locked')
    }
  }
}

/** Hard reset — use on route changes so a leaked overlay lock never freezes mobile. */
export function forceUnlockBodyScroll(): void {
  if (typeof document === 'undefined') return
  lockCount = 0
  document.body.style.overflow = previousOverflow || ''
  document.body.style.touchAction = previousTouchAction || ''
  document.documentElement.classList.remove('bs-scroll-locked')
  previousOverflow = ''
  previousTouchAction = ''
}
