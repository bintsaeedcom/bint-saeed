'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
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
import {
  validateBnplCheckoutForm,
  type BnplFormField,
} from '@/lib/checkout/bnplFormValidation'
import { formFieldErrorClass, formFieldOnDarkClass } from '@/lib/ui/formFieldClasses'
import { tabbyMessage, tabbyRejectionMessage } from '@/lib/tabby/messages'
import { normalizeTabbyPhone } from '@/lib/tabby/normalizePhone'
import { cartRequiresPhysicalShipping } from '@/lib/giftCards/cartDetection'
import { getEstimatedShippingFee } from '@/lib/pricing'
import CheckoutGiftCardApply, {
  type AppliedGiftCardPreview,
} from '@/components/CheckoutGiftCardApply'
import dynamic from 'next/dynamic'

const StripeEmbeddedCheckoutForm = dynamic(
  () => import('@/components/checkout/StripeEmbeddedCheckoutForm'),
  { ssr: false },
)
const TabbyPromoSnippet = dynamic(() => import('@/components/TabbyPromoSnippet'), {
  ssr: false,
})

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
    return language === 'ar' ? 'ادفع لاحقًا مع تابي' : 'Pay later with Tabby'
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
  const searchParams = useSearchParams()
  const { localize } = useLocaleHref()
  const { items } = useCartStore()
  const { formatAmount, currency, cartSubtotal, formatCartSubtotal } = useCurrency()
  const { isRTL, language } = useLanguage()
  const ui = commerceUi(language)
  const [appliedGiftCard, setAppliedGiftCard] = useState<AppliedGiftCardPreview | null>(null)
  const requiresPhysicalShipping = cartRequiresPhysicalShipping(items)
  const merchandiseSubtotal = Number(cartSubtotal(items).toFixed(2))
  const estimatedShipping = requiresPhysicalShipping
    ? getEstimatedShippingFee(currency.code)
    : 0
  const amountBeforeGiftCard = Number((merchandiseSubtotal + estimatedShipping).toFixed(2))
  const giftCredit = appliedGiftCard?.appliedInCurrency ?? 0
  const amountDueNow = Math.max(0, Number((amountBeforeGiftCard - giftCredit).toFixed(2)))
  const giftCardCoversFull = Boolean(appliedGiftCard && amountDueNow <= 0)

  const paymentReturnStatus = useMemo(() => {
    const tabby = searchParams?.get('tabby')
    const tamara = searchParams?.get('tamara')
    const stripe = searchParams?.get('stripe')
    const raw = tabby || tamara || stripe
    if (raw === 'cancelled' || raw === 'canceled' || raw === 'failed') {
      return {
        kind: (raw === 'failed' ? 'failed' : 'cancelled') as 'failed' | 'cancelled',
        provider: tabby ? 'tabby' : tamara ? 'tamara' : 'stripe',
      }
    }
    return null
  }, [searchParams])
  const [paymentNoticeDismissed, setPaymentNoticeDismissed] = useState(false)

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
  const [tabbyEligible, setTabbyEligible] = useState(true)
  const [tabbyRejectMessage, setTabbyRejectMessage] = useState<string | null>(null)
  const [bnplFieldError, setBnplFieldError] = useState<{
    field: BnplFormField
    message: string
  } | null>(null)

  const bnplFieldClass = (field: BnplFormField) =>
    `${formFieldOnDarkClass}${bnplFieldError?.field === field ? ` ${formFieldErrorClass}` : ''}`

  const clearBnplFieldError = (field?: BnplFormField) => {
    setBnplFieldError((prev) => {
      if (!prev) return null
      if (!field || prev.field === field) return null
      return prev
    })
  }

  async function readCheckoutError(response: Response, fallback: string): Promise<string> {
    try {
      const data = (await response.json()) as {
        error?: string
        message?: string
        details?: { message?: string; error?: string; errors?: Array<{ message?: string }> }
      }
      const fromDetailsList = Array.isArray(data.details?.errors)
        ? data.details.errors.map((e) => e.message).filter(Boolean).join(' ')
        : ''
      return (
        data.error?.trim() ||
        data.message?.trim() ||
        data.details?.message?.trim() ||
        data.details?.error?.trim() ||
        fromDetailsList ||
        fallback
      )
    } catch {
      return fallback
    }
  }

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
    setAppliedGiftCard(null)
  }, [currency.code])

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
    // Amount-only while typing — server strips incomplete mobiles so Tamara
    // does not mark them ineligible mid-entry.
    const timer = window.setTimeout(() => {
      void fetch('/api/payments/tamara/eligibility', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount,
          currency: currency.code,
          country: countryCode || undefined,
          phone: tamaraPhone.trim() || undefined,
        }),
      })
        .then((r) => r.json())
        .then((data: { eligible?: boolean }) => {
          setTamaraEligible(data.eligible !== false)
        })
        .catch(() => setTamaraEligible(true))
    }, 450)
    return () => window.clearTimeout(timer)
  }, [activeRail, cartSubtotal, countryCode, currency.code, items, tamaraPhone])

  useEffect(() => {
    if (activeRail !== 'tabby') return
    const amount = Number(cartSubtotal(items).toFixed(2))
    if (amount <= 0) return
    const timer = window.setTimeout(() => {
      void fetch('/api/payments/tabby/eligibility', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount,
          currency: currency.code,
          country: countryCode || undefined,
          language,
          email: tamaraEmail.trim() || undefined,
          phone: tamaraPhone.trim() || undefined,
          name: `${tamaraFirstName} ${tamaraLastName}`.trim() || undefined,
        }),
      })
        .then((r) => r.json())
        .then(
          (data: {
            eligible?: boolean
            message?: string
            reason?: string
            phoneChecked?: boolean
          }) => {
            if (data.phoneChecked && data.eligible === false) {
              setTabbyEligible(false)
              setTabbyRejectMessage(
                data.message || tabbyRejectionMessage(data.reason, language),
              )
            } else {
              setTabbyEligible(true)
              setTabbyRejectMessage(null)
            }
          },
        )
        .catch(() => {
          setTabbyEligible(true)
          setTabbyRejectMessage(null)
        })
    }, 500)
    return () => window.clearTimeout(timer)
  }, [
    activeRail,
    cartSubtotal,
    countryCode,
    currency.code,
    items,
    language,
    tamaraEmail,
    tamaraFirstName,
    tamaraLastName,
    tamaraPhone,
  ])

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
    appliedGiftCardCode: appliedGiftCard?.code || undefined,
    customerEmail: tamaraEmail.trim() || undefined,
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
    if (!giftCardCoversFull && (!activeRail || !isCheckoutRailConfigured(activeRail))) {
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
      checkout_provider: giftCardCoversFull ? 'gift_card' : activeRail,
      currency: currency.code,
      value: Number(cartSubtotal(items).toFixed(2)),
      payment_type: giftCardCoversFull ? 'gift_card' : activeRail,
    })
    try {
      if (giftCardCoversFull) {
        if (!tamaraEmail.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(tamaraEmail.trim())) {
          throw new Error(
            language === 'ar'
              ? 'أدخلي بريداً إلكترونياً صالحاً لتأكيد الطلب.'
              : 'Enter a valid email for your order confirmation.',
          )
        }
        if (requiresPhysicalShipping && (!tamaraLine1.trim() || !tamaraCity.trim())) {
          setBnplFieldError({
            field: !tamaraLine1.trim() ? 'line1' : 'city',
            message:
              language === 'ar'
                ? 'أدخلي عنوان الشحن لهذا الطلب.'
                : 'Enter a shipping address for this order.',
          })
          throw new Error(
            language === 'ar'
              ? 'أدخلي عنوان الشحن لهذا الطلب.'
              : 'Enter a shipping address for this order.',
          )
        }
        const response = await fetch('/api/checkout/gift-card-pay', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...checkoutPayload,
            customerEmail: tamaraEmail.trim(),
            consumer: {
              firstName: tamaraFirstName.trim() || 'Guest',
              lastName: tamaraLastName.trim() || 'Guest',
              email: tamaraEmail.trim(),
              phone: tamaraPhone.trim() || undefined,
            },
            shippingAddress: requiresPhysicalShipping
              ? { line1: tamaraLine1.trim(), city: tamaraCity.trim() }
              : undefined,
          }),
        })
        if (!response.ok) {
          throw new Error(await readCheckoutError(response, 'Gift card checkout is unavailable'))
        }
        const data = (await response.json()) as { orderId?: string; error?: string }
        if (data.error) throw new Error(data.error)
        window.location.assign(
          localize(
            `/checkout/success?order_id=${encodeURIComponent(data.orderId || '')}&provider=gift_card`,
          ),
        )
        return
      }

      if (activeRail === 'tabby') {
        if (!tabbyEligible) {
          throw new Error(tabbyRejectMessage || tabbyMessage('generalReject', language))
        }
        const validated = validateBnplCheckoutForm(
          {
            firstName: tamaraFirstName,
            lastName: tamaraLastName,
            email: tamaraEmail,
            phone: tamaraPhone,
            line1: tamaraLine1,
            city: tamaraCity,
          },
          {
            language,
            provider: 'tabby',
            countryCode: countryCode === 'SA' ? 'SA' : 'AE',
            requireShippingAddress: requiresPhysicalShipping,
          },
        )
        if (!validated.ok) {
          setBnplFieldError({ field: validated.field, message: validated.message })
          throw new Error(validated.message)
        }
        setBnplFieldError(null)
        const tabbyCountry =
          countryCode === 'SA' ? 'SA' : countryCode === 'KW' ? 'KW' : 'AE'
        const tabbyPhone = normalizeTabbyPhone(tamaraPhone, tabbyCountry)
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
              phone: tabbyPhone,
            },
            shippingAddress: {
              line1: tamaraLine1.trim(),
              city: tamaraCity.trim(),
            },
          }),
        })
        if (!response.ok) {
          throw new Error(await readCheckoutError(response, 'Tabby checkout is unavailable'))
        }
        const { url, error } = (await response.json()) as { url?: string; error?: string }
        if (error) throw new Error(error)
        if (typeof url === 'string' && url.startsWith('https://')) {
          window.location.assign(url)
          return
        }
        throw new Error('Tabby checkout URL missing')
      }

      if (activeRail === 'tamara') {
        const validated = validateBnplCheckoutForm(
          {
            firstName: tamaraFirstName,
            lastName: tamaraLastName,
            email: tamaraEmail,
            phone: tamaraPhone,
            line1: tamaraLine1,
            city: tamaraCity,
          },
          {
            language,
            provider: 'tamara',
            countryCode: countryCode === 'SA' ? 'SA' : 'AE',
            requireShippingAddress: requiresPhysicalShipping,
          },
        )
        if (!validated.ok) {
          setBnplFieldError({ field: validated.field, message: validated.message })
          throw new Error(validated.message)
        }
        setBnplFieldError(null)
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
              phone: validated.phoneNormalized,
            },
            shippingAddress: {
              line1: tamaraLine1.trim(),
              city: tamaraCity.trim(),
            },
          }),
        })
        if (!response.ok) {
          throw new Error(await readCheckoutError(response, 'Tamara checkout is unavailable'))
        }
        const { url, error } = (await response.json()) as { url?: string; error?: string }
        if (error) throw new Error(error)
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
        if (!response.ok) {
          throw new Error(await readCheckoutError(response, 'Checkout is unavailable'))
        }
        const { url, error } = (await response.json()) as { url?: string; error?: string }
        if (error) throw new Error(error)
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
        if (!response.ok) {
          throw new Error(await readCheckoutError(response, 'Checkout is unavailable'))
        }
        const { url, error } = (await response.json()) as { url?: string; error?: string }
        if (error) throw new Error(error)
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
      if (!response.ok) {
        throw new Error(await readCheckoutError(response, 'Checkout is unavailable'))
      }
      const data = (await response.json()) as {
        mode?: string
        url?: string
        clientSecret?: string
        publishableKey?: string
        error?: string
      }
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
      const message =
        e instanceof Error && e.message.trim()
          ? e.message
          : ui.checkout.checkoutError
      const lower = message.toLowerCase()
      if (lower.includes('first name') || message.includes('الاسم الأول')) {
        setBnplFieldError({ field: 'firstName', message })
      } else if (lower.includes('last name') || message.includes('اسم العائلة')) {
        setBnplFieldError({ field: 'lastName', message })
      } else if (lower.includes('email') || message.includes('بريد')) {
        setBnplFieldError({ field: 'email', message })
      } else if (
        lower.includes('mobile') ||
        lower.includes('phone') ||
        message.includes('جوال')
      ) {
        setBnplFieldError({ field: 'phone', message })
      } else if (
        lower.includes('street') ||
        (lower.includes('address') && !lower.includes('email')) ||
        message.includes('عنوان')
      ) {
        setBnplFieldError({ field: 'line1', message })
      } else if (lower.includes('city') || message.includes('مدينة')) {
        setBnplFieldError({ field: 'city', message })
      }
      toast.error(message)
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
          {paymentReturnStatus && !paymentNoticeDismissed ? (
            <div
              className={`mt-5 rounded-[4px] border border-brand-stone/30 bg-white/80 px-4 py-4 ${
                isRTL ? 'text-right' : 'text-left'
              }`}
              role="status"
            >
              <p className="font-montserrat text-[10px] uppercase tracking-[0.18em] text-brand-dustyBlue">
                {paymentReturnStatus.kind === 'failed'
                  ? isRTL
                    ? 'لم يكتمل الدفع'
                    : 'Payment not completed'
                  : isRTL
                    ? 'تم إلغاء الدفع'
                    : 'Payment cancelled'}
              </p>
              <p className="mt-2 font-montserrat text-sm leading-relaxed text-brand-clayRed/75">
                {paymentReturnStatus.provider === 'tabby'
                  ? paymentReturnStatus.kind === 'failed'
                    ? tabbyMessage('generalReject', language)
                    : tabbyMessage('cancelled', language)
                  : paymentReturnStatus.kind === 'failed'
                    ? isRTL
                      ? 'يمكنك المحاولة مرة أخرى من هنا، أو العودة إلى السلة، أو التواصل معنا للتحويل البنكي.'
                      : 'You can try again here, return to your bag, or message us for bank transfer.'
                    : isRTL
                      ? 'طلبك لا يزال في السلة. تابعي الدفع متى شئت، أو تواصلي معنا إذا احتجتِ مساعدة.'
                      : 'Your selection is still in the bag. Continue when ready, or message us if you need help.'}
              </p>
              <div
                className={`mt-3 flex flex-wrap gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}
              >
                <button
                  type="button"
                  onClick={() => setPaymentNoticeDismissed(true)}
                  className="font-montserrat text-[11px] uppercase tracking-[0.14em] text-brand-darkRed underline-offset-4 hover:underline"
                  data-cursor-hover
                >
                  {isRTL ? 'متابعة الدفع' : 'Continue to payment'}
                </button>
                <LocaleLink
                  href="/cart"
                  className="font-montserrat text-[11px] uppercase tracking-[0.14em] text-brand-dustyBlue underline-offset-4 hover:underline"
                  data-cursor-hover
                >
                  {ui.checkout.editBag}
                </LocaleLink>
              </div>
            </div>
          ) : null}
        </div>
      </div>

      <div className="container mx-auto min-w-0 px-4 py-8 sm:px-6 sm:py-10 lg:px-12 lg:py-16">
        {stripeEmbedded ? (
          <div className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-12 lg:items-start lg:gap-10">
            <aside
              className={`min-w-0 space-y-4 lg:col-span-4 ${isRTL ? 'text-right' : ''}`}
            >
              <p className="font-montserrat text-[10px] uppercase tracking-[0.2em] text-brand-dustyBlue">
                {ui.cart.orderSummary}
              </p>
              <ul className="divide-y divide-brand-stone/20 rounded-xl border border-brand-stone/20 bg-white/90">
                {items.map((item) => {
                  const catalogProduct = staticProducts.find((product) => product.id === item.id)
                  const imageSrc = productImageSrc(
                    item.image?.trim() || catalogProduct?.images[0] || '/placeholders/product-front-F.svg',
                  )
                  return (
                    <li
                      key={lineKey(item)}
                      className={`flex items-start gap-3 px-4 py-3.5 ${isRTL ? 'flex-row-reverse' : ''}`}
                    >
                      <div className="relative h-16 w-12 shrink-0 overflow-hidden bg-[#f0eeeb]">
                        <Image
                          src={imageSrc}
                          alt={getCartLineImageAlt(item, catalogProduct, language)}
                          fill
                          unoptimized={isWebshopPicturePath(imageSrc)}
                          className="object-cover object-top"
                          sizes="48px"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="font-rozha text-sm leading-snug text-brand-darkRed">{item.name}</p>
                        <p className="mt-1 font-montserrat text-[11px] text-brand-clayRed/65">
                          {item.size} · {item.color}
                          {item.quantity > 1 ? ` · ×${item.quantity}` : ''}
                        </p>
                        <p className="mt-1 font-montserrat text-xs text-brand-darkRed">
                          {formatAmount(lineTotalForCurrency(item, currency.code))}
                        </p>
                      </div>
                    </li>
                  )
                })}
              </ul>
              <div
                className={`flex items-baseline justify-between gap-3 border-t border-brand-stone/20 pt-3 font-montserrat text-sm ${isRTL ? 'flex-row-reverse' : ''}`}
              >
                <span className="text-brand-clayRed/70">{ui.cart.subtotal}</span>
                <span className="font-medium text-brand-darkRed">{formatCartSubtotal(items)}</span>
              </div>
              <p className="font-montserrat text-[11px] leading-relaxed text-brand-clayRed/60">
                {ui.cart.taxesIncluded}
              </p>
            </aside>
            <div className="min-w-0 lg:col-span-8">
              <StripeEmbeddedCheckoutForm
                clientSecret={stripeEmbedded.clientSecret}
                publishableKey={stripeEmbedded.publishableKey}
                backLabel={ui.common.back}
                rtl={isRTL}
                onBack={() => setStripeEmbedded(null)}
              />
            </div>
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
                {estimatedShipping > 0 ? (
                  <div
                    className={`mt-2 flex items-baseline justify-between gap-4 font-montserrat text-sm tracking-wide text-white/75 ${isRTL ? 'flex-row-reverse' : ''}`}
                  >
                    <span className="min-w-0">{ui.cart.shippingLabel}</span>
                    <span className="shrink-0 whitespace-nowrap text-white">
                      {formatAmount(estimatedShipping)}
                    </span>
                  </div>
                ) : (
                  <p className="mt-2 font-montserrat text-[11px] tracking-wide text-white/55">
                    {requiresPhysicalShipping
                      ? ui.cart.taxesIncluded
                      : language === 'ar'
                        ? 'رقمي — بدون شحن.'
                        : 'Digital — no shipping.'}
                  </p>
                )}
                <CheckoutGiftCardApply
                  items={items}
                  amountDueBeforeGiftCard={amountBeforeGiftCard}
                  applied={appliedGiftCard}
                  onApplied={setAppliedGiftCard}
                />
                {appliedGiftCard ? (
                  <div
                    className={`mt-3 flex items-baseline justify-between gap-4 border-t border-white/10 pt-3 font-montserrat text-sm tracking-wide text-white ${isRTL ? 'flex-row-reverse' : ''}`}
                  >
                    <span className="min-w-0">
                      {language === 'ar' ? 'المستحق الآن' : 'Due now'}
                    </span>
                    <span className="shrink-0 whitespace-nowrap font-medium">
                      {formatAmount(amountDueNow)}
                    </span>
                  </div>
                ) : null}
                <p className="mt-2 font-montserrat text-[11px] tracking-wide text-white/55">
                  {ui.cart.taxesIncluded}
                </p>

                {giftCardCoversFull ? (
                  <div className="mt-6 space-y-2.5">
                    <p className="font-montserrat text-[11px] leading-snug tracking-wide text-brand-dustyBlue">
                      {language === 'ar'
                        ? 'بطاقة الهدايا تغطي الطلب بالكامل. أدخلي بريدك لإتمام الدفع.'
                        : 'Your gift card covers this order. Enter your email to complete payment.'}
                    </p>
                    <input
                      value={tamaraEmail}
                      onChange={(e) => {
                        setTamaraEmail(e.target.value)
                        clearBnplFieldError('email')
                      }}
                      placeholder={language === 'ar' ? 'البريد الإلكتروني' : 'Email'}
                      type="email"
                      className={bnplFieldClass('email')}
                      autoComplete="email"
                    />
                    {requiresPhysicalShipping ? (
                      <>
                        <input
                          value={tamaraLine1}
                          onChange={(e) => {
                            setTamaraLine1(e.target.value)
                            clearBnplFieldError('line1')
                          }}
                          placeholder={language === 'ar' ? 'عنوان الشحن' : 'Shipping address'}
                          className={bnplFieldClass('line1')}
                          autoComplete="street-address"
                        />
                        <input
                          value={tamaraCity}
                          onChange={(e) => {
                            setTamaraCity(e.target.value)
                            clearBnplFieldError('city')
                          }}
                          placeholder={language === 'ar' ? 'المدينة' : 'City'}
                          className={bnplFieldClass('city')}
                          autoComplete="address-level2"
                        />
                      </>
                    ) : null}
                  </div>
                ) : availableRails.length > 1 ? (
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
                          onChange={() => {
                            setSelectedRail(rail)
                            setBnplFieldError(null)
                          }}
                          className="mt-1 h-4 w-4 shrink-0 accent-brand-dustyBlue"
                        />
                        <span
                          className={`min-w-0 flex-1 ${
                            rail === 'tamara' || rail === 'tabby'
                              ? 'flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3'
                              : 'space-y-2'
                          }`}
                        >
                          <span className="sr-only">{railLabel(rail, ui, language)}</span>
                          <CheckoutPaymentRailIcons
                            rail={rail}
                            className={rail === 'tamara' || rail === 'tabby' ? 'shrink-0' : ''}
                          />
                          {rail === 'mollie' ? (
                            <span className="block font-montserrat text-[11px] leading-snug tracking-wide text-white/75">
                              {ui.checkout.payWithMollie}
                            </span>
                          ) : null}
                          {rail === 'tamara' ? (
                            <span
                              className={`font-montserrat text-[11px] leading-snug tracking-wide sm:flex-1 ${
                                tamaraEligible ? 'text-white/75' : 'text-amber-200/90'
                              }`}
                            >
                              {ui.checkout.payWithTamara}
                              {!tamaraEligible
                                ? language === 'ar'
                                  ? ' — قد لا تتأهل لهذا الطلب؛ يمكنك المحاولة أو اختيار بطاقة'
                                  : ' — may not qualify for this order; you can still try, or pay by card'
                                : ''}
                            </span>
                          ) : null}
                          {rail === 'tabby' ? (
                            <span
                              className={`font-montserrat text-[11px] leading-snug tracking-wide sm:flex-1 ${
                                tabbyEligible ? 'text-white/75' : 'text-amber-200/90'
                              }`}
                            >
                              {railLabel('tabby', ui, language)}
                            </span>
                          ) : null}
                        </span>
                      </label>
                    ))}
                  </fieldset>
                ) : null}

                {(!giftCardCoversFull && (activeRail === 'tamara' || activeRail === 'tabby')) ? (
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
                    {activeRail === 'tabby' ? (
                      <TabbyPromoSnippet
                        price={Number(cartSubtotal(items).toFixed(2))}
                        currency={currency.code}
                        source="checkout"
                        className="rounded-[4px] bg-white/95 px-2 py-1"
                      />
                    ) : null}
                    {activeRail === 'tabby' && tabbyRejectMessage ? (
                      <p
                        className="rounded-[4px] border border-brand-clayRed/40 bg-brand-clayRed/15 px-3 py-2 font-montserrat text-[12px] leading-snug text-[#f5e6dc]"
                        role="alert"
                      >
                        {tabbyRejectMessage}
                      </p>
                    ) : null}
                    {bnplFieldError ? (
                      <p
                        className="rounded-[4px] border border-brand-clayRed/40 bg-brand-clayRed/15 px-3 py-2 font-montserrat text-[12px] leading-snug text-[#f5e6dc]"
                        role="alert"
                      >
                        {bnplFieldError.message}
                      </p>
                    ) : null}
                    <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                      <input
                        value={tamaraFirstName}
                        onChange={(e) => {
                          setTamaraFirstName(e.target.value)
                          clearBnplFieldError('firstName')
                        }}
                        placeholder={language === 'ar' ? 'الاسم الأول' : 'First name'}
                        className={bnplFieldClass('firstName')}
                        autoComplete="given-name"
                        aria-invalid={bnplFieldError?.field === 'firstName'}
                      />
                      <input
                        value={tamaraLastName}
                        onChange={(e) => {
                          setTamaraLastName(e.target.value)
                          clearBnplFieldError('lastName')
                        }}
                        placeholder={language === 'ar' ? 'اسم العائلة' : 'Last name'}
                        className={bnplFieldClass('lastName')}
                        autoComplete="family-name"
                        aria-invalid={bnplFieldError?.field === 'lastName'}
                      />
                    </div>
                    <input
                      value={tamaraEmail}
                      onChange={(e) => {
                        setTamaraEmail(e.target.value)
                        clearBnplFieldError('email')
                      }}
                      placeholder={language === 'ar' ? 'البريد الإلكتروني' : 'Email'}
                      type="email"
                      className={bnplFieldClass('email')}
                      autoComplete="email"
                      aria-invalid={bnplFieldError?.field === 'email'}
                    />
                    <input
                      value={tamaraPhone}
                      onChange={(e) => {
                        setTamaraPhone(e.target.value)
                        clearBnplFieldError('phone')
                      }}
                      placeholder={
                        language === 'ar'
                          ? 'الجوال (05… أو 9715…)'
                          : 'Mobile (05… or 9715…)'
                      }
                      type="tel"
                      className={bnplFieldClass('phone')}
                      autoComplete="tel"
                      aria-invalid={bnplFieldError?.field === 'phone'}
                    />
                    {requiresPhysicalShipping ? (
                      <>
                        <input
                          value={tamaraLine1}
                          onChange={(e) => {
                            setTamaraLine1(e.target.value)
                            clearBnplFieldError('line1')
                          }}
                          placeholder={language === 'ar' ? 'عنوان الشحن' : 'Shipping address'}
                          className={bnplFieldClass('line1')}
                          autoComplete="street-address"
                          aria-invalid={bnplFieldError?.field === 'line1'}
                        />
                        <input
                          value={tamaraCity}
                          onChange={(e) => {
                            setTamaraCity(e.target.value)
                            clearBnplFieldError('city')
                          }}
                          placeholder={language === 'ar' ? 'المدينة' : 'City'}
                          className={bnplFieldClass('city')}
                          autoComplete="address-level2"
                          aria-invalid={bnplFieldError?.field === 'city'}
                        />
                      </>
                    ) : (
                      <p className="font-montserrat text-[11px] leading-snug tracking-wide text-white/60">
                        {language === 'ar'
                          ? 'بطاقة الهدايا رقمية — تُرسل بالبريد الإلكتروني، دون شحن.'
                          : 'Gift cards are digital — delivered by email, no shipping.'}
                      </p>
                    )}
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
                    !legalAcknowledged ||
                    (!giftCardCoversFull &&
                      (!checkoutEnvReady ||
                        !activeRail ||
                        (activeRail === 'tabby' && !tabbyEligible)))
                  }
                  className={`mt-5 flex min-h-[48px] w-full items-center justify-center gap-2 rounded-[4px] px-4 py-3.5 font-montserrat text-sm font-medium tracking-wide transition-colors sm:mt-6 ${
                    payBusy ||
                    !legalAcknowledged ||
                    (!giftCardCoversFull &&
                      (!checkoutEnvReady ||
                        !activeRail ||
                        (activeRail === 'tabby' && !tabbyEligible)))
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
                      <span className="truncate">
                        {giftCardCoversFull
                          ? language === 'ar'
                            ? 'أكملي الدفع ببطاقة الهدايا'
                            : 'Complete with gift card'
                          : continueLabel(activeRail, ui, language)}
                      </span>
                      <FiArrowRight className={`h-4 w-4 shrink-0 opacity-90 ${isRTL ? 'rotate-180' : ''}`} />
                    </>
                  )}
                </button>
                {!checkoutEnvReady && !giftCardCoversFull ? (
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
