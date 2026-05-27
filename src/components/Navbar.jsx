function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-gray-800">
      
      <nav className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        
        <h1 className="text-white text-xl font-bold tracking-wide">
          My Portfolio
        </h1>

        <ul className="hidden md:flex space-x-8 text-sm font-medium">
          <li>
            <a href="#home" className="text-gray-300 hover:text-blue-400 transition">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="text-gray-300 hover:text-blue-400 transition">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="text-gray-300 hover:text-blue-400 transition">
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" className="text-gray-300 hover:text-blue-400 transition">
              Skills
            </a>
          </li>
          <li>
            <a href="#contact" className="text-gray-300 hover:text-blue-400 transition">
              Contact
            </a>
          </li>
        </ul>

      </nav>
    </header>
  );
}

export default Navbar;