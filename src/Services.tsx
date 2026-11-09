import { Check, MoveDown } from 'lucide-react'
import Seo from './Seo'
import PageHero from './PageHero'
import CtaSection from './CtaSection'
import { Reveal } from './ui'
import { services } from './site'

export default function Services() {
  return (
    <>
      <Seo
        title="Services — Web Design, Branding & Digital Creative | NOVA"
        description="Explore NOVA's website design and development, branding and visual identity, social media design, and digital creative services."
      />
      <PageHero
        eyebrow="Services"
        title={
          <>
            One studio.{' '}
            <span className="block font-serif font-normal italic tracking-[-0.04em] text-cobalt">
              Every touchpoint.
            </span>
          </>
        }
        description="From the way your brand looks to the way your website works, we connect every detail into one clear, consistent experience. Start with one service or build a joined-up engagement."
        aside="Focused scopes · Clear deliverables · Senior-led work"
      />

      <nav className="border-b border-line bg-white" aria-label="Jump to a service">
        <div className="site-container py-5">
          <div className="mb-3 flex items-center gap-2 text-[0.62rem] font-bold uppercase tracking-[0.16em] text-ink/65">
            <MoveDown aria-hidden="true" className="h-3.5 w-3.5 text-cobalt" />
            Jump to a service
          </div>
          <div className="flex flex-wrap gap-2">
            {services.map((service) => (
              <a
                key={service.id}
                href={`#${service.id}`}
                className="rounded-full border border-line px-3.5 py-2 text-xs font-semibold text-ink/65 transition-colors hover:border-cobalt hover:bg-blue-50 hover:text-cobalt"
              >
                {service.shortTitle}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <section aria-label="Creative services">
        <div className="site-container">
          {services.map((service, index) => {
            const Icon = service.icon
            const reversed = index % 2 === 1

            return (
              <article
                id={service.id}
                key={service.id}
                className="scroll-mt-28 border-b border-line py-16 last:border-b-0 sm:py-20 lg:py-24"
              >
                <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
                  <Reveal
                    className={`lg:col-span-6 ${reversed ? 'lg:order-2' : ''}`}
                    y={24}
                  >
                    <div className="relative overflow-hidden rounded-[1.5rem] bg-[#e8e6e0]">
                      <div className="aspect-[4/3]">
                        <img
                          src={service.image}
                          alt={service.imageAlt}
                          width="1536"
                          height="1024"
                          loading={index === 0 ? 'eager' : 'lazy'}
                          decoding="async"
                          className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.025]"
                        />
                      </div>
                      <span className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1.5 text-[0.6rem] font-bold uppercase tracking-[0.15em] text-ink shadow-sm backdrop-blur-sm">
                        Demo concept
                      </span>
                    </div>
                  </Reveal>

                  <div className={`lg:col-span-6 ${reversed ? 'lg:order-1' : ''}`}>
                    <Reveal delay={0.08}>
                      <div className="flex items-center justify-between">
                        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-cobalt">
                          <Icon aria-hidden="true" className="h-5 w-5" strokeWidth={1.7} />
                        </span>
                        <span className="font-display text-sm font-bold tracking-[0.18em] text-ink/65">
                          {service.number} / 04
                        </span>
                      </div>
                      <h2 className="mt-8 max-w-xl text-balance font-display text-[clamp(2.2rem,4vw,4rem)] font-medium leading-[1.05] tracking-[-0.055em] text-ink">
                        {service.title}
                      </h2>
                      <p className="mt-6 max-w-xl text-pretty text-base leading-7 text-ink/65 sm:text-lg sm:leading-8">
                        {service.description}
                      </p>
                    </Reveal>
                    <Reveal delay={0.16}>
                      <div className="mt-8 border-t border-line pt-6">
                        <h3 className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-ink/65">
                          Typical deliverables
                        </h3>
                        <ul className="mt-5 grid gap-x-5 gap-y-4 min-[480px]:grid-cols-2">
                          {service.deliverables.map((deliverable) => (
                            <li
                              key={deliverable}
                              className="flex items-center gap-3 text-sm font-semibold text-ink/70"
                            >
                              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-50 text-cobalt">
                                <Check aria-hidden="true" className="h-3 w-3" strokeWidth={2.5} />
                              </span>
                              {deliverable}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Reveal>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      <section className="border-y border-line bg-[#eeece7] py-16 sm:py-20">
        <div className="site-container grid gap-8 lg:grid-cols-12 lg:items-center">
          <Reveal className="lg:col-span-7">
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-cobalt">
              Not sure where to start?
            </p>
            <h2 className="mt-4 max-w-3xl text-balance font-display text-3xl font-medium leading-tight tracking-[-0.045em] text-ink sm:text-4xl">
              Bring us the business goal, not a perfect brief. We’ll help shape the right scope.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5">
            <p className="max-w-md text-sm leading-6 text-ink/65 sm:text-base sm:leading-7 lg:ml-auto">
              A short conversation is often enough to identify whether you need a focused design sprint, a full website, or a broader creative system.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaSection
        eyebrow="Build the right thing, in the right order"
        title="Your next chapter deserves more than a quick cosmetic fix."
      />
    </>
  )
}
