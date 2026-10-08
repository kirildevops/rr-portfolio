import FeaturedProjects from '~/components/FeaturedProjects'
import type { Route } from './+types/index'

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Welcome' },
    { name: 'description', content: 'Welcome to React Router!' },
  ]
}

const HomePage = () => {
  return (
    <>
      <FeaturedProjects />
    </>
  )
}

export default HomePage
