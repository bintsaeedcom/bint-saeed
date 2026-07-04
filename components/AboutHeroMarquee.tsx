type Props = {
  text: string
}

/** Bottom ticker strip inside About section heroes (Our Story, Personalisation). */
export default function AboutHeroMarquee({ text }: Props) {
  return (
    <div className="absolute inset-x-0 bottom-0 z-20 overflow-hidden border-t border-white/10 bg-brand-darkRed/85 py-3">
      <div className="bs-about-hero-marquee flex w-max font-montserrat text-[11px] uppercase tracking-[0.2em] text-white/45">
        {Array.from({ length: 8 }).map((_, index) => (
          <span key={index} className="px-4">
            {text}
          </span>
        ))}
      </div>
    </div>
  )
}
