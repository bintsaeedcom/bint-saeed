import Image from 'next/image'

/** Brand marks — cards from datatrans/aaronfagan; wallets from datatrans/payment-logos */
const PAYMENT_METHODS = [
  {
    id: 'visa',
    label: 'Visa',
    src: '/payments/visa.svg',
    width: 48,
    height: 16,
    tileClass: 'min-w-[3.25rem] px-2.5',
    imageClass: 'max-h-[16px] max-w-[44px]',
  },
  {
    id: 'mastercard',
    label: 'Mastercard',
    src: '/payments/mastercard.svg',
    width: 40,
    height: 24,
    tileClass: 'min-w-[3.25rem] px-2.5',
    imageClass: 'max-h-[22px] max-w-[36px]',
  },
  {
    id: 'amex',
    label: 'American Express',
    src: '/payments/amex.svg',
    width: 52,
    height: 20,
    tileClass: 'min-w-[3.5rem] px-2.5',
    imageClass: 'max-h-[22px] max-w-[34px]',
  },
  {
    id: 'apple-pay',
    label: 'Apple Pay',
    src: '/payments/apple-pay.svg',
    width: 44,
    height: 18,
    tileClass: 'min-w-[3.5rem] px-2',
    imageClass: 'max-h-[20px] max-w-[48px]',
  },
  {
    id: 'google-pay',
    label: 'Google Pay',
    src: '/payments/google-pay.svg',
    width: 48,
    height: 18,
    tileClass: 'min-w-[3.5rem] px-2',
    imageClass: 'max-h-[20px] max-w-[48px]',
  },
  {
    id: 'paypal',
    label: 'PayPal',
    src: '/payments/paypal.svg',
    width: 52,
    height: 16,
    tileClass: 'min-w-[3.5rem] px-2',
    imageClass: 'max-h-[16px] max-w-[52px]',
  },
  {
    id: 'link',
    label: 'Link',
    src: '/payments/link.svg',
    width: 40,
    height: 16,
    tileClass: 'min-w-[3.25rem] px-2.5',
    imageClass: 'max-h-[14px] max-w-[40px]',
  },
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
            <span
              className={`flex h-9 items-center justify-center rounded-[5px] border border-white/10 bg-[#f8f6f3] shadow-[0_2px_10px_rgba(0,0,0,0.14)] ${method.tileClass}`}
            >
              <Image
                src={method.src}
                alt={method.label}
                width={method.width}
                height={method.height}
                className={`h-auto w-auto object-contain ${method.imageClass}`}
              />
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
