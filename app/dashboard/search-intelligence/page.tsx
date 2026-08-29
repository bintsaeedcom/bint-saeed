import { redirect } from 'next/navigation'

/** Legacy URL → canonical admin route */
export default function DashboardSearchIntelligenceRedirect() {
  redirect('/admin/search-intelligence')
}
