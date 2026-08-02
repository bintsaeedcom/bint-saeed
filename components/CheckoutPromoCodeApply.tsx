'use client'

import { useState } from 'react'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { getCheckoutFormCopy } from '@/lib/i18n/checkoutFormCopyI18n'

type Props = {
  appliedCode: string | null
  onApplied: (code: string | null) => void
  onDark?: boolean
}

export default function CheckoutPromoCodeApply({
  appliedCode,
  onApplied,
  onDark = true,
}: Props) {
  const { language } = useLanguage()
  const form = getCheckoutFormCopy(language)
  const [code, setCode] = useState(appliedCode ?? '')
  const [busy, setBusy] = useState(false)
  const [message, setMessage] = useState<string | null>(null)

  async function onApply(e: React.FormEvent) {
    e.preventDefault()
    const trimmed = code.trim().toUpperCase()
    if (!trimmed) {
      setMessage(form.promoEnterCode)
      return
    }
    setBusy(true)
    setMessage(null)
    try {
      const res = await fetch('/api/checkout/validate-discount', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code: trimmed }),
      })
      const data = (await res.json()) as {
        valid?: boolean
        message?: string
        code?: string
      }
      if (!res.ok || !data.valid) {
        onApplied(null)
        setMessage(data.message || form.promoInvalid)
        return
      }
      const applied = (data.code || trimmed).toUpperCase()
      onApplied(applied)
      setCode(applied)
      setMessage(null)
    } catch {
      onApplied(null)
      setMessage(form.promoUnable)
    } finally {
      setBusy(false)
    }
  }

  const labelClass = onDark
    ? 'font-montserrat text-[10px] uppercase tracking-[0.16em] text-white/55'
    : 'font-montserrat text-[10px] uppercase tracking-[0.16em] text-brand-clayRed/70'
  const hintClass = onDark
    ? 'mt-1 font-montserrat text-[11px] leading-snug tracking-wide text-white/45'
    : 'mt-1 font-montserrat text-[11px] leading-snug tracking-wide text-brand-clayRed/55'
  const inputClass = onDark
    ? 'w-full border border-white/15 bg-white/5 px-3 py-2.5 font-montserrat text-sm tracking-[0.1em] text-white outline-none placeholder:text-white/35 focus:border-brand-dustyBlue/60'
    : 'w-full border border-brand-stone/40 bg-brand-pageCanvas px-3 py-2.5 font-montserrat text-sm tracking-[0.1em] text-brand-darkRed outline-none placeholder:text-brand-clayRed/35 focus:border-brand-darkRed/40'
  const btnClass = onDark
    ? 'shrink-0 border border-white/25 px-4 py-2.5 font-montserrat text-[10px] uppercase tracking-[0.14em] text-white transition-colors hover:border-brand-dustyBlue/70 hover:text-brand-dustyBlue disabled:opacity-50'
    : 'shrink-0 border border-brand-darkRed/30 px-4 py-2.5 font-montserrat text-[10px] uppercase tracking-[0.14em] text-brand-darkRed transition-colors hover:border-brand-dustyBlue hover:text-brand-dustyBlue disabled:opacity-50'
  const successClass = onDark ? 'text-brand-dustyBlue' : 'text-brand-dustyBlue'

  return (
    <div className="mt-5 text-start">
      <p className={labelClass}>{form.promoCode}</p>
      <p className={hintClass}>{form.promoHint}</p>
      {appliedCode ? (
        <div className="mt-2 space-y-2">
          <div
            className={`flex items-baseline justify-between gap-3 font-montserrat text-sm ${
              onDark ? 'text-white/80' : 'text-brand-darkRed'
            }`}
          >
            <span className="min-w-0 tracking-[0.08em]">{appliedCode}</span>
            <span className={`shrink-0 ${successClass}`}>{form.promoApplied}</span>
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
            {form.promoRemove}
          </button>
        </div>
      ) : (
        <form onSubmit={onApply} className="mt-2 flex flex-col gap-2 sm:flex-row sm:items-stretch">
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value.toUpperCase())}
            placeholder={form.promoPlaceholder}
            autoComplete="off"
            spellCheck={false}
            className={inputClass}
            aria-label={form.promoCode}
          />
          <button type="submit" disabled={busy} className={btnClass}>
            {busy ? form.promoApplying : form.promoApply}
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
