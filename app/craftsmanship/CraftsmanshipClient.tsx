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
  EDITORIAL_STACK_CLOSING_PAD,
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

/** Phase title + paragraphs — Giving Forward chapter cadence, copy unchanged. */
function PhaseProse({
  phase,
  headingId,
  accent = 'dusty',
  sticky = false,
  index = 1,
}: {
  phase: CraftsmanshipPhaseCopy
  headingId: string
  accent?: 'dusty' | 'clay'
  sticky?: boolean
  index?: number
}) {
  const { isRTL } = useLanguage()
  const labelColor = accent === 'clay' ? 'text-brand-clayRed/90' : 'text-brand-dustyBlue'
  const stickyClass = sticky
    ? 'lg:sticky lg:top-[calc(var(--site-header-height,8.75rem)+1rem)]'
    : ''

  return (
    <div className={`max-w-xl ${stickyClass} ${isRTL ? 'ms-auto text-right' : ''}`}>
      <Reveal>
        <div className={`flex items-baseline gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
          <span className="shrink-0 font-montserrat text-[10px] uppercase tracking-[0.22em] text-brand-dustyBlue">
            {String(index).padStart(2, '0')}
          </span>
          <div className="min-w-0">
            <p className={`mb-3 font-montserrat text-[10px] uppercase tracking-[0.42em] ${labelColor}`}>
              {phase.label}
            </p>
            <h2
              id={headingId}
              className="font-rozha text-[clamp(1.85rem,3.6vw,2.65rem)] leading-[1.05] tracking-[0.02em] text-brand-darkRed"
            >
              {phase.title}
            </h2>
          </div>
        </div>
      </Reveal>

      <ol className="mt-10 space-y-0 md:mt-12">
        {phase.paragraphs.map((paragraph, i) => (
          <Reveal key={i} delay={0.08 + i * 0.07}>
            <li className="border-t border-brand-darkRed/12 py-6 first:border-t first:pt-6 md:py-7">
              <p className="font-montserrat text-[15px] leading-[1.95] tracking-[0.02em] text-brand-darkRed/[0.88] md:text-[16px] md:leading-[2]">
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

      {/* Opening — full-bleed label still with soft reveal */}
      <section
        className={`relative z-10 overflow-hidden bg-brand-pageCanvas ${EDITORIAL_STACK_PAD} ${EDITORIAL_STACK_CARD}`}
        aria-label="Bint Saeed atelier finishing"
      >
        <div className={`${EDITORIAL_PAGE_CONTAINER} ${EDITORIAL_STACK_CONTENT_PAD}`}>
          <ParallaxFrame
            invert={isRTL}
            className="relative isolate h-[min(72vw,340px)] w-full overflow-hidden bg-brand-stone/25 shadow-[0_28px_64px_-40px_rgba(42,0,18,0.18)] sm:h-[min(48vw,400px)] md:h-[min(38vw,460px)]"
          >
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
          </ParallaxFrame>
        </div>
      </section>

      {/* Phase I — prose left / media right (Giving Forward split) */}
      <section
        className={`relative z-20 overflow-hidden bg-[#f7f3ec] ${EDITORIAL_STACK_PAD} ${EDITORIAL_STACK_CARD}`}
        aria-labelledby="phase-i"
      >
        <div className={`${EDITORIAL_PAGE_CONTAINER} ${EDITORIAL_STACK_CONTENT_PAD}`}>
          <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-16">
            <div className={`lg:col-span-5 ${isRTL ? 'lg:order-2' : ''}`}>
              <PhaseProse phase={copy.phaseI} headingId="phase-i" sticky index={1} />
            </div>
            <div className={`lg:col-span-7 ${isRTL ? 'lg:order-1' : ''}`}>
              <div className="grid grid-cols-12 gap-3 md:gap-4">
                <div className="col-span-7 flex flex-col gap-3 md:col-span-6 md:gap-4">
                  <Reveal delay={0.06}>
                    <Post ratio="aspect-[3/4]">
                      <ParallaxFrame className="absolute inset-0" invert={isRTL}>
                        <Still src={MEDIA.cad.src} alt={MEDIA.cad.alt} />
                      </ParallaxFrame>
                    </Post>
                  </Reveal>
                  <Reveal delay={0.14}>
                    <Post ratio="aspect-[5/4] md:aspect-[16/10]">
                      <Still
                        src={MEDIA.textile.src}
                        alt={MEDIA.textile.alt}
                        objectPosition="object-[center_22%]"
                      />
                    </Post>
                  </Reveal>
                </div>
                <div className="col-span-5 md:col-span-6">
                  <Reveal delay={0.1}>
                    <Post ratio="aspect-[3/4] md:aspect-auto md:h-full md:min-h-[28rem]">
                      <ParallaxFrame className="absolute inset-0" invert={!isRTL}>
                        <Still src={MEDIA.pattern.src} alt={MEDIA.pattern.alt} />
                      </ParallaxFrame>
                    </Post>
                  </Reveal>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Phase II — prose left / films right */}
      <section
        className={`relative z-30 overflow-hidden bg-brand-pageCanvas ${EDITORIAL_STACK_PAD} ${EDITORIAL_STACK_CARD}`}
        aria-labelledby="phase-ii"
      >
        <div className={`${EDITORIAL_PAGE_CONTAINER} ${EDITORIAL_STACK_CONTENT_PAD}`}>
          <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-16">
            <div className={`lg:col-span-5 ${isRTL ? 'lg:order-2' : ''}`}>
              <PhaseProse phase={copy.phaseII} headingId="phase-ii" accent="clay" sticky index={2} />
            </div>
            <div className={`lg:col-span-7 ${isRTL ? 'lg:order-1' : ''}`}>
              <div
                className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 lg:sticky lg:top-[calc(var(--site-header-height,8.75rem)+1rem)]"
                aria-label="Bint Saeed atelier process films"
              >
                {CRAFT_VIDEOS.map((video, index) => (
                  <Reveal key={video.src} delay={0.08 + index * 0.08} className="min-w-0">
                    <Post ratio="aspect-[3/4]">
                      <Film src={video.src} ariaLabel={video.ariaLabel} />
                    </Post>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Phase III — chapter stack */}
      <section
        className={`relative z-40 overflow-hidden bg-[linear-gradient(180deg,#f7f3ec_0%,#efe9df_55%,#e8e2d8_100%)] ${EDITORIAL_STACK_PAD} ${EDITORIAL_STACK_CARD}`}
        aria-labelledby="phase-iii"
      >
        <div className={`${EDITORIAL_PAGE_CONTAINER} ${EDITORIAL_STACK_CONTENT_PAD}`}>
          <PhaseProse phase={copy.phaseIII} headingId="phase-iii" index={3} />
        </div>
      </section>

      {/* Finishing details — 3 portrait stills + Discover More */}
      <section
        className={`relative z-[45] overflow-hidden bg-brand-pageCanvas ${EDITORIAL_STACK_PAD} ${EDITORIAL_STACK_CARD}`}
        aria-label="Bint Saeed garment finishing details"
      >
        <div className={`${EDITORIAL_PAGE_CONTAINER} ${EDITORIAL_STACK_CONTENT_PAD}`}>
          <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4">
            {DETAIL_TRIO.map((item, index) => (
              <Reveal key={item.src} delay={index * 0.08} className="min-w-0">
                <Post ratio="aspect-[3/4]">
                  <Still src={item.src} alt={item.alt} />
                </Post>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}>
            <div className={`mt-10 flex justify-center md:mt-12 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <LocaleLink
                href="/shop?from=craftsmanship-details"
                className="inline-flex min-h-[48px] items-center justify-center gap-3 rounded-[4px] border border-brand-darkRed/25 bg-transparent px-9 py-3.5 font-montserrat text-[11px] uppercase tracking-[0.2em] text-brand-darkRed transition-colors hover:border-brand-darkRed hover:bg-brand-darkRed hover:text-[#e8ddd4]"
                data-cursor-hover
              >
                {copy.discoverMore}
                <FiArrowRight className={`h-4 w-4 ${isRTL ? 'rotate-180' : ''}`} />
              </LocaleLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Closing atelier still — zoomed out */}
      <section
        className={`relative z-[50] overflow-hidden bg-[#f7f3ec] ${EDITORIAL_STACK_PAD} ${EDITORIAL_STACK_CARD}`}
        aria-label={MEDIA.shearsMeasure.alt}
      >
        <div className={`${EDITORIAL_PAGE_CONTAINER} ${EDITORIAL_STACK_CONTENT_PAD}`}>
          <Reveal>
            <div className="relative mx-auto flex min-h-[42vw] w-full max-w-5xl items-center justify-center overflow-hidden bg-brand-pageCanvas shadow-[0_28px_64px_-40px_rgba(42,0,18,0.16)] sm:min-h-[36vw] lg:min-h-[420px]">
              <Image
                src={MEDIA.shearsMeasure.src}
                alt={MEDIA.shearsMeasure.alt}
                title={MEDIA.shearsMeasure.title}
                width={1024}
                height={1146}
                sizes="(min-width: 1024px) 56vw, 92vw"
                className="h-auto max-h-[min(70vh,560px)] w-full object-contain object-center p-4 sm:p-8 md:p-10"
                priority={false}
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section
        className={`relative z-[60] overflow-hidden ${EDITORIAL_STACK_CLOSING_PAD} ${EDITORIAL_STACK_CARD}`}
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
        <div className={`relative mx-auto flex max-w-lg flex-col items-center text-center ${EDITORIAL_STACK_CONTENT_PAD}`}>
          <Reveal>
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
          </Reveal>
        </div>
      </section>
    </div>
  )
}
