'use client'

import { useLayoutEffect, useRef, type MouseEvent } from 'react'

type AdjustState = {
  scrollY: number
  topBefore: number
  button: HTMLButtonElement
}

/**
 * Keeps a toggle control visually stable when expanding/collapsing content.
 * Does not scroll the page to another section.
 */
export function useStableToggleScroll(dependency: unknown) {
  const adjustRef = useRef<AdjustState | null>(null)

  const prepareToggle = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    event.stopPropagation()
    const button = event.currentTarget
    adjustRef.current = {
      scrollY: window.scrollY,
      topBefore: button.getBoundingClientRect().top,
      button,
    }
  }

  useLayoutEffect(() => {
    const adj = adjustRef.current
    if (!adj) return
    adjustRef.current = null

    const topAfter = adj.button.getBoundingClientRect().top
    const delta = topAfter - adj.topBefore
    if (Math.abs(delta) > 0.5) {
      window.scrollTo({ top: adj.scrollY + delta, behavior: 'auto' })
    }
  }, [dependency])

  return { prepareToggle }
}
