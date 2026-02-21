'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface Currency {
  code: string
  symbol: string
  name: string
  rate: number // Rate relative to AED (base currency)
}

export const currencies: Currency[] = [
  { code: 'AED', symbol: 'د.إ', name: 'UAE Dirham', rate: 1 },
  { code: 'SAR', symbol: 'ر.س', name: 'Saudi Riyal', rate: 1.02 },
  { code: 'KWD', symbol: 'د.ك', name: 'Kuwaiti Dinar', rate: 0.083 },
  { code: 'QAR', symbol: 'ر.ق', name: 'Qatari Riyal', rate: 0.99 },
  { code: 'BHD', symbol: 'د.ب', name: 'Bahraini Dinar', rate: 0.10 },
  { code: 'OMR', symbol: 'ر.ع', name: 'Omani Rial', rate: 0.10 },
  { code: 'USD', symbol: '$', name: 'US Dollar', rate: 0.27 },
  { code: 'EUR', symbol: '€', name: 'Euro', rate: 0.25 },
  { code: 'GBP', symbol: '£', name: 'British Pound', rate: 0.21 },
]

// Map countries to their default currencies
const countryToCurrency: Record<string, string> = {
  AE: 'AED', // UAE
  SA: 'SAR', // Saudi Arabia
  KW: 'KWD', // Kuwait
  QA: 'QAR', // Qatar
  BH: 'BHD', // Bahrain
  OM: 'OMR', // Oman
  US: 'USD', // United States
  GB: 'GBP', // United Kingdom
  DE: 'EUR', // Germany
  FR: 'EUR', // France
  IT: 'EUR', // Italy
  ES: 'EUR', // Spain
  NL: 'EUR', // Netherlands
}

interface CurrencyContextType {
  currency: Currency
  setCurrency: (code: string) => void
  formatPrice: (priceInAED: number) => string
  convertPrice: (priceInAED: number) => number
  currencies: Currency[]
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined)

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrencyState] = useState<Currency>(currencies[0]) // Default AED
  const [isInitialized, setIsInitialized] = useState(false)

  // Auto-detect currency based on location
  useEffect(() => {
    const detectCurrency = async () => {
      // First check localStorage for saved preference
      const savedCurrency = localStorage.getItem('bint-saeed-currency')
      if (savedCurrency) {
        const found = currencies.find(c => c.code === savedCurrency)
        if (found) {
          setCurrencyState(found)
          setIsInitialized(true)
          return
        }
      }

      // Try to detect location
      try {
        const response = await fetch('https://ipapi.co/json/')
        const data = await response.json()
        const countryCode = data.country_code
        const detectedCurrencyCode = countryToCurrency[countryCode] || 'AED'
        const found = currencies.find(c => c.code === detectedCurrencyCode)
        if (found) {
          setCurrencyState(found)
        }
      } catch (error) {
        // Default to AED if detection fails
        console.log('Currency detection failed, defaulting to AED')
      }
      setIsInitialized(true)
    }

    detectCurrency()
  }, [])

  const setCurrency = (code: string) => {
    const found = currencies.find(c => c.code === code)
    if (found) {
      setCurrencyState(found)
      localStorage.setItem('bint-saeed-currency', code)
    }
  }

  const convertPrice = (priceInAED: number): number => {
    return Math.round(priceInAED * currency.rate * 100) / 100
  }

  const formatPrice = (priceInAED: number): string => {
    const converted = convertPrice(priceInAED)
    
    // Format based on currency
    if (currency.code === 'AED' || currency.code === 'SAR' || currency.code === 'QAR') {
      return `${converted.toLocaleString()} ${currency.symbol}`
    }
    
    return `${currency.symbol}${converted.toLocaleString()}`
  }

  return (
    <CurrencyContext.Provider value={{ 
      currency, 
      setCurrency, 
      formatPrice, 
      convertPrice,
      currencies 
    }}>
      {children}
    </CurrencyContext.Provider>
  )
}

export function useCurrency() {
  const context = useContext(CurrencyContext)
  if (!context) {
    throw new Error('useCurrency must be used within a CurrencyProvider')
  }
  return context
}
