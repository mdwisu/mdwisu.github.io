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
  {
    title: "Shiny App",
    description: "Data visualization for academic research.",
    techStack: ["R", "Shiny", "Plotly"],
    screenshot: "/ss.png", // Ganti dengan path gambar yang benar
  },
  {
    title: "Shiny App",
    description: "Data visualization for academic research.",
    techStack: ["R", "Shiny", "Plotly"],
    screenshot: "/ss.png", // Ganti dengan path gambar yang benar
  },
  {
    title: "Shiny App",
    description: "Data visualization for academic research.",
    techStack: ["R", "Shiny", "Plotly"],
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

export default function ProjectSection() {
  return (
    <section className="min-h-screen p-10 text-center bg-white pt-20">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }} // Animasi dimulai dari kiri atau kanan
            whileInView={{ opacity: 1, x: 0 }} // Animasi bergerak ke tengah
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }} // Hanya animasi pertama kali terlihat
            className="relative p-4 bg-gray-100 rounded-lg shadow-md overflow-hidden"
          >
            {/* Screenshot Layer */}
            <div className="relative group">
              <div className="w-full h-full bg-cover bg-center relative overflow-hidden rounded-md">
                <Image
                  width={500}
                  height={500}
                  src={project.screenshot}
                  alt={project.title}
                  className="object-cover w-full h-full"
                />
                {/* Background Blur Effect */}
                <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-md opacity-100 group-hover:opacity-0 transition-opacity duration-300"></div>
                {/* Tech Stack Text */}
                {/* Title and Description */}
                <div className="absolute inset-0 flex items-center justify-center text-center opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                  <div className="flex flex-col items-center">
                    <h2 className="text-2xl font-bold">{project.title}</h2>
                    <p className="text-gray-400">{project.description}</p>
                    <div className="p-4 rounded-lg shadow-lg">
                      <h3 className="text-lg font-semibold">Built With:</h3>
                    </div>
                    <ul className="text-sm flex justify-center items-center gap-2">
                      {project.techStack.map((tech, i) => (
                        <li key={i} className="font-medium">
                          <span className="p-2 bg-gray-200 rounded text-black">
                            {tech}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
