'use client'

import toast from 'react-hot-toast'
import { FiCheck } from 'react-icons/fi'

const CONTACT_TOAST_DURATION_MS = 8000

export function showContactSuccessToast(isRTL: boolean) {
  const title = isRTL ? 'تم الاستلام' : 'Message received'
  const body = isRTL
    ? 'شكراً لتواصلك معنا. سنعود إليك في أقرب وقت.'
    : 'Thank you for your enquiry. We will be in touch shortly.'

  toast.custom(
    (t) => (
      <div
        role="status"
        aria-live="polite"
        className={`pointer-events-auto flex max-w-[min(100vw-2rem,22rem)] items-start gap-4 rounded-[4px] border border-brand-stone/35 bg-gradient-to-br from-[#faf8f5] via-[#f7f2ec] to-[#f0e9e1] px-5 py-4 shadow-[0_24px_56px_rgba(26,2,16,0.14)] transition-all duration-500 ${
          t.visible ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
        } ${isRTL ? 'flex-row-reverse text-right' : ''}`}
      >
        <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-brand-dustyBlue/40 bg-brand-dustyBlue/12 shadow-[inset_0_1px_0_rgba(255,255,255,0.5)]">
          <FiCheck className="h-5 w-5 text-brand-dustyBlue" strokeWidth={2.25} aria-hidden />
        </div>
        <div className="min-w-0 flex-1">
          <p className="font-montserrat text-[10px] uppercase tracking-[0.24em] text-brand-clayRed">
            {title}
          </p>
          <p className="mt-1.5 font-montserrat text-[13px] leading-relaxed tracking-[0.02em] text-brand-darkRed">
            {body}
          </p>
        </div>
      </div>
    ),
    { duration: CONTACT_TOAST_DURATION_MS }
  )
}
