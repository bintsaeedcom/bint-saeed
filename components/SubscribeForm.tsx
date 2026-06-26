'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'
import type { E164Number } from 'libphonenumber-js'
import { validateSubscriberEmail } from '@/lib/validateSubscriberEmail'
import { validateOptionalPhone } from '@/lib/validateOptionalPhone'
import PhoneWithCountry from '@/components/PhoneWithCountry'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { getSubscribeFormCopy } from '@/lib/i18n/subscribeFormI18n'

interface SubscribeFormProps {
  variant?: 'light' | 'dark'
  initialEmail?: string
}

export default function SubscribeForm({ variant = 'light', initialEmail = '' }: SubscribeFormProps) {
  const { isRTL, language } = useLanguage()
  const copy = getSubscribeFormCopy(language)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: initialEmail,
  })
  const [phone, setPhone] = useState<E164Number | undefined>()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [emailError, setEmailError] = useState('')
  const [phoneError, setPhoneError] = useState('')

  useEffect(() => {
    setFormData((prev) => ({ ...prev, email: initialEmail }))
    if (!initialEmail) {
      setEmailError('')
      return
    }
    const check = validateSubscriberEmail(initialEmail, language)
    setEmailError(check.valid ? '' : check.message)
  }, [initialEmail, language])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const check = validateSubscriberEmail(formData.email, language)
    if (!check.valid) {
      setEmailError(check.message)
      toast.error(check.message)
      return
    }
    const phoneCheck = validateOptionalPhone(phone, language)
    if (!phoneCheck.ok) {
      setPhoneError(phoneCheck.message)
      toast.error(phoneCheck.message)
      return
    }
    setEmailError('')
    setPhoneError('')
    setIsSubmitting(true)

    try {
      const payload: Record<string, string | undefined> = {
        ...formData,
        email: check.email,
      }
      if (phoneCheck.phone) payload.phone = phoneCheck.phone

      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      const data = await response.json().catch(() => ({}))

      if (response.ok) {
        toast.success(copy.success)
        setFormData({ firstName: '', lastName: '', email: '' })
        setPhone(undefined)
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

  const inputClass = variant === 'dark'
    ? 'w-full px-5 py-4 bg-white/[0.03] border border-white/[0.08] rounded-xl text-brand-stone placeholder-white/30 font-montserrat text-sm tracking-wide focus:outline-none focus:border-brand-dustyBlue/30 transition-colors'
    : 'w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/50 font-montserrat text-sm tracking-[0.1em] focus:outline-none focus:border-brand-rose transition-colors'

  const buttonClass = variant === 'dark'
    ? 'px-8 py-4 bg-brand-dustyBlue text-[#1a0008] font-montserrat text-xs uppercase tracking-[0.2em] rounded-xl hover:bg-brand-stone transition-colors disabled:opacity-50'
    : 'px-8 py-3 bg-brand-rose text-brand-darkRed font-montserrat text-sm uppercase tracking-[0.2em] hover:bg-white transition-colors disabled:opacity-50'

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder={copy.firstName}
          value={formData.firstName}
          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
          required
          className={inputClass}
        />
        <input
          type="text"
          placeholder={copy.lastName}
          value={formData.lastName}
          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
          required
          className={inputClass}
        />
      </div>
      <div className={`space-y-1 ${isRTL ? 'text-right' : ''}`}>
        <label
          htmlFor="subscribe-phone"
          className={`block text-xs uppercase tracking-[0.2em] font-montserrat ${variant === 'dark' ? 'text-brand-dustyBlue/60' : 'text-white/60'}`}
        >
          {copy.phoneOptional}{' '}
          <span className="normal-case tracking-normal opacity-70">{copy.phoneOptionalNote}</span>
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
      <div className="flex flex-col md:flex-row gap-4 md:items-start">
        <div className="flex-1 w-full space-y-1">
          <input
            type="email"
            placeholder={copy.email}
            value={formData.email}
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value })
              if (emailError) setEmailError('')
            }}
            onBlur={() => {
              if (!formData.email.trim()) return
              const check = validateSubscriberEmail(formData.email, language)
              setEmailError(check.valid ? '' : check.message)
            }}
            required
            aria-invalid={emailError ? true : undefined}
            className={`w-full ${inputClass} ${emailError ? (variant === 'dark' ? 'border-red-400/50' : 'border-red-300') : ''}`}
          />
          {emailError ? (
            <p className={`text-xs font-montserrat tracking-wide ${variant === 'dark' ? 'text-red-300' : 'text-red-200'}`}>
              {emailError}
            </p>
          ) : null}
        </div>
        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`${buttonClass} md:self-stretch md:shrink-0`}
          data-cursor-hover
        >
          {isSubmitting ? copy.subscribing : copy.subscribe}
        </motion.button>
      </div>
      <p className={`text-xs tracking-wide ${variant === 'dark' ? 'text-white/30' : 'text-brand-stone/70'}`}>
        {copy.privacyLine}
      </p>
    </form>
  )
}
