'use client'

import { useRef, type ReactNode } from 'react'
import Image from 'next/image'
import LocaleLink from '@/components/LocaleLink'
import AboutSectionHero from '@/components/AboutSectionHero'
import { FiArrowRight } from 'react-icons/fi'
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
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
  EDITORIAL_STACK_CLOSING_PAD,
  EDITORIAL_STACK_CONTENT_PAD,
  EDITORIAL_STACK_PAD,
} from '@/lib/ui/editorialPageChrome'
import { ctaPrimaryWithGap, ctaSecondaryOnLight } from '@/lib/ui/ctaClasses'

const EASE = [0.22, 1, 0.36, 1] as const

function Reveal({
  children,
  className = '',
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  const reduceMotion = useReducedMotion()
  if (reduceMotion) {
    return <div className={className}>{children}</div>
  }
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-12%' }}
      transition={{ duration: 0.75, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  )
}

function HangtagPortrait({
  src,
  alt,
  caption,
  invert,
}: {
  src: string
  alt: string
  caption: string
  invert: boolean
}) {
  const clipRef = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: clipRef,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], invert ? [28, -36] : [-24, 32])
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.1])

  return (
    <figure className="w-full">
      <motion.div
        initial={reduceMotion ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-10%' }}
        transition={{ duration: 0.7, delay: 0.08, ease: EASE }}
      >
        <div
          ref={clipRef}
          className="relative isolate aspect-[4/5] w-full overflow-hidden bg-brand-stone/20 shadow-[0_28px_64px_-40px_rgba(42,0,18,0.18)] lg:aspect-[3/4]"
        >
          <motion.div
            style={reduceMotion ? undefined : { y, scale }}
            className="absolute inset-0 will-change-transform"
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
      </motion.div>
      <figcaption className="mt-4 text-center font-montserrat text-[10px] uppercase tracking-[0.2em] text-brand-dustyBlue/80">
        {caption}
      </figcaption>
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
    '/giving-forward/bint-saeed-giving-forward-heritage-carried-forward-charity-hangtag.webp'
  const hangtagCaption = language === 'ar' ? 'تراث يُحمل إلى الأمام' : 'Heritage Carried Forward'

  return (
    <div className={`${EDITORIAL_PAGE_SHELL} relative min-h-screen bg-[#1a0210] ${isRTL ? 'rtl' : 'ltr'}`}>
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

      {/* Intro + hangtag — desktop split */}
      <section
        className={`relative z-10 overflow-hidden bg-brand-pageCanvas ${EDITORIAL_STACK_PAD} ${EDITORIAL_STACK_CARD}`}
      >
        <div className={`${EDITORIAL_PAGE_CONTAINER} ${EDITORIAL_STACK_CONTENT_PAD}`}>
          <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-16">
            <div className={`lg:col-span-6 ${isRTL ? 'lg:order-2' : ''}`}>
              <div className="max-w-xl space-y-6 lg:sticky lg:top-[calc(var(--site-header-height,8.75rem)+1rem)]">
                {copy.intro.map((paragraph, index) => (
                  <Reveal key={paragraph.slice(0, 28)} delay={index * 0.08}>
                    <p className="font-montserrat text-sm leading-[1.9] tracking-wide text-brand-darkRed/75">
                      {paragraph}
                    </p>
                  </Reveal>
                ))}
              </div>
            </div>
            <div className={`lg:col-span-6 ${isRTL ? 'lg:order-1' : ''}`}>
              <HangtagPortrait
                src={hangtagSrc}
                alt={hangtagAlt}
                caption={hangtagCaption}
                invert={isRTL}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pillars — chapter stack */}
      <section
        className={`relative z-20 overflow-hidden bg-[#e8ddd4] ${EDITORIAL_STACK_PAD} ${EDITORIAL_STACK_CARD}`}
      >
        <div className={`${EDITORIAL_PAGE_CONTAINER} ${EDITORIAL_STACK_CONTENT_PAD}`}>
          <Reveal>
            <h2 className="max-w-3xl font-rozha text-[clamp(1.85rem,4vw,2.65rem)] leading-tight text-brand-darkRed">
              {copy.carriedTitle}
            </h2>
          </Reveal>

          <ol className="mt-12 max-w-3xl space-y-0 md:mt-14">
            {copy.pillars.map((pillar, index) => (
              <Reveal key={pillar.title} delay={index * 0.06}>
                <li className="border-t border-brand-darkRed/12 py-7 first:border-t first:pt-7 md:py-8">
                  <div className={`flex gap-5 md:gap-8 ${isRTL ? 'flex-row-reverse' : ''}`}>
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
        </div>
      </section>

      {/* Closing CTAs */}
      <section
        className={`relative z-30 overflow-hidden bg-brand-pageCanvas ${EDITORIAL_STACK_CLOSING_PAD} ${EDITORIAL_STACK_CARD}`}
      >
        <div className={`${EDITORIAL_PAGE_CONTAINER} ${EDITORIAL_STACK_CONTENT_PAD}`}>
          <Reveal>
            <div className={`flex flex-wrap gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <LocaleLink
                href="/shop?from=giving-forward"
                className={`${ctaPrimaryWithGap} ${isRTL ? 'flex-row-reverse' : ''}`}
                data-cursor-hover
              >
                {copy.shopCta}
                <FiArrowRight className={`h-4 w-4 ${isRTL ? 'rotate-180' : ''}`} />
              </LocaleLink>
              <LocaleLink href="/contact" className={ctaSecondaryOnLight} data-cursor-hover>
                {copy.contactCta}
              </LocaleLink>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
