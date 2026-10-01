import type { Route } from './+types/index'

import type { Project } from '~/types'

export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ projects: Project[] }> {
  const res = await fetch('http://localhost:9000/projects')
  const data = await res.json()

  return { projects: data }
}

const ProjectsPage = ({ loaderData }: Route.ComponentProps) => {
  const { projects } = loaderData as { projects: Project[] }
  // console.log(projects)
  return (
    <>
      <h2 className="text-3xl text-white font-bold mb-8">My Projects</h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map(project => (
          <div
            key={project.id}
            className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden shadow-sm transition hover:shadow-md"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-5">
              <h3 className="text-3xl font-semibold text-blue-400 mb-1">
                {project.title}
              </h3>
              <p className="text-sm text-gray-300 mb-2">
                {project.description}
              </p>
              <div className="flex justify-between items-center text-sm text-gray-400">
                <span>{project.category}</span>
                <span>
                  {new Date(project.date).toLocaleDateString('uk-UA', {
                    day: '2-digit',
                    month: 'short',
                    year: 'numeric',
                  })}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default ProjectsPage
