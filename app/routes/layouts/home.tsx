import { Outlet } from 'react-router'
import Hero from '../../components/Hero'

const text =
  'I build friendly web experiences and help others become confident modern developers'

const HomeLayout = () => {
  return (
    <>
      <Hero name="Kd" text={text} />

      <section className="max-w-6xl mx-auto px-6 my-8">
        <Outlet />
      </section>
    </>
  )
}

export default HomeLayout
