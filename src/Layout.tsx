import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
} from 'react-router-dom'
import Logo, { NovaMark } from './Logo'
import { buttonStyles } from './styles'
import { navigation, siteConfig, whatsappUrl } from './site'

function RouteEffects() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0)
      return
    }

    const timer = window.setTimeout(() => {
      const target = document.getElementById(decodeURIComponent(hash.slice(1)))
      if (target) {
        target.scrollIntoView({ block: 'start', behavior: 'auto' })
      }
    }, 80)

    return () => window.clearTimeout(timer)
  }, [pathname, hash])

  return null
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [menuOpen])

  const solid = scrolled || menuOpen

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        solid
          ? 'border-line bg-paper/95 shadow-[0_8px_30px_rgba(20,23,27,0.04)] backdrop-blur-xl'
          : 'border-transparent bg-transparent'
      }`}
    >
      <div className="site-container flex h-[76px] items-center justify-between sm:h-[84px]">
        <div onClick={() => setMenuOpen(false)}>
          <Logo />
        </div>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
          {navigation.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `relative rounded-sm py-2 text-[0.82rem] font-semibold transition-colors after:absolute after:bottom-0 after:left-0 after:h-px after:bg-cobalt after:transition-all ${
                  isActive
                    ? 'text-ink after:w-full'
                    : 'text-ink/65 after:w-0 hover:text-ink hover:after:w-full'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="hidden lg:block">
          <Link to="/contact" className={buttonStyles('primary', 'min-h-10 px-5 py-2.5')}>
            <span>Start a project</span>
            <ArrowUpRight
              aria-hidden="true"
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>
        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 bg-white text-ink transition-colors hover:border-ink lg:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={reduceMotion ? false : { opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-x-0 top-full h-[calc(100dvh-76px)] overflow-y-auto border-t border-line bg-paper sm:h-[calc(100dvh-84px)] lg:hidden"
          >
            <nav
              className="site-container flex min-h-full flex-col py-8"
              aria-label="Mobile navigation"
            >
              <div className="flex flex-col">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.to}
                    initial={reduceMotion ? false : { opacity: 0, x: -18 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.045 + 0.05 }}
                  >
                    <NavLink
                      to={item.to}
                      end={item.to === '/'}
                      onClick={() => setMenuOpen(false)}
                      className={({ isActive }) =>
                        `flex items-center justify-between border-b border-line py-4 font-display text-[2rem] font-medium tracking-[-0.045em] ${
                          isActive ? 'text-cobalt' : 'text-ink'
                        }`
                      }
                    >
                      {item.label}
                      <span className="font-sans text-xs font-bold tracking-normal text-ink/65">
                        0{index + 1}
                      </span>
                    </NavLink>
                  </motion.div>
                ))}
              </div>
              <div className="mt-auto pt-10">
                <p className="text-sm leading-6 text-ink/65">
                  Have a brief, a rough idea, or just a question?
                </p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="mt-3 inline-block break-all text-base font-bold text-ink underline decoration-ink/20 underline-offset-4"
                >
                  {siteConfig.email}
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="site-container py-14 sm:py-16 lg:py-20">
        <div className="grid gap-12 border-b border-white/10 pb-14 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <Logo light />
            <p className="mt-7 max-w-sm text-balance font-display text-2xl font-medium leading-snug tracking-[-0.035em] text-white/90">
              {siteConfig.tagline}
            </p>
            <p className="mt-4 max-w-sm text-sm leading-6 text-white/50">
              An independent digital creative studio for brands that value clarity, character, and careful execution.
            </p>
          </div>
          <div className="lg:col-span-2 lg:col-start-7">
            <h2 className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-white/55">
              Explore
            </h2>
            <ul className="mt-5 space-y-3">
              {navigation.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="rounded-sm text-sm text-white/65 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <h2 className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-white/55">
              Get in touch
            </h2>
            <div className="mt-5 space-y-4 text-sm">
              <a
                href={`mailto:${siteConfig.email}`}
                className="block w-fit break-all rounded-sm text-white/80 underline decoration-white/20 underline-offset-4 transition-colors hover:text-white"
              >
                {siteConfig.email}
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="flex w-fit items-center gap-2 rounded-sm text-white/65 transition-colors hover:text-white"
              >
                WhatsApp {siteConfig.whatsappDisplay}
                <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
              <p className="text-white/50">{siteConfig.location}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 pt-7 text-xs leading-5 text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} NOVA Creative Studio. Portfolio demonstration.</p>
          <div className="flex items-center gap-2">
            <NovaMark className="h-3.5 w-3.5 text-cobalt" />
            <span>All projects and client names are fictional demo concepts.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default function Layout() {
  const { pathname } = useLocation()
  const reduceMotion = useReducedMotion()

  return (
    <>
      <a
        href="#main-content"
        className="fixed left-4 top-3 z-[100] -translate-y-24 rounded-full bg-ink px-5 py-3 text-sm font-bold text-white transition-transform focus:translate-y-0"
      >
        Skip to content
      </a>
      <RouteEffects />
      <Header key={pathname} />
      <main id="main-content" tabIndex={-1}>
        <motion.div
          key={pathname}
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <Outlet />
        </motion.div>
      </main>
      <Footer />
    </>
  )
}
