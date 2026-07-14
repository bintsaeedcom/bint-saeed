import { captureTabbyPayment, getTabbyPayment } from '@/lib/tabby/api'

export type TabbyCaptureEnsureResult = {
  ok: boolean
  status: string
  alreadyCaptured: boolean
  reason?: string
}

/**
 * Ensure an AUTHORIZED Tabby payment is captured (settlement + OMS requirement).
 * Idempotent via reference_id. Safe to call from webhook and success-page poll.
 */
export async function ensureTabbyPaymentCaptured(args: {
  paymentId: string
  amount: number
  currency: string
  referenceId: string
  countryCode?: string | null
  shippingAmount?: number
  discountAmount?: number
}): Promise<TabbyCaptureEnsureResult> {
  const remote = await getTabbyPayment(args.paymentId, args.countryCode)
  if (!remote.ok && !remote.data?.status) {
    return { ok: false, status: '', alreadyCaptured: false, reason: 'retrieve_failed' }
  }

  const status = String(remote.data.status || '').toUpperCase()
  const hasCaptures =
    Array.isArray(remote.data.captures) && remote.data.captures.length > 0

  if (status === 'CLOSED' || status === 'CAPTURED' || hasCaptures) {
    return { ok: true, status, alreadyCaptured: true }
  }

  if (status !== 'AUTHORIZED') {
    return {
      ok: false,
      status,
      alreadyCaptured: false,
      reason: `not_capturable:${status || 'unknown'}`,
    }
  }

  const captureAmount =
    Number(remote.data.amount) > 0 ? Number(remote.data.amount) : args.amount

  const capture = await captureTabbyPayment({
    paymentId: args.paymentId,
    amount: captureAmount,
    currency: args.currency,
    referenceId: args.referenceId,
    countryCode: args.countryCode,
    shippingAmount: args.shippingAmount,
    discountAmount: args.discountAmount,
  })

  if (capture.ok) {
    return {
      ok: true,
      status: String(capture.data.status || 'CLOSED').toUpperCase(),
      alreadyCaptured: false,
    }
  }

  // Race / idempotent retry: another path may have captured between retrieve + capture.
  const again = await getTabbyPayment(args.paymentId, args.countryCode)
  const againStatus = String(again.data.status || '').toUpperCase()
  const againCaptured =
    againStatus === 'CLOSED' ||
    againStatus === 'CAPTURED' ||
    (Array.isArray(again.data.captures) && again.data.captures.length > 0)

  if (againCaptured) {
    return { ok: true, status: againStatus, alreadyCaptured: true }
  }

  console.error('Tabby capture failed', {
    paymentId: args.paymentId,
    status: capture.status,
    data: capture.data,
  })

  return {
    ok: false,
    status: againStatus || status,
    alreadyCaptured: false,
    reason: `capture_http_${capture.status}`,
  }
}
