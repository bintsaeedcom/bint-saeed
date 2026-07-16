'use client'

import { getConsentState } from '@/lib/analytics/consent'

const NOTIFIED_KEY = 'bs_clarity_slack_session'

type ClarityMetadata = {
  projectId?: string
  userId?: string
  sessionId?: string
}

function readClarityMetadata(): Promise<ClarityMetadata | null> {
  return new Promise((resolve) => {
    if (typeof window === 'undefined' || typeof window.clarity !== 'function') {
      resolve(null)
      return
    }
    try {
      window.clarity('metadata', (meta: ClarityMetadata) => {
        resolve(meta && typeof meta === 'object' ? meta : null)
      }, false)
    } catch {
      resolve(null)
    }
  })
}

/**
 * After analytics consent, post one Slack message per Clarity session
 * with a clickable Watch link for #clarity-live.
 */
export async function notifyClarityLiveSlack(): Promise<void> {
  if (typeof window === 'undefined') return
  if (!getConsentState().analytics) return
  if (!process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID?.trim()) return

  let meta: ClarityMetadata | null = null
  for (let attempt = 0; attempt < 12; attempt++) {
    meta = await readClarityMetadata()
    if (meta?.projectId && meta?.userId && meta?.sessionId) break
    await new Promise((r) => window.setTimeout(r, 500))
  }

  if (!meta?.projectId || !meta.userId || !meta.sessionId) return

  const sessionKey = `${meta.projectId}:${meta.userId}:${meta.sessionId}`
  try {
    if (sessionStorage.getItem(NOTIFIED_KEY) === sessionKey) return
    sessionStorage.setItem(NOTIFIED_KEY, sessionKey)
  } catch {
    /* continue */
  }

  try {
    const res = await fetch('/api/analytics/clarity-live', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        projectId: meta.projectId,
        userId: meta.userId,
        sessionId: meta.sessionId,
        path: window.location.pathname + window.location.search,
        referrer: document.referrer || undefined,
      }),
      keepalive: true,
    })
    if (!res.ok) {
      try {
        sessionStorage.removeItem(NOTIFIED_KEY)
      } catch {
        /* ignore */
      }
    }
  } catch {
    try {
      sessionStorage.removeItem(NOTIFIED_KEY)
    } catch {
      /* ignore */
    }
  }
}
