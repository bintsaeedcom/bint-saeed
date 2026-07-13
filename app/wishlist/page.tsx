'use client'

import LocaleLink from '@/components/LocaleLink'
import AppPageWayfinding from '@/components/AppPageWayfinding'
import DiscoverDestinationGrid from '@/components/DiscoverDestinationGrid'
import { SITE_CONTENT_TOP_PAD } from '@/lib/ui/editorialPageChrome'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FiHeart, FiTrash2 } from 'react-icons/fi'
import { useWishlistStore } from '@/store/wishlistStore'
import { useCurrency } from '@/lib/currency/CurrencyContext'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { commerceUi } from '@/lib/i18n/commerceUi'
import { getWishlistCopy } from '@/lib/i18n/wishlistCopyI18n'
import { getCartEmptyDiscoverCopy } from '@/lib/i18n/cartEmptyDiscoverI18n'
import { getProductHref } from '@/lib/products/links'
import { withBrandAlt } from '@/lib/products/imageAlt'
import { isWebshopPicturePath, productImageSrc } from '@/lib/products/shopImage'

export default function WishlistPage() {
  const { items, removeItem } = useWishlistStore()
  const { formatPrice } = useCurrency()
  const { isRTL, language } = useLanguage()
  const ui = commerceUi(language)
  const copy = getWishlistCopy(language)
  const discover = getCartEmptyDiscoverCopy(language)

  return (
    <div className={`min-h-screen bg-brand-pageCanvas ${SITE_CONTENT_TOP_PAD} pb-20 ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className={`container mx-auto px-6 lg:px-12 ${items.length === 0 ? 'max-w-5xl' : 'max-w-3xl'}`}>
        <AppPageWayfinding
          rtl={isRTL}
          className="mb-10"
          segments={[
            { label: ui.common.home, href: '/home' },
            { label: copy.title },
          ]}
          backLink={{
            href: '/shop',
            label: discover.exploreCollection,
          }}
        />
        <div className={`mb-10 ${isRTL ? 'text-right' : ''}`}>
          <p className="font-montserrat text-[10px] uppercase tracking-[0.35em] text-brand-dustyBlue">
            Bint Saeed
          </p>
          <h1 data-document-h1="true" className="mt-2 font-rozha text-3xl text-brand-darkRed md:text-4xl">
            {copy.title}
          </h1>
          <p className="mt-3 max-w-lg font-montserrat text-sm leading-relaxed text-brand-clayRed/70">
            {copy.intro}
          </p>
        </div>

        {items.length === 0 ? (
          <div className={`${isRTL ? 'text-right' : 'text-center'}`}>
            <div className="rounded-[2px] border border-brand-stone/25 bg-white/70 px-6 py-14">
              <FiHeart className="mx-auto mb-4 h-11 w-11 text-brand-stone/40" aria-hidden />
              <p className="font-rozha text-2xl text-brand-darkRed">{copy.emptyTitle}</p>
              <p
                className={`mt-3 max-w-md font-montserrat text-sm leading-relaxed text-brand-clayRed/65 ${
                  isRTL ? '' : 'mx-auto'
                }`}
              >
                {copy.emptyDescription}
              </p>
            </div>
            <p className="mt-10 font-montserrat text-[11px] font-medium uppercase tracking-[0.22em] text-brand-dustyBlue">
              {discover.eyebrow}
            </p>
            <DiscoverDestinationGrid source="wishlist_empty" className="mt-6" />
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
                    <LocaleLink href={href} className="relative h-28 w-20 shrink-0 overflow-hidden bg-stone-100">
                      <Image
                        src={productImageSrc(item.image)}
                        alt={withBrandAlt(item.name, language)}
                        fill
                        unoptimized={isWebshopPicturePath(item.image)}
                        className="object-cover object-top"
                        sizes="80px"
                      />
                    </LocaleLink>
                    <div className={`min-w-0 flex-1 ${isRTL ? 'text-right' : ''}`}>
                      <p className="font-montserrat text-[10px] uppercase tracking-[0.2em] text-brand-dustyBlue">
                        {item.category}
                      </p>
                      <LocaleLink href={href} data-cursor-hover>
                        <h2 data-product-name="true" className="mt-1 font-rozha text-xl text-brand-darkRed hover:text-brand-dustyBlue">
                          {item.name}
                        </h2>
                      </LocaleLink>
                      <p className="mt-1 font-montserrat text-sm text-brand-darkRed">
                        {formatPrice(item.price)}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeItem(item.id)}
                      className="self-start p-2 text-brand-clayRed/50 transition-colors hover:text-brand-darkRed"
                      aria-label={copy.remove}
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
