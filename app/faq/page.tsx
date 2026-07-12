'use client'

import { useEffect, useState } from 'react'
import AppPageWayfinding from '@/components/AppPageWayfinding'
import LocaleLink from '@/components/LocaleLink'
import { FiMail } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa6'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import type { AppLocale } from '@/lib/i18n/routing'
import { FAQ_BY_LOCALE } from '@/lib/faq/faqByLocale'
import { officialMailto } from '@/lib/brand/officialEmails'
import { SITE_CONTENT_TOP_PAD, SITE_HEADER_STICKY_TOP } from '@/lib/ui/editorialPageChrome'
import { utilityPageH1 } from '@/lib/ui/ctaClasses'

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
  id: 'Email Us',
  ms: 'Email Us',
}

const POLICY_LINKS: Record<
  AppLocale,
  { shipment: string; sizeGuide: string; personalisation: string; giving: string }
> = {
  en: {
    shipment: 'Shipment & Return Policy',
    sizeGuide: 'Size Guide',
    personalisation: 'Personalisation',
    giving: 'Giving Forward',
  },
  ar: {
    shipment: 'سياسة الشحن والاستبدال',
    sizeGuide: 'دليل المقاسات',
    personalisation: 'التخصيص',
    giving: 'العطاء للأمام',
  },
  fr: {
    shipment: 'Politique d’expédition et de retour',
    sizeGuide: 'Guide des tailles',
    personalisation: 'Personnalisation',
    giving: 'Giving Forward',
  },
  de: {
    shipment: 'Versand- & Rückgaberecht',
    sizeGuide: 'Größentabelle',
    personalisation: 'Personalisierung',
    giving: 'Giving Forward',
  },
  it: {
    shipment: 'Spedizioni e resi',
    sizeGuide: 'Guida alle taglie',
    personalisation: 'Personalizzazione',
    giving: 'Giving Forward',
  },
  es: {
    shipment: 'Envíos y devoluciones',
    sizeGuide: 'Guía de tallas',
    personalisation: 'Personalización',
    giving: 'Giving Forward',
  },
  ru: {
    shipment: 'Доставка и возврат',
    sizeGuide: 'Таблица размеров',
    personalisation: 'Персонализация',
    giving: 'Giving Forward',
  },
  zh: {
    shipment: '配送与退换政策',
    sizeGuide: '尺码指南',
    personalisation: '个性化',
    giving: 'Giving Forward',
  },
  nl: {
    shipment: 'Verzend- en retourbeleid',
    sizeGuide: 'Maattabel',
    personalisation: 'Personalisatie',
    giving: 'Giving Forward',
  },
  pt: {
    shipment: 'Envio e devoluções',
    sizeGuide: 'Guia de tamanhos',
    personalisation: 'Personalização',
    giving: 'Giving Forward',
  },
  id: {
    shipment: 'Shipment & Return Policy',
    sizeGuide: 'Size Guide',
    personalisation: 'Personalisation',
    giving: 'Giving Forward',
  },
  ms: {
    shipment: 'Shipment & Return Policy',
    sizeGuide: 'Size Guide',
    personalisation: 'Personalisation',
    giving: 'Giving Forward',
  },
}

export default function FAQPage() {
  const { language, t, isRTL } = useLanguage()
  const locale = language as AppLocale
  const data = FAQ_BY_LOCALE[locale] ?? FAQ_BY_LOCALE.en
  const links = POLICY_LINKS[locale] ?? POLICY_LINKS.en
  const [activeTopic, setActiveTopic] = useState(data.topics[0]?.id ?? '')

  useEffect(() => {
    setActiveTopic(data.topics[0]?.id ?? '')
  }, [data.topics])

  useEffect(() => {
    const sections = data.topics
      .map((topic) => document.getElementById(`faq-${topic.id}`))
      .filter((el): el is HTMLElement => Boolean(el))

    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        const top = visible[0]
        if (top?.target.id) {
          setActiveTopic(top.target.id.replace(/^faq-/, ''))
        }
      },
      {
        rootMargin: '-20% 0px -55% 0px',
        threshold: [0.1, 0.25, 0.5],
      },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [data.topics])

  const scrollToTopic = (topicId: string) => {
    const el = document.getElementById(`faq-${topicId}`)
    if (!el) return
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setActiveTopic(topicId)
  }

  return (
    <div
      className={`min-h-screen bg-brand-pageCanvas pb-24 ${SITE_CONTENT_TOP_PAD} ${isRTL ? 'rtl' : 'ltr'}`}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="mx-auto w-full max-w-5xl px-5 sm:px-8 lg:px-12">
        <div className="mb-10">
          <AppPageWayfinding
            rtl={isRTL}
            variant="muted"
            segments={[
              { label: isRTL ? 'الرئيسية' : 'Home', href: '/home' },
              { label: isRTL ? 'الأسئلة الشائعة' : 'FAQ' },
            ]}
            backLink={{ href: '/home', label: t.shop.backToHome }}
          />
        </div>

        <header className={`mb-12 max-w-3xl ${isRTL ? 'text-right' : 'text-left'}`}>
          <span className="mb-4 block font-montserrat text-[10px] uppercase tracking-[0.35em] text-brand-dustyBlue">
            Bint Saeed
          </span>
          <h1 data-document-h1="true" className={utilityPageH1}>
            {data.title}
          </h1>
          <p className="mt-5 font-montserrat text-sm leading-[1.9] tracking-wide text-brand-darkRed/70">
            {data.subtitle}
          </p>
          <nav
            aria-label={isRTL ? 'روابط السياسات' : 'Related policies'}
            className={`mt-8 flex flex-wrap gap-x-5 gap-y-2 border-t border-brand-stone/30 pt-5 font-montserrat text-[11px] uppercase tracking-[0.14em] text-brand-clayRed ${isRTL ? 'flex-row-reverse' : ''}`}
          >
            <LocaleLink href="/shipment-return-policy" className="hover:text-brand-dustyBlue" data-cursor-hover>
              {links.shipment}
            </LocaleLink>
            <LocaleLink href="/size-guide" className="hover:text-brand-dustyBlue" data-cursor-hover>
              {links.sizeGuide}
            </LocaleLink>
            <LocaleLink href="/personalisation" className="hover:text-brand-dustyBlue" data-cursor-hover>
              {links.personalisation}
            </LocaleLink>
            <LocaleLink href="/giving-forward" className="hover:text-brand-dustyBlue" data-cursor-hover>
              {links.giving}
            </LocaleLink>
          </nav>
        </header>

        {/* Main topic index — sticky, clearly distinct from questions */}
        <nav
          aria-label={isRTL ? 'مواضيع الأسئلة' : 'FAQ topics'}
          className={`sticky ${SITE_HEADER_STICKY_TOP} z-30 -mx-5 mb-12 border-y border-brand-stone/30 bg-brand-pageCanvas/95 px-5 backdrop-blur-sm sm:-mx-8 sm:px-8 lg:mx-0 lg:px-0`}
        >
          <ul
            className={`flex gap-1 overflow-x-auto py-3 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden ${isRTL ? 'flex-row-reverse' : ''}`}
          >
            {data.topics.map((topic) => {
              const isActive = activeTopic === topic.id
              return (
                <li key={topic.id} className="shrink-0">
                  <button
                    type="button"
                    onClick={() => scrollToTopic(topic.id)}
                    className={`whitespace-nowrap px-3 py-2 font-montserrat text-[10px] uppercase tracking-[0.18em] transition-colors sm:px-4 sm:text-[11px] ${
                      isActive
                        ? 'border-b-2 border-brand-darkRed text-brand-darkRed'
                        : 'border-b-2 border-transparent text-brand-clayRed/70 hover:text-brand-darkRed'
                    }`}
                    aria-current={isActive ? 'true' : undefined}
                    data-cursor-hover
                  >
                    {topic.name}
                  </button>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="space-y-16">
          {data.topics.map((topic) => (
            <section
              key={topic.id}
              id={`faq-${topic.id}`}
              className="scroll-mt-[12rem] sm:scroll-mt-[13rem] 2xl:scroll-mt-[15rem]"
              aria-labelledby={`faq-heading-${topic.id}`}
            >
              <div className={`mb-8 border-b border-brand-stone/35 pb-4 ${isRTL ? 'text-right' : ''}`}>
                <h2
                  id={`faq-heading-${topic.id}`}
                  className="font-rozha text-3xl leading-tight text-brand-darkRed md:text-[2.75rem]"
                >
                  {topic.name}
                </h2>
              </div>

              <div className="space-y-10">
                {topic.subtopics.map((subtopic) => (
                  <div key={`${topic.id}-${subtopic.name}`}>
                    <h3
                      className={`mb-4 border-l-2 border-brand-dustyBlue/50 pl-3 font-montserrat text-[11px] font-medium uppercase tracking-[0.22em] text-brand-dustyBlue ${isRTL ? 'border-l-0 border-r-2 pr-3 pl-0 text-right' : ''}`}
                    >
                      {subtopic.name}
                    </h3>

                    <div className="divide-y divide-brand-stone/25 border-y border-brand-stone/25">
                      {subtopic.questions.map((item) => (
                        <details
                          key={item.q}
                          className="group [overflow-anchor:none] open:bg-brand-stone/[0.04]"
                        >
                          <summary
                            className={`cursor-pointer list-none py-5 outline-none marker:content-none [&::-webkit-details-marker]:hidden ${isRTL ? 'text-right' : 'text-left'}`}
                            data-cursor-hover
                          >
                            <span className={`flex items-start gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                              <span className="min-w-0 flex-1 font-montserrat text-[15px] font-medium leading-snug tracking-wide text-brand-darkRed sm:text-base md:text-[1.05rem] md:leading-relaxed">
                                {item.q}
                              </span>
                              <span
                                aria-hidden
                                className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center font-montserrat text-lg leading-none text-brand-clayRed transition-transform duration-200 group-open:rotate-45"
                              >
                                +
                              </span>
                            </span>
                          </summary>
                          <div
                            className={`pb-6 ${isRTL ? 'text-right' : 'text-left'} ${isRTL ? 'pl-8' : 'pr-8'}`}
                          >
                            <p className="max-w-3xl font-montserrat text-sm leading-[1.9] tracking-wide text-brand-darkRed/75 whitespace-pre-wrap break-words [overflow-wrap:anywhere]">
                              {item.a}
                            </p>
                          </div>
                        </details>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        <aside className="mt-20 border border-brand-stone/30 bg-[#1a0210] px-6 py-10 text-center sm:px-10">
          <h2 className="font-rozha text-2xl text-[#e8ddd4] md:text-3xl">{data.contact.title}</h2>
          <p className="mx-auto mt-3 max-w-xl font-montserrat text-sm leading-relaxed tracking-wide text-white/65">
            {data.contact.description}
          </p>
          <div className={`mt-8 flex flex-col justify-center gap-3 sm:flex-row ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
            <a
              href={officialMailto('support')}
              className={`inline-flex items-center justify-center gap-2 bg-[#e8ddd4] px-8 py-3.5 font-montserrat text-[10px] uppercase tracking-[0.18em] text-brand-darkRed transition-colors hover:bg-white ${isRTL ? 'flex-row-reverse' : ''}`}
              data-cursor-hover
            >
              <FiMail className="h-4 w-4" />
              {FAQ_EMAIL_CTA[locale] ?? FAQ_EMAIL_CTA.en}
            </a>
            <a
              href="https://wa.me/971502299402"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-center gap-2 border border-white/25 px-8 py-3.5 font-montserrat text-[10px] uppercase tracking-[0.18em] text-white transition-colors hover:border-white/50 ${isRTL ? 'flex-row-reverse' : ''}`}
              data-cursor-hover
            >
              <FaWhatsapp className="h-4 w-4" />
              WhatsApp
            </a>
          </div>
        </aside>
      </div>
    </div>
  )
}
