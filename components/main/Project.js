"use client"
import React, { useState } from 'react';
import Projectcontent from "../sub/Projectcontent";
import { motion } from "framer-motion";

// Sample Project Data
const projectsData = [
  {
    id: 1,
    src: "/cve-website.png",
    title: "CVE Table Website",
    description:
      "CVE Explorer is a web application that allows users to explore and visualize Common Vulnerabilities and Exposures data.Users can filter CVEs based on various parameters and view them in a user-friendly interface.",
  },
  {
    id: 2,
    src: "/SpaceWebsite1.png",
    title: "Emotion Detector With CNN",
    description:
      "Engineered an Emotion Detection System using CNNs to process facial expressions and deliver precise real-time emotion analysis, boosting the reliability of human-computer interaction in live scenarios.",
  },
  {
    id: 3,
    src: "/Assesment.webp",
    title: "Test Management Platform",
    description:
      "Customised end-to-end assessment tests on hiring and workforce development for the corporate sector, admissions management, online evaluations of examinations for the educational institutions.",
  },
  {
    id: 4,
    src: "/node.jpg",
    title: "Express - Book review",
    description:
      "Developed a full-stack web application for browsing, submitting, and reading book reviews, utilizing a RESTful API to ensure efficient and seamless communication between the frontend and backend.",
  },
];

const Project = () => {
  const [selectedProjectId, setSelectedProjectId] = useState(null); // No project selected initially

  // Duplicate the projects data to create a seamless loop effect
  const duplicatedProjects = [...projectsData, ...projectsData];

  // Find the currently selected project based on ID
  const selectedProject = selectedProjectId
    ? projectsData.find((project) => project.id === selectedProjectId)
    : null;

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-[-10]">
        <video
          className="w-full h-full object-cover"
          preload="auto"
          playsInline
          loop
          muted
          autoPlay
          src="/encryption.webm"
        />
      </div>

      {/* "Projects" Title on Top */}
      <section id="projects" className="relative z-10 pt-20 pb-12 px-4 text-center">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          My Projects
        </h1>
      </section>

      {/* Only Show Selected Project Details (If a project is selected) */}
      {selectedProject && (
        <section className="relative z-10 px-4 text-center mt-8">
          <h2 className="text-3xl font-semibold text-white">
            {selectedProject.title}
          </h2>
          <p className="mt-4 text-gray-300 max-w-3xl mx-auto">
            {selectedProject.description}
          </p>
        </section>
      )}

      {/* Infinite Carousel of Projects */}
      <div className="w-full overflow-hidden mt-12">
        <motion.div
          className="flex gap-8"
          animate={{ x: ["0%", "-100%"] }} // Move from start to end
          transition={{
            repeat: Infinity,
            duration: 50, // Control speed (slower with higher duration)
            ease: "linear",
          }}
        >
          {duplicatedProjects.map((project, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[350px] h-[500px] md:w-[400px] md:h-[500px] cursor-pointer"
              onClick={() => setSelectedProjectId(project.id)} // Update project ID on click
            >
              <Projectcontent
                src={project.src}
                title={project.title}
                description={project.description}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Project;