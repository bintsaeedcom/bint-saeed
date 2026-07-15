'use client'

import { useState } from 'react'
import LocaleLink from '@/components/LocaleLink'
import Image from 'next/image'
import AppPageWayfinding from '@/components/AppPageWayfinding'
import {
  EDITORIAL_PAGE_CONTAINER,
  EDITORIAL_PAGE_SHELL,
  SITE_CONTENT_TOP_PAD,
} from '@/lib/ui/editorialPageChrome'
import { FiCheck } from 'react-icons/fi'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { getSizeGuideCopy } from '@/lib/i18n/sizeGuideCopyI18n'
import { commerceUi } from '@/lib/i18n/commerceUi'
import {
  ctaButtonRow,
  ctaInButtonRow,
  ctaPrimary,
  ctaSecondaryOnLight,
} from '@/lib/ui/ctaClasses'

const SIZE_HEADERS = ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL'] as const
const UK_SIZE = ['6', '8', '10', '12', '14', '16', '18', '20'] as const

const inchRowValues = [
  ['31.5-32.7', '32.7-34.3', '34.6-36.2', '36.6-38.2', '38.6-40.2', '40.6-42.1', '42.5-44.5', '44.5-46.9'],
  ['24.4-25.2', '25.6-26.8', '27.2-28.7', '29.1-30.7', '31.1-32.7', '33.1-34.6', '35.0-37.0', '37.0-39.4'],
  ['35.0-36.2', '36.2-37.8', '38.2-40.2', '40.2-42.5', '42.5-44.9', '44.9-47.2', '47.2-49.6', '49.6-52.0'],
] as const

const cmRowValues = [
  ['80-83', '83-87', '88-92', '93-97', '98-102', '103-107', '108-113', '113-119'],
  ['62-64', '65-68', '69-73', '74-78', '79-83', '84-88', '89-94', '94-100'],
  ['89-92', '92-96', '97-102', '102-108', '108-114', '114-120', '120-126', '126-132'],
] as const

const intlRows = [
  { label: 'UK', values: ['6', '8', '10', '12', '14', '16'] },
  { label: 'US', values: ['2', '4', '6', '8', '10', '12'] },
  { label: 'EU', values: ['32', '34', '36', '38', '40', '42'] },
  { label: 'AU', values: ['6', '8', '10', '12', '14', '16'] },
  { label: 'IT', values: ['38', '40', '42', '44', '46', '48'] },
  { label: 'FR', values: ['34', '36', '38', '40', '42', '44'] },
  { label: 'DE', values: ['32', '34', '36', '38', '40', '42'] },
  { label: 'DK', values: ['32', '34', '36', '38', '40', '42'] },
  { label: 'JP', values: ['5', '7', '9', '11', '13', '15'] },
  { label: 'RU', values: ['40', '42', '44', '46', '48', '50'] },
] as const

type SizeKey = (typeof SIZE_HEADERS)[number]
type Unit = 'inch' | 'cm'

export default function SizeGuidePage() {
  const { t, isRTL, language } = useLanguage()
  const copy = getSizeGuideCopy(language)
  const ui = commerceUi(language)
  const rowLabelKeys = ['bust', 'waist', 'hips'] as const
  const [selected, setSelected] = useState<SizeKey | null>(null)
  const [unit, setUnit] = useState<Unit>('cm')

  const activeRows = rowLabelKeys.map((key, i) => ({
    label: copy.rowLabels[key],
    values: (unit === 'cm' ? cmRowValues : inchRowValues)[i]!,
  }))

  const helpTitle = isRTL ? 'تحتاجين مساعدة بالمقاس؟' : 'Need sizing help?'
  const helpBody = isRTL
    ? 'فريقنا يساعدك لاختيار المقاس المثالي قبل الطلب.'
    : 'Our concierge can advise your best size before checkout.'
  const scrollHint = isRTL ? 'مرري أفقياً لعرض كل المقاسات' : 'Swipe sideways to see all sizes'
  const selectHint = isRTL ? 'اختاري مقاسك لتمييزه' : 'Select a size to highlight'
  const unitInch = isRTL ? 'بوصة' : 'Inches'
  const unitCm = isRTL ? 'سم' : 'CM'

  return (
    <div
      className={`${EDITORIAL_PAGE_SHELL} min-h-screen bg-brand-pageCanvas pb-20 ${SITE_CONTENT_TOP_PAD} ${
 isRTL ? 'rtl' : 'ltr'
 }`}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className={`${EDITORIAL_PAGE_CONTAINER} max-w-5xl`}>
        <AppPageWayfinding
          rtl={isRTL}
          variant="muted"
          className="mb-8"
          segments={[
            { label: ui.common.home, href: '/home' },
            { label: ui.common.shop, href: '/shop' },
            { label: t.footer.sizeGuide },
          ]}
          backLink={{
            href: '/shop',
            label: ui.common.backToShop,
          }}
        />

        <header className={`mb-10 max-w-2xl text-start`}>
          <span className="mb-3 block font-montserrat text-[10px] uppercase tracking-[0.28em] text-brand-dustyBlue">
            Bint Saeed
          </span>
          <h1
            data-document-h1="true"
            className="font-rozha text-[clamp(1.75rem,4.5vw,2.5rem)] leading-[1.12] tracking-[0.01em] text-brand-darkRed"
          >
            {t.footer.sizeGuide}
          </h1>
          <p className="mt-4 font-montserrat text-[13px] leading-[1.85] tracking-wide text-brand-clayRed/75">
            {copy.intro}
          </p>
        </header>

        {/* Size chips — thumb-friendly on mobile */}
        <div className="mb-8">
          <p
            className={`mb-3 font-montserrat text-[10px] uppercase tracking-[0.16em] text-brand-clayRed/65 ${
 'text-start'
 }`}
          >
            {selectHint}
          </p>
          <div className={`flex flex-wrap gap-2 `}>
            {SIZE_HEADERS.map((size) => {
              const active = selected === size
              return (
                <button
                  key={size}
                  type="button"
                  onClick={() => setSelected(active ? null : size)}
                  className={`inline-flex min-h-10 min-w-[2.75rem] items-center justify-center gap-1 px-3 font-montserrat text-[11px] uppercase tracking-[0.12em] transition-colors ${
 active
 ? 'bg-brand-darkRed text-white'
 : 'border border-brand-stone/35 bg-white/70 text-brand-darkRed hover:border-brand-dustyBlue hover:text-brand-dustyBlue'
 }`}
                  data-cursor-hover
                  aria-pressed={active}
                >
                  {size}
                  {active ? <FiCheck className="h-3 w-3" aria-hidden /> : null}
                </button>
              )
            })}
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="min-w-0 space-y-8 lg:col-span-7">
            {/* Unit toggle */}
            <div className="flex items-center justify-between gap-3 border-b border-brand-stone/25 pb-3">
              <h2 className="font-montserrat text-[11px] uppercase tracking-[0.16em] text-brand-darkRed">
                {unit === 'cm' ? copy.bodyMeasurementsCm : copy.bodyMeasurementsInch}
              </h2>
              <div
                className="inline-flex border border-brand-stone/30 bg-white/80 p-0.5"
                role="group"
                aria-label={isRTL ? 'وحدة القياس' : 'Measurement unit'}
              >
                {([
                  ['cm', unitCm],
                  ['inch', unitInch],
                ] as const).map(([id, label]) => (
                  <button
                    key={id}
                    type="button"
                    onClick={() => setUnit(id)}
                    className={`min-h-9 px-3 font-montserrat text-[10px] uppercase tracking-[0.14em] transition-colors ${
 unit === id
 ? 'bg-brand-darkRed text-white'
 : 'text-brand-clayRed/70 hover:text-brand-darkRed'
 }`}
                    data-cursor-hover
                    aria-pressed={unit === id}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            <p className="font-montserrat text-[11px] tracking-wide text-brand-clayRed/55 lg:hidden">
              {scrollHint}
            </p>

            <MeasurementTable
              title={unit === 'cm' ? copy.bodyMeasurementsCm : copy.bodyMeasurementsInch}
              ukSizeLabel={copy.ukSize}
              rows={activeRows}
              selected={selected}
              setSelected={setSelected}
            />

            <div>
              <h2 className="mb-3 font-montserrat text-[11px] uppercase tracking-[0.16em] text-brand-darkRed">
                {copy.internationalConversions}
              </h2>
              <p className="mb-3 font-montserrat text-[11px] tracking-wide text-brand-clayRed/55 lg:hidden">
                {scrollHint}
              </p>
              <div className="-mx-1 overflow-x-auto overscroll-x-contain px-1 [scrollbar-width:thin]">
                <table className="w-full min-w-[32rem] border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-brand-stone/30 bg-brand-stone/15">
                      <th
                        className={`sticky start-0 z-[1] bg-[#f3ece4] px-3 py-2.5 text-start font-montserrat text-[10px] uppercase tracking-[0.14em] text-brand-darkRed`}
                      >
                        {copy.size}
                      </th>
                      {SIZE_HEADERS.slice(0, 6).map((size) => (
                        <th
                          key={size}
                          className={`px-2 py-2.5 text-center font-montserrat text-[10px] uppercase tracking-[0.12em] ${
 selected === size ? 'bg-brand-darkRed text-white' : 'text-brand-darkRed'
 }`}
                        >
                          {size}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {intlRows.map((row, idx) => (
                      <tr
                        key={row.label}
                        className={idx % 2 === 0 ? 'bg-white/70' : 'bg-brand-stone/10'}
                      >
                        <td
                          className={`sticky start-0 z-[1] bg-inherit px-3 py-2.5 font-montserrat text-[11px] uppercase tracking-[0.08em] text-brand-darkRed`}
                        >
                          {row.label}
                        </td>
                        {row.values.map((value, colIdx) => {
                          const size = SIZE_HEADERS[colIdx]
                          return (
                            <td
                              key={`${row.label}-${value}`}
                              className={`px-2 py-2.5 text-center font-montserrat text-[11px] tabular-nums ${
 selected === size
 ? 'bg-brand-darkRed/8 font-medium text-brand-darkRed'
 : 'text-brand-darkRed/80'
 }`}
                            >
                              {value}
                            </td>
                          )
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <aside className="min-w-0 lg:col-span-5">
            <div className="border border-brand-stone/25 bg-white/70 p-4 sm:p-5 lg:sticky lg:top-[calc(var(--site-header-height,8.75rem)+0.75rem)]">
              <h2 className="mb-4 font-montserrat text-[11px] uppercase tracking-[0.16em] text-brand-darkRed">
                {copy.howToMeasure}
              </h2>
              <div
                className={`flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-4 `}
              >
                <div className="shrink-0 bg-white sm:w-[44%]">
                  <Image
                    src="/size-guide/how-to-measure/bint-saeed-abu-dhabi-how-to-measure-body-figure.webp"
                    alt={copy.imageAlt}
                    width={396}
                    height={927}
                    className="mx-auto h-auto w-full max-w-[240px] sm:max-w-none"
                  />
                </div>
                <ol className="min-w-0 flex-1 space-y-0">
                  {copy.measureItems.map((item) => (
                    <li
                      key={item.id}
                      className="flex gap-3 border-t border-brand-stone/20 py-2.5 first:border-t-0 first:pt-0"
                    >
                      <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-darkRed font-montserrat text-[10px] text-white">
                        {item.id}
                      </span>
                      <div className="min-w-0">
                        <p className="font-montserrat text-[10px] uppercase tracking-[0.14em] text-brand-darkRed">
                          {item.title}
                        </p>
                        <p className="mt-0.5 font-montserrat text-[11px] uppercase leading-snug tracking-[0.04em] text-brand-clayRed/75">
                          {item.copy}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </aside>
        </div>

        <section className="mt-14 border-t border-brand-stone/25 pt-10">
          <div
            className={`flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between `}
          >
            <div className={`max-w-md text-start`}>
              <h3 className="font-rozha text-[clamp(1.25rem,3vw,1.65rem)] leading-snug text-brand-darkRed">
                {helpTitle}
              </h3>
              <p className="mt-2 font-montserrat text-[13px] leading-relaxed text-brand-clayRed/75">
                {helpBody}
              </p>
            </div>
            <div className={`${ctaButtonRow} shrink-0 `}>
              <a
                href="https://wa.me/971502299402?text=Hi%20Bint%20Saeed!%20I%20need%20help%20with%20sizing."
                target="_blank"
                rel="noopener noreferrer"
                className={`${ctaPrimary} ${ctaInButtonRow}`}
                data-cursor-hover
              >
                {isRTL ? 'واتساب' : 'WhatsApp'}
              </a>
              <LocaleLink
                href="/contact"
                className={`${ctaSecondaryOnLight} ${ctaInButtonRow}`}
                data-cursor-hover
              >
                {isRTL ? 'تواصلي معنا' : 'Contact Us'}
              </LocaleLink>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

function MeasurementTable({
  title,
  ukSizeLabel,
  rows,
  selected,
  setSelected,
}: {
  title: string
  ukSizeLabel: string
  rows: readonly { label: string; values: readonly string[] }[]
  selected: SizeKey | null
  setSelected: (size: SizeKey | null) => void
}) {
  const { isRTL } = useLanguage()

  return (
    <div className="-mx-1 overflow-x-auto overscroll-x-contain border border-brand-stone/25 bg-white/70 px-1 [scrollbar-width:thin]">
      <table className="w-full min-w-[36rem] border-collapse">
        <caption className="sr-only">{title}</caption>
        <thead>
          <tr className="border-b border-brand-stone/30 bg-brand-stone/15">
            <th
              className={`sticky start-0 z-[1] bg-[#f3ece4] px-3 py-2.5 text-start font-montserrat text-[10px] uppercase tracking-[0.12em] text-brand-darkRed`}
            >
              {title}
            </th>
            {SIZE_HEADERS.map((size) => {
              const active = selected === size
              return (
                <th key={size} className="p-0 text-center">
                  <button
                    type="button"
                    onClick={() => setSelected(active ? null : size)}
                    className={`flex min-h-11 w-full items-center justify-center px-2 py-2.5 font-montserrat text-[10px] uppercase tracking-[0.12em] transition-colors ${
 active
 ? 'bg-brand-darkRed text-white'
 : 'text-brand-darkRed hover:bg-brand-dustyBlue/15'
 }`}
                    data-cursor-hover
                    aria-pressed={active}
                  >
                    <span className="inline-flex items-center gap-1">
                      {size}
                      {active ? <FiCheck className="h-3 w-3" aria-hidden /> : null}
                    </span>
                  </button>
                </th>
              )
            })}
          </tr>
          <tr className="border-b border-brand-stone/20 bg-white/80">
            <th
              className={`sticky start-0 z-[1] bg-[#faf7f3] px-3 py-2 text-start font-montserrat text-[10px] uppercase tracking-[0.12em] text-brand-darkRed`}
            >
              {ukSizeLabel}
            </th>
            {UK_SIZE.map((value, idx) => (
              <th
                key={`${title}-uk-${value}`}
                className={`px-2 py-2 text-center font-montserrat text-[10px] tabular-nums ${
 selected === SIZE_HEADERS[idx]
 ? 'font-medium text-brand-darkRed'
 : 'text-brand-clayRed/80'
 }`}
              >
                {value}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIdx) => (
            <tr
              key={`${title}-${row.label}`}
              className={rowIdx % 2 === 0 ? 'bg-white/80' : 'bg-brand-stone/10'}
            >
              <td
                className={`sticky start-0 z-[1] bg-inherit px-3 py-2.5 font-montserrat text-[11px] uppercase tracking-[0.08em] text-brand-darkRed`}
              >
                {row.label}
              </td>
              {row.values.map((value, idx) => (
                <td
                  key={`${title}-${row.label}-${idx}`}
                  className={`px-2 py-2.5 text-center font-montserrat text-[11px] tabular-nums ${
 selected === SIZE_HEADERS[idx]
 ? 'bg-brand-darkRed/8 font-medium text-brand-darkRed'
 : 'text-brand-darkRed/80'
 }`}
                >
                  {value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
