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
import { getPersonalisationCopy } from '@/lib/content/personalisationCopyI18n'
import { withBrandAlt } from '@/lib/products/imageAlt'
import {
  EDITORIAL_PAGE_CONTAINER,
  EDITORIAL_PAGE_SHELL,
  EDITORIAL_STACK_CARD,
  EDITORIAL_STACK_CONTENT_PAD,
  EDITORIAL_STACK_PAD,
} from '@/lib/ui/editorialPageChrome'

const PERSONALISATION_PAGE = encodeURIComponent('Personalisation Page')
const HERO_IMAGE = ABOUT_SECTION_HERO_IMAGES.personalisation
const POCKET_DETAIL_IMAGE =
  '/personalisation/bint-saeed-abu-dhabi-personalisation-hidden-pocket-fabric-detail.webp'
const LABEL_IMAGES = ['label1.PNG', 'label2.PNG', 'label3.PNG', 'label4.PNG'].map(
  (file) => `/${PERSONALISATION_PAGE}/${encodeURIComponent(file)}`,
)

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

function ChapterProse({
  index,
  label,
  title,
  titleId,
  paragraphs,
  tone = 'light',
  sticky = false,
  continuous = false,
}: {
  index?: number
  label: string
  title: string
  titleId: string
  paragraphs: string[]
  tone?: 'light' | 'onDark' | 'onClay'
  sticky?: boolean
  /** Continuous editorial measure — paragraph spacing only, no horizontal rules. */
  continuous?: boolean
}) {
  const { isRTL } = useLanguage()
  const onDark = tone === 'onDark'
  const indexColor = onDark ? 'text-[#e8d8c8]/70' : 'text-brand-dustyBlue'
  const labelColor = onDark ? 'text-[#e8d8c8]' : 'text-brand-dustyBlue'
  const titleColor = onDark ? 'text-[#e8ddd4]' : 'text-brand-darkRed'
  const bodyColor = onDark ? 'text-[#e8ddd4]/78' : 'text-brand-darkRed/[0.88]'
  const ruleColor = onDark ? 'border-[#e8ddd4]/18' : 'border-[#6f1524]/35'
  const stickyClass = sticky
    ? 'lg:sticky lg:top-[calc(var(--site-header-height,8.75rem)+1rem)]'
    : ''

  return (
    <div className={`${continuous ? 'w-full' : 'max-w-xl'} ${stickyClass} ${isRTL ? 'ms-auto text-right' : ''}`}>
      <Reveal>
        <div className={`flex items-baseline gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
          {typeof index === 'number' ? (
            <span className={`shrink-0 font-montserrat text-[10px] uppercase tracking-[0.22em] ${indexColor}`}>
              {String(index).padStart(2, '0')}
            </span>
          ) : null}
          <div className="min-w-0">
            <p className={`mb-3 font-montserrat text-[10px] uppercase tracking-[0.42em] ${labelColor}`}>
              {label}
            </p>
            <h2
              id={titleId}
              className={`whitespace-pre-line font-rozha text-[clamp(1.85rem,3.6vw,2.65rem)] leading-[1.05] tracking-[0.02em] ${titleColor}`}
            >
              {title}
            </h2>
          </div>
        </div>
      </Reveal>

      {continuous ? (
        <div className={`mt-10 space-y-5 md:mt-12 md:space-y-6 ${bodyColor}`}>
          {paragraphs.map((paragraph, i) => (
            <Reveal key={`${titleId}-${i}`} delay={0.06 + i * 0.05}>
              <p className="font-montserrat text-[15px] leading-[1.95] tracking-[0.02em] md:text-[16px] md:leading-[2]">
                {paragraph}
              </p>
            </Reveal>
          ))}
        </div>
      ) : (
        <ol className="mt-10 space-y-0 md:mt-12">
          {paragraphs.map((paragraph, i) => (
            <Reveal key={`${titleId}-${i}`} delay={0.06 + i * 0.05}>
              <li className={`border-t ${ruleColor} py-6 first:border-t first:pt-6 md:py-7`}>
                <p
                  className={`font-montserrat text-[15px] leading-[1.95] tracking-[0.02em] md:text-[16px] md:leading-[2] ${bodyColor}`}
                >
                  {paragraph}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      )}
    </div>
  )
}

export default function PersonalisationPage() {
  const { isRTL, language } = useLanguage()
  const copy = getPersonalisationCopy(language)
  const pocketAlt = withBrandAlt(copy.hiddenPocketAlt, language === 'ar' ? 'ar' : 'en')

  return (
    <div className={`${EDITORIAL_PAGE_SHELL} relative min-h-screen bg-[#1a0210] ${isRTL ? 'rtl' : 'ltr'}`}>
      <AboutSectionHero
        rtl={isRTL}
        imageSrc={HERO_IMAGE}
        imageAlt={withBrandAlt('Personalisation editorial banner', language === 'ar' ? 'ar' : 'en')}
        priority
        segments={[
          { label: copy.breadcrumbHome, href: '/home' },
          { label: copy.breadcrumb },
        ]}
        eyebrow={copy.heroEyebrow}
        title={copy.heroTitle}
        description={copy.heroLead}
        titleClassName="bs-editorial-hero-title mb-2 max-w-none whitespace-pre-line font-rozha text-[clamp(1.125rem,calc(0.5rem+3.6vw),2.875rem)] leading-[1.05] tracking-[0.01em] !text-white"
        descriptionClassName="max-w-xl font-montserrat text-[11px] font-normal leading-[1.85] tracking-[0.05em] text-white/70 sm:text-xs"
      />

      {/* Main story — dark (About manifesto tone) */}
      <section
        className={`relative z-10 overflow-hidden bg-[#1a0210] ${EDITORIAL_STACK_PAD} ${EDITORIAL_STACK_CARD}`}
        aria-labelledby="personalisation-main-story"
      >
        <SectionDrift className="bg-[radial-gradient(ellipse_70%_55%_at_70%_30%,rgba(111,21,36,0.32)_0%,transparent_65%)]" />
        <div className={`relative ${EDITORIAL_PAGE_CONTAINER} ${EDITORIAL_STACK_CONTENT_PAD}`}>
          <div className="mx-auto max-w-2xl">
            <Reveal delay={0.02}>
              <h2
                id="personalisation-main-story"
                className={`font-rozha text-[clamp(1.85rem,3.6vw,2.65rem)] leading-[1.05] tracking-[0.02em] text-[#e8ddd4] ${
                  isRTL ? 'text-right' : 'text-left'
                }`}
              >
                {copy.heroStoryTitle}
              </h2>
            </Reveal>
            <div className="mt-8 space-y-5 md:mt-10 md:space-y-6">
              {copy.heroParagraphs.map((paragraph, i) => (
                <Reveal key={`hero-body-${i}`} delay={0.05 + i * 0.06}>
                  <p
                    className={`font-montserrat text-[15px] leading-[1.95] tracking-[0.02em] text-[#e8ddd4]/78 md:text-[16px] md:leading-[2] ${
                      isRTL ? 'text-right' : 'text-left'
                    }`}
                  >
                    {paragraph}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pocket still — visual beat after main story */}
      <section
        className={`relative z-20 overflow-hidden bg-brand-pageCanvas ${EDITORIAL_STACK_PAD} ${EDITORIAL_STACK_CARD}`}
        aria-label={copy.hiddenPocketAlt}
      >
        <SectionDrift className="bg-[radial-gradient(ellipse_70%_60%_at_80%_20%,rgba(111,21,36,0.08)_0%,transparent_60%)]" />
        <div className={`relative ${EDITORIAL_PAGE_CONTAINER} ${EDITORIAL_STACK_CONTENT_PAD}`}>
          <Reveal className="mx-auto min-w-0 max-w-3xl">
            <div className="relative isolate aspect-[4/5] w-full overflow-hidden border border-[#6f1524]/18 bg-[#faf8f5] shadow-[0_28px_64px_-40px_rgba(42,0,18,0.18)] sm:aspect-[3/4]">
              <Image
                src={POCKET_DETAIL_IMAGE}
                alt={pocketAlt}
                fill
                sizes="(min-width: 1024px) 48vw, 92vw"
                className="object-cover object-center"
                priority={false}
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 02 — Personalise yours + label stills */}
      <section
        className={`relative z-30 overflow-hidden bg-[#e8ddd4] ${EDITORIAL_STACK_PAD} ${EDITORIAL_STACK_CARD}`}
        aria-labelledby="personalisation-words"
      >
        <SectionDrift className="bg-[radial-gradient(ellipse_60%_50%_at_20%_80%,rgba(111,21,36,0.1)_0%,transparent_55%)]" />
        <div className={`relative ${EDITORIAL_PAGE_CONTAINER} ${EDITORIAL_STACK_CONTENT_PAD}`}>
          <div className={`${isRTL ? 'ms-auto' : ''} max-w-xl`}>
            <ChapterProse
              label={copy.wordsEyebrow}
              title={copy.wordsTitle}
              titleId="personalisation-words"
              paragraphs={copy.wordsParagraphs}
              continuous
            />
            <Reveal delay={0.14}>
              <p
                className={`mt-5 font-montserrat text-[15px] leading-[1.95] tracking-[0.02em] text-brand-darkRed/[0.88] md:mt-6 md:text-[16px] md:leading-[2] ${
                  isRTL ? 'text-right' : 'text-left'
                }`}
              >
                {copy.wordsComplimentary}
              </p>
            </Reveal>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3 md:mt-14 md:gap-4">
            {LABEL_IMAGES.map((src, index) => (
              <Reveal key={src} delay={0.05 + index * 0.06} className="min-w-0">
                <div className="relative isolate aspect-[3/4] overflow-hidden border border-[#6f1524]/18 bg-[#faf8f5] shadow-[0_22px_48px_-36px_rgba(42,0,18,0.16)]">
                  <Image
                    src={src}
                    alt={`${copy.labelAlt} — ${index + 1}`}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 640px) 44vw, 200px"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 03 — How it works */}
      <section
        className={`relative z-40 overflow-hidden bg-[#1a0210] ${EDITORIAL_STACK_PAD} ${EDITORIAL_STACK_CARD}`}
        aria-labelledby="personalisation-steps"
      >
        <SectionDrift className="bg-[radial-gradient(ellipse_70%_55%_at_70%_30%,rgba(111,21,36,0.32)_0%,transparent_65%)]" />
        <div className={`relative ${EDITORIAL_PAGE_CONTAINER} ${EDITORIAL_STACK_CONTENT_PAD}`}>
          <Reveal>
            <div className={isRTL ? 'text-right' : 'text-left'}>
              <p className="mb-3 font-montserrat text-[10px] uppercase tracking-[0.42em] text-[#e8d8c8]">
                {copy.stepsEyebrow}
              </p>
              <h2
                id="personalisation-steps"
                className="whitespace-nowrap font-rozha text-[clamp(1.85rem,3.6vw,2.65rem)] leading-[1.05] tracking-[0.02em] text-[#e8ddd4]"
              >
                {copy.stepsTitle}
              </h2>
            </div>
          </Reveal>

          <ol className="mt-12 space-y-8 md:mt-14 md:space-y-10">
            {copy.steps.map((step, index) => (
              <Reveal key={step.numeral} delay={0.05 + index * 0.06}>
                <li
                  className={`grid gap-4 md:grid-cols-[4.5rem_1fr] md:gap-8 ${
                    isRTL ? 'md:text-right' : ''
                  }`}
                >
                  <p className="font-montserrat text-[11px] uppercase tracking-[0.22em] text-[#e8ddd4]/45 md:pt-1">
                    {step.numeral}
                  </p>
                  <div>
                    <h3 className="mb-3 font-montserrat text-[11px] font-medium uppercase tracking-[0.18em] text-[#e8d8c8]">
                      {step.title}
                    </h3>
                    <p className="font-montserrat text-[15px] leading-[1.95] tracking-[0.02em] text-[#e8ddd4]/78 md:text-[16px] md:leading-[2]">
                      {step.body}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>

          <Reveal delay={0.18}>
            <div className={`mt-12 flex flex-col items-start gap-5 md:mt-14 ${isRTL ? 'items-end' : ''}`}>
              <p className="max-w-2xl font-montserrat text-[15px] leading-[1.95] tracking-[0.02em] text-[#e8ddd4]/78 md:text-[16px] md:leading-[2]">
                {copy.complimentaryBanner}
              </p>
              <LocaleLink
                href="/shop?category=abayas"
                className="inline-flex min-h-[48px] items-center justify-center gap-3 rounded-[4px] border border-[#e8ddd4]/45 bg-[#e8ddd4]/10 px-9 py-3.5 font-montserrat text-[11px] uppercase tracking-[0.2em] text-[#e8ddd4] transition-colors hover:border-[#e8ddd4]/80 hover:bg-[#e8ddd4] hover:text-brand-darkRed"
                data-bs-cta
                data-cursor-hover
                data-analytics-event="click_shop_abayas_from_personalisation"
                data-analytics-section="personalisation-steps"
              >
                {copy.discoverAbayasCta}
                <FiArrowRight className={`h-4 w-4 ${isRTL ? 'rotate-180' : ''}`} />
              </LocaleLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 04 — For someone else */}
      <section
        className={`relative z-50 overflow-hidden bg-brand-pageCanvas ${EDITORIAL_STACK_PAD} ${EDITORIAL_STACK_CARD}`}
        aria-labelledby="personalisation-gift"
      >
        <SectionDrift className="bg-[radial-gradient(ellipse_70%_60%_at_80%_20%,rgba(111,21,36,0.08)_0%,transparent_60%)]" />
        <div className={`relative ${EDITORIAL_PAGE_CONTAINER} ${EDITORIAL_STACK_CONTENT_PAD}`}>
          <ChapterProse
            label={copy.giftEyebrow}
            title={copy.giftTitle}
            titleId="personalisation-gift"
            paragraphs={copy.giftParagraphs}
            continuous
          />
          <Reveal delay={0.15}>
            <div className={`mt-10 ${isRTL ? 'flex justify-end' : ''}`}>
              <LocaleLink
                href="/shop?category=abayas"
                className="inline-flex min-h-[48px] items-center justify-center gap-3 rounded-[4px] border border-brand-darkRed/25 bg-transparent px-9 py-3.5 font-montserrat text-[11px] uppercase tracking-[0.2em] text-brand-darkRed transition-colors hover:border-brand-darkRed hover:bg-brand-darkRed hover:text-[#e8ddd4]"
                data-bs-cta
                data-cursor-hover
                data-analytics-event="click_gift_abaya_from_personalisation"
                data-analytics-section="personalisation-gift"
              >
                {copy.giftCta}
                <FiArrowRight className={`h-4 w-4 ${isRTL ? 'rotate-180' : ''}`} />
              </LocaleLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Final — clay chapter + echo */}
      <section
        className={`relative z-[55] overflow-hidden bg-[#e8ddd4] ${EDITORIAL_STACK_PAD} ${EDITORIAL_STACK_CARD}`}
        aria-labelledby="personalisation-closing"
      >
        <SectionDrift className="bg-[radial-gradient(ellipse_60%_50%_at_20%_80%,rgba(111,21,36,0.1)_0%,transparent_55%)]" />
        <div className={`relative ${EDITORIAL_PAGE_CONTAINER} ${EDITORIAL_STACK_CONTENT_PAD}`}>
          <div className={`mx-auto max-w-2xl ${isRTL ? 'text-right' : 'text-left'}`}>
            <Reveal>
              <h2
                id="personalisation-closing"
                className="font-rozha text-[clamp(1.85rem,3.6vw,2.65rem)] leading-[1.05] tracking-[0.02em] text-brand-darkRed"
              >
                {copy.closingTitle}
              </h2>
            </Reveal>
            <div className="mt-10 space-y-5 md:mt-12 md:space-y-6">
              {copy.closingParagraphs.map((paragraph, i) => (
                <Reveal key={`closing-${i}`} delay={0.06 + i * 0.06}>
                  <p className="font-montserrat text-[15px] leading-[1.95] tracking-[0.02em] text-brand-darkRed/[0.88] md:text-[16px] md:leading-[2]">
                    {paragraph}
                  </p>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.2}>
              <p className="mt-10 whitespace-pre-line font-rozha text-[clamp(1.35rem,2.8vw,1.85rem)] leading-[1.2] tracking-[0.02em] text-brand-darkRed md:mt-12">
                {copy.closingEcho}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <ExploreCollectionClosing
        from="personalisation"
        ctaAnalytics={{
          'data-bs-cta': true,
          'data-analytics-event': 'click_collection_from_personalisation',
          'data-analytics-section': 'personalisation-footer-cta',
        }}
      />
    </div>
  )
}
