'use client'

import { useEffect, useState, useMemo } from 'react'
import { useRouter } from 'next/navigation'
import LocaleLink from '@/components/LocaleLink'
import AppBreadcrumb from '@/components/AppBreadcrumb'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  FiArrowLeft,
  FiArrowRight,
  FiCheck,
  FiLock,
  FiMail,
  FiShoppingBag,
  FiTag,
  FiTruck,
} from 'react-icons/fi'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import { loadStripe } from '@stripe/stripe-js'
import toast from 'react-hot-toast'
import { useCartStore } from '@/store/cartStore'
import { useCurrency } from '@/lib/currency/CurrencyContext'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { useLocaleHref } from '@/lib/i18n/useLocaleHref'
import { lineUnitAed, lineTotalAed } from '@/lib/shopProductOptions'
import { getTabbyCheckoutUrl, getTamaraCheckoutUrl } from '@/lib/payments'
import { products as staticProducts } from '@/data/products'
import { getProductHref } from '@/lib/products/links'
import { trackEvent } from '@/lib/analytics/tracking'
import 'swiper/css'
import 'swiper/css/pagination'

type PackagingType = 'sustainable' | 'signature'

export default function CheckoutPage() {
  const router = useRouter()
  const { localize } = useLocaleHref()
  const { items, getTotal } = useCartStore()
  const { formatPrice } = useCurrency()
  const { isRTL } = useLanguage()
  const stripePublishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY?.trim() ?? ''
  const stripeEnvReady = stripePublishableKey.startsWith('pk_')

  const lineKey = (item: (typeof items)[number]) =>
    `${item.id}-${item.size}-${item.color}-${item.lengthCm ?? ''}-${item.customisationMessage ?? ''}`
  const productHref = (item: (typeof items)[number]) =>
    item.productUrl ?? getProductHref(staticProducts.find((product) => product.id === item.id) ?? { id: item.id, name: item.name })

  const [email, setEmail] = useState('')
  const [discountInput, setDiscountInput] = useState('')
  const [appliedCode, setAppliedCode] = useState<string | null>(null)
  const [discountBusy, setDiscountBusy] = useState(false)
  const [payBusy, setPayBusy] = useState(false)
  const [packagingType, setPackagingType] = useState<PackagingType>('sustainable')
  const [legalAcknowledged, setLegalAcknowledged] = useState(false)

  const tabbyUrl = useMemo(() => getTabbyCheckoutUrl(), [])
  const tamaraUrl = useMemo(() => getTamaraCheckoutUrl(), [])

  useEffect(() => {
    if (items.length === 0) {
      router.replace(localize('/cart'))
    }
  }, [items.length, router])

  useEffect(() => {
    if (items.length === 0) return
    trackEvent('begin_checkout', {
      currency: 'AED',
      value: Number(getTotal().toFixed(2)),
      item_count: items.length,
    })
  }, [getTotal, items.length])

  useEffect(() => {
    if (appliedCode && discountInput.trim().toUpperCase() !== appliedCode.toUpperCase()) {
      setAppliedCode(null)
    }
  }, [discountInput, appliedCode])

  const subtotal = getTotal()
  const signaturePackagingFeeAed = packagingType === 'signature' ? 30 : 0
  const estimatedTotal = subtotal + signaturePackagingFeeAed
  const pairedStyles = useMemo(() => {
    const cartIds = new Set(items.map((item) => item.id))
    const cartCategories = new Set(
      items
        .map((item) => staticProducts.find((product) => product.id === item.id)?.category)
        .filter(Boolean)
    )
    return staticProducts
      .filter((product) => !cartIds.has(product.id) && cartCategories.has(product.category))
      .slice(0, 8)
  }, [items])

  const applyDiscount = async () => {
    const raw = discountInput.trim()
    if (!raw) {
      toast.error(isRTL ? 'أدخل رمز الخصم' : 'Enter a discount code')
      return
    }
    setDiscountBusy(true)
    try {
      const res = await fetch('/api/checkout/validate-discount', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code: raw }),
      })
      const data = (await res.json()) as { valid?: boolean; message?: string; code?: string }
      if (data.valid && data.code) {
        setAppliedCode(data.code)
        setDiscountInput(data.code)
        toast.success(data.message || (isRTL ? 'تم تطبيق الرمز' : 'Code applied'))
      } else {
        setAppliedCode(null)
        toast.error(data.message || (isRTL ? 'رمز غير صالح' : 'Invalid code'))
      }
    } catch {
      toast.error(isRTL ? 'تعذر التحقق' : 'Could not verify code')
    } finally {
      setDiscountBusy(false)
    }
  }

  const startStripeCheckout = async () => {
    if (items.length === 0) return
    if (!legalAcknowledged) {
      toast.error(isRTL ? 'يرجى تأكيد الشروط وسياسة الشحن والإرجاع' : 'Please confirm Terms and Shipment & Return Policy')
      return
    }
    if (!stripeEnvReady) {
      toast.error(
        isRTL
          ? 'الدفع غير مُهيأ بعد في هذه البيئة.'
          : 'Stripe checkout is not configured for this environment yet.'
      )
      return
    }
    if (email.trim()) {
      const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
      if (!ok) {
        toast.error(isRTL ? 'بريد غير صالح' : 'Please enter a valid email')
        return
      }
    }

    setPayBusy(true)
    trackEvent('add_shipping_info', { checkout_provider: 'stripe', currency: 'AED' })
    trackEvent('add_payment_info', { checkout_provider: 'stripe', currency: 'AED' })
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items,
          discountCode: appliedCode || undefined,
          customerEmail: email.trim() || undefined,
          packagingType,
        }),
      })

      const { sessionId, error } = await response.json()
      if (!response.ok) {
        throw new Error(error || 'Checkout is unavailable')
      }
      if (error) throw new Error(error)

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
      <div className="min-h-screen bg-white pt-32 flex items-center justify-center font-montserrat text-brand-clayRed">
        {isRTL ? 'جاري التوجيه…' : 'Redirecting…'}
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#faf9f7]">
      <div className="border-b border-brand-stone/20 bg-white">
        <div className="container mx-auto px-6 lg:px-12 py-8 pt-28">
          <AppBreadcrumb
            rtl={isRTL}
            variant="muted"
            segments={[
              { label: isRTL ? 'السلة' : 'Bag', href: '/cart' },
              { label: isRTL ? 'الدفع' : 'Checkout' },
            ]}
            className="text-brand-clayRed/70 [&_a]:text-brand-clayRed/70 [&_span:last-child]:text-brand-darkRed"
          />
          <div className={`mt-6 flex items-start justify-between gap-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <div>
              <h1 data-document-h1="true" className="font-rozha text-3xl md:text-4xl text-brand-darkRed">
                {isRTL ? 'إتمام الطلب' : 'Checkout'}
              </h1>
              <p className="mt-2 max-w-xl font-montserrat text-sm text-brand-clayRed/70 tracking-wide">
                {isRTL
                  ? 'راجعي طلبك، أدخلي رمز الخصم إن وُجد، ثم أكملي الدفع بأمان عبر سترايب.'
                  : 'Review your order, apply a discount if you have one, then complete payment securely with Stripe.'}
              </p>
            </div>
            <LocaleLink
              href="/cart"
              className={`hidden shrink-0 items-center gap-2 font-montserrat text-xs uppercase tracking-[0.15em] text-brand-clayRed hover:text-brand-dustyBlue sm:inline-flex ${isRTL ? 'flex-row-reverse' : ''}`}
              data-cursor-hover
            >
              <FiArrowLeft className={`h-4 w-4 ${isRTL ? 'rotate-180' : ''}`} />
              {isRTL ? 'تعديل السلة' : 'Edit bag'}
            </LocaleLink>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 py-12 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Main column */}
          <div className="lg:col-span-7 space-y-8">
            {/* Order items */}
            <motion.section
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-2xl border border-brand-stone/20 bg-white p-6 shadow-sm md:p-8"
            >
              <h2 className="font-rozha text-xl text-brand-darkRed mb-6 flex items-center gap-2">
                <FiShoppingBag className="h-5 w-5 text-brand-dustyBlue" />
                {isRTL ? 'المنتجات' : 'Your order'}
              </h2>
              <ul className="divide-y divide-brand-stone/15">
                {items.map((item) => (
                  <li key={lineKey(item)} className="flex gap-4 py-5 first:pt-0">
                    <LocaleLink href={productHref(item)} className="relative h-24 w-20 shrink-0 overflow-hidden bg-[#f0eeeb]" data-cursor-hover>
                      <Image src={item.image} alt="" fill className="img-zoom object-cover object-top" sizes="80px" />
                    </LocaleLink>
                    <div className={`min-w-0 flex-1 ${isRTL ? 'text-right' : ''}`}>
                      <LocaleLink
                        href={productHref(item)}
                        className="font-rozha text-lg text-brand-darkRed hover:text-brand-dustyBlue"
                        data-product-name="true"
                        data-cursor-hover
                      >
                        {item.name}
                      </LocaleLink>
                      <p className="mt-1 font-montserrat text-xs text-brand-clayRed/65 tracking-wide">
                        {item.size} · {item.color}
                        {item.lengthCm ? ` · ${item.lengthCm} cm` : ''}
                        {item.customisationMessage ? ` · "${item.customisationMessage.slice(0, 20)}${item.customisationMessage.length > 20 ? '…' : ''}"` : ''}
                      </p>
                      <p className="mt-2 font-montserrat text-sm text-brand-darkRed">
                        {formatPrice(lineUnitAed(item))}
                        <span className="text-brand-clayRed/50"> × {item.quantity}</span>
                        {item.quantity > 1 && (
                          <span className="block text-xs text-brand-clayRed/55">{formatPrice(lineTotalAed(item))} total</span>
                        )}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.section>

            {pairedStyles.length > 0 && (
              <motion.section
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.03 }}
                className="rounded-2xl border border-brand-stone/20 bg-white p-6 shadow-sm md:p-8"
              >
                <div className={`mb-5 flex items-center justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <h2 className="font-rozha text-xl text-brand-darkRed">
                    {isRTL ? 'تنسق جيداً مع طلبك' : 'Pairs Well With Your Bag'}
                  </h2>
                  <LocaleLink
                    href="/shop"
                    className="font-montserrat text-[10px] uppercase tracking-[0.18em] text-brand-clayRed/65 hover:text-brand-dustyBlue"
                    data-cursor-hover
                  >
                    {isRTL ? 'تسوقي المزيد' : 'Shop more'}
                  </LocaleLink>
                </div>
                <Swiper
                  modules={[Pagination]}
                  spaceBetween={16}
                  pagination={{ clickable: true }}
                  breakpoints={{
                    0: { slidesPerView: 1.25 },
                    640: { slidesPerView: 2.2 },
                    1024: { slidesPerView: 2.6 },
                  }}
                  className="checkout-paired-carousel !pb-9"
                >
                  {pairedStyles.map((product) => (
                    <SwiperSlide key={product.id}>
                      <LocaleLink href={getProductHref(product)} className="group block" data-cursor-hover>
                        <div className="relative aspect-[9/16] overflow-hidden border border-brand-stone/15 bg-[#f5f3ef]">
                          <Image
                            src={product.images[0] ?? ''}
                            alt={product.name}
                            fill
                            sizes="(max-width: 640px) 75vw, 30vw"
                            className="img-zoom object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                          />
                        </div>
                        <div className={`mt-3 ${isRTL ? 'text-right' : ''}`}>
                          <p className="font-montserrat text-[11px] uppercase tracking-[0.14em] text-brand-darkRed">
                            {product.name}
                          </p>
                          <p className="mt-1 font-montserrat text-xs tracking-wide text-brand-clayRed/80">
                            {formatPrice(product.price)}
                          </p>
                        </div>
                      </LocaleLink>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </motion.section>
            )}

            {/* Contact */}
            <motion.section
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="rounded-2xl border border-brand-stone/20 bg-white p-6 shadow-sm md:p-8"
            >
              <h2 className="font-rozha text-xl text-brand-darkRed mb-2 flex items-center gap-2">
                <FiMail className="h-5 w-5 text-brand-dustyBlue" />
                {isRTL ? 'البريد الإلكتروني' : 'Email'}
              </h2>
              <p className="mb-4 font-montserrat text-xs text-brand-clayRed/60 tracking-wide">
                {isRTL
                  ? 'اختياري — يُستخدم لتسريع صفحة الدفع وتأكيد الطلب.'
                  : 'Optional — pre-fills Stripe checkout and helps us send your confirmation.'}
              </p>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={isRTL ? 'you@example.com' : 'you@example.com'}
                className="w-full border border-brand-stone/40 bg-[#faf9f7] px-4 py-3 font-montserrat text-sm tracking-wide focus:border-brand-darkRed focus:outline-none"
              />
            </motion.section>

            {/* Discount */}
            <motion.section
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="rounded-2xl border border-brand-stone/20 bg-white p-6 shadow-sm md:p-8"
            >
              <h2 className="font-rozha text-xl text-brand-darkRed mb-2 flex items-center gap-2">
                <FiTag className="h-5 w-5 text-brand-dustyBlue" />
                {isRTL ? 'رمز الخصم' : 'Discount code'}
              </h2>
              <p className="mb-4 font-montserrat text-xs text-brand-clayRed/60 tracking-wide">
                {isRTL
                  ? 'أدخلي الرمز ثم اضغطي تطبيق. يجب إنشاء رموز الترويج في لوحة سترايب.'
                  : 'Enter your code and tap Apply. Promotion codes are created in your Stripe Dashboard.'}
              </p>
              <div className={`flex flex-col gap-3 sm:flex-row ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
                <input
                  type="text"
                  value={discountInput}
                  onChange={(e) => setDiscountInput(e.target.value)}
                  placeholder={isRTL ? 'الرمز' : 'PROMO CODE'}
                  className="min-h-[44px] flex-1 border border-brand-stone/40 bg-[#faf9f7] px-4 py-3 font-montserrat text-sm uppercase tracking-wider focus:border-brand-darkRed focus:outline-none"
                />
                <button
                  type="button"
                  onClick={() => void applyDiscount()}
                  disabled={discountBusy}
                  className="min-h-[44px] shrink-0 border border-brand-darkRed bg-brand-darkRed px-6 py-3 font-montserrat text-xs uppercase tracking-[0.2em] text-white transition-colors hover:bg-brand-dustyBlue disabled:opacity-50"
                  data-cursor-hover
                >
                  {discountBusy ? (isRTL ? '…' : '…') : isRTL ? 'تطبيق' : 'Apply'}
                </button>
              </div>
              {appliedCode ? (
                <p className={`mt-3 flex items-center gap-2 font-montserrat text-xs text-emerald-700 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <FiCheck className="h-4 w-4 shrink-0" />
                  {isRTL ? `تم تطبيق «${appliedCode}» على الدفع` : `“${appliedCode}” will apply at payment`}
                </p>
              ) : null}
            </motion.section>

            {/* Payment methods */}
            <motion.section
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.14 }}
              className="rounded-2xl border border-brand-stone/20 bg-white p-6 shadow-sm md:p-8"
            >
              <h2 className="font-rozha text-xl text-brand-darkRed mb-2">
                {isRTL ? 'التغليف' : 'Packaging'}
              </h2>
              <p className="mb-5 font-montserrat text-xs text-brand-clayRed/60 tracking-wide">
                {isRTL
                  ? 'اختاري بين تغليف التوقيع (30 درهم) أو تغليف مستدام مجاني.'
                  : 'Choose between signature packaging (+30 AED) or a complimentary sustainable option.'}
              </p>

              <div className={`grid gap-4 md:grid-cols-2 ${isRTL ? 'text-right' : ''}`}>
                <button
                  type="button"
                  onClick={() => setPackagingType('signature')}
                  className={`group overflow-hidden rounded-xl border text-left transition ${
                    packagingType === 'signature'
                      ? 'border-brand-darkRed bg-brand-darkRed/[0.03]'
                      : 'border-brand-stone/30 bg-[#faf9f7] hover:border-brand-dustyBlue'
                  }`}
                  data-cursor-hover
                >
                  <div className="relative aspect-[9/16] w-full overflow-hidden bg-[#efebe7]">
                    <Image
                      src="/shipment/shipment%20box.svg"
                      alt="Signature packaging shipment box"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <p className="font-montserrat text-[11px] uppercase tracking-[0.16em] text-brand-darkRed">
                      {isRTL ? 'تغليف التوقيع' : 'Signature Packaging'}
                    </p>
                    <p className="mt-1 font-montserrat text-sm text-brand-clayRed/80">
                      +30 AED
                    </p>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setPackagingType('sustainable')}
                  className={`group overflow-hidden rounded-xl border text-left transition ${
                    packagingType === 'sustainable'
                      ? 'border-brand-darkRed bg-brand-darkRed/[0.03]'
                      : 'border-brand-stone/30 bg-[#faf9f7] hover:border-brand-dustyBlue'
                  }`}
                  data-cursor-hover
                >
                  <div className="relative aspect-[9/16] w-full overflow-hidden bg-[#efebe7]">
                    <Image
                      src="https://images.unsplash.com/photo-1583251633146-d0c6c36f0b0f?w=1200&q=80&auto=format&fit=crop"
                      alt="Sustainable packaging option"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <p className="font-montserrat text-[11px] uppercase tracking-[0.16em] text-brand-darkRed">
                      {isRTL ? 'تغليف مستدام' : 'Sustainable Packaging'}
                    </p>
                    <p className="mt-1 font-montserrat text-sm text-brand-clayRed/80">
                      {isRTL ? 'مجاناً' : 'Free'}
                    </p>
                  </div>
                </button>
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="rounded-2xl border border-brand-stone/20 bg-white p-6 shadow-sm md:p-8"
            >
              <h2 className="font-rozha text-xl text-brand-darkRed mb-2 flex items-center gap-2">
                <FiLock className="h-5 w-5 text-brand-dustyBlue" />
                {isRTL ? 'الدفع' : 'Payment'}
              </h2>
              <p className="mb-6 font-montserrat text-sm text-brand-clayRed/70 leading-relaxed">
                {isRTL
                  ? 'الدفع يتم عبر سترايب (Stripe) — بطاقات الائتمان و Apple Pay و Google Pay حيثما تُدعم. فعّلي Apple Pay من لوحة سترايب بعد التحقق من النطاق.'
                  : 'Payments are processed by Stripe — credit and debit cards, Apple Pay, and Google Pay where supported. Enable Apple Pay in the Stripe Dashboard after domain verification.'}
              </p>

              <div className="mb-6 flex flex-wrap gap-2">
                {['Visa', 'Mastercard', 'Amex', 'Apple Pay', 'Google Pay'].map((label) => (
                  <span
                    key={label}
                    className="rounded-full border border-brand-stone/30 bg-[#faf9f7] px-3 py-1.5 font-montserrat text-[10px] uppercase tracking-[0.12em] text-brand-darkRed/80"
                  >
                    {label}
                  </span>
                ))}
              </div>

              <button
                type="button"
                onClick={() => void startStripeCheckout()}
                disabled={payBusy || !stripeEnvReady || !legalAcknowledged}
                className={`flex w-full min-h-[52px] items-center justify-center gap-3 bg-brand-darkRed py-4 font-montserrat text-sm uppercase tracking-[0.22em] text-white transition-colors hover:bg-brand-dustyBlue disabled:opacity-50 ${isRTL ? 'flex-row-reverse' : ''}`}
                data-cursor-hover
              >
                {payBusy ? (
                  isRTL ? 'جاري التحويل…' : 'Redirecting…'
                ) : (
                  <>
                    <FiLock className="h-4 w-4 opacity-90" />
                    {isRTL ? 'المتابعة للدفع الآمن' : 'Continue to secure payment'}
                    <FiArrowRight className={`h-4 w-4 opacity-90 ${isRTL ? 'rotate-180' : ''}`} />
                  </>
                )}
              </button>
              <p className="mt-4 text-center font-montserrat text-[10px] uppercase tracking-[0.15em] text-brand-clayRed/45">
                {isRTL ? 'تشفير SSL · تتم المعالجة بواسطة Stripe' : 'SSL encrypted · Powered by Stripe'}
              </p>
              {!stripeEnvReady ? (
                <p className="mt-2 text-center font-montserrat text-[10px] uppercase tracking-[0.15em] text-amber-700/80">
                  {isRTL
                    ? 'أضيفي NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY و STRIPE_SECRET_KEY لتفعيل الدفع.'
                    : 'Set NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY and STRIPE_SECRET_KEY to enable checkout.'}
                </p>
              ) : null}

              {/* BNPL */}
              <div className="mt-10 border-t border-brand-stone/20 pt-8">
                <h3 className="font-montserrat text-[10px] uppercase tracking-[0.35em] text-brand-dustyBlue mb-4">
                  {isRTL ? 'ادفع لاحقاً' : 'Buy now, pay later'}
                </h3>
                <p className="mb-4 font-montserrat text-xs text-brand-clayRed/65 leading-relaxed">
                  {isRTL
                    ? 'تابي وتمارا: بعد ربط حساب التاجر، أضيفي الروابط أو واجهة البرمجة أدناه. حتى ذلك الحين يمكن للعملاء الدفع بالبطاقة عبر سترايب.'
                    : 'Tabby and Tamara: after merchant onboarding, wire their checkout URLs or APIs using the env vars in .env.example. Until then, customers can pay by card through Stripe.'}
                </p>
                <div className={`flex flex-col gap-3 sm:flex-row sm:flex-wrap ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
                  {tabbyUrl ? (
                    <a
                      href={tabbyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[44px] items-center justify-center border border-brand-stone/40 px-6 py-3 font-montserrat text-xs uppercase tracking-[0.18em] text-brand-darkRed transition-colors hover:border-brand-dustyBlue hover:text-brand-dustyBlue"
                      data-cursor-hover
                    >
                      Tabby
                    </a>
                  ) : (
                    <span className="inline-flex min-h-[44px] items-center justify-center border border-dashed border-brand-stone/35 px-6 py-3 font-montserrat text-xs uppercase tracking-[0.15em] text-brand-clayRed/45">
                      Tabby — set NEXT_PUBLIC_TABBY_CHECKOUT_URL
                    </span>
                  )}
                  {tamaraUrl ? (
                    <a
                      href={tamaraUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[44px] items-center justify-center border border-brand-stone/40 px-6 py-3 font-montserrat text-xs uppercase tracking-[0.18em] text-brand-darkRed transition-colors hover:border-brand-dustyBlue hover:text-brand-dustyBlue"
                      data-cursor-hover
                    >
                      Tamara
                    </a>
                  ) : (
                    <span className="inline-flex min-h-[44px] items-center justify-center border border-dashed border-brand-stone/35 px-6 py-3 font-montserrat text-xs uppercase tracking-[0.15em] text-brand-clayRed/45">
                      Tamara — set NEXT_PUBLIC_TAMARA_CHECKOUT_URL
                    </span>
                  )}
                </div>
              </div>
            </motion.section>
          </div>

          {/* Summary sticky */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 }}
                className={`rounded-2xl border border-brand-darkRed/10 bg-gradient-to-b from-[#3B0A12] to-[#1F0508] p-8 text-brand-ivory shadow-xl ${isRTL ? 'text-right' : ''}`}
              >
                <h2 className="font-rozha text-2xl text-brand-dustyBlue/95 mb-6">
                  {isRTL ? 'الملخص' : 'Summary'}
                </h2>
                <div className={`flex justify-between font-montserrat text-sm tracking-wide text-white/75 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <span>{isRTL ? 'المجموع الفرعي' : 'Subtotal'}</span>
                  <span className="text-white">{formatPrice(subtotal)}</span>
                </div>
                <div className={`mt-3 flex justify-between font-montserrat text-sm tracking-wide text-white/75 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <span>{isRTL ? 'التغليف' : 'Packaging'}</span>
                  <span className="text-white">
                    {signaturePackagingFeeAed > 0 ? `+ ${formatPrice(signaturePackagingFeeAed)}` : isRTL ? 'مجاناً' : 'Free'}
                  </span>
                </div>
                {appliedCode ? (
                  <p className="mt-3 font-montserrat text-xs text-emerald-300/90">
                    {isRTL ? `خصم: ${appliedCode}` : `Discount code: ${appliedCode}`}
                  </p>
                ) : null}
                <div className={`mt-6 flex items-start gap-3 border-t border-white/10 pt-6 ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                  <FiTruck className="h-4 w-4 shrink-0 text-brand-dustyBlue/80 mt-0.5" />
                  <p className="font-montserrat text-xs leading-relaxed text-white/55">
                    {isRTL
                      ? 'خيارات الشحن (قياسي أو سريع) تظهر في صفحة سترايب قبل إتمام الدفع.'
                      : 'Shipping options (standard or express) appear on the Stripe page before you pay.'}
                  </p>
                </div>
                <div className="mt-8 border-t border-white/10 pt-6">
                  <div className={`flex justify-between font-rozha text-xl ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <span className="text-white/80">{isRTL ? 'الإجمالي التقريبي' : 'Estimated total'}</span>
                    <span>{formatPrice(estimatedTotal)}</span>
                  </div>
                  <p className="mt-2 font-montserrat text-[10px] uppercase tracking-[0.2em] text-white/35">
                    {isRTL ? '+ الشحن والضرائب في سترايب' : '+ Shipping & tax in Stripe'}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => void startStripeCheckout()}
                  disabled={payBusy || !stripeEnvReady || !legalAcknowledged}
                  className={`mt-8 flex w-full min-h-[48px] items-center justify-center gap-2 bg-brand-dustyBlue py-3.5 font-montserrat text-xs uppercase tracking-[0.22em] text-[#1a0008] transition-colors hover:bg-white disabled:opacity-50 ${isRTL ? 'flex-row-reverse' : ''}`}
                  data-cursor-hover
                >
                  {payBusy ? (isRTL ? '…' : '…') : isRTL ? 'دفع' : 'Pay now'}
                  <FiArrowRight className={`h-4 w-4 ${isRTL ? 'rotate-180' : ''}`} />
                </button>
                <label className={`mt-4 flex items-start gap-2.5 ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                  <input
                    type="checkbox"
                    checked={legalAcknowledged}
                    onChange={(e) => setLegalAcknowledged(e.target.checked)}
                    className="mt-0.5 h-4 w-4 border border-white/40 bg-transparent accent-brand-dustyBlue"
                  />
                  <span className="font-montserrat text-[11px] leading-relaxed tracking-wide text-white/70">
                    {isRTL ? 'أؤكد أن طلبي مصنوع عند الطلب وقد قرأت ووافقت على ' : 'I confirm my order is made to order and I have read and accept the '}
                    <LocaleLink href="/shipment-return-policy" className="underline hover:text-brand-dustyBlue" data-cursor-hover>
                      {isRTL ? 'سياسة الشحن والإرجاع' : 'Shipment & Return Policy'}
                    </LocaleLink>{' '}
                    {isRTL ? 'و' : 'and'}{' '}
                    <LocaleLink href="/terms" className="underline hover:text-brand-dustyBlue" data-cursor-hover>
                      {isRTL ? 'الشروط والأحكام' : 'Terms & Conditions'}
                    </LocaleLink>
                    .
                  </span>
                </label>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
