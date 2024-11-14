"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";

const projects = [
  { title: "HRIS System", description: "A web-based HR management solution." },
  {
    title: "Shiny App",
    description: "Data visualization for academic research.",
  },
  // Tambahkan proyek lainnya di sini
];

export default function Home() {
  return (
    <>
      {/* Floating Items */}
      <div className="fixed bottom-10 right-10 flex flex-col space-y-4">
        <a
          href="https://linkedin.com/in/username" // Ganti dengan link LinkedIn Anda
          target="_blank"
          rel="noopener noreferrer"
          className=" text-white rounded-full p-3 shadow-lg hover:bg-blue-600 hover:text-white transition duration-300"
        >
          <IoLogoLinkedin size={24} />
        </a>
        <a
          href="https://github.com/username" // Ganti dengan link GitHub Anda
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 text-white rounded-full p-3 shadow-lg hover:bg-gray-900 transition"
        >
          <IoLogoGithub size={24} />
        </a>
      </div>
      <nav className="px-16 py-10 bg-gray-800 text-white flex justify-between items-center space-x-4">
        <div>
          <span className="font-bold text-6xl">Santo</span>
        </div>
        <div className="flex space-x-4">
          <Link href="#projects">Projects</Link>
          <Link href="#about">About</Link>
          <Link href="#contact">Contact</Link>
        </div>
        <div>
          {/* link to linkedin */}
          <Link href="https://www.linkedin.com/in/muhammad-dwi-susanto-684298201/">
            Resume
          </Link>
        </div>
        {/* button resume */}
      </nav>
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold text-gray-800">
            Hi, I&apos;m Muhammad Dwi Susanto!
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            A full-stack developer passionate about creating web solutions.
          </p>
        </motion.div>
      </main>
      {/* projects */}
      <section className="p-10 text-center bg-white">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="p-6 bg-gray-100 rounded-lg shadow-md"
            >
              <h2 className="text-2xl font-bold text-gray-700">
                {project.title}
              </h2>
              <p className="text-gray-600">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
      {/* about */}
      <section className="p-10 text-center bg-white">
        <h1 className="text-3xl font-semibold text-gray-800">About Me</h1>
        <p className="mt-4 text-lg text-gray-600">
          I am a recent Information Systems graduate from Bogor, Indonesia,
          specializing in full-stack development.
        </p>
      </section>
    </>
  );
}
