import type { Route } from './+types'
import type { PostMeta } from '~/types'
import { Link } from 'react-router'
import { article } from 'framer-motion/client'

export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ posts: PostMeta[] }> {
  const url = new URL('/posts-meta.json', request.url)
  const res = await fetch(url.href)

  if (!res.ok) throw new Error('Failed to fetch data')

  const data = await res.json()

  return { posts: data }
}

const BlogPage = ({ loaderData }: Route.ComponentProps) => {
  const { posts } = loaderData
  return (
    <div className="max-w-3xl mx-auto mt-10 px-6 py-6 bg-gray-900">
      <h2 className="text-3xl text-white font-bold mb-8">My blog</h2>
      {posts.map(post => (
        <article
          key={post.slug}
          className="bg-gray-800 p-6 rounded-lg shadow mb-4"
        >
          <h3 className="text-2xl font-semibold text-blue-400">{post.title}</h3>
          <p className="text-sm text-gray-400 mb-2">
            {new Date(post.date).toLocaleDateString('en-GB', {
              day: '2-digit',
              month: 'short',
              year: 'numeric',
            })}
          </p>
          <p className="text-gray-300 mb-4">{post.excerpt}</p>
          <Link
            to={`/blog/${post.slug}`}
            className="text-blue-300 text-sm hover:underline"
          >
            Read More
          </Link>
        </article>
      ))}
    </div>
  )
}

export default BlogPage
