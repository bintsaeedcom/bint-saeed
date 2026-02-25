import { redirect } from 'next/navigation'
import { COMING_SOON_PATH } from '@/lib/routes'

export default function TikTokRedirect() {
  redirect(`${COMING_SOON_PATH}?utm_source=tiktok&utm_medium=social&utm_campaign=bio`)
}
