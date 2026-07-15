'use client'

import { useState } from 'react'
import LocaleLink from '@/components/LocaleLink'
import AppPageWayfinding from '@/components/AppPageWayfinding'
import { SITE_CONTENT_TOP_PAD } from '@/lib/ui/editorialPageChrome'
import { motion } from 'framer-motion'
import { FiMail } from 'react-icons/fi'
import toast from 'react-hot-toast'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { commerceUi } from '@/lib/i18n/commerceUi'
import { ctaFormSubmitCompact } from '@/lib/ui/ctaClasses'
import {
  formCardClass,
  formFieldClass,
  formFooterLinkClass,
  formFooterTextClass,
  formHintClass,
  formIconClass,
  formLabelClass,
} from '@/lib/ui/formFieldClasses'

export default function ForgotPasswordPage() {
  const { isRTL, language } = useLanguage()
  const ui = commerceUi(language)
  const [email, setEmail] = useState('')
  const [busy, setBusy] = useState(false)
  const [sent, setSent] = useState(false)
  const [devLink, setDevLink] = useState<string | null>(null)

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setDevLink(null)
    setBusy(true)
    try {
      const res = await fetch('/api/auth/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      const data = (await res.json()) as {
        ok?: boolean
        error?: string
        message?: string
        devLink?: string
      }
      if (!res.ok) {
        toast.error(data.error || (isRTL ? 'تعذّر الإرسال' : 'Could not send reset email'))
        return
      }
      setSent(true)
      toast.success(
        data.message ||
          (isRTL
            ? 'إذا كان الحساب موجوداً، أرسلنا رابط إعادة التعيين'
            : 'If an account exists, we sent a reset link'),
      )
      if (data.devLink) setDevLink(data.devLink)
    } catch {
      toast.error(isRTL ? 'حدث خطأ' : 'Something went wrong')
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className={`min-h-screen bg-brand-pageCanvas ${SITE_CONTENT_TOP_PAD} pb-20`}>
      <div className="container mx-auto max-w-6xl px-6 lg:px-10">
        <AppPageWayfinding
          rtl={isRTL}
          className="mb-10 lg:mb-12"
          segments={[
            { label: ui.common.home, href: '/home' },
            { label: ui.account.account, href: '/account' },
            { label: ui.account.signIn, href: '/sign-in' },
            { label: ui.account.forgotPassword },
          ]}
          backLink={{
            href: '/sign-in',
            label: ui.account.signIn,
          }}
        />

        <div className="lg:grid lg:grid-cols-[minmax(0,1.05fr)_minmax(0,30rem)] lg:items-start lg:gap-14 xl:gap-20">
          <header className={`mb-8 lg:mb-0 lg:pt-4 text-start`}>
            <p className="mb-3 font-montserrat text-[10px] uppercase tracking-[0.4em] text-brand-dustyBlue lg:mb-4">
              Bint Saeed
            </p>
            <h1
              data-document-h1="true"
              className="font-rozha text-3xl text-brand-darkRed md:text-4xl lg:text-[2.65rem] lg:leading-tight"
            >
              {ui.account.forgotPassword}
            </h1>
            <p className="mt-3 max-w-md font-montserrat text-sm leading-relaxed text-brand-clayRed/70 lg:mt-5 lg:text-base">
              {ui.account.forgotPasswordDesc}
            </p>
          </header>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mx-auto max-w-md lg:mx-0 lg:max-w-none ${formCardClass}`}
          >
            {sent ? (
              <div className="text-start">
                <p className="font-montserrat text-sm leading-relaxed text-brand-darkRed/85">
                  {isRTL
                    ? 'إذا كان هناك حساب مرتبط بهذا البريد، ستصلك رسالة تحتوي على رابط إعادة التعيين. تحققي من صندوق الوارد والمجلد غير المرغوب فيه.'
                    : 'If an account exists for that email, you will receive a message with a reset link. Check your inbox and spam folder.'}
                </p>
                {devLink ? (
                  <p className={`mt-4 ${formHintClass}`}>
                    Dev link:{' '}
                    <a href={devLink} className={formFooterLinkClass}>
                      {devLink}
                    </a>
                  </p>
                ) : null}
                <p className={formFooterTextClass}>
                  <LocaleLink href="/sign-in" className={formFooterLinkClass}>
                    {ui.account.signIn}
                  </LocaleLink>
                </p>
              </div>
            ) : (
              <>
                <form onSubmit={onSubmit} className="space-y-5">
                  <div>
                    <label className={formLabelClass}>{isRTL ? 'البريد الإلكتروني' : 'Email'}</label>
                    <div className="relative">
                      <FiMail className={formIconClass} />
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        autoComplete="email"
                        className={`${formFieldClass} ps-10 pe-4 rtl:ps-4 rtl:pe-10`}
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={busy}
                    className={ctaFormSubmitCompact}
                    data-cursor-hover
                  >
                    {busy
                      ? isRTL
                        ? 'جاري الإرسال…'
                        : 'Sending…'
                      : isRTL
                        ? 'إرسال رابط إعادة التعيين'
                        : 'Send reset link'}
                  </button>
                </form>

                <p className={formFooterTextClass}>
                  <LocaleLink href="/sign-in" className={formFooterLinkClass}>
                    {ui.account.signIn}
                  </LocaleLink>
                </p>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
