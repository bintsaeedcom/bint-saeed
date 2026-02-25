import { redirect } from 'next/navigation'
import { COMING_SOON_PATH } from '@/lib/routes'

export default function InstagramRedirect() {
  redirect(`${COMING_SOON_PATH}?utm_source=instagram&utm_medium=social&utm_campaign=bio`)
}
