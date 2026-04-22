'use client'

import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import LocaleLink from '@/components/LocaleLink'
import AboutTopicNav from '@/components/AboutTopicNav'
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
      'The Bint Saeed monogram is more than a mark, it is a structure of identity. Its interwoven form reflects continuity, where lines return into themselves rather than break. It appears with intention across pieces, sometimes subtle, sometimes present, always part of the whole.',
    ],
    imageSrc: codesPageImage('monogram.jpg'),
    imageAlt: 'The monogram — house code',
  },
  {
    id: 'al-talli',
    eyebrow: 'Heritage thread',
    title: 'Al Talli',
    paragraphs: [
      'Al Talli is a traditional Emirati craft, woven with fine metallic threads and recognised as part of the cultural heritage of the United Arab Emirates. It reflects precision, patience, and a deep-rooted tradition of adornment. Within Bint Saeed, it is translated into forms that move naturally across borders.',
    ],
    imageSrc: codesPageImage('Talli.jpg'),
    imageAlt: 'Al Talli — house code',
  },
  {
    id: 'khous',
    eyebrow: 'Weave & structure',
    title: 'Khous',
    paragraphs: [
      'Khous weaving is rooted in the use of palm fronds, shaped through structure and repetition, and recognised as part of the traditional crafts of the region. It reflects a way of making that is both functional and refined. Its logic is carried into the lines and construction of each piece.',
    ],
    imageSrc: codesPageImage('khous.jpg'),
    imageAlt: 'Khous — house code',
  },
  {
    id: 'al-ain-rosette',
    eyebrow: 'Motif',
    title: 'Al Ain Rosette',
    paragraphs: [
      'The Al Ain Rosette appears as a carved carnelian stone within the house. Its warm tone reflects the desert landscape of Al Ain in the United Arab Emirates, while its form recalls the rounded shapes of the desert hyacinth and the yellow bloom of Tribulus omanense. For now, it appears in jewellery and small objects as a distinct point of recognition.',
    ],
    imageSrc: codesPageImage('Al Quaa Rosette.jpg'),
    imageAlt: 'Al Ain Rosette — house code',
  },
  {
    id: 'knotted-lines-of-lineage',
    eyebrow: 'Line & continuity',
    title: 'Knotted lines of lineage',
    paragraphs: [
      'Knotted lines appear within the house as a recurring element, formed as buttons and charms across garments. Each knot reflects connection across time, linking what is inherited with what is lived. Placed close to the wearer, they serve as a subtle reminder of a story that continues.',
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
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({})

  const expandedTextBySection: Record<string, string> = {
    'the-monogram':
      'The monogram is built on the idea of connection and return. Its form draws from interlocking lines, reflecting continuity between past and present. It is applied across garments, jewellery, and objects with precision, either as a quiet detail or as a defining element. As a visual signature, it anchors each piece within the language of the house while remaining adaptable across contexts.',
    'al-talli':
      'Al Talli is a heritage craft practiced across the United Arab Emirates, traditionally handwoven using cotton and metallic threads. It forms part of the broader textile traditions of the region, closely tied to techniques recognised on UNESCO’s Representative List of the Intangible Cultural Heritage of Humanity. Historically used to embellish garments, it carries both technical mastery and cultural meaning. Within Bint Saeed, this craft is reinterpreted through placement, structure, and material, allowing it to exist within a contemporary wardrobe while maintaining its origin.',
    khous:
      'Khous is a traditional craft of the United Arab Emirates, using dried palm fronds to create woven forms. It belongs to a wider body of heritage practices connected to palm cultivation and craft traditions across the region, which are recognised within UNESCO-listed cultural expressions. Historically used in everyday objects, its strength lies in its structure, built through interlacing patterns that create durability and form. At Bint Saeed, this logic is translated into garment construction and detailing, where lines, folds, and layering reflect the same principles in a modern context.',
    'al-ain-rosette':
      'The Al Ain Rosette is developed as a house motif, carved in carnelian stone. Its colour is chosen for its natural warmth, reflecting the desert tones of Al Ain in the United Arab Emirates. Its form draws from desert flora, recalling both the desert hyacinth and the soft five-petalled bloom of Tribulus omanense, the national flower of the UAE. At present, it appears in jewellery, phone charms, and small objects, where it introduces a recognisable element that can extend across the house over time.',
    'knotted-lines-of-lineage':
      'Knotted lines of lineage are developed as a defining element within the house. Each line is shaped in relation to another, forming knots that reflect connection across time, experience, and generation. What is inherited and what is lived become intertwined, creating a continuous thread rather than separate moments.\n\nWithin Bint Saeed, these knots take form as buttons on abayas and as charms across garments. The charms, often composed of natural stones, are placed with care, frequently along the shoulder, where they bring balance to the silhouette while remaining close to the wearer.\n\nTheir placement is considered. Each knot serves as a reminder of the story you carry, shaped by where you come from and what you move through. A story that is interconnected, personal, and ongoing, one you recognise, stand within, and carry forward with pride.',
  }

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
      <AboutTopicNav />

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
                    {expandedTextBySection[section.id] && expandedSections[section.id] ? (
                      <p className="font-montserrat text-sm leading-[1.92] tracking-wide text-brand-darkRed/78">
                        {expandedTextBySection[section.id]}
                      </p>
                    ) : null}
                    {expandedTextBySection[section.id] ? (
                      <button
                        type="button"
                        onClick={() =>
                          setExpandedSections((prev) => ({
                            ...prev,
                            [section.id]: !prev[section.id],
                          }))
                        }
                        className="inline-flex border border-brand-darkRed/25 bg-white/70 px-5 py-2.5 font-montserrat text-[10px] uppercase tracking-[0.18em] text-brand-darkRed transition-colors hover:border-brand-dustyBlue hover:text-brand-dustyBlue"
                        data-cursor-hover
                      >
                        Read More
                      </button>
                    ) : null}
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
            href="/shop?from=the-codes"
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
