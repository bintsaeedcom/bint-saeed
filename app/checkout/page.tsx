'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import LocaleLink from '@/components/LocaleLink'
import AppPageWayfinding from '@/components/AppPageWayfinding'
import { SITE_CONTENT_TOP_PAD } from '@/lib/ui/editorialPageChrome'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FiArrowRight, FiLock } from 'react-icons/fi'
import toast from 'react-hot-toast'
import { useCartStore } from '@/store/cartStore'
import { useCurrency } from '@/lib/currency/CurrencyContext'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { commerceUi } from '@/lib/i18n/commerceUi'
import { useLocaleHref } from '@/lib/i18n/useLocaleHref'
import { lineUnitForCurrency, lineTotalForCurrency } from '@/lib/shopProductOptions'
import { products as staticProducts } from '@/data/products'
import { getProductHref } from '@/lib/products/links'
import { trackEvent } from '@/lib/analytics/tracking'
import { persistCheckoutSnapshot } from '@/lib/analytics/checkoutSnapshot'
import { getCartLineImageAlt } from '@/lib/products/imageAlt'
import { isWebshopPicturePath, productImageSrc } from '@/lib/products/shopImage'
import { fetchGeoData } from '@/lib/geo/geoDetection'
import {
  getAvailableCheckoutRails,
  getCheckoutConfigHint,
  getDefaultCheckoutRail,
  isCheckoutRailConfigured,
  type CheckoutRail,
} from '@/lib/payments'
import { getCheckoutAttributionContext } from '@/lib/analytics/checkoutAttribution'
import CheckoutPaymentRailIcons from '@/components/checkout/CheckoutPaymentRailIcons'
import { formFieldOnDarkClass } from '@/lib/ui/formFieldClasses'
import dynamic from 'next/dynamic'

const StripeEmbeddedCheckoutForm = dynamic(
  () => import('@/components/checkout/StripeEmbeddedCheckoutForm'),
  { ssr: false },
)

function detectDeviceType(): 'mobile' | 'tablet' | 'desktop' {
  if (typeof window === 'undefined') return 'desktop'
  const ua = navigator.userAgent || ''
  if (/iPad|Tablet/i.test(ua)) return 'tablet'
  if (/Mobi|Android|iPhone/i.test(ua)) return 'mobile'
  return 'desktop'
}

function railLabel(rail: CheckoutRail, ui: ReturnType<typeof commerceUi>, language: string): string {
  if (rail === 'paypal') return ui.checkout.payWithPayPal
  if (rail === 'mollie') return ui.checkout.payWithMollie
  if (rail === 'tamara') return ui.checkout.payWithTamara
  if (rail === 'tabby') {
    return language === 'ar' ? 'تابي — ادفع على 4 دفعات' : 'Tabby — pay in 4'
  }
  return ui.checkout.payWithCard
}

function continueLabel(
  rail: CheckoutRail | null,
  ui: ReturnType<typeof commerceUi>,
  language: string,
): string {
  if (rail === 'paypal') return ui.checkout.continueWithPayPal
  if (rail === 'mollie') return ui.checkout.continueWithMollie
  if (rail === 'tamara') return ui.checkout.continueWithTamara
  if (rail === 'tabby') {
    return language === 'ar' ? 'المتابعة مع تابي' : 'Continue with Tabby'
  }
  return ui.checkout.continueWithCard
}

export default function CheckoutPage() {
  const router = useRouter()
  const { localize } = useLocaleHref()
  const { items } = useCartStore()
  const { formatAmount, currency, cartSubtotal, formatCartSubtotal } = useCurrency()
  const { isRTL, language } = useLanguage()
  const ui = commerceUi(language)

  const lineKey = (item: (typeof items)[number]) =>
    `${item.id}-${item.size}-${item.color}-${item.lengthCm ?? ''}-${item.customisationMessage ?? ''}`
  const productHref = (item: (typeof items)[number]) =>
    item.productUrl ??
    getProductHref(
      staticProducts.find((product) => product.id === item.id) ?? { id: item.id, name: item.name },
    )

  const [countryCode, setCountryCode] = useState<string | null>(null)
  const [payBusy, setPayBusy] = useState(false)
  const [legalAcknowledged, setLegalAcknowledged] = useState(false)
  const [selectedRail, setSelectedRail] = useState<CheckoutRail | null>(null)
  const [stripeEmbedded, setStripeEmbedded] = useState<{
    clientSecret: string
    publishableKey: string
  } | null>(null)
  const [tamaraFirstName, setTamaraFirstName] = useState('')
  const [tamaraLastName, setTamaraLastName] = useState('')
  const [tamaraEmail, setTamaraEmail] = useState('')
  const [tamaraPhone, setTamaraPhone] = useState('')
  const [tamaraLine1, setTamaraLine1] = useState('')
  const [tamaraCity, setTamaraCity] = useState('')
  const [tamaraEligible, setTamaraEligible] = useState(true)

  const availableRails = useMemo(
    () => getAvailableCheckoutRails(countryCode, currency.code),
    [countryCode, currency.code],
  )
  const checkoutEnvReady = availableRails.length > 0
  const activeRail = selectedRail && availableRails.includes(selectedRail)
    ? selectedRail
    : availableRails[0] ?? null

  useEffect(() => {
    if (items.length === 0) {
      router.replace(localize('/cart'))
    }
  }, [items.length, localize, router])

  useEffect(() => {
    void fetchGeoData().then((geo) => {
      setCountryCode(geo?.countryCode ?? null)
    })
  }, [])

  useEffect(() => {
    if (!selectedRail && availableRails.length > 0) {
      setSelectedRail(getDefaultCheckoutRail(countryCode, currency.code))
    }
  }, [availableRails, countryCode, currency.code, selectedRail])

  useEffect(() => {
    if (activeRail !== 'tamara') return
    const amount = Number(cartSubtotal(items).toFixed(2))
    if (amount <= 0) return
    const timer = window.setTimeout(() => {
      void fetch('/api/payments/tamara/eligibility', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount,
          currency: currency.code,
          phone: tamaraPhone || undefined,
        }),
      })
        .then((r) => r.json())
        .then((data: { eligible?: boolean }) => {
          setTamaraEligible(data.eligible !== false)
        })
        .catch(() => setTamaraEligible(true))
    }, 400)
    return () => window.clearTimeout(timer)
  }, [activeRail, cartSubtotal, currency.code, items, tamaraPhone])

  const beganCheckout = useRef(false)

  useEffect(() => {
    if (items.length === 0 || beganCheckout.current) return
    beganCheckout.current = true
    void import('@/lib/analytics/cartSlack').then((m) => m.markCheckoutStarted())
    const value = Number(cartSubtotal(items).toFixed(2))
    persistCheckoutSnapshot({
      currency: currency.code,
      value,
      items,
    })
    trackEvent('begin_checkout', {
      currency: currency.code,
      value,
      item_count: items.length,
      items: items.map((item) => ({
        item_id: item.id,
        item_name: item.name,
        price: item.price,
        quantity: item.quantity,
      })),
    })
  }, [cartSubtotal, currency.code, items])

  const checkoutPayload = {
    items,
    currency: currency.code,
    clientContext: {
      localTime: new Date().toString(),
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || 'Unknown',
      deviceType: detectDeviceType(),
      ...getCheckoutAttributionContext(),
    },
  }

  const startCheckout = async () => {
    if (items.length === 0) return
    if (!legalAcknowledged) {
      toast.error(ui.checkout.legalRequired)
      return
    }
    if (!activeRail || !isCheckoutRailConfigured(activeRail)) {
      toast.error(ui.checkout.selectPaymentMethod)
      return
    }

    setPayBusy(true)
    persistCheckoutSnapshot({
      currency: currency.code,
      value: Number(cartSubtotal(items).toFixed(2)),
      items,
    })
    trackEvent('add_payment_info', {
      checkout_provider: activeRail,
      currency: currency.code,
      value: Number(cartSubtotal(items).toFixed(2)),
      payment_type: activeRail,
    })
    try {
      if (activeRail === 'tabby') {
        if (
          !tamaraFirstName.trim() ||
          !tamaraLastName.trim() ||
          !tamaraEmail.trim() ||
          !tamaraPhone.trim() ||
          !tamaraLine1.trim() ||
          !tamaraCity.trim()
        ) {
          throw new Error(
            language === 'ar'
              ? 'يرجى إكمال الاسم والبريد والجوال والعنوان لتابي'
              : 'Please complete your name, email, mobile, and address for Tabby',
          )
        }
        const response = await fetch('/api/payments/tabby/checkout', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...checkoutPayload,
            language,
            consumer: {
              firstName: tamaraFirstName.trim(),
              lastName: tamaraLastName.trim(),
              email: tamaraEmail.trim(),
              phone: tamaraPhone.trim(),
            },
            shippingAddress: {
              line1: tamaraLine1.trim(),
              city: tamaraCity.trim(),
            },
          }),
        })
        const { url, error } = await response.json()
        if (!response.ok) throw new Error(error || 'Checkout is unavailable')
        if (typeof url === 'string' && url.startsWith('https://')) {
          window.location.assign(url)
          return
        }
        throw new Error('Tabby checkout URL missing')
      }

      if (activeRail === 'tamara') {
        if (!tamaraEligible) {
          throw new Error(ui.checkout.payWithTamara)
        }
        if (
          !tamaraFirstName.trim() ||
          !tamaraLastName.trim() ||
          !tamaraEmail.trim() ||
          !tamaraPhone.trim() ||
          !tamaraLine1.trim() ||
          !tamaraCity.trim()
        ) {
          throw new Error(
            language === 'ar'
              ? 'يرجى إكمال الاسم والبريد والجوال والعنوان لتمارا'
              : 'Please complete your name, email, mobile, and address for Tamara',
          )
        }
        const response = await fetch('/api/payments/tamara/checkout', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...checkoutPayload,
            language,
            consumer: {
              firstName: tamaraFirstName.trim(),
              lastName: tamaraLastName.trim(),
              email: tamaraEmail.trim(),
              phone: tamaraPhone.trim(),
            },
            shippingAddress: {
              line1: tamaraLine1.trim(),
              city: tamaraCity.trim(),
            },
          }),
        })
        const { url, error } = await response.json()
        if (!response.ok) throw new Error(error || 'Checkout is unavailable')
        if (typeof url === 'string' && url.startsWith('https://')) {
          window.location.assign(url)
          return
        }
        throw new Error('Tamara checkout URL missing')
      }

      if (activeRail === 'mollie') {
        const response = await fetch('/api/payments/mollie/checkout', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(checkoutPayload),
        })
        const { url, error } = await response.json()
        if (!response.ok) throw new Error(error || 'Checkout is unavailable')
        if (typeof url === 'string' && url.startsWith('https://')) {
          window.location.assign(url)
          return
        }
        throw new Error('Mollie checkout URL missing')
      }

      if (activeRail === 'paypal') {
        const response = await fetch('/api/payments/paypal/checkout', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(checkoutPayload),
        })
        const { url, error } = await response.json()
        if (!response.ok) throw new Error(error || 'Checkout is unavailable')
        if (typeof url === 'string' && url.startsWith('https://')) {
          window.location.assign(url)
          return
        }
        throw new Error('PayPal checkout URL missing')
      }

      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(checkoutPayload),
      })
      const data = (await response.json()) as {
        mode?: string
        url?: string
        clientSecret?: string
        publishableKey?: string
        error?: string
      }
      if (!response.ok) throw new Error(data.error || 'Checkout is unavailable')
      if (data.error) throw new Error(data.error)

      if (data.mode === 'embedded' && data.clientSecret) {
        const publishableKey =
          data.publishableKey ||
          process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY?.trim() ||
          ''
        if (!publishableKey) throw new Error('Stripe publishable key missing')
        setStripeEmbedded({
          clientSecret: data.clientSecret,
          publishableKey,
        })
        return
      }

      if (typeof data.url === 'string' && data.url.startsWith('https://')) {
        window.location.assign(data.url)
        return
      }
      throw new Error('Stripe checkout session missing')
    } catch (e) {
      console.error(e)
      toast.error(ui.checkout.checkoutError)
    } finally {
      setPayBusy(false)
    }
  }

  if (items.length === 0) {
    return (
      <div className={`flex min-h-screen items-center justify-center bg-brand-pageCanvas font-montserrat text-brand-clayRed ${SITE_CONTENT_TOP_PAD}`}>
        {ui.checkout.redirecting}
      </div>
    )
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-brand-pageCanvas">
      <div className="border-b border-brand-stone/20 bg-brand-pageCanvas">
        <div className={`container mx-auto min-w-0 px-4 pb-4 ${SITE_CONTENT_TOP_PAD} sm:px-6 sm:pb-6 lg:px-12`}>
          <AppPageWayfinding
            rtl={isRTL}
            variant="muted"
            className="space-y-2.5"
            breadcrumbClassName="text-brand-clayRed/70 [&_a]:text-brand-clayRed/70 [&_span]:text-brand-darkRed"
            segments={[
              { label: ui.common.bag, href: '/cart' },
              { label: ui.checkout.securePayment },
            ]}
            backLink={{
              href: '/cart',
              label: ui.checkout.editBag,
            }}
          />
          <div className={`${isRTL ? 'text-right' : ''} mt-3 sm:mt-4`}>
            <h1
              data-document-h1="true"
              className="font-rozha text-[1.75rem] leading-tight text-brand-darkRed sm:text-3xl md:text-4xl"
            >
              {ui.checkout.reviewOrder}
            </h1>
            <p className="mt-2 max-w-xl font-montserrat text-sm leading-relaxed tracking-wide text-brand-clayRed/70">
              {ui.checkout.reviewSubtitle}
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto min-w-0 px-4 py-8 sm:px-6 sm:py-10 lg:px-12 lg:py-16">
        {stripeEmbedded ? (
          <div className="mx-auto max-w-3xl">
            <StripeEmbeddedCheckoutForm
              clientSecret={stripeEmbedded.clientSecret}
              publishableKey={stripeEmbedded.publishableKey}
              backLabel={ui.common.back}
              rtl={isRTL}
              onBack={() => setStripeEmbedded(null)}
            />
          </div>
        ) : (
        <div className="grid min-w-0 gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="min-w-0 lg:col-span-7">
            <motion.section
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-2xl border border-brand-stone/20 bg-white p-5 shadow-sm sm:p-6 md:p-8"
            >
              <ul className="divide-y divide-brand-stone/15">
                {items.map((item) => {
                  const catalogProduct = staticProducts.find((product) => product.id === item.id)
                  const imageSrc = productImageSrc(
                    item.image?.trim() || catalogProduct?.images[0] || '/placeholders/product-front-F.svg',
                  )
                  return (
                  <li key={lineKey(item)} className="flex items-start gap-3 py-5 first:pt-0 sm:gap-4">
                    <LocaleLink
                      href={productHref(item)}
                      className="relative h-20 w-16 shrink-0 overflow-hidden bg-[#f0eeeb] sm:h-24 sm:w-20"
                      data-cursor-hover
                    >
                      <Image
                        src={imageSrc}
                        alt={getCartLineImageAlt(item, catalogProduct, language)}
                        fill
                        unoptimized={isWebshopPicturePath(imageSrc)}
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
                        {item.quantity > 1 ? (
                          <>
                            <span className="text-brand-clayRed/50"> × {item.quantity}</span>
                            <span className="block text-xs text-brand-clayRed/55">
                              {ui.cart.lineTotal}:{' '}
                              {formatAmount(lineTotalForCurrency(item, currency.code))}
                            </span>
                          </>
                        ) : null}
                      </p>
                    </div>
                  </li>
                  )
                })}
              </ul>
            </motion.section>
          </div>

          <div className="min-w-0 lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 }}
                className={`relative overflow-hidden rounded-2xl border border-brand-darkRed/10 bg-gradient-to-b from-[#3B0A12] to-[#1F0508] p-6 text-brand-ivory shadow-xl sm:p-8 ${isRTL ? 'text-right' : ''}`}
              >
                <div
                  className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-dustyBlue/40 to-transparent"
                  aria-hidden
                />
                <h2 className="mb-5 font-montserrat text-[11px] uppercase tracking-[0.28em] text-brand-dustyBlue/90 sm:mb-6">
                  {ui.cart.orderSummary}
                </h2>
                <div
                  className={`flex items-baseline justify-between gap-4 font-montserrat text-sm tracking-wide text-white/75 ${isRTL ? 'flex-row-reverse' : ''}`}
                >
                  <span className="min-w-0">{ui.cart.subtotal}</span>
                  <span className="shrink-0 whitespace-nowrap text-white">{formatCartSubtotal(items)}</span>
                </div>
                <p className="mt-2 font-montserrat text-[11px] tracking-wide text-white/55">
                  {ui.cart.taxesIncluded}
                </p>

                {availableRails.length > 1 ? (
                  <fieldset className="mt-6 space-y-2.5 sm:mt-8">
                    <legend className="mb-3 font-montserrat text-[10px] uppercase tracking-[0.16em] text-white/55">
                      {ui.checkout.paymentMethod}
                    </legend>
                    {availableRails.map((rail) => (
                      <label
                        key={rail}
                        className={`flex cursor-pointer items-start gap-3 rounded-[4px] border px-3 py-3 transition-colors ${
                          activeRail === rail
                            ? 'border-brand-dustyBlue/70 bg-white/10'
                            : 'border-white/10 bg-white/5 hover:border-white/20'
                        } ${isRTL ? 'flex-row-reverse text-right' : ''}`}
                      >
                        <input
                          type="radio"
                          name="checkout-rail"
                          value={rail}
                          checked={activeRail === rail}
                          onChange={() => setSelectedRail(rail)}
                          className="mt-1 h-4 w-4 shrink-0 accent-brand-dustyBlue"
                        />
                        <span className="min-w-0 flex-1 space-y-2">
                          <span className="sr-only">{railLabel(rail, ui, language)}</span>
                          <CheckoutPaymentRailIcons rail={rail} />
                          {rail === 'mollie' ? (
                            <span className="block font-montserrat text-[11px] leading-snug tracking-wide text-white/75">
                              {ui.checkout.payWithMollie}
                            </span>
                          ) : null}
                          {rail === 'tamara' ? (
                            <span
                              className={`block font-montserrat text-[11px] leading-snug tracking-wide ${
                                tamaraEligible ? 'text-white/75' : 'text-white/35'
                              }`}
                            >
                              {ui.checkout.payWithTamara}
                              {!tamaraEligible
                                ? language === 'ar'
                                  ? ' (غير متاح لهذا الطلب)'
                                  : ' (unavailable for this order)'
                                : ''}
                            </span>
                          ) : null}
                          {rail === 'tabby' ? (
                            <span className="block font-montserrat text-[11px] leading-snug tracking-wide text-white/75">
                              {railLabel('tabby', ui, language)}
                            </span>
                          ) : null}
                        </span>
                      </label>
                    ))}
                  </fieldset>
                ) : null}

                {activeRail === 'tamara' || activeRail === 'tabby' ? (
                  <div className="mt-5 space-y-2.5 rounded-[6px] border border-white/15 bg-white/[0.08] p-3.5 sm:mt-6 sm:p-4">
                    <p className="font-montserrat text-[10px] uppercase tracking-[0.14em] text-[#e8d8c8]/75">
                      {activeRail === 'tabby'
                        ? language === 'ar'
                          ? 'تفاصيل تابي'
                          : 'Tabby details'
                        : language === 'ar'
                          ? 'تفاصيل تمارا'
                          : 'Tamara details'}
                    </p>
                    <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                      <input
                        value={tamaraFirstName}
                        onChange={(e) => setTamaraFirstName(e.target.value)}
                        placeholder={language === 'ar' ? 'الاسم الأول' : 'First name'}
                        className={formFieldOnDarkClass}
                        autoComplete="given-name"
                      />
                      <input
                        value={tamaraLastName}
                        onChange={(e) => setTamaraLastName(e.target.value)}
                        placeholder={language === 'ar' ? 'اسم العائلة' : 'Last name'}
                        className={formFieldOnDarkClass}
                        autoComplete="family-name"
                      />
                    </div>
                    <input
                      value={tamaraEmail}
                      onChange={(e) => setTamaraEmail(e.target.value)}
                      placeholder="Email"
                      type="email"
                      className={formFieldOnDarkClass}
                      autoComplete="email"
                    />
                    <input
                      value={tamaraPhone}
                      onChange={(e) => setTamaraPhone(e.target.value)}
                      placeholder={language === 'ar' ? 'الجوال (مثال 9715…)' : 'Mobile (e.g. 9715…)'}
                      type="tel"
                      className={formFieldOnDarkClass}
                      autoComplete="tel"
                    />
                    <input
                      value={tamaraLine1}
                      onChange={(e) => setTamaraLine1(e.target.value)}
                      placeholder={language === 'ar' ? 'عنوان الشحن' : 'Shipping address'}
                      className={formFieldOnDarkClass}
                      autoComplete="street-address"
                    />
                    <input
                      value={tamaraCity}
                      onChange={(e) => setTamaraCity(e.target.value)}
                      placeholder={language === 'ar' ? 'المدينة' : 'City'}
                      className={formFieldOnDarkClass}
                      autoComplete="address-level2"
                    />
                  </div>
                ) : null}

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
                    {ui.checkout.legalAcceptPrefix}{' '}
                    <LocaleLink
                      href="/shipment-return-policy"
                      className="underline hover:text-brand-dustyBlue"
                      data-cursor-hover
                    >
                      {ui.checkout.shipmentPolicy}
                    </LocaleLink>{' '}
                    {ui.checkout.legalAnd}{' '}
                    <LocaleLink
                      href="/terms"
                      className="underline hover:text-brand-dustyBlue"
                      data-cursor-hover
                    >
                      {ui.checkout.termsConditions}
                    </LocaleLink>
                    .
                  </span>
                </label>

                <button
                  type="button"
                  onClick={() => void startCheckout()}
                  disabled={
                    payBusy ||
                    !checkoutEnvReady ||
                    !legalAcknowledged ||
                    !activeRail ||
                    (activeRail === 'tamara' && !tamaraEligible)
                  }
                  className={`mt-5 flex min-h-[48px] w-full items-center justify-center gap-2 rounded-[4px] px-4 py-3.5 font-montserrat text-sm font-medium tracking-wide transition-colors sm:mt-6 ${
                    payBusy ||
                    !checkoutEnvReady ||
                    !legalAcknowledged ||
                    !activeRail ||
                    (activeRail === 'tamara' && !tamaraEligible)
                      ? 'cursor-not-allowed bg-white/15 text-white/45'
                      : 'bg-brand-dustyBlue text-[#1a0008] hover:bg-white hover:text-brand-darkRed'
                  } ${isRTL ? 'flex-row-reverse' : ''}`}
                  data-cursor-hover
                >
                  {payBusy ? (
                    ui.checkout.processingPayment
                  ) : (
                    <>
                      <FiLock className="h-4 w-4 shrink-0 opacity-90" />
                      <span className="truncate">{continueLabel(activeRail, ui, language)}</span>
                      <FiArrowRight className={`h-4 w-4 shrink-0 opacity-90 ${isRTL ? 'rotate-180' : ''}`} />
                    </>
                  )}
                </button>
                {!checkoutEnvReady ? (
                  <p className="mt-3 text-center font-montserrat text-[10px] uppercase tracking-[0.15em] text-amber-300/80">
                    {getCheckoutConfigHint('stripe')}
                  </p>
                ) : null}
              </motion.div>
            </div>
          </div>
        </div>
        )}
      </div>
    </div>
  )
}
