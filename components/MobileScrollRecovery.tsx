'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import {
  forceUnlockBodyScroll,
  recoverStuckBodyScroll,
} from '@/lib/ui/bodyScrollLock'

/**
 * Scroll safety net — clears leaked body locks that leave the site
 * feeling “stuck” after menus, sheets, lightboxes, or third-party dialogs.
 * Also nudges desktop Lenis when the page stops moving despite wheel input.
 */
export default function MobileScrollRecovery() {
  const pathname = usePathname()

  useEffect(() => {
    forceUnlockBodyScroll()
    // After paint, clear any late-applied widget locks with no owner.
    const t = window.setTimeout(() => recoverStuckBodyScroll(), 120)
    return () => window.clearTimeout(t)
  }, [pathname])

  useEffect(() => {
    const onPageShow = (event: PageTransitionEvent) => {
      // bfcache restore often keeps overflow:hidden from the previous visit.
      if (event.persisted) forceUnlockBodyScroll()
      else recoverStuckBodyScroll()
    }
    const onVisible = () => {
      if (document.visibilityState === 'visible') recoverStuckBodyScroll()
    }
    const onOrientation = () => {
      window.setTimeout(() => recoverStuckBodyScroll(), 50)
    }

    const nudgeLenis = () => {
      window.dispatchEvent(
        new CustomEvent('bs:body-scroll-unlocked', { detail: { scrollY: window.scrollY } }),
      )
    }

    const onTouchStart = () => {
      recoverStuckBodyScroll()
    }

    // If the user wheels and scrollY doesn't move (not at page edges), Lenis may be
    // stopped/desynced after a lightbox — nudge once, don't spam every wheel.
    let lastY = typeof window !== 'undefined' ? window.scrollY : 0
    let stuckStreak = 0
    let lastNudge = 0
    const onWheel = (e: WheelEvent) => {
      recoverStuckBodyScroll()
      const before = window.scrollY
      requestAnimationFrame(() => {
        const after = window.scrollY
        const maxScroll = Math.max(
          0,
          document.documentElement.scrollHeight - window.innerHeight,
        )
        const wantingUp = e.deltaY < 0
        const wantingDown = e.deltaY > 0
        const atTop = before <= 0 && wantingUp
        const atBottom = before >= maxScroll - 1 && wantingDown
        if (atTop || atBottom || Math.abs(e.deltaY) < 4) {
          stuckStreak = 0
          lastY = after
          return
        }
        if (Math.abs(after - before) < 1 && Math.abs(after - lastY) < 1) {
          stuckStreak += 1
          if (stuckStreak >= 2 && Date.now() - lastNudge > 800) {
            lastNudge = Date.now()
            stuckStreak = 0
            nudgeLenis()
          }
        } else {
          stuckStreak = 0
        }
        lastY = after
      })
    }

    window.addEventListener('pageshow', onPageShow)
    document.addEventListener('visibilitychange', onVisible)
    window.addEventListener('orientationchange', onOrientation)
    document.addEventListener('touchstart', onTouchStart, { passive: true, capture: true })
    document.addEventListener('wheel', onWheel, { passive: true, capture: true })

    return () => {
      window.removeEventListener('pageshow', onPageShow)
      document.removeEventListener('visibilitychange', onVisible)
      window.removeEventListener('orientationchange', onOrientation)
      document.removeEventListener('touchstart', onTouchStart, true)
      document.removeEventListener('wheel', onWheel, true)
    }
  }, [])

  return null
}
