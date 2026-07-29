import type { Metadata } from 'next'
import {
  absoluteCodesPageImageUrl,
  CODES_HERO,
  CODES_IMAGE_FILES,
} from '@/lib/the-codes/codesPageContent'
import { sectionRobotsMetadata } from '@/lib/seo'
import { getServerLocale } from '@/lib/i18n/serverLocale'
import { getResolvedRoutePageMeta } from '@/lib/seo/routePageMeta'
import { brandDocumentTitle } from '@/lib/seo/brandDocumentTitle'
import { clipMetaDescription } from '@/lib/i18n/homePageCopy'

const KHOUS_HERITAGE_IMAGE = absoluteCodesPageImageUrl(CODES_IMAGE_FILES.khous)

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale()
  const meta = getResolvedRoutePageMeta(locale, '/the-codes')
  const title = brandDocumentTitle(meta.title)
  const description = clipMetaDescription(meta.description, 200)

  return {
    ...sectionRobotsMetadata,
    title: { absolute: title },
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: KHOUS_HERITAGE_IMAGE,
          alt: CODES_HERO.alt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [KHOUS_HERITAGE_IMAGE],
    },
  }
}

export default function TheCodesLayout({ children }: { children: React.ReactNode }) {
  return children
}
