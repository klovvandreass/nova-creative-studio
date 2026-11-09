export type ButtonVariant = 'primary' | 'secondary' | 'light' | 'ghost'

export function buttonStyles(
  variant: ButtonVariant = 'primary',
  className = '',
) {
  const variants: Record<ButtonVariant, string> = {
    primary:
      'bg-cobalt text-white border-cobalt hover:bg-[#1047c5] hover:border-[#1047c5]',
    secondary:
      'bg-transparent text-ink border-ink/20 hover:border-ink hover:bg-ink hover:text-white',
    light:
      'bg-white text-ink border-white hover:bg-blue-50 hover:border-blue-50',
    ghost:
      'bg-transparent text-white border-white/25 hover:border-white hover:bg-white hover:text-ink',
  }

  return `group inline-flex min-h-12 items-center justify-center gap-3 rounded-full border px-6 py-3 text-sm font-bold tracking-[-0.01em] transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cobalt disabled:cursor-not-allowed disabled:opacity-50 ${variants[variant]} ${className}`
}
