import Section from '../components/Section'
import { experience, education } from '../data/portfolio'

function Timeline({ title, items }) {
  if (!items.length) return null
  return (
    <div>
      <h3 className="mb-6 text-2xl font-medium tracking-tight">{title}</h3>
      <ol>
        {items.map((i) => (
          <li
            key={`${i.role}-${i.period}`}
            className="grid gap-1 border-t border-line py-6 sm:grid-cols-[10rem_1fr] sm:gap-8"
          >
            <p className="text-muted tabular-nums">{i.period}</p>
            <div>
              <p className="text-lg font-semibold">{i.role}</p>
              <p className="text-muted">{i.org}</p>
              {i.summary && (
                <div className="mt-3 max-w-[60ch] space-y-3">
                  {i.summary
                    .split('\n')
                    .filter((line) => line.trim())
                    .map((line) => (
                      <p key={line}>{line.trim()}</p>
                    ))}
                </div>
              )}
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="space-y-14">
        <Timeline title="Work" items={experience} />
        <Timeline title="Education" items={education} />
      </div>
    </Section>
  )
}
