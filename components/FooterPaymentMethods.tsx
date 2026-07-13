import {
  FOOTER_EXTRA_PAYMENT_ASSETS,
  PAYMENT_METHOD_ASSETS,
} from '@/lib/payments/paymentMethodAssets'
import { PaymentMethodIcon } from '@/components/PaymentMethodIcon'

const CARD_METHODS = [
  ...PAYMENT_METHOD_ASSETS,
  ...FOOTER_EXTRA_PAYMENT_ASSETS.filter((m) => m.id === 'link'),
]

const BNPL_METHODS = FOOTER_EXTRA_PAYMENT_ASSETS.filter(
  (m) => m.id === 'tamara' || m.id === 'tabby',
)

const PAYMENT_TILE_CLASS =
  'flex h-8 items-center justify-center overflow-hidden rounded-[4px] shadow-[0_2px_10px_rgba(0,0,0,0.14)]'

type Props = {
  label: string
  className?: string
  align?: 'start' | 'center'
}

export default function FooterPaymentMethods({ label, className = '', align = 'start' }: Props) {
  const alignClass = align === 'center' ? 'text-center' : 'text-left'
  const rowClass = `flex flex-wrap items-center gap-2.5 ${align === 'center' ? 'justify-center' : 'justify-start'}`

  return (
    <div className={className}>
      <p
        className={`mb-3 font-montserrat text-[10px] uppercase tracking-[0.22em] text-white/40 ${alignClass}`}
      >
        {label}
      </p>
      <div className="space-y-2.5" aria-label={label}>
        <ul className={rowClass}>
          {CARD_METHODS.map((method) => (
            <li key={method.id}>
              <span className={PAYMENT_TILE_CLASS}>
                <PaymentMethodIcon id={method.id} />
              </span>
            </li>
          ))}
        </ul>
        {BNPL_METHODS.length > 0 ? (
          <ul className={`${rowClass} flex-nowrap`}>
            {BNPL_METHODS.map((method) => (
              <li key={method.id} className="shrink-0">
                <span className={PAYMENT_TILE_CLASS}>
                  <PaymentMethodIcon
                    id={method.id}
                    className="!max-w-[72px] sm:!max-w-[80px]"
                  />
                </span>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  )
}
