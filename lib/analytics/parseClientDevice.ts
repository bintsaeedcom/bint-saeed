export type ClientDeviceType = 'mobile' | 'tablet' | 'desktop'

export type ClientDeviceInfo = {
  type: ClientDeviceType
  browser: string
  os: string
}

/** Parse a browser user agent into device type, browser, and OS. Android must be checked before Linux. */
export function parseClientDevice(userAgent?: string | null): ClientDeviceInfo {
  if (!userAgent?.trim()) {
    return { type: 'desktop', browser: 'Unknown', os: 'Unknown' }
  }

  const ua = userAgent

  let type: ClientDeviceType = 'desktop'
  if (/iPad|Tablet/i.test(ua) && !/Mobile/i.test(ua)) {
    type = 'tablet'
  } else if (/Android/i.test(ua) && !/Mobile/i.test(ua)) {
    type = 'tablet'
  } else if (/Mobi|Android|iPhone|iPod/i.test(ua)) {
    type = 'mobile'
  }

  let browser = 'Unknown'
  if (/Edg\//i.test(ua)) browser = 'Edge'
  else if (/OPR\/|Opera/i.test(ua)) browser = 'Opera'
  else if (/SamsungBrowser/i.test(ua)) browser = 'Samsung Internet'
  else if (/CriOS/i.test(ua)) browser = 'Chrome'
  else if (/FxiOS/i.test(ua)) browser = 'Firefox'
  else if (/Chrome/i.test(ua) && !/Edg/i.test(ua)) browser = 'Chrome'
  else if (/Safari/i.test(ua) && !/Chrome/i.test(ua)) browser = 'Safari'
  else if (/Firefox/i.test(ua)) browser = 'Firefox'

  let os = 'Unknown'
  if (/iPhone|iPod/i.test(ua)) os = 'iOS'
  else if (/iPad/i.test(ua)) os = 'iPadOS'
  else if (/Android/i.test(ua)) os = 'Android'
  else if (/Windows/i.test(ua)) os = 'Windows'
  else if (/Mac OS X|Macintosh/i.test(ua)) os = 'macOS'
  else if (/CrOS/i.test(ua)) os = 'ChromeOS'
  else if (/Linux/i.test(ua)) os = 'Linux'

  return { type, browser, os }
}

export function formatClientDeviceLabel(info: ClientDeviceInfo): string {
  return `${info.type} · ${info.browser} · ${info.os}`
}

export function detectClientDeviceLabel(userAgent?: string): string {
  if (typeof navigator === 'undefined' && !userAgent) return 'Unknown'
  return formatClientDeviceLabel(parseClientDevice(userAgent ?? navigator.userAgent))
}
