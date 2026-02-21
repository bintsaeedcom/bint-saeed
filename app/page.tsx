'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FiInstagram, FiMail, FiArrowRight } from 'react-icons/fi'
import { FaSnapchat } from 'react-icons/fa6'

export default function ComingSoonPage() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 })
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 })
  
  // Parallax transforms for floating orbs
  const orb2X = useTransform(smoothX, v => v * -0.5)
  const orb2Y = useTransform(smoothY, v => v * -0.5)
  const orb3X = useTransform(smoothX, v => v * 0.3)
  const orb3Y = useTransform(smoothY, v => v * 0.3)

  useEffect(() => {
    setMounted(true)
    
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        const x = (e.clientX - rect.left - rect.width / 2) / rect.width
        const y = (e.clientY - rect.top - rect.height / 2) / rect.height
        mouseX.set(x * 30)
        mouseY.set(y * 30)
        setMousePosition({ x: e.clientX, y: e.clientY })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

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
    <div 
      ref={containerRef}
      className="min-h-screen bg-brand-darkRed relative overflow-hidden"
    >
      {/* Animated Gradient Mesh Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            background: [
              'radial-gradient(ellipse at 20% 20%, rgba(146,170,193,0.15) 0%, transparent 50%)',
              'radial-gradient(ellipse at 80% 80%, rgba(146,170,193,0.15) 0%, transparent 50%)',
              'radial-gradient(ellipse at 50% 50%, rgba(146,170,193,0.15) 0%, transparent 50%)',
              'radial-gradient(ellipse at 20% 20%, rgba(146,170,193,0.15) 0%, transparent 50%)',
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0"
        />
      </div>

      {/* Floating Orbs with Parallax */}
      <motion.div
        style={{ x: smoothX, y: smoothY }}
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-brand-dustyBlue/20 to-transparent blur-3xl"
      />
      <motion.div
        style={{ x: orb2X, y: orb2Y }}
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-tl from-brand-stone/15 to-transparent blur-3xl"
      />
      <motion.div
        style={{ x: orb3X, y: orb3Y }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-brand-rose/10 via-transparent to-brand-clayRed/10 blur-3xl"
      />

      {/* Animated Grid Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`v-${i}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.5, 0] }}
            transition={{ duration: 3, delay: i * 0.2, repeat: Infinity, repeatDelay: 5 }}
            className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-brand-dustyBlue to-transparent"
            style={{ left: `${(i + 1) * 5}%` }}
          />
        ))}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={`h-${i}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.3, 0] }}
            transition={{ duration: 4, delay: i * 0.3, repeat: Infinity, repeatDelay: 6 }}
            className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-stone to-transparent"
            style={{ top: `${(i + 1) * 10}%` }}
          />
        ))}
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
              opacity: 0 
            }}
            animate={{ 
              y: [null, Math.random() * -200 - 100],
              opacity: [0, 0.6, 0],
            }}
            transition={{ 
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: 'linear'
            }}
            className="absolute w-1 h-1 bg-brand-dustyBlue rounded-full"
          />
        ))}
      </div>

      {/* Noise Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Main Content */}
      <div className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20">
        
        {/* Logo with Glow Effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 relative"
        >
          {/* Logo Glow */}
          <div className="absolute inset-0 blur-2xl opacity-60">
            <Image
              src="/logo.png"
              alt=""
              width={500}
              height={150}
              className="w-auto h-28 md:h-40 lg:h-48"
            />
          </div>
          {/* Main Logo */}
          <motion.div
            animate={{ 
              filter: ['brightness(1)', 'brightness(1.2)', 'brightness(1)'],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Image
              src="/logo.png"
              alt="Bint Saeed"
              width={500}
              height={150}
              className="w-auto h-28 md:h-40 lg:h-48 relative z-10"
              priority
            />
          </motion.div>
        </motion.div>

        {/* Coming Soon Text with Reveal Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mb-8 overflow-hidden"
        >
          <div className="relative">
            {/* Glitch Layer */}
            <motion.h1 
              className="font-rozha text-6xl md:text-8xl lg:text-9xl text-brand-dustyBlue tracking-wider absolute inset-0 opacity-0"
              animate={{ 
                opacity: [0, 0.5, 0],
                x: [0, -5, 5, 0],
                clipPath: ['inset(0 0 100% 0)', 'inset(40% 0 30% 0)', 'inset(0 0 100% 0)']
              }}
              transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 5 }}
            >
              Coming Soon
            </motion.h1>
            
            {/* Main Text */}
            <motion.h1 
              className="font-rozha text-6xl md:text-8xl lg:text-9xl text-brand-dustyBlue tracking-wider relative"
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.span
                className="inline-block"
                animate={{ 
                  textShadow: [
                    '0 0 20px rgba(146,170,193,0)',
                    '0 0 40px rgba(146,170,193,0.5)',
                    '0 0 20px rgba(146,170,193,0)',
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                Coming Soon
              </motion.span>
            </motion.h1>
          </div>

          {/* Animated Underline */}
          <motion.div 
            className="relative h-px mt-8 mx-auto overflow-hidden"
            initial={{ width: 0 }}
            animate={{ width: '200px' }}
            transition={{ duration: 1.5, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-dustyBlue to-transparent"
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            />
            <div className="absolute inset-0 bg-brand-stone/50" />
          </motion.div>
        </motion.div>

        {/* Tagline with Stagger */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-center mb-12"
        >
          <p className="font-roboto text-white/80 text-lg md:text-xl tracking-[0.2em] uppercase">
            Luxury Abayas Crafted with Heritage
          </p>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="font-roboto text-white/40 text-sm md:text-base tracking-wide text-center max-w-lg mx-auto mb-16 leading-relaxed"
        >
          Where traditional Emirati craftsmanship meets contemporary elegance. 
          Each piece tells a story of heritage, designed for the modern woman.
        </motion.p>

        {/* Email Signup with Glass Effect */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="w-full max-w-md mb-16"
        >
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center backdrop-blur-xl bg-white/5 rounded-2xl p-8 border border-white/10"
            >
              <motion.div 
                className="w-20 h-20 rounded-full bg-brand-dustyBlue/20 flex items-center justify-center mx-auto mb-6"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <FiMail className="w-10 h-10 text-brand-dustyBlue" />
              </motion.div>
              <p className="font-rozha text-white text-2xl mb-2">
                Thank You
              </p>
              <p className="font-roboto text-white/50 text-sm tracking-wide">
                We'll notify you when we launch
              </p>
            </motion.div>
          ) : (
            <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-8 border border-white/10">
              <p className="font-roboto text-brand-dustyBlue text-xs uppercase tracking-[0.3em] text-center mb-6">
                Be the first to know
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative group">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-6 py-4 bg-white/5 border border-white/20 rounded-lg text-white placeholder:text-white/30 font-roboto text-sm tracking-wide focus:outline-none focus:border-brand-dustyBlue focus:bg-white/10 transition-all duration-300"
                    required
                  />
                  <motion.div
                    className="absolute inset-0 rounded-lg border border-brand-dustyBlue opacity-0 group-focus-within:opacity-100 pointer-events-none"
                    animate={{ scale: [1, 1.02, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
                <motion.button
                  type="submit"
                  disabled={isLoading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 bg-brand-dustyBlue text-brand-darkRed font-roboto text-sm uppercase tracking-[0.2em] rounded-lg hover:bg-white transition-colors disabled:opacity-50 flex items-center justify-center gap-3 group relative overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                  <span className="relative">
                    {isLoading ? 'Subscribing...' : 'Notify Me'}
                  </span>
                  {!isLoading && (
                    <FiArrowRight className="w-4 h-4 relative group-hover:translate-x-1 transition-transform" />
                  )}
                </motion.button>
              </form>
            </div>
          )}
        </motion.div>

        {/* Social Links with Hover Effects */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.7 }}
          className="flex items-center gap-10"
        >
          {[
            { href: 'https://www.instagram.com/bintsaeed_brand/', icon: FiInstagram, label: 'Instagram' },
            { href: 'https://snapchat.com/t/W1nDzIXS', icon: FaSnapchat, label: 'Snapchat' },
          ].map((social, index) => (
            <motion.div
              key={social.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8 + index * 0.1 }}
            >
              <Link
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group"
                aria-label={social.label}
              >
                <motion.div
                  className="absolute inset-0 bg-brand-dustyBlue/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity"
                  whileHover={{ scale: 1.5 }}
                />
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="relative text-white/40 hover:text-brand-dustyBlue transition-colors duration-300"
                >
                  <social.icon className="w-7 h-7" />
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Location Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="flex items-center gap-3"
          >
            <div className="w-2 h-2 rounded-full bg-brand-dustyBlue animate-pulse" />
            <p className="font-roboto text-white/30 text-xs uppercase tracking-[0.4em]">
              Abu Dhabi, UAE
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated Corner Frames */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute top-8 left-8 w-20 h-20"
      >
        <motion.div 
          className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-brand-dustyBlue to-transparent"
          animate={{ scaleX: [0, 1] }}
          transition={{ duration: 1, delay: 0.5 }}
          style={{ transformOrigin: 'left' }}
        />
        <motion.div 
          className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-brand-dustyBlue to-transparent"
          animate={{ scaleY: [0, 1] }}
          transition={{ duration: 1, delay: 0.5 }}
          style={{ transformOrigin: 'top' }}
        />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute top-8 right-8 w-20 h-20"
      >
        <motion.div 
          className="absolute top-0 right-0 w-full h-px bg-gradient-to-l from-brand-dustyBlue to-transparent"
          animate={{ scaleX: [0, 1] }}
          transition={{ duration: 1, delay: 0.6 }}
          style={{ transformOrigin: 'right' }}
        />
        <motion.div 
          className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-brand-dustyBlue to-transparent"
          animate={{ scaleY: [0, 1] }}
          transition={{ duration: 1, delay: 0.6 }}
          style={{ transformOrigin: 'top' }}
        />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute bottom-8 left-8 w-20 h-20"
      >
        <motion.div 
          className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-brand-dustyBlue to-transparent"
          animate={{ scaleX: [0, 1] }}
          transition={{ duration: 1, delay: 0.7 }}
          style={{ transformOrigin: 'left' }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-px h-full bg-gradient-to-t from-brand-dustyBlue to-transparent"
          animate={{ scaleY: [0, 1] }}
          transition={{ duration: 1, delay: 0.7 }}
          style={{ transformOrigin: 'bottom' }}
        />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute bottom-8 right-8 w-20 h-20"
      >
        <motion.div 
          className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-brand-dustyBlue to-transparent"
          animate={{ scaleX: [0, 1] }}
          transition={{ duration: 1, delay: 0.8 }}
          style={{ transformOrigin: 'right' }}
        />
        <motion.div 
          className="absolute bottom-0 right-0 w-px h-full bg-gradient-to-t from-brand-dustyBlue to-transparent"
          animate={{ scaleY: [0, 1] }}
          transition={{ duration: 1, delay: 0.8 }}
          style={{ transformOrigin: 'bottom' }}
        />
      </motion.div>
    </div>
  )
}
