import { useState } from 'react'
import type { Route } from './+types/index'
import type { PostMeta } from '~/types'
import PostCard from '~/components/PostCard'
import Pagination from '~/components/Pagination'
import PostFilter from '~/components/PostFilter'

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
  const [currPage, setCurrPage] = useState(1)
  const [searchQuery, setSearchQuery] = useState('')

  const { posts } = loaderData
  const postsPerPage = 10

  const filteredPosts = posts.filter(post => {
    const query = searchQuery.toLowerCase()

    return (
      post.title.toLowerCase().includes(query) ||
      post.excerpt.toLowerCase().includes(query)
    )
  })

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage)
  const indexOfLast = currPage * postsPerPage
  const indexOfFirst = indexOfLast - postsPerPage
  const currPosts = filteredPosts.slice(indexOfFirst, indexOfLast)

  return (
    <div className="max-w-3xl mx-auto mt-10 px-6 py-6 bg-gray-900">
      <h2 className="text-3xl text-white font-bold mb-8">My blog</h2>
      <PostFilter
        searchQuery={searchQuery}
        onSearchChange={query => {
          setSearchQuery(query)
          setCurrPage(1)
        }}
      />
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
