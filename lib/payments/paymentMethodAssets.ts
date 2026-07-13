/**
 * Payment brand marks — `/public/payment/`
 *
 * Footer and checkout use the on-disk SVG badges (datatrans-style card tiles).
 * react-icons/fa6 remains a fallback when no `src` is set.
 */
export type Fa6PaymentIconId = 'visa' | 'mastercard' | 'paypal' | 'apple-pay' | 'google-pay'

export type PaymentMethodAsset = {
  id: string
  label: string
  /** Font Awesome 6 brand icon (fallback only). */
  icon?: Fa6PaymentIconId
  /** Static SVG path — preferred when present. */
  src?: string
  width?: number
  height?: number
  imageClass?: string
  iconClass?: string
  chipClass?: string
}

/** Standard 120×80 payment badge — visible at footer scale. */
const CARD_BADGE = {
  width: 120,
  height: 80,
  imageClass: 'h-[26px] w-[39px] object-contain',
} as const

const BADGE_CHIP = 'border-transparent bg-transparent p-0 shadow-none'
const BADGE_IMAGE = 'max-h-[24px] max-w-[38px]'

export const PAYMENT_METHOD_ASSETS: PaymentMethodAsset[] = [
  {
    id: 'visa',
    label: 'Visa',
    src: '/payment/visa.svg',
    ...CARD_BADGE,
  },
  {
    id: 'mastercard',
    label: 'Mastercard',
    src: '/payment/mastercard.svg',
    ...CARD_BADGE,
  },
  {
    id: 'apple-pay',
    label: 'Apple Pay',
    src: '/payment/apple-pay.svg',
    width: 166,
    height: 106,
    imageClass: 'h-[26px] w-auto max-w-[41px] object-contain',
  },
  {
    id: 'google-pay',
    label: 'Google Pay',
    src: '/payment/google-pay.svg',
    ...CARD_BADGE,
  },
  {
    id: 'paypal',
    label: 'PayPal',
    src: '/payment/paypal.svg',
    ...CARD_BADGE,
  },
]

/** Footer-only marks (file-based). */
export const FOOTER_EXTRA_PAYMENT_ASSETS: PaymentMethodAsset[] = [
  {
    id: 'link',
    label: 'Link',
    src: '/payment/link.svg',
    ...CARD_BADGE,
  },
  {
    id: 'tamara',
    label: 'Tamara',
    src: '/payment/tamara-pill.png',
    width: 191,
    height: 64,
    imageClass: 'h-[26px] w-auto max-w-[80px] object-contain',
    chipClass: BADGE_CHIP,
  },
]

/** Reserved for Mollie EU + GCC BNPL — assets on disk, not shown in UI yet. */
export const FUTURE_PAYMENT_ASSETS: PaymentMethodAsset[] = [
  {
    id: 'ideal',
    label: 'iDEAL',
    src: '/payment/ideal.svg',
    width: 50,
    height: 32,
    imageClass: BADGE_IMAGE,
    chipClass: BADGE_CHIP,
  },
  {
    id: 'klarna',
    label: 'Klarna',
    src: '/payment/klarna.svg',
    width: 50,
    height: 32,
    imageClass: BADGE_IMAGE,
    chipClass: BADGE_CHIP,
  },
  {
    id: 'tabby',
    label: 'Tabby',
    src: '/payment/tabby.svg',
    width: 50,
    height: 22,
    imageClass: 'max-h-[16px] max-w-[48px]',
    chipClass: BADGE_CHIP,
  },
]

const assetById = Object.fromEntries(
  [...PAYMENT_METHOD_ASSETS, ...FOOTER_EXTRA_PAYMENT_ASSETS, ...FUTURE_PAYMENT_ASSETS].map(
    (asset) => [asset.id, asset],
  ),
) as Record<string, PaymentMethodAsset>

export function getPaymentMethodAsset(id: string): PaymentMethodAsset | undefined {
  return assetById[id]
}

export const CHECKOUT_RAIL_ICON_IDS: Record<'stripe' | 'paypal' | 'mollie' | 'tamara', string[]> = {
  stripe: ['visa', 'mastercard', 'apple-pay', 'google-pay'],
  paypal: ['paypal'],
  mollie: ['ideal', 'klarna'],
  tamara: ['tamara'],
}
