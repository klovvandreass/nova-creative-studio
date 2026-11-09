import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight, Check } from 'lucide-react'
import Seo from '../components/Seo'
import CtaSection from '../components/CtaSection'
import { Reveal } from '../components/ui'
import { projects, whatsappUrl } from '../lib/site'
import { buttonStyles } from '../lib/styles'

const details: Record<string, { challenge: string; direction: string; highlights: string[]; outcome: string }> = {
  'aster-house': {
    challenge: 'A hospitality brand needs to communicate atmosphere and make the path from discovery to enquiry feel effortless.',
    direction: 'An editorial visual system pairs generous imagery, restrained typography, and clear navigation to let the destination lead.',
    highlights: ['Immersive hospitality art direction', 'Responsive page hierarchy', 'Clear room-discovery calls to action'],
    outcome: 'A fictional concept demonstrating how a focused website can make a hospitality experience feel considered before a guest even arrives.',
  },
  'nura-botanics': {
    challenge: 'A botanical skincare concept needs to feel contemporary and trustworthy without losing its natural point of view.',
    direction: 'Warm neutrals, botanical cues, and precise packaging layouts create a flexible identity that can extend across touchpoints.',
    highlights: ['Distinctive visual identity direction', 'Packaging and typography system', 'Consistent campaign-ready art direction'],
    outcome: 'A fictional identity concept showing how a coherent visual language can make a product family feel recognizable and premium.',
  },
  'orbit-finance': {
    challenge: 'Financial information can feel dense. The interface needs to make key information easier to scan and understand.',
    direction: 'A modular dashboard concept uses hierarchy, contrast, and compact data visualizations to organize everyday money insights.',
    highlights: ['Dashboard information hierarchy', 'Responsive product UI concept', 'Reusable interface components'],
    outcome: 'A fictional product concept focused on clarity, helping complex information feel more approachable at a glance.',
  },
  'common-ground': {
    challenge: 'A neighborhood coffee brand needs a campaign system that feels recognizable across social formats and launch materials.',
    direction: 'Bold crops, warm product imagery, and a repeatable geometric rhythm create a flexible campaign toolkit.',
    highlights: ['Social campaign art direction', 'Adaptable feed and story layouts', 'Consistent packaging and launch visuals'],
    outcome: 'A fictional campaign concept demonstrating how a small set of visual rules can create a recognizable brand presence.',
  },
}

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((item) => item.slug === slug)
  if (!project) {
    return <section className="site-container section-pad"><h1 className="font-display text-4xl">Project not found</h1><Link className="mt-6 inline-block text-cobalt underline" to="/portfolio">Back to portfolio</Link></section>
  }
  const detail = details[project.slug]
  return (
    <>
      <Seo title={`${project.title} — Demo Case Study | NOVA Creative Studio`} description={project.description} />
      <section className="section-pad pb-10">
        <div className="site-container">
          <Reveal>
            <Link to="/portfolio" className="inline-flex items-center gap-2 text-sm font-semibold text-ink/65 hover:text-cobalt"><ArrowLeft className="h-4 w-4" /> Back to selected work</Link>
            <div className="mt-12 flex flex-wrap items-center gap-3 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-cobalt"><span>Demo case study</span><span className="h-1 w-1 rounded-full bg-cobalt" /><span>{project.category}</span><span className="h-1 w-1 rounded-full bg-cobalt" /><span>{project.year}</span></div>
            <h1 className="mt-5 max-w-5xl font-display text-[clamp(3rem,7vw,6.8rem)] font-medium leading-[0.98] tracking-[-0.065em] text-ink">{project.title}<span className="text-cobalt">.</span></h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/65">{project.description}</p>
          </Reveal>
          <Reveal delay={0.1} className="mt-12">
            <div className="overflow-hidden rounded-[1.6rem] bg-[#e8e6e0]"><img src={project.image} alt={project.imageAlt} className="h-auto w-full object-cover" /></div>
          </Reveal>
          <div className="mt-16 grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              {[['The challenge', detail.challenge], ['Creative direction', detail.direction], ['Concept outcome', detail.outcome]].map(([heading, body], index) => (
                <Reveal key={heading} delay={index * 0.06} className="border-b border-line py-7 first:pt-0">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-cobalt">0{index + 1} / {heading}</p>
                  <p className="mt-4 max-w-2xl font-display text-2xl leading-snug tracking-[-0.03em] text-ink">{body}</p>
                </Reveal>
              ))}
            </div>
            <aside className="h-fit rounded-2xl border border-line bg-white p-6 lg:col-span-5 lg:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-cobalt">Concept highlights</p>
              <ul className="mt-6 space-y-4">{detail.highlights.map((item) => <li key={item} className="flex gap-3 text-sm leading-6 text-ink/70"><Check className="mt-1 h-4 w-4 shrink-0 text-cobalt" />{item}</li>)}</ul>
              <div className="mt-8 border-t border-line pt-6"><p className="text-xs font-bold uppercase tracking-[0.16em] text-ink/60">Services shown</p><div className="mt-4 flex flex-wrap gap-2">{project.services.map((item) => <span key={item} className="rounded-full border border-line px-3 py-2 text-xs font-semibold text-ink/65">{item}</span>)}</div></div>
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className={`${buttonStyles('primary', 'mt-8 w-full justify-center')}`}>Discuss a similar project <ArrowUpRight className="h-4 w-4" /></a>
            </aside>
          </div>
          <p className="mt-14 rounded-xl border border-cobalt/15 bg-blue-50 p-4 text-xs leading-5 text-ink/65">Portfolio transparency: {project.title} is a fictional demonstration concept created to show NOVA’s creative approach. It is not presented as commissioned client work or a measured commercial result.</p>
        </div>
      </section>
      <CtaSection eyebrow="Have a different challenge?" title="Let’s shape a digital experience around it." />
    </>
  )
}
