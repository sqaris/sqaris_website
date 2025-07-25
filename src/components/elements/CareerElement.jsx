    "use client";

    import React from "react";
    import { motion } from "framer-motion";
    // You might not need useNavigate if the button's purpose changes.
    // If you do, make sure your component is wrapped in a Router.
    // import { useNavigate } from "react-router-dom";

    // Your image is now imported
    import ringImage from '../../assets/image/career/image.png';
    // Import the new background image
    import box_bg from '../../assets/image/career/box_bg.png';


    const jobData = [
    {
    id: 1,
    title: "MERN Stack Developer",
    department: "Developer",
    type: "Full-time",
    experience: "0–1 years",
    skills: ["React", "Node.js", "MongoDB", "Express.js"],
    description:
        "Kickstart your journey as a MERN Stack Developer with our engineering team! Work on real-world, impactful projects using MongoDB, Express.js, React, and Node.js.",
    },
    {
    id: 2,
    title: "Flutter Developer",
    department: "Developer",
    type: "Full-time",
    experience: "1–2 years",
    skills: ["Dart", "Flutter", "Firebase"],
    description:
        "Kickstart your journey as a Flutter Developer with our engineering team! Work on real-world, cross-platform apps using Flutter and Dart.",
    },
    {
    id: 3,
    title: "UI/UX Designer",
    department: "Design",
    type: "Full-time",
    experience: "1–2 years",
    skills: ["Figma", "Adobe XD", "Web Design"],
    description:
        "Kickstart your journey as a UI/UX Designer at SQARIS! Work on real-world digital products, craft intuitive interfaces, and enhance user experiences.",
    },
    {
    id: 4,
    title: "Testing / QA",
    department: "Developer",
    type: "Full-time",
    experience: "1+ years",
    skills: ["Selenium", "JMeter", "Postman"],
    description:
        "Kickstart your journey as a QA Engineer with our engineering team! Test real-world applications through manual and automated methods.",
    },
    {
    id: 5,
    title: "Machine Learning",
    department: "Developer",
    type: "Full-time",
    experience: "1+ years",
    skills: ["TensorFlow", "PyTorch"],
    description:
        "Kickstart your ML journey with our engineering team! Build real-world models using Python, data, and algorithms.",
    },
    ];

    const JobCard = ({ job, index }) => {
        return (
            <motion.div
                initial={{ opacity: 0, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative p-6 rounded-2xl border border-[rgba(159,85,255,0.2)] transition-all duration-300 hover:border-accent hover:shadow-lg hover:shadow-accent/20 flex flex-col"
                style={{ 
                backgroundImage: `url(${box_bg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
                }}
            >
                <div className="flex-grow">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-semibold text-white pr-20">{job.title}</h3>
                        {/* UPDATED: Button styles and responsive positioning */}
                        <a 
                            href="https://forms.gle/ocUFe5KQHdLajhdZ8"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute top-16 sm:top-6 right-6 px-4 py-1.5 bg-white text-purple-500 text-xs font-semibold rounded-xl transition-all duration-300 hover:text-[#1C1428] sm:opacity-0 sm:group-hover:opacity-100"
                        >
                            Apply now
                        </a>
                    </div>
                    <p className="text-sm text-[#a9a6b3] mb-4 md:mb-2">
                        {job.department}
                    </p>
                    <p className="text-sm text-[#a9a6b3] mb-4">
                        <i className="fa-regular fa-clock mr-1.5"></i>{job.type} &nbsp;•&nbsp; <i className="fa-solid fa-briefcase mr-1.5"></i>{job.experience}
                    </p>
                    <p className="text-sm text-gray-400 leading-relaxed mb-4">
                        {job.description}
                    </p>
                </div>
                
                <div className="flex flex-wrap items-end gap-2">
                    {job.skills.map((skill, i) => (
                        <span
                            key={i}
                            className="text-xs px-4 py-1.5 rounded-full bg-[#1C1428] text-[#8041EA] border border-[#251638]"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </motion.div>
        );
    };

    const MoreSoonCard = () => (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: jobData.length * 0.1 }}
            className="flex flex-col justify-center items-center p-6 rounded-2xl border border-[rgba(159,85,255,0.2)] min-h-[300px]"
            style={{ 
            backgroundImage: `url(${box_bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            perspective: '800px' 
            }}
        >
            <motion.img 
                src={ringImage}
                alt="More positions coming soon" 
                className="w-36 h-36 mb-4"
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <h3 className="text-xl font-semibold bg-gradient-to-r from-purple-500 to-purple-100 bg-clip-text text-transparent ">More soon</h3>
        </motion.div>
    );


    const CareerElement = () => {
    return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-10">
        <div className="max-w-6xl mx-auto">
        <div className="text-center">
            <h1 className="text-4xl md:text-6xl lg:text-6xl font-bold text-[#BE97FE] uppercase tracking-wider mb-6" style={{ textShadow: '0 0 15px rgba(159, 85, 255, 0.5)' }}>
                Career
            </h1>
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">
                Equal employment Opportunity
            </h2>
            <p className="text-sm text-[#a9a6b3] max-w-3xl mx-auto mb-16">
                At SQARIS, we are committed to building an inclusive and diverse workplace. We are an equal opportunity employer and do not discriminate based on race, color, ethnicity, ancestry, national origin, religion, sex, gender identity or expression, sexual orientation, age, disability, veteran status, genetic information, marital status, or any other legally protected status.
            </p>
        </div>
        
        <div className="text-center">
            <h3 className="text-3xl font-bold text-accent mb-2">
            Open <span className="text-[#BE97FE]">Positions</span>
            </h3>
            <p className="text-gray-400 text-sm sm:text-base mb-12">
                Find your perfect role and take the next step in your career journey
            </p>

            <div className="grid md:grid-cols-2 gap-8 text-left">
                {jobData.map((job, index) => (
                <JobCard key={job.id} job={job} index={index} />
                ))}
                <MoreSoonCard />
            </div>
        </div>
        </div>
    </section>
    );
    };
    export default CareerElement;