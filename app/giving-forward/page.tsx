'use client'

import LocaleLink from '@/components/LocaleLink'
import AboutSectionHero from '@/components/AboutSectionHero'
import { FiArrowRight } from 'react-icons/fi'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { ABOUT_SECTION_HERO_IMAGES } from '@/lib/about/aboutSectionHeroImages'
import { getGivingForwardCopy } from '@/lib/content/givingForwardCopyI18n'
import { EDITORIAL_PAGE_CONTAINER, EDITORIAL_PAGE_SHELL } from '@/lib/ui/editorialPageChrome'
import { ctaPrimaryWithGap, ctaSecondaryOnLight } from '@/lib/ui/ctaClasses'

export default function GivingForwardPage() {
  const { isRTL, language } = useLanguage()
  const copy = getGivingForwardCopy(language)

  return (
    <div className={`${EDITORIAL_PAGE_SHELL} relative min-h-screen bg-brand-pageCanvas ${isRTL ? 'rtl' : 'ltr'}`}>
      <AboutSectionHero
        rtl={isRTL}
        imageSrc={ABOUT_SECTION_HERO_IMAGES.givingForward}
        imageAlt="Bint Saeed — Giving Forward editorial banner"
        segments={[
          { label: copy.breadcrumbHome, href: '/home' },
          { label: copy.breadcrumb },
        ]}
        eyebrow="BINT SAEED · ABU DHABI"
        title={copy.pageTitle}
      />

      <section className={`${EDITORIAL_PAGE_CONTAINER} pb-20 pt-10 lg:pb-28 lg:pt-12`}>
        <div className="max-w-4xl space-y-6 font-montserrat text-sm leading-[1.9] tracking-wide text-brand-darkRed/75">
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
            className={`${ctaPrimaryWithGap} ${isRTL ? 'flex-row-reverse' : ''}`}
            data-cursor-hover
          >
            {copy.shopCta}
            <FiArrowRight className={`h-4 w-4 ${isRTL ? 'rotate-180' : ''}`} />
          </LocaleLink>
          <LocaleLink
            href="/contact"
            className={ctaSecondaryOnLight}
            data-cursor-hover
          >
            {copy.contactCta}
          </LocaleLink>
        </div>
      </section>
    </div>
  )
}
