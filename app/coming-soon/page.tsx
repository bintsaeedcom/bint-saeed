import { redirect } from 'next/navigation'
import ComingSoonPage from '@/app/page'

/**
 * Keep `/coming-soon` permanently available as a URL.
 * When `COMING_SOON_REDIRECT_TO_ROOT=true` (launch), send visitors to `/home`.
 * Canonical + robots: `app/coming-soon/layout.tsx`
 */
export default function ComingSoonAliasPage() {
  if (process.env.COMING_SOON_REDIRECT_TO_ROOT === 'true') {
    redirect('/home')
  }

  return <ComingSoonPage />
}
