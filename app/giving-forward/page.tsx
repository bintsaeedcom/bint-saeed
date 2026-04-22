import LocaleLink from '@/components/LocaleLink'
import AboutTopicNav from '@/components/AboutTopicNav'
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
        <div className="mt-6">
          <AboutTopicNav />
        </div>
        <div className="mt-5 max-w-4xl space-y-6 font-montserrat text-sm leading-[1.9] tracking-wide text-brand-darkRed/75">
          <p>
            Bint Saeed emerged from a place within the heart where the desire exists to create something that leaves a
            mark beyond what is visible, something that continues in meaning, in impact, and in the lives it reaches.
          </p>
          <p>
            With every Bint Saeed piece, a gesture of giving continues, extending beyond what is created. Not every
            daughter or son grows up with a sense of belonging, support, or continuity. Some are left to find their
            way without the foundations others are given. For this reason, 20 AED from each piece is dedicated,
            inshallah, to charitable initiatives under the Mother of the Nation Endowment for Orphans, under the
            patronage of His Highness Sheikh Mohamed bin Zayed Al Nahyan, through the Endowments and Minors&apos; Funds
            Authority, as well as to initiatives by the Emirates Red Crescent. In this way, what is carried forward is
            not only a story of origin, but a contribution that continues, reaching beyond the garment into the lives
            it is able to touch.
          </p>
        </div>

        <div className="mt-14 max-w-4xl">
          <h2 className="font-rozha text-3xl leading-tight text-brand-darkRed md:text-4xl">What Is Carried Forward</h2>
          <div className="mt-8 space-y-6 font-montserrat text-sm leading-[1.9] tracking-wide text-brand-darkRed/80">
            <div>
              <h3 className="font-montserrat text-[11px] uppercase tracking-[0.2em] text-brand-clayRed">Responsibility</h3>
              <p>We create with purpose, and only in what is truly desired.</p>
            </div>
            <div>
              <h3 className="font-montserrat text-[11px] uppercase tracking-[0.2em] text-brand-clayRed">Continuity</h3>
              <p>Where you come from remains present in how you move through the world, shaping your confidence.</p>
            </div>
            <div>
              <h3 className="font-montserrat text-[11px] uppercase tracking-[0.2em] text-brand-clayRed">Giving Forward</h3>
              <p>What is received is never held back. It is carried into the lives of others.</p>
            </div>
            <div>
              <h3 className="font-montserrat text-[11px] uppercase tracking-[0.2em] text-brand-clayRed">Belonging</h3>
              <p>To be a daughter is to belong, to a story, to a place, to something greater than yourself.</p>
            </div>
            <div>
              <h3 className="font-montserrat text-[11px] uppercase tracking-[0.2em] text-brand-clayRed">Dignity</h3>
              <p>
                You carry yourself with self-awareness and respect, for who you are and where you come from, allowing
                it to guide your present decisions.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <LocaleLink
            href="/shop?from=giving-forward"
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
