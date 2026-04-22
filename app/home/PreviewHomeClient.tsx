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
  '/collection-section/4.JPG',
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

const MANIFESTO_PARAGRAPHS = [
  'A house shaped by origin, carried across the world.',
  'It belongs to a way of living that moves between places with ease. From Abu\u00A0Dhabi to Paris, from London to Riyadh, the same presence remains. A sense of self that does not shift with setting, and a way of dressing that follows it naturally.',
  'Each creation exists within that continuity. Not defined by location, but recognised by its consistency. A clear visual language that holds its place wherever it is worn.',
  'Origin, expressed in form, in attitude, in the way you are recognised.',
  'Bint Saeed exists at that intersection. Between heritage and a contemporary life lived locally and across borders. Between where you come from and where you are going. Between what you\'ve inherited and how you present yourself today.',
]

export default function Home() {
  const { isRTL } = useLanguage()
  
  return (
    <div className={`relative min-h-0 overflow-x-clip ${isRTL ? 'rtl' : 'ltr'}`}>
      <HeroSection />
      <EditorialIntro />
      <MagazineGrid />
      <QuickShopCarousel />
      <EditorialSplit />
      <CreatedForYouSection />
    </div>
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
  const loopStartRef = useRef(0)

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
    <section className="relative bg-brand-pageCanvas pb-14 pt-20 md:pb-18 md:pt-24 lg:pb-20 lg:pt-28">
      <SectionStripes variant="soft" />
      <div className="mx-auto mb-8 max-w-[1600px] px-6 lg:px-14">
        <p className="text-center font-montserrat text-[11px] uppercase tracking-[0.26em] text-brand-darkRed">
          {isRTL ? 'اختيار منسق' : 'CURATED SELECTION'}
        </p>
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
              className="group relative z-[2] mx-1.5 flex h-[25.35rem] w-[13.1rem] shrink-0 cursor-pointer flex-col border border-brand-stone/25 bg-white transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(25,10,16,0.08)] focus-visible:-translate-y-0.5 focus-visible:shadow-[0_14px_36px_rgba(25,10,16,0.08)] focus-visible:outline-none md:mx-2 md:h-[30.85rem] md:w-[16rem] lg:h-[32.35rem] lg:w-[16.8rem]"
              data-cursor-hover
            >
              {/* Images must not capture hits — stacked fill layers steal taps from the link otherwise */}
              <div className="relative h-[20.95rem] w-full shrink-0 overflow-hidden bg-[#f3f0ea] md:h-[25.85rem] lg:h-[27.15rem]">
                <Image
                  src={product.images[0]}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 210px, (max-width: 1200px) 256px, 270px"
                  className="pointer-events-none object-cover object-top transition-all duration-[950ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-0 group-focus-visible:opacity-0 group-hover:scale-[1.03]"
                  aria-hidden
                />
                <Image
                  src={product.images[1] || product.images[0]}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 210px, (max-width: 1200px) 256px, 270px"
                  className="pointer-events-none object-cover object-center opacity-0 transition-all duration-[950ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-100 group-focus-visible:opacity-100 group-hover:scale-[1.03]"
                  aria-hidden
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-[#1F0508]/22 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
              <div className="flex min-h-[4.25rem] flex-1 flex-col justify-center gap-1.5 border-t border-brand-stone/20 px-2.5 py-2 md:min-h-[4.5rem] md:gap-2 md:px-3 md:py-2.5">
                <div className={`flex min-h-0 items-start gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <p className="min-w-0 flex-1 truncate font-montserrat text-[10.5px] uppercase tracking-[0.06em] text-brand-darkRed/88 leading-snug">
                    {product.name}
                  </p>
                  <p className="shrink-0 font-montserrat text-[10.5px] uppercase tracking-[0.06em] text-brand-darkRed whitespace-nowrap leading-snug">
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

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2])
  const titleY = useTransform(scrollYProgress, [0, 1], [0, 20])
  const titleTracking = useTransform(scrollYProgress, [0, 1], ['0.06em', '0.11em'])
  const introX = useTransform(scrollYProgress, [0, 1], [0, 14])

  return (
    <section ref={ref} className="relative h-[100svh] w-full">
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
          className="object-cover object-[center_28%] scale-[1.02] saturate-[0.88] contrast-[1.04] brightness-[0.97]"
          sizes="100vw"
          priority
        />
        {/* Editorial: soft left read-path + gentle vignette (magazine spread legibility) */}
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#1F0508]/88 via-[#3B0A12]/48 to-transparent md:from-[#1F0508]/82 md:via-[#3B0A12]/38"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1F0508]/78 via-transparent to-[#3B0A12]/28"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_70%_40%,transparent_0%,rgba(31,5,8,0.38)_100%)]"
          aria-hidden
        />
        {/* Paper / print grain */}
        <div
          className="absolute inset-0 opacity-[0.07] mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
          aria-hidden
        />
      </motion.div>

      {/* Content — parallax on copy only; CTA stays untransformed for reliable hit-testing */}
      <div className="relative z-20 flex h-full items-center pb-16 pt-24 lg:items-end lg:pb-24 lg:pt-0">
        <div className="container mx-auto w-full px-6 lg:px-16">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
            <div className={`min-w-0 lg:col-span-8 xl:col-span-7 ${isRTL ? 'lg:col-start-6' : ''}`}>
              {/* initial={false}: avoid opacity:0 inline styles before hydration (looked "broken" / blank UI) */}
              <motion.div style={{ y }} className="pointer-events-none">
                <motion.h1 data-document-h1="true"
                  initial={false}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  style={reduceMotion ? undefined : { y: titleY, letterSpacing: titleTracking }}
                  className="mb-8 max-w-[100vw] font-rozha uppercase leading-[1.12] tracking-[0.06em] !text-brand-ivory text-[clamp(0.7rem,calc(0.35rem+2.15vw),2.65rem)] sm:text-[clamp(0.85rem,calc(0.4rem+2.35vw),2.75rem)] md:text-[clamp(0.95rem,calc(0.45rem+2.5vw),2.85rem)] md:whitespace-nowrap"
                >
                  {heroHeadline}
                </motion.h1>

                <motion.p
                  initial={false}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
                  style={reduceMotion ? undefined : { x: introX }}
                  className="mb-6 max-w-md border-s border-brand-ivory/22 ps-5 font-montserrat text-sm leading-[1.75] tracking-[0.02em] !text-brand-ivory/92 md:mb-8 md:ps-6 md:text-[15px]"
                >
                  {heroSubline}
                </motion.p>
              </motion.div>

              <motion.div
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-30 flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-10"
              >
                <MagneticWrap className="w-fit">
                  <LocaleLink
                    href="/shop"
                    className="group inline-flex min-h-[44px] min-w-[44px] cursor-pointer items-center gap-3 py-2 font-montserrat text-[11px] uppercase tracking-[0.28em] !text-brand-ivory w-fit border-b border-brand-ivory/45 transition-colors duration-500 hover:border-brand-dustyBlue hover:!text-brand-dustyBlue"
                    data-cursor-hover
                    data-analytics-event="click_cta_home_to_collection"
                    data-analytics-section="home-hero"
                  >
                    {t.hero.discoverCollection}
                    <FiArrowRight
                      className={`h-4 w-4 transition-transform duration-500 ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`}
                    />
                  </LocaleLink>
                </MagneticWrap>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll — editorial caption style */}
      <motion.div
        initial={false}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.4 }}
        className="pointer-events-none absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-montserrat text-[9px] uppercase tracking-[0.5em] text-brand-ivory/45">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          className="h-8 w-px bg-gradient-to-b from-brand-ivory/50 to-transparent"
          aria-hidden
        />
      </motion.div>
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
  const imageY = useTransform(scrollYProgress, [0, 1], [56, -42])
  const imageOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.62, 1, 1, 0.72])
  const imageScale = useTransform(scrollYProgress, [0, 1], [0.97, 1.03])
  const panelY = useTransform(scrollYProgress, [0, 1], [14, -12])
  const { isRTL } = useLanguage()

  return (
    <section ref={ref} className="relative overflow-hidden bg-white py-24 md:py-32 lg:py-36">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(248,244,238,0.9)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_110%_70%_at_18%_12%,rgba(146,170,193,0.2)_0%,transparent_58%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_95%_65%_at_82%_84%,rgba(193,144,134,0.16)_0%,transparent_62%)]" />

      <div className="relative container mx-auto px-6 lg:px-16">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            style={{ y: panelY }}
            className={`lg:col-span-5 ${isRTL ? 'lg:col-start-8' : ''}`}
          >
            <div className="relative border border-brand-stone/20 bg-[#fbf9f6] p-7 shadow-[0_18px_45px_rgba(35,18,23,0.06)] md:p-10">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_8%_10%,rgba(146,170,193,0.1)_0%,transparent_55%)]" />
              <div
                className={`relative ${isRTL ? 'border-e border-brand-dustyBlue/35 pe-5 md:pe-6' : 'border-s border-brand-dustyBlue/35 ps-5 md:ps-6'}`}
              >
                <span className="relative mb-6 block font-montserrat text-[10px] uppercase tracking-[0.4em] text-brand-dustyBlue">
                  Manifesto
                </span>
                <h2 className="mb-8 font-rozha text-3xl leading-[1.15] text-brand-darkRed md:text-4xl">
                  {MANIFESTO_LEAD}
                </h2>
                <div className="space-y-6 font-montserrat text-sm leading-[1.9] tracking-wide text-brand-darkRed/75">
                  {MANIFESTO_PARAGRAPHS.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ y: imageY, opacity: imageOpacity }}
            className={`lg:col-span-7 ${isRTL ? 'lg:col-start-1' : ''}`}
          >
            <motion.div style={{ scale: imageScale }} className="relative ml-auto aspect-[4/5] w-full max-w-[39rem]">
              <ScrollMaskImage
                src="/image 1.png"
                alt="Heritage meets modernity"
                sizes="(max-width: 1024px) 92vw, 39rem"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function MagazineGrid() {
  const ref = useRef(null)
  const isInView = useInView(ref, { margin: '-10%', once: true })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const leadY = useTransform(scrollYProgress, [0, 1], [28, -26])
  const sideY = useTransform(scrollYProgress, [0, 1], [44, -14])
  const { t, isRTL } = useLanguage()

  return (
    <section ref={ref} className="relative overflow-hidden bg-white py-14 md:py-18">
      <div className="container mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75 }}
          className={`mb-8 flex items-end justify-between md:mb-10 ${isRTL ? 'flex-row-reverse' : ''}`}
        >
          <div>
            <span className="mb-3 block font-montserrat text-[10px] uppercase tracking-[0.4em] text-brand-dustyBlue">
              The first chapter
            </span>
            <h2 className="font-rozha text-4xl text-brand-darkRed md:text-5xl">
              Where it Begins
            </h2>
          </div>
          <LocaleLink
            href="/shop"
            className="hidden items-center gap-2 font-montserrat text-xs uppercase tracking-[0.2em] text-brand-darkRed transition-colors hover:text-brand-dustyBlue md:flex"
            data-cursor-hover
            data-analytics-event="click_cta_home_to_collection"
            data-analytics-section="home-where-it-begins-header"
          >
            {t.featured.viewAll}
            <FiArrowRight className="w-4 h-4" />
          </LocaleLink>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-12 md:gap-6 lg:gap-7">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.05 }}
            style={{ y: leadY }}
            className="md:col-span-7"
          >
            <LocaleLink
              href="/shop"
              className="group block overflow-hidden bg-brand-stone/10 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1"
              data-cursor-hover
              data-analytics-event="click_cta_home_to_collection"
              data-analytics-section="home-where-it-begins-featured-card"
            >
              <div className="relative aspect-[4/5] md:aspect-[10/9]">
                <Image
                  src="/collection-section/1.png"
                  alt="Designed to carry you, wherever you are — Bint Saeed collection"
                  fill
                  sizes="(max-width: 768px) 100vw, 58vw"
                  className="pointer-events-none object-cover object-top transition-transform duration-1000 group-hover:scale-[1.03]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-darkRed/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                  <span className="mb-3 block font-montserrat text-[10px] uppercase tracking-[0.3em] text-brand-dustyBlue">
                    Chapter I
                  </span>
                  <h3 className="mb-4 max-w-xl font-rozha text-2xl leading-snug text-brand-ivory md:text-3xl lg:text-4xl">
                    Designed to carry you,
                    <br />
                    wherever you are.
                  </h3>
                  <span className="inline-flex items-center gap-2 font-montserrat text-xs uppercase tracking-[0.2em] text-brand-ivory/88 transition-colors group-hover:text-brand-dustyBlue">
                    Discover the collection
                    <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </LocaleLink>
          </motion.div>

          <div className="grid grid-cols-2 gap-5 md:col-span-5 md:grid-cols-1 md:gap-6 lg:gap-7">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, delay: 0.12 }}
              style={{ y: sideY }}
            >
              <LocaleLink
                href="/shop"
                className="group block overflow-hidden bg-brand-dustyBlue transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1"
                data-cursor-hover
                data-analytics-event="click_cta_home_to_collection"
                data-analytics-section="home-where-it-begins-secondary-card-a"
              >
                <div className="relative aspect-square md:aspect-[16/10]">
                  <div className="pointer-events-none absolute inset-0 transition-transform duration-[1100ms] ease-[cubic-bezier(0.33,0,0.2,1)] group-hover:scale-[1.03]">
                    <CollectionCrossfadeSlideshow
                      slides={SUMMER_ELEGANCE_SLIDES}
                      altForIndex={(i) =>
                        i === 0
                          ? 'Bint Saeed collection — detail'
                          : 'Bint Saeed collection — craftsmanship'
                      }
                    />
                  </div>
                </div>
              </LocaleLink>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, delay: 0.2 }}
              style={{ y: sideY }}
            >
              <LocaleLink
                href="/shop"
                className="group block overflow-hidden bg-brand-rose transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1"
                data-cursor-hover
                data-analytics-event="click_cta_home_to_collection"
                data-analytics-section="home-where-it-begins-secondary-card-b"
              >
                <div className="relative aspect-square md:aspect-[16/10]">
                  <div className="pointer-events-none absolute inset-0 transition-transform duration-[1100ms] ease-[cubic-bezier(0.33,0,0.2,1)] group-hover:scale-[1.03]">
                    <CollectionCrossfadeSlideshow
                      slides={ESSENTIALS_SLIDES}
                      altForIndex={(i) => `Bint Saeed collection — ${i + 1}`}
                    />
                  </div>
                </div>
              </LocaleLink>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

const CODES_LIST_ITEMS = [
  'Al Talli',
  'Khous',
  'Al Ain Rosette',
  'Knotted Lines',
  'The Monogram',
] as const

function EditorialSplit() {
  const ref = useRef(null)
  const isInView = useInView(ref, { margin: '-20%', once: true })
  const { isRTL } = useLanguage()

  return (
    <section ref={ref} className="bg-white">
      <div className="grid lg:grid-cols-2 min-h-screen">
        {/* Left — header palette gradient + centered monogram (matches components/Header.tsx bar) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="relative flex min-h-[60vh] items-center justify-center overflow-hidden lg:min-h-screen"
        >
          <div
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,#1F0508_0%,#2a1014_22%,#5A1A22_50%,#2a1014_78%,#1F0508_100%)]"
            aria-hidden
          />
          <div className="relative z-[1] flex w-full items-center justify-center px-10 py-16">
            <Image
              src="/gold%20logo.png"
              alt="Bint Saeed monogram"
              width={400}
              height={400}
              className="h-auto w-[min(72vw,13rem)] object-contain sm:w-[min(64vw,15rem)] md:w-64 lg:w-72"
              priority={false}
            />
          </div>
        </motion.div>

        {/* Right - Content with elegant gradient */}
        <div className="relative flex items-center overflow-hidden bg-gradient-to-br from-white via-brand-rose/10 to-brand-stone/30">
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className={`p-12 lg:p-20 ${isRTL ? 'text-right' : ''}`}
          >
            <div
              className={`mb-8 md:mb-10 ${isRTL ? 'border-e border-brand-dustyBlue/35 pe-5 md:pe-6' : 'border-s border-brand-dustyBlue/35 ps-5 md:ps-6'}`}
            >
              <span className="mb-3 block font-montserrat text-[10px] uppercase tracking-[0.38em] text-brand-darkRed/55">
                HOUSE LANGUAGE
              </span>
              <h2 className="font-rozha text-4xl leading-[1.1] text-brand-darkRed md:text-5xl">
                The Codes
              </h2>
            </div>

            <ul className={`mb-12 space-y-3 md:mb-14 ${isRTL ? 'list-inside text-right' : ''}`}>
              {CODES_LIST_ITEMS.map((item) => (
                <li key={item} className="font-montserrat text-sm tracking-wide text-brand-darkRed/80">
                  {item}
                </li>
              ))}
            </ul>

            <p className="mb-12 max-w-md font-montserrat text-sm tracking-wide text-brand-darkRed/72 md:mb-14">
              Recognised without introduction.
            </p>

            <MagneticWrap className="w-fit">
              <LocaleLink
                href="/the-codes"
                className={`group inline-flex min-h-[44px] items-center gap-3 py-2 font-montserrat text-xs uppercase tracking-[0.2em] text-brand-darkRed transition-colors duration-300 border-b border-brand-darkRed/35 hover:border-brand-dustyBlue hover:text-brand-dustyBlue ${isRTL ? 'flex-row-reverse' : ''}`}
                data-cursor-hover
                data-analytics-event="click_view_collection_codes_page"
                data-analytics-section="home-codes-section"
              >
                Discover the Codes
                <FiArrowRight className={`w-4 h-4 group-hover:translate-x-2 transition-transform duration-300 ${isRTL ? 'rotate-180' : ''}`} />
              </LocaleLink>
            </MagneticWrap>
          </motion.div>
        </div>
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

/** Section 6 — personalisation bridge (homepage -> personalisation -> shop -> checkout) */
function CreatedForYouSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { margin: '-12%', once: true })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const cardY = useTransform(scrollYProgress, [0, 1], [40, -16])
  const imageY = useTransform(scrollYProgress, [0, 1], [72, -28])
  const imageOpacity = useTransform(scrollYProgress, [0, 0.18, 0.85, 1], [0.54, 1, 1, 0.72])
  const imageScale = useTransform(scrollYProgress, [0, 1], [0.95, 1.04])
  const { isRTL } = useLanguage()

  return (
    <section ref={ref} className="relative overflow-hidden py-24 md:py-36 lg:py-40">
      <div className="pointer-events-none absolute inset-0 bg-brand-pageCanvas" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_12%_10%,rgba(146,170,193,0.16)_0%,transparent_48%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_120%_90%_at_86%_82%,rgba(193,144,134,0.10)_0%,transparent_60%)]" />
      <div className="relative container mx-auto px-6 lg:px-16">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            style={{ y: cardY }}
            className={`flex justify-center ${isRTL ? 'lg:order-2' : 'lg:order-1'}`}
          >
            <div className="relative w-full max-w-xl lg:max-w-[36rem]">
              <div className="relative overflow-hidden border border-[#d8d1c6] bg-[#f8f5ef]/96 shadow-[0_20px_56px_rgba(18,8,11,0.14)]">
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(140deg,rgba(255,255,255,0.7)_0%,rgba(243,238,228,0.86)_48%,rgba(233,226,213,0.82)_100%)]" />
                <div
                  className={`relative flex flex-col gap-8 px-10 py-12 sm:px-12 md:py-14 ${isRTL ? 'items-end text-right' : 'items-start text-left'}`}
                >
                  <div
                    className={`${isRTL ? 'border-e border-brand-dustyBlue/35 pe-5 md:pe-6' : 'border-s border-brand-dustyBlue/35 ps-5 md:ps-6'}`}
                  >
                    <span className="font-montserrat text-[10px] uppercase tracking-[0.45em] text-brand-dustyBlue/75">
                      Bint Saeed
                    </span>
                    <h2 className="mt-3 font-rozha text-3xl text-balance text-brand-darkRed tracking-[-0.02em] sm:text-4xl md:mt-4 md:text-[2.35rem] md:leading-[1.12]">
                      CARRIED CLOSE
                    </h2>
                  </div>
                  <div className="max-w-md space-y-5 font-montserrat text-sm leading-[1.9] tracking-wide text-brand-darkRed/80 lg:max-w-lg">
                    <p>Some things are not meant to be seen, but kept close.</p>
                    <p>
                      Each Bint Saeed piece includes a discreet space within it, where a name, a date, or a private
                      message can be placed. Covered inside a small pocket, it becomes something you carry with you,
                      known only to you or to the person it was created for.
                    </p>
                    <p>A gesture that turns what you wear into something personal.</p>
                  </div>
                  <div
                    className={`flex w-full flex-col gap-6 sm:gap-7 ${isRTL ? 'items-end lg:items-stretch' : 'items-start lg:items-stretch'}`}
                  >
                    <MagneticWrap className={isRTL ? 'self-end' : 'self-start'}>
                      <LocaleLink
                        href="/personalisation"
                        className={`group inline-flex min-h-[44px] items-center gap-3 border-b border-brand-darkRed/35 py-2 font-montserrat text-xs uppercase tracking-[0.18em] text-brand-darkRed transition-colors duration-300 hover:border-brand-dustyBlue hover:text-brand-dustyBlue ${isRTL ? 'flex-row-reverse' : ''}`}
                        data-cursor-hover
                        data-analytics-event="click_personalisation_teaser"
                        data-analytics-section="home-personalisation-teaser"
                      >
                        DISCOVER PERSONALISATION
                        <FiArrowRight
                          className={`h-4 w-4 transition-transform duration-300 ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`}
                        />
                      </LocaleLink>
                    </MagneticWrap>
                    <p className="font-montserrat text-[11px] uppercase tracking-[0.22em] text-brand-dustyBlue/75">
                      Add your message when selecting your piece.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            style={{ y: imageY, opacity: imageOpacity }}
            className={`flex justify-center ${isRTL ? 'lg:order-1' : 'lg:order-2'}`}
          >
            <div className="relative w-full max-w-xl lg:max-w-[36rem]">
              <div className="pointer-events-none absolute inset-x-8 -bottom-6 h-16 bg-[#b9b0a2]/28 blur-2xl" />
              <motion.div style={{ scale: imageScale }} className="relative aspect-[3/4] w-full">
                <ScrollMaskImage
                  src="/Personalisation%20Page/secret%20pocket.JPG"
                  alt="Personalisation detail placeholder — hidden pocket"
                  sizes="(max-width: 1024px) 90vw, 36rem"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1F0508]/28 via-transparent to-transparent" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
