import React from "react";
import { Boxes } from "../ui/Boxes";
import { cn } from "../../lib/utils"; // <-- Adjust based on your folder structure

export function BackgroundBoxes() {
  return (
    <div className="h-screen relative  w-full overflow-hidden bg-black flex flex-col items-center justify-center ">
      <div className="absolute inset-0 w-full h-screen bg-black z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
      <div className="lg:max-w-[940px] md:max-w-[560px] max-w-72">
        <h1
          className={cn(
            "lg:pt-20 md:text-6xl  font-semibold text-3xl text-white text-center relative z-20"
          )}
        >
          Welcome to the <br />
          Future with SQARIS
        </h1>
        <p className="text-center mt-2 lg:text-md md:text-md text-sm text-neutral-300 relative z-20">
          Where Software Application Meets Intelligence. Innovation Drives
          Excellence
        </p>
      </div>
    </div>
  );
}
