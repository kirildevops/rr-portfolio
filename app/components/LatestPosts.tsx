import type { PostMeta } from '~/types'
import PostCard from './PostCard'

interface LatestPostsProps {
  posts: PostMeta[]
  count?: number
}

const LatestPosts = ({ posts, count = 3 }: LatestPostsProps) => {
  const latest = posts.slice(0, count)
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold mb-6 text-white">Latest Posts</h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {latest.map(p => (
          <PostCard key={p.id} post={p} />
        ))}
      </div>
    </section>
  )
}

export default LatestPosts
