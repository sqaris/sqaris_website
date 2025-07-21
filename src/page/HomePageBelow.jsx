import React from 'react';
import Card1 from '../assets/Card1.svg';
import Card2 from '../assets/Card2.svg';
import Card3 from '../assets/Card3.svg';
import bgImage from '../assets/Hero.png';
import belowText from '../assets/belowText.svg';
import BgImage from '../assets/sub_hero.png';
function HomePageBelow() {
  return (
    <div
      className="min-h-screen w-full flex flex-col justify-center overflow-hidden items-center px-5 py-10
                 bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${BgImage})` }}
    >
      {/* Card Row */}
      <div className="flex justify-center items-center gap-[100px] mb-[50px]">
        <img src={Card1} alt="Card 1" className="w-[330px] h-auto" />
        <img src={Card2} alt="Card 2" className="w-[330px] h-auto translate-y-0" />
        <img src={Card3} alt="Card 3" className="w-[330px] h-auto" />
      </div>

      {/* Bottom Text */}
      <div className="flex justify-center items-center w-full max-w-[1100px] px-2">
        <img src={belowText} alt="Below Text" className="w-[90%] h-auto" />
      </div>
    </div>
  );
}

export default HomePageBelow;
