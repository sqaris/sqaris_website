import React from 'react';
import sphere from '../../assets/image/holo-sphere.png';
import book from '../../assets/image/ourstory_book.png';
import bgImage from '../../assets/image/aboutbg.png';

const AboutPage = () => {
  return (
    <div
      id="about"
      className="relative w-full min-h-[40rem] bg-cover bg-center mt-20 "
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="flex-col justify-center">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-br to-white from-[#8C45FF] text-center font-bold text-[72px] leading-[72px] relative font-raleway m-10">
          ABOUT US
        </h1>
        <h2 className="text-white text-center font-semibold text-[36px] leading-[36px] font-raleway my-10">
          Who is SQARIS?
        </h2>
        <p className="text-[#898989] text-center font-normal text-[24px] leading-[38.83px] font-raleway max-w-[1320px] mx-auto px-4 my-20">
          We’re not your typical AI company that promises to revolutionize everything and then delivers a chatbot that can’t understand sarcasm. At Sqaris, we build artificial intelligence that’s actually intelligent — intuitive platforms powered by machine learning and large language models that solve real problems, not just impressive demos.
        </p>
      </div>

      <div className="flex flex-col items-center justify-center bg-black my-1">
        {/* Mission */}
        <Card title="Mission" content="Empowering industries with intelligent AI platforms and robotics system through engineering excellence." />

        <div className="h-10" />

        {/* Vision */}
        <Card title="Vision" content="While SQARIS currently operates in select regions, we are actively expanding our reach. Our goal is to deliver intelligent, accessible, and responsible AI experiences to users across the globe." />
      </div>

      <OurStory />
    </div>
  );
};

export default AboutPage;

// ✅ Card Component
function Card({ title, content }) {
  return (
    <div className="relative h-[200px] w-[984px] opacity-70">
      <div className="absolute inset-0 border border-purple-500 rounded-[28px] backdrop-blur-sm">
        <div className="absolute inset-0 overflow-hidden rounded-[28px]">
          <div
            className="absolute w-[200%] h-[150%] -left-[60%] -top-[30%]"
            style={{
              background: 'radial-gradient(35.86% 47.32% at 63.97% 52.15%, rgba(140, 69, 255, 0.3) 40.93%, rgba(0, 0, 0, 0) 100%)',
              mixBlendMode: 'screen',
              filter: 'blur(54.9526px)',
              transform: 'rotate(162.8deg)',
            }}
          />
        </div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center p-6 text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent mb-6">
            {title}
          </h2>
          <p className="text-gray-300 text-sm italic leading-relaxed">{content}</p>
        </div>
      </div>
    </div>
  );
}

function OurStory() {
  return (
    <div className="relative mx-auto mt-10" style={{ width: '1320px', height: '448px' }}>
      <div className="absolute -bottom-16 -right-16 z-30">
        <img
          src={sphere}
          alt="3D Sphere"
          className="w-[260px] h-[260px] object-contain"
          style={{ filter: 'brightness(0.8) contrast(1.2)' }}
        />
      </div>

      <div className="relative h-full w-full rounded-3xl border border-white/10 px-16 py-12 overflow-hidden flex-col items-center justify-center">
        <div
          className="absolute bg-purple-500/10 rounded-full blur-3xl"
          style={{
            width: '1333px',
            height: '1007px',
            left: '-29px',
            top: '-361px',
            filter: 'blur(200px)',
          }}
        ></div>

        <div className="absolute flex flex-col gap-6 items-center" style={{ width: '1192px', left: '64px', top: '38px' }}>
          <div className="flex flex-col gap-1 items-center w-36">
            <img src={book} alt="Our Story Icon" />
            <div className="text-white text-center font-bold text-3xl font-raleway">Our story</div>
          </div>

          <div
            className="text-center font-normal font-raleway"
            style={{
              color: '#898989',
              fontSize: '24px',
              lineHeight: '38.83px',
            }}
          >
            Established in 2024 by the innovative engineer Gokul Gopalan, SQARIS is transforming the software landscape with AI and ML.
            <br />
            What started as a small, innovation-focused team has evolved into a powerful entity developing intelligent, scalable solutions —
            <br />
            ranging from social care applications to LLM-driven platforms. At SQARIS, we combine precise engineering with ethical AI to create
            <br />
            technology that is smarter, more interconnected, and centered around human needs.
            <br />
            Become a part of our mission to shape an intelligent future.
          </div>
        </div>
      </div>
    </div>
  );
}
