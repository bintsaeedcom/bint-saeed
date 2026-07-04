'use client'

import { useEffect, useId, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiCheck, FiChevronDown } from 'react-icons/fi'

export type ContactSubjectOption = {
  value: string
  label: string
}

type Props = {
  value: string
  onChange: (value: string) => void
  options: ContactSubjectOption[]
  placeholder: string
  isRTL: boolean
  hasError?: boolean
  onBlur?: () => void
  'aria-describedby'?: string
}

const triggerBase = [
  'flex w-full items-center justify-between gap-3 rounded-[2px] border bg-white px-4 py-3.5',
  'font-montserrat text-sm normal-case tracking-[0.03em] transition-[border-color,box-shadow,background-color] duration-200',
  'outline-none hover:border-brand-stone/55',
  'focus:border-brand-darkRed/35 focus:shadow-[0_0_0_1px_rgba(111,21,36,0.08)]',
].join(' ')

export default function ContactSubjectSelect({
  value,
  onChange,
  options,
  placeholder,
  isRTL,
  hasError = false,
  onBlur,
  'aria-describedby': ariaDescribedBy,
}: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const listId = useId()
  const selected = options.find((option) => option.value === value)

  useEffect(() => {
    const handlePointer = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setIsOpen(false)
        onBlur?.()
      }
    }
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
        onBlur?.()
      }
    }
    document.addEventListener('mousedown', handlePointer)
    document.addEventListener('keydown', handleKey)
    return () => {
      document.removeEventListener('mousedown', handlePointer)
      document.removeEventListener('keydown', handleKey)
    }
  }, [onBlur])

  const borderClass = hasError
    ? 'border-brand-clayRed/55'
    : isOpen
      ? 'border-brand-darkRed/35 shadow-[0_0_0_1px_rgba(111,21,36,0.08)]'
      : 'border-brand-stone/40'

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        id={`${listId}-trigger`}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls={listId}
        aria-invalid={hasError || undefined}
        aria-describedby={ariaDescribedBy}
        onClick={() => setIsOpen((open) => !open)}
        className={`${triggerBase} ${borderClass} ${isRTL ? 'flex-row-reverse text-right' : 'text-left'}`}
        data-cursor-hover
      >
        <span className={selected ? 'text-brand-darkRed' : 'text-brand-clayRed/45'}>
          {selected?.label ?? placeholder}
        </span>
        <FiChevronDown
          className={`h-4 w-4 shrink-0 text-brand-darkRed/45 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          aria-hidden
        />
      </button>

      <AnimatePresence>
        {isOpen ? (
          <motion.ul
            id={listId}
            role="listbox"
            aria-labelledby={`${listId}-trigger`}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18 }}
            className={`absolute z-50 mt-1.5 max-h-64 w-full overflow-y-auto rounded-[2px] border border-brand-stone/35 bg-white py-1 shadow-[0_18px_44px_rgba(26,2,16,0.14)] ${isRTL ? 'text-right' : 'text-left'}`}
          >
            {options.map((option) => {
              const isSelected = option.value === value
              return (
                <li key={option.value} role="none">
                  <button
                    type="button"
                    role="option"
                    aria-selected={isSelected}
                    onClick={() => {
                      onChange(option.value)
                      setIsOpen(false)
                      onBlur?.()
                    }}
                    className={`flex w-full items-center justify-between gap-3 px-4 py-2.5 font-montserrat text-sm normal-case tracking-[0.02em] transition-colors hover:bg-brand-dustyBlue/[0.08] ${
                      isRTL ? 'flex-row-reverse' : ''
                    } ${isSelected ? 'bg-brand-dustyBlue/[0.06] text-brand-darkRed' : 'text-brand-darkRed/85'}`}
                    data-cursor-hover
                  >
                    <span>{option.label}</span>
                    {isSelected ? <FiCheck className="h-4 w-4 shrink-0 text-brand-darkRed/70" aria-hidden /> : null}
                  </button>
                </li>
              )
            })}
          </motion.ul>
        ) : null}
      </AnimatePresence>
    </div>
  )
}
