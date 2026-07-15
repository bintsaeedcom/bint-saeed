import { redirect } from 'next/navigation'
import ComingSoonPage from '@/app/page'
import { COMING_SOON_ONLY } from '@/lib/comingSoon'

/**
 * Legacy `/coming-soon` URL.
 * Public storefront: always send humans + crawlers to `/home` (www.bintsaeed.com primary).
 * Coming-soon-only mode: keep the tease shell for prelaunch.
 */
export default function ComingSoonAliasPage() {
  const forceRedirect =
    process.env.COMING_SOON_REDIRECT_TO_ROOT === 'true' || !COMING_SOON_ONLY

  if (forceRedirect) {
    redirect('/home')
  }

  return <ComingSoonPage />
}
