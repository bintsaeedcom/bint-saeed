'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import LocaleLink from '@/components/LocaleLink'
import { FiArrowDown, FiArrowLeft } from 'react-icons/fi'
import { useLanguage } from '@/lib/i18n/LanguageContext'

/** Matches `/home` editorial framing — dusty blue corner brackets */
function DecorativeCorners({ color = 'dustyBlue' }: { color?: 'dustyBlue' | 'darkRed' | 'stone' }) {
  const colorClass =
    color === 'dustyBlue'
      ? 'from-brand-dustyBlue/40'
      : color === 'darkRed'
        ? 'from-brand-darkRed/30'
        : 'from-brand-stone/40'

  return (
    <>
      <motion.div
        className="pointer-events-none absolute left-6 top-6 h-14 w-14 md:left-10 md:top-10 md:h-20 md:w-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className={`absolute left-0 top-0 h-full w-px bg-gradient-to-b ${colorClass} to-transparent`} />
        <div className={`absolute left-0 top-0 h-px w-full bg-gradient-to-r ${colorClass} to-transparent`} />
      </motion.div>
      <motion.div
        className="pointer-events-none absolute right-6 top-6 h-14 w-14 md:right-10 md:top-10 md:h-20 md:w-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.1 }}
      >
        <div className={`absolute right-0 top-0 h-full w-px bg-gradient-to-b ${colorClass} to-transparent`} />
        <div className={`absolute right-0 top-0 h-px w-full bg-gradient-to-l ${colorClass} to-transparent`} />
      </motion.div>
      <motion.div
        className="pointer-events-none absolute bottom-6 left-6 h-14 w-14 md:bottom-10 md:left-10 md:h-20 md:w-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <div className={`absolute bottom-0 left-0 h-full w-px bg-gradient-to-t ${colorClass} to-transparent`} />
        <div className={`absolute bottom-0 left-0 h-px w-full bg-gradient-to-r ${colorClass} to-transparent`} />
      </motion.div>
      <motion.div
        className="pointer-events-none absolute bottom-6 right-6 h-14 w-14 md:bottom-10 md:right-10 md:h-20 md:w-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <div className={`absolute bottom-0 right-0 h-full w-px bg-gradient-to-t ${colorClass} to-transparent`} />
        <div className={`absolute bottom-0 right-0 h-px w-full bg-gradient-to-l ${colorClass} to-transparent`} />
      </motion.div>
    </>
  )
}

/** Vertical system lines + horizontal rules — same variants as `/home` */
function SectionStripes({ variant = 'default' }: { variant?: 'default' | 'hero' | 'soft' | 'bold' }) {
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

type CodeSection = {
  id: string
  eyebrow: string
  title: string
  /** Placeholder blocks — replace with final house copy when ready. */
  paragraphs: string[]
  imageSrc: string
  imageAlt: string
}

/** Public folder `The Codes Page/` — encode spaces for Next/Image `src`. */
function codesPageImage(fileName: string) {
  const dir = 'The Codes Page'
  return `/${encodeURIComponent(dir)}/${encodeURIComponent(fileName)}`
}

const SECTIONS: CodeSection[] = [
  {
    id: 'the-monogram',
    eyebrow: 'Mark of the house',
    title: 'The monogram',
    paragraphs: [
      'Reserved for the monogram — construction, scale rules, metal and thread applications, and where it should appear subtly versus emphatically.',
    ],
    imageSrc: codesPageImage('monogram.jpg'),
    imageAlt: 'The monogram — house code',
  },
  {
    id: 'al-talli',
    eyebrow: 'Heritage thread',
    title: 'Al Talli',
    paragraphs: [
      'Reserved for the story of Talli in the house — technique, symbolism, and how it appears in the line. Pair this text with your chosen campaign or macro still.',
    ],
    imageSrc: codesPageImage('Talli.jpg'),
    imageAlt: 'Al Talli — house code',
  },
  {
    id: 'khous',
    eyebrow: 'Weave & structure',
    title: 'Khous',
    paragraphs: [
      'Reserved for Khous — palm frond craft, structure, and the way it informs silhouettes and details. Drop in process photography or object studies when available.',
    ],
    imageSrc: codesPageImage('khous.jpg'),
    imageAlt: 'Khous — house code',
  },
  {
    id: 'al-quaa-rosette',
    eyebrow: 'Motif',
    title: 'Al Quaa Rosette',
    paragraphs: [
      'Reserved for the Al Quaa Rosette code — meaning, recurrence in the collection, and how it should be read at a glance on product and packaging.',
    ],
    imageSrc: codesPageImage('Al Quaa Rosette.jpg'),
    imageAlt: 'Al Quaa Rosette — house code',
  },
  {
    id: 'knotted-lines-of-lineage',
    eyebrow: 'Line & continuity',
    title: 'Knotted lines of lineage',
    paragraphs: [
      'Reserved for lineage as a drawn and embroidered language — knots, lines, and continuity between generations. Rich imagery works well full-bleed here.',
    ],
    imageSrc: codesPageImage('Knotted Lines Of Lineage.jpg'),
    imageAlt: 'Knotted lines of lineage — house code',
  },
]

/** Portrait block: subtle vertical parallax + slight scale so edges stay covered */
function ParallaxFramedImage({
  invert,
  imageSrc,
  imageAlt,
  priority,
  outerClassName,
  clipFrameClassName,
}: {
  invert: boolean
  imageSrc: string
  imageAlt: string
  priority: boolean
  outerClassName: string
  clipFrameClassName: string
}) {
  const clipRef = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: clipRef,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], invert ? [36, -44] : [-28, 40])
  const scale = useTransform(scrollYProgress, [0, 1], [1.06, 1.12])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ duration: 0.6, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
      className={outerClassName}
    >
      <div ref={clipRef} className={`relative aspect-[4/5] w-full max-w-xl overflow-hidden shadow-[0_22px_56px_rgba(20,8,11,0.12)] ring-1 ring-brand-dustyBlue/25 lg:aspect-[3/4] ${clipFrameClassName}`}>
        <motion.div
          style={reduceMotion ? undefined : { y, scale }}
          className="absolute inset-0 will-change-transform"
        >
          <Image src={imageSrc} alt={imageAlt} fill className="object-cover" sizes="(min-width: 1024px) 42vw, 92vw" priority={priority} />
        </motion.div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1a0f14]/25 via-transparent to-[#f6f3ef]/10" />
        <div className="pointer-events-none absolute inset-3 border border-white/35" />
      </div>
    </motion.div>
  )
}

function scrollToHash(hash: string) {
  if (!hash || hash === '#') return
  const id = hash.replace(/^#/, '')
  const el = document.getElementById(id)
  if (!el) return
  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function TheCodesClient() {
  const { isRTL } = useLanguage()
  const pathname = usePathname()

  useEffect(() => {
    const run = () => scrollToHash(window.location.hash)
    requestAnimationFrame(run)
    window.addEventListener('hashchange', run)
    return () => window.removeEventListener('hashchange', run)
  }, [])

  useEffect(() => {
    if (!pathname?.includes('the-codes')) return
    const run = () => scrollToHash(window.location.hash)
    requestAnimationFrame(run)
    const t = window.setTimeout(run, 80)
    return () => window.clearTimeout(t)
  }, [pathname])

  return (
    <main
      className={`relative min-h-screen overflow-x-hidden bg-[linear-gradient(180deg,#f6f3ef_0%,#efeae3_38%,#e8e2d8_100%)] pb-8 md:pb-16 ${isRTL ? 'rtl' : 'ltr'}`}
    >
      <SectionStripes variant="soft" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_10%_-10%,rgba(146,170,193,0.22)_0%,transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_92%_30%,rgba(193,144,134,0.12)_0%,transparent_50%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-dustyBlue/30 to-transparent" />

      <header className="relative h-[50vh] overflow-hidden bg-brand-darkRed md:h-[60vh]">
        <SectionStripes variant="hero" />
        <Image
          src={codesPageImage('2.PNG')}
          alt="The Codes — hero"
          fill
          className="object-cover opacity-40"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-darkRed via-brand-darkRed/50 to-transparent" />
        <DecorativeCorners color="dustyBlue" />
        <div className="relative z-10 flex h-full flex-col justify-end pb-16 md:pb-20">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <LocaleLink
                href="/home"
                className={`group inline-flex items-center gap-2 font-montserrat text-xs uppercase tracking-[0.15em] text-white/70 transition-colors hover:text-white ${isRTL ? 'flex-row-reverse' : ''}`}
                data-cursor-hover
              >
                <FiArrowLeft
                  className={`h-4 w-4 transition-transform group-hover:-translate-x-1 ${isRTL ? 'rotate-180 group-hover:translate-x-1' : ''}`}
                />
                {isRTL ? 'العودة للرئيسية' : 'Back to Home'}
              </LocaleLink>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className={isRTL ? 'text-right' : ''}
            >
              <span className="mb-4 block font-montserrat text-xs uppercase tracking-[0.4em] text-white/60">
                House Language
              </span>
              <h1 data-document-h1="true" className="mb-4 font-rozha text-5xl text-white md:text-7xl lg:text-8xl">
                The Codes
              </h1>
              <p className="max-w-lg font-montserrat text-base tracking-wide text-white/70">
                A single scroll through the house symbols, framed with clarity and balance.
              </p>
            </motion.div>
          </div>
        </div>
      </header>

      <div className="relative container mx-auto max-w-4xl px-6 pb-10 pt-8 text-center md:pb-14 lg:px-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="relative mt-2 flex flex-col items-center gap-2 text-brand-darkRed/45"
        >
          <span className="inline-flex items-center gap-2 font-montserrat text-[10px] uppercase tracking-[0.28em]">
            <span className="h-px w-8 bg-brand-dustyBlue/50" aria-hidden />
            Scroll
            <span className="h-px w-8 bg-brand-dustyBlue/50" aria-hidden />
          </span>
          <FiArrowDown className="h-4 w-4 animate-bounce text-brand-dustyBlue/60" aria-hidden />
        </motion.div>
      </div>

      <div className="relative space-y-6 md:space-y-10 lg:space-y-14">
        {SECTIONS.map((section, index) => {
          const isEven = index % 2 === 0
          const textOrder = isEven ? 'lg:order-1' : 'lg:order-2'
          const imageOrder = isEven ? 'lg:order-2' : 'lg:order-1'
          const stripeVariant = index % 2 === 0 ? 'soft' : 'default'

          return (
            <section
              key={section.id}
              id={section.id}
              className="relative scroll-mt-28 overflow-hidden md:scroll-mt-32"
              aria-labelledby={`${section.id}-heading`}
            >
              <SectionStripes variant={stripeVariant} />
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-dustyBlue/22 to-transparent" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-darkRed/10 to-transparent" />

              <div className="container relative z-[1] mx-auto grid max-w-6xl gap-10 px-6 py-14 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-12 lg:py-20">
                {index === 0 || index === SECTIONS.length - 1 ? <DecorativeCorners color="dustyBlue" /> : null}
                <motion.div
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-12%' }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className={`${textOrder} max-w-xl ${isRTL ? 'lg:mr-auto lg:ml-0 lg:text-right' : 'lg:ml-auto lg:mr-0'}`}
                >
                  <div className={`mb-3 flex items-center gap-3 ${isRTL ? 'flex-row-reverse justify-end' : ''}`}>
                    <span className="h-1.5 w-1.5 shrink-0 bg-brand-dustyBlue/80 shadow-[0_0_0_3px_rgba(146,170,193,0.2)]" aria-hidden />
                    <span className="h-px w-10 shrink-0 bg-brand-dustyBlue/45 md:w-12" aria-hidden />
                    <p className="font-montserrat text-[10px] uppercase tracking-[0.32em] text-brand-clayRed/75">
                      {section.eyebrow}
                    </p>
                  </div>
                  <h2
                    id={`${section.id}-heading`}
                    className="font-rozha text-3xl text-brand-darkRed sm:text-4xl md:text-[2.65rem] md:leading-[1.08]"
                  >
                    {section.title}
                  </h2>
                  <div className="mt-6 space-y-4 border-s border-brand-dustyBlue/40 ps-5 md:mt-8 md:ps-6">
                    {section.paragraphs.map((p, i) => (
                      <p key={i} className="font-montserrat text-sm leading-[1.92] tracking-wide text-brand-darkRed/78">
                        {p}
                      </p>
                    ))}
                  </div>
                </motion.div>

                <ParallaxFramedImage
                  invert={isEven}
                  imageSrc={section.imageSrc}
                  imageAlt={section.imageAlt}
                  priority={index < 2}
                  outerClassName={`${imageOrder} relative z-[1]`}
                  clipFrameClassName={
                    isEven
                      ? isRTL
                        ? 'origin-right rounded-sm lg:ms-auto'
                        : 'origin-left rounded-sm'
                      : isRTL
                        ? 'origin-left rounded-sm'
                        : 'origin-right rounded-sm lg:ms-auto'
                  }
                />
              </div>
            </section>
          )
        })}
      </div>

      <footer className="relative container mx-auto max-w-3xl px-6 pb-24 pt-16 text-center lg:px-12">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-dustyBlue/25 to-transparent" />
        <div className="mx-auto h-px w-24 bg-gradient-to-r from-transparent via-brand-clayRed/40 to-transparent" />
        <p className="mt-8 font-montserrat text-[11px] uppercase tracking-[0.26em] text-brand-darkRed/50">
          Continue the story
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <LocaleLink
            href="/shop"
            className="inline-flex border border-brand-darkRed/25 bg-white/70 px-8 py-3 font-montserrat text-[11px] uppercase tracking-[0.18em] text-brand-darkRed transition-colors hover:border-brand-dustyBlue hover:text-brand-dustyBlue"
            data-cursor-hover
          >
            View collection
          </LocaleLink>
        </div>
      </footer>
    </main>
  )
}
