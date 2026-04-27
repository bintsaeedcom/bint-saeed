'use client'

import { useState, useRef, useEffect, useMemo, useCallback } from 'react'
import { useSearchParams, useRouter, usePathname } from 'next/navigation'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import LocaleLink from '@/components/LocaleLink'
import Image from 'next/image'
import { FiArrowLeft, FiFilter, FiX, FiShoppingBag } from 'react-icons/fi'
import {
  accessories,
  accessoryCategories,
  Accessory,
  ACCESSORY_IMAGE_ABAYA_CHARMS_HERO,
} from '@/data/accessories'
import FavoriteHeartButton from '@/components/FavoriteHeartButton'
import { useCurrency } from '@/lib/currency/CurrencyContext'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { stripLocaleFromPathname, localizedPath } from '@/lib/i18n/routing'
import {
  applyAccessoryFilters,
  type PriceRangeId,
  type StoneFilterId,
  PRICE_RANGE_OPTIONS,
  STONE_OPTIONS,
} from '@/lib/accessories/filterAccessories'
import { trackEvent } from '@/lib/analytics/tracking'

function parsePriceParam(v: string | null): PriceRangeId {
  if (!v) return 'all'
  return PRICE_RANGE_OPTIONS.some((o) => o.id === v) ? (v as PriceRangeId) : 'all'
}

function parseStonesParam(v: string | null): StoneFilterId[] {
  if (!v?.trim()) return []
  const parts = v.split(',').map((s) => s.trim()).filter(Boolean)
  const valid = new Set(STONE_OPTIONS.map((o) => o.id))
  return parts.filter((p): p is StoneFilterId => valid.has(p as StoneFilterId))
}

export default function AccessoriesPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname() ?? '/accessories'
  const [activeCategory, setActiveCategory] = useState('all')
  const [priceRange, setPriceRange] = useState<PriceRangeId>('all')
  const [selectedStones, setSelectedStones] = useState<StoneFilterId[]>([])
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null)
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const { formatPrice } = useCurrency()
  const { isRTL } = useLanguage()

  useEffect(() => {
    const raw = searchParams.get('type') ?? searchParams.get('category')
    if (raw) {
      const id = raw.toLowerCase().replace(/_/g, '-')
      if (accessoryCategories.some((c) => c.id === id && id !== 'all')) {
        setActiveCategory(id)
      }
    }
    setPriceRange(parsePriceParam(searchParams.get('price')))
    setSelectedStones(parseStonesParam(searchParams.get('stones')))
  }, [searchParams])

  const replaceAccessoryQuery = useCallback(
    (patch: Partial<{ category: string; price: PriceRangeId; stones: StoneFilterId[] }>) => {
      const cat = patch.category ?? activeCategory
      const pr = patch.price ?? priceRange
      const st = patch.stones ?? selectedStones
      const p = new URLSearchParams()
      if (cat !== 'all') p.set('type', cat)
      if (pr !== 'all') p.set('price', pr)
      if (st.length > 0) p.set('stones', st.join(','))
      const q = p.toString()
      router.replace(q ? `${pathname}?${q}` : pathname, { scroll: false })
    },
    [activeCategory, priceRange, selectedStones, pathname, router]
  )

  const setCategoryAndUrl = useCallback(
    (id: string) => {
      setActiveCategory(id)
      trackEvent('filter_usage', { filter_type: 'accessories_category', filter_value: id, page: 'accessories' })
      replaceAccessoryQuery({ category: id })
    },
    [replaceAccessoryQuery]
  )

  const setPriceAndUrl = useCallback(
    (id: PriceRangeId) => {
      setPriceRange(id)
      trackEvent('filter_usage', { filter_type: 'accessories_price', filter_value: id, page: 'accessories' })
      replaceAccessoryQuery({ price: id })
    },
    [replaceAccessoryQuery]
  )

  const toggleStoneAndUrl = useCallback(
    (stoneId: StoneFilterId) => {
      const next = selectedStones.includes(stoneId)
        ? selectedStones.filter((s) => s !== stoneId)
        : [...selectedStones, stoneId]
      setSelectedStones(next)
      trackEvent('filter_usage', {
        filter_type: 'accessories_stone',
        filter_value: stoneId,
        filter_state: next.includes(stoneId) ? 'enabled' : 'disabled',
        page: 'accessories',
      })
      replaceAccessoryQuery({ stones: next })
    },
    [selectedStones, replaceAccessoryQuery]
  )

  const clearPriceAndStoneFilters = useCallback(() => {
    setPriceRange('all')
    setSelectedStones([])
    const p = new URLSearchParams()
    if (activeCategory !== 'all') p.set('type', activeCategory)
    const q = p.toString()
    router.replace(q ? `${pathname}?${q}` : pathname, { scroll: false })
  }, [activeCategory, pathname, router])

  const resetAllFiltersAndUrl = useCallback(() => {
    setActiveCategory('all')
    setPriceRange('all')
    setSelectedStones([])
    router.replace(pathname, { scroll: false })
  }, [pathname, router])

  const filteredAccessories = useMemo(
    () =>
      applyAccessoryFilters(accessories, {
        categoryId: activeCategory,
        priceRange,
        stones: selectedStones,
      }),
    [activeCategory, priceRange, selectedStones]
  )

  const hasExtraFilters = priceRange !== 'all' || selectedStones.length > 0

  const activeTab = accessoryCategories.find(c => c.id === activeCategory)
  const isAbayaCharmsLayout = activeCategory === 'abaya-charms'

  return (
    <div className={`min-h-screen bg-brand-pageCanvas ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Hero Banner */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden bs-burgundy-surface">
        <Image
          src="/Webshop pictures/accessoiries/banner.png"
          alt="Accessories Collection"
          fill
          className="object-cover opacity-40"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1F0508] via-[#3B0A12]/55 to-transparent" />
        
        <div className="relative h-full flex flex-col justify-end pb-16 md:pb-20 text-white [&_h1]:text-white [&_a]:text-white/90 [&_a:hover]:text-white [&_span]:text-white/80 [&_p]:text-white/85 [&_svg]:text-current">
          <div className="container mx-auto px-6 lg:px-12">
            {/* Back Button */}
            <motion.div
              initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <LocaleLink
                href="/"
                className={`inline-flex items-center gap-2 font-montserrat text-xs uppercase tracking-[0.15em] transition-colors group ${isRTL ? 'flex-row-reverse' : ''}`}
                data-cursor-hover
              >
                <FiArrowLeft className={`w-4 h-4 group-hover:-translate-x-1 transition-transform ${isRTL ? 'rotate-180 group-hover:translate-x-1' : ''}`} />
                {isRTL ? 'العودة للرئيسية' : 'Back to Home'}
              </LocaleLink>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className={isRTL ? 'text-right' : ''}
            >
              <span className="font-montserrat text-xs uppercase tracking-[0.4em] mb-4 block">
                {isRTL ? 'مجموعة الإكسسوارات' : 'Accessories Collection'}
              </span>
              <h1 data-document-h1="true" className="font-rozha text-5xl md:text-7xl lg:text-8xl mb-4">
                {isRTL ? 'الإكسسوارات' : 'Accessories'}
              </h1>
              <p className="font-montserrat text-base tracking-wide max-w-lg">
                {isRTL
                  ? 'اكتشفي مجموعتنا الراقية من تعليقات العباءة والقلادات والأقراط والأساور وتعليقات الحقائب والهواتف.'
                  : 'Discover our curated collection of abaya charms, necklaces, earrings, bracelets, bag charms, and phone charms.'}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="sticky top-[168px] z-40 border-b border-brand-stone/30 bg-brand-pageCanvas sm:top-[176px] md:top-[188px] lg:top-[200px] xl:top-[208px]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between py-4">
            {/* Categories - Desktop */}
            <div className={`hidden md:flex items-center gap-4 overflow-x-auto ${isRTL ? 'flex-row-reverse' : ''}`}>
              {accessoryCategories.map((category) => (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setCategoryAndUrl(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 font-montserrat text-xs uppercase tracking-[0.1em] transition-all duration-300 whitespace-nowrap ${
                    activeCategory === category.id
                      ? 'bg-brand-darkRed text-brand-ivory'
                      : 'text-brand-clayRed/70 hover:text-brand-dustyBlue hover:bg-brand-dustyBlue/10'
                  } ${isRTL ? 'flex-row-reverse' : ''}`}
                  data-cursor-hover
                >
                  <span className="text-sm">{category.icon}</span>
                  {isRTL ? category.nameAr : category.name}
                </button>
              ))}
            </div>

            {/* Mobile Filter Button */}
            <button
              onClick={() => setIsFilterOpen(true)}
              className={`md:hidden flex items-center gap-2 font-montserrat text-xs uppercase tracking-[0.15em] text-brand-darkRed ${isRTL ? 'flex-row-reverse' : ''}`}
              data-cursor-hover
            >
              <FiFilter className="w-4 h-4" />
              {isRTL ? 'التصفية' : 'Filter'}
            </button>

            {/* Count */}
            <span className="font-montserrat text-xs text-brand-clayRed/60 tracking-wide">
              {filteredAccessories.length} {isRTL ? 'منتج' : 'Products'}
            </span>
          </div>

          {/* Price + stone filters — desktop */}
          <div
            className={`hidden md:flex flex-wrap items-end gap-6 gap-y-4 border-t border-brand-stone/25 py-4 ${isRTL ? 'flex-row-reverse' : ''}`}
          >
            <div className="flex flex-col gap-1.5">
              <span className="font-montserrat text-[10px] uppercase tracking-[0.2em] text-brand-clayRed/55">
                {isRTL ? 'السعر' : 'Price'}
              </span>
              <select
                value={priceRange}
                onChange={(e) => setPriceAndUrl(e.target.value as PriceRangeId)}
                className="min-w-[200px] cursor-pointer border border-brand-stone/40 bg-white px-3 py-2 font-montserrat text-xs tracking-wide text-brand-darkRed focus:border-brand-dustyBlue focus:outline-none"
                aria-label={isRTL ? 'تصفية حسب السعر' : 'Filter by price'}
              >
                {PRICE_RANGE_OPTIONS.map((opt) => (
                  <option key={opt.id} value={opt.id}>
                    {isRTL ? opt.labelAr : opt.labelEn}
                  </option>
                ))}
              </select>
            </div>
            <div className="min-w-0 flex-1">
              <span className="font-montserrat text-[10px] uppercase tracking-[0.2em] text-brand-clayRed/55">
                {isRTL ? 'نوع الحجر' : 'Stone type'}
              </span>
              <div className={`mt-2 flex flex-wrap gap-2 ${isRTL ? 'justify-end' : ''}`}>
                {STONE_OPTIONS.map((st) => {
                  const on = selectedStones.includes(st.id)
                  return (
                    <button
                      key={st.id}
                      type="button"
                      onClick={() => toggleStoneAndUrl(st.id)}
                      className={`rounded-sm border px-2.5 py-1.5 font-montserrat text-[11px] uppercase tracking-[0.08em] transition-colors ${
                        on
                          ? 'border-brand-darkRed bg-brand-darkRed text-brand-ivory'
                          : 'border-brand-stone/40 text-brand-clayRed hover:border-brand-dustyBlue hover:text-brand-dustyBlue'
                      }`}
                      data-cursor-hover
                    >
                      {isRTL ? st.labelAr : st.labelEn}
                    </button>
                  )
                })}
              </div>
            </div>
            {hasExtraFilters && (
              <button
                type="button"
                onClick={clearPriceAndStoneFilters}
                className="shrink-0 font-montserrat text-[11px] uppercase tracking-[0.12em] text-brand-dustyBlue underline-offset-4 hover:underline"
                data-cursor-hover
              >
                {isRTL ? 'مسح السعر والحجر' : 'Clear price & stone'}
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Category Description */}
      {activeTab && activeTab.id !== 'all' && (
        <section className="py-8 bg-brand-stone/5">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex items-center gap-4 ${isRTL ? 'flex-row-reverse text-right' : ''}`}
            >
              <span className="text-4xl">{activeTab.icon}</span>
              <div>
                  <h2 className="font-montserrat text-2xl text-brand-darkRed">
                  {isRTL ? activeTab.nameAr : activeTab.name}
                </h2>
                <p className="font-montserrat text-sm text-brand-clayRed/70 tracking-wide">
                  {isRTL ? activeTab.descriptionAr : activeTab.description}
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Products Grid — Abaya Charms: 1 hero image + 2×5 grid */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-6 lg:px-12">
          {isAbayaCharmsLayout ? (
            <div
              className={`flex flex-col gap-10 lg:gap-14 lg:items-start ${isRTL ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
            >
              <div className="relative w-full lg:w-[44%] lg:max-w-[520px] shrink-0 lg:sticky lg:top-28">
                <div className="relative aspect-[9/16] w-full overflow-hidden bg-brand-stone/15 md:aspect-[9/16] lg:min-h-[min(920px,78vh)] lg:aspect-auto">
                  <Image
                    src={ACCESSORY_IMAGE_ABAYA_CHARMS_HERO}
                    alt={isRTL ? 'تعليقات العباءة' : 'Abaya charms'}
                    fill
                    className="img-zoom object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 44vw"
                    priority
                  />
                </div>
              </div>
              <div className="min-w-0 flex-1">
                <motion.div layout className="grid grid-cols-2 gap-4 md:gap-6 lg:gap-8">
                  <AnimatePresence mode="popLayout">
                    {filteredAccessories.map((accessory, index) => (
                      <AccessoryCard
                        key={accessory.id}
                        accessory={accessory}
                        index={index}
                        hoveredProduct={hoveredProduct}
                        setHoveredProduct={setHoveredProduct}
                        formatPrice={formatPrice}
                        isRTL={isRTL}
                      />
                    ))}
                  </AnimatePresence>
                </motion.div>
              </div>
            </div>
          ) : (
            <motion.div
              layout
              className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8"
            >
              <AnimatePresence mode="popLayout">
                {filteredAccessories.map((accessory, index) => (
                  <AccessoryCard
                    key={accessory.id}
                    accessory={accessory}
                    index={index}
                    hoveredProduct={hoveredProduct}
                    setHoveredProduct={setHoveredProduct}
                    formatPrice={formatPrice}
                    isRTL={isRTL}
                  />
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </section>

      {/* Mobile Filter Drawer */}
      <AnimatePresence>
        {isFilterOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50"
              onClick={() => setIsFilterOpen(false)}
            />
            <motion.div
              initial={{ x: isRTL ? '-100%' : '100%' }}
              animate={{ x: 0 }}
              exit={{ x: isRTL ? '-100%' : '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className={`fixed ${isRTL ? 'left-0' : 'right-0'} top-0 bottom-0 w-80 bg-white z-50 overflow-y-auto`}
            >
              <div className="p-6">
                <div className={`flex items-center justify-between mb-8 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <p className="font-montserrat text-2xl text-brand-darkRed">
                    {isRTL ? 'التصنيفات' : 'Categories'}
                  </p>
                  <button
                    onClick={() => setIsFilterOpen(false)}
                    className="text-brand-darkRed"
                    data-cursor-hover
                  >
                    <FiX className="w-6 h-6" />
                  </button>
                </div>

                <div className="space-y-2">
                  <div className="mb-6 space-y-3 border-b border-brand-stone/20 pb-6">
                    <p className="font-montserrat text-[10px] uppercase tracking-[0.2em] text-brand-clayRed/55">
                      {isRTL ? 'السعر' : 'Price'}
                    </p>
                    <select
                      value={priceRange}
                      onChange={(e) => setPriceAndUrl(e.target.value as PriceRangeId)}
                      className="w-full cursor-pointer border border-brand-stone/40 bg-white px-3 py-2.5 font-montserrat text-sm text-brand-darkRed"
                      aria-label={isRTL ? 'السعر' : 'Price'}
                    >
                      {PRICE_RANGE_OPTIONS.map((opt) => (
                        <option key={opt.id} value={opt.id}>
                          {isRTL ? opt.labelAr : opt.labelEn}
                        </option>
                      ))}
                    </select>
                    <p className="mt-4 font-montserrat text-[10px] uppercase tracking-[0.2em] text-brand-clayRed/55">
                      {isRTL ? 'نوع الحجر' : 'Stone type'}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {STONE_OPTIONS.map((st) => {
                        const on = selectedStones.includes(st.id)
                        return (
                          <button
                            key={st.id}
                            type="button"
                            onClick={() => toggleStoneAndUrl(st.id)}
                            className={`rounded-sm border px-2 py-1.5 font-montserrat text-[10px] uppercase tracking-[0.06em] ${
                              on
                                ? 'border-brand-darkRed bg-brand-darkRed text-brand-ivory'
                                : 'border-brand-stone/40 text-brand-clayRed'
                            }`}
                          >
                            {isRTL ? st.labelAr : st.labelEn}
                          </button>
                        )
                      })}
                    </div>
                    {hasExtraFilters && (
                      <button
                        type="button"
                        onClick={() => {
                          clearPriceAndStoneFilters()
                        }}
                        className="mt-3 w-full border border-brand-stone/30 py-2 font-montserrat text-[11px] uppercase tracking-[0.1em] text-brand-dustyBlue"
                      >
                        {isRTL ? 'مسح السعر والحجر' : 'Clear price & stone'}
                      </button>
                    )}
                  </div>

                  <p className="mb-3 font-montserrat text-[10px] uppercase tracking-[0.2em] text-brand-clayRed/55">
                    {isRTL ? 'التصنيف' : 'Category'}
                  </p>
                  {accessoryCategories.map((category) => (
                    <button
                      key={category.id}
                      type="button"
                      onClick={() => {
                        setCategoryAndUrl(category.id)
                        setIsFilterOpen(false)
                      }}
                      className={`w-full flex items-center gap-3 px-4 py-3 font-montserrat text-sm tracking-wide transition-colors ${isRTL ? 'flex-row-reverse text-right' : ''} ${
                        activeCategory === category.id
                          ? 'bg-brand-darkRed text-brand-ivory'
                          : 'text-brand-clayRed hover:bg-brand-dustyBlue/10'
                      }`}
                      data-cursor-hover
                    >
                      <span>{category.icon}</span>
                      {isRTL ? category.nameAr : category.name}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

function AccessoryCard({ 
  accessory, 
  index, 
  hoveredProduct, 
  setHoveredProduct, 
  formatPrice,
  isRTL 
}: { 
  accessory: Accessory
  index: number
  hoveredProduct: string | null
  setHoveredProduct: (id: string | null) => void
  formatPrice: (price: number) => string
  isRTL: boolean
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-10%' })
  const catInfo = accessoryCategories.find((c) => c.id === accessory.category)
  const pathname = usePathname()
  const router = useRouter()

  const navigateToAccessoryPdp = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    const { locale } = stripLocaleFromPathname(pathname || '/')
    router.push(localizedPath(locale, `/accessories/${accessory.id}`))
  }

  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <LocaleLink
        href={`/accessories/${accessory.id}`}
        data-cursor-hover
        onClick={() =>
          trackEvent('select_item', {
            item_id: accessory.id,
            item_name: isRTL ? accessory.nameAr : accessory.name,
            item_category: accessory.category,
          })
        }
      >
        <div
          className="group relative"
          onMouseEnter={() => setHoveredProduct(accessory.id)}
          onMouseLeave={() => setHoveredProduct(null)}
        >
          {/* Image Container */}
          <div className="relative aspect-[9/16] overflow-hidden bg-[#f5f5f5] mb-4">
            <Image
              src={accessory.images[0]}
              alt={isRTL ? accessory.nameAr : accessory.name}
              fill
              className="pointer-events-none img-zoom object-cover object-top transition-all duration-700 group-hover:scale-105"
            />
            
            {/* Quick Actions — above stretch link / quick bar */}
            <div className={`absolute top-4 ${isRTL ? 'left-4' : 'right-4'} z-[20] flex flex-col gap-2 opacity-0 transition-opacity group-hover:opacity-100`}>
              <FavoriteHeartButton
                id={accessory.id}
                name={isRTL ? accessory.nameAr : accessory.name}
                price={accessory.price}
                image={accessory.images[0] ?? ''}
                category={isRTL ? catInfo?.nameAr ?? 'إكسسوارات' : catInfo?.name ?? 'Accessories'}
                href={`/accessories/${accessory.id}`}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-brand-darkRed shadow-lg transition-colors hover:bg-brand-dustyBlue hover:text-white"
              />
            </div>

            {/* Opens product PDP (same slug as card link) */}
            <div className="absolute bottom-0 left-0 right-0 z-[15] translate-y-full p-4 transition-transform duration-500 group-hover:translate-y-0">
              <button
                type="button"
                onClick={(e) => {
                  trackEvent('select_item', {
                    item_id: accessory.id,
                    item_name: isRTL ? accessory.nameAr : accessory.name,
                    item_category: accessory.category,
                  })
                  navigateToAccessoryPdp(e)
                }}
                className={`flex w-full cursor-pointer items-center justify-center gap-2 bg-brand-darkRed py-3 font-montserrat text-xs uppercase tracking-[0.15em] text-white hover:bg-brand-dustyBlue transition-colors ${isRTL ? 'flex-row-reverse' : ''}`}
              >
                <FiShoppingBag className="w-4 h-4 shrink-0" aria-hidden />
                {isRTL ? 'عرض المنتج' : 'View product'}
              </button>
            </div>

            {/* Tags */}
            <div className={`absolute top-4 ${isRTL ? 'right-4' : 'left-4'} flex flex-col gap-2`}>
              {accessory.isNew && (
                <span className="px-3 py-1 bg-brand-darkRed text-brand-ivory font-montserrat text-[10px] uppercase tracking-[0.15em]">
                  {isRTL ? 'جديد' : 'New'}
                </span>
              )}
              {accessory.isBestseller && (
                <span className="px-3 py-1 bg-brand-clayRed text-white font-montserrat text-[10px] uppercase tracking-[0.15em]">
                  {isRTL ? 'الأكثر مبيعاً' : 'Bestseller'}
                </span>
              )}
              {accessory.isLimitedEdition && (
                <span className="px-3 py-1 border border-brand-darkRed/90 bg-white/95 text-brand-darkRed font-montserrat text-[10px] uppercase tracking-[0.15em]">
                  {isRTL ? 'إصدار محدود' : 'Limited Edition'}
                </span>
              )}
            </div>
          </div>

          {/* Product Info */}
          <div className={isRTL ? 'text-right' : ''}>
            <span className="font-montserrat text-[10px] uppercase tracking-[0.2em] text-brand-dustyBlue mb-1 block">
              {isRTL 
                ? accessoryCategories.find(c => c.id === accessory.category)?.nameAr 
                : accessoryCategories.find(c => c.id === accessory.category)?.name}
            </span>
            <h3 className="font-montserrat text-sm text-brand-darkRed mb-1 tracking-wide group-hover:text-brand-dustyBlue transition-colors">
              {isRTL ? accessory.nameAr : accessory.name}
            </h3>
            <p className="font-montserrat text-sm text-brand-clayRed/70 tracking-wide">
              {formatPrice(accessory.price)}
            </p>
          </div>

          {/* Color Options */}
          <div className={`flex gap-1.5 mt-3 ${isRTL ? 'justify-end' : ''}`}>
            {accessory.colors.slice(0, 4).map((color) => (
              <div
                key={color.name}
                className="w-3 h-3 rounded-full border border-brand-stone/50"
                style={{ backgroundColor: color.hex }}
                title={isRTL ? color.nameAr : color.name}
              />
            ))}
            {accessory.colors.length > 4 && (
              <span className="font-montserrat text-[10px] text-brand-clayRed/50 ml-1">
                +{accessory.colors.length - 4}
              </span>
            )}
          </div>
        </div>
      </LocaleLink>
    </motion.div>
  )
}
