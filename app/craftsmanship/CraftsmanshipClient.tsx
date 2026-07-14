'use client'

import { useEffect, useRef, type ReactNode } from 'react'
import Image from 'next/image'
import LocaleLink from '@/components/LocaleLink'
import AboutSectionHero from '@/components/AboutSectionHero'
import { ABOUT_SECTION_HERO_IMAGES } from '@/lib/about/aboutSectionHeroImages'
import { getAboutEditorialHeroEyebrow } from '@/lib/about/aboutEditorialHeroChrome'
import { getCraftsmanshipCopy, type CraftsmanshipPhaseCopy } from '@/lib/content/craftsmanshipCopyI18n'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import {
  EDITORIAL_PAGE_CONTAINER,
  EDITORIAL_STACK_CARD,
  EDITORIAL_STACK_CLOSING_PAD,
  EDITORIAL_STACK_CONTENT_PAD,
  EDITORIAL_STACK_PAD,
} from '@/lib/ui/editorialPageChrome'
import { FiArrowRight } from 'react-icons/fi'
import { withBrandAlt } from '@/lib/products/imageAlt'

/** Each film used once — compact atelier strip. */
const CRAFT_VIDEOS = [
  {
    src: '/craftsmanship/bint-saeed-craftsmanship-process.webm',
    ariaLabel:
      'Video: Bint Saeed luxury abaya craftsmanship—Italian pattern development, prototyping in Abu Dhabi, and controlled atelier production in the UAE',
  },
  {
    src: '/craftsmanship/bint-saeed-fabric-cutting-atelier.webm',
    ariaLabel:
      'Video: Bint Saeed—precision fabric cutting and atelier work for bespoke luxury abayas in Abu Dhabi, United Arab Emirates',
  },
  {
    src: '/craftsmanship/bint-saeed-stitching-process.webm',
    ariaLabel:
      'Video: hand stitching and garment finishing by experienced craftspeople—tailored construction for Bint Saeed luxury abayas in Abu Dhabi',
  },
] as const

const MEDIA = {
  label: {
    src: '/craftsmanship/bint-saeed-label-stitching.png',
    alt: 'Bint Saeed woven label detail and hand finishing on a bespoke abaya—quality-controlled construction at the Bint Saeed atelier in Abu Dhabi',
  },
  cad: {
    src: '/craftsmanship/bint-saeed-cad-abaya-pattern.png',
    alt: 'Bint Saeed CAD abaya pattern on screen—technical lines for proportion and construction resolved before cutting; luxury development between Italy and Abu Dhabi',
  },
  pattern: {
    src: '/craftsmanship/bint-saeed-pattern-drawing.png',
    alt: 'Bint Saeed—abaya pattern drawing during development; proportion, balance, and construction studied before sampling and production',
  },
  textile: {
    src: '/craftsmanship/bint-saeed-textile-selection-process.png',
    alt: 'Bint Saeed luxury textile and fabric selection for bespoke abayas—evaluating drape, weight, and performance during development in Abu Dhabi',
  },
  shearsMeasure: {
    src: '/craftsmanship/bint-saeed-abu-dhabi-craftsmanship-atelier-shears-measure.webp',
    alt: withBrandAlt(
      'Atelier close-up of shears and measuring tape cutting fabric for a luxury abaya',
      'en',
    ),
    title: 'Bint Saeed Abu Dhabi craftsmanship — atelier shears and measure',
  },
} as const

function Still({
  src,
  alt,
  className = '',
  priority = false,
  objectPosition = 'object-center',
}: {
  src: string
  alt: string
  className?: string
  priority?: boolean
  objectPosition?: string
}) {
  return (
    <img
      src={src}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      decoding={priority ? 'sync' : 'async'}
      fetchPriority={priority ? 'high' : 'auto'}
      className={`h-full w-full object-cover brightness-[1.02] contrast-[1.03] transition-transform duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.035] ${objectPosition} ${className}`}
    />
  )
}

function Film({
  src,
  ariaLabel,
  className = '',
}: {
  src: string
  ariaLabel: string
  className?: string
}) {
  const ref = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    el.muted = true
    el.defaultMuted = true
    el.playsInline = true
    el.setAttribute('muted', '')
    el.setAttribute('playsinline', '')
    el.setAttribute('webkit-playsinline', '')

    const tryPlay = () => {
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
      aria-label={ariaLabel}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      disablePictureInPicture
      controls={false}
      className={`h-full w-full object-cover ${className}`}
    />
  )
}

function Post({
  children,
  className = '',
  ratio = 'aspect-[4/5]',
}: {
  children: ReactNode
  className?: string
  ratio?: string
}) {
  return (
    <div
      className={`group relative isolate overflow-hidden bg-brand-stone/25 shadow-[0_28px_64px_-40px_rgba(42,0,18,0.18)] ${ratio} ${className}`}
    >
      {children}
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(26,2,16,0.04)_0%,transparent_34%,rgba(26,2,16,0.06)_100%)]"
        aria-hidden
      />
    </div>
  )
}

function PhaseProse({
  phase,
  headingId,
  accent = 'dusty',
}: {
  phase: CraftsmanshipPhaseCopy
  headingId: string
  accent?: 'dusty' | 'clay'
}) {
  const { isRTL } = useLanguage()
  const labelColor = accent === 'clay' ? 'text-brand-clayRed/90' : 'text-brand-dustyBlue'

  return (
    <div className={`max-w-3xl ${isRTL ? 'ms-auto text-right' : ''}`}>
      <p className={`mb-3 font-montserrat text-[10px] uppercase tracking-[0.42em] ${labelColor}`}>{phase.label}</p>
      <h2
        id={headingId}
        className="font-rozha text-[clamp(1.75rem,3.4vw,2.65rem)] leading-[1.05] tracking-[0.03em] text-brand-darkRed"
      >
        {phase.title}
      </h2>
      <div className="mt-8 space-y-6 font-montserrat text-[15px] leading-[1.95] tracking-[0.02em] text-brand-darkRed/[0.88] md:mt-10 md:space-y-7 md:text-[16px] md:leading-[2]">
        {phase.paragraphs.map((paragraph, index) => (
          <p key={index} className="mb-0">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  )
}

export default function CraftsmanshipClient() {
  const { t, isRTL, language } = useLanguage()
  const copy = getCraftsmanshipCopy(language)
  const title = language === 'id' ? copy.breadcrumbCraftsmanship : (t.footer?.craftsmanship ?? 'Craftsmanship')
  const eyebrow = getAboutEditorialHeroEyebrow(language)
  const description = t.about?.craftsmanshipDesc ?? ''
  const homeLabel = language === 'id' ? copy.breadcrumbHome : isRTL ? 'الرئيسية' : 'Home'
  const craftLabel = language === 'id' ? copy.breadcrumbCraftsmanship : isRTL ? 'الحرفية' : 'Craftsmanship'

  return (
    <div className={`relative isolate min-h-screen w-full min-w-0 bg-[#1a0210] ${isRTL ? 'rtl' : 'ltr'}`}>
      <AboutSectionHero
        rtl={isRTL}
        imageSrc={ABOUT_SECTION_HERO_IMAGES.craftsmanship}
        imageAlt="Bint Saeed — craftsmanship editorial banner"
        priority
        segments={[
          { label: homeLabel, href: '/home' },
          { label: craftLabel },
        ]}
        eyebrow={eyebrow}
        title={title}
        description={description || undefined}
      />

      {/* Opening — label detail as a stacked full-bleed card */}
      <section
        className={`relative z-10 overflow-hidden bg-brand-pageCanvas ${EDITORIAL_STACK_PAD} ${EDITORIAL_STACK_CARD}`}
        aria-label="Bint Saeed atelier finishing"
      >
        <div className={`${EDITORIAL_PAGE_CONTAINER} ${EDITORIAL_STACK_CONTENT_PAD}`}>
          <div className="group relative isolate h-[min(72vw,320px)] w-full overflow-hidden bg-brand-stone/25 shadow-[0_28px_64px_-40px_rgba(42,0,18,0.18)] sm:h-[min(48vw,380px)] md:h-[min(36vw,440px)]">
            <Still
              src={MEDIA.label.src}
              alt={MEDIA.label.alt}
              priority
              objectPosition="object-[center_58%]"
            />
            <div
              className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(26,2,16,0.04)_0%,transparent_34%,rgba(26,2,16,0.06)_100%)]"
              aria-hidden
            />
          </div>
        </div>
      </section>

      {/* Phase I */}
      <section
        className={`relative z-20 overflow-hidden bg-[#f7f3ec] ${EDITORIAL_STACK_PAD} ${EDITORIAL_STACK_CARD}`}
        aria-labelledby="phase-i"
      >
        <div className={`${EDITORIAL_PAGE_CONTAINER} ${EDITORIAL_STACK_CONTENT_PAD}`}>
          <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-10">
            <div className={`lg:col-span-5 ${isRTL ? 'lg:order-2' : ''}`}>
              <PhaseProse phase={copy.phaseI} headingId="phase-i" />
            </div>
            <div className={`lg:col-span-7 ${isRTL ? 'lg:order-1' : ''}`}>
              <div className="grid grid-cols-12 gap-3 md:gap-4">
                <div className="col-span-7 flex flex-col gap-3 md:col-span-6 md:gap-4">
                  <Post ratio="aspect-[3/4]">
                    <Still src={MEDIA.cad.src} alt={MEDIA.cad.alt} />
                  </Post>
                  <Post ratio="aspect-[5/4] md:aspect-[16/10]">
                    <Still
                      src={MEDIA.textile.src}
                      alt={MEDIA.textile.alt}
                      objectPosition="object-[center_22%]"
                    />
                  </Post>
                </div>
                <div className="col-span-5 md:col-span-6">
                  <Post ratio="aspect-[3/4] md:aspect-auto md:h-full">
                    <Still src={MEDIA.pattern.src} alt={MEDIA.pattern.alt} />
                  </Post>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Phase II */}
      <section
        className={`relative z-30 overflow-hidden bg-brand-pageCanvas ${EDITORIAL_STACK_PAD} ${EDITORIAL_STACK_CARD}`}
        aria-labelledby="phase-ii"
      >
        <div className={`${EDITORIAL_PAGE_CONTAINER} ${EDITORIAL_STACK_CONTENT_PAD}`}>
          <div className="mb-10 max-w-3xl md:mb-14">
            <PhaseProse phase={copy.phaseII} headingId="phase-ii" accent="clay" />
          </div>

          <div
            className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4"
            aria-label="Bint Saeed atelier process films"
          >
            {CRAFT_VIDEOS.map((video) => (
              <div key={video.src} className="min-w-0">
                <Post ratio="aspect-[3/4]">
                  <Film src={video.src} ariaLabel={video.ariaLabel} />
                </Post>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Phase III — prose only */}
      <section
        className={`relative z-40 overflow-hidden bg-[linear-gradient(180deg,#f7f3ec_0%,#efe9df_55%,#e8e2d8_100%)] ${EDITORIAL_STACK_PAD} ${EDITORIAL_STACK_CARD}`}
        aria-labelledby="phase-iii"
      >
        <div className={`${EDITORIAL_PAGE_CONTAINER} ${EDITORIAL_STACK_CONTENT_PAD}`}>
          <PhaseProse phase={copy.phaseIII} headingId="phase-iii" />
        </div>
      </section>

      <section
        className={`relative z-[60] overflow-hidden ${EDITORIAL_STACK_CLOSING_PAD} ${EDITORIAL_STACK_CARD}`}
      >
        <Image
          src="/craftsmanship/bint-saeed-craftsmanship-explore-collection-banner.webp"
          alt=""
          fill
          sizes="100vw"
          className="pointer-events-none object-cover object-center"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(26,2,16,0.78)_0%,rgba(42,8,22,0.62)_42%,rgba(26,2,16,0.88)_100%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(111,21,36,0.28)_0%,transparent_70%)]"
          aria-hidden
        />
        <div className={`relative mx-auto flex max-w-lg flex-col items-center text-center ${EDITORIAL_STACK_CONTENT_PAD}`}>
          <p className="mb-10 font-rozha text-[clamp(1.75rem,4vw,2.5rem)] tracking-[0.02em] text-[#e8ddd4]">
            {copy.ctaHeading}
          </p>
          <LocaleLink
            href="/shop?from=craftsmanship"
            className="inline-flex min-h-[52px] items-center justify-center gap-3 rounded-[4px] border border-[#e8ddd4]/45 bg-[#e8ddd4]/10 px-10 py-4 font-montserrat text-xs uppercase tracking-[0.22em] text-[#e8ddd4] shadow-[0_18px_48px_-28px_rgba(0,0,0,0.45)] backdrop-blur-[2px] transition-colors hover:border-[#e8ddd4]/80 hover:bg-[#e8ddd4] hover:text-brand-darkRed"
            data-cursor-hover
          >
            {copy.ctaButton}
            <FiArrowRight className="h-4 w-4" />
          </LocaleLink>
        </div>
      </section>

      {/* Final screenwide still — under closing CTA section */}
      <section
        className="relative z-[70] overflow-hidden bg-brand-pageCanvas"
        aria-label={MEDIA.shearsMeasure.alt}
      >
        <div className="relative aspect-[4/5] w-full sm:aspect-[16/9] sm:max-h-[72vh]">
          <Image
            src={MEDIA.shearsMeasure.src}
            alt={MEDIA.shearsMeasure.alt}
            title={MEDIA.shearsMeasure.title}
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority={false}
          />
        </div>
      </section>
    </div>
  )
}
