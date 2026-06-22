'use client'

import LocaleLink from '@/components/LocaleLink'
import AppPageWayfinding from '@/components/AppPageWayfinding'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FiHeart, FiTrash2 } from 'react-icons/fi'
import { useWishlistStore } from '@/store/wishlistStore'
import { useCurrency } from '@/lib/currency/CurrencyContext'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { getProductHref } from '@/lib/products/links'
import { withBrandAlt } from '@/lib/products/imageAlt'

export default function WishlistPage() {
  const { items, removeItem } = useWishlistStore()
  const { formatPrice } = useCurrency()
  const { isRTL } = useLanguage()

  return (
    <div className={`min-h-screen bg-brand-pageCanvas pt-28 pb-20 ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="container mx-auto max-w-3xl px-6 lg:px-12">
        <AppPageWayfinding
          rtl={isRTL}
          className="mb-10"
          segments={[
            { label: isRTL ? 'الرئيسية' : 'Home', href: '/home' },
            { label: isRTL ? 'المفضلة' : 'Favorites' },
          ]}
          backLink={{
            href: '/shop',
            label: isRTL ? 'العودة للتسوق' : 'Back to Shop',
          }}
        />
        <div className={`mb-10 ${isRTL ? 'text-right' : ''}`}>
          <p className="font-montserrat text-[10px] uppercase tracking-[0.35em] text-brand-dustyBlue">
            Bint Saeed
          </p>
          <h1 data-document-h1="true" className="mt-2 font-rozha text-3xl text-brand-darkRed md:text-4xl">
            {isRTL ? 'المفضلة' : 'Favorites'}
          </h1>
          <p className="mt-3 max-w-lg font-montserrat text-sm leading-relaxed text-brand-clayRed/70">
            {isRTL
              ? 'تُحفظ القطع على هذا المتصفح. عند تفعيل تسجيل الدخول لاحقًا، يمكن ربط المفضلة بحسابك.'
              : 'Pieces you heart are saved in this browser. When account sign-in is available, favorites can sync to your profile.'}
          </p>
        </div>

        {items.length === 0 ? (
          <div className={`rounded-lg border border-brand-stone/30 bg-white py-16 text-center ${isRTL ? 'text-right' : ''}`}>
            <FiHeart className="mx-auto mb-4 h-12 w-12 text-brand-stone/40" aria-hidden />
            <p className="font-rozha text-xl text-brand-darkRed">
              {isRTL ? 'لا توجد قطع محفوظة بعد' : 'No saved pieces yet'}
            </p>
            <p className="mt-2 font-montserrat text-sm text-brand-clayRed/60">
              {isRTL ? 'تسوقي المجموعة وأضيفي ما يعجبك.' : 'Explore the collection and tap the heart on any product.'}
            </p>
            <LocaleLink
              href="/shop"
              className="mt-8 inline-block bg-brand-darkRed px-8 py-3 font-montserrat text-xs uppercase tracking-[0.2em] text-white transition-colors hover:bg-brand-dustyBlue"
              data-cursor-hover
            >
              {isRTL ? 'تسوقي' : 'Shop'}
            </LocaleLink>
          </div>
        ) : (
          <ul className="space-y-4 p-0">
            {items.map((item, index) => {
              const href = item.href ?? getProductHref({ id: item.id, name: item.name })
              return (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="list-none"
                >
                  <div
                    className={`flex gap-4 rounded-lg border border-brand-stone/30 bg-white p-4 ${isRTL ? 'flex-row-reverse' : ''}`}
                  >
                    <LocaleLink href={href} className="relative h-28 w-20 flex-shrink-0 overflow-hidden bg-brand-stone/10 sm:h-32 sm:w-24" data-cursor-hover>
                      <Image src={item.image} alt={withBrandAlt(item.name)} fill className="pointer-events-none object-cover" sizes="96px" />
                    </LocaleLink>
                    <div className={`min-w-0 flex-1 ${isRTL ? 'text-right' : ''}`}>
                      <p className="font-montserrat text-[10px] uppercase tracking-[0.2em] text-brand-dustyBlue">
                        {item.category}
                      </p>
                      <LocaleLink href={href} className="mt-1 block" data-cursor-hover>
                        <h2 data-product-name="true" className="font-rozha text-lg text-brand-darkRed transition-colors hover:text-brand-dustyBlue sm:text-xl">
                          {item.name}
                        </h2>
                      </LocaleLink>
                      <p className="mt-2 font-montserrat text-sm tabular-nums text-brand-clayRed">{formatPrice(item.price)}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeItem(item.id)}
                      className="flex h-10 w-10 flex-shrink-0 items-center justify-center self-start border border-brand-stone/40 text-brand-darkRed transition-colors hover:border-brand-darkRed hover:bg-brand-stone/10"
                      aria-label={isRTL ? 'إزالة من المفضلة' : 'Remove from favorites'}
                      data-cursor-hover
                    >
                      <FiTrash2 className="h-4 w-4" />
                    </button>
                  </div>
                </motion.li>
              )
            })}
          </ul>
        )}
      </div>
    </div>
  )
}
