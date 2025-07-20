"use client";

import React from "react";
import backgroundImage from "../../assets/image/background.jpg";
import BlurText from "../ui/BlurText"; // Ensure path is correct

const JoinUsSection = () => {
  const handleAnimationComplete = () => {
    console.log("Join Us animation complete");
  };

  return (
    <div
      className="relative h-screen w-full bg-cover bg-center flex items-center text-white"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Animated Content */}
      <div className="relative z-10 px-6 md:px-16 max-w-4xl">
        <BlurText
          text="Join Us"
          delay={100}
          animateBy="words"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
          className="text-4xl md:text-6xl font-bold mb-6 text-left"
        />
        <BlurText
          text="Not Just to Work, But to Belong, Lead and Thrive"
          delay={300}
          animateBy="words"
          direction="top"
          className="text-lg md:text-4xl max-w-2xl text-left"
        />
      </div>
    </div>
  );
};

export default JoinUsSection;
