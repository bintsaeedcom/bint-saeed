'use client'

import { useEffect, useState } from 'react'
import { fetchGeoData } from '@/lib/geo/geoDetection'
import {
  formatAmountForCurrency,
  getUaeFreeShippingThreshold,
  getWorldwideFreeShippingThreshold,
} from '@/lib/pricing'
import type { SupportedCurrency } from '@/lib/pricing/types'

const GEO_COUNTRY_KEY = 'bint-saeed-geo-country'

/**
 * Complimentary shipping display:
 * - UAE visitors (IP) → AED 1,000 threshold (or clean equivalent in selected currency)
 * - Everyone else → AED 2,000 worldwide threshold (or clean equivalent in selected currency)
 */
export function useVisitorComplimentaryShipping(currency: SupportedCurrency) {
  const [countryCode, setCountryCode] = useState<string | null>(() => {
    if (typeof window === 'undefined') return null
    try {
      return localStorage.getItem(GEO_COUNTRY_KEY)
    } catch {
      return null
    }
  })

  useEffect(() => {
    let cancelled = false
    try {
      const cached = localStorage.getItem(GEO_COUNTRY_KEY)
      if (cached) {
        setCountryCode(cached)
        return
      }
    } catch {
      /* ignore */
    }

    fetchGeoData().then((geo) => {
      if (cancelled || !geo?.countryCode) return
      try {
        localStorage.setItem(GEO_COUNTRY_KEY, geo.countryCode)
      } catch {
        /* ignore */
      }
      setCountryCode(geo.countryCode)
    })

    return () => {
      cancelled = true
    }
  }, [])

  const isUaeVisitor = countryCode === 'AE' || (countryCode == null && currency === 'AED')
  const threshold = isUaeVisitor
    ? getUaeFreeShippingThreshold(currency)
    : getWorldwideFreeShippingThreshold(currency)

  return {
    isUaeVisitor,
    threshold,
    amountLabel: formatAmountForCurrency(threshold, currency),
  }
}
