'use client'

import { useRef, type ReactNode } from 'react'
import {
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion'
import Image from 'next/image'
import LocaleLink from '@/components/LocaleLink'
import AboutSectionHero from '@/components/AboutSectionHero'
import { FiArrowRight } from 'react-icons/fi'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { commerceUi } from '@/lib/i18n/commerceUi'
import { getHeritagePageCopy } from '@/lib/content/heritagePageCopyI18n'
import { getHeritageHubEditorial } from '@/lib/content/heritageHubEditorialI18n'
import { getHeritageHubDiscoveryNav } from '@/lib/content/heritageHubDiscoveryNavI18n'
import { getCartEmptyDiscoverCopy } from '@/lib/i18n/cartEmptyDiscoverI18n'
import { ctaPrimaryWithGap } from '@/lib/ui/ctaClasses'
import {
  HERITAGE_BATTOULAH_IMAGE,
  HERITAGE_CRAFT_IMAGES,
  HERITAGE_HUB_HERO,
  HERITAGE_PHILOSOPHY_IMAGES,
} from '@/lib/content/heritagePageMedia'
import { withBrandAlt } from '@/lib/products/imageAlt'
import type { AppLocale } from '@/lib/i18n/routing'
import {
  EDITORIAL_PAGE_CONTAINER,
  EDITORIAL_PAGE_SHELL,
  EDITORIAL_STACK_CONTENT_PAD,
  EDITORIAL_STACK_PAD,
} from '@/lib/ui/editorialPageChrome'

/**
 * Layered cards that overlap, but scroll with the page (About pattern).
 * Sticky freeze made heritage feel stuck; relative stack keeps motion smooth.
 */
const HERITAGE_STACK_CARD =
  'relative -mt-10 rounded-t-[16px] shadow-[0_-18px_48px_rgba(0,0,0,0.32)] sm:-mt-12 md:-mt-14 will-change-transform'

/** Scroll-scrubbed reveal — spring-smoothed rise + fade. */
function Reveal({
  children,
  className = '',
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.94', 'start 0.52'],
  })
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 26, restDelta: 0.001 })
  const gated = useTransform(progress, (latest) => {
    const start = Math.min(0.45, Math.max(0, delay) * 0.55)
    if (latest <= start) return 0
    return Math.min(1, (latest - start) / (1 - start))
  })
  const opacity = useTransform(gated, [0, 1], [0, 1])
  const y = useTransform(gated, [0, 1], [36, 0])

  if (reduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div ref={ref} className={className} style={{ opacity, y }}>
      {children}
    </motion.div>
  )
}

/** Soft ambient drift behind a section. */
function SectionDrift({ className = '' }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useSpring(useTransform(scrollYProgress, [0, 1], [-28, 28]), {
    stiffness: 70,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <motion.div
      ref={ref}
      aria-hidden
      className={`pointer-events-none absolute inset-0 ${className}`}
      style={reduceMotion ? undefined : { y }}
    />
  )
}

/** Subtle image shiver / parallax while the block scrolls through view. */
function ImageShiver({
  children,
  className = '',
  amplitude = 18,
}: {
  children: ReactNode
  className?: string
  amplitude?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const rawY = useTransform(scrollYProgress, [0, 1], [amplitude, -amplitude])
  const y = useSpring(rawY, { stiffness: 80, damping: 28, restDelta: 0.001 })
  const scale = useSpring(useTransform(scrollYProgress, [0, 0.5, 1], [1.04, 1.02, 1.05]), {
    stiffness: 70,
    damping: 30,
  })

  if (reduceMotion) {
    return <div className={`overflow-hidden ${className}`}>{children}</div>
  }

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div className="relative h-full w-full will-change-transform" style={{ y, scale }}>
        {children}
      </motion.div>
    </div>
  )
}

/**
 * Heritage hub, aligned with About / Giving Forward / Al Talli editorial chrome.
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
      <FaqsSection />
      <ClosingCta />
      <DiscoveryNav />
    </div>
  )
}

/** Crawl-facing internal links, visually hidden; no on-page keyword stuffing. */
function DiscoveryNav() {
  const { language } = useLanguage()
  const links = getHeritageHubDiscoveryNav(language)

  return (
    <nav aria-hidden="true" className="sr-only" aria-label="Heritage discovery">
      {links.map((link) =>
        link.href.startsWith('/llms') ? (
          <a key={link.label} href={link.href}>
            {link.label}
          </a>
        ) : (
          <LocaleLink key={link.label} href={link.href}>
            {link.label}
          </LocaleLink>
        ),
      )}
    </nav>
  )
}

function IntroSection() {
  const { language } = useLanguage()
  const copy = getHeritagePageCopy(language)
  const editorial = getHeritageHubEditorial(language)

  return (
    <section
      className={`relative z-10 overflow-hidden bg-brand-pageCanvas ${EDITORIAL_STACK_PAD} ${HERITAGE_STACK_CARD}`}
      aria-labelledby="heritage-intro-heading"
    >
      <SectionDrift className="bg-[radial-gradient(ellipse_70%_55%_at_20%_10%,rgba(111,21,36,0.06)_0%,transparent_55%)]" />
      <div className={`relative ${EDITORIAL_PAGE_CONTAINER} ${EDITORIAL_STACK_CONTENT_PAD}`}>
        <Reveal className="mx-auto max-w-3xl text-start">
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
        </Reveal>
      </div>
    </section>
  )
}

function CraftGrid() {
  const { isRTL, language } = useLanguage()
  const copy = getHeritagePageCopy(language)
  const editorial = getHeritageHubEditorial(language)

  return (
    <section
      className={`relative z-20 bg-white ${EDITORIAL_STACK_PAD} ${HERITAGE_STACK_CARD}`}
      aria-labelledby="heritage-crafts-heading"
    >
      <SectionDrift className="bg-[radial-gradient(ellipse_60%_50%_at_90%_20%,rgba(118,134,146,0.08)_0%,transparent_55%)]" />
      <div className={`relative ${EDITORIAL_PAGE_CONTAINER}`}>
        <Reveal className="mx-auto mb-14 max-w-3xl text-start md:mb-20">
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
        </Reveal>
        <div className="space-y-20 md:space-y-28">
          {copy.items.map((item, index) => {
            const imageSrc = HERITAGE_CRAFT_IMAGES[item.id] ?? item.image
            const imageLeft = index % 2 === 0
            return (
              <Reveal key={item.id} delay={index * 0.08}>
                <LocaleLink href={item.href} className="group block" data-cursor-hover>
                  <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
                    <ImageShiver
                      amplitude={14 + index * 2}
                      className={`relative aspect-[4/5] bg-brand-stone/30 lg:col-span-6 ${
                        imageLeft ? '' : 'lg:order-2'
                      }`}
                    >
                      <Image
                        src={imageSrc}
                        alt={withBrandAlt(`${item.title}, ${item.subtitle}`, language as AppLocale)}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-darkRed/35 via-transparent to-transparent opacity-80" />
                      <span className="absolute bottom-5 start-5 font-montserrat text-[10px] uppercase tracking-[0.28em] text-white/90">
                        {item.tag}
                      </span>
                    </ImageShiver>
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
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function BattoulahSection() {
  const { isRTL, language } = useLanguage()
  const editorial = getHeritageHubEditorial(language)
  const locale = language as AppLocale

  return (
    <section
      className={`relative z-30 overflow-hidden bg-brand-pageCanvas ${EDITORIAL_STACK_PAD} ${HERITAGE_STACK_CARD}`}
      aria-labelledby="heritage-battoulah-heading"
    >
      <SectionDrift className="bg-[radial-gradient(ellipse_65%_50%_at_10%_80%,rgba(111,21,36,0.07)_0%,transparent_55%)]" />
      <div className={`relative ${EDITORIAL_PAGE_CONTAINER}`}>
        <Reveal>
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
            <ImageShiver
              amplitude={20}
              className="relative aspect-[3/4] bg-brand-stone/30 lg:col-span-5"
            >
              <Image
                src={HERITAGE_BATTOULAH_IMAGE.src}
                alt={withBrandAlt(editorial.battoulahImageAlt, locale)}
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
            </ImageShiver>
            <div className={`text-start lg:col-span-7 ${isRTL ? '' : ''}`}>
              <p className="mb-4 font-montserrat text-[10px] uppercase tracking-[0.42em] text-brand-dustyBlue">
                {editorial.battoulahEyebrow}
              </p>
              <h2
                id="heritage-battoulah-heading"
                className="mb-8 font-rozha text-[clamp(1.85rem,3.6vw,2.85rem)] leading-[1.08] tracking-[0.02em] text-brand-darkRed"
              >
                {editorial.battoulahTitle}
              </h2>
              <div className="max-w-xl space-y-5 font-montserrat text-[15px] leading-[1.85] tracking-wide text-brand-darkRed/75 md:text-base">
                <p>{editorial.battoulahP1}</p>
                <p>{editorial.battoulahP2}</p>
                <p>{editorial.battoulahP3}</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function PhilosophySection() {
  const ref = useRef<HTMLElement>(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const rawY = useTransform(scrollYProgress, [0, 1], [28, -28])
  const y = useSpring(rawY, { stiffness: 75, damping: 28, restDelta: 0.001 })
  const copyY = useSpring(useTransform(scrollYProgress, [0, 1], [16, -12]), {
    stiffness: 80,
    damping: 30,
  })
  const { isRTL, language } = useLanguage()
  const copy = getHeritagePageCopy(language)
  const locale = language as AppLocale

  return (
    <section
      ref={ref}
      className={`relative z-40 overflow-hidden bg-[#1a0210] py-24 md:py-32 ${HERITAGE_STACK_CARD}`}
      aria-labelledby="heritage-philosophy-heading"
    >
      <SectionDrift className="bg-[radial-gradient(ellipse_70%_60%_at_70%_30%,rgba(118,134,146,0.12)_0%,transparent_60%)]" />
      <div className={`relative ${EDITORIAL_PAGE_CONTAINER}`}>
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
          <motion.div
            style={reduceMotion ? undefined : { y: copyY }}
            className={`text-brand-dustyBlue lg:col-span-6 ${isRTL ? 'lg:order-2' : ''}`}
          >
            <p className="mb-4 font-montserrat text-[10px] uppercase tracking-[0.42em] text-brand-dustyBlue">
              {copy.philosophyEyebrow}
            </p>
            <h2
              id="heritage-philosophy-heading"
              className="mb-8 font-rozha text-[clamp(2rem,4vw,3.1rem)] leading-[1.08] tracking-[0.02em] text-brand-dustyBlue"
            >
              {copy.philosophyTitle}{' '}
              <span className="text-brand-dustyBlue">{copy.philosophyTitleAccent}</span>
            </h2>
            <div className="max-w-xl space-y-5 border-s border-brand-dustyBlue/35 ps-6">
              <p className="font-montserrat text-sm leading-[1.9] tracking-wide text-brand-dustyBlue">
                {copy.philosophyP1}
              </p>
              <p className="font-montserrat text-sm leading-[1.9] tracking-wide text-brand-dustyBlue">
                {copy.philosophyP2}
              </p>
            </div>
          </motion.div>

          <motion.div
            style={reduceMotion ? undefined : { y }}
            className={`relative lg:col-span-6 ${isRTL ? 'lg:order-1' : ''}`}
          >
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <ImageShiver amplitude={16} className="relative aspect-[3/4] bg-brand-darkRed/40">
                <Image
                  src={HERITAGE_PHILOSOPHY_IMAGES.primary}
                  alt={withBrandAlt('Al Talli metallic thread embroidery', locale)}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </ImageShiver>
              <ImageShiver amplitude={22} className="relative aspect-[3/4] bg-brand-darkRed/40">
                <Image
                  src={HERITAGE_PHILOSOPHY_IMAGES.secondary}
                  alt={withBrandAlt('Al Talli Emirati heritage craft', locale)}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </ImageShiver>
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

function FaqsSection() {
  const { language } = useLanguage()
  const editorial = getHeritageHubEditorial(language)

  return (
    <section
      className={`relative z-[45] overflow-hidden bg-brand-pageCanvas ${EDITORIAL_STACK_PAD} ${HERITAGE_STACK_CARD}`}
      aria-labelledby="heritage-faqs-heading"
    >
      <div className={`relative ${EDITORIAL_PAGE_CONTAINER}`}>
        <Reveal>
          <div className="mx-auto max-w-2xl">
            <p className="mb-4 font-montserrat text-[10px] uppercase tracking-[0.42em] text-brand-dustyBlue">
              {editorial.faqsEyebrow}
            </p>
            <h2
              id="heritage-faqs-heading"
              className="mb-10 font-rozha text-[clamp(1.85rem,3.6vw,2.85rem)] leading-[1.08] tracking-[0.02em] text-brand-darkRed"
            >
              {editorial.faqsHeading}
            </h2>
            <dl className="space-y-0 divide-y divide-brand-stone/40 border-y border-brand-stone/40">
              {editorial.faqs.map((faq) => (
                <div key={faq.q} className="py-7">
                  <dt className="font-montserrat text-sm font-medium tracking-wide text-brand-darkRed md:text-[15px]">
                    {faq.q}
                  </dt>
                  <dd className="mt-3 font-montserrat text-sm leading-[1.85] tracking-wide text-brand-darkRed/75 md:text-[15px]">
                    {faq.a}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function ClosingCta() {
  const ref = useRef(null)
  const isInView = useInView(ref, { margin: '-20%', once: true })
  const { isRTL, language } = useLanguage()
  const copy = getHeritagePageCopy(language)
  const discover = getCartEmptyDiscoverCopy(language)

  return (
    <section
      ref={ref}
      className={`relative z-50 overflow-hidden bg-brand-pageCanvas ${EDITORIAL_STACK_PAD} ${HERITAGE_STACK_CARD}`}
      aria-labelledby="heritage-cta-heading"
    >
      <div className={`relative ${EDITORIAL_PAGE_CONTAINER} text-center`}>
        <Reveal>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
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
              className={ctaPrimaryWithGap}
              data-bs-cta
              data-cursor-hover
              data-analytics-event="click_shop_from_heritage"
              data-analytics-section="heritage-cta"
            >
              {discover.exploreCollection}
              <FiArrowRight className={`h-4 w-4 ${isRTL ? 'rotate-180' : ''}`} />
            </LocaleLink>
          </motion.div>
        </Reveal>
      </div>
    </section>
  )
}
