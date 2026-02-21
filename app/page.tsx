'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FiInstagram, FiArrowRight, FiCheck } from 'react-icons/fi'
import { FaSnapchat } from 'react-icons/fa6'

export default function ComingSoonPage() {
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email) {
      return 'Please enter your email'
    }
    if (!emailRegex.test(email)) {
      return 'Please enter a valid email address'
    }
    const domain = email.split('@')[1]?.toLowerCase()
    const commonTypos: { [key: string]: string } = {
      'gmial.com': 'gmail.com',
      'gmal.com': 'gmail.com',
      'gamil.com': 'gmail.com',
      'gnail.com': 'gmail.com',
      'gmail.co': 'gmail.com',
      'hotmal.com': 'hotmail.com',
      'hotmai.com': 'hotmail.com',
      'hotmial.com': 'hotmail.com',
      'outlok.com': 'outlook.com',
      'outloo.com': 'outlook.com',
      'yahooo.com': 'yahoo.com',
      'yaho.com': 'yahoo.com',
    }
    if (domain && commonTypos[domain]) {
      return `Did you mean ${email.split('@')[0]}@${commonTypos[domain]}?`
    }
    return ''
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setEmail(value)
    setSubmitError('')
    if (emailError) {
      setEmailError(validateEmail(value))
    }
  }

  const handleEmailBlur = () => {
    if (email) {
      setEmailError(validateEmail(email))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    const error = validateEmail(email)
    if (error) {
      setEmailError(error)
      return
    }

    setIsLoading(true)
    setEmailError('')
    setSubmitError('')
    
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 10000)
    
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'coming-soon' }),
        signal: controller.signal,
      })

      clearTimeout(timeoutId)

      if (response.ok) {
        setIsSubmitted(true)
        setEmail('')
      } else {
        setSubmitError('Something went wrong. Please try again.')
      }
    } catch (error: any) {
      clearTimeout(timeoutId)
      if (error.name === 'AbortError') {
        setSubmitError('Request timed out. Please try again.')
      } else {
        setSubmitError('Something went wrong. Please try again.')
      }
    } finally {
      setIsLoading(false)
    }
  }

  if (!mounted) return null

  return (
    <div className="h-[100dvh] bg-brand-darkRed relative overflow-hidden">
      {/* Clean gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#2d0012] via-brand-darkRed to-[#2a0010]" />

      {/* Static ambient glow - no animation */}
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full bg-brand-dustyBlue/[0.07] blur-[100px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] md:w-[350px] md:h-[350px] rounded-full bg-brand-stone/[0.06] blur-[100px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-brand-rose/[0.03] blur-[120px]" />

      {/* Main Content - fits viewport without scroll */}
      <div className="relative h-full flex flex-col items-center justify-center px-6 py-8 md:py-12">
        
        {/* Logo - Premium and refined */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 md:mb-8 relative"
        >
          {/* Subtle glow behind logo */}
          <div className="absolute inset-0 blur-2xl opacity-30 scale-150">
            <div className="w-full h-full bg-brand-dustyBlue/30 rounded-full" />
          </div>
          <Image
            src="/logo.png"
            alt="Bint Saeed"
            width={400}
            height={120}
            className="w-auto h-16 sm:h-20 md:h-28 lg:h-32 relative z-10"
            priority
          />
        </motion.div>

        {/* Coming Soon - Clean typography */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mb-4 md:mb-6"
        >
          <h1 className="font-rozha text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-brand-dustyBlue tracking-wide">
            Coming Soon
          </h1>
          
          {/* Elegant underline */}
          <motion.div 
            className="h-px mt-4 md:mt-6 mx-auto bg-gradient-to-r from-transparent via-brand-stone/60 to-transparent"
            initial={{ width: 0 }}
            animate={{ width: '120px' }}
            transition={{ duration: 1, delay: 0.8 }}
          />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-roboto text-white/70 text-xs sm:text-sm tracking-[0.15em] uppercase text-center mb-3 md:mb-4"
        >
          An Elevated Lifestyle Inspired by Heritage
        </motion.p>

        {/* Description - shorter on mobile */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-roboto text-white/40 text-xs sm:text-sm tracking-wide text-center max-w-sm mx-auto mb-6 md:mb-8 leading-relaxed hidden sm:block"
        >
          Heritage craftsmanship meets modern femininity. Designed for women who appreciate elegance.
        </motion.p>

        {/* Email Signup - Compact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="w-full max-w-sm mb-6 md:mb-8"
        >
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center backdrop-blur-md bg-white/5 rounded-xl p-5 border border-white/10"
            >
              <div className="w-12 h-12 rounded-full bg-brand-dustyBlue/20 flex items-center justify-center mx-auto mb-3">
                <FiCheck className="w-6 h-6 text-brand-dustyBlue" />
              </div>
              <p className="font-rozha text-white text-lg mb-1">Thank You</p>
              <p className="font-roboto text-white/50 text-xs tracking-wide">
                We'll notify you when we launch
              </p>
            </motion.div>
          ) : (
            <div className="backdrop-blur-md bg-white/5 rounded-xl p-5 border border-white/10">
              <p className="font-roboto text-brand-dustyBlue/80 text-[10px] uppercase tracking-[0.2em] text-center mb-4">
                Be the first to know
              </p>
              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  onBlur={handleEmailBlur}
                  placeholder="Enter your email"
                  className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder:text-white/30 font-roboto text-sm tracking-wide focus:outline-none focus:bg-white/10 transition-all ${
                    emailError 
                      ? 'border-red-400/50' 
                      : 'border-white/10 focus:border-brand-dustyBlue/50'
                  }`}
                />
                {emailError && (
                  <p className="text-red-400/80 text-xs font-roboto px-1">{emailError}</p>
                )}
                {submitError && (
                  <p className="text-red-400/80 text-xs font-roboto px-1">{submitError}</p>
                )}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full px-6 py-3 bg-brand-dustyBlue text-brand-darkRed font-roboto text-xs uppercase tracking-[0.15em] rounded-lg hover:bg-white transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <span className="w-4 h-4 border-2 border-brand-darkRed/30 border-t-brand-darkRed rounded-full animate-spin" />
                      <span>Subscribing...</span>
                    </>
                  ) : (
                    <>
                      <span>Notify Me</span>
                      <FiArrowRight className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          )}
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex items-center gap-8"
        >
          {[
            { href: 'https://www.instagram.com/bintsaeed_brand/', icon: FiInstagram, label: 'Instagram' },
            { href: 'https://snapchat.com/t/W1nDzIXS', icon: FaSnapchat, label: 'Snapchat' },
          ].map((social) => (
            <Link
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/30 hover:text-brand-dustyBlue transition-colors duration-300"
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5" />
            </Link>
          ))}
        </motion.div>

        {/* Location - positioned at bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-brand-dustyBlue/60" />
          <p className="font-roboto text-white/25 text-[10px] uppercase tracking-[0.3em]">
            Abu Dhabi
          </p>
        </motion.div>
      </div>

      {/* Minimal corner accents */}
      <div className="absolute top-6 left-6 w-12 h-12 border-l border-t border-brand-dustyBlue/20" />
      <div className="absolute top-6 right-6 w-12 h-12 border-r border-t border-brand-dustyBlue/20" />
      <div className="absolute bottom-6 left-6 w-12 h-12 border-l border-b border-brand-dustyBlue/20" />
      <div className="absolute bottom-6 right-6 w-12 h-12 border-r border-b border-brand-dustyBlue/20" />
    </div>
  )
}
