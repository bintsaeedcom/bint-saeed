import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { requireAdmin } from '@/lib/admin/apiAuth'
import { parseAllowedOrigins } from '@/lib/security/allowedCheckoutOrigin'
import {
  getPaymentProvider,
  inferMollieKeyMode,
  isMollieConfigured,
  isStripeConfigured,
} from '@/lib/payments/provider'
import { getMollieApiKey } from '@/lib/mollie/config'
import { getMollieClient } from '@/lib/mollie/client'
import { getStripePayPalReadiness } from '@/lib/stripe/stripePayPalConfig'
import { isPayPalConfigured } from '@/lib/paypal/config'
import { isTabbyConfigured, isTabbyProductionSafe, isTabbyTestCredential } from '@/lib/tabby/config'
import { getTamaraApiBaseUrl, isTamaraConfigured } from '@/lib/tamara/config'

export const dynamic = 'force-dynamic'

type StripeMode = 'live' | 'test' | 'mixed' | 'unknown'

function getPublishableKey(): string {
  return process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY?.trim() ?? ''
}

function getSecretKey(): string {
  return process.env.STRIPE_SECRET_KEY?.trim() ?? ''
}

function getWebhookSecret(): string {
  return process.env.STRIPE_WEBHOOK_SECRET?.trim() ?? ''
}

function inferKeyMode(key: string): 'live' | 'test' | 'unknown' {
  if (key.startsWith('pk_live_') || key.startsWith('sk_live_')) return 'live'
  if (key.startsWith('pk_test_') || key.startsWith('sk_test_')) return 'test'
  return 'unknown'
}

function inferStripeMode(publishableKey: string, secretKey: string): StripeMode {
  const pubMode = inferKeyMode(publishableKey)
  const secMode = inferKeyMode(secretKey)
  if (pubMode === 'unknown' || secMode === 'unknown') return 'unknown'
  if (pubMode === secMode) return pubMode
  return 'mixed'
}

export async function GET(request: NextRequest) {
  if (!(await requireAdmin(request))) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const provider = getPaymentProvider()
  const publishableKey = getPublishableKey()
  const secretKey = getSecretKey()
  const webhookSecret = getWebhookSecret()
  const mollieApiKey = getMollieApiKey() ?? ''
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim() ?? ''
  const allowedOrigins = parseAllowedOrigins()

  const publishableConfigured = publishableKey.startsWith('pk_')
  const secretConfigured = secretKey.startsWith('sk_')
  const webhookConfigured = webhookSecret.startsWith('whsec_')
  const mollieConfigured = isMollieConfigured()
  const mollieMode = inferMollieKeyMode(mollieApiKey)
  const siteUrlConfigured = siteUrl.length > 0
  const stripeMode = inferStripeMode(publishableKey, secretKey)

  let stripeApiReachable = false
  let stripeAccountId: string | null = null
  let stripeError: string | null = null

  if (secretConfigured) {
    try {
      const stripe = new Stripe(secretKey, { apiVersion: '2026-06-24.dahlia' })
      const account = await stripe.accounts.retrieve(null)
      stripeApiReachable = true
      if (!('deleted' in account) || !account.deleted) {
        stripeAccountId = account.id
      }
    } catch (error: unknown) {
      stripeError = error instanceof Error ? error.message : 'Could not reach Stripe API'
    }
  }

  let mollieApiReachable = false
  let mollieProfileId: string | null = null
  let mollieError: string | null = null

  if (mollieConfigured) {
    try {
      const profile = await getMollieClient().profiles.getCurrent()
      mollieApiReachable = true
      mollieProfileId = profile.id ?? null
    } catch (error: unknown) {
      mollieError = error instanceof Error ? error.message : 'Could not reach Mollie API'
    }
  }

  const warnings: string[] = []
  if (provider === 'stripe') {
    if (!publishableConfigured) warnings.push('NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is missing or invalid.')
    if (!secretConfigured) warnings.push('STRIPE_SECRET_KEY is missing or invalid.')
    if (!webhookConfigured) warnings.push('STRIPE_WEBHOOK_SECRET is missing or invalid.')
    if (stripeMode === 'mixed') warnings.push('Stripe keys are mixed between test and live modes.')
    if (secretConfigured && !stripeApiReachable && stripeError) {
      warnings.push(`Stripe API check failed: ${stripeError}`)
    }
  }

  if (provider === 'mollie') {
    if (!mollieConfigured) warnings.push('MOLLIE_API_KEY is missing or invalid.')
    if (mollieConfigured && !mollieApiReachable && mollieError) {
      warnings.push(`Mollie API check failed: ${mollieError}`)
    }
  }

  if (!siteUrlConfigured && process.env.NODE_ENV === 'production') {
    warnings.push('NEXT_PUBLIC_SITE_URL is not set for production fallback URLs.')
  }

  const stripeReady =
    publishableConfigured &&
    secretConfigured &&
    webhookConfigured &&
    stripeMode !== 'mixed' &&
    (stripeApiReachable || process.env.NODE_ENV !== 'production')

  const mollieReady =
    mollieConfigured && (mollieApiReachable || process.env.NODE_ENV !== 'production')

  const directPayPalConfigured = isPayPalConfigured()
  const publicPayPalConfigured = Boolean(process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID?.trim())
  const publicMollieEnabled = process.env.NEXT_PUBLIC_MOLLIE_CHECKOUT_ENABLED === 'true'

  const checkoutReady = stripeReady || directPayPalConfigured || mollieReady

  const stripePayPalCpmt = getStripePayPalReadiness()
  if (stripePayPalCpmt.dashboardCpmtConfigured) {
    warnings.push(
      'Stripe PayPal cpmt is configured but UAE accounts cannot use Stripe PayPal — use direct PayPal (PAYPAL_CLIENT_ID) instead.',
    )
  }
  if (directPayPalConfigured && !publicPayPalConfigured) {
    warnings.push('Set NEXT_PUBLIC_PAYPAL_CLIENT_ID (same as PAYPAL_CLIENT_ID) so checkout shows PayPal.')
  }
  if (mollieConfigured && !publicMollieEnabled) {
    warnings.push('Set NEXT_PUBLIC_MOLLIE_CHECKOUT_ENABLED=true to show Mollie for EU customers at checkout.')
  }

  const tabbyEnabled = process.env.NEXT_PUBLIC_TABBY_CHECKOUT_ENABLED === 'true'
  const tamaraEnabled = process.env.NEXT_PUBLIC_TAMARA_CHECKOUT_ENABLED === 'true'
  const tabbySecret = process.env.TABBY_SECRET_KEY?.trim() ?? ''
  const tabbyPublic = process.env.NEXT_PUBLIC_TABBY_PUBLIC_KEY?.trim() ?? ''
  const tamaraBase = getTamaraApiBaseUrl()

  if (tabbyEnabled && !isTabbyConfigured()) {
    warnings.push('Tabby is enabled but TABBY_SECRET_KEY / TABBY_MERCHANT_CODE are incomplete.')
  }
  if (tabbyEnabled && !isTabbyProductionSafe()) {
    warnings.push('Tabby sandbox keys (sk_test_/pk_test_) are set in Production — replace with live keys.')
  }
  if (tabbyEnabled && !tabbyPublic) {
    warnings.push('Set NEXT_PUBLIC_TABBY_PUBLIC_KEY so PDP/cart Tabby snippets can load.')
  }
  if (tamaraEnabled && !isTamaraConfigured()) {
    warnings.push('Tamara is enabled but TAMARA_API_TOKEN is missing.')
  }
  if (tamaraEnabled && process.env.VERCEL_ENV === 'production' && tamaraBase.includes('sandbox')) {
    warnings.push('Tamara API base is sandbox in Production — set TAMARA_API_BASE_URL=https://api.tamara.co')
  }
  if (tamaraEnabled && !process.env.NEXT_PUBLIC_TAMARA_PUBLIC_KEY?.trim()) {
    warnings.push('Set NEXT_PUBLIC_TAMARA_PUBLIC_KEY so PDP Tamara messaging can load.')
  }
  if (process.env.VERCEL_ENV === 'production' && isTabbyTestCredential(tabbySecret)) {
    warnings.push(`Tabby secret looks like sandbox (${tabbySecret.slice(0, 8)}…).`)
  }

  return NextResponse.json({
    ok: checkoutReady,
    checkedAt: new Date().toISOString(),
    provider,
    mode: provider === 'mollie' ? mollieMode : stripeMode,
    env: process.env.NODE_ENV ?? 'development',
    checkout: {
      publishableConfigured,
      secretConfigured,
      webhookConfigured,
      mollieConfigured,
      siteUrlConfigured,
      allowedOrigins,
      webhookUrls: {
        stripe: '/api/webhooks/stripe',
        mollie: '/api/webhooks/mollie',
        paypal: '/api/payments/paypal/capture',
        tamara: '/api/webhooks/tamara',
        tabby: '/api/webhooks/tabby',
      },
    },
    stripe: {
      configured: isStripeConfigured(),
      apiReachable: stripeApiReachable,
      accountId: stripeAccountId,
      error: stripeError,
    },
    mollie: {
      configured: mollieConfigured,
      apiReachable: mollieApiReachable,
      profileId: mollieProfileId,
      error: mollieError,
    },
    paypal: {
      directConfigured: directPayPalConfigured,
      publicClientConfigured: publicPayPalConfigured,
      mode: process.env.PAYPAL_MODE?.trim() || 'sandbox',
      stripeCpmtLegacy: stripePayPalCpmt,
    },
    tamara: {
      enabled: tamaraEnabled,
      configured: isTamaraConfigured(),
      apiBase: tamaraBase,
      publicKeyConfigured: Boolean(process.env.NEXT_PUBLIC_TAMARA_PUBLIC_KEY?.trim()),
    },
    tabby: {
      enabled: tabbyEnabled,
      configured: isTabbyConfigured(),
      productionSafe: isTabbyProductionSafe(),
      publicKeyConfigured: Boolean(tabbyPublic),
    },
    warnings,
  })
}
