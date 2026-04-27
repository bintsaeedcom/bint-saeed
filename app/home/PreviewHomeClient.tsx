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
import Image from 'next/image'
import { FiArrowRight } from 'react-icons/fi'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { products as staticProducts } from '@/data/products'
import { getProductHref } from '@/lib/products/links'
import type { Product } from '@/data/products'

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
      alt={alt}
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
          <Image src={src} alt={alt} fill sizes={sizes} className="object-cover" />
        </div>
      </motion.div>
      <motion.div
        style={reduceMotion ? undefined : { opacity: veilOpacity }}
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/18 via-transparent to-brand-darkRed/12 mix-blend-screen"
      />
    </div>
  )
}

function CollectionCardVisual({
  images,
  label,
}: {
  images: readonly string[]
  label: string
}) {
  const [isHovered, setIsHovered] = useState(false)
  const [imageIndex, setImageIndex] = useState(0)

  useEffect(() => {
    if (!isHovered || images.length <= 1) {
      setImageIndex(0)
      return
    }

    setImageIndex(1)
    if (images.length <= 2) return

    const id = window.setInterval(() => {
      setImageIndex((prev) => (prev >= images.length - 1 ? 1 : prev + 1))
    }, 2000)

    return () => window.clearInterval(id)
  }, [isHovered, images])

  return (
    <div
      className="relative aspect-[3/4]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        key={`${label}-${imageIndex}`}
        src={images[imageIndex]}
        alt={`Bint Saeed ${label}`}
        fill
        sizes="(max-width: 768px) 50vw, 25vw"
        className="pointer-events-none object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--color-sovereign)]/58 via-[var(--color-sovereign)]/8 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-4 md:p-5">
        <h3 className="font-rozha text-xl text-[var(--color-on-dark)] md:text-2xl">{label}</h3>
      </div>
    </div>
  )
}

/** Preview manifesto (EditorialIntro) — English editorial copy */
const MANIFESTO_LEAD = 'Bint Saeed'
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
            alt={altForIndex(i)}
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

const MANIFESTO_QUOTE = 'A sense of self that does not shift with setting.'
const MANIFESTO_SNIPPET = [
  'Wherever life is lived, from Abu Dhabi to London, from Riyadh to Paris, from Doha to Marbella, you do not need to change how you present yourself. Each piece carries your elegance, your way of being, with consistency, wherever you are.',
  'Bint Saeed exists at the intersection of heritage and a contemporary life, carried across borders and recognised by its consistency.',
]
const HOUSE_MOTION_EASE = 'power2.out'
const HOUSE_REVEAL_DURATION = 1.25
const HOUSE_MASK_DURATION = 1.45
const HOUSE_CURTAIN_DURATION = 1.35

export default function Home() {
  const { isRTL } = useLanguage()

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return

    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray<HTMLElement>('[data-story-section]')
      sections.forEach((section) => {
        const revealTargets = section.querySelectorAll<HTMLElement>('[data-reveal]')
        if (!revealTargets.length) return
        gsap.fromTo(
          revealTargets,
          { autoAlpha: 0, y: 34 },
          {
            autoAlpha: 1,
            y: 0,
            duration: HOUSE_REVEAL_DURATION,
            ease: HOUSE_MOTION_EASE,
            stagger: 0.16,
            scrollTrigger: {
              trigger: section,
              start: 'top 84%',
              once: true,
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
              },
            },
          )
        }
      }
    })

    return () => ctx.revert()
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
    </div>
  )
}

const HOME_PILLARS = [
  {
    title: 'Crafted in Abu Dhabi',
    copy: 'Each piece is finished in small runs, with a focus on cut, drape, and longevity.',
  },
  {
    title: 'Natural Stone Signatures',
    copy: 'Charms and details are selected for story, symbolism, and timeless wearability.',
  },
  {
    title: 'Personalisation Included',
    copy: 'A hidden pocket note can be added for gifting, milestones, and private meaning.',
  },
] as const

function ThreePillarsBar() {
  const { isRTL } = useLanguage()

  return (
    <section data-story-section className="section-full relative bg-[#e8ddd4] py-5 md:py-6">
      <div className="section-inner">
        <div className={`grid gap-3 md:grid-cols-3 ${isRTL ? 'text-right' : ''}`}>
          {HOME_PILLARS.map((pillar, idx) => (
            <div
              key={pillar.title}
              data-reveal
              className={`rounded-xl border px-4 py-4 md:px-5 ${
                idx === 1
                  ? 'border-[#722030] bg-[#722030] text-[#e8d8c8]'
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

const CHARM_SWATCHES = [
  { name: 'Onyx', hex: '#1a0210' },
  { name: 'Tiger Eye', hex: '#8b5a2b' },
  { name: 'Rose Quartz', hex: '#f4b8c5' },
  { name: 'Malachite', hex: '#1f7a5e' },
] as const

function CharmHeroFeatureSection() {
  const { isRTL } = useLanguage()

  return (
    <section data-story-section className="section-full bs-full-bleed relative overflow-hidden bg-transparent py-0">
      <div className="grid min-h-[68vh] w-full items-stretch lg:grid-cols-2">
          <div className={`relative flex items-center bg-[#1a0210] p-6 md:p-10 lg:p-14 ${isRTL ? 'text-right' : ''}`}>
            <div className="absolute inset-0 opacity-25">
              <Image
                src="/background1.JPG"
                alt="Bint Saeed charm collection"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(114,32,48,0.44)_0%,rgba(114,32,48,0.18)_45%,rgba(114,32,48,0.28)_100%)]" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1a0210]/96 via-[#1a0210]/88 to-[#1a0210]/80" />
            <div className="relative z-10 max-w-[640px]">
            <p data-reveal className="font-montserrat text-[11px] font-medium uppercase tracking-[0.15em] text-brand-dustyBlue">
              Charm Feature
            </p>
            <h2 data-reveal className="mt-3 font-rozha text-3xl leading-tight text-[#e8d8c8] md:text-4xl">
              Natural Stone Charms
            </h2>
            <p data-reveal className="mt-4 font-montserrat text-sm leading-relaxed tracking-[0.02em] text-[#8a7a70]">
              Designed for abayas, bags, and phone styling. Build your signature stack with curated stones and limited edition drops.
            </p>

            <div data-reveal className={`mt-5 flex flex-wrap gap-2 ${isRTL ? 'justify-end' : ''}`}>
              {CHARM_SWATCHES.map((stone) => (
                <span
                  key={stone.name}
                  className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-muted)]/25 bg-[var(--color-light)] px-3 py-1.5 font-montserrat text-[10px] uppercase tracking-[0.14em] text-[var(--color-ink)]"
                >
                  <span className="h-2.5 w-2.5 rounded-full border border-[var(--color-ink)]/12" style={{ backgroundColor: stone.hex }} />
                  {stone.name}
                </span>
              ))}
            </div>

            <div data-reveal className={`mt-6 flex flex-wrap gap-3 ${isRTL ? 'justify-end' : ''}`}>
              <LocaleLink
                href="/accessories?category=abaya-charms"
                className="inline-flex min-h-[44px] items-center rounded-xl bg-[var(--color-signature)] px-5 font-montserrat text-[11px] uppercase tracking-[0.16em] text-[var(--color-on-dark)] transition-colors hover:bg-[var(--color-sovereign)]"
                data-cursor-hover
              >
                Shop Charms
              </LocaleLink>
            </div>
            </div>
          </div>

          <LocaleLink
            data-reveal
            href="/accessories?category=abaya-charms"
            className="group relative overflow-hidden bg-[var(--color-sovereign)]"
            data-cursor-hover
          >
            <div className="relative h-full min-h-[68vh]">
              <Image
                src="/collection-section/5.jpg"
                alt="Bint Saeed charm collection"
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover object-center scale-[1.08] transition-transform duration-700 group-hover:scale-[1.12]"
              />
            </div>
          </LocaleLink>
      </div>
    </section>
  )
}

function CharmHeroFeatureSectionMirror() {
  const { isRTL } = useLanguage()

  return (
    <section data-story-section className="section-full bs-full-bleed relative overflow-hidden bg-transparent py-0">
      <div className="grid min-h-[68vh] w-full items-stretch lg:grid-cols-2">
        <LocaleLink
          data-reveal
          href="/accessories?category=abaya-charms"
          className="group relative overflow-hidden bg-[var(--color-sovereign)]"
          data-cursor-hover
        >
          <div className="relative h-full min-h-[68vh]">
            <Image
              src="/88.jpg"
              alt="Bint Saeed charm collection"
              fill
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(114,32,48,0.48)_0%,rgba(114,32,48,0.24)_45%,rgba(114,32,48,0.32)_100%)]" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1a0210]/90 via-[#1a0210]/74 to-transparent" />
          </div>
        </LocaleLink>

        <div className={`relative flex items-center bg-[#1a0210] p-6 md:p-10 lg:p-14 ${isRTL ? 'text-right' : ''}`}>
          <div className="absolute inset-0 opacity-28">
            <Image
              src="/background1.JPG"
              alt="Bint Saeed charm collection"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(114,32,48,0.44)_0%,rgba(114,32,48,0.18)_45%,rgba(114,32,48,0.28)_100%)]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a0210]/96 via-[#1a0210]/88 to-[#1a0210]/80" />
          <div className="relative z-10 max-w-[640px]">
            <p data-reveal className="font-montserrat text-[11px] font-medium uppercase tracking-[0.15em] text-brand-dustyBlue">
              Charm Feature
            </p>
            <h2 data-reveal className="mt-3 font-rozha text-3xl leading-tight text-[#e8d8c8] md:text-4xl">
              Natural Stone Charms
            </h2>
            <p data-reveal className="mt-4 font-montserrat text-sm leading-relaxed tracking-[0.02em] text-[#8a7a70]">
              Designed for abayas, bags, and phone styling. Build your signature stack with curated stones and limited edition drops.
            </p>

            <div data-reveal className={`mt-5 flex flex-wrap gap-2 ${isRTL ? 'justify-end' : ''}`}>
              {CHARM_SWATCHES.map((stone) => (
                <span
                  key={`mirror-${stone.name}`}
                  className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-muted)]/25 bg-[var(--color-light)] px-3 py-1.5 font-montserrat text-[10px] uppercase tracking-[0.14em] text-[var(--color-ink)]"
                >
                  <span className="h-2.5 w-2.5 rounded-full border border-[var(--color-ink)]/12" style={{ backgroundColor: stone.hex }} />
                  {stone.name}
                </span>
              ))}
            </div>

            <div data-reveal className={`mt-6 flex flex-wrap gap-3 ${isRTL ? 'justify-end' : ''}`}>
              <LocaleLink
                href="/accessories?category=abaya-charms"
                className="inline-flex min-h-[44px] items-center rounded-xl bg-[var(--color-signature)] px-5 font-montserrat text-[11px] uppercase tracking-[0.16em] text-[var(--color-on-dark)] transition-colors hover:bg-[var(--color-sovereign)]"
                data-cursor-hover
              >
                Shop Charms
              </LocaleLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function CampaignPanoramaSection() {
  const { isRTL } = useLanguage()

  return (
    <section className="relative w-full overflow-hidden bg-[#f6f2eb] py-0">
      <SectionStripes variant="soft" />
      <div className="relative w-full">
        <div className="relative aspect-[16/6] min-h-[220px] w-full overflow-hidden bg-brand-stone/15 md:min-h-[280px] lg:min-h-[360px]">
          <Image
            src="/gazelles.jpg"
            alt="Bint Saeed campaign panorama"
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority={false}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#1F0508]/22 via-transparent to-[#1F0508]/16" />
          <div className={`absolute bottom-6 z-[2] ${isRTL ? 'left-6 md:left-10 lg:left-14' : 'right-6 md:right-10 lg:right-14'}`}>
            <MagneticWrap>
              <LocaleLink
                href="/shop"
                className="group inline-flex min-h-[44px] min-w-[44px] cursor-pointer items-center gap-3 py-2 font-montserrat text-[11px] uppercase tracking-[0.28em] !text-brand-ivory w-fit border-b border-brand-ivory/45 transition-colors duration-500 hover:border-brand-dustyBlue hover:!text-brand-dustyBlue"
                data-cursor-hover
              >
                Shop Now
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
    image: '/collection-section/5.jpg',
  },
  {
    key: 'Personalisation',
    label: 'Personalisation',
    href: '/personalisation',
    image: '/Personalisation Page/secret pocket.JPG',
  },
] as const

function CategoryNavigationStrip() {
  const { isRTL } = useLanguage()
  const [active, setActive] = useState(0)

  const pricesByCategory = staticProducts.reduce<Record<string, number[]>>((acc, product) => {
    const key = product.category
    if (!acc[key]) acc[key] = []
    acc[key].push(product.price)
    return acc
  }, {})

  const categoryMeta: Record<string, { priceLabel: string; subline?: string }> = {
    Abayas: {
      priceLabel: `DHS ${Math.min(...(pricesByCategory.Abayas ?? [0])).toLocaleString()}-${Math.max(...(pricesByCategory.Abayas ?? [0])).toLocaleString()}`,
    },
    Kaftans: {
      priceLabel: `DHS ${Math.min(...(pricesByCategory.Kaftans ?? [0])).toLocaleString()}+`,
    },
    Sets: {
      priceLabel: `DHS ${Math.min(...(pricesByCategory.Sets ?? [0])).toLocaleString()}+`,
    },
    Accessories: {
      priceLabel: 'New in',
    },
    Personalisation: {
      priceLabel: 'Hidden pocket gift',
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
              alt={`${activeItem.label} preview`}
              fill
              sizes="(max-width: 1024px) 100vw, 1200px"
              className="object-cover object-center transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1f0508]/60 via-[#1f0508]/10 to-transparent" />
            <div className={`absolute bottom-4 ${isRTL ? 'left-4 text-right' : 'right-4 text-left'}`}>
              <p className="font-montserrat text-[10px] uppercase tracking-[0.22em] text-brand-dustyBlue/95">Category Focus</p>
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
  const { isRTL } = useLanguage()
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

  const sliderLabel = isRTL ? 'تحريك المعرض' : 'Scroll the curated selection'

  return (
    <section ref={sectionRef} data-story-section className="relative bg-brand-pageCanvas pb-14 pt-20 md:pb-18 md:pt-24 lg:pb-20 lg:pt-28">
      <SectionStripes variant="soft" />
      <div className="mx-auto mb-8 max-w-[1600px] px-6 lg:px-14">
        <h2 data-reveal className="text-center font-montserrat text-[11px] uppercase tracking-[0.26em] text-brand-dustyBlue">
          {isRTL ? 'تنسيقات مختارة' : 'CURATED STYLES'}
        </h2>
      </div>

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
          {[...quickProducts, ...quickProducts].map((product, idx) => (
            <LocaleLink
              key={`${product.id}-${idx}`}
              href={getProductHref(product)}
              className="group relative z-[2] mx-1.5 flex h-[25.35rem] w-[13.1rem] shrink-0 cursor-pointer flex-col border border-brand-stone/25 border-b-2 border-b-transparent bg-white transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:border-b-[#722030] hover:shadow-[0_14px_36px_rgba(25,10,16,0.08)] focus-visible:-translate-y-0.5 focus-visible:shadow-[0_14px_36px_rgba(25,10,16,0.08)] focus-visible:outline-none md:mx-2 md:h-[30.85rem] md:w-[16rem] lg:h-[32.35rem] lg:w-[16.8rem]"
              data-cursor-hover
            >
              {/* Images must not capture hits — stacked fill layers steal taps from the link otherwise */}
              <div className="relative h-[20.95rem] w-full shrink-0 overflow-hidden bg-[#f3f0ea] md:h-[25.85rem] lg:h-[27.15rem]">
                <SafeCarouselImage
                  src={product.images[0]}
                  alt={`${product.name} — product image | Bint Saeed`}
                  sizes="(max-width: 768px) 210px, (max-width: 1200px) 256px, 270px"
                  className="pointer-events-none object-cover object-top transition-all duration-[950ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-0 group-focus-visible:opacity-0 group-hover:scale-[1.03]"
                />
                <SafeCarouselImage
                  src={product.images[1] || product.images[0]}
                  alt={`${product.name} — alternate view | Bint Saeed`}
                  sizes="(max-width: 768px) 210px, (max-width: 1200px) 256px, 270px"
                  className="pointer-events-none object-cover object-center opacity-0 transition-all duration-[950ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-100 group-focus-visible:opacity-100 group-hover:scale-[1.03]"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-[#1F0508]/22 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
              <div className="flex min-h-[4.25rem] flex-1 flex-col justify-center gap-1.5 border-t border-brand-stone/20 px-2.5 py-2 md:min-h-[4.5rem] md:gap-2 md:px-3 md:py-2.5">
                <div className={`flex min-h-0 items-start gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <h3 className="min-w-0 flex-1 truncate font-montserrat text-[10.5px] uppercase tracking-[0.06em] text-brand-darkRed/88 leading-snug">
                    {product.name}
                  </h3>
                  <p className="shrink-0 whitespace-nowrap font-montserrat text-[10.5px] uppercase leading-snug tracking-[0.06em] text-[#722030]">
                    DHS. {product.price.toLocaleString()}
                  </p>
                </div>
                <div
                  className={`flex flex-wrap items-center gap-1 ${isRTL ? 'justify-end' : ''}`}
                  aria-label={isRTL ? 'ألوان متوفرة' : 'Available colours'}
                >
                  {product.colors.slice(0, 6).map((c) => (
                    <span
                      key={c.name}
                      title={c.name}
                      className="h-2 w-2 shrink-0 rounded-full border border-black/12 md:h-[9px] md:w-[9px]"
                      style={{ backgroundColor: c.hex }}
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
          ))}
          </div>
        </motion.div>
      </div>

      {quickProducts.length > 0 ? (
        <div className="pointer-events-auto relative z-[4] mx-auto mt-8 max-w-xl px-8 md:px-10">
          <label
            htmlFor="quick-shop-carousel-scrub"
            className="mb-2 block text-center font-montserrat text-[10px] uppercase tracking-[0.2em] text-brand-darkRed/55"
          >
            {sliderLabel}
          </label>
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
  const { t, isRTL } = useLanguage()
  // Preview-specific hero copy (English)
  const heroHeadline = 'FOR THE DAUGHTER IN EVERY WOMAN'
  const heroSubline = 'Carrying Heritage Forward.'
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.06])
  const titleY = useTransform(scrollYProgress, [0, 1], [0, 20])
  const introX = useTransform(scrollYProgress, [0, 1], [0, 14])

  return (
    <section ref={ref} data-story-section className="section-full relative h-[calc(100svh-64px)] min-h-[70svh] w-full">
      <SectionStripes variant="hero" />
      {/* Background — pointer-events-none so scaled layer never steals clicks from hero links */}
      <motion.div
        style={{ scale }}
        className="pointer-events-none absolute inset-0 overflow-hidden will-change-transform"
      >
        <Image
          src="/hero-image.JPG"
          alt="Bint Saeed"
          fill
          className="object-cover object-[center_30%] scale-[1.02] saturate-[0.88] contrast-[1.04] brightness-[0.97]"
          sizes="100vw"
          priority
        />
      </motion.div>

      {/* Content — parallax on copy only; CTA stays untransformed for reliable hit-testing */}
      <div className="relative z-20 flex h-full items-center pb-10 pt-20 lg:items-end lg:pb-16 lg:pt-0">
        <div className="section-inner w-full">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-[min(70vw,760px)] bg-gradient-to-r from-[#1a0210]/58 via-[#1a0210]/24 to-transparent" />
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
            <div className={`min-w-0 lg:col-span-8 xl:col-span-7 ${isRTL ? 'lg:col-start-6' : ''}`}>
              {/* initial={false}: avoid opacity:0 inline styles before hydration (looked "broken" / blank UI) */}
              <motion.div style={{ y }} className="pointer-events-none">
                <motion.h1 data-reveal data-document-h1="true" data-hero-h1="true"
                  initial={reduceMotion ? false : { opacity: 0, y: 22, filter: 'blur(6px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{ duration: 1.05, ease: [0.16, 1, 0.3, 1] }}
                  style={reduceMotion ? undefined : { y: titleY }}
                  className="mb-8 max-w-[85vw] font-rozha text-[clamp(32px,5vw,64px)] font-normal leading-[1.15] tracking-[-0.01em] !text-[#e8d8c8] md:max-w-[100vw] md:whitespace-nowrap"
                >
                  {heroHeadline}
                </motion.h1>

                <motion.p
                  data-reveal
                  initial={false}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
                  style={reduceMotion ? undefined : { x: introX }}
                  className="mb-6 max-w-md border-l-[2px] border-[#722030] pl-[14px] font-montserrat text-[15px] leading-[1.7] tracking-[0.02em] !text-[#e8d8c8] md:mb-8"
                >
                  {heroSubline}
                </motion.p>
              </motion.div>

              <motion.div
                data-reveal
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-30 flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-10"
              >
                <MagneticWrap className="w-full sm:w-fit">
                  <LocaleLink
                    href="/shop"
                    className="inline-block w-full rounded-[4px] bg-[#722030] px-8 py-[13px] text-center font-montserrat text-[12px] font-medium uppercase tracking-[0.1em] !text-[#e8d8c8] no-underline transition-colors duration-200 hover:bg-[#8a2d43] sm:w-auto"
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
                    className="inline-block w-full rounded-[4px] bg-transparent px-8 py-[13px] text-center font-montserrat text-[12px] font-medium uppercase tracking-[0.1em] !text-[#c8b8a8] no-underline transition-colors duration-200 hover:!text-[#e8d8c8] sm:w-auto"
                    data-cursor-hover
                    data-analytics-event="click_nav_about"
                    data-analytics-section="home-hero"
                  >
                    Brand Story
                  </LocaleLink>
                </MagneticWrap>
              </motion.div>
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
  const { isRTL } = useLanguage()

  return (
    <section ref={ref} data-story-section className="section-full relative overflow-hidden bg-transparent py-16 md:py-20 lg:py-24">
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
            <div className="relative h-full min-h-[26rem] overflow-hidden border-y border-[#2a1e18]/10 border-l-[3px] border-l-[#722030] bg-[#1a0210] p-[52px] shadow-[0_22px_56px_rgba(23,9,14,0.22)] md:min-h-[30rem] md:p-[62px] lg:min-h-[34rem] lg:border-r lg:border-[#2a1e18]/10">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_95%_68%_at_50%_0%,rgba(106,128,144,0.16)_0%,transparent_62%)]" />
              <div className={`relative flex h-full flex-col justify-center ${isRTL ? 'items-start text-left' : 'items-end text-right'}`}>
                <span className="mb-5 block font-montserrat text-[11px] uppercase tracking-[0.3em] text-brand-dustyBlue">
                  From Abu Dhabi to the world
                </span>
                <p className="max-w-[30rem] font-rozha text-[clamp(24px,2.9vw,38px)] italic leading-[1.18] tracking-[-0.01em] text-[#e8d8c8]">
                  &ldquo;{MANIFESTO_QUOTE}&rdquo;
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
                <p className="font-montserrat text-[11px] font-medium uppercase tracking-[0.15em] text-brand-dustyBlue">MANIFESTO</p>
                <h2 className="font-rozha text-[clamp(24px,2.4vw,34px)] leading-[1.18] text-[#2a1e18]">
                  {MANIFESTO_LEAD}
                </h2>
                <div className="space-y-5 font-montserrat text-[16px] leading-[1.68] tracking-[0.01em] text-[#8a7a70]">
                  {MANIFESTO_SNIPPET.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
                <MagneticWrap className="w-fit">
                  <LocaleLink
                    href="/about"
                    className="inline-flex min-h-[46px] items-center rounded-[3px] border border-[#b0a090] bg-transparent px-6 font-montserrat text-[11px] uppercase tracking-[0.08em] text-[#8a7a70] transition-colors hover:border-[#8a7a70] hover:text-[#2a1e18]"
                    data-cursor-hover
                  >
                    Read our story
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

function MagazineGrid() {
  const ref = useRef<HTMLDivElement | null>(null)
  const isInView = useInView(ref, { margin: '-10%', once: true })
  const { t, isRTL } = useLanguage()
  const collectionCards = [
    {
      images: [
        '/Webshop%20pictures/Abayas/Covent%20Garden%20Abaya%20/Covent%20Garden%20Abaya-S.JPG',
        '/Webshop%20pictures/Abayas/Park%20Lane%20Abaya/Park%20Lane%20Abaya-%20B.JPG',
        '/collection-section/2.PNG',
      ],
      label: 'Abayas',
      href: '/shop',
      section: 'home-collection-card-abayas',
    },
    {
      images: [
        '/Webshop%20pictures/Caftans/Mayfair%20Kaftan/Mayfair%20Kaftan-%20S.JPG',
        '/Webshop%20pictures/Caftans/Mayfair%20Kaftan/Mayfair%20Kaftan-%20F.JPG',
        '/collection-section/8.png',
      ],
      label: 'Kaftans',
      href: '/shop',
      section: 'home-collection-card-kaftans',
    },
    {
      images: [
        '/Webshop%20pictures/Sets/Covent%20Garden%20Set/Covent%20Garden%20Set-%20S.JPG',
        '/Webshop%20pictures/Sets/Soho%20Set/Soho%20Set-%20B.JPG',
      ],
      label: 'Sets',
      href: '/shop',
      section: 'home-collection-card-sets',
    },
    {
      images: [
        '/Webshop%20pictures/accessoiries/necklaces/malachite-necklace.PNG',
        '/Webshop%20pictures/accessoiries/phone%20charm/phone%20charm.png',
      ],
      label: 'Accessories',
      href: '/accessories',
      section: 'home-collection-card-accessories',
    },
  ] as const

  return (
    <section ref={ref} data-story-section data-collection-chapter className="section-full relative overflow-hidden bg-[#faf8f5] py-10 md:py-12">
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75 }}
          className={`mb-8 flex items-end justify-between md:mb-10 ${isRTL ? 'flex-row-reverse' : ''}`}
        >
          <div data-reveal>
            <span className="mb-3 block font-montserrat text-[11px] font-medium uppercase tracking-[0.15em] text-brand-dustyBlue">
              Collection Edit
            </span>
            <h2 className="font-rozha text-4xl text-[var(--color-ink)] md:text-5xl">The Collection</h2>
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
  const dir = 'The Codes Page'
  return `/${encodeURIComponent(dir)}/${encodeURIComponent(fileName)}`
}

function EditorialSplit() {
  const ref = useRef<HTMLDivElement | null>(null)
  const isInView = useInView(ref, { margin: '-12%', once: true })
  const { isRTL } = useLanguage()
  const storyCodes = [
    { title: 'The Monogram', subtitle: 'Signature mark', image: homeCodesImage('monogram.jpg') },
    { title: 'Khous', subtitle: 'Palm craftsmanship', image: homeCodesImage('khous.jpg') },
    { title: 'Knotted Lines', subtitle: 'Line & continuity', image: homeCodesImage('Knotted Lines Of Lineage.jpg') },
    { title: 'Al Ain Rosette', subtitle: 'Regional motif', image: homeCodesImage('Al Quaa Rosette.jpg') },
    { title: 'Al Talli', subtitle: 'Gold threadwork', image: homeCodesImage('talli.jpg.jpg') },
  ] as const

  return (
    <section ref={ref} data-story-section className="section-full bg-[#faf8f5] py-14 md:py-16">
      <div className="w-full px-4 md:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={`mb-5 flex items-end justify-between ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
            <div>
              <p className="mb-2 font-montserrat text-[11px] font-medium uppercase tracking-[0.15em] text-brand-dustyBlue">
                House Codes
              </p>
              <h2 className="font-rozha text-3xl text-[#2a1e18] md:text-4xl">The House Codes</h2>
            </div>
            <LocaleLink
              href="/the-codes"
              className="inline-flex min-h-[40px] items-center font-montserrat text-[11px] uppercase tracking-[0.12em] text-brand-dustyBlue transition-colors hover:text-[#2a1e18]"
              data-cursor-hover
              data-analytics-event="click_view_collection_codes_page"
              data-analytics-section="home-codes-section"
            >
              Discover the Codes
            </LocaleLink>
          </div>

          <div className="grid grid-cols-2 border-t border-[#e8ddd4] max-[640px]:grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
            {storyCodes.map((code, index) => (
              <LocaleLink
                key={code.title}
                href="/the-codes"
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
                    alt={code.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <h3 className="mt-2 border-b border-[#e8ddd4] pb-3 font-montserrat text-[14px] font-medium tracking-[0.01em] text-[#2a1e18]">
                  {code.title}
                </h3>
              </LocaleLink>
            ))}
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
  const { isRTL } = useLanguage()

  return (
    <section ref={ref} data-story-section data-curtain-reveal className="section-full relative overflow-hidden bg-[#722030] py-14 md:py-16">
      <div className="section-inner relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className={`overflow-hidden rounded-2xl border border-[rgba(232,216,200,0.25)] bg-[#722030] px-6 py-8 shadow-[0_16px_42px_rgba(46,25,14,0.12)] md:px-10 md:py-10 ${isRTL ? 'text-right' : 'text-center'}`}
        >
          <p className="mb-3 font-montserrat text-[11px] font-medium uppercase tracking-[0.15em] text-brand-dustyBlue">Carried Close</p>
          <h2 className="mx-auto max-w-3xl font-rozha text-4xl leading-tight text-[#e8d8c8] md:text-5xl">
            PERSONALISATION
          </h2>
          <p className={`mx-auto mt-4 max-w-4xl font-montserrat text-lg leading-[1.6] tracking-[0.01em] text-[rgba(232,216,200,0.7)] ${isRTL ? 'text-right' : 'text-center'}`}>
            Every piece includes a hidden pocket, personalised with a name, date, or private message. Perfect for Eid, weddings, and milestones.
          </p>
          <div className={`mt-7 flex flex-wrap gap-3 ${isRTL ? 'justify-end' : 'justify-center'}`}>
            <LocaleLink
              href="/shop"
              className="inline-flex min-h-[46px] items-center rounded-xl bg-[#e8d8c8] px-6 font-montserrat text-[12px] uppercase tracking-[0.16em] text-[#722030] transition-colors hover:bg-[#f2e5d8]"
              data-cursor-hover
              data-analytics-event="click_personalisation_teaser"
              data-analytics-section="home-personalisation-teaser"
            >
              SHOP
            </LocaleLink>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
