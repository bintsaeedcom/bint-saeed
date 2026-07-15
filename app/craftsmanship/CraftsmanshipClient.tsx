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
  useTransform,
} from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1] as const

function Reveal({
  children,
  className = '',
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  const reduceMotion = useReducedMotion()
  if (reduceMotion) {
    return <div className={className}>{children}</div>
  }
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-12%' }}
      transition={{ duration: 0.75, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  )
}

/** Soft parallax portrait — same language as Giving Forward hangtag. */
function ParallaxFrame({
  children,
  className = '',
  invert = false,
}: {
  children: ReactNode
  className?: string
  invert?: boolean
}) {
  const clipRef = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: clipRef,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], invert ? [28, -36] : [-24, 32])
  const scale = useTransform(scrollYProgress, [0, 1], [1.04, 1.09])

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ duration: 0.7, delay: 0.06, ease: EASE }}
      className={className}
    >
      <div ref={clipRef} className="relative h-full w-full overflow-hidden">
        <motion.div
          style={reduceMotion ? undefined : { y, scale }}
          className="absolute inset-0 will-change-transform"
        >
          {children}
        </motion.div>
      </div>
    </motion.div>
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
} as const

/** Phase II media rhythm — video, still, video, still, video. */
const PHASE_II_MEDIA = [
  { kind: 'video' as const, src: CRAFT_VIDEOS[0].src, ariaLabel: CRAFT_VIDEOS[0].ariaLabel },
  {
    kind: 'image' as const,
    src: MEDIA.goldKnotFinishing.src,
    alt: MEDIA.goldKnotFinishing.alt,
  },
  { kind: 'video' as const, src: CRAFT_VIDEOS[1].src, ariaLabel: CRAFT_VIDEOS[1].ariaLabel },
  {
    kind: 'image' as const,
    src: MEDIA.wovenLabelStitching.src,
    alt: MEDIA.wovenLabelStitching.alt,
  },
  { kind: 'video' as const, src: CRAFT_VIDEOS[2].src, ariaLabel: CRAFT_VIDEOS[2].ariaLabel },
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
  tone = 'light',
}: {
  children: ReactNode
  className?: string
  ratio?: string
  tone?: 'light' | 'onDark'
}) {
  const frame =
    tone === 'onDark'
      ? 'bg-[rgba(232,221,212,0.08)] shadow-[0_28px_64px_-36px_rgba(0,0,0,0.55)] ring-1 ring-[#e8ddd4]/12'
      : 'bg-brand-stone/25 shadow-[0_28px_64px_-40px_rgba(42,0,18,0.18)]'
  const veil =
    tone === 'onDark'
      ? 'bg-[linear-gradient(180deg,rgba(26,2,16,0.08)_0%,transparent_40%,rgba(26,2,16,0.18)_100%)]'
      : 'bg-[linear-gradient(180deg,rgba(26,2,16,0.04)_0%,transparent_34%,rgba(26,2,16,0.06)_100%)]'

  return (
    <div className={`group relative isolate overflow-hidden ${frame} ${ratio} ${className}`}>
      {children}
      <div className={`pointer-events-none absolute inset-0 ${veil}`} aria-hidden />
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

      {/* Phase I — bone canvas + two-image collage */}
      <section
        className={`relative z-20 overflow-hidden bg-brand-pageCanvas ${EDITORIAL_STACK_PAD} ${EDITORIAL_STACK_CARD}`}
        aria-labelledby="phase-i"
      >
        <div className={`${EDITORIAL_PAGE_CONTAINER} ${EDITORIAL_STACK_CONTENT_PAD}`}>
          <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-14 xl:gap-16">
            <div className={`lg:col-span-5 ${isRTL ? 'lg:order-2' : ''}`}>
              <PhaseProse phase={copy.phaseI} headingId="phase-i" sticky index={1} />
            </div>
            <div className={`lg:col-span-7 ${isRTL ? 'lg:order-1' : ''}`}>
              <div className="relative mx-auto max-w-2xl pb-6 lg:max-w-none lg:pb-8">
                <Reveal delay={0.05}>
                  <Post
                    ratio="aspect-[4/5] sm:aspect-[3/4]"
                    className={`w-[78%] sm:w-[74%] ${isRTL ? 'ms-auto' : ''}`}
                  >
                    <ParallaxFrame className="absolute inset-0" invert={isRTL}>
                      <Still src={MEDIA.pattern.src} alt={MEDIA.pattern.alt} />
                    </ParallaxFrame>
                  </Post>
                </Reveal>

                <Reveal delay={0.12} className="contents">
                  <Post
                    ratio="aspect-[3/4]"
                    className={`absolute bottom-0 z-10 w-[46%] max-w-[260px] shadow-[0_32px_70px_-36px_rgba(42,0,18,0.35)] sm:w-[42%] sm:max-w-none ${
                      isRTL ? 'start-0' : 'end-0'
                    }`}
                  >
                    <ParallaxFrame className="absolute inset-0" invert={!isRTL}>
                      <Still src={MEDIA.cad.src} alt={MEDIA.cad.alt} />
                    </ParallaxFrame>
                  </Post>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Phase II — dark atelier pulse + hierarchical films */}
      <section
        className={`relative z-30 overflow-hidden bg-[#1a0210] ${EDITORIAL_STACK_PAD} ${EDITORIAL_STACK_CARD}`}
        aria-labelledby="phase-ii"
      >
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_70%_30%,rgba(111,21,36,0.28)_0%,transparent_65%)]"
          aria-hidden
        />
        <div className={`relative ${EDITORIAL_PAGE_CONTAINER} ${EDITORIAL_STACK_CONTENT_PAD}`}>
          <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-14 xl:gap-16">
            <div className={`lg:col-span-5 ${isRTL ? 'lg:order-1' : 'lg:order-2'}`}>
              <PhaseProse
                phase={copy.phaseII}
                headingId="phase-ii"
                accent="clay"
                sticky
                index={2}
                tone="onDark"
              />
            </div>
            <div className={`lg:col-span-7 ${isRTL ? 'lg:order-2' : 'lg:order-1'}`}>
              <div
                className="flex flex-col gap-3 sm:gap-4"
                aria-label="Bint Saeed atelier making process"
              >
                {PHASE_II_MEDIA.map((item, index) => {
                  const offset =
                    item.kind === 'image'
                      ? isRTL
                        ? 'sm:ms-0 sm:me-[8%] sm:w-[92%]'
                        : 'sm:ms-[8%] sm:w-[92%]'
                      : isRTL
                        ? 'sm:ms-[8%] sm:w-[92%]'
                        : 'sm:me-[8%] sm:w-[92%]'
                  return (
                    <Reveal
                      key={item.kind === 'video' ? item.src : item.src}
                      delay={0.05 + index * 0.06}
                      className={`min-w-0 ${offset}`}
                    >
                      <Post ratio="aspect-[4/5] sm:aspect-[3/4]" tone="onDark">
                        {item.kind === 'video' ? (
                          <Film src={item.src} ariaLabel={item.ariaLabel} />
                        ) : (
                          <Still src={item.src} alt={item.alt} />
                        )}
                      </Post>
                    </Reveal>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Phase III — clay chapter + textile + shears */}
      <section
        className={`relative z-40 overflow-hidden bg-[#e8ddd4] ${EDITORIAL_STACK_PAD} ${EDITORIAL_STACK_CARD}`}
        aria-labelledby="phase-iii"
      >
        <div className={`${EDITORIAL_PAGE_CONTAINER} ${EDITORIAL_STACK_CONTENT_PAD}`}>
          <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-14 xl:gap-16">
            <div className={`lg:col-span-5 ${isRTL ? 'lg:order-2' : ''}`}>
              <PhaseProse phase={copy.phaseIII} headingId="phase-iii" sticky index={3} />
            </div>
            <div className={`lg:col-span-7 ${isRTL ? 'lg:order-1' : ''}`}>
              <div className="grid grid-cols-12 gap-3 sm:gap-4 lg:sticky lg:top-[calc(var(--site-header-height,8.75rem)+1rem)]">
                <Reveal delay={0.06} className="col-span-7 min-w-0">
                  <div className="relative flex aspect-[3/4] w-full items-center justify-center overflow-hidden bg-brand-pageCanvas/70 shadow-[0_28px_64px_-40px_rgba(42,0,18,0.2)]">
                    <Image
                      src={MEDIA.shearsMeasure.src}
                      alt={MEDIA.shearsMeasure.alt}
                      title={MEDIA.shearsMeasure.title}
                      width={1024}
                      height={1146}
                      sizes="(min-width: 1024px) 28vw, 55vw"
                      className="h-auto max-h-full w-full object-contain object-center p-4 sm:p-6"
                      priority={false}
                    />
                  </div>
                </Reveal>
                <Reveal delay={0.14} className="col-span-5 min-w-0 self-end">
                  <Post ratio="aspect-[3/4]">
                    <Still
                      src={MEDIA.textile.src}
                      alt={MEDIA.textile.alt}
                      objectPosition="object-[center_22%]"
                    />
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
          src="/craftsmanship/bint-saeed-abu-dhabi-explore-collection-editorial-texture.webp"
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
                <Post ratio="aspect-[3/4]">
                  <Still src={item.src} alt={item.alt} />
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
