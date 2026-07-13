'use client'

import { motion } from 'framer-motion'
import LocaleLink from '@/components/LocaleLink'
import { FaWhatsapp } from 'react-icons/fa6'
import { useLanguage } from '@/lib/i18n/LanguageContext'

/** Default Bint Saeed WhatsApp (+971 50 229 9402). Override with NEXT_PUBLIC_WHATSAPP_NUMBER if needed. */
const DEFAULT_WHATSAPP = '+971502299402'

function getWhatsAppHref(defaultMessage: string): { href: string; external: boolean } {
  const raw = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.trim() || DEFAULT_WHATSAPP
  const digits = raw.replace(/\D/g, '')
  if (digits.length >= 10 && digits.length <= 15) {
    const text = encodeURIComponent(defaultMessage)
    return { href: `https://wa.me/${digits}?text=${text}`, external: true }
  }
  return { href: '/contact', external: false }
}

export default function WhatsAppButton() {
  const { isRTL } = useLanguage()
  const defaultMessage = 'Hello Bint Saeed! I would like to inquire about your collection.'
  const { href, external } = getWhatsAppHref(defaultMessage)

  // Sits clear of sticky ATC / cart / cookie via --mobile-bottom-chrome
  const className = [
    'group fixed z-40 flex h-12 w-12 items-center justify-center rounded-full sm:h-14 sm:w-14',
    'border border-[#e8d8c8]/28 bg-[#1a0210]',
    'shadow-[0_14px_36px_-12px_rgba(26,2,16,0.55),inset_0_1px_0_rgba(232,216,200,0.12)]',
    'transition-[bottom,box-shadow,background-color,border-color,transform] duration-300',
    'hover:border-[#e8d8c8]/50 hover:bg-[#2d141e]',
    'hover:shadow-[0_18px_44px_-14px_rgba(26,2,16,0.62),inset_0_1px_0_rgba(232,216,200,0.18)]',
    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e8d8c8]/55',
    isRTL ? 'left-4 sm:left-6' : 'right-4 sm:right-6',
  ].join(' ')

  const style = {
    bottom: 'calc(var(--mobile-bottom-chrome, 0px) + 1.15rem)',
  } as const

  const inner = (
    <>
      {/* Soft outer halo — wine, not WhatsApp green */}
      <span
        className="pointer-events-none absolute -inset-1 rounded-full border border-[#e8d8c8]/10 opacity-80 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden
      />
      <FaWhatsapp className="relative z-[1] h-[1.35rem] w-[1.35rem] text-[#e8d8c8] transition-colors duration-300 group-hover:text-[#f3ebe3] sm:h-6 sm:w-6" />
    </>
  )

  if (external) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, type: 'spring', stiffness: 200 }}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.96 }}
        className={className}
        style={style}
        data-cursor-hover
        data-whatsapp-button
        aria-label="Contact us on WhatsApp"
      >
        {inner}
      </motion.a>
    )
  }

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.96 }}
      className={className}
      style={style}
      data-whatsapp-button
    >
      <LocaleLink
        href={href}
        className="relative flex h-full w-full items-center justify-center"
        data-cursor-hover
        aria-label="Contact us (set NEXT_PUBLIC_WHATSAPP_NUMBER for WhatsApp)"
        title="Contact — add WhatsApp number in .env.local to open chat"
      >
        {inner}
      </LocaleLink>
    </motion.div>
  )
}
