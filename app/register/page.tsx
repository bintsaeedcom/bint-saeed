'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FiArrowLeft, FiLock, FiMail, FiUser } from 'react-icons/fi'
import toast from 'react-hot-toast'
import { useLanguage } from '@/lib/i18n/LanguageContext'

export default function RegisterPage() {
  const { isRTL } = useLanguage()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [busy, setBusy] = useState(false)
  const [devLink, setDevLink] = useState<string | null>(null)

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setDevLink(null)
    if (password !== confirm) {
      toast.error(isRTL ? 'كلمتا المرور غير متطابقتين' : 'Passwords do not match')
      return
    }
    setBusy(true)
    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, name: name.trim() || undefined }),
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
    <div className="min-h-screen bg-[#faf9f7] pt-28 pb-20">
      <div className="container mx-auto max-w-lg px-6">
        <Link
          href="/account"
          className={`mb-10 inline-flex items-center gap-2 font-roboto text-xs uppercase tracking-[0.2em] text-brand-clayRed hover:text-brand-dustyBlue ${isRTL ? 'flex-row-reverse' : ''}`}
          data-cursor-hover
        >
          <FiArrowLeft className={`h-4 w-4 ${isRTL ? 'rotate-180' : ''}`} />
          {isRTL ? 'الحساب' : 'Account'}
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-2xl border border-brand-stone/25 bg-white p-8 shadow-sm md:p-10"
        >
          <p className="font-roboto text-[10px] uppercase tracking-[0.4em] text-brand-dustyBlue mb-3">
            Bint Saeed
          </p>
          <h1 className="font-rozha text-3xl text-brand-darkRed mb-2">
            {isRTL ? 'إنشاء حساب' : 'Create an account'}
          </h1>
          <p className="font-roboto text-sm text-brand-clayRed/70 mb-8 leading-relaxed">
            {isRTL
              ? 'سنرسل لك رسالة لتأكيد بريدك الإلكتروني قبل تفعيل الحساب.'
              : 'We’ll email you a confirmation link — your account is activated only after you verify your email.'}
          </p>

          <form onSubmit={onSubmit} className="space-y-5">
            <div>
              <label className="mb-2 block font-roboto text-[10px] uppercase tracking-[0.2em] text-brand-darkRed">
                {isRTL ? 'الاسم (اختياري)' : 'Name (optional)'}
              </label>
              <div className="relative">
                <FiUser className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-stone/50 rtl:left-auto rtl:right-3" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  autoComplete="name"
                  className="w-full border border-brand-stone/40 bg-[#faf9f7] py-3 ps-10 pe-4 font-roboto text-sm focus:border-brand-darkRed focus:outline-none rtl:ps-4 rtl:pe-10"
                  placeholder={isRTL ? 'الاسم' : 'Your name'}
                />
              </div>
            </div>
            <div>
              <label className="mb-2 block font-roboto text-[10px] uppercase tracking-[0.2em] text-brand-darkRed">
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
                  className="w-full border border-brand-stone/40 bg-[#faf9f7] py-3 ps-10 pe-4 font-roboto text-sm focus:border-brand-darkRed focus:outline-none rtl:ps-4 rtl:pe-10"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div>
              <label className="mb-2 block font-roboto text-[10px] uppercase tracking-[0.2em] text-brand-darkRed">
                {isRTL ? 'كلمة المرور' : 'Password'}
              </label>
              <div className="relative">
                <FiLock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-stone/50 rtl:left-auto rtl:right-3" />
                <input
                  type="password"
                  required
                  minLength={8}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="new-password"
                  className="w-full border border-brand-stone/40 bg-[#faf9f7] py-3 ps-10 pe-4 font-roboto text-sm focus:border-brand-darkRed focus:outline-none rtl:ps-4 rtl:pe-10"
                  placeholder="••••••••"
                />
              </div>
              <p className="mt-1 font-roboto text-[10px] text-brand-clayRed/50">
                {isRTL ? '٨ أحرف على الأقل' : 'At least 8 characters'}
              </p>
            </div>
            <div>
              <label className="mb-2 block font-roboto text-[10px] uppercase tracking-[0.2em] text-brand-darkRed">
                {isRTL ? 'تأكيد كلمة المرور' : 'Confirm password'}
              </label>
              <div className="relative">
                <FiLock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-stone/50 rtl:left-auto rtl:right-3" />
                <input
                  type="password"
                  required
                  value={confirm}
                  onChange={(e) => setConfirm(e.target.value)}
                  autoComplete="new-password"
                  className="w-full border border-brand-stone/40 bg-[#faf9f7] py-3 ps-10 pe-4 font-roboto text-sm focus:border-brand-darkRed focus:outline-none rtl:ps-4 rtl:pe-10"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={busy}
              className="w-full bg-brand-darkRed py-4 font-roboto text-xs uppercase tracking-[0.22em] text-white transition-colors hover:bg-brand-dustyBlue disabled:opacity-50"
              data-cursor-hover
            >
              {busy ? (isRTL ? 'جاري الإرسال…' : 'Sending…') : isRTL ? 'إنشاء الحساب' : 'Create account'}
            </button>
          </form>

          {devLink ? (
            <div className="mt-6 rounded-lg border border-dashed border-brand-dustyBlue/40 bg-brand-dustyBlue/5 p-4">
              <p className="font-roboto text-[10px] uppercase tracking-[0.15em] text-brand-darkRed mb-2">
                Dev only — no RESEND_API_KEY
              </p>
              <a href={devLink} className="break-all font-roboto text-xs text-brand-dustyBlue underline">
                {devLink}
              </a>
            </div>
          ) : null}
        </motion.div>
      </div>
    </div>
  )
}
