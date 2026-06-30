'use client'

import { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import LocaleLink from '@/components/LocaleLink'
import AppPageWayfinding from '@/components/AppPageWayfinding'
import { motion } from 'framer-motion'
import { FiLock, FiMail } from 'react-icons/fi'
import toast from 'react-hot-toast'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { commerceUi } from '@/lib/i18n/commerceUi'
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

const ERROR_MESSAGES: Record<string, { en: string; ar: string }> = {
  google_not_configured: {
    en: 'Google sign-in is not configured yet.',
    ar: 'تسجيل الدخول عبر Google غير مُعدّ بعد.',
  },
  google_denied: {
    en: 'Google sign-in was cancelled.',
    ar: 'تم إلغاء تسجيل الدخول عبر Google.',
  },
  google_state: {
    en: 'Sign-in session expired. Please try again.',
    ar: 'انتهت جلسة تسجيل الدخول. حاولي مرة أخرى.',
  },
  google_failed: {
    en: 'Google sign-in failed. Please try again.',
    ar: 'فشل تسجيل الدخول عبر Google. حاولي مرة أخرى.',
  },
  session: {
    en: 'Could not create your session. Please try again.',
    ar: 'تعذّر إنشاء الجلسة. حاولي مرة أخرى.',
  },
}

export default function SignInPage() {
  const { isRTL, language } = useLanguage()
  const ui = commerceUi(language)
  const router = useRouter()
  const searchParams = useSearchParams()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [busy, setBusy] = useState(false)

  useEffect(() => {
    const error = searchParams?.get('error')
    if (!error) return
    const msg = ERROR_MESSAGES[error]
    toast.error(msg ? (isRTL ? msg.ar : msg.en) : isRTL ? 'فشل تسجيل الدخول' : 'Sign-in failed')
  }, [searchParams, isRTL])

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setBusy(true)
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
        credentials: 'include',
      })
      const data = (await res.json()) as { ok?: boolean; error?: string }
      if (!res.ok) {
        toast.error(data.error || (isRTL ? 'بيانات الدخول غير صحيحة' : 'Invalid email or password'))
        return
      }
      toast.success(isRTL ? 'تم تسجيل الدخول' : 'Signed in')
      router.push('/account')
      router.refresh()
    } catch {
      toast.error(isRTL ? 'حدث خطأ' : 'Something went wrong')
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="min-h-screen bg-brand-pageCanvas pt-28 pb-20">
      <div className="container mx-auto max-w-6xl px-6 lg:px-10">
        <AppPageWayfinding
          rtl={isRTL}
          className="mb-10 lg:mb-12"
          segments={[
            { label: ui.common.home, href: '/home' },
            { label: ui.account.account, href: '/account' },
            { label: ui.account.signIn },
          ]}
          backLink={{
            href: '/account',
            label: isRTL ? 'العودة للحساب' : 'Back to Account',
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
              {ui.account.signIn}
            </h1>
            <p className="mt-3 max-w-md font-montserrat text-sm leading-relaxed text-brand-clayRed/70 lg:mt-5 lg:text-base">
              {ui.account.signInDesc}
            </p>
          </header>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-md rounded-2xl border border-brand-stone/25 bg-white p-8 shadow-sm mx-auto lg:mx-0 lg:max-w-none md:p-10"
          >
          <a
            href="/api/auth/google?next=/account"
            className="mb-6 flex w-full items-center justify-center gap-3 border border-brand-stone/40 bg-white py-3.5 font-montserrat text-xs uppercase tracking-[0.16em] text-brand-darkRed transition-colors hover:border-brand-dustyBlue/50 hover:bg-brand-pageCanvas"
            data-cursor-hover
          >
            <GoogleIcon className="h-5 w-5" />
            {isRTL ? 'المتابعة مع Google' : 'Continue with Google'}
          </a>

          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-brand-stone/25" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white px-3 font-montserrat text-[10px] uppercase tracking-[0.2em] text-brand-clayRed/45">
                {isRTL ? 'أو' : 'or'}
              </span>
            </div>
          </div>

          <form onSubmit={onSubmit} className="space-y-5">
            <div>
              <label className="mb-2 block font-montserrat text-[10px] uppercase tracking-[0.2em] text-brand-darkRed">
                {isRTL ? 'البريد الإلكتروني' : 'Email'}
              </label>
              <div className="relative">
                <FiMail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-stone/50 rtl:left-auto rtl:right-3" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                  className="w-full border border-brand-stone/40 bg-brand-pageCanvas py-3 ps-10 pe-4 font-montserrat text-sm focus:border-brand-darkRed focus:outline-none rtl:ps-4 rtl:pe-10"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div>
              <label className="mb-2 block font-montserrat text-[10px] uppercase tracking-[0.2em] text-brand-darkRed">
                {isRTL ? 'كلمة المرور' : 'Password'}
              </label>
              <div className="relative">
                <FiLock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-stone/50 rtl:left-auto rtl:right-3" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                  className="w-full border border-brand-stone/40 bg-brand-pageCanvas py-3 ps-10 pe-4 font-montserrat text-sm focus:border-brand-darkRed focus:outline-none rtl:ps-4 rtl:pe-10"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={busy}
              className={ctaFormSubmitCompact}
              data-cursor-hover
            >
              {busy ? (isRTL ? 'جاري الدخول…' : 'Signing in…') : ui.account.signIn}
            </button>
          </form>

          <p className="mt-6 text-center font-montserrat text-xs text-brand-clayRed/60">
            {isRTL ? 'ليس لديك حساب؟' : "Don't have an account?"}{' '}
            <LocaleLink href="/register" className="text-brand-dustyBlue underline">
              {ui.account.createAccount}
            </LocaleLink>
          </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
