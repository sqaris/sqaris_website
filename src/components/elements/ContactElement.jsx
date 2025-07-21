"use client";

import React, { useState, useEffect } from 'react';
// Make sure to install react-icons: npm install react-icons
import { FaLocationDot, FaPhone, FaEnvelope } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import mapImage from '../../assets/image/map.svg';

// STEP 1: Import your background image
import contactBoxBg from '../../assets/image/contact/contact_box_bg.png';

// A reusable component for the floating cube animation
const FloatingCube = () => (
<div className="absolute -top-8 -right-8 -z-10 opacity-15">
    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-12 md:h-12" style={{ perspective: '1000px' }}>
        <div className="w-full h-full relative" style={{ transformStyle: 'preserve-3d', animation: 'floatRotate 12s infinite linear' }}>
            <div className="absolute w-full h-full border-2 border-accent" style={{ transform: 'rotateY(0deg) translateZ(calc(var(--size, 40px) / 2))' }}></div>
            <div className="absolute w-full h-full border-2 border-accent" style={{ transform: 'rotateY(90deg) translateZ(calc(var(--size, 40px) / 2))' }}></div>
            <div className="absolute w-full h-full border-2 border-accent" style={{ transform: 'rotateY(180deg) translateZ(calc(var(--size, 40px) / 2))' }}></div>
            <div className="absolute w-full h-full border-2 border-accent" style={{ transform: 'rotateY(-90deg) translateZ(calc(var(--size, 40px) / 2))' }}></div>
            <div className="absolute w-full h-full border-2 border-accent" style={{ transform: 'rotateX(90deg) translateZ(calc(var(--size, 40px) / 2))' }}></div>
            <div className="absolute w-full h-full border-2 border-accent" style={{ transform: 'rotateX(-90deg) translateZ(calc(var(--size, 40px) / 2))' }}></div>
        </div>
    </div>
    <style>{`
        @keyframes floatRotate {
        0% { transform: translateY(0) rotateX(0) rotateY(0); }
        50% { transform: translateY(-25px) rotateX(180deg) rotateY(180deg); }
        100% { transform: translateY(0) rotateX(360deg) rotateY(360deg); }
        }
        /* CSS variables to control the cube's 3D depth based on its size */
        .w-28 { --size: 112px; }
        .w-24 { --size: 96px; }
        .w-20 { --size: 80px; }
        .w-12 { --size: 48px; }
        .w-10 { --size: 40px; }
    `}</style>
</div>
);


// A reusable sub-component for the four info items
const InfoItem = ({ icon, title, text }) => (
<div className="flex flex-col items-center text-center">
    <div className="flex justify-center items-center w-12 h-12 bg-[#2e2a3a] rounded-full mb-3">
    <span className="text-xl text-accent">{icon}</span>
    </div>
    <h4 className="text-lg font-semibold text-white mb-1">{title}</h4>
    <p className="text-[#a9a6b3]">{text}</p>
</div>
);

// The main Contact Us component
const ContactElement = () => {
// State for form fields
const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
});
// State for submission status
const [status, setStatus] = useState('Send now');

// Handle input changes
const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
};

// Handle form submission
const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');


    window.emailjs.send(
    'YOUR_SERVICE_ID',  // <-- Replace with your EmailJS Service ID
    'YOUR_TEMPLATE_ID', // <-- Replace with your EmailJS Template ID
    formData,
    'YOUR_PUBLIC_KEY'   // <-- Replace with your EmailJS Public Key
    ).then((result) => {
        console.log('SUCCESS!', result.text);
        setStatus('Sent successfully!');
        setFormData({ name: '', email: '', message: '' }); // Clear form
    }, (error) => {
        console.log('FAILED...', error.text);
        setStatus('Failed to send');
    });
};

// Reset status after a few seconds
useEffect(() => {
    if (status === 'Sent successfully!' || status === 'Failed to send') {
    const timer = setTimeout(() => {
        setStatus('Send now');
    }, 3000);
    return () => clearTimeout(timer);
    }
}, [status]);


return (
    <div className="font-sans text-white w-full py-20 max-w-6xl mx-auto text-center relative">
    {/* Main Title */}
    <h1 className="text-4xl md:text-6xl lg:text-6xl font-bold text-[#BE97FE] uppercase tracking-wider mb-6" style={{ textShadow: '0 0 15px rgba(159, 85, 255, 0.5)' }}>
        Contact Us
    </h1>

    {/* Hiring Section */}
    <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-2">WE'RE HIRING</h2>
        <p className="max-w-lg mx-auto text-[#a9a6b3]">
        Want to create bold impact through design & engineering?
        Apply to open positions by writing to us at{' '}
        <a href="mailto:sqaris.gm@gmail.com" className="text-accent font-medium hover:underline">
            sqaris.gm@gmail.com
        </a>
        </p>
    </div>

    {/* Main Content Grid */}
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 text-left">

        {/* Left Side: Contact Form (takes 3/5 width on large screens) */}
        <div 
            className="lg:col-span-3 p-8 md:p-10 rounded-2xl border border-[rgba(159,85,255,0.2)] backdrop-blur-sm relative lg:flex lg:flex-col"
            // STEP 2: Apply the background image here
            style={{
                backgroundImage: `url(${contactBoxBg})`,
                opacity:'85%',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
        <FloatingCube />
        {/* This wrapper ensures content is above the cube and maintains the flex layout */}
        <div className="relative z-10 flex flex-col flex-grow">
            <p className="text-lg text-[#a9a6b3] font-medium">Contact us</p>
            <h3 className="text-3xl font-semibold text-white mb-4">Get In Touch</h3>
            <form onSubmit={handleSubmit} className="flex flex-col flex-grow">
            <div className="mb-6">
                <label htmlFor="name" className="block text-sm text-left text-[#a9a6b3] mb-2">Name</label>
                <input type="text" id="name" name="name" placeholder="Your name.." value={formData.name} onChange={handleChange} required className="w-full p-3 bg-transparent  rounded-lg border-2 border-[#262430] focus:border-accent focus:outline-none transition-colors duration-300" />
            </div>
            <div className="mb-6">
                <label htmlFor="email" className="block text-sm text-left text-[#a9a6b3] mb-2">Email</label>
                <input type="email" id="email" name="email" placeholder="example@gmail.com" value={formData.email} onChange={handleChange} required className="w-full p-3 border-2 bg-transparent border-[#262430] rounded-lg  focus:border-accent focus:outline-none transition-colors duration-300" />
            </div>
            <div className="mb-8 flex flex-col flex-grow">
                <label htmlFor="message" className="block text-sm text-left text-[#a9a6b3] mb-2">Message</label>
                <textarea id="message" name="message" placeholder="Type here.." value={formData.message} onChange={handleChange} required className="w-full p-4 border-2 border-[#262430] bg-transparent rounded-lg focus:border-accent focus:outline-none transition-colors duration-300 min-h-[80px] resize-y flex-grow"></textarea>
            </div>
            <button type="submit" disabled={status === 'Sending...'} className="w-full p-3 bg-white text-[#262430] text-lg font-semibold rounded-3xl hover:bg-accent hover:text-[#a9a6b3] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
                {status}
            </button>
            </form>
        </div>
        </div>

        {/* Right Side: Info & Map (takes 2/5 width on large screens) */}
        <div className="lg:col-span-2 flex flex-col justify-start gap-8">
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 text-purple-300">
            <InfoItem icon={<FaLocationDot />} title="Location" text="SQARIS, Thrissur, Kerala" />
            <InfoItem icon={<FaPhone />} title="Phone" text="+91 9539 378 327" />
            <InfoItem icon={<FaEnvelope />} title="Email" text="sqaris.in@gmail.com" />
            <InfoItem icon={<FaWhatsapp />} title="Whatsapp" text="+91 9539 378 327" />
        </div>
        <div className="w-full h-64 rounded-xl overflow-hidden border border-[rgba(159,85,255,0.2)]">
            <img src={mapImage} alt="Map of Thrissur, Kerala" className="w-full h-full object-cover grayscale invert brightness-75" />
        </div>
        </div>
    </div>
    </div>
);
};

export default ContactElement;