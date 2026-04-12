'use client'

import Link from 'next/link'
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
    <div className="mb-8 border border-brand-stone/40 bg-white">
      <div
        className={`flex flex-wrap items-center justify-between gap-2 border-b border-brand-stone/30 bg-brand-stone/5 px-4 py-3 ${isRTL ? 'flex-row-reverse' : ''}`}
      >
        <div className={isRTL ? 'text-right' : ''}>
          <h2 className="font-rozha text-lg text-brand-darkRed">
            {isRTL ? 'جدول المقاسات' : 'Size chart'}
          </h2>
          <p className="font-roboto text-[10px] uppercase tracking-[0.2em] text-brand-clayRed/60">
            {isRTL ? 'كل الأنماط — قصة A' : 'All styles — A-cut (inches)'}
          </p>
        </div>
        <div className={`flex flex-wrap gap-2 ${isRTL ? 'justify-end' : ''}`}>
          {onOpenInteractive ? (
            <button
              type="button"
              onClick={onOpenInteractive}
              className="font-roboto text-[10px] uppercase tracking-[0.15em] text-brand-darkRed underline-offset-4 hover:text-brand-dustyBlue hover:underline"
              data-cursor-hover
            >
              {isRTL ? 'تمييز مقاسي' : 'Highlight my size'}
            </button>
          ) : null}
          <Link
            href="/size-guide"
            className={`inline-flex items-center gap-1 font-roboto text-[10px] uppercase tracking-[0.15em] text-brand-dustyBlue hover:text-brand-darkRed ${isRTL ? 'flex-row-reverse' : ''}`}
            data-cursor-hover
          >
            {isRTL ? 'الدليل الكامل' : 'Full guide'}
            <FiExternalLink className="h-3 w-3" aria-hidden />
          </Link>
        </div>
      </div>
      <div className="overflow-x-auto p-3 sm:p-4">
        <table className="w-full min-w-[560px] text-sm">
          <thead>
            <tr>
              <th
                className={`py-2 px-2 font-roboto text-[10px] uppercase tracking-[0.12em] text-brand-darkRed ${isRTL ? 'text-right' : 'text-left'}`}
              >
                {isRTL ? 'القياس' : 'Measurement'}
              </th>
              {headers.map((size) => (
                <th
                  key={size}
                  className="px-2 py-2 text-center font-roboto text-[10px] uppercase tracking-[0.12em] text-brand-darkRed"
                >
                  {size}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {measurements.map((row, rowIndex) => (
              <tr key={row.label.en} className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-brand-stone/5'}>
                <td
                  className={`py-2.5 px-2 font-roboto text-xs text-brand-darkRed ${isRTL ? 'text-right' : 'text-left'}`}
                >
                  {isRTL ? row.label.ar : row.label.en}
                </td>
                {row.values.map((value, colIndex) => (
                  <td key={colIndex} className="px-2 py-2.5 text-center font-roboto text-xs text-brand-clayRed">
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className={`border-t border-brand-stone/20 px-4 py-3 font-roboto text-[11px] leading-relaxed text-brand-clayRed/70 ${isRTL ? 'text-right' : 'text-left'}`}>
        {isRTL
          ? 'الألوان المعروضة أعلاه متوفرة لهذا الطراز. للطول المخصص، اذكريه في ملاحظات الطلب.'
          : 'Colour options above apply to this style. Add custom length in order notes if needed.'}
      </p>
    </div>
  )
}
