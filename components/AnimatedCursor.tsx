'use client'

import { useEffect, useState, useCallback } from 'react'
import { motion, useSpring, useMotionValue } from 'framer-motion'

export default function AnimatedCursor() {
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const springConfig = { damping: 30, stiffness: 400, mass: 0.5 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  const moveCursor = useCallback((e: MouseEvent) => {
    cursorX.set(e.clientX)
    cursorY.set(e.clientY)
  }, [cursorX, cursorY])

  useEffect(() => {
    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)

    document.addEventListener('mousemove', moveCursor)
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseleave', handleMouseLeave)
    
    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)
    
    document.addEventListener('mousedown', handleMouseDown)
    document.addEventListener('mouseup', handleMouseUp)

    const handleHoverStart = () => setIsHovering(true)
    const handleHoverEnd = () => setIsHovering(false)

    const addHoverListeners = () => {
      const hoverElements = document.querySelectorAll('[data-cursor-hover], a, button')
      hoverElements.forEach((el) => {
        el.addEventListener('mouseenter', handleHoverStart)
        el.addEventListener('mouseleave', handleHoverEnd)
      })
    }

    addHoverListeners()
    
    const observer = new MutationObserver(addHoverListeners)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      document.removeEventListener('mousemove', moveCursor)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mousedown', handleMouseDown)
      document.removeEventListener('mouseup', handleMouseUp)
      observer.disconnect()
    }
  }, [moveCursor])

  if (typeof window !== 'undefined' && window.innerWidth < 768) {
    return null
  }

  return (
    <>
      {/* Main Cursor Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        <motion.div
          animate={{
            scale: isClicking ? 0.8 : isHovering ? 0.5 : 1,
            opacity: isVisible ? 1 : 0,
          }}
          transition={{ duration: 0.15 }}
          className="relative -translate-x-1/2 -translate-y-1/2"
        >
          {/* Dot with outline for visibility on any background */}
          <div className="w-3 h-3 rounded-full bg-brand-dustyBlue shadow-[0_0_0_1px_rgba(255,255,255,0.5),0_0_10px_rgba(146,170,193,0.5)]" />
        </motion.div>
      </motion.div>

      {/* Cursor Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        <motion.div
          animate={{
            scale: isClicking ? 0.9 : isHovering ? 1.5 : 1,
            opacity: isVisible ? (isHovering ? 0.8 : 0.5) : 0,
          }}
          transition={{ duration: 0.2 }}
          className="relative -translate-x-1/2 -translate-y-1/2"
        >
          <div 
            className={`w-10 h-10 rounded-full border-2 transition-colors duration-200 ${
              isHovering ? 'border-brand-dustyBlue' : 'border-brand-stone'
            }`}
          />
        </motion.div>
      </motion.div>
    </>
  )
}
