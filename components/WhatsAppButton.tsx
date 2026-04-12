'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa6'
import { useLanguage } from '@/lib/i18n/LanguageContext'

const MotionLink = motion(Link)

/** Default Bint Saeed WhatsApp (+971 50 229 9402). Override with NEXT_PUBLIC_WHATSAPP_NUMBER if needed. */
const DEFAULT_WHATSAPP = '+971502299402'

function getWhatsAppHref(defaultMessage: string): { href: string; external: boolean } {
  const raw = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.trim() || DEFAULT_WHATSAPP
  const digits = raw.replace(/\D/g, '')
  // E.164: up to 15 digits; require at least a plausible full number (country + subscriber)
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

  const className = `fixed bottom-6 ${isRTL ? 'left-6' : 'right-6'} z-30 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-shadow hover:shadow-xl`

  const inner = (
    <>
      <FaWhatsapp className="h-7 w-7 text-white" />
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
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className={className}
        data-cursor-hover
        aria-label="Contact us on WhatsApp"
      >
        {inner}
      </motion.a>
    )
  }

  return (
    <MotionLink
      href={href}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className={className}
      data-cursor-hover
      aria-label="Contact us (set NEXT_PUBLIC_WHATSAPP_NUMBER for WhatsApp)"
      title="Contact — add WhatsApp number in .env.local to open chat"
    >
      {inner}
    </MotionLink>
  )
}
