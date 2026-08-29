export type CheckoutClientContext = {
  localTime?: string
  timezone?: string
  deviceType?: string
  deviceLabel?: string
  city?: string
  country?: string
  trafficSource?: string
  sessionSeconds?: number
  /** Persistent anonymous cart id — correlates bag → checkout → PSP session. */
  cartId?: string
  visitorId?: string
  cartFingerprint?: string
  internalTest?: boolean
}

export type CheckoutCartItem = {
  id: string
  name: string
  price: number
  quantity: number
  size?: string
  color?: string
  image?: string
  productUrl?: string
  sku?: string
  lengthCm?: number | string
  customLength?: string
  notes?: string
  customisationMessage?: string
  customisationSurcharge?: number
  giftCard?: {
    denominationAed: number
    sendToRecipient: boolean
    recipientName?: string
    recipientEmail?: string
    personalMessage?: string
  }
}

export type ParsedCheckoutRequest = {
  items: CheckoutCartItem[]
  currency: string
  discountCode: string
  /** Shopper-entered gift card code — credit resolved server-side at payment create. */
  appliedGiftCardCode?: string
  customerEmail: string
  checkoutNotes: string
  clientContext: CheckoutClientContext
  clientIp: string
}
