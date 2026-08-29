import type { CheckoutCartItem, CheckoutClientContext } from '@/lib/checkout/types'
import { funnelTelemetryFromClientContext } from '@/lib/analytics/funnel/checkoutTelemetry'
import {
  handleFunnelPaymentOutcome,
  type FunnelPaymentOutcome,
} from '@/lib/analytics/funnel/serverFunnel'
import type { PaymentProvider } from '@/lib/analytics/funnel/types'

export async function recordFunnelPurchaseFromCheckout(args: {
  provider: PaymentProvider
  sessionRef: string
  items: CheckoutCartItem[]
  clientContext?: CheckoutClientContext
}): Promise<void> {
  await handleFunnelPaymentOutcome({
    provider: args.provider,
    sessionRef: args.sessionRef,
    outcome: 'payment_completed',
    telemetry: funnelTelemetryFromClientContext(args.clientContext, args.items),
  })
}

export async function recordFunnelPaymentTerminalOutcome(args: {
  provider: PaymentProvider
  sessionRef: string
  outcome: Exclude<FunnelPaymentOutcome, 'payment_completed'>
  items?: CheckoutCartItem[]
  clientContext?: CheckoutClientContext
}): Promise<void> {
  await handleFunnelPaymentOutcome({
    provider: args.provider,
    sessionRef: args.sessionRef,
    outcome: args.outcome,
    telemetry:
      args.items?.length
        ? funnelTelemetryFromClientContext(args.clientContext, args.items)
        : undefined,
  })
}
