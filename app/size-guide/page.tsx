'use client'

import { useState } from 'react'
import LocaleLink from '@/components/LocaleLink'
import Image from 'next/image'
import { FiArrowLeft, FiCheck } from 'react-icons/fi'
import { useLanguage } from '@/lib/i18n/LanguageContext'

const SIZE_HEADERS = ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL'] as const
const UK_SIZE = ['6', '8', '10', '12', '14', '16', '18', '20'] as const

const inchRows = [
  { label: 'Bust', values: ['31.5-32.7', '32.7-34.3', '34.6-36.2', '36.6-38.2', '38.6-40.2', '40.6-42.1', '42.5-44.5', '44.5-46.9'] },
  { label: 'Waist', values: ['24.4-25.2', '25.6-26.8', '27.2-28.7', '29.1-30.7', '31.1-32.7', '33.1-34.6', '35.0-37.0', '37.0-39.4'] },
  { label: 'Hips', values: ['35.0-36.2', '36.2-37.8', '38.2-40.2', '40.2-42.5', '42.5-44.9', '44.9-47.2', '47.2-49.6', '49.6-52.0'] },
] as const

const cmRows = [
  { label: 'Bust', values: ['80-83', '83-87', '88-92', '93-97', '98-102', '103-107', '108-113', '113-119'] },
  { label: 'Waist', values: ['62-64', '65-68', '69-73', '74-78', '79-83', '84-88', '89-94', '94-100'] },
  { label: 'Hips', values: ['89-92', '92-96', '97-102', '102-108', '108-114', '114-120', '120-126', '126-132'] },
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

const measureItems = [
  { id: '1', title: 'Sleeve', copy: 'Top shoulder point down to the wrist.' },
  { id: '2', title: 'Bust', copy: 'Maximum circumference on the fullest part of the chest.' },
  { id: '3', title: 'Under Bust', copy: 'Body circumference directly under the bust.' },
  { id: '4', title: 'Waist', copy: 'Circumference around your natural waistline.' },
  { id: '5', title: 'Hips', copy: 'Circumference around the fullest part of the hips.' },
  { id: '6', title: 'Leg', copy: 'Outside leg length from waist to floor.' },
  { id: '7', title: 'Full Length', copy: 'Top shoulder point to floor.' },
] as const

export default function SizeGuidePage() {
  const { t, isRTL } = useLanguage()
  const [selected, setSelected] = useState<(typeof SIZE_HEADERS)[number] | null>(null)

  return (
    <div className={`relative min-h-screen overflow-hidden bg-[#f7f4ef] ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="pointer-events-none absolute inset-y-0 left-[4%] w-px bg-gradient-to-b from-transparent via-brand-dustyBlue/30 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-[4%] w-px bg-gradient-to-b from-transparent via-brand-clayRed/25 to-transparent" />
      <section className="relative border-b border-brand-stone/25 pt-32 pb-14 md:pb-16">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_70%_at_20%_8%,rgba(146,170,193,0.12)_0%,transparent_56%)]" />
        <div className="absolute inset-y-0 left-[6%] w-px bg-gradient-to-b from-transparent via-brand-dustyBlue/40 to-transparent" />
        <div className="container relative mx-auto px-6 lg:px-12">
          <LocaleLink
            href="/shop"
            className={`mb-8 inline-flex items-center gap-2 font-montserrat text-[11px] uppercase tracking-[0.16em] text-brand-clayRed transition-colors hover:text-brand-dustyBlue ${isRTL ? 'flex-row-reverse' : ''}`}
            data-cursor-hover
          >
            <FiArrowLeft className={`h-4 w-4 ${isRTL ? 'rotate-180' : ''}`} />
            {isRTL ? 'العودة للتسوق' : 'Back to Shop'}
          </LocaleLink>

          <h1
            data-document-h1="true"
            className="mx-auto mb-6 max-w-5xl text-center font-rozha text-4xl leading-tight tracking-wide text-brand-darkRed md:text-5xl lg:text-6xl"
          >
            {t.footer.sizeGuide}
          </h1>

          <p className="mx-auto max-w-5xl text-center font-montserrat text-[11px] uppercase tracking-[0.12em] text-brand-darkRed/80 md:text-[13px]">
            This size chart provides general sizing information, which can vary depending on style. For more specific sizing information, please contact our concierge team.
          </p>
        </div>
      </section>

      <section className="py-10 md:py-14">
        <div className="container mx-auto grid gap-10 px-6 lg:grid-cols-12 lg:gap-12 lg:px-12">
          <div className="lg:col-span-7">
            <div className="relative border border-brand-stone/25 bg-white/72 p-4 md:p-5">
              <div className="pointer-events-none absolute inset-0 border border-white/55" />
              <MeasurementTable
                title="Body Measurements - Inch"
                selected={selected}
                setSelected={setSelected}
                rows={inchRows}
              />
            </div>

            <div className="relative mt-6 border border-brand-stone/25 bg-white/72 p-4 md:p-5">
              <div className="pointer-events-none absolute inset-0 border border-white/55" />
              <MeasurementTable
                title="Body Measurements - CM"
                selected={selected}
                setSelected={setSelected}
                rows={cmRows}
              />
            </div>

            <h3 className="mt-8 mb-3 font-montserrat text-[28px] uppercase tracking-[0.08em] text-brand-darkRed">
              International Conversions
            </h3>
            <div className="relative overflow-x-auto border border-brand-stone/28 bg-white/78">
              <div className="pointer-events-none absolute inset-0 border border-white/55" />
              <table className="min-w-[690px] w-full">
                <thead>
                  <tr className="bg-brand-stone/25">
                    <th className="px-3 py-3 text-left font-montserrat text-[11px] uppercase tracking-[0.14em] text-brand-darkRed">
                      Size
                    </th>
                    {SIZE_HEADERS.slice(0, 6).map((size) => (
                      <th key={size} className="px-2 py-3 text-center font-montserrat text-[11px] uppercase tracking-[0.14em] text-brand-darkRed">
                        {size}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {intlRows.map((row, idx) => (
                    <tr key={row.label} className={idx % 2 === 0 ? 'bg-white/80' : 'bg-brand-stone/10'}>
                      <td className="px-3 py-3 font-montserrat text-[12px] uppercase tracking-[0.08em] text-brand-darkRed">{row.label}</td>
                      {row.values.map((value) => (
                        <td key={`${row.label}-${value}`} className="px-2 py-3 text-center font-montserrat text-[12px] text-brand-darkRed/85">
                          {value}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <aside className="lg:col-span-5">
            <div className="sticky top-28 border border-brand-stone/25 bg-white/75 p-5 md:p-6">
              <h2 className="mb-4 font-montserrat text-xl uppercase tracking-[0.14em] text-brand-darkRed">How To Measure</h2>
              <div className="mb-6 border border-brand-stone/20 bg-[#f9f6f2] p-3">
                <Image
                  src="/size-guide-figure.svg"
                  alt="Body measurement guide"
                  width={620}
                  height={760}
                  className="h-auto w-full"
                />
              </div>
              <div className="space-y-3">
                {measureItems.map((item) => (
                  <div key={item.id} className="flex gap-3 border-t border-brand-stone/25 pt-3 first:border-t-0 first:pt-0">
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-darkRed text-[10px] font-montserrat text-white">
                      {item.id}
                    </span>
                    <div>
                      <p className="font-montserrat text-[11px] uppercase tracking-[0.14em] text-brand-darkRed">{item.title}</p>
                      <p className="font-montserrat text-[12px] leading-relaxed text-brand-clayRed/80">{item.copy}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-t border-brand-stone/25 bg-white/80 py-12">
        <div className="container mx-auto px-6 lg:px-12">
          <div className={`flex flex-col gap-6 md:flex-row md:items-center md:justify-between ${isRTL ? 'md:flex-row-reverse' : ''}`}>
            <div className={isRTL ? 'text-right' : ''}>
              <h3 className="font-rozha text-3xl text-brand-darkRed">{isRTL ? 'تحتاجين مساعدة بالمقاس؟' : 'Need Sizing Help?'}</h3>
              <p className="mt-2 max-w-2xl font-montserrat text-sm text-brand-clayRed/80">
                {isRTL
                  ? 'فريقنا يساعدك لاختيار المقاس المثالي قبل الطلب.'
                  : 'Our concierge can advise your best size before checkout.'}
              </p>
            </div>
            <div className={`flex flex-col gap-3 sm:flex-row ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
              <a
                href="https://wa.me/971XXXXXXXXX?text=Hi%20Bint%20Saeed!%20I%20need%20help%20with%20sizing."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border border-brand-darkRed bg-brand-darkRed px-7 py-3 font-montserrat text-xs uppercase tracking-[0.14em] text-white transition-colors hover:bg-brand-clayRed"
                data-cursor-hover
              >
                {isRTL ? 'واتساب' : 'WhatsApp'}
              </a>
              <LocaleLink
                href="/contact"
                className="inline-flex items-center justify-center border border-brand-stone/40 bg-transparent px-7 py-3 font-montserrat text-xs uppercase tracking-[0.14em] text-brand-darkRed transition-colors hover:border-brand-dustyBlue hover:text-brand-dustyBlue"
                data-cursor-hover
              >
                {isRTL ? 'تواصلي معنا' : 'Contact Us'}
              </LocaleLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function MeasurementTable({
  title,
  rows,
  selected,
  setSelected,
}: {
  title: string
  rows: readonly { label: string; values: readonly string[] }[]
  selected: (typeof SIZE_HEADERS)[number] | null
  setSelected: (size: (typeof SIZE_HEADERS)[number] | null) => void
}) {
  return (
    <div className="mb-8 overflow-x-auto border border-brand-stone/25 bg-white/75">
      <table className="min-w-[760px] w-full">
        <thead>
          <tr className="bg-brand-stone/25">
            <th className="px-3 py-3 text-left font-montserrat text-[11px] uppercase tracking-[0.14em] text-brand-darkRed">
              {title}
            </th>
            {SIZE_HEADERS.map((size) => {
              const active = selected === size
              return (
                <th
                  key={size}
                  onClick={() => setSelected(active ? null : size)}
                  className={`cursor-pointer px-2 py-3 text-center font-montserrat text-[11px] uppercase tracking-[0.14em] transition-colors ${
                    active ? 'bg-brand-darkRed text-white' : 'text-brand-darkRed hover:bg-brand-dustyBlue/20'
                  }`}
                  data-cursor-hover
                >
                  <span className="inline-flex items-center gap-1">
                    {size}
                    {active && <FiCheck className="h-3 w-3" />}
                  </span>
                </th>
              )
            })}
          </tr>
          <tr className="bg-white/80">
            <th className="px-3 py-2 text-left font-montserrat text-[11px] uppercase tracking-[0.14em] text-brand-darkRed">UK Size</th>
            {UK_SIZE.map((value, idx) => (
              <th key={`${title}-uk-${value}`} className={`px-2 py-2 text-center font-montserrat text-[11px] ${selected === SIZE_HEADERS[idx] ? 'text-brand-darkRed font-medium' : 'text-brand-clayRed/85'}`}>
                {value}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIdx) => (
            <tr key={`${title}-${row.label}`} className={rowIdx % 2 === 0 ? 'bg-white/80' : 'bg-brand-stone/10'}>
              <td className="px-3 py-3 font-montserrat text-[12px] uppercase tracking-[0.08em] text-brand-darkRed">{row.label}</td>
              {row.values.map((value, idx) => (
                <td
                  key={`${title}-${row.label}-${idx}`}
                  className={`px-2 py-3 text-center font-montserrat text-[12px] ${
                    selected === SIZE_HEADERS[idx] ? 'bg-brand-darkRed/8 text-brand-darkRed font-medium' : 'text-brand-darkRed/85'
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
