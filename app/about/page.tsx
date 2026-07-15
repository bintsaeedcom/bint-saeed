'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import LocaleLink from '@/components/LocaleLink'
import AboutSectionHero from '@/components/AboutSectionHero'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { getAboutPageCopy } from '@/lib/content/aboutPageCopyI18n'
import { ABOUT_SECTION_HERO_IMAGES } from '@/lib/about/aboutSectionHeroImages'
import {
  EDITORIAL_PAGE_CONTAINER,
  EDITORIAL_PAGE_SHELL,
} from '@/lib/ui/editorialPageChrome'
import {
  ctaPrimary,
  ctaPrimarySoft,
  ctaSecondaryOutlineOnDark,
  ctaButtonRow,
  ctaInButtonRow,
} from '@/lib/ui/ctaClasses'
import {
  editorialBodyOnLight,
  editorialSectionH2,
} from '@/lib/ui/editorialTypography'

const HERO_IMAGE = ABOUT_SECTION_HERO_IMAGES.about
const HERO_IMAGE_2 = '/about/campaign-seated.PNG'
const INNER_CONTAINER_CLASS = EDITORIAL_PAGE_CONTAINER

/** Sticky card-stack scroll — identical overlap/stack on mobile and desktop */
const ABOUT_STACK_SECTION =
  'sticky top-0 -mt-10 min-h-[100vh] will-change-transform rounded-t-[16px] shadow-[0_-12px_40px_rgba(0,0,0,0.3)]'

/** Extra bottom space so the next stacked card does not cover copy while reading */
const ABOUT_STACK_PAD = 'pt-28 pb-48 md:pt-36 md:pb-64'
const ABOUT_STACK_CONTENT_PAD = 'pb-28 md:pb-40'

export default function AboutPage() {
  const { language, isRTL } = useLanguage()
  const copy = getAboutPageCopy(language)
  const quoteRef = useRef<HTMLElement | null>(null)
  const [quoteVisible, setQuoteVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          if (entry.target === quoteRef.current) setQuoteVisible(true)
        })
      },
      { threshold: 0.32, rootMargin: '0px 0px -6% 0px' },
    )

    const quote = quoteRef.current
    if (quote) observer.observe(quote)
    return () => observer.disconnect()
  }, [])

  return (
    <main className={`${EDITORIAL_PAGE_SHELL} min-h-screen bg-[#1a0210] ${isRTL ? 'rtl' : 'ltr'}`}>
      <AboutSectionHero
        rtl={isRTL}
        imageSrc={HERO_IMAGE}
        imageAlt={copy.imageAlt}
        priority
        segments={[
          { label: copy.breadcrumbHome, href: '/home' },
          { label: copy.breadcrumbAbout },
        ]}
        eyebrow={copy.heroEyebrow}
        title={copy.heroHeadline}
        description={copy.heroSubline}
      />

      <section
        id="about-manifesto"
        aria-labelledby="about-manifesto-heading"
        className={`about-manifesto relative z-10 overflow-hidden ${ABOUT_STACK_PAD} ${ABOUT_STACK_SECTION}`}
      >
        <div className={`${INNER_CONTAINER_CLASS} ${ABOUT_STACK_CONTENT_PAD} relative z-20 text-left`}>
          <h2
            id="about-manifesto-heading"
            className={`${isRTL ? '' : 'font-rozha'} text-[clamp(1.45rem,4.6vw,2rem)] leading-tight tracking-[0.12em] text-white`}
          >
            {copy.manifestoTitle}
          </h2>
          <div
            className="mt-4 h-px w-full max-w-3xl bg-gradient-to-r from-transparent via-white/35 to-transparent sm:mt-5"
            aria-hidden
          />
          <h3
            className={`${isRTL ? '' : 'font-rozha'} mt-6 max-w-3xl text-[clamp(1rem,3.4vw,1.35rem)] font-normal leading-snug tracking-wide text-white/95 sm:mt-8`}
          >
            {copy.manifestoSubtitle}
          </h3>
          <div className="mt-6 max-w-3xl space-y-5 font-montserrat text-[15px] font-normal leading-[1.65] text-white/85 sm:mt-8 sm:space-y-6 sm:text-[0.95rem]">
            <p>{copy.manifestoP1}</p>
            <p>{copy.manifestoP2}</p>
            <p className="text-white/80">{copy.manifestoP3}</p>
          </div>
        </div>
      </section>

      <section
        id="about-origin"
        className={`relative z-20 bg-[#e8ddd4] ${ABOUT_STACK_PAD} ${ABOUT_STACK_SECTION}`}
      >
        <div className={`${INNER_CONTAINER_CLASS} ${ABOUT_STACK_CONTENT_PAD} grid gap-12 text-left md:grid-cols-[1.1fr_0.9fr] md:items-start`}>
          <div>
            <p className="font-montserrat text-[10px] uppercase tracking-[0.28em] text-[#7A1C28]">{copy.originLabel}</p>
            <h2 className={`mt-4 ${editorialSectionH2} text-[#1a0210]`}>
              {copy.originHeading}
            </h2>
            <div className={`mt-6 space-y-6 ${editorialBodyOnLight}`}>
              <p>
                {copy.originP1BeforeBint}
                <em>{copy.originP1Bint}</em>
                {copy.originP1AfterBint}
                {copy.originP1Strong}
              </p>
              <p>
                {copy.originP2Strong}
                {copy.originP2Rest}
              </p>
              <p>{copy.originP3}</p>
            </div>
          </div>
          <div className="overflow-hidden rounded-[4px] bg-[#faf8f5]">
            <Image
              src={HERO_IMAGE_2}
              alt={copy.imageAlt}
              width={480}
              height={600}
              sizes="(max-width: 768px) 90vw, 42vw"
              className="h-auto w-full object-cover object-top"
            />
          </div>
        </div>
      </section>

      <section className={`about-fabric-light relative z-30 overflow-hidden bg-[#7A1C28] ${ABOUT_STACK_PAD} ${ABOUT_STACK_SECTION}`}>
        <div className={`${INNER_CONTAINER_CLASS} ${ABOUT_STACK_CONTENT_PAD} relative z-20 grid gap-10 text-left md:grid-cols-2 md:items-center`}>
          <div className="relative min-h-[52vh] overflow-hidden rounded-[4px] md:min-h-[620px]">
            <Image src={HERO_IMAGE} alt={copy.imageAlt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover object-top" />
          </div>
          <div className="flex items-center">
            <div className="max-w-xl">
              <p className="font-montserrat text-[10px] uppercase tracking-[0.28em] text-[#e8d8c8]/55">{copy.houseLabel}</p>
              <h2 className={`mt-5 ${editorialSectionH2} text-[#e8ddd4]`}>{copy.houseHeading}</h2>
              <div className="mt-5 space-y-5 font-montserrat text-sm leading-[1.85] tracking-wide text-[#e8ddd4]/72">
                {copy.houseParagraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                ))}
              </div>
              <LocaleLink href="/the-codes" className={`mt-8 ${ctaPrimarySoft}`} data-cursor-hover>
                {copy.ctaOurStoryInCodes}
              </LocaleLink>
            </div>
          </div>
        </div>
      </section>

      <section
        ref={quoteRef}
        className="closing-section relative z-40 -mt-6 flex h-auto min-h-0 items-center overflow-hidden rounded-t-[16px] text-center shadow-[0_-12px_40px_rgba(0,0,0,0.3)] md:-mt-10"
      >
        <div className={`${INNER_CONTAINER_CLASS} relative z-20`}>
          <div className="mx-auto max-w-[min(94vw,860px)]">
            <p
              className={`text-center font-rozha text-[clamp(20px,3.2vw,40px)] italic leading-[1.22] tracking-[-0.01em] text-[#e8d8c8] transition-opacity duration-700 ${
                quoteVisible ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {copy.closingQuote.split('\n').map((line, index) => (
                <span key={index} className="block">
                  {line}
                </span>
              ))}
            </p>
          </div>
          <div className="mx-auto my-6 h-px w-[60px] bg-[#e8ddd4]" />
          <p className="text-center font-montserrat text-[10px] uppercase tracking-[0.2em] text-[#6a8090]">
            {copy.closingBrand}
          </p>
          <div className={`mt-8 ${ctaButtonRow} justify-center`} data-bs-cta-row data-bs-cta-row-layout="wrap">
            <LocaleLink
              href="/shop"
              className={`${ctaPrimary} ${ctaInButtonRow}`}
              data-bs-cta
              data-cursor-hover
              data-analytics-event="click_collection_from_about"
              data-analytics-section="about-cta"
            >
              {copy.ctaExploreCollection}
            </LocaleLink>
            <LocaleLink
              href="/the-codes"
              className={`${ctaSecondaryOutlineOnDark} ${ctaInButtonRow}`}
              data-bs-cta
              data-cursor-hover
            >
              {copy.ctaOurStoryInCodes}
            </LocaleLink>
          </div>
        </div>
      </section>

      <style jsx global>{`
        .about-manifesto {
          background-color: #1a0210;
        }

        .about-manifesto::before,
        .about-manifesto::after {
          content: '';
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .about-manifesto::before {
          z-index: 0;
          background-image: url('/strands/charm-fabric-dark.webp');
          background-position: center;
          background-size: cover;
        }

        .about-manifesto::after {
          z-index: 1;
          background: rgba(26, 2, 16, 0.72);
        }

        .about-fabric-light::before,
        .about-fabric-light::after {
          content: '';
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .about-fabric-light::before {
          z-index: 0;
          background-image: url('/strands/charm-fabric-light.webp');
          background-position: center;
          background-size: cover;
        }

        .about-fabric-light::after {
          z-index: 1;
          background: rgba(26, 2, 16, 0.75);
        }

        .closing-section {
          position: relative;
          min-height: auto;
          height: auto;
          padding: 120px 40px 100px;
          background-image: url('/strands/charm-fabric-dark.webp');
          background-size: cover;
          background-position: center;
        }

        .closing-section::before,
        .closing-section::after {
          content: '';
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .closing-section::before {
          z-index: 0;
          background: rgba(15, 8, 10, 0.82);
        }

        .closing-section::after {
          z-index: 1;
          background: transparent;
        }

        @media (max-width: 767px) {
          .closing-section {
            padding: 80px 24px 80px;
          }
        }
      `}</style>
    </main>
  )
}
