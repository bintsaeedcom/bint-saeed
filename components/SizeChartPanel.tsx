'use client'

import LocaleLink from '@/components/LocaleLink'
import { FiExternalLink } from 'react-icons/fi'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { sizeGuideTable } from '@/lib/sizeGuideData'

interface SizeChartPanelProps {
  onOpenInteractive?: () => void
}

/** Always-visible chart — same numbers for all ready-to-wear silhouettes on the shop (A-cut). */
export default function SizeChartPanel({ onOpenInteractive }: SizeChartPanelProps) {
  const { isRTL } = useLanguage()
  const { headers, measurements } = sizeGuideTable

  return (
    <div className="mb-10 overflow-hidden rounded-xl border border-brand-stone/30 bg-[#f9f6f2]">
      <div
        className={`flex flex-wrap items-center justify-between gap-2 border-b border-brand-stone/25 bg-white/70 px-5 py-4 ${isRTL ? 'flex-row-reverse' : ''}`}
      >
        <div className={isRTL ? 'text-right' : ''}>
          <h2 className="font-rozha text-xl text-brand-darkRed">
            {isRTL ? 'جدول المقاسات' : 'Size chart'}
          </h2>
          <p className="font-montserrat text-[10px] uppercase tracking-[0.22em] text-brand-clayRed/60">
            {isRTL ? 'كل الأنماط — قصة A' : 'All styles — A-cut (inches)'}
          </p>
        </div>
        <div className={`flex flex-wrap gap-2 ${isRTL ? 'justify-end' : ''}`}>
          {onOpenInteractive ? (
            <button
              type="button"
              onClick={onOpenInteractive}
              className="font-montserrat text-[10px] uppercase tracking-[0.15em] text-brand-darkRed underline-offset-4 hover:text-brand-dustyBlue hover:underline"
              data-cursor-hover
            >
              {isRTL ? 'تمييز مقاسي' : 'Highlight my size'}
            </button>
          ) : null}
          <LocaleLink
            href="/size-guide"
            className={`inline-flex items-center gap-1 font-montserrat text-[10px] uppercase tracking-[0.15em] text-brand-dustyBlue hover:text-brand-darkRed ${isRTL ? 'flex-row-reverse' : ''}`}
            data-cursor-hover
          >
            {isRTL ? 'الدليل الكامل' : 'Full guide'}
            <FiExternalLink className="h-3 w-3" aria-hidden />
          </LocaleLink>
        </div>
      </div>
      <div className="overflow-x-auto px-4 pb-4 pt-3 sm:px-5 sm:pb-5 sm:pt-4">
        <table className="w-full min-w-[560px] text-sm">
          <thead>
            <tr>
              <th
                className={`px-3 py-2.5 font-montserrat text-[10px] uppercase tracking-[0.14em] text-brand-darkRed ${isRTL ? 'text-right' : 'text-left'}`}
              >
                {isRTL ? 'القياس' : 'Measurement'}
              </th>
              {headers.map((size) => (
                <th
                  key={size}
                  className="px-3 py-2.5 text-center font-montserrat text-[10px] uppercase tracking-[0.14em] text-brand-darkRed"
                >
                  {size}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {measurements.map((row) => (
              <tr key={row.label.en} className="border-t border-brand-stone/15 bg-white/60">
                <td
                  className={`px-3 py-3 font-montserrat text-xs text-brand-darkRed ${isRTL ? 'text-right' : 'text-left'}`}
                >
                  {isRTL ? row.label.ar : row.label.en}
                </td>
                {row.values.map((value, colIndex) => (
                  <td key={colIndex} className="px-3 py-3 text-center font-montserrat text-xs text-brand-clayRed">
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className={`border-t border-brand-stone/20 bg-white/55 px-5 py-3.5 font-montserrat text-[11px] leading-relaxed text-brand-clayRed/70 ${isRTL ? 'text-right' : 'text-left'}`}>
        {isRTL
          ? 'الألوان المعروضة أعلاه متوفرة لهذا الطراز. للطول المخصص، اذكريه في ملاحظات الطلب.'
          : 'Colour options above apply to this style. Add custom length in order notes if needed.'}
      </p>
    </div>
  )
}
