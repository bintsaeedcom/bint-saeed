'use client'

import { useEffect, useRef } from 'react'
import LocaleLink from '@/components/LocaleLink'
import AboutSectionHero from '@/components/AboutSectionHero'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { getAboutPageCopy } from '@/lib/content/aboutPageCopyI18n'
import { ABOUT_SECTION_HERO_IMAGES } from '@/lib/about/aboutSectionHeroImages'
import { withBrandAlt } from '@/lib/products/imageAlt'
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

/**
 * Sticky card stack — each section sits full-viewport-tall so the next panel can
 * clearly slide over it while scrolling (desktop overlap feel).
 * Avoid overflow-x-clip on the page shell: it breaks position:sticky.
 */
const ABOUT_STACK_CARD =
  'sticky top-0 -mt-12 min-h-[100dvh] will-change-transform rounded-t-[20px] shadow-[0_-28px_64px_rgba(0,0,0,0.42)] sm:-mt-14 md:-mt-16'
const ABOUT_STACK_PAD = 'pt-20 pb-52 sm:pt-24 sm:pb-60 md:pt-28 md:pb-72'
const ABOUT_STACK_CONTENT_PAD = 'pb-24 sm:pb-32 md:pb-40'

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
      className="h-full w-full object-cover outline-none"
    />
  )
}

/** Matches Craftsmanship PhaseProse chapter text treatment. */
function ChapterProse({
  index,
  label,
  title,
  headingId,
  paragraphs,
  tone = 'light',
  sticky = false,
}: {
  index: number
  label: string
  title: string
  headingId: string
  paragraphs: string[]
  tone?: 'light' | 'onDark' | 'onBurgundy'
  sticky?: boolean
}) {
  const { isRTL } = useLanguage()
  const onDark = tone === 'onDark' || tone === 'onBurgundy'
  const indexColor = onDark ? 'text-[#e8d8c8]/70' : 'text-brand-dustyBlue'
  const labelColor = onDark ? 'text-[#e8d8c8]' : 'text-brand-dustyBlue'
  const titleColor = onDark ? 'text-[#e8ddd4]' : 'text-brand-darkRed'
  const bodyColor = onDark ? 'text-[#e8ddd4]/78' : 'text-brand-darkRed/[0.88]'
  const ruleColor = onDark ? 'border-[#e8ddd4]/18' : 'border-[#6f1524]/35'
  const stickyClass = sticky
    ? 'lg:sticky lg:top-[calc(var(--site-header-height,8.75rem)+1rem)]'
    : ''

  return (
    <div className={`max-w-xl ${stickyClass} ${isRTL ? 'ms-auto text-right' : ''}`}>
      <div className={`flex items-baseline gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
        <span className={`shrink-0 font-montserrat text-[10px] uppercase tracking-[0.22em] ${indexColor}`}>
          {String(index).padStart(2, '0')}
        </span>
        <div className="min-w-0">
          <p className={`mb-3 font-montserrat text-[10px] uppercase tracking-[0.42em] ${labelColor}`}>
            {label}
          </p>
          <h2
            id={headingId}
            className={`font-rozha text-[clamp(1.85rem,3.6vw,2.65rem)] leading-[1.05] tracking-[0.02em] ${titleColor}`}
          >
            {title}
          </h2>
        </div>
      </div>

      <ol className="mt-10 space-y-0 md:mt-12">
        {paragraphs.map((paragraph) => (
          <li
            key={paragraph.slice(0, 40)}
            className={`border-t ${ruleColor} py-6 first:border-t first:pt-6 md:py-7`}
          >
            <p
              className={`font-montserrat text-[15px] font-normal leading-[1.95] tracking-[0.02em] md:text-[16px] md:leading-[2] ${bodyColor}`}
            >
              {paragraph}
            </p>
          </li>
        ))}
      </ol>
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
    <main className={`w-full min-w-0 max-w-full min-h-screen bg-[#1a0210] ${isRTL ? 'rtl' : 'ltr'}`}>
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
              className={`lg:col-span-7 lg:sticky lg:top-[calc(var(--site-header-height,8.75rem)+1rem)] ${
                isRTL ? 'lg:order-1' : ''
              }`}
            >
              <div className="relative isolate aspect-[9/16] max-h-[min(78vh,860px)] w-full overflow-hidden border border-white/25 bg-white/[0.08] shadow-[0_28px_70px_-34px_rgba(0,0,0,0.62),inset_0_1px_0_rgba(255,255,255,0.22)] backdrop-blur-xl sm:aspect-[4/5]">
                <EditorialFilm
                  src={MANIFESTO_VIDEO}
                  poster={MANIFESTO_VIDEO_POSTER}
                  ariaLabel={withBrandAlt(
                    'Editorial portrait film — Bint Saeed Abu Dhabi About story',
                    language === 'ar' ? 'ar' : 'en',
                  )}
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-[linear-gradient(160deg,rgba(255,255,255,0.12)_0%,transparent_38%,rgba(26,2,16,0.18)_100%)]"
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/25 shadow-[inset_0_0_48px_rgba(255,255,255,0.08)]"
                  aria-hidden
                />
              </div>
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
              className={`lg:col-span-7 lg:sticky lg:top-[calc(var(--site-header-height,8.75rem)+1rem)] ${
                isRTL ? 'lg:order-1' : ''
              }`}
            >
              <div className="relative isolate aspect-[9/16] max-h-[min(78vh,860px)] w-full overflow-hidden border border-white/60 bg-white/30 shadow-[0_28px_70px_-36px_rgba(42,0,18,0.2),inset_0_1px_0_rgba(255,255,255,0.75)] backdrop-blur-2xl sm:aspect-[4/5]">
                <EditorialFilm
                  src={ORIGIN_VIDEO}
                  poster={ORIGIN_VIDEO_POSTER}
                  ariaLabel={withBrandAlt(
                    'Editorial origin film — Bint Saeed Abu Dhabi house story',
                    language === 'ar' ? 'ar' : 'en',
                  )}
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-[linear-gradient(160deg,rgba(255,255,255,0.28)_0%,transparent_42%,rgba(255,255,255,0.1)_100%)]"
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/55 shadow-[inset_0_0_56px_rgba(255,255,255,0.18)]"
                  aria-hidden
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className={`about-fabric-light z-30 overflow-hidden bg-[#7A1C28] ${ABOUT_STACK_PAD} ${ABOUT_STACK_CARD}`}
      >
        <div className={`relative ${EDITORIAL_PAGE_CONTAINER} ${ABOUT_STACK_CONTENT_PAD}`}>
          <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-14">
            <div
              className={`lg:col-span-7 lg:sticky lg:top-[calc(var(--site-header-height,8.75rem)+1rem)] ${
                isRTL ? 'lg:order-2' : ''
              }`}
            >
              <div className="relative isolate aspect-[9/16] max-h-[min(78vh,860px)] w-full overflow-hidden border border-white/25 bg-white/[0.08] shadow-[0_28px_70px_-34px_rgba(0,0,0,0.62),inset_0_1px_0_rgba(255,255,255,0.22)] backdrop-blur-xl sm:aspect-[4/5]">
                <EditorialFilm
                  src={HERITAGE_VIDEO}
                  poster={HERITAGE_VIDEO_POSTER}
                  ariaLabel={withBrandAlt(
                    'Editorial heritage film — Bint Saeed Abu Dhabi carrying heritage forward',
                    language === 'ar' ? 'ar' : 'en',
                  )}
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-[linear-gradient(160deg,rgba(255,255,255,0.12)_0%,transparent_38%,rgba(26,2,16,0.18)_100%)]"
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/25 shadow-[inset_0_0_48px_rgba(255,255,255,0.08)]"
                  aria-hidden
                />
              </div>
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
              />
              <LocaleLink
                href="/the-codes"
                className={`mt-8 inline-flex ${ctaPrimarySoft}`}
                data-cursor-hover
              >
                {copy.ctaOurStoryInCodes}
              </LocaleLink>
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
