'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import {
  forceUnlockBodyScroll,
  recoverStuckBodyScroll,
} from '@/lib/ui/bodyScrollLock'

/**
 * Mobile scroll safety net — clears leaked body locks that leave the site
 * feeling “stuck” after menus, sheets, lightboxes, or third-party dialogs.
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

    // First touch after a stuck lock — recover immediately so the user can scroll.
    const onTouch = () => recoverStuckBodyScroll()

    window.addEventListener('pageshow', onPageShow)
    document.addEventListener('visibilitychange', onVisible)
    window.addEventListener('orientationchange', onOrientation)
    document.addEventListener('touchstart', onTouch, { passive: true, capture: true })

    return () => {
      window.removeEventListener('pageshow', onPageShow)
      document.removeEventListener('visibilitychange', onVisible)
      window.removeEventListener('orientationchange', onOrientation)
      document.removeEventListener('touchstart', onTouch, true)
    }
  }, [])

  return null
}
