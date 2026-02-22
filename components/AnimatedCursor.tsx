'use client'

import { useEffect, useState, useRef, useCallback } from 'react'

export default function AnimatedCursor() {
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [isTouchDevice, setIsTouchDevice] = useState(false)
  
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const mousePos = useRef({ x: -100, y: -100 })
  const dotPos = useRef({ x: -100, y: -100 })
  const ringPos = useRef({ x: -100, y: -100 })
  const animationRef = useRef<number>()
  const isInitialized = useRef(false)

  const animate = useCallback(() => {
    // Smooth interpolation - dot follows faster, ring follows slower
    const dotSpeed = 0.15
    const ringSpeed = 0.08
    
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
    // Check for touch device
    if (typeof window !== 'undefined') {
      const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || window.innerWidth < 768
      setIsTouchDevice(isTouch)
      if (isTouch) return
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

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)
    
    const handleHoverStart = () => setIsHovering(true)
    const handleHoverEnd = () => setIsHovering(false)

    const addHoverListeners = () => {
      const hoverElements = document.querySelectorAll('a, button, input, textarea, select, [role="button"], [data-cursor-hover], label, .cursor-pointer')
      hoverElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleHoverStart)
        el.removeEventListener('mouseleave', handleHoverEnd)
        el.addEventListener('mouseenter', handleHoverStart)
        el.addEventListener('mouseleave', handleHoverEnd)
      })
    }

    // Add event listeners - cursor is ALWAYS visible, no enter/leave toggling
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)
    
    // Initial setup and observer for dynamic elements
    addHoverListeners()
    const observer = new MutationObserver(() => {
      setTimeout(addHoverListeners, 50)
    })
    observer.observe(document.body, { childList: true, subtree: true })
    
    // Start animation loop
    animationRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      observer.disconnect()
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [animate])

  // Don't render on touch devices
  if (isTouchDevice) return null

  return (
    <>
      {/* Cursor Dot - Main pointer - Always visible - pointer-events-none so clicks pass through */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none"
        style={{ 
          zIndex: 2147483647,
          willChange: 'transform',
        }}
        aria-hidden="true"
      >
        <div 
          className="rounded-full transition-all duration-100 ease-out"
          style={{
            width: isClicking ? '6px' : isHovering ? '8px' : '10px',
            height: isClicking ? '6px' : isHovering ? '8px' : '10px',
            background: '#92aac1',
            boxShadow: '0 0 0 2px rgba(255,255,255,0.9), 0 0 15px rgba(146,170,193,0.8), 0 0 30px rgba(146,170,193,0.4)',
          }}
        />
      </div>

      {/* Cursor Ring - Follows with elegant delay */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none"
        style={{ 
          zIndex: 2147483646,
          willChange: 'transform',
        }}
      >
        <div 
          className="rounded-full transition-all duration-150 ease-out"
          style={{
            width: isClicking ? '24px' : isHovering ? '50px' : '36px',
            height: isClicking ? '24px' : isHovering ? '50px' : '36px',
            border: `2px solid ${isHovering ? 'rgba(146,170,193,0.9)' : 'rgba(212,189,172,0.5)'}`,
            background: isHovering ? 'rgba(146,170,193,0.15)' : 'transparent',
            boxShadow: isHovering ? '0 0 20px rgba(146,170,193,0.3)' : 'none',
          }}
        />
      </div>

      {/* Hide default cursor globally - more specific selectors */}
      <style jsx global>{`
        html, body, * {
          cursor: none !important;
        }
        a, button, input, select, textarea, label, [role="button"], [data-cursor-hover] {
          cursor: none !important;
        }
      `}</style>
    </>
  )
}
