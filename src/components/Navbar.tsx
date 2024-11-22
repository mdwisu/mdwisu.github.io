import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
import Magnet from "./Magnet";
import { IoClose } from "react-icons/io5";

interface NavbarProps {
  scrollToSection: (id: string) => void;
}

export default function Navbar({ scrollToSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="pointer-event-none absolute top-0 left-0 w-full px-8 py-6 flex justify-between items-center text-white bg-transparent z-10"
    >
      {/* Logo */}
      <Magnet strength={1}>
        {<div className="text-4xl font-bold cursor-default">Santo</div>}
      </Magnet>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6">
        <Link
          href={""}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("projects"); // Trigger smooth scroll to section
          }}
          className="hover:text-gray-300 transition"
        >
          Projects
        </Link>
        <Link
          href={""}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("about");
          }}
          className="hover:text-gray-300 transition"
        >
          About
        </Link>
        <Link
          href={""}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("contact");
          }}
          className="hover:text-gray-300 transition"
        >
          Contact
        </Link>
        <Link
          target="_blank"
          href="https://www.linkedin.com/in/muhammad-dwi-susanto-684298201/"
          className="hover:text-gray-300 transition"
        >
          Resume
        </Link>
      </div>

      {/* Social Links */}
      <div className="hidden md:flex space-x-4">
        <a
          href="https://linkedin.com/in/username"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300 transition"
        >
          <IoLogoLinkedin size={24} />
        </a>
        <a
          href="https://github.com/username"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300 transition"
        >
          <IoLogoGithub size={24} />
        </a>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-2xl focus:outline-none">
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="absolute top-0 left-0 w-full h-screen bg-gray-800 text-white flex flex-col items-center justify-center space-y-6 md:hidden"
        >
          {/* close button */}
          <button
            onClick={toggleMenu}
            className="absolute top-6 right-6 text-white text-3xl"
          >
            <IoClose />
          </button>
          <Link href="#projects" onClick={toggleMenu}>
            Projects
          </Link>
          <Link href="#about" onClick={toggleMenu}>
            About
          </Link>
          <Link href="#contact" onClick={toggleMenu}>
            Contact
          </Link>
          <Link
            href="https://www.linkedin.com/in/muhammad-dwi-susanto-684298201/"
            onClick={toggleMenu}
          >
            Resume
          </Link>
        </motion.div>
      )}
    </motion.nav>
  );
}
