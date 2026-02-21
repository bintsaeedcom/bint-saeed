'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { FiArrowLeft, FiFilter, FiX, FiShoppingBag, FiHeart } from 'react-icons/fi'
import { accessories, accessoryCategories, Accessory } from '@/data/accessories'
import { useCurrency } from '@/lib/currency/CurrencyContext'
import { useLanguage } from '@/lib/i18n/LanguageContext'

export default function AccessoriesPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null)
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const { formatPrice } = useCurrency()
  const { isRTL } = useLanguage()

  const filteredAccessories = activeCategory === 'all'
    ? accessories
    : accessories.filter((a) => a.category === activeCategory)

  const activeTab = accessoryCategories.find(c => c.id === activeCategory)

  return (
    <div className={`min-h-screen bg-white ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Hero Banner */}
      <section className="relative h-[50vh] md:h-[60vh] bg-brand-darkRed overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1920&q=90"
          alt="Accessories Collection"
          fill
          className="object-cover opacity-40"
          priority
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
              <Link
                href="/"
                className={`inline-flex items-center gap-2 font-roboto text-xs uppercase tracking-[0.15em] text-white/70 hover:text-white transition-colors group ${isRTL ? 'flex-row-reverse' : ''}`}
                data-cursor-hover
              >
                <FiArrowLeft className={`w-4 h-4 group-hover:-translate-x-1 transition-transform ${isRTL ? 'rotate-180 group-hover:translate-x-1' : ''}`} />
                {isRTL ? 'العودة للرئيسية' : 'Back to Home'}
              </Link>
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
              <h1 className="font-rozha text-5xl md:text-7xl lg:text-8xl text-white mb-4">
                {isRTL ? 'الإكسسوارات' : 'Accessories'}
              </h1>
              <p className="font-roboto text-base text-white/70 tracking-wide max-w-lg">
                {isRTL 
                  ? 'اكتشفي مجموعتنا الراقية من القلادات والأقراط والأساور وتعليقات الحقائب والهواتف.'
                  : 'Discover our curated collection of necklaces, earrings, bracelets, bag charms, and phone charms.'}
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
            
            {/* Bracelet sizing note */}
            {activeTab.id === 'bracelets' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className={`mt-4 p-4 bg-brand-darkRed/5 border-l-4 border-brand-darkRed ${isRTL ? 'border-l-0 border-r-4' : ''}`}
              >
                <p className="font-roboto text-sm text-brand-darkRed">
                  {isRTL 
                    ? '✨ جميع الأساور مصنوعة بمقاسات مخصصة. سيُطلب منك قياس معصمك عند الإضافة للسلة.'
                    : '✨ All bracelets are custom-sized. You\'ll be asked to measure your wrist when adding to cart.'}
                </p>
              </motion.div>
            )}
          </div>
        </section>
      )}

      {/* Products Grid */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-6 lg:px-12">
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

  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <Link href={`/accessories/${accessory.id}`} data-cursor-hover>
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
              className="object-cover transition-all duration-700 group-hover:scale-105"
            />
            
            {/* Quick Actions */}
            <div className={`absolute top-4 ${isRTL ? 'left-4' : 'right-4'} flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity`}>
              <button 
                onClick={(e) => {
                  e.preventDefault()
                  // Add to wishlist
                }}
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-brand-dustyBlue hover:text-white transition-colors"
                data-cursor-hover
              >
                <FiHeart className="w-4 h-4" />
              </button>
            </div>

            {/* Quick Add Button */}
            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
              <button 
                onClick={(e) => {
                  e.preventDefault()
                  // Quick add logic
                }}
                className={`w-full py-3 bg-brand-darkRed text-white font-roboto text-xs uppercase tracking-[0.15em] hover:bg-brand-dustyBlue transition-colors flex items-center justify-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}
              >
                <FiShoppingBag className="w-4 h-4" />
                {isRTL ? 'أضيفي للسلة' : 'Quick Add'}
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
      </Link>
    </motion.div>
  )
}
