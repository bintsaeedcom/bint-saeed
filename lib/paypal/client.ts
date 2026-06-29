import {
  getPayPalApiBase,
  getPayPalClientId,
  getPayPalClientSecret,
  isPayPalConfigured,
} from '@/lib/paypal/config'

type PayPalAccessTokenResponse = {
  access_token?: string
  expires_in?: number
  token_type?: string
}

type PayPalLink = {
  href: string
  rel: string
  method?: string
}

export type PayPalCreateOrderResult = {
  orderId: string
  approvalUrl: string
}

export type PayPalCaptureResult = {
  orderId: string
  captureId: string
  status: string
  amountValue: string
  currency: string
  payerEmail?: string
  payerName?: string
}

let cachedToken: { value: string; expiresAt: number } | null = null

async function getAccessToken(): Promise<string> {
  if (!isPayPalConfigured()) {
    throw new Error('PayPal is not configured')
  }

  const now = Date.now()
  if (cachedToken && cachedToken.expiresAt > now + 30_000) {
    return cachedToken.value
  }

  const clientId = getPayPalClientId()!
  const clientSecret = getPayPalClientSecret()!
  const credentials = Buffer.from(`${clientId}:${clientSecret}`).toString('base64')

  const response = await fetch(`${getPayPalApiBase()}/v1/oauth2/token`, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${credentials}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: 'grant_type=client_credentials',
  })

  const data = (await response.json()) as PayPalAccessTokenResponse
  if (!response.ok || !data.access_token) {
    throw new Error('PayPal authentication failed')
  }

  cachedToken = {
    value: data.access_token,
    expiresAt: now + (data.expires_in ?? 300) * 1000,
  }
  return data.access_token
}

async function paypalRequest<T>(
  path: string,
  init: RequestInit & { json?: unknown } = {},
): Promise<T> {
  const token = await getAccessToken()
  const headers = new Headers(init.headers)
  headers.set('Authorization', `Bearer ${token}`)
  headers.set('Content-Type', 'application/json')

  const response = await fetch(`${getPayPalApiBase()}${path}`, {
    ...init,
    headers,
    body: init.json !== undefined ? JSON.stringify(init.json) : init.body,
  })

  const data = (await response.json()) as T & { message?: string; details?: unknown }
  if (!response.ok) {
    const detail =
      typeof data.message === 'string'
        ? data.message
        : `PayPal API error (${response.status})`
    throw new Error(detail)
  }
  return data
}

export async function createPayPalOrder(params: {
  amountValue: string
  currency: string
  description: string
  returnUrl: string
  cancelUrl: string
  customId?: string
}): Promise<PayPalCreateOrderResult> {
  const data = await paypalRequest<{
    id: string
    links?: PayPalLink[]
  }>('/v2/checkout/orders', {
    method: 'POST',
    json: {
      intent: 'CAPTURE',
      purchase_units: [
        {
          amount: {
            currency_code: params.currency,
            value: params.amountValue,
          },
          description: params.description.slice(0, 127),
          custom_id: params.customId?.slice(0, 127),
        },
      ],
      application_context: {
        brand_name: 'Bint Saeed',
        landing_page: 'NO_PREFERENCE',
        user_action: 'PAY_NOW',
        return_url: params.returnUrl,
        cancel_url: params.cancelUrl,
      },
    },
  })

  const approvalUrl = data.links?.find((link) => link.rel === 'approve')?.href
  if (!data.id || !approvalUrl) {
    throw new Error('PayPal did not return an approval URL')
  }

  return { orderId: data.id, approvalUrl }
}

export async function capturePayPalOrder(orderId: string): Promise<PayPalCaptureResult> {
  const data = await paypalRequest<{
    id: string
    status?: string
    payer?: {
      email_address?: string
      name?: { given_name?: string; surname?: string }
    }
    purchase_units?: Array<{
      payments?: {
        captures?: Array<{
          id?: string
          status?: string
          amount?: { value?: string; currency_code?: string }
        }>
      }
    }>
  }>(`/v2/checkout/orders/${encodeURIComponent(orderId)}/capture`, {
    method: 'POST',
    json: {},
  })

  const capture = data.purchase_units?.[0]?.payments?.captures?.[0]
  if (!capture?.id || !capture.amount?.value || !capture.amount.currency_code) {
    throw new Error('PayPal capture did not complete')
  }

  const payerName = [data.payer?.name?.given_name, data.payer?.name?.surname]
    .filter(Boolean)
    .join(' ')
    .trim()

  return {
    orderId: data.id,
    captureId: capture.id,
    status: capture.status ?? data.status ?? 'COMPLETED',
    amountValue: capture.amount.value,
    currency: capture.amount.currency_code,
    payerEmail: data.payer?.email_address,
    payerName: payerName || undefined,
  }
}

export async function getPayPalOrder(orderId: string): Promise<{ status?: string }> {
  return paypalRequest<{ status?: string }>(`/v2/checkout/orders/${encodeURIComponent(orderId)}`, {
    method: 'GET',
  })
}
