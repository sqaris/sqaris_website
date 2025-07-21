import React from "react";
import AboutHead from "../elements/AboutHead.jsx";
import Mission from "../elements/Mission.jsx";
import OurStory from "../elements/OurStory.jsx";
import { InfiniteMovingCardsElement } from "../elements/InfinteMovingCardsElement.jsx";

const TeamCards = () => {
  return (
    <section id="about" className="lg:pt-24 bg-black mt-30">
      
      {/* <AboutHead />
      <Mission />
      <OurStory /> */}
      <InfiniteMovingCardsElement/>
    </section>
  );
};

export default TeamCards;
