/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import React from "react";

type ModalProps = {
  project: any;
  onClose: () => void;
};

const Modal: React.FC<ModalProps> = ({ project, onClose }) => {
  return (
    // Fixed position modal overlay that covers the entire viewport
    <div
      className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center"
      onClick={onClose} // Close modal when clicking outside of it
    >
      <div
        className="relative bg-white p-8 rounded-lg max-w-4xl w-full md:w-1/2"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-black rounded-full"
        >
          X
        </button>
        <div className="flex flex-col md:flex-row items-center">
          <div className="flex-shrink-0 w-full md:w-1/3 lg:w-7/12">
            <Image
              width={500}
              height={500}
              src={project.screenshot}
              alt={project.title}
              className="w-full h-auto object-cover rounded-md"
            />
          </div>
          <div className="mt-4 md:mt-0 md:ml-6">
            <h2 className="text-3xl font-semibold">{project.title}</h2>
            <p className="text-gray-600 mt-2">{project.description}</p>
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Built With:</h3>
              <ul className="flex gap-2 flex-wrap">
                {project.techStack.map((tech: string, index: number) => (
                  <li
                    key={index}
                    className="p-2 bg-gray-200 rounded text-black"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
