import type { CheckoutRail } from '@/lib/payments/checkoutRails'
import {
  CHECKOUT_RAIL_ICON_IDS,
  getPaymentMethodAsset,
} from '@/lib/payments/paymentMethodAssets'
import { PaymentMethodIcon } from '@/components/PaymentMethodIcon'

type Props = {
  rail: CheckoutRail
  className?: string
}

export default function CheckoutPaymentRailIcons({ rail, className = '' }: Props) {
  const iconIds = CHECKOUT_RAIL_ICON_IDS[rail]
  if (iconIds.length === 0) return null

  return (
    <ul className={`flex flex-wrap items-center gap-1.5 ${className}`} aria-hidden>
      {iconIds.map((id) => {
        const asset = getPaymentMethodAsset(id)
        if (!asset) return null
        return (
          <li
            key={id}
            className={`flex h-7 min-w-[2.75rem] items-center justify-center rounded-[4px] border border-white/10 bg-[#f8f6f3] px-2 shadow-sm ${asset.chipClass ?? ''}`}
          >
            <PaymentMethodIcon id={id} />
          </li>
        )
      })}
    </ul>
  )
}
