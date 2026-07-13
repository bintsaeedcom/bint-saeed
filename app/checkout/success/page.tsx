'use client'

import { useEffect, Suspense, useRef } from 'react'
import { useSearchParams } from 'next/navigation'
import { motion } from 'framer-motion'
import Image from 'next/image'
import LocaleLink from '@/components/LocaleLink'
import AppPageWayfinding from '@/components/AppPageWayfinding'
import DiscoverDestinationGrid from '@/components/DiscoverDestinationGrid'
import SoftEmailCapture from '@/components/SoftEmailCapture'
import { SITE_CONTENT_TOP_PAD } from '@/lib/ui/editorialPageChrome'
import { FiCheck } from 'react-icons/fi'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { commerceUi } from '@/lib/i18n/commerceUi'
import { getCheckoutSuccessCopy } from '@/lib/i18n/checkoutSuccessCopyI18n'
import { useCartStore } from '@/store/cartStore'
import { trackEvent } from '@/lib/analytics/tracking'
import { consumeCheckoutSnapshot } from '@/lib/analytics/checkoutSnapshot'

function CheckoutSuccessContent() {
  const searchParams = useSearchParams()
  const { isRTL, language } = useLanguage()
  const ui = commerceUi(language)
  const successCopy = getCheckoutSuccessCopy(language)
  const sessionId = searchParams?.get('session_id')
  const paymentId = searchParams?.get('payment_id')
  const paypalToken = searchParams?.get('token')
  const tamaraOrderId =
    searchParams?.get('tamara_order_id') ||
    searchParams?.get('orderId') ||
    searchParams?.get('order_id')
  const tabbyPaymentId =
    searchParams?.get('provider') === 'tabby'
      ? searchParams?.get('payment_id') || searchParams?.get('tabby_payment_id')
      : searchParams?.get('tabby_payment_id')
  const clearCart = useCartStore((state) => state.clearCart)
  const trackedPurchase = useRef(false)

  useEffect(() => {
    const referenceId = sessionId || paymentId || paypalToken || tamaraOrderId || tabbyPaymentId
    if (!referenceId || trackedPurchase.current) return
    trackedPurchase.current = true

    const snapshot = consumeCheckoutSnapshot()
    trackEvent('purchase', {
      transaction_id: referenceId,
      session_id: sessionId ?? undefined,
      payment_id: paymentId ?? undefined,
      paypal_token: paypalToken ?? undefined,
      tamara_order_id: tamaraOrderId ?? undefined,
      tabby_payment_id: tabbyPaymentId ?? undefined,
      currency: snapshot?.currency,
      value: snapshot?.value,
      items: snapshot?.items,
    })

    if (sessionId) {
      clearCart()
      return
    }

    if (tamaraOrderId) {
      void fetch(
        `/api/payments/tamara/status?order_id=${encodeURIComponent(tamaraOrderId)}`,
      )
        .then((response) => response.json())
        .then((data: { paid?: boolean }) => {
          if (data.paid) clearCart()
        })
        .catch(() => {
          /* webhook may still complete the order */
        })
      return
    }

    if (tabbyPaymentId) {
      void fetch(
        `/api/payments/tabby/status?payment_id=${encodeURIComponent(tabbyPaymentId)}`,
      )
        .then((response) => response.json())
        .then((data: { paid?: boolean }) => {
          if (data.paid) clearCart()
        })
        .catch(() => {
          /* webhook may still complete the order */
        })
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
  }, [sessionId, paymentId, paypalToken, tamaraOrderId, tabbyPaymentId, clearCart])

  return (
    <div className={`relative min-h-screen overflow-x-hidden bg-brand-pageCanvas pb-24 ${SITE_CONTENT_TOP_PAD}`}>
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
            <p className="mt-6 text-center font-montserrat text-[10px] uppercase tracking-[0.38em] text-brand-dustyBlue">
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

            {(sessionId || paymentId || paypalToken) && (
              <div className="mt-4 flex w-full justify-center">
                <div className="inline-flex flex-col items-center gap-1 rounded-full border border-brand-stone/25 bg-white/60 px-5 py-2.5 text-center">
                  <span className="font-montserrat text-[10px] uppercase tracking-[0.28em] text-brand-clayRed">
                    {successCopy.sessionReference}
                  </span>
                  <span className="font-montserrat text-sm font-semibold tracking-[0.18em] text-brand-darkRed">
                    {(sessionId || paymentId || paypalToken || '').slice(-8).toUpperCase()}
                  </span>
                </div>
              </div>
            )}

            <p className="mx-auto mt-5 max-w-sm text-center font-montserrat text-sm leading-relaxed tracking-wide text-brand-clayRed">
              {successCopy.subtitle}
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.45 }}
          className="mx-auto mt-12 max-w-5xl"
        >
          <p
            className={`font-montserrat text-[11px] font-medium uppercase tracking-[0.22em] text-brand-dustyBlue ${
              isRTL ? 'text-right' : 'text-center'
            }`}
          >
            {successCopy.keepExploring}
          </p>
          <p
            className={`mx-auto mt-3 max-w-lg font-montserrat text-sm leading-relaxed tracking-wide text-brand-clayRed/75 ${
              isRTL ? 'text-right' : 'text-center'
            }`}
          >
            {successCopy.keepExploringBody}
          </p>
          <DiscoverDestinationGrid source="checkout_success" className="mt-6" />
          <SoftEmailCapture
            source="checkout_success"
            heading={successCopy.stayCloseHeading}
            hint={successCopy.stayCloseHint}
            className="mt-12 border-t border-brand-stone/20 pt-10"
          />
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
      <div className={`flex min-h-screen items-center justify-center pb-20 ${SITE_CONTENT_TOP_PAD}`}>
        <div className="animate-pulse text-brand-clayRed">{ui.checkout.redirecting}</div>
      </div>
    }>
      <CheckoutSuccessContent />
    </Suspense>
  )
}
