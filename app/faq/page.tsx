'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { FiArrowLeft, FiChevronDown, FiMail } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa6'
import { useLanguage } from '@/lib/i18n/LanguageContext'

const faqData = {
  en: {
    title: 'Frequently Asked Questions',
    subtitle: 'Find answers to common questions',
    categories: [
      {
        name: 'Orders & Shipping',
        questions: [
          {
            q: 'How long does delivery take?',
            a: 'UAE: 1-2 business days (Express) or 2-3 business days (Standard). GCC: 3-5 business days. International: 7-14 business days.'
          },
          {
            q: 'Do you offer free shipping?',
            a: 'Yes! We offer complimentary shipping on all orders over 500 AED within the UAE and GCC region.'
          },
          {
            q: 'Can I track my order?',
            a: 'Absolutely. Once your order ships, you will receive a tracking number via email and SMS to monitor your delivery.'
          },
          {
            q: 'Do you ship internationally?',
            a: 'Yes, we ship worldwide. International orders may be subject to customs duties and taxes, which are the responsibility of the customer.'
          },
        ]
      },
      {
        name: 'Returns & Exchanges',
        questions: [
          {
            q: 'What is your return policy?',
            a: 'We accept returns within 14 days of delivery. Items must be unworn, unwashed, with original tags attached. Custom-made pieces are final sale.'
          },
          {
            q: 'How do I initiate a return?',
            a: 'Contact us at contact@bintsaeed.com with your order number. We will provide you with return instructions and a prepaid shipping label for UAE orders.'
          },
          {
            q: 'When will I receive my refund?',
            a: 'Refunds are processed within 14 business days of receiving your return. The amount will be credited to your original payment method.'
          },
        ]
      },
      {
        name: 'Sizing & Fit',
        questions: [
          {
            q: 'How do I find my size?',
            a: 'Please refer to our Size Guide for detailed measurements. If you are between sizes, we recommend sizing up for a more comfortable fit.'
          },
          {
            q: 'Do you offer custom sizing?',
            a: 'Yes! We offer made-to-measure service. Simply add your custom length and any special notes when ordering, or contact us for personalized assistance.'
          },
          {
            q: 'Can I alter my purchase?',
            a: 'We offer alteration services for an additional fee. Please contact us within 7 days of receiving your order to arrange alterations.'
          },
        ]
      },
      {
        name: 'Payment & Security',
        questions: [
          {
            q: 'What payment methods do you accept?',
            a: 'We accept all major credit cards (Visa, Mastercard, American Express), Apple Pay, and bank transfers for UAE customers.'
          },
          {
            q: 'Is my payment information secure?',
            a: 'Yes, all transactions are processed through Stripe, a PCI-DSS compliant payment processor. We never store your card details.'
          },
          {
            q: 'Do you offer payment plans?',
            a: 'Currently, we accept full payment at checkout. We are working on introducing payment plan options soon.'
          },
        ]
      },
    ],
    contact: {
      title: 'Still have questions?',
      description: 'Our customer care team is here to help',
    }
  },
  ar: {
    title: 'الأسئلة الشائعة',
    subtitle: 'اعثري على إجابات للأسئلة المتكررة',
    categories: [
      {
        name: 'الطلبات والشحن',
        questions: [
          {
            q: 'كم يستغرق التوصيل؟',
            a: 'الإمارات: 1-2 يوم عمل (سريع) أو 2-3 أيام عمل (عادي). الخليج: 3-5 أيام عمل. دولياً: 7-14 يوم عمل.'
          },
          {
            q: 'هل تقدمون شحن مجاني؟',
            a: 'نعم! نقدم شحن مجاني لجميع الطلبات فوق 500 درهم داخل الإمارات ودول الخليج.'
          },
          {
            q: 'هل يمكنني تتبع طلبي؟',
            a: 'بالتأكيد. بمجرد شحن طلبك، ستتلقين رقم تتبع عبر البريد الإلكتروني والرسائل النصية.'
          },
          {
            q: 'هل تشحنون دولياً؟',
            a: 'نعم، نشحن لجميع أنحاء العالم. قد تخضع الطلبات الدولية لرسوم جمركية وضرائب.'
          },
        ]
      },
      {
        name: 'الإرجاع والاستبدال',
        questions: [
          {
            q: 'ما هي سياسة الإرجاع؟',
            a: 'نقبل الإرجاع خلال 14 يوماً من التوصيل. يجب أن تكون القطع غير ملبوسة وغير مغسولة مع البطاقات الأصلية. القطع المفصلة لا ترد.'
          },
          {
            q: 'كيف أبدأ عملية الإرجاع؟',
            a: 'تواصلي معنا على contact@bintsaeed.com مع رقم طلبك. سنوفر لك تعليمات الإرجاع وبطاقة شحن مدفوعة مسبقاً للطلبات داخل الإمارات.'
          },
          {
            q: 'متى سأستلم المبلغ المسترد؟',
            a: 'تتم معالجة المبالغ المستردة خلال 14 يوم عمل من استلام الإرجاع. سيتم إرجاع المبلغ لطريقة الدفع الأصلية.'
          },
        ]
      },
      {
        name: 'المقاسات والقياس',
        questions: [
          {
            q: 'كيف أجد مقاسي؟',
            a: 'يرجى الرجوع إلى دليل المقاسات للحصول على قياسات تفصيلية. إذا كنتِ بين مقاسين، ننصح باختيار المقاس الأكبر.'
          },
          {
            q: 'هل تقدمون مقاسات مخصصة؟',
            a: 'نعم! نقدم خدمة التفصيل حسب الطلب. أضيفي طولك المخصص وأي ملاحظات خاصة عند الطلب.'
          },
          {
            q: 'هل يمكن تعديل مشترياتي؟',
            a: 'نقدم خدمات التعديل مقابل رسوم إضافية. تواصلي معنا خلال 7 أيام من استلام طلبك.'
          },
        ]
      },
      {
        name: 'الدفع والأمان',
        questions: [
          {
            q: 'ما طرق الدفع المقبولة؟',
            a: 'نقبل جميع البطاقات الائتمانية الرئيسية (فيزا، ماستركارد، أمريكان إكسبريس)، أبل باي، والتحويلات البنكية.'
          },
          {
            q: 'هل معلومات الدفع آمنة؟',
            a: 'نعم، جميع المعاملات تتم عبر Stripe، معالج دفع متوافق مع معايير PCI-DSS. لا نخزن بيانات بطاقتك أبداً.'
          },
          {
            q: 'هل تقدمون خطط دفع؟',
            a: 'حالياً، نقبل الدفع الكامل عند الطلب. نعمل على تقديم خيارات الدفع بالتقسيط قريباً.'
          },
        ]
      },
    ],
    contact: {
      title: 'لا زلتِ لديك أسئلة؟',
      description: 'فريق خدمة العملاء هنا للمساعدة',
    }
  }
}

export default function FAQPage() {
  const { language, t, isRTL } = useLanguage()
  const [openCategory, setOpenCategory] = useState<number | null>(0)
  const [openQuestion, setOpenQuestion] = useState<string | null>(null)
  
  const data = faqData[language as 'en' | 'ar'] || faqData.en

  return (
    <div className={`min-h-screen pt-32 pb-20 bg-white ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            href="/"
            className={`inline-flex items-center gap-2 font-roboto text-sm uppercase tracking-[0.15em] text-brand-clayRed hover:text-brand-dustyBlue transition-colors group ${isRTL ? 'flex-row-reverse' : ''}`}
            data-cursor-hover
          >
            <FiArrowLeft className={`w-4 h-4 group-hover:-translate-x-1 transition-transform ${isRTL ? 'rotate-180 group-hover:translate-x-1' : ''}`} />
            {t.shop.backToHome}
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`text-center mb-16 ${isRTL ? 'text-right' : ''}`}
        >
          <h1 className="font-rozha text-5xl md:text-6xl text-brand-darkRed mb-4">
            {data.title}
          </h1>
          <p className="font-roboto text-brand-clayRed tracking-wide">
            {data.subtitle}
          </p>
        </motion.div>

        {/* FAQ Categories */}
        <div className="space-y-6">
          {data.categories.map((category, catIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="border border-brand-stone/30 rounded-lg overflow-hidden"
            >
              {/* Category Header */}
              <button
                onClick={() => setOpenCategory(openCategory === catIndex ? null : catIndex)}
                className={`w-full flex items-center justify-between p-6 bg-brand-stone/5 hover:bg-brand-dustyBlue/10 transition-colors ${isRTL ? 'flex-row-reverse text-right' : ''}`}
                data-cursor-hover
              >
                <span className="font-rozha text-xl text-brand-darkRed">
                  {category.name}
                </span>
                <FiChevronDown className={`w-5 h-5 text-brand-clayRed transition-transform ${openCategory === catIndex ? 'rotate-180' : ''}`} />
              </button>

              {/* Questions */}
              <AnimatePresence>
                {openCategory === catIndex && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: 'auto' }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 space-y-4">
                      {category.questions.map((item, qIndex) => (
                        <div key={qIndex} className="border-b border-brand-stone/20 last:border-0 pb-4 last:pb-0">
                          <button
                            onClick={() => setOpenQuestion(openQuestion === `${catIndex}-${qIndex}` ? null : `${catIndex}-${qIndex}`)}
                            className={`w-full flex items-start justify-between gap-4 text-left ${isRTL ? 'flex-row-reverse text-right' : ''}`}
                            data-cursor-hover
                          >
                            <span className="font-roboto font-medium text-brand-darkRed">
                              {item.q}
                            </span>
                            <FiChevronDown className={`w-4 h-4 text-brand-clayRed flex-shrink-0 mt-1 transition-transform ${openQuestion === `${catIndex}-${qIndex}` ? 'rotate-180' : ''}`} />
                          </button>
                          <AnimatePresence>
                            {openQuestion === `${catIndex}-${qIndex}` && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden"
                              >
                                <p className={`font-roboto text-sm text-brand-clayRed/80 tracking-wide leading-relaxed mt-3 ${isRTL ? 'text-right' : ''}`}>
                                  {item.a}
                                </p>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center p-8 bg-brand-darkRed rounded-2xl"
        >
          <h2 className="font-rozha text-2xl text-white mb-2">
            {data.contact.title}
          </h2>
          <p className="font-roboto text-sm text-white/70 tracking-wide mb-6">
            {data.contact.description}
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 justify-center ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
            <a
              href="mailto:contact@bintsaeed.com"
              className={`inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-brand-darkRed font-roboto text-xs uppercase tracking-[0.15em] hover:bg-brand-dustyBlue transition-colors ${isRTL ? 'flex-row-reverse' : ''}`}
              data-cursor-hover
            >
              <FiMail className="w-4 h-4" />
              {isRTL ? 'راسلينا' : 'Email Us'}
            </a>
            <a
              href="https://wa.me/971XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] text-white font-roboto text-xs uppercase tracking-[0.15em] hover:bg-[#128C7E] transition-colors ${isRTL ? 'flex-row-reverse' : ''}`}
              data-cursor-hover
            >
              <FaWhatsapp className="w-4 h-4" />
              WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
