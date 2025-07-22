"use client";

import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
} from "framer-motion";
import { cn } from "../../lib/utils"; // Assuming you have a utility function for class names

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
  }[];
  className?: string;
}) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleScroll = () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      
      if (window.scrollY > 50) {
          setVisible(true); 
          timeoutId = setTimeout(() => {
              setVisible(false);
          }, 3000);
      } else {
          setVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);


  return (
    // This outer div is a full-width container that uses flexbox to center the navbar.
    <div className="fixed top-8 w-full z-50 flex justify-center">
        <AnimatePresence mode="wait">
        {visible && (
            <motion.div
                initial={{
                opacity: 0,
                y: -100,
                }}
                animate={{
                y: 0,
                opacity: 1,
                }}
                exit={{
                y: -100,
                opacity: 0,
                }}
                transition={{
                duration: 0.5,
                ease: "easeInOut",
                }}
                className={cn(
                "w-auto bg-black/50 border border-white/20 backdrop-blur-md rounded-full px-8 py-4 flex items-center justify-center space-x-8",
                className
                )}
            >
                <ul className="flex items-center justify-center space-x-8">
                {navItems.map((item, idx) => (
                    <li key={`link-${idx}`}>
                    <a
                        href={item.link}
                        className="text-white text-sm font-medium hover:text-purple-300 transition-colors"
                    >
                        {item.name}
                    </a>
                    </li>
                ))}
                </ul>
            </motion.div>
        )}
        </AnimatePresence>
    </div>
  );
};