import type { Route } from './+types/index'
import Hero from '../../components/Hero'

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Welcome' },
    { name: 'description', content: 'Welcome to React Router!' },
  ]
}

const text =
  'I build friendly web experiences and help others become confident modern developers'

export default function Home() {
  // console.log('blah')
  return (
    <section>
      <Hero name="Kd" text={text} />
    </section>
  )
}
