'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import Image from 'next/image'
import LocaleLink from '@/components/LocaleLink'
import AboutTopicNav from '@/components/AboutTopicNav'
import AppPageWayfinding from '@/components/AppPageWayfinding'
import { FiArrowRight } from 'react-icons/fi'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { commerceUi } from '@/lib/i18n/commerceUi'
import { getKhousPageCopy } from '@/lib/content/heritageKhousCopyI18n'
import { HERITAGE_KHOUS_IMAGES } from '@/lib/content/heritagePageMedia'
import { withBrandAlt } from '@/lib/products/imageAlt'
import type { AppLocale } from '@/lib/i18n/routing'

export default function KhousPage() {
  return (
    <div className={`min-h-screen bg-brand-pageCanvas `}>
      <HeroSection />
      <AboutTopicNav />
      <StorySection />
      <ProcessSection />
      <ProductsSection />
      <BintSaeedSection />
      <CTASection />
    </div>
  )
}

function HeroSection() {
  const ref = useRef(null)
  const { isRTL, language } = useLanguage()
  const ui = commerceUi(language)
  const copy = getKhousPageCopy(language)
  const locale = language as AppLocale
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section ref={ref} className="relative h-[80vh] overflow-hidden bg-brand-clayRed">
      <motion.div style={{ y }} className="absolute inset-0">
        <Image
          src={HERITAGE_KHOUS_IMAGES.hero}
          alt={withBrandAlt(
            'Al Khous palm-frond fans on Sadu textile — Emirati heritage craft, Bint Saeed Abu Dhabi',
            locale,
          )}
          fill
          className="object-cover object-center opacity-55"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-clayRed via-brand-clayRed/60 to-transparent" />
      </motion.div>

      <div className={`absolute top-28 start-6 lg:start-12 z-20`}>
        <motion.div
          initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <AppPageWayfinding
            rtl={isRTL}
            variant="light"
            segments={[
              { label: ui.common.home, href: '/home' },
              { label: copy.heritage, href: '/heritage' },
              { label: copy.khousFull },
            ]}
            backLink={{
              href: '/heritage',
              label: ui.common.backToHeritage,
            }}
          />
        </motion.div>
      </div>

      <motion.div
        style={{ opacity }}
        className="relative h-full flex items-center justify-center text-center"
      >
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0, 1] }}
            className="text-white max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm font-montserrat text-xs uppercase tracking-[0.3em] text-white/80 mb-8">
              {copy.heroTag}
            </span>
            <h1 data-document-h1="true" className="font-rozha text-5xl md:text-7xl lg:text-8xl mb-6">
              {copy.heroTitle}
            </h1>
            <p className="font-montserrat text-lg md:text-xl text-white/70 tracking-wide">
              {copy.heroSubtitle}
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

function StorySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { margin: '-20%' })
  const { isRTL, language } = useLanguage()
  const copy = getKhousPageCopy(language)
  const locale = language as AppLocale

  return (
    <section ref={ref} className="py-24 md:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 40 : -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-start"
          >
            <span className="font-montserrat text-xs uppercase tracking-[0.4em] text-brand-clayRed mb-6 block">
              {copy.storyEyebrow}
            </span>
            <h2 className="font-rozha text-4xl md:text-5xl text-brand-darkRed mb-8">{copy.storyTitle}</h2>
            <div className="space-y-6 font-montserrat text-base text-brand-clayRed/80 tracking-wide leading-relaxed">
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
                'Al Khous palm-frond weaving in progress — Emirati craft, Bint Saeed Abu Dhabi',
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
    <section className="py-24 md:py-32 bg-brand-stone/20">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-montserrat text-xs uppercase tracking-[0.4em] text-brand-clayRed mb-6 block">
            {copy.processEyebrow}
          </span>
          <h2 className="font-rozha text-4xl md:text-5xl text-brand-darkRed">{copy.processTitle}</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {copy.steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-8 bg-white border border-brand-stone/30 text-start`}
            >
              <span className="font-rozha text-6xl text-brand-clayRed/20 block mb-4">0{index + 1}</span>
              <h3 className="font-rozha text-2xl text-brand-darkRed mb-4">{step.title}</h3>
              <p className="font-montserrat text-sm text-brand-clayRed/80 tracking-wide leading-relaxed">
                {step.description}
              </p>
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
    <section className="py-24 md:py-32 bg-brand-clayRed text-white">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-montserrat text-xs uppercase tracking-[0.4em] text-brand-stone mb-6 block">
            {copy.productsEyebrow}
          </span>
          <h2 className="font-rozha text-4xl md:text-5xl">{copy.productsTitle}</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {copy.products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-6 bg-white/10 backdrop-blur-sm text-center text-start`}
            >
              <h3 className="font-rozha text-xl mb-2">{product.name}</h3>
              <p className="font-montserrat text-xs text-white/60 tracking-wide">{product.use}</p>
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
    <section ref={ref} className="py-24 md:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/5] overflow-hidden order-2 lg:order-1"
          >
            <Image
              src={HERITAGE_KHOUS_IMAGES.hero}
              alt={withBrandAlt(
                'Al Khous woven palm fans with Sadu stripes — Emirati heritage, Bint Saeed Abu Dhabi',
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
            className={`order-1 lg:order-2 text-start`}
          >
            <span className="font-montserrat text-xs uppercase tracking-[0.4em] text-brand-clayRed mb-6 block">
              {copy.brandEyebrow}
            </span>
            <h2 className="font-rozha text-4xl md:text-5xl text-brand-darkRed mb-8">{copy.brandTitle}</h2>
            <div className="space-y-6 font-montserrat text-base text-brand-clayRed/80 tracking-wide leading-relaxed">
              <p>{copy.brandP1}</p>
              <p>{copy.brandP2}</p>
            </div>
            <LocaleLink
              href="/shop?from=heritage-khous"
              className={`mt-8 inline-flex min-h-[52px] items-center justify-center gap-3 px-8 py-4 bg-brand-darkRed text-white font-montserrat text-sm uppercase tracking-[0.15em] hover:bg-brand-dustyBlue transition-colors `}
              data-cursor-hover
            >
              {copy.shopCollection}
              <FiArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
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
    <section className="py-16 bg-brand-stone/20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className={`flex flex-col md:flex-row items-center justify-between gap-8 `}>
          <div className="text-start">
            <h3 className="font-rozha text-2xl md:text-3xl text-brand-darkRed mb-2">{copy.exploreMore}</h3>
            <p className="font-montserrat text-sm text-brand-clayRed/70 tracking-wide">{copy.exploreMoreLead}</p>
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
              href="/heritage"
              className="inline-flex min-h-[48px] items-center justify-center px-6 py-3 border border-brand-darkRed text-brand-darkRed font-montserrat text-xs uppercase tracking-[0.15em] hover:bg-brand-dustyBlue hover:text-white transition-colors"
              data-cursor-hover
            >
              {copy.heritage}
            </LocaleLink>
          </div>
        </div>
      </div>
    </section>
  )
}
