"use client";

import React from 'react';

// STEP 1: Import your images here
 import sphere from '../../assets/image/holo-sphere.png';
 import book from '../../assets/image/ourstory_book.png';
 import bgImage from '../../assets/image/aboutbg.png';


const AboutPage = () => {
  return (
    <div
      id="about"
      className="relative overflow-hidden py-8 w-full min-h-screen bg-black"
    >
      {/* Background Image Container */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}

      ></div>

      {/* Content Overlay */}
      <div className="relative z-10">
        <div className="flex-col justify-center">
          <h1
            className="text-4xl md:text-5xl font-bold bg-gradient-to-b from-purple-300 to-purple-500 bg-clip-text text-transparent 
              text-center  leading-tight md:leading-[72px] 
              relative font-raleway my-6 md:my-10"
          >
            ABOUT US
          </h1>
          <h2
            className="text-white text-center font-semibold 
              text-xl sm:text-2xl md:text-[36px] 
              leading-snug md:leading-[36px] 
              font-raleway my-6 md:my-10"
          >
            Who is SQARIS?
          </h2>
          <p className="text-[#898989] text-center font-normal text-md md:text-xl   font-raleway max-w-[1320px] mx-auto px-4 my-10 md:my-20">
            We're not your typical AI company that promises to revolutionize everything and then delivers a chatbot that can't understand sarcasm. At Sqaris, we build artificial intelligence that's actually intelligent — intuitive platforms powered by machine learning and large language models that solve real problems, not just impressive demos.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center px-4">
          {/* Mission */}
          <Card
            title="Mission"
            content="Empowering industries with intelligent AI platforms and robotics system through engineering excellence."
          />
          <div className="h-10" />
          {/* Vision */}
          <Card
            title="Vision"
            content="While SQARIS currently operates in select regions, we are actively expanding our reach. Our goal is to deliver intelligent, accessible, and responsible AI experiences to users across the globe."
          />
        </div>

        <OurStory />
      </div>
    </div>
  );
};
export default AboutPage;

function Card({ title, content }) {
  return (
    // UPDATED: max-width changed from 984px to 1320px to match the OurStory component
    <div className="relative w-full max-w-4xl h-auto md:h-[200px] mx-auto">
      <div className="absolute inset-0 border border-purple-400 rounded-[28px] backdrop-blur-sm opacity-60" />
      <div className="absolute inset-0 overflow-hidden rounded-[28px]">
        <div
          className="absolute w-[200%] h-[150%] -left-[60%] -top-[30%]"
          style={{
            background:
              'radial-gradient(35.86% 47.32% at 63.97% 52.15%, rgba(140, 69, 255, 0.3) 40.93%, rgba(0, 0, 0, 0) 100%)',
            mixBlendMode: 'screen',
            filter: 'blur(54.9526px)',
            transform: 'rotate(162.8deg)',
          }}
        />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center p-4 sm:p-6 text-center h-full">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent mb-4 sm:mb-6">
          {title}
        </h2>
        <p className="text-gray-300 text-sm sm:text-base italic leading-relaxed px-2 sm:px-6">
          {content}
        </p>
      </div>
    </div>
  );
}


function OurStory() {
  return (
    <div className="relative mx-auto mt-10 px-4 sm:px-8 w-full max-w-6xl py-8">
      {/* Sphere positioned at bottom right corner */}
      <div className="hidden md:block absolute -bottom-16 -right-28 z-30">
        <img
          src={sphere}
          alt="3D Sphere"
          className="w-[180px] sm:w-[240px] md:w-[280px] h-auto object-contain"
          style={{ filter: 'brightness(0.8) contrast(1.2)' }}
        />
      </div>

      <div className="relative w-full rounded-3xl border border-white/10 px-6 sm:px-10 py-8 sm:py-12 overflow-hidden flex flex-col items-center justify-center">
        {/* Background gradient effect */}
        <div
          className="absolute bg-purple-500/10 rounded-full"
          style={{
            width: '1333px',
            height: '1007px',
            left: '-29px',
            top: '-361px',
            filter: 'blur(200px)',
          }}
        />

        {/* Content container */}
        <div className="relative flex flex-col gap-6 sm:gap-8 items-center justify-center w-full max-w-5xl">
          {/* Header section */}
          <div className="flex flex-col gap-3 items-center">
            <img 
                src={book} 
                alt="Our Story Icon" 
                className="w-8 h-8 md:w-16 md:h-16" 
            />
            <h2 className="text-white text-center font-bold text-2xl sm:text-3xl font-raleway">
              Our story
            </h2>
          </div>

          {/* Description text - flowing paragraph */}
          <div className="text-center font-normal font-raleway w-full">
            <p className="text-[#898989] text-sm sm:text-md leading-relaxed sm:leading-[32px] px-2 sm:px-8">
              Established in 2024 by the innovative engineer Gokul Gopalan, SQARIS is transforming the software
              landscape with AI and ML. What started as a small, innovation-focused team has evolved into a
              powerful entity developing intelligent, scalable solutions — ranging from social care applications
              to LLM-driven platforms. At SQARIS, we combine precise engineering with ethical AI to create
              technology that is smarter, more interconnected, and centered around human needs. Become a part of our mission to shape an intelligent future.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}