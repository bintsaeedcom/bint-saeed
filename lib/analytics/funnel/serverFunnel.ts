import { Redis } from '@upstash/redis'
import { recordAnalyticsEvent, recordFunnelMetricEvent } from '@/lib/analytics/analyticsStore'
import { classifyFunnelVisitor, shouldSuppressFunnelSlack } from '@/lib/analytics/funnel/classification'
import { shouldSendFunnelSlackAlert } from '@/lib/analytics/funnel/dedup'
import { formatFunnelAbandonSlack } from '@/lib/analytics/funnel/slackFormat'
import type { FunnelSlackEvent, PaymentProvider } from '@/lib/analytics/funnel/types'
import type { FunnelCheckoutTelemetry, StoredFunnelPaymentContext } from '@/lib/analytics/funnel/checkoutTelemetry'
import { assessVisitorBotRisk, shouldSuppressBotSlack } from '@/lib/bots/assessVisitorBotRisk'

const PAY_CTX_TTL_SEC = 60 * 60 * 24 * 7
const OUTCOME_TTL_SEC = 60 * 60 * 24 * 14

const payCtxKey = (provider: string, ref: string) => `bs:funnel:payctx:${provider}:${ref}`
const outcomeKey = (provider: string, ref: string, outcome: string) =>
  `bs:funnel:outcome:${provider}:${ref}:${outcome}`

let redis: Redis | null = null
const memoryPayCtx = new Map<string, StoredFunnelPaymentContext>()
const memoryOutcomes = new Map<string, number>()

function getRedis(): Redis | null {
  const url = process.env.UPSTASH_REDIS_REST_URL
  const token = process.env.UPSTASH_REDIS_REST_TOKEN
  if (!url || !token) return null
  if (!redis) redis = new Redis({ url, token })
  return redis
}

function normalizedWebhook(...values: Array<string | undefined>): string | undefined {
  for (const value of values) {
    const trimmed = value?.trim()
    if (trimmed) return trimmed
  }
  return undefined
}

function resolveAbandonedCartWebhook(): string | undefined {
  return normalizedWebhook(
    process.env.SLACK_ABANDONED_CART_WEBHOOK_URL,
    process.env.SLACK_WEBHOOK_URL,
  )
}

export type FunnelPaymentOutcome =
  | 'payment_completed'
  | 'payment_failed'
  | 'payment_cancelled'
  | 'payment_expired'

function slackEventForOutcome(outcome: FunnelPaymentOutcome): FunnelSlackEvent | null {
  if (outcome === 'payment_failed') return 'funnel_payment_attempt_failed'
  if (outcome === 'payment_cancelled' || outcome === 'payment_expired') {
    return 'funnel_payment_session_left'
  }
  return null
}

function funnelStageForOutcome(outcome: FunnelPaymentOutcome): string {
  switch (outcome) {
    case 'payment_completed':
      return 'purchase_completed'
    case 'payment_failed':
      return 'payment_attempt_failed'
    case 'payment_cancelled':
      return 'payment_cancelled'
    case 'payment_expired':
      return 'payment_expired'
    default:
      return outcome
  }
}

export async function saveFunnelPaymentContext(args: {
  provider: PaymentProvider
  sessionRef: string
  telemetry: FunnelCheckoutTelemetry
}): Promise<void> {
  const ref = args.sessionRef.trim().slice(0, 120)
  if (!ref) return
  const payload: StoredFunnelPaymentContext = {
    ...args.telemetry,
    paymentProvider: args.provider,
    paymentSessionRef: ref,
    savedAt: new Date().toISOString(),
  }
  const key = payCtxKey(args.provider, ref)
  const r = getRedis()
  if (r) {
    try {
      await r.set(key, JSON.stringify(payload), { ex: PAY_CTX_TTL_SEC })
      return
    } catch {
      /* fall through */
    }
  }
  memoryPayCtx.set(key, payload)
}

export async function loadFunnelPaymentContext(
  provider: PaymentProvider,
  sessionRef: string,
): Promise<StoredFunnelPaymentContext | null> {
  const ref = sessionRef.trim()
  if (!ref) return null
  const key = payCtxKey(provider, ref)
  const r = getRedis()
  if (r) {
    try {
      const raw = await r.get<string>(key)
      if (!raw) return null
      return typeof raw === 'string'
        ? (JSON.parse(raw) as StoredFunnelPaymentContext)
        : (raw as StoredFunnelPaymentContext)
    } catch {
      /* fall through */
    }
  }
  return memoryPayCtx.get(key) ?? null
}

async function wasFunnelOutcomeProcessed(
  provider: PaymentProvider,
  sessionRef: string,
  outcome: FunnelPaymentOutcome,
): Promise<boolean> {
  const key = outcomeKey(provider, sessionRef, outcome)
  const r = getRedis()
  if (r) {
    try {
      const existing = await r.get<string>(key)
      return Boolean(existing)
    } catch {
      /* fall through */
    }
  }
  const expires = memoryOutcomes.get(key)
  return typeof expires === 'number' && expires > Date.now()
}

async function markFunnelOutcomeProcessed(
  provider: PaymentProvider,
  sessionRef: string,
  outcome: FunnelPaymentOutcome,
): Promise<void> {
  const key = outcomeKey(provider, sessionRef, outcome)
  const r = getRedis()
  if (r) {
    try {
      await r.set(key, '1', { ex: OUTCOME_TTL_SEC })
      return
    } catch {
      /* fall through */
    }
  }
  memoryOutcomes.set(key, Date.now() + OUTCOME_TTL_SEC * 1000)
}

function buildEventPayload(
  provider: PaymentProvider,
  sessionRef: string,
  telemetry: FunnelCheckoutTelemetry,
  outcome: FunnelPaymentOutcome,
): Record<string, unknown> {
  return {
    cartId: telemetry.cartId,
    visitorId: telemetry.visitorId,
    cartFingerprint: telemetry.cartFingerprint,
    internalTest: telemetry.internalTest,
    referrer: telemetry.referrer,
    paymentSessionCreated: true,
    paymentProvider: provider,
    paymentSessionRef: sessionRef,
    funnelStage: funnelStageForOutcome(outcome),
    cartValueAed: telemetry.cartValueAed,
    cartItems: telemetry.cartItems,
    items: telemetry.items,
    device: telemetry.deviceLabel
      ? { label: telemetry.deviceLabel, type: telemetry.deviceType || 'desktop' }
      : undefined,
    location:
      telemetry.visitorCity || telemetry.visitorCountry
        ? {
            city: telemetry.visitorCity,
            country: telemetry.visitorCountry,
            accuracyLevel: 'ip',
          }
        : undefined,
  }
}

async function deliverFunnelSlack(type: FunnelSlackEvent, data: Record<string, unknown>): Promise<void> {
  const webhookUrl = resolveAbandonedCartWebhook()
  if (!webhookUrl) return

  const botRisk = assessVisitorBotRisk(data)
  const classification = classifyFunnelVisitor({
    internalTest: Boolean(data.internalTest),
    visitorId: typeof data.visitorId === 'string' ? data.visitorId : undefined,
    device: data.device as { type?: string; browser?: string; os?: string },
    location: data.location as Record<string, unknown> | null,
    botRisk,
  })

  if (
    shouldSuppressFunnelSlack({ internalTest: Boolean(data.internalTest), classification }) ||
    shouldSuppressBotSlack(botRisk)
  ) {
    return
  }

  const cartId = typeof data.cartId === 'string' ? data.cartId : ''
  const fingerprint = typeof data.cartFingerprint === 'string' ? data.cartFingerprint : ''
  const allow = await shouldSendFunnelSlackAlert({ cartId, event: type, fingerprint })
  if (!allow) return

  const message = formatFunnelAbandonSlack(type, { ...data, botRisk, classification })
  try {
    await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(message),
    })
  } catch {
    /* non-blocking */
  }
}

/**
 * Provider-authoritative payment outcome. Never called from browser page-leave watchers.
 * Dedupes per provider + session ref + outcome (e.g. duplicate webhooks).
 */
export async function handleFunnelPaymentOutcome(args: {
  provider: PaymentProvider
  sessionRef: string
  outcome: FunnelPaymentOutcome
  telemetry?: Partial<FunnelCheckoutTelemetry>
}): Promise<void> {
  const ref = args.sessionRef.trim().slice(0, 120)
  if (!ref) return

  if (await wasFunnelOutcomeProcessed(args.provider, ref, args.outcome)) return
  await markFunnelOutcomeProcessed(args.provider, ref, args.outcome)

  const stored = await loadFunnelPaymentContext(args.provider, ref)
  const telemetry: FunnelCheckoutTelemetry = {
    ...(stored || {}),
    ...(args.telemetry || {}),
  }

  const payload = buildEventPayload(args.provider, ref, telemetry, args.outcome)

  if (args.outcome === 'payment_completed') {
    void recordFunnelMetricEvent('funnel_purchase_completed', payload).catch(() => {})
    void recordAnalyticsEvent('funnel_purchase_completed', payload).catch(() => {})
    return
  }

  const slackType = slackEventForOutcome(args.outcome)
  if (!slackType) return

  void recordFunnelMetricEvent(slackType, payload).catch(() => {})
  void recordAnalyticsEvent(slackType, payload).catch(() => {})
  void deliverFunnelSlack(slackType, payload).catch(() => {})
}

/** Persist PSP session context when a real payment object is created (no Slack). */
export async function recordFunnelPaymentSessionCreated(args: {
  provider: PaymentProvider
  sessionRef: string
  telemetry: FunnelCheckoutTelemetry
}): Promise<void> {
  await saveFunnelPaymentContext(args)
  const payload = buildEventPayload(args.provider, args.sessionRef, args.telemetry, 'payment_completed')
  payload.funnelStage = 'payment_session_created'
  void recordAnalyticsEvent('funnel_payment_session_created', payload).catch(() => {})
}
