'use client'

import { useMemo, useState, useEffect, useRef, useCallback } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import LocaleLink from '@/components/LocaleLink'
import AppPageWayfinding from '@/components/AppPageWayfinding'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronDown, FiFilter, FiMaximize2, FiX, FiArrowLeft, FiArrowRight } from 'react-icons/fi'
import { products as staticProducts, categories, isVisibleOnShopGrid } from '@/data/products'
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
import { getLocalizedProductDisplayName } from '@/lib/products/productDisplayNameI18n'
import { getProductHref } from '@/lib/products/links'
import { useLocaleHref } from '@/lib/i18n/useLocaleHref'
import { trackEvent } from '@/lib/analytics/tracking'

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
    (cat: string) => (cat === 'All' ? ui.shop.categoryAll : cat),
    [ui.shop.categoryAll],
  )

  const handleBack = useCallback(() => {
    if (typeof window !== 'undefined' && window.history.length > 1) {
      router.back()
    } else {
      router.push('/shop')
    }
  }, [router])

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
    <div className={`min-h-screen overflow-x-hidden bg-brand-pageCanvas text-neutral-900 ${isRTL ? 'rtl' : 'ltr'}`}>
      <header className="section-full overflow-hidden border-b border-black/5 bg-stone-50">
        <div className="mx-auto max-w-[1400px] px-6 pb-10 pt-24 md:px-10 md:pb-14 md:pt-28 lg:px-14">
          <div className={isRTL ? 'text-right' : ''}>
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

      <div className="sticky top-[50px] z-30 border-b border-brand-stone/30 bg-brand-pageCanvas md:top-16">
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

            <div className={`hidden min-w-0 items-center gap-1 overflow-x-auto [scrollbar-width:none] md:flex [&::-webkit-scrollbar]:hidden ${isRTL ? 'flex-row-reverse' : ''}`}>
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
              className={`flex snap-x snap-mandatory gap-1 overflow-x-auto overscroll-x-contain pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${
                isRTL ? 'flex-row-reverse' : ''
              }`}
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
              className="group relative z-10 min-w-0"
            >
              <article className="relative z-0 mx-auto block w-full border-b-2 border-transparent pb-2 transition-colors duration-200 group-hover:border-[#6f1524] lg:w-[82%]">
                <LocaleLink
                  href={getProductHref(product)}
                  className="relative z-20 block aspect-[9/16] overflow-hidden bg-stone-200"
                  aria-label={ui.shop.openProduct.replace('{name}', gridDisplayName)}
                  data-cursor-hover
                  onClick={() => trackEvent('select_item', { item_id: product.id, item_name: gridDisplayName, item_category: product.category })}
                >
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
                <div className="mt-5 space-y-2 border-t border-black/5 pt-4">
                  <p className="font-montserrat text-[10px] uppercase tracking-[0.28em] text-brand-dustyBlue">
                    {product.category}
                  </p>
                  <LocaleLink href={getProductHref(product)} className="relative z-20 inline-block max-w-full" data-cursor-hover>
                    <h3 data-product-name="true" className="font-rozha text-[clamp(0.95rem,2.8vw,1.35rem)] font-normal leading-snug tracking-wide text-brand-darkRed transition-colors hover:text-brand-dustyBlue sm:leading-tight">
                      {gridDisplayName}
                    </h3>
                  </LocaleLink>
                  <p className="font-montserrat text-sm tabular-nums tracking-wide text-[#6f1524]">
                    {formatPrice(product.price, product.id)}
                  </p>
                  <div className="flex gap-1.5 pt-1">
                    {product.colors.slice(0, 5).map((c) => (
                      <span
                        key={c.name}
                        title={c.name}
                        className="h-2.5 w-2.5 rounded-full border border-black/10"
                        style={{ backgroundColor: c.hex }}
                      />
                    ))}
                  </div>
                  <LocaleLink
                    href={getProductHref(product)}
                    className="relative z-20 inline-flex items-center border-b border-brand-darkRed/40 pt-2 font-montserrat text-[11px] uppercase tracking-[0.18em] text-brand-darkRed hover:border-brand-dustyBlue hover:text-brand-dustyBlue"
                    data-cursor-hover
                  >
                    {ui.shop.viewProduct}
                  </LocaleLink>
                </div>
              </article>
            </li>
            )
          })}
        </ul>

        {sortedProducts.length === 0 && (
          <p className="py-24 text-center font-montserrat text-sm tracking-wide text-neutral-500">
            {ui.shop.noPiecesInChapter}
          </p>
        )}
      </section>

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
              className={`absolute top-0 flex h-full w-[min(100%,20rem)] flex-col bg-stone-50 shadow-2xl ${
                isRTL ? 'left-0' : 'right-0'
              }`}
              initial={{ x: isRTL ? '-100%' : '100%' }}
              animate={{ x: 0 }}
              exit={{ x: isRTL ? '-100%' : '100%' }}
              transition={{ type: 'tween', duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            >
          <div className="flex items-center justify-between border-b border-stone-200 px-6 py-5">
            <span className="font-rozha text-xl text-brand-darkRed">
              {ui.shop.refine}
            </span>
            <button
              type="button"
              onClick={() => setFilterOpen(false)}
              className="p-2 text-brand-darkRed"
              data-cursor-hover
            >
              <FiX className="h-5 w-5" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto px-6 py-6">
            <p className="mb-4 font-montserrat text-[10px] uppercase tracking-[0.28em] text-neutral-500">
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
                        ? 'text-brand-darkRed'
                        : 'text-neutral-500 hover:text-brand-dustyBlue'
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
              className="mt-10 flex items-center gap-2 border-t border-stone-200 pt-8 font-montserrat text-xs uppercase tracking-[0.2em] text-brand-darkRed"
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
