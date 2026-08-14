'use client'

import { useCallback, useEffect, useState, type RefObject } from 'react'
import type { Swiper as SwiperType } from 'swiper'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'

type PdpThumbRailArrowsProps = {
  swiperRef: RefObject<SwiperType | null>
  slideCount: number
  /** Remount key (color / product) so arrow state resets when the rail swaps. */
  resetKey?: string
  labelUp: string
  labelDown: string
}

const BUTTON_CLASS =
  'absolute left-1/2 z-20 flex h-7 w-7 -translate-x-1/2 items-center justify-center rounded-full border border-brand-darkRed/15 bg-[rgba(250,248,245,0.92)] text-brand-darkRed/75 shadow-[0_1px_6px_rgba(59,0,20,0.12)] backdrop-blur-[2px] transition-colors duration-200 hover:border-brand-darkRed/30 hover:text-brand-darkRed'

/**
 * Up / down affordance for the vertical PDP thumbnail rail — the rail clips its overflow,
 * so without arrows there is no signal that more images sit above or below the viewport.
 */
export default function PdpThumbRailArrows({
  swiperRef,
  slideCount,
  resetKey = '',
  labelUp,
  labelDown,
}: PdpThumbRailArrowsProps) {
  const [canScrollUp, setCanScrollUp] = useState(false)
  // The vertical rail always shows five thumbnails. Starting from the image count
  // keeps the affordance visible when Swiper initializes inside a hidden mobile layout.
  const [canScrollDown, setCanScrollDown] = useState(slideCount > 5)
  const resolveSwiper = useCallback(() => {
    if (swiperRef.current && !swiperRef.current.destroyed) return swiperRef.current
    const rail = document.querySelector('.product-gallery-thumbs--vertical') as
      | (HTMLElement & { swiper?: SwiperType })
      | null
    const fromDom = rail?.swiper ?? null
    return fromDom && !fromDom.destroyed ? fromDom : null
  }, [swiperRef])

  useEffect(() => {
    setCanScrollUp(false)
    setCanScrollDown(slideCount > 5)

    let cancelled = false
    let attached: SwiperType | null = null
    let raf = 0
    let tries = 0

    const sync = () => {
      const swiper = attached && !attached.destroyed ? attached : resolveSwiper()
      if (!swiper || swiper.destroyed) return
      if (swiper.el.clientHeight === 0) {
        setCanScrollUp(false)
        setCanScrollDown(slideCount > 5)
        return
      }
      const scrollable = !swiper.isLocked && swiper.slides.length > 1
      setCanScrollUp(scrollable && !swiper.isBeginning)
      setCanScrollDown(scrollable && !swiper.isEnd)
    }

    const events = [
      'progress',
      'setTranslate',
      'transitionEnd',
      'resize',
      'lock',
      'unlock',
      'slidesLengthChange',
      'observerUpdate',
    ] as const

    const attach = () => {
      if (cancelled) return
      const swiper = resolveSwiper()
      if (!swiper || swiper.destroyed) {
        if (tries++ < 40) {
          raf = window.requestAnimationFrame(attach)
        }
        return
      }
      attached = swiper
      sync()
      events.forEach((event) => swiper.on(event, sync))
    }

    const syncAfterResize = () => window.requestAnimationFrame(sync)
    attach()
    window.addEventListener('resize', syncAfterResize)

    return () => {
      cancelled = true
      window.cancelAnimationFrame(raf)
      window.removeEventListener('resize', syncAfterResize)
      if (!attached || attached.destroyed) return
      events.forEach((event) => attached!.off(event, sync))
    }
  }, [resolveSwiper, slideCount, resetKey])

  // freeMode leaves the rail between snap points, so step by viewport rather than by slide.
  const scrollBy = useCallback(
    (dir: 'up' | 'down') => {
      const swiper = resolveSwiper()
      if (!swiper || swiper.destroyed) return
      const step = (swiper.height || 0) * 0.7
      const target = swiper.translate + (dir === 'up' ? step : -step)
      const min = swiper.minTranslate()
      const max = swiper.maxTranslate()
      const clamped = Math.max(max, Math.min(min, target))
      swiper.translateTo(clamped, 320)
      swiper.updateProgress()
      setCanScrollUp(clamped < min - 0.5)
      setCanScrollDown(clamped > max + 0.5)
    },
    [resolveSwiper],
  )

  if (!canScrollUp && !canScrollDown) return null

  return (
    <>
      <button
        type="button"
        aria-label={labelUp}
        aria-hidden={!canScrollUp}
        tabIndex={canScrollUp ? 0 : -1}
        onClick={() => scrollBy('up')}
        className={`${BUTTON_CLASS} top-1`}
        style={{ opacity: canScrollUp ? 1 : 0, pointerEvents: canScrollUp ? 'auto' : 'none' }}
        data-cursor-hover
      >
        <FiChevronUp className="h-3.5 w-3.5" aria-hidden />
      </button>
      <button
        type="button"
        aria-label={labelDown}
        aria-hidden={!canScrollDown}
        tabIndex={canScrollDown ? 0 : -1}
        onClick={() => scrollBy('down')}
        className={`${BUTTON_CLASS} bottom-1`}
        style={{ opacity: canScrollDown ? 1 : 0, pointerEvents: canScrollDown ? 'auto' : 'none' }}
        data-cursor-hover
      >
        <FiChevronDown className="h-3.5 w-3.5" aria-hidden />
      </button>
    </>
  )
}
