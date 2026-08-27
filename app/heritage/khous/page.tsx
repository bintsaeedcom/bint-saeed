'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import LocaleLink from '@/components/LocaleLink'
import AboutSectionHero from '@/components/AboutSectionHero'
import { FiArrowRight } from 'react-icons/fi'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { commerceUi } from '@/lib/i18n/commerceUi'
import { getKhousPageCopy } from '@/lib/content/heritageKhousCopyI18n'
import { HERITAGE_KHOUS_IMAGES } from '@/lib/content/heritagePageMedia'
import { withBrandAlt } from '@/lib/products/imageAlt'
import type { AppLocale } from '@/lib/i18n/routing'
import { ctaPrimaryWithGap } from '@/lib/ui/ctaClasses'
import { EDITORIAL_PAGE_CONTAINER, EDITORIAL_PAGE_SHELL } from '@/lib/ui/editorialPageChrome'
import {
  HERITAGE_CHAPTER_BODY,
  HERITAGE_CHAPTER_CARD,
  HERITAGE_CHAPTER_CARD_BODY,
  HERITAGE_CHAPTER_CTA_PAD,
  HERITAGE_CHAPTER_EYEBROW,
  HERITAGE_CHAPTER_H2,
  HERITAGE_CHAPTER_H3,
  HERITAGE_CHAPTER_HERO_DESC,
  HERITAGE_CHAPTER_HERO_TITLE,
  HERITAGE_CHAPTER_SECTION_PAD,
  HERITAGE_CHAPTER_STEP_NUM,
} from '@/lib/ui/heritageChapterChrome'

export default function KhousPage() {
  return (
    <div className={`${EDITORIAL_PAGE_SHELL} min-h-screen bg-brand-pageCanvas`}>
      <HeroSection />
      <StorySection />
      <ProcessSection />
      <ProductsSection />
      <BintSaeedSection />
      <CTASection />
    </div>
  )
}

function HeroSection() {
  const { isRTL, language } = useLanguage()
  const ui = commerceUi(language)
  const copy = getKhousPageCopy(language)
  const locale = language as AppLocale

  return (
    <AboutSectionHero
      rtl={isRTL}
      imageSrc={HERITAGE_KHOUS_IMAGES.hero}
      imageAlt={withBrandAlt(
        'Al Khous palm-frond fans on Sadu textile, Emirati heritage craft, Bint Saeed Abu Dhabi',
        locale,
      )}
      imageOpacity={55}
      priority
      segments={[
        { label: ui.common.home, href: '/home' },
        { label: copy.heritage, href: '/heritage' },
        { label: copy.khousFull },
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
  const copy = getKhousPageCopy(language)
  const locale = language as AppLocale

  return (
    <section ref={ref} className={HERITAGE_CHAPTER_SECTION_PAD}>
      <div className={EDITORIAL_PAGE_CONTAINER}>
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 40 : -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-start"
          >
            <span className={HERITAGE_CHAPTER_EYEBROW}>{copy.storyEyebrow}</span>
            <h2 className={HERITAGE_CHAPTER_H2}>{copy.storyTitle}</h2>
            <div className={`space-y-5 ${HERITAGE_CHAPTER_BODY}`}>
              <p>{copy.storyP1}</p>
              <p>{copy.storyP2}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: isRTL ? -40 : 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-[4/5] overflow-hidden"
          >
            <Image
              src={HERITAGE_KHOUS_IMAGES.detail}
              alt={withBrandAlt(
                'Al Khous palm-frond weaving in progress, Emirati craft, Bint Saeed Abu Dhabi',
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

function ProcessSection() {
  const { language } = useLanguage()
  const copy = getKhousPageCopy(language)

  return (
    <section className={`${HERITAGE_CHAPTER_SECTION_PAD} bg-brand-stone/20`}>
      <div className={EDITORIAL_PAGE_CONTAINER}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-14 text-center"
        >
          <span className={HERITAGE_CHAPTER_EYEBROW}>{copy.processEyebrow}</span>
          <h2 className={HERITAGE_CHAPTER_H2}>{copy.processTitle}</h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {copy.steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={HERITAGE_CHAPTER_CARD}
            >
              <span className={HERITAGE_CHAPTER_STEP_NUM}>0{index + 1}</span>
              <h3 className={`mb-3 ${HERITAGE_CHAPTER_H3}`}>{step.title}</h3>
              <p className={HERITAGE_CHAPTER_CARD_BODY}>{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProductsSection() {
  const { language } = useLanguage()
  const copy = getKhousPageCopy(language)

  return (
    <section className={HERITAGE_CHAPTER_SECTION_PAD}>
      <div className={EDITORIAL_PAGE_CONTAINER}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-14 text-center"
        >
          <span className={HERITAGE_CHAPTER_EYEBROW}>{copy.productsEyebrow}</span>
          <h2 className={HERITAGE_CHAPTER_H2}>{copy.productsTitle}</h2>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {copy.products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={HERITAGE_CHAPTER_CARD}
            >
              <h3 className={`mb-2 ${HERITAGE_CHAPTER_H3} text-[clamp(1.1rem,2vw,1.35rem)]`}>
                {product.name}
              </h3>
              <p className={HERITAGE_CHAPTER_CARD_BODY}>{product.use}</p>
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
  const copy = getKhousPageCopy(language)
  const locale = language as AppLocale

  return (
    <section ref={ref} className={`${HERITAGE_CHAPTER_SECTION_PAD} bg-brand-stone/10`}>
      <div className={EDITORIAL_PAGE_CONTAINER}>
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="relative order-2 aspect-[4/5] overflow-hidden lg:order-1"
          >
            <Image
              src={HERITAGE_KHOUS_IMAGES.hero}
              alt={withBrandAlt(
                'Al Khous woven palm fans with Sadu stripes, Emirati heritage, Bint Saeed Abu Dhabi',
                locale,
              )}
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: isRTL ? -40 : 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 text-start lg:order-2"
          >
            <span className={HERITAGE_CHAPTER_EYEBROW}>{copy.brandEyebrow}</span>
            <h2 className={HERITAGE_CHAPTER_H2}>{copy.brandTitle}</h2>
            <div className={`space-y-5 ${HERITAGE_CHAPTER_BODY}`}>
              <p>{copy.brandP1}</p>
              <p>{copy.brandP2}</p>
            </div>
            <LocaleLink
              href="/shop?from=heritage-khous"
              className={`mt-8 ${ctaPrimaryWithGap}`}
              data-bs-cta
              data-cursor-hover
            >
              {copy.shopCollection}
              <FiArrowRight className={`h-4 w-4 ${isRTL ? 'rotate-180' : ''}`} />
            </LocaleLink>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function CTASection() {
  const { language } = useLanguage()
  const copy = getKhousPageCopy(language)

  return (
    <section className={`${HERITAGE_CHAPTER_CTA_PAD} bg-brand-stone/20`}>
      <div className={EDITORIAL_PAGE_CONTAINER}>
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="text-start">
            <h3 className={`mb-2 ${HERITAGE_CHAPTER_H3}`}>{copy.exploreMore}</h3>
            <p className="font-montserrat text-sm tracking-wide text-brand-darkRed/70">{copy.exploreMoreLead}</p>
          </div>
          <div className="flex gap-4">
            <LocaleLink
              href="/heritage/al-talli"
              className="inline-flex min-h-[48px] items-center justify-center border border-brand-darkRed px-6 py-3 font-montserrat text-xs uppercase tracking-[0.15em] text-brand-darkRed transition-colors hover:bg-brand-dustyBlue hover:text-white"
              data-cursor-hover
            >
              {copy.alTalli}
            </LocaleLink>
            <LocaleLink
              href="/heritage/sadu"
              className="inline-flex min-h-[48px] items-center justify-center border border-brand-darkRed px-6 py-3 font-montserrat text-xs uppercase tracking-[0.15em] text-brand-darkRed transition-colors hover:bg-brand-dustyBlue hover:text-white"
              data-cursor-hover
            >
              {copy.sadu}
            </LocaleLink>
          </div>
        </div>
      </div>
    </section>
  )
}
