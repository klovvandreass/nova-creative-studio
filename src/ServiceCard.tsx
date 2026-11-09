import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Service } from '../lib/site'
import { Reveal } from './ui'

export default function ServiceCard({
  service,
  index,
}: {
  service: Service
  index: number
}) {
  const Icon = service.icon

  return (
    <Reveal delay={index * 0.08} className="h-full">
      <article className="group flex h-full min-h-[330px] flex-col rounded-[1.4rem] border border-line bg-white p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-ink/25 hover:shadow-[0_22px_60px_rgba(20,23,27,0.08)] sm:p-8">
        <div className="flex items-start justify-between">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-cobalt">
            <Icon aria-hidden="true" className="h-5 w-5" strokeWidth={1.8} />
          </span>
          <span className="font-display text-xs font-bold tracking-[0.16em] text-ink/65">
            {service.number}
          </span>
        </div>
        <h3 className="mt-10 max-w-[15ch] font-display text-2xl font-medium leading-tight tracking-[-0.035em] text-ink">
          {service.title}
        </h3>
        <p className="mt-4 flex-1 text-sm leading-6 text-ink/65">{service.summary}</p>
        <Link
          to={`/services#${service.id}`}
          className="mt-7 inline-flex w-fit items-center gap-2 rounded-sm text-sm font-bold text-ink"
          aria-label={`Learn more about ${service.title}`}
        >
          <span className="border-b border-ink/20 pb-1 transition-colors group-hover:border-cobalt group-hover:text-cobalt">
            Service details
          </span>
          <ArrowUpRight
            aria-hidden="true"
            className="h-4 w-4 text-cobalt transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </Link>
      </article>
    </Reveal>
  )
}
