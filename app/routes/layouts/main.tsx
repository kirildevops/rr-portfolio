import type { Route } from '../about/+types'

import { Outlet } from 'react-router'

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'RR Portfolio' },
    { name: 'description', content: 'Welcome to React Router!' },
  ]
}

const MainLayout = () => {
  return (
    <>
      <section className="max-w-6xl mx-auto px-6 my-8">
        <Outlet />
      </section>
    </>
  )
}

export default MainLayout
