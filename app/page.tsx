'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { FiArrowRight, FiPlay, FiVolume2, FiVolumeX } from 'react-icons/fi'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import PressSection from '@/components/PressSection'
import TestimonialsSection from '@/components/TestimonialsSection'

export default function Home() {
  const { isRTL } = useLanguage()
  
  return (
    <div className={`relative ${isRTL ? 'rtl' : 'ltr'}`}>
      <HeroSection />
      <PressSection />
      <MarqueeSection />
      <DaughtersSection />
      <EditorialSection />
      <CollectionShowcase />
      <TestimonialsSection />
      <LifestyleSection />
      <FeaturedProducts />
      <BrandStory />
      <ShippingLocationsSection />
      <FinalCTA />
    </div>
  )
}

function HeroSection() {
  const ref = useRef(null)
  const [isMuted, setIsMuted] = useState(true)
  const { t, isRTL } = useLanguage()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1])

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden bg-black">
      {/* Video/Image Background */}
      <motion.div style={{ y, scale }} className="absolute inset-0">
        {/* Video placeholder - replace src with actual video */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-stone/40 via-brand-rose/20 to-brand-dustyBlue/30" />
        <Image
          src="https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1920&q=90"
          alt="Bint Saeed Collection"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
      </motion.div>

      {/* Content */}
      <motion.div style={{ opacity }} className="relative h-full flex flex-col justify-end pb-20 md:pb-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className={`max-w-4xl ${isRTL ? 'mr-0 ml-auto text-right' : ''}`}>
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.1, 0, 1] }}
            >
              <span className="font-roboto text-xs md:text-sm uppercase tracking-[0.5em] text-white/70 mb-6 block">
                {t.hero.subtitle}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.5, ease: [0.25, 0.1, 0, 1] }}
              className="font-rozha text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-white mb-8 leading-[0.9]"
            >
              {t.hero.title1}
              <br />
              <span className="text-brand-stone">{t.hero.title2}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7, ease: [0.25, 0.1, 0, 1] }}
              className="font-roboto text-base md:text-lg text-white/80 tracking-[0.1em] mb-10 max-w-xl leading-relaxed"
            >
              {t.hero.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9, ease: [0.25, 0.1, 0, 1] }}
              className={`flex flex-wrap gap-4 ${isRTL ? 'justify-end' : ''}`}
            >
              <Link
                href="/shop"
                className={`group px-10 py-4 bg-white text-brand-darkRed font-roboto text-sm uppercase tracking-[0.2em] hover:bg-brand-dustyBlue transition-all duration-500 flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}
                data-cursor-hover
              >
                {t.hero.shopCollection}
                <FiArrowRight className={`w-4 h-4 group-hover:translate-x-1 transition-transform ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
              </Link>
              <button
                className={`px-10 py-4 border border-white/50 text-white font-roboto text-sm uppercase tracking-[0.2em] hover:bg-white/10 transition-all duration-500 flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}
                data-cursor-hover
              >
                <FiPlay className="w-4 h-4" />
                {t.hero.watchFilm}
              </button>
            </motion.div>
          </div>
        </div>

        {/* Sound Toggle */}
        <button
          onClick={() => setIsMuted(!isMuted)}
          className="absolute bottom-8 right-8 p-3 border border-white/30 text-white/70 hover:text-white hover:border-white/60 transition-all"
          data-cursor-hover
        >
          {isMuted ? <FiVolumeX className="w-4 h-4" /> : <FiVolume2 className="w-4 h-4" />}
        </button>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2"
        >
          <span className="font-roboto text-[10px] uppercase tracking-[0.3em] text-white/50">{t.hero.scroll}</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  )
}

function DaughtersSection() {
  const { t, isRTL } = useLanguage()
  
  return (
    <section className="min-h-screen bg-brand-clayRed flex items-center justify-center py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0, 1] }}
          className="text-center text-white max-w-3xl mx-auto"
        >
          <h2 className="font-rozha text-5xl md:text-7xl lg:text-8xl mb-16">
            {t.about.title}
          </h2>
          
          <p className="font-roboto text-lg md:text-xl tracking-wide mb-8">
            {t.about.daughters}
          </p>
          
          <p className="font-roboto text-base md:text-lg tracking-wide leading-relaxed mb-16 text-white/90">
            {t.about.daughtersText1}
            <br /><br />
            {t.about.daughtersText2}
          </p>
          
          <Link
            href="/about"
            className="inline-block px-16 py-4 border border-white text-white font-roboto text-sm uppercase tracking-[0.2em] hover:bg-white hover:text-brand-dustyBlue transition-all duration-500"
            data-cursor-hover
          >
            {t.about.readMore}
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

function MarqueeSection() {
  const { t } = useLanguage()
  const items = [t.marquee.newArrivals, '•', t.marquee.freeShipping, '•', t.marquee.exclusiveDesigns, '•', t.marquee.handcraftedLuxury, '•']
  
  return (
    <div className="bg-brand-darkRed py-4 overflow-hidden">
      <motion.div
        animate={{ x: [0, -1000] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="flex whitespace-nowrap"
      >
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center">
            {items.map((item, index) => (
              <span
                key={index}
                className="font-roboto text-xs uppercase tracking-[0.3em] text-white/90 mx-8"
              >
                {item}
              </span>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  )
}

function EditorialSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { margin: '-20%' })
  const { t, isRTL } = useLanguage()
  
  return (
    <section ref={ref} className="py-24 md:py-40 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-0">
          {/* Left - Large Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.25, 0.1, 0, 1] }}
            className="relative aspect-[3/4] lg:aspect-auto lg:h-[90vh]"
          >
            <Image
              src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1200&q=90"
              alt="Editorial"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -60 : 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.1, 0, 1] }}
            className={`flex flex-col justify-center ${isRTL ? 'lg:pr-20 lg:pl-12 text-right' : 'lg:pl-20 lg:pr-12'}`}
          >
            <span className="font-roboto text-xs uppercase tracking-[0.4em] text-brand-clayRed mb-6">
              {t.editorial.subtitle}
            </span>
            <h2 className="font-rozha text-4xl md:text-5xl lg:text-6xl text-brand-darkRed mb-8 leading-[1.1]">
              {t.editorial.title1}
              <br />
              {t.editorial.title2}
            </h2>
            <p className={`font-roboto text-base text-brand-clayRed/80 tracking-wide leading-relaxed mb-10 max-w-lg ${isRTL ? 'mr-0 ml-auto' : ''}`}>
              {t.editorial.description}
            </p>
            <Link
              href="/shop"
              className={`group inline-flex items-center gap-3 font-roboto text-sm uppercase tracking-[0.2em] text-brand-darkRed ${isRTL ? 'flex-row-reverse' : ''}`}
              data-cursor-hover
            >
              {t.editorial.exploreCollection}
              <FiArrowRight className={`w-4 h-4 group-hover:translate-x-2 transition-transform duration-300 ${isRTL ? 'rotate-180 group-hover:-translate-x-2' : ''}`} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function CollectionShowcase() {
  const { t, isRTL } = useLanguage()
  
  const collections = [
    {
      title: t.collections.eveningWear,
      image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=90',
      count: `12 ${t.collections.pieces}`,
    },
    {
      title: t.collections.resortCollection,
      image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&q=90',
      count: `18 ${t.collections.pieces}`,
    },
    {
      title: t.collections.essentials,
      image: 'https://images.unsplash.com/photo-1485968579169-62f586746117?w=800&q=90',
      count: `24 ${t.collections.pieces}`,
    },
  ]

  return (
    <section className="py-24 md:py-32 bg-[#f8f7f5]">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-roboto text-xs uppercase tracking-[0.4em] text-brand-clayRed mb-4 block">
            {t.collections.subtitle}
          </span>
          <h2 className="font-rozha text-4xl md:text-5xl lg:text-6xl text-brand-darkRed">
            {t.collections.title}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
            >
              <Link href="/shop" className="group block" data-cursor-hover>
                <div className="relative aspect-[3/4] overflow-hidden mb-6">
                  <Image
                    src={collection.image}
                    alt={collection.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="px-8 py-3 bg-white text-brand-darkRed font-roboto text-xs uppercase tracking-[0.2em]">
                      {t.collections.viewCollection}
                    </span>
                  </div>
                </div>
                <h3 className="font-rozha text-2xl text-brand-darkRed mb-1 group-hover:text-brand-dustyBlue transition-colors">
                  {collection.title}
                </h3>
                <p className="font-roboto text-sm text-brand-clayRed/60 tracking-wide">
                  {collection.count}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function LifestyleSection() {
  const { t, isRTL } = useLanguage()
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  
  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100])
  const y2 = useTransform(scrollYProgress, [0, 1], [50, -50])

  return (
    <section ref={ref} className="relative py-32 md:py-48 bg-brand-darkRed overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`text-white ${isRTL ? 'text-right' : ''}`}
          >
            <span className="font-roboto text-xs uppercase tracking-[0.4em] text-brand-stone mb-6 block">
              {t.lifestyle.subtitle}
            </span>
            <h2 className="font-rozha text-4xl md:text-5xl lg:text-6xl mb-8 leading-[1.1]">
              {t.lifestyle.title1}
              <br />
              {t.lifestyle.title2}
              <br />
              <span className="text-brand-rose">{t.lifestyle.title3}</span>
            </h2>
            <p className="font-roboto text-base text-white/70 tracking-wide leading-relaxed mb-10 max-w-lg">
              {t.lifestyle.description}
            </p>
            <Link
              href="/about"
              className={`group inline-flex items-center gap-3 font-roboto text-sm uppercase tracking-[0.2em] text-white border-b border-white/30 pb-2 hover:border-white transition-colors ${isRTL ? 'flex-row-reverse' : ''}`}
              data-cursor-hover
            >
              {t.lifestyle.discoverStory}
              <FiArrowRight className={`w-4 h-4 group-hover:translate-x-2 transition-transform duration-300 ${isRTL ? 'rotate-180 group-hover:-translate-x-2' : ''}`} />
            </Link>
          </motion.div>

          {/* Images Grid */}
          <div className="relative h-[600px]">
            <motion.div
              style={{ y: y1 }}
              className="absolute top-0 right-0 w-2/3 aspect-[3/4]"
            >
              <Image
                src="https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=800&q=90"
                alt="Lifestyle 1"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              style={{ y: y2 }}
              className="absolute bottom-0 left-0 w-1/2 aspect-square"
            >
              <Image
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&q=90"
                alt="Lifestyle 2"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FeaturedProducts() {
  const { t, isRTL } = useLanguage()
  
  const products = [
    {
      name: 'Silk Evening Dress',
      price: '2,400 AED',
      image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&q=90',
    },
    {
      name: 'Embroidered Abaya',
      price: '1,800 AED',
      image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=600&q=90',
    },
    {
      name: 'Resort Kaftan',
      price: '1,200 AED',
      image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&q=90',
    },
    {
      name: 'Tailored Blazer',
      price: '1,600 AED',
      image: 'https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=600&q=90',
    },
  ]

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className={`flex flex-col md:flex-row md:items-end md:justify-between mb-16 ${isRTL ? 'text-right' : ''}`}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-roboto text-xs uppercase tracking-[0.4em] text-brand-clayRed mb-4 block">
              {t.featured.subtitle}
            </span>
            <h2 className="font-rozha text-4xl md:text-5xl text-brand-darkRed">
              {t.featured.title}
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Link
              href="/shop"
              className={`group inline-flex items-center gap-2 font-roboto text-sm uppercase tracking-[0.2em] text-brand-darkRed mt-4 md:mt-0 ${isRTL ? 'flex-row-reverse' : ''}`}
              data-cursor-hover
            >
              {t.featured.viewAll}
              <FiArrowRight className={`w-4 h-4 group-hover:translate-x-1 transition-transform ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href="/shop" className="group block" data-cursor-hover>
                <div className="relative aspect-[3/4] overflow-hidden mb-4 bg-[#f5f5f5]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-105"
                  />
                  {/* Quick Add */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <button className="w-full py-3 bg-brand-darkRed text-white font-roboto text-xs uppercase tracking-[0.15em] hover:bg-brand-dustyBlue transition-colors">
                      {t.featured.quickAdd}
                    </button>
                  </div>
                </div>
                <h3 className="font-roboto text-sm text-brand-darkRed mb-1 tracking-wide">
                  {product.name}
                </h3>
                <p className="font-roboto text-sm text-brand-clayRed/70 tracking-wide">
                  {product.price}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function BrandStory() {
  const ref = useRef(null)
  const isInView = useInView(ref, { margin: '-30%' })
  const { t, isRTL } = useLanguage()

  return (
    <section ref={ref} className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=90"
          alt="Brand Story"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6 lg:px-12 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.25, 0.1, 0, 1] }}
          className="max-w-3xl mx-auto"
        >
          <span className="font-roboto text-xs uppercase tracking-[0.5em] text-white/60 mb-8 block">
            {t.brandStory.subtitle}
          </span>
          <h2 className="font-rozha text-4xl md:text-6xl lg:text-7xl mb-8 leading-[1.1]">
            {t.brandStory.quote}
          </h2>
          <p className="font-roboto text-base md:text-lg text-white/70 tracking-wide mb-10 max-w-xl mx-auto">
            {t.brandStory.description}
          </p>
          <Link
            href="/about"
            className={`inline-flex items-center gap-3 px-10 py-4 border border-white/50 text-white font-roboto text-sm uppercase tracking-[0.2em] hover:bg-white hover:text-brand-dustyBlue transition-all duration-500 ${isRTL ? 'flex-row-reverse' : ''}`}
            data-cursor-hover
          >
            {t.brandStory.ourStory}
            <FiArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

function ShippingLocationsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-10%' })
  const { isRTL } = useLanguage()

  const uaeLocations = [
    { city: isRTL ? 'العين' : 'Al Ain', region: isRTL ? 'الإمارات' : 'UAE' },
    { city: isRTL ? 'دبي' : 'Dubai', region: isRTL ? 'الإمارات' : 'UAE' },
    { city: isRTL ? 'أبوظبي' : 'Abu Dhabi', region: isRTL ? 'الإمارات' : 'UAE' },
    { city: isRTL ? 'الشارقة' : 'Sharjah', region: isRTL ? 'الإمارات' : 'UAE' },
    { city: isRTL ? 'رأس الخيمة' : 'Ras Al Khaimah', region: isRTL ? 'الإمارات' : 'UAE' },
    { city: isRTL ? 'الفجيرة' : 'Fujairah', region: isRTL ? 'الإمارات' : 'UAE' },
  ]

  const gccLocations = [
    { city: isRTL ? 'الرياض' : 'Riyadh', region: isRTL ? 'السعودية' : 'Saudi' },
    { city: isRTL ? 'جدة' : 'Jeddah', region: isRTL ? 'السعودية' : 'Saudi' },
    { city: isRTL ? 'الدوحة' : 'Doha', region: isRTL ? 'قطر' : 'Qatar' },
    { city: isRTL ? 'الكويت' : 'Kuwait City', region: isRTL ? 'الكويت' : 'Kuwait' },
    { city: isRTL ? 'المنامة' : 'Manama', region: isRTL ? 'البحرين' : 'Bahrain' },
    { city: isRTL ? 'مسقط' : 'Muscat', region: isRTL ? 'عمان' : 'Oman' },
  ]

  return (
    <section ref={ref} className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className={`text-center mb-16 ${isRTL ? 'text-right' : ''}`}
        >
          <span className="font-roboto text-xs uppercase tracking-[0.4em] text-brand-clayRed mb-4 block">
            {isRTL ? 'نشحن إلى جميع أنحاء الخليج' : 'Shipping Across the Gulf'}
          </span>
          <h2 className="font-rozha text-4xl md:text-5xl lg:text-6xl text-brand-darkRed mb-6">
            {isRTL ? 'نصل إليك أينما كنت' : 'We Deliver to You'}
          </h2>
          <p className="font-roboto text-base text-brand-clayRed/70 tracking-wide max-w-2xl mx-auto">
            {isRTL 
              ? 'شحن مجاني داخل الإمارات وأسعار شحن مميزة لجميع دول الخليج والعالم.'
              : 'Free shipping within UAE and special rates to all GCC countries and worldwide.'}
          </p>
        </motion.div>

        {/* UAE Cities */}
        <div className="mb-8">
          <h3 className={`font-roboto text-xs uppercase tracking-[0.3em] text-brand-clayRed/60 mb-4 ${isRTL ? 'text-right' : ''}`}>
            {isRTL ? 'الإمارات العربية المتحدة' : 'United Arab Emirates'}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
            {uaeLocations.map((loc, index) => (
              <motion.div
                key={loc.city}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group text-center p-5 bg-brand-stone/10 hover:bg-brand-dustyBlue transition-all duration-500"
              >
                <h4 className="font-rozha text-lg text-brand-darkRed group-hover:text-white transition-colors">
                  {loc.city}
                </h4>
              </motion.div>
            ))}
          </div>
        </div>

        {/* GCC Cities */}
        <div className="mb-12">
          <h3 className={`font-roboto text-xs uppercase tracking-[0.3em] text-brand-clayRed/60 mb-4 ${isRTL ? 'text-right' : ''}`}>
            {isRTL ? 'دول مجلس التعاون الخليجي' : 'GCC Countries'}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
            {gccLocations.map((loc, index) => (
              <motion.div
                key={loc.city}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.08 }}
                className="group text-center p-5 bg-brand-darkRed/5 hover:bg-brand-dustyBlue transition-all duration-500"
              >
                <h4 className="font-rozha text-lg text-brand-darkRed group-hover:text-white transition-colors">
                  {loc.city}
                </h4>
                <p className="font-roboto text-[10px] uppercase tracking-[0.15em] text-brand-clayRed/50 group-hover:text-white/60 transition-colors mt-1">
                  {loc.region}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className={`grid md:grid-cols-3 gap-6 ${isRTL ? 'text-right' : ''}`}
        >
          <div className={`flex items-start gap-4 p-6 bg-brand-stone/5 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <span className="text-2xl">🌍</span>
            <div>
              <h4 className="font-roboto text-sm font-medium text-brand-darkRed mb-1">
                {isRTL ? 'شحن عالمي' : 'Worldwide Shipping'}
              </h4>
              <p className="font-roboto text-xs text-brand-clayRed/60 leading-relaxed">
                {isRTL ? 'نشحن إلى جميع أنحاء العالم' : 'We deliver globally'}
              </p>
            </div>
          </div>
          
          <div className={`flex items-start gap-4 p-6 bg-brand-stone/5 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <span className="text-2xl">✨</span>
            <div>
              <h4 className="font-roboto text-sm font-medium text-brand-darkRed mb-1">
                {isRTL ? 'صناعة يدوية' : 'Handcrafted'}
              </h4>
              <p className="font-roboto text-xs text-brand-clayRed/60 leading-relaxed">
                {isRTL ? 'حرفية تراثية مع تصميم عصري' : 'Heritage craft meets modern design'}
              </p>
            </div>
          </div>
          
          <div className={`flex items-start gap-4 p-6 bg-brand-stone/5 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <span className="text-2xl">📦</span>
            <div>
              <h4 className="font-roboto text-sm font-medium text-brand-darkRed mb-1">
                {isRTL ? 'توصيل خلال أسبوعين' : '2 Week Delivery'}
              </h4>
              <p className="font-roboto text-xs text-brand-clayRed/60 leading-relaxed">
                {isRTL ? 'مصنوعة خصيصاً لك' : 'Made to order for you'}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function FinalCTA() {
  const { t, isRTL } = useLanguage()
  
  return (
    <section className="py-24 md:py-32 bg-[#f8f7f5]">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="font-roboto text-xs uppercase tracking-[0.4em] text-brand-clayRed mb-4 block">
            {t.cta.subtitle}
          </span>
          <h2 className="font-rozha text-4xl md:text-5xl text-brand-darkRed mb-6">
            {t.cta.title}
          </h2>
          <p className="font-roboto text-base text-brand-clayRed/70 tracking-wide mb-10">
            {t.cta.description}
          </p>
          <form className={`flex flex-col sm:flex-row gap-4 max-w-md mx-auto ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
            <input
              type="email"
              placeholder={t.cta.emailPlaceholder}
              className={`flex-1 px-6 py-4 border border-brand-stone bg-white font-roboto text-sm tracking-wide focus:outline-none focus:border-brand-darkRed transition-colors ${isRTL ? 'text-right' : ''}`}
              dir={isRTL ? 'rtl' : 'ltr'}
            />
            <button
              type="submit"
              className="px-8 py-4 bg-brand-darkRed text-white font-roboto text-sm uppercase tracking-[0.15em] hover:bg-brand-dustyBlue transition-colors"
              data-cursor-hover
            >
              {t.cta.subscribe}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
