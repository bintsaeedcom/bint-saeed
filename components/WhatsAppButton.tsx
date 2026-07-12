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
  const className = `fixed z-40 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-[bottom,box-shadow] duration-300 hover:shadow-xl sm:h-14 sm:w-14 ${
    isRTL ? 'left-4 sm:left-6' : 'right-4 sm:right-6'
  }`
  const style = {
    bottom: 'calc(var(--mobile-bottom-chrome, 0px) + 1.15rem)',
  } as const

  const inner = (
    <>
      <FaWhatsapp className="h-6 w-6 text-white sm:h-7 sm:w-7" />
      <span
        className="pointer-events-none absolute inset-0 rounded-full bg-[#25D366] opacity-25 animate-ping"
        aria-hidden
      />
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
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className={className}
        style={style}
        data-cursor-hover
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
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className={className}
      style={style}
    >
      <LocaleLink
        href={href}
        className="flex h-full w-full items-center justify-center"
        data-cursor-hover
        aria-label="Contact us (set NEXT_PUBLIC_WHATSAPP_NUMBER for WhatsApp)"
        title="Contact — add WhatsApp number in .env.local to open chat"
      >
        {inner}
      </LocaleLink>
    </motion.div>
  )
}
