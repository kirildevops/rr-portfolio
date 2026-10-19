import { useState } from 'react'
import type { Route } from './+types/index'
import type { PostMeta } from '~/types'
import PostCard from '~/components/PostCard'
import Pagination from '~/components/Pagination'

export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ posts: PostMeta[] }> {
  const url = new URL('/posts-meta.json', request.url)
  const res = await fetch(url.href)

  if (!res.ok) throw new Error('Failed to fetch data')

  const data = await res.json()

  data.sort((a: PostMeta, b: PostMeta) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })
  return { posts: data }
}

const BlogPage = ({ loaderData }: Route.ComponentProps) => {
  const { posts } = loaderData
  const [currPage, setCurrPage] = useState(1)
  const postsPerPage = 3

  const totalPages = Math.ceil(posts.length / postsPerPage)
  const indexOfLast = currPage * postsPerPage
  const indexOfFirst = indexOfLast - postsPerPage
  const currPosts = posts.slice(indexOfFirst, indexOfLast)

  return (
    <div className="max-w-3xl mx-auto mt-10 px-6 py-6 bg-gray-900">
      <h2 className="text-3xl text-white font-bold mb-8">My blog</h2>
      {currPosts.map(post => (
        <PostCard key={post.slug} post={post} />
      ))}

      {totalPages > 1 && (
        <Pagination
          currentPage={currPage}
          totalPages={totalPages}
          onPageChange={page => setCurrPage(page)}
        />
      )}
    </div>
  )
}

export default BlogPage
