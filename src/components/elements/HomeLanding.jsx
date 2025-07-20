"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import LandingBelow from "./LandingBelow";

// Fade-in variant
const fadeInOnly = {
  hidden: { opacity: 0 },
  visible: (i) => ({
    opacity: 1,
    transition: { duration: 1, delay: i * 0.2 },
  }),
};

const HomeLanding = () => {
  return (
    <section className="h-[700px] md:h-[80vh] lg:h-screen flex flex-col items-center justify-center bg-black px-4 text-white relative overflow-hidden">
      {/* Heading */}
      <motion.div
        custom={0}
        initial="hidden"
        animate="visible"
        variants={fadeInOnly}
        className="text-center mb-10"
      >
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
          Where Software <br />
          Application Meets{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-green-500">
            Intelligence
          </span>
        </h1>
        <p className="mt-3 text-xs sm:text-sm md:text-base text-gray-300">
          Innovation Drives Excellence
        </p>
      </motion.div>

      {/* Glass Box */}
      <motion.div
        custom={1}
        initial="hidden"
        animate="visible"
        variants={fadeInOnly}
        className="relative w-full  max-w-3xl rounded-3xl p-6 sm:p-8 text-center bg-black/40 backdrop-blur-md border border-cyan-500/20 shadow-[inset_6px_6px_12px_rgba(0,255,255,0.1),inset_-6px_0px_12px_rgba(0,255,255,0.05)]"
      >
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
          Welcome to the Future with{" "}
          <span className="text-gray-400 font-extrabold">SQARIS</span>
        </h2>
        <p className="text-xs sm:text-sm md:text-base text-gray-300 leading-relaxed mb-6">
          At SQARIS, we’re not just building software — we’re engineering the
          future. As a cutting-edge robotics and AI company, we’re developing
          machine learning–based platforms with a mission to deliver globally
          scalable, high-quality solutions.
        </p>

        {/* Button */}

      </motion.div>
      <div className="hidden md:block lg:hidden">
<LandingBelow/>
      </div>
    </section>
  );
};

export default HomeLanding;
