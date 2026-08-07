/**
 * Snap Conversions API v3 (server-side) — pairs with browser Pixel via shared event_id /
 * client_dedup_id. Docs: https://developers.snap.com/marketing-api/Conversions-API/Introduction
 */

import { createHash } from 'crypto'

export type SnapCapiEventName =
  | 'PAGE_VIEW'
  | 'VIEW_CONTENT'
  | 'ADD_CART'
  | 'START_CHECKOUT'
  | 'PURCHASE'
  | 'SIGN_UP'
  | 'SUBSCRIBE'

export type SnapCapiUserData = {
  email?: string
  phone?: string
  clientIpAddress?: string
  clientUserAgent?: string
  scClickId?: string
  scCookie1?: string
}

export type SnapCapiCustomData = {
  value?: number
  currency?: string
  content_ids?: string[]
  content_category?: string
  content_name?: string
  content_type?: string
  order_id?: string
  num_items?: number | string
}

export type SnapCapiEventInput = {
  eventName: SnapCapiEventName
  eventId: string
  eventSourceUrl: string
  eventTime?: number
  userData?: SnapCapiUserData
  customData?: SnapCapiCustomData
}

function sha256Norm(value: string): string {
  const normalized = value.trim().toLowerCase()
  return createHash('sha256').update(normalized).digest('hex')
}

function hashEmail(email: string): string {
  return sha256Norm(email)
}

/** Digits only with country code, then SHA-256 (Snap phone hashing rules). */
function hashPhone(phone: string): string {
  let digits = phone.replace(/\D/g, '')
  if (digits.startsWith('00')) digits = digits.slice(2)
  return createHash('sha256').update(digits).digest('hex')
}

export function isSnapCapiConfigured(): boolean {
  return Boolean(
    process.env.NEXT_PUBLIC_SNAP_PIXEL_ID?.trim() && process.env.SNAP_CAPI_ACCESS_TOKEN?.trim(),
  )
}

function buildUserData(input?: SnapCapiUserData): Record<string, unknown> {
  const out: Record<string, unknown> = {}
  if (input?.email) out.em = [hashEmail(input.email)]
  if (input?.phone) out.ph = [hashPhone(input.phone)]
  if (input?.clientIpAddress) out.client_ip_address = input.clientIpAddress
  if (input?.clientUserAgent) out.client_user_agent = input.clientUserAgent
  if (input?.scClickId) out.sc_click_id = input.scClickId
  if (input?.scCookie1) out.sc_cookie1 = input.scCookie1
  return out
}

/**
 * Server Purchase for paid orders — event_id matches browser Pixel:
 * `purchase_${checkoutSessionOrPaymentId}` so Snap can dedupe.
 */
export async function sendSnapCapiPurchaseFromOrder(input: {
  eventIdSuffix: string
  value: number
  currency: string
  contentIds?: string[]
  orderId?: string
  email?: string
  phone?: string
  eventSourceUrl?: string
  clientIpAddress?: string
  clientUserAgent?: string
  scClickId?: string
}): Promise<void> {
  if (!isSnapCapiConfigured()) return
  const suffix = input.eventIdSuffix.trim()
  if (!suffix) return
  await sendSnapCapiEvents([
    {
      eventName: 'PURCHASE',
      eventId: `purchase_${suffix}`,
      eventSourceUrl: input.eventSourceUrl || 'https://www.bintsaeed.com/checkout/success',
      userData: {
        email: input.email,
        phone: input.phone,
        clientIpAddress: input.clientIpAddress,
        clientUserAgent: input.clientUserAgent,
        scClickId: input.scClickId,
      },
      customData: {
        value: input.value,
        currency: input.currency.toUpperCase(),
        content_ids: input.contentIds,
        content_type: 'product',
        order_id: input.orderId || suffix,
      },
    },
  ])
}

/** Send one or more events to Snap Conversions API v3. Never throws. */
export async function sendSnapCapiEvents(
  events: SnapCapiEventInput[],
): Promise<{ ok: boolean; error?: string }> {
  const pixelId = process.env.NEXT_PUBLIC_SNAP_PIXEL_ID?.trim()
  const token = process.env.SNAP_CAPI_ACCESS_TOKEN?.trim()
  if (!pixelId || !token || events.length === 0) {
    return { ok: false, error: 'Snap CAPI not configured' }
  }

  const testCode = process.env.SNAP_CAPI_TEST_EVENT_CODE?.trim()
  const payload: Record<string, unknown> = {
    data: events.map((event) => {
      const row: Record<string, unknown> = {
        event_name: event.eventName,
        event_time: event.eventTime ?? Math.floor(Date.now() / 1000),
        event_id: event.eventId,
        action_source: 'WEB',
        event_source_url: event.eventSourceUrl,
        user_data: buildUserData(event.userData),
      }
      if (event.customData && Object.keys(event.customData).length > 0) {
        const custom: Record<string, unknown> = { ...event.customData }
        if (typeof custom.num_items === 'number') {
          custom.num_items = String(custom.num_items)
        }
        row.custom_data = custom
      }
      return row
    }),
  }
  if (testCode) payload.test_event_code = testCode

  try {
    const url = `https://tr.snapchat.com/v3/${encodeURIComponent(pixelId)}/events?access_token=${encodeURIComponent(token)}`
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    })
    if (!res.ok) {
      const text = await res.text().catch(() => '')
      console.error('[snap-capi]', res.status, text.slice(0, 400))
      const hint = text.replace(/\s+/g, ' ').trim().slice(0, 180)
      return { ok: false, error: hint ? `Snap CAPI ${res.status}: ${hint}` : `Snap CAPI ${res.status}` }
    }
    return { ok: true }
  } catch (error) {
    console.error('[snap-capi]', error)
    return { ok: false, error: 'Snap CAPI network error' }
  }
}
