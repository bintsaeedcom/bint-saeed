'use client'

import { Suspense, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { markStaffOptics } from '@/lib/analytics/staffOptics'
import { suppressExternalTrackersForStaff } from '@/lib/analytics/tracking'

function AdminLoginForm() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const searchParams = useSearchParams()
  const next = searchParams?.get('next') || '/admin/orders'

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) {
        setError(typeof data.error === 'string' ? data.error : 'Login failed')
        setLoading(false)
        return
      }
      markStaffOptics()
      suppressExternalTrackersForStaff()
      router.push(next.startsWith('/admin') ? next : '/admin/orders')
      router.refresh()
    } catch {
      setError('Network error')
    }
    setLoading(false)
  }

  return (
    <div className="admin-area flex min-h-screen items-center justify-center bg-[#1a0a10] px-6">
      <div className="w-full max-w-md rounded-2xl border border-white/15 bg-[#1c1015] p-8 shadow-2xl">
        <h1 data-document-h1="true" className="font-rozha text-3xl text-white">Owner login</h1>
        <p className="mt-3 font-montserrat text-sm leading-relaxed text-white/80">
          Product and order dashboards — set{' '}
          <code className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-[13px] text-brand-dustyBlue">
            ADMIN_DASHBOARD_PASSWORD
          </code>{' '}
          in your environment.
        </p>
        <form onSubmit={submit} className="mt-8 space-y-4">
          <div>
            <label htmlFor="admin-pw" className="sr-only">
              Password
            </label>
            <input
              id="admin-pw"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 font-montserrat text-sm text-white placeholder-white/50 focus:border-brand-dustyBlue/60 focus:outline-none"
              placeholder="Password"
              required
            />
          </div>
          {error ? <p className="font-montserrat text-sm text-red-300">{error}</p> : null}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-brand-dustyBlue py-3 font-montserrat text-xs uppercase tracking-[0.2em] text-[#1a0008] transition-colors hover:bg-brand-stone disabled:opacity-50"
          >
            {loading ? 'Signing in…' : 'Sign in'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default function AdminLoginPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-[#1a0a10] text-white/50">Loading…</div>
      }
    >
      <AdminLoginForm />
    </Suspense>
  )
}
