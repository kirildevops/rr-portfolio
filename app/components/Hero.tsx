import { Link } from 'react-router'

const Hero = () => {
  return (
    <header className="text-center py-20 px-4 bg-gray-900 text-white transition-colors duration-300">
      <h2 className="text-4xl font-bold mb-4">Hey, I'm K</h2>
      <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-6">
        I build friendly web experiences and help others become confident modern
        developers
      </p>
      <div className="flex justify-center gap-4">
        <Link to="/projects">View Projects</Link>
      </div>
    </header>
  )
}

export default Hero
