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
import { getSaduPageCopy } from '@/lib/content/heritageSaduCopyI18n'

export default function SaduPage() {
  return (
    <div className={`min-h-screen bg-brand-pageCanvas `}>
      <HeroSection />
      <AboutTopicNav />
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
  const ref = useRef(null)
  const { isRTL, language } = useLanguage()
  const ui = commerceUi(language)
  const copy = getSaduPageCopy(language)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section ref={ref} className="relative h-[80vh] overflow-hidden bg-brand-darkRed">
      <motion.div style={{ y }} className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1596568959257-5e730de5c6a3?w=1920&q=90"
          alt="Sadu Weaving"
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-darkRed via-brand-darkRed/60 to-transparent" />
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
              { label: copy.sadu },
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
  const copy = getSaduPageCopy(language)

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
              src="https://images.unsplash.com/photo-1596568959257-5e730de5c6a3?w=800&q=90"
              alt="Sadu Weaving Detail"
              fill
              className="object-cover"
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
            {copy.symbolsEyebrow}
          </span>
          <h2 className="font-rozha text-4xl md:text-5xl text-brand-darkRed">{copy.symbolsTitle}</h2>
          <p className="font-montserrat text-base text-brand-clayRed/80 tracking-wide mt-4 max-w-2xl mx-auto">
            {copy.symbolsLead}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {copy.patterns.map((pattern, index) => (
            <motion.div
              key={pattern.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-8 bg-white border border-brand-stone/30 text-center text-start`}
            >
              <h3 className="font-rozha text-2xl text-brand-darkRed mb-3">{pattern.name}</h3>
              <p className="font-montserrat text-sm text-brand-clayRed/80 tracking-wide">{pattern.meaning}</p>
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
    <section ref={ref} className="py-24 md:py-32 bg-brand-darkRed text-white">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <span className="font-montserrat text-xs uppercase tracking-[0.4em] text-brand-stone mb-6 block">
            {copy.unescoEyebrow}
          </span>
          <h2 className="font-rozha text-4xl md:text-5xl lg:text-6xl mb-8">{copy.unescoTitle}</h2>
          <p className="font-montserrat text-base md:text-lg text-white/80 tracking-wide leading-relaxed mb-8">
            {copy.unescoBody}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-6 py-3 bg-white/10 backdrop-blur-sm font-montserrat text-xs uppercase tracking-[0.15em]">
              {copy.unescoBadge1}
            </span>
            <span className="px-6 py-3 bg-white/10 backdrop-blur-sm font-montserrat text-xs uppercase tracking-[0.15em]">
              {copy.unescoBadge2}
            </span>
            <span className="px-6 py-3 bg-white/10 backdrop-blur-sm font-montserrat text-xs uppercase tracking-[0.15em]">
              {copy.unescoBadge3}
            </span>
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
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-montserrat text-xs uppercase tracking-[0.4em] text-brand-clayRed mb-6 block">
            {copy.paletteEyebrow}
          </span>
          <h2 className="font-rozha text-4xl md:text-5xl text-brand-darkRed">{copy.paletteTitle}</h2>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6">
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
                className="w-24 h-24 mx-auto mb-4 rounded-full border-4 border-white shadow-lg"
                style={{ backgroundColor: color.hex }}
              />
              <h3 className="font-rozha text-xl text-brand-darkRed mb-2">{color.name}</h3>
              <p className="font-montserrat text-xs text-brand-clayRed/80 tracking-wide">{color.meaning}</p>
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

  return (
    <section ref={ref} className="py-24 md:py-32 bg-brand-stone/10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="relative aspect-square overflow-hidden order-2 lg:order-1"
          >
            <Image
              src="https://images.unsplash.com/photo-1590003511523-9c5e5e60a3b1?w=800&q=90"
              alt="Bint Saeed Sadu Inspired Design"
              fill
              className="object-cover"
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
              href="/shop?from=heritage-sadu"
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
  const copy = getSaduPageCopy(language)

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
