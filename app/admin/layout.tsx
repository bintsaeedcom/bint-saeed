'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { FiPackage, FiShoppingBag, FiBarChart2, FiLogOut, FiUsers, FiExternalLink } from 'react-icons/fi'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const router = useRouter()

  if (pathname === '/admin/login') {
    return <>{children}</>
  }

  const logout = async () => {
    await fetch('/api/admin/logout', { method: 'POST' })
    router.push('/admin/login')
    router.refresh()
  }

  const link = (href: string, label: string, icon: React.ReactNode) => {
    const active = pathname === href || pathname.startsWith(`${href}/`)
    return (
      <Link
        href={href}
        className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-montserrat tracking-wide transition-colors ${
          active ? 'bg-white/15 text-white' : 'text-white/70 hover:bg-white/10 hover:text-white'
        }`}
      >
        {icon}
        {label}
      </Link>
    )
  }

  return (
    <div className="min-h-screen bg-[#1a0a10] text-white">
      <div className="flex min-h-screen">
        <aside className="hidden w-56 shrink-0 flex-col border-r border-white/10 bg-[#12080b] md:flex">
          <div className="border-b border-white/10 p-6">
            <Link href="/" className="block rounded-md focus:outline-none focus-visible:ring-1 focus-visible:ring-white/25">
              <p className="font-rozha text-xl text-brand-stone">Bint Saeed</p>
            </Link>
            <p className="mt-1 font-montserrat text-[10px] uppercase tracking-[0.2em] text-white/40">Owner</p>
          </div>
          <nav className="flex flex-1 flex-col gap-1 p-4">
            {link('/admin/orders', 'Orders', <FiShoppingBag className="h-4 w-4" />)}
            {link('/admin/customers', 'Customers', <FiUsers className="h-4 w-4" />)}
            {link('/admin/products', 'Catalog', <FiPackage className="h-4 w-4" />)}
            {link('/admin/dashboard', 'Analytics', <FiBarChart2 className="h-4 w-4" />)}
            <Link
              href="/home-experimental"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex items-center gap-2 rounded-lg border border-brand-dustyBlue/35 bg-brand-dustyBlue/10 px-3 py-2 text-sm font-montserrat tracking-wide text-brand-dustyBlue transition-colors hover:bg-brand-dustyBlue/20 hover:text-white"
            >
              <FiExternalLink className="h-4 w-4" />
              Experimental Home
            </Link>
          </nav>
          <div className="border-t border-white/10 p-4">
            <button
              type="button"
              onClick={logout}
              className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm font-montserrat text-white/60 transition-colors hover:bg-white/10 hover:text-white"
            >
              <FiLogOut className="h-4 w-4" />
              Log out
            </button>
          </div>
        </aside>

        <div className="flex min-w-0 flex-1 flex-col">
          <header className="border-b border-white/10 bg-[#12080b]/80 backdrop-blur md:hidden">
            <div className="flex items-center justify-between px-4 py-3">
              <p className="font-rozha text-lg">Admin</p>
              <button type="button" onClick={logout} className="font-montserrat text-xs uppercase tracking-wider text-white/60">
                Log out
              </button>
            </div>
            <nav className="flex gap-1 overflow-x-auto px-2 pb-2">
              <Link
                href="/admin/orders"
                className="shrink-0 rounded-lg px-3 py-1.5 font-montserrat text-xs text-white/70 hover:bg-white/10"
              >
                Orders
              </Link>
              <Link
                href="/admin/customers"
                className="shrink-0 rounded-lg px-3 py-1.5 font-montserrat text-xs text-white/70 hover:bg-white/10"
              >
                Customers
              </Link>
              <Link
                href="/admin/products"
                className="shrink-0 rounded-lg px-3 py-1.5 font-montserrat text-xs text-white/70 hover:bg-white/10"
              >
                Catalog
              </Link>
              <Link
                href="/admin/dashboard"
                className="shrink-0 rounded-lg px-3 py-1.5 font-montserrat text-xs text-white/70 hover:bg-white/10"
              >
                Analytics
              </Link>
              <Link
                href="/home-experimental"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 rounded-lg border border-brand-dustyBlue/35 bg-brand-dustyBlue/10 px-3 py-1.5 font-montserrat text-xs text-brand-dustyBlue hover:bg-brand-dustyBlue/20 hover:text-white"
              >
                Experimental Home
              </Link>
            </nav>
          </header>
          <main className="flex-1 overflow-auto">{children}</main>
        </div>
      </div>
    </div>
  )
}
