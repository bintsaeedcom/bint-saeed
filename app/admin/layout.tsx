'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { FiPackage, FiShoppingBag, FiBarChart2, FiLogOut, FiUsers, FiGift } from 'react-icons/fi'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const router = useRouter()
  const path = pathname ?? ''

  if (path === '/admin/login') {
    return <>{children}</>
  }

  const logout = async () => {
    await fetch('/api/admin/logout', { method: 'POST' })
    router.push('/admin/login')
    router.refresh()
  }

  const link = (href: string, label: string, icon: React.ReactNode) => {
    const active = path === href || path.startsWith(`${href}/`)
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
            {link('/admin/gift-cards', 'Gift cards', <FiGift className="h-4 w-4" />)}
            {link('/admin/customers', 'Customers', <FiUsers className="h-4 w-4" />)}
            {link('/admin/products', 'Catalog', <FiPackage className="h-4 w-4" />)}
            {link('/admin/dashboard', 'Analytics', <FiBarChart2 className="h-4 w-4" />)}
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
            <nav className="flex gap-1 overflow-x-auto px-2 pb-2 [-webkit-overflow-scrolling:touch]">
              {[
                { href: '/admin/orders', label: 'Orders' },
                { href: '/admin/gift-cards', label: 'Gift cards' },
                { href: '/admin/customers', label: 'Customers' },
                { href: '/admin/products', label: 'Catalog' },
                { href: '/admin/dashboard', label: 'Analytics' },
              ].map((item) => {
                const active = path === item.href || path.startsWith(`${item.href}/`)
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`shrink-0 rounded-lg px-3 py-1.5 font-montserrat text-xs transition-colors ${
 active ? 'bg-white/15 text-white' : 'text-white/70 hover:bg-white/10'
 }`}
                  >
                    {item.label}
                  </Link>
                )
              })}
            </nav>
          </header>
          <main className="admin-area flex-1 overflow-auto">{children}</main>
        </div>
      </div>
    </div>
  )
}
