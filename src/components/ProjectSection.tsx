/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Modal from "./ui/Modal";
import { useRouter } from "next/navigation";

const projects = [
  {
    title: "Mental-Hack API",
    description: "Project API at Skilvul Tech For Impact",
    techStack: ["Express Js", "Mongoose", "MongoDB", "Tailwind"],
    screenshot: "images/mental-hack.png", // Ganti dengan path gambar yang benar
    link: "https://github.com/Skilvul-FEBE-3/FinalProject-BE",
  },
  {
    title: "Elise Project API",
    description: "Project API at Bangkit Cloud Compputing",
    techStack: ["Express Js", "Sequelize", "JWT", "Mysql", "Axios"],
    screenshot: "/images/elise-project.png", // Ganti dengan path gambar yang benar
    link: "https://github.com/kuli-4-0/Backend",
  },
  {
    title: "Fullstack Rumah Cinta",
    description: "My Project ",
    techStack: ["Express Js", "Mongoose", "MongoDB", "Tailwind"],
    screenshot: "images/rumah-cinta.png", // Ganti dengan path gambar yang benar
    link: "https://github.com/Skilvul-FEBE-3/FinalProject-BE",
  },
  {
    title: "HRIS System API",
    description: "A web-based HR management solution.",
    techStack: ["Nest Js", "TypeOrm", "Tailwind CSS"],
    screenshot: "/ss.png", // Ganti dengan path gambar yang benar
    link: "",
  },
  // Tambahkan proyek lainnya di sini
];

export default function ProjectSection() {
  const [selectedProject, setSelectedProject] = useState(null);
  const router = useRouter();

  // Open modal with selected project
  const openModal = (project: any) => {
    setSelectedProject(project);
    router.push(`?modal=${project.title}`);
  };

  // Close modal and go back to projects list
  const closeModal = () => {
    setSelectedProject(null);
    router.push("");
  };
  return (
    <section className="min-h-screen p-10 text-center bg-white pt-20">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.2 }, // Instant hover effect
            }}
            whileTap={{
              scale: 0.95,
              transition: { duration: 0.2 }, // Instant tap effect
            }}
            onHoverStart={() => console.log("hover started!")}
            onClick={() => openModal(project)}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative bg-gray-100 rounded-lg shadow-md overflow-hidden"
          >
            {/* Screenshot Layer */}
            <div className="relative group">
              <div className="w-full h-full bg-cover bg-center relative overflow-hidden rounded-md">
                <Image
                  width={500}
                  height={500}
                  src={project.screenshot}
                  alt={project.title}
                  className="object-cover w-full h-60"
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
      {/* Render Modal if project is selected and query `modal` exists */}
      {selectedProject && (
        <Modal project={selectedProject} onClose={closeModal} />
      )}
    </section>
  );
}
