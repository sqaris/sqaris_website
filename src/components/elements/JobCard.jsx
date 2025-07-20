import React from 'react';
import calendar from '../../assets/image/calendar.png';
import time from '../../assets/image/time.png';
// import carrerBg from '../../assets/image/carrer.png'

const JobCard = ({
  title = "Job Title",
  category = "Developer",
  jobType = "Full-time",
  experience = "0-1 year",
  description = "Job description goes here...",
  technologies = [],
  backgroundImage = null,
  isComingSoon = false,
  onApply = () => {}
}) => {

  if (isComingSoon) {  
    return (
      <div className="flex flex-col gap-2.5 items-center justify-center relative bg-cover">
        <div className="border border-white/15 rounded-[32px] p-6 flex flex-col items-center justify-center h-[310px] w-full max-w-[564px] relative bg-black/60 backdrop-blur-sm overflow-hidden">
          {/* Centered purple gradient background effects */}
          <div className="absolute inset-0 rounded-[32px] overflow-hidden flex items-center justify-center">
            <div
              className="absolute w-[300px] h-[200px]"
              style={{
                background: 'radial-gradient(circle, rgba(140, 69, 255, 0.49) 0%, rgba(140, 69, 255, 0.34) 70%, rgba(0, 0, 0, 0) 100%)',
                filter: 'blur(100px)'
              }}
            />
            <div
              className="absolute w-[200px] h-[150px]"
              style={{
                background: 'radial-gradient(circle, rgba(139, 69, 255, 0.2) 0%, rgba(139, 69, 255, 0.05) 70%, rgba(0, 0, 0, 0) 100%)',
                filter: 'blur(50px)'
              }}
            />
          </div>

          {/* Coming Soon Content */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center">
            {backgroundImage && (
              <img
                src={backgroundImage}
                alt="Coming Soon"
                className="w-[116px] h-[116px] mb-4 opacity-70"
              />
            )}
            <h2 className="text-transparent bg-clip-text bg-gradient-to-br to-white from-[#8C45FF] text-2xl font-bold">
              More soon
            </h2>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2.5 items-center justify-center relative group">
      <div className="border border-white/15 rounded-[32px] p-6 flex flex-col gap-6 items-start justify-start h-417 w-full max-w-[564px] relative bg-black/60 backdrop-blur-sm overflow-hidden hover:border-white/30 transition-all duration-300 cursor-pointer">
        {/* Apply Now Button - appears on hover */}
        <button 
          onClick={onApply}
          className="absolute top-6 right-6 z-20 bg-white text-black px-4 py-2 rounded-lg font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-gray-100"
        >
          Apply now
        </button>

        {/* Background image if provided */}
        {backgroundImage && (
          <div className="absolute inset-0 rounded-[32px] overflow-hidden">
            <img
              src={backgroundImage}
              alt="Background"
              className="w-full h-full object-cover opacity-10"
            />
          </div>
        )}

        {/* Centered purple gradient background effects */}
        <div className="absolute inset-0 rounded-[32px] overflow-hidden flex items-center justify-center">
          <div
            className="absolute w-[300px] h-[200px]"
            style={{
              background: 'radial-gradient(circle, rgba(140, 69, 255, 0.49) 0%, rgba(140, 69, 255, 0.34) 70%, rgba(0, 0, 0, 0) 100%)',
              filter: 'blur(100px)'
            }}
          />
          <div
            className="absolute w-[200px] h-[150px]"
            style={{
              background: 'radial-gradient(circle, rgba(139, 69, 255, 0.2) 0%, rgba(139, 69, 255, 0.05) 70%, rgba(0, 0, 0, 0) 100%)',
              filter: 'blur(50px)'
            }}
          />
        </div>

        <div className="flex flex-col gap-3 items-start justify-start w-full relative z-10">
          <div className="flex flex-col gap-1 items-start justify-start w-full">
            <h2 className="text-white text-left font-bold text-3xl leading-[44px] font-sans w-full">
              {title}
            </h2>
            <p className="text-gray-400 text-left font-normal text-lg leading-6 font-sans w-full">
              {category}
            </p>
          </div>

          <div className="flex flex-row gap-4 items-center justify-start w-full">
            <div className="flex flex-row gap-1.5 items-center justify-start">
              <img src={time} alt="Time" />
              <span className="text-gray-400 text-center font-normal text-lg leading-6 font-sans">
                {jobType}
              </span>
            </div>
            <div className="flex flex-row gap-1.5 items-center justify-start">
              <img src={calendar} alt="Calendar" />
              <span className="text-gray-400 text-center font-normal text-lg leading-6 font-sans">
                {experience}
              </span>
            </div>
          </div>
        </div>

        <p className="text-gray-400 text-left font-normal text-lg leading-7 font-sans w-full relative z-10">
          {description}
        </p>

        <div className="flex flex-row gap-4 items-center justify-start relative z-10 flex-wrap">
          {technologies.map((tech, index) => (
            <div key={index} className="bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2 flex items-center justify-center">
              <span className="text-purple-400 font-medium text-sm">{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobCard;