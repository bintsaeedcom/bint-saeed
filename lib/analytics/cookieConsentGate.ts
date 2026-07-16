'use client'

import { hasStoredCookieChoice } from '@/lib/analytics/consent'
import { hasRegionalExperienceChoice } from '@/lib/geo/geoDetection'

/** After first browse + regional — avoid stacking two overlays. */
export const COOKIE_DELAY_MS = 8_000
/** If regional never settles (geo miss / bot skip), still ask for cookies. */
export const COOKIE_FALLBACK_MS = 20_000

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
const showListeners = new Set<ShowListener>()

function clearTimers() {
  if (typeof window === 'undefined') return
  if (delayTimer != null) window.clearTimeout(delayTimer)
  if (fallbackTimer != null) window.clearTimeout(fallbackTimer)
  delayTimer = undefined
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

  if (!regionalListenerAttached) {
    regionalListenerAttached = true
    window.addEventListener('regional-experience-closed', () => {
      regionalSettled = true
      maybeShow()
    })
  }

  delayTimer = window.setTimeout(() => {
    minDelayDone = true
    maybeShow()
  }, COOKIE_DELAY_MS)

  fallbackTimer = window.setTimeout(() => {
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
