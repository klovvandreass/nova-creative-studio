import Seo from '../components/Seo'
import { ButtonLink } from '../components/ui'
import { NovaMark } from '../components/Logo'

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80svh] items-center overflow-hidden pb-20 pt-32">
      <Seo
        title="Page Not Found — NOVA Creative Studio"
        description="The requested page could not be found. Return to the NOVA Creative Studio homepage."
      />
      <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="site-container relative text-center">
        <NovaMark className="mx-auto h-12 w-12 text-cobalt" />
        <p className="mt-8 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-ink/65">
          404 · Page not found
        </p>
        <h1 className="mx-auto mt-5 max-w-4xl text-balance font-display text-[clamp(3rem,7vw,7rem)] font-medium leading-[0.98] tracking-[-0.06em] text-ink">
          This idea hasn’t taken shape.
        </h1>
        <p className="mx-auto mt-6 max-w-lg text-base leading-7 text-ink/65">
          The page may have moved, or the address may be incorrect. The homepage is the best place to get back on track.
        </p>
        <ButtonLink to="/" className="mt-9">
          Return to homepage
        </ButtonLink>
      </div>
    </section>
  )
}
