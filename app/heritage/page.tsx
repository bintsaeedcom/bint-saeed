'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FiArrowRight, FiArrowLeft } from 'react-icons/fi'
import { useLanguage } from '@/lib/i18n/LanguageContext'

const heritageItems = [
  {
    id: 'al-talli',
    title: { en: 'Al Talli', ar: 'التلي' },
    subtitle: { en: 'Traditional Embroidery', ar: 'التطريز التقليدي' },
    description: {
      en: 'An ancient embroidery technique inscribed on UNESCO\'s Intangible Cultural Heritage list, Al Talli represents the artistic soul of Emirati women.',
      ar: 'تقنية تطريز عريقة مدرجة في قائمة اليونسكو للتراث الثقافي غير المادي، يمثل التلي الروح الفنية للمرأة الإماراتية.'
    },
    image: 'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&q=90',
    href: '/heritage/al-talli',
    tag: { en: 'UNESCO Heritage', ar: 'تراث اليونسكو' },
  },
  {
    id: 'khous',
    title: { en: 'Khous Weaving', ar: 'الخوص' },
    subtitle: { en: 'Palm Frond Artistry', ar: 'فن سعف النخيل' },
    description: {
      en: 'The art of weaving palm fronds into intricate patterns, passed down through generations of Emirati artisans.',
      ar: 'فن نسج سعف النخيل في أنماط معقدة، توارثته أجيال من الحرفيين الإماراتيين.'
    },
    image: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=800&q=90',
    href: '/heritage/khous',
    tag: { en: 'Traditional Craft', ar: 'حرفة تقليدية' },
  },
  {
    id: 'sadu',
    title: { en: 'Sadu Weaving', ar: 'السدو' },
    subtitle: { en: 'Bedouin Legacy', ar: 'إرث البدو' },
    description: {
      en: 'The traditional Bedouin weaving art, recognized by UNESCO, featuring bold geometric patterns that tell stories of desert life.',
      ar: 'فن النسيج البدوي التقليدي، المعترف به من اليونسكو، يتميز بأنماط هندسية جريئة تروي قصص الحياة الصحراوية.'
    },
    image: 'https://images.unsplash.com/photo-1596568959257-5e730de5c6a3?w=800&q=90',
    href: '/heritage/sadu',
    tag: { en: 'UNESCO Heritage', ar: 'تراث اليونسكو' },
  },
]

export default function HeritagePage() {
  const { isRTL } = useLanguage()
  
  return (
    <div className={`min-h-screen bg-white ${isRTL ? 'rtl' : 'ltr'}`}>
      <HeroSection />
      <IntroSection />
      <HeritageGrid />
      <BrandConnectionSection />
      <CTASection />
    </div>
  )
}

function HeroSection() {
  const ref = useRef(null)
  const { isRTL } = useLanguage()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section ref={ref} className="relative h-screen overflow-hidden bg-brand-clayRed">
      <motion.div style={{ y }} className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1548013146-72479768bada?w=1920&q=90"
          alt="UAE Heritage"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-clayRed via-brand-clayRed/50 to-transparent" />
      </motion.div>

      {/* Back Button */}
      <div className={`absolute top-32 ${isRTL ? 'right-6 lg:right-12' : 'left-6 lg:left-12'} z-20`}>
        <motion.div
          initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link
            href="/"
            className={`inline-flex items-center gap-2 font-roboto text-xs uppercase tracking-[0.15em] text-white/70 hover:text-white transition-colors group ${isRTL ? 'flex-row-reverse' : ''}`}
            data-cursor-hover
          >
            <FiArrowLeft className={`w-4 h-4 group-hover:-translate-x-1 transition-transform ${isRTL ? 'rotate-180 group-hover:translate-x-1' : ''}`} />
            {isRTL ? 'العودة للرئيسية' : 'Back to Home'}
          </Link>
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
            <span className="font-roboto text-xs uppercase tracking-[0.5em] text-white/60 mb-6 block">
              {isRTL ? 'تراثنا' : 'Our Heritage'}
            </span>
            <h1 className="font-rozha text-5xl md:text-7xl lg:text-8xl mb-8">
              {isRTL ? 'إرث الإمارات' : 'UAE Heritage'}
            </h1>
            <p className="font-roboto text-lg md:text-xl text-white/80 tracking-wide max-w-2xl mx-auto">
              {isRTL 
                ? 'نحتفل بالحرف التقليدية الإماراتية ونحييها في تصاميمنا المعاصرة، ربطاً بين الماضي والحاضر.'
                : 'Celebrating the traditional crafts of the Emirates and reviving them in our contemporary designs, bridging past and present.'}
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="font-roboto text-[10px] uppercase tracking-[0.3em] text-white/40">
            {isRTL ? 'تصفحي' : 'Scroll'}
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  )
}

function IntroSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { margin: '-20%' })
  const { isRTL } = useLanguage()

  return (
    <section ref={ref} className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className={`max-w-4xl mx-auto text-center ${isRTL ? 'text-right' : ''}`}
        >
          <span className="font-roboto text-xs uppercase tracking-[0.4em] text-brand-clayRed mb-6 block">
            {isRTL ? 'حرف عريقة' : 'Ancient Crafts'}
          </span>
          <h2 className="font-rozha text-4xl md:text-5xl lg:text-6xl text-brand-darkRed mb-8">
            {isRTL ? 'فن توارثته الأجيال' : 'Art Passed Through Generations'}
          </h2>
          <p className="font-roboto text-base md:text-lg text-brand-clayRed/80 tracking-wide leading-relaxed">
            {isRTL 
              ? 'في بنت سعيد، نؤمن بأن الأناقة الحقيقية تنبع من الجذور. تصاميمنا مستوحاة من التراث الإماراتي العريق، حيث ندمج الحرف التقليدية مع الرؤية المعاصرة لنخلق قطعاً تحمل قصصاً من الماضي وتتألق في الحاضر.'
              : 'At Bint Saeed, we believe true elegance stems from roots. Our designs are inspired by the rich Emirati heritage, where we blend traditional crafts with contemporary vision to create pieces that carry stories from the past and shine in the present.'}
          </p>
        </motion.div>
      </div>
    </section>
  )
}

function HeritageGrid() {
  const { isRTL } = useLanguage()

  return (
    <section className="py-16 md:py-24 bg-[#f8f7f5]">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="space-y-24">
          {heritageItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Link href={item.href} className="group block" data-cursor-hover>
                <div className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Image */}
                  <div className={`relative aspect-[4/3] overflow-hidden ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <Image
                      src={item.image}
                      alt={isRTL ? item.title.ar : item.title.en}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                    
                    {/* Tag */}
                    <div className={`absolute top-6 ${isRTL ? 'right-6' : 'left-6'}`}>
                      <span className="px-4 py-2 bg-brand-darkRed text-white font-roboto text-xs uppercase tracking-[0.15em]">
                        {isRTL ? item.tag.ar : item.tag.en}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''} ${isRTL ? 'text-right' : ''}`}>
                    <span className="font-roboto text-xs uppercase tracking-[0.3em] text-brand-clayRed mb-4 block">
                      {isRTL ? item.subtitle.ar : item.subtitle.en}
                    </span>
                    <h3 className="font-rozha text-4xl md:text-5xl text-brand-darkRed mb-6 group-hover:text-brand-dustyBlue transition-colors">
                      {isRTL ? item.title.ar : item.title.en}
                    </h3>
                    <p className="font-roboto text-base text-brand-clayRed/80 tracking-wide leading-relaxed mb-8 max-w-lg">
                      {isRTL ? item.description.ar : item.description.en}
                    </p>
                    <span className={`inline-flex items-center gap-2 font-roboto text-sm uppercase tracking-[0.15em] text-brand-darkRed group-hover:text-brand-dustyBlue transition-colors ${isRTL ? 'flex-row-reverse' : ''}`}>
                      {isRTL ? 'اكتشفي المزيد' : 'Discover More'}
                      <FiArrowRight className={`w-4 h-4 group-hover:translate-x-2 transition-transform ${isRTL ? 'rotate-180 group-hover:-translate-x-2' : ''}`} />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function BrandConnectionSection() {
  const { isRTL } = useLanguage()

  return (
    <section className="py-24 md:py-32 bg-brand-darkRed text-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 40 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={isRTL ? 'text-right' : ''}
          >
            <span className="font-roboto text-xs uppercase tracking-[0.4em] text-brand-stone mb-6 block">
              {isRTL ? 'فلسفتنا' : 'Our Philosophy'}
            </span>
            <h2 className="font-rozha text-4xl md:text-5xl lg:text-6xl mb-8">
              {isRTL ? 'التراث في كل غرزة' : 'Heritage in Every Stitch'}
            </h2>
            <div className="space-y-6 font-roboto text-base text-white/80 tracking-wide leading-relaxed">
              <p>
                {isRTL 
                  ? 'في بنت سعيد، لا نستلهم من التراث فحسب - بل نحييه. نتعاون مع حرفيات إماراتيات لدمج تقنيات التلي والسدو الأصيلة في تصاميمنا.'
                  : 'At Bint Saeed, we don\'t just draw inspiration from heritage – we revive it. We collaborate with Emirati artisans to incorporate authentic Al Talli and Sadu techniques into our designs.'}
              </p>
              <p>
                {isRTL 
                  ? 'كل عباءة تحمل جزءاً من تاريخ الإمارات، مصنوعة بأيدي ماهرة تحمل إرث الأجداد وتقدمه بروح عصرية.'
                  : 'Each abaya carries a piece of Emirates history, crafted by skilled hands that carry the legacy of ancestors and present it with a contemporary spirit.'}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: isRTL ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1558171813-4c088753af8f?w=600&q=90"
                    alt="Heritage Detail"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1596568959257-5e730de5c6a3?w=600&q=90"
                    alt="Craftsmanship"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1590736969955-71cc94901144?w=600&q=90"
                    alt="Traditional Weaving"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function CTASection() {
  const { isRTL } = useLanguage()

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-rozha text-4xl md:text-5xl text-brand-darkRed mb-6">
            {isRTL ? 'اكتشفي مجموعتنا المستوحاة من التراث' : 'Discover Our Heritage-Inspired Collection'}
          </h2>
          <p className="font-roboto text-base text-brand-clayRed/80 tracking-wide mb-10 max-w-2xl mx-auto">
            {isRTL 
              ? 'قطع فريدة تجمع بين أصالة الماضي وأناقة الحاضر.'
              : 'Unique pieces that combine the authenticity of the past with the elegance of the present.'}
          </p>
          <Link
            href="/shop"
            className={`inline-flex items-center gap-3 px-10 py-4 bg-brand-darkRed text-white font-roboto text-sm uppercase tracking-[0.2em] hover:bg-brand-dustyBlue transition-colors ${isRTL ? 'flex-row-reverse' : ''}`}
            data-cursor-hover
          >
            {isRTL ? 'تسوقي الآن' : 'Shop Now'}
            <FiArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
