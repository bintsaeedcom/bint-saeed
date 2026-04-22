import LocaleLink from '@/components/LocaleLink'
import { FiArrowRight } from 'react-icons/fi'

export default function CareersPage() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-brand-pageCanvas pt-4 sm:pt-6 md:pt-8">
      <section className="relative container mx-auto px-6 pb-20 lg:px-16 lg:pb-28">
        <span className="mb-6 block font-montserrat text-[10px] uppercase tracking-[0.35em] text-brand-dustyBlue">
          Bint Saeed
        </span>
        <h1 data-document-h1="true" className="font-rozha text-4xl leading-[1.08] text-brand-darkRed md:text-5xl">Careers</h1>
        <p className="mt-5 max-w-2xl font-montserrat text-sm leading-[1.9] tracking-wide text-brand-darkRed/75">
          We are building with care across design, operations, and client experience. If you are interested in future
          opportunities, please reach out to our team and include your role focus and portfolio.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <LocaleLink
            href="/contact"
            className="inline-flex items-center gap-2 border border-brand-dustyBlue/65 bg-brand-dustyBlue px-7 py-3 font-montserrat text-xs uppercase tracking-[0.16em] text-[#1a0008] transition-colors hover:bg-brand-stone"
            data-cursor-hover
          >
            Contact Team
            <FiArrowRight className="h-4 w-4" />
          </LocaleLink>
          <LocaleLink
            href="/about"
            className="inline-flex items-center gap-2 border border-brand-darkRed/35 bg-white/80 px-7 py-3 font-montserrat text-xs uppercase tracking-[0.16em] text-brand-darkRed transition-colors hover:border-brand-dustyBlue hover:text-brand-dustyBlue"
            data-cursor-hover
          >
            About The House
          </LocaleLink>
        </div>
      </section>
    </div>
  )
}
