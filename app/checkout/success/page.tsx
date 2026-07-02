'use client'

import { useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { motion } from 'framer-motion'
import Image from 'next/image'
import LocaleLink from '@/components/LocaleLink'
import AppPageWayfinding from '@/components/AppPageWayfinding'
import { FiCheck, FiShoppingBag } from 'react-icons/fi'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { commerceUi } from '@/lib/i18n/commerceUi'
import { getCheckoutSuccessCopy } from '@/lib/i18n/checkoutSuccessCopyI18n'
import { useCartStore } from '@/store/cartStore'
import { trackEvent } from '@/lib/analytics/tracking'

function CheckoutSuccessContent() {
  const searchParams = useSearchParams()
  const { isRTL, language } = useLanguage()
  const ui = commerceUi(language)
  const successCopy = getCheckoutSuccessCopy(language)
  const sessionId = searchParams?.get('session_id')
  const paymentId = searchParams?.get('payment_id')
  const paypalToken = searchParams?.get('token')
  const clearCart = useCartStore((state) => state.clearCart)

  useEffect(() => {
    const referenceId = sessionId || paymentId || paypalToken
    if (!referenceId) return

    trackEvent('purchase', {
      session_id: sessionId ?? undefined,
      payment_id: paymentId ?? undefined,
      paypal_token: paypalToken ?? undefined,
    })

    if (sessionId) {
      clearCart()
      return
    }

    if (paypalToken) {
      void fetch('/api/payments/paypal/capture', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ orderId: paypalToken }),
      })
        .then((response) => response.json())
        .then((data: { paid?: boolean }) => {
          if (data.paid) clearCart()
        })
        .catch(() => {
          /* webhook may still complete the order */
        })
      return
    }

    if (paymentId) {
      void fetch(`/api/payments/mollie/status?payment_id=${encodeURIComponent(paymentId)}`)
        .then((response) => response.json())
        .then((data: { paid?: boolean }) => {
          if (data.paid) clearCart()
        })
        .catch(() => {
          /* webhook may still complete the order */
        })
    }
  }, [sessionId, paymentId, paypalToken, clearCart])

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-brand-pageCanvas pb-20 pt-24 sm:pt-28">
      <div className="absolute top-20 right-0 h-96 w-96 rounded-full bg-brand-stone/10 blur-3xl" />
      <div className="absolute bottom-1/4 left-0 h-80 w-80 rounded-full bg-brand-dustyBlue/5 blur-3xl" />

      <div className="container relative mx-auto min-w-0 px-6 lg:px-12">
        <AppPageWayfinding
          rtl={isRTL}
          className="mb-10"
          segments={[
            { label: ui.common.home, href: '/home' },
            { label: successCopy.breadcrumb },
          ]}
          backLink={{
            href: '/home',
            label: ui.common.backToHome,
          }}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-lg text-center"
        >
          <div className="glass-card relative overflow-hidden rounded-2xl px-8 py-12 sm:px-12 sm:py-14">
            <div
              className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-stone/45 to-transparent"
              aria-hidden
            />

            <LocaleLink href="/home" className="inline-block" data-cursor-hover>
              <Image
                src="/gold logo.png"
                alt="Bint Saeed"
                width={120}
                height={120}
                priority
                className="mx-auto h-14 w-auto sm:h-16"
              />
            </LocaleLink>
            <p className="mt-6 font-montserrat text-[10px] uppercase tracking-[0.38em] text-brand-dustyBlue">
              Bint Saeed
            </p>

            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.25, type: 'spring', stiffness: 200 }}
              className="mx-auto mt-9 flex h-16 w-16 items-center justify-center rounded-full border border-brand-stone/30 bg-white/70 shadow-[0_10px_30px_-14px_rgba(59,0,20,0.35)]"
            >
              <FiCheck className="h-7 w-7 text-brand-darkRed" strokeWidth={1.5} />
            </motion.div>

            <h1 data-document-h1="true" className="mt-7 font-rozha text-[2rem] leading-tight text-brand-darkRed sm:text-4xl">
              {successCopy.title}
            </h1>
            <p className="mx-auto mt-4 max-w-sm font-montserrat text-sm leading-relaxed tracking-wide text-brand-clayRed">
              {successCopy.subtitle}
            </p>

            <div className="my-8 flex items-center justify-center gap-3" aria-hidden>
              <div className="h-px w-12 bg-brand-stone/25 sm:w-16" />
              <span className="font-rozha text-xs text-brand-stone/45">✦</span>
              <div className="h-px w-12 bg-brand-stone/25 sm:w-16" />
            </div>

            {(sessionId || paymentId || paypalToken) && (
              <p className="mb-8 font-montserrat text-[11px] uppercase tracking-[0.22em] text-brand-stone">
                {successCopy.sessionReference}: {(sessionId || paymentId || paypalToken || '').slice(-8).toUpperCase()}
              </p>
            )}

            <div className="space-y-4">
              <LocaleLink
                href="/shop"
                className="inline-flex min-h-[52px] w-full items-center justify-center gap-2 px-8 py-4 bg-brand-darkRed text-white font-montserrat text-sm uppercase tracking-[0.2em] hover:bg-brand-dustyBlue transition-colors"
                data-cursor-hover
              >
                <FiShoppingBag className="w-4 h-4" />
                {ui.cart.continueShopping}
              </LocaleLink>
              <LocaleLink
                href="/"
                className="inline-flex min-h-[52px] w-full items-center justify-center px-8 py-4 border border-brand-darkRed text-brand-darkRed font-montserrat text-sm uppercase tracking-[0.2em] hover:bg-brand-dustyBlue hover:text-white transition-colors"
                data-cursor-hover
              >
                {ui.common.backToHome}
              </LocaleLink>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default function CheckoutSuccessPage() {
  const { language } = useLanguage()
  const ui = commerceUi(language)

  return (
    <Suspense fallback={
      <div className="flex min-h-screen items-center justify-center pb-20 pt-4 sm:pt-6 md:pt-8">
        <div className="animate-pulse text-brand-clayRed">{ui.checkout.redirecting}</div>
      </div>
    }>
      <CheckoutSuccessContent />
    </Suspense>
  )
}
