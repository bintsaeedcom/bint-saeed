'use client'

import LocaleLink from '@/components/LocaleLink'
import AboutTopicNav from '@/components/AboutTopicNav'
import AppPageWayfinding from '@/components/AppPageWayfinding'
import { FiArrowRight } from 'react-icons/fi'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { getGivingForwardCopy } from '@/lib/content/givingForwardCopyI18n'

export default function GivingForwardPage() {
  const { isRTL, language } = useLanguage()
  const copy = getGivingForwardCopy(language)

  return (
    <div className={`relative min-h-screen overflow-x-clip bg-brand-pageCanvas pt-4 sm:pt-6 md:pt-8 ${isRTL ? 'rtl' : 'ltr'}`}>
      <section className="relative container mx-auto px-6 pb-20 pt-24 lg:px-16 lg:pb-28 lg:pt-28">
        <AppPageWayfinding
          rtl={isRTL}
          className="mb-8"
          segments={[
            { label: copy.breadcrumbHome, href: '/home' },
            { label: copy.breadcrumb },
          ]}
          backLink={{ href: '/home', label: copy.backToHome }}
        />
        <span className="mb-6 block font-montserrat text-[10px] uppercase tracking-[0.35em] text-brand-dustyBlue">
          Bint Saeed
        </span>
        <h1 data-document-h1="true" className="font-rozha text-4xl leading-[1.08] text-brand-darkRed md:text-5xl">
          {copy.pageTitle}
        </h1>
        <div className="mt-6">
          <AboutTopicNav />
        </div>
        <div className="mt-5 max-w-4xl space-y-6 font-montserrat text-sm leading-[1.9] tracking-wide text-brand-darkRed/75">
          {copy.intro.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-14 max-w-4xl">
          <h2 className="font-rozha text-3xl leading-tight text-brand-darkRed md:text-4xl">{copy.carriedTitle}</h2>
          <div className="mt-8 space-y-6 font-montserrat text-sm leading-[1.9] tracking-wide text-brand-darkRed/80">
            {copy.pillars.map((pillar) => (
              <div key={pillar.title}>
                <h3 className="font-montserrat text-[11px] uppercase tracking-[0.2em] text-brand-clayRed">{pillar.title}</h3>
                <p>{pillar.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={`mt-10 flex flex-wrap gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
          <LocaleLink
            href="/shop?from=giving-forward"
            className={`inline-flex items-center gap-2 border border-brand-dustyBlue/65 bg-brand-dustyBlue px-7 py-3 font-montserrat text-xs uppercase tracking-[0.16em] text-[#1a0008] transition-colors hover:bg-brand-stone ${isRTL ? 'flex-row-reverse' : ''}`}
            data-cursor-hover
          >
            {copy.shopCta}
            <FiArrowRight className={`h-4 w-4 ${isRTL ? 'rotate-180' : ''}`} />
          </LocaleLink>
          <LocaleLink
            href="/contact"
            className="inline-flex items-center gap-2 border border-brand-darkRed/35 bg-white/80 px-7 py-3 font-montserrat text-xs uppercase tracking-[0.16em] text-brand-darkRed transition-colors hover:border-brand-dustyBlue hover:text-brand-dustyBlue"
            data-cursor-hover
          >
            {copy.contactCta}
          </LocaleLink>
        </div>
      </section>
    </div>
  )
}
