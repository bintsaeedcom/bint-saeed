'use client'

import { useState, useEffect } from 'react'
import { useLanguage } from '@/lib/i18n/LanguageContext'

function msUntilMidnight(): number {
  const now = new Date()
  const end = new Date(now)
  end.setHours(24, 0, 0, 0)
  return Math.max(0, end.getTime() - now.getTime())
}

function formatHms(ms: number): string {
  const totalSec = Math.floor(ms / 1000)
  const h = Math.floor(totalSec / 3600)
  const m = Math.floor((totalSec % 3600) / 60)
  const s = totalSec % 60
  return [h, m, s].map((n) => String(n).padStart(2, '0')).join(':')
}

export default function OrderCutoffBanner() {
  const { isRTL } = useLanguage()
  const [remaining, setRemaining] = useState(0)

  useEffect(() => {
    const tick = () => setRemaining(msUntilMidnight())
    tick()
    const id = window.setInterval(tick, 1000)
    return () => window.clearInterval(id)
  }, [])

  return (
    <div
      className="mb-8 border border-brand-stone/40 bg-brand-stone/5 px-4 py-4"
      role="status"
      aria-live="polite"
    >
      <p className="font-roboto text-[11px] uppercase tracking-[0.2em] text-brand-darkRed">
        {isRTL ? 'التوصيل' : 'Delivery'}
      </p>
      <p className="mt-2 font-roboto text-sm leading-relaxed tracking-wide text-brand-clayRed/80">
        {isRTL
          ? 'اطلبي قبل منتصف الليل (بتوقيت جهازك) لمعالجة الطلب في الدفعة التالية. الاستلام خلال ١–٢ أسبوعًا حسب الوجهة.'
          : 'Order before midnight (your local time) to join the next atelier batch. Receive your piece within 1–2 weeks depending on destination.'}
      </p>
      <div className="mt-4 flex flex-wrap items-baseline gap-3 border-t border-brand-stone/20 pt-3">
        <span className="font-roboto text-[10px] uppercase tracking-[0.18em] text-brand-clayRed/60">
          {isRTL ? 'الوقت حتى منتصف الليل' : 'Time until midnight'}
        </span>
        <span className="font-roboto text-xl tabular-nums tracking-wider text-brand-darkRed" aria-label="Countdown">
          {formatHms(remaining)}
        </span>
      </div>
    </div>
  )
}
