"use client";

import React from "react";
import { InfiniteMovingCards } from "../ui/InfiniteMovingCards";

// Replace with your actual image imports
import profileimg from "../../assets/image/profileimg.png"


export function InfiniteMovingCardsElement() {
  return (
    <div className="  py-8  flex flex-col antialiased bg-white dark:bg-black  items-center justify-center relative overflow-hidden">
      <h1 className="text-transparent text-4xl md:text-6xl lg:text-6xl bg-clip-text bg-gradient-to-br to-white from-[#8C45FF] text-center font-bold  leading-[72px] font-raleway mt-50 mb-10">
          OUR TEAM
        </h1>
      <InfiniteMovingCards items={team} direction="left" speed="slow" />
    </div>
  );
}

const team = [
  {
    image: profileimg,
    name: "Gokul Gopalan",
    designation: "CEO Founder",
    dob: "15 March 2003",
    address: "Kalpetta, Wayanad,\nKerala – 673121",
    joinDate: "10 June 2025",
  },
  {
    image: profileimg,
    name: "Akhil Menon",
    designation: "ML Engineer",
    dob: "12 Dec 2000",
    address: "Kozhikode, Kerala",
    joiningDate: "01 Jan 2024",
  },
  {
    image: profileimg,
    name: "Sneha Raj",
    designation: "Flutter Dev",
    dob: "22 July 1999",
    address: "Thrissur, Kerala",
    joiningDate: "05 May 2023",
  },
  {
    image: profileimg,
    name: "Akhil Menon",
    designation: "ML Engineer",
    dob: "12 Dec 2000",
    address: "Kozhikode, Kerala",
    joiningDate: "01 Jan 2024",
  },
  {
    image: profileimg,
    name: "Sneha Raj",
    designation: "Flutter Dev",
    dob: "22 July 1999",
    address: "Thrissur, Kerala",
    joiningDate: "05 May 2023",
  },
];
