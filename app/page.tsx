'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FiInstagram, FiMail, FiArrowRight } from 'react-icons/fi'
import { FaSnapchat, FaWhatsapp } from 'react-icons/fa6'

export default function ComingSoonPage() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        setIsSubmitted(true)
        setEmail('')
      }
    } catch (error) {
      console.error('Subscription error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-brand-darkRed relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2 }}
          className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-stone rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.08 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-dustyBlue rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          transition={{ duration: 2, delay: 1 }}
          className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-brand-rose rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
        />
      </div>

      {/* Decorative Lines */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute left-[10%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent origin-top"
        />
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.5, delay: 0.7 }}
          className="absolute right-[10%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent origin-top"
        />
      </div>

      {/* Main Content */}
      <div className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-16"
        >
          <Image
            src="/logo.png"
            alt="Bint Saeed"
            width={350}
            height={100}
            className="w-auto h-20 md:h-28 lg:h-32"
            priority
          />
        </motion.div>

        {/* Coming Soon Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="font-rozha text-5xl md:text-7xl lg:text-8xl text-white mb-6 tracking-wide">
            Coming Soon
          </h1>
          <div className="w-24 h-px bg-brand-stone mx-auto mb-8" />
          <p className="font-roboto text-white/70 text-lg md:text-xl tracking-[0.15em] uppercase max-w-xl mx-auto leading-relaxed">
            Luxury Abayas Crafted with Heritage
          </p>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="font-roboto text-white/50 text-sm md:text-base tracking-wide text-center max-w-md mx-auto mb-16 leading-relaxed"
        >
          Where traditional Emirati craftsmanship meets contemporary elegance. 
          Each piece tells a story of heritage, designed for the modern woman.
        </motion.p>

        {/* Email Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="w-full max-w-md mb-16"
        >
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-brand-stone/20 flex items-center justify-center mx-auto mb-4">
                <FiMail className="w-8 h-8 text-brand-stone" />
              </div>
              <p className="font-roboto text-white text-lg tracking-wide">
                Thank you for subscribing
              </p>
              <p className="font-roboto text-white/50 text-sm mt-2">
                We'll notify you when we launch
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="font-roboto text-white/60 text-xs uppercase tracking-[0.2em] text-center mb-4">
                Be the first to know
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 bg-white/5 border border-white/20 text-white placeholder:text-white/30 font-roboto text-sm tracking-wide focus:outline-none focus:border-brand-stone transition-colors"
                  required
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="px-8 py-4 bg-brand-stone text-brand-darkRed font-roboto text-sm uppercase tracking-[0.15em] hover:bg-white transition-colors disabled:opacity-50 flex items-center justify-center gap-2 group"
                >
                  {isLoading ? (
                    'Subscribing...'
                  ) : (
                    <>
                      Notify Me
                      <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex items-center gap-8"
        >
          <Link
            href="https://www.instagram.com/bintsaeed_brand/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/50 hover:text-brand-stone transition-colors"
            aria-label="Instagram"
          >
            <FiInstagram className="w-6 h-6" />
          </Link>
          <Link
            href="https://snapchat.com/bintsaeed"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/50 hover:text-brand-stone transition-colors"
            aria-label="Snapchat"
          >
            <FaSnapchat className="w-6 h-6" />
          </Link>
          <Link
            href="https://wa.me/971000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/50 hover:text-brand-stone transition-colors"
            aria-label="WhatsApp"
          >
            <FaWhatsapp className="w-6 h-6" />
          </Link>
        </motion.div>

        {/* Location Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <p className="font-roboto text-white/30 text-xs uppercase tracking-[0.3em]">
            Abu Dhabi · Dubai · Riyadh
          </p>
        </motion.div>
      </div>

      {/* Corner Accents */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l border-t border-white/10" />
      <div className="absolute top-8 right-8 w-16 h-16 border-r border-t border-white/10" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l border-b border-white/10" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r border-b border-white/10" />
    </div>
  )
}
