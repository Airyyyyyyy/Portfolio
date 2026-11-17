// One row in the project index.
export default function ProjectCard({ project, index, animate }) {
  const { title, description, tech, live, repo, image } = project
  return (
    <li
      className={`project-row group grid gap-4 border-t border-line py-8 first:border-t-0 first:pt-0 md:grid-cols-8 md:gap-8 ${animate ? 'row-in' : ''}`}
      style={{ '--i': index }}
    >
      <div className="md:col-span-3">
        <h3 className="project-title mt-1 text-[clamp(1.75rem,3.2vw,2.25rem)] leading-[1.05] tracking-[-0.02em] group-hover:text-accent">
          {title}
        </h3>
      </div>

      <div className="md:col-span-5">
        {image && (
          <div className="mb-5 overflow-hidden rounded-lg border border-line">
            <img
              src={image}
              alt={`Screenshot of ${title}`}
              loading="lazy"
              className="aspect-video w-full object-cover transition-transform duration-700 ease-out-soft group-hover:scale-[1.03]"
            />
          </div>
        )}
        <p className="max-w-[60ch]">{description}</p>
        <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted" aria-label="Technologies used">
          {tech.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        {(live || repo) && (
          <div className="mt-5 flex gap-6 font-medium">
            {live && (
              <a className="link-draw text-accent" href={live} target="_blank" rel="noreferrer">
                Live site<span className="sr-only"> for {title} (opens in new tab)</span>
              </a>
            )}
            {repo && (
              <a className="link-draw text-accent" href={repo} target="_blank" rel="noreferrer">
                Source code<span className="sr-only"> for {title} (opens in new tab)</span>
              </a>
            )}
          </div>
        )}
      </div>
    </li>
  )
}
