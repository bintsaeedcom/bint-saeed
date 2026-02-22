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
  { icon: FaSnapchat, href: 'https://snapchat.com/t/W1nDzIXS', label: 'Snapchat' },
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
    <footer className="relative overflow-hidden">
      {/* Newsletter & WhatsApp Section - Coming Soon Style (Keep as is) */}
      <div className="relative text-white">
        {/* Coming Soon gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#2a0012] via-[#1a0008] to-[#1a0008]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(146,170,193,0.08)_0%,_transparent_70%)]" />
        
        {/* Geometric Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
          <defs>
            <linearGradient id="footerLineH" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="rgba(146,170,193,0.15)" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <motion.line 
            x1="0" y1="30%" x2="100%" y2="30%" 
            stroke="url(#footerLineH)" strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
          />
          <motion.line 
            x1="0" y1="70%" x2="100%" y2="70%" 
            stroke="url(#footerLineH)" strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay: 0.3 }}
          />
        </svg>

        {/* Decorative Corners */}
        <motion.div 
          className="absolute top-8 left-8 w-20 h-20 md:w-28 md:h-28 pointer-events-none"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-brand-dustyBlue/50 to-transparent" />
          <div className="absolute top-0 left-0 w-[2px] h-full bg-gradient-to-b from-brand-dustyBlue/50 to-transparent" />
        </motion.div>
        <motion.div 
          className="absolute top-8 right-8 w-20 h-20 md:w-28 md:h-28 pointer-events-none"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1 }}
        >
          <div className="absolute top-0 right-0 w-full h-[2px] bg-gradient-to-l from-brand-dustyBlue/50 to-transparent" />
          <div className="absolute top-0 right-0 w-[2px] h-full bg-gradient-to-b from-brand-dustyBlue/50 to-transparent" />
        </motion.div>

        <div className="relative container mx-auto px-6 lg:px-12 py-20 md:py-24">
          <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 ${isRTL ? 'text-right' : ''}`}>
            {/* Newsletter - Glassmorphism Box with thicker border */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <div className="absolute -inset-[2px] rounded-2xl bg-gradient-to-b from-brand-dustyBlue/30 via-brand-dustyBlue/10 to-brand-stone/20" />
                <div className="relative backdrop-blur-sm bg-white/[0.03] rounded-2xl p-8 md:p-10 border border-brand-dustyBlue/20">
                  <span className="font-roboto text-[10px] uppercase tracking-[0.3em] text-brand-dustyBlue/60 mb-4 block">
                    {isRTL ? 'انضم إلينا' : 'Join Us'}
                  </span>
                  <h3 className="font-rozha text-3xl md:text-4xl mb-4 text-white">
                    {t.footer.stayConnected}
                  </h3>
                  <p className="font-roboto text-sm tracking-wide text-white/50 mb-8 max-w-md">
                    {t.footer.subscribeDescription}
                  </p>
                  <SubscribeForm variant="dark" />
                </div>
              </div>
            </motion.div>

            {/* WhatsApp Community - Glassmorphism Box with thicker border */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="relative">
                <div className="absolute -inset-[2px] rounded-2xl bg-gradient-to-b from-brand-dustyBlue/30 via-brand-dustyBlue/10 to-brand-stone/20" />
                <div className="relative backdrop-blur-sm bg-white/[0.03] rounded-2xl p-8 md:p-10 border border-brand-dustyBlue/20">
                  <span className="font-roboto text-[10px] uppercase tracking-[0.3em] text-brand-dustyBlue/60 mb-4 block">
                    {isRTL ? 'المجتمع' : 'Community'}
                  </span>
                  <h3 className="font-rozha text-3xl md:text-4xl mb-4 text-white">
                    {t.footer.joinCommunity}
                  </h3>
                  <p className="font-roboto text-sm tracking-wide text-white/50 mb-8 max-w-md">
                    {t.footer.communityDescription}
                  </p>
                  <a
                    href="https://chat.whatsapp.com/YOUR_COMMUNITY_LINK"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] text-white font-roboto text-xs uppercase tracking-[0.15em] rounded-xl hover:bg-[#128C7E] transition-colors ${isRTL ? 'flex-row-reverse' : ''}`}
                    data-cursor-hover
                  >
                    <FaWhatsapp className="w-5 h-5" />
                    {t.footer.joinWhatsApp}
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Footer Links - Coming Soon Dark Gradient Style */}
      <div className="relative text-white">
        {/* Coming Soon gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a0008] via-[#1a0008] to-[#2a0012]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(146,170,193,0.06)_0%,_transparent_70%)]" />
        
        {/* Geometric Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
          <defs>
            <linearGradient id="footerLinksLineH" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="rgba(146,170,193,0.12)" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <motion.line 
            x1="0" y1="50%" x2="100%" y2="50%" 
            stroke="url(#footerLinksLineH)" strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
          />
        </svg>
        
        {/* Dusty blue accent line at top */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand-dustyBlue/40 to-transparent" />
        
        <div className="relative container mx-auto px-6 lg:px-12 py-16">
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 ${isRTL ? 'text-right' : ''}`}>
            {/* Brand Column with Logo */}
            <div className="col-span-2 md:col-span-1">
              <Link href="/preview" data-cursor-hover className="inline-block mb-6">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/logo.png"
                    alt="Bint Saeed"
                    width={160}
                    height={40}
                    className="h-[38px] w-[152px] object-contain"
                  />
                </motion.div>
              </Link>
              <p className="font-roboto text-xs text-white/50 tracking-wide leading-relaxed max-w-xs">
                {t.footer.brandDescription}
              </p>
            </div>

            {/* Shop */}
            <div>
              <h4 className="font-roboto text-xs uppercase tracking-[0.2em] text-brand-dustyBlue mb-6">
                {t.footer.shop}
              </h4>
              <ul className="space-y-3">
                {footerLinks.shop.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="font-roboto text-sm text-white/60 hover:text-brand-dustyBlue transition-colors tracking-wide"
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
              <h4 className="font-roboto text-xs uppercase tracking-[0.2em] text-brand-dustyBlue mb-6">
                {t.footer.about}
              </h4>
              <ul className="space-y-3">
                {footerLinks.about.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="font-roboto text-sm text-white/60 hover:text-brand-dustyBlue transition-colors tracking-wide"
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
              <h4 className="font-roboto text-xs uppercase tracking-[0.2em] text-brand-dustyBlue mb-6">
                {t.footer.help}
              </h4>
              <ul className="space-y-3">
                {footerLinks.help.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="font-roboto text-sm text-white/60 hover:text-brand-dustyBlue transition-colors tracking-wide"
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

      {/* Worldwide Shipping Banner - Clay Red/Rose accent section */}
      <div className="relative bg-brand-clayRed/90">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-rose/20 via-transparent to-brand-rose/20" />
        
        <div className="relative container mx-auto px-6 lg:px-12 py-10">
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 ${isRTL ? 'text-right' : ''}`}>
            {/* Worldwide Shipping */}
            <div className={`flex items-center gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <div className="w-14 h-14 bg-white/10 border border-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                <FiGlobe className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-roboto text-sm font-medium text-white uppercase tracking-wider">
                  {isRTL ? 'شحن عالمي' : 'Worldwide Shipping'}
                </h4>
                <p className="font-roboto text-xs text-white/60 tracking-wide">
                  {isRTL ? 'نشحن إلى جميع أنحاء العالم' : 'We deliver to every corner of the globe'}
                </p>
              </div>
            </div>

            {/* Free GCC Shipping */}
            <div className={`flex items-center gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <div className="w-14 h-14 bg-white/10 border border-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                <FiTruck className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-roboto text-sm font-medium text-white uppercase tracking-wider">
                  {isRTL ? 'شحن مجاني للخليج' : 'Free GCC Shipping'}
                </h4>
                <p className="font-roboto text-xs text-white/60 tracking-wide">
                  {isRTL ? 'للطلبات فوق 500 درهم' : 'On orders over 500 AED'}
                </p>
              </div>
            </div>

            {/* Handcrafted */}
            <div className={`flex items-center gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <div className="w-14 h-14 bg-white/10 border border-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                <FiClock className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-roboto text-sm font-medium text-white uppercase tracking-wider">
                  {isRTL ? 'صناعة يدوية' : 'Handcrafted'}
                </h4>
                <p className="font-roboto text-xs text-white/60 tracking-wide">
                  {isRTL ? 'توصيل خلال أسبوعين' : 'Delivered within 2 weeks'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar - Dark Red with elegant accents */}
      <div className="relative bg-brand-darkRed">
        {/* Dusty blue accent line at top */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-dustyBlue/30 to-transparent" />
        
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
                className="font-roboto text-xs uppercase tracking-[0.15em] text-white/50 hover:text-brand-stone transition-colors"
                data-cursor-hover
              >
                {t.footer.privacy}
              </Link>
              <Link
                href="/cookie-policy"
                className="font-roboto text-xs uppercase tracking-[0.15em] text-white/50 hover:text-brand-stone transition-colors"
                data-cursor-hover
              >
                {t.footer.cookies}
              </Link>
              <Link
                href="/terms"
                className="font-roboto text-xs uppercase tracking-[0.15em] text-white/50 hover:text-brand-stone transition-colors"
                data-cursor-hover
              >
                {t.footer.terms}
              </Link>
            </div>

            {/* Social Icons - Right */}
            <div className="flex items-center gap-3 order-1 md:order-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white/50 hover:text-brand-stone hover:border-brand-stone/30 transition-all"
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
