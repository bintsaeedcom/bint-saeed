'use client'

import Image from 'next/image'
import { useMemo } from 'react'
import { getTamaraPublicKey } from '@/lib/tamara/publicKey'
import { TAMARA_LOGO } from '@/lib/payments/tamaraBrandAssets'
import { useLanguage } from '@/lib/i18n/LanguageContext'

type Props = {
  /** Already-converted amount in the shopper’s display currency (same input as before). */
  amount: number
  currency?: string
  className?: string
}

/** Same split Tamara’s summary widget uses: total ÷ 4, two decimal places. */
function formatTamaraInstallment(total: number, currencyCode: string): string {
  const part = Math.round((total / 4) * 100) / 100
  const number = part.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
  const code = currencyCode.toUpperCase() === 'SAR' ? 'SAR' : 'AED'
  return `${code} ${number}`
}

/**
 * Tamara product messaging — Bint Saeed typography + layout,
 * official Tamara gradient logo unchanged.
 */
export default function TamaraProductWidget({ amount, currency = 'AED', className = '' }: Props) {
  const { language, isRTL } = useLanguage()
  const publicKey = getTamaraPublicKey()
  const code = currency.toUpperCase()
  const enabled = Boolean(publicKey && amount > 0 && (code === 'AED' || code === 'SAR'))

  const installmentFormatted = useMemo(
    () => formatTamaraInstallment(amount, code),
    [amount, code],
  )
  const logoSrc = language === 'ar' ? TAMARA_LOGO.gradientAr : TAMARA_LOGO.gradientEn

  const copy = useMemo(() => {
    if (language === 'ar') {
      return {
        before: 'ادفعي على 4 دفعات بقيمة ',
        after: ' مع Tamara. بدون رسوم تأخير.',
      }
    }
    return {
      before: 'Pay in 4 payments of ',
      after: ' with Tamara. No late fees.',
    }
  }, [language])

  if (!enabled) return null

  return (
    <div
      className={[
        'mb-0 flex items-center gap-3 rounded-[4px] border border-brand-stone/25 bg-[#f3eee8]/70 px-3.5 py-3',
        isRTL ? 'flex-row-reverse text-right' : 'text-left',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      data-tamara-widget-host
    >
      <p className="min-w-0 flex-1 font-montserrat text-[12px] leading-[1.55] tracking-[0.02em] text-brand-darkRed sm:text-[13px]">
        <span>{copy.before}</span>
        <span className="font-medium tabular-nums tracking-wide">{installmentFormatted}</span>
        <span>{copy.after}</span>
      </p>
      <Image
        src={logoSrc}
        alt="Tamara"
        width={88}
        height={28}
        className="h-7 w-auto shrink-0 object-contain sm:h-8"
        unoptimized
      />
    </div>
  )
}
