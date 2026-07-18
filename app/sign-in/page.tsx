'use client'

import { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import LocaleLink from '@/components/LocaleLink'
import AppPageWayfinding from '@/components/AppPageWayfinding'
import { SITE_CONTENT_TOP_PAD } from '@/lib/ui/editorialPageChrome'
import { motion } from 'framer-motion'
import { FiEye, FiEyeOff, FiLock, FiMail } from 'react-icons/fi'
import toast from 'react-hot-toast'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { commerceUi } from '@/lib/i18n/commerceUi'
import { getAuthFormCopy } from '@/lib/i18n/authFormCopyI18n'
import { ctaFormSubmitCompact } from '@/lib/ui/ctaClasses'
import {
  formCardClass,
  formDividerLabelClass,
  formDividerLineClass,
  formFieldClass,
  formFooterLinkClass,
  formFooterTextClass,
  formIconButtonClass,
  formIconClass,
  formLabelClass,
} from '@/lib/ui/formFieldClasses'

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

export default function SignInPage() {
  const { isRTL, language } = useLanguage()
  const ui = commerceUi(language)
  const auth = getAuthFormCopy(language)
  const router = useRouter()
  const searchParams = useSearchParams()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [busy, setBusy] = useState(false)

  useEffect(() => {
    const error = searchParams?.get('error')
    if (!error) return
    const msg = auth.googleErrors[error]
    toast.error(msg ?? auth.signInFailed)
  }, [searchParams, auth])

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
        toast.error(data.error || auth.invalidCredentials)
        return
      }
      toast.success(auth.signedIn)
      router.push('/account')
      router.refresh()
    } catch {
      toast.error(auth.genericError)
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
            { label: ui.account.signIn },
          ]}
          backLink={{
            href: '/account',
            label: ui.common.backToAccount,
          }}
        />

        <div className="lg:grid lg:grid-cols-[minmax(0,1.05fr)_minmax(0,30rem)] lg:items-start lg:gap-14 xl:gap-20">
          <header className={`mb-8 lg:mb-0 lg:pt-4 text-start`}>
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
            className={`mx-auto max-w-md lg:mx-0 lg:max-w-none ${formCardClass}`}
          >
            <a
              href="/api/auth/google?next=/account"
              className="mb-6 flex w-full items-center justify-center gap-3 rounded-md border border-brand-darkRed/20 bg-white px-4 py-3.5 font-montserrat text-[13px] font-medium tracking-normal text-brand-darkRed shadow-sm transition-colors hover:border-brand-darkRed/35 hover:bg-brand-pageCanvas"
              data-cursor-hover
            >
              <GoogleIcon className="h-[18px] w-[18px] shrink-0" />
              <span>{auth.continueWithGoogle}</span>
            </a>

            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className={formDividerLineClass} />
              </div>
              <div className="relative flex justify-center">
                <span className={formDividerLabelClass}>{auth.or}</span>
              </div>
            </div>

            <form onSubmit={onSubmit} className="space-y-5">
              <div>
                <label className={formLabelClass}>{auth.email}</label>
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
              <div>
                <div className={`mb-2 flex items-center justify-between gap-3 `}>
                  <label className="font-montserrat text-[10px] font-medium uppercase tracking-[0.18em] text-brand-darkRed">
                    {auth.password}
                  </label>
                  <LocaleLink
                    href="/forgot-password"
                    className="font-montserrat text-[11px] tracking-wide text-brand-dustyBlue transition-colors hover:text-brand-darkRed"
                    data-cursor-hover
                  >
                    {ui.account.forgotPassword}?
                  </LocaleLink>
                </div>
                <div className="relative">
                  <FiLock className={formIconClass} />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="current-password"
                    className={`${formFieldClass} ps-10 pe-11 rtl:ps-11 rtl:pe-10`}
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    className={formIconButtonClass}
                    aria-label={showPassword ? auth.hidePassword : auth.showPassword}
                    data-cursor-hover
                  >
                    {showPassword ? <FiEyeOff className="h-4 w-4" /> : <FiEye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={busy}
                className={ctaFormSubmitCompact}
                data-cursor-hover
              >
                {busy ? auth.signingIn : ui.account.signIn}
              </button>
            </form>

            <p className={formFooterTextClass}>
              {auth.noAccount}{' '}
              <LocaleLink href="/register" className={formFooterLinkClass}>
                {ui.account.createAccount}
              </LocaleLink>
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
