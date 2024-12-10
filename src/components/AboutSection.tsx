import React from "react";
import { motion } from "framer-motion";
import {
  FaCss3Alt,
  FaHtml5,
  FaJsSquare,
  FaNodeJs,
  FaGit,
  FaDocker,
} from "react-icons/fa";
import {
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiMongodb,
  SiBootstrap,
  SiFigma,
  SiFirebase,
  SiMysql,
  SiPhp,
  SiLaravel,
} from "react-icons/si";

const skills = [
  { icon: <FaHtml5 />, name: "HTML", color: "text-orange-500" },
  { icon: <FaCss3Alt />, name: "CSS", color: "text-blue-500" },
  { icon: <FaJsSquare />, name: "JavaScript", color: "text-yellow-500" },
  { icon: <SiTypescript />, name: "TypeScript", color: "text-blue-400" },
  { icon: <SiReact />, name: "React", color: "text-blue-600" },
  { icon: <FaNodeJs />, name: "Node.js", color: "text-green-600" },
  { icon: <SiTailwindcss />, name: "Tailwind CSS", color: "text-teal-500" },
  { icon: <SiMongodb />, name: "MongoDB", color: "text-green-700" },
  { icon: <SiBootstrap />, name: "Bootstrap", color: "text-purple-500" },
  { icon: <FaGit />, name: "Git", color: "text-orange-700" },
  { icon: <FaDocker />, name: "Docker", color: "text-cyan-500" },
  { icon: <SiFigma />, name: "Figma", color: "text-purple-400" },
  { icon: <SiFirebase />, name: "Firebase", color: "text-yellow-500" },
  { icon: <SiMysql />, name: "MySQL", color: "text-blue-700" },
  { icon: <SiPhp />, name: "PHP", color: "text-blue-800" },
  { icon: <SiLaravel />, name: "Laravel", color: "text-red-600" },
];

export default function AboutSection() {
  return (
    <section className="bg-white min-h-screen">
      <section
        data-scroll
        data-scroll-speed="4"
        className="p-10 text-center min-h-screen"
      >
        {/* Judul Section */}
        <motion.h1
          className="text-3xl font-semibold text-gray-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          About Me
        </motion.h1>

        {/* Deskripsi */}
        <motion.p
          className="mt-4 text-lg text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          I am a recent Information Systems graduate from Bogor, Indonesia,
          specializing in full-stack development.
        </motion.p>

        {/* Skill Section */}
        <motion.div
          className="mt-10 grid grid-cols-4 gap-10 justify-items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {skills.map((skill, index) => (
            <div key={index} className="text-center flex flex-col items-center justify-center">
              <motion.div
                className={`text-5xl ${skill.color}`}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                {skill.icon}
              </motion.div>
              <p className="mt-2 text-lg text-gray-700">{skill.name}</p>
            </div>
          ))}
        </motion.div>
      </section>
    </section>
  );
}
