import React from "react";
// import logo from '../../../src/assets/Sqaris_logo.svg';
import NavBar from "../components/elements/NavBar";
// import heroText from '../../assets/heroText.svg';
// import bodyText from '../../assets/bodyText.svg';
// import scrollIcon from '../../assets/scrollIcon.svg';
// import bgImage from '../../assets/Hero.png';
import logo from "../assets/Sqaris_logo.svg";
import heroText from "../assets/HeroText.svg";
import bodyText from "../assets/BodyText.svg";
import scrollIcon from "../assets/ScrollIcon.svg";
import bgImage from "../assets/Hero.png";

function HomePage() {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center "
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Logo */}
      <img
        src={logo}
        alt="Logo"
        className="absolute top-[32px] left-[32px] w-[75px] h-auto z-30"
      />

      {/* Navbar positioned inside homepage */}
      <div className="absolute top-[32px] left-1/2 -translate-x-1/2 z-30 w-full max-w-[900px] px-4">
        <NavBar />
      </div>

      {/* Hero content */}
      <div className="absolute left-[110px] top-1/2 -translate-y-1/2 flex flex-col gap-[28px] z-20">
        <img src={heroText} alt="Hero Text" className="w-[550px] h-auto" />
        <img src={bodyText} alt="Body Text" className="w-[530px] h-auto" />
      </div>

      {/* Scroll down */}
      <div className="absolute bottom-[42px] left-1/2 -translate-x-1/2 text-center z-20">
        <h3 className="text-white text-[12px] font-medium tracking-[5px]">
          SCROLL DOWN
        </h3>
        <img
          src={scrollIcon}
          alt="Scroll Icon"
          className="w-[18px] h-[18px] mt-[8px] mx-auto opacity-90"
        />
      </div>
    </div>
  );
}

export default HomePage;
