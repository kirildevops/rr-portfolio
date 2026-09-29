import { Outlet } from 'react-router'

const HomeLayout = () => {
  return (
    <>
      <section>
        <Outlet />
      </section>
    </>
  )
}

export default HomeLayout
