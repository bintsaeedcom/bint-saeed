'use client'

import { useRef, useState, useEffect } from 'react'
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useReducedMotion,
  useMotionValue,
  useSpring,
  useMotionTemplate,
} from 'framer-motion'
import LocaleLink from '@/components/LocaleLink'
import Image from 'next/image'
import { FiArrowRight, FiArrowDown } from 'react-icons/fi'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { products as staticProducts } from '@/data/products'
import type { Product } from '@/data/products'

// Reusable decorative corner component (from Coming Soon)
function DecorativeCorners({ color = 'dustyBlue' }: { color?: 'dustyBlue' | 'darkRed' | 'stone' }) {
  const colorClass = color === 'dustyBlue' 
    ? 'from-brand-dustyBlue/40' 
    : color === 'darkRed' 
    ? 'from-brand-darkRed/30' 
    : 'from-brand-stone/40'
  
  return (
    <>
      <motion.div 
        className="absolute top-8 left-8 w-16 h-16 md:w-24 md:h-24 pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className={`absolute top-0 left-0 w-full h-px bg-gradient-to-r ${colorClass} to-transparent`} />
        <div className={`absolute top-0 left-0 w-px h-full bg-gradient-to-b ${colorClass} to-transparent`} />
      </motion.div>
      <motion.div 
        className="absolute top-8 right-8 w-16 h-16 md:w-24 md:h-24 pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.1 }}
      >
        <div className={`absolute top-0 right-0 w-full h-px bg-gradient-to-l ${colorClass} to-transparent`} />
        <div className={`absolute top-0 right-0 w-px h-full bg-gradient-to-b ${colorClass} to-transparent`} />
      </motion.div>
      <motion.div 
        className="absolute bottom-8 left-8 w-16 h-16 md:w-24 md:h-24 pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <div className={`absolute bottom-0 left-0 w-full h-px bg-gradient-to-r ${colorClass} to-transparent`} />
        <div className={`absolute bottom-0 left-0 w-px h-full bg-gradient-to-t ${colorClass} to-transparent`} />
      </motion.div>
      <motion.div 
        className="absolute bottom-8 right-8 w-16 h-16 md:w-24 md:h-24 pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <div className={`absolute bottom-0 right-0 w-full h-px bg-gradient-to-l ${colorClass} to-transparent`} />
        <div className={`absolute bottom-0 right-0 w-px h-full bg-gradient-to-t ${colorClass} to-transparent`} />
      </motion.div>
    </>
  )
}

function SectionStripes({
  variant = 'default',
}: {
  variant?: 'default' | 'hero' | 'soft' | 'bold'
}) {
  const ref = useRef<HTMLDivElement | null>(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const driftA = useTransform(scrollYProgress, [0, 1], [0, 10])
  const driftB = useTransform(scrollYProgress, [0, 1], [0, -8])
  const pulse = useTransform(scrollYProgress, [0, 0.5, 1], [0.78, 1, 0.8])

  const styles =
    variant === 'hero'
      ? {
          v1: 'left-[6%] top-0 h-full w-px bg-gradient-to-b from-transparent via-white/30 to-transparent',
          v2: 'right-[7%] top-0 h-full w-px bg-gradient-to-b from-transparent via-brand-dustyBlue/45 to-transparent',
          h1: 'left-10 right-10 top-16 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent',
          h2: 'left-10 right-10 bottom-14 h-px bg-gradient-to-r from-transparent via-white/22 to-transparent',
        }
      : variant === 'soft'
      ? {
          v1: 'left-[7%] top-0 h-full w-px bg-gradient-to-b from-transparent via-brand-dustyBlue/30 to-transparent',
          v2: 'right-[8%] top-0 h-full w-px bg-gradient-to-b from-transparent via-brand-clayRed/25 to-transparent',
          h1: 'left-[8%] right-[8%] top-0 h-px bg-gradient-to-r from-transparent via-brand-dustyBlue/30 to-transparent',
          h2: 'left-[8%] right-[8%] bottom-0 h-px bg-gradient-to-r from-transparent via-brand-clayRed/20 to-transparent',
        }
      : variant === 'bold'
      ? {
          v1: 'left-[5%] top-0 h-full w-px bg-gradient-to-b from-transparent via-brand-dustyBlue/55 to-transparent',
          v2: 'right-[5%] top-0 h-full w-px bg-gradient-to-b from-transparent via-brand-dustyBlue/40 to-transparent',
          h1: 'left-6 right-6 top-0 h-px bg-gradient-to-r from-transparent via-brand-dustyBlue/45 to-transparent',
          h2: 'left-6 right-6 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-dustyBlue/35 to-transparent',
        }
      : {
          v1: 'left-[6%] top-0 h-full w-px bg-gradient-to-b from-transparent via-brand-dustyBlue/36 to-transparent',
          v2: 'right-[6%] top-0 h-full w-px bg-gradient-to-b from-transparent via-brand-stone/35 to-transparent',
          h1: 'left-[7%] right-[7%] top-0 h-px bg-gradient-to-r from-transparent via-brand-dustyBlue/30 to-transparent',
          h2: 'left-[7%] right-[7%] bottom-0 h-px bg-gradient-to-r from-transparent via-brand-stone/26 to-transparent',
        }

  return (
    <div ref={ref} className="pointer-events-none absolute inset-0" aria-hidden>
      <motion.div
        style={reduceMotion ? undefined : { y: driftA, opacity: pulse }}
        className={`absolute ${styles.v1}`}
      />
      <motion.div
        style={reduceMotion ? undefined : { y: driftB, opacity: pulse }}
        className={`absolute ${styles.v2}`}
      />
      <motion.div
        style={reduceMotion ? undefined : { x: driftA, opacity: pulse }}
        className={`absolute ${styles.h1}`}
      />
      <motion.div
        style={reduceMotion ? undefined : { x: driftB, opacity: pulse }}
        className={`absolute ${styles.h2}`}
      />
    </div>
  )
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
  const topInset = useTransform(scrollYProgress, [0, 0.2, 1], [20, 0, 0])
  const bottomInset = useTransform(scrollYProgress, [0, 0.8, 1], [16, 0, 0])
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.08, 1])
  const imageY = useTransform(scrollYProgress, [0, 1], [22, -10])
  const veilOpacity = useTransform(scrollYProgress, [0, 0.3, 1], [0.28, 0.05, 0])
  const clipPath = useMotionTemplate`inset(${topInset}% 0% ${bottomInset}% 0%)`

  return (
    <div ref={ref} className={`relative h-full w-full overflow-hidden ${className}`}>
      <motion.div
        style={reduceMotion ? undefined : { clipPath }}
        className="absolute inset-0"
      >
        <motion.div style={reduceMotion ? undefined : { y: imageY, scale: imageScale }} className="relative h-full w-full">
          <Image src={src} alt={alt} fill sizes={sizes} className="object-cover" />
        </motion.div>
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
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused || slides.length < 2) return
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length)
    }, SLIDE_INTERVAL_MS)
    return () => window.clearInterval(id)
  }, [paused, slides.length])

  if (slides.length === 0) {
    return (
      <div className="relative h-full w-full min-h-[12rem] bg-[#0a0608]" aria-hidden />
    )
  }

  return (
    <div
      className="relative h-full w-full min-h-[12rem] overflow-hidden bg-[#0a0608]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
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
  'It belongs to a way of living that moves between places with ease. From Abu Dhabi to Paris, from London to Riyadh, the same presence remains. A sense of self that does not shift with setting, and a way of dressing that follows it naturally.',
  'Each creation exists within that continuity. Not defined by location, but recognised by its consistency. A clear visual language that holds its place wherever it is worn.',
  'Origin, expressed in form, in attitude, in the way you are recognised.',
  'Bint Saeed exists at that intersection. Between heritage and a contemporary life lived locally and across borders. Between where you come from and where you are going. Between what you\'ve inherited and how you present yourself today.',
]

export default function Home() {
  const { isRTL } = useLanguage()
  
  return (
    <div className={`relative overflow-hidden ${isRTL ? 'rtl' : 'ltr'}`}>
      <HeroSection />
      <QuickShopCarousel />
      <CampaignPanoramaSection />
      <EditorialIntro />
      <MagazineGrid />
      <ColorBlockSection />
      <EditorialSplit />
      <CollectionStrip />
      <CreatedForYouSection />
    </div>
  )
}

function CampaignPanoramaSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#f6f2eb] py-0">
      <SectionStripes variant="soft" />
      <div className="relative w-full">
        <div className="relative aspect-[16/6] min-h-[220px] w-full overflow-hidden bg-brand-stone/15 md:min-h-[280px] lg:min-h-[360px]">
          <Image
            src="/hero-bintsaeed.jpg"
            alt="Bint Saeed campaign panorama"
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority={false}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#12080b]/22 via-transparent to-[#12080b]/16" />
        </div>
      </div>
    </section>
  )
}

function QuickShopCarousel() {
  const { isRTL } = useLanguage()
  const [isPaused, setIsPaused] = useState(false)
  const [catalog, setCatalog] = useState<Product[]>(staticProducts)

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

  return (
    <section className="relative bg-[#f7f4ef] py-14 md:py-18 lg:py-20">
      <SectionStripes variant="soft" />
      <div className="mx-auto mb-8 max-w-[1600px] px-6 lg:px-14">
        <p className="text-center font-roboto text-[11px] uppercase tracking-[0.26em] text-brand-darkRed">
          {isRTL ? 'وصل حديثا' : 'NEW ARRIVALS'}
        </p>
      </div>

      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-10 bg-gradient-to-r from-[#f7f4ef] to-transparent md:w-16 lg:w-20" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-10 bg-gradient-to-l from-[#f7f4ef] to-transparent md:w-16 lg:w-20" />

      <div
        className="overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocusCapture={() => setIsPaused(true)}
        onBlurCapture={() => setIsPaused(false)}
      >
        <div
          className={`quick-shop-track ${isRTL ? 'quick-shop-track-rtl' : ''}`}
          style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
        >
          {[...quickProducts, ...quickProducts].map((product, idx) => (
            <a
              key={`${product.id}-${idx}`}
              href={`/shop/${product.id}`}
              className="group mx-1.5 flex h-[24.6rem] w-[13.1rem] shrink-0 flex-col border border-brand-stone/25 bg-white transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(25,10,16,0.08)] focus-visible:-translate-y-0.5 focus-visible:shadow-[0_14px_36px_rgba(25,10,16,0.08)] focus-visible:outline-none md:mx-2 md:h-[30rem] md:w-[16rem] lg:h-[31.5rem] lg:w-[16.8rem]"
              data-cursor-hover
            >
              <div className="relative h-[20.8rem] w-full overflow-hidden bg-[#f3f0ea] md:h-[25.7rem] lg:h-[27rem]">
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 210px, (max-width: 1200px) 256px, 270px"
                  className="object-cover object-top transition-all duration-[950ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-0 group-focus-visible:opacity-0 group-hover:scale-[1.03]"
                />
                <Image
                  src={product.images[1] || product.images[0]}
                  alt={`${product.name} campaign`}
                  fill
                  sizes="(max-width: 768px) 210px, (max-width: 1200px) 256px, 270px"
                  className="object-cover object-center opacity-0 transition-all duration-[950ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-100 group-focus-visible:opacity-100 group-hover:scale-[1.03]"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-[#12080b]/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
              <div className="flex min-h-[3.8rem] flex-1 items-center border-t border-brand-stone/20 px-2.5 md:min-h-[4rem] md:px-3">
                <p className="truncate font-roboto text-[10.5px] uppercase tracking-[0.06em] text-brand-darkRed/88">
                  {product.name}
                </p>
                <p className="ml-auto pl-2 font-roboto text-[10.5px] uppercase tracking-[0.06em] text-brand-darkRed whitespace-nowrap">
                  DHS. {product.price.toLocaleString()}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>

      <style jsx>{`
        .quick-shop-track {
          display: flex;
          width: max-content;
          padding: 0 0.4rem;
          animation: quickShopMarquee 72s linear infinite;
        }
        .quick-shop-track-rtl {
          animation-direction: reverse;
        }
        @keyframes quickShopMarquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .quick-shop-track {
            animation: none;
            transform: translateX(0);
          }
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
  const heroTagline = 'A house devoted to the daughter in every woman.'
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2])
  const titleY = useTransform(scrollYProgress, [0, 1], [0, 20])
  const titleTracking = useTransform(scrollYProgress, [0, 1], ['0.06em', '0.11em'])
  const titleBlur = useTransform(scrollYProgress, [0, 1], [0, 1.6])
  const titleFilter = useMotionTemplate`blur(${titleBlur}px)`
  const introX = useTransform(scrollYProgress, [0, 1], [0, 14])

  return (
    <section ref={ref} className="relative h-[100svh] w-full">
      <SectionStripes variant="hero" />
      {/* Background — pointer-events-none so scaled layer never steals clicks from hero links */}
      <motion.div style={{ scale }} className="pointer-events-none absolute inset-0 overflow-hidden">
        <Image
          src="/hero-bintsaeed.jpg"
          alt="Bint Saeed"
          fill
          className="object-cover object-[center_28%] scale-[1.02] saturate-[0.88] contrast-[1.04] brightness-[0.97]"
          sizes="100vw"
          priority
        />
        {/* Editorial: soft left read-path + gentle vignette (magazine spread legibility) */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#14020d]/85 via-[#1a0008]/45 to-transparent md:from-[#14020d]/80 md:via-[#1a0008]/35"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#0d0004]/75 via-transparent to-[#1a0008]/25"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_70%_40%,transparent_0%,rgba(13,0,4,0.35)_100%)]"
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

      {/* Thin editorial frame — lighter touch than corner brackets */}
      <div className="pointer-events-none absolute inset-4 sm:inset-6 md:inset-8 border border-white/[0.12]" aria-hidden />
      <DecorativeCorners color="dustyBlue" />

      {/* Content — parallax on copy only; CTA stays untransformed for reliable hit-testing */}
      <div className="relative z-20 flex h-full items-center pb-16 pt-24 lg:items-end lg:pb-24 lg:pt-0">
        <div className="container mx-auto w-full px-6 lg:px-16">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
            <div className={`min-w-0 lg:col-span-8 xl:col-span-7 ${isRTL ? 'lg:col-start-6' : ''}`}>
              {/* initial={false}: avoid opacity:0 inline styles before hydration (looked "broken" / blank UI) */}
              <motion.div style={{ y }} className="pointer-events-none">
                <motion.p
                  initial={false}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className={`mb-5 flex items-center gap-4 font-roboto text-[10px] uppercase tracking-[0.45em] !text-white/80 sm:text-[11px] ${isRTL ? 'flex-row-reverse' : ''}`}
                >
                  <span className="h-px w-8 shrink-0 bg-white/35 sm:w-12" aria-hidden />
                  The House
                </motion.p>

                <motion.h1
                  initial={false}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  style={reduceMotion ? undefined : { y: titleY, letterSpacing: titleTracking, filter: titleFilter }}
                  className="mb-8 max-w-[100vw] font-rozha uppercase leading-[1.12] tracking-[0.06em] !text-white text-[clamp(0.7rem,calc(0.35rem+2.15vw),2.65rem)] sm:text-[clamp(0.85rem,calc(0.4rem+2.35vw),2.75rem)] md:text-[clamp(0.95rem,calc(0.45rem+2.5vw),2.85rem)] md:whitespace-nowrap"
                >
                  Carrying Heritage{' '}
                  <span className="text-brand-dustyBlue italic tracking-[0.04em]">Forward</span>
                </motion.h1>

                <motion.p
                  initial={false}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
                  style={reduceMotion ? undefined : { x: introX }}
                  className="mb-6 max-w-md border-s border-white/25 ps-5 font-roboto text-sm leading-[1.75] tracking-[0.02em] !text-white/90 md:mb-8 md:ps-6 md:text-[15px]"
                >
                  {heroTagline}
                </motion.p>
              </motion.div>

              <motion.div
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-30 flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-10"
              >
                <MagneticWrap className="w-fit">
                  <a
                    href="/shop"
                    className="group inline-flex min-h-[44px] min-w-[44px] cursor-pointer items-center gap-3 py-2 font-roboto text-[11px] uppercase tracking-[0.28em] !text-white w-fit border-b border-white/50 transition-colors duration-500 hover:border-brand-dustyBlue hover:!text-brand-dustyBlue"
                    data-cursor-hover
                  >
                    {t.hero.discoverCollection}
                    <FiArrowRight
                      className={`h-4 w-4 transition-transform duration-500 ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`}
                    />
                  </a>
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
        <span className="font-roboto text-[9px] uppercase tracking-[0.5em] text-white/40">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          className="h-8 w-px bg-gradient-to-b from-white/50 to-transparent"
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
      <SectionStripes variant="default" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(248,244,238,0.9)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_110%_70%_at_18%_12%,rgba(146,170,193,0.2)_0%,transparent_58%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_95%_65%_at_82%_84%,rgba(193,144,134,0.16)_0%,transparent_62%)]" />
      <div className="pointer-events-none absolute inset-y-0 left-[7%] w-px bg-gradient-to-b from-transparent via-brand-dustyBlue/45 to-transparent" />
      <div className="pointer-events-none absolute left-[7%] top-0 h-px w-28 bg-gradient-to-r from-brand-dustyBlue/50 to-transparent" />
      <div className="pointer-events-none absolute right-[8%] bottom-[16%] h-px w-24 bg-gradient-to-l from-brand-clayRed/40 to-transparent" />

      <div className="relative container mx-auto px-6 lg:px-16">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            style={{ y: panelY }}
            className={`lg:col-span-5 ${isRTL ? 'lg:col-start-8' : ''}`}
          >
            <div className="relative border border-brand-stone/25 bg-[#fbf9f6] p-7 shadow-[0_18px_45px_rgba(35,18,23,0.06)] md:p-10">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_8%_10%,rgba(146,170,193,0.1)_0%,transparent_55%)]" />
              <div className="pointer-events-none absolute -left-px top-0 h-full w-[2px] bg-gradient-to-b from-brand-dustyBlue/10 via-brand-dustyBlue/65 to-brand-dustyBlue/10" />
              <div className="pointer-events-none absolute right-0 top-0 h-px w-24 bg-gradient-to-l from-brand-dustyBlue/55 to-transparent" />
              <span className="relative mb-6 block font-roboto text-[10px] uppercase tracking-[0.4em] text-brand-dustyBlue">
                Manifesto
              </span>
              <h2 className="mb-8 font-rozha text-3xl leading-[1.15] text-brand-darkRed md:text-4xl">
                {MANIFESTO_LEAD}
              </h2>
              <div className="space-y-6 font-roboto text-sm leading-[1.9] tracking-wide text-brand-darkRed/75">
                {MANIFESTO_PARAGRAPHS.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
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
              <div className="pointer-events-none absolute -bottom-6 -left-6 h-full w-full border border-brand-dustyBlue/45" />
              <div className="pointer-events-none absolute -right-4 -top-4 h-full w-full border border-white/45" />
            </motion.div>
          </motion.div>
        </div>
      </div>
      <div className="pointer-events-none absolute top-1/2 right-5 hidden -translate-y-1/2 xl:block">
        <span
          className="font-rozha text-8xl leading-none rotate-180 bg-[linear-gradient(180deg,#12080b_0%,#2d141e_35%,#1c0f15_58%,#92aac1_100%)] bg-clip-text text-transparent opacity-[0.84]"
          style={{ writingMode: 'vertical-rl' }}
        >
          BINT SAEED
        </span>
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
    <section ref={ref} className="relative overflow-hidden bg-white py-20 md:py-28">
      <SectionStripes variant="soft" />
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-dustyBlue/30 to-transparent" />

      <div className="container mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75 }}
          className={`mb-14 flex items-end justify-between md:mb-16 ${isRTL ? 'flex-row-reverse' : ''}`}
        >
          <div>
            <span className="mb-3 block font-roboto text-[10px] uppercase tracking-[0.4em] text-brand-dustyBlue">
              The first chapter
            </span>
            <h2 className="font-rozha text-4xl text-brand-darkRed md:text-5xl">
              Where it Begins
            </h2>
          </div>
          <LocaleLink
            href="/shop"
            className="hidden items-center gap-2 font-roboto text-xs uppercase tracking-[0.2em] text-brand-darkRed transition-colors hover:text-brand-dustyBlue md:flex"
            data-cursor-hover
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
            <LocaleLink href="/shop" className="group block overflow-hidden bg-brand-stone/10 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1" data-cursor-hover>
              <div className="relative aspect-[4/5]">
                <Image
                  src="/collection-section/1.png"
                  alt="Designed to carry you, wherever you are — Bint Saeed collection"
                  fill
                  sizes="(max-width: 768px) 100vw, 58vw"
                  className="object-cover object-top transition-transform duration-1000 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-darkRed/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                  <span className="mb-3 block font-roboto text-[10px] uppercase tracking-[0.3em] text-brand-dustyBlue">
                    Chapter I
                  </span>
                  <h3 className="mb-4 max-w-xl font-rozha text-2xl leading-snug text-white md:text-3xl lg:text-4xl">
                    Designed to carry you,
                    <br />
                    wherever you are.
                  </h3>
                  <span className="inline-flex items-center gap-2 font-roboto text-xs uppercase tracking-[0.2em] text-white/80 transition-colors group-hover:text-brand-dustyBlue">
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
              <LocaleLink href="/shop" className="group block overflow-hidden bg-brand-dustyBlue transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1" data-cursor-hover>
                <div className="relative aspect-square">
                  <div className="absolute inset-0 transition-transform duration-[1100ms] ease-[cubic-bezier(0.33,0,0.2,1)] group-hover:scale-[1.03]">
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
              <LocaleLink href="/shop" className="group block overflow-hidden bg-brand-rose transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1" data-cursor-hover>
                <div className="relative aspect-square">
                  <div className="absolute inset-0 transition-transform duration-[1100ms] ease-[cubic-bezier(0.33,0,0.2,1)] group-hover:scale-[1.03]">
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

function ColorBlockSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const { isRTL } = useLanguage()

  return (
    <section ref={ref} className="relative flex min-h-screen items-center overflow-hidden">
      <SectionStripes variant="bold" />
      <div className="absolute inset-0 bg-[linear-gradient(165deg,#f7f5f0_0%,#eeece4_38%,#e3dfd3_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_95%_78%_at_16%_14%,rgba(146,170,193,0.18)_0%,transparent_52%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_90%_at_85%_86%,rgba(193,144,134,0.12)_0%,transparent_60%)]" />

      <DecorativeCorners color="dustyBlue" />

      <div className="relative container mx-auto px-6 py-28 lg:px-16 lg:py-36">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <motion.div style={{ y }} className="relative">
            <div className="relative mx-auto aspect-[3/4] w-full max-w-md lg:mx-0">
              <ScrollMaskImage
                src="/image 2.JPG"
                alt="Handcrafted luxury"
                sizes="(max-width: 1024px) 92vw, 32rem"
              />
              <div className="pointer-events-none absolute -top-5 -right-5 h-full w-full border border-brand-dustyBlue/40" />
              <div className="pointer-events-none absolute -bottom-4 -left-4 h-full w-full border border-white/50" />
            </div>
            <div className="absolute -bottom-3 -right-3 border border-brand-dustyBlue/30 bg-[#fbf8f3]/95 px-5 py-3 backdrop-blur-sm md:right-auto md:-left-3">
              <span className="font-roboto text-[10px] uppercase tracking-[0.3em] text-brand-dustyBlue">
                {isRTL ? 'صناعة يدوية' : 'Handcrafted'}
              </span>
            </div>
          </motion.div>

          <div className={`flex justify-center ${isRTL ? 'lg:justify-end' : 'lg:justify-start'}`}>
            <div className="relative w-full max-w-xl lg:max-w-[36.5rem]">
              <div className="pointer-events-none absolute -inset-[1px] bg-gradient-to-b from-brand-dustyBlue/28 via-transparent to-brand-clayRed/18 opacity-85" />
              <div className="relative overflow-hidden border border-brand-stone/30 bg-[#f7f2ec]/95 shadow-[0_22px_58px_rgba(28,14,18,0.11)] ring-1 ring-white/60">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_70%_at_10%_8%,rgba(146,170,193,0.13)_0%,transparent_58%)]" />
                <div className="pointer-events-none absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-brand-dustyBlue/12 via-brand-dustyBlue/65 to-brand-dustyBlue/12" />
                <div
                  className={`relative flex flex-col gap-8 px-9 py-10 text-center sm:px-12 md:py-14 ${isRTL ? 'lg:items-end lg:text-right' : 'lg:items-start lg:text-left'}`}
                >
                  <span className="font-roboto text-[10px] uppercase tracking-[0.45em] text-brand-dustyBlue/85">
                    Bint Saeed
                  </span>
                  <h2 className="font-rozha text-[clamp(1.5rem,2.8vw+0.6rem,2.625rem)] leading-[1.12] tracking-[-0.02em] text-brand-darkRed lg:whitespace-nowrap">
                    Every woman is a daughter.
                  </h2>
                  <div
                    className={`mx-auto max-w-md space-y-5 font-roboto text-sm leading-[1.9] tracking-wide text-brand-darkRed/76 lg:max-w-lg ${isRTL ? 'lg:mr-0 lg:ml-auto' : 'lg:ml-0 lg:mr-auto'}`}
                  >
                    <p>She carries more than what is seen.</p>
                    <p>A story. A sense of self.</p>
                    <p>
                      A connection that remains,
                      <br />
                      wherever life takes her.
                    </p>
                  </div>
                  <MagneticWrap className={isRTL ? 'lg:self-end' : 'lg:self-start'}>
                    <LocaleLink
                      href="/about"
                      className="inline-flex items-center justify-center border border-brand-dustyBlue/70 bg-brand-dustyBlue px-8 py-4 font-roboto text-xs tracking-[0.12em] text-[#1a0008] transition-all duration-500 hover:bg-brand-stone"
                      data-cursor-hover
                    >
                      Discover the Story
                    </LocaleLink>
                  </MagneticWrap>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute top-1/2 right-6 hidden -translate-y-1/2 xl:block">
        <span
          className="font-rozha text-8xl leading-none writing-mode-vertical rotate-180 bg-[linear-gradient(180deg,#12080b_0%,#2d141e_35%,#1c0f15_58%,#92aac1_100%)] bg-clip-text text-transparent opacity-[0.86]"
          style={{ writingMode: 'vertical-rl' }}
        >
          Bint Saeed
        </span>
      </div>
    </section>
  )
}

const CODES_LIST_ITEMS = [
  'Al Talli.',
  'Khous.',
  'Carnelian.',
  'Knotted lines of lineage.',
  'The monogram.',
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
            className="absolute inset-0 bg-[linear-gradient(90deg,#12080b_0%,#1c0f15_22%,#2d141e_50%,#1c0f15_78%,#12080b_100%)]"
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
          <div className="absolute top-0 left-0 z-[2] h-full w-1 bg-gradient-to-b from-brand-dustyBlue via-brand-dustyBlue/50 to-transparent" />
        </motion.div>

        {/* Right - Content with elegant gradient */}
        <div className="relative bg-gradient-to-br from-white via-brand-rose/10 to-brand-stone/30 flex items-center overflow-hidden">
          <SectionStripes variant="soft" />
          {/* Decorative dusty blue corner */}
          <motion.div 
            className="absolute top-8 right-8 w-20 h-20 md:w-24 md:h-24"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-l from-brand-dustyBlue/40 to-transparent" />
            <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-brand-dustyBlue/40 to-transparent" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className={`p-12 lg:p-20 ${isRTL ? 'text-right' : ''}`}
          >
            <h2 className="font-rozha text-4xl md:text-5xl text-brand-darkRed leading-[1.1] mb-8">
              The Codes
            </h2>

            {/* Feature list — same dusty blue rules as previous lifestyle items */}
            <div className="space-y-4 mb-10">
              {CODES_LIST_ITEMS.map((item, i) => (
                <div key={i} className={`flex items-center gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className="h-px w-10 shrink-0 bg-brand-dustyBlue md:w-12" aria-hidden />
                  <span className="font-roboto text-sm text-brand-darkRed/80 tracking-wide">{item}</span>
                </div>
              ))}
            </div>

            <p className="font-roboto text-sm text-brand-darkRed/70 tracking-wide leading-[1.9] mb-10 max-w-md">
              Each element shapes how a piece is made,
              <br />
              how it moves,
              <br />
              how it becomes part of you.
            </p>

            <MagneticWrap className="w-fit">
              <LocaleLink
                href="/heritage"
                className={`group inline-flex items-center gap-3 px-8 py-4 bg-brand-dustyBlue text-white font-roboto text-xs uppercase tracking-[0.2em] hover:bg-brand-darkRed transition-colors ${isRTL ? 'flex-row-reverse' : ''}`}
                data-cursor-hover
              >
                Explore the Codes
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
    <section className="bg-brand-darkRed py-6 overflow-hidden relative">
      <SectionStripes variant="hero" />
      {/* Dusty blue accent lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-dustyBlue/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-dustyBlue/30 to-transparent" />
      
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
                <span className="font-rozha text-2xl md:text-3xl text-white/90 mx-12">
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

/** Section 6 — guided commissioning (beige field + glass card + framed editorial image, aligned with ColorBlockSection) */
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
      <SectionStripes variant="bold" />
      <div className="absolute inset-0 bg-[linear-gradient(165deg,#f7f5f0_0%,#ebe8df_40%,#e2ded2_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_12%_10%,rgba(146,170,193,0.16)_0%,transparent_48%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_90%_at_86%_82%,rgba(193,144,134,0.10)_0%,transparent_60%)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-dustyBlue/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-dustyBlue/25 to-transparent" />

      <DecorativeCorners color="dustyBlue" />

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
              <div className="pointer-events-none absolute -inset-[1px] bg-gradient-to-b from-brand-dustyBlue/40 via-transparent to-brand-dustyBlue/22" />
              <div className="relative overflow-hidden border border-white/22 bg-[#1a0008]/52 shadow-[0_24px_66px_rgba(26,0,8,0.24)] ring-1 ring-white/10 backdrop-blur-xl backdrop-saturate-150">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.14] via-transparent to-brand-dustyBlue/[0.14]" />
                <div className="pointer-events-none absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-brand-dustyBlue/25 via-brand-dustyBlue/85 to-brand-dustyBlue/20" />
                <div
                  className={`relative flex flex-col gap-8 px-10 py-12 text-center sm:px-12 md:py-14 ${isRTL ? 'lg:items-end lg:text-right' : 'lg:items-start lg:text-left'}`}
                >
                  <span className="font-roboto text-[10px] uppercase tracking-[0.45em] text-brand-dustyBlue/80">
                    Bint Saeed
                  </span>
                  <h2 className="font-rozha text-3xl text-balance text-white tracking-[-0.02em] drop-shadow-[0_1px_24px_rgba(0,0,0,0.35)] sm:text-4xl md:text-[2.35rem] md:leading-[1.12]">
                    Created for you
                  </h2>
                  <p
                    className={`mx-auto max-w-md font-roboto text-sm leading-[1.9] tracking-wide text-white/75 lg:max-w-lg ${isRTL ? 'lg:mr-0 lg:ml-auto' : 'lg:ml-0 lg:mr-auto'}`}
                  >
                    Each piece is created with care, produced in limited quantities, and available through a guided
                    experience.
                  </p>
                  <div className="flex w-full flex-col items-center gap-6 sm:gap-7 lg:items-stretch">
                    <MagneticWrap className={isRTL ? 'lg:self-end' : 'lg:self-start'}>
                      <LocaleLink
                        href="/contact"
                        className="inline-flex items-center justify-center border border-brand-dustyBlue/70 bg-brand-dustyBlue px-8 py-4 font-roboto text-xs uppercase tracking-[0.18em] text-[#1a0008] transition-all duration-500 hover:bg-brand-stone"
                        data-cursor-hover
                      >
                        Request Your Piece
                      </LocaleLink>
                    </MagneticWrap>
                    <p className="font-roboto text-[11px] uppercase tracking-[0.22em] text-brand-dustyBlue/85">
                      Available worldwide. Based in Abu Dhabi.
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
              <motion.div style={{ scale: imageScale }} className="relative aspect-[3/4] w-full">
                <ScrollMaskImage
                  src="/collection-section/4.JPG"
                  alt="Bint Saeed — crafted for you"
                  sizes="(max-width: 1024px) 90vw, 36rem"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1a0008]/25 via-transparent to-transparent" />
                <div className="pointer-events-none absolute -top-4 -right-4 h-full w-full border border-brand-dustyBlue/42" />
                <div className="pointer-events-none absolute -bottom-4 -left-4 h-full w-full border border-white/45" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function AsymmetricShowcase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { margin: '-10%', once: true })
  const { t, isRTL } = useLanguage()

  const products = [
    { name: 'Silk Evening Abaya', price: '2,400 AED', image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&q=90' },
    { name: 'Embroidered Bisht', price: '1,800 AED', image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=600&q=90' },
    { name: 'Resort Kaftan', price: '1,200 AED', image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&q=90' },
  ]

  return (
    <section ref={ref} className="bg-[#faf9f7] py-24 md:py-40">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className={`mb-20 ${isRTL ? 'text-right' : ''}`}
        >
          <span className="font-roboto text-[10px] uppercase tracking-[0.4em] text-brand-dustyBlue mb-3 block">
            {t.featured.subtitle}
          </span>
          <div className={`flex flex-col md:flex-row md:items-end md:justify-between gap-6 ${isRTL ? 'md:flex-row-reverse' : ''}`}>
            <h2 className="font-rozha text-4xl md:text-5xl lg:text-6xl text-brand-darkRed max-w-xl leading-[1.1]">
              {t.featured.title}
            </h2>
            <LocaleLink
              href="/shop"
              className="inline-flex items-center gap-2 font-roboto text-xs uppercase tracking-[0.2em] text-brand-darkRed hover:text-brand-dustyBlue transition-colors pb-2 border-b border-brand-dustyBlue/30"
              data-cursor-hover
            >
              {t.featured.viewAll}
              <FiArrowRight className="w-4 h-4" />
            </LocaleLink>
          </div>
        </motion.div>

        {/* Asymmetric Product Grid */}
        <div className="grid md:grid-cols-12 gap-6 md:gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className={`${index === 0 ? 'md:col-span-5' : index === 1 ? 'md:col-span-4 md:mt-24' : 'md:col-span-3 md:mt-12'}`}
            >
              <LocaleLink href="/shop" className="group block transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1" data-cursor-hover>
                <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-white">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-105"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-brand-darkRed/0 group-hover:bg-brand-darkRed/20 transition-colors duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <span className="inline-block px-6 py-3 bg-brand-dustyBlue text-white font-roboto text-xs uppercase tracking-[0.15em]">
                      {t.featured.quickAdd}
                    </span>
                  </div>
                </div>
                <h3 className="font-roboto text-sm text-brand-darkRed mb-2 tracking-wide group-hover:text-brand-dustyBlue transition-colors">
                  {product.name}
                </h3>
                <p className="font-roboto text-sm text-brand-clayRed/60 tracking-wide">
                  {product.price}
                </p>
              </LocaleLink>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
