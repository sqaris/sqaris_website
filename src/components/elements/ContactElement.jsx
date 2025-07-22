"use client";

import React, { useState, useEffect } from "react";
// Make sure to install react-icons: npm install react-icons
import { MdLocationCity } from "react-icons/md";
import { FaLocationDot, FaPhone, FaEnvelope } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
// Import the Google Maps library
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { motion } from "framer-motion";

// STEP 1: Import your images
import contactBoxBg from "../../assets/image/contact/contact_box_bg2.png";
import name from "../../assets/image/contact/name.png";
import email from "../../assets/image/contact/email.png";
import msg from "../../assets/image/contact/msg.png";
import purpleCube from "../../assets/image/contact/purple-cube.png"; // New image import

// --- Components from your original code ---

// UPDATED: Replaced the FloatingCube component with an animated image
const FloatingImage = () => (
  <motion.img
    src={purpleCube}
    alt="Floating decorative cube"
    className="absolute -top-8 -right-8 w-16 h-16 sm:w-20 sm:h-20 z-0"
    animate={{
      y: [0, -15, 0],
      rotate: [0, 45, 0],
    }}
    transition={{
      duration: 12,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

const InfoItem = ({ icon, title, text }) => (
  <div className="flex flex-col items-center text-center">
    <div className="flex justify-center items-center w-12 h-12 bg-[#2e2a3a] rounded-full mb-3">
      <span className="text-xl text-accent">{icon}</span>
    </div>
    <h4 className="text-lg font-semibold text-white mb-1">{title}</h4>
    <p className="text-[#a9a6b3]">{text}</p>
  </div>
);

// --- New Map Component ---

const MapComponent = () => {
  const mapStyles = {
    height: "100%",
    width: "100%",
  };

  const defaultCenter = {
    lat: 10.5276,
    lng: 76.2144, // Coordinates for Thrissur, Kerala
  };

  // Dark theme for the map to match the website's aesthetic
  const mapTheme = [
    { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
    { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
    { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
    {
      featureType: "administrative.locality",
      elementType: "labels.text.fill",
      stylers: [{ color: "#d59563" }],
    },
    {
      featureType: "poi",
      elementType: "labels.text.fill",
      stylers: [{ color: "#d59563" }],
    },
    {
      featureType: "poi.park",
      elementType: "geometry",
      stylers: [{ color: "#263c3f" }],
    },
    {
      featureType: "poi.park",
      elementType: "labels.text.fill",
      stylers: [{ color: "#6b9a76" }],
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [{ color: "#38414e" }],
    },
    {
      featureType: "road",
      elementType: "geometry.stroke",
      stylers: [{ color: "#212a37" }],
    },
    {
      featureType: "road",
      elementType: "labels.text.fill",
      stylers: [{ color: "#9ca5b3" }],
    },
    {
      featureType: "road.highway",
      elementType: "geometry",
      stylers: [{ color: "#746855" }],
    },
    {
      featureType: "road.highway",
      elementType: "geometry.stroke",
      stylers: [{ color: "#1f2835" }],
    },
    {
      featureType: "road.highway",
      elementType: "labels.text.fill",
      stylers: [{ color: "#f3d19c" }],
    },
    {
      featureType: "transit",
      elementType: "geometry",
      stylers: [{ color: "#2f3948" }],
    },
    {
      featureType: "transit.station",
      elementType: "labels.text.fill",
      stylers: [{ color: "#d59563" }],
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [{ color: "#17263c" }],
    },
    {
      featureType: "water",
      elementType: "labels.text.fill",
      stylers: [{ color: "#515c6d" }],
    },
    {
      featureType: "water",
      elementType: "labels.text.stroke",
      stylers: [{ color: "#17263c" }],
    },
  ];

  return (
    <LoadScript googleMapsApiKey="AIzaSyB5MQdwuxFIG6Msf_At0bV2vPXuFwEkVkI">
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={13}
        center={defaultCenter}
        options={{
          styles: mapTheme,
          disableDefaultUI: true,
          zoomControl: true,
        }}
      >
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

// --- Updated Contact Us Component ---

const ContactElement = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("Send now");
  const [emailError, setEmailError] = useState(""); // State for email validation error

  // Function to validate email format
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Real-time validation for the email field
    if (name === "email") {
      if (!validateEmail(value)) {
        setEmailError("Please enter a valid email address.");
      } else {
        setEmailError("");
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Final validation check before submitting
    if (!validateEmail(formData.email)) {
      setEmailError("Please enter a valid email address.");
      return; // Stop the submission if email is invalid
    }

    setEmailError(""); // Clear any previous errors
    setStatus("Sending...");

    if (window.emailjs) {
      window.emailjs
        .send(
          "service_hciprkm",
          "template_sd6qjbb",
          formData,
          "zptWwnTUzqhJIi4Qm"
        )
        .then(
          (result) => {
            console.log("SUCCESS!", result.text);
            setStatus("Sent successfully!");
            setFormData({ name: "", email: "", message: "" });
          },
          (error) => {
            console.log("FAILED...", error.text);
            setStatus("Failed to send");
          }
        );
    } else {
      console.error("EmailJS script not loaded");
      setStatus("Failed to send");
    }
  };

  useEffect(() => {
    if (status === "Sent successfully!" || status === "Failed to send") {
      const timer = setTimeout(() => setStatus("Send now"), 3000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <div className="font-sans text-white w-full py-20 max-w-6xl mx-auto text-center relative">
      <h1
        className="text-4xl md:text-6xl lg:text-6xl font-bold text-[#BE97FE] uppercase tracking-wider mb-6"
        style={{ textShadow: "0 0 15px rgba(159, 85, 255, 0.5)" }}
      >
        Contact Us
      </h1>
      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-2">WE'RE HIRING</h2>
        <p className="max-w-lg mx-auto text-[#a9a6b3]">
          Want to create bold impact through design & engineering? Apply to open
          positions by writing to us at{" "}
          <a
            href="mailto:sqaris.gm@gmail.com"
            className="text-accent font-medium hover:underline text-purple-500"
          >
            sqaris.gm@gmail.com
          </a>
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 text-left">
        <div
          className="lg:col-span-3 p-8 md:p-10 rounded-2xl border border-[rgba(159,85,255,0.2)] relative lg:flex lg:flex-col"
          style={{
            backgroundImage: `url(${contactBoxBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <FloatingImage />
          <div className="relative z-10 flex flex-col flex-grow">
            <p className="text-lg text-[#a9a6b3] font-medium">Contact us</p>
            <h3 className="text-3xl font-semibold text-white mb-4">
              Get In Touch
            </h3>
            <form onSubmit={handleSubmit} className="flex flex-col flex-grow">
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-sm text-left text-[#a9a6b3] mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name.."
                  style={{
                    backgroundImage: `url(${name})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-transparent rounded-2xl border-2 border-[#262430] focus:border-accent focus:outline-none transition-colors duration-300"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-sm text-left text-[#a9a6b3] mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="example@gmail.com"
                  style={{
                    backgroundImage: `url(${email})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  value={formData.email}
                  onChange={handleChange}
                  required
                  // Conditionally apply a red border if there is an email error
                  className={`w-full p-3 border-2 bg-transparent rounded-2xl focus:border-accent focus:outline-none transition-colors duration-300 ${
                    emailError ? "border-red-500" : "border-[#262430]"
                  }`}
                />
                {/* Display the error message if it exists */}
                {emailError && (
                  <p className="text-red-500 text-xs mt-1">{emailError}</p>
                )}
              </div>
              <div className="mb-8 flex flex-col flex-grow">
                <label
                  htmlFor="message"
                  className="block text-sm text-left text-[#a9a6b3] mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Type here.."
                  style={{
                    backgroundImage: `url(${msg})`, // Assuming you meant msg here
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full p-4 border-2 border-[#262430] bg-transparent rounded-2xl focus:border-accent focus:outline-none transition-colors duration-300 min-h-[80px] resize-y flex-grow"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={status === "Sending..."}
                className="w-full p-3 bg-white text-[#262430] text-lg font-semibold rounded-2xl hover:bg-accent hover:text-[#a9a6b3] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status}
              </button>
            </form>
          </div>
        </div>

        <div className="lg:col-span-2 flex flex-col justify-start gap-8">
          <div className="grid grid-cols-2 gap-x-8 gap-y-10  text-purple-300 ">
            <InfoItem
              icon={<MdLocationCity />}
              title="Location"
              text="SQARIS, Thrissur, Kerala"
            />
            <InfoItem
              icon={<FaPhone />}
              title="Phone"
              text="+91 9539 378 327"
            />
            <InfoItem
              icon={<FaEnvelope />}
              title="Email"
              text="sqaris.in@gmail.com"
            />
            <InfoItem
              icon={<FaWhatsapp />}
              title="Whatsapp"
              text="+91 9539 378 327"
            />
          </div>
          <div className="w-full h-64 rounded-xl overflow-hidden border border-[rgba(159,85,255,0.2)]">
            <MapComponent />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactElement;
