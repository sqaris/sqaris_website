"use client";

import React from "react";
import { motion } from "framer-motion";

import holoStar from "../../assets/image/services/holo-star.png";
import holoDiamond from "../../assets/image/services/holo-diamond.png";
import sectionBg from "../../assets/image/services/section_bg.png";

// Data for the service items
const servicesData = [
  {
    title: "AI-Integrated Platforms",
  },
  {
    title: "User-Centric Engineering",
  },
  {
    title: "Next-Gen Social Systems",
  },
  {
    title: "Community Impact",
  },
  {
    title: "Enterprise-Ready Tech",
  },
  {
    title: "AI-as-a-Service",
  },
];

// Diamond icon component
const DiamondIcon = () => (
  <img src={holoDiamond} alt="bullet point" className="w-8 h-8 flex-shrink-0" />
);

// The floating stars component
const FloatingStars = () => (
  <div className="absolute top-0 md:right-[200px] right-0 -mt-12 -mr-12 md:mt-0 md:-mr-8 w-32 h-32">
    <motion.img
      src={holoStar}
      alt="Floating star"
      className="absolute top-0 left-0 w-[5.5rem] h-[5.5rem]"
      animate={{
        y: [0, -12, 0],
        rotate: [0, 20, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 0.5,
      }}
    />
    <motion.img
      src={holoStar}
      alt="Floating star"
      className="absolute bottom-0 right-0 w-24 h-24"
      animate={{
        y: [0, 8, 0],
        rotate: [0, -15, 0],
      }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
    />
  </div>
);

// The main Services component
const ServicesElement = () => {
  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-10">
      <div className="max-w-6xl mx-auto text-center relative">
        <FloatingStars />
        <h1
          className="text-4xl md:text-6xl lg:text-6xl font-bold bg-gradient-to-b from-purple-300 to-purple-500 bg-clip-text text-transparent uppercase tracking-wider mb-6"
          style={{ textShadow: "0 0 25px rgba(190, 151, 254, 0.3)" }}
        >
          Our Services
        </h1>
        <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">
          Why choose SQARIS?
        </h2>
        <p className="text-md text-[#a9a6b3] max-w-5xl mx-auto mb-16">
          We don’t just create tools—we craft intelligent experiences. With our
          proficiency in AI research, ethical design, and scalable platform
          engineering, we develop systems that are intuitive, respond
          effectively, and become increasingly intelligent over time.
        </p>

        <div className="space-y-4 text-left">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-5 rounded-xl border border-[rgba(159,85,255,0.2)] flex items-center justify-between"
              style={{
                // UPDATED: Using the new background image
                backgroundImage: `url(${sectionBg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="flex items-center gap-4">
                <DiamondIcon />
                <h3 className=" md:text-xl text-lg   text-white">{service.title}</h3>
              </div>
       {/*       <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/40">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>*/} 
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ServicesElement;
