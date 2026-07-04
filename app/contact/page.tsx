'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import AboutSectionHero from '@/components/AboutSectionHero'
import ContactSubjectSelect from '@/components/ContactSubjectSelect'
import { ABOUT_SECTION_HERO_IMAGES } from '@/lib/about/aboutSectionHeroImages'
import { FiMail, FiPhone, FiMapPin, FiClock, FiSend } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa6'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import toast from 'react-hot-toast'
import { OFFICIAL_EMAILS, officialMailto } from '@/lib/brand/officialEmails'
import { ctaFormSubmit } from '@/lib/ui/ctaClasses'
import { showContactSuccessToast } from '@/lib/ui/contactSuccessToast'
import { validateContactName } from '@/lib/validateContactName'
import { validateSubscriberEmail } from '@/lib/validateSubscriberEmail'
import {
  EDITORIAL_PAGE_CONTAINER,
  EDITORIAL_PAGE_SHELL,
  editorialHeroAlign,
  editorialIntroStripText,
} from '@/lib/ui/editorialPageChrome'

/** Display + deep links */
const CONTACT_PHONE_DISPLAY = '+971 50 2299402'
const CONTACT_PHONE_WA_ME = '971502299402'
const CONTACT_PHONE_TEL = '+971502299402'
const CONTACT_LOCATION_EN = 'Abu Dhabi,\u00A0United\u00A0Arab\u00A0Emirates'
const CONTACT_LOCATION_AR = 'أبو ظبي، الإمارات العربية المتحدة'

const contactFieldClass = [
  'w-full rounded-[2px] border border-brand-stone/40 bg-white px-4 py-3.5',
  'font-montserrat text-sm tracking-[0.03em] text-brand-darkRed placeholder:text-brand-clayRed/40',
  'shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]',
  'outline-none transition-[border-color,box-shadow,background-color] duration-200',
  'hover:border-brand-stone/55',
  'focus:border-brand-darkRed/35 focus:bg-white focus:shadow-[0_0_0_1px_rgba(111,21,36,0.08)]',
].join(' ')

const contactFieldErrorClass =
  'border-brand-clayRed/55 hover:border-brand-clayRed/60 focus:border-brand-clayRed/65 focus:shadow-[0_0_0_1px_rgba(193,144,134,0.18)]'

const contactPanelClass = [
  'relative overflow-hidden rounded-[2px] border border-brand-stone/30',
  'bg-[linear-gradient(168deg,rgba(255,255,255,0.96)_0%,rgba(250,248,245,0.9)_48%,rgba(245,240,235,0.88)_100%)]',
  'p-6 shadow-[0_24px_56px_rgba(26,2,16,0.08)] md:p-9',
].join(' ')

const contactLabelClass =
  'mb-2 block font-montserrat text-[10px] uppercase tracking-[0.2em] text-brand-clayRed'

const contactErrorClass =
  'mt-2 font-montserrat text-[11px] leading-relaxed tracking-[0.02em] text-brand-clayRed'

function FieldError({ id, message, isRTL }: { id: string; message: string; isRTL: boolean }) {
  return (
    <p id={id} role="alert" className={`${contactErrorClass} ${isRTL ? 'text-right' : ''}`}>
      {message}
    </p>
  )
}

export default function ContactPage() {
  const { isRTL, language } = useLanguage()
  const [isSubmitting, setIsSubmitting] = useState(false)
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

  return (
    <div className={`${EDITORIAL_PAGE_SHELL} min-h-screen bg-brand-pageCanvas pb-20 ${isRTL ? 'rtl' : 'ltr'}`}>
      <AboutSectionHero
        rtl={isRTL}
        imageSrc={ABOUT_SECTION_HERO_IMAGES.contact}
        imageAlt={isRTL ? 'بانر تواصل Bint Saeed' : 'Bint Saeed contact editorial banner'}
        priority
        segments={[
          { label: isRTL ? 'الرئيسية' : 'Home', href: '/home' },
          { label: isRTL ? 'تواصلي معنا' : 'Contact' },
        ]}
        eyebrow={isRTL ? 'BINT SAEED · ABU DHABI' : 'BINT SAEED · ABU DHABI'}
        title={isRTL ? 'تواصلي معنا' : 'Contact Us'}
        titleClassName="mb-0 font-rozha text-[clamp(1.625rem,3.2vw,2.35rem)] leading-[1.02] tracking-[0.01em] text-white"
      />

      <div className="border-b border-brand-stone/20 bg-brand-pageCanvas">
        <div className={`${EDITORIAL_PAGE_CONTAINER} py-5 lg:py-6`}>
          <p className={`${editorialIntroStripText} ${editorialHeroAlign(isRTL)}`}>
            {isRTL
              ? 'سواء كانت هذه زيارتك الأولى لـ Bint Saeed أو أنكِ جزء من مجتمعنا، يسعدنا مساعدتك في كل استفسار.'
              : 'Whether you\u2019re discovering Bint Saeed for the first time or already part of our community, we\u2019re pleased to assist with every enquiry.'}
          </p>
        </div>
      </div>

      <div className={`${EDITORIAL_PAGE_CONTAINER} pt-8`}>
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16">
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
            <form onSubmit={handleSubmit} className="relative space-y-6" noValidate>
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className={`${contactLabelClass} ${isRTL ? 'text-right' : ''}`}>
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
                    className={`${contactFieldClass} ${nameError ? contactFieldErrorClass : ''} ${isRTL ? 'text-right' : ''}`}
                    dir={isRTL ? 'rtl' : 'ltr'}
                    autoComplete="name"
                  />
                  {nameError ? <FieldError id="contact-name-error" message={nameError} isRTL={isRTL} /> : null}
                </div>
                <div>
                  <label htmlFor="contact-email" className={`${contactLabelClass} ${isRTL ? 'text-right' : ''}`}>
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
                    className={`${contactFieldClass} ${emailError ? contactFieldErrorClass : ''} ${isRTL ? 'text-right' : ''}`}
                    dir={isRTL ? 'rtl' : 'ltr'}
                  />
                  {emailError ? <FieldError id="contact-email-error" message={emailError} isRTL={isRTL} /> : null}
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-phone" className={`${contactLabelClass} ${isRTL ? 'text-right' : ''}`}>
                    {isRTL ? 'رقم الهاتف' : 'Phone'}
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={`${contactFieldClass} ${isRTL ? 'text-right' : ''}`}
                    dir="ltr"
                    autoComplete="tel"
                  />
                </div>
                <div>
                  <label className={`${contactLabelClass} ${isRTL ? 'text-right' : ''}`}>
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
                <label htmlFor="contact-message" className={`${contactLabelClass} ${isRTL ? 'text-right' : ''}`}>
                  {isRTL ? 'رسالتك' : 'Message'} *
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`${contactFieldClass} resize-none ${isRTL ? 'text-right' : ''}`}
                  dir={isRTL ? 'rtl' : 'ltr'}
                  placeholder={isRTL ? 'كيف يمكننا مساعدتك؟' : 'How can we help you?'}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`${ctaFormSubmit} w-full sm:w-auto ${isRTL ? 'flex-row-reverse' : ''}`}
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: isRTL ? -40 : 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className={`${contactPanelClass} space-y-3`}>
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-4 border-b border-brand-stone/15 py-4 last:border-b-0 last:pb-0 first:pt-0 ${isRTL ? 'flex-row-reverse text-right' : ''}`}
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

            <div className={`${contactPanelClass} ${isRTL ? 'text-right' : ''}`}>
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
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
