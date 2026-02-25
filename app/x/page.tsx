import { redirect } from 'next/navigation'
import { COMING_SOON_PATH } from '@/lib/routes'

export default function XRedirect() {
  redirect(`${COMING_SOON_PATH}?utm_source=x&utm_medium=social&utm_campaign=bio`)
}
