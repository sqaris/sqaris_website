import SqarisMissionVision from "../elements/AboutPage.jsx";
import HomeLanding from "../elements/HomeLanding.jsx";
import { InfiniteMovingCardsElement } from "../elements/InfinteMovingCardsElement.jsx";
import LandingBelow from "../elements/LandingBelow.jsx";

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
