import { noIndexMetadata } from '@/lib/seo'
import '../globals.css'

export const metadata = noIndexMetadata

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
