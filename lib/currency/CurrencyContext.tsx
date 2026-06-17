'use client'

import { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react'
import { isLikelySearchBotUserAgent } from '@/lib/bots/isLikelySearchBot'
import {
  cartSubtotalInCurrency,
  formatAmountForCurrency,
  getListedPrice,
  normalizeCurrencyCode,
} from '@/lib/pricing'
import type { SupportedCurrency } from '@/lib/pricing/types'
import type { CartItem } from '@/store/cartStore'

interface Currency {
  code: SupportedCurrency
  symbol: string
  name: string
}

export const currencies: Currency[] = [
  { code: 'AED', symbol: 'AED', name: 'UAE Dirham' },
  { code: 'EUR', symbol: 'EUR', name: 'Euro' },
  { code: 'USD', symbol: 'USD', name: 'US Dollar' },
  { code: 'SAR', symbol: 'SAR', name: 'Saudi Riyal' },
  { code: 'QAR', symbol: 'QAR', name: 'Qatari Riyal' },
  { code: 'OMR', symbol: 'OMR', name: 'Omani Rial' },
  { code: 'BHD', symbol: 'BHD', name: 'Bahraini Dinar' },
  { code: 'KWD', symbol: 'KWD', name: 'Kuwaiti Dinar' },
  { code: 'RUB', symbol: 'RUB', name: 'Russian Ruble' },
  { code: 'CNY', symbol: 'CNY', name: 'Chinese Yuan' },
  { code: 'GBP', symbol: '£', name: 'British Pound' },
  { code: 'CHF', symbol: 'Fr.', name: 'Swiss Franc' },
]

const countryToCurrency: Record<string, SupportedCurrency> = {
  AE: 'AED',
  SA: 'SAR',
  KW: 'KWD',
  QA: 'QAR',
  BH: 'BHD',
  OM: 'OMR',
  RU: 'RUB',
  CN: 'CNY',
  US: 'USD',
  GB: 'GBP',
  CH: 'CHF',
  AT: 'EUR',
  DE: 'EUR',
  FR: 'EUR',
  IT: 'EUR',
  ES: 'EUR',
  NL: 'EUR',
  BE: 'EUR',
  LU: 'EUR',
  MC: 'EUR',
}

interface CurrencyContextType {
  currency: Currency
  setCurrency: (code: string) => void
  convertPrice: (aedMaster: number, productId?: string) => number
  formatPrice: (aedMaster: number, productId?: string) => string
  /** Format an amount already expressed in the selected currency (cart totals). */
  formatAmount: (amountInCurrency: number) => string
  /** Sum cart lines in the selected currency — never FX-convert the subtotal as one blob. */
  cartSubtotal: (items: CartItem[]) => number
  formatCartSubtotal: (items: CartItem[]) => string
  currencies: Currency[]
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined)

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrencyState] = useState<Currency>(currencies[0])
  const [isInitialized, setIsInitialized] = useState(false)

  useEffect(() => {
    const detectCurrency = async () => {
      if (typeof navigator !== 'undefined' && isLikelySearchBotUserAgent(navigator.userAgent)) {
        setIsInitialized(true)
        return
      }
      const savedCurrency = localStorage.getItem('bint-saeed-currency')
      if (savedCurrency) {
        const found = currencies.find((c) => c.code === normalizeCurrencyCode(savedCurrency))
        if (found) {
          setCurrencyState(found)
          setIsInitialized(true)
          return
        }
      }

      try {
        const response = await fetch('https://ipapi.co/json/')
        const data = await response.json()
        const countryCode = data.country_code as string
        const detectedCurrencyCode = countryToCurrency[countryCode] || 'AED'
        const found = currencies.find((c) => c.code === detectedCurrencyCode)
        if (found) {
          setCurrencyState(found)
        }
      } catch {
        console.log('Currency detection failed, defaulting to AED')
      }
      setIsInitialized(true)
    }

    detectCurrency()
  }, [])

  const setCurrency = (code: string) => {
    const normalized = normalizeCurrencyCode(code)
    const found = currencies.find((c) => c.code === normalized)
    if (found) {
      setCurrencyState(found)
      localStorage.setItem('bint-saeed-currency', normalized)
    }
  }

  const convertPrice = useCallback(
    (aedMaster: number, productId?: string): number => {
      return getListedPrice(aedMaster, currency.code, undefined, productId)
    },
    [currency.code],
  )

  const formatPrice = useCallback(
    (aedMaster: number, productId?: string): string => {
      return formatAmountForCurrency(
        getListedPrice(aedMaster, currency.code, undefined, productId),
        currency.code,
      )
    },
    [currency.code],
  )

  const formatAmount = useCallback(
    (amountInCurrency: number): string => {
      return formatAmountForCurrency(amountInCurrency, currency.code)
    },
    [currency.code],
  )

  const cartSubtotal = useCallback(
    (items: CartItem[]): number => {
      return cartSubtotalInCurrency(items, currency.code)
    },
    [currency.code],
  )

  const formatCartSubtotal = useCallback(
    (items: CartItem[]): string => {
      return formatAmountForCurrency(cartSubtotalInCurrency(items, currency.code), currency.code)
    },
    [currency.code],
  )

  return (
    <CurrencyContext.Provider
      value={{
        currency,
        setCurrency,
        formatPrice,
        convertPrice,
        formatAmount,
        cartSubtotal,
        formatCartSubtotal,
        currencies,
      }}
    >
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
