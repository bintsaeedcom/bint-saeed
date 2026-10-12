'use client'

import Image from 'next/image'
import LocaleLink from '@/components/LocaleLink'
import { products as staticProducts } from '@/data/products'
import { useCurrency } from '@/lib/currency/CurrencyContext'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { clarityUnmaskPriceProps } from '@/lib/analytics/clarityUnmask'
import { trackEvent } from '@/lib/analytics/tracking'
import { getLocalizedProductDisplayName } from '@/lib/products/productDisplayNameI18n'
import { getProductHref } from '@/lib/products/links'
import { getProductImageAlt } from '@/lib/products/imageAlt'
import { productImageSrc, shopGridPrimaryColor, shopGridPrimaryImage } from '@/lib/products/shopImage'

export default function RamadanEditGrid({ slugs }: { slugs: readonly string[] }) {
  const { language } = useLanguage()
  const { formatPrice } = useCurrency()
  const items = slugs
    .map((slug) => staticProducts.find((product) => product.slug === slug))
    .filter((product): product is (typeof staticProducts)[number] => Boolean(product))

  return (
    <ul className="grid list-none grid-cols-2 gap-x-3 gap-y-10 p-0 sm:gap-x-7 sm:gap-y-14 lg:grid-cols-4 lg:gap-x-8">
      {items.map((product, index) => {
        const image = shopGridPrimaryImage(product)
        const name = getLocalizedProductDisplayName(product, language)
        const href = getProductHref(product)
        return (
          <li key={product.id} className="group min-w-0">
            <LocaleLink
              href={href}
              className="block"
              data-cursor-hover
              onClick={() =>
                trackEvent('select_item', {
                  item_id: product.id,
                  item_name: name,
                  item_category: product.category,
                  item_list_name: 'Ramadan Edit',
                })
              }
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-stone-200">
                <Image
                  src={productImageSrc(image)}
                  alt={getProductImageAlt(product, image, {
                    color: shopGridPrimaryColor(product),
                    index: product.slug === 'park-lane-abaya' ? 1 : 0,
                    locale: language,
                  })}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.015]"
                  priority={index < 2}
                />
              </div>
              <div className="mt-3 space-y-1 border-t border-black/5 pt-3">
                <h3
                  data-product-name="true"
                  data-product-name-size="grid"
                  className="font-montserrat font-normal text-brand-darkRed transition-colors group-hover:text-brand-dustyBlue"
                >
                  {name}
                </h3>
                <p
                  className="font-montserrat text-sm tabular-nums tracking-wide text-[#6f1524]"
                  {...clarityUnmaskPriceProps}
                >
                  {formatPrice(product.price, product.id)}
                </p>
              </div>
            </LocaleLink>
          </li>
        )
      })}
    </ul>
  )
}
