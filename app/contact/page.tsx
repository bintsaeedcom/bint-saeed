'use client'

import { useState, type ReactNode } from 'react'
import { motion } from 'framer-motion'
import LocaleLink from '@/components/LocaleLink'
import AppPageWayfinding from '@/components/AppPageWayfinding'
import { FiMail, FiPhone, FiMapPin, FiClock, FiSend, FiChevronDown } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa6'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import toast from 'react-hot-toast'
import { OFFICIAL_EMAILS, officialMailto } from '@/lib/brand/officialEmails'
import { ctaFormSubmit, utilityPageH1 } from '@/lib/ui/ctaClasses'
import { showContactSuccessToast } from '@/lib/ui/contactSuccessToast'
import { validateSubscriberEmail } from '@/lib/validateSubscriberEmail'

/** Display + deep links */
const CONTACT_PHONE_DISPLAY = '+971 50 2299402'
const CONTACT_PHONE_WA_ME = '971502299402'
const CONTACT_PHONE_TEL = '+971502299402'
const CONTACT_LOCATION_EN = 'Abu Dhabi,\u00A0United\u00A0Arab\u00A0Emirates'
const CONTACT_LOCATION_AR = 'أبو ظبي، الإمارات العربية المتحدة'

const contactFieldClass = [
  'w-full rounded-[4px] border border-brand-stone/35 bg-white/95 px-4 py-3.5',
  'font-montserrat text-sm tracking-[0.02em] text-brand-darkRed placeholder:text-brand-clayRed/45',
  'shadow-[inset_0_1px_0_rgba(255,255,255,0.65)]',
  'outline-none transition-[border-color,box-shadow] duration-200',
  'focus:border-brand-darkRed/40 focus:shadow-[0_0_0_1px_rgba(111,21,36,0.1)]',
].join(' ')

const contactPanelClass =
  'rounded-[4px] border border-brand-stone/25 bg-white/70 p-6 shadow-[0_20px_48px_rgba(26,2,16,0.06)] md:p-8'

function ContactSelect({
  value,
  onChange,
  required,
  isRTL,
  children,
}: {
  value: string
  onChange: (value: string) => void
  required?: boolean
  isRTL: boolean
  children: ReactNode
}) {
  return (
    <div className="relative">
      <select
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`${contactFieldClass} appearance-none ${isRTL ? 'pl-10 pr-4 text-right' : 'pl-4 pr-10'}`}
        dir={isRTL ? 'rtl' : 'ltr'}
      >
        {children}
      </select>
      <FiChevronDown
        className={`pointer-events-none absolute top-1/2 h-4 w-4 -translate-y-1/2 text-brand-darkRed/40 ${
          isRTL ? 'left-3.5' : 'right-3.5'
        }`}
        aria-hidden
      />
    </div>
  )
}

const contactFieldErrorClass = 'border-brand-clayRed/55 focus:border-brand-clayRed/65 focus:shadow-[0_0_0_1px_rgba(193,144,134,0.18)]'

export default function ContactPage() {
  const { t, isRTL, language } = useLanguage()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [emailError, setEmailError] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const emailCheck = validateSubscriberEmail(formData.email, language)
    if (!emailCheck.valid) {
      setEmailError(emailCheck.message)
      toast.error(emailCheck.message)
      return
    }
    setEmailError('')

    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, email: emailCheck.email }),
      })
      
      if (response.ok) {
        showContactSuccessToast(isRTL)
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
        setEmailError('')
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
    { label: isRTL ? 'الجملة' : 'Wholesale', email: 'wholesale' },
    { label: isRTL ? 'الشراكات' : 'Partnerships', email: 'partnerships' },
    { label: isRTL ? 'الصحافة والإعلام' : 'Press & Media', email: 'press' },
    { label: isRTL ? 'الشؤون القانونية' : 'Legal', email: 'legal' },
  ]

  const subjectOptions: { value: string; labelEn: string; labelAr: string }[] = [
    { value: 'support', labelEn: 'Customer Support', labelAr: 'دعم العملاء' },
    { value: 'orders', labelEn: 'Orders', labelAr: 'الطلبات' },
    { value: 'returns', labelEn: 'Returns & Exchanges', labelAr: 'الإرجاع والاستبدال' },
    { value: 'wholesale', labelEn: 'Wholesale', labelAr: 'الجملة' },
    { value: 'partnerships', labelEn: 'Partnerships', labelAr: 'الشراكات' },
    { value: 'press', labelEn: 'Press & Media', labelAr: 'الصحافة والإعلام' },
    { value: 'legal', labelEn: 'Legal', labelAr: 'الشؤون القانونية' },
    { value: 'general', labelEn: 'General Inquiry', labelAr: 'استفسار عام' },
  ]

  return (
    <div className={`min-h-screen bg-brand-pageCanvas pb-20 pt-4 sm:pt-6 md:pt-8 ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="container mx-auto px-6 lg:px-12">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <AppPageWayfinding
            rtl={isRTL}
            segments={[
              { label: isRTL ? 'الرئيسية' : 'Home', href: '/home' },
              { label: isRTL ? 'تواصل معنا' : 'Contact' },
            ]}
            backLink={{ href: '/', label: t.shop.backToHome }}
          />
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 data-document-h1="true" className={`${utilityPageH1} mb-4`}>
            {isRTL ? 'تواصلي معنا' : 'Contact Us'}
          </h1>
          <h2 className="font-montserrat text-brand-clayRed tracking-wide max-w-2xl mx-auto leading-relaxed">
            {isRTL
              ? 'سواء كانت هذه زيارتك الأولى لـ Bint Saeed أو أنكِ جزء من مجتمعنا، يسعدنا مساعدتك في كل استفسار.'
              : 'Whether you\u2019re discovering Bint Saeed for the first time or already part of our community, we\u2019re pleased to assist with every enquiry.'}
          </h2>
        </motion.div>

        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 40 : -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={contactPanelClass}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className={`mb-2 block font-montserrat text-[10px] uppercase tracking-[0.18em] text-brand-clayRed ${isRTL ? 'text-right' : ''}`}>
                    {isRTL ? 'الاسم' : 'Name'} *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`${contactFieldClass} ${isRTL ? 'text-right' : ''}`}
                    dir={isRTL ? 'rtl' : 'ltr'}
                  />
                </div>
                <div>
                  <label className={`mb-2 block font-montserrat text-[10px] uppercase tracking-[0.18em] text-brand-clayRed ${isRTL ? 'text-right' : ''}`}>
                    {isRTL ? 'البريد الإلكتروني' : 'Email'} *
                  </label>
                  <input
                    type="email"
                    required
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
                    autoComplete="email"
                  />
                  {emailError ? (
                    <p
                      id="contact-email-error"
                      role="alert"
                      className={`mt-2 font-montserrat text-[11px] leading-relaxed tracking-[0.02em] text-brand-clayRed ${isRTL ? 'text-right' : ''}`}
                    >
                      {emailError}
                    </p>
                  ) : null}
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className={`mb-2 block font-montserrat text-[10px] uppercase tracking-[0.18em] text-brand-clayRed ${isRTL ? 'text-right' : ''}`}>
                    {isRTL ? 'رقم الهاتف' : 'Phone'}
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={contactFieldClass}
                    dir="ltr"
                  />
                </div>
                <div>
                  <label className={`mb-2 block font-montserrat text-[10px] uppercase tracking-[0.18em] text-brand-clayRed ${isRTL ? 'text-right' : ''}`}>
                    {isRTL ? 'الموضوع' : 'Subject'} *
                  </label>
                  <ContactSelect
                    required
                    value={formData.subject}
                    onChange={(subject) => setFormData({ ...formData, subject })}
                    isRTL={isRTL}
                  >
                    <option value="">{isRTL ? 'اختاري موضوعاً' : 'Select a subject'}</option>
                    {subjectOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {isRTL ? option.labelAr : option.labelEn}
                      </option>
                    ))}
                  </ContactSelect>
                </div>
              </div>

              <div>
                <label className={`mb-2 block font-montserrat text-[10px] uppercase tracking-[0.18em] text-brand-clayRed ${isRTL ? 'text-right' : ''}`}>
                  {isRTL ? 'رسالتك' : 'Message'} *
                </label>
                <textarea
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
                className={`${ctaFormSubmit} ${isRTL ? 'flex-row-reverse' : ''}`}
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

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -40 : 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Info Cards */}
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
                    key={email}
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
