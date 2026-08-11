'use client'

import type { ReactNode } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import AppPageWayfinding from '@/components/AppPageWayfinding'
import EditorialHeroCopy from '@/components/EditorialHeroCopy'
import type { BreadcrumbSegment } from '@/components/AppBreadcrumb'
import AboutTopicNav from '@/components/AboutTopicNav'
import {
  EDITORIAL_HERO_HEIGHT,
  EDITORIAL_PAGE_CONTAINER,
  editorialHeroContentShell,
  editorialHeroCopyBlock,
  editorialHeroCopyStack,
  editorialHeroCtaReservedSpace,
} from '@/lib/ui/editorialPageChrome'
import { ABOUT_EDITORIAL_HERO_GRADIENT, ABOUT_EDITORIAL_HERO_IMAGE_OPACITY } from '@/lib/about/aboutEditorialHeroChrome'

export type AboutSectionHeroProps = {
  rtl: boolean
  imageSrc: string
  imageAlt: string
  segments: BreadcrumbSegment[]
  title: string
  eyebrow?: string
  description?: string
  titleClassName?: string
  descriptionClassName?: string
  /** Extra classes on the Next/Image (e.g. mobile object-fit / position). */
  imageClassName?: string
  /** Override default editorial banner height classes. */
  heightClassName?: string
  imageOpacity?: number
  priority?: boolean
  showTopicNav?: boolean
  children?: ReactNode
}

export default function AboutSectionHero({
  rtl,
  imageSrc,
  imageAlt,
  segments,
  title,
  eyebrow,
  description,
  titleClassName,
  descriptionClassName,
  imageClassName = 'object-cover object-center',
  heightClassName = EDITORIAL_HERO_HEIGHT,
  imageOpacity = ABOUT_EDITORIAL_HERO_IMAGE_OPACITY,
  priority = false,
  showTopicNav = true,
  children,
}: AboutSectionHeroProps) {
  return (
    <>
      <header className={`relative ${heightClassName} overflow-hidden bg-brand-darkRed`}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className={imageClassName}
          style={{ opacity: imageOpacity / 100 }}
          priority={priority}
          sizes="100vw"
        />
        <div className={`absolute inset-0 ${ABOUT_EDITORIAL_HERO_GRADIENT}`} />
        <div className={editorialHeroContentShell}>
          <div className={editorialHeroCopyBlock}>
            <div className={`${EDITORIAL_PAGE_CONTAINER} ${editorialHeroCopyStack}`}>
            <motion.div
              initial={{ opacity: 0, x: rtl ? 20 : -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-3 w-full min-w-0"
            >
              <AppPageWayfinding rtl={rtl} variant="light" segments={segments} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65 }}
              className="w-full min-w-0"
            >
              <EditorialHeroCopy
                rtl={rtl}
                eyebrow={eyebrow}
                title={title}
                description={description}
                variant="banner"
                titleClassName={titleClassName}
                descriptionClassName={descriptionClassName}
              >
                {children ?? <div className={editorialHeroCtaReservedSpace} aria-hidden />}
              </EditorialHeroCopy>
            </motion.div>
          </div>
          </div>
        </div>
      </header>
      {showTopicNav ? <AboutTopicNav /> : null}
    </>
  )
}
