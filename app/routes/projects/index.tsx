import { useState } from 'react'
import type { Route } from './+types/index'

import type { Project } from '~/types'

import ProjectCard from '~/components/ProjectCard'
import Pagination from '~/components/Pagination'

import { motion, AnimatePresence } from 'motion/react'

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'RR Portfolio | Projects' },
    { name: 'description', content: 'My projects portfolio!' },
  ]
}

export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ projects: Project[] }> {
  const res = await fetch('http://localhost:9000/projects')
  const data = await res.json()

  return { projects: data }
}

const ProjectsPage = ({ loaderData }: Route.ComponentProps) => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [currentPage, setCurrentPage] = useState(1)
  const projectsPerPage = 5

  const { projects } = loaderData as { projects: Project[] }

  //get unique categories
  const categories = ['All', ...new Set(projects.map(p => p.category))]

  // filter projects based on category
  const fP =
    selectedCategory === 'All'
      ? projects
      : projects.filter(p => p.category === selectedCategory)

  // calc total pages
  const totalPages = Math.ceil(fP.length / projectsPerPage)
  // get current pages projects
  const indexOfLast = currentPage * projectsPerPage
  const indexOfFirst = indexOfLast - projectsPerPage
  const currentProjects = fP.slice(indexOfFirst, indexOfLast)

  return (
    <>
      <h2 className="text-3xl text-white font-bold mb-8">My Projects</h2>

      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => {
              setSelectedCategory(cat)
              setCurrentPage(1)
            }}
            className={`px-3 py-1 rounded text-sm cursor-pointer ${selectedCategory === cat ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-200'}`}
          >
            {cat}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div layout className="grid gap-6 sm:grid-cols-2">
          {currentProjects.map(project => (
            <motion.div key={project.id} layout>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </>
  )
}

export default ProjectsPage
