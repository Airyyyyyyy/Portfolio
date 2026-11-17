import Section from '../components/Section'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/portfolio'

export default function Projects() {
  return (
    <Section id="projects" title="Projects" intro="Selected work, with links to the live site and the code.">
      <ul>
        {projects.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} />
        ))}
      </ul>
    </Section>
  )
}
