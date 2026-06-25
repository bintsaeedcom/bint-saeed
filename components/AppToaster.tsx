'use client'

import { Toaster } from 'react-hot-toast'
import { useLanguage } from '@/lib/i18n/LanguageContext'

export default function AppToaster() {
  const { isRTL } = useLanguage()

  return (
    <Toaster
      position={isRTL ? 'bottom-left' : 'bottom-right'}
      toastOptions={{
        style: {
          background:
            'linear-gradient(135deg, rgba(59,10,18,0.96) 0%, rgba(31,5,8,0.94) 100%)',
          color: '#F5EDE8',
          fontFamily: 'var(--font-montserrat)',
          letterSpacing: '0.03em',
          border: '1px solid rgba(212,189,172,0.28)',
          borderRadius: '12px',
          boxShadow: '0 18px 36px rgba(12, 2, 8, 0.35)',
          padding: '12px 14px',
          minWidth: '250px',
        },
        success: {
          style: {
            borderColor: 'rgba(146,170,193,0.45)',
          },
        },
        error: {
          style: {
            borderColor: 'rgba(193,144,134,0.5)',
          },
        },
      }}
    />
  )
}
