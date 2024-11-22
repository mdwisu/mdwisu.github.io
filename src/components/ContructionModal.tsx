"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ConstructionModal() {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
        transition={{ duration: 0.3 }}
        className="bg-white p-8 rounded-lg shadow-lg max-w-xs text-center"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Website Under Construction
        </h2>
        <p className="text-gray-600 mb-6">
          Our website is currently under construction. Please check back soon!
        </p>
        <button
          onClick={handleClose}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Close
        </button>
      </motion.div>
    </motion.div>
  );
}
