import React, { useState } from 'react';
import logo from '../assets/Sqaris_logo.svg';
import heroText from '../assets/HeroText.svg';
import bodyText from '../assets/BodyText.svg';
import scrollIcon from '../assets/ScrollIcon.svg';
import bgImage from '../assets/Hero.png';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

function HomePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = ['Home', 'About', 'Services', 'Career', 'Contact'];

  return (
    <div
      className="relative w-full h-screen bg-cover bg-no-repeat bg-top md:bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Logo */}
      <img
        src={logo}
        alt="Logo"
        className="absolute top-6 left-6 w-[55px] md:w-[70px] h-auto z-40"
      />

      {/* Desktop NavBar */}
      <nav className="hidden md:flex absolute top-[20px] left-1/2 -translate-x-1/2 z-30 
                      items-center justify-center px-10 py-6 rounded-[48px] border border-white/30 
                      backdrop-blur-lg bg-white/10 gap-10 text-white text-lg font-medium">
        {menuItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="hover:text-white/80 transition"
          >
            {item}
          </a>
        ))}
      </nav>

      {/* Mobile Menu Icon */}
      <div className="md:hidden absolute top-6 right-6 z-40">
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? (
            <X className="text-white w-8 h-8" />
          ) : (
            <Menu className="text-white w-8 h-8" />
          )}
        </button>
      </div>

      {/* Mobile Top Dropdown Menu */}
      {isMobileMenuOpen && (
  <motion.div
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.2 }}
    className="absolute top-[70px] w-full flex justify-center z-30"
  >
    <div className="w-64 p-6 rounded-[24px] border border-white/20 bg-white/10 backdrop-blur-xl shadow-xl">
      <ul className="space-y-4 text-lg font-semibold text-white text-center">
        {menuItems.map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className="hover:text-white/80 transition"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
)}


      {/* Hero Content */}
      <div className="absolute left-6 right-6 md:left-[110px] top-1/2 -translate-y-1/2 flex flex-col gap-6 z-20">
        <img src={heroText} alt="Hero Text" className="w-full max-w-[550px]" />
        <img src={bodyText} alt="Body Text" className="w-full max-w-[530px]" />
      </div>

      {/* Scroll down */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center z-20">
        <h3 className="text-white text-[12px] font-medium tracking-[5px]">
          SCROLL DOWN
        </h3>
        <img
          src={scrollIcon}
          alt="Scroll Icon"
          className="w-[18px] h-[18px] mt-2 mx-auto opacity-90"
        />
      </div>
    </div>
  );
}

export default HomePage;
