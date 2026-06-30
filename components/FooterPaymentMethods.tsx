import {
  FOOTER_EXTRA_PAYMENT_ASSETS,
  PAYMENT_METHOD_ASSETS,
} from '@/lib/payments/paymentMethodAssets'
import { PaymentMethodIcon } from '@/components/PaymentMethodIcon'

const PAYMENT_METHODS = [...PAYMENT_METHOD_ASSETS, ...FOOTER_EXTRA_PAYMENT_ASSETS]

const PAYMENT_TILE_CLASS =
  'flex h-8 items-center justify-center overflow-hidden rounded-[4px] shadow-[0_2px_10px_rgba(0,0,0,0.14)]'

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
        className={`flex flex-wrap items-center gap-2.5 ${align === 'center' ? 'justify-center' : 'justify-start'}`}
        aria-label={label}
      >
        {PAYMENT_METHODS.map((method) => (
          <li key={method.id}>
            <span className={PAYMENT_TILE_CLASS}>
              <PaymentMethodIcon id={method.id} />
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
