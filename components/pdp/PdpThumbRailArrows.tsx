'use client'

import { useCallback, useEffect, useState } from 'react'
import type { Swiper as SwiperType } from 'swiper'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'

type PdpThumbRailArrowsProps = {
  swiper: SwiperType | null
  labelUp: string
  labelDown: string
}

const BUTTON_CLASS =
  'absolute left-1/2 z-20 flex h-7 w-7 -translate-x-1/2 items-center justify-center rounded-full border border-brand-darkRed/15 bg-[rgba(250,248,245,0.92)] text-brand-darkRed/75 shadow-[0_1px_6px_rgba(59,0,20,0.12)] backdrop-blur-[2px] transition duration-200 hover:border-brand-darkRed/30 hover:text-brand-darkRed'

/**
 * Up / down affordance for the vertical PDP thumbnail rail — the rail clips its overflow,
 * so without arrows there is no signal that more images sit above or below the viewport.
 */
export default function PdpThumbRailArrows({
  swiper,
  labelUp,
  labelDown,
}: PdpThumbRailArrowsProps) {
  const [canScrollUp, setCanScrollUp] = useState(false)
  const [canScrollDown, setCanScrollDown] = useState(false)

  useEffect(() => {
    if (!swiper || swiper.destroyed) return

    const sync = () => {
      if (swiper.destroyed) return
      const scrollable = !swiper.isLocked && swiper.slides.length > 1
      setCanScrollUp(scrollable && !swiper.isBeginning)
      setCanScrollDown(scrollable && !swiper.isEnd)
    }

    sync()
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
    events.forEach((event) => swiper.on(event, sync))

    return () => {
      if (swiper.destroyed) return
      events.forEach((event) => swiper.off(event, sync))
    }
  }, [swiper])

  // freeMode leaves the rail between snap points, so step by viewport rather than by slide.
  const scrollBy = useCallback(
    (dir: 'up' | 'down') => {
      if (!swiper || swiper.destroyed) return
      const step = (swiper.height || 0) * 0.7
      const target = swiper.translate + (dir === 'up' ? step : -step)
      swiper.translateTo(
        Math.max(swiper.maxTranslate(), Math.min(swiper.minTranslate(), target)),
        320,
      )
    },
    [swiper],
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
        className={`${BUTTON_CLASS} top-1 ${canScrollUp ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
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
        className={`${BUTTON_CLASS} bottom-1 ${canScrollDown ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
        data-cursor-hover
      >
        <FiChevronDown className="h-3.5 w-3.5" aria-hidden />
      </button>
    </>
  )
}
