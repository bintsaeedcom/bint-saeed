'use client'

import { useState } from 'react'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { useCurrency } from '@/lib/currency/CurrencyContext'
import { formatAmountForCurrency } from '@/lib/pricing'
import { cartContainsGiftCardPurchase } from '@/lib/giftCards/cartDetection'
import type { CartItem } from '@/store/cartStore'

export type AppliedGiftCardPreview = {
  code: string
  appliedInCurrency: number
  remainingInCurrency: number
  currency: string
}

type Props = {
  items: CartItem[]
  amountDueBeforeGiftCard: number
  applied: AppliedGiftCardPreview | null
  onApplied: (value: AppliedGiftCardPreview | null) => void
  onDark?: boolean
}

export default function CheckoutGiftCardApply({
  items,
  amountDueBeforeGiftCard,
  applied,
  onApplied,
  onDark = true,
}: Props) {
  const { isRTL, language } = useLanguage()
  const { currency } = useCurrency()
  const [code, setCode] = useState(applied?.code ?? '')
  const [busy, setBusy] = useState(false)
  const [message, setMessage] = useState<string | null>(null)

  const blocked = cartContainsGiftCardPurchase(items)
  if (blocked) {
    return (
      <p
        className={`mt-4 font-montserrat text-[11px] leading-snug tracking-wide ${
 onDark ? 'text-white/55' : 'text-brand-clayRed/70'
 } text-start`}
      >
        {language === 'ar'
          ? 'بطاقات الهدايا لا تُستخدم لشراء بطاقات هدايا أخرى.'
          : 'Gift cards cannot be used to buy gift cards.'}
      </p>
    )
  }

  async function onApply(e: React.FormEvent) {
    e.preventDefault()
    const trimmed = code.trim()
    if (!trimmed) {
      setMessage(language === 'ar' ? 'أدخلي الرمز.' : 'Enter a code.')
      return
    }
    if (!(amountDueBeforeGiftCard > 0)) {
      setMessage(
        language === 'ar' ? 'لا يوجد مبلغ لتطبيق البطاقة عليه.' : 'There is no amount to apply.',
      )
      return
    }
    setBusy(true)
    setMessage(null)
    try {
      const res = await fetch('/api/gift-cards/redeem', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          code: trimmed,
          amount: amountDueBeforeGiftCard,
          currency: currency.code,
          commit: false,
        }),
      })
      const data = (await res.json()) as {
        ok?: boolean
        message?: string
        code?: string
        appliedInCurrency?: number
        remainingInCurrency?: number
        currency?: string
      }
      if (!res.ok || !data.ok || !(data.appliedInCurrency && data.appliedInCurrency > 0)) {
        onApplied(null)
        setMessage(
          data.message ||
            (language === 'ar' ? 'تعذر تطبيق بطاقة الهدايا.' : 'Unable to apply this gift card.'),
        )
        return
      }
      onApplied({
        code: data.code || trimmed.toUpperCase(),
        appliedInCurrency: data.appliedInCurrency,
        remainingInCurrency: data.remainingInCurrency ?? 0,
        currency: data.currency || currency.code,
      })
      setMessage(null)
    } catch {
      onApplied(null)
      setMessage(language === 'ar' ? 'تعذر التطبيق الآن.' : 'Unable to apply right now.')
    } finally {
      setBusy(false)
    }
  }

  const labelClass = onDark
    ? 'font-montserrat text-[10px] uppercase tracking-[0.16em] text-white/55'
    : 'font-montserrat text-[10px] uppercase tracking-[0.16em] text-brand-clayRed/70'
  const inputClass = onDark
    ? 'w-full border border-white/15 bg-white/5 px-3 py-2.5 font-montserrat text-sm tracking-[0.1em] text-white outline-none placeholder:text-white/35 focus:border-brand-dustyBlue/60'
    : 'w-full border border-brand-stone/40 bg-brand-pageCanvas px-3 py-2.5 font-montserrat text-sm tracking-[0.1em] text-brand-darkRed outline-none placeholder:text-brand-clayRed/35 focus:border-brand-darkRed/40'
  const btnClass = onDark
    ? 'shrink-0 border border-white/25 px-4 py-2.5 font-montserrat text-[10px] uppercase tracking-[0.14em] text-white transition-colors hover:border-brand-dustyBlue/70 hover:text-brand-dustyBlue disabled:opacity-50'
    : 'shrink-0 border border-brand-darkRed/30 px-4 py-2.5 font-montserrat text-[10px] uppercase tracking-[0.14em] text-brand-darkRed transition-colors hover:border-brand-dustyBlue hover:text-brand-dustyBlue disabled:opacity-50'

  return (
    <div className={`mt-5 text-start`}>
      <p className={labelClass}>{language === 'ar' ? 'بطاقة هدايا' : 'Gift card'}</p>
      <p
        className={`mt-1 font-montserrat text-[11px] leading-snug tracking-wide ${
          onDark ? 'text-white/45' : 'text-brand-clayRed/55'
        }`}
      >
        {language === 'ar'
          ? 'لرصيد بطاقة هدايا Bint Saeed فقط — ليس للرموز الترويجية.'
          : 'For a Bint Saeed gift card balance only — not for promo codes.'}
      </p>
      {applied ? (
        <div className="mt-2 space-y-2">
          <div
            className={`flex items-baseline justify-between gap-3 font-montserrat text-sm ${
 onDark ? 'text-white/80' : 'text-brand-darkRed'
 } `}
          >
            <span className="min-w-0 tracking-[0.08em]">{applied.code}</span>
            <span className="shrink-0 text-brand-dustyBlue">
              −{formatAmountForCurrency(applied.appliedInCurrency, currency.code)}
            </span>
          </div>
          <button
            type="button"
            onClick={() => {
              onApplied(null)
              setCode('')
              setMessage(null)
            }}
            className={`${btnClass} w-full sm:w-auto`}
          >
            {language === 'ar' ? 'إزالة' : 'Remove'}
          </button>
        </div>
      ) : (
        <form onSubmit={onApply} className="mt-2 flex flex-col gap-2 sm:flex-row sm:items-stretch">
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="BS-GC-····-····"
            autoComplete="off"
            spellCheck={false}
            className={inputClass}
          />
          <button type="submit" disabled={busy} className={btnClass}>
            {busy
              ? language === 'ar'
                ? 'جاري…'
                : 'Applying…'
              : language === 'ar'
                ? 'تطبيق'
                : 'Apply'}
          </button>
        </form>
      )}
      {message ? (
        <p
          className={`mt-2 font-montserrat text-[11px] leading-snug ${
 onDark ? 'text-amber-200/90' : 'text-brand-clayRed'
 }`}
        >
          {message}
        </p>
      ) : null}
    </div>
  )
}
