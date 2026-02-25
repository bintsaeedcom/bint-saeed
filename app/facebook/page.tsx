import { redirect } from 'next/navigation'
import { COMING_SOON_PATH } from '@/lib/routes'

export default function FacebookRedirect() {
  redirect(`${COMING_SOON_PATH}?utm_source=facebook&utm_medium=social&utm_campaign=bio`)
}
