'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import 'lenis/dist/lenis.css'

function shouldUseLenis(): boolean {
  if (typeof window === 'undefined') return false
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false
  // Any touch surface: native scroll only. Lenis + syncTouch:false leaves ScrollTrigger
  // and GSAP reveals stuck (black/blank hero on phones).
  if (navigator.maxTouchPoints > 0) return false
  if (window.matchMedia('(hover: none), (pointer: coarse)').matches) return false
  return true
}

/**
 * Site-wide smooth scrolling (desktop). Home GSAP/Framer scroll work rides Lenis via
 * ScrollTrigger.update on the shared GSAP ticker — missing Lenis CSS previously caused jank.
 */
export default function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  useEffect(() => {
    if (!shouldUseLenis()) return

    let cancelled = false
    let dispose = () => {}

    const start = async () => {
      const [{ default: Lenis }, { gsap }, { ScrollTrigger }] = await Promise.all([
        import('lenis'),
        import('gsap'),
        import('gsap/ScrollTrigger'),
      ])
      if (cancelled) return

      gsap.registerPlugin(ScrollTrigger)

      // Prefer lerp over a long fixed duration — tracks the wheel more naturally on long pages like /home
      const lenis = new Lenis({
        autoRaf: false,
        lerp: 0.085,
        smoothWheel: true,
        syncTouch: false,
        wheelMultiplier: 0.95,
        touchMultiplier: 1,
        overscroll: true,
      })

      const onScroll = () => ScrollTrigger.update()
      lenis.on('scroll', onScroll)

      const raf = (time: number) => {
        lenis.raf(time * 1000)
      }

      gsap.ticker.add(raf)
      gsap.ticker.lagSmoothing(0)

      // Recalculate after fonts/images settle and on route change (home → manifesto stack)
      const refresh = () => ScrollTrigger.refresh()
      requestAnimationFrame(refresh)
      window.addEventListener('load', refresh, { once: true })
      window.addEventListener('resize', refresh)

      dispose = () => {
        window.removeEventListener('resize', refresh)
        gsap.ticker.remove(raf)
        lenis.off('scroll', onScroll)
        lenis.destroy()
      }
    }

    let cancelStart: () => void
    if (typeof window.requestIdleCallback === 'function') {
      const idleId = window.requestIdleCallback(() => void start(), { timeout: 1_500 })
      cancelStart = () => window.cancelIdleCallback(idleId)
    } else {
      const timerId = globalThis.setTimeout(() => void start(), 500)
      cancelStart = () => globalThis.clearTimeout(timerId)
    }

    return () => {
      cancelled = true
      cancelStart()
      dispose()
    }
  }, [pathname])

  return <>{children}</>
}
