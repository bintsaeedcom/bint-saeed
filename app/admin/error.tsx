'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { FiRefreshCw, FiShoppingBag, FiBarChart2 } from 'react-icons/fi'

export default function AdminError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Admin area error:', error)
  }, [error])

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#1a0a10] px-6 text-white">
      <div className="w-full max-w-md rounded-2xl border border-white/15 bg-[#1c1015] p-8 text-center shadow-2xl">
        <p className="font-montserrat text-[10px] uppercase tracking-[0.28em] text-white/45">Owner</p>
        <h1 data-document-h1="true" className="mt-2 font-rozha text-2xl text-brand-stone">
          Analytics could not load
        </h1>
        <p className="mt-3 font-montserrat text-sm leading-relaxed text-white/70">
          Something went wrong while opening this admin page. Try again, or use Orders while we recover.
        </p>
        {error.digest ? (
          <p className="mt-3 font-mono text-[10px] text-white/35">Ref: {error.digest}</p>
        ) : null}
        <div className="mt-8 flex flex-col gap-2 sm:flex-row sm:justify-center">
          <button
            type="button"
            onClick={() => reset()}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-dustyBlue px-4 py-2.5 font-montserrat text-xs uppercase tracking-[0.18em] text-[#1a0008] hover:bg-brand-stone"
          >
            <FiRefreshCw className="h-4 w-4" />
            Try again
          </button>
          <Link
            href="/admin/orders"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 px-4 py-2.5 font-montserrat text-xs uppercase tracking-[0.18em] text-white/80 hover:bg-white/10"
          >
            <FiShoppingBag className="h-4 w-4" />
            Orders
          </Link>
          <Link
            href="/admin/dashboard"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 px-4 py-2.5 font-montserrat text-xs uppercase tracking-[0.18em] text-white/80 hover:bg-white/10"
          >
            <FiBarChart2 className="h-4 w-4" />
            Analytics
          </Link>
        </div>
      </div>
    </div>
  )
}
