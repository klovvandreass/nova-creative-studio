import { useRef } from 'react'
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion'
import { ArrowDown, Check, Quote } from 'lucide-react'
import Seo from './Seo'
import ServiceCard from './ServiceCard'
import ProjectCard from './ProjectCard'
import CtaSection from './CtaSection'
import {
  ButtonLink,
  Reveal,
  SectionHeading,
  TextLink,
} from './ui'
import { clients, projects, services } from './site'

const heroItem = {
  hidden: { opacity: 0, y: 34 },
  visible: { opacity: 1, y: 0 },
}

export default function Home() {
  const heroRef = useRef<HTMLElement>(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const visualY = useTransform(scrollYProgress, [0, 1], [0, 110])
  const visualScale = useTransform(scrollYProgress, [0, 1], [1, 0.86])
  const visualOpacity = useTransform(scrollYProgress, [0, 0.9], [1, 0.3])

  return (
    <>
      <Seo
        title="NOVA Creative Studio — Ideas Into Digital Experiences"
        description="NOVA is an independent digital creative studio for website design, branding, social media design, and digital creative solutions."
      />

      <section
        ref={heroRef}
        className="relative flex min-h-[100svh] items-center overflow-hidden pb-12 pt-28 sm:pt-32 lg:pb-8 lg:pt-28"
        aria-labelledby="home-hero-title"
      >
        <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden="true" />
        <div
          className="pointer-events-none absolute -left-40 top-1/3 h-[420px] w-[420px] rounded-full bg-cobalt/[0.055] blur-3xl"
          aria-hidden="true"
        />
        <div className="site-container relative grid w-full items-center gap-8 lg:grid-cols-12 lg:gap-6">
          <motion.div
            className="relative z-10 lg:col-span-7 lg:pr-4"
            initial={reduceMotion ? false : 'hidden'}
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.1, delayChildren: 0.12 } },
            }}
          >
            <motion.div
              variants={heroItem}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="mb-7 flex items-center gap-3 text-[0.65rem] font-bold uppercase tracking-[0.19em] text-ink/65 sm:text-[0.7rem]"
            >
              <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cobalt opacity-40 motion-reduce:animate-none" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cobalt" />
              </span>
              Independent digital creative agency
            </motion.div>

            <h1
              id="home-hero-title"
              className="font-display text-[clamp(2.85rem,6.5vw,6.8rem)] font-medium leading-[0.93] tracking-[-0.065em] text-ink"
            >
              <motion.span
                variants={heroItem}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="block"
              >
                Ideas into
              </motion.span>
              <motion.span
                variants={heroItem}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="block font-serif font-normal italic tracking-[-0.045em] text-cobalt"
              >
                digital
              </motion.span>
              <motion.span
                variants={heroItem}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="block font-serif font-normal italic tracking-[-0.045em] text-cobalt"
              >
                experiences.
              </motion.span>
            </h1>

            <motion.p
              variants={heroItem}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="mt-7 max-w-xl text-pretty text-base leading-7 text-ink/65 sm:mt-8 sm:text-lg sm:leading-8"
            >
              We help ambitious brands communicate clearly and show up with confidence through thoughtful strategy, distinctive design, and reliable development.
            </motion.p>

            <motion.div
              variants={heroItem}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 flex flex-col gap-3 min-[420px]:flex-row sm:mt-10"
            >
              <ButtonLink to="/services">Explore Our Services</ButtonLink>
              <ButtonLink to="/contact" variant="secondary">
                Contact Us
              </ButtonLink>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative mx-auto -mt-2 h-[340px] w-full max-w-[520px] sm:h-[440px] lg:col-span-5 lg:mt-0 lg:h-[600px] lg:max-w-none"
            style={
              reduceMotion
                ? undefined
                : { y: visualY, scale: visualScale, opacity: visualOpacity }
            }
          >
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, scale: 0.82, rotate: -8 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.25, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              <motion.div
                className="absolute inset-[9%] rounded-full border border-ink/10"
                animate={reduceMotion ? undefined : { rotate: 360 }}
                transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
                aria-hidden="true"
              >
                <span className="absolute left-1/2 top-[-4px] h-2 w-2 rounded-full bg-cobalt" />
                <span className="absolute bottom-[14%] right-[10%] h-1.5 w-1.5 rounded-full bg-ink/40" />
              </motion.div>
              <div
                className="absolute inset-[20%] rounded-full border border-dashed border-ink/10"
                aria-hidden="true"
              />
              <motion.img
                src="/images/nova-sculpture.webp"
                alt="Abstract cobalt glass and chrome NOVA star sculpture"
                width="1024"
                height="1024"
                fetchPriority="high"
                className="absolute inset-0 h-full w-full object-contain drop-shadow-[0_30px_45px_rgba(18,57,150,0.16)]"
                animate={reduceMotion ? undefined : { y: [0, -10, 0], rotate: [0, 1.2, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              />
            </motion.div>
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.95, duration: 0.6 }}
              className="absolute bottom-[6%] right-0 rounded-full border border-line bg-white/85 px-4 py-2.5 text-[0.62rem] font-bold uppercase tracking-[0.15em] text-ink/65 shadow-sm backdrop-blur-md sm:right-[4%]"
            >
              Strategy · Design · Code
            </motion.div>
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.05, duration: 0.6 }}
              className="absolute left-0 top-[10%] hidden rounded-full border border-line bg-white/85 px-4 py-2.5 text-[0.62rem] font-bold uppercase tracking-[0.15em] text-ink/65 shadow-sm backdrop-blur-md sm:block"
            >
              Jakarta · Worldwide
            </motion.div>
          </motion.div>
        </div>
        <motion.a
          href="#studio-intro"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-2 rounded-sm text-[0.62rem] font-bold uppercase tracking-[0.18em] text-ink/65 transition-colors hover:text-ink xl:flex"
        >
          Scroll to discover
          <ArrowDown aria-hidden="true" className="h-3.5 w-3.5" />
        </motion.a>
      </section>

      <section className="border-y border-line bg-white" aria-label="Selected concept clients">
        <div className="site-container grid gap-6 py-7 md:grid-cols-12 md:items-center">
          <p className="text-[0.62rem] font-bold uppercase tracking-[0.18em] text-ink/65 md:col-span-3">
            Selected concept clients
          </p>
          <div className="grid grid-cols-2 gap-x-4 gap-y-5 min-[480px]:grid-cols-3 md:col-span-9 md:grid-cols-5 md:items-center">
            {clients.map((client, index) => (
              <span
                key={client}
                className={`font-display text-xs font-bold tracking-[0.12em] text-ink/65 sm:text-sm ${
                  index === 4 ? 'col-span-2 min-[480px]:col-span-1' : ''
                }`}
              >
                {client}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="studio-intro" className="section-pad scroll-mt-24">
        <div className="site-container grid gap-10 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-3">
            <p className="flex items-center gap-3 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-ink/65">
              <span className="h-px w-8 bg-cobalt" aria-hidden="true" />
              Meet NOVA
            </p>
          </Reveal>
          <div className="lg:col-span-9">
            <Reveal>
              <h2 className="max-w-5xl text-balance font-display text-[clamp(2.4rem,4.8vw,4.9rem)] font-medium leading-[1.04] tracking-[-0.055em] text-ink">
                We turn good thinking into clear, memorable digital work.
              </h2>
            </Reveal>
            <div className="mt-10 grid gap-8 md:grid-cols-2 lg:mt-14">
              <Reveal delay={0.08}>
                <p className="text-pretty text-base leading-7 text-ink/65 sm:text-lg sm:leading-8">
                  NOVA is an independent creative studio bringing brand, content, and technology into the same conversation. That means fewer handoffs, sharper decisions, and work that stays coherent from first impression to final interaction.
                </p>
              </Reveal>
              <Reveal delay={0.16}>
                <p className="text-base leading-7 text-ink/65">
                  We stay intentionally small and senior-led. You speak directly with the people shaping your project, and every recommendation connects back to a practical business need.
                </p>
                <TextLink to="/about" className="mt-6">
                  More about our studio
                </TextLink>
              </Reveal>
            </div>
            <div className="mt-14 grid border-y border-line sm:grid-cols-3">
              {[
                ['01', 'Senior team from brief to launch'],
                ['04', 'Connected creative disciplines'],
                ['100%', 'Solutions shaped around your brief'],
              ].map(([value, label], index) => (
                <Reveal
                  key={label}
                  delay={index * 0.08}
                  className={`py-7 sm:px-7 sm:py-8 ${
                    index > 0 ? 'border-t border-line sm:border-l sm:border-t-0' : ''
                  } ${index === 0 ? 'sm:pl-0' : ''}`}
                >
                  <p className="font-display text-4xl font-medium tracking-[-0.05em] text-cobalt">
                    {value}
                  </p>
                  <p className="mt-2 max-w-[24ch] text-xs font-semibold leading-5 text-ink/65">
                    {label}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad border-t border-line bg-[#eeece7]">
        <div className="site-container">
          <Reveal>
            <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <SectionHeading
                eyebrow="What we do"
                title={<>Connected expertise.<br />One creative standard.</>}
                description="Choose a focused engagement or bring us in across multiple touchpoints. Every service is designed to work beautifully on its own—and even better together."
                className="max-w-3xl"
              />
              <TextLink to="/services" className="shrink-0">
                View all services
              </TextLink>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="site-container">
          <Reveal>
            <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <SectionHeading
                eyebrow="Selected work"
                title="A few ideas, made tangible."
                description="Explore fictional concept projects showing how we approach different industries, formats, and creative challenges."
                className="max-w-3xl"
              />
              <TextLink to="/portfolio" className="shrink-0">
                Explore the portfolio
              </TextLink>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-x-6 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 3).map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-20 text-white sm:py-24 lg:py-28">
        <div className="site-container">
          <Reveal>
            <div className="flex items-center gap-3 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-white/50">
              <span className="h-2 w-2 rounded-full bg-cobalt" aria-hidden="true" />
              Client trust
            </div>
          </Reveal>
          <div className="mt-10 grid gap-12 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-8">
              <Quote aria-hidden="true" className="h-9 w-9 fill-cobalt text-cobalt" />
              <blockquote className="mt-7 text-balance font-display text-[clamp(2rem,3.6vw,3.6rem)] font-medium leading-[1.15] tracking-[-0.045em] text-white/95">
                “NOVA brought structure to our ideas and made every decision feel purposeful. The result was a brand system our whole team could actually use.”
              </blockquote>
              <footer className="mt-8">
                <p className="text-sm font-bold text-white">Alina Prameswari</p>
                <p className="mt-1 text-xs text-white/55">
                  Co-founder, Nūra Botanics · Illustrative demo testimonial
                </p>
              </footer>
            </Reveal>
            <div className="lg:col-span-4">
              {[
                'Direct access to the people doing the work',
                'Clear scopes, timelines, and creative decisions',
                'A practical handover your team can build on',
              ].map((item, index) => (
                <Reveal key={item} delay={index * 0.08}>
                  <div className="flex gap-4 border-t border-white/15 py-5 text-sm leading-6 text-white/65">
                    <Check aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-cobalt" />
                    {item}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
