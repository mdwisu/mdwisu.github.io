"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "HRIS System",
    description: "A web-based HR management solution.",
    techStack: ["Next.js", "MongoDB", "Tailwind CSS"],
    screenshot: "/ss.png", // Ganti dengan path gambar yang benar
  },
  {
    title: "Shiny App",
    description: "Data visualization for academic research.",
    techStack: ["R", "Shiny", "Plotly"],
    screenshot: "/ss.png", // Ganti dengan path gambar yang benar
  },
  // Tambahkan proyek lainnya di sini
];

export default function ProjectPage() {
  return (
    <section className="min-h-screen p-10 text-center bg-white">
      <div data-scroll data-scroll-speed="3">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative p-4 bg-gray-100 rounded-lg shadow-md overflow-hidden"
            >
              {/* Screenshot Layer */}
              <div className="relative group">
                <Image
                  width={500}
                  height={500}
                  src={project.screenshot}
                  alt={project.title}
                  className="rounded-md w-full h-48 object-cover"
                />
                {/* Layer di atas gambar */}
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white text-gray-800 p-4 rounded-lg shadow-lg">
                    <h3 className="text-lg font-semibold mb-2">Built With:</h3>
                    <ul className="space-y-1 text-sm">
                      {project.techStack.map((tech, i) => (
                        <li key={i} className="font-medium">
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Title and Description */}
              <div className="mt-4">
                <h2 className="text-2xl font-bold text-gray-700">
                  {project.title}
                </h2>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
