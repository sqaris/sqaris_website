import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = ['Home', 'About', 'Services', 'Career', 'Contact'];

  return (
    <nav className="fixed top-[20px] left-1/2 -translate-x-1/2 z-50">
      {/* Desktop Nav */}
      <div className="hidden md:flex items-center justify-center px-10 py-6 rounded-[48px] border border-white/30 backdrop-blur-lg bg-white/10">
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="mx-6 text-white text-lg font-medium hover:text-white/80 transition"
          >
            {item}
          </a>
        ))}
      </div>

      {/* Mobile Nav Toggle */}
      <div className="md:hidden flex items-center justify-center">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white bg-white/10 p-3 rounded-full border border-white/30 backdrop-blur-lg"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[90vw] bg-white/10 backdrop-blur-lg border border-white/30 rounded-3xl flex flex-col items-center py-6 space-y-6 md:hidden">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-white text-lg font-medium hover:text-white/80 transition"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default NavBar;
