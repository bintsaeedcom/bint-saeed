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
import { validateSubscriberName } from '@/lib/validateSubscriberName'
import { getEmailPopupCopy } from '@/lib/i18n/emailPopupI18n'
import { lockBodyScroll } from '@/lib/ui/bodyScrollLock'
import { HOUSE_FIRST_PURCHASE_CODE } from '@/lib/membership/constants'
import {
  glassOverlayPanel,
  glassOverlayWash,
  glassSecondaryBtnOnDark,
  glassTextBodyOnDark,
  glassTextMutedOnDark,
  glassTextTitleOnDark,
} from '@/lib/ui/glassClasses'
import { trackEvent } from '@/lib/analytics/tracking'

const HOUSE_MONOGRAM_SRC = '/brand/house-monogram-burgundy.webp'

export default function EmailPopup() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [discountCode, setDiscountCode] = useState(HOUSE_FIRST_PURCHASE_CODE)
  const [formData, setFormData] = useState({ name: '', email: '' })
  const [nameError, setNameError] = useState('')
  const [emailError, setEmailError] = useState('')
  const { isRTL, language } = useLanguage()
  const copy = getEmailPopupCopy(language)

  useEffect(() => {
    if (!isOpen) return
    return lockBodyScroll()
  }, [isOpen])

  useEffect(() => {
    const forcePreview =
      typeof window !== 'undefined' &&
      new URLSearchParams(window.location.search).get('preview') === 'house-popup'
    if (forcePreview) {
      setIsOpen(true)
      return
    }

    const inner = pathname ? stripLocaleFromPathname(pathname).pathname : '/'
    const onInviteSurface =
      inner === '/home' ||
      inner.startsWith('/home/') ||
      inner === '/shop' ||
      inner.startsWith('/shop/')
    if (!onInviteSurface) return

    const hasSeenPopup = localStorage.getItem('bint-saeed-popup-seen')
    const hasSubscribed = localStorage.getItem('bint-saeed-subscribed')

    if (!hasSeenPopup && !hasSubscribed) {
      const timer = setTimeout(() => {
        if (hasStoredCookieChoice()) setIsOpen(true)
      }, 45000)
      return () => clearTimeout(timer)
    }
  }, [pathname])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const nameCheck = validateSubscriberName(formData.name, language)
    if (!nameCheck.valid) {
      setNameError(nameCheck.message)
      toast.error(nameCheck.message)
      return
    }
    const check = validateSubscriberEmail(formData.email, language)
    if (!check.valid) {
      setEmailError(check.message)
      toast.error(check.message)
      return
    }
    setNameError('')
    setEmailError('')
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          name: nameCheck.name,
          email: check.email,
          source: 'house_community_popup',
        }),
      })

      const data = await response.json().catch(() => ({}))

      if (response.ok) {
        const code =
          typeof data.firstPurchaseCode === 'string' && data.firstPurchaseCode.trim()
            ? data.firstPurchaseCode.trim().toUpperCase()
            : HOUSE_FIRST_PURCHASE_CODE
        setDiscountCode(code)
        setShowSuccess(true)
        localStorage.setItem('bint-saeed-subscribed', 'true')
        localStorage.setItem('bint-saeed-discount-code', code)
        trackEvent('subscribe', { method: 'house_community_popup' })
      } else {
        const msg = typeof data.error === 'string' ? data.error : ''
        if (msg) {
          setEmailError(msg)
          toast.error(msg)
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

  const fieldClass =
    'w-full border border-white/25 bg-white/10 px-4 py-3 font-montserrat text-sm tracking-wide text-[#faf8f5] placeholder:text-[#e8d8c8]/45 backdrop-blur-sm transition-colors focus:border-brand-dustyBlue/70 focus:outline-none focus:ring-1 focus:ring-brand-dustyBlue/35'

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
            className="fixed inset-0 z-[200] bg-[#12080b]/50 backdrop-blur-md"
            data-cursor-hover
          />

          <motion.div
            key="email-popup-shell"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pointer-events-none fixed inset-0 z-[201] flex items-end justify-center p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-[max(0.5rem,env(safe-area-inset-top))] sm:items-center sm:p-6 lg:p-8"
          >
            <motion.div
              key="email-popup-modal"
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 8 }}
              transition={{ type: 'spring', damping: 28, stiffness: 320 }}
              className={`pointer-events-auto relative flex h-auto max-h-full min-h-0 w-full max-w-lg flex-col ${glassOverlayPanel} md:max-w-4xl ${
                isRTL ? 'md:flex-row-reverse' : 'md:flex-row'
              }`}
              data-scroll-lock-owner="true"
              data-cursor-hover
              role="dialog"
              aria-modal="true"
              aria-label={copy.headline}
            >
            <div className={glassOverlayWash} aria-hidden />

            {/* Mobile double frame — invitation-card edge */}
            <div
              className="pointer-events-none absolute inset-2 z-[1] border border-white/20 md:hidden"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-[11px] z-[1] border border-brand-dustyBlue/30 md:hidden"
              aria-hidden
            />

            <button
              type="button"
              onClick={handleClose}
              className="absolute end-2.5 top-2.5 z-20 border border-white/25 bg-black/35 p-2 text-[#e8d8c8]/90 backdrop-blur-md transition-colors hover:border-brand-dustyBlue/50 hover:text-white sm:end-3 sm:top-3"
              data-cursor-hover
              aria-label="Close"
            >
              <FiX className="h-5 w-5" />
            </button>

            {/* Desktop only — full square monogram (never cropped) */}
            <div className="relative z-[2] hidden aspect-square w-[min(50%,28rem)] shrink-0 self-center md:block">
              <Image
                src={HOUSE_MONOGRAM_SRC}
                alt={copy.imageAlt}
                fill
                priority
                sizes="448px"
                className="object-contain object-center"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/25" />
              <div className="absolute bottom-8 left-8 right-10">
                <p className="font-rozha text-3xl leading-tight text-[#faf8f5] drop-shadow-[0_2px_18px_rgba(0,0,0,0.45)]">
                  {copy.exclusiveOffer}
                </p>
              </div>
            </div>

            <div className="relative z-[2] flex min-h-0 flex-1 flex-col overflow-y-auto overscroll-contain px-6 pb-6 pe-12 pt-11 text-start sm:p-7 sm:pe-14 sm:pt-12 md:justify-center md:p-9 md:pe-14 md:pt-10">

              {!showSuccess ? (
                <div className="relative">
                  {/* Mobile seal — small monogram, not a cropped banner */}
                  <div className="mb-5 flex flex-col items-center md:hidden">
                    <div className="relative mb-3 h-14 w-14 overflow-hidden">
                      <Image
                        src={HOUSE_MONOGRAM_SRC}
                        alt=""
                        fill
                        sizes="56px"
                        className="object-contain object-center"
                        aria-hidden
                      />
                    </div>
                    <p className="font-rozha text-base leading-snug text-[#faf8f5]/95">
                      {copy.exclusiveOffer}
                    </p>
                    <div className="mt-3 h-px w-10 bg-brand-dustyBlue/55" aria-hidden />
                  </div>

                  <p className="mb-1.5 font-montserrat text-[10px] uppercase tracking-[0.28em] text-brand-dustyBlue sm:mb-2">
                    {copy.eyebrow}
                  </p>
                  <h2 className={`mb-2 font-rozha text-xl sm:mb-3 sm:text-2xl md:text-3xl ${glassTextTitleOnDark}`}>
                    {copy.headline}
                  </h2>
                  <p className={`mb-4 font-montserrat text-[13px] leading-relaxed tracking-wide sm:mb-6 sm:text-sm ${glassTextBodyOnDark}`}>
                    {copy.body}
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-3.5">
                    <div className="space-y-1">
                      <input
                        type="text"
                        required
                        minLength={5}
                        autoComplete="name"
                        placeholder={copy.fullName}
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value })
                          if (nameError) setNameError('')
                        }}
                        onBlur={() => {
                          if (!formData.name.trim()) return
                          const v = validateSubscriberName(formData.name, language)
                          setNameError(v.valid ? '' : v.message)
                        }}
                        aria-invalid={nameError ? true : undefined}
                        className={`${fieldClass} text-start ${nameError ? 'border-[#c47878]' : ''}`}
                        dir={isRTL ? 'rtl' : 'ltr'}
                      />
                      {nameError ? (
                        <p className="font-montserrat text-xs text-[#e8b4b4] text-start">{nameError}</p>
                      ) : null}
                    </div>
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
                        className={`${fieldClass} text-start ${
                          emailError ? 'border-[#c47878]' : ''
                        }`}
                        dir={isRTL ? 'rtl' : 'ltr'}
                      />
                      {emailError ? (
                        <p className="font-montserrat text-xs text-[#e8b4b4] text-start">{emailError}</p>
                      ) : null}
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="relative min-h-[42px] w-full border border-brand-dustyBlue bg-brand-dustyBlue px-3 py-2.5 font-montserrat text-[10px] uppercase tracking-[0.14em] text-[#1a0008] transition-colors hover:bg-white hover:border-white disabled:opacity-50"
                      data-cursor-hover
                    >
                      {isSubmitting ? copy.signingUp : copy.signUp}
                    </button>
                  </form>

                  <p className={`mt-3 font-montserrat text-[11px] leading-relaxed sm:mt-4 ${glassTextMutedOnDark}`}>
                    {copy.privacyLine}
                  </p>
                </div>
              ) : (
                <div className="relative text-center">
                  <h2 className={`mb-2 font-rozha text-xl sm:mb-3 sm:text-2xl md:text-3xl ${glassTextTitleOnDark}`}>
                    {copy.welcome}
                  </h2>
                  <p className={`mb-4 font-montserrat text-[13px] tracking-wide sm:mb-6 sm:text-sm ${glassTextBodyOnDark}`}>
                    {copy.discountIntro}
                  </p>

                  <div
                    onClick={copyCode}
                    className="mb-3 cursor-pointer border border-dashed border-brand-dustyBlue/55 bg-white/10 px-4 py-3.5 backdrop-blur-sm transition-colors hover:bg-white/15 sm:mb-4 sm:px-6 sm:py-4"
                    data-cursor-hover
                  >
                    <span className="font-montserrat text-xl font-semibold tracking-[0.22em] text-brand-dustyBlue sm:text-2xl">
                      {discountCode}
                    </span>
                  </div>

                  <p className={`mb-2 font-montserrat text-xs ${glassTextMutedOnDark}`}>{copy.copyHint}</p>
                  <p className={`mb-5 font-montserrat text-xs leading-relaxed sm:mb-6 ${glassTextMutedOnDark}`}>
                    {copy.privilegeNote}
                  </p>

                  <button
                    type="button"
                    onClick={handleClose}
                    className={`${glassSecondaryBtnOnDark} mx-auto max-w-xs`}
                    data-cursor-hover
                  >
                    {copy.startShopping}
                  </button>
                </div>
              )}
            </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
