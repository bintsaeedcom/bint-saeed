import type { StoredOrder } from '@/lib/orders/types'
import {
  getHouseMember,
  saveHouseMember,
} from '@/lib/membership/memberStore'
import { createPersonalHousePrivilegePromo } from '@/lib/membership/stripeHousePromos'
import {
  HOUSE_PRIVILEGE_EXPIRES_AT_ISO,
  housePrivilegeExpiresLabel,
} from '@/lib/membership/constants'
import { sendHousePrivilegeEmail } from '@/lib/email/sendHousePrivilegeEmail'
import { normalizeCustomerEmail } from '@/lib/customers/customerStore'

/**
 * After a community member’s first paid order: mint a personal 10% code
 * locked to their Stripe customer (email), valid until 29 August 2027,
 * and email the code.
 */
export async function activateHousePrivilegeForPaidOrder(
  order: StoredOrder,
): Promise<{ activated: boolean; reason?: string }> {
  if (order.fulfillmentStatus !== 'paid') {
    return { activated: false, reason: 'not_paid' }
  }

  const email = normalizeCustomerEmail(order.customerEmail || '')
  if (!email.includes('@')) {
    return { activated: false, reason: 'no_email' }
  }

  const member = await getHouseMember(email)
  if (!member) {
    return { activated: false, reason: 'not_a_member' }
  }
  if (member.privilegeStatus === 'activated' && member.privilegeCode) {
    return { activated: false, reason: 'already_activated' }
  }

  const promo = await createPersonalHousePrivilegePromo({
    email,
    name: order.customerName || member.name,
  })

  if (!promo.ok) {
    console.error('House privilege promo failed:', promo.error)
    return { activated: false, reason: promo.error }
  }

  const now = new Date().toISOString()
  await saveHouseMember({
    ...member,
    privilegeStatus: 'activated',
    privilegeCode: promo.code,
    privilegePromoId: promo.promoId,
    privilegeCouponId: promo.couponId,
    privilegeStripeCustomerId: promo.stripeCustomerId,
    privilegeActivatedAt: now,
    privilegeExpiresAt: HOUSE_PRIVILEGE_EXPIRES_AT_ISO,
    firstPaidOrderId: order.id,
    updatedAt: now,
  })

  const emailResult = await sendHousePrivilegeEmail({
    email,
    name: order.customerName || member.name,
    privilegeCode: promo.code,
    expiresLabel: housePrivilegeExpiresLabel(),
  })
  if (!emailResult.ok && !emailResult.skipped) {
    console.error('House privilege email failed:', emailResult.error)
  }

  await notifyHousePrivilegeSlack({
    email,
    orderId: order.id,
    privilegeCode: promo.code,
  })

  return { activated: true }
}

async function notifyHousePrivilegeSlack(input: {
  email: string
  orderId: string
  privilegeCode: string
}): Promise<void> {
  const url =
    process.env.SLACK_ORDERS_WEBHOOK_URL?.trim() ||
    process.env.SLACK_WEBHOOK_URL?.trim()
  if (!url) return

  try {
    await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        blocks: [
          {
            type: 'header',
            text: {
              type: 'plain_text',
              text: 'House Privilege activated',
              emoji: true,
            },
          },
          {
            type: 'section',
            fields: [
              { type: 'mrkdwn', text: `*Email:*\n${input.email}` },
              { type: 'mrkdwn', text: `*Order:*\n${input.orderId}` },
              {
                type: 'mrkdwn',
                text: `*Personal 10% code:*\n\`${input.privilegeCode}\``,
              },
              {
                type: 'mrkdwn',
                text: `*Valid until:*\n${housePrivilegeExpiresLabel()}`,
              },
            ],
          },
        ],
      }),
    })
  } catch (e) {
    console.error('House privilege Slack notify failed', e)
  }
}
