'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import LocaleLink from '@/components/LocaleLink'
import { FiArrowLeft, FiChevronDown, FiMail } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa6'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import type { AppLocale } from '@/lib/i18n/routing'
import { FAQ_BY_LOCALE } from '@/lib/faq/faqByLocale'

const FAQ_EMAIL_CTA: Record<AppLocale, string> = {
  en: 'Email Us',
  ar: 'راسلينا',
  fr: 'Écrivez-nous',
  it: 'Scrivici',
  es: 'Escríbenos',
  ru: 'Написать',
  zh: '发送邮件',
  de: 'E-Mail senden',
  nl: 'E-mail ons',
  pt: 'Enviar e-mail',
}

export default function FAQPage() {
  const { language, t, isRTL } = useLanguage()
  const [openCategory, setOpenCategory] = useState<number | null>(0)
  const [openQuestion, setOpenQuestion] = useState<string | null>(null)

  const data = FAQ_BY_LOCALE[language as AppLocale] ?? FAQ_BY_LOCALE.en

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
          <LocaleLink
            href="/"
            className={`inline-flex items-center gap-2 font-montserrat text-sm uppercase tracking-[0.15em] text-brand-clayRed hover:text-brand-dustyBlue transition-colors group ${isRTL ? 'flex-row-reverse' : ''}`}
            data-cursor-hover
          >
            <FiArrowLeft className={`w-4 h-4 group-hover:-translate-x-1 transition-transform ${isRTL ? 'rotate-180 group-hover:translate-x-1' : ''}`} />
            {t.shop.backToHome}
          </LocaleLink>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`text-center mb-16 ${isRTL ? 'text-right' : ''}`}
        >
          <h1 data-document-h1="true" className="font-rozha text-5xl md:text-6xl text-brand-darkRed mb-4">
            {data.title}
          </h1>
          <p className="font-montserrat text-brand-clayRed tracking-wide">
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
                            <span className="font-montserrat font-medium text-brand-darkRed">
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
                                <p className={`font-montserrat text-sm text-brand-clayRed/80 tracking-wide leading-relaxed mt-3 ${isRTL ? 'text-right' : ''}`}>
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
          <p className="font-montserrat text-sm text-white/70 tracking-wide mb-6">
            {data.contact.description}
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 justify-center ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
            <a
              href="mailto:contact@bintsaeed.com"
              className={`inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-brand-darkRed font-montserrat text-xs uppercase tracking-[0.15em] hover:bg-brand-dustyBlue transition-colors ${isRTL ? 'flex-row-reverse' : ''}`}
              data-cursor-hover
            >
              <FiMail className="w-4 h-4" />
              {FAQ_EMAIL_CTA[language as AppLocale] ?? FAQ_EMAIL_CTA.en}
            </a>
            <a
              href="https://wa.me/971502299402"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] text-white font-montserrat text-xs uppercase tracking-[0.15em] hover:bg-[#128C7E] transition-colors ${isRTL ? 'flex-row-reverse' : ''}`}
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
