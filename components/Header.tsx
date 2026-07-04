'use client'

import { useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import LocaleLink from '@/components/LocaleLink'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { FiSearch, FiUser, FiShoppingBag, FiMenu, FiX, FiArrowRight, FiChevronDown } from 'react-icons/fi'
import { useCartStore } from '@/store/cartStore'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import MiniCart from './MiniCart'
import { OPEN_MINI_CART_EVENT } from '@/lib/cart/addedToBagToast'
import { stripLocaleFromPathname } from '@/lib/i18n/routing'
import { getSearchableContent, type SearchableItem } from '@/lib/i18n/searchableContentI18n'
import {
  ACCESSORY_IMAGE_NECKLACE,
  ACCESSORY_IMAGE_PHONE_CHARM,
} from '@/data/accessories'

const MEGA_MENU_PLACEHOLDER_A = '/placeholders/product-front-F.svg'
const MEGA_MENU_PLACEHOLDER_B = '/placeholders/product-extra-E.svg'
const MEGA_MENU_SIGNATURE_STRANDS = '/collection-section/bint-saeed-signature-strands-collection-nav.webp'
const MEGA_MENU_ALL_STRANDS = '/collection-section/bint-saeed-all-strands-collection-nav.webp'
const MEGA_MENU_LUXURY_ABAYAS = '/collection-section/bint-saeed-luxury-abayas-collection-nav.webp'
const MEGA_MENU_LUXURY_SETS = '/collection-section/bint-saeed-luxury-sets-collection-nav.webp'
const MEGA_MENU_OUR_STORY = '/collection-section/bint-saeed-our-story-collection-nav.webp'
const MEGA_MENU_THE_CODES = '/collection-section/bint-saeed-the-codes-collection-nav.webp'

/** Edges #12080b → wine center #2d141e (matches editorial About gradient) */
const headerBarGradient =
  'bg-[linear-gradient(90deg,#12080b_0%,#1c0f15_22%,#2d141e_50%,#1c0f15_78%,#12080b_100%)]'

const mobileMenuGradient =
  'bg-[radial-gradient(ellipse_130%_95%_at_50%_0%,#321922_0%,#2d141e_38%,#1a0f14_72%,#12080b_100%)]'

function CartCountBadge({ count, rtl }: { count: number; rtl: boolean }) {
  if (count <= 0) return null
  return (
    <span
      className={`pointer-events-none absolute flex h-4 w-4 items-center justify-center rounded-full bg-brand-dustyBlue font-montserrat text-[9px] font-bold leading-none text-white ${
        rtl ? '-left-1.5 -top-1.5' : '-right-1.5 -top-1.5'
      }`}
    >
      {count > 9 ? '9+' : count}
    </span>
  )
}

function HeaderCartTrigger({
  onClick,
  label,
  rtl,
  count,
  className,
  iconClassName,
}: {
  onClick: () => void
  label: string
  rtl: boolean
  count: number
  className: string
  iconClassName: string
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex shrink-0 items-center justify-center ${className}`}
      data-cursor-hover
      aria-label={label}
    >
      <span className="relative inline-flex shrink-0 items-center justify-center leading-none">
        <FiShoppingBag className={iconClassName} />
        <CartCountBadge count={count} rtl={rtl} />
      </span>
    </button>
  )
}

export default function Header() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isMiniCartOpen, setIsMiniCartOpen] = useState(false)
  const [expandedMobileSection, setExpandedMobileSection] = useState<string | null>(null)
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState<SearchableItem[]>([])
  const searchInputRef = useRef<HTMLInputElement>(null)
  const megaMenuLeaveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const clearMegaMenuLeaveTimer = () => {
    if (megaMenuLeaveTimerRef.current != null) {
      clearTimeout(megaMenuLeaveTimerRef.current)
      megaMenuLeaveTimerRef.current = null
    }
  }

  const handleMegaMenuZoneEnter = () => {
    clearMegaMenuLeaveTimer()
  }

  const handleMegaMenuZoneLeave = () => {
    clearMegaMenuLeaveTimer()
    megaMenuLeaveTimerRef.current = setTimeout(() => {
      setActiveMegaMenu(null)
      megaMenuLeaveTimerRef.current = null
    }, 140)
  }
  const cartItems = useCartStore((state) => state.items)
  const { t, isRTL, language } = useLanguage()
  const searchableContent = getSearchableContent(language)
  const innerPath = stripLocaleFromPathname(pathname ?? '/').pathname
  const disableHomeLogoNavigation = innerPath === '/comingsoon'
  const isHomePage = innerPath === '/home'
  const isTransparentHomeHeader = isHomePage && !isScrolled

  const shopNavItem = { label: 'Shop Now', href: '/shop' as const }
  const navItems = [
    { label: 'Strands', href: '/strands' },
    { label: t.nav.accessories || 'Accessories', href: '/accessories' },
    { label: 'Personalisation', href: '/personalisation' },
    { label: t.about.title, href: '/about' },
  ]
  const getMainNavAnalyticsEvent = (href: string) =>
    href === '/shop'
      ? 'click_nav_collection'
      : href === '/strands' || href === '/charms'
        ? 'click_nav_strands'
      : href === '/accessories'
        ? 'click_nav_accessories'
        : href === '/personalisation'
          ? 'click_nav_personalisation'
        : href === '/about'
          ? 'click_nav_about'
          : undefined

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
            { label: 'Shop All', href: '/shop' },
          ],
        },
        {
          title: 'Ready to Wear',
          links: [
            { label: 'Abayas', href: '/shop?category=abayas' },
            { label: 'Sets', href: '/shop?category=sets' },
            { label: 'Dresses', href: '/shop?category=dresses' },
            { label: 'Kaftans', href: '/shop?category=kaftans' },
          ],
        },
      ],
      features: [
        {
          title: 'Abayas',
          href: '/shop?category=abayas',
          image: MEGA_MENU_LUXURY_ABAYAS,
        },
        {
          title: 'Sets',
          href: '/shop?category=sets',
          image: MEGA_MENU_LUXURY_SETS,
        },
      ],
    },
    '/strands': {
      columns: [
        {
          title: 'Strands',
          links: [
            { label: 'All Strands', href: '/strands' },
            { label: 'Signature Strands', href: '/accessories?type=signature-strands' },
            { label: 'Marylebone Abaya', href: '/shop/marylebone-abaya' },
          ],
        },
      ],
      features: [
        {
          title: 'Signature Strands',
          href: '/accessories?type=signature-strands',
          image: MEGA_MENU_SIGNATURE_STRANDS,
        },
        {
          title: 'Shop All Strands',
          href: '/strands',
          image: MEGA_MENU_ALL_STRANDS,
        },
      ],
    },
    '/accessories': {
      columns: [
        {
          title: 'Accessories',
          links: [
            { label: 'All Accessories', href: '/accessories' },
            { label: 'Signature Strands', href: '/accessories?type=signature-strands' },
            { label: 'Necklaces', href: '/accessories?type=necklaces' },
            { label: 'Earrings', href: '/accessories?type=earrings' },
            { label: 'Bracelets', href: '/accessories?type=bracelets' },
            { label: 'Bag Charms', href: '/accessories?type=bag-strands' },
            { label: 'Phone Charms', href: '/accessories?type=phone-strands' },
          ],
        },
      ],
      features: [
        {
          title: 'Necklaces',
          href: '/accessories?type=necklaces',
          image: ACCESSORY_IMAGE_NECKLACE,
        },
        {
          title: 'Phone Charms',
          href: '/accessories?type=phone-strands',
          image: ACCESSORY_IMAGE_PHONE_CHARM,
        },
      ],
    },
    '/personalisation': {
      columns: [
        {
          title: 'Personalisation',
          links: [
            { label: 'Personalisation', href: '/personalisation' },
            { label: 'Craftsmanship', href: '/craftsmanship' },
            { label: 'Contact', href: '/contact' },
          ],
        },
      ],
      features: [
        {
          title: 'Hidden Pocket',
          href: '/personalisation',
          image: MEGA_MENU_PLACEHOLDER_A,
        },
        {
          title: 'Name Labels',
          href: '/personalisation',
          image: MEGA_MENU_PLACEHOLDER_B,
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
        { title: 'Our Story', href: '/about', image: MEGA_MENU_OUR_STORY },
        { title: 'The Codes', href: '/the-codes', image: MEGA_MENU_THE_CODES },
      ],
    },
  }

  useEffect(() => {
    return () => clearMegaMenuLeaveTimer()
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const threshold = isHomePage ? 32 : 50
      setIsScrolled(window.scrollY > threshold)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isHomePage])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
      setExpandedMobileSection(null)
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

  const logoClassName = `w-auto max-w-[min(88vw,920px)] transition-all duration-300 sm:max-w-[min(90vw,920px)] 2xl:max-w-[min(94vw,960px)] [filter:none] [text-shadow:none] ${
    isScrolled
      ? 'h-[clamp(2.85rem,6.5vw,4.5rem)] max-h-[60px] sm:max-h-[70px] md:max-h-[80px] lg:max-h-[92px] xl:max-h-[104px] 2xl:max-h-[118px]'
      : 'h-[clamp(3.5rem,10vw,6rem)] max-h-[84px] sm:max-h-[96px] md:max-h-[108px] lg:max-h-[124px] xl:max-h-[140px] 2xl:max-h-[156px]'
  }`

  return (
    <>
      {/* Main Header - Elegant Single Row Design */}
      <header
        className={`fixed inset-x-0 top-0 z-[60] w-full min-w-0 max-w-none border-b transition-[background-color,backdrop-filter,border-color,box-shadow] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isTransparentHomeHeader
            ? 'border-white/10 bg-[linear-gradient(90deg,rgba(18,8,11,0.72)_0%,rgba(28,15,21,0.66)_22%,rgba(45,20,30,0.58)_50%,rgba(28,15,21,0.66)_78%,rgba(18,8,11,0.72)_100%)] shadow-[0_18px_46px_rgba(8,2,8,0.24)] backdrop-blur-md'
            : `border-white/10 ${headerBarGradient} ${isScrolled ? 'shadow-[0_18px_40px_rgba(8,2,8,0.45)] backdrop-blur-md' : 'backdrop-blur-[2px]'}`
        }`}
      >
        {/* Bottom accent — same as before, full header width */}
        <div
          className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-dustyBlue/30 to-transparent ${
            isTransparentHomeHeader ? 'opacity-0' : 'opacity-100'
          }`}
        />

        <nav className="container mx-auto px-2 sm:px-3 lg:px-4 2xl:px-8">
          {/* One hover zone for both rows + mega menu */}
          <div className="relative" onMouseEnter={handleMegaMenuZoneEnter} onMouseLeave={handleMegaMenuZoneLeave}>
            {/* Row 1 — brand above nav */}
            <div
              className={`relative flex items-center justify-center transition-[padding] duration-500 ${
                isScrolled ? 'py-0.5 md:py-0.5' : 'py-1 md:py-1.5 lg:py-2 xl:py-2.5'
              }`}
            >
              <div className={`absolute left-0.5 top-1/2 z-[62] flex -translate-y-1/2 items-center 2xl:hidden ${isRTL ? 'flex-row-reverse' : ''}`}>
                <button
                  type="button"
                  className="p-2 text-white"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  data-cursor-hover
                  aria-label="Toggle menu"
                >
                  <FiMenu className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={() => setIsSearchOpen(true)}
                  className="p-2 text-white/80 transition-colors hover:text-white"
                  data-cursor-hover
                  aria-label={t.nav.search}
                >
                  <FiSearch className="h-[17px] w-[17px]" />
                </button>
              </div>

              {disableHomeLogoNavigation ? (
                <div className="block max-w-[min(94vw,960px)]">
                  <Image
                    src="/logo-bintsaeed.svg"
                    alt="Bint Saeed"
                    width={800}
                    height={210}
                    className={logoClassName}
                    priority
                  />
                </div>
              ) : (
                <LocaleLink
                  href="/home"
                  className="block max-w-[min(94vw,960px)]"
                  data-cursor-hover
                >
                  <Image
                    src="/logo-bintsaeed.svg"
                    alt="Bint Saeed"
                    width={800}
                    height={210}
                    className={logoClassName}
                    priority
                  />
                </LocaleLink>
              )}

              <div className="absolute right-0.5 top-1/2 z-[62] flex -translate-y-1/2 items-center gap-1 2xl:hidden">
                <HeaderCartTrigger
                  onClick={() => setIsMiniCartOpen(true)}
                  label={t.nav.cart}
                  rtl={isRTL}
                  count={cartItems.length}
                  className="p-1.5 text-white/75 transition-colors duration-300 hover:text-white"
                  iconClassName="h-[17px] w-[17px]"
                />
              </div>
            </div>

            {/* Divider between brand and topics */}
            <div className="mx-auto hidden h-px max-w-[min(100%,56rem)] bg-gradient-to-r from-transparent via-white/16 to-transparent 2xl:block" aria-hidden />

            {/* Row 2 — topics + utilities (wide desktop only; grid prevents overlap) */}
            <div
              className={`relative hidden transition-[padding] duration-500 2xl:grid 2xl:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] 2xl:items-center 2xl:gap-8 ${
                isScrolled ? 'py-0.5' : 'py-1 2xl:py-1.5'
              }`}
            >
            {/* Left: desktop search */}
            <div className={`pointer-events-auto relative z-[61] flex min-w-0 items-center justify-start ${isRTL ? 'flex-row-reverse' : ''}`}>
              <button
                type="button"
                onClick={() => setIsSearchOpen(true)}
                className={`inline-flex items-center gap-2 border-b px-0 py-1.5 font-montserrat text-[12px] font-medium uppercase tracking-[0.14em] transition-colors duration-300 ${
                  isTransparentHomeHeader
                    ? 'border-white/45 text-white/90 hover:border-white hover:text-white'
                    : 'border-brand-dustyBlue/55 text-brand-dustyBlue hover:border-brand-dustyBlue hover:text-brand-dustyBlue'
                }`}
                data-cursor-hover
                aria-label={t.nav.search}
              >
                <FiSearch className="h-4 w-4" />
                <span>{t.nav.search}</span>
              </button>
            </div>

            {/* Center: Navigation */}
            <nav className={`pointer-events-auto relative z-[61] flex min-w-0 items-center justify-center gap-5 min-[1800px]:gap-7 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <LocaleLink
                href={shopNavItem.href}
                onMouseEnter={() => setActiveMegaMenu(shopNavItem.href)}
                className={`relative z-[61] flex-shrink-0 whitespace-nowrap py-1.5 font-montserrat text-[12px] font-medium uppercase tracking-[0.12em] transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-brand-dustyBlue after:transition-transform after:duration-300 hover:after:scale-x-100 ${
                  activeMegaMenu === shopNavItem.href
                    ? 'text-brand-dustyBlue'
                    : isTransparentHomeHeader
                      ? 'text-white hover:text-brand-dustyBlue'
                      : 'text-white/90 hover:text-brand-dustyBlue'
                }`}
                data-cursor-hover
                data-analytics-event="click_cta_home_to_collection"
                data-analytics-section="header-main-nav"
              >
                {shopNavItem.label}
              </LocaleLink>
              {navItems.map((item) => (
                <LocaleLink
                  key={item.label}
                  href={item.href}
                  onMouseEnter={() => setActiveMegaMenu(item.href)}
                  className={`relative z-[61] flex-shrink-0 whitespace-nowrap py-1.5 font-montserrat text-[12px] font-medium uppercase tracking-[0.12em] transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-brand-dustyBlue after:transition-transform after:duration-300 hover:after:scale-x-100 ${
                    activeMegaMenu === item.href
                      ? 'text-brand-dustyBlue'
                      : isTransparentHomeHeader
                        ? 'text-white hover:text-brand-dustyBlue'
                        : 'text-white/90 hover:text-brand-dustyBlue'
                  }`}
                  data-cursor-hover
                  data-analytics-event={getMainNavAnalyticsEvent(item.href)}
                  data-analytics-section="header-main-nav"
                >
                  {item.label}
                </LocaleLink>
              ))}
            </nav>

            {/* Right: locale, account and cart */}
            <div className={`pointer-events-auto relative z-[61] flex min-w-0 items-center justify-end gap-2 2xl:gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <button
                type="button"
                onClick={() => {
                  window.location.assign('/account')
                }}
                className="rounded-full border border-transparent p-1.5 text-white/70 transition-colors duration-300 hover:border-white/20 hover:bg-white/5 hover:text-white"
                data-cursor-hover
                aria-label={t.nav.account}
              >
                <FiUser className="w-[18px] h-[18px]" />
              </button>
              
              <HeaderCartTrigger
                onClick={() => setIsMiniCartOpen(true)}
                label={t.nav.cart}
                rtl={isRTL}
                count={cartItems.length}
                className="rounded-full border border-transparent p-1.5 text-white/70 transition-colors duration-300 hover:border-white/20 hover:bg-white/5 hover:text-white"
                iconClassName="h-[18px] w-[18px]"
              />
            </div>
          </div>

          {/* Desktop Mega Menu */}
          <AnimatePresence>
            {activeMegaMenu && megaMenus[activeMegaMenu] && (
              <motion.div
                key={activeMegaMenu}
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.22, ease: 'easeOut' }}
                className="pointer-events-auto absolute left-0 right-0 top-full z-[63] hidden -mt-1.5 pt-1.5 2xl:block"
              >
                <div className="border-t border-white/10 bg-[#f6f3ef] shadow-[0_22px_48px_rgba(20,8,11,0.18)]">
                  <div className="grid grid-cols-12 gap-6 px-6 py-8 lg:gap-10 lg:px-12">
                    <div
                      className={
                        megaMenus[activeMegaMenu].features.length > 0
                          ? 'col-span-5 grid grid-cols-1 gap-4 xl:col-span-6'
                          : 'col-span-12'
                      }
                    >
                      {megaMenus[activeMegaMenu].columns.map((col) => (
                        <div key={col.title} className="min-w-0">
                          <p className="mb-2 whitespace-nowrap font-montserrat text-[10px] uppercase tracking-[0.22em] text-brand-clayRed/70">
                            {col.title}
                          </p>
                          <div className="space-y-2.5">
                            {col.links.map((link) => (
                              <LocaleLink
                                key={link.label}
                                href={link.href}
                                className="block max-w-full whitespace-nowrap break-keep font-montserrat text-[13px] text-brand-darkRed/90 transition-colors [hyphens:none] hover:text-brand-dustyBlue"
                                data-cursor-hover
                                onClick={() => setActiveMegaMenu(null)}
                              >
                                {link.label}
                              </LocaleLink>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>

                    {megaMenus[activeMegaMenu].features.length > 0 && (
                    <div className="col-span-7 grid grid-cols-2 gap-4 xl:col-span-6 xl:gap-5">
                      {megaMenus[activeMegaMenu].features.slice(0, 2).map((feature) => (
                        <LocaleLink
                          key={feature.title}
                          href={feature.href}
                          className="group block"
                          data-cursor-hover
                          onClick={() => setActiveMegaMenu(null)}
                        >
                          <div className="relative aspect-[4/5] overflow-hidden bg-brand-stone/20">
                            <Image
                              src={feature.image}
                              alt={`${feature.title} — featured collection | Bint Saeed`}
                              fill
                              sizes="(max-width: 1536px) 20vw, 300px"
                              className="pointer-events-none object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                              aria-hidden
                            />
                          </div>
                          <div className="mt-2 flex min-w-0 flex-col items-start gap-1.5 xl:flex-row xl:items-center xl:justify-between xl:gap-3">
                            <span className="max-w-full break-words font-montserrat text-[12px] leading-snug text-brand-darkRed [hyphens:none]">
                              {feature.title}
                            </span>
                            <span className="whitespace-nowrap font-montserrat text-[10px] uppercase tracking-[0.1em] text-brand-darkRed/70 transition-colors group-hover:text-brand-dustyBlue xl:text-[11px]">
                              Shop Now
                            </span>
                          </div>
                        </LocaleLink>
                      ))}
                    </div>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          </div>
        </nav>
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
              <div className="flex items-center gap-4 border-b border-brand-stone/35 py-5">
                <FiSearch className="h-5 w-5 text-brand-darkRed/70" />
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={t.search.placeholder || 'Search for products, collection, pages…'}
                  className={`flex-1 rounded-sm border border-brand-stone/35 bg-white px-3 py-2 text-lg font-montserrat text-brand-darkRed focus:border-brand-dustyBlue focus:outline-none placeholder:text-brand-stone/75 md:text-xl ${isRTL ? 'text-right' : ''}`}
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
                      src="/logo-bintsaeed.svg"
                      alt="Bint Saeed"
                      width={520}
                      height={136}
                    className="h-[clamp(3.2rem,11.2vw,5.5rem)] w-auto max-h-[104px]"
                  />
                  </div>
                ) : (
                  <LocaleLink href="/home" onClick={() => setIsMobileMenuOpen(false)} className="block max-w-[min(420px,78vw)]">
                    <Image
                      src="/logo-bintsaeed.svg"
                      alt="Bint Saeed"
                      width={520}
                      height={136}
                      className="h-[clamp(3.2rem,11.2vw,5.5rem)] w-auto max-h-[104px]"
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
                {[shopNavItem, ...navItems].map((item, index) => {
                  const mega = megaMenus[item.href]
                  const isExpanded = expandedMobileSection === item.href
                  return (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.08 }}
                      className="border-b border-white/10 py-3 last:border-b-0"
                    >
                      {mega ? (
                        <div className="flex w-full min-w-0 items-center justify-between gap-3 py-3">
                          <LocaleLink
                            href={item.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="min-w-0 flex-1 font-montserrat text-[12px] font-medium uppercase tracking-[0.12em] text-white max-[380px]:text-[12px]"
                            data-cursor-hover
                            data-analytics-event={getMainNavAnalyticsEvent(item.href)}
                            data-analytics-section="header-mobile-nav"
                          >
                            {item.label}
                          </LocaleLink>
                          <button
                            type="button"
                            onClick={() =>
                              setExpandedMobileSection((prev) => (prev === item.href ? null : item.href))
                            }
                            className="shrink-0 p-1 text-white/65"
                            aria-label={`Toggle ${item.label} submenu`}
                          >
                            <FiChevronDown
                              className={`h-5 w-5 transition-transform duration-200 ${
                                isExpanded ? 'rotate-180' : ''
                              }`}
                            />
                          </button>
                        </div>
                      ) : (
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
                      )}
                      {mega ? (
                        <div
                          className={`overflow-hidden transition-all duration-250 ${
                            isExpanded ? 'max-h-[42rem] pb-3 pt-1 opacity-100' : 'max-h-0 py-0 opacity-0'
                          } ${isRTL ? 'text-right' : 'text-left'}`}
                        >
                          <LocaleLink
                            href={item.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="inline-flex items-center gap-2 py-2 font-montserrat text-[11px] uppercase tracking-[0.14em] text-brand-dustyBlue transition-colors hover:text-white"
                            data-cursor-hover
                            data-analytics-event={getMainNavAnalyticsEvent(item.href)}
                            data-analytics-section="header-mobile-nav"
                          >
                            View {item.label}
                            <FiArrowRight className={`h-4 w-4 ${isRTL ? 'rotate-180' : ''}`} />
                          </LocaleLink>
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
                        </div>
                      ) : null}
                    </motion.div>
                  )
                })}
              </div>

              {/* Footer — safe-area inset above home indicator / browser chrome */}
              <div className="border-t border-white/10 px-6 pb-[max(1.75rem,env(safe-area-inset-bottom,0px))] pt-5">
                <div className={`flex items-center gap-5 ${isRTL ? 'flex-row-reverse' : ''}`}>
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
