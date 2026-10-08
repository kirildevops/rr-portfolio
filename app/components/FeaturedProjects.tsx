import type { Project } from '~/types'
import ProjectCard from './ProjectCard'

interface FeaturedProjectsProps {
  projects: Project[]
  count: number
}

const FeaturedProjects = ({ projects, count }: FeaturedProjectsProps) => {
  const feat = projects.filter(p => p.featured === true)
  const featured = feat.slice(0, count)
  return (
    <section>
      <h2 className="text-2xl font-bold mb-6 text-gray-200">
        * Featured Projects
      </h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {featured.map(p => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  )
}

export default FeaturedProjects
