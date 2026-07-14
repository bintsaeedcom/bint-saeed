'use client'

import { Suspense } from 'react'
import LocaleLink from '@/components/LocaleLink'
import AppPageWayfinding from '@/components/AppPageWayfinding'
import { SITE_CONTENT_TOP_PAD } from '@/lib/ui/editorialPageChrome'
import { useSearchParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { FiCheck, FiAlertCircle, FiArrowRight } from 'react-icons/fi'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { commerceUi } from '@/lib/i18n/commerceUi'

function VerifyEmailContent() {
  const searchParams = useSearchParams()
  const { isRTL, language } = useLanguage()
  const ui = commerceUi(language)
  const verified = searchParams?.get('verified') === '1'
  const already = searchParams?.get('already') === '1'
  const error = searchParams?.get('error')

  const errorCopy: Record<string, string> = {
    missing_token: isRTL ? 'رابط غير صالح.' : 'Invalid confirmation link.',
    invalid_or_expired: isRTL
      ? 'انتهت صلاحية الرابط أو أنه غير صالح. سجّلي من جديد أو اطلبي رسالة جديدة من صفحة التسجيل.'
      : 'This link has expired or is invalid. Register again to receive a new email.',
    server: isRTL ? 'حدث خطأ في الخادم.' : 'Something went wrong on our side.',
  }

  return (
    <div className={`min-h-screen bg-brand-pageCanvas px-6 ${SITE_CONTENT_TOP_PAD} pb-16`}>
      <div className="mx-auto w-full max-w-md">
        <AppPageWayfinding
          rtl={isRTL}
          className="mb-8"
          segments={[
            { label: ui.common.home, href: '/home' },
            { label: isRTL ? 'تأكيد البريد' : 'Email Verification' },
          ]}
          backLink={{
            href: '/account',
            label: ui.common.backToAccount,
          }}
        />
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full rounded-2xl border border-brand-stone/25 bg-white p-10 text-center shadow-sm"
      >
        {verified ? (
          <>
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-brand-dustyBlue/40 bg-brand-dustyBlue/12">
              <FiCheck className="h-8 w-8 text-brand-dustyBlue" strokeWidth={2.25} />
            </div>
            <h1 data-document-h1="true" className="font-rozha text-2xl text-brand-darkRed mb-3">
              {isRTL ? 'تم تأكيد بريدك' : 'Email confirmed'}
            </h1>
            <p className="font-montserrat text-sm text-brand-clayRed/75 leading-relaxed mb-8">
              {isRTL
                ? 'حسابك جاهز. يمكنك العودة للتسوق أو لصفحة الحساب.'
                : 'Your account is verified. You can continue shopping or go to your account.'}
            </p>
            <div className="flex flex-col gap-3">
              <LocaleLink
                href="/shop"
                className={`inline-flex items-center justify-center gap-2 bg-brand-darkRed py-3.5 font-montserrat text-xs uppercase tracking-[0.2em] text-white hover:bg-brand-dustyBlue ${isRTL ? 'flex-row-reverse' : ''}`}
                data-cursor-hover
              >
                {isRTL ? 'تسوقي الآن' : 'Shop the collection'}
                <FiArrowRight className={`h-4 w-4 ${isRTL ? 'rotate-180' : ''}`} />
              </LocaleLink>
              <LocaleLink
                href="/account"
                className="font-montserrat text-xs uppercase tracking-[0.2em] text-brand-clayRed hover:text-brand-dustyBlue"
                data-cursor-hover
              >
                {isRTL ? 'الحساب' : 'Account'}
              </LocaleLink>
            </div>
          </>
        ) : already ? (
          <>
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-brand-dustyBlue/40 bg-brand-dustyBlue/12">
              <FiCheck className="h-8 w-8 text-brand-dustyBlue" strokeWidth={2.25} />
            </div>
            <h1 data-document-h1="true" className="font-rozha text-2xl text-brand-darkRed mb-3">
              {isRTL ? 'البريد مؤكد مسبقاً' : 'Already confirmed'}
            </h1>
            <p className="font-montserrat text-sm text-brand-clayRed/75 mb-8">
              {isRTL ? 'هذا البريد مفعّل بالفعل.' : 'This email is already verified.'}
            </p>
            <LocaleLink
              href="/account"
              className="inline-block font-montserrat text-xs uppercase tracking-[0.2em] text-brand-darkRed underline hover:text-brand-dustyBlue"
              data-cursor-hover
            >
              {isRTL ? 'الحساب' : 'Account'}
            </LocaleLink>
          </>
        ) : (
          <>
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-red-50">
              <FiAlertCircle className="h-8 w-8 text-red-600/90" />
            </div>
            <h1 data-document-h1="true" className="font-rozha text-2xl text-brand-darkRed mb-3">
              {isRTL ? 'تعذر التأكيد' : 'Could not confirm'}
            </h1>
            <p className="font-montserrat text-sm text-brand-clayRed/75 leading-relaxed mb-8">
              {error ? errorCopy[error] || errorCopy.server : errorCopy.missing_token}
            </p>
            <LocaleLink
              href="/register"
              className="inline-flex items-center justify-center bg-brand-darkRed px-8 py-3.5 font-montserrat text-xs uppercase tracking-[0.2em] text-white hover:bg-brand-dustyBlue"
              data-cursor-hover
            >
              {isRTL ? 'إنشاء حساب' : 'Register again'}
            </LocaleLink>
          </>
        )}
      </motion.div>
      </div>
    </div>
  )
}

export default function VerifyEmailPage() {
  return (
    <Suspense
      fallback={
        <div className={`min-h-screen flex items-center justify-center bg-brand-pageCanvas ${SITE_CONTENT_TOP_PAD} font-montserrat text-brand-clayRed/60`}>
          Loading…
        </div>
      }
    >
      <VerifyEmailContent />
    </Suspense>
  )
}
