'use client'

import { useState, useRef, useEffect, useMemo, useCallback } from 'react'
import { useSearchParams, useRouter, usePathname } from 'next/navigation'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import LocaleLink from '@/components/LocaleLink'
import AppPageWayfinding from '@/components/AppPageWayfinding'
import Image from 'next/image'
import { FiFilter, FiX, FiShoppingBag } from 'react-icons/fi'
import FavoriteHeartButton from '@/components/FavoriteHeartButton'
import { WISHLIST_HEART_GLASS_CLASS } from '@/components/ProductWishlistHeart'
import NoTranslate from '@/components/NoTranslate'
import QuickBuy from '@/components/QuickBuy'
import { accessoryDisplaySize } from '@/lib/accessories/accessorySizeLabel'
import {
  accessories,
  isAccessoryShopVisible,
  visibleAccessoryCategories,
  Accessory,
} from '@/data/accessories'
import { useCurrency } from '@/lib/currency/CurrencyContext'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { commerceUi, type CommerceUi } from '@/lib/i18n/commerceUi'
import { type AppLocale } from '@/lib/i18n/routing'
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
import { resolveAccessoryCategoryId } from '@/lib/accessories/accessoryRouteAliases'
import { getAccessoryCarouselAlt, buildAccessoriesCollectionJsonLd } from '@/lib/accessories/accessoryJsonLd'
import { getLocalizedAccessoryDisplayName } from '@/lib/accessories/accessoryCatalogCopyI18n'
import { isWebshopPicturePath, productImageSrc } from '@/lib/products/shopImage'
import { SITE_CONTENT_TOP_PAD, SITE_HEADER_STICKY_TOP } from '@/lib/ui/editorialPageChrome'
import { glassDrawer, glassDrawerWash, glassTextMuted, glassTextTitle } from '@/lib/ui/glassClasses'
import { ctaPrimary, ctaSecondaryOnLight } from '@/lib/ui/ctaClasses'
import { shopStrandsCta } from '@/lib/i18n/strandsBrandLock'
import { getKeepExploringLine } from '@/lib/i18n/keepExploringCopyI18n'
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
  const [quickBuyAccessory, setQuickBuyAccessory] = useState<Accessory | null>(null)
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const categoryScrollRef = useRef<HTMLDivElement>(null)
  const { formatPrice } = useCurrency()
  const { isRTL, language } = useLanguage()
  const ui = commerceUi(language)

  const shopAccessories = useMemo(() => accessories.filter(isAccessoryShopVisible), [])

  const colorOptionIds = useMemo(
    () => new Set(buildAccessoryColorOptions(shopAccessories).map((c) => c.id)),
    [shopAccessories],
  )

  useEffect(() => {
    if (!searchParams) return
    const raw = searchParams.get('type') ?? searchParams.get('category')
    if (raw) {
      const id = resolveAccessoryCategoryId(raw)
      if (visibleAccessoryCategories.some((c) => c.id === id && id !== 'all')) {
        setActiveCategory(id)
      } else {
        // Hidden categories (e.g. bracelets) fall back to All Accessories and clean the URL.
        setActiveCategory('all')
        const p = new URLSearchParams(searchParams.toString())
        p.delete('type')
        p.delete('category')
        const q = p.toString()
        router.replace(q ? `${pathname}?${q}` : pathname, { scroll: false })
      }
    } else {
      setActiveCategory('all')
    }
    setPriceRange(parsePriceParam(searchParams.get('price')))
    setSelectedStones(parseStonesParam(searchParams.get('stones')))
    setSelectedColors(parseColorsParam(searchParams.get('colors'), colorOptionIds))
  }, [searchParams, colorOptionIds, pathname, router])

  useEffect(() => {
    const scroller = categoryScrollRef.current
    if (!scroller) return
    const active = scroller.querySelector<HTMLElement>('[aria-selected="true"]')
    active?.scrollIntoView({ inline: 'center', block: 'nearest', behavior: 'smooth' })
  }, [activeCategory])

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
      applyAccessoryFilters(shopAccessories, {
        categoryId: activeCategory,
        priceRange,
        stones: selectedStones,
        colors: selectedColors,
      }),
    [shopAccessories, activeCategory, priceRange, selectedStones, selectedColors]
  )

  const hasExtraFilters = priceRange !== 'all' || selectedStones.length > 0

  const categoryLabel = useCallback(
    (category: (typeof visibleAccessoryCategories)[number]) =>
      isRTL ? category.nameAr : category.name,
    [isRTL],
  )

  const activeTab = visibleAccessoryCategories.find(c => c.id === activeCategory)
  const isViewingAccessoriesStrands = /strand/i.test(activeCategory)

  const collectionJsonLd = useMemo(
    () => buildAccessoriesCollectionJsonLd(shopAccessories, language),
    [shopAccessories, language],
  )

  return (
    <div className={`min-h-screen bg-brand-pageCanvas `}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      {/* Hero Banner */}
      <section className={`relative overflow-hidden border-b border-brand-stone/30 bg-brand-pageCanvas pb-5 md:pb-6 ${SITE_CONTENT_TOP_PAD}`}>
        <div className="container mx-auto px-6 lg:px-12">
          <div className={`relative flex flex-col justify-end text-brand-darkRed text-start`}>
            {/* Back Button */}
            <motion.div
              initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-3"
            >
              <AppPageWayfinding
                rtl={isRTL}
                segments={[
                  { label: ui.common.home, href: '/home' },
                  { label: ui.common.accessories },
                ]}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-start"
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

      {/* Collection layout — category sidebar + product grid */}
      <section className="border-b border-brand-stone/30 bg-brand-pageCanvas">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Mobile toolbar — category strip + refine drawer */}
          <div
            className={`sticky ${SITE_HEADER_STICKY_TOP} z-40 border-b border-brand-stone/25 bg-brand-pageCanvas md:hidden text-start`}
          >
            <div
              className={`flex items-center justify-between gap-3 py-3 `}
            >
              <p className="min-w-0 truncate font-montserrat text-[10px] uppercase tracking-[0.15em] text-brand-darkRed">
                {activeTab ? categoryLabel(activeTab) : ui.shop.productCategories}
              </p>
              <button
                type="button"
                onClick={() => setIsFilterOpen(true)}
                className={`flex shrink-0 items-center gap-2 font-montserrat text-[10px] uppercase tracking-[0.15em] text-brand-darkRed `}
                data-cursor-hover
                aria-expanded={isFilterOpen}
                aria-haspopup="dialog"
              >
                <FiFilter className="h-4 w-4" aria-hidden />
                {ui.shop.refine}
              </button>
            </div>
            <div
              className={`relative pb-3 text-start`}
            >
              <div
                ref={categoryScrollRef}
                className={`flex snap-x snap-mandatory gap-1 overflow-x-auto overscroll-x-contain [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden `}
                role="tablist"
                aria-label={ui.shop.productCategories}
              >
                {visibleAccessoryCategories.map((category) => {
                  const active = activeCategory === category.id
                  return (
                    <button
                      key={category.id}
                      type="button"
                      role="tab"
                      aria-selected={active}
                      onClick={() => setCategoryAndUrl(category.id)}
                      className={`snap-start shrink-0 whitespace-nowrap px-3 py-2 font-montserrat text-[10px] uppercase tracking-[0.1em] transition-all duration-300 ${
 active
 ? 'bg-brand-darkRed text-brand-ivory'
 : 'text-brand-clayRed/70 hover:bg-brand-dustyBlue/10 hover:text-brand-dustyBlue'
 }`}
                      data-cursor-hover
                    >
                      {categoryLabel(category)}
                    </button>
                  )
                })}
              </div>
              <div
                className={`pointer-events-none absolute inset-y-0 w-5 bg-gradient-to-r from-brand-pageCanvas to-transparent start-0 rtl:bg-gradient-to-l`}
                aria-hidden
              />
              <div
                className={`pointer-events-none absolute inset-y-0 w-5 bg-gradient-to-l from-brand-pageCanvas to-transparent end-0 rtl:bg-gradient-to-r`}
                aria-hidden
              />
            </div>
          </div>

          <div
            className={`flex gap-10 pt-3 pb-8 md:py-8 lg:gap-12 lg:pt-4 lg:pb-10 `}
          >
            {/* Category + refine sidebar */}
            <aside
              className={`hidden w-52 shrink-0 md:block lg:w-56 xl:w-64 text-start`}
              aria-label={ui.shop.productCategories}
            >
              <div className="sticky top-24 space-y-8">
                <div>
                  <p className="mb-4 font-montserrat text-[10px] uppercase tracking-[0.22em] text-brand-clayRed/55">
                    {ui.shop.productCategories}
                  </p>
                  <ul className="space-y-1">
                    {visibleAccessoryCategories.map((category) => {
                      const active = activeCategory === category.id
                      return (
                        <li key={category.id}>
                          <button
                            type="button"
                            onClick={() => setCategoryAndUrl(category.id)}
                            className={`flex w-full items-center gap-2.5 px-3 py-2.5 font-montserrat text-sm tracking-wide transition-colors ${
 'text-start'
 } ${
 active
 ? 'bg-brand-darkRed text-brand-ivory'
 : 'text-brand-clayRed/80 hover:bg-brand-dustyBlue/10 hover:text-brand-dustyBlue'
 }`}
                            data-cursor-hover
                          >
                            <span className="text-base leading-none" aria-hidden>
                              {category.icon}
                            </span>
                            <span className="min-w-0 flex-1 leading-snug">{categoryLabel(category)}</span>
                          </button>
                        </li>
                      )
                    })}
                  </ul>
                </div>

                <div className="border-t border-brand-stone/25 pt-6">
                  <p className="mb-3 font-montserrat text-[10px] uppercase tracking-[0.22em] text-brand-clayRed/55">
                    {ui.shop.refine}
                  </p>
                  <div className="space-y-5">
                    <div>
                      <label
                        htmlFor="accessories-price-filter"
                        className="mb-1.5 block font-montserrat text-[10px] uppercase tracking-[0.16em] text-brand-clayRed/50"
                      >
                        {ui.accessories.price}
                      </label>
                      <select
                        id="accessories-price-filter"
                        value={priceRange}
                        onChange={(e) => setPriceAndUrl(e.target.value as PriceRangeId)}
                        className="w-full cursor-pointer border border-brand-darkRed/30 bg-white px-3 py-2 font-montserrat text-xs tracking-wide text-brand-darkRed focus:border-brand-clayRed focus:outline-none focus:ring-1 focus:ring-brand-clayRed/25"
                      >
                        {PRICE_RANGE_OPTIONS.map((opt) => (
                          <option key={opt.id} value={opt.id}>
                            {isRTL ? opt.labelAr : opt.labelEn}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <p className="mb-2 font-montserrat text-[10px] uppercase tracking-[0.16em] text-brand-clayRed/50">
                        {ui.accessories.stoneType}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {STONE_OPTIONS.map((st) => {
                          const on = selectedStones.includes(st.id)
                          return (
                            <button
                              key={st.id}
                              type="button"
                              onClick={() => toggleStoneAndUrl(st.id)}
                              className={`rounded-sm border px-2 py-1 font-montserrat text-[10px] uppercase tracking-[0.06em] transition-colors ${
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
                        className="font-montserrat text-[11px] uppercase tracking-[0.12em] text-brand-dustyBlue underline-offset-4 hover:underline"
                        data-cursor-hover
                      >
                        {ui.accessories.clearFilters}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </aside>

            <div className="min-w-0 flex-1">
              {activeTab && activeTab.id !== 'all' && (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mb-8 flex items-start gap-4 border-y border-brand-stone/25 py-5 text-start`}
                >
                  <span className="text-3xl" aria-hidden>
                    {activeTab.icon}
                  </span>
                  <div>
                    <h2 className="font-rozha text-[clamp(1.75rem,4vw,2.75rem)] leading-[1.08] text-brand-darkRed">
                      {isRTL ? activeTab.nameAr : activeTab.name}
                    </h2>
                    <p className="mt-1 font-montserrat text-sm tracking-wide text-brand-clayRed/70">
                      {isRTL ? activeTab.descriptionAr : activeTab.description}
                    </p>
                  </div>
                </motion.div>
              )}

              {filteredAccessories.length === 0 ? (
                <div className={`py-16 text-start`}>
                  <p className="font-montserrat text-sm tracking-wide text-brand-clayRed/70">
                    {ui.shop.noPiecesInChapter}
                  </p>
                  <div
                    className={`mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap ${
 isRTL ? 'sm:justify-end md:justify-center' : 'sm:justify-center'
 }`}
                  >
                    <button
                      type="button"
                      onClick={resetAllFiltersAndUrl}
                      className={ctaPrimary}
                      data-cursor-hover
                    >
                      {ui.accessories.clearFilters}
                    </button>
                    <LocaleLink
                      href="/shop"
                      className={ctaSecondaryOnLight}
                      data-cursor-hover
                    >
                      {ui.notFound.shopCollection}
                    </LocaleLink>
                    {isViewingAccessoriesStrands ? (
                      <LocaleLink
                        href="/personalisation"
                        className="inline-flex min-h-[44px] items-center justify-center px-2 font-montserrat text-[11px] uppercase tracking-[0.16em] text-brand-dustyBlue underline-offset-4 transition-colors hover:text-brand-darkRed hover:underline"
                        data-cursor-hover
                      >
                        {ui.cart.personalisation}
                      </LocaleLink>
                    ) : (
                      <LocaleLink
                        href="/strands"
                        className="inline-flex min-h-[44px] items-center justify-center px-2 font-montserrat text-[11px] uppercase tracking-[0.16em] text-brand-dustyBlue underline-offset-4 transition-colors hover:text-brand-darkRed hover:underline"
                        data-cursor-hover
                      >
                        <NoTranslate>{shopStrandsCta(language, 'title')}</NoTranslate>
                      </LocaleLink>
                    )}
                  </div>
                </div>
              ) : (
                <>
                <motion.div
                  layout
                  className="grid grid-cols-2 items-stretch gap-x-3 gap-y-8 md:gap-x-6 md:gap-y-10 xl:grid-cols-3 xl:gap-8"
                >
                  <AnimatePresence mode="popLayout">
                    {filteredAccessories.map((accessory, index) => (
                      <AccessoryCard
                        key={accessory.id}
                        accessory={accessory}
                        index={index}
                        formatPrice={formatPrice}
                        isRTL={isRTL}
                        language={language}
                        ui={ui}
                        onQuickBuy={setQuickBuyAccessory}
                      />
                    ))}
                  </AnimatePresence>
                </motion.div>

                <aside
                  className={`mt-14 border-t border-brand-stone/25 pt-10 md:mt-16 md:pt-12 ${
 'text-start'
 }`}
                  aria-label={ui.cart.continueShopping}
                >
                  <p className="font-montserrat text-[11px] font-medium uppercase tracking-[0.2em] text-brand-dustyBlue">
                    {ui.accessories.collectionEyebrow}
                  </p>
                  <h2 className="mt-3 font-rozha text-[clamp(1.75rem,4vw,2.5rem)] leading-[1.08] text-brand-darkRed">
                    {ui.cart.continueShopping}
                  </h2>
                  <p
                    className={`mt-3 max-w-lg font-montserrat text-sm leading-relaxed tracking-wide text-brand-clayRed/70 ${
 isRTL ? 'mr-0' : 'mx-auto'
 }`}
                  >
                    {getKeepExploringLine(language, 'throughTheHouse')}
                  </p>
                  <div
                    className={`mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap ${
 isRTL ? 'sm:justify-end md:justify-center' : 'sm:justify-center'
 }`}
                  >
                    <LocaleLink
                      href="/shop"
                      className={ctaPrimary}
                      data-cursor-hover
                      data-analytics-event="click_accessories_continue_shop"
                      data-analytics-section="accessories-keep-exploring"
                    >
                      {ui.notFound.shopCollection}
                    </LocaleLink>
                    {isViewingAccessoriesStrands ? (
                      <LocaleLink
                        href="/personalisation"
                        className={ctaSecondaryOnLight}
                        data-cursor-hover
                        data-analytics-event="click_accessories_continue_personalisation"
                        data-analytics-section="accessories-keep-exploring"
                      >
                        {ui.cart.personalisation}
                      </LocaleLink>
                    ) : (
                      <LocaleLink
                        href="/strands"
                        className={ctaSecondaryOnLight}
                        data-cursor-hover
                        data-analytics-event="click_accessories_continue_strands"
                        data-analytics-section="accessories-keep-exploring"
                      >
                        <NoTranslate>{shopStrandsCta(language, 'title')}</NoTranslate>
                      </LocaleLink>
                    )}
                    <LocaleLink
                      href="/home"
                      className="inline-flex min-h-[44px] items-center justify-center px-2 font-montserrat text-[11px] uppercase tracking-[0.16em] text-brand-dustyBlue underline-offset-4 transition-colors hover:text-brand-darkRed hover:underline"
                      data-cursor-hover
                      data-analytics-event="click_accessories_continue_home"
                      data-analytics-section="accessories-keep-exploring"
                    >
                      {ui.common.backToHome}
                    </LocaleLink>
                  </div>
                </aside>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {quickBuyAccessory ? (
        <QuickBuy
          isOpen
          onClose={() => setQuickBuyAccessory(null)}
          product={{
            id: quickBuyAccessory.id,
            name: quickBuyAccessory.name,
            nameAr: quickBuyAccessory.nameAr,
            price: quickBuyAccessory.price,
            images: quickBuyAccessory.images,
            sizes: [accessoryDisplaySize(quickBuyAccessory.category, ui.accessories)],
            colors: quickBuyAccessory.colors,
            category: quickBuyAccessory.category,
            productUrl: `/accessories/${quickBuyAccessory.id}`,
          }}
        />
      ) : null}

      {/* Mobile Filter Drawer */}
      <AnimatePresence>
        {isFilterOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
              onClick={() => setIsFilterOpen(false)}
            />
            <motion.div
              initial={{ x: isRTL ? '100%' : '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: isRTL ? '100%' : '-100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className={`fixed ${isRTL ? 'right-0 border-l' : 'left-0 border-r'} top-0 bottom-0 z-50 w-[min(100vw,20rem)] overflow-y-auto ${glassDrawer}`}
            >
              <div className={glassDrawerWash} aria-hidden />
              <div className="relative z-[1] p-6">
                <div className={`mb-8 flex items-center justify-between `}>
                  <p className={`font-montserrat text-2xl ${glassTextTitle}`}>{ui.shop.refine}</p>
                  <button
                    type="button"
                    onClick={() => setIsFilterOpen(false)}
                    className={glassTextTitle}
                    data-cursor-hover
                    aria-label={ui.common.close}
                  >
                    <FiX className="h-6 w-6" />
                  </button>
                </div>

                <p className={`mb-3 font-montserrat text-[10px] uppercase tracking-[0.2em] ${glassTextMuted}`}>
                  {ui.shop.productCategories}
                </p>
                <div className="mb-8 space-y-1">
                  {visibleAccessoryCategories.map((category) => (
                    <button
                      key={category.id}
                      type="button"
                      onClick={() => {
                        setCategoryAndUrl(category.id)
                        setIsFilterOpen(false)
                      }}
                      className={`flex w-full items-center gap-3 px-4 py-3 font-montserrat text-sm tracking-wide transition-colors text-start ${
 activeCategory === category.id
 ? 'bg-brand-darkRed text-brand-ivory'
 : 'text-brand-clayRed hover:bg-brand-dustyBlue/10'
 }`}
                      data-cursor-hover
                    >
                      <span aria-hidden>{category.icon}</span>
                      {categoryLabel(category)}
                    </button>
                  ))}
                </div>

                <div className="space-y-4 border-t border-brand-stone/20 pt-6">
                  <p className="font-montserrat text-[10px] uppercase tracking-[0.2em] text-brand-clayRed/55">
                    {ui.accessories.price}
                  </p>
                  <select
                    value={priceRange}
                    onChange={(e) => setPriceAndUrl(e.target.value as PriceRangeId)}
                    className="w-full cursor-pointer border border-brand-darkRed/30 bg-white px-3 py-2.5 font-montserrat text-sm text-brand-darkRed focus:border-brand-clayRed focus:outline-none focus:ring-1 focus:ring-brand-clayRed/25"
                    aria-label={ui.accessories.price}
                  >
                    {PRICE_RANGE_OPTIONS.map((opt) => (
                      <option key={opt.id} value={opt.id}>
                        {isRTL ? opt.labelAr : opt.labelEn}
                      </option>
                    ))}
                  </select>

                  <p className="pt-2 font-montserrat text-[10px] uppercase tracking-[0.2em] text-brand-clayRed/55">
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
                      className="mt-2 w-full border border-brand-stone/30 py-2 font-montserrat text-[11px] uppercase tracking-[0.1em] text-brand-dustyBlue"
                    >
                      {ui.accessories.clearFilters}
                    </button>
                  )}
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
  formatPrice,
  isRTL,
  language,
  ui,
  onQuickBuy,
}: { 
  accessory: Accessory
  index: number
  formatPrice: (price: number, productId?: string) => string
  isRTL: boolean
  language: AppLocale
  ui: CommerceUi
  onQuickBuy: (accessory: Accessory) => void
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-10%' })
  const accessoryName = getLocalizedAccessoryDisplayName(accessory, language)

  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="h-full"
    >
      <LocaleLink
        href={`/accessories/${accessory.id}`}
        data-cursor-hover
        className="block h-full"
        onClick={() =>
          trackEvent('select_item', {
            item_id: accessory.id,
            item_name: accessoryName,
            item_category: accessory.category,
          })
        }
      >
        <div className="group relative flex h-full flex-col border-b-2 border-transparent pb-2 transition-colors duration-200 hover:border-[#6f1524]">
          {/* Image Container — fixed ratio so every tile matches */}
          <div className="relative mb-4 aspect-[3/4] w-full shrink-0 overflow-hidden bg-[#f0ebe6]">
            <FavoriteHeartButton
              id={accessory.id}
              name={accessoryName}
              price={accessory.price}
              image={accessory.images[0] ?? ''}
              category={accessory.category}
              href={`/accessories/${accessory.id}`}
              className={`absolute top-2.5 z-30 ${WISHLIST_HEART_GLASS_CLASS} ${
 'end-2.5 sm:end-3'
 }`}
              iconClassName="h-3.5 w-3.5 sm:h-4 sm:w-4"
            />
            <Image
              src={productImageSrc(accessory.images[0] ?? '')}
              alt={getAccessoryCarouselAlt(accessory, language, isRTL)}
              fill
              sizes="(max-width: 1279px) 50vw, 33vw"
              unoptimized={isWebshopPicturePath(accessory.images[0] ?? '')}
              className="pointer-events-none img-zoom object-cover object-center transition-all duration-700 group-hover:scale-105"
            />
          </div>

          {/* Product Info */}
          <div className="text-start">
            <span className="mb-1 block font-montserrat text-[10px] uppercase tracking-[0.2em] text-brand-dustyBlue">
              {isRTL
                ? visibleAccessoryCategories.find((c) => c.id === accessory.category)?.nameAr
                : visibleAccessoryCategories.find((c) => c.id === accessory.category)?.name}
            </span>
            <h3
              data-product-name="true"
              data-product-name-size="grid"
              className="mb-1.5 line-clamp-3 font-montserrat font-normal text-brand-darkRed transition-colors group-hover:text-brand-dustyBlue"
            >
              {accessoryName}
            </h3>
            <p className="font-montserrat text-sm tracking-wide text-[#6f1524]">{formatPrice(accessory.price, accessory.id)}</p>
          </div>

          {/* Colour indicators — gemstone references, not selectable swatches */}
          <div className={`mt-3 ${PRODUCT_GRID_COLOUR_DOT_ROW} `}>
            {accessory.colors.slice(0, 4).map((color) => (
              <div
                key={color.name}
                className={PRODUCT_GRID_COLOUR_DOT}
                style={softGridColourBeadStyle(color.hex)}
                title={isRTL ? color.nameAr : color.name}
                aria-hidden
              />
            ))}
            {accessory.colors.length > 4 && (
              <span className="font-montserrat text-[10px] text-brand-clayRed/50">
                +{accessory.colors.length - 4}
              </span>
            )}
          </div>

          <div
            className={`mt-auto pt-3 ${PRODUCT_GRID_CTA_ROW} `}
          >
            <span className={PRODUCT_GRID_CTA_LINK}>
              {ui.shop.discover}
            </span>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                onQuickBuy(accessory)
              }}
              className={`relative z-20 gap-1 ${PRODUCT_GRID_CTA_LINK} ${PRODUCT_GRID_CTA_LINK_HOVER}`}
              data-cursor-hover
            >
              <FiShoppingBag className="h-3 w-3 shrink-0" aria-hidden />
              {ui.quickBuy.buyNow}
            </button>
          </div>
        </div>
      </LocaleLink>
    </motion.div>
  )
}
