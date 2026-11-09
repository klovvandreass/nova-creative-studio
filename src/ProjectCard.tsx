import type { Project } from './site'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { Reveal } from './ui'

export default function ProjectCard({
  project,
  index = 0,
  detailed = false,
  eager = false,
}: {
  project: Project
  index?: number
  detailed?: boolean
  eager?: boolean
}) {
  return (
    <Reveal delay={(index % 2) * 0.1} className="h-full">
      <article className="group h-full">
        <div className="relative overflow-hidden rounded-[1.35rem] bg-[#e8e6e0]">
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src={project.image}
              alt={project.imageAlt}
              width="1536"
              height="1024"
              loading={eager ? 'eager' : 'lazy'}
              decoding="async"
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
            />
          </div>
          <div className="absolute left-4 top-4 rounded-full border border-white/50 bg-white/90 px-3 py-1.5 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-ink shadow-sm backdrop-blur-sm">
            Demo concept
          </div>
        </div>
        <div className="pt-6">
          <div className="flex items-center justify-between gap-4 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-ink/65">
            <span>{project.category}</span>
            <span>{project.year}</span>
          </div>
          <h3 className="mt-3 font-display text-[1.75rem] font-medium tracking-[-0.045em] text-ink sm:text-3xl">
            {project.title}
          </h3>
          <p className="mt-3 max-w-xl text-sm leading-6 text-ink/65 sm:text-base sm:leading-7">
            {project.description}
          </p>
          <Link
            to={`/portfolio/${project.slug}`}
            className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-cobalt underline decoration-cobalt/30 underline-offset-4 transition-colors hover:text-ink"
            aria-label={`Explore ${project.title} demo case study`}
          >
            Explore concept <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
          </Link>
          {detailed && (
            <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${project.title} services`}>
              {project.services.map((service) => (
                <li
                  key={service}
                  className="rounded-full border border-line bg-white px-3 py-1.5 text-xs font-semibold text-ink/65"
                >
                  {service}
                </li>
              ))}
            </ul>
          )}
        </div>
      </article>
    </Reveal>
  )
}
