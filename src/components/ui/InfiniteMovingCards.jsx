"use client";

import React, { useEffect, useState, useRef } from "react";
import { clsx } from "clsx";

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

      let duration = "20s";
      if (speed === "fast") duration = "10s";
      else if (speed === "slow") duration = "30s";

      containerRef.current.style.setProperty("--animation-duration", duration);
      setStart(true);
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className={clsx(
        "relative z-20 max-w-full overflow-hidden",
        "[mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={clsx(
          "flex min-w-max shrink-0 flex-nowrap gap-8 pt-[20px] pb-28",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            key={idx}
            className="w-[130px] h-[165px] md:w-[260px] md:h-[330px] lg:w-352 lg:h-569 
                       rounded-3xl flex-shrink-0 p-3 relative"
            style={{
              background: 'linear-gradient(105.88deg, rgba(255, 255, 255, 0) 0%, rgba(140, 69, 255, 0.5) 100%)'
            }}
          >
            <div className="w-full h-full rounded-2xl overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            <div className="text-center text-white my-4 text-[30px] font-raleway font-bold">
              {item.name}
            </div>
            <div className="text-center text-white my-2 text-24 font-raleway">
              {item.designation}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
