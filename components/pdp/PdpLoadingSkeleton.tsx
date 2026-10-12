/** Route-level loading shell for product pages — shown instantly on tap while the product route streams in. */
export default function PdpLoadingSkeleton() {
  return (
    <div
      className="min-h-screen overflow-x-clip bg-brand-pageCanvas"
      aria-busy="true"
      aria-live="polite"
    >
      <div className="h-11 border-b border-brand-stone/20" aria-hidden />
      <div className="mx-auto w-full max-w-[1400px] px-4 py-4 sm:px-8 sm:py-8 lg:py-12">
        <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-12" aria-hidden>
          <div className="w-full lg:max-w-[42rem]">
            <div className="shimmer aspect-[3/4] w-full rounded-sm opacity-60" />
          </div>
          <div className="space-y-4 bg-white px-3.5 py-5 lg:px-4">
            <div className="shimmer h-8 w-2/3 rounded-sm" />
            <div className="shimmer h-5 w-1/4 rounded-sm" />
            <div className="shimmer mt-6 h-4 w-full rounded-sm" />
            <div className="shimmer h-4 w-5/6 rounded-sm" />
            <div className="shimmer mt-6 h-12 w-full rounded-sm" />
          </div>
        </div>
      </div>
    </div>
  )
}
