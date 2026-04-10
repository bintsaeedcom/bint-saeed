'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { FiArrowRight, FiArrowDown } from 'react-icons/fi'
import { useLanguage } from '@/lib/i18n/LanguageContext'

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
      <EditorialIntro />
      <MagazineGrid />
      <ColorBlockSection />
      <EditorialSplit />
      <CollectionStrip />
      <CreatedForYouSection />
      <AsymmetricShowcase />
      <QuoteSection />
      <FinalEditorial />
    </div>
  )
}

function HeroSection() {
  const ref = useRef(null)
  const { t, isRTL } = useLanguage()
  // Preview-specific hero copy (English)
  const heroTagline = 'A house devoted to the daughter in every woman.'
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2])

  return (
    <section ref={ref} className="relative h-[100svh] w-full">
      {/* Background — overflow hidden here only so scaled image does not spill; hero text is not clipped */}
      <motion.div style={{ scale }} className="absolute inset-0 overflow-hidden">
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

      {/* Content — sit lower on large screens (editorial cover drop) */}
      <motion.div
        style={{ y, opacity }}
        className="relative h-full flex items-center lg:items-end pb-16 lg:pb-24 pt-24 lg:pt-0"
      >
        <div className="container mx-auto px-6 lg:px-16 w-full">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            <div className={`min-w-0 lg:col-span-8 xl:col-span-7 ${isRTL ? 'lg:col-start-6' : ''}`}>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className={`font-roboto text-[10px] sm:text-[11px] uppercase tracking-[0.45em] text-white/55 mb-5 flex items-center gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}
              >
                <span className="h-px w-8 sm:w-12 bg-white/35 shrink-0" aria-hidden />
                The House
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.4, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="font-rozha uppercase text-white leading-[1.12] mb-8 tracking-[0.06em] whitespace-nowrap text-[clamp(0.7rem,calc(0.35rem+2.15vw),2.65rem)] sm:text-[clamp(0.85rem,calc(0.4rem+2.35vw),2.75rem)] md:text-[clamp(0.95rem,calc(0.45rem+2.5vw),2.85rem)]"
              >
                Carrying Heritage{' '}
                <span className="text-brand-dustyBlue italic tracking-[0.04em]">Forward</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="font-roboto text-sm md:text-[15px] text-white/80 tracking-[0.02em] max-w-md leading-[1.75] mb-10 border-s border-white/25 ps-5 md:ps-6"
              >
                {heroTagline}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10"
              >
                <Link
                  href="/shop"
                  className="group inline-flex items-center gap-3 font-roboto text-[11px] uppercase tracking-[0.28em] text-white w-fit border-b border-white/40 pb-1 hover:border-brand-dustyBlue hover:text-brand-dustyBlue transition-colors duration-500"
                  data-cursor-hover
                >
                  {t.hero.discoverCollection}
                  <FiArrowRight
                    className={`w-4 h-4 transition-transform duration-500 ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`}
                  />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Scroll — editorial caption style */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
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
  const isInView = useInView(ref, { margin: '-20%' })
  const { isRTL } = useLanguage()

  return (
    <section ref={ref} className="relative bg-white">
      {/* Soft gradient block - Left side only */}
      <div className="absolute top-0 left-0 w-full md:w-1/2 h-full bg-gradient-to-br from-brand-rose/20 via-brand-stone/40 to-white" />
      
      {/* Dusty Blue accent line */}
      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-brand-dustyBlue via-brand-dustyBlue/50 to-transparent" />
      
      <div className="relative container mx-auto px-6 lg:px-16 py-32 md:py-48">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-0">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className={`lg:col-span-5 ${isRTL ? 'lg:col-start-8' : ''} relative z-10`}
          >
            <div className="lg:pr-12">
              <span className="font-roboto text-[10px] uppercase tracking-[0.4em] text-brand-dustyBlue mb-6 block">
                Manifesto
              </span>
              <h2 className="font-rozha text-3xl md:text-4xl text-brand-darkRed leading-[1.15] mb-8">
                {MANIFESTO_LEAD}
              </h2>
              <div className="font-roboto text-sm text-brand-darkRed/75 tracking-wide leading-[1.9] space-y-6">
                {MANIFESTO_PARAGRAPHS.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className={`lg:col-span-6 ${isRTL ? 'lg:col-start-1' : 'lg:col-start-7'}`}
          >
            <div className="relative aspect-[4/5] lg:-mr-16">
              <Image
                src="/image 1.png"
                alt="Heritage meets modernity"
                fill
                className="object-cover"
              />
              {/* Dusty blue frame accent */}
              <div className="absolute -bottom-4 -left-4 w-full h-full border-2 border-brand-dustyBlue/20 -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function MagazineGrid() {
  const ref = useRef(null)
  const isInView = useInView(ref, { margin: '-10%' })
  const { t, isRTL } = useLanguage()

  return (
    <section ref={ref} className="relative bg-white py-24 md:py-32 overflow-hidden">
      {/* Subtle dusty blue accent at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-dustyBlue/30 to-transparent" />
      
      <div className="container mx-auto px-6 lg:px-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className={`flex items-end justify-between mb-20 md:mb-28 ${isRTL ? 'flex-row-reverse' : ''}`}
        >
          <div>
            <span className="font-roboto text-[10px] uppercase tracking-[0.4em] text-brand-dustyBlue mb-3 block">
              The first chapter
            </span>
            <h2 className="font-rozha text-4xl md:text-5xl text-brand-darkRed">
              Where it Begins
            </h2>
          </div>
          <Link
            href="/shop"
            className="hidden md:flex items-center gap-2 font-roboto text-xs uppercase tracking-[0.2em] text-brand-darkRed hover:text-brand-dustyBlue transition-colors"
            data-cursor-hover
          >
            {t.featured.viewAll}
            <FiArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Magazine grid: centered, ~25% narrower, wide gutters */}
        <div className="mx-auto w-full max-w-[min(100%,52rem)] sm:max-w-[min(100%,54rem)] md:max-w-[min(100%,56rem)] lg:max-w-[58rem] xl:max-w-[60rem]">
          <div className="grid grid-cols-12 gap-8 md:gap-12 lg:gap-16 xl:gap-20">
          {/* Large Feature */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="col-span-12 md:col-span-7 row-span-2"
          >
            <Link href="/shop" className="group block relative aspect-[4/5] overflow-hidden" data-cursor-hover>
              <Image
                src="/collection-section/1.png"
                alt="Designed to carry you, wherever you are — Bint Saeed collection"
                fill
                sizes="(max-width: 768px) 100vw, 58vw"
                className="object-cover object-top transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-darkRed/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                <span className="font-roboto text-[10px] uppercase tracking-[0.3em] text-brand-dustyBlue mb-3 block">
                  Chapter I
                </span>
                <h3 className="font-rozha text-2xl md:text-3xl lg:text-4xl text-white mb-4 leading-snug max-w-xl">
                  Designed to carry you,
                  <br />
                  wherever you are.
                </h3>
                <span className="inline-flex items-center gap-2 font-roboto text-xs uppercase tracking-[0.2em] text-white/80 group-hover:text-brand-dustyBlue transition-colors">
                  Discover the collection
                  <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Top Right - Dusty Blue Accent */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="col-span-6 md:col-span-5"
          >
            <Link href="/shop" className="group block relative aspect-square overflow-hidden bg-brand-dustyBlue" data-cursor-hover>
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
            </Link>
          </motion.div>

          {/* Bottom Right - Rose Accent */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="col-span-6 md:col-span-5"
          >
            <Link href="/shop" className="group block relative aspect-square overflow-hidden bg-brand-rose" data-cursor-hover>
              <div className="absolute inset-0 transition-transform duration-[1100ms] ease-[cubic-bezier(0.33,0,0.2,1)] group-hover:scale-[1.03]">
                <CollectionCrossfadeSlideshow
                  slides={ESSENTIALS_SLIDES}
                  altForIndex={(i) => `Bint Saeed collection — ${i + 1}`}
                />
              </div>
            </Link>
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
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Neutral paper-beige (no rose / burgundy in the field) */}
      <div className="absolute inset-0 bg-[linear-gradient(165deg,#f7f5f0_0%,#eceae3_42%,#e3e0d6_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_50%_0%,rgba(255,255,255,0.55)_0%,transparent_45%)]" />
      
      {/* Decorative Corners */}
      <DecorativeCorners color="dustyBlue" />

      <div className="relative container mx-auto px-6 lg:px-16 py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image with Parallax */}
          <motion.div style={{ y }} className="relative">
            <div className="relative aspect-[3/4] max-w-md mx-auto lg:mx-0">
              <Image
                src="/image 2.JPG"
                alt="Handcrafted luxury"
                fill
                className="object-cover"
              />
              {/* Dusty blue frame */}
              <div className="absolute -top-4 -right-4 w-full h-full border border-brand-dustyBlue/30" />
            </div>
            {/* Floating Label - Glassmorphism (darker for readability) */}
            <div className="absolute -bottom-4 -right-4 md:right-auto md:-left-4 backdrop-blur-md bg-[#1a0008]/80 border border-brand-dustyBlue/30 px-6 py-4 rounded-xl">
              <span className="font-roboto text-[10px] uppercase tracking-[0.3em] text-brand-dustyBlue">
                {isRTL ? 'صناعة يدوية' : 'Handcrafted'}
              </span>
            </div>
          </motion.div>

          {/* Right - Content */}
          <div
            className={`flex justify-center text-white ${isRTL ? 'lg:justify-end' : 'lg:justify-start'}`}
          >
            <div className="relative w-full max-w-xl lg:max-w-[36.5rem]">
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-brand-dustyBlue/25 via-transparent to-brand-dustyBlue/10 opacity-70" />
              <div className="relative overflow-hidden rounded-2xl border border-white/20 bg-[#1a0008]/45 shadow-[0_12px_48px_rgba(26,0,8,0.18)] ring-1 ring-white/10 backdrop-blur-xl backdrop-saturate-150">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.14] via-transparent to-brand-dustyBlue/[0.12]" />
                <div
                  className={`relative flex flex-col gap-8 px-10 py-12 text-center sm:px-12 md:py-14 ${isRTL ? 'lg:items-end lg:text-right' : 'lg:items-start lg:text-left'}`}
                >
                  <span className="font-roboto text-[10px] uppercase tracking-[0.45em] text-brand-dustyBlue/80">
                    Bint Saeed
                  </span>
                  <h2 className="font-rozha text-[clamp(1.5rem,2.8vw+0.6rem,2.625rem)] leading-[1.12] text-balance text-white tracking-[-0.02em] drop-shadow-[0_1px_24px_rgba(0,0,0,0.35)] lg:whitespace-nowrap">
                    Every woman is a daughter.
                  </h2>
                  <div
                    className={`mx-auto max-w-md space-y-5 font-roboto text-sm leading-[1.9] tracking-wide text-white/75 lg:max-w-lg ${isRTL ? 'lg:mr-0 lg:ml-auto' : 'lg:ml-0 lg:mr-auto'}`}
                  >
                    <p>She carries more than what is seen.</p>
                    <p>A story. A sense of self.</p>
                    <p>
                      A connection that remains,
                      <br />
                      wherever life takes her.
                    </p>
                  </div>
                  <Link
                    href="/about"
                    className={`inline-flex items-center justify-center rounded-xl bg-brand-dustyBlue px-8 py-4 font-roboto text-xs tracking-[0.12em] text-[#1a0008] transition-all duration-500 hover:bg-brand-stone ${isRTL ? 'lg:self-end' : 'lg:self-start'}`}
                    data-cursor-hover
                  >
                    Discover the Story
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vertical title — gradient matches header bar (wine + dusty blue) */}
      <div className="pointer-events-none absolute top-1/2 right-6 -translate-y-1/2 hidden xl:block">
        <span
          className="font-rozha text-8xl leading-none writing-mode-vertical transform rotate-180 bg-[linear-gradient(180deg,#12080b_0%,#2d141e_38%,#1c0f15_62%,#92aac1_100%)] bg-clip-text text-transparent opacity-[0.85]"
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
  const isInView = useInView(ref, { margin: '-20%' })
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
        <div className="relative bg-gradient-to-br from-white via-brand-rose/10 to-brand-stone/30 flex items-center">
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

            <Link
              href="/heritage"
              className={`group inline-flex items-center gap-3 px-8 py-4 bg-brand-dustyBlue text-white font-roboto text-xs uppercase tracking-[0.2em] hover:bg-brand-darkRed transition-colors ${isRTL ? 'flex-row-reverse' : ''}`}
              data-cursor-hover
            >
              Explore the Codes
              <FiArrowRight className={`w-4 h-4 group-hover:translate-x-2 transition-transform duration-300 ${isRTL ? 'rotate-180' : ''}`} />
            </Link>
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

/** Section 6 — guided commissioning (beige field + glass card, matches ColorBlockSection language) */
function CreatedForYouSection() {
  const { isRTL } = useLanguage()

  return (
    <section className="relative overflow-hidden py-24 md:py-36 lg:py-40">
      <div className="absolute inset-0 bg-[linear-gradient(165deg,#f7f5f0_0%,#eceae3_42%,#e3e0d6_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_50%_0%,rgba(255,255,255,0.55)_0%,transparent_45%)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-dustyBlue/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-dustyBlue/25 to-transparent" />

      <DecorativeCorners color="dustyBlue" />

      <div className="relative container mx-auto px-6 lg:px-16">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          {/* Glass card — LTR left, RTL right (second in DOM for RTL grid) */}
          <div
            className={`flex justify-center ${isRTL ? 'lg:order-2' : 'lg:order-1'}`}
          >
            <div className="relative w-full max-w-xl lg:max-w-[36rem]">
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-brand-dustyBlue/25 via-transparent to-brand-dustyBlue/10 opacity-70" />
              <div className="relative overflow-hidden rounded-2xl border border-white/20 bg-[#1a0008]/45 shadow-[0_12px_48px_rgba(26,0,8,0.18)] ring-1 ring-white/10 backdrop-blur-xl backdrop-saturate-150">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.14] via-transparent to-brand-dustyBlue/[0.12]" />
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
                    <Link
                      href="/contact"
                      className={`inline-flex items-center justify-center rounded-xl bg-brand-dustyBlue px-8 py-4 font-roboto text-xs uppercase tracking-[0.18em] text-[#1a0008] transition-all duration-500 hover:bg-brand-stone ${isRTL ? 'lg:self-end' : 'lg:self-start'}`}
                      data-cursor-hover
                    >
                      Request Your Piece
                    </Link>
                    <p className="font-roboto text-[11px] uppercase tracking-[0.22em] text-brand-dustyBlue/85">
                      Available worldwide. Based in Abu Dhabi.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Image placeholder — LTR right, RTL left */}
          <div
            className={`mx-auto w-full max-w-md lg:max-w-none ${isRTL ? 'lg:order-1' : 'lg:order-2'}`}
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-dashed border-brand-dustyBlue/35 bg-gradient-to-br from-white/60 via-brand-stone/15 to-brand-dustyBlue/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]">
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-6 text-center">
                <span className="font-roboto text-[10px] uppercase tracking-[0.4em] text-brand-darkRed/35">
                  Image placeholder
                </span>
                <span className="font-rozha text-lg text-brand-darkRed/25 md:text-xl">
                  Add photography
                </span>
                <span className="max-w-[12rem] font-roboto text-[11px] leading-relaxed text-brand-darkRed/30">
                  Replace this block with your asset (e.g. in <code className="font-mono text-[10px]">public/</code>).
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function AsymmetricShowcase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { margin: '-10%' })
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
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 font-roboto text-xs uppercase tracking-[0.2em] text-brand-darkRed hover:text-brand-dustyBlue transition-colors pb-2 border-b border-brand-dustyBlue/30"
              data-cursor-hover
            >
              {t.featured.viewAll}
              <FiArrowRight className="w-4 h-4" />
            </Link>
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
              <Link href="/shop" className="group block" data-cursor-hover>
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
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function QuoteSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { margin: '-30%' })
  const { t } = useLanguage()

  return (
    <section ref={ref} className="relative py-32 md:py-48 bg-white overflow-hidden">
      {/* Subtle rose gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-rose/5 via-transparent to-brand-dustyBlue/5" />
      {/* Decorative Corners - Dusty Blue */}
      <motion.div 
        className="absolute top-12 left-12 w-16 h-16 md:w-24 md:h-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-brand-dustyBlue/40 to-transparent" />
        <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-brand-dustyBlue/40 to-transparent" />
      </motion.div>
      <motion.div 
        className="absolute bottom-12 right-12 w-16 h-16 md:w-24 md:h-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-brand-dustyBlue/40 to-transparent" />
        <div className="absolute bottom-0 right-0 w-px h-full bg-gradient-to-t from-brand-dustyBlue/40 to-transparent" />
      </motion.div>

      {/* Large Background Text */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03]">
        <span className="font-rozha text-[30vw] text-brand-darkRed whitespace-nowrap">
          Elegance
        </span>
      </div>

      <div className="relative container mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="w-px h-16 bg-brand-dustyBlue/50 mx-auto mb-12" />
          <blockquote className="font-rozha text-3xl md:text-4xl lg:text-5xl text-brand-darkRed leading-[1.3] mb-12">
            "{t.brandStory.quote}"
          </blockquote>
          <p className="font-roboto text-sm text-brand-dustyBlue tracking-[0.2em] uppercase">
            — Bint Saeed
          </p>
          <div className="w-px h-16 bg-brand-dustyBlue/50 mx-auto mt-12" />
        </motion.div>
      </div>
    </section>
  )
}

function FinalEditorial() {
  const ref = useRef(null)
  const isInView = useInView(ref, { margin: '-10%' })
  const { t, isRTL } = useLanguage()

  return (
    <section ref={ref} className="relative">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1920&q=90"
          alt="Newsletter"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-brand-darkRed/70" />
      </div>
      
      {/* Dusty blue accent lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-dustyBlue/30 to-transparent" />

      <div className="relative container mx-auto px-6 lg:px-16 py-32 md:py-48">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Shipping Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <span className="font-roboto text-[10px] uppercase tracking-[0.4em] text-brand-dustyBlue mb-6 block">
              {isRTL ? 'الشحن العالمي' : 'Worldwide Delivery'}
            </span>
            <h2 className="font-rozha text-4xl md:text-5xl leading-[1.1] mb-8">
              {isRTL ? 'نصل إليك' : 'We Deliver'}
              <br />
              <span className="text-brand-dustyBlue">{isRTL ? 'أينما كنت' : 'Everywhere'}</span>
            </h2>
            <div className="grid grid-cols-3 gap-4 mb-8">
              {['UAE', 'KSA', 'Qatar', 'Kuwait', 'Bahrain', 'Oman'].map((country) => (
                <div key={country} className="text-center py-3 border border-brand-dustyBlue/30">
                  <span className="font-roboto text-xs text-white/80 tracking-wide">{country}</span>
                </div>
              ))}
            </div>
            <p className="font-roboto text-sm text-white/60 tracking-wide">
              {isRTL ? 'شحن مجاني للإمارات • توصيل خلال أسبوعين' : 'Free UAE shipping • 2 week delivery'}
            </p>
          </motion.div>

          {/* Right - Newsletter */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`bg-white/10 backdrop-blur-sm p-10 md:p-12 border border-brand-dustyBlue/20 ${isRTL ? 'text-right' : ''}`}
          >
            <span className="font-roboto text-[10px] uppercase tracking-[0.4em] text-brand-dustyBlue mb-4 block">
              {t.cta.subtitle}
            </span>
            <h3 className="font-rozha text-3xl md:text-4xl text-white mb-4">
              {t.cta.title}
            </h3>
            <p className="font-roboto text-sm text-white/60 tracking-wide mb-8">
              {t.cta.description}
            </p>
            <form className={`flex flex-col sm:flex-row gap-3 ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
              <input
                type="email"
                placeholder={t.cta.emailPlaceholder}
                className={`flex-1 px-5 py-4 bg-white/10 border border-brand-dustyBlue/30 text-white font-roboto text-sm tracking-wide placeholder:text-white/40 focus:outline-none focus:border-brand-dustyBlue transition-colors ${isRTL ? 'text-right' : ''}`}
                dir={isRTL ? 'rtl' : 'ltr'}
              />
              <button
                type="submit"
                className="px-8 py-4 bg-brand-dustyBlue text-white font-roboto text-xs uppercase tracking-[0.2em] hover:bg-brand-stone hover:text-brand-darkRed transition-colors"
                data-cursor-hover
              >
                {t.cta.subscribe}
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Bottom Accent Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-dustyBlue/50 via-brand-stone/50 to-brand-dustyBlue/50" />
    </section>
  )
}
