'use client'

import { Suspense, useEffect, useMemo, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import LocaleLink from '@/components/LocaleLink'
import AppPageWayfinding from '@/components/AppPageWayfinding'
import { SITE_CONTENT_TOP_PAD } from '@/lib/ui/editorialPageChrome'
import { motion } from 'framer-motion'
import { FiEye, FiEyeOff, FiLock } from 'react-icons/fi'
import toast from 'react-hot-toast'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { commerceUi } from '@/lib/i18n/commerceUi'
import { getAuthFormCopy } from '@/lib/i18n/authFormCopyI18n'
import { passwordsMatch, validatePassword } from '@/lib/auth/passwordPolicy'
import { ctaFormSubmitCompact } from '@/lib/ui/ctaClasses'
import {
  formCardClass,
  formFieldClass,
  formFooterLinkClass,
  formFooterTextClass,
  formHintClass,
  formIconButtonClass,
  formIconClass,
  formLabelClass,
} from '@/lib/ui/formFieldClasses'

function ResetPasswordContent() {
  const { isRTL, language } = useLanguage()
  const ui = commerceUi(language)
  const auth = getAuthFormCopy(language)
  const router = useRouter()
  const searchParams = useSearchParams()
  const token = useMemo(() => searchParams?.get('token')?.trim() || '', [searchParams])

  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [busy, setBusy] = useState(false)
  const [tokenValid, setTokenValid] = useState<boolean | null>(token ? null : false)

  useEffect(() => {
    if (!token) {
      setTokenValid(false)
      return
    }
    let cancelled = false
    ;(async () => {
      try {
        const res = await fetch(`/api/auth/reset-password?token=${encodeURIComponent(token)}`)
        const data = (await res.json()) as { valid?: boolean }
        if (!cancelled) setTokenValid(Boolean(data.valid))
      } catch {
        if (!cancelled) setTokenValid(false)
      }
    })()
    return () => {
      cancelled = true
    }
  }, [token])

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!token) {
      toast.error(auth.resetLinkInvalid)
      return
    }

    const passwordCheck = validatePassword(password)
    if (!passwordCheck.ok) {
      toast.error(passwordCheck.error)
      return
    }

    if (!passwordsMatch(password, confirm)) {
      toast.error(auth.passwordsDoNotMatch)
      return
    }

    setBusy(true)
    try {
      const res = await fetch('/api/auth/reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          token,
          password,
          confirmPassword: confirm,
        }),
      })
      const data = (await res.json()) as { ok?: boolean; error?: string; message?: string }
      if (!res.ok) {
        toast.error(data.error || auth.couldNotUpdatePassword)
        return
      }
      toast.success(data.message || auth.passwordUpdated)
      router.push('/sign-in')
      router.refresh()
    } catch {
      toast.error(auth.genericError)
    } finally {
      setBusy(false)
    }
  }

  const showExpired = tokenValid === false

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
            { label: ui.account.resetPassword },
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
              {ui.account.resetPassword}
            </h1>
            <p className="mt-3 max-w-md font-montserrat text-sm leading-relaxed text-brand-clayRed/70 lg:mt-5 lg:text-base">
              {ui.account.resetPasswordDesc}
            </p>
          </header>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mx-auto max-w-md lg:mx-0 lg:max-w-none ${formCardClass}`}
          >
            {tokenValid === null ? (
              <p className="font-montserrat text-sm text-brand-clayRed/60">{auth.checkingLink}</p>
            ) : showExpired ? (
              <div className="text-start">
                <p className="font-montserrat text-sm leading-relaxed text-brand-darkRed/85">
                  {auth.resetLinkExpiredBody}
                </p>
                <p className={formFooterTextClass}>
                  <LocaleLink href="/forgot-password" className={formFooterLinkClass}>
                    {ui.account.forgotPassword}
                  </LocaleLink>
                </p>
              </div>
            ) : (
              <>
                <form onSubmit={onSubmit} className="space-y-5">
                  <div>
                    <label className={formLabelClass}>{auth.newPassword}</label>
                    <div className="relative">
                      <FiLock className={formIconClass} />
                      <input
                        type={showPassword ? 'text' : 'password'}
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        autoComplete="new-password"
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
                    <p className={formHintClass}>{auth.passwordHint}</p>
                  </div>

                  <div>
                    <label className={formLabelClass}>{auth.confirmPassword}</label>
                    <div className="relative">
                      <FiLock className={formIconClass} />
                      <input
                        type={showConfirm ? 'text' : 'password'}
                        required
                        value={confirm}
                        onChange={(e) => setConfirm(e.target.value)}
                        autoComplete="new-password"
                        className={`${formFieldClass} ps-10 pe-11 rtl:ps-11 rtl:pe-10`}
                        placeholder="••••••••"
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirm((v) => !v)}
                        className={formIconButtonClass}
                        aria-label={showConfirm ? auth.hidePassword : auth.showPassword}
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
                    {busy ? auth.saving : ui.account.resetPassword}
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

export default function ResetPasswordPage() {
  return (
    <Suspense
      fallback={
        <div
          className={`flex min-h-screen items-center justify-center bg-brand-pageCanvas font-montserrat text-brand-clayRed/60 ${SITE_CONTENT_TOP_PAD}`}
        >
          Loading…
        </div>
      }
    >
      <ResetPasswordContent />
    </Suspense>
  )
}
