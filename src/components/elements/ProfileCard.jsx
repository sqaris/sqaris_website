import React from 'react';
import profileimg from "../../assets/image/profileimg.png"

const CeoProfileCard = () => {
  return (
    <div className='flex flex-col gap-6 items-center justify-center flex-shrink-0 relative'>
      <div
        className="rounded-3xl p-3 flex items-center justify-center h-[569 w-352 flex-shrink-0 relative"
        style={{
          background: 'linear-gradient(105.88deg, rgba(255, 255, 255, 0) 0%, rgba(140, 69, 255, 0.5) 100%)'
        }}
      >
        <div className="w-full h-full rounded-2xl overflow-hidden">
          <img
            src={profileimg}
            alt="CEO"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default CeoProfileCard;
