import HomeLanding from "../elements/HomeLanding.jsx";
import React from "react";
import LandingBelow from "../elements/LandingBelow.jsx";
import { InfiniteMovingCardsElement } from "../elements/InfinteMovingCardsElement.jsx";
import SqarisMissionVision from "../elements/MissionVisioncard.jsx";
import CeoProfileCard from "../elements/ProfileCard.jsx";

const Home = () => {
  return (
    <section id="home">
      <HomeLanding />
      <LandingBelow />
      <SqarisMissionVision/>
      <InfiniteMovingCardsElement/>
    </section>
  );
};

export default Home;
