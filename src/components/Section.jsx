import useReveal from '../hooks/useReveal'

// Shared section frame: a rule that draws in, a sticky title rail on the left,
// content on the right.
export default function Section({ id, title, intro, children }) {
  const ref = useReveal()
  return (
    <section id={id} aria-labelledby={`${id}-title`} ref={ref} className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
      <div className="section-rule mb-10 h-px bg-line" aria-hidden="true" />
      <div className="grid gap-10 md:grid-cols-12 md:gap-8">
        <header className="md:sticky md:top-24 md:col-span-4 md:self-start">
          <h2 id={`${id}-title`} className="section-title text-[clamp(2.25rem,5vw,3.5rem)] leading-[0.95] tracking-[-0.02em]">
            {title}
          </h2>
          {intro && <p className="mt-4 max-w-[28ch] text-muted">{intro}</p>}
        </header>
        <div className="md:col-span-8">{children}</div>
      </div>
    </section>
  )
}
