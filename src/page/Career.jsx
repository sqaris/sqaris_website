import React from "react";

import CareerElement from "../components/elements/CareerElement";
import career from "../assets/image/career/career.png";

const Career = () => {
  return (
    <div
      className="bg-gradient-to-br from-[#100F13] to-[#241a3d]  text-white  bg-cover"
      style={{
        backgroundImage: `url(${career})`,
      }}
    >
      {/* Font Awesome for icons */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
      />
      <style>{`
        @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
            animation: spin-slow 15s linear infinite;
        }
       `}</style>
      <main className="flex justify-center items-center min-h-screen p-4 sm:p-8 overflow-x-hidden">
        <CareerElement />
      </main>
    </div>
  );
};

export default Career;
