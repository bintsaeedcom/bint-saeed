'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { stripLocaleFromPathname } from '@/lib/i18n/routing'

function isFormField(target: EventTarget | null): boolean {
  if (!(target instanceof HTMLElement)) return false
  const tag = target.tagName
  if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return true
  if (target.isContentEditable) return true
  if (target.closest('[data-allow-context-menu], [data-allow-select], [data-allow-copy]')) {
    return true
  }
  return false
}

function isImageDragTarget(target: EventTarget | null): boolean {
  if (!(target instanceof HTMLElement)) return false
  if (target.tagName === 'IMG') return true
  return Boolean(target.closest('picture'))
}

function isAdminPath(pathname: string | null): boolean {
  if (!pathname) return false
  const { pathname: inner } = stripLocaleFromPathname(pathname)
  return inner === '/admin' || inner.startsWith('/admin/')
}

/**
 * Deter casual copying: context menu, selection, copy/cut, image drag, save / view-source.
 * Not a security boundary — determined users can still capture content.
 * Forms, contenteditable, and [data-allow-*] stay usable. Admin is exempt.
 * Search and AI crawlers fetch HTML over HTTP and are unaffected.
 */
export default function ContentProtection() {
  const pathname = usePathname()

  useEffect(() => {
    // Keep local editing friction-free (screenshots, inspect, etc.).
    if (process.env.NODE_ENV !== 'production') return
    if (isAdminPath(pathname)) return

    // Runtime escape hatch for production troubleshooting:
    // localStorage.setItem('bs_content_protection', 'off')
    try {
      if (localStorage.getItem('bs_content_protection') === 'off') return
    } catch {
      /* ignore */
    }

    const root = document.documentElement
    root.classList.add('bs-content-lock')

    const onContextMenu = (e: MouseEvent) => {
      if (isFormField(e.target)) return
      e.preventDefault()
    }

    const onCopyOrCut = (e: ClipboardEvent) => {
      if (isFormField(e.target)) return
      e.preventDefault()
    }

    const onSelectStart = (e: Event) => {
      if (isFormField(e.target)) return
      e.preventDefault()
    }

    const onDragStart = (e: DragEvent) => {
      if (isImageDragTarget(e.target) || !isFormField(e.target)) {
        e.preventDefault()
      }
    }

    const onKeyDown = (e: KeyboardEvent) => {
      if (isFormField(e.target)) return
      const key = e.key.toLowerCase()
      const mod = e.ctrlKey || e.metaKey
      // Block copy / cut / select-all / save / view-source
      if (mod && (key === 'c' || key === 'x' || key === 'a' || key === 's' || key === 'u')) {
        e.preventDefault()
      }
    }

    document.addEventListener('contextmenu', onContextMenu)
    document.addEventListener('copy', onCopyOrCut, true)
    document.addEventListener('cut', onCopyOrCut, true)
    document.addEventListener('selectstart', onSelectStart, true)
    document.addEventListener('dragstart', onDragStart, true)
    document.addEventListener('keydown', onKeyDown, true)

    return () => {
      root.classList.remove('bs-content-lock')
      document.removeEventListener('contextmenu', onContextMenu)
      document.removeEventListener('copy', onCopyOrCut, true)
      document.removeEventListener('cut', onCopyOrCut, true)
      document.removeEventListener('selectstart', onSelectStart, true)
      document.removeEventListener('dragstart', onDragStart, true)
      document.removeEventListener('keydown', onKeyDown, true)
    }
  }, [pathname])

  return null
}
