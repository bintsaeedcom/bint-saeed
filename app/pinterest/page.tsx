import { redirect } from 'next/navigation'
import { COMING_SOON_PATH } from '@/lib/routes'

export default function PinterestRedirect() {
  redirect(`${COMING_SOON_PATH}?utm_source=pinterest&utm_medium=social&utm_campaign=bio`)
}
