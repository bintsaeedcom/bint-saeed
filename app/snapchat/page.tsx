import { redirect } from 'next/navigation'
import { COMING_SOON_PATH } from '@/lib/routes'

export default function SnapchatRedirect() {
  redirect(`${COMING_SOON_PATH}?utm_source=snapchat&utm_medium=social&utm_campaign=bio`)
}
