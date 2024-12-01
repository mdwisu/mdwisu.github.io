"use client";
// import { useCursor } from "@/components/cursor/CursorContext";
import { motion } from "framer-motion";
import Magnet from "@/components/Magnet";
import { useEffect, useState } from "react";

export default function MainSection() {
  // const { setCursorType } = useCursor();
  const [textIndex, setTextIndex] = useState(0);
  const text = "Hi, I'm Muhammad Dwi Susanto!";
  const typingSpeed = 150;
  const delayAfterTyping = 2000;
  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    let resetTimeoutId: NodeJS.Timeout;

    // Typing effect
    if (textIndex < text.length) {
      intervalId = setInterval(() => {
        setTextIndex((prevIndex) => prevIndex + 1);
      }, typingSpeed);
    } else {
      // Once typing is complete, reset after delay
      resetTimeoutId = setTimeout(() => {
        setTextIndex(0); // Reset the typing index to start from the beginning
      }, delayAfterTyping);
    }

    // Clear the intervals and timeouts on cleanup
    return () => {
      clearInterval(intervalId);
      clearTimeout(resetTimeoutId);
    };
  }, [textIndex]);

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
                {text.substring(0, textIndex)}
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
