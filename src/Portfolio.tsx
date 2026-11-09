import { Info } from 'lucide-react'
import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import ProjectCard from '../components/ProjectCard'
import CtaSection from '../components/CtaSection'
import { Reveal } from '../components/ui'
import { projects } from '../lib/site'

export default function Portfolio() {
  return (
    <>
      <Seo
        title="Portfolio — Selected Demo Concepts | NOVA Creative Studio"
        description="Explore NOVA Creative Studio's fictional demo concepts across website design, branding, digital products, and social campaigns."
      />
      <PageHero
        eyebrow="Selected portfolio"
        title={
          <>
            Work with a point of view.{' '}
            <span className="block font-serif font-normal italic tracking-[-0.04em] text-cobalt">
              Built around a purpose.
            </span>
          </>
        }
        description="A selection of creative concepts across hospitality, wellness, fintech, and food & beverage—each shaped by a different audience, personality, and communication challenge."
        aside="Web · Identity · Product · Campaign"
      />

      <section className="section-pad">
        <div className="site-container">
          <Reveal>
            <div className="mb-12 flex max-w-3xl items-start gap-3 rounded-xl border border-cobalt/15 bg-blue-50 p-4 text-sm leading-6 text-ink/65 sm:p-5">
              <Info aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-cobalt" />
              <p>
                <strong className="font-bold text-ink">Portfolio note:</strong> every project below is a fictional demo concept created to demonstrate NOVA’s design approach. These are not claims of client work or commercial results.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-x-7 gap-y-16 md:grid-cols-2 lg:gap-y-20">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
                detailed
                eager={index < 2}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-white py-16 sm:py-20">
        <div className="site-container grid gap-8 md:grid-cols-3">
          {[
            ['Context first', 'Each concept begins with an audience and a communication challenge, not a visual trend.'],
            ['Systems over screens', 'Reusable rules and components keep the work coherent beyond a single polished frame.'],
            ['Details with intent', 'Motion, typography, and imagery support the idea rather than competing for attention.'],
          ].map(([title, description], index) => (
            <Reveal key={title} delay={index * 0.08}>
              <p className="font-display text-xs font-bold tracking-[0.16em] text-cobalt">
                0{index + 1}
              </p>
              <h2 className="mt-5 font-display text-2xl font-medium tracking-[-0.035em] text-ink">
                {title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-ink/65">{description}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaSection
        eyebrow="Your project could look like nothing else"
        title="Let’s create the work your audience will remember."
      />
    </>
  )
}
