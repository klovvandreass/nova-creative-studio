import { Link } from 'react-router-dom'

type LogoProps = {
  light?: boolean
  className?: string
}

export function NovaMark({ className = 'h-8 w-8' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M20 0C21.8 12.8 27.2 18.2 40 20C27.2 21.8 21.8 27.2 20 40C18.2 27.2 12.8 21.8 0 20C12.8 18.2 18.2 12.8 20 0Z"
        fill="currentColor"
      />
      <circle cx="20" cy="20" r="4.2" fill="currentColor" />
    </svg>
  )
}

export default function Logo({ light = false, className = '' }: LogoProps) {
  return (
    <Link
      to="/"
      aria-label="NOVA Creative Studio — home"
      className={`group inline-flex items-center gap-3 rounded-sm ${className}`}
    >
      <span className="text-cobalt transition-transform duration-500 group-hover:rotate-45">
        <NovaMark className="h-8 w-8" />
      </span>
      <span className="flex flex-col">
        <span
          className={`font-display text-[1.05rem] font-bold leading-none tracking-[0.2em] ${
            light ? 'text-white' : 'text-ink'
          }`}
        >
          NOVA
        </span>
        <span
          className={`mt-1.5 text-[0.54rem] font-semibold leading-none tracking-[0.24em] ${
            light ? 'text-white/55' : 'text-ink/65'
          }`}
        >
          CREATIVE STUDIO
        </span>
      </span>
    </Link>
  )
}
