import { NextRequest, NextResponse } from 'next/server'
import { getMollieApiKey } from '@/lib/mollie/config'
import { getMollieClient } from '@/lib/mollie/client'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  if (!getMollieApiKey()) {
    return NextResponse.json({ error: 'Mollie is not configured.' }, { status: 503 })
  }

  const paymentId = request.nextUrl.searchParams.get('payment_id')?.trim()
  if (!paymentId) {
    return NextResponse.json({ error: 'payment_id is required.' }, { status: 400 })
  }

  try {
    const payment = await getMollieClient().payments.get(paymentId)
    const status = payment.status
    const paid = status === 'paid' || status === 'authorized'
    return NextResponse.json({
      paymentId: payment.id,
      status,
      paid,
      amount: payment.amount,
    })
  } catch (error: unknown) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Could not fetch payment status.' },
      { status: 502 },
    )
  }
}
