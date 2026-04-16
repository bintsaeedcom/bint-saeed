'use client'

import { useMemo, useState, useEffect, useRef, useCallback } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import LocaleLink from '@/components/LocaleLink'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronDown, FiFilter, FiMaximize2, FiX, FiArrowLeft, FiArrowRight } from 'react-icons/fi'
import { products as staticProducts, categories } from '@/data/products'
import type { Product } from '@/data/products'
import { useCurrency } from '@/lib/currency/CurrencyContext'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import ProductWishlistHeart from '@/components/ProductWishlistHeart'
import { getProductHref } from '@/lib/products/links'

const CATEGORY_QUERY_MAP: Record<string, string> = {
  abayas: 'Abayas',
  kaftans: 'Kaftans',
  caftans: 'Kaftans',
  dresses: 'Dresses',
  sets: 'Sets',
  accessories: 'Accessories',
  'ready-to-wear': 'All',
  evening: 'Dresses',
  'evening-wear': 'Dresses',
  coats: 'Dresses',
}

const SORT_OPTIONS = [
  { id: 'newest', label: 'New arrivals' },
  { id: 'price-asc', label: 'Price, low to high' },
  { id: 'price-desc', label: 'Price, high to low' },
  { id: 'name', label: 'Name, A–Z' },
] as const

type SortId = (typeof SORT_OPTIONS)[number]['id']

export default function ShopClient() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [catalog, setCatalog] = useState<Product[]>(staticProducts)
  const [activeCategory, setActiveCategory] = useState('All')
  const [filterOpen, setFilterOpen] = useState(false)
  const [sortOpen, setSortOpen] = useState(false)
  const [sortBy, setSortBy] = useState<SortId>('newest')
  const sortMenuRef = useRef<HTMLDivElement | null>(null)
  const { formatPrice } = useCurrency()
  const { isRTL } = useLanguage()

  useEffect(() => {
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
        setCatalog(data.products as Product[])
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

  const categoryCounts = useMemo(() => {
    const m: Record<string, number> = {}
    for (const p of catalog) {
      m[p.category] = (m[p.category] ?? 0) + 1
    }
    return m
  }, [catalog])

  const categoryLabel = useCallback(
    (cat: string) => {
      if (cat === 'All') return isRTL ? 'الكل' : 'All'
      const n = categoryCounts[cat]
      return n != null ? `${cat} (${n})` : cat
    },
    [categoryCounts, isRTL]
  )

  const handleBack = useCallback(() => {
    if (typeof window !== 'undefined' && window.history.length > 1) {
      router.back()
    } else {
      router.push('/preview')
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

  const sortLabel = SORT_OPTIONS.find((o) => o.id === sortBy)?.label ?? 'New arrivals'

  return (
    <div className={`min-h-screen bg-stone-100 text-neutral-900 ${isRTL ? 'rtl' : 'ltr'}`}>
      <header className="border-b border-black/5 bg-stone-50">
        <div className="mx-auto max-w-[1400px] px-6 pb-12 pt-10 md:px-10 md:pb-16 md:pt-14 lg:px-14">
          <nav className="mb-10 flex flex-wrap items-center gap-x-2 font-roboto text-[10px] uppercase tracking-[0.28em] text-neutral-500">
            <LocaleLink
              href="/preview"
              className="transition-colors hover:text-brand-dustyBlue"
              data-cursor-hover
            >
              {isRTL ? 'الرئيسية' : 'The House'}
            </LocaleLink>
            <span aria-hidden className="text-neutral-400">
              /
            </span>
            <span className="text-neutral-900">{isRTL ? 'المجموعة' : 'Ready-to-wear'}</span>
          </nav>

          <p className="mb-4 font-roboto text-[10px] uppercase tracking-[0.42em] text-brand-dustyBlue">
            COLLECTION
          </p>
          <h1 className="font-rozha text-4xl font-normal leading-tight tracking-wide text-brand-darkRed md:text-5xl lg:text-6xl">
            {isRTL ? 'الفصل ٢٦' : 'Chapter 26'}
          </h1>
          <p className="mt-6 max-w-md font-roboto text-sm leading-relaxed tracking-wide text-neutral-600">
            {isRTL
              ? 'قطع محدودة، خامات مختارة، وتفاصيل من صنع يدّي. اكتشفي القطع التي تحمل هوية الدار.'
              : 'Limited pieces, considered materials, and finishing you can feel. Discover silhouettes shaped for life across cities.'}
          </p>
        </div>
      </header>

      <div className="sticky top-[90px] z-30 border-b border-black/5 bg-stone-100/95 backdrop-blur-md lg:top-[100px]">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-4 px-6 py-4 md:flex-row md:items-center md:justify-between md:px-10 lg:px-14">
          <div className="flex w-full min-w-0 items-center justify-between gap-4 md:w-auto md:justify-start md:gap-8 lg:min-w-0 lg:flex-1">
            <button
              type="button"
              onClick={handleBack}
              className="flex shrink-0 items-center gap-2 border-b border-transparent pb-1 font-roboto text-[10px] uppercase tracking-[0.22em] text-neutral-600 transition-colors hover:text-brand-dustyBlue"
              data-cursor-hover
              aria-label={isRTL ? 'رجوع' : 'Back'}
            >
              {isRTL ? (
                <FiArrowRight className="h-3.5 w-3.5" aria-hidden />
              ) : (
                <FiArrowLeft className="h-3.5 w-3.5" aria-hidden />
              )}
              {isRTL ? 'رجوع' : 'Back'}
            </button>

            <div className="hidden min-w-0 flex-wrap items-center gap-x-8 gap-y-2 md:flex">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`border-b border-transparent pb-1 font-roboto text-[10px] uppercase tracking-[0.22em] transition-colors ${
                    activeCategory === cat
                      ? 'border-brand-darkRed text-brand-darkRed'
                      : 'text-neutral-500 hover:text-brand-dustyBlue'
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
              className="flex shrink-0 items-center gap-2 font-roboto text-[10px] uppercase tracking-[0.22em] text-brand-darkRed md:hidden"
              data-cursor-hover
            >
              <FiFilter className="h-3.5 w-3.5" aria-hidden />
              {isRTL ? 'تصفية' : 'Refine'}
            </button>
          </div>

          <div className="flex items-center justify-between gap-6 md:justify-end">
            <LocaleLink
              href="/size-guide"
              className="hidden items-center gap-2 font-roboto text-[10px] uppercase tracking-[0.2em] text-neutral-500 transition-colors hover:text-brand-dustyBlue sm:inline-flex"
              data-cursor-hover
            >
              <FiMaximize2 className="h-3 w-3" aria-hidden />
              {isRTL ? 'المقاسات' : 'Sizing'}
            </LocaleLink>
            <span className="font-roboto text-[10px] tabular-nums tracking-[0.18em] text-neutral-500">
              {sortedProducts.length}{' '}
              {sortedProducts.length === 1
                ? isRTL
                  ? 'قطعة'
                  : 'piece'
                : isRTL
                  ? 'قطع'
                  : 'pieces'}
            </span>

            <div className="relative" ref={sortMenuRef}>
              <button
                type="button"
                onClick={() => setSortOpen((o) => !o)}
                className="flex items-center gap-2 font-roboto text-[10px] uppercase tracking-[0.22em] text-brand-darkRed"
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
                <div className="absolute right-0 top-full z-50 mt-2 min-w-[200px] border border-stone-200 bg-white py-2 shadow-lg shadow-stone-900/10">
                  {SORT_OPTIONS.map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => {
                        setSortBy(opt.id)
                        setSortOpen(false)
                      }}
                      className={`block w-full px-4 py-2.5 text-left font-roboto text-xs tracking-wide transition-colors ${
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

      <section className="mx-auto max-w-[1400px] px-6 py-14 md:px-10 md:py-20 lg:px-14">
        <ul className="grid list-none grid-cols-1 gap-y-14 p-0 sm:grid-cols-2 sm:gap-x-7 sm:gap-y-16 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-18">
          {sortedProducts.map((product) => (
            <li
              key={product.id}
              className="group relative z-10"
            >
              <ProductWishlistHeart
                product={product}
                href={getProductHref(product)}
                className={`absolute top-0 z-20 ${isRTL ? 'left-[8%]' : 'right-[8%]'}`}
              />
              <article className="relative z-0 mx-auto block w-[82%]">
                <a
                  href={getProductHref(product)}
                  className="relative z-20 block aspect-[3/4] overflow-hidden bg-stone-200"
                  aria-label={`${isRTL ? 'فتح' : 'Open'} ${product.name}`}
                  data-cursor-hover
                >
                  <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.015]">
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                      priority={false}
                    />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/25 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <span className="absolute bottom-5 left-1/2 z-[1] -translate-x-1/2 font-roboto text-[9px] uppercase tracking-[0.35em] text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    {isRTL ? 'اكتشفي' : 'Discover'}
                  </span>
                </a>
                <div className="mt-5 space-y-2 border-t border-black/5 pt-4">
                  <p className="font-roboto text-[10px] uppercase tracking-[0.28em] text-brand-dustyBlue">
                    {product.category}
                  </p>
                  <a href={getProductHref(product)} className="inline-block relative z-20" data-cursor-hover>
                    <h2 className="font-rozha text-[1.35rem] font-normal leading-tight tracking-wide text-brand-darkRed transition-colors hover:text-brand-dustyBlue">
                      {product.name}
                    </h2>
                  </a>
                  <p className="font-roboto text-sm tabular-nums tracking-wide text-neutral-600">
                    {formatPrice(product.price)}
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
                  <a
                    href={getProductHref(product)}
                    className="relative z-20 inline-flex items-center border-b border-brand-darkRed/40 pt-2 font-roboto text-[11px] uppercase tracking-[0.18em] text-brand-darkRed hover:text-brand-dustyBlue hover:border-brand-dustyBlue"
                    data-cursor-hover
                  >
                    {isRTL ? 'عرض المنتج' : 'View product'}
                  </a>
                </div>
              </article>
            </li>
          ))}
        </ul>

        {sortedProducts.length === 0 && (
          <p className="py-24 text-center font-roboto text-sm tracking-wide text-neutral-500">
            {isRTL ? 'لا توجد قطع في هذا القسم حالياً.' : 'No pieces in this chapter yet.'}
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
              aria-label="Close"
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
              {isRTL ? 'تصفية' : 'Refine'}
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
            <p className="mb-4 font-roboto text-[10px] uppercase tracking-[0.28em] text-neutral-500">
              {isRTL ? 'الفئة' : 'Category'}
            </p>
            <ul className="list-none space-y-3 p-0">
              {categories.map((cat) => (
                <li key={cat}>
                  <button
                    type="button"
                    onClick={() => {
                      setActiveCategory(cat)
                      setFilterOpen(false)
                    }}
                    className={`font-roboto text-sm tracking-wide ${
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
              className="mt-10 flex items-center gap-2 border-t border-stone-200 pt-8 font-roboto text-xs uppercase tracking-[0.2em] text-brand-darkRed"
              data-cursor-hover
            >
              <FiMaximize2 className="h-3.5 w-3.5" />
              {isRTL ? 'دليل المقاسات' : 'Size guide'}
            </LocaleLink>
          </div>
        </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
