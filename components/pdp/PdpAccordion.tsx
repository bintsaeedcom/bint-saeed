'use client'

import { type MouseEvent, type ReactNode } from 'react'
import { motion } from 'framer-motion'
import { FiChevronDown } from 'react-icons/fi'
import { PDP_ACCORDION_PANEL, PDP_ACCORDION_TITLE } from '@/lib/pdp/pdpTypography'
import { useStableToggleScroll } from '@/lib/ui/useStableToggleScroll'

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

const HEADER_SCROLL_OFFSET_PX = 120

/** Intentional navigation helper (e.g. Worldwide Shipping shortcut). Not used for accordion toggles. */
export function scrollPdpAccordionSectionIntoView(sectionId: string) {
  const el = document.getElementById(`pdp-accordion-section-${sectionId}`)
  if (!el) return
  const y = window.scrollY + el.getBoundingClientRect().top - HEADER_SCROLL_OFFSET_PX
  window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' })
}

/**
 * PDP detail accordion — expand/collapse in place.
 * Toggle clicks only correct sticky-column drift; they never auto-scroll the page.
 */
export default function PdpAccordion({
  openId,
  onOpenChange,
  sections,
  onSectionOpen,
  className = '',
}: PdpAccordionProps) {
  const { prepareToggle } = useStableToggleScroll(openId)

  const handleToggle = (id: string, event: MouseEvent<HTMLButtonElement>) => {
    prepareToggle(event)
    const isOpening = openId !== id
    if (isOpening) onSectionOpen?.(id)
    onOpenChange(isOpening ? id : null)
  }

  return (
    <div
      className={`pdp-accordion border-t border-brand-stone/30 [overflow-anchor:none] ${className}`}
      data-stable-toggle-root
    >
      {sections.map((section, index) => {
        const isOpen = openId === section.id
        const TitleTag = section.titleTag ?? 'h3'
        const showBorder = section.bordered ?? index < sections.length - 1
        const panelId = `pdp-accordion-panel-${section.id}`

        return (
          <div
            key={section.id}
            id={`pdp-accordion-section-${section.id}`}
            className={`scroll-mt-28 [overflow-anchor:none] ${showBorder ? 'border-b border-brand-stone/30' : ''}`}
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
