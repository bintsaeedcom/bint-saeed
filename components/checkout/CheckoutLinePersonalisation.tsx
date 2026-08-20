'use client'

import { useId, useState } from 'react'
import { productPageUi } from '@/lib/i18n/productPageUi'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { CUSTOMISATION_MAX_CHARS } from '@/lib/shopProductOptions'
import { formFieldClass } from '@/lib/ui/formFieldClasses'
import { useCartStore, type CartItem } from '@/store/cartStore'

export default function CheckoutLinePersonalisation({ item }: { item: CartItem }) {
  const inputId = useId()
  const { language } = useLanguage()
  const copy = productPageUi(language).personalisation
  const updateCustomisationMessage = useCartStore((state) => state.updateCustomisationMessage)
  const value = item.customisationMessage ?? ''
  const [open, setOpen] = useState(Boolean(value.trim()))

  const setMessage = (next: string) =>
    updateCustomisationMessage(
      item.id,
      item.size,
      item.color,
      item.lengthCm,
      item.customisationMessage,
      next.slice(0, CUSTOMISATION_MAX_CHARS),
    )

  if (!open) {
    return (
      <p className="mt-2">
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="font-montserrat text-[11px] tracking-wide text-brand-darkRed/70 underline decoration-brand-darkRed/25 underline-offset-4 transition-colors hover:text-brand-darkRed"
          data-cursor-hover
        >
          {copy.checkoutOptional}
        </button>
      </p>
    )
  }

  return (
    <div className="mt-3 space-y-1.5">
      <label
        htmlFor={inputId}
        className="block font-montserrat text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-darkRed"
      >
        {copy.title}
      </label>
      <input
        id={inputId}
        type="text"
        value={value}
        onChange={(event) => setMessage(event.target.value)}
        maxLength={CUSTOMISATION_MAX_CHARS}
        placeholder={copy.placeholder}
        autoComplete="off"
        data-allow-select
        className={`${formFieldClass} !px-3 !py-2.5 !text-[11px]`}
      />
      <p className="font-montserrat text-[11px] text-brand-darkRed/55">
        {value.length}/{CUSTOMISATION_MAX_CHARS}
      </p>
      {value.trim() ? (
        <p className="font-montserrat text-[11px] leading-relaxed text-brand-darkRed/70">
          {copy.customisedNoReturn}
        </p>
      ) : (
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="font-montserrat text-[11px] tracking-wide text-brand-darkRed/55 underline decoration-brand-darkRed/20 underline-offset-4 hover:text-brand-darkRed/80"
          data-cursor-hover
        >
          {copy.noPersonalisation}
        </button>
      )}
    </div>
  )
}
