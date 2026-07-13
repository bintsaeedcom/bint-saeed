/** Client-safe Tamara public key (NEXT_PUBLIC_*). */
export function getTamaraPublicKey(): string | null {
  const key = process.env.NEXT_PUBLIC_TAMARA_PUBLIC_KEY?.trim()
  return key || null
}
