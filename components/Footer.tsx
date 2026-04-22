'use client'

import LocaleLink from '@/components/LocaleLink'
import { FaInstagram, FaPinterest, FaTiktok, FaSnapchat, FaXTwitter } from 'react-icons/fa6'
import { FiGlobe, FiTruck, FiClock, FiHeart } from 'react-icons/fi'
import LanguageSwitcher from './LanguageSwitcher'
import CurrencySwitcher from './CurrencySwitcher'
import { useLanguage } from '@/lib/i18n/LanguageContext'

const socialLinks = [
  { icon: FaInstagram, href: 'https://www.instagram.com/bintsaeed_brand/', label: 'Instagram' },
  { icon: FaTiktok, href: 'https://www.tiktok.com/@bintsaeed_brand', label: 'TikTok' },
  { icon: FaSnapchat, href: 'https://www.snapchat.com/add/bintsaeed_brand', label: 'Snapchat' },
  { icon: FaXTwitter, href: 'https://x.com/bintsaeed_brand', label: 'X' },
  { icon: FaPinterest, href: 'https://www.pinterest.com/bintsaeed_brand/', label: 'Pinterest' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const { t, isRTL } = useLanguage()

  const footerLinks = {
    shop: [
      { label: t.footer.newArrivals, href: '/shop' },
      { label: t.footer.collection, href: '/shop' },
      { label: t.footer.accessories, href: '/accessories' },
    ],
    about: [
      { label: t.footer.ourStory, href: '/about' },
      { label: t.footer.craftsmanship, href: '/craftsmanship' },
      { label: t.footer.careers, href: '/careers' },
    ],
    help: [
      { label: t.footer.contactUs, href: '/contact' },
      { label: t.footer.shippingReturns, href: '/shipment-return-policy' },
      { label: t.footer.sizeGuide, href: '/size-guide' },
      { label: t.footer.faq, href: '/faq' },
    ],
  }

  return (
    <footer className="relative w-full min-w-0 max-w-none overflow-hidden">
      {/* Main Footer Links - Coming Soon Dark Gradient Style */}
      <div className="relative text-white">
        {/* Coming Soon gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#12080b] via-[#1c0f15] to-[#2d141e]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(146,170,193,0.06)_0%,_transparent_70%)]" />
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden translate-x-[150%] md:flex items-start justify-end">
          <span
            className="origin-top-right rotate-90 whitespace-nowrap font-rozha text-[56px] leading-none tracking-[0.02em] text-transparent opacity-90 lg:text-[68px]"
            style={{
              backgroundImage: 'linear-gradient(to right, #8e4233 0%, #92aac1 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
            }}
            aria-hidden
          >
            Bint Saeed
          </span>
        </div>
        
        <div className="relative container mx-auto px-3 sm:px-4 lg:px-5 2xl:px-8 py-12 md:py-14 2xl:py-16">
          <div className={`grid grid-cols-1 gap-8 sm:grid-cols-2 lg:gap-10 xl:grid-cols-4 xl:gap-12 ${isRTL ? 'text-right' : ''}`}>
            {/* Brand Column with Logo */}
            <div className="sm:col-span-2 xl:col-span-1">
              <p className="max-w-xs font-montserrat text-[12px] leading-relaxed tracking-[0.03em] text-white/50">
                {t.footer.brandDescription}
              </p>
              <p className="mt-3 font-montserrat text-[12px] tracking-[0.03em] text-white/40">
                Abu&nbsp;Dhabi,&nbsp;United&nbsp;Arab&nbsp;Emirates
              </p>

              <div className={`mt-6 space-y-4 ${isRTL ? 'items-end' : 'items-start'} flex flex-col`}>
                <div className={`${isRTL ? 'text-right' : 'text-left'}`}>
                  <p className="mb-2 font-montserrat text-[10px] uppercase tracking-[0.18em] text-white/45">
                    {isRTL ? 'اللغة' : 'Language'}
                  </p>
                  <div className="inline-flex border-b border-white/50 pb-1">
                    <LanguageSwitcher variant="light" align="start" />
                  </div>
                </div>

                <div className={`${isRTL ? 'text-right' : 'text-left'}`}>
                  <p className="mb-2 font-montserrat text-[10px] uppercase tracking-[0.18em] text-white/45">
                    {isRTL ? 'الدولة/المنطقة' : 'Country/Region'}
                  </p>
                  <div className="inline-flex border-b border-white/50 pb-1">
                    <CurrencySwitcher variant="light" showSymbol={false} align="start" />
                  </div>
                </div>
              </div>
            </div>

            {/* Shop */}
            <div className="self-start">
              <h4 className="mb-5 font-montserrat text-[11px] uppercase tracking-[0.18em] text-brand-dustyBlue">
                {t.footer.shop}
              </h4>
              <ul className="space-y-3">
                {footerLinks.shop.map((link) => (
                  <li key={link.label}>
                    <LocaleLink
                      href={link.href}
                      className="font-montserrat text-[12px] tracking-[0.03em] text-white/60 transition-colors hover:text-brand-dustyBlue"
                      data-cursor-hover
                      data-analytics-event={link.href === '/shop' ? 'click_footer_collection' : undefined}
                      data-analytics-section="footer-shop-links"
                    >
                      {link.label}
                    </LocaleLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* About */}
            <div className="self-start">
              <h4 className="mb-5 font-montserrat text-[11px] uppercase tracking-[0.18em] text-brand-dustyBlue">
                {t.footer.about}
              </h4>
              <ul className="space-y-3">
                {footerLinks.about.map((link) => (
                  <li key={link.label}>
                    <LocaleLink
                      href={link.href}
                      className="font-montserrat text-[12px] tracking-[0.03em] text-white/60 transition-colors hover:text-brand-dustyBlue"
                      data-cursor-hover
                      data-analytics-event={link.href === '/contact' ? 'click_footer_contact' : undefined}
                      data-analytics-section="footer-help-links"
                    >
                      {link.label}
                    </LocaleLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Help */}
            <div className="self-start">
              <h4 className="mb-5 font-montserrat text-[11px] uppercase tracking-[0.18em] text-brand-dustyBlue">
                {t.footer.help}
              </h4>
              <ul className="space-y-3">
                {footerLinks.help.map((link) => (
                  <li key={link.label}>
                    <LocaleLink
                      href={link.href}
                      className="font-montserrat text-[12px] tracking-[0.03em] text-white/60 transition-colors hover:text-brand-dustyBlue"
                      data-cursor-hover
                    >
                      {link.label}
                    </LocaleLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Worldwide Shipping Banner - Clay Red/Rose accent section */}
      <div className="relative bg-brand-clayRed/90">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-rose/20 via-transparent to-brand-rose/20" />
        
        <div className="relative container mx-auto px-3 sm:px-4 lg:px-5 2xl:px-8 py-8 md:py-9 2xl:py-10">
          <div className={`grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4 xl:gap-8 ${isRTL ? 'text-right' : ''}`}>
            {/* Worldwide Shipping */}
            <div className={`flex items-center gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 2xl:h-14 2xl:w-14">
                <FiGlobe className="h-5 w-5 text-white 2xl:h-6 2xl:w-6" />
              </div>
              <div>
                <h4 className="font-montserrat text-[11px] font-medium uppercase tracking-[0.16em] text-white">
                  {isRTL ? 'شحن عالمي' : 'Worldwide Shipping'}
                </h4>
                <p className="font-montserrat text-[12px] tracking-[0.03em] text-white/60">
                  {isRTL ? 'توصيل عالمي' : 'Delivered globally'}
                </p>
              </div>
            </div>

            {/* Free UAE Shipping */}
            <div className={`flex items-center gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 2xl:h-14 2xl:w-14">
                <FiTruck className="h-5 w-5 text-white 2xl:h-6 2xl:w-6" />
              </div>
              <div>
                <h4 className="font-montserrat text-[11px] font-medium uppercase tracking-[0.16em] text-white">
                  {isRTL ? 'شحن مجاني داخل الإمارات' : 'Free UAE Shipping'}
                </h4>
                <p className="font-montserrat text-[12px] tracking-[0.03em] text-white/60">
                  {isRTL ? 'للطلبات فوق 2000 درهم' : 'On orders above 2000 AED'}
                </p>
              </div>
            </div>

            {/* Carefully Considered */}
            <div className={`flex items-center gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 2xl:h-14 2xl:w-14">
                <FiClock className="h-5 w-5 text-white 2xl:h-6 2xl:w-6" />
              </div>
              <div>
                <h4 className="font-montserrat text-[11px] font-medium uppercase tracking-[0.16em] text-white">
                  {isRTL ? 'يُصنع عند الطلب' : 'Crafted to Order'}
                </h4>
                <p className="font-montserrat text-[12px] tracking-[0.03em] text-white/60">
                  {isRTL ? 'يُنتج فقط عند الطلب' : 'Produced only upon request'}
                </p>
              </div>
            </div>

            {/* Giving Forward */}
            <div className={`flex items-center gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 2xl:h-14 2xl:w-14">
                <FiHeart className="h-5 w-5 text-white 2xl:h-6 2xl:w-6" />
              </div>
              <div>
                <h4 className="font-montserrat text-[11px] font-medium uppercase tracking-[0.16em] text-white">
                  {isRTL ? 'نعطي للأمام' : 'Giving Forward'}
                </h4>
                <p className="font-montserrat text-[12px] tracking-[0.03em] text-white/60">
                  {isRTL ? 'يتم تخصيص 20 درهم من كل قطعة للأعمال الخيرية' : '20 AED from each piece is dedicated to charity'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar - Dark Red with elegant accents */}
      <div className="relative bg-[linear-gradient(90deg,#12080b_0%,#1c0f15_22%,#2d141e_50%,#1c0f15_78%,#12080b_100%)]">
        {/* Dusty blue accent line at top */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-dustyBlue/30 to-transparent" />
        
        <div className="container mx-auto px-3 sm:px-4 lg:px-5 2xl:px-8 py-6 md:py-7 2xl:py-8">
          <div className="flex flex-col items-center justify-between gap-5 lg:flex-row">
            {/* Copyright - Left */}
            <p className="order-3 font-montserrat text-[11px] tracking-[0.08em] text-white/40 lg:order-1">
              © {currentYear} Bint Saeed. {t.footer.allRightsReserved}
            </p>

            {/* Legal Links - Center */}
            <div className="order-2 flex flex-wrap justify-center gap-4 md:gap-6">
              <LocaleLink
                href="/privacy-policy"
                className="font-montserrat text-[11px] uppercase tracking-[0.14em] text-white/50 transition-colors hover:text-brand-stone"
                data-cursor-hover
              >
                {t.footer.privacy}
              </LocaleLink>
              <LocaleLink
                href="/cookie-policy"
                className="font-montserrat text-[11px] uppercase tracking-[0.14em] text-white/50 transition-colors hover:text-brand-stone"
                data-cursor-hover
              >
                {t.footer.cookies}
              </LocaleLink>
              <LocaleLink
                href="/terms"
                className="font-montserrat text-[11px] uppercase tracking-[0.14em] text-white/50 transition-colors hover:text-brand-stone"
                data-cursor-hover
              >
                {t.footer.terms}
              </LocaleLink>
              <LocaleLink
                href="/shipment-return-policy"
                className="font-montserrat text-[11px] uppercase tracking-[0.14em] text-white/50 transition-colors hover:text-brand-stone"
                data-cursor-hover
              >
                Shipment & Return Policy
              </LocaleLink>
            </div>

            {/* Social Icons - Right */}
            <div className="order-1 flex items-center gap-2.5 md:gap-3 lg:order-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/50 transition-all hover:border-brand-stone/30 hover:text-brand-stone md:h-10 md:w-10"
                  aria-label={social.label}
                  data-cursor-hover
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom accent line - Rose gradient */}
      <div className="h-1 bg-gradient-to-r from-brand-darkRed via-brand-rose to-brand-darkRed" />
    </footer>
  )
}
