'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
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
    if (!email) return 'Please enter your email'
    if (!emailRegex.test(email)) return 'Please enter a valid email address'
    const domain = email.split('@')[1]?.toLowerCase()
    const commonTypos: { [key: string]: string } = {
      'gmial.com': 'gmail.com', 'gmal.com': 'gmail.com', 'gamil.com': 'gmail.com',
      'gnail.com': 'gmail.com', 'gmail.co': 'gmail.com', 'hotmal.com': 'hotmail.com',
      'hotmai.com': 'hotmail.com', 'outlok.com': 'outlook.com', 'yahooo.com': 'yahoo.com',
    }
    if (domain && commonTypos[domain]) {
      return `Did you mean ${email.split('@')[0]}@${commonTypos[domain]}?`
    }
    return ''
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
    setSubmitError('')
    if (emailError) setEmailError(validateEmail(e.target.value))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const error = validateEmail(email)
    if (error) { setEmailError(error); return }

    setIsLoading(true)
    setEmailError('')
    setSubmitError('')
    
    try {
      await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'coming-soon' }),
      })
      // Always show success - the email was sent to the server
      setIsSubmitted(true)
      setEmail('')
    } catch {
      // Even on error, show success - email might have been captured
      setIsSubmitted(true)
      setEmail('')
    } finally {
      setIsLoading(false)
    }
  }

  if (!mounted) return null

  return (
    <div className="min-h-[100dvh] h-[100dvh] bg-[#1a0008] relative overflow-hidden">
      {/* Layered gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#2a0012] via-[#1a0008] to-[#0d0004]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(146,170,193,0.08)_0%,_transparent_70%)]" />
      </div>

      {/* Elegant geometric lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="rgba(146,170,193,0.15)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
          <linearGradient id="lineGradientV" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="rgba(212,189,172,0.1)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        {/* Horizontal accent lines */}
        <motion.line 
          x1="0" y1="25%" x2="100%" y2="25%" 
          stroke="url(#lineGradient)" strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
        />
        <motion.line 
          x1="0" y1="75%" x2="100%" y2="75%" 
          stroke="url(#lineGradient)" strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 0.7 }}
        />
        {/* Vertical accent lines */}
        <motion.line 
          x1="15%" y1="0" x2="15%" y2="100%" 
          stroke="url(#lineGradientV)" strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 0.6 }}
        />
        <motion.line 
          x1="85%" y1="0" x2="85%" y2="100%" 
          stroke="url(#lineGradientV)" strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 0.8 }}
        />
      </svg>

      {/* Decorative corner frames */}
      <motion.div 
        className="absolute top-8 left-8 w-24 h-24 md:w-32 md:h-32"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-brand-dustyBlue/40 to-transparent" />
        <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-brand-dustyBlue/40 to-transparent" />
      </motion.div>
      <motion.div 
        className="absolute top-8 right-8 w-24 h-24 md:w-32 md:h-32"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.1 }}
      >
        <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-l from-brand-dustyBlue/40 to-transparent" />
        <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-brand-dustyBlue/40 to-transparent" />
      </motion.div>
      <motion.div 
        className="absolute bottom-8 left-8 w-24 h-24 md:w-32 md:h-32"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-brand-dustyBlue/40 to-transparent" />
        <div className="absolute bottom-0 left-0 w-px h-full bg-gradient-to-t from-brand-dustyBlue/40 to-transparent" />
      </motion.div>
      <motion.div 
        className="absolute bottom-8 right-8 w-24 h-24 md:w-32 md:h-32"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.3 }}
      >
        <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-brand-dustyBlue/40 to-transparent" />
        <div className="absolute bottom-0 right-0 w-px h-full bg-gradient-to-t from-brand-dustyBlue/40 to-transparent" />
      </motion.div>

      {/* Main Content */}
      <div className="relative h-full flex flex-col items-center justify-center px-6">
        
        {/* LARGE Logo with elegant reveal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-8 md:mb-12"
        >
          {/* Logo glow effect */}
          <div className="absolute inset-0 scale-[2] blur-[80px] opacity-40">
            <div className="w-full h-full bg-gradient-to-r from-brand-dustyBlue/50 via-brand-stone/30 to-brand-dustyBlue/50 rounded-full" />
          </div>
          
          {/* Main Logo - MUCH BIGGER */}
          <Image
            src="/logo.png"
            alt="Bint Saeed"
            width={800}
            height={240}
            className="w-auto h-28 sm:h-36 md:h-48 lg:h-56 xl:h-64 relative z-10"
            priority
          />
          
          {/* Elegant line beneath logo */}
          <motion.div 
            className="absolute -bottom-4 left-1/2 -translate-x-1/2 h-px bg-gradient-to-r from-transparent via-brand-stone/50 to-transparent"
            initial={{ width: 0 }}
            animate={{ width: '80%' }}
            transition={{ duration: 1.5, delay: 0.8 }}
          />
        </motion.div>

        {/* Coming Soon with letter spacing reveal */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-center mb-6 md:mb-8"
        >
          <motion.h1 
            className="font-rozha text-3xl sm:text-4xl md:text-5xl text-brand-dustyBlue tracking-[0.2em] md:tracking-[0.3em]"
            initial={{ letterSpacing: '0.5em', opacity: 0 }}
            animate={{ letterSpacing: '0.2em', opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.6 }}
          >
            COMING SOON
          </motion.h1>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="font-roboto text-white/50 text-[10px] sm:text-xs tracking-[0.25em] uppercase text-center mb-8 md:mb-10"
        >
          An Elevated Lifestyle Inspired by Heritage
        </motion.p>

        {/* Email Signup - Refined glassmorphism */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="w-full max-w-md"
        >
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8"
            >
              <div className="w-16 h-16 rounded-full border border-brand-dustyBlue/30 flex items-center justify-center mx-auto mb-4">
                <FiCheck className="w-8 h-8 text-brand-dustyBlue" />
              </div>
              <p className="font-rozha text-white text-xl tracking-wide mb-2">Thank You</p>
              <p className="font-roboto text-white/40 text-xs tracking-wider">
                We'll notify you when we launch
              </p>
            </motion.div>
          ) : (
            <div className="relative">
              {/* Subtle border glow */}
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-brand-dustyBlue/20 via-transparent to-brand-stone/10 opacity-50" />
              
              <div className="relative backdrop-blur-sm bg-white/[0.03] rounded-2xl p-6 md:p-8 border border-white/[0.05]">
                <p className="font-roboto text-brand-dustyBlue/60 text-[10px] uppercase tracking-[0.3em] text-center mb-5">
                  Be the first to know
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={handleEmailChange}
                      onBlur={() => email && setEmailError(validateEmail(email))}
                      placeholder="Enter your email"
                      className={`w-full px-5 py-4 bg-white/[0.03] border rounded-xl text-white placeholder:text-white/20 font-roboto text-sm tracking-wide focus:outline-none transition-all duration-300 ${
                        emailError 
                          ? 'border-red-400/30' 
                          : 'border-white/[0.08] focus:border-brand-dustyBlue/30 focus:bg-white/[0.05]'
                      }`}
                    />
                  </div>
                  {emailError && (
                    <p className="text-red-400/70 text-xs font-roboto tracking-wide px-1">{emailError}</p>
                  )}
                  {submitError && (
                    <p className="text-red-400/70 text-xs font-roboto tracking-wide px-1">{submitError}</p>
                  )}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-4 bg-brand-dustyBlue text-[#1a0008] font-roboto text-xs uppercase tracking-[0.2em] rounded-xl hover:bg-white transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-3 group"
                  >
                    {isLoading ? (
                      <>
                        <span className="w-4 h-4 border-2 border-[#1a0008]/20 border-t-[#1a0008] rounded-full animate-spin" />
                        <span>Subscribing...</span>
                      </>
                    ) : (
                      <>
                        <span>Notify Me</span>
                        <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          )}
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex items-center gap-8 mt-8 md:mt-10 relative z-50"
        >
          <a
            href="https://www.instagram.com/bintsaeed_brand/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 text-white/40 hover:text-brand-dustyBlue transition-colors duration-300 cursor-pointer"
            aria-label="Instagram"
          >
            <FiInstagram className="w-6 h-6" />
          </a>
          <a
            href="https://snapchat.com/t/W1nDzIXS"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 text-white/40 hover:text-brand-dustyBlue transition-colors duration-300 cursor-pointer"
            aria-label="Snapchat"
          >
            <FaSnapchat className="w-6 h-6" />
          </a>
        </motion.div>

        {/* Location badge at bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3"
        >
          <div className="w-1 h-1 rounded-full bg-brand-dustyBlue/50" />
          <p className="font-roboto text-white/20 text-[9px] uppercase tracking-[0.4em]">
            Abu Dhabi
          </p>
          <div className="w-1 h-1 rounded-full bg-brand-dustyBlue/50" />
        </motion.div>
      </div>
    </div>
  )
}
