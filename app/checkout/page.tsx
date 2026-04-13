'use client'

import { useEffect, useState, useMemo } from 'react'
import { useRouter } from 'next/navigation'
import LocaleLink from '@/components/LocaleLink'
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
import { loadStripe } from '@stripe/stripe-js'
import toast from 'react-hot-toast'
import { useCartStore } from '@/store/cartStore'
import { useCurrency } from '@/lib/currency/CurrencyContext'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { useLocaleHref } from '@/lib/i18n/useLocaleHref'
import { lineUnitAed, lineTotalAed } from '@/lib/shopProductOptions'
import { getTabbyCheckoutUrl, getTamaraCheckoutUrl } from '@/lib/payments'

export default function CheckoutPage() {
  const router = useRouter()
  const { localize } = useLocaleHref()
  const { items, getTotal } = useCartStore()
  const { formatPrice } = useCurrency()
  const { isRTL } = useLanguage()

  const lineKey = (item: (typeof items)[number]) =>
    `${item.id}-${item.size}-${item.color}-${item.lengthCm ?? ''}-${item.customisationMessage ?? ''}`

  const [email, setEmail] = useState('')
  const [discountInput, setDiscountInput] = useState('')
  const [appliedCode, setAppliedCode] = useState<string | null>(null)
  const [discountBusy, setDiscountBusy] = useState(false)
  const [payBusy, setPayBusy] = useState(false)

  const tabbyUrl = useMemo(() => getTabbyCheckoutUrl(), [])
  const tamaraUrl = useMemo(() => getTamaraCheckoutUrl(), [])

  useEffect(() => {
    if (items.length === 0) {
      router.replace(localize('/cart'))
    }
  }, [items.length, router])

  useEffect(() => {
    if (appliedCode && discountInput.trim().toUpperCase() !== appliedCode.toUpperCase()) {
      setAppliedCode(null)
    }
  }, [discountInput, appliedCode])

  const subtotal = getTotal()

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
    if (email.trim()) {
      const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
      if (!ok) {
        toast.error(isRTL ? 'بريد غير صالح' : 'Please enter a valid email')
        return
      }
    }

    setPayBusy(true)
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items,
          discountCode: appliedCode || undefined,
          customerEmail: email.trim() || undefined,
        }),
      })

      const { sessionId, error } = await response.json()
      if (error) throw new Error(error)

      const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '')
      if (stripe && sessionId) {
        await stripe.redirectToCheckout({ sessionId })
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
      <div className="min-h-screen bg-white pt-32 flex items-center justify-center font-roboto text-brand-clayRed">
        {isRTL ? 'جاري التوجيه…' : 'Redirecting…'}
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#faf9f7]">
      <div className="border-b border-brand-stone/20 bg-white">
        <div className="container mx-auto px-6 lg:px-12 py-8 pt-28">
          <div className={`flex flex-wrap items-center gap-2 font-roboto text-[10px] uppercase tracking-[0.2em] text-brand-clayRed/60 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <LocaleLink href="/cart" className="hover:text-brand-dustyBlue transition-colors" data-cursor-hover>
              {isRTL ? 'السلة' : 'Bag'}
            </LocaleLink>
            <span className="text-brand-stone/40">/</span>
            <span className="text-brand-darkRed">{isRTL ? 'الدفع' : 'Checkout'}</span>
          </div>
          <div className={`mt-6 flex items-start justify-between gap-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <div>
              <h1 className="font-rozha text-3xl md:text-4xl text-brand-darkRed">
                {isRTL ? 'إتمام الطلب' : 'Checkout'}
              </h1>
              <p className="mt-2 max-w-xl font-roboto text-sm text-brand-clayRed/70 tracking-wide">
                {isRTL
                  ? 'راجعي طلبك، أدخلي رمز الخصم إن وُجد، ثم أكملي الدفع بأمان عبر سترايب.'
                  : 'Review your order, apply a discount if you have one, then complete payment securely with Stripe.'}
              </p>
            </div>
            <LocaleLink
              href="/cart"
              className={`hidden shrink-0 items-center gap-2 font-roboto text-xs uppercase tracking-[0.15em] text-brand-clayRed hover:text-brand-dustyBlue sm:inline-flex ${isRTL ? 'flex-row-reverse' : ''}`}
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
                    <LocaleLink href={`/shop/${item.id}`} className="relative h-24 w-20 shrink-0 overflow-hidden bg-[#f0eeeb]" data-cursor-hover>
                      <Image src={item.image} alt="" fill className="object-cover" sizes="80px" />
                    </LocaleLink>
                    <div className={`min-w-0 flex-1 ${isRTL ? 'text-right' : ''}`}>
                      <LocaleLink href={`/shop/${item.id}`} className="font-rozha text-lg text-brand-darkRed hover:text-brand-dustyBlue" data-cursor-hover>
                        {item.name}
                      </LocaleLink>
                      <p className="mt-1 font-roboto text-xs text-brand-clayRed/65 tracking-wide">
                        {item.size} · {item.color}
                        {item.lengthCm ? ` · ${item.lengthCm} cm` : ''}
                        {item.customisationMessage ? ` · "${item.customisationMessage.slice(0, 20)}${item.customisationMessage.length > 20 ? '…' : ''}"` : ''}
                      </p>
                      <p className="mt-2 font-roboto text-sm text-brand-darkRed">
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
              <p className="mb-4 font-roboto text-xs text-brand-clayRed/60 tracking-wide">
                {isRTL
                  ? 'اختياري — يُستخدم لتسريع صفحة الدفع وتأكيد الطلب.'
                  : 'Optional — pre-fills Stripe checkout and helps us send your confirmation.'}
              </p>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={isRTL ? 'you@example.com' : 'you@example.com'}
                className="w-full border border-brand-stone/40 bg-[#faf9f7] px-4 py-3 font-roboto text-sm tracking-wide focus:border-brand-darkRed focus:outline-none"
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
              <p className="mb-4 font-roboto text-xs text-brand-clayRed/60 tracking-wide">
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
                  className="min-h-[44px] flex-1 border border-brand-stone/40 bg-[#faf9f7] px-4 py-3 font-roboto text-sm uppercase tracking-wider focus:border-brand-darkRed focus:outline-none"
                />
                <button
                  type="button"
                  onClick={() => void applyDiscount()}
                  disabled={discountBusy}
                  className="min-h-[44px] shrink-0 border border-brand-darkRed bg-brand-darkRed px-6 py-3 font-roboto text-xs uppercase tracking-[0.2em] text-white transition-colors hover:bg-brand-dustyBlue disabled:opacity-50"
                  data-cursor-hover
                >
                  {discountBusy ? (isRTL ? '…' : '…') : isRTL ? 'تطبيق' : 'Apply'}
                </button>
              </div>
              {appliedCode ? (
                <p className={`mt-3 flex items-center gap-2 font-roboto text-xs text-emerald-700 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <FiCheck className="h-4 w-4 shrink-0" />
                  {isRTL ? `تم تطبيق «${appliedCode}» على الدفع` : `“${appliedCode}” will apply at payment`}
                </p>
              ) : null}
            </motion.section>

            {/* Payment methods */}
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
              <p className="mb-6 font-roboto text-sm text-brand-clayRed/70 leading-relaxed">
                {isRTL
                  ? 'الدفع يتم عبر سترايب (Stripe) — بطاقات الائتمان و Apple Pay و Google Pay حيثما تُدعم. فعّلي Apple Pay من لوحة سترايب بعد التحقق من النطاق.'
                  : 'Payments are processed by Stripe — credit and debit cards, Apple Pay, and Google Pay where supported. Enable Apple Pay in the Stripe Dashboard after domain verification.'}
              </p>

              <div className="mb-6 flex flex-wrap gap-2">
                {['Visa', 'Mastercard', 'Amex', 'Apple Pay', 'Google Pay'].map((label) => (
                  <span
                    key={label}
                    className="rounded-full border border-brand-stone/30 bg-[#faf9f7] px-3 py-1.5 font-roboto text-[10px] uppercase tracking-[0.12em] text-brand-darkRed/80"
                  >
                    {label}
                  </span>
                ))}
              </div>

              <button
                type="button"
                onClick={() => void startStripeCheckout()}
                disabled={payBusy}
                className={`flex w-full min-h-[52px] items-center justify-center gap-3 bg-brand-darkRed py-4 font-roboto text-sm uppercase tracking-[0.22em] text-white transition-colors hover:bg-brand-dustyBlue disabled:opacity-50 ${isRTL ? 'flex-row-reverse' : ''}`}
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
              <p className="mt-4 text-center font-roboto text-[10px] uppercase tracking-[0.15em] text-brand-clayRed/45">
                {isRTL ? 'تشفير SSL · تتم المعالجة بواسطة Stripe' : 'SSL encrypted · Powered by Stripe'}
              </p>

              {/* BNPL */}
              <div className="mt-10 border-t border-brand-stone/20 pt-8">
                <h3 className="font-roboto text-[10px] uppercase tracking-[0.35em] text-brand-dustyBlue mb-4">
                  {isRTL ? 'ادفع لاحقاً' : 'Buy now, pay later'}
                </h3>
                <p className="mb-4 font-roboto text-xs text-brand-clayRed/65 leading-relaxed">
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
                      className="inline-flex min-h-[44px] items-center justify-center border border-brand-stone/40 px-6 py-3 font-roboto text-xs uppercase tracking-[0.18em] text-brand-darkRed transition-colors hover:border-brand-dustyBlue hover:text-brand-dustyBlue"
                      data-cursor-hover
                    >
                      Tabby
                    </a>
                  ) : (
                    <span className="inline-flex min-h-[44px] items-center justify-center border border-dashed border-brand-stone/35 px-6 py-3 font-roboto text-xs uppercase tracking-[0.15em] text-brand-clayRed/45">
                      Tabby — set NEXT_PUBLIC_TABBY_CHECKOUT_URL
                    </span>
                  )}
                  {tamaraUrl ? (
                    <a
                      href={tamaraUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[44px] items-center justify-center border border-brand-stone/40 px-6 py-3 font-roboto text-xs uppercase tracking-[0.18em] text-brand-darkRed transition-colors hover:border-brand-dustyBlue hover:text-brand-dustyBlue"
                      data-cursor-hover
                    >
                      Tamara
                    </a>
                  ) : (
                    <span className="inline-flex min-h-[44px] items-center justify-center border border-dashed border-brand-stone/35 px-6 py-3 font-roboto text-xs uppercase tracking-[0.15em] text-brand-clayRed/45">
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
                className={`rounded-2xl border border-brand-darkRed/10 bg-gradient-to-b from-[#3b0014] to-[#2a0a12] p-8 text-white shadow-xl ${isRTL ? 'text-right' : ''}`}
              >
                <h2 className="font-rozha text-2xl text-brand-dustyBlue/95 mb-6">
                  {isRTL ? 'الملخص' : 'Summary'}
                </h2>
                <div className={`flex justify-between font-roboto text-sm tracking-wide text-white/75 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <span>{isRTL ? 'المجموع الفرعي' : 'Subtotal'}</span>
                  <span className="text-white">{formatPrice(subtotal)}</span>
                </div>
                {appliedCode ? (
                  <p className="mt-3 font-roboto text-xs text-emerald-300/90">
                    {isRTL ? `خصم: ${appliedCode}` : `Discount code: ${appliedCode}`}
                  </p>
                ) : null}
                <div className={`mt-6 flex items-start gap-3 border-t border-white/10 pt-6 ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                  <FiTruck className="h-4 w-4 shrink-0 text-brand-dustyBlue/80 mt-0.5" />
                  <p className="font-roboto text-xs leading-relaxed text-white/55">
                    {isRTL
                      ? 'خيارات الشحن (قياسي أو سريع) تظهر في صفحة سترايب قبل إتمام الدفع.'
                      : 'Shipping options (standard or express) appear on the Stripe page before you pay.'}
                  </p>
                </div>
                <div className="mt-8 border-t border-white/10 pt-6">
                  <div className={`flex justify-between font-rozha text-xl ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <span className="text-white/80">{isRTL ? 'الإجمالي التقريبي' : 'Estimated total'}</span>
                    <span>{formatPrice(subtotal)}</span>
                  </div>
                  <p className="mt-2 font-roboto text-[10px] uppercase tracking-[0.2em] text-white/35">
                    {isRTL ? '+ الشحن والضرائب في سترايب' : '+ Shipping & tax in Stripe'}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => void startStripeCheckout()}
                  disabled={payBusy}
                  className={`mt-8 flex w-full min-h-[48px] items-center justify-center gap-2 bg-brand-dustyBlue py-3.5 font-roboto text-xs uppercase tracking-[0.22em] text-[#1a0008] transition-colors hover:bg-white disabled:opacity-50 ${isRTL ? 'flex-row-reverse' : ''}`}
                  data-cursor-hover
                >
                  {payBusy ? (isRTL ? '…' : '…') : isRTL ? 'دفع' : 'Pay now'}
                  <FiArrowRight className={`h-4 w-4 ${isRTL ? 'rotate-180' : ''}`} />
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
