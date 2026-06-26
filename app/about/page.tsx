'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import LocaleLink from '@/components/LocaleLink'
import AppPageWayfinding from '@/components/AppPageWayfinding'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { getAboutPageCopy } from '@/lib/content/aboutPageCopyI18n'

const HERO_IMAGE = '/about/campaign-portrait.PNG'
const HERO_IMAGE_2 = '/about/campaign-seated.PNG'
const INNER_CONTAINER_CLASS = 'mx-auto max-w-[1280px] px-4 md:px-10'

export default function AboutPage() {
  const { language, isRTL } = useLanguage()
  const copy = getAboutPageCopy(language)
  const womanRef = useRef<HTMLElement | null>(null)
  const quoteRef = useRef<HTMLElement | null>(null)
  const [heroOffset, setHeroOffset] = useState(0)
  const [womanVisible, setWomanVisible] = useState(false)
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
          if (entry.target === womanRef.current && entry.isIntersecting) setWomanVisible(true)
          if (entry.target === quoteRef.current && entry.isIntersecting) setQuoteVisible(true)
        })
      },
      { threshold: 0.28 },
    )
    const woman = womanRef.current
    const quote = quoteRef.current
    if (woman) observer.observe(woman)
    if (quote) observer.observe(quote)
    return () => observer.disconnect()
  }, [])

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

        <div className={`absolute top-28 z-20 px-6 md:top-32 md:left-[60px] ${isRTL ? 'right-6 md:right-[60px] left-auto' : 'left-6'}`}>
          <AppPageWayfinding
            rtl={isRTL}
            variant="light"
            segments={[
              { label: copy.breadcrumbHome, href: '/home' },
              { label: copy.breadcrumbAbout },
            ]}
            backLink={{
              href: '/home',
              label: copy.backToHome,
            }}
          />
        </div>

        <div className="absolute bottom-10 left-6 right-6 z-10 max-w-[600px] pb-14 text-left md:bottom-[60px] md:left-[60px] md:right-auto md:pb-16">
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
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <LocaleLink
              href="#about-origin"
              className="inline-flex items-center justify-center rounded-[4px] bg-[#7A1C28] px-8 py-[13px] font-montserrat text-[11px] uppercase tracking-[0.08em] text-[#e8d8c8] transition-colors hover:bg-[#821b2d]"
              data-cursor-hover
            >
              {copy.ctaReadStory}
            </LocaleLink>
            <LocaleLink
              href="/shop"
              className="inline-flex items-center justify-center rounded-[4px] border border-[#e8ddd4]/40 bg-[#1a0210]/35 px-8 py-[13px] font-montserrat text-[11px] uppercase tracking-[0.08em] text-[#e8d8c8] backdrop-blur-md transition-colors hover:border-[#e8ddd4]/70 hover:bg-[#1a0210]/55"
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
        className="relative z-10 -mt-6 rounded-t-[16px] bg-[#e8ddd4] py-28 md:py-36 shadow-[0_-12px_40px_rgba(0,0,0,0.3)] md:-mt-10 md:sticky md:top-0 md:will-change-transform md:min-h-[100vh]"
      >
        <div className={`${INNER_CONTAINER_CLASS} grid gap-12 text-left md:grid-cols-[1.1fr_0.9fr] md:items-start`}>
          <div>
            <p className="font-montserrat text-[10px] uppercase tracking-[0.28em] text-[#7A1C28]">{copy.originLabel}</p>
            <h2 className="mt-4 font-rozha text-[clamp(2.5rem,5vw,4.75rem)] leading-[1] text-[#1a0210]">
              {copy.originHeading}
            </h2>
            <div className="mt-6 space-y-6 font-montserrat text-[15px] leading-[1.9] tracking-wide text-[#1a0210]/72 [&_em]:italic [&_strong]:font-semibold [&_strong]:text-[#1a0210]">
              <p>
                {copy.originP1BeforeBint}
                <em>{copy.originP1Bint}</em>
                {copy.originP1AfterBint}
                <strong>{copy.originP1Strong}</strong>
              </p>
              <p>
                <strong>{copy.originP2Strong}</strong>
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
        ref={womanRef}
        className="relative z-20 -mt-6 rounded-t-[16px] bg-[#1a0210] py-28 md:py-36 shadow-[0_-12px_40px_rgba(0,0,0,0.3)] md:-mt-10 md:sticky md:top-0 md:will-change-transform md:min-h-[100vh]"
      >
        <div className={`${INNER_CONTAINER_CLASS} text-left`}>
          <p className="font-montserrat text-[10px] uppercase tracking-[0.28em] text-[#6a8090]">{copy.womanLabel}</p>
          <h2 className="mt-4 max-w-3xl font-rozha text-[clamp(2.4rem,5vw,4.5rem)] leading-[1] text-[#e8ddd4]">
            {copy.womanHeading}
          </h2>
          <div className="mt-12 grid gap-px bg-[rgba(232,216,200,0.1)] md:grid-cols-3">
            {copy.womanSteps.map((step, index) => (
              <article
                key={step.numeral}
                className={`bg-[#1a0210] p-8 text-left transition-all duration-700 ${
                  womanVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
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
          <div className="mt-12 space-y-6 font-montserrat text-[15px] leading-[1.9] tracking-wide text-[#e8ddd4]/72 [&_strong]:font-semibold [&_strong]:text-[#e8ddd4]">
            <h3 className="font-rozha text-[clamp(1.55rem,3vw,2.25rem)] leading-[1.12] text-[#e8ddd4]">
              <strong>{copy.womanClosingH3Strong}</strong>
              {copy.womanClosingH3Rest}
            </h3>
            <p>
              <strong>{copy.womanClosingP1Strong1}</strong>
              {copy.womanClosingP1Middle}
              <strong>{copy.womanClosingP1Strong2}</strong>
              {copy.womanClosingP1Rest}
            </p>
            <p>
              <strong>{copy.womanClosingP2Strong1}</strong>
              {copy.womanClosingP2Middle}
              <strong>{copy.womanClosingP2Strong2}</strong>
            </p>
          </div>
        </div>
      </section>
      <section className="relative z-30 -mt-6 rounded-t-[16px] bg-[#faf8f5] py-28 md:py-36 shadow-[0_-12px_40px_rgba(0,0,0,0.3)] md:-mt-10 md:sticky md:top-0 md:will-change-transform md:min-h-[100vh]">
        <div className={`${INNER_CONTAINER_CLASS} text-left`}>
          <p className="font-montserrat text-[10px] uppercase tracking-[0.28em] text-[#7A1C28]">{copy.codesLabel}</p>
          <h2 className="mt-4 max-w-3xl font-rozha text-[clamp(2.4rem,5vw,4.5rem)] leading-[1] text-[#1a0210]">
            {copy.codesHeading}
          </h2>
          <p className="mt-5 max-w-2xl font-montserrat text-[15px] leading-[1.9] tracking-wide text-[#1a0210]/72">
            {copy.codesIntro}
          </p>
          <div className="mt-12 grid grid-cols-2 gap-px bg-[#e8ddd4] md:grid-cols-3">
            {copy.designCodes.map((code) => (
              <div key={code.numeral} className="bg-[#faf8f5] p-7">
                <p className="font-rozha text-[32px] leading-none text-[rgba(122,28,40,0.25)]">{code.numeral}</p>
                <p className="mt-2 font-montserrat text-[11px] uppercase tracking-[0.2em] text-[#1a0210]">{code.name}</p>
                <p className="mt-2 font-montserrat text-[13px] leading-[1.7] text-[#1a0210]/60">{code.description}</p>
              </div>
            ))}
          </div>
          <LocaleLink href="/the-codes" className="mt-8 block font-montserrat text-[13px] font-medium text-[#7A1C28] transition-opacity hover:opacity-75" data-cursor-hover>
            {copy.codesLink}
          </LocaleLink>
          <div className="mt-12 space-y-6 font-montserrat text-[15px] leading-[1.9] tracking-wide text-[#1a0210]/72 [&_strong]:font-semibold [&_strong]:text-[#1a0210]">
            <h3 className="font-rozha text-[clamp(1.55rem,3vw,2.25rem)] leading-[1.12] text-[#1a0210]">
              {copy.codesClosingH3}
              <strong>{copy.codesClosingH3Strong}</strong>
            </h3>
            <p>
              <strong>{copy.codesClosingP1Strong}</strong>
              {copy.codesClosingP1Rest}
            </p>
            <p>
              <strong>{copy.codesClosingP2Strong}</strong>
              {copy.codesClosingP2Rest}
            </p>
          </div>
        </div>
      </section>

      <section className="about-fabric-light relative z-40 -mt-6 overflow-hidden rounded-t-[16px] bg-[#7A1C28] py-28 md:py-36 shadow-[0_-12px_40px_rgba(0,0,0,0.3)] md:-mt-10 md:sticky md:top-0 md:will-change-transform md:min-h-[100vh]">
        <div className={`${INNER_CONTAINER_CLASS} relative z-20 grid gap-10 text-left md:grid-cols-2 md:items-center`}>
          <div className="relative min-h-[52vh] overflow-hidden rounded-[4px] md:min-h-[620px]">
            <Image src={HERO_IMAGE} alt={copy.imageAlt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover object-top" />
          </div>
          <div className="flex items-center">
            <div className="max-w-xl">
              <p className="font-montserrat text-[10px] uppercase tracking-[0.28em] text-[#e8d8c8]/55">{copy.houseLabel}</p>
              <h2 className="mt-5 font-rozha text-[clamp(2rem,3vw,2.5rem)] leading-tight text-[#e8ddd4]">{copy.houseHeading}</h2>
              <div className="mt-5 space-y-5 font-montserrat text-sm leading-[1.85] tracking-wide text-[#e8ddd4]/72">
                <p>{copy.houseP1}</p>
                <p>{copy.houseP2}</p>
              </div>
              <LocaleLink href="/giving-forward" className="mt-8 inline-flex items-center justify-center rounded-[4px] bg-[#e8ddd4] px-8 py-[13px] font-montserrat text-xs uppercase tracking-[0.08em] text-[#7A1C28] transition-colors hover:bg-[#faf8f5]" data-cursor-hover>
                {copy.ctaGivingForward}
              </LocaleLink>
            </div>
          </div>
        </div>
      </section>


      <section
        ref={quoteRef}
        className="closing-section relative z-50 -mt-6 flex h-auto min-h-0 items-center overflow-hidden rounded-t-[16px] text-center shadow-[0_-12px_40px_rgba(0,0,0,0.3)] md:-mt-10 md:sticky md:top-0 md:will-change-transform"
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
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <LocaleLink
              href="/shop"
              className="inline-flex items-center justify-center rounded-[4px] bg-[#7A1C28] px-8 py-[13px] font-montserrat text-[11px] uppercase tracking-[0.08em] text-[#e8d8c8] transition-colors hover:bg-[#821b2d]"
              data-cursor-hover
              data-analytics-event="click_collection_from_about"
              data-analytics-section="about-cta"
            >
              {copy.ctaExploreCollection}
            </LocaleLink>
            <LocaleLink
              href="/the-codes"
              className="inline-flex items-center justify-center rounded-[4px] border border-[#e8ddd4]/35 bg-transparent px-8 py-[13px] font-montserrat text-[11px] uppercase tracking-[0.08em] text-[#e8d8c8] transition-colors hover:border-[#e8ddd4]/70"
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

        .about-fabric-light {
          position: relative;
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

        .closing-section {
          min-height: auto;
          height: auto;
          padding: 120px 40px 100px;
          background-image: url('/charms/charm-fabric-dark.webp');
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
          .about-fabric-light {
          position: relative;
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
            animation-duration: 120s;
          }

          .closing-section {
            padding: 80px 24px 80px;
          }
        }
      `}</style>
    </main>
  )
}
