'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import LocaleLink from '@/components/LocaleLink'
import { FiArrowDown, FiArrowRight } from 'react-icons/fi'
import { useLanguage } from '@/lib/i18n/LanguageContext'

function DecorativeCorners({ color = 'dustyBlue' }: { color?: 'dustyBlue' | 'darkRed' | 'stone' }) {
  const c =
    color === 'dustyBlue'
      ? 'from-brand-dustyBlue/40'
      : color === 'darkRed'
        ? 'from-brand-darkRed/30'
        : 'from-brand-stone/40'
  return (
    <>
      <motion.div
        className="pointer-events-none absolute left-8 top-8 h-16 w-16 md:h-24 md:w-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className={`absolute left-0 top-0 h-full w-px bg-gradient-to-b ${c} to-transparent`} />
        <div className={`absolute left-0 top-0 h-px w-full bg-gradient-to-r ${c} to-transparent`} />
      </motion.div>
      <motion.div
        className="pointer-events-none absolute right-8 top-8 h-16 w-16 md:h-24 md:w-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.1 }}
      >
        <div className={`absolute right-0 top-0 h-full w-px bg-gradient-to-b ${c} to-transparent`} />
        <div className={`absolute right-0 top-0 h-px w-full bg-gradient-to-l ${c} to-transparent`} />
      </motion.div>
      <motion.div
        className="pointer-events-none absolute bottom-8 left-8 h-16 w-16 md:h-24 md:w-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <div className={`absolute bottom-0 left-0 h-full w-px bg-gradient-to-t ${c} to-transparent`} />
        <div className={`absolute bottom-0 left-0 h-px w-full bg-gradient-to-r ${c} to-transparent`} />
      </motion.div>
      <motion.div
        className="pointer-events-none absolute bottom-8 right-8 h-16 w-16 md:h-24 md:w-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <div className={`absolute bottom-0 right-0 h-full w-px bg-gradient-to-t ${c} to-transparent`} />
        <div className={`absolute bottom-0 right-0 h-px w-full bg-gradient-to-l ${c} to-transparent`} />
      </motion.div>
    </>
  )
}

const ABOUT_SECTIONS = [
  {
    key: 'identity',
    label: 'Identity',
    paragraphs: [
      'Bint Saeed is a luxury abaya house based in Abu Dhabi, United Arab Emirates.',
      'The house focuses on abaya design shaped by Emirati cultural codes, while also creating jewellery and lifestyle pieces that complement a contemporary, global way of living.',
    ],
  },
  {
    key: 'perspective',
    label: 'Perspective',
    paragraphs: [
      'At its core, Bint Saeed is built on the idea that identity does not change with location.',
      'The designs are created for women who move between cities, cultures, and moments, while remaining connected to where they come from.',
    ],
  },
  {
    key: 'design-codes',
    label: 'Design Codes',
    paragraphs: [
      'The abayas are informed by Emirati design codes, including Al Talli craftsmanship and the structural logic of Khous weaving.',
      'These elements are translated into contemporary forms, creating pieces that carry cultural depth without being confined to tradition.',
    ],
  },
  {
    key: 'jewellery',
    label: 'Jewellery and Objects',
    paragraphs: [
      'Alongside the abayas, Bint Saeed creates jewellery and curated objects.',
      'These pieces are not bound to a single cultural reference, but are designed to complement the wardrobe and lifestyle of the modern woman.',
    ],
  },
  {
    key: 'closing',
    label: 'Closing',
    paragraphs: ['Bint Saeed stands as a house rooted in Abu Dhabi, created for a global presence.'],
  },
] as const

function SectionRule() {
  return (
    <div className="my-14 flex justify-center md:my-16" aria-hidden>
      <div className="h-px w-full max-w-[12rem] bg-gradient-to-r from-transparent via-brand-dustyBlue/45 to-transparent" />
    </div>
  )
}

export default function AboutPage() {
  const { isRTL } = useLanguage()
  return (
    <div className={`relative overflow-hidden bg-white ${isRTL ? 'rtl' : 'ltr'}`}>
      <AboutHero />
      <AboutNarrative />
      <AboutCTA />
    </div>
  )
}

function AboutHero() {
  const ref = useRef(null)
  const { t, isRTL } = useLanguage()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '45%'])
  const opacity = useTransform(scrollYProgress, [0, 0.55], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15])

  return (
    <section ref={ref} className="relative h-[min(100svh,920px)] w-full overflow-hidden">
      <motion.div style={{ scale }} className="absolute inset-0">
        <Image src="/hero-bintsaeed.jpg" alt="Bint Saeed" fill className="object-cover object-[center_28%]" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-[#2a0012]/70 via-[#1a0008]/50 to-[#0d0004]/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,_rgba(146,170,193,0.12)_0%,_transparent_55%)]" />
      </motion.div>
      <DecorativeCorners color="dustyBlue" />
      <motion.div style={{ y, opacity }} className="relative flex h-full items-center">
        <div className="container mx-auto px-6 lg:px-16">
          <div className={`grid items-center gap-8 lg:grid-cols-12 ${isRTL ? '' : ''}`}>
            <div className={`lg:col-span-9 ${isRTL ? 'lg:col-start-4' : ''}`}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="mb-8 inline-block border-b border-white/35 pb-2 font-montserrat text-[10px] uppercase tracking-[0.4em] text-brand-dustyBlue/90">
                  {t.about.subtitle}
                </span>
              </motion.div>
              <motion.h1
                data-document-h1="true"
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="mb-6 font-rozha text-[clamp(2rem,6vw,4rem)] leading-[1.05] tracking-[0.08em] text-white md:tracking-[0.12em]"
              >
                About Bint Saeed
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.75 }}
                className="mb-10 max-w-xl font-montserrat text-sm leading-relaxed tracking-wide text-white/75 md:text-base"
              >
                Abu Dhabi · Emirati design codes · Contemporary global presence
              </motion.p>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
                <LocaleLink
                  href="#about-narrative"
                  className="group inline-flex min-h-[44px] min-w-[44px] cursor-pointer items-center gap-3 py-2 font-montserrat text-[11px] uppercase tracking-[0.28em] !text-white w-fit border-b border-white/50 transition-colors duration-500 hover:border-brand-dustyBlue hover:!text-brand-dustyBlue"
                  data-cursor-hover
                >
                  <span>{t.about.readMore}</span>
                  <FiArrowRight
                    className={`h-4 w-4 transition-transform duration-500 ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`}
                  />
                </LocaleLink>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-12 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>
          <FiArrowDown className="h-5 w-5 text-brand-dustyBlue/60" />
        </motion.div>
      </motion.div>
    </section>
  )
}

function AboutNarrative() {
  const ref = useRef(null)
  const { isRTL } = useLanguage()

  return (
    <article
      id="about-narrative"
      ref={ref}
      className="relative border-t border-brand-stone/20 bg-[#faf9f7]"
    >
      <div className="absolute left-0 top-0 hidden h-full w-px bg-gradient-to-b from-brand-dustyBlue/35 via-brand-dustyBlue/15 to-transparent lg:block lg:left-[8%]" />
      <div className="relative mx-auto max-w-[42rem] px-6 py-20 md:py-28 lg:px-8 lg:py-36">
        <p className="mb-16 font-montserrat text-[10px] uppercase tracking-[0.42em] text-brand-dustyBlue md:mb-20">
          About the house
        </p>
        {ABOUT_SECTIONS.map((section, index) => (
          <div key={section.key}>
            {index > 0 ? <SectionRule /> : null}
            <motion.section
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-12%' }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className={isRTL ? 'text-right' : ''}
              aria-labelledby={`about-section-${section.key}`}
            >
              <h2
                id={`about-section-${section.key}`}
                className="mb-6 font-montserrat text-[10px] uppercase tracking-[0.38em] text-brand-clayRed/85"
              >
                Section {index + 1} — {section.label}
              </h2>
              <div className="space-y-5 font-montserrat text-base leading-[1.85] tracking-wide text-brand-darkRed/88 md:text-[17px] md:leading-[1.9]">
                {section.paragraphs.map((p, i) => (
                  <p key={`${section.key}-${i}`}>{p}</p>
                ))}
              </div>
            </motion.section>
          </div>
        ))}
      </div>
    </article>
  )
}

function AboutCTA() {
  const ref = useRef(null)
  const { t, isRTL } = useLanguage()

  return (
    <section ref={ref} className="relative">
      <div className="absolute inset-0">
        <Image src="/hero-bintsaeed.jpg" alt="" fill className="object-cover object-[center_35%]" aria-hidden />
        <div className="absolute inset-0 bg-brand-darkRed/75" />
      </div>
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-dustyBlue/40 to-transparent" />
      <div className="relative container mx-auto px-6 py-32 text-center md:py-48 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <h2 className="mb-8 font-rozha text-4xl text-white md:text-5xl lg:text-6xl">{t.about.ctaTitle}</h2>
          <LocaleLink
            href="/shop"
            className={`inline-flex items-center gap-3 rounded-xl bg-brand-dustyBlue px-12 py-5 font-montserrat text-sm uppercase tracking-[0.2em] text-[#1a0008] transition-all duration-500 hover:bg-brand-stone hover:text-brand-darkRed ${isRTL ? 'flex-row-reverse' : ''}`}
            data-cursor-hover
          >
            {t.about.shopNow}
            <FiArrowRight className={`h-5 w-5 ${isRTL ? 'rotate-180' : ''}`} />
          </LocaleLink>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-dustyBlue/40 via-brand-stone/40 to-brand-dustyBlue/40" />
    </section>
  )
}
