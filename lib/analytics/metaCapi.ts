/**
 * Meta Conversions API (server-side) — pairs with browser Pixel via shared event_id.
 * Docs: https://developers.facebook.com/docs/marketing-api/conversions-api
 */

import { createHash } from 'crypto'

const GRAPH_VERSION = 'v21.0'

export type MetaCapiEventName =
  | 'PageView'
  | 'ViewContent'
  | 'AddToCart'
  | 'InitiateCheckout'
  | 'Purchase'

export type MetaCapiUserData = {
  email?: string
  phone?: string
  clientIpAddress?: string
  clientUserAgent?: string
  fbp?: string
  fbc?: string
}

export type MetaCapiCustomData = {
  value?: number
  currency?: string
  content_ids?: string[]
  content_name?: string
  content_type?: string
  order_id?: string
  num_items?: number
}

export type MetaCapiEventInput = {
  eventName: MetaCapiEventName
  eventId: string
  eventSourceUrl?: string
  eventTime?: number
  userData?: MetaCapiUserData
  customData?: MetaCapiCustomData
}

function sha256Norm(value: string): string {
  const normalized = value.trim().toLowerCase()
  return createHash('sha256').update(normalized).digest('hex')
}

function hashEmail(email: string): string {
  return sha256Norm(email)
}

/** Digits only, then SHA-256 (E.164 without + preferred by Meta). */
function hashPhone(phone: string): string {
  const digits = phone.replace(/\D/g, '')
  return createHash('sha256').update(digits).digest('hex')
}

export function isMetaCapiConfigured(): boolean {
  return Boolean(
    process.env.NEXT_PUBLIC_META_PIXEL_ID?.trim() && process.env.META_CAPI_ACCESS_TOKEN?.trim(),
  )
}

function buildUserData(input?: MetaCapiUserData): Record<string, unknown> {
  const out: Record<string, unknown> = {}
  if (input?.email) out.em = [hashEmail(input.email)]
  if (input?.phone) out.ph = [hashPhone(input.phone)]
  if (input?.clientIpAddress) out.client_ip_address = input.clientIpAddress
  if (input?.clientUserAgent) out.client_user_agent = input.clientUserAgent
  if (input?.fbp) out.fbp = input.fbp
  if (input?.fbc) out.fbc = input.fbc
  return out
}

/**
 * Server Purchase for paid orders — event_id matches browser Pixel:
 * `purchase_${checkoutSessionOrPaymentId}` so Meta can dedupe.
 */
export async function sendMetaCapiPurchaseFromOrder(input: {
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
}): Promise<void> {
  if (!isMetaCapiConfigured()) return
  const suffix = input.eventIdSuffix.trim()
  if (!suffix) return
  await sendMetaCapiEvents([
    {
      eventName: 'Purchase',
      eventId: `purchase_${suffix}`,
      eventSourceUrl: input.eventSourceUrl || 'https://www.bintsaeed.com/checkout/success',
      userData: {
        email: input.email,
        phone: input.phone,
        clientIpAddress: input.clientIpAddress,
        clientUserAgent: input.clientUserAgent,
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

/** Send one or more events to Meta Conversions API. Never throws. */
export async function sendMetaCapiEvents(events: MetaCapiEventInput[]): Promise<{ ok: boolean; error?: string }> {
  const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID?.trim()
  const token = process.env.META_CAPI_ACCESS_TOKEN?.trim()
  if (!pixelId || !token || events.length === 0) {
    return { ok: false, error: 'Meta CAPI not configured' }
  }

  const testCode = process.env.META_CAPI_TEST_EVENT_CODE?.trim()
  const body: Record<string, unknown> = {
    data: events.map((event) => ({
      event_name: event.eventName,
      event_time: event.eventTime ?? Math.floor(Date.now() / 1000),
      event_id: event.eventId,
      action_source: 'website',
      ...(event.eventSourceUrl ? { event_source_url: event.eventSourceUrl } : {}),
      user_data: buildUserData(event.userData),
      ...(event.customData && Object.keys(event.customData).length > 0
        ? { custom_data: event.customData }
        : {}),
    })),
  }
  if (testCode) body.test_event_code = testCode

  try {
    const url = `https://graph.facebook.com/${GRAPH_VERSION}/${encodeURIComponent(pixelId)}/events?access_token=${encodeURIComponent(token)}`
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
    if (!res.ok) {
      const text = await res.text().catch(() => '')
      console.error('[meta-capi]', res.status, text.slice(0, 400))
      return { ok: false, error: `Meta CAPI ${res.status}` }
    }
    return { ok: true }
  } catch (error) {
    console.error('[meta-capi]', error)
    return { ok: false, error: 'Meta CAPI network error' }
  }
}
