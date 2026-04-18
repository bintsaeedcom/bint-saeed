import LocaleLink from '@/components/LocaleLink'
import { FiArrowRight } from 'react-icons/fi'

export default function GivingForwardPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[linear-gradient(165deg,#f7f5f0_0%,#eceae3_42%,#e3e0d6_100%)] pt-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_12%_10%,rgba(146,170,193,0.16)_0%,transparent_48%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_120%_90%_at_86%_82%,rgba(193,144,134,0.1)_0%,transparent_60%)]" />

      <section className="relative container mx-auto px-6 pb-20 lg:px-16 lg:pb-28">
        <span className="mb-6 block font-montserrat text-[10px] uppercase tracking-[0.35em] text-brand-dustyBlue">
          Bint Saeed
        </span>
        <h1 data-document-h1="true" className="font-rozha text-4xl leading-[1.08] text-brand-darkRed md:text-5xl">Giving Forward</h1>
        <p className="mt-5 max-w-2xl font-montserrat text-sm leading-[1.9] tracking-wide text-brand-darkRed/75">
          Giving is part of our house values. As reflected in our footer policy, 20 AED from each piece is dedicated
          to charity.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <LocaleLink
            href="/shop"
            className="inline-flex items-center gap-2 border border-brand-dustyBlue/65 bg-brand-dustyBlue px-7 py-3 font-montserrat text-xs uppercase tracking-[0.16em] text-[#1a0008] transition-colors hover:bg-brand-stone"
            data-cursor-hover
          >
            Shop Pieces
            <FiArrowRight className="h-4 w-4" />
          </LocaleLink>
          <LocaleLink
            href="/contact"
            className="inline-flex items-center gap-2 border border-brand-darkRed/35 bg-white/80 px-7 py-3 font-montserrat text-xs uppercase tracking-[0.16em] text-brand-darkRed transition-colors hover:border-brand-dustyBlue hover:text-brand-dustyBlue"
            data-cursor-hover
          >
            Contact Us
          </LocaleLink>
        </div>
      </section>
    </main>
  )
}
