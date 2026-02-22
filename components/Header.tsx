'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { FiSearch, FiUser, FiHeart, FiShoppingBag, FiMenu, FiX, FiArrowRight } from 'react-icons/fi'
import { useCartStore } from '@/store/cartStore'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import LanguageSwitcher from './LanguageSwitcher'
import CurrencySwitcher from './CurrencySwitcher'
import MiniCart from './MiniCart'

// Search suggestions and pages
const searchableContent = [
  { title: 'New Arrivals', href: '/shop', category: 'Collections' },
  { title: 'Evening Wear', href: '/shop?category=evening', category: 'Collections' },
  { title: 'Ready to Wear', href: '/shop?category=ready-to-wear', category: 'Collections' },
  { title: 'Accessories', href: '/accessories', category: 'Collections' },
  { title: 'Necklaces', href: '/accessories?type=necklaces', category: 'Accessories' },
  { title: 'Bracelets', href: '/accessories?type=bracelets', category: 'Accessories' },
  { title: 'Earrings', href: '/accessories?type=earrings', category: 'Accessories' },
  { title: 'Our Story', href: '/about', category: 'About' },
  { title: 'Heritage', href: '/heritage', category: 'About' },
  { title: 'Al Talli', href: '/heritage/al-talli', category: 'Heritage' },
  { title: 'Sadu Fabric', href: '/heritage/sadu-fabric', category: 'Heritage' },
  { title: 'Size Guide', href: '/size-guide', category: 'Help' },
  { title: 'Contact Us', href: '/contact', category: 'Help' },
  { title: 'FAQ', href: '/faq', category: 'Help' },
  { title: 'Shipping & Returns', href: '/terms', category: 'Help' },
  { title: 'Abayas', href: '/shop?category=abayas', category: 'Products' },
  { title: 'Black Abaya', href: '/shop?category=abayas&color=black', category: 'Products' },
  { title: 'Luxury Abaya', href: '/shop?category=abayas&style=luxury', category: 'Products' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isMiniCartOpen, setIsMiniCartOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState<typeof searchableContent>([])
  const searchInputRef = useRef<HTMLInputElement>(null)
  const cartItems = useCartStore((state) => state.items)
  const { t, isRTL } = useLanguage()

  const navItems = [
    { label: t.nav.newIn, href: '/shop' },
    { label: t.nav.collections, href: '/shop' },
    { label: t.nav.accessories || 'Accessories', href: '/accessories' },
    { label: t.nav.heritage, href: '/heritage' },
    { label: t.nav.ourStory, href: '/about' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  // Handle search
  useEffect(() => {
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      const results = searchableContent.filter(item => 
        item.title.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query)
      )
      setSearchResults(results.slice(0, 8))
    } else {
      setSearchResults([])
    }
  }, [searchQuery])

  // Focus search input when opened
  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus()
    }
  }, [isSearchOpen])

  const handleSearchClose = () => {
    setIsSearchOpen(false)
    setSearchQuery('')
    setSearchResults([])
  }

  return (
    <>
      {/* Main Header - Elegant Single Row Design */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'py-3 shadow-lg bg-brand-darkRed' 
            : 'py-4 lg:py-5 bg-brand-darkRed'
        }`}
      >
        {/* Subtle dusty blue accent line at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-dustyBlue/30 to-transparent" />
        
        <nav className="container mx-auto px-4 lg:px-12">
          <div className="flex items-center justify-between relative">
            
            {/* Left: Navigation */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8 flex-1 relative z-50">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="font-roboto text-[11px] uppercase tracking-[0.15em] text-white/90 hover:text-brand-dustyBlue transition-colors duration-300 py-2 whitespace-nowrap"
                  data-cursor-hover
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Mobile: Menu Button */}
            <button
              className="lg:hidden p-2 text-white relative z-50"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-cursor-hover
              aria-label="Toggle menu"
            >
              <FiMenu className="w-6 h-6" />
            </button>

            {/* Center: Logo */}
            <div className="absolute left-1/2 -translate-x-1/2 z-10">
              <Link href="/preview" className="block" data-cursor-hover>
                <Image
                  src="/logo.png"
                  alt="Bint Saeed"
                  width={300}
                  height={80}
                  className={`transition-all duration-300 ${isScrolled ? 'h-[55px]' : 'h-[65px]'} w-auto`}
                  priority
                />
              </Link>
            </div>

            {/* Right: Utilities & Icons */}
            <div className="hidden lg:flex items-center gap-5 xl:gap-6 flex-1 justify-end relative z-50">
              {/* Language & Currency */}
              <div className="flex items-center gap-4 pr-4 border-r border-white/20">
                <CurrencySwitcher variant="light" />
                <LanguageSwitcher variant="light" />
              </div>
              
              {/* Icons */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="text-white/70 hover:text-white transition-colors duration-300 p-1"
                data-cursor-hover
                aria-label={t.nav.search}
              >
                <FiSearch className="w-[18px] h-[18px]" />
              </button>
              
              <Link
                href="/account"
                className="text-white/70 hover:text-white transition-colors duration-300 p-1"
                data-cursor-hover
                aria-label={t.nav.account}
              >
                <FiUser className="w-[18px] h-[18px]" />
              </Link>
              
              <button
                className="text-white/70 hover:text-white transition-colors duration-300 p-1"
                data-cursor-hover
                aria-label={t.nav.wishlist}
              >
                <FiHeart className="w-[18px] h-[18px]" />
              </button>
              
              <button
                onClick={() => setIsMiniCartOpen(true)}
                className="relative text-white/70 hover:text-white transition-colors duration-300 p-1"
                data-cursor-hover
                aria-label={t.nav.cart}
              >
                <FiShoppingBag className="w-[18px] h-[18px]" />
                {cartItems.length > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-brand-dustyBlue text-white text-[9px] rounded-full flex items-center justify-center font-roboto font-bold">
                    {cartItems.length}
                  </span>
                )}
              </button>
            </div>

            {/* Mobile: Right Icons */}
            <div className="flex lg:hidden items-center gap-3">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="text-white/80 hover:text-white transition-colors duration-300 p-1"
                data-cursor-hover
              >
                <FiSearch className="w-5 h-5" />
              </button>
              <button
                onClick={() => setIsMiniCartOpen(true)}
                className="relative text-white/80 hover:text-white transition-colors duration-300 p-1"
                data-cursor-hover
              >
                <FiShoppingBag className="w-5 h-5" />
                {cartItems.length > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-brand-dustyBlue text-white text-[9px] rounded-full flex items-center justify-center font-roboto font-bold">
                    {cartItems.length}
                  </span>
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Search Overlay - Stays on page feel */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-0 z-[70] bg-white shadow-2xl"
          >
            <div className="container mx-auto px-6 lg:px-12">
              {/* Search Input Row */}
              <div className="flex items-center gap-4 py-5 border-b border-brand-stone/30">
                <FiSearch className="w-5 h-5 text-brand-darkRed/50" />
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={t.search.placeholder || "Search for products, collections, pages..."}
                  className={`flex-1 text-lg md:text-xl font-roboto text-brand-darkRed bg-transparent focus:outline-none placeholder:text-brand-stone/60 ${isRTL ? 'text-right' : ''}`}
                  dir={isRTL ? 'rtl' : 'ltr'}
                />
                <button
                  onClick={handleSearchClose}
                  className="p-2 text-brand-darkRed/60 hover:text-brand-darkRed transition-colors"
                  data-cursor-hover
                >
                  <FiX className="w-5 h-5" />
                </button>
              </div>
              
              {/* Search Results */}
              <div className="py-4 max-h-[60vh] overflow-y-auto">
                {searchQuery.trim() === '' ? (
                  // Popular searches when empty
                  <div>
                    <span className="font-roboto text-[10px] uppercase tracking-[0.2em] text-brand-clayRed mb-4 block">
                      {t.search.popularSearches || 'Popular Searches'}
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {['Abayas', 'Evening Wear', 'Accessories', 'New Arrivals', 'Heritage'].map((term) => (
                        <button
                          key={term}
                          onClick={() => setSearchQuery(term)}
                          className="px-4 py-2 bg-brand-stone/20 text-brand-darkRed font-roboto text-sm tracking-wide hover:bg-brand-dustyBlue/20 transition-colors rounded-full"
                          data-cursor-hover
                        >
                          {term}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : searchResults.length > 0 ? (
                  // Show results
                  <div className="space-y-1">
                    {searchResults.map((result, index) => (
                      <Link
                        key={index}
                        href={result.href}
                        onClick={handleSearchClose}
                        className="flex items-center justify-between p-3 hover:bg-brand-stone/10 rounded-lg transition-colors group"
                        data-cursor-hover
                      >
                        <div>
                          <span className="font-roboto text-brand-darkRed group-hover:text-brand-dustyBlue transition-colors">
                            {result.title}
                          </span>
                          <span className="ml-3 font-roboto text-xs text-brand-clayRed/60 uppercase tracking-wider">
                            {result.category}
                          </span>
                        </div>
                        <FiArrowRight className="w-4 h-4 text-brand-stone group-hover:text-brand-dustyBlue transition-colors" />
                      </Link>
                    ))}
                  </div>
                ) : (
                  // No results
                  <div className="text-center py-8">
                    <p className="font-roboto text-brand-darkRed/60">
                      No results found for "{searchQuery}"
                    </p>
                    <p className="font-roboto text-sm text-brand-stone mt-2">
                      Try searching for collections, products, or pages
                    </p>
                  </div>
                )}
              </div>
            </div>
            
            {/* Click outside to close */}
            <div 
              className="fixed inset-0 -z-10" 
              onClick={handleSearchClose}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-brand-darkRed"
          >
            <div className="h-full flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-5">
                <Link href="/preview" onClick={() => setIsMobileMenuOpen(false)}>
                  <Image
                    src="/logo.png"
                    alt="Bint Saeed"
                    width={200}
                    height={55}
                    className="h-12 w-auto"
                  />
                </Link>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white p-2"
                  data-cursor-hover
                >
                  <FiX className="w-6 h-6" />
                </button>
              </div>

              {/* Navigation */}
              <div className="flex-1 flex flex-col justify-center px-6">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="group flex items-center justify-between py-4 border-b border-white/10"
                      data-cursor-hover
                    >
                      <span className="font-rozha text-2xl text-white">
                        {item.label}
                      </span>
                      <FiArrowRight className={`w-5 h-5 text-white/50 group-hover:text-white group-hover:translate-x-1 transition-all ${isRTL ? 'rotate-180' : ''}`} />
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Footer */}
              <div className="px-6 pb-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-5">
                    <Link
                      href="/cart"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-white/70 hover:text-white transition-colors"
                      data-cursor-hover
                    >
                      <FiShoppingBag className="w-6 h-6" />
                    </Link>
                    <Link
                      href="/account"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-white/70 hover:text-white transition-colors"
                      data-cursor-hover
                    >
                      <FiUser className="w-6 h-6" />
                    </Link>
                    <button
                      className="text-white/70 hover:text-white transition-colors"
                      data-cursor-hover
                    >
                      <FiHeart className="w-6 h-6" />
                    </button>
                  </div>
                  <div className="flex items-center gap-3">
                    <CurrencySwitcher variant="light" />
                    <LanguageSwitcher variant="light" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mini Cart Drawer */}
      <MiniCart isOpen={isMiniCartOpen} onClose={() => setIsMiniCartOpen(false)} />
    </>
  )
}
