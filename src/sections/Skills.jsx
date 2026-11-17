import Section from '../components/Section'
import { skills } from '../data/portfolio'

export default function Skills() {
  return (
    <Section id="skills" title="Toolkit" intro="The languages and tools I use day to day.">
      <div className="space-y-10">
        {skills.map((g) => (
          <div key={g.group}>
            <h3 className="mb-4 text-muted">{g.group}</h3>
            <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {g.items.map((s) => (
                <li
                  key={s.name}
                  className="group flex flex-col items-center gap-3 rounded-xl border border-line bg-raised px-3 py-5 text-sm transition-transform duration-300 ease-out-soft hover:-translate-y-1"
                >
                  <img
                    src={s.icon}
                    alt=""
                    width="36"
                    height="36"
                    loading="lazy"
                    className={`h-9 w-9 object-contain transition-transform duration-300 ease-out-soft group-hover:scale-110 ${s.mono ? 'dark:invert' : ''}`}
                  />
                  <span className="text-center font-medium">{s.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
