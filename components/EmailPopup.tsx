'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { stripLocaleFromPathname } from '@/lib/i18n/routing'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { FiX } from 'react-icons/fi'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { hasStoredCookieChoice } from '@/lib/analytics/consent'
import toast from 'react-hot-toast'
import { validateSubscriberEmail } from '@/lib/validateSubscriberEmail'
import { getEmailPopupCopy } from '@/lib/i18n/emailPopupI18n'
import { ctaFormSubmit, ctaFormSubmitInline } from '@/lib/ui/ctaClasses'

export default function EmailPopup() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [discountCode, setDiscountCode] = useState('')
  const [formData, setFormData] = useState({ name: '', email: '' })
  const [emailError, setEmailError] = useState('')
  const { isRTL, language } = useLanguage()
  const copy = getEmailPopupCopy(language)

  useEffect(() => {
    const inner = pathname ? stripLocaleFromPathname(pathname).pathname : '/'
    if (!inner.startsWith('/shop')) return

    const hasSeenPopup = localStorage.getItem('bint-saeed-popup-seen')
    const hasSubscribed = localStorage.getItem('bint-saeed-subscribed')

    if (!hasSeenPopup && !hasSubscribed) {
      const timer = setTimeout(() => {
        if (hasStoredCookieChoice()) setIsOpen(true)
      }, 45000)
      return () => clearTimeout(timer)
    }
  }, [pathname])

  const generateDiscountCode = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    let code = 'WELCOME'
    for (let i = 0; i < 6; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    return code
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const check = validateSubscriberEmail(formData.email, language)
    if (!check.valid) {
      setEmailError(check.message)
      toast.error(check.message)
      return
    }
    setEmailError('')
    setIsSubmitting(true)

    try {
      const code = generateDiscountCode()

      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          email: check.email,
          discountCode: code,
          source: 'popup',
        }),
      })

      const data = await response.json().catch(() => ({}))

      if (response.ok) {
        setDiscountCode(code)
        setShowSuccess(true)
        localStorage.setItem('bint-saeed-subscribed', 'true')
        localStorage.setItem('bint-saeed-discount-code', code)
      } else {
        const msg = typeof data.error === 'string' ? data.error : ''
        if (msg) {
          setEmailError(msg)
          toast.error(copy.emailCheckError)
        } else {
          toast.error(copy.genericError)
        }
      }
    } catch {
      toast.error(copy.genericError)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleClose = () => {
    setIsOpen(false)
    localStorage.setItem('bint-saeed-popup-seen', 'true')
  }

  const copyCode = () => {
    navigator.clipboard.writeText(discountCode)
    toast.success(copy.codeCopied)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            key="email-popup-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[200]"
            data-cursor-hover
          />

          <motion.div
            key="email-popup-modal"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-3xl md:w-full z-[201] overflow-hidden flex flex-col md:flex-row max-h-[90vh] md:max-h-[500px] shadow-2xl"
            data-cursor-hover
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-10 p-2 text-white hover:text-brand-dustyBlue transition-colors bg-brand-darkRed/80 rounded-full"
              data-cursor-hover
            >
              <FiX className="w-5 h-5" />
            </button>

            <div className="relative w-full md:w-1/2 h-48 md:h-auto flex-shrink-0 bg-brand-darkRed">
              <Image
                src="https://images.unsplash.com/photo-1590003511523-9c5e5e60a3b1?w=800&q=90"
                alt={copy.imageAlt}
                fill
                className="object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-brand-darkRed/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10">
                <span className="font-rozha text-3xl md:text-4xl text-white/90 leading-tight">
                  {copy.exclusiveOffer}
                </span>
              </div>
            </div>

            <div className={`flex-1 p-8 md:p-10 flex flex-col justify-center bg-brand-stone ${isRTL ? 'text-right' : ''}`}>
              {!showSuccess ? (
                <>
                  <h2 className="font-rozha text-2xl md:text-3xl text-brand-darkRed mb-3">
                    {copy.headline}
                  </h2>
                  <p className="font-montserrat text-sm text-brand-darkRed/70 tracking-wide mb-6">
                    {copy.body}
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                      type="text"
                      required
                      placeholder={copy.firstName}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-4 py-3 bg-white border border-brand-darkRed/30 font-montserrat text-sm tracking-wide text-brand-darkRed placeholder:text-brand-muted focus:border-brand-clayRed focus:outline-none focus:ring-1 focus:ring-brand-clayRed/25 transition-colors ${isRTL ? 'text-right' : ''}`}
                      dir={isRTL ? 'rtl' : 'ltr'}
                    />
                    <div className="space-y-1">
                      <input
                        type="email"
                        required
                        placeholder={copy.email}
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value })
                          if (emailError) setEmailError('')
                        }}
                        onBlur={() => {
                          if (!formData.email.trim()) return
                          const v = validateSubscriberEmail(formData.email, language)
                          setEmailError(v.valid ? '' : v.message)
                        }}
                        aria-invalid={emailError ? true : undefined}
                        className={`w-full px-4 py-3 bg-white border font-montserrat text-sm tracking-wide text-brand-darkRed placeholder:text-brand-muted focus:border-brand-clayRed focus:outline-none focus:ring-1 focus:ring-brand-clayRed/25 transition-colors ${isRTL ? 'text-right' : ''} ${emailError ? 'border-brand-clayRed' : 'border-brand-darkRed/30'}`}
                        dir={isRTL ? 'rtl' : 'ltr'}
                      />
                      {emailError ? (
                        <p className={`font-montserrat text-xs text-brand-clayRed ${isRTL ? 'text-right' : ''}`}>
                          {emailError}
                        </p>
                      ) : null}
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`${ctaFormSubmit} disabled:opacity-50`}
                      data-cursor-hover
                    >
                      {isSubmitting ? copy.signingUp : copy.signUp}
                    </button>
                  </form>

                  <p className="font-montserrat text-xs text-brand-darkRed/50 mt-4">
                    {copy.privacyLine}
                  </p>
                </>
              ) : (
                <div className="text-center">
                  <div className="w-16 h-16 bg-brand-darkRed/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl">🎉</span>
                  </div>
                  <h2 className="font-rozha text-2xl md:text-3xl text-brand-darkRed mb-3">
                    {copy.welcome}
                  </h2>
                  <p className="font-montserrat text-sm text-brand-darkRed/70 tracking-wide mb-6">
                    {copy.discountIntro}
                  </p>

                  <div
                    onClick={copyCode}
                    className="bg-white border-2 border-dashed border-brand-darkRed px-6 py-4 mb-4 cursor-pointer hover:bg-brand-dustyBlue/20 transition-colors"
                    data-cursor-hover
                  >
                    <span className="font-montserrat font-bold text-2xl text-brand-darkRed tracking-[0.2em]">
                      {discountCode}
                    </span>
                  </div>

                  <p className="font-montserrat text-xs text-brand-darkRed/60 mb-6">
                    {copy.copyHint}
                  </p>

                  <button
                    onClick={handleClose}
                    className={ctaFormSubmitInline}
                    data-cursor-hover
                  >
                    {copy.startShopping}
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
