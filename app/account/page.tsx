'use client'

import { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import LocaleLink from '@/components/LocaleLink'
import AppPageWayfinding from '@/components/AppPageWayfinding'
import { SITE_CONTENT_TOP_PAD } from '@/lib/ui/editorialPageChrome'
import { motion } from 'framer-motion'
import { FiArrowRight, FiLock, FiLogOut, FiUser, FiUserPlus } from 'react-icons/fi'
import toast from 'react-hot-toast'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { commerceUi } from '@/lib/i18n/commerceUi'

type SessionUser = {
  email: string
  name: string
  authProvider: 'email' | 'google'
  picture?: string
}

export default function AccountPage() {
  const { isRTL, language } = useLanguage()
  const ui = commerceUi(language)
  const router = useRouter()
  const searchParams = useSearchParams()
  const [user, setUser] = useState<SessionUser | null>(null)
  const [loading, setLoading] = useState(true)
  const [signingOut, setSigningOut] = useState(false)

  useEffect(() => {
    let cancelled = false
    ;(async () => {
      try {
        const res = await fetch('/api/auth/me', { credentials: 'include' })
        const data = (await res.json()) as { user: SessionUser | null }
        if (!cancelled) setUser(data.user)
      } catch {
        if (!cancelled) setUser(null)
      } finally {
        if (!cancelled) setLoading(false)
      }
    })()
    return () => {
      cancelled = true
    }
  }, [])

  useEffect(() => {
    if (searchParams?.get('signed_in') === '1') {
      toast.success(isRTL ? 'تم تسجيل الدخول' : 'Signed in')
    }
  }, [searchParams, isRTL])

  const onSignOut = async () => {
    setSigningOut(true)
    try {
      await fetch('/api/auth/logout', { method: 'POST', credentials: 'include' })
      setUser(null)
      toast.success(isRTL ? 'تم تسجيل الخروج' : 'Signed out')
      router.refresh()
    } catch {
      toast.error(isRTL ? 'حدث خطأ' : 'Something went wrong')
    } finally {
      setSigningOut(false)
    }
  }

  if (loading) {
    return (
      <div className={`min-h-screen bg-brand-pageCanvas ${SITE_CONTENT_TOP_PAD} pb-24 flex items-center justify-center`}>
        <p className="font-montserrat text-sm text-brand-clayRed/50">
          {isRTL ? 'جاري التحميل…' : 'Loading…'}
        </p>
      </div>
    )
  }

  if (user) {
    return (
      <div className={`min-h-screen bg-brand-pageCanvas ${SITE_CONTENT_TOP_PAD} pb-24`}>
        <div className="container mx-auto max-w-2xl px-6">
          <AppPageWayfinding
            rtl={isRTL}
            className="mb-10"
            segments={[
              { label: ui.common.home, href: '/home' },
              { label: ui.account.account },
            ]}
            backLink={{
              href: '/home',
              label: ui.common.backToHome,
            }}
          />
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl border border-brand-stone/20 bg-white p-8 shadow-sm text-center sm:text-start sm:rtl:text-end"
          >
            <div className={`flex flex-col items-center gap-4 sm:flex-row sm:items-center ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
              {user.picture ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={user.picture}
                  alt=""
                  className="h-16 w-16 rounded-full border border-brand-stone/20 object-cover"
                />
              ) : (
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-brand-stone/20 bg-brand-pageCanvas">
                  <FiUser className="h-7 w-7 text-brand-dustyBlue" />
                </div>
              )}
              <div className="flex-1">
                <p className="font-montserrat text-[10px] uppercase tracking-[0.4em] text-brand-dustyBlue mb-2">
                  Bint Saeed
                </p>
                <h1 data-document-h1="true" className="font-rozha text-3xl text-brand-darkRed mb-1">
                  {user.name}
                </h1>
                <p className="font-montserrat text-sm text-brand-clayRed/65">{user.email}</p>
              </div>
            </div>
            <p className="mt-6 font-montserrat text-sm text-brand-clayRed/70 leading-relaxed">
              {ui.account.signInDesc}
            </p>
            <button
              type="button"
              onClick={onSignOut}
              disabled={signingOut}
              className={`mt-8 inline-flex items-center justify-center gap-2 border border-brand-stone/35 px-6 py-3 font-montserrat text-xs uppercase tracking-[0.18em] text-brand-darkRed hover:border-brand-dustyBlue/50 disabled:opacity-50 ${isRTL ? 'flex-row-reverse' : ''}`}
              data-cursor-hover
            >
              <FiLogOut className="h-4 w-4" />
              {signingOut ? (isRTL ? 'جاري الخروج…' : 'Signing out…') : isRTL ? 'تسجيل الخروج' : 'Sign out'}
            </button>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className={`min-h-screen bg-brand-pageCanvas ${SITE_CONTENT_TOP_PAD} pb-24`}>
      <div className="container mx-auto max-w-2xl px-6">
        <AppPageWayfinding
          rtl={isRTL}
          className="mb-10"
          segments={[
            { label: ui.common.home, href: '/home' },
            { label: ui.account.account },
          ]}
          backLink={{
            href: '/home',
            label: ui.common.backToHome,
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <p className="font-montserrat text-[10px] uppercase tracking-[0.4em] text-brand-dustyBlue mb-3">Bint Saeed</p>
          <h1 data-document-h1="true" className="font-rozha text-4xl text-brand-darkRed mb-4">
            {ui.account.account}
          </h1>
          <p className="font-montserrat text-sm text-brand-clayRed/70 max-w-md mx-auto leading-relaxed">
            {ui.account.registerDesc}
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="rounded-2xl border border-brand-stone/20 bg-white p-8 shadow-sm flex flex-col"
          >
            <FiUserPlus className="h-8 w-8 text-brand-dustyBlue mb-4 mx-auto sm:mx-0 sm:rtl:ml-auto sm:rtl:mr-0" />
            <h2 className="font-rozha text-xl text-brand-darkRed mb-2 text-center sm:text-start sm:rtl:text-end">
              {ui.account.createAccount}
            </h2>
            <p className="font-montserrat text-xs text-brand-clayRed/65 leading-relaxed mb-6 flex-1 text-center sm:text-start sm:rtl:text-end">
              {ui.account.registerDesc}
            </p>
            <LocaleLink
              href="/register"
              className={`mt-auto inline-flex items-center justify-center gap-2 bg-brand-darkRed py-3.5 font-montserrat text-xs uppercase tracking-[0.18em] text-white hover:bg-brand-dustyBlue ${isRTL ? 'flex-row-reverse' : ''}`}
              data-cursor-hover
            >
              {ui.account.getStarted}
              <FiArrowRight className={`h-4 w-4 ${isRTL ? 'rotate-180' : ''}`} />
            </LocaleLink>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="rounded-2xl border border-brand-stone/20 bg-white p-8 shadow-sm flex flex-col"
          >
            <FiLock className="h-8 w-8 text-brand-dustyBlue mb-4 mx-auto sm:mx-0 sm:rtl:ml-auto sm:rtl:mr-0" />
            <h2 className="font-rozha text-xl text-brand-darkRed mb-2 text-center sm:text-start sm:rtl:text-end">
              {ui.account.signIn}
            </h2>
            <p className="font-montserrat text-xs text-brand-clayRed/65 leading-relaxed mb-6 flex-1 text-center sm:text-start sm:rtl:text-end">
              {ui.account.signInDesc}
            </p>
            <LocaleLink
              href="/sign-in"
              className={`mt-auto inline-flex items-center justify-center gap-2 border border-brand-darkRed py-3.5 font-montserrat text-xs uppercase tracking-[0.18em] text-brand-darkRed hover:bg-brand-pageCanvas ${isRTL ? 'flex-row-reverse' : ''}`}
              data-cursor-hover
            >
              {ui.account.signIn}
              <FiArrowRight className={`h-4 w-4 ${isRTL ? 'rotate-180' : ''}`} />
            </LocaleLink>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
