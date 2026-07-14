'use client'

import LocaleLink from '@/components/LocaleLink'
import AboutSectionHero from '@/components/AboutSectionHero'
import { FiArrowRight } from 'react-icons/fi'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { ABOUT_SECTION_HERO_IMAGES } from '@/lib/about/aboutSectionHeroImages'
import { getAboutEditorialHeroEyebrow } from '@/lib/about/aboutEditorialHeroChrome'
import { getGivingForwardCopy } from '@/lib/content/givingForwardCopyI18n'
import {
  EDITORIAL_PAGE_CONTAINER,
  EDITORIAL_PAGE_SHELL,
  EDITORIAL_STACK_CARD,
  EDITORIAL_STACK_CLOSING_PAD,
  EDITORIAL_STACK_CONTENT_PAD,
  EDITORIAL_STACK_PAD,
} from '@/lib/ui/editorialPageChrome'
import { ctaPrimaryWithGap, ctaSecondaryOnLight } from '@/lib/ui/ctaClasses'

const HANGTAG_IMAGE = {
  src: '/giving-forward/bint-saeed-giving-forward-heritage-carried-forward-charity-hangtag.webp',
  alt: 'Bint Saeed Giving Forward hangtag — Heritage Carried Forward charity swing tag on luxury fabric, with 20 AED from each garment donated to charity, Abu Dhabi',
} as const

export default function GivingForwardPage() {
  const { isRTL, language } = useLanguage()
  const copy = getGivingForwardCopy(language)

  return (
    <div className={`${EDITORIAL_PAGE_SHELL} relative min-h-screen bg-[#1a0210] ${isRTL ? 'rtl' : 'ltr'}`}>
      <AboutSectionHero
        rtl={isRTL}
        imageSrc={ABOUT_SECTION_HERO_IMAGES.givingForward}
        imageAlt="Bint Saeed — Giving Forward editorial banner"
        segments={[
          { label: copy.breadcrumbHome, href: '/home' },
          { label: copy.breadcrumb },
        ]}
        eyebrow={getAboutEditorialHeroEyebrow(language)}
        title={copy.pageTitle}
        description={copy.intro[0]}
      />

      <section
        className={`relative z-10 overflow-hidden bg-brand-pageCanvas ${EDITORIAL_STACK_PAD} ${EDITORIAL_STACK_CARD}`}
      >
        <div className={`${EDITORIAL_PAGE_CONTAINER} ${EDITORIAL_STACK_CONTENT_PAD}`}>
          <div className="max-w-4xl space-y-6 font-montserrat text-sm leading-[1.9] tracking-wide text-brand-darkRed/75">
            {copy.intro.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>

          <figure className="mx-auto mt-12 max-w-md md:mt-16 lg:max-w-lg">
            <div className="relative isolate aspect-[4/5] overflow-hidden bg-brand-stone/20 shadow-[0_28px_64px_-40px_rgba(42,0,18,0.18)]">
              {/* eslint-disable-next-line @next/next/no-img-element -- static editorial still */}
              <img
                src={HANGTAG_IMAGE.src}
                alt={HANGTAG_IMAGE.alt}
                width={819}
                height={1024}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover object-center"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(26,2,16,0.03)_0%,transparent_40%,rgba(26,2,16,0.05)_100%)]"
                aria-hidden
              />
            </div>
            <figcaption className="mt-4 text-center font-montserrat text-[10px] uppercase tracking-[0.2em] text-brand-dustyBlue/80">
              {language === 'ar' ? 'تراث يُحمل إلى الأمام' : 'Heritage Carried Forward'}
            </figcaption>
          </figure>
        </div>
      </section>

      <section
        className={`relative z-20 overflow-hidden bg-[#e8ddd4] ${EDITORIAL_STACK_PAD} ${EDITORIAL_STACK_CARD}`}
      >
        <div className={`${EDITORIAL_PAGE_CONTAINER} ${EDITORIAL_STACK_CONTENT_PAD}`}>
          <div className="max-w-4xl">
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
        </div>
      </section>

      <section
        className={`relative z-30 overflow-hidden bg-brand-pageCanvas ${EDITORIAL_STACK_CLOSING_PAD} ${EDITORIAL_STACK_CARD}`}
      >
        <div className={`${EDITORIAL_PAGE_CONTAINER} ${EDITORIAL_STACK_CONTENT_PAD}`}>
          <div className={`flex flex-wrap gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
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
        </div>
      </section>
    </div>
  )
}
