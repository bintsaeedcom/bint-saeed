'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { FiArrowLeft, FiInfo, FiCheck } from 'react-icons/fi'
import { useLanguage } from '@/lib/i18n/LanguageContext'

const sizeData = {
  headers: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
  measurements: [
    { label: { en: 'Length', ar: 'الطول' }, values: ['50-52', '54-56', '56-58', '58-60', '59-61', '60-62'] },
    { label: { en: 'Bust', ar: 'الصدر' }, values: ['19-20', '20-22', '22-24', '24-25', '25-26', '26-28'] },
    { label: { en: 'Waist', ar: 'الخصر' }, values: ['18-19', '19-21', '21-23', '23-24', '24-25', '25-27'] },
    { label: { en: 'Bottom Width', ar: 'عرض الأسفل' }, values: ['40', '42', '52', '56', '60', '64'] },
    { label: { en: 'Shoulder', ar: 'الكتف' }, values: ['13.5-14', '14-14.5', '15-16', '16-16.5', '16-17', '17-18'] },
    { label: { en: 'Sleeve', ar: 'الكم' }, values: ['22', '23.5', '24', '24.5', '25', '25.5'] },
    { label: { en: 'Sleeve Width', ar: 'عرض الكم' }, values: ['9', '9.5', '10', '10.5', '11', '12'] },
    { label: { en: 'Arm Hole', ar: 'فتحة الذراع' }, values: ['8.5', '8.5', '9.5', '10', '11', '12.5'] },
  ],
}

const howToMeasure = {
  en: [
    { part: 'Length', instruction: 'Measure from the highest point of the shoulder down to where you want the abaya to end.' },
    { part: 'Bust', instruction: 'Measure around the fullest part of your chest, keeping the tape horizontal.' },
    { part: 'Waist', instruction: 'Measure around the narrowest part of your natural waistline.' },
    { part: 'Shoulder', instruction: 'Measure from one shoulder point to the other across the back.' },
    { part: 'Sleeve', instruction: 'Measure from the shoulder point to the wrist bone.' },
  ],
  ar: [
    { part: 'الطول', instruction: 'قيسي من أعلى نقطة في الكتف إلى حيث تريدين أن تنتهي العباءة.' },
    { part: 'الصدر', instruction: 'قيسي حول أعرض جزء من صدرك مع إبقاء الشريط أفقياً.' },
    { part: 'الخصر', instruction: 'قيسي حول أضيق جزء من خصرك الطبيعي.' },
    { part: 'الكتف', instruction: 'قيسي من نقطة كتف إلى الأخرى عبر الظهر.' },
    { part: 'الكم', instruction: 'قيسي من نقطة الكتف إلى عظمة الرسغ.' },
  ],
}

export default function SizeGuidePage() {
  const { isRTL } = useLanguage()
  
  return (
    <div className={`min-h-screen bg-white ${isRTL ? 'rtl' : 'ltr'}`}>
      <HeroSection />
      <SizeChartSection />
      <HowToMeasureSection />
      <CustomSizeSection />
      <NeedHelpSection />
    </div>
  )
}

function HeroSection() {
  const { isRTL } = useLanguage()

  return (
    <section className="relative pt-32 pb-16 md:pb-20 bg-brand-stone/10">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            href="/shop"
            className={`inline-flex items-center gap-2 font-roboto text-xs uppercase tracking-[0.15em] text-brand-clayRed hover:text-brand-dustyBlue transition-colors group ${isRTL ? 'flex-row-reverse' : ''}`}
            data-cursor-hover
          >
            <FiArrowLeft className={`w-4 h-4 group-hover:-translate-x-1 transition-transform ${isRTL ? 'rotate-180 group-hover:translate-x-1' : ''}`} />
            {isRTL ? 'العودة للتسوق' : 'Back to Shop'}
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={isRTL ? 'text-right' : ''}
        >
          <span className="font-roboto text-xs uppercase tracking-[0.4em] text-brand-clayRed mb-4 block">
            {isRTL ? 'دليل المقاسات' : 'Fit Guide'}
          </span>
          <h1 className="font-rozha text-5xl md:text-6xl lg:text-7xl text-brand-darkRed mb-6">
            {isRTL ? 'دليل المقاسات' : 'Size Guide'}
          </h1>
          <p className="font-roboto text-base md:text-lg text-brand-clayRed/80 tracking-wide max-w-2xl">
            {isRTL 
              ? 'جميع القياسات بالبوصة. للحصول على أفضل ملاءمة، قارني قياساتك مع الجدول أدناه.'
              : 'All measurements are in inches. For the best fit, compare your measurements with the chart below.'}
          </p>
        </motion.div>
      </div>
    </section>
  )
}

function SizeChartSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-10%' })
  const { isRTL } = useLanguage()
  const [selectedSize, setSelectedSize] = useState<string | null>(null)

  return (
    <section ref={ref} className="py-16 md:py-24">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Section Title */}
          <div className={`mb-12 ${isRTL ? 'text-right' : ''}`}>
            <h2 className="font-rozha text-3xl md:text-4xl text-brand-darkRed mb-4">
              {isRTL ? 'مقاسات العباءة - قصة A' : 'A-Cut Abaya Size Chart'}
            </h2>
            <p className="font-roboto text-sm text-brand-clayRed/70 tracking-wide">
              {isRTL ? 'انقري على مقاس لتمييزه' : 'Click on a size to highlight it'}
            </p>
          </div>

          {/* Size Chart Table */}
          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px]">
              <thead>
                <tr>
                  <th className={`py-4 px-4 bg-brand-darkRed text-white font-roboto text-xs uppercase tracking-[0.15em] ${isRTL ? 'text-right' : 'text-left'}`}>
                    {isRTL ? 'القياس' : 'Measurement'}
                  </th>
                  {sizeData.headers.map((size) => (
                    <th
                      key={size}
                      onClick={() => setSelectedSize(selectedSize === size ? null : size)}
                      className={`py-4 px-4 font-roboto text-xs uppercase tracking-[0.15em] cursor-pointer transition-all ${
                        selectedSize === size
                          ? 'bg-brand-darkRed text-white'
                          : 'bg-brand-stone/20 text-brand-darkRed hover:bg-brand-dustyBlue/30'
                      }`}
                      data-cursor-hover
                    >
                      <div className="flex flex-col items-center gap-1">
                        <span>{size}</span>
                        {selectedSize === size && <FiCheck className="w-3 h-3" />}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {sizeData.measurements.map((row, rowIndex) => (
                  <motion.tr
                    key={row.label.en}
                    initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: rowIndex * 0.05 }}
                    className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-brand-stone/5'}
                  >
                    <td className={`py-4 px-4 font-roboto text-sm font-medium text-brand-darkRed ${isRTL ? 'text-right' : ''}`}>
                      {isRTL ? row.label.ar : row.label.en}
                    </td>
                    {row.values.map((value, colIndex) => (
                      <td
                        key={colIndex}
                        className={`py-4 px-4 text-center font-roboto text-sm transition-all ${
                          selectedSize === sizeData.headers[colIndex]
                            ? 'bg-brand-darkRed/10 text-brand-darkRed font-medium'
                            : 'text-brand-clayRed'
                        }`}
                      >
                        {value}
                      </td>
                    ))}
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Unit Note */}
          <div className={`mt-6 flex items-center gap-2 ${isRTL ? 'flex-row-reverse justify-end' : ''}`}>
            <FiInfo className="w-4 h-4 text-brand-clayRed/50" />
            <p className="font-roboto text-xs text-brand-clayRed/50 tracking-wide">
              {isRTL ? 'جميع القياسات بالبوصة' : 'All measurements are in inches'}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function HowToMeasureSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-10%' })
  const { language, isRTL } = useLanguage()

  const instructions = howToMeasure[language as 'en' | 'ar'] || howToMeasure.en

  return (
    <section ref={ref} className="py-16 md:py-24 bg-brand-clayRed text-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 40 : -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className={isRTL ? 'text-right order-2 lg:order-1' : 'order-2 lg:order-1'}
          >
            <span className="font-roboto text-xs uppercase tracking-[0.4em] text-white/60 mb-4 block">
              {isRTL ? 'كيفية القياس' : 'How To Measure'}
            </span>
            <h2 className="font-rozha text-3xl md:text-4xl lg:text-5xl mb-10">
              {isRTL ? 'قيسي نفسك بدقة' : 'Measure Yourself Accurately'}
            </h2>

            <div className="space-y-6">
              {instructions.map((item, index) => (
                <motion.div
                  key={item.part}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}
                >
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-rozha text-lg">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="font-roboto font-medium text-white mb-1">{item.part}</h3>
                    <p className="font-roboto text-sm text-white/70 tracking-wide leading-relaxed">
                      {item.instruction}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -40 : 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-[3/4] order-1 lg:order-2"
          >
            <Image
              src="https://images.unsplash.com/photo-1590003511523-9c5e5e60a3b1?w=800&q=90"
              alt="How to measure"
              fill
              className="object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-clayRed/30 to-transparent rounded-lg" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function CustomSizeSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-10%' })
  const { isRTL } = useLanguage()

  return (
    <section ref={ref} className="py-16 md:py-24 bg-brand-stone/10">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="w-20 h-20 bg-brand-darkRed/10 rounded-full flex items-center justify-center mx-auto mb-8">
            <span className="font-rozha text-4xl text-brand-darkRed">✂</span>
          </div>
          
          <h2 className="font-rozha text-3xl md:text-4xl lg:text-5xl text-brand-darkRed mb-6">
            {isRTL ? 'الطول حسب الطلب' : 'Length Per Request'}
          </h2>
          
          <p className="font-roboto text-base md:text-lg text-brand-clayRed/80 tracking-wide leading-relaxed mb-8">
            {isRTL 
              ? 'نقدم خدمة تعديل الطول حسب طلبك. أضيفي طولك المفضل في ملاحظات الطلب وسنصمم عباءتك خصيصاً لك.'
              : 'We offer custom length adjustments upon request. Add your preferred length in the order notes, and we\'ll tailor your abaya specifically for you.'}
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              { 
                title: isRTL ? 'أخبرينا بطولك' : 'Tell Us Your Height',
                desc: isRTL ? 'أضيفي طولك في ملاحظات الطلب' : 'Add your height in order notes',
              },
              { 
                title: isRTL ? 'نصمم لك' : 'We Customize',
                desc: isRTL ? 'نعدل الطول حسب طلبك' : 'We adjust the length to your request',
              },
              { 
                title: isRTL ? 'ملاءمة مثالية' : 'Perfect Fit',
                desc: isRTL ? 'عباءة مصممة خصيصاً لك' : 'An abaya tailored just for you',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`p-6 bg-white border border-brand-stone/20 ${isRTL ? 'text-right' : ''}`}
              >
                <span className="font-rozha text-4xl text-brand-darkRed/20 block mb-2">
                  0{index + 1}
                </span>
                <h3 className="font-roboto font-medium text-brand-darkRed mb-2">
                  {item.title}
                </h3>
                <p className="font-roboto text-xs text-brand-clayRed/70 tracking-wide">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <p className="font-roboto text-sm text-brand-clayRed/60 tracking-wide">
            {isRTL 
              ? 'ملاحظة: التعديلات المخصصة غير قابلة للإرجاع'
              : 'Note: Custom alterations are non-returnable'}
          </p>
        </motion.div>
      </div>
    </section>
  )
}

function NeedHelpSection() {
  const { isRTL } = useLanguage()

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className={`flex flex-col md:flex-row items-center justify-between gap-8 p-8 md:p-12 bg-brand-darkRed rounded-2xl ${isRTL ? 'md:flex-row-reverse' : ''}`}>
          <div className={isRTL ? 'text-right' : ''}>
            <h3 className="font-rozha text-2xl md:text-3xl text-white mb-2">
              {isRTL ? 'تحتاجين مساعدة في المقاس؟' : 'Need Help With Sizing?'}
            </h3>
            <p className="font-roboto text-sm text-white/70 tracking-wide">
              {isRTL 
                ? 'فريقنا متاح للمساعدة في اختيار المقاس المثالي'
                : 'Our team is available to help you find your perfect fit'}
            </p>
          </div>
          <div className={`flex flex-col sm:flex-row gap-4 ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
            <a
              href="https://wa.me/971XXXXXXXXX?text=Hi%20Bint%20Saeed!%20I%20need%20help%20with%20sizing."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#25D366] text-white font-roboto text-xs uppercase tracking-[0.15em] hover:bg-[#128C7E] transition-colors text-center"
              data-cursor-hover
            >
              {isRTL ? 'واتساب' : 'WhatsApp Us'}
            </a>
            <Link
              href="/contact"
              className="px-8 py-4 bg-white text-brand-darkRed font-roboto text-xs uppercase tracking-[0.15em] hover:bg-brand-dustyBlue transition-colors text-center"
              data-cursor-hover
            >
              {isRTL ? 'تواصلي معنا' : 'Contact Us'}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
