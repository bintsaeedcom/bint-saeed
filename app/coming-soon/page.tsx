import { redirect } from 'next/navigation'
import ComingSoonPage from '@/app/page'

/**
 * Keep `/coming-soon` permanently available.
 * Later, when the full site is live, set `COMING_SOON_REDIRECT_TO_ROOT=true`
 * to redirect this route to `/` without removing the URL.
 */
export default function ComingSoonAliasPage() {
  if (process.env.COMING_SOON_REDIRECT_TO_ROOT === 'true') {
    redirect('/')
  }

  return <ComingSoonPage />
}
