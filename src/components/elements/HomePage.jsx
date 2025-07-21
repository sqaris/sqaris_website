"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaChartBar, FaBrain, FaGlobe } from "react-icons/fa";


import logo from "../../assets/image/logo.png";
import upperBlueHand from "../../assets/image/home/upper_blue_hand.png";
import lowerWhiteHand from "../../assets/image/home/lower_white_hand.png";
import holoFlower from "../../assets/image/home/holo-flower.png";
import holoStar from "../../assets/image/home/holotar.png";

const cardData = [
    {
        icon: <FaChartBar />,
        title: "Empowering digital transformation"
    },
    {
        icon: <FaBrain />,
        title: "Crafting intelligent Platforms"
    },
    {
        icon: <FaGlobe />,
        title: "Design for a smarter world"
    }
];

const HomeElement = () => {
  return (
    <section className="relative w-full min-h-screen text-white overflow-hidden">
      {/* Background Styling */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#100F13] to-[#241a3d] -z-20"></div>
      <div 
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage:
            `linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
             linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      ></div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
        
        {/* Header Logo */}
        <div className="absolute top-8 left-8">
            <img 
                src={logo} 
                alt="SQARIS Logo" 
                className="h-8" 
            />
        </div>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center pt-32 pb-16">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Where application meets <br />
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Intelligence.
              </span>
            </h1>
            <p className="mt-6 text-gray-400 max-w-lg">
              We don't just build software — we architect the future. SQARIS leads the AI revolution with intelligent systems that redefine human-machine collaboration. Our machine learning platforms power next-generation digital experiences at global scale.
            </p>
          </motion.div>

          {/* Right Visuals */}
          <div className="relative h-96 lg:h-[600px]">
            <motion.img
                src={upperBlueHand}
                alt="Blue hand"
                className="absolute top-0 right-0 w-64 md:w-80"
                animate={{ y: [-10, 10], x: [5, -5] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", repeatType: 'reverse' }}
            />
             <motion.img
                src={lowerWhiteHand}
                alt="White hand"
                className="absolute bottom-0 right-1/4 w-64 md:w-80"
                 animate={{ y: [10, -10] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", repeatType: 'reverse' }}
            />
             <motion.img
                src={holoStar}
                alt="Holographic star"
                className="absolute top-1/3 right-1/2 w-16 h-16"
                animate={{ y: [0, 20, 0], rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
             <motion.img
                src={holoFlower}
                alt="Holographic flower"
                className="absolute bottom-1/4 left-0 w-24 h-24 md:w-32 md:h-32"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-24 left-1/2 -translate-x-1/2 text-center text-xs text-gray-500"
        >
            <p>SCROLL DOWN</p>
            <svg className="w-4 h-4 mx-auto mt-1 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
        </motion.div>

        {/* Bottom Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-16">
            {cardData.map((card, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="bg-[rgba(30,28,41,0.5)] p-8 rounded-2xl border border-[rgba(159,85,255,0.2)] text-center flex flex-col items-center"
                >
                    <div className="text-4xl text-purple-400 mb-4">{card.icon}</div>
                    <p className="font-semibold">{card.title}</p>
                </motion.div>
            ))}
        </div>

        {/* Footer Text */}
        <p className="text-center text-gray-500 text-sm pb-8 max-w-3xl mx-auto">
            At SQARIS, we're not just building the future of AI — we're architecting a world where artificial intelligence enhances human intelligence, creating unprecedented possibilities for growth, innovation, and impact.
        </p>
      </div>
    </section>
  );
};
export default HomeElement;