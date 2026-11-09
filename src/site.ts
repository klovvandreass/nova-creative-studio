import {
  PanelsTopLeft,
  PenTool,
  Share2,
  Sparkles,
  type LucideIcon,
} from 'lucide-react'

// NOVA portfolio demo contact details. Form submissions are not stored by a backend.
export const siteConfig = {
  name: 'NOVA CREATIVE STUDIO',
  shortName: 'NOVA',
  tagline: 'Ideas Into Digital Experiences.',
  email: 'klovvbussines@gmail.com',
  whatsappDisplay: '+62 895 2593 4827',
  whatsappNumber: '6289525934827',
  location: 'Jakarta, Indonesia',
  availability: 'Monday–Friday, 09:00–18:00 WIB',
}

export const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
  'Hello NOVA Creative Studio, I would like to discuss a project.',
)}`

export const navigation = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Contact', to: '/contact' },
]

export type Service = {
  id: string
  number: string
  title: string
  shortTitle: string
  summary: string
  description: string
  image: string
  imageAlt: string
  icon: LucideIcon
  deliverables: string[]
}

export const services: Service[] = [
  {
    id: 'website-design-development',
    number: '01',
    title: 'Website Design & Development',
    shortTitle: 'Web design & development',
    summary:
      'Clear, responsive websites that make your offer easy to understand and your next step easy to take.',
    description:
      'We design and build focused digital experiences around your content, your customers, and your business goals. From company profiles to campaign sites, every screen is responsive, accessible, and straightforward to manage after launch.',
    image: '/images/project-aster.webp',
    imageAlt:
      'Responsive hospitality website concept shown on a laptop and desktop monitor',
    icon: PanelsTopLeft,
    deliverables: [
      'Discovery & sitemap',
      'UX/UI design',
      'Responsive development',
      'Launch support',
    ],
  },
  {
    id: 'branding-visual-identity',
    number: '02',
    title: 'Branding & Visual Identity',
    shortTitle: 'Branding & visual identity',
    summary:
      'Distinctive identity systems that help your brand look consistent, credible, and recognizably yours.',
    description:
      'We translate your positioning into a practical visual language—not just a logo. Typography, color, imagery, and layout rules work together so your team can create confident, consistent communication across every touchpoint.',
    image: '/images/project-nura.webp',
    imageAlt:
      'Botanical skincare identity concept with ivory and forest green packaging',
    icon: PenTool,
    deliverables: [
      'Brand direction',
      'Logo & visual system',
      'Brand guidelines',
      'Launch assets',
    ],
  },
  {
    id: 'social-media-design',
    number: '03',
    title: 'Social Media Design',
    shortTitle: 'Social media design',
    summary:
      'Flexible campaign and content systems designed to keep your feed coherent without making every post look the same.',
    description:
      'We create adaptable templates and art direction for feeds, stories, launches, and always-on content. Your team receives a repeatable system with enough structure to stay consistent and enough range to keep the content engaging.',
    image: '/images/project-common.webp',
    imageAlt:
      'Specialty coffee social campaign concept with story cards and packaging',
    icon: Share2,
    deliverables: [
      'Content art direction',
      'Feed & story templates',
      'Campaign key visuals',
      'Handover toolkit',
    ],
  },
  {
    id: 'digital-creative-solutions',
    number: '04',
    title: 'Digital Creative Solutions',
    shortTitle: 'Digital creative solutions',
    summary:
      'Thoughtful creative support for product interfaces, presentations, digital campaigns, and evolving brand needs.',
    description:
      'When a project sits between disciplines, we bring the right mix of design thinking and production craft. We shape interface concepts, pitch decks, campaign assets, and motion direction into one coherent digital experience.',
    image: '/images/project-orbit.webp',
    imageAlt:
      'Dark fintech dashboard concept displayed across tablet and smartphone screens',
    icon: Sparkles,
    deliverables: [
      'Creative concepting',
      'Product UI design',
      'Presentation design',
      'Motion direction',
    ],
  },
]

export type Project = {
  slug: string
  title: string
  category: string
  year: string
  description: string
  image: string
  imageAlt: string
  services: string[]
}

export const projects: Project[] = [
  {
    slug: 'aster-house',
    title: 'Aster House',
    category: 'Hospitality · Website',
    year: '2026',
    description:
      'A quiet, editorial website concept for a coastal retreat, pairing immersive imagery with a simpler path to room discovery.',
    image: '/images/project-aster.webp',
    imageAlt:
      'Aster House demo concept: coastal hotel website on desktop and laptop screens',
    services: ['Art direction', 'UX/UI design', 'Development'],
  },
  {
    slug: 'nura-botanics',
    title: 'Nūra Botanics',
    category: 'Wellness · Brand identity',
    year: '2026',
    description:
      'A warm, contemporary identity concept for a botanical skincare line, balancing natural cues with precise packaging design.',
    image: '/images/project-nura.webp',
    imageAlt:
      'Nūra Botanics demo concept: minimal skincare packaging on sculpted stone',
    services: ['Brand strategy', 'Visual identity', 'Packaging'],
  },
  {
    slug: 'orbit-finance',
    title: 'Orbit Finance',
    category: 'Fintech · Digital product',
    year: '2026',
    description:
      'An approachable interface concept that turns dense financial information into focused, legible daily money insights.',
    image: '/images/project-orbit.webp',
    imageAlt:
      'Orbit Finance demo concept: blue financial charts on tablet and phone interfaces',
    services: ['Product direction', 'UI system', 'Prototype'],
  },
  {
    slug: 'common-ground',
    title: 'Common Ground',
    category: 'Food & beverage · Campaign',
    year: '2026',
    description:
      'A modular social launch concept for a neighborhood coffee roaster, built around bold crops and a recognizable geometric rhythm.',
    image: '/images/project-common.webp',
    imageAlt:
      'Common Ground demo concept: coffee campaign cards and geometric packaging',
    services: ['Campaign concept', 'Social toolkit', 'Art direction'],
  },
]

export const clients = ['ASTER', 'NŪRA', 'ORBIT', 'COMMON GROUND', 'NORTH/LINE']

export const processSteps = [
  {
    number: '01',
    title: 'Discover',
    description:
      'We align on your goals, audience, constraints, and definition of success before making anything.',
  },
  {
    number: '02',
    title: 'Define',
    description:
      'We turn the brief into a clear creative direction, scope, and structure so decisions have a rationale.',
  },
  {
    number: '03',
    title: 'Design & build',
    description:
      'We work in focused rounds, sharing real progress early and refining the details together.',
  },
  {
    number: '04',
    title: 'Deliver',
    description:
      'We test, polish, and hand over a complete system with practical guidance for what comes next.',
  },
]
