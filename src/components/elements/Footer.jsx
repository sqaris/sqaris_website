import logo from "../../assets/image/logo.png";
import {
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & Description */}
        <div>
          <img src={logo} alt="CEARS Logo" className="h-16 mb-2" />
          <p className="text-sm">
            Crafting digital excellence through innovative solutions and
            cutting-edge technology.
          </p>
          <div className="flex space-x-4 mt-4 text-xl">
            <a
  href="https://www.linkedin.com/in/yourusername"
  target="_blank"
  rel="noopener noreferrer"
>
  <FaLinkedin className="text-white hover:text-gray-400 cursor-pointer" />
</a>

<a
  href="https://x.com/sqarisdottech"
  target="_blank"
  rel="noopener noreferrer"
>
  <FaTwitter className="text-white hover:text-gray-400 cursor-pointer" />
</a>

<a
  href="https://github.com/yourusername"
  target="_blank"
  rel="noopener noreferrer"
>
  <FaGithub className="text-white hover:text-gray-400 cursor-pointer" />
</a>

<a
  href="https://www.instagram.com/sqaris.in/"
  target="_blank"
  rel="noopener noreferrer"
>
  <FaInstagram className="text-white hover:text-gray-400 cursor-pointer" />
</a>

          </div>
        </div>

        {/* Services — Hidden on mobile */}
        <div className="hidden md:block">
          <h3 className="text-lg font-semibold mb-4">Services</h3>
          <ul className="space-y-1 text-sm">
            <li>UI/UX Design</li>
            <li>Web Development</li>
            <li>Mobile App Development</li>
            <li>Robotics & Automation</li>
          </ul>
        </div>

        {/* Mobile-only wrapper for Company + Contact in a row */}
        <div className="grid grid-cols-2 gap-6 md:hidden">
          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>About Us</li>
              <li>Our Work</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-white text-base" />
                Thrissur
              </li>
              <li className="flex items-center gap-2">
                <FaPhoneAlt className="text-white text-base" />
                +91 98953 26699
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-white text-base" />
                contact@gmail.com
              </li>
            </ul>
          </div>
        </div>

        {/* Desktop-only: Company */}
        <div className="hidden md:block">
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li>Our Work</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Desktop-only: Contact */}
        <div className="hidden md:block">
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-white text-base" />
              Thrissur
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-white text-base" />
              +91 98953 26699
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-white text-base" />
              contact@gmail.com
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-xs text-gray-400">
        © 2025 SQARIS. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
