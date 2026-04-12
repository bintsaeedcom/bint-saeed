import { Suspense } from 'react'
import ShopClient from './ShopClient'

function ShopLoading() {
  return (
    <div
      className="min-h-screen bg-stone-100"
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
