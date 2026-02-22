'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { FiSearch, FiUser, FiHeart, FiShoppingBag, FiMenu, FiX, FiArrowRight } from 'react-icons/fi'
import { useCartStore } from '@/store/cartStore'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import LanguageSwitcher from './LanguageSwitcher'
import CurrencySwitcher from './CurrencySwitcher'
import MiniCart from './MiniCart'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isMiniCartOpen, setIsMiniCartOpen] = useState(false)
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

  return (
    <>
      {/* Main Header - Below Banner - Brand Dark Red */}
      <header
        className={`fixed top-[40px] left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'py-2 shadow-lg bg-brand-darkRed' : 'py-4 lg:py-5 bg-brand-darkRed'
        }`}
      >
        {/* Subtle dusty blue accent line at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-dustyBlue/30 to-transparent" />
        <nav className="container mx-auto px-6 lg:px-16">
          {/* Top Row - Utilities (Desktop) */}
          <div className="hidden lg:flex items-center justify-between mb-4 pb-3 border-b border-white/10 relative z-30">
            <div className="flex items-center gap-6">
              <CurrencySwitcher variant="light" />
              <LanguageSwitcher variant="light" />
            </div>
            <div className={`flex items-center gap-8 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <button
                onClick={() => setIsSearchOpen(true)}
                className="text-white/60 hover:text-white transition-colors duration-300 flex items-center gap-2 py-2"
                data-cursor-hover
                aria-label={t.nav.search}
              >
                <FiSearch className="w-4 h-4" />
                <span className="font-roboto text-[10px] uppercase tracking-[0.2em]">{t.nav.search}</span>
              </button>
              <Link
                href="/account"
                className="text-white/60 hover:text-white transition-colors duration-300 flex items-center gap-2 py-2"
                data-cursor-hover
                aria-label={t.nav.account}
              >
                <FiUser className="w-4 h-4" />
                <span className="font-roboto text-[10px] uppercase tracking-[0.2em]">{t.nav.account}</span>
              </Link>
              <button
                className="text-white/60 hover:text-white transition-colors duration-300 flex items-center gap-2 py-2"
                data-cursor-hover
                aria-label={t.nav.wishlist}
              >
                <FiHeart className="w-4 h-4" />
                <span className="font-roboto text-[10px] uppercase tracking-[0.2em]">{t.nav.wishlist}</span>
              </button>
            </div>
          </div>

          {/* Main Row */}
          <div className="flex items-center justify-between relative">
            {/* Left Navigation - High z-index for clickability */}
            <div className="hidden lg:flex items-center gap-8 flex-1 relative z-20">
              {navItems.slice(0, 3).map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="font-roboto text-[11px] uppercase tracking-[0.2em] text-white hover:text-brand-dustyBlue transition-colors duration-300 py-2 px-1"
                  data-cursor-hover
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-3 text-white relative z-20"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-cursor-hover
              aria-label="Toggle menu"
            >
              <FiMenu className="w-6 h-6" />
            </button>

            {/* Center Logo - Behind navigation */}
            <Link href="/preview" className="absolute left-1/2 -translate-x-1/2 z-10" data-cursor-hover>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/logo.png"
                  alt="Bint Saeed"
                  width={400}
                  height={100}
                  className={`transition-all duration-500 ${
                    isScrolled ? 'h-[60px] w-auto' : 'h-[85px] w-auto'
                  }`}
                  priority
                />
              </motion.div>
            </Link>

            {/* Right Navigation - High z-index for clickability */}
            <div className="hidden lg:flex items-center gap-8 flex-1 justify-end relative z-20">
              {navItems.slice(3).map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="font-roboto text-[11px] uppercase tracking-[0.2em] text-white hover:text-brand-dustyBlue transition-colors duration-300 py-2 px-1"
                  data-cursor-hover
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Right Actions - Mobile & Tablet */}
            <div className={`flex lg:hidden items-center gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <button
                onClick={() => setIsSearchOpen(true)}
                className="text-white/80 hover:text-white transition-colors duration-300"
                data-cursor-hover
              >
                <FiSearch className="w-5 h-5" />
              </button>
              <button
                onClick={() => setIsMiniCartOpen(true)}
                className="relative text-white/80 hover:text-white transition-colors duration-300"
                data-cursor-hover
              >
                <FiShoppingBag className="w-5 h-5" />
                {cartItems.length > 0 && (
                  <span className={`absolute -top-2 ${isRTL ? '-left-2' : '-right-2'} w-4 h-4 bg-white text-brand-darkRed text-[9px] rounded-full flex items-center justify-center font-roboto font-bold`}>
                    {cartItems.length}
                  </span>
                )}
              </button>
            </div>

            {/* Cart - Desktop (far right) */}
            <button
              onClick={() => setIsMiniCartOpen(true)}
              className="hidden lg:flex relative text-white/70 hover:text-white transition-colors duration-300 items-center gap-2 ml-10"
              data-cursor-hover
              aria-label={t.nav.cart}
            >
              <FiShoppingBag className="w-4 h-4" />
              <span className="font-roboto text-[10px] uppercase tracking-[0.2em]">{t.nav.cart}</span>
              {cartItems.length > 0 && (
                <span className="w-5 h-5 bg-white text-brand-darkRed text-[10px] rounded-full flex items-center justify-center font-roboto font-bold">
                  {cartItems.length}
                </span>
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Search Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-white"
          >
            <div className="container mx-auto px-6 lg:px-12 h-full flex flex-col">
              <div className="flex items-center justify-between py-5">
                <span className="font-roboto text-xs uppercase tracking-[0.2em] text-brand-clayRed">
                  {t.search.title}
                </span>
                <button
                  onClick={() => setIsSearchOpen(false)}
                  className="text-brand-darkRed hover:text-brand-dustyBlue transition-colors"
                  data-cursor-hover
                >
                  <FiX className="w-6 h-6" />
                </button>
              </div>
              
              <div className="flex-1 flex items-center justify-center">
                <div className="w-full max-w-2xl">
                  <input
                    type="text"
                    placeholder={t.search.placeholder}
                    className={`w-full text-3xl md:text-5xl font-rozha text-brand-darkRed bg-transparent border-b-2 border-brand-stone pb-4 focus:outline-none focus:border-brand-darkRed transition-colors placeholder:text-brand-stone ${isRTL ? 'text-right' : ''}`}
                    autoFocus
                    dir={isRTL ? 'rtl' : 'ltr'}
                  />
                  <div className="mt-12">
                    <span className="font-roboto text-xs uppercase tracking-[0.2em] text-brand-clayRed mb-4 block">
                      {t.search.popularSearches}
                    </span>
                    <div className={`flex flex-wrap gap-3 ${isRTL ? 'justify-end' : ''}`}>
                      {[t.collections.eveningWear, t.nav.accessories, t.nav.newIn].map((term) => (
                        <button
                          key={term}
                          className="px-4 py-2 border border-brand-stone text-brand-darkRed font-roboto text-sm tracking-wide hover:bg-brand-dustyBlue transition-colors"
                          data-cursor-hover
                        >
                          {term}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
                <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                  <Image
                    src="/logo.png"
                    alt="Bint Saeed"
                    width={250}
                    height={70}
                    className="h-14 w-auto"
                  />
                </Link>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white"
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
                      <span className="font-rozha text-3xl text-white">
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
                  <div className="flex items-center gap-6">
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
                  <LanguageSwitcher variant="light" />
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
