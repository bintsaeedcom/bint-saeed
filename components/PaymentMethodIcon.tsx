import Image from 'next/image'
import type { IconType } from 'react-icons'
import {
  FaApplePay,
  FaCcMastercard,
  FaCcPaypal,
  FaCcVisa,
  FaGooglePay,
} from 'react-icons/fa6'
import {
  getPaymentMethodAsset,
  type PaymentMethodAsset,
} from '@/lib/payments/paymentMethodAssets'

const FA6_PAYMENT_ICONS: Record<string, IconType> = {
  visa: FaCcVisa,
  mastercard: FaCcMastercard,
  paypal: FaCcPaypal,
  'apple-pay': FaApplePay,
  'google-pay': FaGooglePay,
}

type Props = {
  id: string
  className?: string
  iconClass?: string
}

export function PaymentMethodIcon({ id, className = '', iconClass }: Props) {
  const asset = getPaymentMethodAsset(id)
  if (!asset) return null

  if (asset.src) {
    return (
      <Image
        src={asset.src}
        alt={asset.label}
        width={asset.width ?? 120}
        height={asset.height ?? 80}
        className={`shrink-0 ${asset.imageClass ?? 'h-[26px] w-[39px] object-contain'} ${className}`}
      />
    )
  }

  const FaIcon = asset.icon ? FA6_PAYMENT_ICONS[asset.icon] : null
  if (FaIcon) {
    return (
      <FaIcon
        aria-hidden
        className={`shrink-0 ${iconClass ?? asset.iconClass ?? 'h-5 w-auto'} ${className}`}
      />
    )
  }

  return null
}

export function paymentMethodChipClass(asset: PaymentMethodAsset): string {
  return asset.chipClass ?? ''
}
