'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import LocaleLink from '@/components/LocaleLink'
import AppPageWayfinding from '@/components/AppPageWayfinding'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { getAboutPageCopy } from '@/lib/content/aboutPageCopyI18n'
import {
  ctaPrimary,
  ctaPrimarySoft,
  ctaSecondaryOnDark,
  ctaSecondaryOutlineOnDark,
  ctaButtonRow,
  ctaInButtonRow,
} from '@/lib/ui/ctaClasses'
import {
  editorialBodyOnDark,
  editorialBodyOnLight,
  editorialReflectiveLeadOnDark,
  editorialReflectiveLeadOnLight,
  editorialSectionFooterPad,
  editorialSectionH2,
} from '@/lib/ui/editorialTypography'

const WOMAN_STEP_REVEAL_HIDDEN = [
  'opacity-0 translate-y-10 md:translate-y-0 md:-translate-x-8',
  'opacity-0 translate-y-10',
  'opacity-0 translate-y-10 md:translate-y-0 md:translate-x-8',
] as const

const WOMAN_STEP_REVEAL_HIDDEN_RTL = [
  'opacity-0 translate-y-10 md:translate-y-0 md:translate-x-8',
  'opacity-0 translate-y-10',
  'opacity-0 translate-y-10 md:translate-y-0 md:-translate-x-8',
] as const

const HERO_IMAGE = '/about/campaign-portrait.PNG'
const HERO_IMAGE_2 = '/about/campaign-seated.PNG'
const CLOSING_FABRIC_BG = '/charms/charm-fabric-dark.webp'
const INNER_CONTAINER_CLASS = 'mx-auto max-w-[1280px] px-4 md:px-10'

/** Sticky card-stack scroll — identical overlap/stack on mobile and desktop */
const ABOUT_STACK_SECTION =
  'sticky top-0 -mt-10 min-h-[100vh] will-change-transform rounded-t-[16px] shadow-[0_-12px_40px_rgba(0,0,0,0.3)]'

export default function AboutPage() {
  const { language, isRTL } = useLanguage()
  const copy = getAboutPageCopy(language)
  const womanStepRefs = useRef<(HTMLElement | null)[]>([])
  const womanClosingRef = useRef<HTMLDivElement | null>(null)
  const designCodeRefs = useRef<(HTMLElement | null)[]>([])
  const codesClosingRef = useRef<HTMLDivElement | null>(null)
  const quoteRef = useRef<HTMLElement | null>(null)
  const [heroOffset, setHeroOffset] = useState(0)
  const [visibleWomanSteps, setVisibleWomanSteps] = useState<boolean[]>([false, false, false])
  const [womanClosingVisible, setWomanClosingVisible] = useState(false)
  const [visibleDesignCodes, setVisibleDesignCodes] = useState<boolean[]>([false, false, false, false, false, false])
  const [codesClosingVisible, setCodesClosingVisible] = useState(false)
  const [quoteVisible, setQuoteVisible] = useState(false)

  useEffect(() => {
    let frame = 0
    const update = () => {
      window.cancelAnimationFrame(frame)
      frame = window.requestAnimationFrame(() => {
        setHeroOffset(window.scrollY * 0.5)
      })
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener('scroll', update)
    }
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          if (entry.target === quoteRef.current) setQuoteVisible(true)
          if (entry.target === womanClosingRef.current) setWomanClosingVisible(true)
          if (entry.target === codesClosingRef.current) setCodesClosingVisible(true)

          const stepIndex = womanStepRefs.current.findIndex((el) => el === entry.target)
          if (stepIndex !== -1) {
            setVisibleWomanSteps((prev) => {
              if (prev[stepIndex]) return prev
              const next = [...prev]
              next[stepIndex] = true
              return next
            })
          }

          const codeIndex = designCodeRefs.current.findIndex((el) => el === entry.target)
          if (codeIndex !== -1) {
            setVisibleDesignCodes((prev) => {
              if (prev[codeIndex]) return prev
              const next = [...prev]
              next[codeIndex] = true
              return next
            })
          }
        })
      },
      { threshold: 0.32, rootMargin: '0px 0px -6% 0px' },
    )

    const quote = quoteRef.current
    const womanClosing = womanClosingRef.current
    const codesClosing = codesClosingRef.current
    const steps = womanStepRefs.current.filter(Boolean) as HTMLElement[]
    const codes = designCodeRefs.current.filter(Boolean) as HTMLElement[]
    if (quote) observer.observe(quote)
    if (womanClosing) observer.observe(womanClosing)
    if (codesClosing) observer.observe(codesClosing)
    steps.forEach((step) => observer.observe(step))
    codes.forEach((code) => observer.observe(code))
    return () => observer.disconnect()
  }, [copy.womanSteps.length, copy.designCodes.length])

  return (
    <main className={`min-h-screen overflow-x-clip bg-[#1a0210] ${isRTL ? 'rtl' : 'ltr'}`}>
      <section className="relative z-0 h-[85vh] max-h-[85vh] overflow-hidden bg-[#1a0210] text-[#e8ddd4]">
        <div
          className="absolute inset-0 opacity-55"
          style={{ transform: `translateY(${heroOffset}px)` }}
          aria-hidden
        >
          <Image
            src={HERO_IMAGE}
            alt={copy.imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(26,2,16,0.92)_0%,rgba(26,2,16,0.62)_46%,rgba(26,2,16,0.22)_100%)]" />
        </div>

        <div className={`absolute bottom-10 left-6 right-6 z-10 max-w-[600px] pb-14 text-left md:bottom-[60px] md:left-[60px] md:right-auto md:pb-16 ${isRTL ? 'text-right' : ''}`}>
          <AppPageWayfinding
            rtl={isRTL}
            variant="light"
            className="mb-3"
            segments={[
              { label: copy.breadcrumbHome, href: '/home' },
              { label: copy.breadcrumbAbout },
            ]}
          />

          <p className="mb-4 font-montserrat text-[10px] uppercase tracking-[0.28em] text-[#6a8090] sm:tracking-[0.34em]">
            {copy.heroEyebrow}
          </p>
          <h1
            data-document-h1="true"
            className="max-w-[760px] font-rozha text-[clamp(36px,6vw,72px)] leading-[0.98] tracking-[0.01em]"
            style={{ color: '#e8ddd4' }}
          >
            {copy.heroHeadline}
          </h1>
          <p className="mt-3 max-w-[480px] font-montserrat text-[14px] font-normal leading-[1.7] tracking-[0.02em] text-[rgba(232,216,200,0.75)]">
            {copy.heroSubline}
          </p>
          <p className="mt-3 max-w-[480px] font-montserrat text-[13px] font-normal leading-[1.7] tracking-[0.02em] text-[rgba(232,216,200,0.55)]">
            {copy.heroTagline}
          </p>
          <div className={`mt-8 ${ctaButtonRow}`} data-bs-cta-row data-bs-cta-row-layout="wrap">
            <LocaleLink
              href="#about-origin"
              className={`${ctaPrimary} ${ctaInButtonRow}`}
              data-bs-cta
              data-cursor-hover
            >
              {copy.ctaReadStory}
            </LocaleLink>
            <LocaleLink
              href="/shop"
              className={`${ctaSecondaryOnDark} ${ctaInButtonRow}`}
              data-bs-cta
              data-cursor-hover
            >
              {copy.ctaExploreCollection}
            </LocaleLink>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 z-20 overflow-hidden border-t border-[#2a0a14] bg-[#1a0210]/80 py-4">
          <div className="about-marquee flex w-max font-montserrat text-[11px] uppercase tracking-[0.2em] text-[#6a8090]/65">
            {Array.from({ length: 8 }).map((_, index) => (
              <span key={index} className="px-4">
                {copy.marquee}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section
        id="about-origin"
        className={`relative z-10 bg-[#e8ddd4] py-28 md:py-36 ${ABOUT_STACK_SECTION}`}
      >
        <div className={`${INNER_CONTAINER_CLASS} ${editorialSectionFooterPad} grid gap-12 text-left md:grid-cols-[1.1fr_0.9fr] md:items-start`}>
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

      <section
        className={`relative z-20 bg-[#1a0210] py-28 md:py-36 ${ABOUT_STACK_SECTION}`}
      >
        <div className={`${INNER_CONTAINER_CLASS} ${editorialSectionFooterPad} text-left`}>
          <p className="font-montserrat text-[10px] uppercase tracking-[0.28em] text-[#6a8090]">{copy.womanLabel}</p>
          <h2 className={`mt-4 max-w-3xl ${editorialSectionH2} text-[#e8ddd4]`}>
            {copy.womanHeading}
          </h2>
          <div className="mt-12 grid gap-px bg-[rgba(232,216,200,0.1)] md:grid-cols-3">
            {copy.womanSteps.map((step, index) => {
              const hiddenOffset = (isRTL ? WOMAN_STEP_REVEAL_HIDDEN_RTL : WOMAN_STEP_REVEAL_HIDDEN)[index]
              const isVisible = visibleWomanSteps[index]

              return (
                <article
                  key={step.numeral}
                  ref={(el) => {
                    womanStepRefs.current[index] = el
                  }}
                  className={`bg-[#1a0210] p-8 text-left transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform ${
                    isVisible ? 'translate-x-0 translate-y-0 opacity-100' : hiddenOffset
                  }`}
                  style={{ transitionDelay: `${index * 180}ms` }}
                >
                  <p className="mb-6 font-rozha text-[48px] leading-none text-[rgba(122,28,40,0.35)]">{step.numeral}</p>
                  <h3 className="mb-3 font-montserrat text-[11px] font-medium uppercase tracking-[0.15em] text-[#e8d8c8]">
                    {step.title}
                  </h3>
                  <p className="font-montserrat text-[13px] font-normal leading-[1.7] text-[rgba(232,216,200,0.6)]">{step.body}</p>
                </article>
              )
            })}
          </div>
          <div
            ref={womanClosingRef}
            className={`mt-12 space-y-6 transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
              womanClosingVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            } ${editorialBodyOnDark}`}
          >
            <p className={`max-w-3xl ${editorialReflectiveLeadOnDark}`}>
              {copy.womanClosingH3Strong}
              {copy.womanClosingH3Rest}
            </p>
            <p>
              {copy.womanClosingP1Strong1}
              {copy.womanClosingP1Middle}
              {copy.womanClosingP1Strong2}
              {copy.womanClosingP1Rest}
            </p>
            <p>
              {copy.womanClosingP2Strong1}
              {copy.womanClosingP2Middle}
              {copy.womanClosingP2Strong2}
            </p>
          </div>
        </div>
      </section>
      <section className={`relative z-30 bg-[#faf8f5] py-28 md:py-36 ${ABOUT_STACK_SECTION}`}>
        <div className={`${INNER_CONTAINER_CLASS} ${editorialSectionFooterPad} text-left`}>
          <p className="font-montserrat text-[10px] uppercase tracking-[0.28em] text-[#7A1C28]">{copy.codesLabel}</p>
          <h2 className={`mt-4 max-w-3xl ${editorialSectionH2} text-[#1a0210]`}>
            <span className="block">{copy.codesHeadingLine1}</span>
            <span className="block">{copy.codesHeadingLine2}</span>
          </h2>
          <p className={`mt-5 max-w-2xl ${editorialBodyOnLight}`}>
            {copy.codesIntro}
          </p>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-3">
            {copy.designCodes.map((code, index) => {
              const isVisible = visibleDesignCodes[index]

              return (
                <article
                  key={code.numeral}
                  ref={(el) => {
                    designCodeRefs.current[index] = el
                  }}
                  className={`group relative overflow-hidden rounded-[6px] border border-[#e8ddd4] bg-[#faf8f5] p-7 transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform hover:border-[#7A1C28]/20 hover:bg-white hover:shadow-[0_10px_36px_rgba(26,2,16,0.07)] md:p-8 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}
                  style={{ transitionDelay: `${(index % 3) * 120}ms` }}
                >
                  <p className="font-rozha text-[40px] leading-none text-[rgba(122,28,40,0.28)] transition-colors duration-500 group-hover:text-[rgba(122,28,40,0.42)]">
                    {code.numeral}
                  </p>
                  <div className="mt-4 h-px w-8 bg-[#7A1C28]/25 transition-all duration-500 group-hover:w-12 group-hover:bg-[#7A1C28]/40" aria-hidden />
                  <p className="mt-4 font-montserrat text-[11px] uppercase tracking-[0.22em] text-[#1a0210]">
                    {code.name}
                  </p>
                  <p className="mt-3 font-montserrat text-[13px] leading-[1.75] text-[#1a0210]/58">
                    {code.description}
                  </p>
                </article>
              )
            })}
          </div>
          <LocaleLink href="/the-codes" className="mt-10 block font-montserrat text-[13px] font-medium text-[#7A1C28] transition-opacity hover:opacity-75" data-cursor-hover>
            {copy.codesLink}
          </LocaleLink>
          <div
            ref={codesClosingRef}
            className={`mt-14 space-y-6 transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
              codesClosingVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            } ${editorialBodyOnLight}`}
          >
            <p className={`max-w-3xl ${editorialReflectiveLeadOnLight}`}>
              {copy.codesClosingH3}
              {copy.codesClosingH3Strong}
            </p>
            <p>
              {copy.codesClosingP1Strong}
              {copy.codesClosingP1Rest}
            </p>
            <p>
              {copy.codesClosingP2Strong}
              {copy.codesClosingP2Rest}
            </p>
          </div>
        </div>
      </section>

      <section className={`about-fabric-light relative z-40 overflow-hidden bg-[#7A1C28] py-28 md:py-36 ${ABOUT_STACK_SECTION}`}>
        <div className={`${INNER_CONTAINER_CLASS} ${editorialSectionFooterPad} relative z-20 grid gap-10 text-left md:grid-cols-2 md:items-center`}>
          <div className="relative min-h-[52vh] overflow-hidden rounded-[4px] md:min-h-[620px]">
            <Image src={HERO_IMAGE} alt={copy.imageAlt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover object-top" />
          </div>
          <div className="flex items-center">
            <div className="max-w-xl">
              <p className="font-montserrat text-[10px] uppercase tracking-[0.28em] text-[#e8d8c8]/55">{copy.houseLabel}</p>
              <h2 className={`mt-5 ${editorialSectionH2} text-[#e8ddd4]`}>{copy.houseHeading}</h2>
              <div className="mt-5 space-y-5 font-montserrat text-sm leading-[1.85] tracking-wide text-[#e8ddd4]/72">
                <p>{copy.houseP1}</p>
                <p>{copy.houseP2}</p>
              </div>
              <LocaleLink href="/giving-forward" className={`mt-8 ${ctaPrimarySoft}`} data-cursor-hover>
                {copy.ctaGivingForward}
              </LocaleLink>
            </div>
          </div>
        </div>
      </section>


      <section
        ref={quoteRef}
        className={`closing-section relative z-50 isolate -mt-10 flex min-h-[52vh] items-center overflow-hidden rounded-t-[16px] bg-[#0f080a] py-28 text-center shadow-[0_-12px_40px_rgba(0,0,0,0.3)] md:py-36 ${editorialSectionFooterPad}`}
      >
        <div className={`${INNER_CONTAINER_CLASS} relative z-20`}>
          <div className="mx-auto max-w-[640px]">
            <p
              className={`text-center font-rozha text-[clamp(22px,3.5vw,44px)] italic leading-[1.3] tracking-[-0.01em] text-[#e8d8c8] transition-opacity duration-700 ${
                quoteVisible ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {copy.closingQuote}
            </p>
          </div>
          <div className="mx-auto my-6 h-px w-[60px] bg-[#e8ddd4]" />
          <p className="text-center font-montserrat text-[10px] uppercase tracking-[0.2em] text-[#7A1C28]/70">
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
        @keyframes aboutMarquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
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
          background-image: url('/charms/charm-fabric-light.webp');
          background-position: center;
          background-size: cover;
        }

        .about-fabric-light::after {
          z-index: 1;
          background: rgba(26, 2, 16, 0.75);
        }

        .about-marquee {
          animation: aboutMarquee 95s linear infinite;
          will-change: transform;
        }

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

        .closing-section::before {
          z-index: 0;
          background-image: url('${CLOSING_FABRIC_BG}');
          background-size: cover;
          background-position: center;
        }

        .closing-section::after {
          z-index: 1;
          background: rgba(15, 8, 10, 0.58);
        }

        @media (max-width: 767px) {
          .about-marquee {
            animation-duration: 120s;
          }

          .closing-section {
            padding-top: 5rem;
            padding-bottom: 5rem;
          }
        }
      `}</style>
    </main>
  )
}
