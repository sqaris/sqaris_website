"use client";

import React from "react";
import { motion } from "framer-motion";

const AboutHead = () => {


  return (
    <div className="mt-20 sm:mt-20 mt-40">
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
          About{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-500">
            SQARIS
          </span>
        </h2>
      <div className="h-[2px] w-92 lg:max-w-[90vw] mx-auto mt-2 bg-gradient-to-r from-black via-[#3c3c3c] to-black mb-[37px]" />
      <p className="mx-auto text-gray-100 lg:max-w-[940px] md:max-w-[560px] max-w-72 text-center mb-10">
        At SQARIS, we believe in lifecycle-aligned rewards & performance, high
        accountability and initiative, maintaining an 8-hour
        <br />
        productive workday minimum, with no part-time/side employment. We
        operate with transparent contribution to operating cost, growth, and
        valuation.
      </p>


    
    </div>
  );
};

export default AboutHead;
