'use client'

import { Suspense, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

function AdminLoginForm() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const searchParams = useSearchParams()
  const next = searchParams.get('next') || '/admin/orders'

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
      router.push(next.startsWith('/admin') ? next : '/admin/orders')
      router.refresh()
    } catch {
      setError('Network error')
    }
    setLoading(false)
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#1a0a10] px-6">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-[#12080b] p-8 shadow-2xl">
        <h1 data-document-h1="true" className="font-rozha text-2xl text-brand-stone">Owner login</h1>
        <p className="mt-2 font-montserrat text-sm text-white/50">
          Product and order dashboards — set <code className="text-brand-dustyBlue/90">ADMIN_DASHBOARD_PASSWORD</code> in
          your environment.
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
              className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 font-montserrat text-sm text-white placeholder-white/30 focus:border-brand-dustyBlue/50 focus:outline-none"
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
