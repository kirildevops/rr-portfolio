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
          </div>
        ))}
      </div>
    </>
  )
}

export default ProjectsPage
