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
  return {
    localTime: typeof value.localTime === 'string' ? value.localTime.trim().slice(0, 120) : undefined,
    timezone: typeof value.timezone === 'string' ? value.timezone.trim().slice(0, 64) : undefined,
    deviceType: typeof value.deviceType === 'string' ? value.deviceType.trim().slice(0, 24) : undefined,
  }
}

function parseCartItem(raw: Record<string, unknown>): CheckoutCartItem | null {
  const id = String(raw.id ?? '').trim()
  const name = String(raw.name ?? 'Item').trim().slice(0, 120)
  if (!id || !name) return null

  const quantity = Math.min(99, Math.max(1, Math.floor(Number(raw.quantity)) || 1))
  const customisationMessage =
    typeof raw.customisationMessage === 'string' ? raw.customisationMessage.trim().slice(0, 200) : undefined

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
  const customerEmail = typeof body.customerEmail === 'string' ? body.customerEmail.trim().slice(0, 320) : ''
  const checkoutNotes = typeof body.checkoutNotes === 'string' ? body.checkoutNotes.trim().slice(0, 300) : ''
  const clientContext = parseClientContext(body.clientContext)

  return {
    items,
    currency,
    discountCode,
    customerEmail,
    checkoutNotes,
    clientContext,
    clientIp: extractClientIp(request),
  }
}
