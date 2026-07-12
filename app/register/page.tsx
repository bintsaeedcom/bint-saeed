'use client'

import { useState } from 'react'
import LocaleLink from '@/components/LocaleLink'
import AppPageWayfinding from '@/components/AppPageWayfinding'
import { SITE_CONTENT_TOP_PAD } from '@/lib/ui/editorialPageChrome'
import { motion } from 'framer-motion'
import { FiEye, FiEyeOff, FiLock, FiMail, FiUser } from 'react-icons/fi'
import toast from 'react-hot-toast'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { commerceUi } from '@/lib/i18n/commerceUi'
import { passwordsMatch, validatePassword } from '@/lib/auth/passwordPolicy'
import { ctaFormSubmitCompact } from '@/lib/ui/ctaClasses'

function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  )
}

const fieldClass =
  'w-full rounded-md border border-brand-stone/70 bg-white py-3.5 font-montserrat text-sm text-brand-darkRed shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] placeholder:text-brand-stone/55 focus:border-brand-darkRed focus:outline-none focus:ring-1 focus:ring-brand-darkRed/25'

export default function RegisterPage() {
  const { isRTL, language } = useLanguage()
  const ui = commerceUi(language)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [busy, setBusy] = useState(false)
  const [devLink, setDevLink] = useState<string | null>(null)

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setDevLink(null)

    if (!name.trim()) {
      toast.error(isRTL ? 'الاسم مطلوب' : 'Name is required')
      return
    }

    const passwordCheck = validatePassword(password)
    if (!passwordCheck.ok) {
      toast.error(passwordCheck.error)
      return
    }

    if (!passwordsMatch(password, confirm)) {
      toast.error(isRTL ? 'كلمتا المرور غير متطابقتين' : 'Passwords do not match')
      return
    }

    setBusy(true)
    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          password,
          confirmPassword: confirm,
          name: name.trim(),
        }),
      })
      const data = (await res.json()) as {
        ok?: boolean
        error?: string
        devLink?: string
        message?: string
      }
      if (!res.ok) {
        toast.error(data.error || (isRTL ? 'فشل التسجيل' : 'Registration failed'))
        return
      }
      toast.success(data.message || (isRTL ? 'تحققي من بريدك' : 'Check your email'))
      if (data.devLink) setDevLink(data.devLink)
      setPassword('')
      setConfirm('')
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
            { label: ui.account.createAccount },
          ]}
          backLink={{
            href: '/account',
            label: ui.common.backToAccount,
          }}
        />

        <div className="lg:grid lg:grid-cols-[minmax(0,1.05fr)_minmax(0,30rem)] lg:items-start lg:gap-14 xl:gap-20">
          <header className={`mb-8 lg:mb-0 lg:pt-4 ${isRTL ? 'text-right' : ''}`}>
            <p className="mb-3 font-montserrat text-[10px] uppercase tracking-[0.4em] text-brand-dustyBlue lg:mb-4">
              Bint Saeed
            </p>
            <h1
              data-document-h1="true"
              className="font-rozha text-3xl text-brand-darkRed whitespace-nowrap md:text-4xl lg:text-[2.65rem] lg:leading-tight"
            >
              {isRTL ? 'إنشاء حساب' : 'Create an account'}
            </h1>
            <p className="mt-3 max-w-md font-montserrat text-sm leading-relaxed text-brand-clayRed/70 lg:mt-5 lg:text-base">
              {isRTL
                ? 'سنرسل لك رسالة لتأكيد بريدك الإلكتروني قبل تفعيل الحساب.'
                : 'We’ll email you a confirmation link — your account is activated only after you verify your email.'}
            </p>
          </header>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto w-full max-w-md rounded-2xl border border-brand-stone/55 bg-white p-8 shadow-[0_10px_40px_rgba(26,2,16,0.06)] ring-1 ring-brand-darkRed/5 md:p-10 lg:mx-0 lg:max-w-none"
          >
            <a
              href="/api/auth/google?next=/account"
              className="mb-6 flex w-full items-center justify-center gap-3 rounded-md border border-[#dadce0] bg-white px-4 py-3.5 font-montserrat text-[13px] font-medium tracking-normal text-[#3c4043] shadow-sm transition-colors hover:bg-[#f8f9fa] hover:shadow"
              data-cursor-hover
            >
              <GoogleIcon className="h-[18px] w-[18px] shrink-0" />
              <span>{isRTL ? 'المتابعة مع Google' : 'Continue with Google'}</span>
            </a>

            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-brand-stone/40" />
              </div>
              <div className="relative flex justify-center">
                <span className="bg-white px-3 font-montserrat text-[10px] uppercase tracking-[0.2em] text-brand-clayRed/55">
                  {isRTL ? 'أو' : 'or'}
                </span>
              </div>
            </div>

            <form onSubmit={onSubmit} className="space-y-5">
              <div>
                <label className="mb-2 block font-montserrat text-[10px] uppercase tracking-[0.2em] text-brand-darkRed">
                  {isRTL ? 'الاسم' : 'Name'}
                </label>
                <div className="relative">
                  <FiUser className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-stone/60 rtl:left-auto rtl:right-3" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    autoComplete="name"
                    className={`${fieldClass} ps-10 pe-4 rtl:ps-4 rtl:pe-10`}
                    placeholder={isRTL ? 'الاسم' : 'Your name'}
                  />
                </div>
              </div>
              <div>
                <label className="mb-2 block font-montserrat text-[10px] uppercase tracking-[0.2em] text-brand-darkRed">
                  {isRTL ? 'البريد الإلكتروني' : 'Email'}
                </label>
                <div className="relative">
                  <FiMail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-stone/60 rtl:left-auto rtl:right-3" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                    className={`${fieldClass} ps-10 pe-4 rtl:ps-4 rtl:pe-10`}
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="mb-2 block font-montserrat text-[10px] uppercase tracking-[0.2em] text-brand-darkRed">
                  {isRTL ? 'كلمة المرور' : 'Password'}
                </label>
                <div className="relative">
                  <FiLock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-stone/60 rtl:left-auto rtl:right-3" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    minLength={8}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="new-password"
                    className={`${fieldClass} ps-10 pe-11 rtl:ps-11 rtl:pe-10`}
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-brand-stone/70 transition-colors hover:text-brand-darkRed rtl:left-3 rtl:right-auto"
                    aria-label={
                      showPassword
                        ? isRTL
                          ? 'إخفاء كلمة المرور'
                          : 'Hide password'
                        : isRTL
                          ? 'إظهار كلمة المرور'
                          : 'Show password'
                    }
                    data-cursor-hover
                  >
                    {showPassword ? <FiEyeOff className="h-4 w-4" /> : <FiEye className="h-4 w-4" />}
                  </button>
                </div>
                <p className="mt-1 font-montserrat text-[10px] text-brand-clayRed/50">
                  {isRTL
                    ? '٨ أحرف على الأقل، حرف كبير واحد ورقم واحد'
                    : 'At least 8 characters, one capital letter, and one number'}
                </p>
              </div>
              <div>
                <label className="mb-2 block font-montserrat text-[10px] uppercase tracking-[0.2em] text-brand-darkRed">
                  {isRTL ? 'تأكيد كلمة المرور' : 'Confirm password'}
                </label>
                <div className="relative">
                  <FiLock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-stone/60 rtl:left-auto rtl:right-3" />
                  <input
                    type={showConfirm ? 'text' : 'password'}
                    required
                    value={confirm}
                    onChange={(e) => setConfirm(e.target.value)}
                    autoComplete="new-password"
                    className={`${fieldClass} ps-10 pe-11 rtl:ps-11 rtl:pe-10`}
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirm((v) => !v)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-brand-stone/70 transition-colors hover:text-brand-darkRed rtl:left-3 rtl:right-auto"
                    aria-label={
                      showConfirm
                        ? isRTL
                          ? 'إخفاء كلمة المرور'
                          : 'Hide password'
                        : isRTL
                          ? 'إظهار كلمة المرور'
                          : 'Show password'
                    }
                    data-cursor-hover
                  >
                    {showConfirm ? <FiEyeOff className="h-4 w-4" /> : <FiEye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={busy}
                className={ctaFormSubmitCompact}
                data-cursor-hover
              >
                {busy ? (isRTL ? 'جاري الإرسال…' : 'Sending…') : isRTL ? 'إنشاء الحساب' : 'Create account'}
              </button>
            </form>

            <p className="mt-6 text-center font-montserrat text-xs text-brand-clayRed/60">
              {isRTL ? 'لديك حساب بالفعل؟' : 'Already have an account?'}{' '}
              <LocaleLink href="/sign-in" className="text-brand-dustyBlue underline">
                {isRTL ? 'تسجيل الدخول' : 'Sign in'}
              </LocaleLink>
            </p>

            {devLink ? (
              <div className="mt-6 rounded-lg border border-dashed border-brand-dustyBlue/40 bg-brand-dustyBlue/5 p-4">
                <p className="mb-2 font-montserrat text-[10px] uppercase tracking-[0.15em] text-brand-darkRed">
                  Dev only — no RESEND_API_KEY
                </p>
                <a href={devLink} className="break-all font-montserrat text-xs text-brand-dustyBlue underline">
                  {devLink}
                </a>
              </div>
            ) : null}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
