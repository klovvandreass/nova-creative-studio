import { useEffect } from 'react'

type SeoProps = {
  title: string
  description: string
}

function setMeta(selector: string, attribute: string, value: string) {
  const element = document.querySelector<HTMLMetaElement>(selector)
  if (element) element.setAttribute(attribute, value)
}

export default function Seo({ title, description }: SeoProps) {
  useEffect(() => {
    document.title = title
    setMeta('meta[name="description"]', 'content', description)
    setMeta('meta[property="og:title"]', 'content', title)
    setMeta('meta[property="og:description"]', 'content', description)
    setMeta('meta[name="twitter:title"]', 'content', title)
    setMeta('meta[name="twitter:description"]', 'content', description)
  }, [title, description])

  return null
}
