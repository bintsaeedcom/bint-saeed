'use client'

import { useRef, type ReactNode } from 'react'
import Image from 'next/image'
import LocaleLink from '@/components/LocaleLink'
import AboutSectionHero from '@/components/AboutSectionHero'
import ExploreCollectionClosing from '@/components/ExploreCollectionClosing'
import { FiArrowRight } from 'react-icons/fi'
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { ABOUT_SECTION_HERO_IMAGES } from '@/lib/about/aboutSectionHeroImages'
import { getAboutEditorialHeroEyebrow } from '@/lib/about/aboutEditorialHeroChrome'
import { getGivingForwardCopy } from '@/lib/content/givingForwardCopyI18n'
import { withBrandAlt } from '@/lib/products/imageAlt'
import {
  EDITORIAL_PAGE_CONTAINER,
  EDITORIAL_PAGE_SHELL,
  EDITORIAL_STACK_CARD,
  EDITORIAL_STACK_CONTENT_PAD,
  EDITORIAL_STACK_PAD,
} from '@/lib/ui/editorialPageChrome'

/** Scroll-scrubbed reveal — rise + fade, no blur. */
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
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 28, restDelta: 0.001 })
  const gated = useTransform(progress, (latest) => {
    const start = Math.min(0.45, Math.max(0, delay) * 0.55)
    if (latest <= start) return 0
    return Math.min(1, (latest - start) / (1 - start))
  })
  const opacity = useTransform(gated, [0, 1], [0, 1])
  const y = useTransform(gated, [0, 1], [42, 0])

  if (reduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div ref={ref} className={className} style={{ opacity, y }}>
      {children}
    </motion.div>
  )
}

function SectionDrift({ className = '' }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [-40, 40])

  return (
    <motion.div
      ref={ref}
      aria-hidden
      className={`pointer-events-none absolute inset-0 ${className}`}
      style={reduceMotion ? undefined : { y }}
    />
  )
}

function HangtagPortrait({
  src,
  alt,
  invert,
}: {
  src: string
  alt: string
  invert: boolean
}) {
  const clipRef = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: clipRef,
    offset: ['start end', 'end start'],
  })
  const rawY = useTransform(scrollYProgress, [0, 1], invert ? [32, -40] : [-28, 36])
  const rawScale = useTransform(scrollYProgress, [0, 1], [1.12, 1.04])
  const y = useSpring(rawY, { stiffness: 55, damping: 22, restDelta: 0.001 })
  const scale = useSpring(rawScale, { stiffness: 55, damping: 22, restDelta: 0.001 })

  return (
    <figure className="w-full">
      <Reveal>
        <div
          ref={clipRef}
          className="relative isolate aspect-[4/5] w-full overflow-hidden border border-[#6f1524]/18 bg-[#1a0210] shadow-[0_28px_64px_-40px_rgba(42,0,18,0.18)] lg:aspect-[3/4]"
        >
          <motion.div
            style={reduceMotion ? undefined : { y, scale }}
            className="absolute inset-[-14%] will-change-transform"
          >
            <Image
              src={src}
              alt={alt}
              fill
              sizes="(min-width: 1024px) 40vw, 92vw"
              className="object-cover object-center"
              priority={false}
            />
          </motion.div>
          <div
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(26,2,16,0.03)_0%,transparent_40%,rgba(26,2,16,0.05)_100%)]"
            aria-hidden
          />
        </div>
      </Reveal>
    </figure>
  )
}

export default function GivingForwardPage() {
  const { isRTL, language } = useLanguage()
  const copy = getGivingForwardCopy(language)
  const hangtagAlt = withBrandAlt(
    'Giving Forward hangtag — Heritage Carried Forward charity swing tag on luxury fabric, with 20 AED from each garment donated to charity',
    language === 'ar' ? 'ar' : 'en',
  )
  const hangtagSrc =
    '/giving-forward/bint-saeed-giving-forward-heritage-carried-forward-charity-hangtag-portrait.webp'
  const hangtagCaption = copy.hangtagCaption

  return (
    <div className={`${EDITORIAL_PAGE_SHELL} relative min-h-screen bg-[#1a0210] `}>
      <AboutSectionHero
        rtl={isRTL}
        imageSrc={ABOUT_SECTION_HERO_IMAGES.givingForward}
        imageAlt={withBrandAlt('Giving Forward editorial banner', language === 'ar' ? 'ar' : 'en')}
        segments={[
          { label: copy.breadcrumbHome, href: '/home' },
          { label: copy.breadcrumb },
        ]}
        eyebrow={getAboutEditorialHeroEyebrow(language)}
        title={copy.pageTitle}
        description={copy.intro[0]}
      />

      {/* Intro + hangtag — titled chapter + parallax portrait */}
      <section
        className={`relative z-10 overflow-hidden bg-brand-pageCanvas ${EDITORIAL_STACK_PAD} ${EDITORIAL_STACK_CARD}`}
        aria-labelledby="giving-forward-intro"
      >
        <SectionDrift className="bg-[radial-gradient(ellipse_70%_60%_at_80%_20%,rgba(111,21,36,0.08)_0%,transparent_60%)]" />
        <div className={`relative ${EDITORIAL_PAGE_CONTAINER} ${EDITORIAL_STACK_CONTENT_PAD}`}>
          <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-16">
            <div className={`lg:col-span-6 ${isRTL ? 'lg:order-2' : ''}`}>
              <div
                className={`max-w-xl lg:sticky lg:top-[calc(var(--site-header-height,var(--site-header-clearance,5.0625rem))+1rem)] ${
 isRTL ? 'ms-auto text-right' : ''
 }`}
              >
                <Reveal>
                  <div className={`flex items-baseline gap-4 `}>
                    <span className="shrink-0 font-montserrat text-[10px] uppercase tracking-[0.22em] text-brand-dustyBlue">
                      01
                    </span>
                    <div className="min-w-0">
                      <p className="mb-3 font-montserrat text-[10px] uppercase tracking-[0.42em] text-brand-dustyBlue">
                        {hangtagCaption}
                      </p>
                      <h2
                        id="giving-forward-intro"
                        className="font-rozha text-[clamp(1.85rem,3.6vw,2.65rem)] leading-[1.05] tracking-[0.02em] text-brand-darkRed"
                      >
                        {copy.pageTitle}
                      </h2>
                    </div>
                  </div>
                </Reveal>

                <ol className="mt-10 space-y-0 md:mt-12">
                  {copy.intro.map((paragraph, index) => (
                    <Reveal key={paragraph.slice(0, 28)} delay={0.08 + index * 0.07}>
                      <li className="border-t border-[#6f1524]/35 py-6 first:border-t first:pt-6 md:py-7">
                        <p className="font-montserrat text-[15px] leading-[1.95] tracking-[0.02em] text-brand-darkRed/[0.88] md:text-[16px] md:leading-[2]">
                          {paragraph}
                        </p>
                      </li>
                    </Reveal>
                  ))}
                </ol>
              </div>
            </div>
            <div className={`lg:col-span-6 ${isRTL ? 'lg:order-1' : ''}`}>
              <HangtagPortrait src={hangtagSrc} alt={hangtagAlt} invert={isRTL} />
            </div>
          </div>
        </div>
      </section>

      {/* Pillars — clay chapter cadence */}
      <section
        className={`relative z-20 overflow-hidden bg-[#e8ddd4] ${EDITORIAL_STACK_PAD} ${EDITORIAL_STACK_CARD}`}
        aria-labelledby="giving-forward-carried"
      >
        <SectionDrift className="bg-[radial-gradient(ellipse_60%_50%_at_20%_80%,rgba(111,21,36,0.1)_0%,transparent_55%)]" />
        <div className={`relative ${EDITORIAL_PAGE_CONTAINER} ${EDITORIAL_STACK_CONTENT_PAD}`}>
          <Reveal>
            <div className={`flex items-baseline gap-4 text-start`}>
              <span className="shrink-0 font-montserrat text-[10px] uppercase tracking-[0.22em] text-brand-dustyBlue">
                02
              </span>
              <h2
                id="giving-forward-carried"
                className="max-w-3xl font-rozha text-[clamp(1.85rem,4vw,2.65rem)] leading-tight text-brand-darkRed"
              >
                {copy.carriedTitle}
              </h2>
            </div>
          </Reveal>

          <ol className="mt-12 max-w-3xl space-y-0 md:mt-14">
            {copy.pillars.map((pillar, index) => (
              <Reveal key={pillar.title} delay={0.06 + index * 0.05}>
                <li className="border-t border-[#6f1524]/35 py-7 first:border-t first:pt-7 md:py-8">
                  <div className={`flex gap-5 md:gap-8 text-start`}>
                    <span className="mt-0.5 shrink-0 font-montserrat text-[10px] uppercase tracking-[0.22em] text-brand-dustyBlue">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="min-w-0">
                      <h3 className="font-montserrat text-[11px] uppercase tracking-[0.2em] text-brand-clayRed">
                        {pillar.title}
                      </h3>
                      <p className="mt-3 font-montserrat text-sm leading-[1.9] tracking-wide text-brand-darkRed/80">
                        {pillar.body}
                      </p>
                    </div>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>

          <Reveal delay={0.15}>
            <div className={`mt-12 flex flex-wrap gap-4 md:mt-14 `}>
              <LocaleLink
                href="/shop?from=giving-forward"
                className="inline-flex min-h-[48px] items-center justify-center gap-3 rounded-[4px] border border-brand-darkRed/25 bg-transparent px-9 py-3.5 font-montserrat text-[11px] uppercase tracking-[0.2em] text-brand-darkRed transition-colors hover:border-brand-darkRed hover:bg-brand-darkRed hover:text-[#e8ddd4]"
                data-cursor-hover
              >
                {copy.shopCta}
                <FiArrowRight className={`h-4 w-4 ${isRTL ? 'rotate-180' : ''}`} />
              </LocaleLink>
              <LocaleLink
                href="/contact"
                className="inline-flex min-h-[48px] items-center justify-center rounded-[4px] border border-brand-darkRed/15 px-9 py-3.5 font-montserrat text-[11px] uppercase tracking-[0.2em] text-brand-darkRed/75 transition-colors hover:border-brand-darkRed/40 hover:text-brand-darkRed"
                data-cursor-hover
              >
                {copy.contactCta}
              </LocaleLink>
            </div>
          </Reveal>
        </div>
      </section>

      <ExploreCollectionClosing from="giving-forward" />
    </div>
  )
}
