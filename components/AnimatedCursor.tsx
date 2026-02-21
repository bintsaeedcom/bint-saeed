'use client'

import { useEffect, useState, useCallback } from 'react'
import { motion, useSpring, useMotionValue } from 'framer-motion'

export default function AnimatedCursor() {
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [isMounted, setIsMounted] = useState(false)

  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  const moveCursor = useCallback((e: MouseEvent) => {
    cursorX.set(e.clientX)
    cursorY.set(e.clientY)
    if (!isVisible) setIsVisible(true)
  }, [cursorX, cursorY, isVisible])

  useEffect(() => {
    setIsMounted(true)
    
    // Set cursor visible immediately on first mouse move
    const handleFirstMove = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      setIsVisible(true)
    }

    document.addEventListener('mousemove', moveCursor)
    document.addEventListener('mousemove', handleFirstMove, { once: true })
    
    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)
    
    document.addEventListener('mousedown', handleMouseDown)
    document.addEventListener('mouseup', handleMouseUp)

    const handleHoverStart = () => setIsHovering(true)
    const handleHoverEnd = () => setIsHovering(false)

    const addHoverListeners = () => {
      const hoverElements = document.querySelectorAll('[data-cursor-hover], a, button, input, [role="button"]')
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
      document.removeEventListener('mousedown', handleMouseDown)
      document.removeEventListener('mouseup', handleMouseUp)
      observer.disconnect()
    }
  }, [moveCursor, cursorX, cursorY])

  // Don't render on mobile or before mount
  if (!isMounted) return null
  if (typeof window !== 'undefined' && window.innerWidth < 768) {
    return null
  }

  return (
    <>
      {/* Main Cursor Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          zIndex: 999999,
        }}
      >
        <motion.div
          animate={{
            scale: isClicking ? 0.7 : isHovering ? 0.5 : 1,
            opacity: isVisible ? 1 : 0,
          }}
          transition={{ duration: 0.1 }}
          className="relative -translate-x-1/2 -translate-y-1/2"
        >
          {/* Dot with strong outline for visibility on any background */}
          <div 
            className="w-4 h-4 rounded-full"
            style={{
              background: '#92aac1',
              boxShadow: '0 0 0 2px rgba(255,255,255,0.8), 0 0 0 4px rgba(59,0,20,0.3), 0 0 15px rgba(146,170,193,0.6)',
            }}
          />
        </motion.div>
      </motion.div>

      {/* Cursor Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          zIndex: 999998,
        }}
      >
        <motion.div
          animate={{
            scale: isClicking ? 0.85 : isHovering ? 1.5 : 1,
            opacity: isVisible ? (isHovering ? 1 : 0.6) : 0,
          }}
          transition={{ duration: 0.15 }}
          className="relative -translate-x-1/2 -translate-y-1/2"
        >
          <div 
            className="w-10 h-10 rounded-full border-2 transition-colors duration-200"
            style={{
              borderColor: isHovering ? '#92aac1' : '#d4bdac',
              boxShadow: '0 0 10px rgba(146,170,193,0.3)',
            }}
          />
        </motion.div>
      </motion.div>
    </>
  )
}
