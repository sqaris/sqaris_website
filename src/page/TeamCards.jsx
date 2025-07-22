import React from "react";

import { InfiniteMovingCardsElement } from "../components/elements/InfinteMovingCardsElement.jsx";

const TeamCards = () => {
  return (
    <section id="about" className="  bg-black ">
      {/* <AboutHead />
      <Mission />
      <OurStory /> */}
      <InfiniteMovingCardsElement />
    </section>
  );
};

export default TeamCards;
