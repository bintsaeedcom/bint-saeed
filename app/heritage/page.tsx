'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FiArrowRight, FiArrowDown } from 'react-icons/fi'
import { useLanguage } from '@/lib/i18n/LanguageContext'

const heritageItems = [
  {
    id: 'al-talli',
    title: { en: 'Al Talli', ar: 'التلي' },
    subtitle: { en: 'Traditional Embroidery', ar: 'التطريز التقليدي' },
    description: {
      en: 'An ancient embroidery technique inscribed on UNESCO\'s Intangible Cultural Heritage list, Al Talli represents the artistic soul of Emirati women. Each thread carries generations of skill and storytelling.',
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
      en: 'The art of weaving palm fronds into intricate patterns, passed down through generations of Emirati artisans. A dialogue between nature and human hands.',
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
      en: 'The traditional Bedouin weaving art, recognized by UNESCO, featuring bold geometric patterns that tell stories of desert life. Woven into the very fabric of our collections.',
      ar: 'فن النسيج البدوي التقليدي، المعترف به من اليونسكو، يتميز بأنماط هندسية جريئة تروي قصص الحياة الصحراوية.'
    },
    image: 'https://images.unsplash.com/photo-1596568959257-5e730de5c6a3?w=800&q=90',
    href: '/heritage/sadu',
    tag: { en: 'UNESCO Heritage', ar: 'تراث اليونسكو' },
  },
]

function DecorativeCorners({ color = 'dustyBlue' }: { color?: 'dustyBlue' | 'darkRed' | 'stone' }) {
  const c = color === 'dustyBlue' ? 'from-brand-dustyBlue/40' : color === 'darkRed' ? 'from-brand-darkRed/30' : 'from-brand-stone/40'
  return (
    <>
      <motion.div className="absolute top-8 left-8 w-16 h-16 md:w-24 md:h-24 pointer-events-none" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}>
        <div className={`absolute top-0 left-0 w-full h-px bg-gradient-to-r ${c} to-transparent`} />
        <div className={`absolute top-0 left-0 w-px h-full bg-gradient-to-b ${c} to-transparent`} />
      </motion.div>
      <motion.div className="absolute top-8 right-8 w-16 h-16 md:w-24 md:h-24 pointer-events-none" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.1 }}>
        <div className={`absolute top-0 right-0 w-full h-px bg-gradient-to-l ${c} to-transparent`} />
        <div className={`absolute top-0 right-0 w-px h-full bg-gradient-to-b ${c} to-transparent`} />
      </motion.div>
      <motion.div className="absolute bottom-8 left-8 w-16 h-16 md:w-24 md:h-24 pointer-events-none" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.2 }}>
        <div className={`absolute bottom-0 left-0 w-full h-px bg-gradient-to-r ${c} to-transparent`} />
        <div className={`absolute bottom-0 left-0 w-px h-full bg-gradient-to-t ${c} to-transparent`} />
      </motion.div>
      <motion.div className="absolute bottom-8 right-8 w-16 h-16 md:w-24 md:h-24 pointer-events-none" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.3 }}>
        <div className={`absolute bottom-0 right-0 w-full h-px bg-gradient-to-l ${c} to-transparent`} />
        <div className={`absolute bottom-0 right-0 w-px h-full bg-gradient-to-t ${c} to-transparent`} />
      </motion.div>
    </>
  )
}

export default function HeritagePage() {
  const { isRTL } = useLanguage()
  return (
    <div className={`relative overflow-hidden bg-white ${isRTL ? 'rtl' : 'ltr'}`}>
      <HeritageHero />
      <HeritageIntro />
      <HeritageGrid />
      <BrandConnectionSection />
      <HeritageCTA />
    </div>
  )
}

function HeritageHero() {
  const ref = useRef(null)
  const { isRTL } = useLanguage()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2])

  return (
    <section ref={ref} className="relative h-[100svh] w-full overflow-hidden">
      <motion.div style={{ scale }} className="absolute inset-0">
        <Image src="https://images.unsplash.com/photo-1548013146-72479768bada?w=1920&q=90" alt="UAE Heritage" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-[#2a0012]/70 via-[#1a0008]/50 to-[#0d0004]/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_30%,_rgba(146,170,193,0.14)_0%,_transparent_55%)]" />
      </motion.div>
      <DecorativeCorners color="dustyBlue" />
      <motion.div style={{ y, opacity }} className="relative h-full flex items-center justify-center text-center">
        <div className="container mx-auto px-6 lg:px-16">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }} className="max-w-4xl mx-auto">
            <span className="inline-block px-5 py-2.5 backdrop-blur-md bg-white/[0.06] border border-brand-dustyBlue/20 rounded-full text-brand-dustyBlue font-roboto text-[10px] uppercase tracking-[0.4em] mb-8">
              {isRTL ? 'تراثنا' : 'Our Heritage'}
            </span>
            <h1 className="font-rozha text-[12vw] md:text-[8vw] lg:text-[6.5vw] text-white leading-[0.9] mb-8">
              {isRTL ? 'إرث الإمارات' : 'UAE Heritage'}
              <br />
              <span className="text-brand-dustyBlue italic">{isRTL ? 'في كل غرزة' : 'In Every Stitch'}</span>
            </h1>
            <p className="font-roboto text-base md:text-xl text-white/75 tracking-wide max-w-2xl mx-auto leading-relaxed">
              {isRTL ? 'نحتفل بالحرف التقليدية الإماراتية ونحييها في تصاميمنا المعاصرة، ربطاً بين الماضي والحاضر.' : 'Celebrating the traditional crafts of the Emirates and reviving them in our contemporary designs. Where the past meets the present.'}
            </p>
          </motion.div>
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>
          <FiArrowDown className="w-5 h-5 text-brand-dustyBlue/60" />
        </motion.div>
      </motion.div>
    </section>
  )
}

function HeritageIntro() {
  const ref = useRef(null)
  const isInView = useInView(ref, { margin: '-20%' })
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const floatOpacity = useTransform(scrollYProgress, [0, 0.22, 0.78, 1], [0, 1, 1, 0])
  const floatY = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [50, 0, 0, -50])
  const { isRTL } = useLanguage()

  return (
    <section ref={ref} className="relative py-28 md:py-44 bg-white overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-brand-stone/20 via-transparent to-brand-rose/10" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-dustyBlue/30 to-transparent" />
      <motion.div className="absolute inset-0 flex items-center justify-center opacity-[0.04]" style={{ opacity: floatOpacity }}>
        <span className="font-rozha text-[25vw] text-brand-darkRed whitespace-nowrap select-none">{isRTL ? 'تراث' : 'Heritage'}</span>
      </motion.div>
      <div className="relative container mx-auto px-6 lg:px-16">
        <motion.div style={{ y: floatY, opacity: floatOpacity }} className={`max-w-4xl mx-auto ${isRTL ? 'text-right' : 'text-center'}`}>
          <span className="font-roboto text-[10px] uppercase tracking-[0.4em] text-brand-dustyBlue mb-6 block">{isRTL ? 'حرف عريقة' : 'Ancient Crafts'}</span>
          <h2 className="font-rozha text-4xl md:text-5xl lg:text-6xl text-brand-darkRed mb-10 leading-[1.1]">
            {isRTL ? 'فن توارثته الأجيال' : 'Art Passed Through Generations'}
          </h2>
          <div className="backdrop-blur-sm bg-white/50 border border-brand-dustyBlue/15 rounded-2xl p-8 md:p-12 inline-block">
            <p className="font-roboto text-base md:text-lg text-brand-darkRed/80 tracking-wide leading-[1.9]">
              {isRTL
                ? 'في بنت سعيد، نؤمن بأن الأناقة الحقيقية تنبع من الجذور. تصاميمنا مستوحاة من التراث الإماراتي العريق، حيث ندمج الحرف التقليدية مع الرؤية المعاصرة لنخلق قطعاً تحمل قصصاً من الماضي وتتألق في الحاضر.'
                : 'At Bint Saeed, we believe true elegance stems from roots. Our designs are inspired by the rich Emirati heritage — we blend traditional crafts with contemporary vision to create pieces that carry stories from the past and shine in the present.'}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function HeritageGrid() {
  const ref = useRef(null)
  const isInView = useInView(ref, { margin: '-10%' })
  const { isRTL } = useLanguage()

  return (
    <section ref={ref} className="relative py-20 md:py-32 bg-[#faf9f7]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-dustyBlue/25 to-transparent" />
      <div className="container mx-auto px-6 lg:px-16">
        <div className="space-y-28 md:space-y-36">
          {heritageItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 70 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: index * 0.12 }}
            >
              <Link href={item.href} className="group block" data-cursor-hover>
                <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={`relative aspect-[4/3] overflow-hidden rounded-2xl ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <Image src={item.image} alt={isRTL ? item.title.ar : item.title.en} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-darkRed/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className={`absolute top-6 ${isRTL ? 'right-6' : 'left-6'}`}>
                      <span className="px-5 py-2.5 backdrop-blur-md bg-white/20 border border-white/30 rounded-xl text-white font-roboto text-[10px] uppercase tracking-[0.2em]">
                        {isRTL ? item.tag.ar : item.tag.en}
                      </span>
                    </div>
                    <div className={`absolute -bottom-3 ${index % 2 === 1 ? 'right-0 lg:right-auto lg:left-0' : 'left-0'} w-2/3 h-full border-2 border-brand-dustyBlue/20 rounded-2xl -z-10`} />
                  </div>
                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''} ${isRTL ? 'text-right' : ''}`}>
                    <span className="font-roboto text-[10px] uppercase tracking-[0.35em] text-brand-dustyBlue mb-4 block">{isRTL ? item.subtitle.ar : item.subtitle.en}</span>
                    <h3 className="font-rozha text-4xl md:text-5xl lg:text-6xl text-brand-darkRed mb-8 group-hover:text-brand-dustyBlue transition-colors duration-300">
                      {isRTL ? item.title.ar : item.title.en}
                    </h3>
                    <p className="font-roboto text-base text-brand-clayRed/80 tracking-wide leading-[1.85] mb-10 max-w-lg">
                      {isRTL ? item.description.ar : item.description.en}
                    </p>
                    <span className={`inline-flex items-center gap-3 font-roboto text-sm uppercase tracking-[0.15em] text-brand-darkRed group-hover:text-brand-dustyBlue transition-colors ${isRTL ? 'flex-row-reverse' : ''}`}>
                      {isRTL ? 'اكتشفي المزيد' : 'Discover More'}
                      <FiArrowRight className={`w-5 h-5 group-hover:translate-x-2 transition-transform duration-300 ${isRTL ? 'rotate-180 group-hover:-translate-x-2' : ''}`} />
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
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 0.5], [60, -40])
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1])
  const { isRTL } = useLanguage()

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#2a0012] via-[#1a0008] to-[#0d0004]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_40%,_rgba(146,170,193,0.09)_0%,_transparent_60%)]" />
      <DecorativeCorners color="dustyBlue" />
      <div className="relative container mx-auto px-6 lg:px-16 py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div style={{ opacity }} className={`text-white ${isRTL ? 'text-right lg:order-2' : ''}`}>
            <span className="font-roboto text-[10px] uppercase tracking-[0.4em] text-brand-dustyBlue mb-6 block">{isRTL ? 'فلسفتنا' : 'Our Philosophy'}</span>
            <h2 className="font-rozha text-4xl md:text-5xl lg:text-6xl mb-10 leading-[1.05]">
              {isRTL ? 'التراث في كل غرزة' : 'Heritage in'}
              <br />
              <span className="text-brand-dustyBlue">{isRTL ? 'وفي كل قطعة' : 'Every Stitch'}</span>
            </h2>
            <div className="relative max-w-xl">
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-brand-dustyBlue/20 via-transparent to-brand-stone/10 opacity-50" />
              <div className="relative backdrop-blur-sm bg-white/[0.04] rounded-2xl p-8 md:p-10 border border-white/[0.06] space-y-6">
                <p className="font-roboto text-sm text-white/70 tracking-wide leading-[1.9]">
                  {isRTL ? 'في بنت سعيد، لا نستلهم من التراث فحسب — بل نحييه. نتعاون مع حرفيات إماراتيات لدمج تقنيات التلي والسدو الأصيلة في تصاميمنا.' : 'At Bint Saeed, we don\'t just draw inspiration from heritage — we revive it. We collaborate with Emirati artisans to incorporate authentic Al Talli and Sadu techniques into every design.'}
                </p>
                <p className="font-roboto text-sm text-white/70 tracking-wide leading-[1.9]">
                  {isRTL ? 'كل عباءة تحمل جزءاً من تاريخ الإمارات، مصنوعة بأيدي ماهرة تحمل إرث الأجداد وتقدمه بروح عصرية.' : 'Each abaya carries a piece of Emirates history, crafted by skilled hands that carry the legacy of ancestors and present it with a contemporary spirit.'}
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div style={{ y }} className={`relative ${isRTL ? 'lg:order-1' : ''}`}>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative aspect-[3/4] overflow-hidden rounded-xl">
                  <Image src="https://images.unsplash.com/photo-1558171813-4c088753af8f?w=600&q=90" alt="Heritage" fill className="object-cover" />
                  <div className="absolute inset-0 border border-brand-dustyBlue/20 rounded-xl" />
                </div>
              </div>
              <div className="space-y-4 pt-12">
                <div className="relative aspect-square overflow-hidden rounded-xl">
                  <Image src="https://images.unsplash.com/photo-1596568959257-5e730de5c6a3?w=600&q=90" alt="Sadu" fill className="object-cover" />
                  <div className="absolute inset-0 border border-brand-dustyBlue/20 rounded-xl" />
                </div>
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                  <Image src="https://images.unsplash.com/photo-1590736969955-71cc94901144?w=600&q=90" alt="Khous" fill className="object-cover" />
                  <div className="absolute inset-0 border border-brand-dustyBlue/20 rounded-xl" />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 md:right-auto md:-left-4 backdrop-blur-md bg-[#1a0008]/80 border border-brand-dustyBlue/25 px-6 py-4 rounded-xl">
              <span className="font-roboto text-[10px] uppercase tracking-[0.3em] text-brand-dustyBlue">{isRTL ? 'حرف تقليدية' : 'Traditional Crafts'}</span>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="absolute top-1/2 left-8 -translate-y-1/2 hidden xl:block">
        <span className="font-rozha text-8xl text-white/[0.04] select-none" style={{ writingMode: 'vertical-rl' }}>Heritage</span>
      </div>
    </section>
  )
}

function HeritageCTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { margin: '-20%' })
  const { isRTL } = useLanguage()

  return (
    <section ref={ref} className="relative py-28 md:py-44 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-rose/5 via-white to-brand-dustyBlue/5" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-dustyBlue/30 to-transparent" />
      <div className="relative container mx-auto px-6 lg:px-16 text-center">
        <motion.div initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.9 }} className="max-w-2xl mx-auto">
          <span className="font-roboto text-[10px] uppercase tracking-[0.4em] text-brand-dustyBlue mb-6 block">{isRTL ? 'المجموعة' : 'The Collection'}</span>
          <h2 className="font-rozha text-4xl md:text-5xl lg:text-6xl text-brand-darkRed mb-8 leading-[1.1]">
            {isRTL ? 'اكتشفي مجموعتنا المستوحاة من التراث' : 'Discover Our Heritage-Inspired Collection'}
          </h2>
          <p className="font-roboto text-base text-brand-clayRed/80 tracking-wide mb-12 leading-relaxed">
            {isRTL ? 'قطع فريدة تجمع بين أصالة الماضي وأناقة الحاضر.' : 'Unique pieces that combine the authenticity of the past with the elegance of the present.'}
          </p>
          <Link
            href="/shop"
            className={`inline-flex items-center gap-3 px-12 py-5 bg-brand-dustyBlue text-[#1a0008] font-roboto text-sm uppercase tracking-[0.2em] hover:bg-brand-darkRed hover:text-white transition-all duration-500 rounded-xl ${isRTL ? 'flex-row-reverse' : ''}`}
            data-cursor-hover
          >
            {isRTL ? 'تسوقي الآن' : 'Shop Now'}
            <FiArrowRight className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
          </Link>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-dustyBlue/40 via-brand-stone/40 to-brand-dustyBlue/40" />
    </section>
  )
}
