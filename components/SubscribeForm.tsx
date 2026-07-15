'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'
import type { E164Number } from 'libphonenumber-js'
import { validateSubscriberEmail } from '@/lib/validateSubscriberEmail'
import { validateOptionalPhone } from '@/lib/validateOptionalPhone'
import PhoneWithCountry from '@/components/PhoneWithCountry'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import {
  getSubscribeFormCopy,
  type SubscribeNotifyChannel,
} from '@/lib/i18n/subscribeFormI18n'
import { CTA_BUTTON_RADIUS, CTA_FORM_TRACKING } from '@/lib/ui/ctaClasses'

interface SubscribeFormProps {
  variant?: 'light' | 'dark'
}

export default function SubscribeForm({ variant = 'light' }: SubscribeFormProps) {
  const { isRTL, language } = useLanguage()
  const copy = getSubscribeFormCopy(language)
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState<E164Number | undefined>()
  const [notifyChannel, setNotifyChannel] = useState<SubscribeNotifyChannel>('email')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [emailError, setEmailError] = useState('')
  const [phoneError, setPhoneError] = useState('')

  const inputClass =
    variant === 'dark'
      ? 'w-full rounded-xl border border-white/15 bg-white/[0.03] px-5 py-3.5 font-montserrat text-sm tracking-wide text-brand-stone placeholder-white/35 focus:outline-none focus:border-brand-dustyBlue/35 transition-colors'
      : 'w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/50 font-montserrat text-sm tracking-[0.1em] focus:outline-none focus:border-brand-rose transition-colors'

  const buttonClass =
    variant === 'dark'
      ? `w-full min-h-[46px] bg-brand-dustyBlue text-[#1a0008] font-montserrat text-[11px] uppercase ${CTA_FORM_TRACKING} ${CTA_BUTTON_RADIUS} hover:bg-brand-stone transition-colors disabled:opacity-50 md:w-auto md:min-w-[9.5rem] md:shrink-0`
      : `px-8 py-3 bg-brand-rose text-brand-darkRed font-montserrat text-sm uppercase ${CTA_FORM_TRACKING} ${CTA_BUTTON_RADIUS} hover:bg-white transition-colors disabled:opacity-50`

  const channelBtn = (active: boolean) =>
    variant === 'dark'
      ? `min-h-[42px] flex-1 rounded-xl border px-3 py-2.5 font-montserrat text-[10px] uppercase tracking-[0.14em] transition-colors ${
          active
            ? 'border-brand-dustyBlue/50 bg-brand-dustyBlue/15 text-brand-stone'
            : 'border-white/12 bg-white/[0.02] text-white/55 hover:border-white/22 hover:text-white/75'
        }`
      : `min-h-[42px] flex-1 border px-3 py-2.5 font-montserrat text-[10px] uppercase tracking-[0.14em] transition-colors ${
          active
            ? 'border-brand-rose bg-white/15 text-white'
            : 'border-white/25 text-white/70 hover:border-white/40'
        }`

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setEmailError('')
    setPhoneError('')

    if (notifyChannel === 'email') {
      const check = validateSubscriberEmail(email, language)
      if (!check.valid) {
        setEmailError(check.message)
        toast.error(check.message)
        return
      }
    } else {
      const phoneCheck = validateOptionalPhone(phone, language)
      if (!phoneCheck.ok) {
        setPhoneError(phoneCheck.message)
        toast.error(phoneCheck.message)
        return
      }
      if (!phoneCheck.phone) {
        const msg = copy.phoneRequiredWhatsApp
        setPhoneError(msg)
        toast.error(msg)
        return
      }
    }

    setIsSubmitting(true)

    try {
      const payload: Record<string, string | undefined> = {
        notifyChannel,
        source: 'footer',
      }

      if (notifyChannel === 'email') {
        const check = validateSubscriberEmail(email, language)
        if (!check.valid) return
        payload.email = check.email
      } else {
        const phoneCheck = validateOptionalPhone(phone, language)
        if (!phoneCheck.ok || !phoneCheck.phone) return
        payload.phone = phoneCheck.phone
      }

      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      const data = await response.json().catch(() => ({}))

      if (response.ok) {
        toast.success(copy.success)
        setEmail('')
        setPhone(undefined)
        setNotifyChannel('email')
      } else {
        const msg = typeof data.error === 'string' ? data.error : copy.errorGeneric
        toast.error(msg)
        if (response.status === 400 && msg) {
          if (msg.toLowerCase().includes('phone')) setPhoneError(msg)
          else setEmailError(msg)
        }
      }
    } catch {
      toast.error(copy.errorGeneric)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className={`space-y-2 text-start`}>
        <div className={`flex flex-col gap-2 sm:flex-row `}>
          <button
            type="button"
            onClick={() => {
              setNotifyChannel('email')
              setPhoneError('')
            }}
            className={channelBtn(notifyChannel === 'email')}
            aria-pressed={notifyChannel === 'email'}
          >
            {copy.notifyEmail}
          </button>
          <button
            type="button"
            onClick={() => {
              setNotifyChannel('whatsapp')
              setEmailError('')
            }}
            className={channelBtn(notifyChannel === 'whatsapp')}
            aria-pressed={notifyChannel === 'whatsapp'}
          >
            {copy.notifyWhatsApp}
          </button>
        </div>
        <p className={`text-xs font-montserrat leading-relaxed tracking-wide ${variant === 'dark' ? 'text-white/45' : 'text-brand-stone/70'}`}>
          {notifyChannel === 'whatsapp' ? copy.notifyHintWhatsApp : copy.notifyHintEmail}
        </p>
      </div>

      {notifyChannel === 'email' ? (
        <div className={`space-y-1 text-start`}>
          <input
            type="email"
            placeholder={copy.email}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
              if (emailError) setEmailError('')
            }}
            onBlur={() => {
              if (!email.trim()) return
              const check = validateSubscriberEmail(email, language)
              setEmailError(check.valid ? '' : check.message)
            }}
            required
            aria-invalid={emailError ? true : undefined}
            className={`${inputClass} ${emailError ? (variant === 'dark' ? 'border-red-400/50' : 'border-red-300') : ''}`}
            dir={isRTL ? 'rtl' : 'ltr'}
          />
          {emailError ? (
            <p className={`text-xs font-montserrat tracking-wide ${variant === 'dark' ? 'text-red-300' : 'text-red-200'}`}>
              {emailError}
            </p>
          ) : null}
        </div>
      ) : (
        <div className={`space-y-1 text-start`}>
          <label
            htmlFor="subscribe-phone"
            className={`block text-[10px] uppercase tracking-[0.18em] font-montserrat ${variant === 'dark' ? 'text-white/45' : 'text-white/60'}`}
          >
            {copy.phoneRequired}
          </label>
          <PhoneWithCountry
            id="subscribe-phone"
            variant={variant}
            value={phone}
            onChange={(v) => {
              setPhone(v)
              if (phoneError) setPhoneError('')
            }}
            onBlur={() => {
              if (!phone) return
              const v = validateOptionalPhone(phone, language)
              setPhoneError(v.ok ? '' : v.message)
            }}
            disabled={isSubmitting}
            error={!!phoneError}
          />
          {phoneError ? (
            <p className={`text-xs font-montserrat tracking-wide ${variant === 'dark' ? 'text-red-300' : 'text-red-200'}`}>
              {phoneError}
            </p>
          ) : null}
        </div>
      )}

      <div className={`flex flex-col gap-3 md:flex-row md:items-stretch `}>
        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={buttonClass}
          data-cursor-hover
        >
          {isSubmitting ? copy.subscribing : copy.subscribe}
        </motion.button>
      </div>

      <p className={`text-xs tracking-wide ${variant === 'dark' ? 'text-white/35' : 'text-brand-stone/70'}`}>
        {copy.privacyLine}
      </p>
    </form>
  )
}
