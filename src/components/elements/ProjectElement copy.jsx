"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// STEP 1: Import your images here
import timebankIcon from "../../assets/image/project/timebank.png";
import wieIcon from "../../assets/image/project/wie.png";
import helixImage from "../../assets/image/project/purple-helix.png";
import titleBg from "../../assets/image/project/project_title_bg.png";
import descriptionBg from "../../assets/image/project/project_des_bg.png";
import dia from "../../assets/image/project/holo-diamond.png";

// Animation variants for the details section
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

// Updated project data to match the new image
const projects = [
  {
    title: "Time Bank Project",
    subtitle: "Social Care App – Gov. of Kerala",
    icon: timebankIcon,
    logo: timebankIcon,
    description:
      "TimeBank is a mobile and web platform that connects retired volunteers with elderly citizens in need through a time-based service exchange model. Volunteers offer support and earn credits for their time. Key features include volunteer matching, hour tracking, trust mechanisms, and community engagement. The project tackles elderly isolation, effects of urbanization, and lack of structured volunteer systems, promoting intergenerational bonding and community care across Kerala.",
    features: [
      "Live Volunteer Tracking",
      "Care service for elderly peoples",
      "Users can chat with each other.",
      "Chatbot support for FAQs and queries.",
      "Home feed shows latest news.",
    ],
  },
  {
    title: "Wie Platform",
    subtitle: "Social Care App – Gov. of Kerala", // Subtitle updated as per image
    icon: wieIcon,
    logo: wieIcon,
    description:
      "WIE is a next-gen social platform powered by ML and LLMs. It addresses limited AI use, poor personalization, and weak moderation in current platforms. The platform uses AI to offer smart engagement, dynamic content, and scalable global experiences. It integrates moderation, LLM-driven chat, and rich API support for MNCs, ensuring intelligent and secure user interaction.",
    features: [
      "AI-powered feed personalization",
      "Multilingual support",
      "Smart content moderation",
      "Real-time global scalability",
      "LLM-based user interaction",
    ],
  },
];

const ProjectSelectorCard = ({ project, isSelected, onClick }) => {
  const cardStyle = {
    backgroundImage: isSelected ? `url(${titleBg})` : "none",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: isSelected ? "transparent" : "transparent",
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      // UPDATED: Added text-center to ensure all text inside is centered
      className="cursor-pointer w-full md:w-80 h-48 flex flex-col justify-center items-center p-5 rounded-2xl border border-[rgba(159,85,255,0.2)] backdrop-blur-sm transition-all duration-300 text-center"
      style={cardStyle}
      onClick={onClick}
    >
      <img
        src={project.icon}
        alt={`${project.title} icon`}
        className="h-16 mb-3"
      />
      <div className="text-xl font-semibold">{project.title}</div>
      <div className="text-xs text-gray-400">{project.subtitle}</div>
    </motion.div>
  );
};

const ProjectElement = () => {
  const [selected, setSelected] = useState(0);
  const project = projects[selected];

  const descriptionCardStyle = {
    backgroundImage: `url(${descriptionBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <section className="mx-auto px-4 py-20 w-full text-white">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <h1
          className="text-center text-4xl md:text-5xl font-bold uppercase tracking-wider mb-16"
          style={{ textShadow: "0 0 15px rgba(190, 151, 254, 0.3)" }}
        >
          Our Projects
        </h1>

        {/* Project Selection Cards */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-4 mb-12">
          <ProjectSelectorCard
            project={projects[0]}
            isSelected={selected === 0}
            onClick={() => setSelected(0)}
          />

          <motion.img
            src={helixImage}
            alt="Helix decoration"
            className="w-24 h-24"
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />

          <ProjectSelectorCard
            project={projects[1]}
            isSelected={selected === 1}
            onClick={() => setSelected(1)}
          />
        </div>

        {/* Project Info + Feature Box */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selected}
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="grid grid-cols-1 lg:grid-cols-5 gap-8"
          >
            {/* LEFT: Project Description Box */}
            <div
              className="lg:col-span-3 border border-[rgba(159,85,255,0.2)] rounded-2xl p-8"
              style={descriptionCardStyle}
            >
              <div className="flex items-center gap-4 mb-4 overflow-hidden">
                <div className="md:flex py-auto">
                  <div className="flex pb-2">
                    <img
                      src={project.logo}
                      alt="Project Logo"
                      className="h-12"
                    />
                    <h3 className="text-2xl px-2 font-bold leading-tight">
                      {project.title}
                    </h3>
                  </div>
                  <div className="bg-[#2a2a2a] h-full text-gray-300 text-xs px-3 py-1.5 rounded-full whitespace-nowrap">
                    {project.subtitle}
                  </div>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* RIGHT: Features Box */}
            <div className="lg:col-span-2 rounded-2xl relative text-center">
              <img
                src={dia}
                alt="feature icon"
                className="w-8 h-8 absolute -top-4 -right-4"
              />
              <div className="flex items-center justify-center gap-3 mb-5 border border-[rgba(159,85,255,0.2)] px-4 py-2.5 rounded-full ">
                <h4 className="text-xl font-bold text-[#BE97FE]">Features</h4>
              </div>
              <ul className="space-y-3">
                {project.features.map((feat, i) => (
                  <li
                    key={i}
                    className="border border-[rgba(159,85,255,0.2)] px-4 py-2.5 rounded-full text-sm text-gray-300"
                  >
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
export default ProjectElement;
