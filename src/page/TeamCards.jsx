import React from "react";

import { InfiniteMovingCardsElement } from "../components/elements/InfinteMovingCardsElement.jsx";

const TeamCards = () => {
  return (
    <section id="about" className="lg:pt-24  bg-black mt-30">
      {/* <AboutHead />
      <Mission />
      <OurStory /> */}
      <InfiniteMovingCardsElement />
    </section>
  );
};

export default TeamCards;
