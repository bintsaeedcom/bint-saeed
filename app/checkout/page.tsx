'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import LocaleLink from '@/components/LocaleLink'
import AppPageWayfinding from '@/components/AppPageWayfinding'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FiArrowRight, FiLock } from 'react-icons/fi'
import { loadStripe } from '@stripe/stripe-js'
import toast from 'react-hot-toast'
import { useCartStore } from '@/store/cartStore'
import { useCurrency } from '@/lib/currency/CurrencyContext'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { useLocaleHref } from '@/lib/i18n/useLocaleHref'
import { lineUnitForCurrency, lineTotalForCurrency } from '@/lib/shopProductOptions'
import { products as staticProducts } from '@/data/products'
import { getProductHref } from '@/lib/products/links'
import { trackEvent } from '@/lib/analytics/tracking'
import { getCartLineImageAlt } from '@/lib/products/imageAlt'

function detectDeviceType(): 'mobile' | 'tablet' | 'desktop' {
  if (typeof window === 'undefined') return 'desktop'
  const ua = navigator.userAgent || ''
  if (/iPad|Tablet/i.test(ua)) return 'tablet'
  if (/Mobi|Android|iPhone/i.test(ua)) return 'mobile'
  return 'desktop'
}

export default function CheckoutPage() {
  const router = useRouter()
  const { localize } = useLocaleHref()
  const { items } = useCartStore()
  const { formatAmount, currency, cartSubtotal, formatCartSubtotal } = useCurrency()
  const { isRTL, language } = useLanguage()
  const stripePublishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY?.trim() ?? ''
  const stripeEnvReady = stripePublishableKey.startsWith('pk_')

  const lineKey = (item: (typeof items)[number]) =>
    `${item.id}-${item.size}-${item.color}-${item.lengthCm ?? ''}-${item.customisationMessage ?? ''}`
  const productHref = (item: (typeof items)[number]) =>
    item.productUrl ??
    getProductHref(
      staticProducts.find((product) => product.id === item.id) ?? { id: item.id, name: item.name },
    )

  const [payBusy, setPayBusy] = useState(false)
  const [legalAcknowledged, setLegalAcknowledged] = useState(false)

  useEffect(() => {
    if (items.length === 0) {
      router.replace(localize('/cart'))
    }
  }, [items.length, localize, router])

  useEffect(() => {
    if (items.length === 0) return
    trackEvent('begin_checkout', {
      currency: currency.code,
      value: Number(cartSubtotal(items).toFixed(2)),
      item_count: items.length,
    })
  }, [cartSubtotal, currency.code, items])

  const startStripeCheckout = async () => {
    if (items.length === 0) return
    if (!legalAcknowledged) {
      toast.error(
        isRTL
          ? 'يرجى قبول سياسة الشحن والإرجاع والشروط والأحكام'
          : 'Please accept the Shipment & Return Policy and Terms & Conditions',
      )
      return
    }
    if (!stripeEnvReady) {
      toast.error(
        isRTL
          ? 'الدفع غير مُهيأ بعد في هذه البيئة.'
          : 'Stripe checkout is not configured for this environment yet.',
      )
      return
    }

    setPayBusy(true)
    trackEvent('add_shipping_info', { checkout_provider: 'stripe', currency: currency.code })
    trackEvent('add_payment_info', { checkout_provider: 'stripe', currency: currency.code })
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items,
          currency: currency.code,
          clientContext: {
            localTime: new Date().toString(),
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || 'Unknown',
            deviceType: detectDeviceType(),
          },
        }),
      })

      const { sessionId, url, error } = await response.json()
      if (!response.ok) {
        throw new Error(error || 'Checkout is unavailable')
      }
      if (error) throw new Error(error)

      if (typeof url === 'string' && url.startsWith('https://')) {
        window.location.assign(url)
        return
      }

      const stripe = await loadStripe(stripePublishableKey)
      if (stripe && sessionId) {
        const { error: redirectError } = await stripe.redirectToCheckout({ sessionId })
        if (redirectError) {
          throw new Error(redirectError.message)
        }
      } else {
        throw new Error('Stripe not available')
      }
    } catch (e) {
      console.error(e)
      toast.error(isRTL ? 'تعذر بدء الدفع' : 'Unable to start checkout. Please try again.')
    } finally {
      setPayBusy(false)
    }
  }

  if (items.length === 0) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-brand-pageCanvas pt-4 font-montserrat text-brand-clayRed sm:pt-6 md:pt-8">
        {isRTL ? 'جاري التوجيه…' : 'Redirecting…'}
      </div>
    )
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-brand-pageCanvas">
      <div className="border-b border-brand-stone/20 bg-brand-pageCanvas">
        <div className="container mx-auto min-w-0 px-4 pb-4 pt-20 sm:px-6 sm:pb-6 sm:pt-24 lg:px-12 lg:pt-28">
          <AppPageWayfinding
            rtl={isRTL}
            variant="muted"
            className="space-y-2.5"
            breadcrumbClassName="text-brand-clayRed/70 [&_a]:text-brand-clayRed/70 [&_span]:text-brand-darkRed"
            segments={[
              { label: isRTL ? 'السلة' : 'Bag', href: '/cart' },
              { label: isRTL ? 'دفع آمن' : 'Secure Payment' },
            ]}
            backLink={{
              href: '/cart',
              label: isRTL ? 'تعديل السلة' : 'Edit bag',
            }}
          />
          <div className={`${isRTL ? 'text-right' : ''} mt-3 sm:mt-4`}>
            <h1
              data-document-h1="true"
              className="font-rozha text-[1.75rem] leading-tight text-brand-darkRed sm:text-3xl md:text-4xl"
            >
              {isRTL ? 'راجعي طلبك' : 'Review Your Order'}
            </h1>
            <p className="mt-2 max-w-xl font-montserrat text-sm leading-relaxed tracking-wide text-brand-clayRed/70">
              {isRTL
                ? 'راجعي اختيارك قبل المتابعة إلى الدفع الآمن.'
                : 'Review your selection before proceeding to secure payment.'}
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto min-w-0 px-4 py-8 sm:px-6 sm:py-10 lg:px-12 lg:py-16">
        <div className="grid min-w-0 gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="min-w-0 lg:col-span-7">
            <motion.section
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-2xl border border-brand-stone/20 bg-white p-5 shadow-sm sm:p-6 md:p-8"
            >
              <ul className="divide-y divide-brand-stone/15">
                {items.map((item) => (
                  <li key={lineKey(item)} className="flex items-start gap-3 py-5 first:pt-0 sm:gap-4">
                    <LocaleLink
                      href={productHref(item)}
                      className="relative h-20 w-16 shrink-0 overflow-hidden bg-[#f0eeeb] sm:h-24 sm:w-20"
                      data-cursor-hover
                    >
                      <Image
                        src={item.image}
                        alt={getCartLineImageAlt(
                          item,
                          staticProducts.find((product) => product.id === item.id),
                          language,
                        )}
                        fill
                        className="img-zoom object-cover object-top"
                        sizes="(max-width: 640px) 64px, 80px"
                      />
                    </LocaleLink>
                    <div className={`min-w-0 flex-1 ${isRTL ? 'text-right' : ''}`}>
                      <LocaleLink
                        href={productHref(item)}
                        className="block break-words font-rozha text-base text-brand-darkRed hover:text-brand-dustyBlue sm:text-lg"
                        data-product-name="true"
                        data-cursor-hover
                      >
                        {item.name}
                      </LocaleLink>
                      <p className="mt-1 break-words font-montserrat text-xs tracking-wide text-brand-clayRed/65">
                        {item.size} · {item.color}
                        {item.lengthCm ? ` · ${item.lengthCm} cm` : ''}
                        {item.customisationMessage
                          ? ` · "${item.customisationMessage.slice(0, 20)}${item.customisationMessage.length > 20 ? '…' : ''}"`
                          : ''}
                      </p>
                      <p className="mt-2 font-montserrat text-sm text-brand-darkRed">
                        {formatAmount(lineUnitForCurrency(item, currency.code))}
                        <span className="text-brand-clayRed/50"> × {item.quantity}</span>
                        <span className="block text-xs text-brand-clayRed/55">
                          {isRTL ? 'الإجمالي: ' : 'Line total: '}
                          {formatAmount(lineTotalForCurrency(item, currency.code))}
                        </span>
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.section>
          </div>

          <div className="min-w-0 lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 }}
                className={`rounded-2xl border border-brand-darkRed/10 bg-gradient-to-b from-[#3B0A12] to-[#1F0508] p-6 text-brand-ivory shadow-xl sm:p-8 ${isRTL ? 'text-right' : ''}`}
              >
                <h2 className="mb-5 font-rozha text-xl text-brand-dustyBlue/95 sm:mb-6 sm:text-2xl">
                  {isRTL ? 'ملخص الطلب' : 'Order Summary'}
                </h2>
                <div
                  className={`flex justify-between gap-4 font-montserrat text-sm tracking-wide text-white/75 ${isRTL ? 'flex-row-reverse' : ''}`}
                >
                  <span>{isRTL ? 'المجموع الفرعي' : 'Subtotal'}</span>
                  <span className="shrink-0 text-white">{formatCartSubtotal(items)}</span>
                </div>
                <p className="mt-2 font-montserrat text-[11px] tracking-wide text-white/55">
                  {isRTL ? 'الضرائب مشمولة.' : 'Taxes included.'}
                </p>

                <label
                  className={`mt-6 flex items-start gap-2.5 sm:mt-8 ${isRTL ? 'flex-row-reverse text-right' : ''}`}
                >
                  <input
                    type="checkbox"
                    checked={legalAcknowledged}
                    onChange={(e) => setLegalAcknowledged(e.target.checked)}
                    className="mt-0.5 h-4 w-4 border border-white/40 bg-transparent accent-brand-dustyBlue"
                  />
                  <span className="font-montserrat text-[11px] leading-relaxed tracking-wide text-white/70">
                    {isRTL ? 'قرأتُ ووافقتُ على ' : 'I have read and accept the '}
                    <LocaleLink
                      href="/shipment-return-policy"
                      className="underline hover:text-brand-dustyBlue"
                      data-cursor-hover
                    >
                      {isRTL ? 'سياسة الشحن والإرجاع' : 'Shipment & Return Policy'}
                    </LocaleLink>{' '}
                    {isRTL ? 'و' : 'and'}{' '}
                    <LocaleLink
                      href="/terms"
                      className="underline hover:text-brand-dustyBlue"
                      data-cursor-hover
                    >
                      {isRTL ? 'الشروط والأحكام' : 'Terms & Conditions'}
                    </LocaleLink>
                    .
                  </span>
                </label>

                <button
                  type="button"
                  onClick={() => void startStripeCheckout()}
                  disabled={payBusy || !stripeEnvReady || !legalAcknowledged}
                  className={`mt-5 flex min-h-[52px] w-full items-center justify-center gap-2 rounded-[4px] bg-brand-dustyBlue px-3 py-4 font-montserrat text-[11px] uppercase tracking-[0.14em] text-[#1a0008] transition-colors hover:bg-white disabled:opacity-50 sm:mt-6 sm:gap-3 sm:text-sm sm:tracking-[0.18em] ${isRTL ? 'flex-row-reverse' : ''}`}
                  data-cursor-hover
                >
                  {payBusy ? (
                    isRTL ? (
                      'جاري التحويل…'
                    ) : (
                      'Redirecting…'
                    )
                  ) : (
                    <>
                      <FiLock className="h-4 w-4 opacity-90" />
                      {isRTL ? 'المتابعة للدفع الآمن' : 'Continue to Secure Payment'}
                      <FiArrowRight className={`h-4 w-4 opacity-90 ${isRTL ? 'rotate-180' : ''}`} />
                    </>
                  )}
                </button>
                {!stripeEnvReady ? (
                  <p className="mt-3 text-center font-montserrat text-[10px] uppercase tracking-[0.15em] text-amber-300/80">
                    {isRTL
                      ? 'أضيفي NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY و STRIPE_SECRET_KEY لتفعيل الدفع.'
                      : 'Set NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY and STRIPE_SECRET_KEY to enable checkout.'}
                  </p>
                ) : null}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
