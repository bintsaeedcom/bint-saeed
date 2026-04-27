'use client'

import Image from 'next/image'
import LocaleLink from '@/components/LocaleLink'
import { accessories, ACCESSORY_IMAGE_ABAYA_CHARMS_HERO } from '@/data/accessories'
import { useLanguage } from '@/lib/i18n/LanguageContext'

export default function CharmsPage() {
  const { isRTL } = useLanguage()
  const charmProducts = accessories.filter((item) => item.category === 'abaya-charms')

  return (
    <main className={`min-h-screen bg-brand-pageCanvas ${isRTL ? 'rtl' : 'ltr'}`}>
      <section className="relative h-[50vh] overflow-hidden bg-brand-darkRed md:h-[60vh]">
        <Image
          src={ACCESSORY_IMAGE_ABAYA_CHARMS_HERO}
          alt={isRTL ? 'تعليقات العباءة' : 'Abaya charms'}
          fill
          className="object-cover opacity-40"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-darkRed via-brand-darkRed/50 to-transparent" />
        <div className="relative z-10 flex h-full flex-col justify-end pb-16 md:pb-20">
          <div className="container mx-auto px-6 lg:px-12">
            <span className="mb-4 block font-montserrat text-xs uppercase tracking-[0.4em] text-white/60">
              {isRTL ? 'مجموعة الإكسسوارات' : 'Accessories Collection'}
            </span>
            <h1 data-document-h1="true" className="mb-4 font-rozha text-5xl text-white md:text-7xl lg:text-8xl">
              {isRTL ? 'تعليقات العباءة' : 'Natural Stone Charms'}
            </h1>
            <p className="max-w-lg font-montserrat text-base tracking-wide text-white/70">
              {isRTL
                ? 'تعليقات بالأحجار الطبيعية للعباءة والحافة'
                : 'Stone charms designed for abaya draping and edges'}
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="mb-8 font-montserrat text-2xl text-brand-darkRed">Stone-led signatures</h2>
          <div className="grid grid-cols-2 gap-4 md:gap-8 lg:grid-cols-3 xl:grid-cols-4">
            {charmProducts.map((product) => (
              <LocaleLink key={product.id} href={`/accessories/${product.id}`} data-cursor-hover>
                <div className="group relative border-b-2 border-transparent pb-2 transition-colors duration-200 hover:border-[#722030]">
                  <div className="relative mb-4 aspect-[9/16] overflow-hidden bg-[#f5f5f5]">
                    <Image
                      src={product.images[0]}
                      alt={isRTL ? product.nameAr : product.name}
                      fill
                      className="pointer-events-none img-zoom object-cover object-top transition-all duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className={isRTL ? 'text-right' : ''}>
                    <h3 className="font-montserrat text-sm tracking-wide text-brand-darkRed transition-colors group-hover:text-brand-dustyBlue">
                      {isRTL ? product.nameAr : product.name}
                    </h3>
                    <p className="mt-1 font-montserrat text-sm tracking-wide text-[#722030]">
                      {product.price.toLocaleString()} AED
                    </p>
                  </div>
                </div>
              </LocaleLink>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

