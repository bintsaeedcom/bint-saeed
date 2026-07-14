/** Client-safe Tabby public key (NEXT_PUBLIC_*). */
export function getTabbyPublicKey(): string | null {
  const key = process.env.NEXT_PUBLIC_TABBY_PUBLIC_KEY?.trim()
  return key || null
}

export function getTabbyPublicMerchantCode(): string | null {
  const code =
    process.env.NEXT_PUBLIC_TABBY_MERCHANT_CODE?.trim() ||
    process.env.NEXT_PUBLIC_TABBY_PUBLIC_MERCHANT_CODE?.trim()
  return code || null
}
