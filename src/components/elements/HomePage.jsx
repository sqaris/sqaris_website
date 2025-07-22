"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Menu,
  X,
  Home as HomeIcon,
  Info,
  Briefcase,
  Users,
  Phone,
} from "lucide-react";

import { FloatingNav } from "../../components/ui/floating-navbar";

// Assets
import logo from "../../assets/Sqaris_logo.svg";
import star from "../../assets/image/home/holo-star.png";
import Tophand from "../../assets/image/home/upper_blue_hand.png";
import bottomhand from "../../assets/image/home/lower_white_hand.png";
import bg from "../../assets/image/home/bg_home.png";

const navItems = [
  { name: "Home", link: "#home", icon: <HomeIcon className="w-4 h-4" /> },
  { name: "About", link: "#about", icon: <Info className="w-4 h-4" /> },
  {
    name: "Services",
    link: "#services",
    icon: <Briefcase className="w-4 h-4" />,
  },
  { name: "Career", link: "#career", icon: <Users className="w-4 h-4" /> },
  { name: "Contact", link: "#contact", icon: <Phone className="w-4 h-4" /> },
];

const HomePage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div
      className="relative w-full h-screen  text-white overflow-hidden bg-cover"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Background overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#100F13] to-[#241a3d] -z-20"></div>
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      ></div>

      {/* Floating Navbar (Desktop only) */}
      <div className="hidden md:block z-50 ">
        <FloatingNav navItems={navItems} />
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden absolute top-6 right-6 z-40">
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? (
            <X className="text-white w-8 h-8" />
          ) : (
            <Menu className="text-white w-8 h-8" />
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="absolute top-[70px] w-full flex justify-center z-30"
        >
          <div className="w-64 p-6 rounded-[24px] border border-white/20 bg-white/10 backdrop-blur-md shadow-xl">
            <ul className="space-y-4 text-lg font-raleway text-white text-center">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.link}
                    className="hover:text-white/80 transition"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}

      {/* Logo */}
      <motion.img
        src={logo}
        alt="Logo"
        className="absolute top-6 left-6 sm:top-8 sm:left-8 w-10 sm:w-12 z-30"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      />

      {/* Main Content */}
      <div className="relative mx-auto px-6 sm:px-8 h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full lg:pl-12">
          {/* Text Content */}
          <motion.div
            className="z-20"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold leading-tight text-gray-300">
              Where application <br /> meets{" "}
              <span className="text-purple-400">Intelligence.</span>
            </h1>
            <p className="mt-6 text-gray-400 max-w-md text-xs sm:text-base">
              We don't just build software — we architect the future. SQARIS
              leads the AI revolution with intelligent systems that redefine
              human-machine collaboration. Our machine learning platforms power
              next-generation digital experiences at global scale.
            </p>
          </motion.div>

          {/* Visuals */}
          <div className="absolute inset-0 w-full h-full z-10">
            <motion.img
              src={Tophand}
              alt="Top Hand"
              className="absolute top-5 md:-top-12 right-0 w-1/2 max-w-xs"
              initial={{ opacity: 0, y: -50, x: 50 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            />
            <motion.img
              src={star}
              alt="Star"
              className="absolute md:top-1/2 md:left-3/4 hidden md:block -translate-x-1/4 -translate-y-1/2 w-16 h-16 sm:w-20 sm:h-20"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              whileHover={{ scale: 1.2, rotate: 45 }}
            />
            <motion.img
              src={bottomhand}
              alt="Bottom Hand"
              className="absolute -bottom-8 right-16 md:right-40 w-full max-w-sm md:max-w-md lg:max-w-lg"
              initial={{ opacity: 0, y: 50, x: 50 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            />
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center z-20 sm:bottom-8 md:bottom-[42px]"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <h3 className="text-white text-[8px] font-medium tracking-[2px] sm:text-[10px] sm:tracking-[3px] md:text-[12px] md:tracking-[5px]">
            SCROLL DOWN
          </h3>
          <svg
            className="w-4 h-4 mt-2 mx-auto opacity-90 animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </a>
    </div>
  );
};

export default HomePage;
