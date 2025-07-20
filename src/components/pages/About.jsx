import React from "react";
import AboutHead from "../elements/AboutHead.jsx";
import Mission from "../elements/Mission.jsx";
import OurStory from "../elements/OurStory.jsx";
import { InfiniteMovingCardsElement } from "../elements/InfinteMovingCardsElement.jsx";

const About = () => {
  return (
    <section id="about" className="lg:pt-24 bg-black">
      
      {/* <AboutHead />
      <Mission />
      <OurStory /> */}
      <InfiniteMovingCardsElement/>
    </section>
  );
};

export default About;
