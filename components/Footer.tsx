'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaInstagram, FaPinterest, FaTiktok, FaWhatsapp, FaSnapchat, FaXTwitter } from 'react-icons/fa6'
import { FiArrowRight, FiGlobe, FiTruck, FiClock } from 'react-icons/fi'
import SubscribeForm from './SubscribeForm'
import { useLanguage } from '@/lib/i18n/LanguageContext'

const socialLinks = [
  { icon: FaInstagram, href: 'https://www.instagram.com/bintsaeed_brand/', label: 'Instagram' },
  { icon: FaTiktok, href: 'https://tiktok.com/@bintsaeed', label: 'TikTok' },
  { icon: FaSnapchat, href: 'https://snapchat.com/add/bintsaeed', label: 'Snapchat' },
  { icon: FaXTwitter, href: 'https://x.com/bintsaeed', label: 'X' },
  { icon: FaPinterest, href: 'https://pinterest.com/bintsaeed', label: 'Pinterest' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const { t, isRTL } = useLanguage()

  const footerLinks = {
    shop: [
      { label: t.footer.newArrivals, href: '/shop' },
      { label: t.footer.bestsellers, href: '/shop' },
      { label: t.footer.eveningWear, href: '/shop' },
      { label: t.footer.readyToWear, href: '/shop' },
      { label: t.footer.accessories, href: '/shop' },
    ],
    about: [
      { label: t.footer.ourStory, href: '/about' },
      { label: t.footer.craftsmanship, href: '/about' },
      { label: t.footer.sustainability, href: '/about' },
      { label: t.footer.careers, href: '/about' },
    ],
    help: [
      { label: t.footer.contactUs, href: '/contact' },
      { label: t.footer.shippingReturns, href: '/terms' },
      { label: t.footer.sizeGuide, href: '/size-guide' },
      { label: t.footer.faq, href: '/faq' },
    ],
  }

  return (
    <footer className="text-white">
      {/* Newsletter & WhatsApp Section */}
      <div className="bg-brand-clayRed">
        <div className="container mx-auto px-6 lg:px-12 py-16 md:py-20">
          <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 ${isRTL ? 'text-right' : ''}`}>
            {/* Newsletter */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="font-rozha text-3xl md:text-4xl mb-4">
                  {t.footer.stayConnected}
                </h3>
                <p className="font-roboto text-sm tracking-[0.1em] text-white/60 mb-8 max-w-md">
                  {t.footer.subscribeDescription}
                </p>
                <SubscribeForm />
              </motion.div>
            </div>

            {/* WhatsApp Community */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h3 className="font-rozha text-3xl md:text-4xl mb-4">
                  {t.footer.joinCommunity}
                </h3>
                <p className="font-roboto text-sm tracking-[0.1em] text-white/60 mb-8 max-w-md">
                  {t.footer.communityDescription}
                </p>
                <a
                  href="https://chat.whatsapp.com/YOUR_COMMUNITY_LINK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] text-white font-roboto text-xs uppercase tracking-[0.15em] hover:bg-[#128C7E] transition-colors ${isRTL ? 'flex-row-reverse' : ''}`}
                  data-cursor-hover
                >
                  <FaWhatsapp className="w-5 h-5" />
                  {t.footer.joinWhatsApp}
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="bg-brand-darkRed border-b border-white/10">
        <div className="container mx-auto px-6 lg:px-12 py-16">
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 ${isRTL ? 'text-right' : ''}`}>
            {/* Brand Column */}
            <div className="col-span-2 md:col-span-1">
              <Link href="/" data-cursor-hover>
                <Image
                  src="/logo.png"
                  alt="Bint Saeed"
                  width={220}
                  height={70}
                  className="h-16 w-auto mb-6"
                />
              </Link>
              <p className="font-roboto text-xs text-white/50 tracking-wide leading-relaxed max-w-xs">
                {t.footer.brandDescription}
              </p>
            </div>

            {/* Shop */}
            <div>
              <h4 className="font-roboto text-xs uppercase tracking-[0.2em] text-white mb-6">
                {t.footer.shop}
              </h4>
              <ul className="space-y-3">
                {footerLinks.shop.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="font-roboto text-sm text-white/60 hover:text-white transition-colors tracking-wide"
                      data-cursor-hover
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* About */}
            <div>
              <h4 className="font-roboto text-xs uppercase tracking-[0.2em] text-white mb-6">
                {t.footer.about}
              </h4>
              <ul className="space-y-3">
                {footerLinks.about.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="font-roboto text-sm text-white/60 hover:text-white transition-colors tracking-wide"
                      data-cursor-hover
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Help */}
            <div>
              <h4 className="font-roboto text-xs uppercase tracking-[0.2em] text-white mb-6">
                {t.footer.help}
              </h4>
              <ul className="space-y-3">
                {footerLinks.help.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="font-roboto text-sm text-white/60 hover:text-white transition-colors tracking-wide"
                      data-cursor-hover
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Worldwide Shipping Banner */}
      <div className="bg-brand-darkRed border-t border-white/10">
        <div className="container mx-auto px-6 lg:px-12 py-8">
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 ${isRTL ? 'text-right' : ''}`}>
            {/* Worldwide Shipping */}
            <div className={`flex items-center gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                <FiGlobe className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-roboto text-sm font-medium text-white uppercase tracking-wider">
                  {isRTL ? 'شحن عالمي' : 'Worldwide Shipping'}
                </h4>
                <p className="font-roboto text-xs text-white/50 tracking-wide">
                  {isRTL ? 'نشحن إلى جميع أنحاء العالم' : 'We deliver to every corner of the globe'}
                </p>
              </div>
            </div>

            {/* Free GCC Shipping */}
            <div className={`flex items-center gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                <FiTruck className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-roboto text-sm font-medium text-white uppercase tracking-wider">
                  {isRTL ? 'شحن مجاني للخليج' : 'Free GCC Shipping'}
                </h4>
                <p className="font-roboto text-xs text-white/50 tracking-wide">
                  {isRTL ? 'للطلبات فوق 500 درهم' : 'On orders over 500 AED'}
                </p>
              </div>
            </div>

            {/* Handcrafted */}
            <div className={`flex items-center gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                <FiClock className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-roboto text-sm font-medium text-white uppercase tracking-wider">
                  {isRTL ? 'صناعة يدوية' : 'Handcrafted'}
                </h4>
                <p className="font-roboto text-xs text-white/50 tracking-wide">
                  {isRTL ? 'توصيل خلال أسبوعين' : 'Delivered within 2 weeks'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-brand-darkRed">
        <div className="container mx-auto px-6 lg:px-12 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Copyright - Left */}
            <p className="font-roboto text-xs tracking-[0.1em] text-white/40 order-3 md:order-1">
              © {currentYear} Bint Saeed. {t.footer.allRightsReserved}
            </p>

            {/* Legal Links - Center */}
            <div className="flex flex-wrap justify-center gap-6 order-2">
              <Link
                href="/privacy-policy"
                className="font-roboto text-xs uppercase tracking-[0.15em] text-white/50 hover:text-white transition-colors"
                data-cursor-hover
              >
                {t.footer.privacy}
              </Link>
              <Link
                href="/cookie-policy"
                className="font-roboto text-xs uppercase tracking-[0.15em] text-white/50 hover:text-white transition-colors"
                data-cursor-hover
              >
                {t.footer.cookies}
              </Link>
              <Link
                href="/terms"
                className="font-roboto text-xs uppercase tracking-[0.15em] text-white/50 hover:text-white transition-colors"
                data-cursor-hover
              >
                {t.footer.terms}
              </Link>
            </div>

            {/* Social Icons - Right */}
            <div className="flex items-center gap-4 order-1 md:order-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center text-white/50 hover:text-white transition-colors"
                  aria-label={social.label}
                  data-cursor-hover
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
