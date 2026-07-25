'use client'

import { useMemo, useState, useEffect, useRef, useCallback } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import LocaleLink from '@/components/LocaleLink'
import AppPageWayfinding from '@/components/AppPageWayfinding'
import { SITE_CONTENT_TOP_PAD, SITE_HEADER_STICKY_TOP } from '@/lib/ui/editorialPageChrome'
import { clarityUnmaskPriceProps } from '@/lib/analytics/clarityUnmask'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronDown, FiFilter, FiMaximize2, FiX, FiArrowLeft, FiArrowRight, FiShoppingBag } from 'react-icons/fi'
import NoTranslate from '@/components/NoTranslate'
import { products as staticProducts, categories, isVisibleOnShopGrid } from '@/data/products'
import ProductWishlistHeart from '@/components/ProductWishlistHeart'
import QuickBuy from '@/components/QuickBuy'
import {
  isWebshopPicturePath,
  productImageSrc,
  shopGridPrimaryColor,
  shopGridPrimaryImage,
} from '@/lib/products/shopImage'
import { getProductImageAlt } from '@/lib/products/imageAlt'
import type { Product } from '@/data/products'
import { useCurrency } from '@/lib/currency/CurrencyContext'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { commerceUi } from '@/lib/i18n/commerceUi'
import { shopStrandsCta } from '@/lib/i18n/strandsBrandLock'
import { getKeepExploringLine } from '@/lib/i18n/keepExploringCopyI18n'
import { getLocalizedProductDisplayName } from '@/lib/products/productDisplayNameI18n'
import { getProductHref } from '@/lib/products/links'
import { useLocaleHref } from '@/lib/i18n/useLocaleHref'
import { trackEvent } from '@/lib/analytics/tracking'
import { glassDrawer, glassDrawerWash, glassTextMuted, glassTextTitle } from '@/lib/ui/glassClasses'
import {
  PRODUCT_GRID_COLOUR_DOT,
  PRODUCT_GRID_COLOUR_DOT_ROW,
  softGridColourBeadStyle,
} from '@/lib/ui/productGridColourDot'
import {
  PRODUCT_GRID_CTA_LINK,
  PRODUCT_GRID_CTA_LINK_HOVER,
  PRODUCT_GRID_CTA_ROW,
} from '@/lib/ui/productGridCtaRow'
import DiscoverDestinationGrid from '@/components/DiscoverDestinationGrid'
import CodesOrganicBand from '@/components/CodesOrganicBand'

const CATEGORY_QUERY_MAP: Record<string, string> = {
  abayas: 'Abayas',
  kaftans: 'Kaftans',
  caftans: 'Kaftans',
  dresses: 'Dresses',
  jacket: 'Sets',
  jackets: 'Sets',
  sets: 'Sets',
  'ready-to-wear': 'All',
  evening: 'Dresses',
  'evening-wear': 'Dresses',
  coats: 'Dresses',
}

/** URL ?category= value for each shop filter (matches CATEGORY_QUERY_MAP keys). */
const CATEGORY_QUERY_VALUE: Record<(typeof categories)[number], string | null> = {
  All: null,
  Abayas: 'abayas',
  Kaftans: 'kaftans',
  Dresses: 'dresses',
  Sets: 'sets',
}

type SortId = 'newest' | 'price-asc' | 'price-desc' | 'name'

export default function ShopClient() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [catalog, setCatalog] = useState<Product[]>(() => staticProducts.filter(isVisibleOnShopGrid))
  const [activeCategory, setActiveCategory] = useState('All')
  const [filterOpen, setFilterOpen] = useState(false)
  const [sortOpen, setSortOpen] = useState(false)
  const [sortBy, setSortBy] = useState<SortId>('newest')
  const [quickBuyProduct, setQuickBuyProduct] = useState<Product | null>(null)
  const sortMenuRef = useRef<HTMLDivElement | null>(null)
  const { formatPrice } = useCurrency()
  const { isRTL, language } = useLanguage()
  const ui = commerceUi(language)
  const { localize } = useLocaleHref()
  const sortOptions = useMemo(
    () =>
      [
        { id: 'newest', label: ui.shop.sortNewest },
        { id: 'price-asc', label: ui.shop.sortPriceAsc },
        { id: 'price-desc', label: ui.shop.sortPriceDesc },
        { id: 'name', label: ui.shop.sortName },
      ] as const,
    [ui],
  )

  const applyCategory = useCallback(
    (cat: (typeof categories)[number]) => {
      setActiveCategory(cat)
      trackEvent('filter_usage', { filter_type: 'category', filter_value: cat, page: 'collection' })
      const param = CATEGORY_QUERY_VALUE[cat]
      const path = localize('/shop')
      const url = param ? `${path}?category=${param}` : path
      router.replace(url, { scroll: false })
    },
    [localize, router],
  )

  useEffect(() => {
    if (!searchParams) return
    const q = searchParams.get('category')?.toLowerCase().replace(/_/g, '-')
    if (!q) return
    const mapped = CATEGORY_QUERY_MAP[q]
    if (mapped && categories.includes(mapped as (typeof categories)[number])) {
      setActiveCategory(mapped)
    }
  }, [searchParams])

  useEffect(() => {
    let cancelled = false
    fetch('/api/catalog')
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (cancelled || !data?.products?.length) return
        setCatalog((data.products as Product[]).filter(isVisibleOnShopGrid))
      })
      .catch(() => {})
    return () => {
      cancelled = true
    }
  }, [])

  useEffect(() => {
    if (!sortOpen) return

    const handleOutside = (event: MouseEvent | TouchEvent) => {
      const target = event.target
      if (!(target instanceof Node)) return
      if (sortMenuRef.current?.contains(target)) return
      setSortOpen(false)
    }

    document.addEventListener('mousedown', handleOutside)
    document.addEventListener('touchstart', handleOutside, { passive: true })
    return () => {
      document.removeEventListener('mousedown', handleOutside)
      document.removeEventListener('touchstart', handleOutside)
    }
  }, [sortOpen])

  const categoryLabel = useCallback(
    (cat: string) => {
      const mapped = ui.shop.categories[cat as keyof typeof ui.shop.categories]
      return mapped ?? (cat === 'All' ? ui.shop.categoryAll : cat)
    },
    [ui.shop.categories, ui.shop.categoryAll],
  )

  const handleBack = useCallback(() => {
    if (typeof window !== 'undefined' && window.history.length > 1) {
      router.back()
    } else {
      router.push(localize('/shop'))
    }
  }, [localize, router])

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'All') return [...catalog]
    return catalog.filter((p) => p.category === activeCategory)
  }, [activeCategory, catalog])

  const sortedProducts = useMemo(() => {
    const list = [...filteredProducts]
    switch (sortBy) {
      case 'price-asc':
        return list.sort((a, b) => a.price - b.price)
      case 'price-desc':
        return list.sort((a, b) => b.price - a.price)
      case 'name':
        return list.sort((a, b) => a.name.localeCompare(b.name))
      default:
        return list
    }
  }, [filteredProducts, sortBy])

  const sortLabel = sortOptions.find((o) => o.id === sortBy)?.label ?? ui.shop.sortNewest
  return (
    <div className={`flex min-h-screen flex-col overflow-x-hidden bg-brand-pageCanvas text-neutral-900 `}>
      <div className="flex-1">
      <header className="section-full overflow-hidden border-b border-black/5 bg-stone-50">
        <div className={`mx-auto max-w-[1400px] px-6 pb-10 ${SITE_CONTENT_TOP_PAD} md:px-10 md:pb-14 lg:px-14`}>
          <div className="text-start">
            <AppPageWayfinding
              rtl={isRTL}
              variant="muted"
              className="mb-3"
              segments={[
                { label: ui.common.home, href: '/home' },
                { label: ui.common.shop },
              ]}
            />

            <p className="mb-4 font-montserrat text-[10px] uppercase tracking-[0.28em] text-brand-dustyBlue sm:tracking-[0.34em]">
              {ui.shop.collectionEyebrow}
            </p>
            <h1 data-document-h1="true" className="font-rozha text-[clamp(2.75rem,8vw,5.75rem)] font-normal leading-[0.98] tracking-[0.01em] text-brand-darkRed">
              {ui.shop.chapterTitle}
            </h1>
            <p className="mt-6 max-w-xl font-montserrat text-sm leading-relaxed tracking-wide text-neutral-600 md:text-base">
              {ui.shop.chapterIntro}
            </p>
          </div>
        </div>
      </header>

      <div className={`sticky ${SITE_HEADER_STICKY_TOP} z-30 border-b border-brand-stone/30 bg-brand-pageCanvas`}>
        <div className="mx-auto flex max-w-[1400px] flex-col gap-3 px-6 py-4 md:flex-row md:items-center md:justify-between md:px-10 lg:px-14">
          <div className="flex w-full min-w-0 items-center justify-between gap-3 md:w-auto md:justify-start lg:min-w-0 lg:flex-1">
            <button
              type="button"
              onClick={handleBack}
              className="flex shrink-0 items-center gap-2 px-2 py-2 font-montserrat text-[10px] uppercase tracking-[0.1em] text-brand-clayRed/70 transition-colors hover:bg-brand-dustyBlue/10 hover:text-brand-dustyBlue"
              data-cursor-hover
              aria-label={ui.common.back}
            >
              {isRTL ? (
                <FiArrowRight className="h-3.5 w-3.5" aria-hidden />
              ) : (
                <FiArrowLeft className="h-3.5 w-3.5" aria-hidden />
              )}
              {ui.common.back}
            </button>

            <div className={`hidden min-w-0 items-center gap-1 overflow-x-auto [scrollbar-width:none] md:flex [&::-webkit-scrollbar]:hidden `}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => applyCategory(cat)}
                  className={`shrink-0 whitespace-nowrap px-4 py-2 font-montserrat text-[10px] uppercase tracking-[0.1em] transition-all duration-300 ${
 activeCategory === cat
 ? 'bg-brand-darkRed text-brand-ivory'
 : 'text-brand-clayRed/70 hover:bg-brand-dustyBlue/10 hover:text-brand-dustyBlue'
 }`}
                  data-cursor-hover
                >
                  {categoryLabel(cat)}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setFilterOpen(true)}
              className="flex shrink-0 items-center gap-2 font-montserrat text-[10px] uppercase tracking-[0.22em] text-brand-darkRed md:hidden"
              data-cursor-hover
              aria-expanded={filterOpen}
              aria-haspopup="dialog"
            >
              <FiFilter className="h-3.5 w-3.5" aria-hidden />
              {ui.shop.refine}
            </button>
          </div>

          {/* Mobile: always-visible category overview (desktop unchanged above) */}
          <div className="md:hidden">
            <div
              className={`flex snap-x snap-mandatory gap-1 overflow-x-auto overscroll-x-contain pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden `}
              role="tablist"
              aria-label={ui.shop.productCategories}
            >
              {categories.map((cat) => {
                const active = activeCategory === cat
                return (
                  <button
                    key={cat}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => applyCategory(cat)}
                    className={`snap-start shrink-0 whitespace-nowrap px-4 py-2 font-montserrat text-[10px] uppercase tracking-[0.1em] transition-all duration-300 ${
 active
 ? 'bg-brand-darkRed text-brand-ivory'
 : 'text-brand-clayRed/70 hover:bg-brand-dustyBlue/10 hover:text-brand-dustyBlue'
 }`}
                    data-cursor-hover
                  >
                    {categoryLabel(cat)}
                  </button>
                )
              })}
            </div>
          </div>

          <div className="flex items-center justify-between gap-4 md:justify-end lg:gap-6">
            <LocaleLink
              href="/size-guide"
              className="hidden items-center gap-2 whitespace-nowrap px-2 py-2 font-montserrat text-[10px] uppercase tracking-[0.1em] text-brand-clayRed/70 transition-colors hover:bg-brand-dustyBlue/10 hover:text-brand-dustyBlue sm:inline-flex"
              data-cursor-hover
            >
              <FiMaximize2 className="h-3 w-3" aria-hidden />
              {ui.shop.sizing}
            </LocaleLink>

            <div className="relative" ref={sortMenuRef}>
              <button
                type="button"
                onClick={() => setSortOpen((o) => !o)}
                className="flex items-center gap-2 whitespace-nowrap px-2 py-2 font-montserrat text-[10px] uppercase tracking-[0.1em] text-brand-darkRed transition-colors hover:bg-brand-dustyBlue/10 hover:text-brand-dustyBlue"
                data-cursor-hover
                aria-expanded={sortOpen}
              >
                {sortLabel}
                <FiChevronDown
                  className={`h-3 w-3 transition-transform ${sortOpen ? 'rotate-180' : ''}`}
                  aria-hidden
                />
              </button>
              {sortOpen && (
                <div className="absolute right-0 top-full z-50 mt-2 max-h-[min(280px,70dvh)] min-w-[200px] max-w-[calc(100vw-2rem)] overflow-y-auto overscroll-contain border border-stone-200 bg-white py-2 shadow-lg shadow-stone-900/10">
                  {sortOptions.map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => {
                        setSortBy(opt.id)
                        setSortOpen(false)
                        trackEvent('sort_usage', { sort_by: opt.id, page: 'collection' })
                      }}
                      className={`block w-full px-4 py-2.5 text-left font-montserrat text-xs tracking-wide transition-colors ${
 sortBy === opt.id
 ? 'bg-stone-100 text-brand-darkRed'
 : 'text-neutral-600 hover:bg-stone-50'
 }`}
                      data-cursor-hover
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <section className="mx-auto max-w-[1400px] px-5 py-10 md:px-10 md:py-20 lg:px-14">
        <ul className="grid list-none grid-cols-2 gap-x-3 gap-y-10 p-0 sm:gap-x-7 sm:gap-y-16 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-18">
          {sortedProducts.map((product) => {
            const gridImage = shopGridPrimaryImage(product)
            const gridColor = shopGridPrimaryColor(product)
            const gridDisplayName = getLocalizedProductDisplayName(product, language)
            return (
            <li
              key={product.id}
              className="group relative z-10 flex min-w-0"
            >
              <article className="relative z-0 mx-auto flex h-full w-full flex-col border-b-2 border-transparent pb-2 transition-colors duration-200 group-hover:border-[#6f1524] lg:w-[82%]">
                <LocaleLink
                  href={getProductHref(product)}
                  className="relative z-20 block aspect-[9/16] overflow-hidden bg-stone-200"
                  aria-label={ui.shop.openProduct.replace('{name}', gridDisplayName)}
                  data-cursor-hover
                  onClick={() => trackEvent('select_item', { item_id: product.id, item_name: gridDisplayName, item_category: product.category })}
                >
                  <ProductWishlistHeart
                    product={product}
                    href={getProductHref(product)}
                    className={`absolute top-2.5 z-30 sm:top-3 end-2.5 sm:end-3`}
                  />
                  <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.015]">
                    <Image
                      src={productImageSrc(gridImage)}
                      alt={getProductImageAlt(product, gridImage, {
                        color: gridColor,
                        index: 1,
                        locale: language,
                      })}
                      fill
                      sizes="(max-width: 1024px) 50vw, 33vw"
                      unoptimized={isWebshopPicturePath(gridImage)}
                      className="pointer-events-none img-zoom object-cover object-top"
                      priority={false}
                    />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/25 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <span className="absolute bottom-5 left-1/2 z-[1] -translate-x-1/2 font-montserrat text-[9px] uppercase tracking-[0.35em] text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    {ui.shop.discover}
                  </span>
                </LocaleLink>
                <div className="mt-auto space-y-2 border-t border-black/5 pt-4">
                  <p className="font-montserrat text-[10px] uppercase tracking-[0.28em] text-brand-dustyBlue">
                    {categoryLabel(product.category)}
                  </p>
                  <LocaleLink href={getProductHref(product)} className="relative z-20 inline-block max-w-full" data-cursor-hover>
                    <h3
                      data-product-name="true"
                      data-product-name-size="grid"
                      className="max-w-full font-montserrat font-normal text-brand-darkRed transition-colors hover:text-brand-dustyBlue"
                    >
                      {gridDisplayName}
                    </h3>
                  </LocaleLink>
                  <p
                    className="font-montserrat text-sm tabular-nums tracking-wide text-[#6f1524]"
                    {...clarityUnmaskPriceProps}
                  >
                    {formatPrice(product.price, product.id)}
                  </p>
                  <div className={`${PRODUCT_GRID_COLOUR_DOT_ROW} pt-1`}>
                    {product.colors.slice(0, 5).map((c) => (
                      <span
                        key={c.name}
                        title={c.name}
                        className={PRODUCT_GRID_COLOUR_DOT}
                        style={softGridColourBeadStyle(c.hex)}
                        aria-hidden
                      />
                    ))}
                  </div>
                  <div className={`pt-2 ${PRODUCT_GRID_CTA_ROW} `}>
                    <LocaleLink
                      href={getProductHref(product)}
                      className={`relative z-20 ${PRODUCT_GRID_CTA_LINK} ${PRODUCT_GRID_CTA_LINK_HOVER}`}
                      data-cursor-hover
                    >
                      {ui.shop.discover}
                    </LocaleLink>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        setQuickBuyProduct(product)
                      }}
                      className={`relative z-20 gap-1 ${PRODUCT_GRID_CTA_LINK} ${PRODUCT_GRID_CTA_LINK_HOVER}`}
                      data-cursor-hover
                    >
                      <FiShoppingBag className="h-3 w-3 shrink-0" aria-hidden />
                      {ui.quickBuy.buyNow}
                    </button>
                  </div>
                </div>
              </article>
            </li>
            )
          })}
        </ul>

        {sortedProducts.length === 0 && (
          <div className={`mx-auto max-w-lg py-20 text-start`}>
            <p className="font-montserrat text-sm tracking-wide text-brand-clayRed/70">
              {ui.shop.noPiecesInChapter}
            </p>
            <p className="mx-auto mt-3 max-w-md font-montserrat text-sm leading-relaxed text-brand-clayRed/65">
              {getKeepExploringLine(language, 'anotherDetail')}
            </p>
            <div
              className={`mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap ${
 isRTL ? 'sm:justify-end' : 'sm:justify-center'
 }`}
            >
              <button
                type="button"
                onClick={() => applyCategory('All')}
                className="inline-flex min-h-[44px] items-center justify-center border border-brand-darkRed bg-brand-darkRed px-6 font-montserrat text-[11px] uppercase tracking-[0.14em] text-white transition-colors hover:bg-brand-dustyBlue"
                data-cursor-hover
              >
                {ui.shop.categoryAll}
              </button>
              <LocaleLink
                href="/accessories"
                className="inline-flex min-h-[44px] items-center justify-center border border-brand-darkRed/25 px-6 font-montserrat text-[11px] uppercase tracking-[0.14em] text-brand-darkRed transition-colors hover:border-brand-dustyBlue hover:text-brand-dustyBlue"
                data-cursor-hover
              >
                {ui.common.accessories}
              </LocaleLink>
              <LocaleLink
                href="/strands"
                className="inline-flex min-h-[44px] items-center justify-center px-2 font-montserrat text-[11px] uppercase tracking-[0.14em] text-brand-dustyBlue underline-offset-4 hover:underline"
                data-cursor-hover
              >
                <NoTranslate>{shopStrandsCta(language, 'title')}</NoTranslate>
              </LocaleLink>
            </div>
          </div>
        )}

      </section>
      </div>

      {sortedProducts.length > 0 ? (
        <CodesOrganicBand
          className="mt-auto py-16 text-center md:py-20"
          contentClassName="max-w-[1400px]"
          ariaLabel={ui.cart.continueShopping}
        >
          <p className="font-montserrat text-[11px] font-medium uppercase tracking-[0.2em] text-[#e8d8c8]/70">
            {ui.shop.collectionEyebrow}
          </p>
          <h2 className="mt-3 font-rozha text-[clamp(1.75rem,4vw,2.5rem)] leading-[1.08] text-[#e8ddd4]">
            {ui.cart.continueShopping}
          </h2>
          <p className="mx-auto mt-3 max-w-lg font-montserrat text-sm leading-relaxed tracking-wide text-[#e8d8c8]/65">
            {getKeepExploringLine(language, 'throughTheHouse')}
          </p>
          <DiscoverDestinationGrid
            source="shop_keep_exploring"
            tone="onDark"
            className="mx-auto mt-8 max-w-4xl lg:!grid-cols-3"
          />
        </CodesOrganicBand>
      ) : null}

      {quickBuyProduct ? (
        <QuickBuy
          isOpen
          onClose={() => setQuickBuyProduct(null)}
          product={{
            id: quickBuyProduct.id,
            name: quickBuyProduct.name,
            slug: quickBuyProduct.slug,
            price: quickBuyProduct.price,
            images: quickBuyProduct.images,
            colorImages: quickBuyProduct.colorImages,
            sizes: quickBuyProduct.sizes,
            colors: quickBuyProduct.colors,
            category: quickBuyProduct.category,
          }}
        />
      ) : null}

      {/* Only mount the drawer when open so a hidden fixed layer never intercepts taps (mobile). */}
      <AnimatePresence>
        {filterOpen && (
          <motion.div
            key="shop-filter-overlay"
            className="fixed inset-0 z-[85] md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.button
              type="button"
              aria-label={ui.common.close}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setFilterOpen(false)}
            />
            <motion.aside
              role="dialog"
              aria-modal="true"
              className={`absolute top-0 flex h-full w-[min(100%,20rem)] flex-col ${glassDrawer} ${
 isRTL ? 'left-0 border-r' : 'right-0 border-l'
 }`}
              initial={{ x: isRTL ? '-100%' : '100%' }}
              animate={{ x: 0 }}
              exit={{ x: isRTL ? '-100%' : '100%' }}
              transition={{ type: 'tween', duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className={glassDrawerWash} aria-hidden />
              <div className={`relative z-[1] flex items-center justify-between border-b border-brand-darkRed/10 px-6 py-5 `}>
                <span className={`font-rozha text-xl ${glassTextTitle}`}>
                  {ui.shop.refine}
                </span>
                <button
                  type="button"
                  onClick={() => setFilterOpen(false)}
                  className={`p-2 ${glassTextTitle}`}
                  data-cursor-hover
                >
                  <FiX className="h-5 w-5" />
                </button>
              </div>
              <div className="relative z-[1] flex-1 overflow-y-auto px-6 py-6">
                <p className={`mb-4 font-montserrat text-[10px] uppercase tracking-[0.28em] ${glassTextMuted}`}>
                  {ui.shop.productCategories}
                </p>
                <ul className="list-none space-y-3 p-0">
                  {categories.map((cat) => (
                    <li key={cat}>
                      <button
                        type="button"
                        onClick={() => {
                          applyCategory(cat)
                          setFilterOpen(false)
                        }}
                        className={`font-montserrat text-sm tracking-wide ${
 activeCategory === cat
 ? glassTextTitle
 : `${glassTextMuted} hover:text-brand-dustyBlue`
 }`}
                        data-cursor-hover
                      >
                        {categoryLabel(cat)}
                      </button>
                    </li>
                  ))}
                </ul>
                <LocaleLink
                  href="/size-guide"
                  onClick={() => setFilterOpen(false)}
                  className={`mt-10 flex items-center gap-2 border-t border-brand-darkRed/10 pt-8 font-montserrat text-xs uppercase tracking-[0.2em] ${glassTextTitle} `}
                  data-cursor-hover
                >
                  <FiMaximize2 className="h-3.5 w-3.5" />
                  {ui.shop.sizeGuide}
                </LocaleLink>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
