'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { FiHome, FiShoppingBag, FiMail, FiArrowRight } from 'react-icons/fi'
import { useLanguage } from '@/lib/i18n/LanguageContext'

export default function NotFound() {
  const { isRTL } = useLanguage()

  return (
    <div className={`min-h-screen bg-white flex items-center justify-center px-4 sm:px-6 safe-area-inset ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="text-center max-w-xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Logo */}
          <div className="mb-8">
            <Link href="/" data-cursor-hover>
              <Image
                src="/logo.png"
                alt="Bint Saeed"
                width={180}
                height={60}
                className="h-12 sm:h-16 w-auto mx-auto"
              />
            </Link>
          </div>

          {/* 404 Number with brand styling */}
          <div className="relative mb-4">
            <h1 className="font-rozha text-[100px] sm:text-[150px] md:text-[180px] text-brand-stone/20 leading-none select-none">
              404
            </h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-rozha text-4xl sm:text-5xl text-brand-darkRed">
                {isRTL ? 'الصفحة غير موجودة' : 'Page Not Found'}
              </span>
            </div>
          </div>
          
          {/* Description */}
          <p className={`font-roboto text-sm sm:text-base text-brand-clayRed/70 tracking-wide mb-8 sm:mb-10 max-w-md mx-auto px-4 ${isRTL ? 'text-right' : ''}`}>
            {isRTL 
              ? 'الصفحة التي تبحثين عنها غير موجودة أو تم نقلها. دعينا نساعدك في العثور على ما تبحثين عنه.'
              : 'The page you\'re looking for doesn\'t exist or has been moved. Let us help you find what you\'re looking for.'}
          </p>
          
          {/* Action Buttons */}
          <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
            <Link
              href="/"
              className={`inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-brand-darkRed text-white font-roboto text-xs sm:text-sm uppercase tracking-[0.15em] hover:bg-brand-dustyBlue transition-colors ${isRTL ? 'flex-row-reverse' : ''}`}
              data-cursor-hover
            >
              <FiHome className="w-4 h-4" />
              {isRTL ? 'العودة للرئيسية' : 'Back to Home'}
            </Link>
            <Link
              href="/shop"
              className={`inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 border border-brand-darkRed text-brand-darkRed font-roboto text-xs sm:text-sm uppercase tracking-[0.15em] hover:bg-brand-dustyBlue hover:text-white transition-colors ${isRTL ? 'flex-row-reverse' : ''}`}
              data-cursor-hover
            >
              <FiShoppingBag className="w-4 h-4" />
              {isRTL ? 'تسوقي الآن' : 'Shop Collection'}
            </Link>
          </div>

          {/* Decorative line */}
          <div className="flex items-center justify-center gap-4 my-8 sm:my-10">
            <div className="w-16 sm:w-24 h-px bg-brand-stone/30" />
            <span className="font-rozha text-brand-stone/50 text-lg">✦</span>
            <div className="w-16 sm:w-24 h-px bg-brand-stone/30" />
          </div>

          {/* Popular Links */}
          <div className={`${isRTL ? 'text-right' : ''}`}>
            <p className="font-roboto text-xs uppercase tracking-[0.2em] text-brand-clayRed/50 mb-4">
              {isRTL ? 'روابط مفيدة' : 'Popular Pages'}
            </p>
            <div className={`flex flex-wrap justify-center gap-4 sm:gap-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
              {[
                { href: '/about', label: isRTL ? 'من نحن' : 'About Us' },
                { href: '/accessories', label: isRTL ? 'الإكسسوارات' : 'Accessories' },
                { href: '/heritage', label: isRTL ? 'التراث' : 'Heritage' },
                { href: '/contact', label: isRTL ? 'تواصلي معنا' : 'Contact' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-roboto text-xs sm:text-sm text-brand-clayRed hover:text-brand-dustyBlue transition-colors underline-hover"
                  data-cursor-hover
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className={`mt-8 sm:mt-10 pt-6 border-t border-brand-stone/20 ${isRTL ? 'text-right' : ''}`}>
            <p className="font-roboto text-xs text-brand-clayRed/50 tracking-wide">
              {isRTL ? 'تحتاجين مساعدة؟' : 'Need help?'}
            </p>
            <a 
              href="mailto:contact@bintsaeed.com"
              className={`inline-flex items-center gap-2 mt-2 font-roboto text-sm text-brand-darkRed hover:text-brand-dustyBlue transition-colors ${isRTL ? 'flex-row-reverse' : ''}`}
              data-cursor-hover
            >
              <FiMail className="w-4 h-4" />
              contact@bintsaeed.com
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
