import Section from '../components/Section'
import MaskIcon from '../components/MaskIcon'
import { profile, socials } from '../data/portfolio'

function MailIcon({ className = 'h-6 w-6' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={`shrink-0 ${className}`} aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m4 7.5 8 6 8-6" />
    </svg>
  )
}

const tile =
  'group flex items-center gap-3 rounded-xl border border-line bg-raised px-4 py-3.5 font-medium transition-[transform,border-color,color] duration-300 ease-out-soft hover:-translate-y-0.5 hover:border-accent hover:text-accent'

export default function Contact() {
  return (
    <Section id="contact" title="Contact" intro="Email me or find me on these profiles.">
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <li className="sm:col-span-2 lg:col-span-4">
          <a href={`mailto:${profile.email}`} className={`${tile} text-lg`}>
            <MailIcon />
            <span className="min-w-0 break-all">{profile.email}</span>
          </a>
        </li>
        {socials.map((s) => (
          <li key={s.label}>
            <a href={s.url} target="_blank" rel="noreferrer" className={tile}>
              <MaskIcon src={s.icon} className="h-6 w-6" />
              <span>
                {s.label}
                <span className="sr-only"> (opens in new tab)</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  )
}
