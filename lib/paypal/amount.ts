/** PayPal expects a decimal string with two fraction digits. */
export function toPayPalAmountValue(amount: number): string {
  return Math.max(0, amount).toFixed(2)
}
