const AboutPage = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 bg-gray-900">
      {/* Intro */}
      <div className="flex flex-col md:flex-row md:items-start items-center gap-10 mb-12">
        <img
          src="/images/profile.jpg"
          alt="profile"
          className="w-40 h-40 rounded-full object-cover border-4 border-blue-500 shadow-md"
        />
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Hey I'm Kiril</h1>
          <p className="text-gray-300 text-lg">
            I'm passionate web developer and content creator who loves building
            friendly digital experiences and helping others grow into confident,
            modern developers
          </p>
        </div>
      </div>
      {/* Bio */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-white mb-4">My Mission</h2>
        <p className="text-gray-300 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
          voluptas. Vitae necessitatibus ad hic voluptas sequi ratione autem
          consectetur eius ut quod tempora, neque reprehenderit sapiente atque
          omnis obcaecati aspernatur eaque quam architecto similique! Architecto
          nam numquam asperiores corporis doloremque.
        </p>
      </div>
      {/* Tech Stack */}
      <h2 className="text-2xl font-semibold text-white mb-4">Tech I Use</h2>
      <ul className="flex flex-wrap gap-4 text-sm text-gray-300">
        {[
          'Lorem',
          'ipsum',
          'dolor',
          'sit',
          'amet',
          'consectetur',
          'adipisicing',
          'elit',
        ].map(t => (
          <li key={t} className="bg-gray-700 px-3 py-1 rounded-md">
            {t}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AboutPage
