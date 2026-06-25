import Image from 'next/image'

const PAYMENT_METHODS = [
  { id: 'visa', label: 'Visa', src: '/payments/visa.svg', width: 38, height: 12 },
  { id: 'mastercard', label: 'Mastercard', src: '/payments/mastercard.svg', width: 28, height: 18 },
  { id: 'amex', label: 'American Express', src: '/payments/amex.svg', width: 38, height: 12 },
  { id: 'apple-pay', label: 'Apple Pay', src: '/payments/apple-pay.svg', width: 42, height: 18 },
  { id: 'google-pay', label: 'Google Pay', src: '/payments/google-pay.svg', width: 46, height: 18 },
  { id: 'link', label: 'Link', src: '/payments/link.svg', width: 34, height: 12 },
] as const

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
            <span className="flex h-9 min-w-[3.25rem] items-center justify-center rounded-[5px] border border-white/10 bg-[#f8f6f3] px-2.5 shadow-[0_2px_10px_rgba(0,0,0,0.14)]">
              <Image
                src={method.src}
                alt={method.label}
                width={method.width}
                height={method.height}
                className="h-auto max-h-[15px] w-auto max-w-[52px] object-contain"
              />
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
