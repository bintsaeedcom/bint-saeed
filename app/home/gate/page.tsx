'use client'

import { useCallback, useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Script from 'next/script'
import PreviewAccessShell from '@/components/preview/PreviewAccessShell'
import { detectPrivateBrowsingMode } from '@/lib/detectPrivateMode'
import { parsePreviewReturnToParam } from '@/lib/previewAccessCookie'

declare global {
  interface Window {
    grecaptcha?: {
      ready: (cb: () => void) => void
      execute: (siteKey: string, opts: { action: string }) => Promise<string>
    }
  }
}

export default function HomeGatePage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const returnTo = parsePreviewReturnToParam(searchParams.get('returnTo'))

  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''

  const [envOk, setEnvOk] = useState<boolean | null>(null)
  const [scriptReady, setScriptReady] = useState(false)
  const [verifying, setVerifying] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const runVerify = useCallback(async () => {
    if (!siteKey) {
      setError('Preview protection is not fully configured (reCAPTCHA keys missing).')
      return
    }
    setVerifying(true)
    setError(null)
    try {
      await new Promise<void>((resolve, reject) => {
        const g = window.grecaptcha
        if (!g) {
          reject(new Error('recaptcha'))
          return
        }
        g.ready(() => resolve())
      })
      const token = await window.grecaptcha!.execute(siteKey, { action: 'preview_gate' })
      const res = await fetch('/api/preview/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token }),
      })
      const data = (await res.json()) as { ok?: boolean; code?: string; message?: string }

      if (res.ok && data.ok) {
        window.location.href = returnTo
        return
      }

      if (data.code === 'VPN') {
        router.replace('/home/blocked?reason=vpn')
        return
      }
      if (data.code === 'BOT') {
        router.replace('/home/blocked?reason=bot')
        return
      }
      if (data.code === 'CONFIG') {
        router.replace('/home/blocked?reason=config')
        return
      }

      setError(data.message || 'We could not verify your session. Please try again.')
    } catch {
      setError('Something went wrong. Check your connection and try again.')
    } finally {
      setVerifying(false)
    }
  }, [router, returnTo, siteKey])

  useEffect(() => {
    let cancelled = false
    ;(async () => {
      const priv = await detectPrivateBrowsingMode()
      if (cancelled) return
      if (priv) {
        router.replace('/home/blocked?reason=private')
        return
      }
      setEnvOk(true)
    })()
    return () => {
      cancelled = true
    }
  }, [router])

  useEffect(() => {
    if (envOk !== true || !siteKey) return
    if (!scriptReady) return
    void runVerify()
  }, [envOk, scriptReady, siteKey, runVerify])

  const showLoading =
    envOk === true &&
    Boolean(siteKey) &&
    !error &&
    (verifying || !scriptReady)

  return (
    <>
      {siteKey && envOk ? (
        <Script
          src={`https://www.google.com/recaptcha/api.js?render=${encodeURIComponent(siteKey)}`}
          onLoad={() => setScriptReady(true)}
        />
      ) : null}

      <PreviewAccessShell
        title="Secure preview"
        subtitle="This private preview is protected. We verify your browser and network before continuing. Please use a standard window (not private browsing), disable VPN or proxy for this site, and complete the quick check below."
      >
        {envOk === null ? (
          <p className="font-montserrat text-xs uppercase tracking-[0.25em] text-white/35">Checking environment…</p>
        ) : null}

        {envOk === true && showLoading && !error ? (
          <div className="flex flex-col items-center gap-4">
            <span
              className="inline-block h-8 w-8 animate-spin rounded-full border-2 border-brand-dustyBlue/30 border-t-brand-dustyBlue"
              aria-hidden
            />
            <p className="font-montserrat text-xs uppercase tracking-[0.2em] text-white/40">
              {!scriptReady ? 'Loading verification…' : 'Verifying…'}
            </p>
          </div>
        ) : null}

        {error ? (
          <div className="space-y-6">
            <p className="font-montserrat text-sm text-white/60">{error}</p>
            <button
              type="button"
              onClick={() => void runVerify()}
              disabled={verifying || !scriptReady}
              className="rounded-xl bg-brand-dustyBlue px-8 py-3 font-montserrat text-xs uppercase tracking-[0.2em] text-[#1a0008] transition-colors hover:bg-brand-stone disabled:opacity-50"
            >
              Try again
            </button>
          </div>
        ) : null}

        {envOk === true && !siteKey ? (
          <p className="font-montserrat text-sm text-white/50">
            Preview protection is not fully configured (reCAPTCHA keys missing).
          </p>
        ) : null}

        <p className="mt-12 font-montserrat text-[10px] leading-relaxed text-white/25">
          Protected by Google reCAPTCHA — subject to the Google Privacy Policy and Terms of Use.
        </p>
      </PreviewAccessShell>
    </>
  )
}
