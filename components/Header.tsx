'use client'

import { useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import LocaleLink from '@/components/LocaleLink'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { FiSearch, FiUser, FiHeart, FiShoppingBag, FiMenu, FiX, FiArrowRight } from 'react-icons/fi'
import { useCartStore } from '@/store/cartStore'
import { useWishlistStore } from '@/store/wishlistStore'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import LanguageSwitcher from './LanguageSwitcher'
import CurrencySwitcher from './CurrencySwitcher'
import MiniCart from './MiniCart'
import { OPEN_MINI_CART_EVENT } from '@/lib/cart/addedToBagToast'
import { stripLocaleFromPathname } from '@/lib/i18n/routing'
import {
  ACCESSORY_IMAGE_ABAYA_CHARMS_HERO,
  ACCESSORY_IMAGE_NECKLACE,
  ACCESSORY_IMAGE_PHONE_CHARM,
} from '@/data/accessories'

// Search suggestions and pages
const searchableContent = [
  { title: 'New Arrivals', href: '/shop', category: 'Collection' },
  { title: 'Dresses', href: '/shop?category=dresses', category: 'Collection' },
  { title: 'Ready to Wear', href: '/shop?category=ready-to-wear', category: 'Collection' },
  { title: 'Accessories', href: '/accessories', category: 'Collection' },
  {
    title: 'Abaya Charms',
    href: '/accessories?type=abaya-charms',
    category: 'Accessories',
  },
  { title: 'Necklaces', href: '/accessories?type=necklaces', category: 'Accessories' },
  { title: 'Earrings', href: '/accessories?type=earrings', category: 'Accessories' },
  { title: 'Bracelets', href: '/accessories?type=bracelets', category: 'Accessories' },
  { title: 'Bag Charms', href: '/accessories?type=bag-charms', category: 'Accessories' },
  { title: 'Phone Charms', href: '/accessories?type=phone-charms', category: 'Accessories' },
  { title: 'About Us', href: '/about', category: 'About' },
  { title: 'Our Story', href: '/about', category: 'About' },
  { title: 'The Codes', href: '/the-codes', category: 'About' },
  { title: 'Craftsmanship', href: '/craftsmanship', category: 'About' },
  { title: 'Personalisation', href: '/personalisation', category: 'About' },
  { title: 'Giving Forward', href: '/giving-forward', category: 'About' },
  { title: 'Al Talli', href: '/the-codes#al-talli', category: 'Heritage' },
  { title: 'Khous Weaving', href: '/the-codes#khous', category: 'Heritage' },
  { title: 'Size Guide', href: '/size-guide', category: 'Help' },
  { title: 'Favorites', href: '/wishlist', category: 'Help' },
  { title: 'Contact Us', href: '/contact', category: 'Help' },
  { title: 'FAQ', href: '/faq', category: 'Help' },
  { title: 'Shipping & Returns', href: '/terms', category: 'Help' },
  { title: 'Abayas', href: '/shop?category=abayas', category: 'Products' },
  { title: 'Jacket', href: '/shop?category=jacket', category: 'Products' },
  { title: 'Kaftans', href: '/shop?category=kaftans', category: 'Products' },
  { title: 'Black Abaya', href: '/shop?category=abayas&color=black', category: 'Products' },
  { title: 'Luxury Abaya', href: '/shop?category=abayas&style=luxury', category: 'Products' },
]

/** Edges #12080b → wine center #2d141e (matches editorial About gradient) */
const headerBarGradient =
  'bg-[linear-gradient(90deg,#12080b_0%,#1c0f15_22%,#2d141e_50%,#1c0f15_78%,#12080b_100%)]'

const mobileMenuGradient =
  'bg-[radial-gradient(ellipse_130%_95%_at_50%_0%,#321922_0%,#2d141e_38%,#1a0f14_72%,#12080b_100%)]'

export default function Header() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isMiniCartOpen, setIsMiniCartOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState<typeof searchableContent>([])
  const searchInputRef = useRef<HTMLInputElement>(null)
  const cartItems = useCartStore((state) => state.items)
  const wishlistCount = useWishlistStore((state) => state.items.length)
  const { t, isRTL } = useLanguage()
  const innerPath = stripLocaleFromPathname(pathname ?? '/').pathname
  const disableHomeLogoNavigation = innerPath === '/comingsoon'

  const navItems = [
    { label: t.nav.collections, href: '/shop' },
    { label: 'Charms', href: '/charms' },
    { label: t.nav.accessories || 'Accessories', href: '/accessories' },
    { label: 'Personalisation', href: '/personalisation' },
    { label: t.about.title, href: '/about' },
  ]
  const getMainNavAnalyticsEvent = (href: string) =>
    href === '/shop'
      ? 'click_nav_collection'
      : href === '/charms'
        ? 'click_nav_charms'
      : href === '/accessories'
        ? 'click_nav_accessories'
        : href === '/personalisation'
          ? 'click_nav_personalisation'
        : href === '/about'
          ? 'click_nav_about'
          : undefined
  const isNavItemActive = (href: string) => innerPath === href || innerPath.startsWith(`${href}/`)

  const megaMenus: Record<
    string,
    {
      columns: { title: string; links: { label: string; href: string }[] }[]
      features: { title: string; href: string; image: string }[]
    }
  > = {
    '/shop': {
      columns: [
        {
          title: 'Discover',
          links: [
            { label: 'New In', href: '/shop' },
            { label: 'Shop All', href: '/shop' },
          ],
        },
        {
          title: 'Ready to Wear',
          links: [
            { label: 'Abayas', href: '/shop?category=abayas' },
            { label: 'Jacket', href: '/shop?category=jacket' },
            { label: 'Sets', href: '/shop?category=sets' },
            { label: 'Dresses', href: '/shop?category=dresses' },
            { label: 'Kaftans', href: '/shop?category=kaftans' },
          ],
        },
      ],
      features: [
        { title: 'Abayas', href: '/shop?category=abayas', image: '/collection-section/67.png' },
        { title: 'Dresses', href: '/shop?category=dresses', image: '/collection-section/68.png' },
      ],
    },
    '/accessories': {
      columns: [
        {
          title: 'Accessories',
          links: [
            { label: 'All Accessories', href: '/accessories' },
            {
              label: 'Abaya Charms',
              href: '/accessories?type=abaya-charms',
            },
            { label: 'Necklaces', href: '/accessories?type=necklaces' },
            { label: 'Earrings', href: '/accessories?type=earrings' },
            { label: 'Bracelets', href: '/accessories?type=bracelets' },
            { label: 'Bag Charms', href: '/accessories?type=bag-charms' },
            { label: 'Phone Charms', href: '/accessories?type=phone-charms' },
          ],
        },
      ],
      features: [
        {
          title: 'Abaya Charms',
          href: '/accessories?type=abaya-charms',
          image: ACCESSORY_IMAGE_ABAYA_CHARMS_HERO,
        },
        {
          title: 'Necklaces',
          href: '/accessories?type=necklaces',
          image: ACCESSORY_IMAGE_NECKLACE,
        },
      ],
    },
    '/about': {
      columns: [
        {
          title: 'About Us',
          links: [
            { label: 'Our Story', href: '/about' },
            { label: 'The Codes', href: '/the-codes' },
            { label: 'Craftsmanship', href: '/craftsmanship' },
            { label: 'Personalisation', href: '/personalisation' },
            { label: 'Giving Forward', href: '/giving-forward' },
            { label: 'Contact', href: '/contact' },
          ],
        },
      ],
      features: [
        { title: 'Our Story', href: '/about', image: '/image 1.png' },
        { title: 'The Codes', href: '/the-codes', image: '/collection-section/67.png' },
      ],
    },
  }

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

  useEffect(() => {
    const openMiniCart = () => setIsMiniCartOpen(true)
    window.addEventListener(OPEN_MINI_CART_EVENT, openMiniCart as EventListener)
    return () => window.removeEventListener(OPEN_MINI_CART_EVENT, openMiniCart as EventListener)
  }, [])

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
      {/* Main Header - Single row desktop */}
      <header
        className={`fixed inset-x-0 top-0 z-[60] w-full border-b-[1.5px] border-[#722030] bg-[#1a0210] transition-all duration-300 ${
          isScrolled ? 'shadow-[0_18px_40px_rgba(8,2,8,0.45)]' : ''
        }`}
      >
        <div className="mx-auto hidden h-16 w-full max-w-[1280px] items-center px-4 lg:flex">
          <div className="flex min-w-0 flex-1 items-center gap-3">
            <div className="text-[11px] uppercase tracking-[0.12em] text-[#6a5060]">
              <CurrencySwitcher variant="light" showSymbol={false} />
            </div>
            <div className="text-[11px] uppercase tracking-[0.12em] text-[#6a5060]">
              <LanguageSwitcher variant="light" />
            </div>
          </div>

          <div className="absolute left-1/2 -translate-x-1/2">
            {disableHomeLogoNavigation ? (
              <span className="font-rozha text-[20px] text-[#e8d8c8]">Bint Saeed</span>
            ) : (
              <LocaleLink href="/home" className="font-rozha text-[20px] text-[#e8d8c8]" data-cursor-hover>
                Bint Saeed
              </LocaleLink>
            )}
          </div>

          <div className="flex min-w-0 flex-1 items-center justify-end gap-5">
            <nav className="flex items-center gap-4 xl:gap-5">
              {navItems.map((item) => (
                <LocaleLink
                  key={item.label}
                  href={item.href}
                  className={`border-b-[1.5px] pb-0.5 font-montserrat text-[11px] uppercase tracking-[0.12em] transition-colors duration-200 ${
                    isNavItemActive(item.href)
                      ? 'border-[#722030] text-[#e8d8c8]'
                      : 'border-transparent text-[#9a7880] hover:text-[#e8d8c8]'
                  }`}
                  data-cursor-hover
                  data-analytics-event={getMainNavAnalyticsEvent(item.href)}
                  data-analytics-section="header-main-nav"
                >
                  {item.label}
                </LocaleLink>
              ))}
              <LocaleLink
                href="/shop"
                className="rounded-[3px] bg-[#722030] px-4 py-[5px] font-montserrat text-[11px] uppercase tracking-[0.08em] text-[#e8d8c8] transition-colors duration-200 hover:bg-[#8a2d43]"
                data-cursor-hover
                data-analytics-event="click_cta_home_to_collection"
                data-analytics-section="header-main-nav"
              >
                Shop Now
              </LocaleLink>
            </nav>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setIsSearchOpen(true)}
                className="p-1.5 text-[#6a5060] transition-colors duration-200 hover:text-[#e8d8c8]"
                data-cursor-hover
                aria-label={t.nav.search}
              >
                <FiSearch className="h-4 w-4" />
              </button>
              <LocaleLink
                href="/wishlist"
                className="relative p-1.5 text-[#6a5060] transition-colors duration-200 hover:text-[#e8d8c8]"
                data-cursor-hover
                aria-label={t.nav.wishlist}
              >
                <FiHeart className="w-[18px] h-[18px]" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 flex h-4 min-w-[1rem] items-center justify-center rounded-full bg-brand-dustyBlue px-0.5 font-montserrat text-[9px] font-bold text-white">
                    {wishlistCount > 9 ? '9+' : wishlistCount}
                  </span>
                )}
              </LocaleLink>
              
              <button
                type="button"
                onClick={() => setIsMiniCartOpen(true)}
                className="relative p-1.5 text-[#6a5060] transition-colors duration-200 hover:text-[#e8d8c8]"
                data-cursor-hover
                aria-label={t.nav.cart}
              >
                <FiShoppingBag className="w-[18px] h-[18px]" />
                {cartItems.length > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-brand-dustyBlue text-white text-[9px] rounded-full flex items-center justify-center font-montserrat font-bold">
                    {cartItems.length}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        <div className="flex h-16 items-center justify-between px-4 lg:hidden">
          <button
            type="button"
            className="p-2 text-[#6a5060]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-cursor-hover
            aria-label="Toggle menu"
          >
            <FiMenu className="w-6 h-6" />
          </button>
          {disableHomeLogoNavigation ? (
            <span className="font-rozha text-[20px] text-[#e8d8c8]">Bint Saeed</span>
          ) : (
            <LocaleLink href="/home" className="font-rozha text-[20px] text-[#e8d8c8]" data-cursor-hover>
              Bint Saeed
            </LocaleLink>
          )}
          <div className="relative z-[55] flex items-center justify-end gap-1.5 sm:gap-2">
              <div className="hidden md:flex items-center gap-2 pr-2">
                <CurrencySwitcher variant="light" showSymbol={false} />
                <LanguageSwitcher variant="light" />
              </div>

              <button
                type="button"
                onClick={() => setIsSearchOpen(true)}
                className="p-1.5 text-[#6a5060] transition-colors duration-200 hover:text-[#e8d8c8]"
                data-cursor-hover
                aria-label={t.nav.search}
              >
                <FiSearch className="w-[17px] h-[17px]" />
              </button>

              <LocaleLink
                href="/wishlist"
                className="relative hidden p-1.5 text-[#6a5060] transition-colors duration-200 hover:text-[#e8d8c8] sm:inline-flex"
                data-cursor-hover
                aria-label={t.nav.wishlist}
              >
                <FiHeart className="w-[17px] h-[17px]" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 flex h-4 min-w-[1rem] items-center justify-center rounded-full bg-brand-dustyBlue px-0.5 font-montserrat text-[9px] font-bold text-white">
                    {wishlistCount > 9 ? '9+' : wishlistCount}
                  </span>
                )}
              </LocaleLink>

              <button
                type="button"
                onClick={() => setIsMiniCartOpen(true)}
                className="relative hidden p-1.5 text-[#6a5060] transition-colors duration-200 hover:text-[#e8d8c8] sm:inline-flex"
                data-cursor-hover
                aria-label={t.nav.cart}
              >
                <FiShoppingBag className="w-[17px] h-[17px]" />
                {cartItems.length > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-brand-dustyBlue text-white text-[9px] rounded-full flex items-center justify-center font-montserrat font-bold">
                    {cartItems.length}
                  </span>
                )}
              </button>
            </div>
        </div>
      </header>

      {/* Search Overlay - Stays on page feel */}
      <AnimatePresence>
        {isSearchOpen && (
          <>
            {/* Backdrop - click to close, below search panel */}
            <motion.div
              key="header-search-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[69] bg-black/20"
              onClick={handleSearchClose}
              aria-hidden="true"
            />
            <motion.div
              key="header-search-panel"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-x-0 top-0 z-[70] bg-white shadow-2xl"
            >
            <div className="container mx-auto px-6 lg:px-12 relative z-10">
              {/* Search Input Row */}
              <div className="flex items-center gap-4 py-5 border-b border-brand-stone/30">
                <FiSearch className="w-5 h-5 text-brand-darkRed/50" />
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={t.search.placeholder || 'Search for products, collection, pages…'}
                  className={`flex-1 text-lg md:text-xl font-montserrat text-brand-darkRed bg-transparent focus:outline-none placeholder:text-brand-stone/60 ${isRTL ? 'text-right' : ''}`}
                  dir={isRTL ? 'rtl' : 'ltr'}
                />
                <button
                  type="button"
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
                    <span className="font-montserrat text-[10px] uppercase tracking-[0.2em] text-brand-clayRed mb-4 block">
                      {t.search.popularSearches || 'Popular Searches'}
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {['Abayas', 'Kaftans', 'Dresses', 'Accessories', 'New Arrivals', 'Heritage'].map((term) => (
                        <button
                          key={term}
                          type="button"
                          onClick={() => setSearchQuery(term)}
                          className="px-4 py-2 bg-brand-stone/20 text-brand-darkRed font-montserrat text-sm tracking-wide hover:bg-brand-dustyBlue/20 transition-colors rounded-full"
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
                      <LocaleLink
                        key={index}
                        href={result.href}
                        onClick={handleSearchClose}
                        className="flex items-center justify-between p-3 hover:bg-brand-stone/10 rounded-lg transition-colors group"
                        data-cursor-hover
                      >
                        <div>
                          <span className="font-montserrat text-brand-darkRed group-hover:text-brand-dustyBlue transition-colors">
                            {result.title}
                          </span>
                          <span className="ml-3 font-montserrat text-xs text-brand-clayRed/60 uppercase tracking-wider">
                            {result.category}
                          </span>
                        </div>
                        <FiArrowRight className="w-4 h-4 text-brand-stone group-hover:text-brand-dustyBlue transition-colors" />
                      </LocaleLink>
                    ))}
                  </div>
                ) : (
                  // No results
                  <div className="text-center py-8">
                    <p className="font-montserrat text-brand-darkRed/60">
                      No results found for "{searchQuery}"
                    </p>
                    <p className="font-montserrat text-sm text-brand-stone mt-2">
                      Try searching for the collection, products, or pages
                    </p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`fixed inset-0 z-[80] ${mobileMenuGradient}`}
          >
            <div className="h-full flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-5">
                {disableHomeLogoNavigation ? (
                  <div className="block max-w-[min(420px,78vw)]">
                    <Image
                      src="/logo.png"
                      alt="Bint Saeed"
                      width={520}
                      height={136}
                    className="h-[clamp(3.25rem,12vw,5.5rem)] w-auto max-h-[100px]"
                  />
                  </div>
                ) : (
                  <LocaleLink href="/home" onClick={() => setIsMobileMenuOpen(false)} className="block max-w-[min(420px,78vw)]">
                    <Image
                      src="/logo.png"
                      alt="Bint Saeed"
                      width={520}
                      height={136}
                      className="h-[clamp(3.25rem,12vw,5.5rem)] w-auto max-h-[100px]"
                    />
                  </LocaleLink>
                )}
                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white p-2"
                  data-cursor-hover
                >
                  <FiX className="w-6 h-6" />
                </button>
              </div>

              {/* Navigation + same destinations as desktop mega menu */}
              <div className="flex min-h-0 flex-1 flex-col overflow-y-auto overscroll-contain px-6 pb-4">
                {navItems.map((item, index) => {
                  const mega = megaMenus[item.href]
                  return (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.08 }}
                      className="border-b border-white/10 py-3 last:border-b-0"
                    >
                      <LocaleLink
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="group flex min-w-0 items-center justify-between gap-3 py-3"
                        data-cursor-hover
                        data-analytics-event={getMainNavAnalyticsEvent(item.href)}
                        data-analytics-section="header-mobile-nav"
                      >
                        <span className="min-w-0 flex-1 font-montserrat text-[12px] font-medium uppercase tracking-[0.12em] text-white max-[380px]:text-[12px]">
                          {item.label}
                        </span>
                        <FiArrowRight
                          className={`h-5 w-5 shrink-0 text-white/50 transition-all group-hover:translate-x-1 group-hover:text-white ${isRTL ? 'rotate-180' : ''}`}
                        />
                      </LocaleLink>
                      {mega ? (
                        <div
                          className={`space-y-5 pb-3 pt-1 ${isRTL ? 'text-right' : 'text-left'}`}
                        >
                          {mega.columns.map((col) => (
                            <div key={col.title}>
                              <p className="mb-2 font-montserrat text-[10px] uppercase tracking-[0.22em] text-white/45">
                                {col.title}
                              </p>
                              <div className="space-y-1">
                                {col.links.map((link) => (
                                  <LocaleLink
                                    key={`${col.title}-${link.label}`}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="block py-2 font-montserrat text-[13px] text-white/85 transition-colors hover:text-brand-dustyBlue"
                                    data-cursor-hover
                                  >
                                    {link.label}
                                  </LocaleLink>
                                ))}
                              </div>
                            </div>
                          ))}
                          {mega.features.length > 0 ? (
                            <div className="grid grid-cols-2 gap-2 pt-1">
                              {mega.features.map((feature) => (
                                <LocaleLink
                                  key={feature.title}
                                  href={feature.href}
                                  onClick={() => setIsMobileMenuOpen(false)}
                                  className="flex min-h-[3.5rem] items-center justify-center rounded border border-white/15 px-3 py-2.5 text-center font-montserrat text-[11px] leading-snug text-white/90 transition-colors hover:border-brand-dustyBlue hover:text-brand-dustyBlue"
                                  data-cursor-hover
                                >
                                  <span className="line-clamp-3 w-full max-w-[12.5rem] text-center text-pretty [text-wrap:balance]">
                                    {feature.title}
                                  </span>
                                </LocaleLink>
                              ))}
                            </div>
                          ) : null}
                        </div>
                      ) : null}
                    </motion.div>
                  )
                })}
              </div>

              {/* Footer — safe-area inset so currency/language sit above home indicator / browser chrome */}
              <div className="border-t border-white/10 px-6 pb-[max(1.75rem,env(safe-area-inset-bottom,0px))] pt-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-5">
                    <LocaleLink
                      href="/cart"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-white/70 hover:text-white transition-colors"
                      data-cursor-hover
                    >
                      <FiShoppingBag className="w-6 h-6" />
                    </LocaleLink>
                    <LocaleLink
                      href="/account"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-white/70 hover:text-white transition-colors"
                      data-cursor-hover
                    >
                      <FiUser className="w-6 h-6" />
                    </LocaleLink>
                    <LocaleLink
                      href="/wishlist"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="relative text-white/70 hover:text-white transition-colors"
                      data-cursor-hover
                      aria-label={t.nav.wishlist}
                    >
                      <FiHeart className="w-6 h-6" />
                      {wishlistCount > 0 && (
                        <span className="absolute -top-1 -right-1 flex h-4 min-w-[1rem] items-center justify-center rounded-full bg-brand-dustyBlue px-0.5 text-[9px] font-bold text-white">
                          {wishlistCount > 9 ? '9+' : wishlistCount}
                        </span>
                      )}
                    </LocaleLink>
                  </div>
                  <div className="flex items-center gap-3">
                    <CurrencySwitcher variant="light" showSymbol={false} dropdownPlacement="above" />
                    <LanguageSwitcher variant="light" dropdownPlacement="above" />
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
