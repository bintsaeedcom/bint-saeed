'use client'

import LocaleLink from '@/components/LocaleLink'
import AppPageWayfinding from '@/components/AppPageWayfinding'
import { motion } from 'framer-motion'
import { FiArrowRight, FiLock, FiUserPlus } from 'react-icons/fi'
import { useLanguage } from '@/lib/i18n/LanguageContext'

export default function AccountPage() {
  const { isRTL } = useLanguage()

  return (
    <div className="min-h-screen bg-brand-pageCanvas pt-28 pb-24">
      <div className="container mx-auto max-w-2xl px-6">
        <AppPageWayfinding
          rtl={isRTL}
          className="mb-10"
          segments={[
            { label: isRTL ? 'الرئيسية' : 'Home', href: '/home' },
            { label: isRTL ? 'حسابي' : 'Account' },
          ]}
          backLink={{
            href: '/home',
            label: isRTL ? 'العودة للرئيسية' : 'Back to Home',
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <p className="font-montserrat text-[10px] uppercase tracking-[0.4em] text-brand-dustyBlue mb-3">Bint Saeed</p>
          <h1 data-document-h1="true" className="font-rozha text-4xl text-brand-darkRed mb-4">
            {isRTL ? 'حسابي' : 'Account'}
          </h1>
          <p className="font-montserrat text-sm text-brand-clayRed/70 max-w-md mx-auto leading-relaxed">
            {isRTL
              ? 'سجّلي للحصول على تجربة شخصية وتتبع الطلبات لاحقاً.'
              : 'Create an account for a personal experience. Sign-in with password will be added next to this flow.'}
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
              {isRTL ? 'تسجيل جديد' : 'Create account'}
            </h2>
            <p className="font-montserrat text-xs text-brand-clayRed/65 leading-relaxed mb-6 flex-1 text-center sm:text-start sm:rtl:text-end">
              {isRTL
                ? 'بعد التسجيل نرسل رابطاً إلى بريدك لتأكيد العنوان قبل تفعيل الحساب.'
                : 'After you register, we send a confirmation email with a button. Your account is only active once you verify.'}
            </p>
            <LocaleLink
              href="/register"
              className={`mt-auto inline-flex items-center justify-center gap-2 bg-brand-darkRed py-3.5 font-montserrat text-xs uppercase tracking-[0.18em] text-white hover:bg-brand-dustyBlue ${isRTL ? 'flex-row-reverse' : ''}`}
              data-cursor-hover
            >
              {isRTL ? 'ابدئي' : 'Get started'}
              <FiArrowRight className={`h-4 w-4 ${isRTL ? 'rotate-180' : ''}`} />
            </LocaleLink>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="rounded-2xl border border-dashed border-brand-stone/35 bg-white/60 p-8 flex flex-col opacity-90"
          >
            <FiLock className="h-8 w-8 text-brand-stone/50 mb-4 mx-auto sm:mx-0 sm:rtl:ml-auto sm:rtl:mr-0" />
            <h2 className="font-rozha text-xl text-brand-darkRed/80 mb-2 text-center sm:text-start sm:rtl:text-end">
              {isRTL ? 'تسجيل الدخول' : 'Sign in'}
            </h2>
            <p className="font-montserrat text-xs text-brand-clayRed/55 leading-relaxed mb-6 flex-1 text-center sm:text-start sm:rtl:text-end">
              {isRTL
                ? 'تسجيل الدخول بكلمة المرور يُضاف مع الجلسات لاحقاً.'
                : 'Password sign-in and sessions can be wired next (e.g. NextAuth) using the verified accounts this flow creates.'}
            </p>
            <span className="mt-auto block text-center py-3 font-montserrat text-[10px] uppercase tracking-[0.2em] text-brand-clayRed/40">
              {isRTL ? 'قريباً' : 'Coming next'}
            </span>
          </motion.div>
        </div>

        <p className="mt-12 text-center font-montserrat text-[10px] text-brand-clayRed/45 tracking-wide max-w-lg mx-auto">
          {isRTL
            ? 'للإنتاج: فعّلي Resend و Redis (Upstash)، راجعي .env.example'
            : 'For production: configure Resend + Upstash Redis — see .env.example'}
        </p>
      </div>
    </div>
  )
}
