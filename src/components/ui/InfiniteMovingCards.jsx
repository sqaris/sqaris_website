"use client";

import React, { useEffect, useState, useRef } from "react";
import { clsx } from "clsx";

// A utility function to combine class names, often used with Tailwind CSS.
// You can install it with `npm install clsx`
const cn = (...inputs) => {
  return clsx(inputs);
};


export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (containerRef.current && scrollerRef.current) {
      const content = Array.from(scrollerRef.current.children);
      content.forEach((item) => {
        const clone = item.cloneNode(true);
        scrollerRef.current.appendChild(clone);
      });

      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );

      let duration = "40s"; // Default duration
      if (speed === "fast") duration = "20s";
      else if (speed === "slow") duration = "80s";

      containerRef.current.style.setProperty("--animation-duration", duration);
      setStart(true);
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative z-20 max-w-full overflow-hidden",
        "[mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-max shrink-0 flex-nowrap gap-8 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            key={idx}
            className="w-[180px] md:w-[260px] lg:w-[352px] flex-shrink-0"
          >
            {/* This div now contains the gradient border and the image */}
            <div
                // UPDATED: Heights adjusted to match the 1:1.267 aspect ratio
                className="h-[228px] md:h-[330px] lg:h-[446px] rounded-3xl p-2 md:p-3 relative"
                style={{
                    background: 'linear-gradient(105.88deg, rgba(255, 255, 255, 0) 0%, rgba(140, 69, 255, 0.5) 100%)'
                }}
            >
                <div className="w-full h-full rounded-2xl overflow-hidden">
                    <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
            {/* Text is now outside the bordered container */}
            <div className="pt-4">
                <div className="text-center text-white text-lg md:text-xl font-raleway font-semibold">
                    {item.name}
                </div>
                <div className="text-center text-gray-300 text-sm md:text-base font-raleway">
                    {item.designation}
                </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
