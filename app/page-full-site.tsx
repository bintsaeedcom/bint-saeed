'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import LocaleLink from '@/components/LocaleLink'
import Image from 'next/image'
import { FiArrowRight, FiArrowDown } from 'react-icons/fi'
import { useLanguage } from '@/lib/i18n/LanguageContext'

export default function Home() {
  const { isRTL } = useLanguage()
  
  return (
    <div className={`relative overflow-hidden ${isRTL ? 'rtl' : 'ltr'}`}>
      <HeroSection />
      <EditorialIntro />
      <MagazineGrid />
      <ColorBlockSection />
      <EditorialSplit />
      <AsymmetricShowcase />
    </div>
  )
}

function HeroSection() {
  const ref = useRef(null)
  const { t, isRTL } = useLanguage()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2])

  return (
    <section ref={ref} className="relative h-[100svh] w-full overflow-hidden">
      {/* Background — must not capture clicks above hero CTAs */}
      <motion.div style={{ scale }} className="pointer-events-none absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1920&q=90"
          alt="Bint Saeed"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-darkRed/40 via-transparent to-brand-darkRed/60" />
      </motion.div>

      {/* Decorative Elements */}
      <div className="pointer-events-none absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-brand-stone/20 to-transparent" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-1/2 h-1/3 bg-gradient-to-t from-brand-rose/30 to-transparent" />

      {/* Content — parallax on copy only; primary CTA avoids scroll transform for hit-testing */}
      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid items-center gap-8 lg:grid-cols-12">
            <div className={`lg:col-span-7 ${isRTL ? 'lg:col-start-6' : ''}`}>
              <motion.div style={{ y, opacity }} className="pointer-events-none">
                <motion.div
                  initial={{ opacity: 0, x: -80 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                  <span className="mb-8 inline-block bg-brand-stone/30 px-4 py-2 font-montserrat text-[10px] uppercase tracking-[0.4em] text-white backdrop-blur-sm">
                    {t.hero.subtitle}
                  </span>
                </motion.div>

                <motion.h1 data-document-h1="true"
                  initial={{ opacity: 0, y: 80 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.4, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="mb-8 font-rozha text-[12vw] leading-[0.85] text-white md:text-[8vw] lg:text-[6vw]"
                >
                  {t.hero.title1}
                  <br />
                  <span className="text-brand-stone italic">{t.hero.title2}</span>
                </motion.h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-20 flex items-center gap-8"
              >
                <LocaleLink
                  href="/shop"
                  className="group relative overflow-hidden bg-white px-12 py-5 font-montserrat text-xs uppercase tracking-[0.25em] text-brand-darkRed"
                  data-cursor-hover
                >
                  <span className="relative z-10">{t.hero.shopCollection}</span>
                  <div className="absolute inset-0 translate-y-full bg-brand-dustyBlue transition-transform duration-500 group-hover:translate-y-0" />
                </LocaleLink>
                <div className="hidden h-12 w-px bg-white/30 md:block" />
                <p className="hidden max-w-[200px] font-montserrat text-xs leading-relaxed tracking-wide text-white/60 md:block">
                  {t.hero.description}
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="pointer-events-none absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <FiArrowDown className="w-5 h-5 text-white/50" />
        </motion.div>
      </motion.div>

      {/* Side Accent */}
      <div className="pointer-events-none absolute top-1/2 right-0 -translate-y-1/2 w-1 h-32 bg-brand-rose" />
    </section>
  )
}

function EditorialIntro() {
  const ref = useRef(null)
  const isInView = useInView(ref, { margin: '-20%' })
  const { t, isRTL } = useLanguage()

  return (
    <section ref={ref} className="relative">
      {/* Stone Color Block */}
      <div className="absolute top-0 left-0 w-full md:w-2/3 h-full bg-brand-stone" />
      
      <div className="relative container mx-auto px-6 lg:px-16 py-32 md:py-48">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-0">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className={`lg:col-span-5 ${isRTL ? 'lg:col-start-8' : ''} relative z-10`}
          >
            <div className="lg:pr-12">
              <span className="font-montserrat text-[10px] uppercase tracking-[0.4em] text-brand-darkRed/60 mb-6 block">
                {t.editorial.subtitle}
              </span>
              <h2 className="font-rozha text-4xl md:text-5xl lg:text-6xl text-brand-darkRed leading-[1.05] mb-8">
                {t.editorial.title1}
                <br />
                <span className="text-brand-clayRed">{t.editorial.title2}</span>
              </h2>
              <p className="font-montserrat text-sm text-brand-darkRed/70 tracking-wide leading-[1.9] mb-10">
                {t.editorial.description}
              </p>
              <LocaleLink
                href="/about"
                className={`group inline-flex items-center gap-4 font-montserrat text-xs uppercase tracking-[0.2em] text-brand-darkRed ${isRTL ? 'flex-row-reverse' : ''}`}
                data-cursor-hover
              >
                <span className="relative">
                  {t.about.readMore}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-brand-darkRed group-hover:w-full transition-all duration-500" />
                </span>
                <FiArrowRight className={`w-4 h-4 group-hover:translate-x-2 transition-transform duration-300 ${isRTL ? 'rotate-180' : ''}`} />
              </LocaleLink>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className={`lg:col-span-6 ${isRTL ? 'lg:col-start-1' : 'lg:col-start-7'}`}
          >
            <div className="relative aspect-[4/5] lg:-mr-16">
              <Image
                src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1000&q=90"
                alt="Editorial"
                fill
                className="object-cover"
              />
              {/* Overlay Frame */}
              <div className="absolute -bottom-6 -left-6 w-full h-full border-2 border-brand-darkRed/20 -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function MagazineGrid() {
  const ref = useRef(null)
  const isInView = useInView(ref, { margin: '-10%' })
  const { t, isRTL } = useLanguage()

  return (
    <section ref={ref} className="bg-white py-24 md:py-32">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className={`flex items-end justify-between mb-16 ${isRTL ? 'flex-row-reverse' : ''}`}
        >
          <div>
            <span className="font-montserrat text-[10px] uppercase tracking-[0.4em] text-brand-clayRed mb-3 block">
              {t.collections.subtitle}
            </span>
            <h2 className="font-rozha text-4xl md:text-5xl text-brand-darkRed">
              {t.collections.title}
            </h2>
          </div>
          <LocaleLink
            href="/shop"
            className="hidden md:flex items-center gap-2 font-montserrat text-xs uppercase tracking-[0.2em] text-brand-darkRed hover:text-brand-dustyBlue transition-colors"
            data-cursor-hover
          >
            {t.featured.viewAll}
            <FiArrowRight className="w-4 h-4" />
          </LocaleLink>
        </motion.div>

        {/* Magazine Layout Grid */}
        <div className="grid grid-cols-12 gap-4 md:gap-6">
          {/* Large Feature */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="col-span-12 md:col-span-7 row-span-2"
          >
            <LocaleLink href="/shop" className="group block relative aspect-[4/5] overflow-hidden" data-cursor-hover>
              <Image
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1200&q=90"
                alt="Evening Collection"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-darkRed/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                <span className="font-montserrat text-[10px] uppercase tracking-[0.3em] text-brand-stone mb-3 block">
                  {t.collections.eveningWear}
                </span>
                <h3 className="font-rozha text-3xl md:text-4xl text-white mb-4">
                  {isRTL ? 'مجموعة المساء' : 'Evening Collection'}
                </h3>
                <span className="inline-flex items-center gap-2 font-montserrat text-xs uppercase tracking-[0.2em] text-white/80 group-hover:text-white transition-colors">
                  {t.collections.viewCollection}
                  <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </LocaleLink>
          </motion.div>

          {/* Top Right - Dusty Blue Accent */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="col-span-6 md:col-span-5"
          >
            <LocaleLink href="/shop" className="group block relative aspect-square overflow-hidden bg-brand-dustyBlue" data-cursor-hover>
              <Image
                src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&q=90"
                alt="Resort Collection"
                fill
                className="object-cover mix-blend-multiply opacity-80 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                <span className="font-montserrat text-[10px] uppercase tracking-[0.3em] text-white/70 mb-2">
                  {t.collections.resortCollection}
                </span>
                <h3 className="font-rozha text-2xl md:text-3xl text-white">
                  {isRTL ? 'أناقة الصيف' : 'Summer Elegance'}
                </h3>
              </div>
            </LocaleLink>
          </motion.div>

          {/* Bottom Right - Rose Accent */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="col-span-6 md:col-span-5"
          >
            <LocaleLink href="/shop" className="group block relative aspect-square overflow-hidden bg-brand-rose" data-cursor-hover>
              <Image
                src="https://images.unsplash.com/photo-1485968579169-62f586746117?w=800&q=90"
                alt="Essentials"
                fill
                className="object-cover mix-blend-multiply opacity-80 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                <span className="font-montserrat text-[10px] uppercase tracking-[0.3em] text-white/70 mb-2">
                  {t.collections.essentials}
                </span>
                <h3 className="font-rozha text-2xl md:text-3xl text-white">
                  {isRTL ? 'الأساسيات' : 'The Essentials'}
                </h3>
              </div>
            </LocaleLink>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function ColorBlockSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const { t, isRTL } = useLanguage()

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Neutral paper-beige field (replaces split clay / burgundy blocks) */}
      <div className="absolute inset-0 bg-brand-pageCanvas" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_50%_0%,rgba(255,255,255,0.55)_0%,transparent_45%)]" />

      <div className="relative container mx-auto px-6 lg:px-16 py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image with Parallax */}
          <motion.div style={{ y }} className="relative">
            <div className="relative aspect-[3/4] max-w-md mx-auto lg:mx-0">
              <Image
                src="https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=800&q=90"
                alt="Craftsmanship"
                fill
                className="object-cover"
              />
              {/* Decorative Frame */}
              <div className="absolute -top-4 -right-4 w-full h-full border border-brand-stone/50" />
            </div>
            {/* Floating Label */}
            <div className="absolute -bottom-6 -right-6 md:right-auto md:-left-6 bg-brand-stone px-6 py-4">
              <span className="font-montserrat text-[10px] uppercase tracking-[0.3em] text-brand-darkRed">
                {isRTL ? 'صناعة يدوية' : 'Handcrafted'}
              </span>
            </div>
          </motion.div>

          {/* Right - Content */}
          <div className={`text-brand-darkRed ${isRTL ? 'text-right' : ''}`}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="font-montserrat text-[10px] uppercase tracking-[0.4em] text-brand-dustyBlue/70 mb-6 block">
                {t.about.title}
              </span>
              <h2 className="font-rozha text-4xl md:text-5xl lg:text-6xl leading-[1.05] mb-8">
                {t.about.daughters}
              </h2>
              <p className="font-montserrat text-base text-brand-darkRed/70 tracking-wide leading-[1.9] mb-8 max-w-lg">
                {t.about.daughtersText1}
              </p>
              <p className="font-montserrat text-base text-brand-darkRed/70 tracking-wide leading-[1.9] mb-12 max-w-lg">
                {t.about.daughtersText2}
              </p>
              <LocaleLink
                href="/about"
                className="inline-flex min-h-[52px] items-center justify-center px-10 py-4 border border-brand-darkRed/25 text-brand-darkRed font-montserrat text-xs uppercase tracking-[0.2em] hover:bg-brand-darkRed hover:text-white hover:border-brand-darkRed transition-all duration-500"
                data-cursor-hover
              >
                {t.about.readMore}
              </LocaleLink>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Vertical Text */}
      <div className="absolute top-1/2 right-8 -translate-y-1/2 hidden xl:block">
        <span
          className="font-rozha text-8xl text-stone-500/20 writing-mode-vertical transform rotate-180"
          style={{ writingMode: 'vertical-rl' }}
        >
          Bint Saeed
        </span>
      </div>
    </section>
  )
}

function EditorialSplit() {
  const ref = useRef(null)
  const isInView = useInView(ref, { margin: '-20%' })
  const { t, isRTL } = useLanguage()

  return (
    <section ref={ref} className="bg-white">
      <div className="grid lg:grid-cols-2 min-h-screen">
        {/* Left - Full Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="relative h-[60vh] lg:h-auto"
        >
          <Image
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=90"
            alt="Heritage"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20" />
        </motion.div>

        {/* Right - Content with Stone Background */}
        <div className="relative bg-[#f8f6f3] flex items-center">
          {/* Decorative Circle */}
          <div className="absolute top-12 right-12 w-24 h-24 rounded-full border border-brand-stone/50" />
          
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className={`p-12 lg:p-20 ${isRTL ? 'text-right' : ''}`}
          >
            <span className="font-montserrat text-[10px] uppercase tracking-[0.4em] text-brand-clayRed mb-6 block">
              {t.lifestyle.subtitle}
            </span>
            <h2 className="font-rozha text-4xl md:text-5xl text-brand-darkRed leading-[1.1] mb-8">
              {t.lifestyle.title1}
              <br />
              <span className="text-brand-dustyBlue">{t.lifestyle.title2}</span>
              <br />
              {t.lifestyle.title3}
            </h2>
            <p className="font-montserrat text-sm text-brand-clayRed/70 tracking-wide leading-[1.9] mb-10 max-w-md">
              {t.lifestyle.description}
            </p>
            
            {/* Feature List */}
            <div className="space-y-4 mb-10">
              {[
                isRTL ? 'تقنيات التلي من اليونسكو' : 'UNESCO Al Talli Techniques',
                isRTL ? 'أقمشة فاخرة مستدامة' : 'Sustainable Luxury Fabrics',
                isRTL ? 'تصميم معاصر وتراثي' : 'Contemporary Heritage Design',
              ].map((item, i) => (
                <div key={i} className={`flex items-center gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className="w-8 h-px bg-brand-dustyBlue" />
                  <span className="font-montserrat text-sm text-brand-darkRed/80 tracking-wide">{item}</span>
                </div>
              ))}
            </div>

            <LocaleLink
              href="/about"
              className={`group inline-flex items-center gap-3 font-montserrat text-xs uppercase tracking-[0.2em] text-brand-darkRed ${isRTL ? 'flex-row-reverse' : ''}`}
              data-cursor-hover
            >
              {t.lifestyle.discoverStory}
              <FiArrowRight className={`w-4 h-4 group-hover:translate-x-2 transition-transform duration-300 ${isRTL ? 'rotate-180' : ''}`} />
            </LocaleLink>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function CollectionStrip() {
  const { t } = useLanguage()
  
  return (
    <section className="bg-brand-darkRed py-6 overflow-hidden">
      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        className="flex whitespace-nowrap"
      >
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center">
            {[
              t.marquee.newArrivals,
              t.marquee.freeShipping,
              t.marquee.exclusiveDesigns,
              t.marquee.handcraftedLuxury,
            ].map((item, index) => (
              <span key={index} className="flex items-center">
                <span className="font-rozha text-2xl md:text-3xl text-white/90 mx-12">
                  {item}
                </span>
                <span className="w-2 h-2 bg-brand-rose rounded-full" />
              </span>
            ))}
          </div>
        ))}
      </motion.div>
    </section>
  )
}

function AsymmetricShowcase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { margin: '-10%' })
  const { t, isRTL } = useLanguage()

  const products = [
    { name: 'Silk Evening Abaya', price: '2,400 AED', image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&q=90' },
    { name: 'Embroidered Bisht', price: '1,800 AED', image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=600&q=90' },
    { name: 'Resort Kaftan', price: '1,200 AED', image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&q=90' },
  ]

  return (
    <section ref={ref} className="bg-white py-24 md:py-40">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className={`mb-20 ${isRTL ? 'text-right' : ''}`}
        >
          <span className="font-montserrat text-[10px] uppercase tracking-[0.4em] text-brand-clayRed mb-3 block">
            {t.featured.subtitle}
          </span>
          <div className={`flex flex-col md:flex-row md:items-end md:justify-between gap-6 ${isRTL ? 'md:flex-row-reverse' : ''}`}>
            <h2 className="font-rozha text-4xl md:text-5xl lg:text-6xl text-brand-darkRed max-w-xl leading-[1.1]">
              {t.featured.title}
            </h2>
            <LocaleLink
              href="/shop"
              className="inline-flex items-center gap-2 font-montserrat text-xs uppercase tracking-[0.2em] text-brand-darkRed hover:text-brand-dustyBlue transition-colors pb-2 border-b border-brand-darkRed/30"
              data-cursor-hover
            >
              {t.featured.viewAll}
              <FiArrowRight className="w-4 h-4" />
            </LocaleLink>
          </div>
        </motion.div>

        {/* Asymmetric Product Grid */}
        <div className="grid md:grid-cols-12 gap-6 md:gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className={`${index === 0 ? 'md:col-span-5' : index === 1 ? 'md:col-span-4 md:mt-24' : 'md:col-span-3 md:mt-12'}`}
            >
              <LocaleLink href="/shop" className="group block" data-cursor-hover>
                <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-[#f5f5f5]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-105"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-brand-darkRed/0 group-hover:bg-brand-darkRed/20 transition-colors duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <span className="inline-block px-6 py-3 bg-white text-brand-darkRed font-montserrat text-xs uppercase tracking-[0.15em]">
                      {t.featured.quickAdd}
                    </span>
                  </div>
                </div>
                <h3 className="font-montserrat text-sm text-brand-darkRed mb-2 tracking-wide group-hover:text-brand-dustyBlue transition-colors">
                  {product.name}
                </h3>
                <p className="font-montserrat text-sm text-brand-clayRed/60 tracking-wide">
                  {product.price}
                </p>
              </LocaleLink>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
