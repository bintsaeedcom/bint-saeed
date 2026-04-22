'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import LocaleLink from '@/components/LocaleLink'
import AboutTopicNav from '@/components/AboutTopicNav'
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

export default function AboutPage() {
  const { isRTL } = useLanguage()
  return (
    <div className={`relative overflow-hidden bg-white ${isRTL ? 'rtl' : 'ltr'}`}>
      <AboutHero />
      <AboutTopicNav />
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
        <motion.section
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-12%' }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-10 font-montserrat text-base leading-[1.85] tracking-wide text-brand-darkRed/88 md:text-[17px] md:leading-[1.9]"
        >
          <p>
            <strong>Bint Saeed is a house shaped by origin.</strong>
          </p>

          <p>
            In Arabic, <em>Bint</em> means daughter of. It is not a reference to where you are, but to where you
            come from. It carries lineage, memory, and belonging. It holds the story that exists before you, and
            continues through you.{' '}
            <strong>
              Because no matter where life leads, a woman remains connected to her origin. It does not disappear when
              she moves. It does not change when she grows.
            </strong>{' '}
            It moves with her, forming the way she stands, the way she chooses, the way she is seen.
          </p>

          <p>
            Rooted in Abu Dhabi, the house emerges from a place that has always moved forward without losing itself. A
            place where ambition and identity exist side by side, where growth is built on origin rather than
            replacing it.{' '}
            <strong>
              Today, a woman moves between cities, cultures, and expectations. She builds a life across places, steps
              into different roles, and expands what is possible for herself. Yet through all of this, she remains a
              daughter.
            </strong>{' '}
            Not defined by limitation, but by depth. By where she comes from, and what she carries forward. Bint Saeed
            exists for her. <strong>For the woman who moves through the world without leaving herself behind,</strong>{' '}
            and who understands that identity is not something to adjust depending on place, but something that is
            carried out with confidence and certainty.
          </p>

          <p>
            Each piece is created with this in mind.{' '}
            <strong>
              Shaped by Emirati design codes, including Al Talli craftsmanship and the structural logic of Khous
              weaving,
            </strong>{' '}
            the work carries forward knowledge that has existed for generations. These elements are translated into
            contemporary forms that move across borders, allowing what was once confined to a single setting to be worn
            with ease in a global life. Alongside the abayas, the house creates jewellery and objects that extend this
            idea further, pieces that move with you and adapt to the life you are building.
          </p>

          <p>
            <strong>
              Bint Saeed stands as a house devoted to the daughter in every woman, a reminder that no matter where you
              go, you do not begin again, you continue.
            </strong>
          </p>
        </motion.section>
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
            href="/shop?from=about-story"
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
