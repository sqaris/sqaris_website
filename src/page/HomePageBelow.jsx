"use client";

import React from "react";
import { motion } from "framer-motion";

// STEP 1: Import your images here
import cardBg from "../assets/image/home/card_bg.png";
import graphIcon from "../assets/image/home/graph.png";
import brainIcon from "../assets/image/home/brain.png";
import globeIcon from "../assets/image/home/globe.png";
import bg from "../assets/image/home/home_below.png";

const cardData = [
  {
    icon: graphIcon,
    title: "Empowering digital transformation",
  },
  {
    icon: brainIcon,
    title: "Crafting intelligent Platforms",
  },
  {
    icon: globeIcon,
    title: "Design for a smarter world",
  },
];

const HomePageBelow = () => {
  return (
    // Section container for the cards and text

    <div
      className="bg-gradient-to-br from-[#100F13] to-[#241a3d] bg-cover"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      ></div>
      <main className="flex justify-center items-center min-h-screen p-4 sm:p-8">
        <section className="relative w-full text-white">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 ">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              {cardData.map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="p-8 rounded-2xl text-center border-purple-400 flex flex-col items-center border justify-center h-80 w-64 "
                  style={{
                    backgroundImage: `url(${cardBg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="border-purple-400 border-4 border-opacity-30 flex my-6 rounded-full h-20 w-20  ">
                    <img
                      src={card.icon}
                      alt={`${card.title} icon`}
                      className="w-12 h-12  mx-auto my-auto"
                    />
                  </div>

                  <p className="font-semibold text-lg">{card.title}</p>
                </motion.div>
              ))}
            </div>
            <p className="text-center text-gray-500 text-sm mt-16 max-w-3xl mx-auto">
              At SQARIS, we're not just building the future of AI — we're
              architecting a world where artificial intelligence enhances human
              intelligence, creating unprecedented possibilities for growth,
              innovation, and impact.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePageBelow;
