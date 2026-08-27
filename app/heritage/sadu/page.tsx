'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import LocaleLink from '@/components/LocaleLink'
import AboutSectionHero from '@/components/AboutSectionHero'
import { FiArrowRight } from 'react-icons/fi'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { commerceUi } from '@/lib/i18n/commerceUi'
import { getSaduPageCopy } from '@/lib/content/heritageSaduCopyI18n'
import { HERITAGE_SADU_IMAGES } from '@/lib/content/heritagePageMedia'
import { withBrandAlt } from '@/lib/products/imageAlt'
import type { AppLocale } from '@/lib/i18n/routing'
import { ctaPrimaryWithGap } from '@/lib/ui/ctaClasses'
import { EDITORIAL_PAGE_CONTAINER, EDITORIAL_PAGE_SHELL } from '@/lib/ui/editorialPageChrome'
import {
  HERITAGE_CHAPTER_BADGE_DARK,
  HERITAGE_CHAPTER_BODY,
  HERITAGE_CHAPTER_BODY_DARK,
  HERITAGE_CHAPTER_CARD,
  HERITAGE_CHAPTER_CARD_BODY,
  HERITAGE_CHAPTER_CTA_PAD,
  HERITAGE_CHAPTER_DARK_BAND,
  HERITAGE_CHAPTER_EYEBROW,
  HERITAGE_CHAPTER_H2,
  HERITAGE_CHAPTER_H2_DARK,
  HERITAGE_CHAPTER_H3,
  HERITAGE_CHAPTER_HERO_DESC,
  HERITAGE_CHAPTER_HERO_TITLE,
  HERITAGE_CHAPTER_SECTION_PAD,
} from '@/lib/ui/heritageChapterChrome'

const EYEBROW = HERITAGE_CHAPTER_EYEBROW
const H2 = HERITAGE_CHAPTER_H2
const BODY = HERITAGE_CHAPTER_BODY
const H3 = HERITAGE_CHAPTER_H3
const DARK_BAND = HERITAGE_CHAPTER_DARK_BAND
const H2_DARK = HERITAGE_CHAPTER_H2_DARK
const BODY_DARK = HERITAGE_CHAPTER_BODY_DARK
const BADGE_DARK = HERITAGE_CHAPTER_BADGE_DARK
const SECTION_PAD = HERITAGE_CHAPTER_SECTION_PAD

export default function SaduPage() {
  return (
    <div className={`${EDITORIAL_PAGE_SHELL} min-h-screen bg-brand-pageCanvas`}>
      <HeroSection />
      <StorySection />
      <PatternsSection />
      <UNESCOSection />
      <ColorsSection />
      <BintSaeedSection />
      <CTASection />
    </div>
  )
}

function HeroSection() {
  const { isRTL, language } = useLanguage()
  const ui = commerceUi(language)
  const copy = getSaduPageCopy(language)
  const locale = language as AppLocale

  return (
    <AboutSectionHero
      rtl={isRTL}
      imageSrc={HERITAGE_SADU_IMAGES.hero}
      imageAlt={withBrandAlt(
        'Al Sadu weaving with green geometric triangles, Emirati Bedouin heritage, Bint Saeed Abu Dhabi',
        locale,
      )}
      imageOpacity={55}
      priority
      segments={[
        { label: ui.common.home, href: '/home' },
        { label: copy.heritage, href: '/heritage' },
        { label: copy.sadu },
      ]}
      eyebrow={copy.heroTag}
      title={copy.heroTitle}
      description={copy.heroSubtitle}
      titleClassName={HERITAGE_CHAPTER_HERO_TITLE}
      descriptionClassName={HERITAGE_CHAPTER_HERO_DESC}
    />
  )
}

function StorySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { margin: '-20%' })
  const { isRTL, language } = useLanguage()
  const copy = getSaduPageCopy(language)
  const locale = language as AppLocale

  return (
    <section ref={ref} className={SECTION_PAD}>
      <div className={EDITORIAL_PAGE_CONTAINER}>
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 40: -40 }}
            animate={isInView ? { opacity: 1, x: 0 }: {}}
            transition={{ duration: 0.8 }}
            className="text-start"
          >
            <span className={EYEBROW}>{copy.storyEyebrow}</span>
            <h2 className={H2}>{copy.storyTitle}</h2>
            <div className={`space-y-5 ${BODY}`}>
              <p>{copy.storyP1}</p>
              <p>{copy.storyP2}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: isRTL ? -40: 40 }}
            animate={isInView ? { opacity: 1, x: 0 }: {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-[4/5] overflow-hidden"
          >
            <Image
              src={HERITAGE_SADU_IMAGES.detail}
              alt={withBrandAlt(
                'Al Sadu woven band with fringe, Emirati heritage craft, Bint Saeed Abu Dhabi',
                locale,
              )}
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function PatternsSection() {
  const { language } = useLanguage()
  const copy = getSaduPageCopy(language)

  return (
    <section className={`${SECTION_PAD} bg-brand-stone/20`}>
      <div className={EDITORIAL_PAGE_CONTAINER}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-14 text-center"
        >
          <span className={EYEBROW}>{copy.symbolsEyebrow}</span>
          <h2 className={H2}>{copy.symbolsTitle}</h2>
          <p className={`mx-auto mt-4 max-w-2xl ${BODY}`}>{copy.symbolsLead}</p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {copy.patterns.map((pattern, index) => (
            <motion.div
              key={pattern.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={HERITAGE_CHAPTER_CARD}
            >
              <h3 className={`mb-3 ${H3}`}>{pattern.name}</h3>
              <p className={HERITAGE_CHAPTER_CARD_BODY}>{pattern.meaning}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function UNESCOSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { margin: '-20%' })
  const { language } = useLanguage()
  const copy = getSaduPageCopy(language)

  return (
    <section ref={ref} className={`${SECTION_PAD} ${DARK_BAND}`}>
      <div className={EDITORIAL_PAGE_CONTAINER}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 }: {}}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className={EYEBROW}>{copy.unescoEyebrow}</span>
          <h2 className={H2_DARK}>{copy.unescoTitle}</h2>
          <p className={`mb-8 ${BODY_DARK}`}>{copy.unescoBody}</p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className={BADGE_DARK}>{copy.unescoBadge1}</span>
            <span className={BADGE_DARK}>{copy.unescoBadge2}</span>
            <span className={BADGE_DARK}>{copy.unescoBadge3}</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function ColorsSection() {
  const { language } = useLanguage()
  const copy = getSaduPageCopy(language)

  return (
    <section className={SECTION_PAD}>
      <div className={EDITORIAL_PAGE_CONTAINER}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-14 text-center"
        >
          <span className={EYEBROW}>{copy.paletteEyebrow}</span>
          <h2 className={H2}>{copy.paletteTitle}</h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-4">
          {copy.colors.map((color, index) => (
            <motion.div
              key={color.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div
                className="mx-auto mb-4 h-20 w-20 rounded-full border-4 border-white shadow-lg md:h-24 md:w-24"
                style={{ backgroundColor: color.hex }}
              />
              <h3 className={`mb-2 ${H3}`}>{color.name}</h3>
              <p className="font-montserrat text-xs tracking-wide text-brand-darkRed/70">{color.meaning}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function BintSaeedSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { margin: '-20%' })
  const { isRTL, language } = useLanguage()
  const copy = getSaduPageCopy(language)
  const locale = language as AppLocale

  return (
    <section ref={ref} className={`${SECTION_PAD} bg-brand-stone/10`}>
      <div className={EDITORIAL_PAGE_CONTAINER}>
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 }: {}}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/5] overflow-hidden order-2 lg:order-1"
          >
            <Image
              src={HERITAGE_SADU_IMAGES.hero}
              alt={withBrandAlt(
                'Al Sadu geometric triangle weave on wood, Emirati Bedouin craft, Bint Saeed Abu Dhabi',
                locale,
              )}
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: isRTL ? -40: 40 }}
            animate={isInView ? { opacity: 1, x: 0 }: {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`order-1 text-start lg:order-2`}
          >
            <span className={EYEBROW}>{copy.brandEyebrow}</span>
            <h2 className={H2}>{copy.brandTitle}</h2>
            <div className={`space-y-5 ${BODY}`}>
              <p>{copy.brandP1}</p>
              <p>{copy.brandP2}</p>
            </div>
            <LocaleLink
              href="/shop?from=heritage-sadu"
              className={`mt-8 ${ctaPrimaryWithGap}`}
              data-bs-cta
              data-cursor-hover
            >
              {copy.shopCollection}
              <FiArrowRight className={`h-4 w-4 ${isRTL ? 'rotate-180': ''}`} />
            </LocaleLink>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function CTASection() {
  const { language } = useLanguage()
  const copy = getSaduPageCopy(language)

  return (
    <section className={`${HERITAGE_CHAPTER_CTA_PAD} bg-brand-stone/20`}>
      <div className={EDITORIAL_PAGE_CONTAINER}>
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="text-start">
            <h3 className={`mb-2 ${H3}`}>{copy.exploreMore}</h3>
            <p className="font-montserrat text-sm tracking-wide text-brand-darkRed/70">{copy.exploreMoreLead}</p>
          </div>
          <div className={`flex gap-4 `}>
            <LocaleLink
              href="/heritage/al-talli"
              className="inline-flex min-h-[48px] items-center justify-center px-6 py-3 border border-brand-darkRed text-brand-darkRed font-montserrat text-xs uppercase tracking-[0.15em] hover:bg-brand-dustyBlue hover:text-white transition-colors"
              data-cursor-hover
            >
              {copy.alTalli}
            </LocaleLink>
            <LocaleLink
              href="/heritage/khous"
              className="inline-flex min-h-[48px] items-center justify-center px-6 py-3 border border-brand-darkRed text-brand-darkRed font-montserrat text-xs uppercase tracking-[0.15em] hover:bg-brand-dustyBlue hover:text-white transition-colors"
              data-cursor-hover
            >
              {copy.khous}
            </LocaleLink>
          </div>
        </div>
      </div>
    </section>
  )
}
