import { NextRequest, NextResponse } from 'next/server'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

type TabbyCheckoutBody = {
  amount: number
  currency?: string
  orderRef: string
  buyer?: {
    email?: string
    phone?: string
    name?: string
  }
}

function getTabbyConfig() {
  const secretKey = process.env.TABBY_SECRET_KEY?.trim() ?? ''
  const merchantCode = process.env.TABBY_MERCHANT_CODE?.trim() ?? ''
  const baseUrl = (process.env.TABBY_API_BASE_URL?.trim() || 'https://api.tabby.ai').replace(/\/$/, '')
  return { secretKey, merchantCode, baseUrl }
}

export async function POST(request: NextRequest) {
  const { secretKey, merchantCode, baseUrl } = getTabbyConfig()

  if (!secretKey || !merchantCode) {
    return NextResponse.json(
      {
        error:
          'Tabby is not configured. Set TABBY_SECRET_KEY and TABBY_MERCHANT_CODE.',
      },
      { status: 503 }
    )
  }

  let body: TabbyCheckoutBody
  try {
    body = (await request.json()) as TabbyCheckoutBody
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body.' }, { status: 400 })
  }

  const amount = Number(body.amount)
  if (!Number.isFinite(amount) || amount <= 0) {
    return NextResponse.json({ error: 'Invalid amount.' }, { status: 400 })
  }

  const orderRef = body.orderRef?.trim()
  if (!orderRef) {
    return NextResponse.json({ error: 'orderRef is required.' }, { status: 400 })
  }

  try {
    const response = await fetch(`${baseUrl}/api/v2/checkout`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${secretKey}`,
        'Content-Type': 'application/json',
        'X-Merchant-Code': merchantCode,
      },
      body: JSON.stringify({
        payment: {
          amount: amount.toFixed(2),
          currency: body.currency?.toUpperCase() || 'AED',
          description: `Bint Saeed order ${orderRef}`,
          buyer: {
            email: body.buyer?.email || 'guest@bintsaeed.com',
            phone: body.buyer?.phone || '+971500000000',
            name: body.buyer?.name || 'Guest',
          },
          order: {
            reference_id: orderRef,
          },
        },
        lang: 'en',
      }),
    })

    const data = (await response.json().catch(() => null)) as
      | { id?: string; status?: string; configuration?: { available_products?: unknown[] }; web_url?: string; redirect_url?: string; message?: string }
      | null

    if (!response.ok || !data) {
      return NextResponse.json(
        { error: data?.message || 'Failed to create Tabby checkout session.' },
        { status: 502 }
      )
    }

    return NextResponse.json({
      checkoutId: data.id ?? null,
      status: data.status ?? null,
      redirectUrl: data.web_url || data.redirect_url || null,
      availableProducts: data.configuration?.available_products ?? [],
    })
  } catch (error: unknown) {
    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : 'Tabby integration failed.',
      },
      { status: 500 }
    )
  }
}
