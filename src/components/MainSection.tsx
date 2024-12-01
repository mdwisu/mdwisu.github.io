"use client";
// import { useCursor } from "@/components/cursor/CursorContext";
import React from "react";
import { motion } from "framer-motion";
import Magnet from "@/components/Magnet";

export default function MainSection() {
  // const { setCursorType } = useCursor();
  return (
    <div className="min-h-screen bg-gray-800">
      <Magnet strength={50}>
        {
          <main
            // onMouseEnter={() => setCursorType("hover")}
            // onMouseLeave={() => setCursorType("default")}
            className="flex flex-col items-center justify-center min-h-screen"
          >
            <motion.div
              data-scroll
              data-scroll-speed="8"
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h1 className="text-4xl font-bold text-gray-100">
                Hi, I&apos;m Muhammad Dwi Susanto!
              </h1>
              <p className="mt-4 text-lg text-gray-300">
                A full-stack developer passionate about creating web solutions.
              </p>
            </motion.div>
          </main>
        }
      </Magnet>
    </div>
  );
}
