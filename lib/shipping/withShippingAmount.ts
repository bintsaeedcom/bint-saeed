export function withShippingAmount(template: string, amount: string): string {
  return template.replaceAll('{amount}', amount)
}
