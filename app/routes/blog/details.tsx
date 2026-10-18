import ReactMarkdown from 'react-markdown'
import type { Route } from './+types/details'
import type { PostMeta } from '~/types'

export async function loader({ request, params }: Route.LoaderArgs) {
  const { slug } = params

  const url = new URL('/posts-meta.json', request.url)
  const res = await fetch(url.href)

  if (!res.ok) throw new Error('Failed to fetch data')
  const index = await res.json()

  const postMeta = index.find((post: PostMeta) => post.slug === slug)

  if (!postMeta) throw new Response('Not Found', { status: 404 })

  //Dynamically import raw markdown
  const markdown = await import(`../../posts/${slug}.md?raw`)
  return {
    postMeta,
    markdown: markdown.default,
  }
}

interface BlogPostDetailsPageProps {
  loaderData: {
    postMeta: PostMeta
    markdown: string
  }
}

const BlogPostDetailsPage = ({ loaderData }: BlogPostDetailsPageProps) => {
  const { postMeta, markdown } = loaderData
  // console.log(postMeta, markdown)

  return (
    <div className="max-w-3xl mx-auto px-6 py-12 bg-gray-900">
      <h1 className="text-3xl font-bold text-blue-400 mb-2">
        {postMeta.title}
      </h1>
    </div>
  )
}

export default BlogPostDetailsPage
