import { Suspense } from 'react'
import ShopClient from './ShopClient'

function ShopLoading() {
  return (
    <div
      className="min-h-screen bg-brand-pageCanvas"
      aria-busy="true"
      aria-label="Loading collection"
    />
  )
}

export default function ShopPage() {
  return (
    <Suspense fallback={<ShopLoading />}>
      <ShopClient />
    </Suspense>
  )
}
