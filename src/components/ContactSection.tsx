import React from "react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 bg-gray-800">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-8">
          Contact Me
        </h2>
        <p className="text-center text-gray-400 mb-8">
          Feel free to connect with me through the platforms below!
        </p>

        <div className="flex flex-col items-center space-y-4">
          {/* Email */}
          <a
            href="mailto:dwisusanto784@gmail.com"
            className="text-blue-500 hover:underline"
          >
            <i className="fas fa-envelope"></i> dwisusanto784@gmail.com
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/muhammad-dwi-susanto-684298201/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/mdwisu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            <i className="fab fa-github"></i> GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
