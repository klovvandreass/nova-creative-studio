import { useMemo, useState, type FormEvent } from 'react'
import {
  ArrowUpRight,
  CheckCircle2,
  CircleAlert,
  Mail,
  MessageCircle,
  Send,
} from 'lucide-react'
import { siteConfig, whatsappUrl } from '../lib/site'
import { buttonStyles } from '../lib/styles'

type FormValues = {
  name: string
  email: string
  subject: string
  message: string
}

type FieldName = keyof FormValues
type FormErrors = Partial<Record<FieldName, string>>

const initialValues: FormValues = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

function validateField(field: FieldName, value: string) {
  const cleanValue = value.trim()

  switch (field) {
    case 'name':
      if (!cleanValue) return 'Please enter your name.'
      if (cleanValue.length < 2) return 'Name must be at least 2 characters.'
      return ''
    case 'email':
      if (!cleanValue) return 'Please enter your email address.'
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanValue))
        return 'Enter a valid email, such as name@company.com.'
      return ''
    case 'subject':
      if (!cleanValue) return 'Please add a subject.'
      if (cleanValue.length < 3) return 'Subject must be at least 3 characters.'
      return ''
    case 'message':
      if (!cleanValue) return 'Please tell us a little about your project.'
      if (cleanValue.length < 20)
        return 'Please add a little more detail (at least 20 characters).'
      return ''
  }
}

const inputClass = (hasError: boolean) =>
  `mt-2.5 w-full rounded-xl border bg-paper px-4 py-3.5 text-base text-ink outline-none transition-all placeholder:text-ink/65 focus:border-cobalt focus:ring-4 focus:ring-cobalt/10 ${
    hasError ? 'border-red-600' : 'border-line hover:border-ink/30'
  }`

export default function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues)
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<'idle' | 'error' | 'ready'>('idle')

  const whatsappDraftHref = useMemo(() => {
    const text = `Hello NOVA Creative Studio,\n\n${values.message.trim()}\n\nName: ${values.name.trim()}\nEmail: ${values.email.trim()}\nSubject: ${values.subject.trim()}`
    return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(text)}`
  }, [values])

  const emailDraftHref = useMemo(() => {
    const body = `Hello NOVA Creative Studio,\n\n${values.message.trim()}\n\nFrom: ${values.name.trim()}\nReply to: ${values.email.trim()}`
    return `mailto:${siteConfig.email}?subject=${encodeURIComponent(
      values.subject.trim(),
    )}&body=${encodeURIComponent(body)}`
  }, [values])

  function updateField(field: FieldName, value: string) {
    setValues((current) => ({ ...current, [field]: value }))
    setErrors((current) => ({ ...current, [field]: undefined }))
    if (status !== 'idle') setStatus('idle')
  }

  function handleBlur(field: FieldName) {
    const error = validateField(field, values[field])
    setErrors((current) => ({ ...current, [field]: error || undefined }))
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const nextErrors: FormErrors = {}

    ;(Object.keys(values) as FieldName[]).forEach((field) => {
      const error = validateField(field, values[field])
      if (error) nextErrors[field] = error
    })

    setErrors(nextErrors)

    const firstInvalidField = (Object.keys(values) as FieldName[]).find(
      (field) => nextErrors[field],
    )

    if (firstInvalidField) {
      setStatus('error')
      document.getElementById(firstInvalidField)?.focus()
      return
    }

    setStatus('ready')
  }

  function clearForm() {
    setValues(initialValues)
    setErrors({})
    setStatus('idle')
    document.getElementById('name')?.focus()
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-[1.5rem] border border-line bg-white p-6 shadow-[0_20px_70px_rgba(20,23,27,0.05)] sm:p-8 lg:p-10"
    >
      <div className="mb-8">
        <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-cobalt">
          Project enquiry
        </p>
        <h2 className="mt-3 font-display text-3xl font-medium tracking-[-0.045em] text-ink">
          Start with a few details.
        </h2>
        <p className="mt-3 text-sm leading-6 text-ink/65">
          All fields are required. We usually reply within two business days.
        </p>
      </div>

      <div className="mb-7 flex gap-3 rounded-xl border border-cobalt/15 bg-blue-50 p-4 text-xs leading-5 text-ink/65">
        <CircleAlert aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-cobalt" />
        <p>
          <strong className="font-bold text-ink">Demo form:</strong> no information is transmitted or stored. Validating the form prepares an email draft you can send from your own email app.
        </p>
      </div>

      {status === 'error' && (
        <div
          role="alert"
          className="mb-6 flex items-center gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-sm font-semibold text-red-800"
        >
          <CircleAlert aria-hidden="true" className="h-5 w-5 shrink-0" />
          Please check the highlighted fields and try again.
        </div>
      )}

      {status === 'ready' && (
        <div
          role="status"
          aria-live="polite"
          className="mb-7 rounded-xl border border-emerald-200 bg-emerald-50 p-5"
        >
          <div className="flex items-start gap-3">
            <CheckCircle2 aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-emerald-700" />
            <div>
              <h3 className="font-display text-lg font-bold text-emerald-950">
                Your message is ready.
              </h3>
              <p className="mt-1 text-sm leading-6 text-emerald-900/75">
                Nothing has been sent yet. Open the prepared email draft to send it, or use WhatsApp instead.
              </p>
            </div>
          </div>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <a href={emailDraftHref} className={buttonStyles('primary', 'px-5')}>
              <Mail aria-hidden="true" className="h-4 w-4" />
              Open email draft
            </a>
            <a
              href={whatsappDraftHref}
              target="_blank"
              rel="noreferrer"
              className={buttonStyles('secondary', 'px-5')}
            >
              <MessageCircle aria-hidden="true" className="h-4 w-4" />
              WhatsApp
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </div>
        </div>
      )}

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-bold text-ink">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={(event) => updateField('name', event.target.value)}
            onBlur={() => handleBlur('name')}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'name-error' : undefined}
            placeholder="Your full name"
            className={inputClass(Boolean(errors.name))}
          />
          {errors.name && (
            <p id="name-error" className="mt-2 text-xs font-semibold text-red-700">
              {errors.name}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-bold text-ink">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            value={values.email}
            onChange={(event) => updateField('email', event.target.value)}
            onBlur={() => handleBlur('email')}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'email-error' : undefined}
            placeholder="you@company.com"
            className={inputClass(Boolean(errors.email))}
          />
          {errors.email && (
            <p id="email-error" className="mt-2 text-xs font-semibold text-red-700">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="mt-6">
        <label htmlFor="subject" className="text-sm font-bold text-ink">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          value={values.subject}
          onChange={(event) => updateField('subject', event.target.value)}
          onBlur={() => handleBlur('subject')}
          aria-invalid={Boolean(errors.subject)}
          aria-describedby={errors.subject ? 'subject-error' : undefined}
          placeholder="New website, brand identity, campaign…"
          className={inputClass(Boolean(errors.subject))}
        />
        {errors.subject && (
          <p id="subject-error" className="mt-2 text-xs font-semibold text-red-700">
            {errors.subject}
          </p>
        )}
      </div>

      <div className="mt-6">
        <label htmlFor="message" className="text-sm font-bold text-ink">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          value={values.message}
          onChange={(event) => updateField('message', event.target.value)}
          onBlur={() => handleBlur('message')}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'message-error' : 'message-hint'}
          placeholder="Tell us about your goals, timeline, and what you need help with."
          className={`${inputClass(Boolean(errors.message))} min-h-36 resize-y`}
        />
        {errors.message ? (
          <p id="message-error" className="mt-2 text-xs font-semibold text-red-700">
            {errors.message}
          </p>
        ) : (
          <p id="message-hint" className="mt-2 text-xs text-ink/65">
            Minimum 20 characters. Your draft stays in this browser until you open your email app.
          </p>
        )}
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <button type="submit" className={buttonStyles('primary', 'flex-1 sm:flex-none')}>
          <Send aria-hidden="true" className="h-4 w-4" />
          Prepare message
        </button>
        <button
          type="button"
          onClick={clearForm}
          className={buttonStyles('secondary', 'px-5')}
        >
          Clear form
        </button>
      </div>

      <a
        href={`mailto:${siteConfig.email}`}
        className="mt-7 inline-flex items-center gap-2 rounded-sm text-xs font-bold text-ink/65 underline decoration-ink/20 underline-offset-4 transition-colors hover:text-cobalt"
      >
        Prefer to write directly? Email {siteConfig.email}
        <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
      </a>
    </form>
  )
}
