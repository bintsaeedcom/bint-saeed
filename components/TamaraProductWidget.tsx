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
 * footer pastel pill logo for clear brand recognition.
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
        'mb-0 flex items-center gap-3 rounded-[4px] border border-[#8fd4d0]/55 bg-gradient-to-r from-[#eef9f8] via-[#f7f4ef] to-[#f3eee8] px-3.5 py-2 shadow-[0_6px_20px_-12px_rgba(26,2,16,0.18)]',
        'text-start',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      data-tamara-widget-host
    >
      <p className="min-w-0 flex-1 font-montserrat text-[12px] leading-[1.45] tracking-[0.02em] text-brand-darkRed sm:text-[13px]">
        <span>{copy.before}</span>
        <span className="font-semibold tabular-nums tracking-wide text-[#0d6e6a]">
          {installmentFormatted}
        </span>
        <span>{copy.after}</span>
      </p>
      <Image
        src={TAMARA_LOGO.badge}
        alt="Tamara"
        width={191}
        height={64}
        className="h-[24px] w-auto max-w-[84px] shrink-0 object-contain sm:h-[26px] sm:max-w-[92px]"
        unoptimized
      />
    </div>
  )
}
