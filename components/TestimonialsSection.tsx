'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiStar, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { useLanguage } from '@/lib/i18n/LanguageContext'

const testimonials = {
  en: [
    {
      name: 'Fatima A.',
      location: 'Dubai, UAE',
      rating: 5,
      text: 'The most beautiful abaya I have ever owned. The attention to detail and quality of fabric is exceptional. Truly a luxury piece.',
      product: 'Midnight Elegance Abaya',
    },
    {
      name: 'Sara K.',
      location: 'Riyadh, KSA',
      rating: 5,
      text: 'Bint Saeed understands what modern women want. Elegant, modest, and absolutely stunning. I receive compliments every time I wear it.',
      product: 'Desert Rose Kaftan',
    },
    {
      name: 'Noura M.',
      location: 'Kuwait City, Kuwait',
      rating: 5,
      text: 'Finally found a brand that combines heritage with contemporary design. The craftsmanship is impeccable.',
      product: 'Al Talli Collection',
    },
    {
      name: 'Aisha H.',
      location: 'Doha, Qatar',
      rating: 5,
      text: 'Exceeded all my expectations. The fit is perfect and the design is unique. Worth every dirham.',
      product: 'Sadu Inspired Abaya',
    },
  ],
  ar: [
    {
      name: 'فاطمة أ.',
      location: 'دبي، الإمارات',
      rating: 5,
      text: 'أجمل عباءة امتلكتها على الإطلاق. الاهتمام بالتفاصيل وجودة القماش استثنائية. قطعة فاخرة حقاً.',
      product: 'عباءة أناقة منتصف الليل',
    },
    {
      name: 'سارة ك.',
      location: 'الرياض، السعودية',
      rating: 5,
      text: 'بنت سعيد تفهم ما تريده المرأة العصرية. أنيقة ومحتشمة ومذهلة. أتلقى الإطراء كلما ارتديتها.',
      product: 'قفطان وردة الصحراء',
    },
    {
      name: 'نورة م.',
      location: 'الكويت',
      rating: 5,
      text: 'أخيراً وجدت علامة تجارية تجمع بين التراث والتصميم المعاصر. الحرفية لا تشوبها شائبة.',
      product: 'مجموعة التلي',
    },
    {
      name: 'عائشة ح.',
      location: 'الدوحة، قطر',
      rating: 5,
      text: 'تجاوزت كل توقعاتي. المقاس مثالي والتصميم فريد. تستحق كل درهم.',
      product: 'عباءة مستوحاة من السدو',
    },
  ],
}

export default function TestimonialsSection() {
  const { language, isRTL } = useLanguage()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  const data = testimonials[language as 'en' | 'ar'] || testimonials.en

  useEffect(() => {
    if (!autoPlay) return
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % data.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [autoPlay, data.length])

  const handlePrev = () => {
    setAutoPlay(false)
    setCurrentIndex((prev) => (prev - 1 + data.length) % data.length)
  }

  const handleNext = () => {
    setAutoPlay(false)
    setCurrentIndex((prev) => (prev + 1) % data.length)
  }

  return (
    <section className="py-24 md:py-32 bg-[#f8f7f5]">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-roboto text-xs uppercase tracking-[0.4em] text-brand-clayRed mb-4 block">
            {isRTL ? 'آراء عملائنا' : 'Client Love'}
          </span>
          <h2 className="font-rozha text-4xl md:text-5xl lg:text-6xl text-brand-darkRed">
            {isRTL ? 'ماذا يقلن عنا' : 'What They Say'}
          </h2>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className={`text-center ${isRTL ? 'text-right' : ''}`}
            >
              {/* Stars */}
              <div className={`flex items-center justify-center gap-1 mb-8 ${isRTL ? 'flex-row-reverse' : ''}`}>
                {[...Array(5)].map((_, i) => (
                  <FiStar
                    key={i}
                    className={`w-5 h-5 ${
                      i < data[currentIndex].rating
                        ? 'fill-brand-darkRed text-brand-darkRed'
                        : 'text-brand-stone'
                    }`}
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-roboto text-xl md:text-2xl text-brand-darkRed tracking-wide leading-relaxed mb-8 max-w-3xl mx-auto">
                "{data[currentIndex].text}"
              </blockquote>

              {/* Author */}
              <div className="space-y-1">
                <p className="font-rozha text-lg text-brand-darkRed">
                  {data[currentIndex].name}
                </p>
                <p className="font-roboto text-xs uppercase tracking-[0.2em] text-brand-clayRed/60">
                  {data[currentIndex].location}
                </p>
                <p className="font-roboto text-xs text-brand-clayRed/40 mt-2">
                  {data[currentIndex].product}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className={`flex items-center justify-center gap-6 mt-12 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <button
              onClick={handlePrev}
              className="w-12 h-12 border border-brand-darkRed/20 rounded-full flex items-center justify-center text-brand-darkRed hover:bg-brand-dustyBlue hover:text-white transition-all"
              data-cursor-hover
            >
              <FiChevronLeft className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {data.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setAutoPlay(false)
                    setCurrentIndex(index)
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentIndex === index
                      ? 'bg-brand-darkRed w-8'
                      : 'bg-brand-darkRed/20'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-12 h-12 border border-brand-darkRed/20 rounded-full flex items-center justify-center text-brand-darkRed hover:bg-brand-dustyBlue hover:text-white transition-all"
              data-cursor-hover
            >
              <FiChevronRight className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
