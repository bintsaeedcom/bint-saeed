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
  EDITORIAL_PAGE_SHELL,
  EDITORIAL_STACK_CARD,
  EDITORIAL_STACK_CONTENT_PAD,
  EDITORIAL_STACK_PAD,
} from '@/lib/ui/editorialPageChrome'
import { FiArrowRight } from 'react-icons/fi'
import { withBrandAlt } from '@/lib/products/imageAlt'
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
  cad: {
    src: '/craftsmanship/bint-saeed-abu-dhabi-craftsmanship-phase-i-cad-pattern.webp',
    alt: withBrandAlt(
      'CAD abaya pattern on screen during Phase I development — technical construction resolved before cutting',
      'en',
    ),
  },
  pattern: {
    src: '/craftsmanship/bint-saeed-abu-dhabi-craftsmanship-phase-i-pattern-drawing.webp',
    alt: withBrandAlt(
      'Hands drafting an abaya pattern with pencil and ruler during Phase I development',
      'en',
    ),
  },
  textile: {
    src: '/craftsmanship/bint-saeed-abu-dhabi-craftsmanship-phase-iii-textile-thread.webp',
    alt: withBrandAlt(
      'Hands guiding thread at the atelier machine during Phase III direction and finishing',
      'en',
    ),
  },
  shearsMeasure: {
    src: '/craftsmanship/bint-saeed-abu-dhabi-craftsmanship-phase-iii-shears-measure.webp',
    alt: withBrandAlt(
      'Atelier shears and measuring tape cutting fabric during Phase III direction',
      'en',
    ),
  },
  goldKnotFinishing: {
    src: '/craftsmanship/bint-saeed-abu-dhabi-craftsmanship-atelier-gold-knot-strand-finishing.png',
    alt: withBrandAlt(
      'Atelier finishing of a gold knot charm on a black beaded strand with gloved hands',
      'en',
    ),
  },
  wovenLabelStitching: {
    src: '/craftsmanship/bint-saeed-abu-dhabi-craftsmanship-woven-label-hand-stitching.png',
    alt: withBrandAlt(
      'Hand sewing a Bint Saeed Abu Dhabi woven label into a luxury garment',
      'en',
    ),
  },
  goldKnottedChain: {
    src: '/craftsmanship/bint-saeed-abu-dhabi-craftsmanship-gold-knotted-chain-detail.png',
    alt: withBrandAlt(
      'Polished gold knotted chain links — atelier jewellery craftsmanship detail',
      'en',
    ),
  },
} as const

/** Phase II photo wall — video / still alternating; row 3 = video left, chain right. */
const PHASE_II_MEDIA = [
  { kind: 'video' as const, src: CRAFT_VIDEOS[0].src, ariaLabel: CRAFT_VIDEOS[0].ariaLabel },
  {
    kind: 'image' as const,
    src: MEDIA.goldKnotFinishing.src,
    alt: MEDIA.goldKnotFinishing.alt,
  },
  {
    kind: 'image' as const,
    src: MEDIA.wovenLabelStitching.src,
    alt: MEDIA.wovenLabelStitching.alt,
  },
  { kind: 'video' as const, src: CRAFT_VIDEOS[1].src, ariaLabel: CRAFT_VIDEOS[1].ariaLabel },
  { kind: 'video' as const, src: CRAFT_VIDEOS[2].src, ariaLabel: CRAFT_VIDEOS[2].ariaLabel },
  {
    kind: 'image' as const,
    src: MEDIA.goldKnottedChain.src,
    alt: MEDIA.goldKnottedChain.alt,
  },
] as const

/** Portrait craft finishes — label centered between embroidery + stitch details. */
const DETAIL_TRIO = [
  {
    src: '/craftsmanship/details/bint-saeed-abu-dhabi-luxury-abaya-gold-embroidery-jewel-cuff-detail.webp',
    alt: withBrandAlt(
      'Luxury abaya gold embroidery and jewel cuff detail on black fabric',
      'en',
    ),
  },
  {
    src: '/craftsmanship/details/bint-saeed-abu-dhabi-hampstead-dress-woven-label-abu-dhabi-detail.webp',
    alt: withBrandAlt(
      'Bint Saeed woven brand label Abu Dhabi on black Hampstead dress interior',
      'en',
    ),
  },
  {
    src: '/craftsmanship/details/bint-saeed-abu-dhabi-hampstead-dress-gold-al-talli-stitch-detail.webp',
    alt: withBrandAlt(
      'Gold Al Talli stitch detail on black Hampstead dress fabric',
      'en',
    ),
  },
] as const

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
    ? 'lg:sticky lg:top-[calc(var(--site-header-height,8.75rem)+1rem)]'
    : ''

  return (
    <div className={`max-w-xl ${stickyClass} ${isRTL ? 'ms-auto text-right' : ''}`}>
      <Reveal>
        <div className={`flex items-baseline gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
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
  const title = language === 'id' ? copy.breadcrumbCraftsmanship : (t.footer?.craftsmanship ?? 'Craftsmanship')
  const eyebrow = getAboutEditorialHeroEyebrow(language)
  const description = t.about?.craftsmanshipDesc ?? ''
  const homeLabel = language === 'id' ? copy.breadcrumbHome : isRTL ? 'الرئيسية' : 'Home'
  const craftLabel = language === 'id' ? copy.breadcrumbCraftsmanship : isRTL ? 'الحرفية' : 'Craftsmanship'

  return (
    <div
      className={`${EDITORIAL_PAGE_SHELL} relative isolate min-h-screen w-full min-w-0 bg-[#1a0210] ${
        isRTL ? 'rtl' : 'ltr'
      }`}
    >
      <AboutSectionHero
        rtl={isRTL}
        imageSrc={ABOUT_SECTION_HERO_IMAGES.craftsmanship}
        imageAlt={withBrandAlt('Craftsmanship editorial banner', language === 'ar' ? 'ar' : 'en')}
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
              className={`lg:col-span-7 lg:sticky lg:top-[calc(var(--site-header-height,8.75rem)+1rem)] ${
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
            {/* Photo wall — fills prose height on desktop, never taller */}
            <div
              className={`lg:absolute lg:inset-y-0 lg:w-[calc(58.333%-1.75rem)] xl:w-[calc(58.333%-2rem)] ${
                isRTL ? 'lg:end-0' : 'lg:start-0'
              }`}
            >
              <div
                className="grid grid-cols-2 grid-rows-3 gap-1.5 sm:gap-2 lg:h-full lg:min-h-0"
                aria-label="Bint Saeed atelier making process"
              >
                {PHASE_II_MEDIA.map((item, index) => (
                  <Reveal
                    key={item.src}
                    delay={0.04 + index * 0.05}
                    className="h-full min-h-0 min-w-0"
                  >
                    <Post
                      ratio=""
                      className="aspect-[4/5] h-full max-h-[9.75rem] sm:max-h-[11rem] lg:aspect-auto lg:max-h-none"
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
              className={`lg:col-span-7 lg:sticky lg:top-[calc(var(--site-header-height,8.75rem)+1rem)] ${
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

      <section
        className={`relative z-[50] overflow-hidden pt-10 pb-16 sm:pt-12 sm:pb-20 md:pt-14 md:pb-24 ${EDITORIAL_STACK_CARD}`}
        aria-label="Bint Saeed garment finishing details"
      >
        <Image
          src="/craftsmanship/bint-saeed-abu-dhabi-explore-collection-organic-texture.png"
          alt={withBrandAlt(
            'Explore the Bint Saeed collection — editorial fabric texture background for luxury abayas',
            language === 'ar' ? 'ar' : 'en',
          )}
          title="Explore the collection — Bint Saeed Abu Dhabi"
          fill
          sizes="100vw"
          className="pointer-events-none object-cover object-center"
          priority={false}
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(26,2,16,0.72)_0%,rgba(42,8,22,0.55)_42%,rgba(26,2,16,0.82)_100%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(111,21,36,0.22)_0%,transparent_70%)]"
          aria-hidden
        />
        <div className="relative mx-auto w-full min-w-0 max-w-[1280px] px-4 pb-8 sm:px-6 sm:pb-10 lg:px-12 md:pb-12">
          <Reveal>
            <p className="mb-7 text-center font-rozha text-[clamp(1.75rem,4vw,2.5rem)] tracking-[0.02em] text-[#e8ddd4] md:mb-8">
              {copy.ctaHeading}
            </p>
          </Reveal>

          <div className="mx-auto grid max-w-5xl grid-cols-3 gap-2 sm:gap-3 md:gap-4">
            {DETAIL_TRIO.map((item, index) => (
              <Reveal key={item.src} delay={index * 0.08} className="min-w-0">
                <Post
                  ratio="aspect-[3/4]"
                  tone="onDark"
                  parallax={false}
                  className="bg-[#2a0a14]"
                >
                  <Still
                    src={item.src}
                    alt={item.alt}
                    className="!object-contain object-center p-1 sm:p-1.5"
                  />
                </Post>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className={`mt-8 flex justify-center md:mt-10 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <LocaleLink
                href="/shop?from=craftsmanship"
                className="inline-flex min-h-[52px] items-center justify-center gap-3 rounded-[4px] border border-[#e8ddd4]/45 bg-[#e8ddd4]/10 px-10 py-4 font-montserrat text-xs uppercase tracking-[0.22em] text-[#e8ddd4] shadow-[0_18px_48px_-28px_rgba(0,0,0,0.45)] backdrop-blur-[2px] transition-colors hover:border-[#e8ddd4]/80 hover:bg-[#e8ddd4] hover:text-brand-darkRed"
                data-cursor-hover
              >
                {copy.discoverMore}
                <FiArrowRight className={`h-4 w-4 ${isRTL ? 'rotate-180' : ''}`} />
              </LocaleLink>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
