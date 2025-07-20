"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBrain, FaHandsHelping } from "react-icons/fa";
import timebank from "../../assets/image/project/timebank.png";
import wie from "../../assets/image/project/wie.png";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

const projects = [
  {
    title: "Time bank Project",
    subtitle: "Social Care App – Gov. of Kerala",
    icon: timebank,
    logo: timebank,
    description:
      "TimeBank is a mobile and web platform that connects retired volunteers with elderly citizens in need through a time-based service exchange model. Volunteers offer support and earn credits for their time. Key features include volunteer matching, hour tracking, trust mechanisms, and community engagement. The project tackles elderly isolation, effects of urbanization, and lack of structured volunteer systems, promoting intergenerational bonding and community care across Kerala.",
    platform: "Mobile + Web",
    technologies: ["React", "Node.js", "MongoDB", "Flutter", "Firebase"],
    ringColor: "ring-green-400",
    features: [
      "Time-based service exchange",
      "Tracking of hours",
      "Volunteer-elderly matchmaking",
      "Seamless trust mechanisms",
      "Community-based engagement",
    ],
  },
  {
    title: "WIE Project",
    subtitle: "International ML-based Platform",
    icon:wie,
    logo: wie,
    description:
      "WIE is a next-gen social platform powered by ML and LLMs. It addresses limited AI use, poor personalization, and weak moderation in current platforms. The platform uses AI to offer smart engagement, dynamic content, and scalable global experiences. It integrates moderation, LLM-driven chat, and rich API support for MNCs, ensuring intelligent and secure user interaction.",
    platform: "Mobile App + Web App",
    technologies: [
      "ML Models",
      "LLMs",
      "React",
      "Flutter",
      "Firebase",
      "Node.js",
      "Python",
    ],
    ringColor: "ring-violet-400",
    features: [
      "AI-powered feed personalization",
      "Multilingual support",
      "Smart content moderation",
      "Real-time global scalability",
      "LLM-based user interaction",
    ],
  },
];

const ProjectElement = () => {
  const [selected, setSelected] = useState(0);
  const project = projects[selected];

  return (
    <section className="mx-auto px-4 py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto mt-20">
        {/* Header */}
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Our{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-500">
            Services
          </span>
        </h2>
        <div className="h-[2px] w-92 lg:max-w-[90vw] mx-auto mt-2 bg-gradient-to-r from-black via-[#3c3c3c] to-black mb-[37px]" />
        <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto text-sm md:text-base">
          Innovative solutions that transform industries and improve lives
          through intelligent technology
        </p>

        {/* Project Cards */}
        <div className="flex justify-center gap-4  mb-10">
          {projects.map((proj, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className={`cursor-pointer md:w-60 h-40 md:h-52 py-3  md:p-5 rounded-xl text-center transition duration-300 font-semibold border ${
                selected === i
                  ? ` text-white shadow-lg ring-2 ${proj.ringColor} border-transparent`
                  : " border-zinc-700 text-gray-300 hover:ring-2 hover:ring-green-400"
              }`}
              onClick={() => setSelected(i)}
            >
              <div className="mb-4 flex justify-center"><img src={proj.icon} alt="" className="md:h-12 h-10" /></div>
              <div className="text-lg md:text-xl">{proj.title}</div>
              <div className="md:text-sm text-xs font-normal">{proj.subtitle}</div>
            </motion.div>
          ))}
        </div>

        {/* Project Info + Feature Box */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selected}
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {/* LEFT: Project Description Box */}
            <div className="md:col-span-2  border border-gray-700 rounded-2xl px-6 py-8">
              <div className="md:flex  justify-between items-start mb-6">
                <div className="flex py-2 items-center gap-4">
                  <img src={project.logo} alt="Project Logo" className="h-12" />
                  <h3 className="text-2xl md:text-3xl font-bold leading-tight">
                    {project.title} <span className="text-green-400">Project</span>
                  </h3>
                </div>
                <div className="bg-[#2a2a2a] text-green-400 text-xs px-4 py-2 rounded-full">
                  {project.subtitle}
                </div>
              </div>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* RIGHT: Features Box */}
            <div className=" border border-gray-700 rounded-2xl px-6 py-6">
              <h4 className="text-lg sm:text-xl font-bold mb-5 leading-snug">
                What makes{" "}
                <span className="text-green-400">
                  {project.title.split(" ")[0]}
                </span>{" "}
                special?
              </h4>
              <ul className="space-y-3">
                {project.features.map((feat, i) => (
                  <li
                    key={i}
                    className="border border-zinc-600 px-4 py-2 rounded-full bg-black hover:bg-zinc-900 transition text-sm"
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
