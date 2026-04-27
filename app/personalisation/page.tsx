import Image from 'next/image'
import LocaleLink from '@/components/LocaleLink'
import AboutTopicNav from '@/components/AboutTopicNav'

export default function PersonalisationPage() {
  const hiddenPocketImage = '/Personalisation%20Page/secret%20pocket.JPG'
  const personalisedLabelImage = '/Personalisation%20Page/label.JPG'

  return (
    <div className="relative min-h-screen overflow-x-clip bg-brand-pageCanvas pt-4 sm:pt-6 md:pt-8">
      <section className="relative container mx-auto px-6 pb-24 lg:px-16 lg:pb-32">
        <span className="mb-6 block font-montserrat text-[10px] uppercase tracking-[0.35em] text-brand-dustyBlue">
          Bint Saeed
        </span>
        <h1 data-document-h1="true" className="font-rozha text-4xl leading-[1.08] text-brand-darkRed md:text-5xl">
          Personalisation
        </h1>
        <p className="mt-4 max-w-2xl font-montserrat text-base tracking-wide text-brand-darkRed/70">
          A piece you wear. A message you carry.
        </p>

        <div className="mt-7">
          <AboutTopicNav />
        </div>

        <section className="mt-14 grid gap-10 lg:grid-cols-2 lg:items-start">
          <div className="space-y-6 font-montserrat text-sm leading-[1.95] tracking-wide text-brand-darkRed/85 md:text-base">
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
          <div className="rounded-sm border border-brand-stone/30 bg-white p-5 md:p-6">
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
                <h3 className="font-montserrat text-[10px] uppercase tracking-[0.22em] text-white/90">
                  Hidden pocket detail
                </h3>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16 grid gap-10 lg:grid-cols-2 lg:items-start">
          <div className="rounded-sm border border-brand-stone/30 bg-white p-5 md:p-6 lg:order-1">
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
                <h3 className="font-montserrat text-[10px] uppercase tracking-[0.22em] text-white/90">
                  Personalised labels
                </h3>
              </div>
            </div>
          </div>
          <div className="space-y-6 font-montserrat text-sm leading-[1.95] tracking-wide text-brand-darkRed/85 md:text-base lg:order-2">
            <p>
              Because the message is hidden, it remains intimate. It is not created for display, but for closeness.
              That is what gives it meaning. It turns a piece into something that belongs to you in a deeper way, or
              into a gift that carries thought and intention long after it is received.
            </p>
          </div>
        </section>

        <section className="mt-18 rounded-sm border border-brand-stone/30 bg-white p-8 md:p-10">
          <h2 className="font-rozha text-3xl text-brand-darkRed md:text-4xl">How to personalise your piece</h2>
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

        <section className="mt-16 text-center">
          <LocaleLink
            href="/shop?from=personalisation"
            className="inline-flex min-h-[48px] items-center justify-center rounded-sm border border-brand-darkRed/40 bg-white px-10 py-3 font-montserrat text-xs uppercase tracking-[0.18em] text-brand-darkRed transition-colors hover:border-brand-dustyBlue hover:text-brand-dustyBlue"
            data-cursor-hover
            data-analytics-event="click_collection_from_personalisation"
            data-analytics-section="personalisation-cta"
          >
            Explore the Collection
          </LocaleLink>
          <p className="mt-4 font-montserrat text-sm tracking-wide text-brand-darkRed/70">
            Select your piece and personalise it during checkout.
          </p>
          <ol className="mx-auto mt-7 max-w-3xl space-y-1 font-montserrat text-[11px] uppercase tracking-[0.16em] text-brand-clayRed/80 md:text-xs">
            <li>1. Read about personalisation</li>
            <li>2. Go to the collection</li>
            <li>3. Select an item</li>
            <li>4. Add the personal message during checkout</li>
          </ol>
        </section>

        <h2 className="mt-20 text-center font-rozha text-3xl text-brand-darkRed md:text-4xl">
          A piece you wear. A message you carry.
        </h2>
      </section>
    </div>
  )
}
