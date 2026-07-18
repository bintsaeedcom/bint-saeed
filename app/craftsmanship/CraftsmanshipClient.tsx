'use client'

import { useEffect, useRef, type ReactNode } from 'react'
import AboutSectionHero from '@/components/AboutSectionHero'
import ExploreCollectionClosing from '@/components/ExploreCollectionClosing'
import { ABOUT_SECTION_HERO_IMAGES } from '@/lib/about/aboutSectionHeroImages'
import { getAboutEditorialHeroEyebrow } from '@/lib/about/aboutEditorialHeroChrome'
import { getCraftsmanshipCopy, type CraftsmanshipPhaseCopy } from '@/lib/content/craftsmanshipCopyI18n'
import { getCraftsmanshipMediaCopy } from '@/lib/content/craftsmanshipMediaI18n'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import {
  EDITORIAL_PAGE_CONTAINER,
  EDITORIAL_PAGE_SHELL,
  EDITORIAL_STACK_CARD,
  EDITORIAL_STACK_CONTENT_PAD,
  EDITORIAL_STACK_PAD,
} from '@/lib/ui/editorialPageChrome'
import { withBrandAlt } from '@/lib/products/imageAlt'
import type { AppLocale } from '@/lib/i18n/routing'
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion'

/** Scroll-scrubbed editorial reveal — text arrives with the scroll, not as a one-shot fade. */
function Reveal({
  children,
  className = '',
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.94', 'start 0.52'],
  })
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 28, restDelta: 0.001 })
  const gated = useTransform(progress, (latest) => {
    const start = Math.min(0.45, Math.max(0, delay) * 0.55)
    if (latest <= start) return 0
    return Math.min(1, (latest - start) / (1 - start))
  })
  const opacity = useTransform(gated, [0, 1], [0, 1])
  const y = useTransform(gated, [0, 1], [42, 0])

  if (reduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div ref={ref} className={className} style={{ opacity, y }}>
      {children}
    </motion.div>
  )
}

/** Parallax fill inside clipped media frames — ken-burns drift as the section scrolls. */
function ParallaxMedia({
  children,
  intensity = 26,
  invert = false,
}: {
  children: ReactNode
  intensity?: number
  invert?: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const rawY = useTransform(
    scrollYProgress,
    [0, 1],
    invert ? [intensity, -intensity * 1.2] : [-intensity, intensity * 1.2],
  )
  const rawScale = useTransform(scrollYProgress, [0, 1], [1.14, 1.04])
  const y = useSpring(rawY, { stiffness: 55, damping: 22, restDelta: 0.001 })
  const scale = useSpring(rawScale, { stiffness: 55, damping: 22, restDelta: 0.001 })

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute inset-[-14%] will-change-transform"
        style={reduceMotion ? undefined : { y, scale }}
      >
        {children}
      </motion.div>
    </div>
  )
}

/** Soft atmospheric drift for section backgrounds. */
function SectionDrift({ className = '' }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [-40, 40])

  return (
    <motion.div
      ref={ref}
      aria-hidden
      className={`pointer-events-none absolute inset-0 ${className}`}
      style={reduceMotion ? undefined : { y }}
    />
  )
}

function craftVideos(media: ReturnType<typeof getCraftsmanshipMediaCopy>) {
  return [
    {
      src: '/craftsmanship/bint-saeed-craftsmanship-process.webm',
      ariaLabel: media.videoProcessAria,
    },
    {
      src: '/craftsmanship/bint-saeed-fabric-cutting-atelier.webm',
      ariaLabel: media.videoCuttingAria,
    },
    {
      src: '/craftsmanship/bint-saeed-stitching-process.webm',
      ariaLabel: media.videoStitchingAria,
    },
  ] as const
}

function craftMedia(media: ReturnType<typeof getCraftsmanshipMediaCopy>, locale: AppLocale) {
  return {
    cad: {
      src: '/craftsmanship/bint-saeed-abu-dhabi-craftsmanship-phase-i-cad-pattern.webp',
      alt: withBrandAlt(media.altCad, locale),
    },
    pattern: {
      src: '/craftsmanship/bint-saeed-abu-dhabi-craftsmanship-phase-i-pattern-drawing.webp',
      alt: withBrandAlt(media.altPattern, locale),
    },
    textile: {
      src: '/craftsmanship/bint-saeed-abu-dhabi-craftsmanship-phase-iii-textile-thread.webp',
      alt: withBrandAlt(media.altTextile, locale),
    },
    shearsMeasure: {
      src: '/craftsmanship/bint-saeed-abu-dhabi-craftsmanship-phase-iii-shears-measure.webp',
      alt: withBrandAlt(media.altShears, locale),
    },
    goldKnotFinishing: {
      src: '/craftsmanship/bint-saeed-abu-dhabi-craftsmanship-atelier-gold-knot-strand-finishing.webp',
      alt: withBrandAlt(media.altGoldKnotFinishing, locale),
    },
    wovenLabelStitching: {
      src: '/craftsmanship/bint-saeed-abu-dhabi-craftsmanship-woven-label-hand-stitching.webp',
      alt: withBrandAlt(media.altWovenLabel, locale),
    },
    goldKnottedChain: {
      src: '/craftsmanship/bint-saeed-abu-dhabi-craftsmanship-gold-knotted-chain-detail.webp',
      alt: withBrandAlt(media.altGoldKnottedChain, locale),
    },
  }
}

function phaseIiMedia(
  videos: ReturnType<typeof craftVideos>,
  media: ReturnType<typeof craftMedia>,
) {
  return [
    { kind: 'video' as const, src: videos[0].src, ariaLabel: videos[0].ariaLabel },
    {
      kind: 'image' as const,
      src: media.goldKnotFinishing.src,
      alt: media.goldKnotFinishing.alt,
    },
    {
      kind: 'image' as const,
      src: media.wovenLabelStitching.src,
      alt: media.wovenLabelStitching.alt,
    },
    { kind: 'video' as const, src: videos[1].src, ariaLabel: videos[1].ariaLabel },
    { kind: 'video' as const, src: videos[2].src, ariaLabel: videos[2].ariaLabel },
    {
      kind: 'image' as const,
      src: media.goldKnottedChain.src,
      alt: media.goldKnottedChain.alt,
    },
  ]
}


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
      className={`h-full w-full object-cover brightness-[1.02] contrast-[1.03] ${objectPosition} ${className}`}
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
      className={`h-full w-full object-cover outline-none ${className}`}
    />
  )
}

function Post({
  children,
  className = '',
  ratio = 'aspect-[4/5]',
  tone = 'light',
  parallax = true,
  invertParallax = false,
  intensity = 26,
}: {
  children: ReactNode
  className?: string
  ratio?: string
  tone?: 'light' | 'onDark'
  parallax?: boolean
  invertParallax?: boolean
  intensity?: number
}) {
  const frame =
    tone === 'onDark'
      ? 'border border-white/25 bg-white/[0.08] shadow-[0_28px_70px_-34px_rgba(0,0,0,0.62),inset_0_1px_0_rgba(255,255,255,0.22)] backdrop-blur-xl'
      : 'border border-white/60 bg-white/30 shadow-[0_28px_70px_-36px_rgba(42,0,18,0.2),inset_0_1px_0_rgba(255,255,255,0.75)] backdrop-blur-2xl'
  const veil =
    tone === 'onDark'
      ? 'bg-[linear-gradient(160deg,rgba(255,255,255,0.14)_0%,transparent_38%,rgba(26,2,16,0.22)_100%)]'
      : 'bg-[linear-gradient(160deg,rgba(255,255,255,0.28)_0%,transparent_42%,rgba(255,255,255,0.1)_100%)]'
  const rim =
    tone === 'onDark'
      ? 'ring-1 ring-inset ring-white/25 shadow-[inset_0_0_48px_rgba(255,255,255,0.08)]'
      : 'ring-1 ring-inset ring-white/55 shadow-[inset_0_0_56px_rgba(255,255,255,0.18)]'

  return (
    <div className={`group relative isolate overflow-hidden ${frame} ${ratio} ${className}`}>
      {parallax ? (
        <ParallaxMedia intensity={intensity} invert={invertParallax}>
          {children}
        </ParallaxMedia>
      ) : (
        children
      )}
      <div className={`pointer-events-none absolute inset-0 z-[1] ${veil}`} aria-hidden />
      <div className={`pointer-events-none absolute inset-0 z-[2] ${rim}`} aria-hidden />
    </div>
  )
}

/** Phase title + paragraphs — Giving Forward chapter cadence, copy unchanged. */
function PhaseProse({
  phase,
  headingId,
  accent = 'dusty',
  sticky = false,
  index = 1,
  tone = 'light',
}: {
  phase: CraftsmanshipPhaseCopy
  headingId: string
  accent?: 'dusty' | 'clay'
  sticky?: boolean
  index?: number
  tone?: 'light' | 'onDark'
}) {
  const { isRTL } = useLanguage()
  const onDark = tone === 'onDark'
  const indexColor = onDark ? 'text-[#e8d8c8]/70' : 'text-brand-dustyBlue'
  const labelColor = onDark
    ? 'text-[#e8d8c8]'
    : accent === 'clay'
      ? 'text-brand-clayRed/90'
      : 'text-brand-dustyBlue'
  const titleColor = onDark ? 'text-[#e8ddd4]' : 'text-brand-darkRed'
  const bodyColor = onDark ? 'text-[#e8ddd4]/78' : 'text-brand-darkRed/[0.88]'
  const ruleColor = onDark ? 'border-[#e8ddd4]/18' : 'border-[#6f1524]/35'
  const stickyClass = sticky
    ? 'lg:sticky lg:top-[calc(var(--site-header-height,var(--site-header-clearance,5.0625rem))+1rem)]'
    : ''

  return (
    <div className={`max-w-xl ${stickyClass} text-start`}>
      <Reveal>
        {/* Document dir=rtl already mirrors flex row — do not flex-row-reverse (double-flips). */}
        <div className="flex items-baseline gap-4">
          <span className={`shrink-0 font-montserrat text-[10px] uppercase tracking-[0.22em] ${indexColor}`}>
            {String(index).padStart(2, '0')}
          </span>
          <div className="min-w-0">
            <p className={`mb-3 font-montserrat text-[10px] uppercase tracking-[0.42em] ${labelColor}`}>
              {phase.label}
            </p>
            <h2
              id={headingId}
              className={`font-rozha text-[clamp(1.85rem,3.6vw,2.65rem)] leading-[1.05] tracking-[0.02em] ${titleColor}`}
            >
              {phase.title}
            </h2>
          </div>
        </div>
      </Reveal>

      <ol className="mt-10 space-y-0 md:mt-12">
        {phase.paragraphs.map((paragraph, i) => (
          <Reveal key={i} delay={0.08 + i * 0.07}>
            <li className={`border-t ${ruleColor} py-6 first:border-t first:pt-6 md:py-7`}>
              <p
                className={`font-montserrat text-[15px] leading-[1.95] tracking-[0.02em] md:text-[16px] md:leading-[2] ${bodyColor}`}
              >
                {paragraph}
              </p>
            </li>
          </Reveal>
        ))}
      </ol>
    </div>
  )
}

export default function CraftsmanshipClient() {
  const { t, isRTL, language } = useLanguage()
  const copy = getCraftsmanshipCopy(language)
  const mediaCopy = getCraftsmanshipMediaCopy(language)
  const MEDIA = craftMedia(mediaCopy, language as AppLocale)
  const CRAFT_VIDEOS = craftVideos(mediaCopy)
  const PHASE_II_MEDIA = phaseIiMedia(CRAFT_VIDEOS, MEDIA)
  const title = copy.breadcrumbCraftsmanship
  const eyebrow = getAboutEditorialHeroEyebrow(language)
  const description = t.about?.craftsmanshipDesc ?? ''
  const homeLabel = copy.breadcrumbHome
  const craftLabel = copy.breadcrumbCraftsmanship

  return (
    <div
      className={`${EDITORIAL_PAGE_SHELL} relative isolate min-h-screen w-full min-w-0 bg-[#1a0210] ${
 isRTL ? 'rtl' : 'ltr'
 }`}
    >
      <AboutSectionHero
        rtl={isRTL}
        imageSrc={ABOUT_SECTION_HERO_IMAGES.craftsmanship}
        imageAlt={withBrandAlt(mediaCopy.heroBannerAlt, language as AppLocale)}
        priority
        segments={[
          { label: homeLabel, href: '/home' },
          { label: craftLabel },
        ]}
        eyebrow={eyebrow}
        title={title}
        description={description || undefined}
      />

      {/* Phase I — prose + two equal frames at natural proportions (full image) */}
      <section
        className={`relative z-20 overflow-hidden bg-brand-pageCanvas ${EDITORIAL_STACK_PAD} ${EDITORIAL_STACK_CARD}`}
        aria-labelledby="phase-i"
      >
        <SectionDrift className="bg-[radial-gradient(ellipse_70%_60%_at_80%_20%,rgba(111,21,36,0.08)_0%,transparent_60%)]" />
        <div className={`relative ${EDITORIAL_PAGE_CONTAINER} ${EDITORIAL_STACK_CONTENT_PAD}`}>
          <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-14">
            <div className={`lg:col-span-5 ${isRTL ? 'lg:order-2' : ''}`}>
              <PhaseProse phase={copy.phaseI} headingId="phase-i" sticky index={1} />
            </div>
            <div
              className={`lg:col-span-7 lg:sticky lg:top-[calc(var(--site-header-height,var(--site-header-clearance,5.0625rem))+1rem)] ${
 isRTL ? 'lg:order-1' : ''
 }`}
            >
              <div
                className="grid grid-cols-2 gap-2 sm:gap-3"
                aria-label="Bint Saeed design development stills"
              >
                <Reveal delay={0.05} className="min-w-0">
                  <Post ratio="aspect-[4/5]" parallax={false}>
                    <Still src={MEDIA.pattern.src} alt={MEDIA.pattern.alt} />
                  </Post>
                </Reveal>
                <Reveal delay={0.1} className="min-w-0">
                  <Post ratio="aspect-[4/5]" parallax={false}>
                    <Still src={MEDIA.cad.src} alt={MEDIA.cad.alt} />
                  </Post>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Phase II — dark atelier + compact photo wall sized to prose */}
      <section
        className={`relative z-30 overflow-hidden bg-[#1a0210] ${EDITORIAL_STACK_PAD} ${EDITORIAL_STACK_CARD}`}
        aria-labelledby="phase-ii"
      >
        <SectionDrift className="bg-[radial-gradient(ellipse_70%_55%_at_70%_30%,rgba(111,21,36,0.32)_0%,transparent_65%)]" />
        <div className={`relative ${EDITORIAL_PAGE_CONTAINER} ${EDITORIAL_STACK_CONTENT_PAD}`}>
          <div className="relative grid items-start gap-8 lg:grid-cols-12 lg:gap-12 xl:gap-14">
            {/* Photo wall — full-width 2×3 on mobile; fills prose height on desktop */}
            <div
              className={`w-full min-w-0 lg:absolute lg:inset-y-0 lg:w-[calc(58.333%-1.75rem)] xl:w-[calc(58.333%-2rem)] ${
 isRTL ? 'lg:end-0' : 'lg:start-0'
 }`}
            >
              <div
                className="mx-auto grid w-full max-w-md grid-cols-2 gap-2 sm:max-w-lg sm:gap-2.5 lg:mx-0 lg:h-full lg:max-w-none lg:min-h-0 lg:gap-2"
                aria-label="Bint Saeed atelier making process"
              >
                {PHASE_II_MEDIA.map((item, index) => (
                  <Reveal
                    key={item.src}
                    delay={0.04 + index * 0.05}
                    className="min-h-0 min-w-0 w-full lg:h-full"
                  >
                    <Post
                      ratio="aspect-[4/5]"
                      className="h-auto w-full lg:aspect-auto lg:h-full"
                      tone="onDark"
                      invertParallax={index % 2 === 1}
                      intensity={18 + (index % 3) * 6}
                    >
                      {item.kind === 'video' ? (
                        <Film src={item.src} ariaLabel={item.ariaLabel} />
                      ) : (
                        <Still src={item.src} alt={item.alt} />
                      )}
                    </Post>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Prose sets section height on desktop */}
            <div className={`lg:col-span-5 ${isRTL ? 'lg:col-start-1' : 'lg:col-start-8'}`}>
              <PhaseProse
                phase={copy.phaseII}
                headingId="phase-ii"
                accent="clay"
                index={2}
                tone="onDark"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Phase III — prose + two equal frames at natural proportions (full image) */}
      <section
        className={`relative z-40 overflow-hidden bg-[#e8ddd4] ${EDITORIAL_STACK_PAD} ${EDITORIAL_STACK_CARD}`}
        aria-labelledby="phase-iii"
      >
        <SectionDrift className="bg-[radial-gradient(ellipse_60%_50%_at_20%_80%,rgba(111,21,36,0.1)_0%,transparent_55%)]" />
        <div className={`relative ${EDITORIAL_PAGE_CONTAINER} ${EDITORIAL_STACK_CONTENT_PAD}`}>
          <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-14">
            <div className={`lg:col-span-5 ${isRTL ? 'lg:order-2' : ''}`}>
              <PhaseProse phase={copy.phaseIII} headingId="phase-iii" sticky index={3} />
            </div>
            <div
              className={`lg:col-span-7 lg:sticky lg:top-[calc(var(--site-header-height,var(--site-header-clearance,5.0625rem))+1rem)] ${
 isRTL ? 'lg:order-1' : ''
 }`}
            >
              <div className="grid grid-cols-2 gap-2 sm:gap-3" aria-label="Bint Saeed finishing stills">
                <Reveal delay={0.05} className="min-w-0">
                  <Post ratio="aspect-[4/5]" parallax={false}>
                    <Still src={MEDIA.shearsMeasure.src} alt={MEDIA.shearsMeasure.alt} />
                  </Post>
                </Reveal>
                <Reveal delay={0.1} className="min-w-0">
                  <Post ratio="aspect-[4/5]" parallax={false}>
                    <Still src={MEDIA.textile.src} alt={MEDIA.textile.alt} />
                  </Post>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ExploreCollectionClosing from="craftsmanship" />
    </div>
  )
}
