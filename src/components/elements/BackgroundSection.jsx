import React from 'react';
import backgroundImage from '../../assets/image/background.jpg';

const BackgroundSection = () => {
  return (
    <div
      className="relative h-screen w-full bg-cover bg-center flex flex-col items-center justify-center text-white"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Optional dark overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Content over background */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 pt-20">Welcome to the <br />Future with SQARIS</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Where software meets intelligence, and innovation drives excellence.
        </p>
      </div>
    </div>
  );
};

export default BackgroundSection;
