'use client'

import { useState } from 'react'
import toast from 'react-hot-toast'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { validateSubscriberEmail } from '@/lib/validateSubscriberEmail'
import { getSubscribeFormCopy } from '@/lib/i18n/subscribeFormI18n'
import { CTA_BUTTON_RADIUS, CTA_FORM_TRACKING } from '@/lib/ui/ctaClasses'

type SoftEmailCaptureProps = {
  source: string
  heading: string
  hint: string
  className?: string
}

/** Quiet email-only capture — no channel switcher, no popup. */
export default function SoftEmailCapture({
  source,
  heading,
  hint,
  className = '',
}: SoftEmailCaptureProps) {
  const { isRTL, language } = useLanguage()
  const copy = getSubscribeFormCopy(language)
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [done, setDone] = useState(false)

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    const check = validateSubscriberEmail(email, language)
    if (!check.valid) {
      setError(check.message)
      toast.error(check.message)
      return
    }
    setIsSubmitting(true)
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: check.email,
          notifyChannel: 'email',
          source,
        }),
      })
      const data = await response.json().catch(() => ({}))
      if (response.ok) {
        toast.success(copy.success)
        setDone(true)
        setEmail('')
      } else {
        const msg = typeof data.error === 'string' ? data.error : copy.errorGeneric
        setError(msg)
        toast.error(msg)
      }
    } catch {
      toast.error(copy.errorGeneric)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (done) {
    return (
      <p
        className={`text-center font-montserrat text-sm tracking-wide text-brand-dustyBlue ${className}`}
      >
        {copy.success}
      </p>
    )
  }

  return (
    <div className={`text-center ${className}`}>
      <p className="font-montserrat text-[10px] uppercase tracking-[0.2em] text-brand-dustyBlue">
        {heading}
      </p>
      <p className="mx-auto mt-2 max-w-sm font-montserrat text-[12px] leading-relaxed text-brand-clayRed/70">
        {hint}
      </p>
      <form
        onSubmit={onSubmit}
        className={`mx-auto mt-4 flex max-w-md flex-col gap-2 sm:flex-row `}
      >
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
            if (error) setError('')
          }}
          placeholder={copy.email}
          autoComplete="email"
          className="min-h-[46px] flex-1 rounded-[4px] border border-brand-stone/30 bg-white/80 px-4 font-montserrat text-sm text-brand-darkRed placeholder:text-brand-clayRed/45 focus:border-brand-dustyBlue/50 focus:outline-none"
          aria-invalid={Boolean(error)}
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className={`min-h-[46px] shrink-0 bg-brand-darkRed px-6 font-montserrat text-[11px] uppercase text-white transition-colors hover:bg-brand-dustyBlue disabled:opacity-50 ${CTA_FORM_TRACKING} ${CTA_BUTTON_RADIUS}`}
          data-cursor-hover
        >
          {isSubmitting ? copy.subscribing : copy.subscribe}
        </button>
      </form>
      {error ? (
        <p role="alert" className="mt-2 font-montserrat text-[11px] text-brand-clayRed">
          {error}
        </p>
      ) : (
        <p className="mt-2 font-montserrat text-[10px] leading-relaxed text-brand-clayRed/50">
          {copy.privacyLine}
        </p>
      )}
    </div>
  )
}
