"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
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
  );
}
