'use client'

import { useEffect, useRef, type ReactNode } from 'react'
import Image from 'next/image'
import LocaleLink from '@/components/LocaleLink'
import AboutSectionHero from '@/components/AboutSectionHero'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { getAboutPageCopy } from '@/lib/content/aboutPageCopyI18n'
import { getHeritagePageCopy } from '@/lib/content/heritagePageCopyI18n'
import { ABOUT_SECTION_HERO_IMAGES } from '@/lib/about/aboutSectionHeroImages'
import { withBrandAlt } from '@/lib/products/imageAlt'
import type { AppLocale } from '@/lib/i18n/routing'
import {
  EDITORIAL_PAGE_CONTAINER,
} from '@/lib/ui/editorialPageChrome'
import {
  ctaPrimary,
  ctaPrimarySoft,
  ctaSecondaryOutlineOnDark,
  ctaButtonRow,
  ctaInButtonRow,
} from '@/lib/ui/ctaClasses'

const HERO_IMAGE = ABOUT_SECTION_HERO_IMAGES.about
const MANIFESTO_VIDEO = '/about/bint-saeed-abu-dhabi-about-editorial-portrait.webm'
const MANIFESTO_VIDEO_POSTER = '/about/bint-saeed-abu-dhabi-about-editorial-portrait-poster.webp'
const ORIGIN_VIDEO = '/about/bint-saeed-abu-dhabi-about-origin-editorial.webm'
const ORIGIN_VIDEO_POSTER = '/about/bint-saeed-abu-dhabi-about-origin-editorial-poster.webp'
const HERITAGE_VIDEO = '/about/bint-saeed-abu-dhabi-about-heritage-editorial.webm'
const HERITAGE_VIDEO_POSTER = '/about/bint-saeed-abu-dhabi-about-heritage-editorial-poster.webp'
/** Heritage chapter — full fabric, no tint (matches Codes/strands light weave). */
const HERITAGE_FABRIC_BG = '/strands/charm-fabric-light.webp' as const

/**
 * Layered card stack — each chapter overlaps the previous one with a rounded top
 * edge and lifted shadow, but scrolls with the page so no film or paragraph is
 * ever frozen out of view. Card padding must stay larger than the overlap.
 */
const ABOUT_STACK_CARD =
  'relative -mt-12 rounded-t-[20px] shadow-[0_-28px_64px_rgba(0,0,0,0.42)] sm:-mt-14 md:-mt-16'
const ABOUT_STACK_PAD = 'pt-16 pb-24 sm:pt-20 sm:pb-28 md:pt-24 md:pb-32'
const ABOUT_STACK_CONTENT_PAD = 'pb-8 sm:pb-10 md:pb-12'

function EditorialFilm({ src, poster, ariaLabel }: { src: string; poster: string; ariaLabel: string }) {
  const ref = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    el.muted = true
    el.defaultMuted = true
    el.volume = 0
    el.playsInline = true
    el.setAttribute('muted', '')
    el.setAttribute('playsinline', '')
    el.setAttribute('webkit-playsinline', '')

    const tryPlay = () => {
      el.muted = true
      el.volume = 0
      const playAttempt = el.play()
      if (playAttempt && typeof playAttempt.catch === 'function') {
        playAttempt.catch(() => {
          /* Autoplay can be blocked briefly; retry on visibility. */
        })
      }
    }

    tryPlay()
    el.addEventListener('loadeddata', tryPlay)
    el.addEventListener('canplay', tryPlay)

    const onVisible = () => {
      if (document.visibilityState === 'visible') tryPlay()
    }
    document.addEventListener('visibilitychange', onVisible)

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) tryPlay()
          else el.pause()
        }
      },
      { threshold: 0.25 },
    )
    observer.observe(el)

    return () => {
      el.removeEventListener('loadeddata', tryPlay)
      el.removeEventListener('canplay', tryPlay)
      document.removeEventListener('visibilitychange', onVisible)
      observer.disconnect()
    }
  }, [src])

  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      aria-label={ariaLabel}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      disablePictureInPicture
      controls={false}
      className="absolute inset-0 h-full w-full object-contain object-center outline-none"
    />
  )
}

/** Instagram Reel frame — true 9:16 for all three About films; full frame visible (no crop). */
function ReelFrame({
  children,
  tone = 'dark',
}: {
  children: ReactNode
  tone?: 'dark' | 'light'
}) {
  const shell =
    tone === 'dark'
      ? 'border border-[#e8ddd4]/22 bg-[#12010c]'
      : 'border border-[#6f1524]/18 bg-[#12010c]'

  return (
    // On desktop the film holds still while the prose scrolls, so its 9:16 frame is
    // capped through the width to whatever height is left under the fixed header.
    <div className="relative mx-auto w-full max-w-[min(100%,22.5rem)] sm:max-w-[26rem] lg:max-w-[min(28rem,calc((100dvh-9rem)*0.5625))]">
      <div className={`relative aspect-[9/16] w-full overflow-hidden ${shell} shadow-[0_24px_56px_-32px_rgba(0,0,0,0.55)]`}>
        {children}
      </div>
    </div>
  )
}

/** Continuous chapter prose — index + eyebrow, title, and copy share one left edge. */
function ChapterProse({
  index,
  label,
  title,
  headingId,
  paragraphs,
  tone = 'light',
  sticky = false,
  children,
}: {
  index: number
  label: string
  title: string
  headingId: string
  paragraphs: string[]
  tone?: 'light' | 'onDark' | 'onBurgundy'
  sticky?: boolean
  children?: ReactNode
}) {
  const onDark = tone === 'onDark' || tone === 'onBurgundy'
  const indexColor = onDark ? 'text-[#e8d8c8]' : 'text-brand-dustyBlue'
  const labelColor = onDark ? 'text-[#e8ddd4]' : 'text-brand-dustyBlue'
  const titleColor = onDark ? 'text-white' : 'text-brand-darkRed'
  // Burgundy fabric needs full cream body — muted dark-red looked unreadable on #7A1C28.
  const bodyColor =
    tone === 'onBurgundy'
      ? 'text-[#e8ddd4]'
      : tone === 'onDark'
        ? 'text-[#f0e6dc]/92'
        : 'text-brand-darkRed/[0.88]'
  const stickyClass = sticky
    ? 'lg:sticky lg:top-[calc(var(--site-header-height,var(--site-header-clearance,5.0625rem))+1rem)]'
    : ''

  return (
    <div className={`relative z-10 max-w-xl ${stickyClass} text-start`}>
      <p className="mb-3 flex flex-wrap items-baseline gap-x-3 gap-y-1 font-montserrat text-[10px] uppercase">
        <span className={`tracking-[0.22em] ${indexColor}`}>{String(index).padStart(2, '0')}</span>
        <span className={`tracking-[0.42em] ${labelColor}`}>{label}</span>
      </p>
      <h2
        id={headingId}
        className={`font-rozha text-[clamp(1.85rem,3.6vw,2.65rem)] leading-[1.05] tracking-[0.02em] ${titleColor}`}
      >
        {title}
      </h2>

      <div className={`mt-10 space-y-5 md:mt-12 md:space-y-6 ${bodyColor}`}>
        {paragraphs.map((paragraph, i) => (
          <p
            key={`${headingId}-${i}`}
            className="font-montserrat text-[15px] font-normal leading-[1.95] tracking-[0.02em] md:text-[16px] md:leading-[2]"
          >
            {paragraph}
          </p>
        ))}
      </div>
      {children ? <div className="mt-8">{children}</div> : null}
    </div>
  )
}

export default function AboutPage() {
  const { language, isRTL } = useLanguage()
  const copy = getAboutPageCopy(language)

  const originParagraphs = [
    `${copy.originP1BeforeBint}${copy.originP1Bint}${copy.originP1AfterBint}${copy.originP1Strong}`,
    `${copy.originP2Strong}${copy.originP2Rest}`,
    copy.originP3,
  ]

  return (
    <main className={`w-full min-w-0 max-w-full min-h-screen bg-[#1a0210] `}>
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
        className={`about-manifesto z-10 overflow-hidden ${ABOUT_STACK_PAD} ${ABOUT_STACK_CARD}`}
      >
        <div className={`relative ${EDITORIAL_PAGE_CONTAINER} ${ABOUT_STACK_CONTENT_PAD}`}>
          <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-14">
            <div className={`lg:col-span-5 ${isRTL ? 'lg:order-2' : ''}`}>
              <ChapterProse
                index={1}
                label={copy.manifestoTitle}
                title={copy.manifestoSubtitle}
                headingId="about-manifesto-heading"
                paragraphs={[copy.manifestoP1, copy.manifestoP2, copy.manifestoP3]}
                tone="onDark"
                sticky
              />
            </div>
            <div
              className={`relative z-10 lg:col-span-7 lg:sticky lg:top-[calc(var(--site-header-height,var(--site-header-clearance,5.0625rem))+1rem)] ${
 isRTL ? 'lg:order-1' : ''
 }`}
            >
              <ReelFrame tone="dark">
                <EditorialFilm
                  src={MANIFESTO_VIDEO}
                  poster={MANIFESTO_VIDEO_POSTER}
                  ariaLabel={withBrandAlt(
                    'Editorial portrait film — Bint Saeed Abu Dhabi About story',
                    language as AppLocale,
                  )}
                />
              </ReelFrame>
            </div>
          </div>
        </div>
      </section>

      <section
        id="about-origin"
        className={`z-20 overflow-hidden bg-[#e8ddd4] ${ABOUT_STACK_PAD} ${ABOUT_STACK_CARD}`}
      >
        <div className={`relative ${EDITORIAL_PAGE_CONTAINER} ${ABOUT_STACK_CONTENT_PAD}`}>
          <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-14">
            <div className={`lg:col-span-5 ${isRTL ? 'lg:order-2' : ''}`}>
              <ChapterProse
                index={2}
                label={copy.originLabel}
                title={copy.originHeading}
                headingId="about-origin-heading"
                paragraphs={originParagraphs}
                sticky
              />
            </div>
            <div
              className={`lg:col-span-7 lg:sticky lg:top-[calc(var(--site-header-height,var(--site-header-clearance,5.0625rem))+1rem)] ${
 isRTL ? 'lg:order-1' : ''
 }`}
            >
              <ReelFrame tone="light">
                <EditorialFilm
                  src={ORIGIN_VIDEO}
                  poster={ORIGIN_VIDEO_POSTER}
                  ariaLabel={withBrandAlt(
                    'Editorial origin film — Bint Saeed Abu Dhabi house story',
                    language as AppLocale,
                  )}
                />
              </ReelFrame>
            </div>
          </div>
        </div>
      </section>

      <section
        id="about-heritage"
        aria-labelledby="about-heritage-heading"
        className={`relative z-30 overflow-hidden bg-[#1a0210] ${ABOUT_STACK_PAD} ${ABOUT_STACK_CARD}`}
      >
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <Image
            src={HERITAGE_FABRIC_BG}
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority={false}
          />
        </div>
        <div className={`relative ${EDITORIAL_PAGE_CONTAINER} ${ABOUT_STACK_CONTENT_PAD}`}>
          <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-14">
            <div
              className={`lg:col-span-7 lg:sticky lg:top-[calc(var(--site-header-height,var(--site-header-clearance,5.0625rem))+1rem)] ${
 isRTL ? 'lg:order-2' : ''
 }`}
            >
              <ReelFrame tone="dark">
                <EditorialFilm
                  src={HERITAGE_VIDEO}
                  poster={HERITAGE_VIDEO_POSTER}
                  ariaLabel={withBrandAlt(
                    'Editorial heritage film — Bint Saeed Abu Dhabi carrying heritage forward',
                    language as AppLocale,
                  )}
                />
              </ReelFrame>
            </div>
            <div className={`lg:col-span-5 ${isRTL ? 'lg:order-1' : ''}`}>
              <ChapterProse
                index={3}
                label={copy.houseLabel}
                title={copy.houseHeading}
                headingId="about-heritage-heading"
                paragraphs={copy.houseParagraphs}
                tone="onBurgundy"
                sticky
              >
                <div className={`mt-8 flex flex-wrap gap-3 ${isRTL ? 'justify-start' : ''}`}>
                  <LocaleLink
                    href="/heritage"
                    className={`inline-flex ${ctaPrimarySoft}`}
                    data-cursor-hover
                    data-analytics-event="click_heritage_from_about"
                    data-analytics-section="about-heritage"
                  >
                    {getHeritagePageCopy(language).navLabel}
                  </LocaleLink>
                  <LocaleLink
                    href="/the-codes"
                    className={`inline-flex ${ctaPrimarySoft}`}
                    data-cursor-hover
                  >
                    {copy.ctaOurStoryInCodes}
                  </LocaleLink>
                </div>
              </ChapterProse>
            </div>
          </div>
        </div>
      </section>

      <section
        className={`closing-section z-40 ${ABOUT_STACK_CARD} flex min-h-[85dvh] items-center overflow-hidden text-center`}
        aria-label={copy.closingBrand}
      >
        <div className={`${EDITORIAL_PAGE_CONTAINER} relative z-20`}>
          <p className="mx-auto max-w-[min(94vw,860px)] text-center font-rozha text-[clamp(1.75rem,4vw,2.5rem)] leading-[1.15] tracking-[0.02em] text-[#e8ddd4]">
            {copy.closingQuote.split('\n').map((line, index) => (
              <span key={index} className="block">
                {line}
              </span>
            ))}
          </p>
          <div className="mx-auto my-6 h-px w-[60px] bg-[#e8ddd4]/35" />
          <p className="text-center font-montserrat text-[10px] uppercase tracking-[0.22em] text-[#e8d8c8]/70">
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
          opacity: 0.22;
        }

        .about-manifesto::after {
          z-index: 1;
          background: rgba(26, 2, 16, 0.55);
        }

        .closing-section {
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
