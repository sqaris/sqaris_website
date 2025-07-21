import React from "react";
import ProjectElement from "../components/elements/ProjectElement";
import ServicesElement from "../components/elements/ServicesElement";
import services from "../assets/image/services/services.png";

const Services = () => {
  return (
    <>
      <div
        className="bg-gradient-to-br overflow-hidden from-[#100F13] to-[#241a3d] text-white bg-cover "
        style={{
          backgroundImage: `url(${services})`,
        }}
      >
        {/* You can add Font Awesome if needed, but the icons here are custom SVGs */}
        <style>{`
        body {
          background-image:
            linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
          background-size: 50px 50px;
        }
       `}</style>
        <main className="flex justify-center items-center min-h-screen p-4 sm:p-8 overflow-x-hidden">
          <ServicesElement />
        </main>
      </div>
      <div className="bg-black">
        <style>{`
        body {
          background-image:
            linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
          background-size: 50px 50px;
          background-color: black;
        }
       `}</style>
        <main className="flex justify-center items-center min-h-screen p-4 sm:p-8">
          <ProjectElement />
        </main>
      </div>
    </>
  );
};

export default Services;
