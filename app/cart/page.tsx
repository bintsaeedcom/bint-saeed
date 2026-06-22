'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import LocaleLink from '@/components/LocaleLink'
import { FiTrash2, FiPlus, FiMinus, FiShoppingBag, FiArrowLeft, FiArrowRight } from 'react-icons/fi'
import { useCartStore } from '@/store/cartStore'
import { useCurrency } from '@/lib/currency/CurrencyContext'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { lineUnitForCurrency, lineTotalForCurrency } from '@/lib/shopProductOptions'
import { products as staticProducts } from '@/data/products'
import { getProductHref } from '@/lib/products/links'
import { trackEvent } from '@/lib/analytics/tracking'
import AppPageWayfinding from '@/components/AppPageWayfinding'
import { getCartLineImageAlt } from '@/lib/products/imageAlt'
import { isWebshopPicturePath, productImageSrc } from '@/lib/products/shopImage'

export default function CartPage() {
  const { items, removeItem, updateQuantity } = useCartStore()
  const productHref = (item: (typeof items)[number]) =>
    item.productUrl ?? getProductHref(staticProducts.find((product) => product.id === item.id) ?? { id: item.id, name: item.name })
  const lineKey = (item: (typeof items)[number]) =>
    `${item.id}-${item.size}-${item.color}-${item.lengthCm ?? ''}-${item.customisationMessage ?? ''}`
  const { formatAmount, currency, cartSubtotal, formatCartSubtotal } = useCurrency()
  const { isRTL } = useLanguage()
  const estimatedTotal = cartSubtotal(items)

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-brand-pageCanvas pb-20 pt-24 sm:pt-28">
        <div className="container mx-auto px-6 lg:px-12">
          <AppPageWayfinding
            rtl={isRTL}
            variant="muted"
            className="mb-10"
            breadcrumbClassName="text-brand-clayRed/70 [&_a]:text-brand-clayRed/70 [&_span]:text-brand-darkRed"
            segments={[
              { label: isRTL ? 'الرئيسية' : 'Home', href: '/home' },
              { label: isRTL ? 'السلة' : 'Bag' },
            ]}
            backLink={{
              href: '/shop',
              label: isRTL ? 'متابعة التسوق' : 'Continue Shopping',
            }}
          />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-md mx-auto py-20"
          >
            <FiShoppingBag className="w-16 h-16 text-brand-stone mx-auto mb-8" />
            <h1 data-document-h1="true" className="font-rozha text-3xl md:text-4xl text-brand-darkRed mb-4">
              Your Bag is Empty
            </h1>
            <p className="font-montserrat text-sm text-brand-clayRed/70 tracking-wide mb-10">
              Discover our collection and find pieces that speak to you.
            </p>
            <LocaleLink
              href="/shop"
              className="inline-flex items-center gap-2 px-10 py-4 bg-brand-darkRed text-white font-montserrat text-sm uppercase tracking-[0.2em] hover:bg-brand-dustyBlue transition-colors"
              data-cursor-hover
              data-analytics-event="click_cta_home_to_collection"
              data-analytics-section="cart-empty-state"
            >
              Continue Shopping
              <FiArrowRight className="w-4 h-4" />
            </LocaleLink>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-brand-pageCanvas">
      {/* Header */}
      <div className="border-b border-brand-stone/20 pb-4 pt-24 sm:pb-6 sm:pt-28">
        <div className="container mx-auto min-w-0 px-4 sm:px-6 lg:px-12">
          <AppPageWayfinding
            rtl={isRTL}
            variant="muted"
            className="mb-4"
            breadcrumbClassName="text-brand-clayRed/70 [&_a]:text-brand-clayRed/70 [&_span]:text-brand-darkRed"
            segments={[
              { label: isRTL ? 'الرئيسية' : 'Home', href: '/home' },
              { label: isRTL ? 'السلة' : 'Bag' },
            ]}
            backLink={{
              href: '/shop',
              label: isRTL ? 'متابعة التسوق' : 'Continue Shopping',
            }}
          />
          <h1 data-document-h1="true" className="font-rozha text-2xl text-brand-darkRed md:text-3xl">
            Shopping Bag ({items.length})
          </h1>
        </div>
      </div>

      <div className="container mx-auto min-w-0 px-4 py-8 sm:px-6 sm:py-12 lg:px-12">
        <div className="grid min-w-0 gap-8 lg:grid-cols-3 lg:gap-16">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="space-y-8">
              {items.map((item, index) => (
                <motion.div
                  key={lineKey(item)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-6 pb-8 border-b border-brand-stone/20"
                >
                  {/* Image */}
                  <LocaleLink href={productHref(item)} className="flex-shrink-0" data-cursor-hover>
                    <div className="relative aspect-[9/16] w-[5.6rem] bg-[#f5f5f5] md:w-[7.2rem]">
                      <Image
                        src={productImageSrc(item.image)}
                        alt={getCartLineImageAlt(
                          item,
                          staticProducts.find((product) => product.id === item.id),
                        )}
                        fill
                        unoptimized={isWebshopPicturePath(item.image)}
                        className="img-zoom object-cover object-top"
                        sizes="(max-width: 768px) 90px, 115px"
                      />
                    </div>
                  </LocaleLink>

                  {/* Details */}
                  <div className="flex-1 flex flex-col">
                    <div className="flex-1">
                      <LocaleLink href={productHref(item)} data-cursor-hover>
                        <h3 data-product-name="true" className="font-rozha text-lg md:text-xl text-brand-darkRed mb-2 hover:text-brand-dustyBlue transition-colors">
                          {item.name}
                        </h3>
                      </LocaleLink>
                      <div className="font-montserrat text-xs text-brand-clayRed/60 tracking-wide space-y-1">
                        <p>Size: {item.size}</p>
                        <p>Colour: {item.color}</p>
                        {item.sku && (
                          <p className="font-montserrat text-[10px] uppercase tracking-[0.12em] text-brand-clayRed/60">
                            {isRTL ? `رمز المنتج: ${item.sku}` : `Product code: ${item.sku}`}
                          </p>
                        )}
                        {(item.lengthCm || item.customLength) && (
                          <p>Length: {item.lengthCm ? `${item.lengthCm} cm` : item.customLength}</p>
                        )}
                        {item.customisationMessage && (
                          <p>Personalisation: {item.customisationMessage}</p>
                        )}
                        {item.notes && <p>Notes: {item.notes}</p>}
                      </div>
                    </div>

                    {/* Price & Actions */}
                    <div className="flex items-end justify-between mt-4">
                      <p className="font-montserrat text-base text-brand-darkRed tracking-wide">
                        {formatAmount(lineUnitForCurrency(item, currency.code))}
                        {item.quantity > 1 && (
                          <span className="block font-montserrat text-xs text-brand-clayRed/60">
                            {formatAmount(lineTotalForCurrency(item, currency.code))} total
                          </span>
                        )}
                      </p>

                      <div className="flex items-center gap-4">
                        {/* Quantity */}
                        <div className="flex items-center border border-brand-stone/30">
                          <button
                            onClick={() =>
                              {
                                const nextQuantity = Math.max(1, item.quantity - 1)
                                updateQuantity(
                                  item.id,
                                  item.size,
                                  item.color,
                                  nextQuantity,
                                  item.lengthCm,
                                  item.customisationMessage
                                )
                                trackEvent('update_cart_quantity', {
                                  item_id: item.id,
                                  item_name: item.name,
                                  quantity: nextQuantity,
                                  direction: 'decrease',
                                })
                              }
                            }
                            className="px-3 py-2 text-brand-darkRed hover:bg-brand-dustyBlue/10 transition-colors"
                            data-cursor-hover
                          >
                            <FiMinus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center font-montserrat text-sm">{item.quantity}</span>
                          <button
                            onClick={() =>
                              {
                                const nextQuantity = item.quantity + 1
                                updateQuantity(
                                  item.id,
                                  item.size,
                                  item.color,
                                  nextQuantity,
                                  item.lengthCm,
                                  item.customisationMessage
                                )
                                trackEvent('update_cart_quantity', {
                                  item_id: item.id,
                                  item_name: item.name,
                                  quantity: nextQuantity,
                                  direction: 'increase',
                                })
                              }
                            }
                            className="px-3 py-2 text-brand-darkRed hover:bg-brand-dustyBlue/10 transition-colors"
                            data-cursor-hover
                          >
                            <FiPlus className="w-3 h-3" />
                          </button>
                        </div>

                        {/* Remove */}
                        <button
                          onClick={() =>
                            {
                              removeItem(item.id, item.size, item.color, item.lengthCm, item.customisationMessage)
                              trackEvent('remove_from_cart', {
                                item_id: item.id,
                                item_name: item.name,
                                item_category: 'cart',
                              })
                            }
                          }
                          className="text-brand-clayRed/50 hover:text-brand-dustyBlue transition-colors"
                          data-cursor-hover
                        >
                          <FiTrash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className={`sticky top-32 rounded-2xl border border-brand-darkRed/10 bg-gradient-to-b from-[#3B0A12] to-[#1F0508] p-8 text-brand-ivory shadow-xl ${isRTL ? 'text-right' : ''}`}>
              <h2 className="mb-6 font-rozha text-2xl text-brand-dustyBlue/95">
                {isRTL ? 'ملخص الطلب' : 'Order Summary'}
              </h2>

              <div
                className={`flex justify-between font-montserrat text-sm tracking-wide text-white/75 ${isRTL ? 'flex-row-reverse' : ''}`}
              >
                <span>{isRTL ? 'المجموع الفرعي' : 'Subtotal'}</span>
                <span className="text-white">{formatCartSubtotal(items)}</span>
              </div>

              <div className="mt-8 border-t border-white/10 pt-6">
                <div
                  className={`flex justify-between font-rozha text-xl ${isRTL ? 'flex-row-reverse' : ''}`}
                >
                  <span className="text-white/80">{isRTL ? 'الإجمالي التقريبي' : 'Estimated Total'}</span>
                  <span>{formatAmount(estimatedTotal)}</span>
                </div>
                <p className="mt-2 font-montserrat text-[11px] tracking-wide text-white/55">
                  {isRTL ? 'الضرائب مشمولة.' : 'Taxes included.'}
                </p>
              </div>

              <LocaleLink
                href="/checkout"
                className={`mt-8 flex w-full min-h-[52px] items-center justify-center gap-2 bg-brand-dustyBlue py-4 font-montserrat text-sm uppercase tracking-[0.18em] text-[#1a0008] transition-colors hover:bg-white ${isRTL ? 'flex-row-reverse' : ''}`}
                data-cursor-hover
                onClick={() =>
                  trackEvent('begin_checkout', {
                    currency: currency.code,
                    value: Number(cartSubtotal(items).toFixed(2)),
                    item_count: items.length,
                    source: 'cart_page',
                  })
                }
              >
                {isRTL ? 'راجعي طلبك' : 'Review Your Order'}
                <FiArrowRight className={`h-4 w-4 ${isRTL ? 'rotate-180' : ''}`} />
              </LocaleLink>

              <div className="mt-8 space-y-3 border-t border-white/10 pt-6">
                <p className="font-montserrat text-xs leading-relaxed tracking-wide text-white/55">
                  {isRTL ? '🌍 نشحن إلى جميع أنحاء العالم' : '🌍 We Ship Worldwide'}
                </p>
                <p className="font-montserrat text-xs leading-relaxed tracking-wide text-white/55">
                  {isRTL
                    ? '🚚 شحن مجاني داخل الإمارات للطلبات فوق 1,000 درهم'
                    : '🚚 Complimentary UAE shipping on orders above AED 1,000'}
                </p>
                <p className="font-montserrat text-xs leading-relaxed tracking-wide text-white/55">
                  {isRTL
                    ? '🌐 الشحن الدولي متاح. تُحسب أسعار التوصيل عند الدفع.'
                    : '🌐 International shipping available. Delivery rates are calculated at checkout.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
