import { money, tamaraFetch } from '@/lib/tamara/config'

export async function checkTamaraEligibility(args: {
  amount: number
  currency: string
  phone?: string
}): Promise<{ eligible: boolean; raw?: unknown }> {
  const body: Record<string, unknown> = {
    order: money(args.amount, args.currency),
  }
  if (args.phone?.trim()) {
    body.customer = { phone: args.phone.trim() }
  }

  const { ok, data } = await tamaraFetch<{ is_eligible?: boolean }>('/pre-checkout/v1/eligibility', {
    method: 'POST',
    body: JSON.stringify(body),
  })

  if (!ok) {
    // Fail open for amount-only checks so checkout can still attempt create-session;
    // UI should grey out only when API explicitly returns false.
    return { eligible: true, raw: data }
  }

  return { eligible: data.is_eligible !== false, raw: data }
}
