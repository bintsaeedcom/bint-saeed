import type { StoredOrder } from '@/lib/orders/types'
import { sendOwnerOrderAlertEmail } from './sendOwnerOrderAlertEmail'
import { sendOrderConfirmationEmail } from './sendOrderConfirmationEmail'

/**
 * Fire order emails for a newly created order. The house is always alerted so an order is
 * never missed — even if Slack/Trello are not configured. The customer receives their branded
 * confirmation only once payment is actually captured. Best-effort: never throws, so the
 * payment webhook can still return 200.
 */
export async function dispatchOrderEmails(order: StoredOrder): Promise<void> {
  await sendOwnerOrderAlertEmail(order)
  if (order.fulfillmentStatus === 'paid') {
    await sendOrderConfirmationEmail(order)
  }
}
