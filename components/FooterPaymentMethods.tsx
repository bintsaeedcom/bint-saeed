import {
  FOOTER_EXTRA_PAYMENT_ASSETS,
  PAYMENT_METHOD_ASSETS,
  type PaymentMethodAsset,
} from '@/lib/payments/paymentMethodAssets'
import { PaymentMethodIcon } from '@/components/PaymentMethodIcon'

const PAYMENT_METHODS: Array<
  PaymentMethodAsset & { tileClass: string }
> = PAYMENT_METHOD_ASSETS.map((asset) => ({
    ...asset,
    tileClass:
      asset.id === 'paypal'
        ? 'min-w-[3.5rem] px-2'
        : asset.id === 'apple-pay' || asset.id === 'google-pay'
          ? 'min-w-[3.5rem] px-2'
          : 'min-w-[3.25rem] px-2.5',
  })).concat(
    FOOTER_EXTRA_PAYMENT_ASSETS.map((asset) => ({
      ...asset,
      tileClass: 'min-w-[3.25rem] px-2.5',
    })),
  )

type Props = {
  label: string
  className?: string
  align?: 'start' | 'center'
}

export default function FooterPaymentMethods({ label, className = '', align = 'start' }: Props) {
  const alignClass = align === 'center' ? 'text-center' : 'text-left'

  return (
    <div className={className}>
      <p
        className={`mb-3 font-montserrat text-[10px] uppercase tracking-[0.22em] text-white/40 ${alignClass}`}
      >
        {label}
      </p>
      <ul
        className={`flex flex-wrap items-center gap-2 ${align === 'center' ? 'justify-center' : 'justify-start'}`}
        aria-label={label}
      >
        {PAYMENT_METHODS.map((method) => (
          <li key={method.id}>
            <span
              className={`flex h-9 items-center justify-center rounded-[5px] border border-white/10 bg-[#f8f6f3] shadow-[0_2px_10px_rgba(0,0,0,0.14)] ${method.tileClass} ${method.chipClass ?? ''}`}
            >
              <PaymentMethodIcon id={method.id} />
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
