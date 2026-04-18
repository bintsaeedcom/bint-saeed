'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { motion } from 'framer-motion'
import LocaleLink from '@/components/LocaleLink'
import { FiArrowDown } from 'react-icons/fi'
import { useLanguage } from '@/lib/i18n/LanguageContext'

type CodeSection = {
  id: string
  eyebrow: string
  title: string
  /** Placeholder blocks — replace with final house copy when ready. */
  paragraphs: string[]
  imageSrc: string
  imageAlt: string
}

const SECTIONS: CodeSection[] = [
  {
    id: 'the-codes',
    eyebrow: 'House language',
    title: 'The Codes',
    paragraphs: [
      'This page gathers the visual and symbolic language of Bint Saeed — the motifs, materials, and gestures that repeat across the collection. Each block below is reserved for your final editorial copy and imagery.',
      'Use the anchors in the navigation menu to jump directly to the code you are shaping for launch.',
    ],
    imageSrc: '/collection-section/67.png',
    imageAlt: 'The Codes — editorial placeholder',
  },
  {
    id: 'al-talli',
    eyebrow: 'Heritage thread',
    title: 'Al Talli',
    paragraphs: [
      'Reserved for the story of Talli in the house — technique, symbolism, and how it appears in the line. Pair this text with your chosen campaign or macro still.',
    ],
    imageSrc: '/collection-section/2.PNG',
    imageAlt: 'Al Talli — image placeholder',
  },
  {
    id: 'khous',
    eyebrow: 'Weave & structure',
    title: 'Khous',
    paragraphs: [
      'Reserved for Khous — palm frond craft, structure, and the way it informs silhouettes and details. Drop in process photography or object studies when available.',
    ],
    imageSrc: '/collection-section/3.JPG',
    imageAlt: 'Khous — image placeholder',
  },
  {
    id: 'carnelian-flower',
    eyebrow: 'Motif',
    title: 'Carnelian flower',
    paragraphs: [
      'Reserved for the Carnelian flower code — meaning, recurrence in the collection, and how it should be read at a glance on product and packaging.',
    ],
    imageSrc: '/collection-section/4.JPG',
    imageAlt: 'Carnelian flower — image placeholder',
  },
  {
    id: 'knotted-lines-of-lineage',
    eyebrow: 'Line & continuity',
    title: 'Knotted lines of lineage',
    paragraphs: [
      'Reserved for lineage as a drawn and embroidered language — knots, lines, and continuity between generations. Rich imagery works well full-bleed here.',
    ],
    imageSrc: '/image 1.png',
    imageAlt: 'Knotted lines of lineage — image placeholder',
  },
  {
    id: 'the-monogram',
    eyebrow: 'Mark of the house',
    title: 'The monogram',
    paragraphs: [
      'Reserved for the monogram — construction, scale rules, metal and thread applications, and where it should appear subtly versus emphatically.',
    ],
    imageSrc: '/collection-section/68.png',
    imageAlt: 'The monogram — image placeholder',
  },
]

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
      className={`relative overflow-x-hidden bg-[linear-gradient(180deg,#f6f3ef_0%,#efeae3_38%,#e8e2d8_100%)] pt-28 pb-8 md:pt-32 md:pb-16 ${isRTL ? 'rtl' : 'ltr'}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_10%_-10%,rgba(146,170,193,0.22)_0%,transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_92%_30%,rgba(193,144,134,0.12)_0%,transparent_50%)]" />

      <header className="relative container mx-auto max-w-4xl px-6 pb-16 text-center md:pb-20 lg:px-12">
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mb-5 block font-montserrat text-[10px] uppercase tracking-[0.38em] text-brand-clayRed/80"
        >
          Bint Saeed
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          data-document-h1="true"
          className="font-rozha text-[2.35rem] leading-[1.05] text-brand-darkRed sm:text-5xl md:text-6xl"
        >
          The Codes
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.12 }}
          className="mx-auto mt-6 max-w-2xl font-montserrat text-sm leading-[1.9] tracking-wide text-brand-darkRed/72"
        >
          A single scroll through the house symbols — each section is framed for long-form copy and a hero visual.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="mt-10 flex flex-col items-center gap-2 text-brand-darkRed/45"
        >
          <span className="font-montserrat text-[10px] uppercase tracking-[0.28em]">Scroll</span>
          <FiArrowDown className="h-4 w-4 animate-bounce" aria-hidden />
        </motion.div>
      </header>

      <div className="relative space-y-6 md:space-y-10 lg:space-y-14">
        {SECTIONS.map((section, index) => {
          const isEven = index % 2 === 0
          const textOrder = isEven ? 'lg:order-1' : 'lg:order-2'
          const imageOrder = isEven ? 'lg:order-2' : 'lg:order-1'

          return (
            <section
              key={section.id}
              id={section.id}
              className="relative scroll-mt-28 md:scroll-mt-32"
              aria-labelledby={`${section.id}-heading`}
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-darkRed/12 to-transparent" />

              <div className="container relative mx-auto grid max-w-6xl gap-10 px-6 py-14 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-12 lg:py-20">
                <motion.div
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-12%' }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className={`${textOrder} max-w-xl ${isRTL ? 'lg:mr-auto lg:ml-0' : 'lg:ml-auto lg:mr-0'}`}
                >
                  <p className="mb-3 font-montserrat text-[10px] uppercase tracking-[0.32em] text-brand-clayRed/75">{section.eyebrow}</p>
                  <h2
                    id={`${section.id}-heading`}
                    className="font-rozha text-3xl text-brand-darkRed sm:text-4xl md:text-[2.65rem] md:leading-[1.08]"
                  >
                    {section.title}
                  </h2>
                  <div className="mt-6 space-y-4 border-s border-brand-dustyBlue/25 ps-5 md:mt-8 md:ps-6">
                    {section.paragraphs.map((p, i) => (
                      <p key={i} className="font-montserrat text-sm leading-[1.92] tracking-wide text-brand-darkRed/78">
                        {p}
                      </p>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-10%' }}
                  transition={{ duration: 0.6, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
                  className={`${imageOrder} relative`}
                >
                  <div
                    className={`relative aspect-[4/5] w-[calc(100%+2.5rem)] max-w-none overflow-hidden shadow-[0_28px_80px_rgba(20,8,11,0.14)] sm:w-[calc(100%+3.5rem)] md:w-[calc(100%+5rem)] lg:aspect-[3/4] ${
                      isEven
                        ? isRTL
                          ? 'origin-right rounded-sm lg:translate-x-4'
                          : 'origin-left rounded-sm lg:-translate-x-4'
                        : isRTL
                          ? 'origin-left rounded-sm lg:-translate-x-4'
                          : 'origin-right rounded-sm lg:translate-x-4'
                    } ring-1 ring-brand-darkRed/[0.06]`}
                  >
                    <Image
                      src={section.imageSrc}
                      alt={section.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 42vw, 92vw"
                      priority={index < 2}
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1a0f14]/25 via-transparent to-[#f6f3ef]/10" />
                  </div>
                </motion.div>
              </div>

              {/* Full-bleed overflow band — rich second visual plane */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: '-5%' }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="relative -mx-4 mt-2 sm:-mx-8 md:-mx-12 lg:-mx-[max(2rem,calc((100vw-72rem)/2+1.5rem))] lg:mt-4"
              >
                <div className="relative aspect-[21/9] min-h-[180px] w-full overflow-hidden bg-brand-stone/25 md:min-h-[220px] lg:min-h-[260px]">
                  <Image
                    src={index % 3 === 0 ? '/collection-section/68.png' : index % 3 === 1 ? '/image 2.JPG' : '/collection-section/67.png'}
                    alt=""
                    fill
                    className="object-cover opacity-95"
                    sizes="100vw"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(26,15,20,0.5)_0%,transparent_38%,transparent_62%,rgba(26,15,20,0.45)_100%)]" />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#1a0f14]/35 to-transparent" />
                </div>
              </motion.div>
            </section>
          )
        })}
      </div>

      <footer className="relative container mx-auto max-w-3xl px-6 pb-24 pt-16 text-center lg:px-12">
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
          <LocaleLink
            href="/heritage"
            className="inline-flex border border-brand-dustyBlue/40 bg-brand-dustyBlue/15 px-8 py-3 font-montserrat text-[11px] uppercase tracking-[0.18em] text-brand-darkRed transition-colors hover:bg-brand-dustyBlue/25"
            data-cursor-hover
          >
            Heritage hub
          </LocaleLink>
        </div>
      </footer>
    </main>
  )
}
