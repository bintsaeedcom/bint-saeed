'use client'

import { useEffect } from 'react'

function isFormField(target: EventTarget | null): boolean {
  if (!(target instanceof HTMLElement)) return false
  const tag = target.tagName
  if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return true
  if (target.isContentEditable) return true
  if (target.closest('[data-allow-context-menu]')) return true
  return false
}

function isImageDragTarget(target: EventTarget | null): boolean {
  if (!(target instanceof HTMLElement)) return false
  if (target.tagName === 'IMG') return true
  return Boolean(target.closest('picture'))
}

/**
 * Deter casual copying: context menu, image drag, common save / view-source shortcuts.
 * Not a security boundary — determined users can still capture content.
 * Search and AI crawlers fetch HTML over HTTP and are unaffected by these client-only handlers.
 */
export default function ContentProtection() {
  useEffect(() => {
    // Keep local editing friction-free (screenshots, inspect, etc.).
    if (process.env.NODE_ENV !== 'production') return
    // Runtime escape hatch for production troubleshooting:
    // localStorage.setItem('bs_content_protection', 'off')
    try {
      if (localStorage.getItem('bs_content_protection') === 'off') return
    } catch {
      /* ignore */
    }

    const onContextMenu = (e: MouseEvent) => {
      if (isFormField(e.target)) return
      e.preventDefault()
    }

    const onDragStart = (e: DragEvent) => {
      if (isImageDragTarget(e.target)) {
        e.preventDefault()
      }
    }

    const onKeyDown = (e: KeyboardEvent) => {
      if (isFormField(e.target)) return
      const key = e.key.toLowerCase()
      const mod = e.ctrlKey || e.metaKey
      if (mod && (key === 's' || key === 'u')) {
        e.preventDefault()
      }
    }

    document.addEventListener('contextmenu', onContextMenu)
    document.addEventListener('dragstart', onDragStart, true)
    document.addEventListener('keydown', onKeyDown, true)

    return () => {
      document.removeEventListener('contextmenu', onContextMenu)
      document.removeEventListener('dragstart', onDragStart, true)
      document.removeEventListener('keydown', onKeyDown, true)
    }
  }, [])

  return null
}
