'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (typeof window === 'undefined') return
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) return

    gsap.registerPlugin(ScrollTrigger)

    const lenis = new Lenis({
      // Slightly denser, cinematic glide with calmer acceleration.
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
      // GSAP ticker time is in seconds; Lenis expects milliseconds.
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
