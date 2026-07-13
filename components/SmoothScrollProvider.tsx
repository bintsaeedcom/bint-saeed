'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

function shouldUseLenis(): boolean {
  if (typeof window === 'undefined') return false
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false
  // Touch / coarse pointer: native scroll is more fluent (Lenis often feels “stuck” scrolling up)
  if (window.matchMedia('(hover: none), (pointer: coarse)').matches) return false
  if (navigator.maxTouchPoints > 0 && window.matchMedia('(max-width: 1024px)').matches) return false
  return true
}

export default function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (!shouldUseLenis()) return

    gsap.registerPlugin(ScrollTrigger)

    const lenis = new Lenis({
      duration: 1.62,
      wheelMultiplier: 0.78,
      touchMultiplier: 0.72,
      smoothWheel: true,
      syncTouch: false,
      autoRaf: false,
      easing: (t) => 1 - Math.pow(1 - t, 4),
    })

    const onScroll = () => ScrollTrigger.update()
    lenis.on('scroll', onScroll)

    const raf = (time: number) => {
      lenis.raf(time * 1000)
    }

    gsap.ticker.add(raf)
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(raf)
      lenis.off('scroll', onScroll)
      lenis.destroy()
    }
  }, [])

  return <>{children}</>
}
