import type { Route } from './+types/index'
import FeaturedProjects from '~/components/FeaturedProjects'
import AboutPreview from '~/components/AboutPreview'
import type { Project, PostMeta, StrapiProject, StrapiResponse } from '~/types'
import LatestPosts from '~/components/LatestPosts'

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Welcome' },
    { name: 'description', content: 'Welcome to React Router!' },
  ]
}

export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ projects: Project[]; posts: PostMeta[] }> {
  const url = new URL(request.url)

  const [projectRes, postRes] = await Promise.all([
    fetch(
      `${import.meta.env.VITE_API_URL}/projects?filters[featured][$eq]=true&populate=*`
    ),
    fetch(new URL('/posts-meta.json', url)),
  ])

  if (!projectRes.ok) {
    throw new Error('Failed to fetch projects')
  }
  if (!postRes.ok) {
    throw new Error('Failed to fetch posts')
  }

  // const [projects, posts] = await Promise.all([
  //   projectRes.json(),
  //   postRes.json(),
  // ])

  const postJson = await postRes.json()
  const projectJson: StrapiResponse<StrapiProject> = await projectRes.json()

  const projects = projectJson.data.map(item => ({
    id: item.id,
    documentId: item.documentId,
    title: item.title,
    description: item.description,
    image: item.image?.url
      ? `${import.meta.env.VITE_STRAPI_URL}${item.image.url}`
      : '/images/no-image.png',
    url: item.url,
    date: item.date,
    category: item.category,
    featured: item.featured,
  }))

  return { projects, posts: postJson }
}

const HomePage = ({ loaderData }: Route.ComponentProps) => {
  const { projects, posts } = loaderData
  return (
    <>
      <FeaturedProjects projects={projects} count={2} />
      <AboutPreview />
      <LatestPosts posts={posts} />
    </>
  )
}

export default HomePage
