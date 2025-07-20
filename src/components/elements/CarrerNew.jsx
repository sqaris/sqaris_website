import React from 'react'
import JobCard from './JobCard'
import torus from '../../assets/image/torus.png';
import careerBg from '../../assets/image/career.png';
import stars from '../../assets/image/stars.png';

const CareerNew = () => {
  const jobData = [
    {
      title: "MERN Stack Developer",
      category: "Developer",
      jobType: "Full-time",
      experience: "0-1 year",
      description: "Kickstart your journey as a MERN Stack Developer with our engineering team! Work on real-world, impactful projects using MongoDB, Express.js.",
      technologies: ["React", "Node.js", "MongoDB", "Express.js"]
    },
    {
      title: "Flutter Developer",
      category: "Developer",
      jobType: "Full-time",
      experience: "0-1 year",
      description: "Launch your career as a Flutter Developer with our expert team! Build high-performance mobile apps using Dart and Flutter.",
      technologies: ["Flutter", "Dart", "Firebase"]
    },
    {
      title: "UI/UX Designer",
      category: "Designer",
      jobType: "Full-time",
      experience: "0-1 year",
      description: "Start designing user-first experiences with our design team! Create clean, modern interfaces with real product impact.",
      technologies: ["Figma", "AdobeXD", "Web design"]
    },
    {
      title: "Testing / QA",
      category: "Developer",
      jobType: "Full-time",
      experience: "0-1 year",
      description: "Kickstart your QA journey with our engineering team! Test real-world applications through manual and automated methods.",
      technologies: ["Selenium", "JMeter"]
    },
    {
      title: "Machine Learning",
      category: "Developer",
      jobType: "Full-time",
      experience: "0-1 year",
      description: "Kickstart your ML journey with our engineering team! Build real-world models using Python, data, and algorithms.",
      technologies: ["TensorFlow", "PyTorch"]
    },
    {
      isComingSoon: true,
      backgroundImage: torus
    }
  ];

  return (
    <div className="relative w-full">
      {/* Background and overlays */}
      <div className="absolute inset-0 -z-10 w-full h-full">
        <img src={careerBg} alt="Background" className="w-full h-full object-cover absolute inset-0" />
        <img src={stars} alt="Overlay" className="w-full h-full object-cover absolute inset-0" />
      </div>

      {/* Actual content */}
      <div className="flex-col justify-center relative z-10">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-br to-white from-[#8C45FF] text-center font-bold text-[72px] leading-[72px] font-raleway m-10">
          CAREER
        </h1>
        <h2 className="text-white text-center font-semibold text-[36px] font-raleway my-10">
          Equal employment Opportunity
        </h2>
        <p className="text-[#898989] text-center font-normal text-[24px] leading-[38.83px] font-raleway max-w-[1320px] mx-auto px-4 my-20">
          At SQARIS, we are committed to building an inclusive and diverse workplace. We are an equal opportunity employer and do not discriminate based on race, color, ethnicity, ancestry, national origin, religion, sex, gender identity or expression, sexual orientation, age, disability, veteran status, genetic information, marital status, or any other legally protected status.
        </p>
        <h2 className="text-white text-center font-semibold text-[36px] font-raleway my-10">
          Open <span className='text-transparent bg-clip-text bg-gradient-to-br to-white from-[#8C45FF]'>Positions</span>
        </h2>
        <p className="text-[#898989] text-center font-normal text-[24px] leading-[38.83px] font-raleway max-w-[1320px] mx-auto px-4 my-20">
          Find your perfect role and take the next step in your career journey
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8 px-4 max-w-[1320px] mx-auto mb-20 relative z-10">
        {jobData.map((job, index) => (
          <JobCard key={index} {...job} />
        ))}
      </div>
    </div>
  );
};

export default CareerNew;
