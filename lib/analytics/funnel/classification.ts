import { assessVisitorBotRisk, type VisitorBotRisk } from '@/lib/bots/assessVisitorBotRisk'
import { isInternalTestModeActive } from '@/lib/analytics/internalTestMode'
import type { VisitorClassification } from '@/lib/analytics/funnel/types'

export function classifyFunnelVisitor(data: {
  internalTest?: boolean
  visitorId?: string
  userAgent?: string
  device?: { type?: string; browser?: string; os?: string }
  location?: Record<string, unknown> | null
  botRisk?: VisitorBotRisk
}): VisitorClassification {
  if (data.internalTest || isInternalTestModeActive()) return 'Internal/Test'

  const risk = data.botRisk || assessVisitorBotRisk(data)
  if (risk.level === 'high') return 'Likely automated'
  if (risk.level === 'medium') return 'Likely automated'

  const device = data.device
  const hasDevice =
    device &&
    device.browser &&
    device.browser !== 'Unknown' &&
    device.os &&
    device.os !== 'Unknown'

  if (!hasDevice && !data.userAgent) return 'Unknown'
  return 'Likely human'
}

export function shouldSuppressFunnelSlack(data: {
  internalTest?: boolean
  classification?: VisitorClassification
}): boolean {
  if (data.internalTest) return true
  if (data.classification === 'Internal/Test') return true
  return false
}
