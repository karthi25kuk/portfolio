import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-black text-white scroll-smooth">
      
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center">
        <Hero />
      </section>

      {/* About Section */}
      <section id="about" className="py-10">
        <About />
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16">
        <Projects />
      </section>

      {/* Future Sections */}
      
      <section id="skills" className="py-16">
        <Skills />
      </section>
      
      <section id="contact" className="py-10">
        <Contact />
      </section>
    
      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2026 Karthikeyan K. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Built with React & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;