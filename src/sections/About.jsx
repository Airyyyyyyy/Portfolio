import Section from '../components/Section';import { profile } from '../data/portfolio'

export default function About() {
  const facts = [
    { term: 'Based in', value: profile.location },
    { term: 'Works as', value: profile.title },
    profile.status && { term: 'Available for', value: profile.status.replace(/^Open to /, '') },
  ].filter(Boolean)

  return (
    <Section id="about" title="About">
      <div className="max-w-[38ch] space-y-5 text-[clamp(1.25rem,2.2vw,1.5rem)] leading-[1.45] tracking-[-0.005em]">
        {profile.about.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>

      <dl className="mt-12 grid gap-6 border-t border-line pt-6 sm:grid-cols-3">
        {facts.map((f) => (
          <div key={f.term}>
            <dt className="text-sm text-muted">{f.term}</dt>
            <dd className="mt-1 font-medium">{f.value}</dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
