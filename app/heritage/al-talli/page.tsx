'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'
import { useLanguage } from '@/lib/i18n/LanguageContext'

export default function AlTalliPage() {
  const { isRTL } = useLanguage()
  
  return (
    <div className={`min-h-screen bg-white ${isRTL ? 'rtl' : 'ltr'}`}>
      <HeroSection />
      <StorySection />
      <TechniqueSection />
      <UNESCOSection />
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
          src="https://images.unsplash.com/photo-1558171813-4c088753af8f?w=1920&q=90"
          alt="Al Talli Embroidery"
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
              {isRTL ? 'التلي' : 'Al Talli'}
            </h1>
            <p className="font-roboto text-lg md:text-xl text-white/70 tracking-wide">
              {isRTL ? 'فن التطريز الإماراتي التقليدي' : 'The Traditional Emirati Embroidery Art'}
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
              {isRTL ? 'القصة' : 'The Story'}
            </span>
            <h2 className="font-rozha text-4xl md:text-5xl text-brand-darkRed mb-8">
              {isRTL ? 'إرث الجدات' : 'Legacy of Grandmothers'}
            </h2>
            <div className="space-y-6 font-roboto text-base text-brand-clayRed/80 tracking-wide leading-relaxed">
              <p>
                {isRTL 
                  ? 'التلي هو فن تطريز إماراتي عريق يعود إلى قرون من الزمن. كانت النساء الإماراتيات يجتمعن في المجالس لنسج خيوط الفضة والذهب على وسادة صغيرة، محولات الخيوط البسيطة إلى أعمال فنية خالدة.'
                  : 'Al Talli is an ancient Emirati embroidery art dating back centuries. Emirati women would gather in majlis to weave silver and gold threads on a small cushion, transforming simple threads into timeless works of art.'}
              </p>
              <p>
                {isRTL 
                  ? 'يُستخدم التلي لتزيين أطراف الثياب التقليدية، من الكندورة الرجالية إلى ملابس النساء الفاخرة. كل نمط يحمل معنى، وكل غرزة تروي قصة من قصص الصحراء.'
                  : 'Al Talli is used to adorn the edges of traditional garments, from men\'s kandura to women\'s luxurious attire. Each pattern holds meaning, and each stitch tells a story from the desert.'}
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
              src="https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&q=90"
              alt="Al Talli Detail"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function TechniqueSection() {
  const { isRTL } = useLanguage()

  const techniques = [
    {
      title: { en: 'The Cushion', ar: 'الوسادة' },
      description: { 
        en: 'Artisans use a small stuffed cushion called "kajooja" as their base, where bobbins of thread are arranged in intricate patterns.',
        ar: 'تستخدم الحرفيات وسادة صغيرة محشوة تسمى "الكجوجة" كقاعدة، حيث تُرتب بكرات الخيوط في أنماط معقدة.'
      },
    },
    {
      title: { en: 'The Threads', ar: 'الخيوط' },
      description: { 
        en: 'Silver and gold metallic threads are woven alongside cotton threads, creating patterns that shimmer in the light.',
        ar: 'تُنسج الخيوط الفضية والذهبية المعدنية جنباً إلى جنب مع خيوط القطن، مما يخلق أنماطاً تتلألأ في الضوء.'
      },
    },
    {
      title: { en: 'The Patterns', ar: 'الأنماط' },
      description: { 
        en: 'Geometric patterns like triangles, diamonds, and zigzags each carry symbolic meanings, from protection to prosperity.',
        ar: 'الأنماط الهندسية كالمثلثات والمعينات والتعرجات تحمل معانٍ رمزية، من الحماية إلى الازدهار.'
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
            {isRTL ? 'الحرفة' : 'The Craft'}
          </span>
          <h2 className="font-rozha text-4xl md:text-5xl text-brand-darkRed">
            {isRTL ? 'تقنية التلي' : 'Al Talli Technique'}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {techniques.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-8 bg-white border border-brand-stone/30 ${isRTL ? 'text-right' : ''}`}
            >
              <span className="font-rozha text-6xl text-brand-darkRed/10 block mb-4">
                0{index + 1}
              </span>
              <h3 className="font-rozha text-2xl text-brand-darkRed mb-4">
                {isRTL ? item.title.ar : item.title.en}
              </h3>
              <p className="font-roboto text-sm text-brand-clayRed/80 tracking-wide leading-relaxed">
                {isRTL ? item.description.ar : item.description.en}
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
            {isRTL ? 'تراث اليونسكو الثقافي غير المادي' : 'UNESCO Intangible Cultural Heritage'}
          </h2>
          <p className="font-roboto text-base md:text-lg text-white/80 tracking-wide leading-relaxed mb-8">
            {isRTL 
              ? 'في عام 2022، أُدرج التلي على قائمة اليونسكو للتراث الثقافي غير المادي، اعترافاً بأهميته كرمز للهوية الثقافية الإماراتية وإرث الأجداد الذي يستحق الحفاظ عليه للأجيال القادمة.'
              : 'In 2022, Al Talli was inscribed on UNESCO\'s Representative List of the Intangible Cultural Heritage of Humanity, recognizing its significance as a symbol of Emirati cultural identity and ancestral heritage worth preserving for future generations.'}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-6 py-3 bg-white/10 backdrop-blur-sm font-roboto text-xs uppercase tracking-[0.15em]">
              {isRTL ? 'مُدرج 2022' : 'Inscribed 2022'}
            </span>
            <span className="px-6 py-3 bg-white/10 backdrop-blur-sm font-roboto text-xs uppercase tracking-[0.15em]">
              {isRTL ? 'الإمارات العربية المتحدة' : 'United Arab Emirates'}
            </span>
          </div>
        </motion.div>
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
              alt="Bint Saeed Al Talli Collection"
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
              {isRTL ? 'بنت سعيد × التلي' : 'Bint Saeed × Al Talli'}
            </span>
            <h2 className="font-rozha text-4xl md:text-5xl text-brand-darkRed mb-8">
              {isRTL ? 'التراث في تصاميمنا' : 'Heritage in Our Designs'}
            </h2>
            <div className="space-y-6 font-roboto text-base text-brand-clayRed/80 tracking-wide leading-relaxed">
              <p>
                {isRTL 
                  ? 'في بنت سعيد، نحيي فن التلي من خلال دمج تطريزاته الرائعة في تصاميمنا المعاصرة. نتعاون مع حرفيات إماراتيات ماهرات للحفاظ على أصالة الحرفة.'
                  : 'At Bint Saeed, we revive the art of Al Talli by incorporating its exquisite embroidery into our contemporary designs. We collaborate with skilled Emirati artisans to preserve the authenticity of the craft.'}
              </p>
              <p>
                {isRTL 
                  ? 'تجدين تفاصيل التلي في أطراف عباءاتنا، وأكمام قفاطيننا، وتفاصيل فساتيننا - لمسة من التراث في كل قطعة.'
                  : 'You\'ll find Al Talli details on the edges of our abayas, the sleeves of our kaftans, and the details of our dresses - a touch of heritage in every piece.'}
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
              href="/heritage/khous"
              className="px-6 py-3 border border-brand-darkRed text-brand-darkRed font-roboto text-xs uppercase tracking-[0.15em] hover:bg-brand-dustyBlue hover:text-white transition-colors"
              data-cursor-hover
            >
              {isRTL ? 'الخوص' : 'Khous'}
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
