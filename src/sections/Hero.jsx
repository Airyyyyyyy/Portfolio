import HeroName from '../components/HeroName'
import { profile } from '../data/portfolio'

export default function Hero() {
  return (
    <section
      id="top"
      className="mx-auto flex max-w-6xl flex-col px-4 pb-16 pt-8 sm:px-6 md:pb-24 md:pt-10"
    >
      {/* Top row: who and where on the left, availability on the right */}
      <div className="hero-fade flex flex-col gap-2 text-muted sm:flex-row sm:items-center sm:justify-between sm:gap-8" style={{ '--d': '150ms' }}>
        <p className="text-[clamp(1.2rem,2vw,1.5rem)] leading-tight tracking-[-0.01em] text-ink">
          {profile.title}
        </p>
        {profile.status && (
          <p className="flex items-center gap-2.5">
            <span className="h-2 w-2 shrink-0 rounded-full bg-accent" aria-hidden="true" />
            {profile.status}
          </p>
        )}
      </div>

      {/* Name and actions sit together at the bottom as one block */}
      <div className="pt-20 md:pt-32">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
          <HeroName name={profile.name} />

          {profile.photo ? (
            <img
              src={profile.photo}
              alt={`Portrait of ${profile.name}`}
              className="hero-fade aspect-[4/5] w-44 shrink-0 rounded-lg object-cover sm:w-52 lg:w-60"
              style={{ '--d': '900ms' }}
            />
          ) : (
            <div
              className="hero-fade flex aspect-[4/5] w-44 shrink-0 items-end rounded-lg border border-dashed border-line bg-raised p-4 text-sm text-muted sm:w-52 lg:w-60"
              style={{ '--d': '900ms' }}
              role="img"
              aria-label="Placeholder for a portrait photo"
            >
              <p>
                Your photo goes here. Set <code className="text-ink">photo</code> in portfolio.js.
              </p>
            </div>
          )}
        </div>

        <div className="hero-fade mt-10 flex flex-col gap-6 border-t border-line pt-6 md:mt-14 md:flex-row md:items-center md:justify-between" style={{ '--d': '1.5s' }}>
          {profile.tagline && (
            <p className="max-w-[32ch] text-[clamp(1.25rem,2.4vw,1.75rem)] leading-[1.2] tracking-[-0.01em]">{profile.tagline}</p>
          )}
          <div className="flex flex-wrap gap-3">
            <a href="#projects" className="btn btn-solid">
              See projects
            </a>
            <a href="#contact" className="btn btn-line">
              Get in touch
            </a>
            {profile.resumeUrl && (
              <a href={profile.resumeUrl} download className="btn btn-line group">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 transition-transform duration-300 ease-out-soft group-hover:translate-y-0.5"
                  aria-hidden="true"
                >
                  <path d="M12 4v11" />
                  <path d="m7 11 5 5 5-5" />
                  <path d="M5 20h14" />
                </svg>
                Download CV
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
