'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { stripLocaleFromPathname } from '@/lib/i18n/routing'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { FiX } from 'react-icons/fi'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { hasStoredCookieChoice } from '@/lib/analytics/consent'
import { hasRegionalExperienceChoice } from '@/lib/geo/geoDetection'
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
const EMAIL_POPUP_DELAY_MS = 150_000
const SESSION_STARTED_AT_KEY = 'bint-saeed-session-started-at'
const POPUP_SEEN_KEY = 'bint-saeed-popup-seen'
const SUBSCRIBED_KEY = 'bint-saeed-subscribed'
/** Set when the modal is closed without subscribing — the corner tab stays until its own × is pressed. */
const TEASER_KEY = 'bint-saeed-welcome-gift-teaser'

export default function EmailPopup() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [showTeaser, setShowTeaser] = useState(false)
  const [commerceChromeUp, setCommerceChromeUp] = useState(false)
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
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
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, showSuccess])

  useEffect(() => {
    const sync = () => {
      setCommerceChromeUp(document.documentElement.dataset.commerceBottomChrome === '1')
      setMobileNavOpen(document.documentElement.dataset.mobileNavOpen === '1')
    }
    sync()
    const observer = new MutationObserver(sync)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-commerce-bottom-chrome', 'data-mobile-nav-open'],
    })
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (localStorage.getItem(SUBSCRIBED_KEY) || localStorage.getItem(POPUP_SEEN_KEY)) {
      setShowTeaser(false)
      return
    }
    setShowTeaser(localStorage.getItem(TEASER_KEY) === 'true')
  }, [pathname])

  useEffect(() => {
    const forcePreview =
      typeof window !== 'undefined' &&
      new URLSearchParams(window.location.search).get('preview') === 'house-popup'
    if (forcePreview) {
      setIsOpen(true)
      return
    }

    const storedSessionStart = Number(sessionStorage.getItem(SESSION_STARTED_AT_KEY))
    const sessionStartedAt =
      Number.isFinite(storedSessionStart) && storedSessionStart > 0
        ? storedSessionStart
        : Date.now()
    if (sessionStartedAt !== storedSessionStart) {
      sessionStorage.setItem(SESSION_STARTED_AT_KEY, String(sessionStartedAt))
    }

    const inner = pathname ? stripLocaleFromPathname(pathname).pathname : '/'
    const onInviteSurface =
      inner === '/home' ||
      inner.startsWith('/home/') ||
      inner === '/shop' ||
      inner.startsWith('/shop/')
    if (!onInviteSurface) return

    const hasSeenPopup = localStorage.getItem(POPUP_SEEN_KEY)
    const hasSubscribed = localStorage.getItem(SUBSCRIBED_KEY)
    const teaserParked = localStorage.getItem(TEASER_KEY) === 'true'

    if (!hasSeenPopup && !hasSubscribed && !teaserParked) {
      let timer: number | undefined
      let regionalSettled = hasRegionalExperienceChoice()

      const tryOpen = () => {
        if (timer != null) {
          window.clearTimeout(timer)
          timer = undefined
        }
        const remaining = sessionStartedAt + EMAIL_POPUP_DELAY_MS - Date.now()
        if (remaining > 0) {
          timer = window.setTimeout(tryOpen, remaining)
          return
        }
        if (regionalSettled && hasStoredCookieChoice()) setIsOpen(true)
      }

      const onRegionalOpened = () => {
        regionalSettled = false
      }
      const onRegionalClosed = () => {
        regionalSettled = true
        tryOpen()
      }
      const onCookieClosed = () => tryOpen()

      window.addEventListener('regional-experience-opened', onRegionalOpened)
      window.addEventListener('regional-experience-closed', onRegionalClosed)
      window.addEventListener('cookie-consent-closed', onCookieClosed)
      tryOpen()

      return () => {
        if (timer != null) window.clearTimeout(timer)
        window.removeEventListener('regional-experience-opened', onRegionalOpened)
        window.removeEventListener('regional-experience-closed', onRegionalClosed)
        window.removeEventListener('cookie-consent-closed', onCookieClosed)
      }
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
        setShowTeaser(false)
        localStorage.removeItem(TEASER_KEY)
        localStorage.setItem(SUBSCRIBED_KEY, 'true')
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
    if (showSuccess || localStorage.getItem(SUBSCRIBED_KEY)) {
      localStorage.setItem(POPUP_SEEN_KEY, 'true')
      localStorage.removeItem(TEASER_KEY)
      setShowTeaser(false)
      return
    }
    localStorage.setItem(TEASER_KEY, 'true')
    setShowTeaser(true)
  }

  const reopenFromTeaser = () => {
    setShowTeaser(false)
    setIsOpen(true)
    trackEvent('welcome_gift_teaser_open', {})
  }

  const dismissTeaser = () => {
    setShowTeaser(false)
    localStorage.removeItem(TEASER_KEY)
    localStorage.setItem(POPUP_SEEN_KEY, 'true')
  }

  const innerPath = pathname ? stripLocaleFromPathname(pathname).pathname : '/'
  const teaserSuppressed =
    innerPath.startsWith('/checkout') || innerPath === '/cart' || commerceChromeUp || mobileNavOpen

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
              className={`pointer-events-auto relative flex h-auto max-h-full min-h-0 w-full max-w-lg flex-col ${glassOverlayPanel}`}
              data-scroll-lock-owner="true"
              data-cursor-hover
              role="dialog"
              aria-modal="true"
              aria-label={copy.headline}
            >
            <div className={glassOverlayWash} aria-hidden />

            {/* Double frame — invitation-card edge */}
            <div
              className="pointer-events-none absolute inset-2 z-[1] border border-white/20"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-[11px] z-[1] border border-brand-dustyBlue/30"
              aria-hidden
            />

            <button
              type="button"
              onClick={handleClose}
              className="absolute end-2.5 top-2.5 z-20 border border-white/25 bg-black/35 p-2 text-[#e8d8c8]/90 backdrop-blur-md transition-colors hover:border-brand-dustyBlue/50 hover:text-white sm:end-3 sm:top-3"
              data-cursor-hover
              aria-label={copy.closeAria}
            >
              <FiX className="h-5 w-5" />
            </button>

            <div className="relative z-[2] flex min-h-0 flex-1 flex-col overflow-y-auto overscroll-contain px-7 pb-8 pt-12 sm:px-10 sm:pb-10 sm:pt-14">

              {!showSuccess ? (
                <div className="relative text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="relative h-16 w-16 overflow-hidden sm:h-[4.5rem] sm:w-[4.5rem]">
                      <Image
                        src={HOUSE_MONOGRAM_SRC}
                        alt=""
                        fill
                        priority
                        sizes="72px"
                        className="object-contain object-center"
                        aria-hidden
                      />
                    </div>
                  </div>

                  <h2
                    className={`mb-3 text-center font-montserrat text-lg uppercase tracking-[0.28em] sm:text-xl ${glassTextTitleOnDark}`}
                  >
                    {copy.headline}
                  </h2>
                  <p className={`mb-7 text-center font-montserrat text-[14px] leading-relaxed tracking-wide sm:text-[15px] ${glassTextBodyOnDark}`}>
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

                  <p className={`mt-4 text-center font-montserrat text-[11px] leading-relaxed ${glassTextMutedOnDark}`}>
                    {copy.privacyLine}
                  </p>
                </div>
              ) : (
                <div className="relative text-center">
                  <h2 className={`mb-3 text-center font-montserrat text-lg uppercase tracking-[0.28em] sm:text-xl ${glassTextTitleOnDark}`}>
                    {copy.welcome}
                  </h2>
                  <p className={`mb-5 text-center font-montserrat text-[13px] leading-relaxed tracking-wide sm:mb-6 sm:text-sm ${glassTextBodyOnDark}`}>
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

                  <p className={`mb-2 text-center font-montserrat text-xs ${glassTextMutedOnDark}`}>{copy.copyHint}</p>
                  <p className={`mb-5 text-center font-montserrat text-xs leading-relaxed sm:mb-6 ${glassTextMutedOnDark}`}>
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
      {showTeaser && !isOpen && !teaserSuppressed && (
        <motion.div
          key="welcome-gift-teaser"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className={`fixed z-[79] ${isRTL ? 'left-[4.625rem] sm:left-[5.75rem]' : 'right-[4.625rem] sm:right-[5.75rem]'}`}
          style={{
            bottom:
              'calc(var(--mobile-bottom-chrome, 0px) + max(1.15rem, env(safe-area-inset-bottom, 0px)) + 0.125rem)',
          }}
        >
          <div className={`relative flex items-stretch ${glassOverlayPanel}`}>
            <div className={glassOverlayWash} aria-hidden />
            <button
              type="button"
              onClick={reopenFromTeaser}
              className="relative z-[1] flex items-center gap-2.5 py-2.5 ps-3 pe-2 text-start transition-colors hover:bg-white/5"
              aria-label={copy.teaserOpenAria}
              data-cursor-hover
            >
              <span className="relative h-7 w-7 shrink-0 overflow-hidden">
                <Image src={HOUSE_MONOGRAM_SRC} alt="" fill sizes="28px" className="object-contain" aria-hidden />
              </span>
              <span className="font-montserrat text-[10px] uppercase tracking-[0.22em] text-[#faf8f5]">
                {copy.teaserLabel}
              </span>
            </button>
            <button
              type="button"
              onClick={dismissTeaser}
              className="relative z-[1] flex items-center border-s border-white/15 px-2.5 text-[#e8d8c8]/75 transition-colors hover:text-white"
              aria-label={copy.teaserDismissAria}
              data-cursor-hover
            >
              <FiX className="h-3.5 w-3.5" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
