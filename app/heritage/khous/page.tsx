'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'
import { useLanguage } from '@/lib/i18n/LanguageContext'

export default function KhousPage() {
  const { isRTL } = useLanguage()
  
  return (
    <div className={`min-h-screen bg-white ${isRTL ? 'rtl' : 'ltr'}`}>
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
  const ref = useRef(null)
  const { isRTL } = useLanguage()
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
          src="https://images.unsplash.com/photo-1590736969955-71cc94901144?w=1920&q=90"
          alt="Khous Palm Weaving"
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-clayRed via-brand-clayRed/60 to-transparent" />
      </motion.div>

      {/* Back Button */}
      <div className={`absolute top-32 ${isRTL ? 'right-6 lg:right-12' : 'left-6 lg:left-12'} z-20`}>
        <motion.div
          initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link
            href="/heritage"
            className={`inline-flex items-center gap-2 font-roboto text-xs uppercase tracking-[0.15em] text-white/70 hover:text-white transition-colors group ${isRTL ? 'flex-row-reverse' : ''}`}
            data-cursor-hover
          >
            <FiArrowLeft className={`w-4 h-4 group-hover:-translate-x-1 transition-transform ${isRTL ? 'rotate-180 group-hover:translate-x-1' : ''}`} />
            {isRTL ? 'العودة للتراث' : 'Back to Heritage'}
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
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm font-roboto text-xs uppercase tracking-[0.3em] text-white/80 mb-8">
              {isRTL ? 'حرفة تقليدية' : 'Traditional Craft'}
            </span>
            <h1 className="font-rozha text-5xl md:text-7xl lg:text-8xl mb-6">
              {isRTL ? 'الخوص' : 'Khous Weaving'}
            </h1>
            <p className="font-roboto text-lg md:text-xl text-white/70 tracking-wide">
              {isRTL ? 'فن نسج سعف النخيل' : 'The Art of Palm Frond Weaving'}
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
  const { isRTL } = useLanguage()

  return (
    <section ref={ref} className="py-24 md:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 40 : -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className={isRTL ? 'text-right' : ''}
          >
            <span className="font-roboto text-xs uppercase tracking-[0.4em] text-brand-clayRed mb-6 block">
              {isRTL ? 'شجرة الحياة' : 'Tree of Life'}
            </span>
            <h2 className="font-rozha text-4xl md:text-5xl text-brand-darkRed mb-8">
              {isRTL ? 'هدية النخلة' : 'Gift of the Palm'}
            </h2>
            <div className="space-y-6 font-roboto text-base text-brand-clayRed/80 tracking-wide leading-relaxed">
              <p>
                {isRTL 
                  ? 'النخلة في الثقافة الإماراتية ليست مجرد شجرة - إنها شجرة الحياة. لقرون، اعتمد أهل الإمارات على النخلة في كل شيء: من التمر للغذاء، إلى الجذع للبناء، وسعف النخيل للحرف اليدوية.'
                  : 'In Emirati culture, the palm tree is not just a tree - it\'s the tree of life. For centuries, Emiratis relied on the palm for everything: from dates for food, to trunks for building, and palm fronds for handicrafts.'}
              </p>
              <p>
                {isRTL 
                  ? 'الخوص، أو "السفيفة" كما يُسمى أيضاً، هو فن نسج سعف النخيل المجففة والمعالجة لصنع السلال والحصير والمراوح وغيرها من المنتجات اليومية التي كانت ضرورية لحياة الصحراء.'
                  : 'Khous, also known as "Al Safeefah", is the art of weaving dried and treated palm fronds to create baskets, mats, fans, and other everyday items that were essential for desert life.'}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: isRTL ? -40 : 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-[4/5] overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1590736969955-71cc94901144?w=800&q=90"
              alt="Palm Frond Weaving"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function ProcessSection() {
  const { isRTL } = useLanguage()

  const steps = [
    {
      title: { en: 'Harvesting', ar: 'الحصاد' },
      description: { 
        en: 'Fresh palm fronds are carefully selected and cut from the tree, choosing the young, flexible leaves ideal for weaving.',
        ar: 'تُختار سعف النخيل الطازجة بعناية وتُقطع من الشجرة، مع اختيار الأوراق الصغيرة المرنة المثالية للنسج.'
      },
    },
    {
      title: { en: 'Preparation', ar: 'التحضير' },
      description: { 
        en: 'The fronds are dried in the sun, then soaked in water to make them pliable. Some are dyed with natural colors from saffron or pomegranate.',
        ar: 'تُجفف السعف في الشمس، ثم تُنقع في الماء لجعلها مرنة. يُصبغ بعضها بألوان طبيعية من الزعفران أو الرمان.'
      },
    },
    {
      title: { en: 'Weaving', ar: 'النسج' },
      description: { 
        en: 'Using ancient patterns passed through generations, artisans interlace the fronds to create functional and beautiful items.',
        ar: 'باستخدام أنماط قديمة توارثتها الأجيال، تنسج الحرفيات السعف لإنشاء منتجات وظيفية وجميلة.'
      },
    },
  ]

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
          <span className="font-roboto text-xs uppercase tracking-[0.4em] text-brand-clayRed mb-6 block">
            {isRTL ? 'العملية' : 'The Process'}
          </span>
          <h2 className="font-rozha text-4xl md:text-5xl text-brand-darkRed">
            {isRTL ? 'من السعف إلى الفن' : 'From Frond to Art'}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-8 bg-white border border-brand-stone/30 ${isRTL ? 'text-right' : ''}`}
            >
              <span className="font-rozha text-6xl text-brand-clayRed/20 block mb-4">
                0{index + 1}
              </span>
              <h3 className="font-rozha text-2xl text-brand-darkRed mb-4">
                {isRTL ? step.title.ar : step.title.en}
              </h3>
              <p className="font-roboto text-sm text-brand-clayRed/80 tracking-wide leading-relaxed">
                {isRTL ? step.description.ar : step.description.en}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProductsSection() {
  const { isRTL } = useLanguage()

  const products = [
    { name: { en: 'Baskets', ar: 'السلال' }, use: { en: 'Storage & decoration', ar: 'للتخزين والديكور' } },
    { name: { en: 'Mats', ar: 'الحصير' }, use: { en: 'Floor coverings', ar: 'لتغطية الأرضيات' } },
    { name: { en: 'Fans', ar: 'المهفات' }, use: { en: 'Cooling in the heat', ar: 'للتبريد في الحر' } },
    { name: { en: 'Food Covers', ar: 'أغطية الطعام' }, use: { en: 'Protecting food', ar: 'لحماية الطعام' } },
  ]

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
          <span className="font-roboto text-xs uppercase tracking-[0.4em] text-brand-stone mb-6 block">
            {isRTL ? 'المنتجات' : 'Products'}
          </span>
          <h2 className="font-rozha text-4xl md:text-5xl">
            {isRTL ? 'ما يُصنع من الخوص' : 'What Khous Creates'}
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-6 bg-white/10 backdrop-blur-sm text-center ${isRTL ? 'text-right' : ''}`}
            >
              <h3 className="font-rozha text-xl mb-2">
                {isRTL ? product.name.ar : product.name.en}
              </h3>
              <p className="font-roboto text-xs text-white/60 tracking-wide">
                {isRTL ? product.use.ar : product.use.en}
              </p>
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
  const { isRTL } = useLanguage()

  return (
    <section ref={ref} className="py-24 md:py-32">
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
              alt="Bint Saeed Khous Inspired Design"
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: isRTL ? -40 : 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`order-1 lg:order-2 ${isRTL ? 'text-right' : ''}`}
          >
            <span className="font-roboto text-xs uppercase tracking-[0.4em] text-brand-clayRed mb-6 block">
              {isRTL ? 'بنت سعيد × الخوص' : 'Bint Saeed × Khous'}
            </span>
            <h2 className="font-rozha text-4xl md:text-5xl text-brand-darkRed mb-8">
              {isRTL ? 'أنماط النخيل في تصاميمنا' : 'Palm Patterns in Our Designs'}
            </h2>
            <div className="space-y-6 font-roboto text-base text-brand-clayRed/80 tracking-wide leading-relaxed">
              <p>
                {isRTL 
                  ? 'نستلهم من أنماط الخوص الهندسية في تطريزاتنا وتفاصيل تصاميمنا. النسيج المتشابك الذي يميز الخوص يظهر في بطانات عباءاتنا وإكسسواراتنا.'
                  : 'We draw inspiration from the geometric patterns of Khous in our embroidery and design details. The interlaced weaving that characterizes Khous appears in our abaya linings and accessories.'}
              </p>
              <p>
                {isRTL 
                  ? 'كما نتعاون مع حرفيات محليات لإنتاج إكسسوارات مصنوعة يدوياً من سعف النخيل، تُكمل مجموعاتنا وتحمل روح التراث الإماراتي.'
                  : 'We also collaborate with local artisans to produce handcrafted accessories made from palm fronds, complementing our collections and carrying the spirit of Emirati heritage.'}
              </p>
            </div>
            <Link
              href="/shop"
              className={`inline-flex items-center gap-3 px-8 py-4 bg-brand-darkRed text-white font-roboto text-sm uppercase tracking-[0.15em] hover:bg-brand-dustyBlue transition-colors mt-8 ${isRTL ? 'flex-row-reverse' : ''}`}
              data-cursor-hover
            >
              {isRTL ? 'تسوقي المجموعة' : 'Shop the Collection'}
              <FiArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function CTASection() {
  const { isRTL } = useLanguage()

  return (
    <section className="py-16 bg-brand-stone/20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className={`flex flex-col md:flex-row items-center justify-between gap-8 ${isRTL ? 'md:flex-row-reverse' : ''}`}>
          <div className={isRTL ? 'text-right' : ''}>
            <h3 className="font-rozha text-2xl md:text-3xl text-brand-darkRed mb-2">
              {isRTL ? 'اكتشفي المزيد من تراثنا' : 'Explore More of Our Heritage'}
            </h3>
            <p className="font-roboto text-sm text-brand-clayRed/70 tracking-wide">
              {isRTL ? 'تعرفي على حرف إماراتية تقليدية أخرى' : 'Learn about other traditional Emirati crafts'}
            </p>
          </div>
          <div className={`flex gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <Link
              href="/heritage/al-talli"
              className="px-6 py-3 border border-brand-darkRed text-brand-darkRed font-roboto text-xs uppercase tracking-[0.15em] hover:bg-brand-dustyBlue hover:text-white transition-colors"
              data-cursor-hover
            >
              {isRTL ? 'التلي' : 'Al Talli'}
            </Link>
            <Link
              href="/heritage/sadu"
              className="px-6 py-3 border border-brand-darkRed text-brand-darkRed font-roboto text-xs uppercase tracking-[0.15em] hover:bg-brand-dustyBlue hover:text-white transition-colors"
              data-cursor-hover
            >
              {isRTL ? 'السدو' : 'Sadu'}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
