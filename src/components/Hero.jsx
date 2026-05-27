function Hero() {
  return (
    <section className="bg-gradient-to-br from-black via-black/50 to-black w-full grid md:grid-cols-2 items-center px-6 md:px-16">

      <div className="space-y-6">
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-yellow-200 to-orange-400 bg-clip-text text-transparent">
          KARTHIKEYAN K
        </h1>

        <h3 className="text-gray-300 text-xl md:text-2xl font-medium">
          Electronics And Communication Engineer
        </h3>

        <p className="text-gray-400 leading-relaxed text-lg max-w-lg">
          Motivated engineering graduate seeking an entry-level role in the IT domain,
          with strong foundations in programming, data structures, and problem-solving.
          Skilled in developing efficient and scalable software solutions, with hands-on
          experience in modern technologies and application development.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <a
            href="#projects"
            className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="border-2 border-gray-600 text-gray-300 px-8 py-3 rounded-full font-semibold hover:border-blue-400 hover:text-blue-400 transition-all duration-300"
          >
            Get In Touch
          </a>
        </div>
      </div>

      <div className="flex justify-center mt-12 md:mt-0">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-xl opacity-30"></div>
          <img
            src="src/assets/ChatGPT Image Apr 29, 2026, 09_28_52 PM.png"
            alt="profile"
            className="relative w-80 md:w-96 rounded-2xl shadow-2xl border-4 border-gray-800"
          />
        </div>
      </div>

    </section>
  );
}

export default Hero;