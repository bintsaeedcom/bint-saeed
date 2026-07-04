'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import LocaleLink from '@/components/LocaleLink'
import AboutSectionHero from '@/components/AboutSectionHero'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { getPersonalisationCopy } from '@/lib/content/personalisationCopyI18n'
import { ABOUT_SECTION_HERO_IMAGES } from '@/lib/about/aboutSectionHeroImages'
import { getAboutEditorialHeroEyebrow } from '@/lib/about/aboutEditorialHeroChrome'
import { editorialSectionH2 } from '@/lib/ui/editorialTypography'
import {
  EDITORIAL_PAGE_CONTAINER,
  EDITORIAL_PAGE_SHELL,
} from '@/lib/ui/editorialPageChrome'
import {
  ctaButtonRow,
  ctaInButtonRow,
  ctaPrimary,
  ctaSecondaryOutlineOnDark,
} from '@/lib/ui/ctaClasses'

const INNER_CONTAINER_CLASS = EDITORIAL_PAGE_CONTAINER
const PERSONALISATION_PAGE = encodeURIComponent('Personalisation Page')
const HERO_IMAGE = ABOUT_SECTION_HERO_IMAGES.personalisation
const SECRET_POCKET_IMAGE = HERO_IMAGE
const LABEL_IMAGES = ['label1.PNG', 'label2.PNG', 'label3.PNG', 'label4.PNG'].map(
  (file) => `/${PERSONALISATION_PAGE}/${encodeURIComponent(file)}`,
)

/** TODO: replace src with pocket location video once filmed */
const POCKET_VIDEO_SRC = ''

export default function PersonalisationPage() {
  const { isRTL, language } = useLanguage()
  const copy = getPersonalisationCopy(language)
  const stepsRef = useRef<HTMLElement | null>(null)
  const quoteRef = useRef<HTMLElement | null>(null)
  const [stepsVisible, setStepsVisible] = useState(false)
  const [quoteVisible, setQuoteVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === stepsRef.current && entry.isIntersecting) setStepsVisible(true)
          if (entry.target === quoteRef.current && entry.isIntersecting) setQuoteVisible(true)
        })
      },
      { threshold: 0.28 },
    )
    const steps = stepsRef.current
    const quote = quoteRef.current
    if (steps) observer.observe(steps)
    if (quote) observer.observe(quote)
    return () => observer.disconnect()
  }, [])

  return (
    <main className={`${EDITORIAL_PAGE_SHELL} min-h-screen bg-[#1a0210] ${isRTL ? 'rtl' : 'ltr'}`}>
      <AboutSectionHero
        rtl={isRTL}
        imageSrc={HERO_IMAGE}
        imageAlt={copy.hiddenPocketAlt}
        priority
        segments={[
          { label: copy.breadcrumbHome, href: '/home' },
          { label: copy.breadcrumb },
        ]}
        eyebrow={getAboutEditorialHeroEyebrow(language)}
        title={copy.heroTitle}
        description={copy.heroSub}
      />

      <section className="relative z-10 -mt-6 rounded-t-[16px] bg-[#e8ddd4] py-28 md:py-36 shadow-[0_-12px_40px_rgba(0,0,0,0.3)] md:-mt-10 md:sticky md:top-0 md:will-change-transform md:min-h-[100vh]">
        <div className={`${INNER_CONTAINER_CLASS} grid gap-12 text-left md:grid-cols-[1.1fr_0.9fr] md:items-center`}>
          <div>
            <p className="font-montserrat text-[10px] uppercase tracking-[0.28em] text-[#7A1C28]">{copy.secretEyebrow}</p>
            <h2 className={`mt-4 ${editorialSectionH2} text-[#1a0210]`}>
              {copy.secretTitle}
            </h2>
            <p className="mt-6 max-w-2xl font-montserrat text-[15px] leading-[1.9] tracking-wide text-[#1a0210]/72">
              {copy.secretBody}
            </p>
          </div>
          <div className="overflow-hidden rounded-[4px] bg-[#faf8f5]">
            <Image
              src={SECRET_POCKET_IMAGE}
              alt={copy.hiddenPocketAlt}
              width={480}
              height={600}
              sizes="(max-width: 768px) 90vw, 42vw"
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="relative z-20 -mt-6 rounded-t-[16px] bg-[#1a0210] py-28 md:py-36 shadow-[0_-12px_40px_rgba(0,0,0,0.3)] md:-mt-10 md:sticky md:top-0 md:will-change-transform md:min-h-[100vh]">
        <div className={`${INNER_CONTAINER_CLASS} text-left`}>
          <p className="font-montserrat text-[10px] uppercase tracking-[0.28em] text-[#6a8090]">{copy.pocketEyebrow}</p>
          <h2 className={`mt-4 max-w-3xl ${editorialSectionH2} text-[#e8ddd4]`}>{copy.pocketTitle}</h2>
          <p className="mt-5 max-w-2xl font-montserrat text-[15px] leading-[1.9] tracking-wide text-[#e8ddd4]/72">
            {copy.pocketBody}
          </p>
          <div className="relative mx-auto mt-10 aspect-video w-full max-w-[640px] overflow-hidden rounded-[4px] bg-[#2a0a14]">
            {POCKET_VIDEO_SRC ? (
              <video src={POCKET_VIDEO_SRC} autoPlay loop muted playsInline className="h-full w-full object-cover" />
            ) : (
              <>
                {/* TODO: replace src with pocket location video once filmed */}
                <video src="" autoPlay loop muted playsInline className="sr-only" aria-hidden />
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="font-montserrat text-[11px] uppercase tracking-[0.2em] text-[#e8ddd4]/40">
                    {copy.videoComingSoon}
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="relative z-30 -mt-6 rounded-t-[16px] bg-[#faf8f5] py-20 shadow-[0_-12px_40px_rgba(0,0,0,0.3)] md:-mt-10 md:py-28 md:sticky md:top-0 md:will-change-transform">
        <div className={`${INNER_CONTAINER_CLASS} text-left`}>
          <p className="font-montserrat text-[10px] uppercase tracking-[0.28em] text-[#7A1C28]">{copy.messageEyebrow}</p>
          <h2 className={`mt-4 max-w-3xl ${editorialSectionH2} text-[#1a0210]`}>
            {copy.messageTitle}
          </h2>
          <p className="mt-5 max-w-2xl font-montserrat text-[15px] leading-[1.9] tracking-wide text-[#1a0210]/72">
            {copy.messageBody}
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-[min(100%,1080px)] grid-cols-2 justify-items-center gap-3 px-4 sm:grid-cols-4 md:gap-4 lg:gap-5">
          {LABEL_IMAGES.map((src, index) => (
            <div
              key={src}
              className="relative aspect-[3/4] w-full max-w-[11.5rem] overflow-hidden rounded-[4px] sm:max-w-[12.5rem]"
            >
              <Image
                src={src}
                alt={`${copy.labelAlt} — ${index + 1}`}
                fill
                className="object-cover object-center"
                sizes="(max-width: 640px) 44vw, 200px"
              />
            </div>
          ))}
        </div>
      </section>

      <section
        ref={stepsRef}
        className="relative z-40 -mt-6 rounded-t-[16px] bg-[#1a0210] py-28 md:py-36 shadow-[0_-12px_40px_rgba(0,0,0,0.3)] md:-mt-10 md:sticky md:top-0 md:will-change-transform md:min-h-[100vh]"
      >
        <div className={`${INNER_CONTAINER_CLASS} text-left`}>
          <p className="font-montserrat text-[10px] uppercase tracking-[0.28em] text-[#6a8090]">{copy.stepsEyebrow}</p>
          <h2 className={`mt-4 max-w-3xl ${editorialSectionH2} text-[#e8ddd4]`}>{copy.stepsTitle}</h2>
          <div className="mt-12 grid gap-px bg-[rgba(232,216,200,0.1)] md:grid-cols-3">
            {copy.steps.map((step, index) => (
              <article
                key={step.numeral}
                className={`bg-[#1a0210] p-8 text-left transition-all duration-700 ${
                  stepsVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <p className="mb-6 font-rozha text-[48px] leading-none text-[rgba(122,28,40,0.35)]">{step.numeral}</p>
                <h3 className="mb-3 font-montserrat text-[11px] font-medium uppercase tracking-[0.15em] text-[#e8d8c8]">
                  {step.title}
                </h3>
                <p className="font-montserrat text-[13px] font-normal leading-[1.7] text-[rgba(232,216,200,0.6)]">{step.body}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 flex justify-center" data-bs-cta-row>
            <LocaleLink
              href="/shop?category=abayas"
              className={`${ctaPrimary} inline-flex w-auto max-w-[min(100%,22rem)] px-5 sm:max-w-md sm:px-6`}
              data-bs-cta
              data-cursor-hover
              data-analytics-event="click_shop_abayas_from_personalisation"
              data-analytics-section="personalisation-steps"
            >
              {copy.pickAbayaCta}
            </LocaleLink>
          </div>
          <div className="mx-auto mt-10 max-w-xl text-center">
            <p className="font-montserrat text-[13px] leading-[1.75] text-[#e8ddd4]/60">{copy.complimentaryNote}</p>
            <p className="mt-3 font-montserrat text-[13px] leading-[1.75] text-[#e8ddd4]/60">
              {copy.complimentaryOtherNote}
            </p>
            <LocaleLink
              href="/contact"
              className={`${ctaSecondaryOutlineOnDark} mt-6 ${ctaInButtonRow} mx-auto inline-flex w-full max-w-xs sm:w-auto`}
              data-bs-cta
              data-cursor-hover
            >
              {copy.contactServiceCta}
            </LocaleLink>
          </div>
        </div>
      </section>

      <section
        ref={quoteRef}
        className="closing-section relative z-50 -mt-6 flex h-auto min-h-0 items-center overflow-hidden rounded-t-[16px] text-center shadow-[0_-12px_40px_rgba(0,0,0,0.3)] md:-mt-10 md:sticky md:top-0 md:will-change-transform"
      >
        <div className={`${INNER_CONTAINER_CLASS} relative z-20`}>
          <div className="mx-auto max-w-[min(94vw,860px)]">
            <p
              className={`text-center font-rozha text-[clamp(20px,3.2vw,40px)] italic leading-[1.22] tracking-[-0.01em] text-[#e8d8c8] transition-opacity duration-700 ${
                quoteVisible ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {copy.closingQuote.split('\n').map((line, index, lines) => (
                <span key={index} className="block">
                  {line}
                </span>
              ))}
            </p>
          </div>
          <div className="mx-auto my-6 h-px w-[60px] bg-[#e8ddd4]" />
          <p className="text-center font-montserrat text-[10px] uppercase tracking-[0.2em] text-[#6a8090]">
            BINT SAEED · ABU DHABI
          </p>
          <div className={`mt-8 ${ctaButtonRow} justify-center`} data-bs-cta-row data-bs-cta-row-layout="wrap">
            <LocaleLink
              href="/shop"
              className={`${ctaPrimary} ${ctaInButtonRow}`}
              data-bs-cta
              data-cursor-hover
              data-analytics-event="click_collection_from_personalisation"
              data-analytics-section="personalisation-cta"
            >
              {copy.shopCta}
            </LocaleLink>
            <LocaleLink
              href="/strands"
              className={`${ctaSecondaryOutlineOnDark} ${ctaInButtonRow}`}
              data-bs-cta
              data-cursor-hover
            >
              {copy.strandsCta}
            </LocaleLink>
          </div>
        </div>
      </section>

      <style jsx global>{`
        .closing-section {
          position: relative;
        }

        .closing-section::before,
        .closing-section::after {
          content: '';
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .closing-section {
          min-height: auto;
          height: auto;
          padding: 120px 40px 100px;
          background-image: url('/strands/charm-fabric-dark.webp');
          background-size: cover;
          background-position: center;
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
