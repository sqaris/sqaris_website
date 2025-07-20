"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaBalanceScale, FaUsers, FaMedal, FaChartLine } from "react-icons/fa";

const benefits = [
  {
    title: "Work-Life Balance",
    description:
      "Flexible working hours and remote work options to help you maintain a healthy work-life balance.",
    icon: <FaBalanceScale size={28} />,
  },
  {
    title: "Career Growth",
    description:
      "Clear career progression paths with mentorship and learning opportunities.",
    icon: <FaChartLine size={28} />,
  },
  {
    title: "Amazing Team",
    description:
      "Work with passionate, talented individuals who share your drive for excellence.",
    icon: <FaUsers size={28} />,
  },
  {
    title: "Recognition",
    description:
      "Your contributions are valued and recognized through various reward programs.",
    icon: <FaMedal size={28} />,
  },
];

const WhyWorkWithUs = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-center text-3xl sm:text-4xl font-bold text-white mb-4">
        Why{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
          Work With Us
        </span>
      </h2>
      <p className="text-center text-gray-300 mb-10 max-w-2xl mx-auto text-sm md:text-base">
        We offer more than just a job – we provide a platform for growth, innovation, and meaningful impact.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            className="bg-zinc-900 text-white rounded-xl p-6 min-h-[220px] flex flex-col justify-center items-center text-center transition-all duration-300 hover:shadow-[0_0_25px_0_rgba(0,255,255,0.3)]"
          >
            <div className="mb-4 text-white">{benefit.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
            <p className="text-gray-400 text-sm">{benefit.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyWorkWithUs;
