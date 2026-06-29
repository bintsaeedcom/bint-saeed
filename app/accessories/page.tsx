'use client'

import { useState, useRef, useEffect, useMemo, useCallback } from 'react'
import { useSearchParams, useRouter, usePathname } from 'next/navigation'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import LocaleLink from '@/components/LocaleLink'
import AppPageWayfinding from '@/components/AppPageWayfinding'
import Image from 'next/image'
import { FiFilter, FiX, FiShoppingBag } from 'react-icons/fi'
import {
  accessories,
  accessoryCategories,
  Accessory,
  ACCESSORY_IMAGE_ABAYA_CHARMS_HERO,
} from '@/data/accessories'
import { useCurrency } from '@/lib/currency/CurrencyContext'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { commerceUi, type CommerceUi } from '@/lib/i18n/commerceUi'
import { stripLocaleFromPathname, localizedPath, type AppLocale } from '@/lib/i18n/routing'
import {
  applyAccessoryFilters,
  buildAccessoryColorOptions,
  type ColorFilterId,
  type PriceRangeId,
  type StoneFilterId,
  PRICE_RANGE_OPTIONS,
  STONE_OPTIONS,
} from '@/lib/accessories/filterAccessories'
import { trackEvent } from '@/lib/analytics/tracking'
import { withBrandAlt } from '@/lib/products/imageAlt'
import { resolveAccessoryCategoryId } from '@/lib/accessories/accessoryRouteAliases'
import { getAccessoryCarouselAlt, buildAccessoriesCollectionJsonLd } from '@/lib/accessories/accessoryJsonLd'

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

function parseColorsParam(v: string | null, validIds: Set<string>): ColorFilterId[] {
  if (!v?.trim()) return []
  const parts = v.split(',').map((s) => s.trim()).filter(Boolean)
  return parts.filter((p): p is ColorFilterId => validIds.has(p))
}

export default function AccessoriesPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname() ?? '/accessories'
  const [activeCategory, setActiveCategory] = useState('all')
  const [priceRange, setPriceRange] = useState<PriceRangeId>('all')
  const [selectedStones, setSelectedStones] = useState<StoneFilterId[]>([])
  const [selectedColors, setSelectedColors] = useState<ColorFilterId[]>([])
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null)
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const { formatPrice } = useCurrency()
  const { isRTL, language } = useLanguage()
  const ui = commerceUi(language)

  const colorOptions = useMemo(() => buildAccessoryColorOptions(accessories), [])
  const colorOptionIds = useMemo(() => new Set(colorOptions.map((c) => c.id)), [colorOptions])

  useEffect(() => {
    if (!searchParams) return
    const raw = searchParams.get('type') ?? searchParams.get('category')
    if (raw) {
      const id = resolveAccessoryCategoryId(raw)
      if (accessoryCategories.some((c) => c.id === id && id !== 'all')) {
        setActiveCategory(id)
      }
    } else {
      setActiveCategory('all')
    }
    setPriceRange(parsePriceParam(searchParams.get('price')))
    setSelectedStones(parseStonesParam(searchParams.get('stones')))
    setSelectedColors(parseColorsParam(searchParams.get('colors'), colorOptionIds))
  }, [searchParams, colorOptionIds])

  const replaceAccessoryQuery = useCallback(
    (patch: Partial<{
      category: string
      price: PriceRangeId
      stones: StoneFilterId[]
      colors: ColorFilterId[]
    }>) => {
      const cat = patch.category ?? activeCategory
      const pr = patch.price ?? priceRange
      const st = patch.stones ?? selectedStones
      const cl = patch.colors ?? selectedColors
      const p = new URLSearchParams()
      if (cat !== 'all') p.set('type', cat)
      if (pr !== 'all') p.set('price', pr)
      if (st.length > 0) p.set('stones', st.join(','))
      if (cl.length > 0) p.set('colors', cl.join(','))
      const q = p.toString()
      router.replace(q ? `${pathname}?${q}` : pathname, { scroll: false })
    },
    [activeCategory, priceRange, selectedStones, selectedColors, pathname, router]
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

  const toggleColorAndUrl = useCallback(
    (colorId: ColorFilterId) => {
      const next = selectedColors.includes(colorId)
        ? selectedColors.filter((c) => c !== colorId)
        : [...selectedColors, colorId]
      setSelectedColors(next)
      trackEvent('filter_usage', {
        filter_type: 'accessories_color',
        filter_value: colorId,
        filter_state: next.includes(colorId) ? 'enabled' : 'disabled',
        page: 'accessories',
      })
      replaceAccessoryQuery({ colors: next })
    },
    [selectedColors, replaceAccessoryQuery]
  )

  const clearPriceAndStoneFilters = useCallback(() => {
    setPriceRange('all')
    setSelectedStones([])
    setSelectedColors([])
    const p = new URLSearchParams()
    if (activeCategory !== 'all') p.set('type', activeCategory)
    const q = p.toString()
    router.replace(q ? `${pathname}?${q}` : pathname, { scroll: false })
  }, [activeCategory, pathname, router])

  const resetAllFiltersAndUrl = useCallback(() => {
    setActiveCategory('all')
    setPriceRange('all')
    setSelectedStones([])
    setSelectedColors([])
    router.replace(pathname, { scroll: false })
  }, [pathname, router])

  const filteredAccessories = useMemo(
    () =>
      applyAccessoryFilters(accessories, {
        categoryId: activeCategory,
        priceRange,
        stones: selectedStones,
        colors: selectedColors,
      }),
    [activeCategory, priceRange, selectedStones, selectedColors]
  )

  const hasExtraFilters =
    priceRange !== 'all' || selectedStones.length > 0 || selectedColors.length > 0

  const activeTab = accessoryCategories.find(c => c.id === activeCategory)
  const isAbayaStrandsLayout = activeCategory === 'signature-strands'

  const collectionJsonLd = useMemo(() => buildAccessoriesCollectionJsonLd(accessories, language), [language])

  return (
    <div className={`min-h-screen bg-brand-pageCanvas ${isRTL ? 'rtl' : 'ltr'}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      {/* Hero Banner */}
      <section className="relative overflow-hidden border-b border-brand-stone/30 bg-brand-pageCanvas pb-12 pt-24 md:pb-16 md:pt-28">
        <div className="container mx-auto px-6 lg:px-12">
          <div className={`relative flex flex-col justify-end text-brand-darkRed ${isRTL ? 'text-right' : ''}`}>
            {/* Back Button */}
            <motion.div
              initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <AppPageWayfinding
                rtl={isRTL}
                segments={[
                  { label: ui.common.home, href: '/home' },
                  { label: ui.common.accessories },
                ]}
                backLink={{
                  href: '/home',
                  label: ui.common.back,
                  useHistory: true,
                }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className={isRTL ? 'text-right' : ''}
            >
              <span className="mb-4 block font-montserrat text-[10px] font-medium uppercase tracking-[0.28em] text-[#6f1524] sm:tracking-[0.34em]">
                {ui.accessories.collectionEyebrow}
              </span>
              <h1 data-document-h1="true" className="font-rozha text-[clamp(2.75rem,8vw,5.75rem)] uppercase leading-[0.98] tracking-[0.01em] text-brand-darkRed">
                {ui.accessories.collectionTitle}
              </h1>
              <p className="mt-6 max-w-xl font-montserrat text-sm leading-relaxed tracking-wide text-brand-clayRed/85 md:text-base">
                {ui.accessories.collectionIntro}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="sticky top-[50px] z-40 border-b border-brand-stone/30 bg-brand-pageCanvas md:top-16">
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
              {ui.accessories.filter}
            </button>

            {/* Count */}
            <span className="font-montserrat text-xs text-brand-clayRed/60 tracking-wide">
              {filteredAccessories.length} {ui.accessories.products}
            </span>
          </div>

          {/* Price, colour + stone filters — desktop */}
          <div
            className={`hidden md:flex flex-wrap items-end gap-6 gap-y-4 border-t border-brand-stone/25 py-4 ${isRTL ? 'flex-row-reverse' : ''}`}
          >
            <div className="flex flex-col gap-1.5">
              <span className="font-montserrat text-[10px] uppercase tracking-[0.2em] text-brand-clayRed/55">
                {ui.accessories.price}
              </span>
              <select
                value={priceRange}
                onChange={(e) => setPriceAndUrl(e.target.value as PriceRangeId)}
                className="min-w-[200px] cursor-pointer border border-brand-stone/40 bg-white px-3 py-2 font-montserrat text-xs tracking-wide text-brand-darkRed focus:border-brand-dustyBlue focus:outline-none"
                aria-label={ui.accessories.price}
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
                {ui.shopExtras.availableColours}
              </span>
              <div className={`mt-2 flex flex-wrap gap-2 ${isRTL ? 'justify-end' : ''}`}>
                {colorOptions.map((color) => {
                  const on = selectedColors.includes(color.id)
                  return (
                    <button
                      key={color.id}
                      type="button"
                      onClick={() => toggleColorAndUrl(color.id)}
                      className={`flex items-center gap-2 rounded-sm border px-2.5 py-1.5 font-montserrat text-[11px] uppercase tracking-[0.08em] transition-colors ${
                        on
                          ? 'border-brand-darkRed bg-brand-darkRed text-brand-ivory'
                          : 'border-brand-stone/40 text-brand-clayRed hover:border-brand-dustyBlue hover:text-brand-dustyBlue'
                      } ${isRTL ? 'flex-row-reverse' : ''}`}
                      data-cursor-hover
                    >
                      <span
                        className="h-3 w-3 shrink-0 rounded-full border border-brand-stone/50"
                        style={{ backgroundColor: color.hex }}
                        aria-hidden
                      />
                      {isRTL ? color.labelAr : color.labelEn}
                    </button>
                  )
                })}
              </div>
            </div>
            <div className="min-w-0 flex-1">
              <span className="font-montserrat text-[10px] uppercase tracking-[0.2em] text-brand-clayRed/55">
                {ui.accessories.stoneType}
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
                {ui.accessories.clearFilters}
              </button>
            )}
            {(activeCategory !== 'all' || hasExtraFilters) && (
              <button
                type="button"
                onClick={resetAllFiltersAndUrl}
                className="shrink-0 font-montserrat text-[11px] uppercase tracking-[0.12em] text-brand-clayRed/70 underline-offset-4 hover:underline"
                data-cursor-hover
              >
                {ui.shop.categoryAll}
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Category Description */}
      {activeTab && activeTab.id !== 'all' && (
        <section className="bg-brand-stone/5 py-8">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex items-start gap-4 border-y border-brand-stone/25 py-6 ${isRTL ? 'flex-row-reverse text-right' : ''}`}
            >
              <span className="text-4xl">{activeTab.icon}</span>
              <div>
                  <h2 className="font-rozha text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] text-brand-darkRed">
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

      {/* Products Grid — Abaya Strands: 1 hero image + 2×5 grid */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-6 lg:px-12">
          {filteredAccessories.length === 0 ? (
            <div className={`py-16 text-center ${isRTL ? 'text-right' : ''}`}>
              <p className="font-montserrat text-sm tracking-wide text-brand-clayRed/70">
                {ui.shop.noPiecesInChapter}
              </p>
              <button
                type="button"
                onClick={resetAllFiltersAndUrl}
                className="mt-6 font-montserrat text-[11px] uppercase tracking-[0.12em] text-brand-dustyBlue underline-offset-4 hover:underline"
                data-cursor-hover
              >
                {ui.accessories.clearFilters}
              </button>
            </div>
          ) : isAbayaStrandsLayout ? (
            <div
              className={`flex flex-col gap-10 lg:gap-14 lg:items-start ${isRTL ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
            >
              <div className="relative w-full shrink-0 lg:w-[44%] lg:max-w-[520px]">
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-brand-stone/15">
                  <Image
                    src={ACCESSORY_IMAGE_ABAYA_CHARMS_HERO}
                    alt={withBrandAlt(ui.accessories.collectionTitle)}
                    fill
                    className="img-zoom object-contain"
                    sizes="(max-width: 1024px) 100vw, 44vw"
                    priority
                  />
                </div>
              </div>
              <div className="min-w-0 flex-1">
                <motion.div layout className="grid grid-cols-1 gap-6 min-[480px]:grid-cols-2 md:gap-6 lg:gap-8">
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
                        language={language}
                        ui={ui}
                      />
                    ))}
                  </AnimatePresence>
                </motion.div>
              </div>
            </div>
          ) : (
            <motion.div
              layout
              className="grid grid-cols-1 gap-6 min-[480px]:grid-cols-2 md:gap-8 lg:grid-cols-3 xl:grid-cols-4"
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
                    language={language}
                    ui={ui}
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
              className={`fixed ${isRTL ? 'left-0' : 'right-0'} top-0 bottom-0 z-50 w-[min(100vw,20rem)] overflow-y-auto bg-white`}
            >
              <div className="p-6">
                <div className={`flex items-center justify-between mb-8 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <p className="font-montserrat text-2xl text-brand-darkRed">
                    {ui.shop.productCategories}
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
                      {ui.accessories.price}
                    </p>
                    <select
                      value={priceRange}
                      onChange={(e) => setPriceAndUrl(e.target.value as PriceRangeId)}
                      className="w-full cursor-pointer border border-brand-stone/40 bg-white px-3 py-2.5 font-montserrat text-sm text-brand-darkRed"
                      aria-label={ui.accessories.price}
                    >
                      {PRICE_RANGE_OPTIONS.map((opt) => (
                        <option key={opt.id} value={opt.id}>
                          {isRTL ? opt.labelAr : opt.labelEn}
                        </option>
                      ))}
                    </select>
                    <p className="mt-4 font-montserrat text-[10px] uppercase tracking-[0.2em] text-brand-clayRed/55">
                      {ui.shopExtras.availableColours}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {colorOptions.map((color) => {
                        const on = selectedColors.includes(color.id)
                        return (
                          <button
                            key={color.id}
                            type="button"
                            onClick={() => toggleColorAndUrl(color.id)}
                            className={`flex items-center gap-2 rounded-sm border px-2 py-1.5 font-montserrat text-[10px] uppercase tracking-[0.06em] ${
                              on
                                ? 'border-brand-darkRed bg-brand-darkRed text-brand-ivory'
                                : 'border-brand-stone/40 text-brand-clayRed'
                            } ${isRTL ? 'flex-row-reverse' : ''}`}
                          >
                            <span
                              className="h-3 w-3 shrink-0 rounded-full border border-brand-stone/50"
                              style={{ backgroundColor: color.hex }}
                              aria-hidden
                            />
                            {isRTL ? color.labelAr : color.labelEn}
                          </button>
                        )
                      })}
                    </div>
                    <p className="mt-4 font-montserrat text-[10px] uppercase tracking-[0.2em] text-brand-clayRed/55">
                      {ui.accessories.stoneType}
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
                        {ui.accessories.clearFilters}
                      </button>
                    )}
                  </div>

                  <p className="mb-3 font-montserrat text-[10px] uppercase tracking-[0.2em] text-brand-clayRed/55">
                    {ui.shop.productCategories}
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
  isRTL,
  language,
  ui,
}: { 
  accessory: Accessory
  index: number
  hoveredProduct: string | null
  setHoveredProduct: (id: string | null) => void
  formatPrice: (price: number) => string
  isRTL: boolean
  language: AppLocale
  ui: CommerceUi
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-10%' })
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
          className="group relative border-b-2 border-transparent pb-2 transition-colors duration-200 hover:border-[#6f1524]"
          onMouseEnter={() => setHoveredProduct(accessory.id)}
          onMouseLeave={() => setHoveredProduct(null)}
        >
          {/* Image Container */}
          <div className="relative mb-4 aspect-[3/4] overflow-hidden bg-[#f5f5f5]">
            <Image
              src={accessory.images[0]}
              alt={getAccessoryCarouselAlt(accessory, language, isRTL)}
              fill
              className="pointer-events-none img-zoom object-cover object-top transition-all duration-700 group-hover:scale-105"
            />
            
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
                {ui.shop.viewProduct}
              </button>
            </div>

            {/* Tags */}
            <div className={`absolute top-4 ${isRTL ? 'right-4' : 'left-4'} flex flex-col gap-2`}>
              {accessory.isBestseller && (
                <span className="px-3 py-1 bg-brand-clayRed text-white font-montserrat text-[10px] uppercase tracking-[0.15em]">
                  {ui.accessories.products}
                </span>
              )}
              {accessory.isLimitedEdition && (
                <span className="px-3 py-1 border border-brand-darkRed/90 bg-white/95 text-brand-darkRed font-montserrat text-[10px] uppercase tracking-[0.15em]">
                  {ui.accessories.collectionEyebrow}
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
            <h3 data-product-name="true" className="font-montserrat text-sm text-brand-darkRed mb-1 tracking-wide group-hover:text-brand-dustyBlue transition-colors">
              {isRTL ? accessory.nameAr : accessory.name}
            </h3>
            <p className="font-montserrat text-sm tracking-wide text-[#6f1524]">
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
