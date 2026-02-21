'use client'

import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa6'
import { useLanguage } from '@/lib/i18n/LanguageContext'

export default function WhatsAppButton() {
  const { isRTL } = useLanguage()
  const phoneNumber = '+971XXXXXXXXX' // Replace with actual number
  const message = encodeURIComponent('Hello Bint Saeed! I would like to inquire about your collection.')
  
  return (
    <motion.a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className={`fixed bottom-6 ${isRTL ? 'left-6' : 'right-6'} z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow`}
      data-cursor-hover
      aria-label="Contact us on WhatsApp"
    >
      <FaWhatsapp className="w-7 h-7 text-white" />
      
      {/* Pulse animation */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />
    </motion.a>
  )
}
