import { Mail, MapPin, Share2, Code, Phone } from "lucide-react";

function Contact() {
  return (
    <section className=" bg-black py-16 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
          Get In Touch
        </h2>
        <p className="text-gray-400 text-center mb-12 text-lg max-w-2xl mx-auto">
          I'm open to opportunities and collaborations. Reach out through any platform below.
        </p>

        <div className="grid md:grid-cols-2 gap-10">

          {/* LEFT SIDE */}
          <div className="space-y-10">

            {/* Contact Info */}
            <div className="bg-gray-900 border border-gray-800 lg:p-6 rounded-2xl">
              <h3 className="text-xl font-semibold text-sky-400 mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400">
                    <Mail />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <a
                      href="mailto:karthikeyankannan.vnr@gmail.com"
                      className="text-white hover:text-blue-400 transition"
                    >
                      karthikeyankannan.vnr@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400">
                    <Phone />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <p className="text-white">+91 9360126109</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400">
                    <MapPin />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white">Virudhunagar, India</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Social Links */}
            <div className="bg-gray-900 border border-gray-800 p-6 rounded-2xl">
              <h3 className="text-xl font-semibold text-sky-400 mb-6">
                Connect With Me
              </h3>

              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="https://www.linkedin.com/in/karthikeyan-k-2b4a6527a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-5 py-3 bg-blue-600 rounded-lg text-white hover:bg-blue-700 transition min-w-[180px]"
                >
                  <Share2 size={18} /> LinkedIn
                </a>

                <a
                  href="https://github.com/karthi25kuk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-5 py-3 bg-gray-800 rounded-lg text-white hover:bg-gray-700 transition min-w-[180px]"
                >
                  <Code size={18} /> GitHub
                </a>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE (NO BACKEND FORM) */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800 p-8 rounded-2xl flex flex-col justify-center items-center text-center">

            <h3 className="text-2xl font-semibold text-white mb-4">
              Let’s Work Together
            </h3>

            <p className="text-gray-400 mb-8 max-w-sm">
              Since this is a frontend project, use email or LinkedIn to reach out directly.
            </p>

            <a
              href="mailto:karthikeyankannan.vnr@gmail.com"
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg text-white font-semibold hover:scale-105 transition"
            >
              Send Email
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;