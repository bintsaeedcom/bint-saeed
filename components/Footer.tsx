'use client'

import LocaleLink from '@/components/LocaleLink'
import Image from 'next/image'
import { FaFacebook, FaInstagram, FaPinterest, FaTiktok, FaSnapchat, FaXTwitter, FaYoutube } from 'react-icons/fa6'
import { FiGlobe, FiClock, FiHeart } from 'react-icons/fi'
import LanguageSwitcher from './LanguageSwitcher'
import CurrencySwitcher from './CurrencySwitcher'
import SubscribeForm from './SubscribeForm'
import FooterPaymentMethods from './FooterPaymentMethods'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { commerceUi } from '@/lib/i18n/commerceUi'
import { useCurrency } from '@/lib/currency/CurrencyContext'
import { withShippingAmount } from '@/lib/shipping/withShippingAmount'
import { useVisitorComplimentaryShipping } from '@/lib/shipping/useVisitorComplimentaryShipping'
import { useStableToggleScroll } from '@/lib/ui/useStableToggleScroll'
import { getAboutTopicNavLinks } from '@/lib/i18n/aboutTopicNavI18n'
import { getHeaderNavCopy } from '@/lib/i18n/headerNavI18n'
import { LOCALE_GEO } from '@/lib/i18n/brandProperNouns'
import { withBrandAlt } from '@/lib/products/imageAlt'
import { useState } from 'react'

const socialLinks = [
  { icon: FaInstagram, href: 'https://www.instagram.com/bintsaeed_brand/', label: 'Instagram' },
  {
    icon: FaFacebook,
    href: 'https://www.facebook.com/people/Bint-Saeed-Brand/61591994098533/',
    label: 'Facebook',
  },
  { icon: FaYoutube, href: 'https://www.youtube.com/@BintSaeed_Brand', label: 'YouTube' },
  { icon: FaTiktok, href: 'https://www.tiktok.com/@bintsaeed_brand', label: 'TikTok' },
  { icon: FaSnapchat, href: 'https://www.snapchat.com/add/bintsaeed_brand', label: 'Snapchat' },
  { icon: FaXTwitter, href: 'https://x.com/bintsaeed_brand', label: 'X' },
  { icon: FaPinterest, href: 'https://www.pinterest.com/bintsaeed_brand/', label: 'Pinterest' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const { t, isRTL, language } = useLanguage()
  const ui = commerceUi(language)
  const hn = getHeaderNavCopy(language)
  const geo = LOCALE_GEO[language in LOCALE_GEO ? (language as keyof typeof LOCALE_GEO) : 'en']
  const { currency } = useCurrency()
  const { amountLabel: complimentaryAmount } = useVisitorComplimentaryShipping(currency.code)
  const [mobileOpenSection, setMobileOpenSection] = useState<'shop' | 'about' | 'help' | null>('shop')
  const { prepareToggle: prepareFooterToggle } = useStableToggleScroll(mobileOpenSection)

  const footerLinks = {
    shop: [
      { label: t.footer.newArrivals, href: '/shop' },
      { label: t.footer.collection, href: '/shop' },
      { label: hn.giftCards, href: '/gift-cards' },
      { label: t.footer.accessories, href: '/accessories' },
    ],
    about: getAboutTopicNavLinks(language),
    help: [
      { label: t.footer.contactUs, href: '/contact' },
      { label: t.footer.shippingReturns, href: '/shipment-return-policy' },
      { label: t.footer.sizeGuide, href: '/size-guide' },
      { label: t.footer.faq, href: '/faq' },
    ],
  }

  return (
    <footer className="relative w-full min-w-0 max-w-none overflow-x-hidden bg-[#12080b]">
      {/* Main Footer Links - Coming Soon Dark Gradient Style */}
      <div className="relative text-white">
        {/* Coming Soon gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#12080b] via-[#1c0f15] to-[#2d141e]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(146,170,193,0.06)_0%,_transparent_70%)]" />
        <div className="pointer-events-none absolute inset-y-0 end-0 hidden translate-x-[150%] items-start justify-end md:flex rtl:-translate-x-[150%]">
          <span
            className="origin-top-right rotate-90 whitespace-nowrap font-rozha text-[56px] leading-none tracking-[0.02em] text-transparent opacity-90 lg:text-[68px]"
            style={{
              backgroundImage: 'linear-gradient(to right, #6f1524 0%, #6a8090 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
            }}
            aria-hidden
          >
            Bint Saeed
          </span>
        </div>
        
        <div className="relative container mx-auto px-3 sm:px-4 lg:px-5 2xl:px-8 py-12 md:py-14 2xl:py-16">
          <div className="mb-10 rounded-2xl border border-white/15 bg-[linear-gradient(160deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-5 shadow-[0_22px_48px_rgba(5,1,5,0.35)] backdrop-blur-md md:p-7">
            <div className="mb-5 max-w-2xl">
              <p className="mb-2 font-montserrat text-[10px] uppercase tracking-[0.34em] text-brand-dustyBlue/85">
                {ui.footer.emailList}
              </p>
              <h3 className="font-rozha text-2xl text-brand-stone md:text-3xl">
                {ui.footer.subscribeHeading}
              </h3>
              <p className="mt-2 font-montserrat text-sm leading-relaxed tracking-wide text-white/55">
                {ui.footer.subscribeDescription}
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/20 p-4 md:p-5">
              <SubscribeForm variant="dark" />
            </div>
          </div>

          <div className={`grid grid-cols-1 gap-5 xl:grid-cols-4 xl:gap-12 ${isRTL ? 'text-right' : ''}`}>
            {/* Brand Column with Logo */}
            <div className="xl:col-span-1">
              <div className={`mb-4 flex ${isRTL ? 'justify-end' : 'justify-start'}`}>
                <LocaleLink
                  href="/home"
                  className="inline-flex"
                  aria-label={withBrandAlt('Bint Saeed gold monogram', language)}
                  title="Bint Saeed Abu Dhabi"
                  data-cursor-hover
                >
                  <Image
                    src="/brand/bint-saeed-abu-dhabi-gold-monogram.webp"
                    alt={withBrandAlt('Bint Saeed gold monogram', language)}
                    title="Bint Saeed Abu Dhabi"
                    width={48}
                    height={48}
                    className="h-9 w-9 object-contain opacity-90 transition-opacity hover:opacity-100 md:h-10 md:w-10"
                  />
                </LocaleLink>
              </div>
              <p className="max-w-xs font-montserrat text-[12px] leading-relaxed tracking-[0.03em] text-white/50">
                {t.footer.brandDescription}
              </p>
              <p className="mt-3 font-montserrat text-[12px] tracking-[0.03em] text-white/40">
                {geo.madeIn}
              </p>

              <div className={`mt-6 space-y-4 ${isRTL ? 'items-end' : 'items-start'} flex flex-col`}>
                <div className={`${isRTL ? 'text-right' : 'text-left'}`}>
                  <p className="mb-2 font-montserrat text-[10px] uppercase tracking-[0.18em] text-white/45">
                    {ui.footer.language}
                  </p>
                  <div className="inline-flex border-b border-white/50 pb-1">
                    <LanguageSwitcher variant="light" align="start" />
                  </div>
                </div>

                <div className={`${isRTL ? 'text-right' : 'text-left'}`}>
                  <p className="mb-2 font-montserrat text-[10px] uppercase tracking-[0.18em] text-white/45">
                    {ui.footer.countryRegion}
                  </p>
                  <div className="inline-flex border-b border-white/50 pb-1">
                    <CurrencySwitcher variant="light" showSymbol={false} align="start" />
                  </div>
                </div>
              </div>
            </div>

            {/* Shop */}
            <div className="self-start">
              <button
                type="button"
                onClick={(event) => {
                  prepareFooterToggle(event)
                  setMobileOpenSection((prev) => (prev === 'shop' ? null : 'shop'))
                }}
                className="mb-3 flex w-full items-center justify-between xl:pointer-events-none"
                aria-expanded={mobileOpenSection === 'shop'}
              >
                <h4 className="font-montserrat text-[11px] uppercase tracking-[0.18em] text-brand-dustyBlue">
                  {t.footer.shop}
                </h4>
                <span className="font-montserrat text-[11px] text-white/55 xl:hidden">
                  {mobileOpenSection === 'shop' ? '−' : '+'}
                </span>
              </button>
              <ul className={`space-y-3 ${mobileOpenSection === 'shop' ? 'block' : 'hidden'} xl:block`}>
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
              <button
                type="button"
                onClick={(event) => {
                  prepareFooterToggle(event)
                  setMobileOpenSection((prev) => (prev === 'about' ? null : 'about'))
                }}
                className="mb-3 flex w-full items-center justify-between xl:pointer-events-none"
                aria-expanded={mobileOpenSection === 'about'}
              >
                <h4 className="font-montserrat text-[11px] uppercase tracking-[0.18em] text-brand-dustyBlue">
                  {t.footer.about}
                </h4>
                <span className="font-montserrat text-[11px] text-white/55 xl:hidden">
                  {mobileOpenSection === 'about' ? '−' : '+'}
                </span>
              </button>
              <ul className={`space-y-3 ${mobileOpenSection === 'about' ? 'block' : 'hidden'} xl:block`}>
                {footerLinks.about.map((link) => (
                  <li key={link.href}>
                    <LocaleLink
                      href={link.href}
                      className="font-montserrat text-[12px] tracking-[0.03em] text-white/60 transition-colors hover:text-brand-dustyBlue"
                      data-cursor-hover
                      data-analytics-event={
                        link.href === '/contact'
                          ? 'click_footer_contact'
                          : link.href === '/about'
                            ? 'click_footer_our_story'
                            : undefined
                      }
                      data-analytics-section="footer-about-links"
                    >
                      {link.label}
                    </LocaleLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Help */}
            <div className="self-start">
              <button
                type="button"
                onClick={(event) => {
                  prepareFooterToggle(event)
                  setMobileOpenSection((prev) => (prev === 'help' ? null : 'help'))
                }}
                className="mb-3 flex w-full items-center justify-between xl:pointer-events-none"
                aria-expanded={mobileOpenSection === 'help'}
              >
                <h4 className="font-montserrat text-[11px] uppercase tracking-[0.18em] text-brand-dustyBlue">
                  {t.footer.help}
                </h4>
                <span className="font-montserrat text-[11px] text-white/55 xl:hidden">
                  {mobileOpenSection === 'help' ? '−' : '+'}
                </span>
              </button>
              <ul className={`space-y-3 ${mobileOpenSection === 'help' ? 'block' : 'hidden'} xl:block`}>
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

          <div className="mt-10 border-t border-white/10 pt-8">
            <FooterPaymentMethods
              label={ui.checkout.securePayment}
              align="center"
            />
          </div>
        </div>
      </div>

      {/* Worldwide Shipping Banner - Brand red section */}
      <div className="relative bg-[#6f1524]">
        {/* Subtle deep-red tonal overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#12070a]/40 via-transparent to-[#12070a]/40" />
        
        <div className="relative container mx-auto px-3 sm:px-4 lg:px-5 2xl:px-8 py-8 md:py-9 2xl:py-10">
          <div className={`grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3 xl:gap-8 ${isRTL ? 'text-right' : ''}`}>
            {/* Worldwide Shipping — UAE IPs see AED 1,000 threshold; others see AED 2,000 equivalent */}
            <div className={`flex items-center gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 2xl:h-14 2xl:w-14">
                <FiGlobe className="h-5 w-5 text-white 2xl:h-6 2xl:w-6" />
              </div>
              <div>
                <h4 className="font-montserrat text-[11px] font-medium uppercase tracking-[0.16em] text-white">
                  {ui.footer.worldwideShipping}
                </h4>
                <p className="font-montserrat text-[12px] tracking-[0.03em] text-white/60">
                  {withShippingAmount(ui.footer.deliveredGlobally, complimentaryAmount)}
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
                  {ui.footer.craftedToOrderTitle}
                </h4>
                <p className="font-montserrat text-[12px] tracking-[0.03em] text-white/60">
                  {ui.footer.craftedToOrderDesc}
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
                  {ui.footer.givingForwardTitle}
                </h4>
                <p className="font-montserrat text-[12px] tracking-[0.03em] text-white/60">
                  {ui.footer.givingForwardDesc}
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
            <div className="order-2 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 md:gap-x-6">
              <LocaleLink
                href="/privacy-policy"
                className="inline-flex items-center font-montserrat text-[11px] uppercase leading-none tracking-[0.14em] text-white/50 transition-colors hover:text-brand-stone"
                data-cursor-hover
              >
                {t.footer.privacy}
              </LocaleLink>
              <LocaleLink
                href="/cookie-policy"
                className="inline-flex items-center font-montserrat text-[11px] uppercase leading-none tracking-[0.14em] text-white/50 transition-colors hover:text-brand-stone"
                data-cursor-hover
              >
                {t.footer.cookies}
              </LocaleLink>
              <button
                type="button"
                onClick={() => window.dispatchEvent(new Event('open-cookie-settings'))}
                className="inline-flex items-center border-0 bg-transparent p-0 font-montserrat text-[11px] uppercase leading-none tracking-[0.14em] text-white/50 transition-colors hover:text-brand-stone"
                data-cursor-hover
              >
                {t.footer.cookieSettings}
              </button>
              <LocaleLink
                href="/terms"
                className="inline-flex items-center font-montserrat text-[11px] uppercase leading-none tracking-[0.14em] text-white/50 transition-colors hover:text-brand-stone"
                data-cursor-hover
              >
                {t.footer.terms}
              </LocaleLink>
              <LocaleLink
                href="/shipment-return-policy"
                className="inline-flex basis-full items-center justify-center font-montserrat text-[11px] uppercase leading-none tracking-[0.14em] text-white/50 transition-colors hover:text-brand-stone sm:basis-auto"
                data-cursor-hover
              >
                {ui.checkout.shipmentPolicy}
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
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/12 bg-white/5 text-white/50 transition-all hover:-translate-y-0.5 hover:border-brand-stone/40 hover:bg-white/10 hover:text-brand-stone md:h-10 md:w-10"
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
