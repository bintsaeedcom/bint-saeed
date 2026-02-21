'use client'

import { useEffect, useState, useRef } from 'react'

export default function AnimatedCursor() {
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const mousePos = useRef({ x: 0, y: 0 })
  const dotPos = useRef({ x: 0, y: 0 })
  const ringPos = useRef({ x: 0, y: 0 })
  const animationRef = useRef<number>()

  useEffect(() => {
    setIsMounted(true)
    
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY }
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)
    
    const handleHoverStart = () => setIsHovering(true)
    const handleHoverEnd = () => setIsHovering(false)

    const addHoverListeners = () => {
      const hoverElements = document.querySelectorAll('a, button, input, textarea, [role="button"], [data-cursor-hover]')
      hoverElements.forEach((el) => {
        el.addEventListener('mouseenter', handleHoverStart)
        el.addEventListener('mouseleave', handleHoverEnd)
      })
    }

    const animate = () => {
      // Smooth interpolation - dot follows faster, ring follows slower
      const dotSpeed = 0.25
      const ringSpeed = 0.12
      
      dotPos.current.x += (mousePos.current.x - dotPos.current.x) * dotSpeed
      dotPos.current.y += (mousePos.current.y - dotPos.current.y) * dotSpeed
      
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * ringSpeed
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * ringSpeed
      
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${dotPos.current.x}px, ${dotPos.current.y}px) translate(-50%, -50%)`
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px) translate(-50%, -50%)`
      }
      
      animationRef.current = requestAnimationFrame(animate)
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mousedown', handleMouseDown)
    document.addEventListener('mouseup', handleMouseUp)
    
    addHoverListeners()
    const observer = new MutationObserver(addHoverListeners)
    observer.observe(document.body, { childList: true, subtree: true })
    
    animationRef.current = requestAnimationFrame(animate)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mousedown', handleMouseDown)
      document.removeEventListener('mouseup', handleMouseUp)
      observer.disconnect()
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  if (!isMounted) return null
  if (typeof window !== 'undefined' && window.innerWidth < 768) return null

  return (
    <>
      {/* Cursor Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none will-change-transform"
        style={{ zIndex: 999999 }}
      >
        <div 
          className="rounded-full transition-transform duration-100"
          style={{
            width: isClicking ? '10px' : isHovering ? '8px' : '12px',
            height: isClicking ? '10px' : isHovering ? '8px' : '12px',
            background: '#92aac1',
            boxShadow: '0 0 0 2px rgba(255,255,255,0.6), 0 0 12px rgba(146,170,193,0.5)',
          }}
        />
      </div>

      {/* Cursor Ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none will-change-transform"
        style={{ zIndex: 999998 }}
      >
        <div 
          className="rounded-full border transition-all duration-150"
          style={{
            width: isClicking ? '32px' : isHovering ? '48px' : '36px',
            height: isClicking ? '32px' : isHovering ? '48px' : '36px',
            borderWidth: '1.5px',
            borderColor: isHovering ? 'rgba(146,170,193,0.8)' : 'rgba(212,189,172,0.5)',
            opacity: isHovering ? 1 : 0.6,
          }}
        />
      </div>
    </>
  )
}
