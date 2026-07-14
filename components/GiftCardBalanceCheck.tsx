'use client'

import { useState } from 'react'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { useCurrency } from '@/lib/currency/CurrencyContext'
import { formatGiftCardAmountAed } from '@/lib/giftCards/denominations'
import { formatAmountForCurrency } from '@/lib/pricing'
import { ctaPrimary } from '@/lib/ui/ctaClasses'

/** Gift card balance check — account / signed-in surfaces only. */
export default function GiftCardBalanceCheck({ className = '' }: { className?: string }) {
  const { isRTL, language } = useLanguage()
  const { currency } = useCurrency()
  const [balanceCode, setBalanceCode] = useState('')
  const [balanceLoading, setBalanceLoading] = useState(false)
  const [balanceMessage, setBalanceMessage] = useState<string | null>(null)

  const balanceTitle = language === 'ar' ? 'تحققي من الرصيد' : 'Check balance'
  const balanceHint =
    language === 'ar'
      ? 'أدخلي رمز بطاقة الهدايا لمعرفة المبلغ المتبقي.'
      : 'Enter a gift card code to see the remaining amount.'
  const balanceCta = language === 'ar' ? 'عرض الرصيد' : 'View balance'
  const balancePlaceholder = language === 'ar' ? 'BS-GC-····-····' : 'BS-GC-····-····'

  async function onCheckBalance(e: React.FormEvent) {
    e.preventDefault()
    const code = balanceCode.trim()
    if (!code) {
      setBalanceMessage(language === 'ar' ? 'أدخلي الرمز.' : 'Enter a code.')
      return
    }
    setBalanceLoading(true)
    setBalanceMessage(null)
    try {
      const res = await fetch('/api/gift-cards/balance', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code, currency: currency.code }),
      })
      const data = await res.json()
      if (!res.ok || !data?.ok) {
        setBalanceMessage(
          data?.message ||
            (language === 'ar' ? 'تعذر العثور على هذه البطاقة.' : 'We could not find this gift card.')
        )
        return
      }
      const remaining = formatAmountForCurrency(data.balanceInCurrency, data.currency)
      const issued = formatGiftCardAmountAed(data.issuedAed)
      setBalanceMessage(
        language === 'ar'
          ? `المتبقي: ${remaining} · القيمة الأصلية: ${issued}`
          : `Remaining: ${remaining} · Issued: ${issued}`
      )
    } catch {
      setBalanceMessage(language === 'ar' ? 'تعذر التحقق الآن.' : 'Unable to check balance right now.')
    } finally {
      setBalanceLoading(false)
    }
  }

  return (
    <section className={`border-t border-brand-stone/30 pt-8 ${isRTL ? 'text-right' : 'text-left'} ${className}`}>
      <h2 className="font-rozha text-2xl text-brand-darkRed">{balanceTitle}</h2>
      <p className="mt-3 font-montserrat text-sm leading-relaxed text-brand-clayRed/75">{balanceHint}</p>
      <form onSubmit={onCheckBalance} className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-stretch">
        <input
          type="text"
          value={balanceCode}
          onChange={(e) => setBalanceCode(e.target.value)}
          placeholder={balancePlaceholder}
          autoComplete="off"
          spellCheck={false}
          className="w-full border border-brand-stone/40 bg-brand-pageCanvas px-4 py-3 font-montserrat text-sm tracking-[0.12em] text-brand-darkRed outline-none placeholder:text-brand-clayRed/35 focus:border-brand-darkRed/40"
        />
        <button
          type="submit"
          disabled={balanceLoading}
          className={`${ctaPrimary} inline-flex shrink-0 justify-center disabled:opacity-60`}
          data-cursor-hover
        >
          {balanceLoading ? '…' : balanceCta}
        </button>
      </form>
      {balanceMessage ? (
        <p className="mt-4 font-montserrat text-[13px] leading-relaxed text-brand-clayRed/80">{balanceMessage}</p>
      ) : null}
    </section>
  )
}
