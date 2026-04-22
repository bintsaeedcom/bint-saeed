import Image from 'next/image'
import LocaleLink from '@/components/LocaleLink'
import AboutTopicNav from '@/components/AboutTopicNav'

export default function PersonalisationPage() {
  const hiddenPocketImage = '/Personalisation%20Page/secret%20pocket.JPG'
  const personalisedLabelImage = '/Personalisation%20Page/label.JPG'

  return (
    <main className="relative min-h-screen overflow-hidden bg-[linear-gradient(165deg,#f7f5f0_0%,#eceae3_42%,#e3e0d6_100%)] pt-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_12%_10%,rgba(146,170,193,0.16)_0%,transparent_48%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_120%_90%_at_86%_82%,rgba(193,144,134,0.1)_0%,transparent_60%)]" />

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
          <div className="rounded-2xl border border-brand-stone/40 bg-white/70 p-5 md:p-6">
            <div
              className="relative aspect-[4/5] overflow-hidden rounded-xl"
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

        <section className="mt-16 grid gap-10 lg:grid-cols-2 lg:items-start">
          <div className="rounded-2xl border border-brand-stone/40 bg-white/70 p-5 md:p-6 lg:order-1">
            <div
              className="relative aspect-[4/5] overflow-hidden rounded-xl"
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
          <div className="space-y-6 font-montserrat text-sm leading-[1.95] tracking-wide text-brand-darkRed/85 md:text-base lg:order-2">
            <p>
              Because the message is hidden, it remains intimate. It is not created for display, but for closeness.
              That is what gives it meaning. It turns a piece into something that belongs to you in a deeper way, or
              into a gift that carries thought and intention long after it is received.
            </p>
          </div>
        </section>

        <section className="mt-18 rounded-2xl border border-brand-dustyBlue/25 bg-white/75 p-8 md:p-10">
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
            className="inline-flex items-center justify-center rounded-full border border-brand-darkRed/35 bg-white/70 px-10 py-3 font-montserrat text-xs uppercase tracking-[0.18em] text-brand-darkRed transition-colors hover:border-brand-dustyBlue hover:text-brand-dustyBlue"
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

        <p className="mt-20 text-center font-rozha text-3xl text-brand-darkRed md:text-4xl">
          A piece you wear. A message you carry.
        </p>
      </section>
    </main>
  )
}
