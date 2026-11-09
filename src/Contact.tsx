import { ArrowUpRight, Clock3, Mail, MapPin, MessageCircle } from 'lucide-react'
import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import ContactForm from '../components/ContactForm'
import { Reveal } from '../components/ui'
import { siteConfig, whatsappUrl } from '../lib/site'

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact NOVA Creative Studio — Start a Project"
        description="Tell NOVA Creative Studio about your website, branding, social media, or digital creative project. Contact us by email, WhatsApp, or the demo enquiry form."
      />
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Tell us what{' '}
            <span className="font-serif font-normal italic tracking-[-0.04em] text-cobalt">
              you’re building.
            </span>
          </>
        }
        description="Share the goal, the challenge, or even the rough idea. We’ll help you clarify the next step and let you know honestly whether NOVA is the right fit."
        aside="New projects · Creative partnerships · General questions"
      />

      <section className="section-pad">
        <div className="site-container grid items-start gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-cobalt">
                Talk to a real person
              </p>
              <h2 className="mt-4 max-w-md text-balance font-display text-3xl font-medium leading-tight tracking-[-0.045em] text-ink sm:text-4xl">
                Choose whichever way feels easiest.
              </h2>
              <p className="mt-5 max-w-md text-base leading-7 text-ink/65">
                You don’t need a polished brief. A few sentences about what you want to change or create are enough to start.
              </p>
            </Reveal>

            <div className="mt-10 space-y-4">
              <Reveal delay={0.06}>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="group flex items-start gap-4 rounded-2xl border border-line bg-white p-5 transition-all hover:border-cobalt/40 hover:shadow-[0_12px_35px_rgba(20,23,27,0.06)]"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-50 text-cobalt">
                    <Mail aria-hidden="true" className="h-5 w-5" strokeWidth={1.8} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-xs font-bold uppercase tracking-[0.14em] text-ink/65">
                      Email us
                    </span>
                    <span className="mt-2 block break-all text-sm font-bold text-ink sm:text-base">
                      {siteConfig.email}
                    </span>
                  </span>
                  <ArrowUpRight
                    aria-hidden="true"
                    className="h-4 w-4 shrink-0 text-ink/65 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cobalt"
                  />
                </a>
              </Reveal>

              <Reveal delay={0.12}>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-start gap-4 rounded-2xl border border-line bg-white p-5 transition-all hover:border-cobalt/40 hover:shadow-[0_12px_35px_rgba(20,23,27,0.06)]"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-50 text-cobalt">
                    <MessageCircle aria-hidden="true" className="h-5 w-5" strokeWidth={1.8} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-xs font-bold uppercase tracking-[0.14em] text-ink/65">
                      WhatsApp
                    </span>
                    <span className="mt-2 block text-sm font-bold text-ink sm:text-base">
                      {siteConfig.whatsappDisplay}
                    </span>
                    <span className="mt-1 block text-xs text-ink/65">
                      Opens WhatsApp in a new tab
                    </span>
                  </span>
                  <ArrowUpRight
                    aria-hidden="true"
                    className="h-4 w-4 shrink-0 text-ink/65 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cobalt"
                  />
                </a>
              </Reveal>
            </div>

            <Reveal delay={0.18}>
              <div className="mt-10 grid gap-6 border-t border-line pt-8 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                <div className="flex items-start gap-3">
                  <MapPin aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-cobalt" />
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-ink/65">
                      Studio base
                    </h3>
                    <p className="mt-2 text-sm font-semibold text-ink">{siteConfig.location}</p>
                    <p className="mt-1 text-xs leading-5 text-ink/65">Remote collaboration worldwide</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock3 aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-cobalt" />
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-ink/65">
                      Studio hours
                    </h3>
                    <p className="mt-2 text-sm font-semibold text-ink">{siteConfig.availability}</p>
                    <p className="mt-1 text-xs leading-5 text-ink/65">Replies within two business days</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.08} className="lg:col-span-7" y={26}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  )
}
