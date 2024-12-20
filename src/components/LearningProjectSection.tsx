import React from "react";
import Slider from "react-slick";

export default function LearningProjectSection() {
  const projectsData = [
    {
      name: "Hris App API",
      description: "an api made with Nest.Js",
      link: "https://github.com/mdwisu/hris-app-api",
    },
    {
      name: "auth-oauth-nestjs",
      description: "A Nest.js project for OAuth authentication.",
      link: "https://github.com/mdwisu/auth-oauth-nestjs",
    },
    {
      name: "ecommerce-api-nestjs",
      description: "A Nest.js project for an e-commerce API.",
      link: "https://github.com/mdwisu/ecommerce-api",
    },
    {
      name: "typeorm-relational",
      description: "A Nest.js project for a relational database.",
      link: "https://github.com/mdwisu/typeorm-relational",
    },
    {
      name: "user-authentication-and-authorization-api",
      description:
        "A Nest.js project for user authentication and authorization.",
      link: "https://github.com/mdwisu/user-authentication-and-authorization-api",
    },
  ];

  // Pengaturan slider
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section id="projects" className="py-16 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-8">
          Learning Projects
        </h2>
        <p className="text-center text-gray-400 mb-8">
          Here are some of the learning projects I&apos;ve worked on. Feel free
          to explore!
        </p>

        <Slider {...sliderSettings} className="mx-8">
          {projectsData.map((project, index) => (
            <div key={index} className="p-4">
              <div className="bg-gray-800 p-6 rounded-md shadow-md hover:shadow-lg transition-shadow">
                <h4 className="text-lg font-bold text-blue-400">
                  Project {index + 1}: {project.name}
                </h4>
                <p className="text-gray-400">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline mt-2 inline-block"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
