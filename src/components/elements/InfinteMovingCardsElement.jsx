"use client";

import React from "react";
import { InfiniteMovingCards } from "../ui/InfiniteMovingCards";

// Replace with your actual image imports
import profileimg from "../../assets/image/profileimg.png";
import gokul from "../../assets/image/team/gokul.jpg";
import ajeesh from "../../assets/image/team/ajeesh.jpg";
import sangeeth from "../../assets/image/team/sangeeth.jpg";
import abhay from "../../assets/image/team/abhay.jpg";
import akshay from "../../assets/image/team/akshay.jpg";
import azlan from "../../assets/image/team/azlan.jpg";
import godwin from "../../assets/image/team/godwin.jpg";
import lakshmi from "../../assets/image/team/lakshmi.jpg";
import nayan from "../../assets/image/team/nayan.jpg";
import sachi from "../../assets/image/team/sachi.jpg";
import vishnu from "../../assets/image/team/vishnu.jpg";

import bg from "../../assets/image/team/bg.png";

export function InfiniteMovingCardsElement() {
  return (
    <div
      className="  py-8  flex flex-col antialiased bg-white dark:bg-black  items-center justify-center relative overflow-hidden  bg-cover"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <h1 className="text-transparent text-4xl md:text-6xl lg:text-6xl bg-clip-text bg-gradient-to-br to-white from-[#8C45FF] text-center font-bold  leading-[72px] font-raleway mt-50 mb-10">
        OUR TEAM
      </h1>
      <InfiniteMovingCards items={team} direction="left" speed="slow" />
    </div>
  );
}

const team = [
  {
    image: gokul,
    name: "Gokul Gopalan",
    designation: "CEO & Founder",
    dob: "",
    address: "",
    joiningDate: "",
  },
  {
    image: ajeesh,
    name: "Ajeesh P",
    designation: "CTO & Flutter Dev",
    dob: "",
    address: "",
    joiningDate: "",
  },
  {
    image: sangeeth,
    name: "Sangeeth P",
    designation: "CFO & UI/UX Designer",
    dob: "",
    address: "",
    joiningDate: "",
  },
  {
    image: abhay,
    name: "Abhay Aneesh",
    designation: "Senior UI/UX Designer",
    dob: "",
    address: "",
    joiningDate: "",
  },
  {
    image: vishnu,
    name: "Vishnu Divakar",
    designation: "Backend Dev",
    dob: "",
    address: "",
    joiningDate: "",
  },
  {
    image: lakshmi,
    name: "Lakshmi B Nair",
    designation: "Backend Dev",
    dob: "",
    address: "",
    joiningDate: "",
  },
  {
    image: azlan,
    name: "Azlan Abdulla",
    designation: "Backend Dev",
    dob: "",
    address: "",
    joiningDate: "",
  },
  {
    image: akshay,
    name: "Akshay Antony",
    designation: "Flutter Dev",
    dob: "",
    address: "",
    joiningDate: "",
  },
  {
    image: sachi,
    name: "Satchidhanand E",
    designation: "Frontend Dev & UI/UX Designer",
    dob: "",
    address: "",
    joiningDate: "",
  },
  {
    image: nayan,
    name: "Nayan Mohanan",
    designation: "UI/UX Designer",
    dob: "",
    address: "",
    joiningDate: "",
  },
  {
    image: godwin,
    name: "Clement Godwin NT",
    designation: "UI/UX Designer",
    dob: "",
    address: "",
    joiningDate: "",
  },
];
