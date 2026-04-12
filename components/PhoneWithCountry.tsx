'use client'

import PhoneInput, { type Country } from 'react-phone-number-input'
import flags from 'react-phone-number-input/flags'
import type { E164Number } from 'libphonenumber-js'

/** Shown first in the country list, then a divider, then all other countries. */
const PREFERRED: Country[] = ['AE', 'SA', 'KW', 'QA', 'BH', 'OM', 'EG']

type PhoneWithCountryProps = {
  value: E164Number | undefined
  onChange: (value: E164Number | undefined) => void
  variant?: 'light' | 'dark'
  disabled?: boolean
  id?: string
  error?: boolean
  onBlur?: () => void
}

export default function PhoneWithCountry({
  value,
  onChange,
  variant = 'dark',
  disabled,
  id,
  error,
  onBlur,
}: PhoneWithCountryProps) {
  const theme = variant === 'dark' ? 'phone-field-dark' : 'phone-field-light'

  return (
    <div className={`${theme} w-full ${error ? 'phone-field--error' : ''}`} dir="ltr">
      <PhoneInput
        international
        defaultCountry="AE"
        addInternationalOption={false}
        flags={flags}
        countryCallingCodeEditable={false}
        limitMaxLength
        countryOptionsOrder={[...PREFERRED, '|', '...']}
        value={value}
        onChange={onChange}
        disabled={disabled}
        id={id}
        aria-invalid={error || undefined}
        placeholder="Phone (optional)"
        className={`PhoneInput--bint-saeed${error ? ' PhoneInput--error' : ''}`}
        onBlur={onBlur}
      />
    </div>
  )
}
