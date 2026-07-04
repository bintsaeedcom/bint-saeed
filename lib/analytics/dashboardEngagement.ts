'use client'

/** First-party ops analytics — not gated on marketing/analytics consent. */

type EngagementType = 'product_view' | 'product_click'

function visitorPayload() {
  if (typeof window === 'undefined') return {}
  let location: Record<string, unknown> | null = null
  try {
    const raw = localStorage.getItem('bs_location')
    if (raw) location = JSON.parse(raw)
  } catch {
    location = null
  }
  return {
    visitorId: localStorage.getItem('bs_visitor_id') || undefined,
    browser: {
      path: window.location.pathname + window.location.search,
      title: document.title,
    },
    location,
  }
}

function postEngagement(type: EngagementType, data: Record<string, unknown>) {
  if (typeof window === 'undefined') return
  const body = JSON.stringify({ type, data: { ...visitorPayload(), ...data } })
  try {
    if (navigator.sendBeacon) {
      navigator.sendBeacon('/api/analytics/slack', new Blob([body], { type: 'application/json' }))
      return
    }
    void fetch('/api/analytics/slack', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body,
      keepalive: true,
    })
  } catch {
    /* best-effort */
  }
}

export function mirrorDashboardEngagement(
  eventName: string,
  params?: Record<string, string | number | boolean | null | undefined>,
) {
  const productId = params?.item_id
  if (typeof productId !== 'string' || !productId) return

  const payload = {
    productId,
    productName: typeof params.item_name === 'string' ? params.item_name : productId,
    productCategory: typeof params.item_category === 'string' ? params.item_category : undefined,
    path: typeof window !== 'undefined' ? window.location.pathname : undefined,
  }

  if (eventName === 'view_item') postEngagement('product_view', payload)
  if (eventName === 'select_item') postEngagement('product_click', payload)
}
