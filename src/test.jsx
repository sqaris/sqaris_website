import React from "react";
import { Boxes } from "../src/components/ui/Boxes";
import { cn } from "./lib/utils"; // <-- Adjust based on your folder structure

export function BackgroundBoxesDemo() {
  return (
    <div className="h-screen relative w-full overflow-hidden bg-black flex flex-col items-center justify-center ">
      <div className="absolute inset-0 w-full h-full bg-black z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
      <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
        Tailwind is Awesome
      </h1>
      <p className="text-center mt-2 text-neutral-300 relative z-20">
        Framer motion is the best animation library ngl
      </p>
    </div>
  );
}
