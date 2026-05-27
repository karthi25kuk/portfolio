import { Code, Server, Wrench, Cpu } from "lucide-react";

function Skills() {
  const skills = [
    {
      title: "Frontend",
      icon: <Code size={22} />,
      items: ["HTML", "CSS", "JavaScript", "React", "Tailwind"]
    },
    {
      title: "Backend",
      icon: <Server size={22} />,
      items: ["Node.js", "Express", "MongoDB"]
    },
    {
      title: "Tools",
      icon: <Wrench size={22} />,
      items: ["Git", "GitHub", "VS Code"]
    },
    {
      title: "Languages",
      icon: <Cpu size={22} />,
      items: ["Python", "C", "C++", "Java", "JavaScript"]
    }
  ];

  return (
    <section className=" bg-gradient-to-b from-black via-black/50 to-black px-6 mt-30">
      <div className="max-w-6xl mx-auto">
        
        <h1 className="text-4xl text-white text-center font-bold mb-20">
          Skills & Technologies
        </h1>

        <div className="grid md:grid-cols-2 gap-10">
          {skills.map((category, index) => (
            <div
              key={index}
              className="group relative bg-gray-900/60 backdrop-blur-lg border border-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-sky-500/10 hover:-translate-y-2 transition-all duration-300"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-r from-sky-500/10 to-blue-500/10 blur-xl"></div>

              {/* Header */}
              <div className="flex items-center gap-3 mb-5 relative z-10">
                <div className="text-sky-400">{category.icon}</div>
                <h2 className="text-xl font-semibold text-white">
                  {category.title}
                </h2>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-3 relative z-10">
                {category.items.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-1.5 text-sm rounded-full bg-gray-800/80 border border-gray-700 text-gray-300 hover:bg-sky-500 hover:text-white transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;