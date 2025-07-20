import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../../assets/image/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/home' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Career', href: '/career' },
    { name: 'Contact', href: '/contact' }
  ];

const navbarStyles = {
  background: '#000000', // Solid black background
  borderRadius: '40px',
  border: '1px solid #002725',
};



  return (
    <>
      {/* Navbar Container */}
      <div className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] z-50">
        <div
          className="lg:max-w-[940px]  md:max-w-[560px] max-w-72 mx-auto lg:px-8 md:px-8 px-4 py-2 flex items-center justify-between relative h-[64px] md:h-[72px]"
          style={navbarStyles}
        >
          {/* Logo */}
          <div className="flex items-center">
            <a href="/home">
              <img
              src={logo}
              alt="Soaris Logo"
              className=" md:h-14 h-10 w-auto object-cover"
            />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-10">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-white text-base font-medium leading-6 hover:text-gray-400 transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white z-50"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu (Outside Fixed Nav) */}
      {isOpen && (
        <div className="lg:hidden fixed top-[100px] left-1/2 -translate-x-1/2 w-[90%] z-40 bg-black/90 backdrop-blur-md border border-gray-700 rounded-2xl p-6">
          <div className="flex flex-col space-y-4">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-white text-base font-medium hover:text-gray-400 transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
