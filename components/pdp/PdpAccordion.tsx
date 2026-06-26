'use client'

import { useLayoutEffect, useRef, type MouseEvent, type ReactNode } from 'react'
import { motion } from 'framer-motion'
import { FiChevronDown } from 'react-icons/fi'
import { PDP_ACCORDION_PANEL, PDP_ACCORDION_TITLE } from '@/lib/pdp/pdpTypography'

export type PdpAccordionSectionConfig = {
  id: string
  title: ReactNode
  titleTag?: 'h2' | 'h3'
  /** @default true for all but the last section */
  bordered?: boolean
  panelClassName?: string
  children: ReactNode
}

type PdpAccordionProps = {
  openId: string | null
  onOpenChange: (id: string | null) => void
  sections: PdpAccordionSectionConfig[]
  onSectionOpen?: (id: string) => void
  className?: string
}

/**
 * PDP detail accordion — animated expand/collapse with scroll anchoring so toggling
 * a section (e.g. Size & Fit inside a sticky panel) does not jump the viewport.
 * Uses CSS grid row animation for reliable collapse (avoids height:auto exit issues).
 */
export default function PdpAccordion({
  openId,
  onOpenChange,
  sections,
  onSectionOpen,
  className = '',
}: PdpAccordionProps) {
  const scrollAdjustRef = useRef<{
    scrollY: number
    topBefore: number
    button: HTMLButtonElement
  } | null>(null)

  const handleToggle = (id: string, event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    const button = event.currentTarget
    const isOpening = openId !== id

    scrollAdjustRef.current = {
      scrollY: window.scrollY,
      topBefore: button.getBoundingClientRect().top,
      button,
    }

    if (isOpening) onSectionOpen?.(id)
    onOpenChange(isOpening ? id : null)
  }

  useLayoutEffect(() => {
    const adj = scrollAdjustRef.current
    if (!adj) return
    scrollAdjustRef.current = null

    const topAfter = adj.button.getBoundingClientRect().top
    const delta = topAfter - adj.topBefore
    if (Math.abs(delta) > 0.5) {
      window.scrollTo(0, adj.scrollY + delta)
    }
  }, [openId])

  return (
    <div
      className={`pdp-accordion border-t border-brand-stone/30 [overflow-anchor:none] ${className}`}
    >
      {sections.map((section, index) => {
        const isOpen = openId === section.id
        const TitleTag = section.titleTag ?? 'h3'
        const showBorder = section.bordered ?? index < sections.length - 1
        const panelId = `pdp-accordion-panel-${section.id}`

        return (
          <div
            key={section.id}
            className={showBorder ? 'border-b border-brand-stone/30' : undefined}
          >
            <button
              type="button"
              onClick={(event) => handleToggle(section.id, event)}
              className="flex w-full items-center justify-between py-3"
              aria-expanded={isOpen}
              aria-controls={panelId}
              data-cursor-hover
            >
              <TitleTag className={PDP_ACCORDION_TITLE}>{section.title}</TitleTag>
              <FiChevronDown
                className={`h-4 w-4 shrink-0 text-brand-darkRed transition-transform duration-250 ${
                  isOpen ? 'rotate-180' : ''
                }`}
                aria-hidden
              />
            </button>
            <motion.div
              id={panelId}
              role="region"
              aria-hidden={!isOpen}
              initial={false}
              animate={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="grid [overflow-anchor:none]"
            >
              <div className="min-h-0 overflow-hidden">
                <div className={section.panelClassName ?? PDP_ACCORDION_PANEL}>
                  {section.children}
                </div>
              </div>
            </motion.div>
          </div>
        )
      })}
    </div>
  )
}
