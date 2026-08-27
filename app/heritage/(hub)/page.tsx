'use client'

import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import LocaleLink from '@/components/LocaleLink'
import AboutSectionHero from '@/components/AboutSectionHero'
import { FiArrowRight } from 'react-icons/fi'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { commerceUi } from '@/lib/i18n/commerceUi'
import { getHeritagePageCopy } from '@/lib/content/heritagePageCopyI18n'
import { getHeritageHubEditorial } from '@/lib/content/heritageHubEditorialI18n'
import {
  HERITAGE_CRAFT_IMAGES,
  HERITAGE_HUB_HERO,
  HERITAGE_PHILOSOPHY_IMAGES,
} from '@/lib/content/heritagePageMedia'
import { withBrandAlt } from '@/lib/products/imageAlt'
import type { AppLocale } from '@/lib/i18n/routing'
import {
  EDITORIAL_PAGE_CONTAINER,
  EDITORIAL_PAGE_SHELL,
  EDITORIAL_STACK_CARD,
  EDITORIAL_STACK_CONTENT_PAD,
  EDITORIAL_STACK_PAD,
} from '@/lib/ui/editorialPageChrome'

/**
 * Heritage hub — aligned with About / Giving Forward / Al Talli editorial chrome.
 * Full-bleed House photography; no stock Unsplash.
 */
export default function HeritagePage() {
  const { isRTL, language } = useLanguage()
  const ui = commerceUi(language)
  const copy = getHeritagePageCopy(language)
  const editorial = getHeritageHubEditorial(language)
  const locale = language as AppLocale

  return (
    <div className={`${EDITORIAL_PAGE_SHELL} relative min-h-screen bg-brand-pageCanvas`}>
      <AboutSectionHero
        rtl={isRTL}
        imageSrc={HERITAGE_HUB_HERO.src}
        imageAlt={withBrandAlt(editorial.heroImageAlt, locale)}
        imageClassName="object-cover object-[center_35%]"
        imageOpacity={58}
        priority
        segments={[
          { label: ui.common.home, href: '/home' },
          { label: copy.navLabel },
        ]}
        eyebrow={copy.heroEyebrow}
        title={`${copy.heroTitle} ${copy.heroTitleAccent}`}
        description={copy.heroLead}
      />

      <IntroSection />
      <CraftGrid />
      <BattoulahSection />
      <PhilosophySection />
      <ClosingCta />
    </div>
  )
}

function IntroSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { margin: '-15%', once: true })
  const { language } = useLanguage()
  const copy = getHeritagePageCopy(language)
  const editorial = getHeritageHubEditorial(language)

  return (
    <section
      ref={ref}
      className={`relative overflow-hidden bg-brand-pageCanvas ${EDITORIAL_STACK_PAD} ${EDITORIAL_STACK_CARD}`}
      aria-labelledby="heritage-intro-heading"
    >
      <div className={`relative ${EDITORIAL_PAGE_CONTAINER} ${EDITORIAL_STACK_CONTENT_PAD}`}>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-3xl text-start"
        >
          <p className="mb-4 font-montserrat text-[10px] uppercase tracking-[0.42em] text-brand-dustyBlue">
            {copy.introEyebrow}
          </p>
          <h2
            id="heritage-intro-heading"
            className="mb-8 font-rozha text-[clamp(1.85rem,3.6vw,2.85rem)] leading-[1.08] tracking-[0.02em] text-brand-darkRed"
          >
            {copy.introTitle}
          </h2>
          <div className="space-y-5 font-montserrat text-[15px] leading-[1.85] tracking-wide text-brand-darkRed/75 md:text-base">
            <p>{editorial.introP1}</p>
            <p>{editorial.introP2}</p>
            <p>{editorial.introP3}</p>
            <p className="text-brand-clayRed/80">{copy.introBody}</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function CraftGrid() {
  const ref = useRef(null)
  const isInView = useInView(ref, { margin: '-10%', once: true })
  const { isRTL, language } = useLanguage()
  const copy = getHeritagePageCopy(language)
  const editorial = getHeritageHubEditorial(language)

  return (
    <section
      ref={ref}
      className={`relative bg-white ${EDITORIAL_STACK_PAD}`}
      aria-labelledby="heritage-crafts-heading"
    >
      <div className={`relative ${EDITORIAL_PAGE_CONTAINER}`}>
        <div className="mx-auto mb-14 max-w-3xl text-start md:mb-20">
          <p className="mb-4 font-montserrat text-[10px] uppercase tracking-[0.42em] text-brand-dustyBlue">
            {editorial.craftsEyebrow}
          </p>
          <h2
            id="heritage-crafts-heading"
            className="mb-5 font-rozha text-[clamp(1.85rem,3.6vw,2.85rem)] leading-[1.08] tracking-[0.02em] text-brand-darkRed"
          >
            {editorial.craftsHeading}
          </h2>
          <p className="font-montserrat text-[15px] leading-[1.85] tracking-wide text-brand-clayRed/80 md:text-base">
            {editorial.craftsLead}
          </p>
        </div>
        <div className="space-y-20 md:space-y-28">
          {copy.items.map((item, index) => {
            const imageSrc = HERITAGE_CRAFT_IMAGES[item.id] ?? item.image
            const imageLeft = index % 2 === 0
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 36 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.75, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                <LocaleLink href={item.href} className="group block" data-cursor-hover>
                  <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
                    <div
                      className={`relative aspect-[4/5] overflow-hidden bg-brand-stone/30 lg:col-span-6 ${
                        imageLeft ? '' : 'lg:order-2'
                      }`}
                    >
                      <Image
                        src={imageSrc}
                        alt={withBrandAlt(`${item.title} — ${item.subtitle}`, language as AppLocale)}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-darkRed/35 via-transparent to-transparent opacity-80" />
                      <span className="absolute bottom-5 start-5 font-montserrat text-[10px] uppercase tracking-[0.28em] text-white/90">
                        {item.tag}
                      </span>
                    </div>
                    <div
                      className={`text-start lg:col-span-6 ${imageLeft ? '' : 'lg:order-1'}`}
                    >
                      <p className="mb-3 font-montserrat text-[10px] uppercase tracking-[0.35em] text-brand-dustyBlue">
                        {item.subtitle}
                      </p>
                      <h3 className="mb-6 font-rozha text-[clamp(2rem,4vw,3.25rem)] leading-[1.05] text-brand-darkRed transition-colors duration-300 group-hover:text-brand-dustyBlue">
                        {item.title}
                      </h3>
                      <p className="mb-8 max-w-lg font-montserrat text-[15px] leading-[1.85] tracking-wide text-brand-clayRed/80">
                        {item.description}
                      </p>
                      <span
                        className={`inline-flex items-center gap-3 font-montserrat text-[11px] uppercase tracking-[0.18em] text-brand-darkRed transition-colors group-hover:text-brand-dustyBlue`}
                      >
                        {copy.discoverMore}
                        <FiArrowRight
                          className={`h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 ${
                            isRTL ? 'rotate-180 group-hover:-translate-x-1' : ''
                          }`}
                        />
                      </span>
                    </div>
                  </div>
                </LocaleLink>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function BattoulahSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { margin: '-15%', once: true })
  const { language } = useLanguage()
  const editorial = getHeritageHubEditorial(language)

  return (
    <section
      ref={ref}
      className={`relative overflow-hidden bg-brand-pageCanvas ${EDITORIAL_STACK_PAD} ${EDITORIAL_STACK_CARD}`}
      aria-labelledby="heritage-battoulah-heading"
    >
      <div className={`relative ${EDITORIAL_PAGE_CONTAINER} ${EDITORIAL_STACK_CONTENT_PAD}`}>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-3xl text-start"
        >
          <p className="mb-4 font-montserrat text-[10px] uppercase tracking-[0.42em] text-brand-dustyBlue">
            {editorial.battoulahEyebrow}
          </p>
          <h2
            id="heritage-battoulah-heading"
            className="mb-8 font-rozha text-[clamp(1.85rem,3.6vw,2.85rem)] leading-[1.08] tracking-[0.02em] text-brand-darkRed"
          >
            {editorial.battoulahTitle}
          </h2>
          <div className="space-y-5 font-montserrat text-[15px] leading-[1.85] tracking-wide text-brand-darkRed/75 md:text-base">
            <p>{editorial.battoulahP1}</p>
            <p>{editorial.battoulahP2}</p>
            <p>{editorial.battoulahP3}</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function PhilosophySection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [24, -24])
  const { isRTL, language } = useLanguage()
  const copy = getHeritagePageCopy(language)
  const locale = language as AppLocale

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[#1a0210] py-24 md:py-32"
      aria-labelledby="heritage-philosophy-heading"
    >
      <div className={`relative ${EDITORIAL_PAGE_CONTAINER}`}>
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
          <div className={`text-white lg:col-span-6 ${isRTL ? 'lg:order-2' : ''}`}>
            <p className="mb-4 font-montserrat text-[10px] uppercase tracking-[0.42em] text-brand-dustyBlue">
              {copy.philosophyEyebrow}
            </p>
            <h2
              id="heritage-philosophy-heading"
              className="mb-8 font-rozha text-[clamp(2rem,4vw,3.1rem)] leading-[1.08] tracking-[0.02em]"
            >
              {copy.philosophyTitle}{' '}
              <span className="text-brand-dustyBlue">{copy.philosophyTitleAccent}</span>
            </h2>
            <div className="max-w-xl space-y-5 border-s border-brand-dustyBlue/35 ps-6">
              <p className="font-montserrat text-sm leading-[1.9] tracking-wide text-white/70">
                {copy.philosophyP1}
              </p>
              <p className="font-montserrat text-sm leading-[1.9] tracking-wide text-white/70">
                {copy.philosophyP2}
              </p>
            </div>
          </div>

          <motion.div style={{ y }} className={`relative lg:col-span-6 ${isRTL ? 'lg:order-1' : ''}`}>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="relative aspect-[3/4] overflow-hidden bg-brand-darkRed/40">
                <Image
                  src={HERITAGE_PHILOSOPHY_IMAGES.primary}
                  alt={withBrandAlt('Al Talli metallic thread embroidery', locale)}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="space-y-3 pt-10 sm:space-y-4 sm:pt-14">
                <div className="relative aspect-square overflow-hidden bg-brand-darkRed/40">
                  <Image
                    src={HERITAGE_PHILOSOPHY_IMAGES.secondary}
                    alt={withBrandAlt('Al Talli Emirati heritage craft', locale)}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="relative aspect-[4/3] overflow-hidden bg-brand-darkRed/40">
                  <Image
                    src={HERITAGE_PHILOSOPHY_IMAGES.tertiary}
                    alt={withBrandAlt('Kajujah loom Al Talli craft Abu Dhabi', locale)}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              </div>
            </div>
            <p className="mt-5 font-montserrat text-[10px] uppercase tracking-[0.28em] text-brand-dustyBlue/80">
              {copy.traditionalCrafts}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function ClosingCta() {
  const ref = useRef(null)
  const isInView = useInView(ref, { margin: '-20%', once: true })
  const { isRTL, language } = useLanguage()
  const copy = getHeritagePageCopy(language)

  return (
    <section
      ref={ref}
      className={`relative overflow-hidden bg-brand-pageCanvas ${EDITORIAL_STACK_PAD}`}
      aria-labelledby="heritage-cta-heading"
    >
      <div className={`relative ${EDITORIAL_PAGE_CONTAINER} text-center`}>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-2xl"
        >
          <p className="mb-4 font-montserrat text-[10px] uppercase tracking-[0.42em] text-brand-dustyBlue">
            {copy.ctaEyebrow}
          </p>
          <h2
            id="heritage-cta-heading"
            className="mb-6 font-rozha text-[clamp(1.85rem,3.6vw,2.85rem)] leading-[1.08] text-brand-darkRed"
          >
            {copy.ctaTitle}
          </h2>
          <p className="mb-10 font-montserrat text-[15px] leading-relaxed tracking-wide text-brand-clayRed/80">
            {copy.ctaLead}
          </p>
          <LocaleLink
            href="/shop?from=heritage"
            className="inline-flex min-h-[52px] items-center justify-center gap-3 bg-brand-dustyBlue px-10 py-4 font-montserrat text-[11px] uppercase tracking-[0.18em] text-[#1a0008] transition-colors duration-300 hover:bg-brand-darkRed hover:text-white"
            data-cursor-hover
          >
            {copy.shopNow}
            <FiArrowRight className={`h-4 w-4 ${isRTL ? 'rotate-180' : ''}`} />
          </LocaleLink>
        </motion.div>
      </div>
    </section>
  )
}
