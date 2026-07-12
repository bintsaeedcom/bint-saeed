'use client'

import LocaleLink from '@/components/LocaleLink'
import AppPageWayfinding from '@/components/AppPageWayfinding'
import { FiArrowRight } from 'react-icons/fi'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { getCareersCopy } from '@/lib/content/careersCopyI18n'
import { ctaPrimaryWithGap, ctaSecondaryOnLight, utilityPageH1 } from '@/lib/ui/ctaClasses'
import { SITE_CONTENT_TOP_PAD } from '@/lib/ui/editorialPageChrome'

export default function CareersPage() {
  const { isRTL, language } = useLanguage()
  const copy = getCareersCopy(language)

  return (
    <div className={`relative min-h-screen overflow-x-clip bg-brand-pageCanvas ${SITE_CONTENT_TOP_PAD} ${isRTL ? 'rtl' : 'ltr'}`}>
      <section className="relative container mx-auto px-6 pb-20 lg:px-16 lg:pb-28">
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
        <h1 data-document-h1="true" className={utilityPageH1}>
          {copy.pageTitle}
        </h1>
        <h2 className="mt-5 max-w-2xl font-montserrat text-sm leading-[1.9] tracking-wide text-brand-darkRed/75">
          {copy.intro}
        </h2>

        <div className="mt-10 flex flex-wrap gap-4">
          <LocaleLink
            href="/contact"
            className={ctaPrimaryWithGap}
            data-cursor-hover
          >
            {copy.contactCta}
            <FiArrowRight className={`h-4 w-4 ${isRTL ? 'rotate-180' : ''}`} />
          </LocaleLink>
          <LocaleLink
            href="/about"
            className={ctaSecondaryOnLight}
            data-cursor-hover
          >
            {copy.aboutCta}
          </LocaleLink>
        </div>
      </section>
    </div>
  )
}
