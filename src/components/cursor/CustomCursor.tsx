"use client";
import { useCursor } from "./CursorContext";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const CustomCursor = () => {
  const { cursorType } = useCursor();
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Fungsi untuk memperbarui posisi cursor
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Mengganti style cursor default
  useEffect(() => {
    document.body.style.cursor = cursorType === "default" ? "auto" : "none";
  }, [cursorType]);

  return (
    <motion.div
      className="fixed top-0 left-0 z-50 pointer-events-none"
      style={{
        transform: "translate(-50%, -50%)",
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      <div
        className={`relative ${
          cursorType === "hover" ? "w-44 h-44" : "w-8 h-8"
        } rounded-full transition-all duration-200 ease-in-out`}
        style={{
          background: "transparent",
          boxShadow:
            cursorType === "hover"
              ? "0 0 25px 8px rgba(0, 204, 255, 0.8)"
              : "0 0 15px 4px rgba(255, 105, 180, 0.6)",
        }}
      ></div>
    </motion.div>
  );
};
