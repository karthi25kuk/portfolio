import React from "react";

function Projectcard({ title, description, projecturl, type, classification }) {
  return (
    <div className="relative border border-sky-400 bg-gray-950 p-6 rounded-xl shadow-lg hover:shadow-sky-500/20 transition duration-300">

      <span className="absolute -top-3 right-4 bg-sky-500 text-white text-sm px-4 py-1 rounded-full shadow-md">
        {classification}
      </span>

      <h1 className="text-2xl font-bold text-amber-300 mb-3">{title}</h1>

      <p className="text-gray-300 mb-4">{description}</p>

      {type === "software" && (
        <a
          href={projecturl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-blue-400 hover:text-blue-300 font-medium"
        >
          View Code →
        </a>
      )}
      {type === "hardware" && (
        <a
          href={projecturl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-green-400 hover:text-green-300 font-medium"
        >
          View Documentation →
        </a>
      )}
    </div>
  );
}

export default Projectcard;