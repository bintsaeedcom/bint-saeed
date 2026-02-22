'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { FiArrowRight, FiArrowDown } from 'react-icons/fi'
import { useLanguage } from '@/lib/i18n/LanguageContext'

// Reusable decorative corner component (from Coming Soon)
function DecorativeCorners({ color = 'dustyBlue' }: { color?: 'dustyBlue' | 'darkRed' | 'stone' }) {
  const colorClass = color === 'dustyBlue' 
    ? 'from-brand-dustyBlue/40' 
    : color === 'darkRed' 
    ? 'from-brand-darkRed/30' 
    : 'from-brand-stone/40'
  
  return (
    <>
      <motion.div 
        className="absolute top-8 left-8 w-16 h-16 md:w-24 md:h-24 pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className={`absolute top-0 left-0 w-full h-px bg-gradient-to-r ${colorClass} to-transparent`} />
        <div className={`absolute top-0 left-0 w-px h-full bg-gradient-to-b ${colorClass} to-transparent`} />
      </motion.div>
      <motion.div 
        className="absolute top-8 right-8 w-16 h-16 md:w-24 md:h-24 pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.1 }}
      >
        <div className={`absolute top-0 right-0 w-full h-px bg-gradient-to-l ${colorClass} to-transparent`} />
        <div className={`absolute top-0 right-0 w-px h-full bg-gradient-to-b ${colorClass} to-transparent`} />
      </motion.div>
      <motion.div 
        className="absolute bottom-8 left-8 w-16 h-16 md:w-24 md:h-24 pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <div className={`absolute bottom-0 left-0 w-full h-px bg-gradient-to-r ${colorClass} to-transparent`} />
        <div className={`absolute bottom-0 left-0 w-px h-full bg-gradient-to-t ${colorClass} to-transparent`} />
      </motion.div>
      <motion.div 
        className="absolute bottom-8 right-8 w-16 h-16 md:w-24 md:h-24 pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <div className={`absolute bottom-0 right-0 w-full h-px bg-gradient-to-l ${colorClass} to-transparent`} />
        <div className={`absolute bottom-0 right-0 w-px h-full bg-gradient-to-t ${colorClass} to-transparent`} />
      </motion.div>
    </>
  )
}

export default function Home() {
  const { isRTL } = useLanguage()
  
  return (
    <div className={`relative overflow-hidden ${isRTL ? 'rtl' : 'ltr'}`}>
      <HeroSection />
      <EditorialIntro />
      <MagazineGrid />
      <ColorBlockSection />
      <EditorialSplit />
      <CollectionStrip />
      <AsymmetricShowcase />
      <QuoteSection />
      <FinalEditorial />
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
      {/* Background */}
      <motion.div style={{ scale }} className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1920&q=90"
          alt="Bint Saeed"
          fill
          className="object-cover"
          priority
        />
        {/* Coming Soon style gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#2a0012]/60 via-[#1a0008]/40 to-[#0d0004]/70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(146,170,193,0.08)_0%,_transparent_70%)]" />
      </motion.div>

      {/* Decorative Corners - Dusty Blue */}
      <DecorativeCorners color="dustyBlue" />

      {/* Content */}
      <motion.div style={{ y, opacity }} className="relative h-full flex items-center">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className={`lg:col-span-7 ${isRTL ? 'lg:col-start-6' : ''}`}>
              <motion.div
                initial={{ opacity: 0, x: -80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="inline-block px-5 py-2.5 backdrop-blur-sm bg-white/[0.05] border border-white/[0.1] rounded-full text-white font-roboto text-[10px] uppercase tracking-[0.4em] mb-8">
                  {t.hero.subtitle}
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.4, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="font-rozha text-[12vw] md:text-[8vw] lg:text-[6vw] text-white leading-[0.85] mb-8"
              >
                {t.hero.title1}
                <br />
                <span className="text-brand-dustyBlue italic">{t.hero.title2}</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-8"
              >
                <Link
                  href="/shop"
                  className="group relative overflow-hidden px-12 py-5 bg-brand-dustyBlue text-[#1a0008] font-roboto text-xs uppercase tracking-[0.25em] rounded-xl"
                  data-cursor-hover
                >
                  <span className="relative z-10">{t.hero.shopCollection}</span>
                  <div className="absolute inset-0 bg-brand-stone translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                </Link>
                <div className="hidden md:block w-px h-12 bg-white/20" />
                <p className="hidden md:block font-roboto text-xs text-white/50 tracking-wide max-w-[200px] leading-relaxed">
                  {t.hero.description}
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <FiArrowDown className="w-5 h-5 text-brand-dustyBlue/60" />
        </motion.div>
      </motion.div>
    </section>
  )
}

function EditorialIntro() {
  const ref = useRef(null)
  const isInView = useInView(ref, { margin: '-20%' })
  const { t, isRTL } = useLanguage()

  return (
    <section ref={ref} className="relative bg-white">
      {/* Stone Color Block - Left side only */}
      <div className="absolute top-0 left-0 w-full md:w-1/2 h-full bg-brand-stone" />
      
      {/* Dusty Blue accent line */}
      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-brand-dustyBlue via-brand-dustyBlue/50 to-transparent" />
      
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
              <span className="font-roboto text-[10px] uppercase tracking-[0.4em] text-brand-dustyBlue mb-6 block">
                {t.editorial.subtitle}
              </span>
              <h2 className="font-rozha text-4xl md:text-5xl lg:text-6xl text-brand-darkRed leading-[1.05] mb-8">
                {t.editorial.title1}
                <br />
                <span className="text-brand-dustyBlue">{t.editorial.title2}</span>
              </h2>
              <p className="font-roboto text-sm text-brand-darkRed/70 tracking-wide leading-[1.9] mb-10">
                {t.editorial.description}
              </p>
              <Link
                href="/about"
                className={`group inline-flex items-center gap-4 font-roboto text-xs uppercase tracking-[0.2em] text-brand-darkRed ${isRTL ? 'flex-row-reverse' : ''}`}
                data-cursor-hover
              >
                <span className="relative">
                  {t.about.readMore}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-brand-dustyBlue group-hover:w-full transition-all duration-500" />
                </span>
                <FiArrowRight className={`w-4 h-4 group-hover:translate-x-2 transition-transform duration-300 ${isRTL ? 'rotate-180' : ''}`} />
              </Link>
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
                src="/image 1.png"
                alt="Heritage meets modernity"
                fill
                className="object-cover"
              />
              {/* Dusty blue frame accent */}
              <div className="absolute -bottom-4 -left-4 w-full h-full border-2 border-brand-dustyBlue/20 -z-10" />
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
    <section ref={ref} className="relative bg-white py-24 md:py-32 overflow-hidden">
      {/* Subtle dusty blue accent at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-dustyBlue/30 to-transparent" />
      
      <div className="container mx-auto px-6 lg:px-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className={`flex items-end justify-between mb-16 ${isRTL ? 'flex-row-reverse' : ''}`}
        >
          <div>
            <span className="font-roboto text-[10px] uppercase tracking-[0.4em] text-brand-dustyBlue mb-3 block">
              {t.collections.subtitle}
            </span>
            <h2 className="font-rozha text-4xl md:text-5xl text-brand-darkRed">
              {t.collections.title}
            </h2>
          </div>
          <Link
            href="/shop"
            className="hidden md:flex items-center gap-2 font-roboto text-xs uppercase tracking-[0.2em] text-brand-darkRed hover:text-brand-dustyBlue transition-colors"
            data-cursor-hover
          >
            {t.featured.viewAll}
            <FiArrowRight className="w-4 h-4" />
          </Link>
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
            <Link href="/shop" className="group block relative aspect-[4/5] overflow-hidden" data-cursor-hover>
              <Image
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1200&q=90"
                alt="Evening Collection"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-darkRed/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                <span className="font-roboto text-[10px] uppercase tracking-[0.3em] text-brand-dustyBlue mb-3 block">
                  {t.collections.eveningWear}
                </span>
                <h3 className="font-rozha text-3xl md:text-4xl text-white mb-4">
                  {isRTL ? 'مجموعة المساء' : 'Evening Collection'}
                </h3>
                <span className="inline-flex items-center gap-2 font-roboto text-xs uppercase tracking-[0.2em] text-white/80 group-hover:text-brand-dustyBlue transition-colors">
                  {t.collections.viewCollection}
                  <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Top Right - Dusty Blue Accent */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="col-span-6 md:col-span-5"
          >
            <Link href="/shop" className="group block relative aspect-square overflow-hidden bg-brand-dustyBlue" data-cursor-hover>
              <Image
                src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&q=90"
                alt="Resort Collection"
                fill
                className="object-cover mix-blend-multiply opacity-80 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                <span className="font-roboto text-[10px] uppercase tracking-[0.3em] text-white/70 mb-2">
                  {t.collections.resortCollection}
                </span>
                <h3 className="font-rozha text-2xl md:text-3xl text-white">
                  {isRTL ? 'أناقة الصيف' : 'Summer Elegance'}
                </h3>
              </div>
            </Link>
          </motion.div>

          {/* Bottom Right - Rose Accent */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="col-span-6 md:col-span-5"
          >
            <Link href="/shop" className="group block relative aspect-square overflow-hidden bg-brand-rose" data-cursor-hover>
              <Image
                src="https://images.unsplash.com/photo-1485968579169-62f586746117?w=800&q=90"
                alt="Essentials"
                fill
                className="object-cover mix-blend-multiply opacity-80 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                <span className="font-roboto text-[10px] uppercase tracking-[0.3em] text-white/70 mb-2">
                  {t.collections.essentials}
                </span>
                <h3 className="font-rozha text-2xl md:text-3xl text-white">
                  {isRTL ? 'الأساسيات' : 'The Essentials'}
                </h3>
              </div>
            </Link>
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
      {/* Coming Soon style dark section */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#2a0012] via-[#1a0008] to-[#0d0004]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,_rgba(146,170,193,0.1)_0%,_transparent_60%)]" />
      
      {/* Decorative Corners */}
      <DecorativeCorners color="dustyBlue" />

      <div className="relative container mx-auto px-6 lg:px-16 py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image with Parallax */}
          <motion.div style={{ y }} className="relative">
            <div className="relative aspect-[3/4] max-w-md mx-auto lg:mx-0">
              <Image
                src="/image 2.JPG"
                alt="Handcrafted luxury"
                fill
                className="object-cover"
              />
              {/* Dusty blue frame */}
              <div className="absolute -top-4 -right-4 w-full h-full border border-brand-dustyBlue/30" />
            </div>
            {/* Floating Label - Glassmorphism (darker for readability) */}
            <div className="absolute -bottom-4 -right-4 md:right-auto md:-left-4 backdrop-blur-md bg-[#1a0008]/80 border border-brand-dustyBlue/30 px-6 py-4 rounded-xl">
              <span className="font-roboto text-[10px] uppercase tracking-[0.3em] text-brand-dustyBlue">
                {isRTL ? 'صناعة يدوية' : 'Handcrafted'}
              </span>
            </div>
          </motion.div>

          {/* Right - Content */}
          <div className={`text-white ${isRTL ? 'text-right' : ''}`}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* Glassmorphism Box */}
              <div className="relative max-w-xl">
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-brand-dustyBlue/20 via-transparent to-brand-stone/10 opacity-50" />
                <div className="relative backdrop-blur-sm bg-white/[0.03] rounded-2xl p-8 md:p-10 border border-white/[0.05]">
                  <span className="font-roboto text-[10px] uppercase tracking-[0.4em] text-brand-dustyBlue/60 mb-6 block">
                    {t.about.title}
                  </span>
                  <h2 className="font-rozha text-3xl md:text-4xl lg:text-5xl leading-[1.05] mb-8 text-white">
                    {t.about.daughters}
                  </h2>
                  <p className="font-roboto text-sm text-white/60 tracking-wide leading-[1.9] mb-6">
                    {t.about.daughtersText1}
                  </p>
                  <p className="font-roboto text-sm text-white/60 tracking-wide leading-[1.9] mb-10">
                    {t.about.daughtersText2}
                  </p>
                  <Link
                    href="/about"
                    className="inline-block px-8 py-4 bg-brand-dustyBlue text-[#1a0008] font-roboto text-xs uppercase tracking-[0.2em] rounded-xl hover:bg-brand-stone transition-all duration-500"
                    data-cursor-hover
                  >
                    {t.about.readMore}
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Vertical Text */}
      <div className="absolute top-1/2 right-8 -translate-y-1/2 hidden xl:block">
        <span className="font-rozha text-8xl text-white/[0.03] writing-mode-vertical transform rotate-180" style={{ writingMode: 'vertical-rl' }}>
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
          {/* Dusty blue accent line */}
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-brand-dustyBlue via-brand-dustyBlue/50 to-transparent" />
        </motion.div>

        {/* Right - Content with Stone Background */}
        <div className="relative bg-brand-stone flex items-center">
          {/* Decorative dusty blue corner */}
          <motion.div 
            className="absolute top-8 right-8 w-20 h-20 md:w-24 md:h-24"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-l from-brand-dustyBlue/40 to-transparent" />
            <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-brand-dustyBlue/40 to-transparent" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className={`p-12 lg:p-20 ${isRTL ? 'text-right' : ''}`}
          >
            <span className="font-roboto text-[10px] uppercase tracking-[0.4em] text-brand-dustyBlue mb-6 block">
              {t.lifestyle.subtitle}
            </span>
            <h2 className="font-rozha text-4xl md:text-5xl text-brand-darkRed leading-[1.1] mb-8">
              {t.lifestyle.title1}
              <br />
              <span className="text-brand-dustyBlue">{t.lifestyle.title2}</span>
              <br />
              {t.lifestyle.title3}
            </h2>
            <p className="font-roboto text-sm text-brand-darkRed/70 tracking-wide leading-[1.9] mb-10 max-w-md">
              {t.lifestyle.description}
            </p>
            
            {/* Feature List with dusty blue accents */}
            <div className="space-y-4 mb-10">
              {[
                isRTL ? 'تقنيات التلي من اليونسكو' : 'UNESCO Al Talli Techniques',
                isRTL ? 'أقمشة فاخرة مستدامة' : 'Sustainable Luxury Fabrics',
                isRTL ? 'تصميم معاصر وتراثي' : 'Contemporary Heritage Design',
              ].map((item, i) => (
                <div key={i} className={`flex items-center gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className="w-8 h-px bg-brand-dustyBlue" />
                  <span className="font-roboto text-sm text-brand-darkRed/80 tracking-wide">{item}</span>
                </div>
              ))}
            </div>

            <Link
              href="/heritage"
              className={`group inline-flex items-center gap-3 px-8 py-4 bg-brand-dustyBlue text-white font-roboto text-xs uppercase tracking-[0.2em] hover:bg-brand-darkRed transition-colors ${isRTL ? 'flex-row-reverse' : ''}`}
              data-cursor-hover
            >
              {t.lifestyle.discoverStory}
              <FiArrowRight className={`w-4 h-4 group-hover:translate-x-2 transition-transform duration-300 ${isRTL ? 'rotate-180' : ''}`} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function CollectionStrip() {
  const { t } = useLanguage()
  
  return (
    <section className="bg-brand-darkRed py-6 overflow-hidden relative">
      {/* Dusty blue accent lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-dustyBlue/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-dustyBlue/30 to-transparent" />
      
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
                <span className="w-2 h-2 bg-brand-dustyBlue rounded-full" />
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
    <section ref={ref} className="bg-[#faf9f7] py-24 md:py-40">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className={`mb-20 ${isRTL ? 'text-right' : ''}`}
        >
          <span className="font-roboto text-[10px] uppercase tracking-[0.4em] text-brand-dustyBlue mb-3 block">
            {t.featured.subtitle}
          </span>
          <div className={`flex flex-col md:flex-row md:items-end md:justify-between gap-6 ${isRTL ? 'md:flex-row-reverse' : ''}`}>
            <h2 className="font-rozha text-4xl md:text-5xl lg:text-6xl text-brand-darkRed max-w-xl leading-[1.1]">
              {t.featured.title}
            </h2>
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 font-roboto text-xs uppercase tracking-[0.2em] text-brand-darkRed hover:text-brand-dustyBlue transition-colors pb-2 border-b border-brand-dustyBlue/30"
              data-cursor-hover
            >
              {t.featured.viewAll}
              <FiArrowRight className="w-4 h-4" />
            </Link>
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
              <Link href="/shop" className="group block" data-cursor-hover>
                <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-white">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-105"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-brand-darkRed/0 group-hover:bg-brand-darkRed/20 transition-colors duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <span className="inline-block px-6 py-3 bg-brand-dustyBlue text-white font-roboto text-xs uppercase tracking-[0.15em]">
                      {t.featured.quickAdd}
                    </span>
                  </div>
                </div>
                <h3 className="font-roboto text-sm text-brand-darkRed mb-2 tracking-wide group-hover:text-brand-dustyBlue transition-colors">
                  {product.name}
                </h3>
                <p className="font-roboto text-sm text-brand-clayRed/60 tracking-wide">
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

function QuoteSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { margin: '-30%' })
  const { t } = useLanguage()

  return (
    <section ref={ref} className="relative py-32 md:py-48 bg-brand-stone overflow-hidden">
      {/* Decorative Corners - Dusty Blue */}
      <motion.div 
        className="absolute top-12 left-12 w-16 h-16 md:w-24 md:h-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-brand-dustyBlue/40 to-transparent" />
        <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-brand-dustyBlue/40 to-transparent" />
      </motion.div>
      <motion.div 
        className="absolute bottom-12 right-12 w-16 h-16 md:w-24 md:h-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-brand-dustyBlue/40 to-transparent" />
        <div className="absolute bottom-0 right-0 w-px h-full bg-gradient-to-t from-brand-dustyBlue/40 to-transparent" />
      </motion.div>

      {/* Large Background Text */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03]">
        <span className="font-rozha text-[30vw] text-brand-darkRed whitespace-nowrap">
          Elegance
        </span>
      </div>

      <div className="relative container mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="w-px h-16 bg-brand-dustyBlue/50 mx-auto mb-12" />
          <blockquote className="font-rozha text-3xl md:text-4xl lg:text-5xl text-brand-darkRed leading-[1.3] mb-12">
            "{t.brandStory.quote}"
          </blockquote>
          <p className="font-roboto text-sm text-brand-dustyBlue tracking-[0.2em] uppercase">
            — Bint Saeed
          </p>
          <div className="w-px h-16 bg-brand-dustyBlue/50 mx-auto mt-12" />
        </motion.div>
      </div>
    </section>
  )
}

function FinalEditorial() {
  const ref = useRef(null)
  const isInView = useInView(ref, { margin: '-10%' })
  const { t, isRTL } = useLanguage()

  return (
    <section ref={ref} className="relative">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1920&q=90"
          alt="Newsletter"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-brand-darkRed/70" />
      </div>
      
      {/* Dusty blue accent lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-dustyBlue/30 to-transparent" />

      <div className="relative container mx-auto px-6 lg:px-16 py-32 md:py-48">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Shipping Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <span className="font-roboto text-[10px] uppercase tracking-[0.4em] text-brand-dustyBlue mb-6 block">
              {isRTL ? 'الشحن العالمي' : 'Worldwide Delivery'}
            </span>
            <h2 className="font-rozha text-4xl md:text-5xl leading-[1.1] mb-8">
              {isRTL ? 'نصل إليك' : 'We Deliver'}
              <br />
              <span className="text-brand-dustyBlue">{isRTL ? 'أينما كنت' : 'Everywhere'}</span>
            </h2>
            <div className="grid grid-cols-3 gap-4 mb-8">
              {['UAE', 'KSA', 'Qatar', 'Kuwait', 'Bahrain', 'Oman'].map((country) => (
                <div key={country} className="text-center py-3 border border-brand-dustyBlue/30">
                  <span className="font-roboto text-xs text-white/80 tracking-wide">{country}</span>
                </div>
              ))}
            </div>
            <p className="font-roboto text-sm text-white/60 tracking-wide">
              {isRTL ? 'شحن مجاني للإمارات • توصيل خلال أسبوعين' : 'Free UAE shipping • 2 week delivery'}
            </p>
          </motion.div>

          {/* Right - Newsletter */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`bg-white/10 backdrop-blur-sm p-10 md:p-12 border border-brand-dustyBlue/20 ${isRTL ? 'text-right' : ''}`}
          >
            <span className="font-roboto text-[10px] uppercase tracking-[0.4em] text-brand-dustyBlue mb-4 block">
              {t.cta.subtitle}
            </span>
            <h3 className="font-rozha text-3xl md:text-4xl text-white mb-4">
              {t.cta.title}
            </h3>
            <p className="font-roboto text-sm text-white/60 tracking-wide mb-8">
              {t.cta.description}
            </p>
            <form className={`flex flex-col sm:flex-row gap-3 ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
              <input
                type="email"
                placeholder={t.cta.emailPlaceholder}
                className={`flex-1 px-5 py-4 bg-white/10 border border-brand-dustyBlue/30 text-white font-roboto text-sm tracking-wide placeholder:text-white/40 focus:outline-none focus:border-brand-dustyBlue transition-colors ${isRTL ? 'text-right' : ''}`}
                dir={isRTL ? 'rtl' : 'ltr'}
              />
              <button
                type="submit"
                className="px-8 py-4 bg-brand-dustyBlue text-white font-roboto text-xs uppercase tracking-[0.2em] hover:bg-brand-stone hover:text-brand-darkRed transition-colors"
                data-cursor-hover
              >
                {t.cta.subscribe}
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Bottom Accent Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-dustyBlue/50 via-brand-stone/50 to-brand-dustyBlue/50" />
    </section>
  )
}
