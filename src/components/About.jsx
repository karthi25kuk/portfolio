function About() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      
      {/* Title */}
      <h1 className="text-4xl font-bold text-center mb-10 text-white">
        About Me
      </h1>

      {/* Full Width Paragraph */}
      <div className="mb-12">
        <p className="text-gray-300 text-lg leading-relaxed text-center md:text-left">
          I'm a passionate Electronics and Communication Engineer with a keen
          interest in software development. My journey in tech began during my
          engineering studies, where I discovered the power of programming to
          solve real-world problems. I specialize in frontend development, with expertise in modern web
          technologies and a strong foundation in problem-solving. I'm always
          eager to learn new technologies and tackle challenging projects.
        </p>
      </div>

      {/* Main Split Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">

        {/* LEFT SIDE - 3/4 */}
        <div className="lg:col-span-3 space-y-10">

          {/* Marks Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* 10th */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-800 rounded-2xl p-6 text-center hover:border-blue-500 transition">
              <h2 className="text-lg text-gray-400 mb-2">
                10th Score
              </h2>
              <p className="text-3xl font-bold text-green-300">
                PASS
              </p>
            </div>

            {/* 12th */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-800 rounded-2xl p-6 text-center hover:border-blue-500 transition">
              <h2 className="text-lg text-gray-400 mb-2">
                12th Score
              </h2>
              <p className="text-3xl font-bold text-green-300">
                544 / 600
              </p>
            </div>

            {/* CGPA */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-800 rounded-2xl p-6 text-center hover:border-blue-500 transition">
              <h2 className="text-lg text-gray-400 mb-2">
                CGPA
              </h2>
              <p className="text-3xl font-bold text-green-300">
                8.08 / 10
              </p>
            </div>

          </div>

          {/* Traits Section */}
          <div className="flex flex-wrap justify-center gap-4 bg-gradient-to-br from-gray-800 to-gray-900 py-8 lg:py-15 px-6 rounded-2xl border border-gray-800 hover:border-blue-500 transition">

            <div className="min-w-[160px] bg-gradient-to-r from-gray-500 to-gray-600 text-white px-5 py-3 rounded-full font-medium shadow-lg hover:text-amber-300 transition">
              Problem Solver
            </div>

            <div className="bg-gradient-to-r from-gray-500 to-gray-600 text-white px-5 py-3 rounded-full font-medium shadow-lg hover:text-amber-300 transition">
              Team Player
            </div>

            <div className="bg-gradient-to-r from-gray-500 to-gray-600 text-white px-5 py-3 rounded-full font-medium shadow-lg hover:text-amber-300 transition">
              Quick Learner
            </div>

            <div className="min-w-[160px] bg-gradient-to-r from-gray-500 to-gray-600 text-white px-5 py-3 rounded-full font-medium shadow-lg hover:text-amber-300 transition">
              Coding Enthusiast
            </div>

          </div>

        </div>

        {/* RIGHT SIDE - Quick Facts */}
        <div className="lg:col-span-1">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 h-full hover:border-blue-500 transition">

            <h3 className="text-2xl font-semibold text-sky-400 mb-6">
              Quick Facts
            </h3>

            <div className="space-y-5">

              <div className="flex justify-between gap-4">
                <span className="text-gray-400">Location</span>
                <span className="text-white text-right">
                  Virudhunagar, India
                </span>
              </div>

              <div className="flex justify-between gap-4">
                <span className="text-gray-400">Experience</span>
                <span className="text-white">
                  Entry Level
                </span>
              </div>

              <div className="flex justify-between gap-4">
                <span className="text-gray-400">Education</span>
                <span className="text-white">
                  B.E. ECE
                </span>
              </div>

              <div className="flex justify-between gap-4">
                <span className="text-gray-400">Interests</span>
                <span className="text-white text-right">
                  Coding, Web Development
                </span>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default About;