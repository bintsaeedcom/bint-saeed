'use client'

import { useEffect, Suspense, useRef, useState } from 'react'
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

type ConfirmState = 'confirming' | 'confirmed' | 'pending'

function CheckoutSuccessContent() {
  const searchParams = useSearchParams()
  const { isRTL, language } = useLanguage()
  const ui = commerceUi(language)
  const successCopy = getCheckoutSuccessCopy(language)
  const sessionId = searchParams?.get('session_id')
  const paymentId = searchParams?.get('payment_id')
  const paypalToken = searchParams?.get('token')
  const provider = searchParams?.get('provider')
  const orderRef = searchParams?.get('order_ref')
  const giftCardOrderId =
    provider === 'gift_card'
      ? searchParams?.get('order_id') || searchParams?.get('orderId')
      : null
  const tamaraOrderId =
    provider === 'gift_card'
      ? null
      : searchParams?.get('tamara_order_id') ||
        searchParams?.get('orderId') ||
        searchParams?.get('order_id')
  const tabbyPaymentId =
    searchParams?.get('provider') === 'tabby'
      ? searchParams?.get('payment_id') || searchParams?.get('tabby_payment_id')
      : searchParams?.get('tabby_payment_id')
  const clearCart = useCartStore((state) => state.clearCart)
  const trackedPurchase = useRef(false)
  const [confirmState, setConfirmState] = useState<ConfirmState>(() =>
    sessionId || giftCardOrderId ? 'confirmed' : 'confirming',
  )

  const referenceId =
    sessionId ||
    paymentId ||
    paypalToken ||
    giftCardOrderId ||
    tamaraOrderId ||
    tabbyPaymentId ||
    orderRef

  useEffect(() => {
    if (!referenceId) {
      setConfirmState('pending')
      return
    }

    if (!trackedPurchase.current) {
      trackedPurchase.current = true
      const snapshot = consumeCheckoutSnapshot()
      trackEvent('purchase', {
        transaction_id: referenceId,
        session_id: sessionId ?? undefined,
        payment_id: paymentId ?? undefined,
        paypal_token: paypalToken ?? undefined,
        tamara_order_id: tamaraOrderId ?? undefined,
        tabby_payment_id: tabbyPaymentId ?? undefined,
        gift_card_order_id: giftCardOrderId ?? undefined,
        order_ref: orderRef ?? undefined,
        currency: snapshot?.currency,
        value: snapshot?.value,
        items: snapshot?.items,
      })
    }

    if (sessionId || giftCardOrderId) {
      clearCart()
      setConfirmState('confirmed')
      return
    }

    const markPaid = () => {
      clearCart()
      setConfirmState('confirmed')
    }
    const markPending = () => setConfirmState('pending')

    if (tamaraOrderId) {
      void fetch(
        `/api/payments/tamara/status?order_id=${encodeURIComponent(tamaraOrderId)}`,
      )
        .then((response) => response.json())
        .then((data: { paid?: boolean }) => {
          if (data.paid) markPaid()
          else markPending()
        })
        .catch(markPending)
      return
    }

    if (tabbyPaymentId) {
      void fetch(
        `/api/payments/tabby/status?payment_id=${encodeURIComponent(tabbyPaymentId)}`,
      )
        .then((response) => response.json())
        .then((data: { paid?: boolean }) => {
          if (data.paid) markPaid()
          else markPending()
        })
        .catch(markPending)
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
          if (data.paid) markPaid()
          else markPending()
        })
        .catch(markPending)
      return
    }

    if (paymentId) {
      void fetch(`/api/payments/mollie/status?payment_id=${encodeURIComponent(paymentId)}`)
        .then((response) => response.json())
        .then((data: { paid?: boolean }) => {
          if (data.paid) markPaid()
          else markPending()
        })
        .catch(markPending)
      return
    }

    // Tabby return with order_ref only (payment_id not yet on URL) — soft pending.
    if (orderRef) {
      markPending()
      return
    }

    markPending()
  }, [
    referenceId,
    sessionId,
    paymentId,
    paypalToken,
    giftCardOrderId,
    tamaraOrderId,
    tabbyPaymentId,
    orderRef,
    clearCart,
  ])

  const heading =
    confirmState === 'confirmed'
      ? successCopy.title
      : confirmState === 'confirming'
        ? successCopy.confirmingTitle
        : successCopy.pendingTitle
  const body =
    confirmState === 'confirmed'
      ? successCopy.subtitle
      : confirmState === 'confirming'
        ? successCopy.confirmingSubtitle
        : successCopy.pendingSubtitle

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
              className={`mx-auto mt-9 flex h-16 w-16 items-center justify-center rounded-full border shadow-[0_10px_30px_-14px_rgba(59,0,20,0.35)] ${
                confirmState === 'confirmed'
                  ? 'border-brand-dustyBlue/40 bg-brand-dustyBlue/12'
                  : 'border-brand-stone/35 bg-brand-stone/15'
              }`}
            >
              <FiCheck
                className={`h-7 w-7 ${
                  confirmState === 'confirmed' ? 'text-brand-dustyBlue' : 'text-brand-clayRed/70'
                }`}
                strokeWidth={2.25}
              />
            </motion.div>

            <h1 data-document-h1="true" className="mt-7 font-rozha text-[2rem] leading-tight text-brand-darkRed sm:text-4xl">
              {heading}
            </h1>

            {referenceId ? (
              <div className="mt-4 flex w-full justify-center">
                <div className="inline-flex flex-col items-center gap-1 rounded-full border border-brand-stone/25 bg-white/60 px-5 py-2.5 text-center">
                  <span className="font-montserrat text-[10px] uppercase tracking-[0.28em] text-brand-clayRed">
                    {successCopy.sessionReference}
                  </span>
                  <span className="font-montserrat text-sm font-semibold tracking-[0.18em] text-brand-darkRed">
                    {referenceId.slice(-8).toUpperCase()}
                  </span>
                </div>
              </div>
            ) : null}

            <p className="mx-auto mt-5 max-w-sm text-center font-montserrat text-sm leading-relaxed tracking-wide text-brand-clayRed">
              {body}
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.45 }}
          className="mx-auto mt-12 max-w-5xl"
        >
          <p className="text-center font-montserrat text-[11px] font-medium uppercase tracking-[0.22em] text-brand-dustyBlue">
            {successCopy.keepExploring}
          </p>
          <p className="mx-auto mt-3 max-w-lg text-center font-montserrat text-sm leading-relaxed tracking-wide text-brand-clayRed/75">
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
  return (
    <Suspense
      fallback={
        <div className={`flex min-h-screen items-center justify-center bg-brand-pageCanvas ${SITE_CONTENT_TOP_PAD}`}>
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-brand-dustyBlue border-t-transparent" />
        </div>
      }
    >
      <CheckoutSuccessContent />
    </Suspense>
  )
}
