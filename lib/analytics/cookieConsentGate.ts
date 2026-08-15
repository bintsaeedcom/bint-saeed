'use client'

import { hasStoredCookieChoice } from '@/lib/analytics/consent'
import { hasRegionalExperienceChoice } from '@/lib/geo/geoDetection'

/** Short pause on returning visits where regional preferences are already known. */
export const COOKIE_DELAY_MS = 2_500
/** Breathing room between closing regional preferences and showing cookies. */
export const COOKIE_AFTER_REGIONAL_MS = 1_800
/** If regional detection never responds, still ask for cookies. */
export const COOKIE_FALLBACK_MS = 8_000

type ShowListener = () => void

/**
 * Module singleton — LayoutWrapper remounts (coming-soon ↔ shop, Strict Mode)
 * used to restart timers and re-show the banner. Auto-prompt runs at most once
 * per tab until the user chooses, then never again while storage remembers.
 */
let autoPromptScheduled = false
let autoPromptConsumed = false
/** Timer fired while CookieConsent was unmounted — deliver on next subscribe. */
let pendingShow = false
let delayTimer: number | undefined
let fallbackTimer: number | undefined
let regionalListenerAttached = false
let minDelayDone = false
let regionalSettled = false
let regionalOpen = false
const showListeners = new Set<ShowListener>()

function clearDelayTimer() {
  if (typeof window === 'undefined') return
  if (delayTimer != null) window.clearTimeout(delayTimer)
  delayTimer = undefined
}

function clearTimers() {
  if (typeof window === 'undefined') return
  clearDelayTimer()
  if (fallbackTimer != null) window.clearTimeout(fallbackTimer)
  fallbackTimer = undefined
}

function deliverShow() {
  if (hasStoredCookieChoice()) {
    autoPromptConsumed = true
    pendingShow = false
    clearTimers()
    return
  }
  if (showListeners.size === 0) {
    pendingShow = true
    return
  }
  autoPromptConsumed = true
  pendingShow = false
  clearTimers()
  showListeners.forEach((fn) => {
    try {
      fn()
    } catch {
      /* ignore */
    }
  })
}

function maybeShow() {
  if (autoPromptConsumed || hasStoredCookieChoice()) {
    autoPromptConsumed = true
    clearTimers()
    return
  }
  if (!minDelayDone || !regionalSettled) return
  deliverShow()
}

function ensureScheduled() {
  if (typeof window === 'undefined') return
  if (autoPromptConsumed || hasStoredCookieChoice()) {
    autoPromptConsumed = true
    return
  }
  if (autoPromptScheduled) return

  autoPromptScheduled = true
  minDelayDone = false
  regionalSettled = hasRegionalExperienceChoice()
  regionalOpen = false

  if (!regionalListenerAttached) {
    regionalListenerAttached = true
    window.addEventListener('regional-experience-opened', () => {
      regionalOpen = true
      regionalSettled = false
      minDelayDone = false
      clearDelayTimer()
    })
    window.addEventListener('regional-experience-closed', () => {
      regionalOpen = false
      regionalSettled = true
      minDelayDone = false
      clearDelayTimer()
      delayTimer = window.setTimeout(() => {
        minDelayDone = true
        maybeShow()
      }, COOKIE_AFTER_REGIONAL_MS)
    })
  }

  delayTimer = window.setTimeout(() => {
    minDelayDone = true
    maybeShow()
  }, COOKIE_DELAY_MS)

  fallbackTimer = window.setTimeout(() => {
    if (regionalOpen) return
    regionalSettled = true
    minDelayDone = true
    maybeShow()
  }, COOKIE_FALLBACK_MS)
}

/**
 * Subscribe to the one-shot auto cookie prompt. Safe across React remounts.
 */
export function subscribeCookieAutoPrompt(onShow: ShowListener): () => void {
  if (typeof window === 'undefined') return () => {}

  if (hasStoredCookieChoice() || autoPromptConsumed) {
    autoPromptConsumed = true
    return () => {}
  }

  showListeners.add(onShow)

  if (pendingShow) {
    deliverShow()
  } else {
    ensureScheduled()
  }

  return () => {
    showListeners.delete(onShow)
  }
}

/** Call after Accept / Essential only so remounts cannot auto-prompt again. */
export function markCookieChoiceMade() {
  autoPromptConsumed = true
  pendingShow = false
  clearTimers()
}
