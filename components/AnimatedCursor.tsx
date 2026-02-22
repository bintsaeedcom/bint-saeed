'use client'

import { useEffect, useState, useRef, useCallback } from 'react'

export default function AnimatedCursor() {
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const mousePos = useRef({ x: -100, y: -100 })
  const dotPos = useRef({ x: -100, y: -100 })
  const ringPos = useRef({ x: -100, y: -100 })
  const animationRef = useRef<number>()
  const isInitialized = useRef(false)

  const animate = useCallback(() => {
    // Smooth interpolation - dot follows faster, ring follows slower
    const dotSpeed = 0.2
    const ringSpeed = 0.1
    
    dotPos.current.x += (mousePos.current.x - dotPos.current.x) * dotSpeed
    dotPos.current.y += (mousePos.current.y - dotPos.current.y) * dotSpeed
    
    ringPos.current.x += (mousePos.current.x - ringPos.current.x) * ringSpeed
    ringPos.current.y += (mousePos.current.y - ringPos.current.y) * ringSpeed
    
    if (dotRef.current) {
      dotRef.current.style.transform = `translate3d(${dotPos.current.x}px, ${dotPos.current.y}px, 0) translate(-50%, -50%)`
    }
    if (ringRef.current) {
      ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%)`
    }
    
    animationRef.current = requestAnimationFrame(animate)
  }, [])

  useEffect(() => {
    // Don't show custom cursor on touch devices
    if (typeof window !== 'undefined' && ('ontouchstart' in window || window.innerWidth < 768)) {
      setIsVisible(false)
      return
    }

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY }
      
      // Initialize cursor position on first move
      if (!isInitialized.current) {
        dotPos.current = { x: e.clientX, y: e.clientY }
        ringPos.current = { x: e.clientX, y: e.clientY }
        isInitialized.current = true
      }
    }

    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)
    
    const handleHoverStart = () => setIsHovering(true)
    const handleHoverEnd = () => setIsHovering(false)

    const addHoverListeners = () => {
      const hoverElements = document.querySelectorAll('a, button, input, textarea, select, [role="button"], [data-cursor-hover], label')
      hoverElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleHoverStart)
        el.removeEventListener('mouseleave', handleHoverEnd)
        el.addEventListener('mouseenter', handleHoverStart)
        el.addEventListener('mouseleave', handleHoverEnd)
      })
    }

    // Add all event listeners
    document.addEventListener('mousemove', handleMouseMove, { passive: true })
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mousedown', handleMouseDown)
    document.addEventListener('mouseup', handleMouseUp)
    
    // Initial setup and observer for dynamic elements
    addHoverListeners()
    const observer = new MutationObserver(() => {
      setTimeout(addHoverListeners, 100)
    })
    observer.observe(document.body, { childList: true, subtree: true })
    
    // Start animation loop
    animationRef.current = requestAnimationFrame(animate)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mousedown', handleMouseDown)
      document.removeEventListener('mouseup', handleMouseUp)
      observer.disconnect()
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [animate])

  // Don't render on touch devices or when not visible
  if (!isVisible) return null

  return (
    <>
      {/* Cursor Dot - Main pointer */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none"
        style={{ 
          zIndex: 2147483647,
          willChange: 'transform',
        }}
      >
        <div 
          className="rounded-full transition-all duration-150 ease-out"
          style={{
            width: isClicking ? '8px' : isHovering ? '6px' : '10px',
            height: isClicking ? '8px' : isHovering ? '6px' : '10px',
            background: '#92aac1',
            boxShadow: '0 0 0 2px rgba(255,255,255,0.8), 0 0 20px rgba(146,170,193,0.6)',
          }}
        />
      </div>

      {/* Cursor Ring - Follows with delay */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none"
        style={{ 
          zIndex: 2147483646,
          willChange: 'transform',
        }}
      >
        <div 
          className="rounded-full transition-all duration-200 ease-out"
          style={{
            width: isClicking ? '28px' : isHovering ? '50px' : '36px',
            height: isClicking ? '28px' : isHovering ? '50px' : '36px',
            border: `2px solid ${isHovering ? 'rgba(146,170,193,0.9)' : 'rgba(212,189,172,0.6)'}`,
            background: isHovering ? 'rgba(146,170,193,0.1)' : 'transparent',
          }}
        />
      </div>

      {/* Hide default cursor globally */}
      <style jsx global>{`
        * {
          cursor: none !important;
        }
      `}</style>
    </>
  )
}
