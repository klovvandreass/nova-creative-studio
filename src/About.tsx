import { motion, useReducedMotion } from 'framer-motion'
import { Compass, Eye } from 'lucide-react'
import Seo from './Seo'
import PageHero from './PageHero'
import CtaSection from './CtaSection'
import { Reveal, SectionHeading } from './ui'
import { processSteps } from './site'

const values = [
  {
    number: '01',
    title: 'Clarity before decoration',
    description:
      'We define what needs to be understood, felt, or done before deciding how it should look.',
  },
  {
    number: '02',
    title: 'Craft with a reason',
    description:
      'Details matter, but only when they make the experience more useful, distinctive, or memorable.',
  },
  {
    number: '03',
    title: 'Collaboration without theatre',
    description:
      'You see the work early, hear the thinking plainly, and always know what happens next.',
  },
  {
    number: '04',
    title: 'Built for real life',
    description:
      'We create systems your team can maintain, adapt, and confidently use long after handover.',
  },
]

export default function About() {
  const reduceMotion = useReducedMotion()

  return (
    <>
      <Seo
        title="About NOVA Creative Studio — Small Team, Senior Thinking"
        description="Meet NOVA Creative Studio: our mission, vision, values, and collaborative approach to building clear, useful digital experiences."
      />
      <PageHero
        eyebrow="About NOVA"
        title={
          <>
            Different disciplines.{' '}
            <span className="block font-serif font-normal italic tracking-[-0.04em] text-cobalt">
              One shared standard.
            </span>
          </>
        }
        description="NOVA is an independent digital creative studio built for close collaboration. We combine strategic thinking and careful execution to help brands communicate with more clarity and character."
        aside="Based in Jakarta · Working with teams everywhere"
      />

      <section className="pt-10 sm:pt-14 lg:pt-20">
        <div className="site-container">
          <motion.figure
            initial={reduceMotion ? false : { clipPath: 'inset(12% 6% 12% 6%)', opacity: 0.5 }}
            whileInView={{ clipPath: 'inset(0% 0% 0% 0%)', opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-[#e8e6e0] sm:aspect-[16/8]">
              <img
                src="/images/studio-team.webp"
                alt="Two creative professionals reviewing ideas together in a bright studio"
                width="940"
                height="627"
                loading="eager"
                className="h-full w-full object-cover object-center"
              />
            </div>
            <figcaption className="mt-4 flex flex-col gap-2 text-xs leading-5 text-ink/65 sm:flex-row sm:items-center sm:justify-between">
              <span>Good work starts with a shared understanding.</span>
              <span>Studio imagery is illustrative.</span>
            </figcaption>
          </motion.figure>
        </div>
      </section>

      <section className="section-pad">
        <div className="site-container grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <SectionHeading
              eyebrow="Why we exist"
              title="Make good businesses easier to choose."
              description="Strong organizations often have valuable ideas hidden behind unclear communication. We help close that gap with brands and digital experiences that feel as considered as the business behind them."
            />
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
            <Reveal delay={0.08} className="h-full">
              <article className="h-full rounded-[1.4rem] border border-line bg-white p-7 sm:p-8">
                <Compass aria-hidden="true" className="h-6 w-6 text-cobalt" strokeWidth={1.6} />
                <p className="mt-8 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-ink/65">
                  Our mission
                </p>
                <h3 className="mt-3 font-display text-2xl font-medium tracking-[-0.035em] text-ink">
                  Turn ambition into clear, useful creative work.
                </h3>
                <p className="mt-4 text-sm leading-6 text-ink/65">
                  We help growing teams express their value, connect with the right people, and move forward with a brand and website they are proud to share.
                </p>
              </article>
            </Reveal>
            <Reveal delay={0.16} className="h-full">
              <article className="h-full rounded-[1.4rem] bg-cobalt p-7 text-white sm:p-8">
                <Eye aria-hidden="true" className="h-6 w-6 text-white" strokeWidth={1.6} />
                <p className="mt-8 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-white/85">
                  Our vision
                </p>
                <h3 className="mt-3 font-display text-2xl font-medium tracking-[-0.035em]">
                  Raise the standard of everyday digital experiences.
                </h3>
                <p className="mt-4 text-sm leading-6 text-white/85">
                  We want thoughtful design to feel accessible, not exclusive—bringing rigorous creative partnership to organizations at meaningful moments of growth.
                </p>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-pad border-y border-line bg-[#eeece7]">
        <div className="site-container">
          <Reveal>
            <SectionHeading
              eyebrow="Our values"
              title="The principles behind the polish."
              description="A consistent way of working matters as much as a consistent visual identity. These four principles guide our recommendations, reviews, and relationships."
              className="max-w-4xl"
            />
          </Reveal>
          <div className="mt-12 grid border-t border-ink/15 sm:grid-cols-2">
            {values.map((value, index) => (
              <Reveal
                key={value.title}
                delay={(index % 2) * 0.08}
                className={`border-b border-ink/15 py-8 sm:px-8 sm:py-10 ${
                  index % 2 === 0 ? 'sm:border-r sm:pl-0' : ''
                }`}
              >
                <span className="font-display text-xs font-bold tracking-[0.16em] text-cobalt">
                  {value.number}
                </span>
                <h3 className="mt-8 max-w-sm font-display text-2xl font-medium tracking-[-0.04em] text-ink sm:text-3xl">
                  {value.title}
                </h3>
                <p className="mt-4 max-w-md text-sm leading-6 text-ink/65 sm:text-base sm:leading-7">
                  {value.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-ink text-white">
        <div className="site-container grid gap-14 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <SectionHeading
                eyebrow="Our approach"
                title="Structured enough to stay on track. Open enough to find the best answer."
                description="Every engagement is tailored, but the underlying rhythm stays simple: understand the problem, align on a direction, make the work, and leave you with something useful."
                light
              />
            </div>
          </Reveal>
          <div className="lg:col-span-7">
            {processSteps.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.06}>
                <article className="grid gap-4 border-t border-white/15 py-8 sm:grid-cols-12 sm:py-10">
                  <span className="font-display text-xs font-bold tracking-[0.16em] text-cobalt sm:col-span-2">
                    {step.number}
                  </span>
                  <div className="sm:col-span-10">
                    <h3 className="font-display text-2xl font-medium tracking-[-0.035em] text-white sm:text-3xl">
                      {step.title}
                    </h3>
                    <p className="mt-3 max-w-lg text-sm leading-6 text-white/60 sm:text-base sm:leading-7">
                      {step.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        eyebrow="A good fit starts with a conversation"
        title="Bring us the challenge. We’ll bring clarity to the next step."
      />
    </>
  )
}
