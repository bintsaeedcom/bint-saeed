'use client'

import { useEffect, useRef, useState, type CSSProperties } from 'react'
import Image from 'next/image'
import LocaleLink from '@/components/LocaleLink'
import AppPageWayfinding from '@/components/AppPageWayfinding'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { getPersonalisationCopy } from '@/lib/content/personalisationCopyI18n'
import { editorialSectionH2 } from '@/lib/ui/editorialTypography'
import {
  ctaButtonRow,
  ctaInButtonRow,
  ctaPrimary,
  ctaSecondaryOutlineOnDark,
} from '@/lib/ui/ctaClasses'

const INNER_CONTAINER_CLASS = 'mx-auto max-w-[1280px] px-4 md:px-10'
const PERSONALISATION_PAGE = encodeURIComponent('Personalisation Page')
const HERO_IMAGE = `/${PERSONALISATION_PAGE}/${encodeURIComponent('secret pocket.JPG')}`
const SECRET_POCKET_IMAGE = HERO_IMAGE
const LABEL_IMAGES = ['label1.PNG', 'label2.PNG', 'label3.PNG', 'label4.PNG'].map(
  (file) => `/${PERSONALISATION_PAGE}/${encodeURIComponent(file)}`,
)
const LABEL_CAROUSEL_DURATION_SEC = 90

/** Slow horizontal film strip — duplicated row for seamless loop */
function LabelImageMarquee({ images, alt }: { images: string[]; alt: string }) {
  const looped = [...images, ...images]

  return (
    <div
      dir="ltr"
      className="personalisation-label-marquee relative mt-0 w-full min-w-0 overflow-hidden"
      style={
        {
          ['--coming-soon-marquee-duration' as string]: `${LABEL_CAROUSEL_DURATION_SEC}s`,
        } as CSSProperties
      }
      role="region"
      aria-label={alt}
    >
      <div className="personalisation-label-marquee-fade pointer-events-none absolute inset-0 z-10" aria-hidden />
      <div className="coming-soon-marquee-track-x coming-soon-marquee-track-x--ltr flex w-max flex-row flex-nowrap items-center gap-4 py-1 md:gap-5">
        {looped.map((src, i) => {
          const index = i % images.length
          const isDuplicate = i >= images.length
          return (
            <div
              key={`${src}-${i}`}
              className="relative aspect-[3/4] w-[min(48vw,10.5rem)] shrink-0 overflow-hidden rounded-[4px] sm:w-40 md:w-48 lg:w-52"
            >
              <Image
                src={src}
                alt={isDuplicate ? '' : `${alt} — ${index + 1}`}
                fill
                draggable={false}
                className="object-cover object-center select-none"
                sizes="(max-width: 640px) 48vw, 208px"
                aria-hidden={isDuplicate}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

/** TODO: replace src with pocket location video once filmed */
const POCKET_VIDEO_SRC = ''

export default function PersonalisationPage() {
  const { isRTL, language } = useLanguage()
  const copy = getPersonalisationCopy(language)
  const stepsRef = useRef<HTMLElement | null>(null)
  const quoteRef = useRef<HTMLElement | null>(null)
  const [heroOffset, setHeroOffset] = useState(0)
  const [stepsVisible, setStepsVisible] = useState(false)
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
    <main className={`min-h-screen overflow-x-clip bg-[#1a0210] ${isRTL ? 'rtl' : 'ltr'}`}>
      <section className="relative z-0 flex min-h-0 flex-col overflow-hidden bg-[#1a0210] text-[#e8ddd4] md:max-h-[min(72vh,720px)]">
        <div className="absolute inset-0 overflow-hidden" aria-hidden>
          <div
            className="absolute inset-0 opacity-65"
            style={{ transform: `translateY(${heroOffset}px)` }}
          >
            <Image
              src={HERO_IMAGE}
              alt={copy.hiddenPocketAlt}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(26,2,16,0.92)_0%,rgba(26,2,16,0.62)_46%,rgba(26,2,16,0.22)_100%)]" />
          </div>
          <div className="absolute inset-0 shadow-[inset_0_-24px_48px_rgba(0,0,0,0.28)]" />
        </div>

        <div
          className={`relative z-10 flex min-h-[min(58vh,560px)] flex-col justify-between px-6 pb-[4.75rem] pt-[5.25rem] md:min-h-[min(62vh,640px)] md:px-[60px] md:pb-[4.5rem] md:pt-[6.5rem] ${isRTL ? 'text-right' : 'text-left'}`}
        >
          <div className="max-w-[600px]">
            <AppPageWayfinding
              rtl={isRTL}
              variant="light"
              className="mb-3"
              segments={[
                { label: copy.breadcrumbHome, href: '/home' },
                { label: copy.breadcrumb },
              ]}
            />

            <h1
              data-document-h1="true"
              className="max-w-[760px] font-rozha text-[clamp(32px,5.4vw,64px)] leading-[0.98] tracking-[0.01em]"
              style={{ color: '#e8ddd4' }}
            >
              {copy.heroTitle}
            </h1>
            <p className="mt-2.5 max-w-[480px] font-montserrat text-[14px] font-normal leading-[1.7] tracking-[0.02em] text-[rgba(232,216,200,0.75)]">
              {copy.heroSub}
            </p>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 z-20 overflow-hidden border-t border-[#2a0a14] bg-[#1a0210]/80 py-3">
          <div className="personalisation-marquee flex w-max font-montserrat text-[11px] uppercase tracking-[0.2em] text-[#6a8090]/65">
            {Array.from({ length: 8 }).map((_, index) => (
              <span key={index} className="px-4">
                {copy.marquee}
              </span>
            ))}
          </div>
        </div>
      </section>

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
        <div className="relative mt-10 w-full overflow-x-clip">
          <LabelImageMarquee images={LABEL_IMAGES} alt={copy.labelAlt} />
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
          <div className={`mt-12 ${ctaButtonRow} justify-center`} data-bs-cta-row>
            <LocaleLink
              href="/shop?category=abayas"
              className={`${ctaPrimary} ${ctaInButtonRow}`}
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
          <div className="mx-auto max-w-[min(92vw,780px)]">
            <p
              className={`text-center font-rozha text-[clamp(22px,3.5vw,44px)] italic leading-[1.28] tracking-[-0.01em] text-[#e8d8c8] text-balance transition-opacity duration-700 ${
                quoteVisible ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {copy.closingQuote.split('\n').map((line, index, lines) => (
                <span key={index}>
                  {line}
                  {index < lines.length - 1 ? <br /> : null}
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
        @keyframes personalisationMarquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .personalisation-marquee {
          animation: personalisationMarquee 95s linear infinite;
          will-change: transform;
        }

        .personalisation-label-marquee {
          direction: ltr;
          unicode-bidi: isolate;
        }

        .personalisation-label-marquee-fade {
          background: linear-gradient(
            to right,
            #faf8f5 0%,
            transparent 10%,
            transparent 90%,
            #faf8f5 100%
          );
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
          .personalisation-marquee {
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
