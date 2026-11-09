import type { ReactNode } from 'react'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { buttonStyles, type ButtonVariant } from '../lib/styles'

type ButtonLinkProps = {
  to: string
  children: ReactNode
  variant?: ButtonVariant
  className?: string
  external?: boolean
}

export function ButtonLink({
  to,
  children,
  variant = 'primary',
  className = '',
  external = false,
}: ButtonLinkProps) {
  const content = (
    <>
      <span>{children}</span>
      <ArrowUpRight
        aria-hidden="true"
        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </>
  )

  if (external) {
    return (
      <a
        href={to}
        target="_blank"
        rel="noreferrer"
        className={buttonStyles(variant, className)}
      >
        {content}
        <span className="sr-only">(opens in a new tab)</span>
      </a>
    )
  }

  return (
    <Link to={to} className={buttonStyles(variant, className)}>
      {content}
    </Link>
  )
}

export function TextLink({
  to,
  children,
  light = false,
  className = '',
}: {
  to: string
  children: ReactNode
  light?: boolean
  className?: string
}) {
  return (
    <Link
      to={to}
      className={`group inline-flex items-center gap-2 rounded-sm text-sm font-bold ${
        light ? 'text-white' : 'text-ink'
      } ${className}`}
    >
      <span className="border-b border-current/30 pb-1 transition-colors group-hover:border-current">
        {children}
      </span>
      <ArrowRight
        aria-hidden="true"
        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
      />
    </Link>
  )
}

export function Reveal({
  children,
  className = '',
  delay = 0,
  y = 36,
}: {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
}) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={
        reduceMotion
          ? false
          : { opacity: 0, y, clipPath: 'inset(0 0 14% 0)' }
      }
      whileInView={
        reduceMotion
          ? undefined
          : { opacity: 1, y: 0, clipPath: 'inset(0 0 0% 0)' }
      }
      viewport={{ once: true, amount: 0.16, margin: '0px 0px -40px' }}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
  className = '',
}: {
  eyebrow: string
  title: ReactNode
  description?: string
  light?: boolean
  className?: string
}) {
  return (
    <div className={className}>
      <div
        className={`mb-5 flex items-center gap-3 text-[0.68rem] font-bold uppercase tracking-[0.2em] ${
          light ? 'text-white/60' : 'text-ink/65'
        }`}
      >
        <span className="h-2 w-2 rounded-full bg-cobalt" aria-hidden="true" />
        {eyebrow}
      </div>
      <h2
        className={`text-balance font-display text-[clamp(2.25rem,4.5vw,4.5rem)] font-medium leading-[1.02] tracking-[-0.055em] ${
          light ? 'text-white' : 'text-ink'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-6 max-w-2xl text-pretty text-base leading-7 sm:text-lg sm:leading-8 ${
            light ? 'text-white/65' : 'text-ink/65'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  )
}
