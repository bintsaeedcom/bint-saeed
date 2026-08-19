/** Default Bint Saeed WhatsApp (+971 50 229 9402). Override with NEXT_PUBLIC_WHATSAPP_NUMBER if needed. */
const DEFAULT_WHATSAPP = '+971502299402'

export const WHATSAPP_WA_ME = '971502299402'
export const WHATSAPP_DISPLAY = '+971 50 229 9402'

export function getWhatsAppDigits(): string | null {
  const raw = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.trim() || DEFAULT_WHATSAPP
  const digits = raw.replace(/\D/g, '')
  if (digits.length >= 10 && digits.length <= 15) return digits
  return WHATSAPP_WA_ME
}

export function buildWhatsAppHref(message: string): string {
  return `https://wa.me/${getWhatsAppDigits()}?text=${encodeURIComponent(message)}`
}
