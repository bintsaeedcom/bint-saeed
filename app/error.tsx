'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { FiRefreshCw, FiHome, FiAlertTriangle } from 'react-icons/fi'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log error to monitoring service in production
    console.error('Application error:', error)
  }, [error])

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 sm:px-6 safe-area-inset">
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

          {/* Error Icon */}
          <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-6 bg-brand-rose/10 rounded-full flex items-center justify-center">
            <FiAlertTriangle className="w-10 h-10 sm:w-12 sm:h-12 text-brand-clayRed" />
          </div>

          {/* Title */}
          <h1 className="font-rozha text-3xl sm:text-4xl md:text-5xl text-brand-darkRed mb-4">
            Something Went Wrong
          </h1>
          
          {/* Description */}
          <p className="font-roboto text-sm sm:text-base text-brand-clayRed/70 tracking-wide mb-8 max-w-md mx-auto px-4">
            We apologize for the inconvenience. Please try again, or contact us if the problem persists.
          </p>

          {/* Error digest for support */}
          {error.digest && (
            <p className="font-roboto text-xs text-brand-stone mb-6 px-4">
              Error ID: {error.digest}
            </p>
          )}
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <button
              onClick={() => reset()}
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-brand-darkRed text-white font-roboto text-xs sm:text-sm uppercase tracking-[0.15em] hover:bg-brand-dustyBlue transition-colors"
              data-cursor-hover
            >
              <FiRefreshCw className="w-4 h-4" />
              Try Again
            </button>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 border border-brand-darkRed text-brand-darkRed font-roboto text-xs sm:text-sm uppercase tracking-[0.15em] hover:bg-brand-dustyBlue hover:text-white transition-colors"
              data-cursor-hover
            >
              <FiHome className="w-4 h-4" />
              Go to Home
            </Link>
          </div>

          {/* Decorative line */}
          <div className="flex items-center justify-center gap-4 my-8 sm:my-10">
            <div className="w-16 sm:w-24 h-px bg-brand-stone/30" />
            <span className="font-rozha text-brand-stone/50 text-lg">✦</span>
            <div className="w-16 sm:w-24 h-px bg-brand-stone/30" />
          </div>

          {/* Contact Support */}
          <div className="pt-6 border-t border-brand-stone/20">
            <p className="font-roboto text-xs text-brand-clayRed/50 tracking-wide mb-2">
              Need assistance?
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
              <a 
                href="mailto:contact@bintsaeed.com"
                className="font-roboto text-brand-darkRed hover:text-brand-dustyBlue transition-colors"
                data-cursor-hover
              >
                contact@bintsaeed.com
              </a>
              <span className="hidden sm:block text-brand-stone">•</span>
              <a 
                href="https://wa.me/971XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="font-roboto text-brand-darkRed hover:text-brand-dustyBlue transition-colors"
                data-cursor-hover
              >
                WhatsApp Support
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
