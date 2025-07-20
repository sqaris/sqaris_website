"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaChartBar, FaBrain, FaGlobeEurope } from "react-icons/fa";

const cards = [
  {
    icon: <FaChartBar className="text-green-400 md:text-3xl text-xl" />,
    title: "Empowering digital transformation",
  },
  {
    icon: <FaBrain className="text-green-400 md:text-3xl text-xl" />,
    title: "Crafting intelligent platforms",
  },
  {
    icon: <FaGlobeEurope className="text-green-400 md:text-3xl text-xl" />,
    title: "Designed for a smarter world",
  },
];

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (i) => ({
    opacity: 1,
    transition: { duration: 0.6, delay: i * 0.2 },
  }),
};

const LandingBelow = () => {
  return (
    <section className="bg-black px-4 py-12 mb-20">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-6">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeIn}
            className="w-44 h-44 md:w-60 md:h-60 border-2 border-green-600/20 rounded-xl flex flex-col items-center justify-center text-white shadow-[0_4px_20px_rgba(34,197,94,0.2)] hover:shadow-green-400/20 transition duration-300"
          >
            <div className="mb-4">{card.icon}</div>
            <p className="text-xs md:text-sm text-center text-white/90 px-4">
              {card.title}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default LandingBelow;