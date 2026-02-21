'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'
import { useLanguage } from '@/lib/i18n/LanguageContext'

export default function SaduPage() {
  const { isRTL } = useLanguage()
  
  return (
    <div className={`min-h-screen bg-white ${isRTL ? 'rtl' : 'ltr'}`}>
      <HeroSection />
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
  const { isRTL } = useLanguage()
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
              {isRTL ? 'تراث اليونسكو' : 'UNESCO Heritage'}
            </span>
            <h1 className="font-rozha text-5xl md:text-7xl lg:text-8xl mb-6">
              {isRTL ? 'السدو' : 'Sadu Weaving'}
            </h1>
            <p className="font-roboto text-lg md:text-xl text-white/70 tracking-wide">
              {isRTL ? 'فن النسيج البدوي التقليدي' : 'The Traditional Bedouin Weaving Art'}
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
              {isRTL ? 'إرث البادية' : 'Desert Legacy'}
            </span>
            <h2 className="font-rozha text-4xl md:text-5xl text-brand-darkRed mb-8">
              {isRTL ? 'نسيج الصحراء' : 'Fabric of the Desert'}
            </h2>
            <div className="space-y-6 font-roboto text-base text-brand-clayRed/80 tracking-wide leading-relaxed">
              <p>
                {isRTL 
                  ? 'السدو هو فن النسيج البدوي التقليدي الذي مارسته نساء البدو في شبه الجزيرة العربية لآلاف السنين. كان هذا الفن جزءاً أساسياً من حياة البادية، حيث كانت النساء تنسج الخيام والوسائد وحقائب الجمال.'
                  : 'Sadu is the traditional Bedouin weaving art practiced by Bedouin women across the Arabian Peninsula for thousands of years. This art was an essential part of desert life, where women would weave tents, cushions, and camel bags.'}
              </p>
              <p>
                {isRTL 
                  ? 'كل نمط في السدو يحمل معنى ويروي قصة. الخطوط والمثلثات والمربعات ليست مجرد زخارف - بل هي رموز تتحدث عن الطبيعة والحيوانات والحياة في الصحراء.'
                  : 'Each pattern in Sadu carries meaning and tells a story. The lines, triangles, and squares are not mere decorations - they are symbols speaking of nature, animals, and life in the desert.'}
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
  const { isRTL } = useLanguage()

  const patterns = [
    {
      name: { en: 'Al Shajara', ar: 'الشجرة' },
      meaning: { en: 'Tree of Life - Symbolizing growth and strength', ar: 'شجرة الحياة - ترمز للنمو والقوة' },
    },
    {
      name: { en: "Al 'Ayin", ar: 'العين' },
      meaning: { en: 'The Eye - Protection against evil', ar: 'العين - للحماية من الشر' },
    },
    {
      name: { en: 'Al Rakham', ar: 'الرخم' },
      meaning: { en: 'The Vulture - Symbol of wisdom', ar: 'طائر الرخم - رمز الحكمة' },
    },
    {
      name: { en: 'Al Dhulla', ar: 'الضلعة' },
      meaning: { en: 'The Rib - Representing strength', ar: 'الضلعة - تمثل القوة' },
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
            {isRTL ? 'الرموز' : 'Symbols'}
          </span>
          <h2 className="font-rozha text-4xl md:text-5xl text-brand-darkRed">
            {isRTL ? 'أنماط ذات معنى' : 'Patterns with Meaning'}
          </h2>
          <p className="font-roboto text-base text-brand-clayRed/80 tracking-wide mt-4 max-w-2xl mx-auto">
            {isRTL 
              ? 'كل نمط في السدو يحمل رمزية عميقة توارثتها الأجيال'
              : 'Every pattern in Sadu carries deep symbolism passed through generations'}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {patterns.map((pattern, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-8 bg-white border border-brand-stone/30 text-center ${isRTL ? 'text-right' : ''}`}
            >
              <h3 className="font-rozha text-2xl text-brand-darkRed mb-3">
                {isRTL ? pattern.name.ar : pattern.name.en}
              </h3>
              <p className="font-roboto text-sm text-brand-clayRed/80 tracking-wide">
                {isRTL ? pattern.meaning.ar : pattern.meaning.en}
              </p>
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
  const { isRTL } = useLanguage()

  return (
    <section ref={ref} className="py-24 md:py-32 bg-brand-darkRed text-white">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <span className="font-roboto text-xs uppercase tracking-[0.4em] text-brand-stone mb-6 block">
            {isRTL ? 'اعتراف عالمي' : 'Global Recognition'}
          </span>
          <h2 className="font-rozha text-4xl md:text-5xl lg:text-6xl mb-8">
            {isRTL ? 'محفوظ للأجيال' : 'Preserved for Generations'}
          </h2>
          <p className="font-roboto text-base md:text-lg text-white/80 tracking-wide leading-relaxed mb-8">
            {isRTL 
              ? 'في عام 2011، أُدرج السدو على قائمة اليونسكو للتراث الثقافي غير المادي الذي يحتاج إلى صون عاجل. هذا الاعتراف أكد على أهمية الحفاظ على هذا الفن التقليدي ونقله للأجيال القادمة.'
              : 'In 2011, Sadu weaving was inscribed on UNESCO\'s List of Intangible Cultural Heritage in Need of Urgent Safeguarding. This recognition emphasized the importance of preserving this traditional art and passing it to future generations.'}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-6 py-3 bg-white/10 backdrop-blur-sm font-roboto text-xs uppercase tracking-[0.15em]">
              {isRTL ? 'مُدرج 2011' : 'Inscribed 2011'}
            </span>
            <span className="px-6 py-3 bg-white/10 backdrop-blur-sm font-roboto text-xs uppercase tracking-[0.15em]">
              {isRTL ? 'صون عاجل' : 'Urgent Safeguarding'}
            </span>
            <span className="px-6 py-3 bg-white/10 backdrop-blur-sm font-roboto text-xs uppercase tracking-[0.15em]">
              {isRTL ? 'الإمارات • السعودية • الكويت' : 'UAE • KSA • Kuwait'}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function ColorsSection() {
  const { isRTL } = useLanguage()

  const colors = [
    { 
      name: { en: 'Black', ar: 'أسود' }, 
      hex: '#1a1a1a', 
      meaning: { en: 'Made from goat hair, represents Bedouin tents', ar: 'من شعر الماعز، يمثل خيام البدو' } 
    },
    { 
      name: { en: 'White', ar: 'أبيض' }, 
      hex: '#f5f5f5', 
      meaning: { en: 'From sheep wool, symbolizes purity', ar: 'من صوف الأغنام، يرمز للنقاء' } 
    },
    { 
      name: { en: 'Red', ar: 'أحمر' }, 
      hex: '#8e4233', 
      meaning: { en: 'Natural dye from pomegranate, signifies celebration', ar: 'صبغة طبيعية من الرمان، ترمز للاحتفال' } 
    },
    { 
      name: { en: 'Orange', ar: 'برتقالي' }, 
      hex: '#d4804a', 
      meaning: { en: 'From saffron, represents the desert sun', ar: 'من الزعفران، يمثل شمس الصحراء' } 
    },
  ]

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
          <span className="font-roboto text-xs uppercase tracking-[0.4em] text-brand-clayRed mb-6 block">
            {isRTL ? 'اللوحة' : 'The Palette'}
          </span>
          <h2 className="font-rozha text-4xl md:text-5xl text-brand-darkRed">
            {isRTL ? 'ألوان السدو' : 'Colors of Sadu'}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6">
          {colors.map((color, index) => (
            <motion.div
              key={index}
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
              <h3 className="font-rozha text-xl text-brand-darkRed mb-2">
                {isRTL ? color.name.ar : color.name.en}
              </h3>
              <p className="font-roboto text-xs text-brand-clayRed/80 tracking-wide">
                {isRTL ? color.meaning.ar : color.meaning.en}
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
            className={`order-1 lg:order-2 ${isRTL ? 'text-right' : ''}`}
          >
            <span className="font-roboto text-xs uppercase tracking-[0.4em] text-brand-clayRed mb-6 block">
              {isRTL ? 'بنت سعيد × السدو' : 'Bint Saeed × Sadu'}
            </span>
            <h2 className="font-rozha text-4xl md:text-5xl text-brand-darkRed mb-8">
              {isRTL ? 'روح البادية في تصاميمنا' : 'Desert Spirit in Our Designs'}
            </h2>
            <div className="space-y-6 font-roboto text-base text-brand-clayRed/80 tracking-wide leading-relaxed">
              <p>
                {isRTL 
                  ? 'أنماط السدو الجريئة وألوانها الدافئة تلهمنا في بنت سعيد. ندمج الأنماط الهندسية التقليدية في تطريزاتنا، ونستخدم لوحة ألوان مستوحاة من الصحراء في أقمشتنا.'
                  : 'The bold patterns and warm colors of Sadu inspire us at Bint Saeed. We incorporate traditional geometric patterns into our embroidery and use a desert-inspired color palette in our fabrics.'}
              </p>
              <p>
                {isRTL 
                  ? 'بعض قطعنا الحصرية تتضمن شرائط منسوجة يدوياً بتقنية السدو الأصيلة، مصنوعة بالتعاون مع حرفيات بدويات يحافظن على هذا الإرث العريق.'
                  : 'Some of our exclusive pieces feature hand-woven bands using authentic Sadu techniques, crafted in collaboration with Bedouin artisans who preserve this ancient legacy.'}
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
              href="/heritage/khous"
              className="px-6 py-3 border border-brand-darkRed text-brand-darkRed font-roboto text-xs uppercase tracking-[0.15em] hover:bg-brand-dustyBlue hover:text-white transition-colors"
              data-cursor-hover
            >
              {isRTL ? 'الخوص' : 'Khous'}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
