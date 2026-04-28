import Image from 'next/image'
import LocaleLink from '@/components/LocaleLink'
import AboutTopicNav from '@/components/AboutTopicNav'
import { FiArrowLeft } from 'react-icons/fi'

export default function PersonalisationPage() {
  const hiddenPocketImage = '/Personalisation%20Page/secret%20pocket.JPG'
  const personalisedLabelImage = '/Personalisation%20Page/label.JPG'

  return (
    <div className="relative min-h-screen overflow-x-clip bg-brand-pageCanvas pt-24 md:pt-28">
      <section className="relative container mx-auto max-w-[1360px] px-6 pb-24 lg:px-16 lg:pb-32">
        <LocaleLink
          href="/home"
          className="mb-8 inline-flex items-center gap-2 font-montserrat text-xs uppercase tracking-[0.15em] text-brand-clayRed/75 transition-colors hover:text-brand-darkRed"
          data-cursor-hover
        >
          <FiArrowLeft className="h-4 w-4" aria-hidden />
          Back to Home
        </LocaleLink>
        <span className="mb-4 block font-montserrat text-[10px] uppercase tracking-[0.28em] text-brand-dustyBlue sm:tracking-[0.34em]">
          Bint Saeed
        </span>
        <h1 data-document-h1="true" className="max-w-4xl font-rozha text-[clamp(2.75rem,8vw,5.75rem)] uppercase leading-[0.98] tracking-[0.01em] text-brand-darkRed">
          PERSONALISATION
        </h1>
        <p className="mt-6 max-w-xl font-montserrat text-sm leading-relaxed tracking-wide text-brand-darkRed/70 md:text-base">
          A piece you wear. A message you carry.
        </p>

        <div className="mt-7">
          <AboutTopicNav />
        </div>

        <section className="mt-14 grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(18rem,0.68fr)] lg:items-center lg:gap-12">
          <div className="space-y-6 border-y border-brand-stone/25 bg-white/60 p-6 font-montserrat text-sm leading-[1.95] tracking-wide text-brand-darkRed/85 md:p-8 md:text-base">
            <p>
              Some things are not meant to be shown to the world, but kept close to the person who wears them. At Bint
              Saeed, each piece includes a discreet space within it, covered inside a small pocket, where something
              personal can be placed and carried privately. It may be a name, a meaningful date, or a few words
              written for yourself or for someone you love.
            </p>
            <p>
              This service allows a garment to become more than something you wear. It becomes something you hold onto.
              A piece may carry your own name, the name of the person gifting it to you, or a message that marks a
              moment, a bond, or something you never want to forget.
            </p>
          </div>
          <div className="rounded-sm border border-brand-stone/30 bg-white p-3 md:p-4">
            <div
              className="relative aspect-[4/5] overflow-hidden rounded-sm"
              data-analytics-event="click_personalisation_hidden_pocket_image"
              data-analytics-section="personalisation-story-image"
            >
              <Image
                src={hiddenPocketImage}
                alt="Hidden pocket detail"
                fill
                sizes="(min-width: 1024px) 40vw, 92vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1a0f14]/55 to-transparent p-4">
                <p className="font-montserrat text-[10px] uppercase tracking-[0.22em] text-white/90">
                  Hidden pocket detail
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-10 grid gap-8 lg:grid-cols-[minmax(18rem,0.68fr)_minmax(0,0.9fr)] lg:items-center lg:gap-12">
          <div className="rounded-sm border border-brand-stone/30 bg-white p-3 md:p-4 lg:order-1">
            <div
              className="relative aspect-[4/5] overflow-hidden rounded-sm"
              data-analytics-event="click_personalisation_label_examples"
              data-analytics-section="personalisation-meaning-image"
            >
              <Image
                src={personalisedLabelImage}
                alt="Personalised labels"
                fill
                sizes="(min-width: 1024px) 40vw, 92vw"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1a0f14]/55 to-transparent p-4">
                <p className="font-montserrat text-[10px] uppercase tracking-[0.22em] text-white/90">
                  Personalised labels
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-6 border-y border-brand-stone/25 bg-white/60 p-6 font-montserrat text-sm leading-[1.95] tracking-wide text-brand-darkRed/85 md:p-8 md:text-base lg:order-2">
            <p>
              Because the message is hidden, it remains intimate. It is not created for display, but for closeness.
              That is what gives it meaning. It turns a piece into something that belongs to you in a deeper way, or
              into a gift that carries thought and intention long after it is received.
            </p>
          </div>
        </section>

        <section className="mt-16 rounded-sm border border-brand-stone/30 bg-white p-6 md:p-10 lg:mx-auto lg:max-w-5xl">
          <h2 className="font-rozha text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] text-brand-darkRed">How to personalise your piece</h2>
          <ol className="mt-6 space-y-2 font-montserrat text-sm leading-[1.9] tracking-wide text-brand-darkRed/85 md:text-base">
            <li>1. Explore the collection</li>
            <li>2. Select your piece</li>
            <li>3. Add your personal message at checkout</li>
          </ol>
          <p className="mt-6 max-w-3xl font-montserrat text-sm leading-[1.9] tracking-wide text-brand-darkRed/75 md:text-base">
            Personalisation is available on all Bint Saeed pieces. During checkout, you can add a name, a date, or a
            short private message to be placed within the garment.
          </p>
        </section>

        <section className="mt-16 border-y border-brand-stone/25 py-12 text-center">
          <LocaleLink
            href="/shop?from=personalisation"
            className="inline-flex min-h-[48px] w-full items-center justify-center rounded-[4px] border border-brand-darkRed/40 bg-white px-6 py-3 text-center font-montserrat text-xs uppercase tracking-[0.14em] text-brand-darkRed transition-colors hover:border-brand-dustyBlue hover:text-brand-dustyBlue sm:w-auto sm:px-10 sm:tracking-[0.18em]"
            data-cursor-hover
            data-analytics-event="click_collection_from_personalisation"
            data-analytics-section="personalisation-cta"
          >
            Explore the Collection
          </LocaleLink>
          <p className="mt-4 font-montserrat text-sm tracking-wide text-brand-darkRed/70">
            Select your piece and personalise it during checkout.
          </p>
          <ol className="mx-auto mt-7 max-w-3xl space-y-2 font-montserrat text-[11px] uppercase leading-relaxed tracking-[0.1em] text-brand-clayRed/80 md:text-xs md:tracking-[0.16em]">
            <li>1. Read about personalisation</li>
            <li>2. Go to the collection</li>
            <li>3. Select an item</li>
            <li>4. Add the personal message during checkout</li>
          </ol>
        </section>

        <h2 className="mt-20 text-center font-rozha text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] text-brand-darkRed">
          A piece you wear. A message you carry.
        </h2>
      </section>
    </div>
  )
}
