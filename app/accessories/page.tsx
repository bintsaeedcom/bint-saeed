'use client'

import { useState, useRef, useEffect } from 'react'
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

export default function AccessoriesPage() {
  const searchParams = useSearchParams()
  const [activeCategory, setActiveCategory] = useState('all')
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null)
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const { formatPrice } = useCurrency()
  const { isRTL } = useLanguage()

  useEffect(() => {
    const raw = searchParams.get('type') ?? searchParams.get('category')
    if (!raw) return
    const id = raw.toLowerCase().replace(/_/g, '-')
    if (accessoryCategories.some((c) => c.id === id && id !== 'all')) {
      setActiveCategory(id)
    }
  }, [searchParams])

  const filteredAccessories = activeCategory === 'all'
    ? accessories
    : accessories.filter((a) => a.category === activeCategory)

  const activeTab = accessoryCategories.find(c => c.id === activeCategory)
  const isAbayaCharmsLayout = activeCategory === 'abaya-charms'

  return (
    <div className={`min-h-screen bg-white ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Hero Banner */}
      <section className="relative h-[50vh] md:h-[60vh] bg-brand-darkRed overflow-hidden">
        <Image
          src="/Webshop pictures/accessoiries/banner.png"
          alt="Accessories Collection"
          fill
          className="object-cover opacity-40"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-darkRed via-brand-darkRed/50 to-transparent" />
        
        <div className="relative h-full flex flex-col justify-end pb-16 md:pb-20">
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
                className={`inline-flex items-center gap-2 font-roboto text-xs uppercase tracking-[0.15em] text-white/70 hover:text-white transition-colors group ${isRTL ? 'flex-row-reverse' : ''}`}
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
              <span className="font-roboto text-xs uppercase tracking-[0.4em] text-white/60 mb-4 block">
                {isRTL ? 'مجموعة الإكسسوارات' : 'Accessories Collection'}
              </span>
              <h1 data-document-h1="true" className="font-rozha text-5xl md:text-7xl lg:text-8xl text-white mb-4">
                {isRTL ? 'الإكسسوارات' : 'Accessories'}
              </h1>
              <p className="font-roboto text-base text-white/70 tracking-wide max-w-lg">
                {isRTL
                  ? 'اكتشفي مجموعتنا الراقية من تعليقات العباءة والقلادات والأقراط والأساور وتعليقات الحقائب والهواتف.'
                  : 'Discover our curated collection of abaya charms, necklaces, earrings, bracelets, bag charms, and phone charms.'}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="sticky top-[60px] md:top-[72px] z-40 bg-white border-b border-brand-stone/30">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between py-4">
            {/* Categories - Desktop */}
            <div className={`hidden md:flex items-center gap-4 overflow-x-auto ${isRTL ? 'flex-row-reverse' : ''}`}>
              {accessoryCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 font-roboto text-xs uppercase tracking-[0.1em] transition-all duration-300 whitespace-nowrap ${
                    activeCategory === category.id
                      ? 'bg-brand-darkRed text-white'
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
              className={`md:hidden flex items-center gap-2 font-roboto text-xs uppercase tracking-[0.15em] text-brand-darkRed ${isRTL ? 'flex-row-reverse' : ''}`}
              data-cursor-hover
            >
              <FiFilter className="w-4 h-4" />
              {isRTL ? 'التصفية' : 'Filter'}
            </button>

            {/* Count */}
            <span className="font-roboto text-xs text-brand-clayRed/60 tracking-wide">
              {filteredAccessories.length} {isRTL ? 'منتج' : 'Products'}
            </span>
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
                <h2 className="font-rozha text-2xl text-brand-darkRed">
                  {isRTL ? activeTab.nameAr : activeTab.name}
                </h2>
                <p className="font-roboto text-sm text-brand-clayRed/70 tracking-wide">
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
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-brand-stone/15 md:aspect-[4/5] lg:min-h-[min(920px,78vh)] lg:aspect-auto">
                  <Image
                    src={ACCESSORY_IMAGE_ABAYA_CHARMS_HERO}
                    alt={isRTL ? 'تعليقات العباءة' : 'Abaya charms'}
                    fill
                    className="object-cover"
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
                  <h3 className="font-rozha text-2xl text-brand-darkRed">
                    {isRTL ? 'التصنيفات' : 'Categories'}
                  </h3>
                  <button
                    onClick={() => setIsFilterOpen(false)}
                    className="text-brand-darkRed"
                    data-cursor-hover
                  >
                    <FiX className="w-6 h-6" />
                  </button>
                </div>

                <div className="space-y-2">
                  {accessoryCategories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => {
                        setActiveCategory(category.id)
                        setIsFilterOpen(false)
                      }}
                      className={`w-full flex items-center gap-3 px-4 py-3 font-roboto text-sm tracking-wide transition-colors ${isRTL ? 'flex-row-reverse text-right' : ''} ${
                        activeCategory === category.id
                          ? 'bg-brand-darkRed text-white'
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
      <LocaleLink href={`/accessories/${accessory.id}`} data-cursor-hover>
        <div
          className="group relative"
          onMouseEnter={() => setHoveredProduct(accessory.id)}
          onMouseLeave={() => setHoveredProduct(null)}
        >
          {/* Image Container */}
          <div className="relative aspect-square overflow-hidden bg-[#f5f5f5] mb-4">
            <Image
              src={accessory.images[0]}
              alt={isRTL ? accessory.nameAr : accessory.name}
              fill
              className="pointer-events-none object-cover transition-all duration-700 group-hover:scale-105"
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
                onClick={navigateToAccessoryPdp}
                className={`flex w-full cursor-pointer items-center justify-center gap-2 bg-brand-darkRed py-3 font-roboto text-xs uppercase tracking-[0.15em] text-white hover:bg-brand-dustyBlue transition-colors ${isRTL ? 'flex-row-reverse' : ''}`}
              >
                <FiShoppingBag className="w-4 h-4 shrink-0" aria-hidden />
                {isRTL ? 'عرض المنتج' : 'View product'}
              </button>
            </div>

            {/* Tags */}
            <div className={`absolute top-4 ${isRTL ? 'right-4' : 'left-4'} flex flex-col gap-2`}>
              {accessory.isNew && (
                <span className="px-3 py-1 bg-brand-darkRed text-white font-roboto text-[10px] uppercase tracking-[0.15em]">
                  {isRTL ? 'جديد' : 'New'}
                </span>
              )}
              {accessory.isBestseller && (
                <span className="px-3 py-1 bg-brand-clayRed text-white font-roboto text-[10px] uppercase tracking-[0.15em]">
                  {isRTL ? 'الأكثر مبيعاً' : 'Bestseller'}
                </span>
              )}
              {accessory.isLimitedEdition && (
                <span className="px-3 py-1 border border-brand-darkRed/90 bg-white/95 text-brand-darkRed font-roboto text-[10px] uppercase tracking-[0.15em]">
                  {isRTL ? 'إصدار محدود' : 'Limited Edition'}
                </span>
              )}
            </div>
          </div>

          {/* Product Info */}
          <div className={isRTL ? 'text-right' : ''}>
            <span className="font-roboto text-[10px] uppercase tracking-[0.2em] text-brand-dustyBlue mb-1 block">
              {isRTL 
                ? accessoryCategories.find(c => c.id === accessory.category)?.nameAr 
                : accessoryCategories.find(c => c.id === accessory.category)?.name}
            </span>
            <h3 className="font-roboto text-sm text-brand-darkRed mb-1 tracking-wide group-hover:text-brand-dustyBlue transition-colors">
              {isRTL ? accessory.nameAr : accessory.name}
            </h3>
            <p className="font-roboto text-sm text-brand-clayRed/70 tracking-wide">
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
              <span className="font-roboto text-[10px] text-brand-clayRed/50 ml-1">
                +{accessory.colors.length - 4}
              </span>
            )}
          </div>
        </div>
      </LocaleLink>
    </motion.div>
  )
}
