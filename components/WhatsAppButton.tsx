'use client'

import { useEffect, useId, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa6'
import { FiX } from 'react-icons/fi'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { getWhatsAppChrome, getWhatsAppTopics } from '@/lib/i18n/whatsappChromeI18n'
import {
  glassOverlayPanel,
  glassOverlayWash,
  glassTextBodyOnDark,
  glassTextMutedOnDark,
  glassTextTitleOnDark,
} from '@/lib/ui/glassClasses'

/** Default Bint Saeed WhatsApp (+971 50 229 9402). Override with NEXT_PUBLIC_WHATSAPP_NUMBER if needed. */
const DEFAULT_WHATSAPP = '+971502299402'

function getWhatsAppDigits(): string | null {
  const raw = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.trim() || DEFAULT_WHATSAPP
  const digits = raw.replace(/\D/g, '')
  if (digits.length >= 10 && digits.length <= 15) return digits
  return null
}

function buildWhatsAppHref(message: string): string | null {
  const digits = getWhatsAppDigits()
  if (!digits) return null
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`
}

export default function WhatsAppButton() {
  const { isRTL, language } = useLanguage()
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  /** Hide while cart sticky checkout / PDP sticky ATC is up — never cover purchase CTAs. */
  const [commerceChromeUp, setCommerceChromeUp] = useState(false)
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const panelId = useId()
  const panelRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const sync = () => {
      setCommerceChromeUp(document.documentElement.dataset.commerceBottomChrome === '1')
      setMobileNavOpen(document.documentElement.dataset.mobileNavOpen === '1')
    }
    sync()
    const observer = new MutationObserver(sync)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-commerce-bottom-chrome', 'data-mobile-nav-open'],
    })
    return () => observer.disconnect()
  }, [])

  const dockHidden = commerceChromeUp || mobileNavOpen

  useEffect(() => {
    if (!open) return
    if (dockHidden) {
      setOpen(false)
      return
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    const onPointer = (e: MouseEvent | TouchEvent) => {
      const target = e.target as Node | null
      if (!target) return
      if (panelRef.current?.contains(target)) return
      if (triggerRef.current?.contains(target)) return
      setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('mousedown', onPointer)
    document.addEventListener('touchstart', onPointer)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('mousedown', onPointer)
      document.removeEventListener('touchstart', onPointer)
    }
  }, [open, dockHidden])

  const bubbleClass = [
    'group relative z-40 flex h-12 w-12 items-center justify-center overflow-hidden rounded-full sm:h-14 sm:w-14',
    'border border-white/30 bg-[#1a0210]',
    'shadow-[0_14px_40px_-14px_rgba(0,0,0,0.55),0_0_0_1px_rgba(232,216,200,0.12),0_0_22px_-4px_rgba(232,216,200,0.28),inset_0_1px_0_rgba(255,255,255,0.22)]',
    'transition-[box-shadow,background-color,border-color,transform] duration-300',
    'hover:border-white/45 hover:bg-[#2d141e]',
    'hover:shadow-[0_16px_44px_-12px_rgba(0,0,0,0.5),0_0_28px_-2px_rgba(232,216,200,0.4),inset_0_1px_0_rgba(255,255,255,0.28)]',
    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e8d8c8]/55',
    'animate-wa-soft-glow',
  ].join(' ')

  const dockSide = isRTL ? 'left-4 sm:left-6' : 'right-4 sm:right-6'
  const panelSide = isRTL ? 'left-0 origin-bottom-left' : 'right-0 origin-bottom-right'

  const chrome = getWhatsAppChrome(language)
  const topics = getWhatsAppTopics(language)
  const title = chrome.title
  const subtitle = chrome.subtitle

  const openTopic = (topic: (typeof topics)[number]) => {
    const href = buildWhatsAppHref(topic.message)
    setOpen(false)
    if (href) {
      window.open(href, '_blank', 'noopener,noreferrer')
      return
    }
    window.location.href = '/contact'
  }

  const bubbleInner = (
    <>
      <span
        className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-b from-white/25 via-transparent to-black/25"
        aria-hidden
      />
      <span
        className="pointer-events-none absolute inset-[3px] rounded-full border border-white/15 opacity-70"
        aria-hidden
      />
      <FaWhatsapp className="relative z-[1] h-[1.35rem] w-[1.35rem] text-[#f0e6dc] drop-shadow-[0_0_6px_rgba(232,216,200,0.35)] sm:h-6 sm:w-6" />
    </>
  )

  const panel = (
    <AnimatePresence>
      {open ? (
        <motion.div
          ref={panelRef}
          id={panelId}
          role="dialog"
          aria-modal="true"
          aria-label={title}
          initial={{ opacity: 0, y: 10, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 8, scale: 0.97 }}
          transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          className={`absolute bottom-[calc(100%+0.75rem)] ${panelSide} z-50 w-[min(18.5rem,calc(100vw-2rem))] ${glassOverlayPanel} rounded-2xl`}
        >
          <div className={glassOverlayWash} aria-hidden />
          <div className={`relative z-[1] p-4 text-start`}>
            <div className={`mb-3 flex items-start gap-2 `}>
              <div className="min-w-0 flex-1">
                <p className={`font-rozha text-lg leading-tight ${glassTextTitleOnDark}`}>{title}</p>
                <p className={`mt-1 font-montserrat text-[11px] leading-snug tracking-wide ${glassTextMutedOnDark}`}>
                  {subtitle}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="shrink-0 rounded-full p-1.5 text-[#e8d8c8]/80 transition-colors hover:bg-white/10 hover:text-white"
                aria-label={chrome.close}
              >
                <FiX className="h-4 w-4" />
              </button>
            </div>

            <ul className="space-y-2">
              {topics.map((topic) => (
                <li key={topic.id}>
                  <button
                    type="button"
                    onClick={() => openTopic(topic)}
                    className={`w-full rounded-[4px] border border-white/15 bg-white/[0.07] px-3.5 py-3 font-montserrat text-[12px] uppercase tracking-[0.12em] transition-colors hover:border-[#e8d8c8]/45 hover:bg-white/[0.12] ${glassTextBodyOnDark} text-start`}
                    data-cursor-hover
                  >
                    {topic.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )

  const dock = (
    <div
      className={`pointer-events-none fixed z-[80] ${dockSide}`}
      style={{
        top: 'auto',
        bottom: 'calc(var(--mobile-bottom-chrome, 0px) + max(1.15rem, env(safe-area-inset-bottom, 0px)))',
        position: 'fixed',
        transform: 'translateZ(0)',
        WebkitTransform: 'translateZ(0)',
        visibility: dockHidden ? 'hidden' : 'visible',
        pointerEvents: dockHidden ? 'none' : undefined,
      }}
      data-whatsapp-dock
      aria-hidden={dockHidden}
    >
      <div className="pointer-events-auto relative">
        {panel}
        <motion.button
          ref={triggerRef}
          type="button"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: dockHidden ? 0.85 : 1, opacity: dockHidden ? 0 : 1 }}
          transition={{ delay: dockHidden ? 0 : 2, type: 'spring', stiffness: 200 }}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.96 }}
          className={bubbleClass}
          data-cursor-hover
          data-whatsapp-button
          tabIndex={dockHidden ? -1 : 0}
          aria-label={chrome.ariaLive}
          aria-expanded={open}
          aria-controls={panelId}
          aria-hidden={dockHidden}
          onClick={() => setOpen((v) => !v)}
        >
          {bubbleInner}
        </motion.button>
      </div>
    </div>
  )

  if (!mounted) return null
  return createPortal(dock, document.body)
}
