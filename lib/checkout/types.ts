export type CheckoutClientContext = {
  localTime?: string
  timezone?: string
  deviceType?: string
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
}

export type ParsedCheckoutRequest = {
  items: CheckoutCartItem[]
  currency: string
  discountCode: string
  customerEmail: string
  checkoutNotes: string
  clientContext: CheckoutClientContext
  clientIp: string
}
