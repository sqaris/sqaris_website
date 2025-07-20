"use client";

import React from "react";
import Jobcard from "./JobCard";

const CareerSection = () => {
  return (
    <section className="bg-black text-white py-20 px-4">
      <div className="max-w-4xl mx-auto mt-20">
        {/* Title with subtle bottom border */}
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
         
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-500">
            Career
          </span>
          
        </h2>
        <div className="h-[2px] w-92 lg:max-w-[90vw] mx-auto mt-2 bg-gradient-to-r from-black via-[#3c3c3c] to-black mb-[37px]" />


        {/* Subheading */}
        <div className="text-center mb-6">
          <h3 className="text-2xl sm:text-3xl font-semibold mb-4">
            Equal Employment{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">
              Opportunity
            </span>
          </h3>
        </div>

        {/* Paragraphs */}
        <div className="text-center space-y-3 text-sm sm:text-base leading-relaxed text-gray-300">
          <p>
            At SQARIS, we are committed to building an inclusive and diverse workplace.
          </p>
          <p>
            We are an equal opportunity employer and do not discriminate based on race, color, ethnicity, ancestry,
            national origin, religion, sex, gender identity or expression, sexual orientation, age, disability,
            veteran status, genetic information, marital status, or any other legally protected status.
          </p>
          <Jobcard/>
        </div>
      </div>
    </section>
  );
};

export default CareerSection;
