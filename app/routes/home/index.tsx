import type { Route } from './+types/index'
import Hero from '../../components/Hero'

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Welcome' },
    { name: 'description', content: 'Welcome to React Router!' },
  ]
}

export default function Home() {
  // console.log('blah')
  return (
    <section>
      <Hero />
    </section>
  )
}
