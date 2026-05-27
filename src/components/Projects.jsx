import Projectcard from "./Projectcard";

function Projects() {
  return (
    <>
      <div className="bg-black flex flex-col items-center mt-30">
        <h1 className="text-4xl text-white text-center font-bold">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 w-full max-w-7xl px-6">
          <Projectcard
            title="Low Power 8-Bit Ripple Carry Adder Using VLSI"
            description="Developed and implemented various 8-bit Ripple Carry Adder (RCA) architectures, conducted comparative analysis of power consumption, and determined the most power-efficient and high-performance design using simulation and performance benchmarking."
            projecturl="https://drive.google.com/file/d/1H_oV4tTZDC67i3a3CrQc0uZLL2j-K2iv/view?usp=sharing"
            type="hardware"
            classification="Academic"
          />
          <Projectcard
            title="Academic Industry Partnership Portal"
            description="A web-based platform developed to connect academic institutions and industries, enabling students to apply for internships and projects, companies to post opportunities, and colleges to track student participation and progress. Implemented using React.js,Tailwind CSS,Node.js,Express.js and MongoDB."
            projecturl="https://github.com/karthi25kuk/AIPportal"
            type="software"
            classification="Academic"
          />
          <Projectcard
            title="Portfolio Website"
            description="A modern and responsive portfolio website built using React and Tailwind CSS, showcasing projects, technical skills, and professional experience through an interactive and user-friendly interface. Features include smooth navigation, responsive design for multiple devices, reusable React components, and clean modern styling for enhanced user engagement."
            projecturl="https://github.com/yourusername/portfolio-website"
            type="software"
            classification="Personal"
          />
        </div>
      </div>
    </>
  );
}
export default Projects;
