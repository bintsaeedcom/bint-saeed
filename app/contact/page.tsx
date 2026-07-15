'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import AboutSectionHero from '@/components/AboutSectionHero'
import ContactSubjectSelect from '@/components/ContactSubjectSelect'
import LocaleLink from '@/components/LocaleLink'
import { ABOUT_SECTION_HERO_IMAGES } from '@/lib/about/aboutSectionHeroImages'
import { getAboutEditorialHeroEyebrow } from '@/lib/about/aboutEditorialHeroChrome'
import { FiMail, FiPhone, FiMapPin, FiClock, FiSend, FiCheck, FiArrowRight } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa6'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { commerceUi } from '@/lib/i18n/commerceUi'
import { getCartEmptyDiscoverCopy } from '@/lib/i18n/cartEmptyDiscoverI18n'
import { getKeepExploringLine } from '@/lib/i18n/keepExploringCopyI18n'
import toast from 'react-hot-toast'
import { OFFICIAL_EMAILS, officialMailto } from '@/lib/brand/officialEmails'
import { ctaFormSubmit } from '@/lib/ui/ctaClasses'
import {
  formFieldClass,
  formFieldErrorClass,
  formHintClass,
  formLabelClass,
} from '@/lib/ui/formFieldClasses'
import { showContactSuccessToast } from '@/lib/ui/contactSuccessToast'
import { validateContactName } from '@/lib/validateContactName'
import { validateSubscriberEmail } from '@/lib/validateSubscriberEmail'
import {
  EDITORIAL_PAGE_CONTAINER,
  EDITORIAL_PAGE_SHELL,
} from '@/lib/ui/editorialPageChrome'

/** Display + deep links */
const CONTACT_PHONE_DISPLAY = '+971 50 2299402'
const CONTACT_PHONE_WA_ME = '971502299402'
const CONTACT_PHONE_TEL = '+971502299402'
const CONTACT_LOCATION_EN = 'Abu Dhabi,\u00A0United\u00A0Arab\u00A0Emirates'
const CONTACT_LOCATION_AR = 'أبو ظبي، الإمارات العربية المتحدة'

const contactFieldClass = formFieldClass
const contactFieldErrorClass = formFieldErrorClass

const contactPanelClass = [
  'relative overflow-hidden rounded-[2px] border border-brand-darkRed/15',
  'bg-white',
  'p-6 shadow-[0_24px_56px_rgba(26,2,16,0.08)] md:p-9',
].join(' ')

const contactLabelClass = formLabelClass

const contactErrorClass = `${formHintClass} text-brand-clayRed`

function FieldError({ id, message, isRTL }: { id: string; message: string; isRTL: boolean }) {
  return (
    <p id={id} role="alert" className={`${contactErrorClass} text-start`}>
      {message}
    </p>
  )
}

export default function ContactPage() {
  const { isRTL, language } = useLanguage()
  const ui = commerceUi(language)
  const discover = getCartEmptyDiscoverCopy(language)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [nameError, setNameError] = useState('')
  const [emailError, setEmailError] = useState('')
  const [subjectError, setSubjectError] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const subjectRequiredMessage = isRTL ? 'يرجى اختيار موضوع' : 'Please select a subject'

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const nameCheck = validateContactName(formData.name, language)
    if (!nameCheck.valid) {
      setNameError(nameCheck.message)
      toast.error(nameCheck.message)
      return
    }
    setNameError('')

    const emailCheck = validateSubscriberEmail(formData.email, language)
    if (!emailCheck.valid) {
      setEmailError(emailCheck.message)
      toast.error(emailCheck.message)
      return
    }
    setEmailError('')

    if (!formData.subject.trim()) {
      setSubjectError(subjectRequiredMessage)
      toast.error(subjectRequiredMessage)
      return
    }
    setSubjectError('')

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          name: nameCheck.name,
          email: emailCheck.email,
        }),
      })

      if (response.ok) {
        showContactSuccessToast(isRTL)
        setSubmitted(true)
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
        setNameError('')
        setEmailError('')
        setSubjectError('')
      } else {
        const data = (await response.json().catch(() => ({}))) as { error?: string }
        const message =
          typeof data.error === 'string'
            ? data.error
            : isRTL
              ? 'حدث خطأ. حاولي مرة أخرى.'
              : 'Something went wrong. Please try again.'
        toast.error(message)
      }
    } catch {
      toast.error(isRTL ? 'حدث خطأ. حاولي مرة أخرى.' : 'Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: FiMail,
      label: isRTL ? 'البريد الإلكتروني' : 'General Inquiries',
      value: OFFICIAL_EMAILS.hello,
      href: officialMailto('hello'),
    },
    {
      icon: FaWhatsapp,
      label: 'WhatsApp',
      value: CONTACT_PHONE_DISPLAY,
      href: `https://wa.me/${CONTACT_PHONE_WA_ME}`,
    },
    {
      icon: FiPhone,
      label: isRTL ? 'الهاتف' : 'Phone',
      value: CONTACT_PHONE_DISPLAY,
      href: `tel:${CONTACT_PHONE_TEL}`,
    },
    {
      icon: FiMapPin,
      label: isRTL ? 'الموقع' : 'Location',
      value: isRTL ? CONTACT_LOCATION_AR : CONTACT_LOCATION_EN,
      href: null,
    },
    {
      icon: FiClock,
      label: isRTL ? 'ساعات العمل' : 'Business Hours',
      value: isRTL ? 'الأحد - الخميس: 9 ص - 6 م' : 'Sun - Thu: 9 AM - 6 PM',
      href: null,
    },
  ]

  const departmentEmails: { label: string; email: keyof typeof OFFICIAL_EMAILS }[] = [
    { label: isRTL ? 'دعم العملاء' : 'Customer Support', email: 'support' },
    { label: isRTL ? 'الطلبات' : 'Orders', email: 'orders' },
    { label: isRTL ? 'الإرجاع والاستبدال' : 'Returns & Exchanges', email: 'returns' },
    { label: isRTL ? 'التخصيص' : 'Personalisation', email: 'hello' },
    { label: isRTL ? 'الجملة' : 'Wholesale', email: 'wholesale' },
    { label: isRTL ? 'الشراكات' : 'Partnerships', email: 'partnerships' },
    { label: isRTL ? 'الصحافة والإعلام' : 'Press & Media', email: 'press' },
    { label: isRTL ? 'الشؤون القانونية' : 'Legal', email: 'legal' },
  ]

  const subjectOptions = [
    { value: 'support', labelEn: 'Customer Support', labelAr: 'دعم العملاء' },
    { value: 'orders', labelEn: 'Orders', labelAr: 'الطلبات' },
    { value: 'returns', labelEn: 'Returns & Exchanges', labelAr: 'الإرجاع والاستبدال' },
    { value: 'personalisation', labelEn: 'Personalisation', labelAr: 'التخصيص' },
    { value: 'wholesale', labelEn: 'Wholesale', labelAr: 'الجملة' },
    { value: 'partnerships', labelEn: 'Partnerships', labelAr: 'الشراكات' },
    { value: 'press', labelEn: 'Press & Media', labelAr: 'الصحافة والإعلام' },
    { value: 'legal', labelEn: 'Legal', labelAr: 'الشؤون القانونية' },
    { value: 'general', labelEn: 'General Inquiry', labelAr: 'استفسار عام' },
  ].map((option) => ({
    value: option.value,
    label: isRTL ? option.labelAr : option.labelEn,
  }))

  const contactHeroDescription = isRTL
    ? 'سواء كانت هذه زيارتك الأولى لـ Bint Saeed أو أنكِ جزء من مجتمعنا، يسعدنا مساعدتك في كل استفسار.'
    : 'Whether you\u2019re discovering Bint Saeed for the first time or already part of our community, we\u2019re pleased to assist with every enquiry.'

  const contactTitle = isRTL ? 'تواصلي معنا' : 'Contact Us'
  const contactImage = {
    src: '/contact/bint-saeed-contact-us-abu-dhabi-brand-portrait.webp',
    alt: isRTL
      ? 'Bint Saeed أبوظبي — صورة تحريرية مع أعشاب نافورة ونخيل وعمارة معاصرة'
      : 'Bint Saeed Abu Dhabi — branded editorial portrait with fountain grass, palms, and contemporary architecture at dusk',
  } as const

  return (
    <div className={`${EDITORIAL_PAGE_SHELL} min-h-screen bg-brand-pageCanvas pb-20 `}>
      <AboutSectionHero
        rtl={isRTL}
        imageSrc={ABOUT_SECTION_HERO_IMAGES.contact}
        imageAlt={isRTL ? 'بانر تواصل Bint Saeed' : 'Bint Saeed contact editorial banner'}
        priority
        segments={[
          { label: isRTL ? 'الرئيسية' : 'Home', href: '/home' },
          { label: isRTL ? 'تواصلي معنا' : 'Contact' },
        ]}
        eyebrow={getAboutEditorialHeroEyebrow(language)}
        title={contactTitle}
        description={contactHeroDescription}
      />

      <div className={`${EDITORIAL_PAGE_CONTAINER} pt-10 lg:pt-14`}>
        <div className={`mb-10 max-w-2xl md:mb-12 text-start`}>
          <p className="font-montserrat text-[10px] uppercase tracking-[0.28em] text-brand-dustyBlue">
            Bint Saeed
          </p>
          <h2 className="mt-3 font-rozha text-[clamp(2rem,4vw,2.75rem)] leading-tight text-brand-darkRed">
            {contactTitle}
          </h2>
          <p className="mt-4 font-montserrat text-sm leading-relaxed tracking-wide text-brand-clayRed/80">
            {contactHeroDescription}
          </p>
        </div>

        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: isRTL ? 40 : -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={contactPanelClass}
            >
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-dustyBlue/25 to-transparent"
                aria-hidden
              />
              {submitted ? (
                <div className={`relative text-start`}>
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-brand-dustyBlue/40 bg-brand-dustyBlue/12">
                    <FiCheck className="h-6 w-6 text-brand-dustyBlue" strokeWidth={2.25} aria-hidden />
                  </div>
                  <p className="mt-6 font-montserrat text-[10px] uppercase tracking-[0.24em] text-brand-clayRed">
                    {isRTL ? 'تم الاستلام' : 'Message received'}
                  </p>
                  <h2 className="mt-3 font-rozha text-3xl text-brand-darkRed">
                    {isRTL ? 'شكراً لتواصلك معنا' : 'Thank you for writing'}
                  </h2>
                  <p className="mt-3 max-w-md font-montserrat text-sm leading-relaxed text-brand-clayRed/75">
                    {getKeepExploringLine(language, 'worldOfBintSaeed')}
                  </p>
                  <div className={`mt-8 flex flex-col gap-3 sm:flex-row `}>
                    <LocaleLink
                      href="/shop"
                      className={`inline-flex min-h-[48px] items-center justify-center gap-2 bg-brand-darkRed px-6 font-montserrat text-[11px] uppercase tracking-[0.16em] text-white transition-colors hover:bg-brand-dustyBlue `}
                      data-cursor-hover
                    >
                      {discover.exploreCollection}
                      <FiArrowRight className={`h-4 w-4 ${isRTL ? 'rotate-180' : ''}`} />
                    </LocaleLink>
                    <LocaleLink
                      href="/accessories"
                      className={`inline-flex min-h-[48px] items-center justify-center gap-2 border border-brand-darkRed/25 px-6 font-montserrat text-[11px] uppercase tracking-[0.16em] text-brand-darkRed transition-colors hover:border-brand-dustyBlue hover:text-brand-dustyBlue `}
                      data-cursor-hover
                    >
                      {discover.discoverAccessories}
                    </LocaleLink>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-6 font-montserrat text-[11px] uppercase tracking-[0.14em] text-brand-dustyBlue underline-offset-4 hover:underline"
                    data-cursor-hover
                  >
                    {isRTL ? 'إرسال رسالة أخرى' : 'Send another message'}
                  </button>
                </div>
              ) : (
              <form onSubmit={handleSubmit} className="relative space-y-6" noValidate>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="contact-name" className={`${contactLabelClass} text-start`}>
                      {isRTL ? 'الاسم' : 'Name'} *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value })
                        if (nameError) setNameError('')
                      }}
                      onBlur={() => {
                        if (!formData.name.trim()) return
                        const check = validateContactName(formData.name, language)
                        setNameError(check.valid ? '' : check.message)
                      }}
                      aria-invalid={nameError ? true : undefined}
                      aria-describedby={nameError ? 'contact-name-error' : undefined}
                      className={`${contactFieldClass} ${nameError ? contactFieldErrorClass : ''} text-start`}
                      dir={isRTL ? 'rtl' : 'ltr'}
                      autoComplete="name"
                    />
                    {nameError ? <FieldError id="contact-name-error" message={nameError} isRTL={isRTL} /> : null}
                  </div>
                  <div>
                    <label htmlFor="contact-email" className={`${contactLabelClass} text-start`}>
                      {isRTL ? 'البريد الإلكتروني' : 'Email'} *
                    </label>
                    <input
                      id="contact-email"
                      type="text"
                      inputMode="email"
                      autoComplete="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value })
                        if (emailError) setEmailError('')
                      }}
                      onBlur={() => {
                        if (!formData.email.trim()) return
                        const check = validateSubscriberEmail(formData.email, language)
                        setEmailError(check.valid ? '' : check.message)
                      }}
                      aria-invalid={emailError ? true : undefined}
                      aria-describedby={emailError ? 'contact-email-error' : undefined}
                      className={`${contactFieldClass} ${emailError ? contactFieldErrorClass : ''} text-start`}
                      dir={isRTL ? 'rtl' : 'ltr'}
                    />
                    {emailError ? <FieldError id="contact-email-error" message={emailError} isRTL={isRTL} /> : null}
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="contact-phone" className={`${contactLabelClass} text-start`}>
                      {isRTL ? 'رقم الهاتف' : 'Phone'}
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`${contactFieldClass} text-start`}
                      dir="ltr"
                      autoComplete="tel"
                    />
                  </div>
                  <div>
                    <label className={`${contactLabelClass} text-start`}>
                      {isRTL ? 'الموضوع' : 'Subject'} *
                    </label>
                    <ContactSubjectSelect
                      value={formData.subject}
                      onChange={(subject) => {
                        setFormData({ ...formData, subject })
                        if (subjectError) setSubjectError('')
                      }}
                      options={subjectOptions}
                      placeholder={isRTL ? 'اختاري موضوعاً' : 'Select a subject'}
                      isRTL={isRTL}
                      hasError={Boolean(subjectError)}
                      aria-describedby={subjectError ? 'contact-subject-error' : undefined}
                      onBlur={() => {
                        if (!formData.subject.trim()) return
                        setSubjectError('')
                      }}
                    />
                    {subjectError ? <FieldError id="contact-subject-error" message={subjectError} isRTL={isRTL} /> : null}
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-message" className={`${contactLabelClass} text-start`}>
                    {isRTL ? 'رسالتك' : 'Message'} *
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`${contactFieldClass} resize-none text-start`}
                    dir={isRTL ? 'rtl' : 'ltr'}
                    placeholder={isRTL ? 'كيف يمكننا مساعدتك؟' : 'How can we help you?'}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`${ctaFormSubmit} w-full sm:w-auto `}
                  data-cursor-hover
                >
                  {isSubmitting ? (
                    <span>{isRTL ? 'جاري الإرسال...' : 'Sending...'}</span>
                  ) : (
                    <>
                      <FiSend className={`h-4 w-4 ${isRTL ? 'rotate-180' : ''}`} />
                      <span>{isRTL ? 'إرسال الرسالة' : 'Send Message'}</span>
                    </>
                  )}
                </button>
              </form>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className={`${contactPanelClass} text-start`}
            >
              <h3 className="font-montserrat text-[10px] uppercase tracking-[0.22em] text-brand-clayRed">
                {isRTL ? 'البريد حسب القسم' : 'Department Inboxes'}
              </h3>
              <dl className="mt-5 space-y-0">
                {departmentEmails.map(({ label, email }) => (
                  <div
                    key={email + label}
                    className={`grid gap-1 border-b border-brand-stone/15 py-3.5 last:border-b-0 sm:grid-cols-[minmax(9rem,0.42fr)_minmax(0,1fr)] sm:items-baseline sm:gap-x-6 ${isRTL ? 'sm:[direction:rtl]' : ''}`}
                  >
                    <dt className="font-montserrat text-[11px] uppercase tracking-[0.14em] text-brand-clayRed">
                      {label}
                    </dt>
                    <dd className="min-w-0">
                      <a
                        href={officialMailto(email)}
                        className="break-all font-montserrat text-sm tracking-[0.02em] text-brand-darkRed transition-colors hover:text-brand-dustyBlue"
                        dir="ltr"
                        data-cursor-hover
                      >
                        {OFFICIAL_EMAILS[email]}
                      </a>
                    </dd>
                  </div>
                ))}
              </dl>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: isRTL ? -40 : 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <figure className="overflow-hidden border border-brand-darkRed/10 bg-brand-stone/15 shadow-[0_24px_56px_rgba(26,2,16,0.08)]">
              <div className="relative aspect-[4/5] w-full">
                {/* eslint-disable-next-line @next/next/no-img-element -- static editorial still */}
                <img
                  src={contactImage.src}
                  alt={contactImage.alt}
                  width={1080}
                  height={1350}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover object-center"
                />
              </div>
            </figure>

            <div className={`${contactPanelClass} space-y-3`}>
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-4 border-b border-brand-stone/15 py-4 last:border-b-0 last:pb-0 first:pt-0 text-start`}
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-brand-darkRed/10 bg-brand-darkRed/[0.04]">
                    <item.icon className="h-[18px] w-[18px] text-brand-darkRed" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="mb-1 font-montserrat text-[10px] uppercase tracking-[0.18em] text-brand-clayRed">
                      {item.label}
                    </h3>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="break-words font-montserrat text-sm tracking-[0.02em] text-brand-darkRed transition-colors hover:text-brand-dustyBlue"
                        data-cursor-hover
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-montserrat text-sm tracking-[0.02em] text-brand-darkRed">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
