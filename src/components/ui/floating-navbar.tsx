"use client";

import React, { JSX, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion"; // use framer-motion instead of motion/react
import { cn } from "../../lib/utils";

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
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - scrollYProgress.getPrevious()!;
      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        setVisible(direction < 0);
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: -100 }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
        className={cn(
          "fixed top-10 left-1/3 -translate-x-1/2 z-50 w-[558px] h-[69px] bg-transparent border border-white/30 backdrop-blur-md rounded-[24px] px-8 py-4 flex items-center justify-center space-x-8", className
        )}
      >
        <ul className="flex items-center justify-center space-x-8">
          {navItems.map((item, idx) => (
            <li key={idx}>
              <a
                href={item.link}
                className="text-white text-sm font-medium hover:text-white/80 transition"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </motion.div>
    </AnimatePresence>
  );
};
