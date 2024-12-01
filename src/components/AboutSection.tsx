import React from "react";
import { motion } from "framer-motion";
import { FaCss3Alt, FaHtml5, FaJsSquare } from "react-icons/fa";

export default function AboutSection() {
  return (
    <>
      <section className="p-10 text-center bg-white min-h-screen">
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
        I am a recent Information Systems graduate from Bogor, Indonesia, specializing in full-stack development.
      </motion.p>

      {/* Skill Section */}
      <motion.div
        className="mt-10 grid grid-cols-3 gap-10 justify-items-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Skill Item: HTML */}
        <div className="text-center">
          <motion.div
            className="text-5xl text-orange-500"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <FaHtml5 />
          </motion.div>
          <p className="mt-2 text-lg text-gray-700">HTML</p>
        </div>

        {/* Skill Item: CSS */}
        <div className="text-center">
          <motion.div
            className="text-5xl text-blue-500"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <FaCss3Alt />
          </motion.div>
          <p className="mt-2 text-lg text-gray-700">CSS</p>
        </div>

        {/* Skill Item: JavaScript */}
        <div className="text-center">
          <motion.div
            className="text-5xl text-yellow-500"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <FaJsSquare />
          </motion.div>
          <p className="mt-2 text-lg text-gray-700">JavaScript</p>
        </div>
      </motion.div>
      </section>
    </>
  );
}
