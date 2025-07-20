"use client";

import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const jobData = [
  {
    id: 1,
    title: "MERN Stack Developer",
    department: "Developer",
    type: "Full-time",
    experience: "0–1 years",
    skills: ["React", "Node.js", "MongoDB", "Express.js"],
    description:
      "Kickstart your journey as a MERN Stack Developer with our engineering team! Work on real-world, impactful projects using MongoDB, Express.js, React, and Node.js. You'll collaborate with experienced professionals, solve meaningful challenges, and help build scalable web applications used by users worldwide.",
  },
  {
    id: 2,
    title: "Flutter Developer",
    department: "Developer",
    type: "Full-time",
    experience: "1–2 years",
    skills: ["Dart", "Flutter", "Firebase"],
    description:
      "Kickstart your journey as a Flutter Developer with our engineering team! Work on real-world, cross-platform apps using Flutter and Dart. Collaborate with experienced professionals, solve meaningful challenges, and build scalable mobile solutions for users worldwide.",
  },
  {
    id: 3,
    title: "UI/UX Designer",
    department: "Design",
    type: "Full-time",
    experience: "1–2 years",
    skills: ["Figma", "Adobe XD", "Web Design"],
    description:
      "Kickstart your journey as a UI/UX Designer at SQARIS! Work on real-world digital products, craft intuitive interfaces, and enhance user experiences that reach global audiences. Collaborate with talented teams and grow your skills in a fast-paced, design-driven environment.",
  },
  {
    id: 4,
    title: "Testing / QA",
    department: "Developer",
    type: "Full-time",
    experience: "1+ years",
    skills: ["Selenium", "JMeter", "Postman"],
    description:
      "Kickstart your journey as a QA Engineer with our engineering team! Work on real-world, impactful projects using MongoDB, Express.js, React, and Node.js. You'll collaborate with experienced professionals, solve meaningful challenges, and help build scalable web applications used by users worldwide.",
  },
  {
    id: 5,
    title: "Machine Learning",
    department: "Developer",
    type: "Full-time",
    experience: "1+ years",
    skills: ["SciKit-Learn", "MLflow", "Postman"],
    description:
      "Kickstart your journey as a ML Engineer with our engineering team! Work on real-world projects involving intelligent automation and large-scale data processing. Collaborate with data scientists and engineers to deliver robust ML pipelines.",
  },
];

const JobListings = () => {
    const navigate = useNavigate();

  const handleApply = () => {
    navigate("/apply");
  };
  return (
    <section className="bg-black min-h-screen w-full py-20 px-4 sm:px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
          Open <span className="text-emerald-400">Positions</span>
        </h2>
        <p className="text-center text-gray-300 text-sm sm:text-base mb-12 md:mb-20">
          Find your perfect role and take the next step in your career journey
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {jobData.map((job, index) => {
            const isLastOdd =
              jobData.length % 2 !== 0 && index === jobData.length - 1;

            if (isLastOdd) {
              // Wrap last card in a flex div to center
              return (
                <div key={job.id} className="md:col-span-2 flex justify-center">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="w-full md:w-[48%] rounded-2xl border border-emerald-400 bg-[#101010] text-white p-6 shadow-[0_0_12px_rgba(110,231,183,0.2)] hover:shadow-[0_0_25px_rgba(110,231,183,0.4)] transition duration-300"
                  >
                    <h3 className="text-lg sm:text-xl font-semibold">
                      {job.title}
                    </h3>
                    <p className="text-sm text-gray-400 mt-1">
                      {job.type} · {job.experience}
                    </p>
                    <p className="mt-4 text-sm text-gray-300 leading-relaxed">
                      {job.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {job.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="text-[10px] sm:text-xs px-3 py-1 rounded-full bg-[#1c1c1c] text-emerald-300 border border-emerald-400"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    <div className="mt-6 flex justify-end">
                      <button onClick={handleApply} className="px-5 py-2 bg-emerald-500 hover:bg-emerald-600 text-white text-sm rounded-full transition">
                        Apply now
                      </button>
                    </div>
                  </motion.div>
                </div>
              );
            }

            // Regular cards
            return (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="rounded-2xl border border-emerald-400  text-white p-6 shadow-[0_0_12px_rgba(110,231,183,0.2)] hover:shadow-[0_0_25px_rgba(110,231,183,0.4)] transition duration-300"
              >
                <h3 className="text-lg sm:text-xl font-semibold">{job.title}</h3>
                <p className="text-sm text-gray-400 mt-1">
                  {job.type} · {job.experience}
                </p>
                <p className="mt-4 text-sm text-gray-300 leading-relaxed">
                  {job.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {job.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="text-[10px] sm:text-xs px-3 py-1 rounded-full bg-[#1c1c1c] text-emerald-300 border border-emerald-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex justify-end">
                  <button onClick={handleApply} className="px-5 py-2 bg-emerald-500 hover:bg-emerald-600 text-white text-sm rounded-full transition">
                    Apply now
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default JobListings;
