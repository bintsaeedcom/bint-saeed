'use client'

import { useRef, useState, useEffect, useLayoutEffect } from 'react'
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useReducedMotion,
  useMotionValue,
  useSpring,
} from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import LocaleLink from '@/components/LocaleLink'
import NoTranslate from '@/components/NoTranslate'
import Image from 'next/image'
import { FiArrowRight } from 'react-icons/fi'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { commerceUi } from '@/lib/i18n/commerceUi'
import { getHomeEditorialCopy } from '@/lib/i18n/homeEditorialCopyI18n'
import { localizedColorName } from '@/lib/products/imageAltI18n'
import { products as staticProducts } from '@/data/products'
import { getProductHref, getProductSlug } from '@/lib/products/links'
import { getProductImageAlt, withBrandAlt } from '@/lib/products/imageAlt'
import { CODES_IMAGE_FILES, codesPageImagePath } from '@/lib/the-codes/codesPageContent'
import { HOME_STORY_CODE_HREFS } from '@/lib/the-codes/homeStoryCodeHrefs'
import { ctaPrimary } from '@/lib/ui/ctaClasses'
import { PRODUCT_GRID_COLOUR_DOT, PRODUCT_GRID_COLOUR_DOT_ON_DARK, softGridColourBeadStyle } from '@/lib/ui/productGridColourDot'
import type { Product } from '@/data/products'
import type { AppLocale } from '@/lib/i18n/routing'

/** Corner brackets / full-bleed grid stripes removed — typography uses border-s + border-b on copy only (see hero). */
function DecorativeCorners(_props?: { color?: 'dustyBlue' | 'darkRed' | 'stone' }) {
  return null
}

function SectionStripes(_props?: { variant?: 'default' | 'hero' | 'soft' | 'bold' }) {
  return null
}

function MagneticWrap({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  const reduceMotion = useReducedMotion()
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 240, damping: 18, mass: 0.35 })
  const springY = useSpring(y, { stiffness: 240, damping: 18, mass: 0.35 })

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    if (reduceMotion) return
    const r = e.currentTarget.getBoundingClientRect()
    const relX = (e.clientX - r.left) / r.width - 0.5
    const relY = (e.clientY - r.top) / r.height - 0.5
    x.set(relX * 8)
    y.set(relY * 7)
  }

  function reset() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      style={reduceMotion ? undefined : { x: springX, y: springY }}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      onBlur={reset}
      className={className}
    >
      {children}
    </motion.div>
  )
}

function SafeCarouselImage({
  src,
  alt,
  className,
  sizes,
}: {
  src: string
  alt: string
  className: string
  sizes: string
}) {
  const fallbackSrc = '/collection-section/1.png'
  const [resolvedSrc, setResolvedSrc] = useState(src || fallbackSrc)

  useEffect(() => {
    setResolvedSrc(src || fallbackSrc)
  }, [src])

  return (
    <Image
      src={resolvedSrc}
      alt={withBrandAlt(alt)}
      fill
      sizes={sizes}
      className={className}
      aria-hidden
      onError={() => {
        if (resolvedSrc !== fallbackSrc) setResolvedSrc(fallbackSrc)
      }}
    />
  )
}

function ScrollMaskImage({
  src,
  alt,
  sizes,
  className = '',
}: {
  src: string
  alt: string
  sizes: string
  className?: string
}) {
  const ref = useRef<HTMLDivElement | null>(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 95%', 'end 15%'],
  })
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.08, 1])
  const imageY = useTransform(scrollYProgress, [0, 1], [22, -10])
  const veilOpacity = useTransform(scrollYProgress, [0, 0.3, 1], [0.28, 0.05, 0])

  return (
    <div ref={ref} className={`relative h-full w-full overflow-hidden ${className}`}>
      <motion.div
        style={reduceMotion ? undefined : { y: imageY, scale: imageScale }}
        className="pointer-events-none absolute inset-0 will-change-transform"
      >
        <div className="relative h-full w-full">
          <Image src={src} alt={withBrandAlt(alt)} fill sizes={sizes} className="object-cover" />
        </div>
      </motion.div>
      <motion.div
        style={reduceMotion ? undefined : { opacity: veilOpacity }}
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/18 via-transparent to-brand-darkRed/12 mix-blend-screen"
      />
    </div>
  )
}

function isWebshopPicture(src: string) {
  return src.startsWith('/Webshop pictures/')
}

function collectionImageSrc(src: string) {
  return isWebshopPicture(src) ? encodeURI(src) : src
}

function CollectionCardVisual({
  images,
  label,
}: {
  images: readonly string[]
  label: string
}) {
  const [isHovered, setIsHovered] = useState(false)
  const activeIndex = isHovered && images.length > 1 ? 1 : 0

  return (
    <div
      className="relative aspect-[3/4] overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-[1.03]">
        {images.map((src, index) => (
          <Image
            key={src}
            src={collectionImageSrc(src)}
            alt={withBrandAlt(`Bint Saeed ${label}`)}
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            unoptimized={isWebshopPicture(src)}
            loading="eager"
            className={`pointer-events-none object-cover object-center ${
              index === activeIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--color-sovereign)]/62 via-[var(--color-sovereign)]/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 z-[2] p-4 md:p-5">
        <h3 className="font-rozha text-xl text-white md:text-2xl">
          {label}
        </h3>
      </div>
    </div>
  )
}

/** Preview manifesto (EditorialIntro) — copy from homeEditorialCopyI18n */
/** Magazine grid — collection assets in public/collection-section/ (no spaces in path) */
const SUMMER_ELEGANCE_SLIDES = [
  '/collection-section/67.png',
  '/collection-section/68.png',
] as const

const ESSENTIALS_SLIDES = [
  '/collection-section/2.PNG',
  '/collection-section/3.JPG',
  '/collection-section/5.jpg',
] as const

const SLIDE_INTERVAL_MS = 6500

type CollectionCrossfadeProps = {
  slides: readonly string[]
  altForIndex: (i: number) => string
}

/** Stacked crossfade via CSS opacity (avoids Framer on image stack — fewer runtime issues). */
function CollectionCrossfadeSlideshow({ slides, altForIndex }: CollectionCrossfadeProps) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (slides.length < 2) return
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length)
    }, SLIDE_INTERVAL_MS)
    return () => window.clearInterval(id)
  }, [slides.length])

  if (slides.length === 0) {
    return (
      <div className="relative h-full w-full min-h-[12rem] bg-[#0a0608]" aria-hidden />
    )
  }

  return (
    <div className="relative h-full w-full min-h-[12rem] overflow-hidden bg-[#0a0608] pointer-events-none">
      {slides.map((src, i) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-[1450ms] ease-[cubic-bezier(0.33,0,0.2,1)] ${
            i === index ? 'z-[2] opacity-100' : 'z-[1] opacity-0'
          }`}
          style={{ pointerEvents: 'none' }}
          aria-hidden={i !== index}
        >
          <Image
            src={src}
            alt={withBrandAlt(altForIndex(i))}
            fill
            sizes="(max-width: 768px) 50vw, 42vw"
            className="object-cover object-center"
            priority={i === 0}
          />
        </div>
      ))}
    </div>
  )
}

const HOUSE_MOTION_EASE = 'power3.out'
const HOUSE_REVEAL_DURATION = 0.9
const HOUSE_MASK_DURATION = 1.15
const HOUSE_CURTAIN_DURATION = 1.1
const OVERLAP_PANEL_CLASS = 'relative z-10 -mt-4 md:-mt-6 lg:-mt-8'

export default function Home() {
  const { isRTL } = useLanguage()

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return

    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray<HTMLElement>('[data-story-section]')
      sections.forEach((section) => {
        // Hero must never be GSAP-hidden — mobile ScrollTrigger misses can leave a black screen
        if (section.hasAttribute('data-hero-section')) return

        const revealTargets = section.querySelectorAll<HTMLElement>('[data-reveal]')
        if (!revealTargets.length) return

        const rect = section.getBoundingClientRect()
        const alreadyInView = rect.top < window.innerHeight * 0.92 && rect.bottom > 0

        if (alreadyInView) {
          gsap.fromTo(
            revealTargets,
            { autoAlpha: 0, y: 18 },
            {
              autoAlpha: 1,
              y: 0,
              duration: HOUSE_REVEAL_DURATION,
              ease: HOUSE_MOTION_EASE,
              stagger: 0.08,
              immediateRender: false,
            },
          )
          return
        }

        gsap.fromTo(
          revealTargets,
          { autoAlpha: 0, y: 24 },
          {
            autoAlpha: 1,
            y: 0,
            duration: HOUSE_REVEAL_DURATION,
            ease: HOUSE_MOTION_EASE,
            stagger: 0.11,
            scrollTrigger: {
              trigger: section,
              start: 'top 92%',
              once: true,
              invalidateOnRefresh: true,
            },
          },
        )
      })

      const collectionMask = document.querySelector<HTMLElement>('[data-collection-image-mask]')
      if (collectionMask) {
        gsap.fromTo(
          collectionMask,
          { clipPath: 'inset(0 0 100% 0 round 16px)' },
          {
            clipPath: 'inset(0 0 0% 0 round 16px)',
            duration: HOUSE_MASK_DURATION,
            ease: HOUSE_MOTION_EASE,
            scrollTrigger: {
              trigger: collectionMask,
              start: 'top 80%',
              invalidateOnRefresh: true,
            },
          },
        )
      }

      const curtainSection = document.querySelector<HTMLElement>('[data-curtain-reveal]')
      if (curtainSection) {
        const panel = curtainSection.querySelector<HTMLElement>('.rounded-2xl')
        if (panel) {
          gsap.fromTo(
            panel,
            { clipPath: 'inset(100% 0 0 0 round 16px)', y: 30, autoAlpha: 0.4 },
            {
              clipPath: 'inset(0% 0 0 0 round 16px)',
              y: 0,
              autoAlpha: 1,
              duration: HOUSE_CURTAIN_DURATION,
              ease: HOUSE_MOTION_EASE,
              scrollTrigger: {
                trigger: curtainSection,
                start: 'top 78%',
                invalidateOnRefresh: true,
              },
            },
          )
        }
      }
    })

    const refresh = () => ScrollTrigger.refresh()
    window.addEventListener('load', refresh, { once: true })
    window.addEventListener('orientationchange', refresh)
    requestAnimationFrame(refresh)

    return () => {
      window.removeEventListener('orientationchange', refresh)
      ctx.revert()
    }
  }, [])
  
  return (
    <div className={`relative min-h-0 overflow-x-clip ${isRTL ? 'rtl' : 'ltr'}`}>
      <HeroSection />
      <MagazineGrid />
      <CharmHeroFeatureSection />
      <QuickShopCarousel />
      <CharmHeroFeatureSectionMirror />
      <EditorialIntro />
      <EditorialSplit />
      <CampaignPanoramaSection />
    </div>
  )
}

function ThreePillarsBar() {
  const { language, isRTL } = useLanguage()
  const copy = getHomeEditorialCopy(language)

  return (
    <section data-story-section className="section-full relative bg-[#e8ddd4] py-5 md:py-6">
      <div className="section-inner">
        <div className={`grid gap-3 md:grid-cols-3 ${isRTL ? 'text-right' : ''}`}>
          {copy.pillars.map((pillar, idx) => (
            <div
              key={pillar.title}
              data-reveal
              className={`rounded-xl border px-4 py-4 md:px-5 ${
                idx === 1
                  ? 'border-[#6f1524] bg-[#6f1524] text-[#e8d8c8]'
                  : 'border-[color:var(--color-muted)]/20 bg-[#e8ddd4]'
              }`}
            >
              <p className={`font-montserrat text-[11px] font-medium uppercase tracking-[0.15em] ${idx === 1 ? 'text-[#e8d8c8]' : 'text-brand-dustyBlue'}`}>
                {pillar.title}
              </p>
              <p className={`mt-2 font-montserrat text-[12px] leading-relaxed tracking-[0.02em] ${idx === 1 ? 'text-[#e8d8c8]' : 'text-[var(--color-ink)]/82'}`}>
                {pillar.copy}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const HOME_STRANDS_FEATURE_IMAGES = {
  panelBg: '/home/strands-feature/bint-saeed-home-strands-panel-bg.webp',
  hero: '/home/strands-feature/bint-saeed-home-strands-feature.webp',
} as const

/** Home media — structured under /public/home; WebP preferred, originals kept beside + at legacy paths. */
const HOME_MEDIA = {
  heroMobile: '/home/hero/mobile/bint-saeed-home-hero-mobile-burgundy-collection.webp',
  heroDesktop: '/home/hero/desktop/bint-saeed-home-hero-desktop-editorial-abayas.webp',
  personalisationHiddenPocket: '/home/personalisation/bint-saeed-home-personalisation-hidden-pocket.webp',
  panelBackground: '/home/backgrounds/bint-saeed-home-panel-background-01.webp',
  editorialGazelles: '/home/editorial/bint-saeed-home-editorial-abu-dhabi-gazelles.webp',
  editorialManifestoPortrait: '/home/editorial/bint-saeed-home-editorial-manifesto-portrait.webp',
} as const

const HOME_PERSONALISATION_FEATURE_IMAGE = HOME_MEDIA.personalisationHiddenPocket

const DARK_PANEL_BG_LAYERS = (
  <>
    <div className="absolute inset-0 opacity-25">
      <Image
        src={HOME_MEDIA.panelBackground}
        alt=""
        fill
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="object-cover object-center"
        aria-hidden
      />
    </div>
    <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(114,32,48,0.44)_0%,rgba(114,32,48,0.18)_45%,rgba(114,32,48,0.28)_100%)]" />
    <div className="absolute inset-0 bg-gradient-to-r from-[#1a0210]/96 via-[#1a0210]/88 to-[#1a0210]/80" />
  </>
)

function CharmHeroFeatureSection() {
  const { language, isRTL } = useLanguage()
  const copy = getHomeEditorialCopy(language)

  return (
    <section data-story-section className={`${OVERLAP_PANEL_CLASS} w-full overflow-hidden bg-transparent px-0 py-0`}>
      <div className="grid min-h-[68vh] w-full max-w-none items-stretch lg:grid-cols-2">
          <div className={`relative flex items-center bg-[#1a0210] p-6 md:p-10 lg:p-14 ${isRTL ? 'text-right' : ''}`}>
            <div className="absolute inset-0 opacity-25">
              <Image
                src={HOME_STRANDS_FEATURE_IMAGES.panelBg}
                alt={withBrandAlt('Bint Saeed strand collection')}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(114,32,48,0.44)_0%,rgba(114,32,48,0.18)_45%,rgba(114,32,48,0.28)_100%)]" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1a0210]/96 via-[#1a0210]/88 to-[#1a0210]/80" />
            <div className="relative z-10 max-w-[640px]">
            <p data-reveal className="font-montserrat text-[11px] font-medium uppercase tracking-[0.15em] text-brand-dustyBlue">
              {copy.abayaStrandsEyebrow}
            </p>
            <h2 data-reveal className="mt-3 font-rozha text-3xl leading-tight text-[#e8d8c8] md:text-4xl">
              {copy.abayaStrandsHeading}
            </h2>
            <p data-reveal className="mt-4 font-montserrat text-sm leading-relaxed tracking-[0.02em] text-[#8a7a70]">
              {copy.abayaStrandsBody}
            </p>

            <div data-reveal className={`mt-5 flex flex-wrap items-center gap-x-4 gap-y-3 ${isRTL ? 'justify-end' : ''}`}>
              {copy.strandSwatches.map((stone) => (
                <span
                  key={stone.name}
                  className={`inline-flex items-center gap-2 font-montserrat text-[10px] uppercase tracking-[0.14em] text-[#e8d8c8]/80 ${
                    isRTL ? 'flex-row-reverse' : ''
                  }`}
                >
                  <span
                    className={PRODUCT_GRID_COLOUR_DOT_ON_DARK}
                    style={softGridColourBeadStyle(stone.hex)}
                    aria-hidden
                  />
                  {stone.name}
                </span>
              ))}
            </div>

            <div data-reveal className={`mt-6 flex flex-wrap gap-3 ${isRTL ? 'justify-end' : ''}`}>
              <LocaleLink
                href="/strands"
                className="inline-flex min-h-[44px] items-center rounded-[4px] bg-[#6f1524] px-5 font-montserrat text-[11px] uppercase tracking-[0.16em] text-[var(--color-on-dark)] transition-colors hover:bg-[#821b2d]"
                data-cursor-hover
              >
                <NoTranslate>{copy.shopStrandsCta}</NoTranslate>
              </LocaleLink>
            </div>
            </div>
          </div>

          <LocaleLink
            data-reveal
            href="/strands"
            className="group relative overflow-hidden bg-[var(--color-sovereign)]"
            data-cursor-hover
          >
            <div className="relative h-full min-h-[68vh] overflow-hidden">
              <div className="absolute -inset-[14%]">
                <Image
                  src={HOME_STRANDS_FEATURE_IMAGES.hero}
                  alt={withBrandAlt('Bint Saeed strand collection')}
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover object-[50%_42%] transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>
            </div>
          </LocaleLink>
      </div>
    </section>
  )
}

function CharmHeroFeatureSectionMirror() {
  const { language, isRTL } = useLanguage()
  const copy = getHomeEditorialCopy(language)

  return (
    <section data-story-section className={`${OVERLAP_PANEL_CLASS} w-full overflow-hidden bg-transparent px-0 py-0`}>
      <div className="grid min-h-[68vh] w-full max-w-none items-stretch lg:grid-cols-2">
        <LocaleLink
          data-reveal
          href="/personalisation"
          className="group relative isolate min-h-[68vh] overflow-hidden bg-[#1a0210]"
          data-cursor-hover
        >
          {DARK_PANEL_BG_LAYERS}
          <div className="relative z-[1] h-full min-h-[68vh]">
            <Image
              src={HOME_PERSONALISATION_FEATURE_IMAGE}
              alt={withBrandAlt('Bint Saeed personalised hidden inner label')}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
            />
            <div className="pointer-events-none absolute inset-0 bg-[#1a0210]/18" aria-hidden />
          </div>
        </LocaleLink>

        <div
          className={`relative flex items-center bg-[#1a0210] px-6 pt-6 pb-10 md:p-10 lg:p-14 ${
            isRTL ? 'text-right' : ''
          }`}
        >
          {DARK_PANEL_BG_LAYERS}
          <div className="relative z-10 max-w-[640px]">
            <p data-reveal className="font-montserrat text-[11px] font-medium uppercase tracking-[0.15em] text-brand-dustyBlue">
              {copy.carriedCloseEyebrow}
            </p>
            <h2 data-reveal className="mt-3 font-rozha text-3xl leading-tight text-[#e8d8c8] md:text-4xl">
              {copy.personalisationHeading}
            </h2>
            <p data-reveal className="mt-4 font-montserrat text-sm leading-relaxed tracking-[0.02em] text-[#8a7a70]">
              {copy.personalisationBody}
            </p>

            <div data-reveal className={`mt-6 flex flex-wrap gap-3 ${isRTL ? 'justify-end' : ''}`}>
              <LocaleLink
                href="/personalisation"
                className="inline-flex min-h-[44px] items-center rounded-[4px] bg-[var(--color-signature)] px-5 font-montserrat text-[11px] uppercase tracking-[0.16em] text-[var(--color-on-dark)] transition-colors hover:bg-[var(--color-sovereign)]"
                data-cursor-hover
              >
                {copy.personalisationCta}
              </LocaleLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function CampaignPanoramaSection() {
  const { language, isRTL } = useLanguage()
  const copy = getHomeEditorialCopy(language)

  return (
    <section className={`${OVERLAP_PANEL_CLASS} w-full overflow-hidden bg-[#f6f2eb] px-0 py-0`}>
      <SectionStripes variant="soft" />
      <div className="relative w-full">
        <div className="relative aspect-[16/6] min-h-[220px] w-full overflow-hidden bg-brand-stone/15 md:min-h-[280px] lg:min-h-[360px]">
          <Image
            src={HOME_MEDIA.editorialGazelles}
            alt={withBrandAlt('Bint Saeed campaign panorama — Abu Dhabi gazelles')}
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority={false}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#1F0508]/22 via-transparent to-[#1F0508]/16" />
          <div className={`absolute top-1/2 z-[2] -translate-y-1/2 ${isRTL ? 'right-6 md:right-10 lg:right-14' : 'left-6 md:left-10 lg:left-14'}`}>
            <MagneticWrap>
              <LocaleLink
                href="/shop"
                className="group inline-flex min-h-[44px] min-w-[44px] cursor-pointer items-center gap-3 rounded-[4px] bg-[#6f1524] px-5 py-2.5 font-montserrat text-[11px] uppercase tracking-[0.2em] !text-[#e8d8c8] shadow-[0_10px_24px_rgba(0,0,0,0.3)] transition-all duration-400 hover:bg-[#821b2d] hover:shadow-[0_14px_30px_rgba(0,0,0,0.36)]"
                data-cursor-hover
              >
                {copy.returnToShopCta}
                <FiArrowRight
                  className={`h-4 w-4 transition-transform duration-500 ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`}
                />
              </LocaleLink>
            </MagneticWrap>
          </div>
        </div>
      </div>
    </section>
  )
}

const QUICK_SHOP_LOOP_MS = 72_000
/** How long each framing holds before dissolving to the alternate still */
const QUICK_SHOP_FRAME_HOLD_MS = 3_600
/** Full primary↔alt cycle length */
const QUICK_SHOP_FRAME_CYCLE_MS = QUICK_SHOP_FRAME_HOLD_MS * 2

function quickShopCarouselImages(product: Product): { primary: string; hover: string; color?: string } {
  const slug = getProductSlug(product)
  if (slug === 'park-lane-abaya') {
    const maroonGallery = product.colorImages?.['Dark Maroon'] ?? product.images
    return {
      primary: maroonGallery[1] ?? maroonGallery[0] ?? '',
      hover: maroonGallery[2] ?? maroonGallery[1] ?? maroonGallery[0] ?? '',
      color: 'Dark Maroon',
    }
  }
  return {
    primary: product.images[0] ?? '',
    hover: product.images[1] ?? product.images[0] ?? '',
  }
}

/**
 * Staggered still-to-still dissolve — each card flips on its own beat so the
 * quick-shop strip reads like a slow movie reel rather than a synced hover swap.
 */
function QuickShopCardGallery({
  product,
  primary,
  hover,
  color,
  locale,
  staggerIndex,
  stripLength,
  reduceMotion,
}: {
  product: Product
  primary: string
  hover: string
  color?: string
  locale: AppLocale
  staggerIndex: number
  stripLength: number
  reduceMotion: boolean | null
}) {
  const hasAlt = Boolean(hover && hover !== primary)
  const [showAlt, setShowAlt] = useState(false)
  const [pointerPreferAlt, setPointerPreferAlt] = useState(false)

  useEffect(() => {
    if (reduceMotion || !hasAlt) {
      setShowAlt(false)
      return
    }
    const n = Math.max(stripLength, 1)
    const staggerOffset = (staggerIndex % n) * (QUICK_SHOP_FRAME_CYCLE_MS / n)

    const sync = () => {
      const phase = (performance.now() + staggerOffset) % QUICK_SHOP_FRAME_CYCLE_MS
      setShowAlt(phase >= QUICK_SHOP_FRAME_HOLD_MS)
    }
    sync()

    let timeoutId = 0
    let intervalId = 0
    const arm = () => {
      const phase = (performance.now() + staggerOffset) % QUICK_SHOP_FRAME_CYCLE_MS
      const untilFlip = QUICK_SHOP_FRAME_HOLD_MS - (phase % QUICK_SHOP_FRAME_HOLD_MS)
      timeoutId = window.setTimeout(() => {
        sync()
        intervalId = window.setInterval(sync, QUICK_SHOP_FRAME_HOLD_MS)
      }, Math.max(untilFlip, 48))
    }
    arm()

    return () => {
      window.clearTimeout(timeoutId)
      window.clearInterval(intervalId)
    }
  }, [reduceMotion, hasAlt, staggerIndex, stripLength])

  const revealAlt = pointerPreferAlt || showAlt

  return (
    <div
      className="relative h-[20.95rem] w-full shrink-0 overflow-hidden bg-[#f3f0ea] md:h-[25.85rem] lg:h-[27.15rem]"
      onMouseEnter={() => setPointerPreferAlt(true)}
      onMouseLeave={() => setPointerPreferAlt(false)}
    >
      <SafeCarouselImage
        src={primary}
        alt={getProductImageAlt(product, primary, { color, index: 0, locale })}
        sizes="(max-width: 768px) 210px, (max-width: 1200px) 256px, 270px"
        className={`pointer-events-none object-cover object-top transition-all duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
          revealAlt ? 'scale-[1.02] opacity-0' : 'scale-100 opacity-100'
        }`}
      />
      {hasAlt ? (
        <SafeCarouselImage
          src={hover}
          alt={getProductImageAlt(product, hover, { color, index: 1, locale })}
          sizes="(max-width: 768px) 210px, (max-width: 1200px) 256px, 270px"
          className={`pointer-events-none object-cover object-center transition-all duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
            revealAlt ? 'scale-[1.02] opacity-100' : 'scale-100 opacity-0'
          }`}
        />
      ) : null}
      <div
        className={`pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-[#1F0508]/22 to-transparent transition-opacity duration-500 ${
          revealAlt ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  )
}

const CATEGORY_STRIP = [
  {
    key: 'Abayas',
    label: 'Abayas',
    href: '/shop?category=abayas',
    image: '/collection-section/1.png',
  },
  {
    key: 'Kaftans',
    label: 'Kaftans',
    href: '/shop?category=kaftans',
    image: '/collection-section/67.png',
  },
  {
    key: 'Sets',
    label: 'Sets',
    href: '/shop?category=sets',
    image: '/collection-section/68.png',
  },
  {
    key: 'Accessories',
    label: 'Accessories',
    href: '/accessories',
    image: '/home/collection-chapter/bint-saeed-home-collection-accessories-malachite-lifestyle.webp',
  },
  {
    key: 'Personalisation',
    label: 'Personalisation',
    href: '/personalisation',
    image: HOME_MEDIA.personalisationHiddenPocket,
  },
] as const

function CategoryNavigationStrip() {
  const { language, isRTL } = useLanguage()
  const copy = getHomeEditorialCopy(language)
  const [active, setActive] = useState(0)

  const pricesByCategory = staticProducts.reduce<Record<string, number[]>>((acc, product) => {
    const key = product.category
    if (!acc[key]) acc[key] = []
    acc[key].push(product.price)
    return acc
  }, {})

  const categoryMeta: Record<string, { priceLabel: string; subline?: string }> = {
    Abayas: {
      priceLabel: copy.formatPriceRange(
        Math.min(...(pricesByCategory.Abayas ?? [0])),
        Math.max(...(pricesByCategory.Abayas ?? [0])),
      ),
    },
    Kaftans: {
      priceLabel: copy.formatPriceFrom(Math.min(...(pricesByCategory.Kaftans ?? [0]))),
    },
    Sets: {
      priceLabel: copy.formatPriceFrom(Math.min(...(pricesByCategory.Sets ?? [0]))),
    },
    Accessories: {
      priceLabel: copy.categoryNewIn,
    },
    Personalisation: {
      priceLabel: copy.categoryHiddenPocketGift,
    },
  }

  const activeItem = CATEGORY_STRIP[active]!

  return (
    <section className="relative bg-white pb-10 md:pb-12">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="mb-4 overflow-hidden rounded-2xl border border-brand-stone/30 bg-[#f4f1ec]">
          <div className="relative h-[12.5rem] w-full sm:h-[15rem] md:h-[17rem]">
            <Image
              src={activeItem.image}
              alt={withBrandAlt(`${activeItem.label} preview`)}
              fill
              sizes="(max-width: 1024px) 100vw, 1200px"
              className="object-cover object-center transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1f0508]/60 via-[#1f0508]/10 to-transparent" />
            <div className={`absolute bottom-4 ${isRTL ? 'left-4 text-right' : 'right-4 text-left'}`}>
              <p className="font-montserrat text-[10px] uppercase tracking-[0.22em] text-brand-dustyBlue/95">{copy.categoryFocus}</p>
              <p className="mt-1 font-rozha text-2xl text-brand-ivory">{activeItem.label}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5">
          {CATEGORY_STRIP.map((item, idx) => {
            const meta = categoryMeta[item.key] ?? { priceLabel: '' }
            const selected = idx === active
            return (
              <LocaleLink
                key={item.key}
                href={item.href}
                onMouseEnter={() => setActive(idx)}
                onFocus={() => setActive(idx)}
                className={`group rounded-xl border p-4 transition-all duration-300 ${
                  selected
                    ? 'border-brand-dustyBlue/45 bg-white shadow-[0_10px_24px_rgba(20,8,11,0.1)]'
                    : 'border-brand-stone/30 bg-[#f6f3ef] hover:border-brand-dustyBlue/35 hover:bg-white'
                }`}
                data-cursor-hover
              >
                <p className="font-montserrat text-[11px] uppercase tracking-[0.08em] text-brand-darkRed">{item.label}</p>
                <p className="mt-1 font-montserrat text-[12px] tracking-[0.01em] text-brand-darkRed/80">{meta.priceLabel}</p>
              </LocaleLink>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function QuickShopCarousel() {
  const { isRTL, language } = useLanguage()
  const ui = commerceUi(language)
  const copy = getHomeEditorialCopy(language)
  const reduceMotion = useReducedMotion()
  const [isPaused, setIsPaused] = useState(false)
  const [catalog, setCatalog] = useState<Product[]>(staticProducts)
  const [segmentPx, setSegmentPx] = useState(0)
  /** 0–100 phase through one loop (matches former marquee: half of duplicated track) */
  const [phasePct, setPhasePct] = useState(0)
  const [scrubbing, setScrubbing] = useState(false)
  const trackRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const loopStartRef = useRef(0)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const driftX = useTransform(scrollYProgress, [0, 1], [0, -120])

  useEffect(() => {
    let cancelled = false
    fetch('/api/catalog')
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (cancelled || !data?.products?.length) return
        setCatalog(data.products as Product[])
      })
      .catch(() => {})
    return () => {
      cancelled = true
    }
  }, [])

  const quickProducts = catalog.slice(0, 8)

  useLayoutEffect(() => {
    const el = trackRef.current
    if (!el || quickProducts.length === 0) return
    const measure = () => {
      const w = el.scrollWidth
      if (w > 0) setSegmentPx(w / 2)
    }
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(el)
    return () => ro.disconnect()
  }, [quickProducts])

  useEffect(() => {
    if (reduceMotion || segmentPx <= 0 || scrubbing || isPaused) return
    loopStartRef.current = performance.now() - (phasePct / 100) * QUICK_SHOP_LOOP_MS
    let id = 0
    const tick = (now: number) => {
      const t = (now - loopStartRef.current) % QUICK_SHOP_LOOP_MS
      setPhasePct((t / QUICK_SHOP_LOOP_MS) * 100)
      id = requestAnimationFrame(tick)
    }
    id = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(id)
    // phasePct read only for loop sync when deps change — not listed to avoid restarting every frame
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduceMotion, segmentPx, scrubbing, isPaused])

  const translatePx =
    segmentPx > 0
      ? isRTL
        ? -(1 - phasePct / 100) * segmentPx
        : -(phasePct / 100) * segmentPx
      : 0

  return (
    <section
      ref={sectionRef}
      data-story-section
      className={`${OVERLAP_PANEL_CLASS} bg-brand-pageCanvas pb-14 pt-20 md:pb-18 md:pt-24 lg:pb-20 lg:pt-28`}
    >
      <SectionStripes variant="soft" />
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-10 bg-gradient-to-r from-brand-pageCanvas to-transparent md:w-16 lg:w-20" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-10 bg-gradient-to-l from-brand-pageCanvas to-transparent md:w-16 lg:w-20" />

      <div
        className="relative z-[3] overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocusCapture={() => setIsPaused(true)}
        onBlurCapture={() => setIsPaused(false)}
      >
        <motion.div style={{ x: reduceMotion ? 0 : driftX }}>
          <div
            ref={trackRef}
            className="quick-shop-track"
            style={{
              transform: `translate3d(${translatePx}px,0,0)`,
              willChange: segmentPx > 0 ? 'transform' : undefined,
            }}
          >
          {[...quickProducts, ...quickProducts].map((product, idx) => {
            const carouselImages = quickShopCarouselImages(product)
            const carouselColor = carouselImages.color ?? product.colors[0]?.name
            const staggerIndex = idx % Math.max(quickProducts.length, 1)
            return (
            <LocaleLink
              key={`${product.id}-${idx}`}
              href={getProductHref(product)}
              className="group relative z-[2] mx-1.5 flex h-[25.35rem] w-[13.1rem] shrink-0 cursor-pointer flex-col border border-brand-stone/25 border-b-2 border-b-transparent bg-white transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:border-b-[#6f1524] hover:shadow-[0_14px_36px_rgba(25,10,16,0.08)] focus-visible:-translate-y-0.5 focus-visible:shadow-[0_14px_36px_rgba(25,10,16,0.08)] focus-visible:outline-none md:mx-2 md:h-[30.85rem] md:w-[16rem] lg:h-[32.35rem] lg:w-[16.8rem]"
              data-cursor-hover
            >
              {/* Images must not capture hits — stacked fill layers steal taps from the link otherwise */}
              <QuickShopCardGallery
                product={product}
                primary={carouselImages.primary}
                hover={carouselImages.hover}
                color={carouselColor}
                locale={language}
                staggerIndex={staggerIndex}
                stripLength={quickProducts.length}
                reduceMotion={reduceMotion}
              />
              <div className="flex min-h-[4.25rem] flex-1 flex-col justify-center gap-1.5 border-t border-brand-stone/20 px-2.5 py-2 md:min-h-[4.5rem] md:gap-2 md:px-3 md:py-2.5">
                <div className={`flex min-h-0 flex-col gap-1 ${isRTL ? 'items-end text-right' : 'items-start text-left'}`}>
                  <h3 className="min-w-0 max-w-full truncate font-montserrat text-[10.5px] uppercase tracking-[0.06em] text-brand-darkRed/88 leading-snug">
                    {product.name}
                  </h3>
                  <p className="font-montserrat text-[10.5px] uppercase leading-snug tracking-[0.06em] text-[#6f1524]">
                    {copy.formatProductPrice(product.price)}
                  </p>
                </div>
                <div
                  className={`flex flex-wrap items-center gap-1 ${isRTL ? 'justify-end' : ''}`}
                  aria-label={ui.shopExtras.availableColours}
                >
                  {product.colors.slice(0, 6).map((c) => (
                    <span
                      key={c.name}
                      title={localizedColorName(c.name, language)}
                      className={`${PRODUCT_GRID_COLOUR_DOT} h-2 w-2 md:h-[9px] md:w-[9px]`}
                      style={softGridColourBeadStyle(c.hex)}
                      aria-hidden
                    />
                  ))}
                  {product.colors.length > 6 ? (
                    <span className="font-montserrat text-[9px] tabular-nums tracking-wide text-brand-darkRed/45">
                      +{product.colors.length - 6}
                    </span>
                  ) : null}
                </div>
              </div>
            </LocaleLink>
            )
          })}
          </div>
        </motion.div>
      </div>

      {quickProducts.length > 0 ? (
        <div className="pointer-events-auto relative z-[4] mx-auto mt-8 max-w-xl px-8 md:px-10">
          <input
            id="quick-shop-carousel-scrub"
            type="range"
            min={0}
            max={100}
            step={0.25}
            value={phasePct}
            disabled={segmentPx <= 0}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(phasePct)}
            dir={isRTL ? 'rtl' : 'ltr'}
            className="h-3 w-full cursor-pointer appearance-none rounded-full bg-brand-stone/25 accent-brand-darkRed disabled:cursor-not-allowed disabled:opacity-40 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border [&::-webkit-slider-thumb]:border-brand-darkRed/30 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-sm [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border [&::-moz-range-thumb]:border-brand-darkRed/30 [&::-moz-range-thumb]:bg-white"
            onChange={(e) => setPhasePct(Number(e.target.value))}
            onPointerDown={() => setScrubbing(true)}
            onPointerUp={(e) => {
              const v = Number((e.target as HTMLInputElement).value)
              setPhasePct(v)
              setScrubbing(false)
              loopStartRef.current = performance.now() - (v / 100) * QUICK_SHOP_LOOP_MS
            }}
            onPointerCancel={() => setScrubbing(false)}
            onFocus={() => setScrubbing(true)}
            onBlur={(e) => {
              const v = Number((e.target as HTMLInputElement).value)
              setPhasePct(v)
              setScrubbing(false)
              loopStartRef.current = performance.now() - (v / 100) * QUICK_SHOP_LOOP_MS
            }}
          />
          <div className="mt-6 flex justify-center">
            <LocaleLink
              href="/shop"
              className={ctaPrimary}
              data-cursor-hover
              data-analytics-event="click_cta_quick_shop_carousel"
              data-analytics-section="home-quick-shop-carousel"
            >
              {copy.shopNowCta}
            </LocaleLink>
          </div>
        </div>
      ) : null}

      <style jsx>{`
        .quick-shop-track {
          display: flex;
          width: max-content;
          padding: 0 0.4rem;
          touch-action: manipulation;
        }
      `}</style>
    </section>
  )
}

function HeroSection() {
  const ref = useRef(null)
  const reduceMotion = useReducedMotion()
  const { t, language, isRTL } = useLanguage()
  const copy = getHomeEditorialCopy(language)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.06])
  const titleY = useTransform(scrollYProgress, [0, 1], [0, 20])
  const introX = useTransform(scrollYProgress, [0, 1], [0, 14])

  return (
    <section
      ref={ref}
      data-story-section
      data-hero-section
      className="section-full relative h-svh min-h-svh w-full overflow-hidden bg-[#1a0210]"
    >
      <SectionStripes variant="hero" />
      {/* Background — mobile/tablet vs desktop art direction */}
      <motion.div
        style={reduceMotion ? undefined : { scale }}
        className="pointer-events-none absolute inset-0 overflow-hidden will-change-transform"
      >
        {/* Mobile + tablet — portrait burgundy collection (WebP; JPG kept beside it) */}
        <Image
          src={HOME_MEDIA.heroMobile}
          alt={withBrandAlt('Bint Saeed luxury abayas in burgundy and black, editorial group photograph')}
          fill
          className="object-cover object-[center_28%] scale-[1.02] saturate-[0.92] contrast-[1.03] brightness-[0.96] lg:hidden"
          sizes="(max-width: 1023px) 100vw, 1px"
          priority
        />
        {/* Desktop — editorial abayas (WebP; JPG + legacy /IMG_2821.JPG kept) */}
        <Image
          src={HOME_MEDIA.heroDesktop}
          alt={withBrandAlt('Bint Saeed luxury abayas, editorial photograph')}
          fill
          className="hidden object-cover object-[center_28%] scale-[1.02] saturate-[0.88] contrast-[1.04] brightness-[0.97] lg:block"
          sizes="100vw"
          priority
        />
      </motion.div>

      {/* Content — parallax on copy only; CTA stays untransformed for reliable hit-testing */}
      <div className="relative z-20 flex h-full items-end pb-14 pt-24 md:items-center md:pb-10 md:pt-20 lg:items-end lg:pb-16 lg:pt-0">
        <div className="section-inner w-full">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-[min(70vw,760px)] bg-gradient-to-r from-[#1a0210]/58 via-[#1a0210]/24 to-transparent" />
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
            <div className={`min-w-0 lg:col-span-8 xl:col-span-7 ${isRTL ? 'lg:col-start-6' : ''}`}>
              {/* Never start at opacity 0 — GSAP/framer + iOS blur left phones on a black hero */}
              <motion.div style={reduceMotion ? undefined : { y }} className="pointer-events-none">
                <motion.h1
                  data-document-h1="true"
                  data-hero-h1="true"
                  initial={false}
                  style={reduceMotion ? undefined : { y: titleY }}
                  className="mb-8 max-w-[85vw] font-rozha text-[clamp(32px,5vw,64px)] font-normal leading-[1.15] tracking-[-0.01em] !text-[#e8d8c8] md:max-w-[100vw] md:whitespace-nowrap"
                >
                  {copy.heroHeadline}
                </motion.h1>

                <motion.p
                  initial={false}
                  style={reduceMotion ? undefined : { x: introX }}
                  className="mb-6 max-w-md border-l-[2px] border-[#6f1524] pl-[14px] font-montserrat text-[15px] leading-[1.7] tracking-[0.02em] !text-[#e8d8c8] md:mb-8"
                >
                  {copy.heroSubline}
                </motion.p>
              </motion.div>

              <div className="relative z-30 flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-10">
                <MagneticWrap className="w-full sm:w-fit">
                  <LocaleLink
                    href="/shop"
                    className="inline-block w-full rounded-[4px] bg-[#6f1524] px-8 py-[13px] text-center font-montserrat text-[12px] font-medium uppercase tracking-[0.1em] !text-[#e8d8c8] no-underline transition-colors duration-200 hover:bg-[#821b2d] sm:w-auto"
                    data-cursor-hover
                    data-analytics-event="click_cta_home_to_collection"
                    data-analytics-section="home-hero"
                  >
                    {t.hero.discoverCollection}
                  </LocaleLink>
                </MagneticWrap>
                <MagneticWrap className="w-full sm:w-fit">
                  <LocaleLink
                    href="/about"
                    className="inline-flex min-h-[46px] w-full items-center justify-center rounded-[4px] border border-[#e8d8c8]/45 bg-[#1a0810]/35 px-8 text-center font-montserrat text-[12px] font-medium uppercase tracking-[0.1em] !text-[#f2e5d8] no-underline shadow-[0_14px_34px_rgba(0,0,0,0.22)] backdrop-blur-md transition-colors duration-200 hover:border-[#f2e5d8]/70 hover:bg-[#1a0810]/50 hover:!text-[#fff4e6] sm:w-auto"
                    data-cursor-hover
                    data-analytics-event="click_nav_about"
                    data-analytics-section="home-hero"
                  >
                    {copy.heroBrandStoryCta}
                  </LocaleLink>
                </MagneticWrap>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

function EditorialIntro() {
  const ref = useRef(null)
  const isInView = useInView(ref, { margin: '-20%', once: true })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const panelY = useTransform(scrollYProgress, [0, 1], [12, -10])
  const { language, isRTL } = useLanguage()
  const copy = getHomeEditorialCopy(language)

  return (
    <section
      ref={ref}
      data-story-section
      className={`section-full ${OVERLAP_PANEL_CLASS} overflow-hidden bg-transparent py-16 md:py-20 lg:py-24`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(250,248,245,1)_0%,rgba(232,221,212,0.38)_100%)]" />

      <div className="relative mx-auto w-full max-w-[1120px] px-4 md:px-6">
        <div className="grid w-full items-stretch gap-0 lg:grid-cols-2 lg:gap-0">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            style={{ y: panelY }}
            className={isRTL ? 'lg:order-1' : 'lg:order-2'}
          >
            <div className="relative h-full min-h-[26rem] overflow-hidden border-y border-[#2a1e18]/10 border-l-[3px] border-l-[#6f1524] bg-[#120910] shadow-[0_22px_56px_rgba(23,9,14,0.22)] md:min-h-[30rem] lg:min-h-[34rem] lg:border-r lg:border-[#2a1e18]/10">
              <div className="absolute inset-0">
                <Image
                  src={HOME_MEDIA.editorialManifestoPortrait}
                  alt={withBrandAlt('Bint Saeed — from Abu Dhabi to the world')}
                  fill
                  className="object-cover object-[center_22%]"
                  sizes="(max-width: 1024px) 100vw, 560px"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-b from-[#120910]/88 via-[#120910]/48 to-[#120910]/92]"
                  aria-hidden
                />
                <div
                  className="absolute inset-0 bg-[radial-gradient(ellipse_95%_72%_at_50%_38%,rgba(18,9,16,0.12)_0%,#120910_68%)]"
                  aria-hidden
                />
              </div>
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_95%_68%_at_50%_0%,rgba(106,128,144,0.14)_0%,transparent_62%)]" />
              <div
                className={`relative z-10 flex h-full min-h-[26rem] flex-col justify-end p-[52px] md:min-h-[30rem] md:p-[62px] lg:min-h-[34rem] ${
                  isRTL ? 'items-start text-left' : 'items-end text-right'
                }`}
              >
                <span className="mb-5 block font-montserrat text-[11px] uppercase tracking-[0.3em] text-brand-dustyBlue">
                  {copy.manifestoImageEyebrow}
                </span>
                <p className="max-w-[30rem] font-rozha text-[clamp(24px,2.9vw,38px)] italic leading-[1.18] tracking-[-0.01em] text-[#f5e1da]">
                  &ldquo;{copy.manifestoQuote}&rdquo;
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
            style={{ y: panelY }}
            className={isRTL ? 'lg:order-2' : 'lg:order-1'}
          >
            <div className="relative h-full min-h-[26rem] border-y border-[#2a1e18]/10 bg-[#e8ddd4] p-[52px] shadow-[0_22px_56px_rgba(23,9,14,0.08)] md:min-h-[30rem] md:p-[62px] lg:min-h-[34rem] lg:border-r lg:border-[#2a1e18]/10">
              <div className="space-y-7">
                <p className="font-montserrat text-[11px] font-medium uppercase tracking-[0.15em] text-brand-dustyBlue">{copy.manifestoLabel}</p>
                <h2 className="font-rozha text-[clamp(24px,2.4vw,34px)] leading-[1.18] text-[#2a1e18]">
                  {copy.manifestoLead}
                </h2>
                <div className="space-y-5 font-montserrat text-[16px] leading-[1.68] tracking-[0.01em] text-[#8a7a70]">
                  {copy.manifestoSnippets.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
                <MagneticWrap className="w-fit">
                  <LocaleLink
                    href="/about"
              className="inline-flex min-h-[46px] items-center rounded-[4px] border border-[#6f1524] bg-[#6f1524] px-6 font-montserrat text-[11px] uppercase tracking-[0.08em] text-[#e8d8c8] transition-colors hover:border-[#821b2d] hover:bg-[#821b2d] hover:text-[#f2e5d8]"
                    data-cursor-hover
                  >
                    {copy.manifestoReadStory}
                  </LocaleLink>
                </MagneticWrap>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function collectionChapterImage(fileName: string) {
  return `/home/collection-chapter/${fileName}`
}

function MagazineGrid() {
  const ref = useRef<HTMLDivElement | null>(null)
  const isInView = useInView(ref, { margin: '-10%', once: true })
  const { t, language, isRTL } = useLanguage()
  const copy = getHomeEditorialCopy(language)
  const collectionCards = [
    {
      images: [
        collectionChapterImage('bint-saeed-home-collection-abayas-01.webp'),
        collectionChapterImage('bint-saeed-home-collection-abayas-02.webp'),
      ],
      label: 'Abayas',
      href: '/shop?category=abayas',
      section: 'home-collection-card-abayas',
    },
    {
      images: [
        collectionChapterImage('bint-saeed-home-collection-kaftans-01.webp'),
        collectionChapterImage('bint-saeed-home-collection-kaftans-02.webp'),
      ],
      label: 'Kaftans',
      href: '/shop?category=kaftans',
      section: 'home-collection-card-kaftans',
    },
    {
      images: [
        collectionChapterImage('bint-saeed-home-collection-sets-01.webp'),
        collectionChapterImage('bint-saeed-home-collection-sets-02.webp'),
      ],
      label: 'Sets',
      href: '/shop?category=sets',
      section: 'home-collection-card-sets',
    },
    {
      images: [
        collectionChapterImage('bint-saeed-home-collection-accessories-malachite-lifestyle.webp'),
        collectionChapterImage('bint-saeed-home-collection-accessories-malachite-detail.webp'),
      ],
      label: 'Accessories',
      href: '/accessories',
      section: 'home-collection-card-accessories',
    },
  ] as const

  return (
    <section
      ref={ref}
      data-story-section
      data-collection-chapter
      className="section-full overflow-hidden bg-[#faf8f5] pb-16 pt-10 md:pb-20 md:pt-12"
    >
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75 }}
          className={`mb-8 flex items-end justify-between md:mb-10 ${isRTL ? 'flex-row-reverse' : ''}`}
        >
          <div data-reveal>
            <span className="mb-3 block font-montserrat text-[11px] font-medium uppercase tracking-[0.15em] text-brand-dustyBlue">
              {copy.chapterLabel}
            </span>
            <h2 className="font-rozha text-4xl uppercase text-[var(--color-ink)] md:text-5xl">{copy.collectionHeading}</h2>
          </div>
          <LocaleLink
            href="/shop"
            className="hidden items-center gap-2 font-montserrat text-xs uppercase tracking-[0.2em] text-[var(--color-signature)] transition-colors hover:text-[var(--color-balance)] md:flex"
            data-cursor-hover
            data-analytics-event="click_cta_home_to_collection"
            data-analytics-section="home-collection-header"
          >
            {t.featured.viewAll}
            <FiArrowRight className="w-4 h-4" />
          </LocaleLink>
        </motion.div>

        <div data-collection-image-mask className="bg-[var(--color-light)] p-3 shadow-[0_22px_54px_rgba(24,10,16,0.08)] sm:p-4">
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4">
            {collectionCards.map((card) => (
              <LocaleLink
                key={card.label}
                href={card.href}
                className="group block overflow-hidden bg-[var(--color-ground)] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5"
                data-cursor-hover
                data-analytics-event="click_cta_home_to_collection"
                data-analytics-section={card.section}
              >
                <CollectionCardVisual images={card.images} label={card.label} />
              </LocaleLink>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function homeCodesImage(fileName: string) {
  return codesPageImagePath(fileName)
}

function EditorialSplit() {
  const ref = useRef<HTMLDivElement | null>(null)
  const isInView = useInView(ref, { margin: '-12%', once: true })
  const { language, isRTL } = useLanguage()
  const copy = getHomeEditorialCopy(language)
  const storyCodeImages = [
    homeCodesImage(CODES_IMAGE_FILES.monogram),
    homeCodesImage(CODES_IMAGE_FILES.khous),
    homeCodesImage(CODES_IMAGE_FILES.knottedLines),
    homeCodesImage(CODES_IMAGE_FILES.alAinRosette),
    homeCodesImage(CODES_IMAGE_FILES.alTalli),
    homeCodesImage(CODES_IMAGE_FILES.naturalStoneBeads),
  ] as const
  const storyCodeAlts = [
    withBrandAlt('Bint Saeed luxury house monogram — house code'),
    withBrandAlt('Al Khous palm-frond weaving Emirati heritage — house code'),
    withBrandAlt('Knotted Lines of Lineage gold motif — house code'),
    withBrandAlt('Al Ain Rosette carnelian stone motif — house code'),
    withBrandAlt('Traditional Al Talli Emirati heritage embroidery — house code'),
    withBrandAlt('Natural stone abaya strands — Emirati heritage house code'),
  ] as const
  const storyCodes = copy.storyCodes.map((code, index) => ({
    ...code,
    image: storyCodeImages[index]!,
    alt: storyCodeAlts[index]!,
    href: HOME_STORY_CODE_HREFS[index] ?? '/the-codes',
  }))

  return (
    <section ref={ref} data-story-section className={`section-full ${OVERLAP_PANEL_CLASS} bg-[#faf8f5] py-14 md:py-16`}>
      <div className="w-full px-4 md:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={`mb-5 ${isRTL ? 'text-right' : ''}`}>
            <p className="mb-2 font-montserrat text-[11px] font-medium uppercase tracking-[0.15em] text-brand-dustyBlue">
              {copy.houseCodesEyebrow}
            </p>
            <h2 className="font-rozha text-[32px] uppercase leading-none whitespace-nowrap text-[#2a1e18] md:text-4xl">{copy.houseCodesHeading}</h2>
          </div>

          <div className="overflow-hidden border-t border-[#e8ddd4] md:hidden">
            <motion.div
              className="flex w-max gap-3 py-2"
              animate={{ x: ['0%', '-50%'] }}
              transition={{ duration: 42, repeat: Infinity, ease: 'linear' }}
            >
              {[...storyCodes, ...storyCodes].map((code, index) => (
                <LocaleLink
                  key={`${code.title}-${index}`}
                  href={code.href}
                  className="group w-[76vw] min-w-[76vw] shrink-0 p-3 text-left transition-colors"
                  data-cursor-hover
                >
                  <div className="relative mb-3 aspect-[3/4] w-full overflow-hidden rounded-lg border border-[#e8ddd4] bg-[#f7f3ee]">
                    <Image
                      src={code.image}
                      alt={code.alt}
                      fill
                      sizes="76vw"
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <h3 className="mt-2 border-b border-[#e8ddd4] pb-3 font-montserrat text-[14px] font-medium tracking-[0.01em] text-[#2a1e18]">
                    {code.title}
                  </h3>
                </LocaleLink>
              ))}
            </motion.div>
          </div>

          <div className="hidden border-t border-[#e8ddd4] md:grid md:grid-cols-3 lg:grid-cols-6">
            {storyCodes.map((code, index) => (
              <LocaleLink
                key={code.title}
                href={code.href}
                className={`group p-4 text-left transition-colors hover:bg-[#f5f0ea] ${
                  index !== storyCodes.length - 1
                    ? 'border-b border-[#e8ddd4] lg:border-b-0 lg:border-r lg:border-[#e8ddd4]'
                    : 'border-b border-[#e8ddd4] lg:border-b-0'
                }`}
                data-cursor-hover
              >
                <div className="relative mb-3 aspect-[3/4] w-full overflow-hidden rounded-lg border border-[#e8ddd4] bg-[#f7f3ee]">
                  <Image
                    src={code.image}
                    alt={code.alt}
                    fill
                    sizes="(max-width: 1024px) 33vw, 17vw"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <h3 className="mt-2 border-b border-[#e8ddd4] pb-3 font-montserrat text-[14px] font-medium tracking-[0.01em] text-[#2a1e18]">
                  {code.title}
                </h3>
              </LocaleLink>
            ))}
          </div>

          <div className="mt-6 flex justify-center border-t border-[#e8ddd4] pt-6">
            <LocaleLink
              href="/the-codes"
              className="inline-flex min-h-[40px] items-center font-montserrat text-[11px] uppercase tracking-[0.12em] text-brand-dustyBlue transition-colors hover:text-[#2a1e18]"
              data-cursor-hover
              data-analytics-event="click_view_collection_codes_page"
              data-analytics-section="home-codes-section"
            >
              {copy.discoverCodesCta}
            </LocaleLink>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function CollectionStrip() {
  const { t } = useLanguage()
  
  return (
    <section className="relative overflow-hidden py-6 bs-burgundy-surface">
      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        className="flex whitespace-nowrap"
      >
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center">
            {[
              t.marquee.newArrivals,
              t.marquee.freeShipping,
              t.marquee.exclusiveDesigns,
              t.marquee.handcraftedLuxury,
            ].map((item, index) => (
              <span key={index} className="flex items-center">
                <span className="font-rozha text-2xl md:text-3xl text-brand-ivory/90 mx-12">
                  {item}
                </span>
                <span className="w-2 h-2 bg-brand-dustyBlue rounded-full" />
              </span>
            ))}
          </div>
        ))}
      </motion.div>
    </section>
  )
}

/** Section 8 — personalisation conversion hook */
function CreatedForYouSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { margin: '-12%', once: true })
  const { language, isRTL } = useLanguage()
  const copy = getHomeEditorialCopy(language)

  return (
    <section ref={ref} data-story-section data-curtain-reveal className="section-full relative overflow-hidden bg-[#6f1524] py-14 md:py-16">
      <div className="section-inner relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className={`overflow-hidden rounded-2xl border border-[rgba(232,216,200,0.25)] bg-[#6f1524] px-6 py-8 shadow-[0_16px_42px_rgba(46,25,14,0.12)] md:px-10 md:py-10 ${isRTL ? 'text-right' : 'text-center'}`}
        >
          <p className="mb-3 font-montserrat text-[11px] font-medium uppercase tracking-[0.15em] text-brand-dustyBlue">{copy.createdForYouEyebrow}</p>
          <h2 className="mx-auto max-w-3xl font-rozha text-4xl leading-tight text-[#e8d8c8] md:text-5xl">
            {copy.createdForYouHeading}
          </h2>
          <p className={`mx-auto mt-4 max-w-4xl font-montserrat text-lg leading-[1.6] tracking-[0.01em] text-[rgba(232,216,200,0.7)] ${isRTL ? 'text-right' : 'text-center'}`}>
            {copy.createdForYouBody}
          </p>
          <div className={`mt-7 flex flex-wrap gap-3 ${isRTL ? 'justify-end' : 'justify-center'}`}>
            <LocaleLink
              href="/shop"
              className="inline-flex min-h-[46px] items-center rounded-[4px] bg-[#e8d8c8] px-6 font-montserrat text-[12px] uppercase tracking-[0.16em] text-[#6f1524] transition-colors hover:bg-[#f2e5d8]"
              data-cursor-hover
              data-analytics-event="click_personalisation_teaser"
              data-analytics-section="home-personalisation-teaser"
            >
              {copy.shopCta}
            </LocaleLink>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
