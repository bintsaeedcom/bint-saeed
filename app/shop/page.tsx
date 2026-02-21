'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { FiArrowLeft, FiFilter, FiX, FiChevronDown, FiMaximize2 } from 'react-icons/fi'
import { products, categories } from '@/data/products'
import { useCurrency } from '@/lib/currency/CurrencyContext'
import { useLanguage } from '@/lib/i18n/LanguageContext'

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null)
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [sortBy, setSortBy] = useState('newest')
  const { formatPrice } = useCurrency()
  const { t, isRTL } = useLanguage()

  const filteredProducts =
    activeCategory === 'All'
      ? products
      : products.filter((p) => p.category === activeCategory)

  return (
    <div className={`min-h-screen bg-white ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Hero Banner */}
      <section className="relative h-[50vh] md:h-[60vh] bg-brand-darkRed overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=90"
          alt="Shop Collection"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-darkRed via-brand-darkRed/50 to-transparent" />
        
        <div className="relative h-full flex flex-col justify-end pb-16 md:pb-20">
          <div className="container mx-auto px-6 lg:px-12">
            {/* Back Button */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <Link
                href="/"
                className="inline-flex items-center gap-2 font-roboto text-xs uppercase tracking-[0.15em] text-white/70 hover:text-white transition-colors group"
                data-cursor-hover
              >
                <FiArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to Home
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="font-roboto text-xs uppercase tracking-[0.4em] text-white/60 mb-4 block">
                Shop All
              </span>
              <h1 className="font-rozha text-5xl md:text-7xl lg:text-8xl text-white mb-4">
                The Collection
              </h1>
              <p className="font-roboto text-base text-white/70 tracking-wide max-w-lg">
                Discover our curated selection of timeless pieces, designed for the modern woman.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="sticky top-[60px] md:top-[72px] z-40 bg-white border-b border-brand-stone/30">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between py-4">
            {/* Categories - Desktop */}
            <div className="hidden md:flex items-center gap-6">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`font-roboto text-xs uppercase tracking-[0.15em] pb-1 transition-all duration-300 ${
                    activeCategory === category
                      ? 'text-brand-darkRed border-b border-brand-darkRed'
                      : 'text-brand-clayRed/60 hover:text-brand-dustyBlue'
                  }`}
                  data-cursor-hover
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Mobile Filter Button */}
            <button
              onClick={() => setIsFilterOpen(true)}
              className="md:hidden flex items-center gap-2 font-roboto text-xs uppercase tracking-[0.15em] text-brand-darkRed"
              data-cursor-hover
            >
              <FiFilter className="w-4 h-4" />
              Filter
            </button>

            {/* Sort & Count */}
            <div className="flex items-center gap-6">
              {/* Size Guide Link */}
              <Link
                href="/size-guide"
                className="hidden sm:flex items-center gap-2 font-roboto text-xs uppercase tracking-[0.15em] text-brand-clayRed hover:text-brand-dustyBlue transition-colors"
                data-cursor-hover
              >
                <FiMaximize2 className="w-3 h-3" />
                {isRTL ? 'دليل المقاسات' : 'Size Guide'}
              </Link>
              <span className="font-roboto text-xs text-brand-clayRed/60 tracking-wide">
                {filteredProducts.length} Products
              </span>
              <div className="relative group">
                <button
                  className="flex items-center gap-2 font-roboto text-xs uppercase tracking-[0.15em] text-brand-darkRed"
                  data-cursor-hover
                >
                  Sort By
                  <FiChevronDown className="w-3 h-3" />
                </button>
                <div className="absolute right-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <div className="bg-white border border-brand-stone/30 shadow-lg py-2 min-w-[150px]">
                    {['Newest', 'Price: Low to High', 'Price: High to Low'].map((option) => (
                      <button
                        key={option}
                        onClick={() => setSortBy(option.toLowerCase())}
                        className="block w-full text-left px-4 py-2 font-roboto text-xs tracking-wide text-brand-clayRed hover:bg-brand-dustyBlue/20 transition-colors"
                        data-cursor-hover
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            layout
            className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <Link href={`/shop/${product.id}`} data-cursor-hover>
                    <div
                      className="group relative"
                      onMouseEnter={() => setHoveredProduct(product.id)}
                      onMouseLeave={() => setHoveredProduct(null)}
                    >
                      {/* Image Container */}
                      <div className="relative aspect-[3/4] overflow-hidden bg-[#f5f5f5] mb-4">
                        <Image
                          src={product.images[0]}
                          alt={product.name}
                          fill
                          className="object-cover transition-all duration-700 group-hover:scale-105"
                        />
                        {/* Second image on hover */}
                        {product.images[1] && (
                          <Image
                            src={product.images[1]}
                            alt={product.name}
                            fill
                            className={`object-cover transition-all duration-700 absolute inset-0 ${
                              hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'
                            }`}
                          />
                        )}
                        
                        {/* Quick Add Button */}
                        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                          <button 
                            onClick={(e) => {
                              e.preventDefault()
                              // Quick add logic
                            }}
                            className="w-full py-3 bg-brand-darkRed text-white font-roboto text-xs uppercase tracking-[0.15em] hover:bg-brand-dustyBlue transition-colors"
                          >
                            Quick Add
                          </button>
                        </div>

                        {/* New Tag */}
                        {index < 3 && (
                          <span className="absolute top-4 left-4 px-3 py-1 bg-white text-brand-darkRed font-roboto text-[10px] uppercase tracking-[0.15em]">
                            New
                          </span>
                        )}
                      </div>

                      {/* Product Info */}
                      <div>
                        <span className="font-roboto text-[10px] uppercase tracking-[0.2em] text-brand-dustyBlue mb-1 block">
                          {product.category}
                        </span>
                        <h3 className="font-roboto text-sm text-brand-darkRed mb-1 tracking-wide group-hover:text-brand-dustyBlue transition-colors">
                          {product.name}
                        </h3>
                        <p className="font-roboto text-sm text-brand-clayRed/70 tracking-wide">
                          {formatPrice(product.price)}
                        </p>
                      </div>

                      {/* Color Options */}
                      <div className="flex gap-1.5 mt-3">
                        {product.colors.slice(0, 4).map((color) => (
                          <div
                            key={color.name}
                            className="w-3 h-3 rounded-full border border-brand-stone/50"
                            style={{ backgroundColor: color.hex }}
                            title={color.name}
                          />
                        ))}
                        {product.colors.length > 4 && (
                          <span className="font-roboto text-[10px] text-brand-clayRed/50 ml-1">
                            +{product.colors.length - 4}
                          </span>
                        )}
                      </div>
                    </div>
                  </Link>
                </motion.div>
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
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed right-0 top-0 bottom-0 w-80 bg-white z-50 overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="font-rozha text-2xl text-brand-darkRed">Filter</h3>
                  <button
                    onClick={() => setIsFilterOpen(false)}
                    className="text-brand-darkRed"
                    data-cursor-hover
                  >
                    <FiX className="w-6 h-6" />
                  </button>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-roboto text-xs uppercase tracking-[0.2em] text-brand-clayRed mb-4">
                      Category
                    </h4>
                    <div className="space-y-3">
                      {categories.map((category) => (
                        <button
                          key={category}
                          onClick={() => {
                            setActiveCategory(category)
                            setIsFilterOpen(false)
                          }}
                          className={`block font-roboto text-sm tracking-wide transition-colors ${
                            activeCategory === category
                              ? 'text-brand-darkRed'
                              : 'text-brand-clayRed/60 hover:text-brand-dustyBlue'
                          }`}
                          data-cursor-hover
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Size Guide Link in Mobile Filter */}
                  <div className="pt-6 border-t border-brand-stone/20">
                    <Link
                      href="/size-guide"
                      onClick={() => setIsFilterOpen(false)}
                      className="flex items-center gap-3 font-roboto text-sm text-brand-darkRed"
                      data-cursor-hover
                    >
                      <FiMaximize2 className="w-4 h-4" />
                      {isRTL ? 'دليل المقاسات' : 'View Size Guide'}
                    </Link>
                    <p className="font-roboto text-xs text-brand-clayRed/50 mt-2">
                      {isRTL ? 'تعرفي على مقاساتنا' : 'Find your perfect fit'}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
