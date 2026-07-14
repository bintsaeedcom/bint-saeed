import type { NextRequest } from 'next/server'
import { normalizeCurrencyCode } from '@/lib/pricing'
import type { CheckoutCartItem, CheckoutClientContext, ParsedCheckoutRequest } from './types'

export const MAX_CHECKOUT_LINE_ITEMS = 80

function extractClientIp(request: NextRequest): string {
  const forwardedFor = request.headers.get('x-forwarded-for') || ''
  const realIp = request.headers.get('x-real-ip') || ''
  const candidate = forwardedFor.split(',')[0]?.trim() || realIp.trim() || ''
  return candidate.slice(0, 64)
}

function parseClientContext(raw: unknown): CheckoutClientContext {
  if (!raw || typeof raw !== 'object') return {}
  const value = raw as Record<string, unknown>
  const sessionSecondsRaw = Number(value.sessionSeconds)
  const sessionSeconds =
    Number.isFinite(sessionSecondsRaw) && sessionSecondsRaw > 0
      ? Math.min(Math.round(sessionSecondsRaw), 999_999)
      : undefined

  return {
    localTime: typeof value.localTime === 'string' ? value.localTime.trim().slice(0, 120) : undefined,
    timezone: typeof value.timezone === 'string' ? value.timezone.trim().slice(0, 64) : undefined,
    deviceType: typeof value.deviceType === 'string' ? value.deviceType.trim().slice(0, 24) : undefined,
    deviceLabel: typeof value.deviceLabel === 'string' ? value.deviceLabel.trim().slice(0, 120) : undefined,
    city: typeof value.city === 'string' ? value.city.trim().slice(0, 120) : undefined,
    country: typeof value.country === 'string' ? value.country.trim().slice(0, 64) : undefined,
    trafficSource:
      typeof value.trafficSource === 'string' ? value.trafficSource.trim().slice(0, 500) : undefined,
    sessionSeconds,
  }
}

function parseGiftCardMeta(raw: unknown): CheckoutCartItem['giftCard'] | undefined {
  if (!raw || typeof raw !== 'object') return undefined
  const value = raw as Record<string, unknown>
  const denominationAed = Number(value.denominationAed)
  if (![500, 1000, 2500, 5000].includes(denominationAed)) return undefined
  const sendToRecipient = Boolean(value.sendToRecipient)
  const recipientEmail =
    typeof value.recipientEmail === 'string' ? value.recipientEmail.trim().slice(0, 320) : undefined
  return {
    denominationAed,
    sendToRecipient,
    recipientName:
      typeof value.recipientName === 'string' ? value.recipientName.trim().slice(0, 120) : undefined,
    recipientEmail: sendToRecipient && recipientEmail ? recipientEmail : undefined,
    personalMessage:
      typeof value.personalMessage === 'string'
        ? value.personalMessage.trim().slice(0, 500)
        : undefined,
  }
}

function parseCartItem(raw: Record<string, unknown>): CheckoutCartItem | null {
  const id = String(raw.id ?? '').trim()
  const name = String(raw.name ?? 'Item').trim().slice(0, 120)
  if (!id || !name) return null

  const quantity = Math.min(99, Math.max(1, Math.floor(Number(raw.quantity)) || 1))
  const customisationMessage =
    typeof raw.customisationMessage === 'string' ? raw.customisationMessage.trim().slice(0, 200) : undefined
  const giftCard = parseGiftCardMeta(raw.giftCard)

  return {
    id,
    name,
    price: Number(raw.price) || 0,
    quantity,
    size: raw.size != null ? String(raw.size).slice(0, 48) : undefined,
    color: raw.color != null ? String(raw.color).slice(0, 48) : undefined,
    image: raw.image != null ? String(raw.image) : undefined,
    productUrl: raw.productUrl != null ? String(raw.productUrl) : undefined,
    sku: typeof raw.sku === 'string' ? raw.sku.trim().slice(0, 50) : undefined,
    lengthCm: raw.lengthCm as number | string | undefined,
    customLength: raw.customLength != null ? String(raw.customLength).slice(0, 48) : undefined,
    notes: raw.notes != null ? String(raw.notes).slice(0, 120) : undefined,
    customisationMessage: customisationMessage || undefined,
    customisationSurcharge: Number(raw.customisationSurcharge) || undefined,
    giftCard,
  }
}

export function parseCheckoutRequestBody(
  body: Record<string, unknown>,
  request: NextRequest,
): ParsedCheckoutRequest | { error: string; status: number } {
  const itemsRaw = body.items
  if (!Array.isArray(itemsRaw) || itemsRaw.length === 0 || itemsRaw.length > MAX_CHECKOUT_LINE_ITEMS) {
    return { error: 'Invalid cart.', status: 400 }
  }

  const items: CheckoutCartItem[] = []
  for (const item of itemsRaw) {
    if (!item || typeof item !== 'object') {
      return { error: 'Invalid cart.', status: 400 }
    }
    const parsed = parseCartItem(item as Record<string, unknown>)
    if (!parsed) return { error: 'Invalid cart.', status: 400 }
    items.push(parsed)
  }

  const currency = normalizeCurrencyCode(typeof body.currency === 'string' ? body.currency : 'AED')
  const discountCode = typeof body.discountCode === 'string' ? body.discountCode.trim().slice(0, 64) : ''
  const appliedGiftCardCode =
    typeof body.appliedGiftCardCode === 'string'
      ? body.appliedGiftCardCode.trim().slice(0, 40)
      : typeof (body.appliedGiftCard as { code?: unknown } | undefined)?.code === 'string'
        ? String((body.appliedGiftCard as { code: string }).code).trim().slice(0, 40)
        : undefined
  const customerEmail = typeof body.customerEmail === 'string' ? body.customerEmail.trim().slice(0, 320) : ''
  const checkoutNotes = typeof body.checkoutNotes === 'string' ? body.checkoutNotes.trim().slice(0, 300) : ''
  const clientContext = parseClientContext(body.clientContext)

  return {
    items,
    currency,
    discountCode,
    appliedGiftCardCode: appliedGiftCardCode || undefined,
    customerEmail,
    checkoutNotes,
    clientContext,
    clientIp: extractClientIp(request),
  }
}
