"use client";

import React from "react";
// Make sure to install react-icons: npm install react-icons
import {
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

// Your logo is now imported
import logo from "../../assets/image/footerlogo.png";
import { FaFacebook, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black text-white  px-6 py-12 w-full">
      <div className="max-w-7xl mx-auto">
        {/* UPDATED: Grid layout changed for better mobile responsiveness */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 text-sm">
          {/* Column 1: Logo & Description */}
          {/* UPDATED: This column now spans 2 columns on mobile/tablet */}
          <div className="col-span-2 lg:col-span-1">
            <img src={logo} alt="SQARIS Logo" className="h-7 mb-4" />
            <p className="text-gray-400 pr-4">
              Crafting digital excellence through innovative solutions and
              cutting-edge technology.
            </p>
            <div className="flex space-x-4 mt-6 text-lg">
              <a
                href="https://www.linkedin.com/company/sqaris/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-300 hover:text-white"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-300 hover:text-white"
              >
                <FaXTwitter />
              </a>
              <a
                href="https://www.instagram.com/sqaris.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-300 hover:text-white"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-300 hover:text-white"
              >
                <FaFacebook />
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          {/* UPDATED: This column is now hidden on screens smaller than lg */}
          <div className="hidden lg:block">
            <h3 className="text-lg font-semibold mb-4 text-white">Services</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  UI/UX Design
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Mobile App Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Robotics and Automation
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Our services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Our projects
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Career
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Contact us
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
            <ul className="space-y-3 text-white">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-purple-300 mt-1 flex-shrink-0" />
                <span>Sqaris, Thrissur, Kerala</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-purple-300 flex-shrink-0" />
                <span>+91 9539 378 327</span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-purple-300 flex-shrink-0" />
                <span>sqaris.in@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-12 border-t border-gray-800 pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500">
          <p className="mb-4 sm:mb-0">Copyright © 2025 SQARIS</p>
          <div className="text-center">
            <a href="#" className="hover:text-white">
              All Rights Reserved
            </a>
            <span className="mx-2">|</span>
            <a href="#" className="text-purple-400 hover:text-white">
              Terms and Conditions
            </a>
            <span className="mx-2">|</span>
            <a href="#" className="text-purple-400 hover:text-white">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
