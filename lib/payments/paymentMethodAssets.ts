/**
 * Payment brand marks — `/public/payment/`
 *
 * Live checkout/footer icons (visa, mastercard, paypal, apple-pay, google-pay):
 * react-icons/fa6 brand marks.
 *
 * SVG files on disk (datatrans/payment-logos, Tabby CDN, payment_icons):
 * kept for static reference and future rails (ideal, klarna, tabby, tamara).
 */
export type Fa6PaymentIconId = 'visa' | 'mastercard' | 'paypal' | 'apple-pay' | 'google-pay'

export type PaymentMethodAsset = {
  id: string
  label: string
  /** Font Awesome 6 brand icon (preferred for card/wallet marks). */
  icon?: Fa6PaymentIconId
  /** Static SVG path when no react-icons mapping exists. */
  src?: string
  width?: number
  height?: number
  imageClass?: string
  iconClass?: string
  chipClass?: string
}

const ICON_CHIP = 'border-transparent bg-[#f8f6f3] px-2'
const BADGE_CHIP = 'border-transparent bg-transparent p-0 shadow-none'
const BADGE_IMAGE = 'max-h-[24px] max-w-[38px]'

export const PAYMENT_METHOD_ASSETS: PaymentMethodAsset[] = [
  {
    id: 'visa',
    label: 'Visa',
    icon: 'visa',
    src: '/payment/visa.svg',
    iconClass: 'h-5 w-[2.1rem] text-[#1434CB]',
    chipClass: ICON_CHIP,
  },
  {
    id: 'mastercard',
    label: 'Mastercard',
    icon: 'mastercard',
    src: '/payment/mastercard.svg',
    iconClass: 'h-5 w-[2.1rem]',
    chipClass: ICON_CHIP,
  },
  {
    id: 'apple-pay',
    label: 'Apple Pay',
    icon: 'apple-pay',
    src: '/payment/apple-pay.svg',
    iconClass: 'h-5 w-[2.35rem] text-black',
    chipClass: ICON_CHIP,
  },
  {
    id: 'google-pay',
    label: 'Google Pay',
    icon: 'google-pay',
    src: '/payment/google-pay.svg',
    iconClass: 'h-5 w-[2.5rem]',
    chipClass: ICON_CHIP,
  },
  {
    id: 'paypal',
    label: 'PayPal',
    icon: 'paypal',
    src: '/payment/paypal.svg',
    iconClass: 'h-5 w-[2.35rem] text-[#003087]',
    chipClass: ICON_CHIP,
  },
]

/** Footer-only marks (file-based). */
export const FOOTER_EXTRA_PAYMENT_ASSETS: PaymentMethodAsset[] = [
  {
    id: 'link',
    label: 'Link',
    src: '/payment/link.svg',
    width: 40,
    height: 16,
    imageClass: 'max-h-[14px] max-w-[40px]',
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
  {
    id: 'tamara',
    label: 'Tamara',
    src: '/payment/tamara.svg',
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

export const CHECKOUT_RAIL_ICON_IDS: Record<'stripe' | 'paypal' | 'mollie', string[]> = {
  stripe: ['visa', 'mastercard', 'apple-pay', 'google-pay'],
  paypal: ['paypal'],
  mollie: ['ideal', 'klarna'],
}
