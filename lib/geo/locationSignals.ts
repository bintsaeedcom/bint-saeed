/** Free signals for richer Slack location — never claim exact street from IP. */

export type LocationSignalInput = {
  ipCountryCode?: string
  ipTimezone?: string
  ipIsp?: string
  ipOrg?: string
  ipAs?: string
  browserTimezone?: string
  browserLanguage?: string
  shopCurrency?: string
  shopLanguage?: string
}

export type LocationSignalResult = {
  vpnLikely: boolean
  confidence: 'high' | 'medium' | 'low'
  reasons: string[]
  summary: string
}

const HOSTING_HINT =
  /\b(vpn|proxy|hosting|cloud|digitalocean|linode|vultr|hetzner|ovh|amazon|aws|google cloud|microsoft|azure|cloudflare|mullvad|nordvpn|expressvpn|surfshark|proton|private internet|datacenter|data center|colo|ovh|leaseweb|server|tor exit)\b/i

/** Rough map of IANA timezone prefixes → likely ISO country codes (enough for mismatch detection). */
const TZ_COUNTRY_HINTS: Record<string, string[]> = {
  'Asia/Dubai': ['AE'],
  'Asia/Muscat': ['OM'],
  'Asia/Riyadh': ['SA'],
  'Asia/Qatar': ['QA'],
  'Asia/Kuwait': ['KW'],
  'Asia/Bahrain': ['BH'],
  'Europe/London': ['GB'],
  'Europe/Paris': ['FR', 'BE', 'LU', 'MC'],
  'Europe/Berlin': ['DE'],
  'Europe/Amsterdam': ['NL'],
  'Europe/Rome': ['IT'],
  'Europe/Madrid': ['ES'],
  'America/New_York': ['US'],
  'America/Los_Angeles': ['US'],
  'America/Chicago': ['US'],
  'America/Toronto': ['CA'],
  'Asia/Shanghai': ['CN'],
  'Asia/Hong_Kong': ['HK'],
  'Asia/Singapore': ['SG'],
  'Asia/Tokyo': ['JP'],
  'Asia/Jakarta': ['ID'],
  'Asia/Kuala_Lumpur': ['MY'],
  'Australia/Sydney': ['AU'],
  'Europe/Moscow': ['RU'],
}

const CURRENCY_HOME: Record<string, string[]> = {
  AED: ['AE'],
  SAR: ['SA'],
  KWD: ['KW'],
  QAR: ['QA'],
  BHD: ['BH'],
  OMR: ['OM'],
  USD: ['US'],
  GBP: ['GB'],
  EUR: ['DE', 'FR', 'IT', 'ES', 'NL', 'BE', 'AT', 'PT', 'IE', 'FI', 'GR'],
  CHF: ['CH'],
  CAD: ['CA'],
  SGD: ['SG'],
  AUD: ['AU'],
}

function hostingLooksLikeVpn(isp?: string, org?: string, asName?: string): boolean {
  return [isp, org, asName].some((v) => v && HOSTING_HINT.test(v))
}

function timezoneSuggestsMismatch(browserTz: string | undefined, ipCountry: string | undefined): boolean {
  if (!browserTz || !ipCountry || ipCountry === 'XX') return false
  const hinted = TZ_COUNTRY_HINTS[browserTz]
  if (!hinted) return false
  return !hinted.includes(ipCountry.toUpperCase())
}

export function assessLocationSignals(input: LocationSignalInput): LocationSignalResult {
  const reasons: string[] = []
  let vpnScore = 0

  if (hostingLooksLikeVpn(input.ipIsp, input.ipOrg, input.ipAs)) {
    vpnScore += 2
    reasons.push('IP org/ISP looks like hosting or VPN')
  }

  if (timezoneSuggestsMismatch(input.browserTimezone, input.ipCountryCode)) {
    vpnScore += 2
    reasons.push(
      `Browser clock (${input.browserTimezone}) doesn’t match IP country (${input.ipCountryCode})`,
    )
  }

  if (
    input.ipTimezone &&
    input.browserTimezone &&
    input.ipTimezone !== input.browserTimezone &&
    // mild signal only
    !timezoneSuggestsMismatch(input.browserTimezone, input.ipCountryCode)
  ) {
    vpnScore += 1
    reasons.push(`Browser TZ ${input.browserTimezone} vs IP TZ ${input.ipTimezone}`)
  }

  const currencyHomes = input.shopCurrency ? CURRENCY_HOME[input.shopCurrency.toUpperCase()] : undefined
  if (currencyHomes && input.ipCountryCode && !currencyHomes.includes(input.ipCountryCode.toUpperCase())) {
    // Soft — UAE shoppers abroad are normal; mention as preference, not VPN proof
    reasons.push(`Shop currency ${input.shopCurrency} while IP says ${input.ipCountryCode}`)
  }

  const vpnLikely = vpnScore >= 2
  const confidence: LocationSignalResult['confidence'] = vpnLikely
    ? 'low'
    : reasons.length > 0
      ? 'medium'
      : 'high'

  const summary = vpnLikely
    ? `Likely VPN/proxy — treat IP city as exit node, not home`
    : reasons.length > 0
      ? `IP location approximate — soft mismatch signals`
      : `IP location plausible`

  return { vpnLikely, confidence, reasons, summary }
}

/** Prefer shop preference (currency/locale) as a human signal when VPN hides geo. */
export function formatShopPreferenceLine(currency?: string, language?: string): string {
  const parts = [
    currency ? `Currency ${currency}` : '',
    language ? `Language ${language}` : '',
  ].filter(Boolean)
  return parts.length ? parts.join(' · ') : 'Not set'
}
