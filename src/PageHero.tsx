import type { ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

type PageHeroProps = {
  eyebrow: string
  title: ReactNode
  description: string
  aside?: string
}

export default function PageHero({
  eyebrow,
  title,
  description,
  aside,
}: PageHeroProps) {
  const reduceMotion = useReducedMotion()
  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section className="relative overflow-hidden border-b border-line pb-16 pt-36 sm:pb-20 sm:pt-44 lg:pb-24 lg:pt-52">
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
      <motion.div
        className="site-container relative"
        initial={reduceMotion ? false : 'hidden'}
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.11, delayChildren: 0.08 } },
        }}
      >
        <motion.div
          variants={item}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mb-7 flex items-center gap-3 text-[0.7rem] font-bold uppercase tracking-[0.22em] text-ink/65"
        >
          <span className="h-2 w-2 rounded-full bg-cobalt" aria-hidden="true" />
          {eyebrow}
        </motion.div>
        <div className="grid items-end gap-10 lg:grid-cols-12 lg:gap-12">
          <motion.h1
            variants={item}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-balance font-display text-[clamp(3rem,6.4vw,6.6rem)] font-medium leading-[0.98] tracking-[-0.06em] text-ink lg:col-span-8"
          >
            {title}
          </motion.h1>
          <motion.div
            variants={item}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4"
          >
            <p className="max-w-xl text-pretty text-base leading-7 text-ink/65 sm:text-lg sm:leading-8">
              {description}
            </p>
            {aside && (
              <p className="mt-6 border-l-2 border-cobalt pl-4 text-xs font-bold uppercase leading-5 tracking-[0.15em] text-ink/65">
                {aside}
              </p>
            )}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
