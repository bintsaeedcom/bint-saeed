'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiArrowLeft, FiMail, FiPhone, FiMapPin, FiClock, FiSend } from 'react-icons/fi'
import { FaWhatsapp, FaInstagram } from 'react-icons/fa6'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import toast from 'react-hot-toast'

export default function ContactPage() {
  const { t, isRTL } = useLanguage()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Simulate API call - replace with actual Slack/email integration
      await new Promise(resolve => setTimeout(resolve, 1500))
      toast.success(isRTL ? 'تم إرسال رسالتك بنجاح!' : 'Message sent successfully!')
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    } catch {
      toast.error(isRTL ? 'حدث خطأ. حاولي مرة أخرى.' : 'Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: FiMail,
      label: isRTL ? 'البريد الإلكتروني' : 'Email',
      value: 'contact@bintsaeed.com',
      href: 'mailto:contact@bintsaeed.com',
    },
    {
      icon: FaWhatsapp,
      label: 'WhatsApp',
      value: '+971 XX XXX XXXX',
      href: 'https://wa.me/971XXXXXXXXX',
    },
    {
      icon: FiPhone,
      label: isRTL ? 'الهاتف' : 'Phone',
      value: '+971 XX XXX XXXX',
      href: 'tel:+971XXXXXXXXX',
    },
    {
      icon: FiMapPin,
      label: isRTL ? 'الموقع' : 'Location',
      value: isRTL ? 'دبي، الإمارات العربية المتحدة' : 'Dubai, United Arab Emirates',
      href: null,
    },
    {
      icon: FiClock,
      label: isRTL ? 'ساعات العمل' : 'Business Hours',
      value: isRTL ? 'الأحد - الخميس: 9 ص - 6 م' : 'Sun - Thu: 9 AM - 6 PM',
      href: null,
    },
  ]

  return (
    <div className={`min-h-screen pt-32 pb-20 bg-white ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="container mx-auto px-6 lg:px-12">
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
          className="text-center mb-16"
        >
          <h1 className="font-rozha text-5xl md:text-6xl text-brand-darkRed mb-4">
            {isRTL ? 'تواصلي معنا' : 'Contact Us'}
          </h1>
          <p className="font-roboto text-brand-clayRed tracking-wide max-w-xl mx-auto">
            {isRTL 
              ? 'نحن هنا لمساعدتك. تواصلي معنا وسنرد عليك في أقرب وقت.'
              : 'We\'re here to help. Reach out to us and we\'ll respond as soon as possible.'}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 40 : -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className={`block font-roboto text-xs uppercase tracking-[0.15em] text-brand-darkRed mb-2 ${isRTL ? 'text-right' : ''}`}>
                    {isRTL ? 'الاسم' : 'Name'} *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full px-4 py-4 border border-brand-stone/50 font-roboto text-sm tracking-wide focus:border-brand-darkRed transition-colors ${isRTL ? 'text-right' : ''}`}
                    dir={isRTL ? 'rtl' : 'ltr'}
                  />
                </div>
                <div>
                  <label className={`block font-roboto text-xs uppercase tracking-[0.15em] text-brand-darkRed mb-2 ${isRTL ? 'text-right' : ''}`}>
                    {isRTL ? 'البريد الإلكتروني' : 'Email'} *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full px-4 py-4 border border-brand-stone/50 font-roboto text-sm tracking-wide focus:border-brand-darkRed transition-colors ${isRTL ? 'text-right' : ''}`}
                    dir={isRTL ? 'rtl' : 'ltr'}
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className={`block font-roboto text-xs uppercase tracking-[0.15em] text-brand-darkRed mb-2 ${isRTL ? 'text-right' : ''}`}>
                    {isRTL ? 'رقم الهاتف' : 'Phone'}
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={`w-full px-4 py-4 border border-brand-stone/50 font-roboto text-sm tracking-wide focus:border-brand-darkRed transition-colors ${isRTL ? 'text-right' : ''}`}
                    dir="ltr"
                  />
                </div>
                <div>
                  <label className={`block font-roboto text-xs uppercase tracking-[0.15em] text-brand-darkRed mb-2 ${isRTL ? 'text-right' : ''}`}>
                    {isRTL ? 'الموضوع' : 'Subject'} *
                  </label>
                  <select
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className={`w-full px-4 py-4 border border-brand-stone/50 font-roboto text-sm tracking-wide focus:border-brand-darkRed transition-colors bg-white ${isRTL ? 'text-right' : ''}`}
                    dir={isRTL ? 'rtl' : 'ltr'}
                  >
                    <option value="">{isRTL ? 'اختاري موضوعاً' : 'Select a subject'}</option>
                    <option value="order">{isRTL ? 'استفسار عن طلب' : 'Order Inquiry'}</option>
                    <option value="product">{isRTL ? 'سؤال عن منتج' : 'Product Question'}</option>
                    <option value="custom">{isRTL ? 'طلب مخصص' : 'Custom Order'}</option>
                    <option value="returns">{isRTL ? 'إرجاع واستبدال' : 'Returns & Exchanges'}</option>
                    <option value="other">{isRTL ? 'أخرى' : 'Other'}</option>
                  </select>
                </div>
              </div>

              <div>
                <label className={`block font-roboto text-xs uppercase tracking-[0.15em] text-brand-darkRed mb-2 ${isRTL ? 'text-right' : ''}`}>
                  {isRTL ? 'رسالتك' : 'Message'} *
                </label>
                <textarea
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`w-full px-4 py-4 border border-brand-stone/50 font-roboto text-sm tracking-wide focus:border-brand-darkRed transition-colors resize-none ${isRTL ? 'text-right' : ''}`}
                  dir={isRTL ? 'rtl' : 'ltr'}
                  placeholder={isRTL ? 'كيف يمكننا مساعدتك؟' : 'How can we help you?'}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-8 py-4 bg-brand-darkRed text-white font-roboto text-sm uppercase tracking-[0.15em] hover:bg-brand-dustyBlue transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}
                data-cursor-hover
              >
                {isSubmitting ? (
                  <span>{isRTL ? 'جاري الإرسال...' : 'Sending...'}</span>
                ) : (
                  <>
                    <FiSend className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
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
            className="space-y-8"
          >
            {/* Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-4 p-4 bg-brand-stone/5 rounded-lg ${isRTL ? 'flex-row-reverse text-right' : ''}`}
                >
                  <div className="w-10 h-10 bg-brand-darkRed/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-brand-darkRed" />
                  </div>
                  <div>
                    <p className="font-roboto text-xs uppercase tracking-[0.15em] text-brand-clayRed mb-1">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="font-roboto text-brand-darkRed hover:text-brand-dustyBlue transition-colors"
                        data-cursor-hover
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-roboto text-brand-darkRed">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className={`p-6 bg-brand-darkRed rounded-lg text-white ${isRTL ? 'text-right' : ''}`}>
              <h3 className="font-rozha text-xl mb-4">
                {isRTL ? 'تابعينا' : 'Follow Us'}
              </h3>
              <p className="font-roboto text-sm text-white/70 mb-6">
                {isRTL 
                  ? 'انضمي لمجتمعنا للحصول على أحدث التصاميم والعروض الحصرية.'
                  : 'Join our community for the latest designs and exclusive offers.'}
              </p>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/bintsaeed_brand/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                  data-cursor-hover
                >
                  <FaInstagram className="w-5 h-5" />
                </a>
                <a
                  href="https://wa.me/971XXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                  data-cursor-hover
                >
                  <FaWhatsapp className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
