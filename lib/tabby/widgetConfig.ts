import {
  getTabbyMerchantCode,
  getTabbyPublicKey,
  isTabbyConfigured,
  isTabbyCurrency,
} from '@/lib/tabby/config'

export type TabbyWidgetConfig = {
  enabled: boolean
  publicKey: string
  merchantCode: string
}

/** Runtime config for Tabby on-site messaging (public key + merchant code only). */
export function getTabbyWidgetConfig(currency?: string | null): TabbyWidgetConfig {
  const checkoutEnabled = process.env.NEXT_PUBLIC_TABBY_CHECKOUT_ENABLED === 'true'
  const publicKey = getTabbyPublicKey() ?? ''
  const merchantCode =
    process.env.NEXT_PUBLIC_TABBY_MERCHANT_CODE?.trim() ||
    process.env.NEXT_PUBLIC_TABBY_PUBLIC_MERCHANT_CODE?.trim() ||
    getTabbyMerchantCode()

  const currencyOk = currency ? isTabbyCurrency(currency) : true

  return {
    enabled:
      checkoutEnabled &&
      isTabbyConfigured() &&
      Boolean(publicKey) &&
      Boolean(merchantCode) &&
      currencyOk,
    publicKey,
    merchantCode,
  }
}
