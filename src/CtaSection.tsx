import { ButtonLink, Reveal } from './ui'
import { NovaMark } from './Logo'

export default function CtaSection({
  eyebrow = 'Have a project in mind?',
  title = 'Let’s make your next idea impossible to ignore.',
}: {
  eyebrow?: string
  title?: string
}) {
  return (
    <section className="bg-paper px-4 pb-4 pt-16 sm:px-6 sm:pb-6 sm:pt-24 lg:pt-28">
      <Reveal>
        <div className="relative mx-auto max-w-[1440px] overflow-hidden rounded-[1.75rem] bg-ink px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
          <div
            className="absolute -right-16 -top-24 text-white/[0.035] sm:-right-8 sm:-top-16"
            aria-hidden="true"
          >
            <NovaMark className="h-[340px] w-[340px] sm:h-[480px] sm:w-[480px]" />
          </div>
          <div className="relative grid items-end gap-12 lg:grid-cols-12">
            <div className="lg:col-span-9">
              <p className="mb-6 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-white/55">
                {eyebrow}
              </p>
              <h2 className="max-w-5xl text-balance font-display text-[clamp(2.6rem,5.5vw,5.6rem)] font-medium leading-[1.01] tracking-[-0.055em] text-white">
                {title}
              </h2>
            </div>
            <div className="lg:col-span-3 lg:flex lg:justify-end">
              <ButtonLink to="/contact" variant="light" className="w-full sm:w-auto">
                Start a conversation
              </ButtonLink>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
